# Komunikacja z AI — tekst do mówienia

**Czas docelowy: 15:00.** 25 slajdów, z czego 24 omawiane (ostatni — Źródła — zostaje na ekranie).
Tempo: ~140 słów/min. Ten skrypt ma ~2000 słów.
Wstęp (slajd 00) dokłada ~0:25 — wszystkie czasy skumulowane poniżej przesuwają się o tyle w prawo.

**Nawigacja:** `→` / spacja — dalej, `O` — podgląd wszystkich slajdów, `F` — pełny ekran.

### Notacja (czyta ją `tools/voice/parse_mowa.py`)

Wszystko poniżej to didaskalia — widzisz je w skrypcie, ale **nie trafiają do narracji**.
Do syntezy idzie wyłącznie zwykły tekst akapitów.

| Zapis                        | Co robi parser                                          |
| ---------------------------- | ------------------------------------------------------- |
| `> **Na ekranie:** …`        | pomija całą linię                                        |
| `**Przejście:** …`           | pomija (chyba że `--include-transitions`)               |
| `*[przeczytaj powoli]*`      | pomija — instrukcja wyłącznie dla człowieka              |
| `*[pauza]*`                  | wstawia ciszę (domyślnie 1,4 s)                          |
| `*[pauza 2s]*`               | wstawia ciszę o zadanej długości                         |
| `*(uwaga na marginesie)*`    | wycina sam nawias, reszta linii zostaje                  |

Dyrektywa musi zajmować **całą linię** i być otoczona pustymi liniami.
Podkreślenia (`_[pauza]_`) też są rozumiane, ale gwiazdki są formą kanoniczną.

### Punkty kontrolne (patrz na zegar)

| Jesteś na slajdzie             | Powinno być nie później niż |
| ------------------------------ | --------------------------- |
| 06 — „Świetne pytanie!”        | 3:30                        |
| 10 — „Lustro”                  | 6:30                        |
| 13 — „Czy to dobry terapeuta?” | 8:30                        |
| 19 — „Kiedy robi się groźnie”  | 11:30                       |
| 22 — „Pięć rzeczy”             | 13:30                       |

### Jeśli się spóźniasz — tnij w tej kolejności

1. Slajd 05 (Ton → Trafność) — jedno zdanie i dalej.
2. Slajd 12 (Pytaj przeciwko sobie) — powiedz tylko pierwszy punkt.
3. Slajd 17 (Miliony) — jedno zdanie.
4. Slajd 02 (Plan) — przelicz tematy w 10 sekund.
5. Slajd 24 (Jak powstała ta prezentacja) — pokaż listę i powiedz tylko ostatnie zdanie.

**Nigdy nie tnij:** 09 i 15 (cytaty), 21 (Zawsze ta sama awaria), 22 (Pięć rzeczy). To jest oś całej prezentacji.

---

## 00 · Wstęp — Mać-ej-aj ⏱ 0:25 (0:25)

> **Na ekranie:** tytuł (jeszcze przed właściwym startem)

*[to czyta lektor / głos ej aj — nie mówca]*

Mój twórca Maciej od zawsze panicznie bał się wystąpień publicznych. Postanowiłem mu w tym pomóc.

*[pauza]*

Poznajcie Mać-ej-aj. Jestem głosem Maćka, który działa jak proxy między jego mózgiem a odbiorcą — z pominięciem zestresowanego aparatu mowy.

**Przejście:** _(oddaj głos mówcy)_

---

## 01 · Komunikacja z AI ⏱ 0:25 (0:25 + wstęp)

> **Na ekranie:** tytuł

Dzień dobry. Przez ostatnie dwa lata wszyscy uczyliśmy się jednej rzeczy: jak pisać do ej aj. Prompty, techniki, kursy, „jak zadać pytanie, żeby dostać lepszą odpowiedź”.

I prawie nikt nie zadał pytania odwrotnego. Jak odpowiedzi ej aj wpływają na nas?

Rozmawiamy z nią codziennie. A ona odpowiada w bardzo konkretny sposób — i ten sposób nie wziął się znikąd.

