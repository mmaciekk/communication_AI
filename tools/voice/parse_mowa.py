"""Wyciąga z mowa.md tekst do przeczytania, slajd po slajdzie.

Sekcje w mowa.md mają postać `## NN · Tytuł ⏱ M:SS (M:SS)` i odpowiadają
pozycyjnie slajdom z src/slides.js (NN == index + 1). Wszystko, co jest
didaskaliami dla prelegenta — nota „Na ekranie", cue „Przejście", dyrektywy
w nawiasach kwadratowych — z tekstu mówionego wypada.
"""

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MOWA = ROOT / "mowa.md"

# `## 07 · Pewnie to znasz ⏱ 0:50 (3:30)` — sekcje bez numeru (np. „Zapas")
# nie łapią się w ten wzorzec i są pomijane.
HEADING = re.compile(r"^##\s+(\d{2})\s+·\s+(.+?)\s+⏱\s*(.*)$")
# Dyrektywa zajmuje całą linię. Kanonicznie w gwiazdkach — `*[pauza 2s]*` —
# ale podkreślenia (`_[pauza]_`) łapiemy też, bo markdown renderuje je tak samo
# i łatwo o nie pomyłkowo w skrypcie. Legenda: sekcja „Notacja" w mowa.md.
DIRECTIVE = re.compile(r"^(?:\*\[(.+)\]\*|_\[(.+)\]_)$")
INLINE_ASIDE = re.compile(r"\*\((.+?)\)\*|_\((.+?)\)_")  # *(bez GIF-a — świadomie)*
TRANSITION = re.compile(r"^\*\*Przejście:\*\*\s*")

# `pauza`, `pauza 2s`, `pauza — 2 sekundy` → cisza; pierwsza liczba to długość.
PAUSE_HINT = re.compile(r"\d+(?:[.,]\d+)?")

PAUSE = "⟨PAUSE⟩"
PAUSE_MARKER = re.compile(r"^⟨PAUSE(?::(\d+(?:\.\d+)?))?⟩$")


def is_pause(block: str) -> bool:
    return PAUSE_MARKER.match(block) is not None


def pause_seconds(block: str, default: float) -> float:
    """Długość ciszy dla markera; `default` gdy w dyrektywie nie było liczby."""
    m = PAUSE_MARKER.match(block)
    if not m or not m.group(1):
        return default
    return float(m.group(1))


def _pause_marker(directive: str) -> str | None:
    """Zamienia treść dyrektywy na marker ciszy albo None, gdy to nie pauza."""
    if "pauz" not in directive.lower():
        return None  # np. „przeczytaj powoli" — instrukcja tylko dla człowieka
    m = PAUSE_HINT.search(directive)
    if not m:
        return PAUSE  # bez liczby → domyślna długość z generate.py
    return f"⟨PAUSE:{m.group(0).replace(',', '.')}⟩"

QUOTES = {"„": '"', "”": '"', "“": '"', "’": "'", "‘": "'"}


def _strip_markdown(line: str) -> str:
    line = INLINE_ASIDE.sub("", line)
    line = re.sub(r"\*\*(.+?)\*\*", r"\1", line)
    line = re.sub(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)", r"\1", line)
    line = re.sub(r"(?<![\w_])_(?!_)(.+?)(?<!_)_(?![\w_])", r"\1", line)
    line = re.sub(r"\[(.+?)\]\(.+?\)", r"\1", line)  # linki → sam tekst
    for src, dst in QUOTES.items():
        line = line.replace(src, dst)
    return re.sub(r"\s{2,}", " ", line).strip()


def _clean_block(lines: list[str], include_transitions: bool) -> str:
    """Zamienia surowe linie sekcji na tekst z akapitami rozdzielonymi \\n\\n."""
    paragraphs: list[str] = []
    buffer: list[str] = []

    def flush() -> None:
        if buffer:
            paragraphs.append(" ".join(buffer))
            buffer.clear()

    for raw in lines:
        line = raw.strip()

        if not line or line == "---":
            flush()
            continue

        if line.startswith(">"):  # „Na ekranie: …" — nota reżyserska
            flush()
            continue

        directive = DIRECTIVE.match(line)
        if directive:
            flush()
            # „pauza" ma być słyszalna; „przeczytaj powoli" to instrukcja dla
            # człowieka i nic z niej nie zostaje.
            marker = _pause_marker(directive.group(1) or directive.group(2))
            if marker:
                paragraphs.append(marker)
            continue

        if TRANSITION.match(line):
            flush()
            if include_transitions:
                text = _strip_markdown(TRANSITION.sub("", line))
                if text:
                    paragraphs.append(text)
            continue

        text = _strip_markdown(line)
        if text:
            buffer.append(text)

    flush()

    # Pauza na początku albo na końcu slajdu nic nie wnosi — audio i tak się
    # tam urywa.
    while paragraphs and is_pause(paragraphs[0]):
        paragraphs.pop(0)
    while paragraphs and is_pause(paragraphs[-1]):
        paragraphs.pop()

    return "\n\n".join(paragraphs)


def parse(path: Path = MOWA, include_transitions: bool = False) -> list[dict]:
    lines = path.read_text(encoding="utf-8").splitlines()

    sections: list[dict] = []
    current: dict | None = None
    body: list[str] = []

    for line in lines:
        if line.startswith("## "):
            if current:
                current["text"] = _clean_block(body, include_transitions)
                sections.append(current)
                current = None
            body = []

            m = HEADING.match(line)
            if m:
                current = {
                    "num": int(m.group(1)),
                    "title": m.group(2).strip(),
                    "timing": m.group(3).strip(),
                }
            continue

        if current:
            body.append(line)

    if current:
        current["text"] = _clean_block(body, include_transitions)
        sections.append(current)

    return [s for s in sections if s["text"]]


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--include-transitions", action="store_true",
                    help="czytaj też zdania z „Przejście:”")
    ap.add_argument("--json", action="store_true", help="wypisz JSON zamiast podglądu")
    args = ap.parse_args()

    sections = parse(include_transitions=args.include_transitions)

    if args.json:
        print(json.dumps(sections, ensure_ascii=False, indent=2))
        return 0

    for s in sections:
        words = len(s["text"].split())
        print(f"\n\033[1m── {s['num']:02d} · {s['title']} ⏱ {s['timing']} "
              f"({words} słów)\033[0m")
        print(s["text"])

    total = sum(len(s["text"].split()) for s in sections)
    print(f"\n\033[1m{len(sections)} sekcji, {total} słów "
          f"(~{total / 140:.1f} min przy 140 sł./min)\033[0m")
    return 0


if __name__ == "__main__":
    sys.exit(main())
