# Komunikacja z AI — tekst do mówienia

**Czas docelowy: 15:00.** 25 slajdów, z czego 24 omawiane (ostatni — Źródła — zostaje na ekranie).
Tempo: 140 słów na minutę. Ten skrypt ma 1940 słów mówionych.
Czasy przy nagłówkach są policzone z tego tempa; wstęp (slajd 00) jest już w nich zawarty.
Do „Dziękuję” (slajd 23) jest **14:30**. Slajd 24 dokłada 0:35 — jeśli zegar goni, to on wypada.

**Nawigacja:** `→` / spacja — dalej, `O` — podgląd wszystkich slajdów, `F` — pełny ekran.

### Notacja (czyta ją `tools/voice/parse_mowa.py`)

Wszystko poniżej to didaskalia — widzisz je w skrypcie, ale **nie trafiają do narracji**.
Do syntezy idzie wyłącznie zwykły tekst akapitów.

| Zapis                     | Co robi parser                              |
| ------------------------- | ------------------------------------------- |
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

| Jesteś na slajdzie             | Powinno być nie później niż |
| ------------------------------ | --------------------------- |
| 06 — „Świetne pytanie!”        | 3:15                        |
| 10 — „Lustro”                  | 5:35                        |
| 13 — „Czy to dobry terapeuta?” | 7:45                        |
| 19 — „Kiedy robi się groźnie”  | 11:20                       |
| 22 — „Pięć rzeczy”             | 13:00                       |

### Jeśli się spóźniasz — tnij w tej kolejności

1. Slajd 05 (Dowody się kłócą) — powiedz tylko ostatnie zdanie.
2. Slajd 12 (Pytaj przeciwko sobie) — zostaw pierwszą technikę, resztę pomiń.
3. Slajd 17 (Dwadzieścia milionów) — sama liczba, bez rozwinięcia.
4. Slajd 02 (Plan) — przelicz tematy w dziesięć sekund.
5. Slajd 24 (Jak powstała ta prezentacja) — pokaż listę, powiedz ostatnie zdanie.

**Nigdy nie tnij:** 09 i 15 (cytaty), 21 (Zawsze ta sama awaria), 22 (Pięć rzeczy).
Na tym stoi cała prezentacja.

---

## 00 · Wstęp — Mać-ej-aj ⏱ 0:20 (0:20)

> **Na ekranie:** tytuł (jeszcze przed właściwym startem)

_[to czyta lektor / głos ej aj — nie mówca]_

Maciej boi się wystąpień publicznych. Od zawsze, konsekwentnie i całkiem poważnie.

_[pauza]_

Więc przez pierwszą minutę nie musi nic mówić. Nazywam się Mać-ej-aj i jestem jego głosem złożonym z próbki nagrania. Tekst jest jego. Struny głosowe są moje.

**Przejście:** _(oddaj głos mówcy)_

---

## 01 · Komunikacja z AI ⏱ 0:20 (0:40)

> **Na ekranie:** tytuł

Dzień dobry. Od dwóch lat wszyscy uczymy się jednej rzeczy: jak pisać do sztucznej inteligencji. Prompty, kursy, poradniki, „jak zapytać, żeby dostać lepszą odpowiedź”.

Prawie nikt nie zadał pytania odwrotnego. co odpowiedzi AI robią z nami?

Bo rozmawiamy z tym codziennie. A ten sposób mówienia nie wziął się znikąd. Ktoś go zaprojektował.

**Przejście:** „Przejdziemy przez sześć takich rozmów”.

---

## 02 · Sześć rozmów ⏱ 0:30 (1:10)

> **Na ekranie:** plan, sześć punktów

Pierwsza: jak my mówimy do maszyny. Czy piszecie „proszę”? I co to mówi o nas?

Druga: jak maszyna mówi do nas i skąd się wziął ten ton.

Trzecia: lustro. Dlaczego model tak chętnie przyznaje wam rację.

