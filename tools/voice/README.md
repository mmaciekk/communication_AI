# Narracja slajdów twoim głosem

Generuje offline pliki audio dla każdego slajdu, czytając tekst z `mowa.md`
głosem sklonowanym z twojej próbki. Model: **XTTS-v2** (Coqui), lokalnie,
bez żadnego API i bez klucza.

> Licencja XTTS-v2 (CPML) dopuszcza użycie niekomercyjne. Do prezentacji
> edukacyjnej/wewnętrznej OK; przy użyciu komercyjnym trzeba podmienić sam
> generator — reszta (manifest, komponent w decku) zostaje bez zmian.

## 1. Nagraj próbkę

Zapisz **1–3 minuty** swojej mowy jako `tools/voice/sample/glos.wav`:

- mono, ≥22 kHz, WAV;
- cichy pokój, bez pogłosu, bez muzyki w tle, bez kompresora;
- ten sam mikrofon, którego zwykle używasz;
- najlepiej czytając kilka akapitów z `mowa.md` — wtedy fonetyka, tempo
  i rejestr zgadzają się z tym, co model będzie potem generował;
- utnij ciszę na początku i na końcu.

Dłuższa próbka nie zawsze znaczy lepiej — czystość nagrania waży więcej niż
długość. Jeśli generowanie idzie wolno, spróbuj próbki 30–60 s.

## 2. Zależności

```bash
brew install ffmpeg          # do konwersji na MP3; bez tego zostają WAV-y
cd tools/voice
uv sync                      # uv pobierze Pythona 3.11 i coqui-tts
```

## 3. Sprawdź, co pójdzie do syntezy

```bash
uv run python parse_mowa.py           # podgląd tekstu slajd po slajdzie
uv run python parse_mowa.py --json    # to samo jako JSON
```

Z `mowa.md` wypadają didaskalia: nota `> Na ekranie:`, cue `**Przejście:**`
(chyba że dodasz `--include-transitions`) i dyrektywy `*[...]*`. Te zawierające
słowo „pauza" zostają jako marker `⟨PAUSE⟩` i zamieniają się w ciszę.

Pełna legenda notacji jest w `mowa.md` w sekcji **Notacja** — trzymaj obie
strony zgodne, gdy dołożysz nowy rodzaj dyrektywy. W skrócie:

| W `mowa.md`             | Efekt w narracji                     |
| ----------------------- | ------------------------------------ |
| `*[przeczytaj powoli]*` | nic — instrukcja tylko dla człowieka |
| `*[pauza]*`             | cisza `GAP_PAUSE` (domyślnie 1,4 s)  |
| `*[pauza 2s]*`          | cisza 2 s (liczba nadpisuje domyślną)|
| `*(uwaga)*`             | wycięty nawias, reszta linii zostaje |

Dyrektywa musi zajmować całą linię. Forma z podkreśleniami (`_[pauza]_`) też
działa, ale kanoniczne są gwiazdki — markdown renderuje jedno i drugie tak samo,
więc parser przyjmuje obie, żeby literówka nie wylądowała w nagraniu.

## 4. Wygeneruj

```bash
uv run python generate.py --only 05   # najpierw jeden krótki slajd na próbę
uv run python generate.py             # całość (albo: npm run narrate)
```

Na Apple Silicon liczy się na CPU (`--device mps` bywa dla XTTS zawodne),
więc całość to jednorazowo ok. 20–45 minut.

Przydatne flagi:

| Flaga | Do czego |
|---|---|
| `--only 07,12` | tylko wybrane slajdy |
| `--force` | regeneruj mimo niezmienionego tekstu |
| `--sample ścieżka.wav` | inna próbka głosu |
| `--device mps\|cuda` | akceleracja, jeśli działa |

Skrypt liczy hash tekstu każdego slajdu i trzyma go w manifeście — kolejne
uruchomienie regeneruje **tylko te slajdy, w których zmieniłeś tekst**.
Manifest zapisuje się po każdym slajdzie, więc przerwany przebieg nie traci
postępu.

## Co powstaje

- `public/audio/NN.mp3` — jeden plik na slajd (numer = numer slajdu, ten sam
  co w `#/7` w URL-u i w `## NN` w `mowa.md`);
- `src/narration.json` — manifest (`src`, `duration`, `hash`) importowany przez
  `src/components/Narration.jsx`.

W decku pojawia się ikona głośnika w lewym dolnym rogu: klik albo klawisz `N`.
Przejście na kolejny slajd zawsze ucina dźwięk.

Warto porównać `duration` z manifestu z `⏱` w `mowa.md` — rozjazd pokazuje,
gdzie skrypt nie mieści się w zakładanym czasie.

## Uwagi

- `sample/` i `.venv/` nie powinny trafiać do repozytorium (projekt nie ma
  jeszcze `.gitignore` — dopisz je, gdy założysz repo).
- Jeśli nie ma `ffmpeg`, skrypt zostawia `.wav` i zapisze taką ścieżkę
  w manifeście — deck zadziała, tylko pliki będą kilka razy większe.
