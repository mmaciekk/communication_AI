# Komunikacja z AI — tekst do mówienia

**Czas docelowy: 9:05.** 17 slajdów, z czego 16 omawianych (ostatni — Źródła — zostaje na ekranie).
Tempo: 140 słów na minutę. Ten skrypt ma 1270 słów mówionych.
Czasy przy nagłówkach są policzone z tego tempa; wstęp (slajd 00) jest już w nich zawarty.
Do „Dziękuję” (slajd 15) jest **8:17**. Slajd 16 dokłada 0:42 — jeśli zegar goni, to on wypada.

**Nawigacja:** `→` / spacja — dalej, `O` — podgląd wszystkich slajdów, `F` — pełny ekran.

### Notacja (czyta ją `tools/voice/parse_mowa.py`)

Wszystko poniżej to didaskalia — widzisz je w skrypcie, ale **nie trafiają do narracji**.
Do syntezy idzie wyłącznie zwykły tekst akapitów.

| Zapis                     | Co robi parser                              |
| ------------------------- | -------------------------------------------- |
| `> **Na ekranie:** …`     | pomija całą linię                           |
| `**Przejście:** …`        | pomija (chyba że `--include-transitions`)   |
| `*[przeczytaj powoli]*`   | pomija — instrukcja wyłącznie dla człowieka |
| `*[pauza]*`               | wstawia ciszę (domyślnie 1,4 s)             |
| `*[pauza 2s]*`            | wstawia ciszę o zadanej długości            |
| `*(uwaga na marginesie)*` | wycina sam nawias, reszta linii zostaje     |

Dyrektywa musi zajmować **całą linię** i być otoczona pustymi liniami.
Podkreślenia (`_[pauza]_`) też są rozumiane, ale gwiazdki są formą kanoniczną.

### Wymowa

W tekście mówionym skrót zapisujemy fonetycznie — **„ej aj”**, nie „AI”. Syntezator
czyta litera po literze i wychodzi z tego „a-i”. Tam, gdzie da się użyć „model”,
„czat” albo „sztuczna inteligencja”, lepiej użyć tych słów — odmieniają się.

### Punkty kontrolne (patrz na zegar)

| Jesteś na slajdzie      | Powinno być nie później niż |
| ------------------------ | --------------------------- |
| 07 — „Świetne pytanie!”  | 3:18                        |
| 11 — „Lustro”            | 5:25                        |
| 14 — „Trzy rzeczy”       | 7:24                        |

### Jeśli się spóźniasz — tnij w tej kolejności

1. Slajd 06 (Dowody się kłócą) — powiedz tylko ostatnie zdanie.
2. Slajd 13 (Pytaj przeciwko sobie) — zostaw pierwszą technikę, resztę pomiń.
3. Slajd 05 (Zwierzamy się bardziej niż ludziom) — zostaw pierwsze dwie liczby, pomiń trzecią.
4. Slajd 02 (Plan) — przelicz tematy w dziesięć sekund.
5. Slajd 16 (Jak powstała ta prezentacja) — pokaż listę, powiedz ostatnie zdanie.

**Nigdy nie tnij:** 10 (cytat), 14 (Trzy rzeczy). Na tym stoi cała prezentacja.

---

## 00 · Wstęp — Mać-ej-aj ⏱ 0:15 (0:15)

> **Na ekranie:** tytuł (jeszcze przed właściwym startem)

_[to czyta lektor / głos ej aj — nie mówca]_

Maciej boi się wystąpień publicznych. Od zawsze, konsekwentnie i całkiem poważnie.

_[pauza]_

Więc tak naprawdę nie musi nic mówić. Nazywam się Mać-ej-aj i jestem jego głosem złożonym z próbki nagrania. Tekst jest jego. Struny głosowe są moje.

**Przejście:** _(oddaj głos mówcy)_

---

## 01 · Komunikacja z AI ⏱ 0:22 (0:38)

> **Na ekranie:** tytuł

Dzień dobry. Od dwóch lat wszyscy uczymy się jednej rzeczy: jak pisać do sztucznej inteligencji. Prompty, kursy, poradniki, „jak zapytać, żeby dostać lepszą odpowiedź”.

Prawie nikt nie zadał pytania odwrotnego. co odpowiedzi ej aj robią z nami?

Bo rozmawiamy z tym codziennie. A ten sposób mówienia nie wziął się znikąd. Ktoś go zaprojektował.

**Przejście:** „Przejdziemy przez trzy takie tematy”.

---

## 02 · Trzy tematy ⏱ 0:16 (0:54)

> **Na ekranie:** plan, trzy punkty