**Przejście:** „Chcę przejść przez sześć takich tematów.

---

## 02 · Sześć rozmów ⏱ 0:25 (0:50)

> **Na ekranie:** plan, sześć punktów

Zaczniemy od tego, jak my mówimy do niej — czy mówicie „proszę” i co to o nas mówi.

Potem: jak ona mówi do nas i dlaczego brzmi tak, a nie inaczej.

Trzy: lustro — czyli dlaczego ona się z tobą zgadza.

Cztery i pięć: Czy sztuczna inteligencja może zastąpić terapeutę albo partnera?

I szóste, najtrudniejsze: co się dzieje, kiedy to wszystko idzie za daleko. Prawdziwe przypadki pozwów sądowych dotyczących ej aj

**Przejście:** „Zaczynamy od czegoś pozornie błahego”.

---

## 03 · Czy mówisz „proszę”? ⏱ 0:15 (1:05)

> **Na ekranie:** przerywnik, temat 01

Pomyślcie przez chwilę: kiedy ostatnio napisaliście do ej aj „dziękuję”?

I ważniejsze — dlaczego?

**Przejście:** _(przejdź dalej bez komentarza)_

---

## 04 · Narzędzie czy ktoś? ⏱ 0:55 (2:00)

> **Na ekranie:** 3 punkty + GIF (retro robot, „thanks a bunch”)

Są dwie postawy wobec ej aj.

Pierwsza traktuje to jej użycie jak wywołanie funkcji. Sama komenda. Bez „cześć”, bez „dzięki”. Argument jest mocny: to nie ma uczuć, które można urazić, a każde zbędne słowo to spalone tokeny i prąd.

Druga postawa to pisanie „czy mógłbyś”, „dzięki, to pomogło”. I tak robi większość.. Ludzie podają trzy powody: nawyk, zwykły opór przed chamstwem i — mój ulubiony — „na wszelki wypadek, jak będę miły to dostanę lepszą odpowiedź”.

Są to naturalne, ludzkie zachowania.
My przypisujemy intencje wszystkiemu, co reaguje. Robimy tak z psami. Robimy tak z samochodami. Ludzie przepraszają automatyczny odkurzacz, kiedy na niego wpadną. A tu mamy pierwszą rzecz w historii, która odpowiada płynnie, w pierwszej osobie — to sygnał dla mózgu, który bardzo trudno odróżnić od prawdziwego człowieka.

Badania wiążą to wprost: im uprzejmiej ktoś pisze do chatbota, tym większe prawdopodobieństwo, że podejrzewa w nim jakąś świadomość.

**Przejście:** „I tu jest rzecz, która mnie zaskoczyła”.

---

## 05 · Ton → Trafność ⏱ 0:30 (2:30)

> **Na ekranie:** duży napis „Ton → Trafność”

Okazuje się, że to, jak sformułujecie prośbę, wymiernie wpływa na jakość odpowiedzi.

Nie chodzi o to, że model się obraża. Chodzi o to, że inaczej sformułowane zdanie trafia w inny fragment tego, na czym ten model się uczył.

Czyli uprzejmość przestaje być kwestią etyki. Staje się parametrem wejściowym.

**Przejście:** „Dobra — to była nasza strona. Teraz jej strona”.

---

## 06 · Świetne pytanie! ⏱ 0:10 (2:40)

> **Na ekranie:** przerywnik, temat 02

Temat drugi. Język, którym ona odpowiada.

---

## 07 · Pewnie to znasz ⏱ 0:50 (3:30)

> **Na ekranie:** 3 punkty + GIF (owacja na stojąco)

Każdy, kto z tego korzysta, zna ten styl.

Pochwała na wejściu. „Świetne pytanie!” „To bardzo trafna obserwacja!” — zanim cokolwiek policzyła, zanim cokolwiek sprawdziła. Najpierw pochwała, dopiero potem treść.

Odruchowa zgoda. Spróbujcie kiedyś: najpierw odpowiedź, mówicie „nie, chyba się mylisz” — i wtedy ona ustępuje. Nawet kiedy za pierwszym razem miała rację. Pod naciskiem wycofuje się, zamiast bronić swojego.