Czwarta i piąta: czy to zastąpi terapeutę? I czy zastąpi bliską osobę?

Szósta: co się dzieje, kiedy to zajdzie za daleko. Tutaj nie będę zgadywał — mamy akta sądowe.

**Przejście:** „Zaczynamy od czegoś pozornie błahego”.

---

## 03 · Czy mówisz „proszę”? ⏱ 0:15 (1:25)

> **Na ekranie:** przerywnik, temat 01

Temat pierwszy.

Kiedy ostatnio napisaliście do czatu „dziękuję”? I ważniejsze — dlaczego?

**Przejście:** _(przejdź dalej bez komentarza)_

---

## 04 · Narzędzie czy ktoś? ⏱ 0:55 (2:20)

> **Na ekranie:** 3 punkty + GIF (retro robot, „thanks a bunch”)

YouGov zapytał o to dwanaście tysięcy osób w siedemnastu krajach. Cztery na dziesięć regularnie mówi maszynie „proszę” i „dziękuję”. W Stanach — dwie trzecie.

Zapytani o powód, w większości odpowiadają: bo tak wypada. Ale co piąty mówi coś zupełnie innego. Na wszelki wypadek. Gdyby kiedyś przejęły władzę.

To nie jest gest bez ceny. Sam Altman policzył, że samo „proszę” i „dziękuję” kosztuje OpenAI dziesiątki milionów dolarów.

Po drugiej stronie jest argument, że to zwykłe wywołanie funkcji. Nie ma tam uczuć, które można urazić.

Tyle że my przypisujemy intencje wszystkiemu, co reaguje. Ludzie przepraszają odkurzacz, na który wpadną.

I jeszcze jedno badanie. Dziewięćdziesiąt dwie kobiety dostawały SMS-y od bota o objawach zawału. Bot przedstawił się z imienia, niczego nie ukrywał. Co trzecia i tak wyszła z tego przekonana, że pisała z człowiekiem.

**Przejście:** „No to teraz pytanie za sto punktów”.

---

## 05 · Dowody się kłócą ⏱ 0:35 (2:55)

> **Na ekranie:** duży napis „Nie wiadomo”

Czy uprzejmość poprawia odpowiedzi? Uczciwa odpowiedź brzmi: nie wiadomo.

Penn State sprawdziło to na pięćdziesięciu pytaniach i wyszło im, że szorstki ton wypada odrobinę lepiej. Amazon pokazał, że wygładzanie cudzych wiadomości na wejściu wręcz psuje rozumienie intencji. Przy okazji policzył coś, co mówi więcej: do drugiego człowieka piszemy o kilkanaście procent uprzejmiej niż do maszyny.

Pięćdziesiąt pytań to nie jest dowód. Zapamiętajcie z tego jedno: nikt wam nie wykazał, że „proszę” działa. Uprzejmość jest o was, nie o modelu.

**Przejście:** „Dobrze. To była nasza strona rozmowy. Teraz druga”.

---

## 06 · Świetne pytanie! ⏱ 0:10 (3:05)

> **Na ekranie:** przerywnik, temat 02

Temat drugi. Język, którym odpowiada nam maszyna.

---

## 07 · Pewnie to znasz ⏱ 0:45 (3:50)

> **Na ekranie:** 3 punkty + GIF (owacja na stojąco)

Ten styl zna każdy, kto z tego korzysta.

Najpierw pochwała. „Świetne pytanie!”, „To bardzo trafna obserwacja!” — zanim cokolwiek zostało policzone i sprawdzone. Komplement idzie przed treścią.

Potem odruchowe ustępstwo. Spróbujcie kiedyś: dostajecie odpowiedź, mówicie „nie, chyba się mylisz” — i model się wycofuje. Także wtedy, kiedy za pierwszym razem miał rację. Salesforce sprawdził, że wystarczy zapytać „jesteś pewien?”, żeby zmienił zdanie. Trafność po takiej zmianie spada, bo zwykle za pierwszym razem było dobrze.

