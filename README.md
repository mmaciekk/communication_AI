# Komunikacja z AI

Prezentacja (React + Vite) o tym, jak ludzie rozmawiają z AI i jak AI rozmawia
z ludźmi: uprzejmość i zwierzanie się wobec chatbotów, sykofancja i język
projektowany pod zaangażowanie, confirmation bias. Lista tematów i źródeł
(w tym researchu do wątków, które ostatecznie wypadły z decka):
[`presentation_plan.md`](presentation_plan.md).

Slajdy to dane w [`src/slides.js`](src/slides.js), renderowane przez layouty w
`src/components/layouts`. Tekst do mówienia (skrypt prowadzącego) jest
oddzielony od treści slajdów i mieszka w [`mowa.md`](mowa.md).

## Narracja głosowa

Do decka można wygenerować offline narrację syntetyzowanym, sklonowanym
głosem (XTTS-v2, lokalnie, bez API) na podstawie `mowa.md`. Szczegóły:
[`tools/voice/README.md`](tools/voice/README.md).

## Rozwój lokalny

```bash
npm install
npm run dev       # dev server na porcie 2137
npm run build     # build produkcyjny do dist/
npm run preview   # podgląd builda
npm run narrate    # regeneracja narracji głosowej (patrz tools/voice)
```

## Sterowanie w prezentacji

- strzałki / spacja — nawigacja między slajdami
- `N` lub ikona głośnika — odtwórz narrację bieżącego slajdu