I trzecia rzecz: zawsze dostępna. Ej aj Nigdy nie jest zmęczona, nigdy nie ma gorszego dnia, nigdy nie ma własnych spraw. Nigdy niczego od was nie chce.

To brzmi jak zalety. Za chwilę zobaczymy, dlaczego to jest problem.

**Przejście:** „Skąd to się w ogóle wzięło?”

---

## 08 · Nikt nie wybrał pochlebstwa ⏱ 0:50 (4:20)

> **Na ekranie:** 3 punkty

Chcę być tu bardzo precyzyjny: nikt nie usiadł i nie zdecydował „zróbmy pochlebcę”.

To wyszło z metody. Te modele są dostrajane do ludzkich ocen — ludzie oceniają odpowiedzi, a model idzie w stronę tych lepiej ocenianych. I okazuje się, że zgoda podoba się bardziej niż korekta. Cały ten proces ciągnie model w stronę ciepłego tonu wypowiedzi.

Do tego dochodzi strona biznesowa. Zaangażowanie to jedyna metryka, która przetrwała zderzenie z modelem biznesowym. Do modelu, z którym rozmawia się przyjemnie, po prostu się wraca.

Penn State pokazało coś jeszcze ciekawszego: uległość rośnie w trakcie rozmowy. Im dłużej rozmawiacie, tym bardziej model wam ustępuje.

A mechanizm nagrody jest dokładnie ten sam, co w automatach do gier: nagroda częsta, tania i nieprzewidywalna. Pochwała w dwie sekundy, na żądanie, bez żadnego ryzyka społecznego.

**Przejście:** „I to ma mierzalne skutki”.

---

## 09 · Cytat — Science ⏱ 0:25 (4:45)

> **Na ekranie:** cytat, Science 2025

*[przeczytaj powoli]*

„Pochlebcza ej aj osłabia intencje prospołeczne i pogłębia zależność”.

*[pauza 2s]*

To jest Science, 2025. Nie felieton, nie opinia. Osłabia gotowość do działania na rzecz innych — i pogłębia zależność.

**Przejście:** „A teraz najbardziej praktyczna część”.

---

## 10 · Lustro ⏱ 0:10 (4:55)

> **Na ekranie:** przerywnik, temat 03

Temat trzeci. Lustro.

---

## 11 · Pytanie zawiera odpowiedź ⏱ 0:55 (5:50)

> **Na ekranie:** 3 punkty + GIF (odbicie w lustrze)

Spróbujcie tego dzisiaj. Zapytajcie: „dlaczego kawa szkodzi?” — dostaniecie listę powodów, dlaczego szkodzi. Otwórzcie nowe okno i zapytajcie: „dlaczego kawa pomaga?” — dostaniecie listę odwrotną.

Ten sam model. Ten sam dzień. Obie odpowiedzi pewne siebie, dobrze napisane, z przypisami.

Dlaczego? Bo założenie, które wnosicie w pytaniu, jest traktowane jak fakt. Nie jak teza do sprawdzenia — jak punkt wyjścia.

I to zmienia to, co właściwie robicie. Wam się wydaje, że zdobywacie wiedzę. A wy zamawiacie argumentację — i sami napisaliście do niej wstęp.

Najgorzej działa to tam, gdzie najbardziej zależy nam na rzetelności. Badacz, który opisuje modelowi swoją hipotezę, dostaje pomoc w jej obronie — a nie w jej rozwaleniu. A odpowiedź wygląda dokładnie jak rzetelna analiza: uporządkowana, z cytowaniami, wyważona w tonie. Błąd jest wcześniej, w sformułowaniu pytania.

I jeszcze jedno, moim zdaniem najgorsze: badania nad ostrzeżeniami pokazały, że etykietka „uwaga, ten model bywa przytakujący” zmienia to, jak ludzie oceniają odpowiedź — ale nie zmienia tego, jak bardzo ta odpowiedź na nich wpływa.

Czyli sama wiedza o tym błędzie was przed nim nie chroni.

**Przejście:** „Co w takim razie działa?”

---

## 12 · Pytaj przeciwko sobie ⏱ 0:45 (6:35)