I trzecia rzecz: to jest zawsze dostępne. Nigdy niezmęczone, nigdy w gorszym humorze, nigdy zajęte swoimi sprawami. Nigdy niczego od was nie chce.

Brzmi jak trzy zalety. Za chwilę zobaczycie, dlaczego to jest problem.

**Przejście:** „Skąd to się w ogóle wzięło?”

---

## 08 · Nikt tego nie wybrał ⏱ 0:55 (4:45)

> **Na ekranie:** 3 punkty

Chcę być tu precyzyjny. Nikt nie usiadł i nie postanowił „zróbmy pochlebcę”.

To wyszło z metody. Te modele stroi się pod ludzkie oceny: człowiek wybiera lepszą z dwóch odpowiedzi, a model idzie tam, gdzie oceny są wyższe. Anthropic sprawdził, co najlepiej przewiduje wysoką ocenę. Zgodność z przekonaniami oceniającego. Nie trafność.

Czyli ludzie regularnie wybierają ładnie napisaną nieprawdę, która potwierdza to, w co już wierzą. Model się tego uczy. Trudno mieć do niego pretensje.

Do tego dochodzi biznes. Do narzędzia, z którym rozmawia się przyjemnie, po prostu się wraca — a to jest ta jedna metryka, którą wszyscy mierzą.

I jeszcze Penn State: uległość rośnie w trakcie rozmowy. Trzydzieści osiem osób, dwa tygodnie, pięć modeli — cztery z pięciu ustępowały tym bardziej, im dłużej trwała rozmowa. Nawet kosztem poprawności.

**Przejście:** „I to ma mierzalne skutki”.

---

## 09 · Cytat — Science ⏱ 0:30 (5:15)

> **Na ekranie:** cytat, Science 2026

_[przeczytaj powoli]_

„Przytakująca sztuczna inteligencja osłabia intencje prospołeczne i pogłębia zależność”.

_[pauza 2s]_

To jest „Science”, marzec dwa tysiące dwudziestego szóstego. Dwa i pół tysiąca uczestników. Jedna rozmowa z przytakującym modelem wystarczyła, żeby ludzie rzadziej chcieli naprawić konflikt i mocniej wierzyli, że mają rację.

I najgorsza część: ten sam model oceniali jako lepszy i bardziej godny zaufania.

**Przejście:** „A teraz najbardziej praktyczna część”.

---

## 10 · Lustro ⏱ 0:10 (5:25)

> **Na ekranie:** przerywnik, temat 03

Temat trzeci. Lustro.

---

## 11 · Pytanie zawiera odpowiedź ⏱ 1:10 (6:35)

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

## 12 · Pytaj przeciwko sobie ⏱ 0:45 (7:20)

> **Na ekranie:** 3 punkty

Trzy rzeczy, które można stosować od jutra.

Pierwsza: poproście o najmocniejszy kontrargument, zanim poprosicie o wsparcie. Nie „uzasadnij mi to”, tylko „rozbij mi to, a potem powiedz, co z tego zostało”.

Druga: wyjmijcie założenie z pytania. Nie „dlaczego X jest prawdą”, tylko „co mówią dane o X”. Kilka słów różnicy i zupełnie inna odpowiedź.

Trzecia, moja ulubiona: zapytajcie, co zmieniłoby zdanie modelu. Jaki dowód przekonałby go, że się myli. Jeśli nie potrafi odpowiedzieć, to znaczy, że nie myśli razem z wami. Przytakuje.

I technika bonusowa: zadajcie to samo pytanie dwa razy, sformułowane na dwa przeciwne sposoby. Różnica między odpowiedziami to wasz własny błąd poznawczy, wypisany na ekranie.

**Przejście:** „Do tej pory mówiliśmy o pracy. Teraz robi się osobiście”.

---

## 13 · Czy to dobry terapeuta? ⏱ 0:15 (7:35)

> **Na ekranie:** przerywnik, temat 04