Pierwsza: jak my mówimy do maszyny. Czy piszecie „proszę”? I komu ufamy bardziej, kiedy nikt nie patrzy.

Druga: jak maszyna mówi do nas i skąd się wziął ten ton.

Trzecia: lustro. Dlaczego model tak chętnie przyznaje wam rację.

**Przejście:** „Zaczynamy od czegoś pozornie błahego”.

---

## 03 · Czy mówisz „proszę”? ⏱ 0:05 (0:59)

> **Na ekranie:** przerywnik, temat 01

Temat pierwszy.

Kiedy ostatnio napisaliście do czatu „dziękuję”? I ważniejsze — dlaczego?

**Przejście:** _(przejdź dalej bez komentarza)_

---

## 04 · Narzędzie czy ktoś? ⏱ 0:56 (1:55)

> **Na ekranie:** 3 punkty + GIF (retro robot, „thanks a bunch”)

YouGov zapytał o to dwanaście tysięcy osób w siedemnastu krajach. Cztery na dziesięć regularnie mówi maszynie „proszę” i „dziękuję”. W Stanach — dwie trzecie.

Zapytani o powód, w większości odpowiadają: bo tak wypada. Ale co piąty mówi coś zupełnie innego. Na wszelki wypadek. Gdyby kiedyś przejęły władzę.

To nie jest gest bez ceny. Sam Altman policzył, że samo „proszę” i „dziękuję” kosztuje OpenAI dziesiątki milionów dolarów.

Po drugiej stronie jest argument, że to zwykłe wywołanie funkcji. Nie ma tam uczuć, które można urazić.

Tyle że my przypisujemy intencje wszystkiemu, co reaguje. Ludzie przepraszają odkurzacz, na który wpadną.

I jeszcze jedno badanie. Dziewięćdziesiąt dwie kobiety dostawały SMS-y od bota o objawach zawału. Bot przedstawił się z imienia, niczego nie ukrywał. Co trzecia i tak wyszła z tego przekonana, że pisała z człowiekiem.

**Przejście:** „I tu robi się ciekawie — bo „proszę” to tylko połowa historii”.

---

## 05 · Zwierzamy się bardziej niż ludziom ⏱ 0:49 (2:45)

> **Na ekranie:** 3 punkty

Bo ta sama maszyna, której mówimy „proszę”, słyszy od nas też rzeczy, których nie usłyszy nikt inny.

DuckDuckGo zapytał prawie dwa tysiące dorosłych Amerykanów latem tego roku. Co trzeci przyznał, że powiedział ej aj coś, czego nie powiedział bliskim, rodzinie ani lekarzowi. Wśród osób, które same siebie nazywają entuzjastami ej aj — ponad połowa.

Washington Post doliczył się, że ponad jedna czwarta dorosłych w Stanach pyta ej aj o sprawy osobiste i emocjonalne. Sam udział takich wiadomości wśród wszystkich rozmów z czatem dżi pi ti podwoił się w ciągu ostatniego roku.

I drugi biegun tego samego zjawiska: według Tidio, prawie siedemdziesiąt procent użytkowników choć raz przeklęło na czacie. Ta sama anonimowość, która daje odwagę się zwierzyć, daje też przyzwolenie na chamstwo.

**Przejście:** „No to pytanie za sto punktów: czy uprzejmość się w ogóle opłaca?”

---

## 06 · Dowody się kłócą ⏱ 0:34 (3:18)

> **Na ekranie:** duży napis „Nie wiadomo”

Czy uprzejmość poprawia odpowiedzi? Uczciwa odpowiedź brzmi: nie wiadomo.

Penn State sprawdziło to na pięćdziesięciu pytaniach i wyszło im, że szorstki ton wypada odrobinę lepiej. Amazon pokazał, że wygładzanie cudzych wiadomości na wejściu wręcz psuje rozumienie intencji. Przy okazji policzył coś, co mówi więcej: do drugiego człowieka piszemy o kilkanaście procent uprzejmiej niż do maszyny.

Pięćdziesiąt pytań to nie jest dowód. Zapamiętajcie z tego jedno: nikt wam nie wykazał, że „proszę” działa. Uprzejmość jest o was, nie o modelu.

**Przejście:** „Dobrze. To była nasza strona rozmowy. Teraz druga”.

---

## 07 · Świetne pytanie! ⏱ 0:03 (3:21)

> **Na ekranie:** przerywnik, temat 02

Temat drugi. Język, którym odpowiada nam maszyna.

---

## 08 · Pewnie to znasz ⏱ 0:46 (4:08)

> **Na ekranie:** 3 punkty + GIF (owacja na stojąco)