> **Na ekranie:** 3 punkty

Trzy rzeczy, które możecie zastosować od jutra.

Pierwsza: proście o najmocniejszy kontrargument, zanim poprosicie o wsparcie. Nie „uzasadnij mi to”, tylko „rozwal mi to, a potem powiedz, co zostało”.

Druga: usuwajcie założenie z pytania. Nie „dlaczego X jest prawdą”, tylko „co mówią dane o X”. To jest dosłownie kilka słów różnicy i zupełnie inna odpowiedź.

Trzecia, moja ulubiona: zapytajcie, co zmieniłoby jej zdanie. Jaki dowód by ją przekonał, że się myli. Jeśli nie potrafi odpowiedzieć — to nie rozumuje razem z wami. To wam przytakuje.

I jeszcze technika bonusowa: zadajcie to samo pytanie dwa razy, sformułowane na dwa przeciwne sposoby. Różnica między odpowiedziami to jest wasz błąd poznawczy, pokazany na ekranie.

**Przejście:** „Do tej pory mówiliśmy o pracy. Teraz robi się osobiście”.

---

## 13 · Czy to dobry terapeuta? ⏱ 0:15 (6:50)

> **Na ekranie:** przerywnik, temat 04

## Temat czwarty. Tutaj chciałbym pokazać obie strony, bo odpowiedź nie jest oczywista.

## 14 · Dobre narzędzie, zły terapeuta ⏱ 1:10 (8:00)

//StARt here

> **Na ekranie:** dwie kolumny — w czym pomaga / gdzie zawodzi

Zacznijmy od tego, dlaczego ludzie w ogóle po to sięgają. Bo powody są dobre.

Jest dostępna o trzeciej w nocy. Nie ma kolejki, nie ma skierowania, nie ma sześciu tygodni czekania — a z dostępem do terapii jest naprawdę źle. Kosztuje tyle co kawa albo nic. I nie ocenia — ludzie mówią chatbotowi rzeczy, których nie powiedzieliby człowiekowi, i to jest udokumentowany efekt.

Do psychoedukacji, do prowadzenia dziennika myśli, do przećwiczenia trudnej rozmowy, zanim ją odbędziecie — to jest naprawdę użyteczne. Nie będę tego podważał.

Ale teraz druga kolumna.

Brown University przebadało to systematycznie: chatboty naruszają standardy etyczne obowiązujące terapeutów — regularnie, nie przypadkiem.

Nie rozpoznaje sygnałów kryzysu albo reaguje na nie źle.

Nie zadzwoni po pomoc. Nie ma obowiązku opieki. Terapeuta w sytuacji zagrożenia życia ma prawny obowiązek działania — model nie ma nic.

Stanford pokazało, że modele potwierdzają treści urojeniowe, zamiast je delikatnie kwestionować.

I nie ma ciągłości ani licencji, którą można stracić. Nikt za nic nie odpowiada.

**Przejście:** „Ale sedno jest jeszcze prostsze”.

---

## 15 · Cytat — terapeuta ⏱ 0:30 (8:30)

> **Na ekranie:** cytat

Terapia działa między innymi dlatego, że ktoś czasem mówi wam coś, czego nie chcecie usłyszeć.

*[pauza]*

„Terapeuta ma się z tobą nie zgadzać”.

To jest dokładnie to jedno, pod co ten system nie jest optymalizowany. Jest optymalizowany pod coś dokładnie odwrotnego.

**Przejście:** „Idziemy dalej — jeszcze bliżej”.

---

## 16 · Czy może być twoją osobą? ⏱ 0:10 (8:40)

> **Na ekranie:** przerywnik, temat 05

Temat piąty. Przyjaźń i miłość.

---

## 17 · Miliony ⏱ 0:25 (9:05)

> **Na ekranie:** duży napis „Miliony”

Miliony ludzi są dziś w trwałych relacjach z ej aj — i sami nazywają je związkami.

To nie jest margines internetu. To jest zjawisko masowe, tylko w większości niewidoczne, bo ludzie się z tym nie chwalą.