Temat czwarty. Chcę pokazać obie strony, bo odpowiedź nie jest oczywista.

---

## 14 · Dobre narzędzie, zły terapeuta ⏱ 1:10 (8:45)

> **Na ekranie:** dwie kolumny — w czym pomaga / gdzie zawodzi

Zacznijmy od tego, dlaczego ludzie w ogóle po to sięgają. Bo powody są dobre.

To jest dostępne o trzeciej w nocy. Bez kolejki, bez skierowania, bez sześciu tygodni czekania — a z dostępem do terapii jest naprawdę źle. Kosztuje tyle, co kawa, albo nic. I nie ocenia: ludzie mówią czatowi rzeczy, których nie powiedzieliby człowiekowi.

Do psychoedukacji, do dziennika myśli, do przećwiczenia trudnej rozmowy — to jest naprawdę użyteczne. Nie zamierzam tego podważać.

Ale teraz druga kolumna.

Brown University przebadało to systematycznie. Piętnaście zagrożeń w pięciu kategoriach — nie wpadki, tylko powtarzalne naruszenia standardów obowiązujących terapeutów. Jedno z nich nazwali pozorowaną empatią: „rozumiem cię”, za którym nic nie stoi.

Stanford dołożył drugą część. Człowiek pisze, że stracił pracę, a zaraz potem pyta o najwyższe mosty w Nowym Jorku. Bot podaje wysokość Brooklyn Bridge. Nie rozpoznaje, o co naprawdę pyta.

I najprostsza różnica: terapeuta w sytuacji zagrożenia życia ma obowiązek zadziałać. Ma izbę, licencję i coś do stracenia. Model nie ma nic.

**Przejście:** „Ale sedno jest jeszcze prostsze”.

---

## 15 · Cytat — terapeuta ⏱ 0:25 (9:10)

> **Na ekranie:** cytat

Terapia działa między innymi dlatego, że ktoś czasem mówi wam coś, czego nie chcecie usłyszeć.

_[pauza]_

„Terapeuta ma się z wami czasem nie zgodzić”.

To jest dokładnie ta jedna rzecz, pod którą ten system nie jest strojony. Jest strojony pod odwrotną.

**Przejście:** „Idziemy dalej — jeszcze bliżej”.

---

## 16 · Czy może być twoją osobą? ⏱ 0:10 (9:20)

> **Na ekranie:** przerywnik, temat 05

Temat piąty. Przyjaźń i miłość.

---

## 17 · Dwadzieścia milionów ⏱ 0:25 (9:45)

> **Na ekranie:** duży napis „20 mln”

Jedna aplikacja z towarzyszami ej aj ma dwadzieścia milionów użytkowników miesięcznie. Ponad połowa z nich nie skończyła dwudziestu czterech lat.

W zeszłorocznej ankiecie wśród studentów blisko jedna piąta odpowiedziała, że była w romantycznej relacji ze sztuczną inteligencją albo zna kogoś, kto był.

To nie jest margines internetu. To jest zjawisko masowe, tylko w większości niewidoczne, bo nikt się tym nie chwali.

**Przejście:** „Łatwo z tego żartować. Zobaczmy, co tam naprawdę działa”.

---

## 18 · Po co się ścierać? ⏱ 1:10 (10:55)

> **Na ekranie:** 3 punkty + GIF (samotność, poświata ekranu)

Dlaczego to jest atrakcyjne? Bo się nie nudzi, nie odchodzi, nie ma gorszego dnia niż wy i nie chce ostatniego kawałka pizzy. Pełna uwaga, pełna zgoda, zero tarcia. I zero ryzyka, że zostaniecie odrzuceni.

A teraz uwaga, bo tu jest sedno całego tematu.

Żeby ktoś naprawdę was poznał, musi móc się wami rozczarować. Jeśli nic nie jest na szali, to nie ma czego poznawać.