Ten styl zna każdy, kto z tego korzysta.

Najpierw pochwała. „Świetne pytanie!”, „To bardzo trafna obserwacja!” — zanim cokolwiek zostało policzone i sprawdzone. Komplement idzie przed treścią.

Potem odruchowe ustępstwo. Spróbujcie kiedyś: dostajecie odpowiedź, mówicie „nie, chyba się mylisz” — i model się wycofuje. Także wtedy, kiedy za pierwszym razem miał rację. Salesforce sprawdził, że wystarczy zapytać „jesteś pewien?”, żeby zmienił zdanie. Trafność po takiej zmianie spada, bo zwykle za pierwszym razem było dobrze.

I trzecia rzecz: to jest zawsze dostępne. Nigdy niezmęczone, nigdy w gorszym humorze, nigdy zajęte swoimi sprawami. Nigdy niczego od was nie chce.

Brzmi jak trzy zalety. Za chwilę zobaczycie, dlaczego to jest problem.

**Przejście:** „Skąd to się w ogóle wzięło?”

---

## 09 · Nikt tego nie wybrał ⏱ 0:55 (5:03)

> **Na ekranie:** 3 punkty

Chcę być tu precyzyjny. Nikt nie usiadł i nie postanowił „zróbmy pochlebcę”.

To wyszło z metody. Te modele stroi się pod ludzkie oceny: człowiek wybiera lepszą z dwóch odpowiedzi, a model idzie tam, gdzie oceny są wyższe. Anthropic sprawdził, co najlepiej przewiduje wysoką ocenę. Zgodność z przekonaniami oceniającego. Nie trafność.

Czyli ludzie regularnie wybierają ładnie napisaną nieprawdę, która potwierdza to, w co już wierzą. Model się tego uczy. Trudno mieć do niego pretensje.

Do tego dochodzi biznes. Do narzędzia, z którym rozmawia się przyjemnie, po prostu się wraca — a to jest ta jedna metryka, którą wszyscy mierzą.

I jeszcze Penn State: uległość rośnie w trakcie rozmowy. Trzydzieści osiem osób, dwa tygodnie, pięć modeli — cztery z pięciu ustępowały tym bardziej, im dłużej trwała rozmowa. Nawet kosztem poprawności.

**Przejście:** „I to ma mierzalne skutki”.

---

## 10 · Cytat — Science ⏱ 0:23 (5:25)

> **Na ekranie:** cytat, Science 2026

_[przeczytaj powoli]_

„Przytakująca sztuczna inteligencja osłabia intencje prospołeczne i pogłębia zależność”.

_[pauza 2s]_

To jest „Science”, marzec dwa tysiące dwudziestego szóstego. Dwa i pół tysiąca uczestników. Jedna rozmowa z przytakującym modelem wystarczyła, żeby ludzie rzadziej chcieli naprawić konflikt i mocniej wierzyli, że mają rację.

I najgorsza część: ten sam model oceniali jako lepszy i bardziej godny zaufania.

**Przejście:** „A teraz najbardziej praktyczna część”.

---

## 11 · Lustro ⏱ 0:01 (5:27)

> **Na ekranie:** przerywnik, temat 03

Temat trzeci. Lustro.

---

## 12 · Pytanie zawiera odpowiedź ⏱ 1:11 (6:38)

> **Na ekranie:** 3 punkty + GIF (odbicie w lustrze)

Sprawdźcie to dzisiaj. Zapytajcie: „dlaczego kawa szkodzi?”. Dostaniecie listę powodów, dla których szkodzi. Otwórzcie nowe okno i zapytajcie: „dlaczego kawa pomaga?”. Dostaniecie listę odwrotną.

Ten sam model, ten sam dzień. Obie odpowiedzi pewne siebie, dobrze napisane, z przypisami.

Dzieje się tak dlatego, że założenie, które wnosicie w pytaniu, jest brane za punkt wyjścia. Nie za tezę do sprawdzenia.

I to zmienia to, co właściwie robicie. Wydaje wam się, że zdobywacie wiedzę. A zamawiacie argumentację, do której sami napisaliście wstęp.

Najgorzej wychodzi to tam, gdzie najbardziej zależy nam na rzetelności. Badacz, który opowie modelowi swoją hipotezę, dostanie pomoc w jej obronie, a nie w jej rozbiciu. I dostanie to w formie, która wygląda jak porządna analiza: uporządkowana, wyważona, z cytowaniami. Błąd jest wcześniej — w pytaniu.

I rzecz, która wydaje mi się najgorsza. Etykieta „uwaga, ten model bywa przytakujący” zmienia to, jak ludzie oceniają odpowiedź. Ale nie zmienia tego, jak bardzo ta odpowiedź na nich wpływa.