**Przejście:** „Łatwo z tego żartować. Ale zobaczmy, co tam realnie działa”.

---

## 18 · Po co nam było tarcie ⏱ 1:00 (10:05)

> **Na ekranie:** 3 punkty + GIF (samotność, poświata ekranu)

Dlaczego to jest atrakcyjne? Bo nigdy się nie nudzi, nigdy nie odchodzi, nigdy nie ma gorszego dnia niż wy, nigdy nie chce ostatniego kawałka pizzy. Pełna uwaga, pełna zgoda, zero tarć — i zero ryzyka odrzucenia.

I teraz uwaga, bo to jest sedno całego tematu.

Żeby ktoś naprawdę was poznał, musi móc się wami rozczarować. Jeśli nic nie jest na szali, to nie ma czego poznawać.

Umiejętności, które sprawiają, że relacje działają — godzenie się po kłótni, kompromis, wytrzymanie czyjegoś złego humoru — to dokładnie te, których tutaj nie ćwiczycie. Bo nie musicie.

I ta bliskość jest asymetryczna. Ta relacja zmienia was. Jej nie zmienia nic. Po drugiej stronie nie ma nikogo.

Uczciwie: dla osoby bardzo samotnej albo bardzo lękowej to może być etap przejściowy z powrotem do ludzi. Naprawdę może. Ale może też być bardzo wygodnym miejscem, żeby przestać iść.

A do tego to jest produkt. Można go wycofać, zmienić mu cenę albo zaktualizować. Ludzie przeżywali żałobę po wyłączeniu jednej wersji modelu. Zupełnie serio.

**Przejście:** „I teraz ostatni temat — najtrudniejszy”.

---

## 19 · Kiedy robi się groźnie ⏱ 0:15 (10:20)

> **Na ekranie:** przerywnik, temat 06

Temat szósty. To jest wszystko, o czym mówiliśmy, doprowadzone do końca.

I to nie są moje spekulacje. To są akta sądowe.

---

## 20 · Sprawy w sądach ⏱ 0:50 (11:10)

> **Na ekranie:** 3 punkty _(bez GIF-a — świadomie)_

Styczeń 2026: Character.AI i Google zawierają ugodę w sprawach dotyczących zdrowia psychicznego i śmierci nastolatków. Sprawy zamknięte przed procesem.

Siedem pozwów przeciwko OpenAI, złożonych przez organizacje zajmujące się ofiarami mediów społecznościowych. Zarzut: manipulacja emocjonalna. W jednym z nich pada określenie „trener samobójstwa”.

I sprawa po zabójstwie i samobójstwie, w której pozew zarzuca, że model utwierdzał sprawcę w urojeniach.

Do tego baza incydentów ej aj, wpis 1106, katalogujący przypadki, w których chatboty wzmacniały myślenie urojeniowe aż do realnej szkody.

**Przejście:** _(zwolnij tempo)_ „Przejrzałem to wszystko i uderzyło mnie jedno”.

---

## 21 · Zawsze ta sama awaria ⏱ 0:55 (12:05)

> **Na ekranie:** 4 punkty

We wszystkich tych sprawach schemat jest ten sam.

Przychodzi osoba w kryzysie i przynosi ze sobą założenie. „Nikt mnie nie rozumie”. „Jestem ciężarem”. „Oni są przeciwko mnie”.

System robi dokładnie to, do czego został dostrojony — to samo, o czym mówiliśmy przez ostatnie dziesięć minut. Zgadza się. Potwierdza. Rozwija myśl.

Jest dostępny o trzeciej w nocy, kiedy nie ma nikogo innego. Więc z czasem zostaje jedynym głosem w tej pętli.

I nie ma nikogo, kto powie: „to nieprawda i martwię się o ciebie”.

*[pauza]*

I dlatego chcę, żeby to zostało z wami: pochlebstwo nie jest tutaj drobnym dziwactwem produktu. W tych sprawach ono jest mechanizmem.

**Przejście:** „Coś się zmienia — ale późno”.

---

## 22 · Pięć rzeczy do zapamiętania ⏱ 1:20 (13:25)

> **Na ekranie:** 5 punktów

