"""Syntezuje pojedynczą, dowolną frazę spoza mowa.md tym samym głosem co
narracja slajdów — np. frazy UI jak "okej, to na czym skończyliśmy?" użyte
przy wznowieniu autopilota (src/Deck.jsx), które nie są przypisane do numeru
slajdu i nie wchodzą do src/narration.json.

Użycie:
    uv run python generate_phrase.py "Okej, to na czym skończyliśmy?" \
        ../../public/audio/resume.mp3
"""

import argparse
import shutil
import subprocess
import sys
from pathlib import Path

from generate import LANG, SAMPLE, build_tts


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("text")
    ap.add_argument("out", type=Path)
    ap.add_argument("--sample", type=Path, default=SAMPLE)
    ap.add_argument("--device", default="cpu", choices=["cpu", "mps", "cuda"])
    args = ap.parse_args()

    import numpy as np
    import soundfile as sf

    tts = build_tts(args.device)
    rate = tts.synthesizer.output_sample_rate
    wav = np.asarray(
        tts.tts(text=args.text, speaker_wav=str(args.sample), language=LANG, split_sentences=True),
        dtype=np.float32,
    )
    peak = float(abs(wav).max()) or 1.0

    args.out.parent.mkdir(parents=True, exist_ok=True)
    wav_path = args.out.with_suffix(".wav")
    sf.write(wav_path, wav / peak * 0.95, rate)

    if args.out.suffix == ".mp3" and shutil.which("ffmpeg"):
        subprocess.run(
            ["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav_path),
             "-ac", "1", "-b:a", "96k", str(args.out)],
            check=True,
        )
        wav_path.unlink()
        print(f"-> {args.out}  ({len(wav) / rate:.1f}s)")
    else:
        print(f"-> {wav_path}  ({len(wav) / rate:.1f}s)")

    return 0


if __name__ == "__main__":
    sys.exit(main())