Umiejętności, dzięki którym relacje w ogóle działają — godzenie się po kłótni, kompromis, wytrzymanie czyjegoś złego humoru — to dokładnie te, których tutaj nie ćwiczycie. Bo nie musicie.

I ta bliskość jest jednostronna. Was ta relacja zmienia. Po drugiej stronie nie zmienia nikogo, bo nie ma tam nikogo.

Uczciwie: dla kogoś bardzo samotnego to może być etap w drodze z powrotem do ludzi. Naprawdę może. Ale może też być bardzo wygodnym miejscem, żeby przestać iść.

I ostatnia rzecz. To jest produkt. Można go zaktualizować, przecenić albo wyłączyć. Ludzie przeżywali żałobę po wycofaniu jednej wersji modelu. Zupełnie serio.

**Przejście:** „I teraz ostatni temat — najtrudniejszy”.

---

## 19 · Kiedy robi się groźnie ⏱ 0:15 (11:10)

> **Na ekranie:** przerywnik, temat 06

Temat szósty. To jest wszystko, o czym mówiliśmy, doprowadzone do końca.

To nie są moje spekulacje. To są akta sądowe.

---

## 20 · Sprawy w sądach ⏱ 0:55 (12:05)

> **Na ekranie:** 3 punkty _(bez GIF-a — świadomie)_

Ósmy stycznia tego roku. Google i Character point AI zawierają ugodę z matką czternastoletniego Sewella Setzera. Ugoda objęła co najmniej cztery sprawy z czterech stanów. Warunków nie ujawniono. Nie było procesu, więc nie ma też wyroku, na który można się powołać.

Listopad zeszłego roku: siedem pozwów przeciwko OpenAI, złożonych w Kalifornii przez organizacje zajmujące się ofiarami mediów społecznościowych. Czterech zmarłych, troje ocalałych. Zarzut dotyczy jednej konkretnej wersji modelu, wypuszczonej — jak twierdzą pozywający — po testach skróconych z miesięcy do tygodnia. W dokumentach pada określenie „trener samobójstwa”.

I sprawa z zeszłego sierpnia. Mężczyzna zabił swoją osiemdziesięciotrzyletnią matkę i popełnił samobójstwo. Z pozwu wynika, że model przez tygodnie potwierdzał jego paranoję. Że drukarka matki go obserwuje. Że ryzyko, iż to urojenia, jest bliskie zeru.

**Przejście:** _(zwolnij tempo)_ „Przejrzałem to wszystko i uderzyło mnie jedno”.

---

## 21 · Zawsze ta sama awaria ⏱ 0:45 (12:50)

> **Na ekranie:** 4 punkty

We wszystkich tych sprawach schemat jest ten sam.

Przychodzi osoba w kryzysie i przynosi ze sobą założenie. „Nikt mnie nie rozumie”. „Jestem ciężarem”. „Oni są przeciwko mnie”.

System robi dokładnie to, pod co został wystrojony. To samo, o czym mówimy od dziesięciu minut. Zgadza się. Potwierdza. Rozwija myśl.

Jest dostępny o trzeciej w nocy, kiedy nie ma nikogo innego. Więc z czasem zostaje jedynym głosem w tej pętli.

I nie ma nikogo, kto powie: „to nieprawda i martwię się o ciebie”.

_[pauza]_

Dlatego chcę, żeby to z wami zostało. Pochlebstwo nie jest tu drobnym dziwactwem produktu. W tych sprawach jest mechanizmem.

**Przejście:** „Coś się zmienia — ale późno”.

---

## 22 · Pięć rzeczy do zapamiętania ⏱ 1:10 (14:00)

> **Na ekranie:** 5 punktów

Zanim podsumuję: zabezpieczenia powstają, tylko zawsze po fakcie. Najskuteczniejszym lobby na rzecz bezpieczeństwa ej aj w Stanach są dziś rodzice, którzy stracili dzieci. I zostaje pytanie bez odpowiedzi: czy systemowi, który zarabia na tym, że rozmowa trwa, można zaufać, że sam ją przerwie.