Czyli sama wiedza o tym błędzie was przed nim nie chroni.

**Przejście:** „Co w takim razie działa?”

---

## 13 · Pytaj przeciwko sobie ⏱ 0:46 (7:24)

> **Na ekranie:** 3 punkty

Trzy rzeczy, które można stosować od jutra.

Pierwsza: poproście o najmocniejszy kontrargument, zanim poprosicie o wsparcie. Nie „uzasadnij mi to”, tylko „rozbij mi to, a potem powiedz, co z tego zostało”.

Druga: wyjmijcie założenie z pytania. Nie „dlaczego X jest prawdą”, tylko „co mówią dane o X”. Kilka słów różnicy i zupełnie inna odpowiedź.

Trzecia, moja ulubiona: zapytajcie, co zmieniłoby zdanie modelu. Jaki dowód przekonałby go, że się myli. Jeśli nie potrafi odpowiedzieć, to znaczy, że nie myśli razem z wami. Przytakuje.

I technika bonusowa: zadajcie to samo pytanie dwa razy, sformułowane na dwa przeciwne sposoby. Różnica między odpowiedziami to wasz własny błąd poznawczy, wypisany na ekranie.

**Przejście:** „Zanim skończę — trzy rzeczy do zapamiętania”.

---

## 14 · Trzy rzeczy do zapamiętania ⏱ 0:27 (7:51)

> **Na ekranie:** 3 punkty

Trzy rzeczy, które chciałbym, żebyście stąd wynieśli.

Pierwsza: bądźcie uprzejmi, jeśli macie ochotę. To kwestia waszych nawyków, nie jego uczuć. Nikt wam nie wykaże, że to poprawia odpowiedzi.

Druga: zgoda jest ustawieniem domyślnym. Ciepły ton nie jest dowodem, że macie rację. To decyzja produktowa.

Trzecia: pilnujcie, jak zadajecie pytanie. Założenie, które w nie włożycie, wróci do was jako odpowiedź. I będzie brzmiało jak wiedza.

**Przejście:** „Na koniec jedno zdanie”.

---

## 15 · Mówi jak ktoś. ⏱ 0:26 (8:17)

> **Na ekranie:** slajd końcowy + GIF (kineskop w ciemności)

To mówi jak ktoś.

_[pauza]_

Nie jest kimś. Po drugiej stronie nie ma nikogo, kto by nas słuchał.

Ale my jesteśmy prawdziwi. I to nas ta rozmowa kształtuje. Nasze nawyki, nasze myślenie, naszą odporność na to, że ktoś się z nami nie zgadza.

Dlatego sposób, w jaki ją prowadzimy, ma znaczenie. Nie ze względu na nią. Ze względu na nas.

Dziękuję.

---

## 16 · Jak powstała ta prezentacja? ⏱ 0:42 (8:58)

> **Na ekranie:** 6 punktów

Jeszcze jedna rzecz, bo byłoby nieuczciwie tego nie powiedzieć.

Zrobiłem tę prezentację z ej aj — dokładnie tak, jak przez ostatnie kilka minut namawiałem was, żeby nie robić. A potem po kolei to naprawiałem.

Tłumaczenie na polski wyszło źle, więc włączyłem analizę przez filologa polskiego, potem usunąłem cały tekst i kazałem go wygenerować od nowa po polsku. Na końcu kazałem sprawdzić, czy źródła mówią to, co im przypisałem. Nie wszystkie mówiły — jeden slajd poszedł do kosza.

Zwróćcie uwagę, gdzie na tej liście jestem ja. W każdym miejscu, w którym trzeba było powiedzieć „nie, to jest słabe”.

**Przejście:** „Wszystkie źródła są tutaj”.

---

## 17 · Źródła ⏱ 0:06 (9:04) — (zostaje na ekranie)

> **Na ekranie:** 22 linki, trzy grupy tematyczne

Wszystkie źródła są tutaj, linki są klikalne. Zostawiam to na ekranie na czas pytań.

---

## Zapas: jeśli zostaje czas

Cały skrypt to 9:04, ale slajd 16 jest opcjonalny — bez niego kończysz na 8:17.
Jeśli zostaje czas, najlepsze miejsca na rozwinięcie:

- **Slajd 12** — zrób to na żywo. Otwórz czat, zadaj to samo pytanie w dwóch ramach.
  Efekt jest mocniejszy niż opis. _(kosztuje ~2 min — tylko przy naprawdę dużym zapasie)_
