"""Generuje narrację slajdów głosem z próbki, lokalnie, przez XTTS-v2.

Wejście:  mowa.md + sample/glos.wav (1–3 min nagrania)
Wyjście:  public/audio/NN.mp3 + src/narration.json

Regeneruje tylko te slajdy, których tekst faktycznie się zmienił (hash w
manifeście), więc poprawka w jednym akapicie nie kosztuje kolejnych 30 minut.
"""

import argparse
import hashlib
import json
import os
import shutil
import subprocess
import sys
import time
from pathlib import Path

# XTTS-v2 jest na licencji CPML — bez tego modelka pyta interaktywnie o zgodę
# i skrypt wisi.
os.environ.setdefault("COQUI_TOS_AGREED", "1")

from parse_mowa import is_pause, parse, pause_seconds  # noqa: E402

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
SAMPLE = HERE / "sample" / "glos.wav"
AUDIO_DIR = ROOT / "public" / "audio"
MANIFEST = ROOT / "src" / "narration.json"

MODEL = "tts_models/multilingual/multi-dataset/xtts_v2"
LANG = "pl"

GAP_PARAGRAPH = 0.35  # sekundy ciszy między akapitami
GAP_PAUSE = 1.4  # cisza w miejscu *[pauza]* — *[pauza 2s]* nadpisuje tę wartość
GAP_TAIL = 0.25  # oddech na końcu slajdu


def text_hash(text: str) -> str:
    return hashlib.sha1(text.encode("utf-8")).hexdigest()[:12]


def load_manifest() -> dict:
    if MANIFEST.exists():
        try:
            return json.loads(MANIFEST.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            pass
    return {}


def build_tts(device: str):
    import torch
    from TTS.api import TTS

    # PyTorch ≥2.6 ładuje checkpointy z weights_only=True; konfigi XTTS trzeba
    # jawnie dopuścić. Starsze wersje nie mają tego API — stąd try.
    try:
        from TTS.config.shared_configs import BaseDatasetConfig
        from TTS.tts.configs.xtts_config import XttsConfig
        from TTS.tts.models.xtts import XttsArgs, XttsAudioConfig

        torch.serialization.add_safe_globals(
            [XttsConfig, XttsAudioConfig, BaseDatasetConfig, XttsArgs]
        )
    except (ImportError, AttributeError):
        pass

    print(f"Ładuję {MODEL} na {device}…", flush=True)
    return TTS(MODEL).to(device)


def synth_slide(tts, text: str, sample: Path):
    """Syntezuje jeden slajd, sklejając akapity z kontrolowanymi przerwami."""
    import numpy as np

    rate = tts.synthesizer.output_sample_rate
    chunks: list[np.ndarray] = []

    def silence(seconds: float) -> None:
        chunks.append(np.zeros(int(rate * seconds), dtype=np.float32))

    blocks = [b.strip() for b in text.split("\n\n") if b.strip()]

    for i, block in enumerate(blocks):
        if is_pause(block):
            silence(pause_seconds(block, GAP_PAUSE))
            continue

        if i > 0 and chunks and not np.all(chunks[-1] == 0):
            silence(GAP_PARAGRAPH)

        wav = tts.tts(
            text=block,
            speaker_wav=str(sample),
            language=LANG,
            split_sentences=True,  # XTTS ma limit ~250 tokenów na przebieg
        )
        chunks.append(np.asarray(wav, dtype=np.float32))

    silence(GAP_TAIL)
    return np.concatenate(chunks) if chunks else np.zeros(1, dtype=np.float32)


def write_audio(wav, rate: int, num: int) -> tuple[str, float]:
    """Zapisuje WAV i — jeśli jest ffmpeg — konwertuje na MP3."""
    import soundfile as sf

    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    stem = f"{num:02d}"
    wav_path = AUDIO_DIR / f"{stem}.wav"
    duration = len(wav) / rate

    peak = float(abs(wav).max()) or 1.0
    sf.write(wav_path, (wav / peak * 0.95), rate)

    if shutil.which("ffmpeg"):
        mp3_path = AUDIO_DIR / f"{stem}.mp3"
        subprocess.run(
            ["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav_path),
             "-ac", "1", "-b:a", "96k", str(mp3_path)],
            check=True,
        )
        wav_path.unlink()
        return f"audio/{stem}.mp3", duration

    print(f"  ! brak ffmpeg — zostaje {stem}.wav (`brew install ffmpeg`)")
    return f"audio/{stem}.wav", duration


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--only", help="numery slajdów po przecinku, np. 05,12")
    ap.add_argument("--force", action="store_true", help="regeneruj mimo zgodnego hasha")
    ap.add_argument("--device", default="cpu", choices=["cpu", "mps", "cuda"],
                    help="mps bywa dla XTTS zawodne — domyślnie cpu")
    ap.add_argument("--sample", type=Path, default=SAMPLE, help="próbka głosu (wav)")
    ap.add_argument("--include-transitions", action="store_true")
    args = ap.parse_args()

    if not args.sample.exists():
        print(f"Brak próbki głosu: {args.sample}\n"
              f"Nagraj 1–3 min mowy (mono, ≥22 kHz) i zapisz pod tą ścieżką. "
              f"Szczegóły w tools/voice/README.md", file=sys.stderr)
        return 1

    sections = parse(include_transitions=args.include_transitions)
    wanted = None
    if args.only:
        wanted = {int(n) for n in args.only.replace(" ", "").split(",") if n}

    manifest = load_manifest()
    todo = []
    for s in sections:
        if wanted is not None and s["num"] not in wanted:
            continue
        key = str(s["num"])
        current = manifest.get(key)
        fresh = current and current.get("hash") == text_hash(s["text"])
        target = AUDIO_DIR / Path(current["src"]).name if current else None
        if fresh and not args.force and target and target.exists():
            continue
        todo.append(s)

    if not todo:
        print("Wszystko aktualne — nic do wygenerowania.")
        MANIFEST.write_text(
            json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        return 0

    words = sum(len(s["text"].split()) for s in todo)
    print(f"Do wygenerowania: {len(todo)} slajdów, {words} słów.")

    tts = build_tts(args.device)
    rate = tts.synthesizer.output_sample_rate

    for s in todo:
        started = time.time()
        print(f"\n[{s['num']:02d}] {s['title']} — {len(s['text'].split())} słów", flush=True)
        wav = synth_slide(tts, s["text"], args.sample)
        src, duration = write_audio(wav, rate, s["num"])
        manifest[str(s["num"])] = {
            "src": src,
            "title": s["title"],
            "duration": round(duration, 2),
            "hash": text_hash(s["text"]),
        }
        print(f"  → {src}  {duration:.1f}s  (synteza {time.time() - started:.0f}s)")

        # Zapis po każdym slajdzie: przerwany przebieg nie traci postępu.
        MANIFEST.write_text(
            json.dumps(
                {k: manifest[k] for k in sorted(manifest, key=int)},
                ensure_ascii=False,
                indent=2,
            )
            + "\n",
            encoding="utf-8",
        )

    total = sum(v["duration"] for v in manifest.values())
    print(f"\nGotowe. Cała narracja: {int(total // 60)}:{int(total % 60):02d}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