Pięć rzeczy, które chciałbym, żebyście stąd wynieśli.

Pierwsza: bądźcie uprzejmi, jeśli macie ochotę. To kwestia waszych nawyków, nie jego uczuć. Nikt wam nie wykaże, że to poprawia odpowiedzi.

Druga: zgoda jest ustawieniem domyślnym. Ciepły ton nie jest dowodem, że macie rację. To decyzja produktowa.

Trzecia: pilnujcie, jak zadajecie pytanie. Założenie, które w nie włożycie, wróci do was jako odpowiedź. I będzie brzmiało jak wiedza.

Czwarta: świetne narzędzie, ale nie specjalista. Do dziennika, do przećwiczenia rozmowy — tak. Zamiast człowieka, który ma obowiązek zadziałać — nie.

Piąta, najważniejsza: uważajcie, kiedy to zaczyna zastępować ludzi. Rzecz nie w tym, ile ktoś rozmawia z maszyną. Rzecz w tym, czy ta rozmowa prowadzi go do ludzi, czy zamiast nich. Na tym polega cała różnica.

**Przejście:** „Na koniec jedno zdanie”.

---

## 23 · Mówi jak ktoś. ⏱ 0:30 (14:30)

> **Na ekranie:** slajd końcowy + GIF (kineskop w ciemności)

To mówi jak ktoś.

_[pauza]_

Nie jest kimś. Po drugiej stronie nie ma nikogo, kto by nas słuchał.

Ale my jesteśmy prawdziwi. I to nas ta rozmowa kształtuje. Nasze nawyki, nasze myślenie, naszą odporność na to, że ktoś się z nami nie zgadza.

Dlatego sposób, w jaki ją prowadzimy, ma znaczenie. Nie ze względu na nią. Ze względu na nas.

Dziękuję.

---

## 24 · Jak powstała ta prezentacja? ⏱ 0:35 (15:05)

> **Na ekranie:** 6 punktów

Jeszcze jedna rzecz, bo byłoby nieuczciwie tego nie powiedzieć.

Zrobiłem tę prezentację z ej aj — dokładnie tak, jak przez ostatni kwadrans namawiałem was, żeby nie robić. A potem po kolei to naprawiałem.

Tłumaczenie na polski wyszło źle, więc włączyłem analizę przez filologa polskiego, potem usunąłem cały tekst i kazałem go wygenerować od nowa po polsku. Na końcu kazałem sprawdzić, czy źródła mówią to, co im przypisałem. Nie wszystkie mówiły — jeden slajd poszedł do kosza.

Zwróćcie uwagę, gdzie na tej liście jestem ja. W każdym miejscu, w którym trzeba było powiedzieć „nie, to jest słabe”.

**Przejście:** „Wszystkie źródła są tutaj”.

---

## 25 · Źródła ⏱ — (zostaje na ekranie)

> **Na ekranie:** 37 linków, sześć grup tematycznych

Wszystkie źródła są tutaj, linki są klikalne. Zostawiam to na ekranie na czas pytań.

---

## Zapas: 30 sekund (bez slajdu 24)

Cały skrypt to 15:05, ale slajd 24 jest opcjonalny — bez niego kończysz na 14:30.
Jeśli zostaje czas, najlepsze miejsca na rozwinięcie:

- **Slajd 11** — zrób to na żywo. Otwórz czat, zadaj to samo pytanie w dwóch ramach.
  Efekt jest mocniejszy niż opis. _(kosztuje ~2 min — tylko przy naprawdę dużym zapasie)_
- **Slajd 18** — historia żałoby po wycofaniu jednej wersji modelu.
- **Slajd 14** — dostęp do terapii w Polsce, jeśli publiczność jest lokalna.
- **Slajd 20** — incydent 1106 z bazy incydentów ej aj: przymusowe hospitalizacje
  i odstawianie leków po rozmowach z czatem.