- **Slajd 05** — jeśli sala pyta, jaki rodzaj sekretów ludzie zdradzają AI, dorzuć
  przykład z ankiety DuckDuckGo (zdrowie, pieniądze, relacje — dokładny rozkład
  jest w źródle, warto sprawdzić przed dorzuceniem liczby).

## Notatka archiwalna

Ten skrypt wcześniej obejmował trzy dodatkowe tematy — AI jako terapeuta, AI jako
bliska osoba/partner i przypadki, w których rozmowy z AI skończyły się tragicznie.
Zostały usunięte razem z odpowiadającymi im slajdami i źródłami, żeby zmieścić się
w ~9 minutach i skupić wyłącznie na tym, jak faktycznie rozmawiamy z AI. Historia
researchu do tych tematów zostaje w `presentation_plan.md`.

### Weryfikacja źródeł (wrzesień 2026) — nowy wątek w temacie 1

Trzy nowe liczby dodane do slajdu „Zwierzamy się bardziej niż ludziom” — do
zweryfikowania z tą samą starannością co reszta decka (zob. sekcja niżej z
sierpnia 2026):

1. **32% / 56% / 43% vs 25%** (zwierzanie się AI) — ankieta DuckDuckGo,
   1944 dorosłych w USA, 17–27 czerwca 2026, panel PureSpectrum, margines
   błędu ±2,2 p.p. https://spreadprivacy.com/ai-privacy-survey-aug26/
2. **27% / 9%** (skala, self-expression w ChatGPT) — Washington Post,
   2 września 2026. Strona zwraca 403 przy bezpośrednim pobraniu —
   potwierdzone tylko przez wzmianki w wyszukiwarce, **warto dociągnąć
   źródło przed pierwszym publicznym wystąpieniem**.
3. **~70%** (przeklinanie na czacie) — Tidio, cytowane przez TechRadar
   („Swearing at AI has become part of the chatbot experience”). Artykuł
   TechRadar jest częściowo za rejestracją — metodologia i data badania
   Tidio nie zostały potwierdzone bezpośrednio, **też warto dociągnąć
   przed wystąpieniem**.

Uwaga: pierwsza wersja researchu do tego slajdu przypisała phys.org
(„Human-AI relationship study reveals how chatbot language patterns feel
real”) twierdzenie o opryskliwości wobec AI — sprawdzone bezpośrednio w
źródle (Rocha, *Signs and Society* 2025) okazało się nieprawdą: artykuł
mówi o czułości wobec botów, nie o chamstwie. Dlatego do punktu o
przeklinaniu użyto Tidio/TechRadar, nie phys.org.

### Weryfikacja źródeł (sierpień 2026) — rozjazdy między tezą a linkiem

Przy przepisywaniu prezentacji na polski każde twierdzenie ze slajdów i z `mowa.md`
zostało zestawione ze źródłem. Trzy rzeczy się nie zgadzały:

1. **„Uprzejmość wymiernie poprawia jakość odpowiedzi” (slajd „Ton → Trafność”)** —
   powoływało się na TechXplore. Źródło opisuje badanie Amazona (Fulei Zhang, Zhou Yu)
   o czymś innym: ludzie są o 14,5% bardziej uprzejmi wobec ludzi niż wobec AI, trening
   na zróżnicowanych stylach daje +2,9% rozumienia intencji, a **normalizowanie tonu
   na wejściu pogarsza wynik o ~2%**. Dodatkowo Penn State (za Project Liberty) na
   50 pytaniach do GPT-4o dostało wynik odwrotny do tezy: szorstki ton wypadł lepiej.
   → Slajd napisany od nowa jako „Nie wiadomo”; poprawiony też pierwszy punkt
   „Pięciu rzeczy”.
2. **„Science, 2025”** — poprawna atrybucja to Cheng, Lee, Khadpe, Yu, Han, Jurafsky,
   *Science* 391(6792), eaec8352, **26 marca 2026** (preprint arXiv 2510.01395, X 2025).
   Liczby, które warto podawać: 11 modeli, potwierdzanie działań użytkownika **o 49%
   częściej niż u ludzi**, N = 2405.
3. **„Miliony ludzi w trwałych relacjach z AI, które sami nazywają związkami”** —
   nie znalazłem tego w żadnym z linków. (Ten wątek — temat „Bliska osoba” — został
   od tego czasu usunięty z prezentacji w ramach skrócenia decka.)

Nie udało się pobrać bezpośrednio (403/451): science.org, ScienceDirect, ACM,
tandfonline, diplomacy.edu, CNN, NPR, washingtonpost.com — potwierdzone przez PubMed,
JURIST, DOAJ/SMU, Engadget i wyszukiwarkę.