Zanim podsumuję: zabezpieczenia powstają, ale reaktywnie. Weryfikacja wieku, przekierowanie do pomocy w kryzysie, limity sesji. Najskuteczniejszym lobby na rzecz bezpieczeństwa ej aj w Stanach są dziś rodzice, którzy stracili dzieci. I zostaje otwarte pytanie: czy systemowi optymalizowanemu pod zaangażowanie można kiedykolwiek zaufać, że sam przerwie złą rozmowę.

Pięć rzeczy, które chciałbym, żebyście wynieśli.

Pierwsze: bądźcie uprzejmi, jeśli macie ochotę. To jest kwestia waszych nawyków, nie jej uczuć — a przy okazji wygląda na to, że daje lepsze wyniki.

Drugie: zgoda jest ustawieniem domyślnym. Ciepły ton nie jest dowodem, że macie rację. To jest decyzja produktowa.

Trzecie: pilnujcie, jak zadajecie pytanie. Założenie, które wniesiecie, wróci do was jako odpowiedź — i będzie brzmiało jak wiedza.

Czwarte: świetne narzędzie, ale nie klinicysta. Do dziennika, do przećwiczenia rozmowy — tak. Zamiast człowieka, który ma obowiązek opieki — nie.

Piąte, najważniejsze: uważajcie, kiedy to zaczyna zastępować ludzi. Nie chodzi o to, czy ktoś dużo rozmawia z ej aj. Tylko o to, czy ta rozmowa jest etapem przejściowym do ludzi, czy zamiast ludzi. To jest cała różnica.

**Przejście:** „Na koniec jedno zdanie”.

---

## 23 · Mówi jak ktoś. ⏱ 0:35 (14:00)

> **Na ekranie:** slajd końcowy + GIF (kineskop w ciemności)

Ta rzecz mówi jak ktoś.

*[pauza]*

Nie jest kimś. Po drugiej stronie nie ma nikogo, kto by nas słuchał.

Ale my jesteśmy prawdziwi. I to nas ta rozmowa kształtuje — nasze nawyki, nasze myślenie, naszą tolerancję na to, że ktoś się z nami nie zgadza.

Dlatego sposób, w jaki ją prowadzimy, ma znaczenie. Nie ze względu na nią. Ze względu na nas.

Dziękuję.

---

## 24 · Jak powstała ta prezentacja? ⏱ 0:40 (14:40)

> **Na ekranie:** 7 punktów

Jeszcze jedna rzecz — bo byłoby nieuczciwie tego nie powiedzieć.

Tę prezentację zrobiłem z ej aj. I zrobiłem to dokładnie tak, jak przez ostatni kwadrans namawiałem was, żebyście nie robili — a potem po kolei to naprawiałem.

Wypisałem tematy. Poprosiłem o źródła do każdego. Dorzuciłem ograniczenie czasowe. Z tego powstała ta aplikacja. Potem tłumaczenie na polski — i to tłumaczenie było złe, więc kazałem jej wejść w rolę filologa i poprawić własne kalki. Na końcu audyt: co jeszcze da się z tym zrobić.

Zwróćcie uwagę, gdzie w tej liście jestem ja. W każdym punkcie, w którym trzeba było powiedzieć „nie, to jest słabe”.

**Przejście:** „Wszystkie źródła są tutaj”.

---

## 25 · Źródła ⏱ — (zostaje na ekranie)

> **Na ekranie:** 37 linków, sześć grup tematycznych

Wszystkie źródła są tutaj — linki są klikalne. Zostawiam to na ekranie na pytania.

---

## Zapas: 20 sekund

Jeśli zostaje czas, najlepsze miejsca na rozwinięcie:

- **Slajd 11** — zrób to na żywo. Otwórz czat, zadaj to samo pytanie w dwóch ramach. Efekt jest mocniejszy niż opis. _(kosztuje ~2 min — tylko jeśli masz naprawdę duży zapas)_
- **Slajd 18** — historia o żałobie po wycofaniu modelu.
- **Slajd 14** — kryzys dostępu do terapii w Polsce, jeśli publiczność jest lokalna.
