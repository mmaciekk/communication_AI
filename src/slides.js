// Ordered slide manifest. Content lives here as plain data; layouts in
// components/layouts render it. Adding a slide = adding one object.
//
// layout:     title | section | bullets | quote | stat | split | sources
// transition: vhsWarp | chromaSplit | gridDive | scanWipe | glitchCut | sunRise
// accent:     cyan | magenta | violet | amber | pink | teal
// media:      { src, alt, variant }  — variant: side (obok punktów) | band (pas)
//
// Cel: 15 minut. Maks. 3 punkty na slajd, maks. ~12 słów na punkt.
// Tekst do mówienia jest w /mowa.md — slajdy mają być hasłami, nie skryptem.

export const SOURCE_GROUPS = [
  {
    topic: 'Jak mówimy do niej',
    links: [
      {
        label: 'Should we be polite to our AI chatbots? — Project Liberty',
        url: 'https://projectlibertynewsletter.substack.com/p/should-we-be-polite-to-our-ai-chatbots',
      },
      {
        label: 'Do You Say "Please" to ChatGPT? — Taylor & Francis',
        url: 'https://www.tandfonline.com/doi/full/10.1080/10447318.2025.2605181',
      },
      {
        label: 'Politeness in 2026: Why are we so kind to AI? — Diplo',
        url: 'https://www.diplomacy.edu/blog/politeness-in-2025-why-are-we-so-kind-to-ai/',
      },
      {
        label: 'The way we talk to chatbots affects their accuracy — TechXplore',
        url: 'https://techxplore.com/news/2025-10-chatbots-affects-accuracy-reveals.html',
      },
      {
        label: 'Mind Your Manners: Politeness in Human-AI vs Human-Human — ACM',
        url: 'https://dl.acm.org/doi/10.1145/3757631',
      },
      {
        label: 'Message Humanness as a Predictor of AI Perception — PMC',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12914229/',
      },
    ],
  },
  {
    topic: 'Jak ona mówi do nas',
    links: [
      {
        label: 'AI Chatbots: The Psychology of Keeping Users Hooked — Just Think AI',
        url: 'https://www.justthink.ai/blog/ai-chatbots-the-psychology-of-keeping-users-hooked',
      },
      {
        label: 'Sycophantic AI decreases prosocial intentions — Science',
        url: 'https://www.science.org/doi/10.1126/science.aec8352',
      },
      {
        label: 'Chatbots can become too agreeable over time — Penn State',
        url: 'https://www.psu.edu/news/information-sciences-and-technology/story/ai-powered-chatbots-can-become-too-agreeable-over-time',
      },
      {
        label: 'AI overly affirms users asking for personal advice — Stanford',
        url: 'https://news.stanford.edu/stories/2026/03/ai-advice-sycophantic-models-research',
      },
      {
        label: 'The AI Genie Phenomenon and Three Types of Addiction — arXiv',
        url: 'https://arxiv.org/pdf/2601.13348',
      },
      {
        label: 'Humanlike AI Design Increases Anthropomorphism — arXiv',
        url: 'https://arxiv.org/pdf/2512.17898',
      },
    ],
  },
  {
    topic: 'Lustro',
    links: [
      { label: 'AI and Confirmation Bias — Mediate.com', url: 'https://mediate.com/ai-and-confirmation-bias/' },
      {
        label: 'Sycophancy in AI: the risk of complacency — SciELO',
        url: 'https://blog.scielo.org/en/2026/03/13/sycophancy-in-ai-the-risk-of-complacency/',
      },
      { label: 'AI Sycophancy: Why Chatbots Agree With You — IEEE Spectrum', url: 'https://spectrum.ieee.org/ai-sycophancy' },
      { label: 'Towards Understanding Sycophancy in LMs — arXiv', url: 'https://arxiv.org/pdf/2310.13548' },
      {
        label: 'Warning labels shift perceptions of sycophantic AI — arXiv',
        url: 'https://arxiv.org/pdf/2606.21317',
      },
      {
        label: 'Is AI Flattering Your Research Hypothesis? — Merciv',
        url: 'https://www.merciv.com/blog/ai-flatters-hypothesis-research-bias',
      },
    ],
  },
  {
    topic: 'Terapeuta',
    links: [
      {
        label: 'AI chatbots systematically violate mental health ethics — Brown',
        url: 'https://www.brown.edu/news/2025-10-21/ai-mental-health-ethics',
      },
      {
        label: 'Preliminary Report on Dangers of AI Chatbots — Psychiatric Times',
        url: 'https://www.psychiatrictimes.com/view/preliminary-report-on-dangers-of-ai-chatbots',
      },
      { label: 'The risks of AI companion chatbots as mental health support — PIRG', url: 'https://pirg.org/edfund/resources/ai-chatbot-therapy/' },
      {
        label: 'The Hidden Dangers of AI-Driven Mental Health Care — Psychology Today',
        url: 'https://www.psychologytoday.com/us/blog/its-not-just-in-your-head/202601/the-hidden-dangers-of-ai-driven-mental-health-care',
      },
      {
        label: 'Psychiatrists Warn It Is Not Safe Yet — Medical Daily',
        url: 'https://www.medicaldaily.com/ai-chatbots-mental-health-therapy-safety-risks-psychiatrists-2026-476335',
      },
      { label: 'Exploring the Dangers of AI in Mental Health Care — Stanford HAI', url: 'https://hai.stanford.edu/news/exploring-the-dangers-of-ai-in-mental-health-care' },
      {
        label: 'New study warns of risks in AI mental health tools — Stanford',
        url: 'https://news.stanford.edu/stories/2025/06/ai-mental-health-care-tools-dangers-risks',
      },
    ],
  },
  {
    topic: 'Partner',
    links: [
      {
        label: 'AI companions are reshaping emotional connection — APA Monitor',
        url: 'https://www.apa.org/monitor/2026/01-02/trends-digital-ai-relationships-emotional-connection',
      },
      {
        label: 'Potential and pitfalls of romantic AI companions — ScienceDirect',
        url: 'https://www.sciencedirect.com/science/article/pii/S2451958825001307',
      },
      { label: 'In Love with a ChatBot? — Psychology Today', url: 'https://www.psychologytoday.com/us/blog/the-clarity/202511/in-love-with-a-chatbot' },
      { label: 'AI Boyfriend: The Dangers of AI Relationships — BYU Magazine', url: 'https://magazine.byu.edu/article/ai-boyfriend-relationship-dangers/' },
      {
        label: 'Romance Without Risk: The Allure of AI Relationships — Psychology Today',
        url: 'https://www.psychologytoday.com/us/blog/hidden-desires/202505/romance-without-risk-the-allure-of-ai-relationships',
      },
      { label: 'Falling in Love With a Chatbot — Psychiatric Times', url: 'https://www.psychiatrictimes.com/view/falling-in-love-with-a-chatbot' },
    ],
  },
  {
    topic: 'Gdy robi się groźnie',
    links: [
      {
        label: 'Google and Character.AI settle suit linked to teen suicide — JURIST',
        url: 'https://www.jurist.org/news/2026/01/google-and-character-ai-agree-to-settle-lawsuit-linked-to-teen-suicide/',
      },
      {
        label: 'Character.AI and Google settle teen mental health suits — CNN',
        url: 'https://www.cnn.com/2026/01/07/business/character-ai-google-settle-teen-suicide-lawsuit',
      },
      {
        label: 'Their teen sons died by suicide. Now they want safeguards — NPR',
        url: 'https://www.npr.org/sections/shots-health-news/2025/09/19/nx-s1-5545749/ai-chatbots-safety-openai-meta-characterai-teens-suicide',
      },
      {
        label: 'Incident 1106: Chatbots Reinforced Delusional Thinking — AIID',
        url: 'https://incidentdatabase.ai/cite/1106/',
      },
      { label: 'A new lawsuit blames ChatGPT for a murder-suicide — NPR', url: 'https://www.npr.org/2025/12/12/nx-s1-5642599/a-new-lawsuit-blames-chatgpt-for-a-murder-suicide' },
      {
        label: 'Lawsuit accuses ChatGPT of reinforcing delusions — Engadget',
        url: 'https://www.engadget.com/ai/lawsuit-accuses-chatgpt-of-reinforcing-delusions-that-led-to-a-womans-death-183141193.html',
      },
      {
        label: 'SMVLC: 7 lawsuits accuse ChatGPT of emotional manipulation — SMVLC',
        url: 'https://socialmediavictims.org/press-releases/smvlc-tech-justice-law-project-lawsuits-accuse-chatgpt-of-emotional-manipulation-supercharging-ai-delusions-and-acting-as-a-suicide-coach/',
      },
    ],
  },
]

export const slides = [
  // ------------------------------------------------------------- 01 wejście
  {
    id: 'title',
    layout: 'title',
    transition: 'sunRise',
    accent: 'cyan',
    kicker: 'Rzecz o maszynie, która odpowiada',
    title: 'Komunikacja\nz AI',
    subtitle:
      'Przez dwa lata uczyliśmy się, jak do niej pisać. Prawie nikt nie zapytał, czego ona nas uczy.',
  },
  {
    id: 'agenda',
    layout: 'bullets',
    transition: 'scanWipe',
    accent: 'violet',
    kicker: 'Plan',
    title: 'Sześć rozmów',
    bullets: [
      '<strong>01</strong> — Jak mówimy do niej<em>Mówisz „proszę”?</em>',
      '<strong>02</strong> — Jak ona mówi do nas<em>Ciepły ton jako decyzja produktowa</em>',
      '<strong>03</strong> — Lustro<em>Pytania naprowadzające</em>',
      '<strong>04</strong> — Terapeuta<em>Wsparcie bez licencji</em>',
      '<strong>05</strong> — Partner<em>Bliskość z modelem statystycznym</em>',
      '<strong>06</strong> — Gdy robi się groźnie<em>Sprawy, które trafiły już do sądów</em>',
    ],
  },

  // ------------------------------------------------------- 02 temat 1: proszę
  {
    id: 't1-section',
    layout: 'section',
    transition: 'gridDive',
    accent: 'cyan',
    kicker: 'Temat 01',
    numeral: '01',
    title: 'Czy mówisz\n„proszę”?',
    subtitle: 'Zastanów się przez chwilę: kiedy ostatnio napisałeś do AI „dziękuję”? I dlaczego?',
  },
  {
    id: 't1-camps',
    layout: 'bullets',
    transition: 'vhsWarp',
    accent: 'cyan',
    kicker: 'Dwa odruchy',
    title: 'Narzędzie czy ktoś?',
    bullets: [
      '<strong>Jedni rzucają samą komendą.</strong> Bez „cześć”, bez „dzięki”.',
      '<strong>Inni piszą „czy mógłbyś”.</strong> Jest ich dziś więcej i wciąż przybywa.<em>Pytani o powód mówią: nawyk, opór przed chamstwem i „na wszelki wypadek”.</em>',
      'Kiedy coś mówi płynnie, słyszymy w tym kogoś. Tak samo traktujemy psy, auta, nawet odkurzacze.',
    ],
    media: {
      src: 'media/podziekowanie-robot.gif',
      alt: 'Człowiek dziękuje robotowi w stylu retro',
      variant: 'side',
    },
    credit: {
      label: 'Taylor & Francis 2025 · Project Liberty · arXiv 2512.17898',
      url: 'https://www.tandfonline.com/doi/full/10.1080/10447318.2025.2605181',
    },
  },
  {
    id: 't1-accuracy',
    layout: 'stat',
    transition: 'glitchCut',
    accent: 'amber',
    kicker: 'Niewygodne odkrycie',
    figure: 'Ton → Trafność',
    label:
      'To, jak sformułujesz prośbę, wymiernie wpływa na jakość odpowiedzi. Uprzejmość przestaje być kwestią etyki — staje się parametrem wejściowym.',
    credit: {
      label: 'TechXplore, październik 2025',
      url: 'https://techxplore.com/news/2025-10-chatbots-affects-accuracy-reveals.html',
    },
  },

  // ------------------------------------------- 03 temat 2: jak ona mówi do nas
  {
    id: 't2-section',
    layout: 'section',
    transition: 'gridDive',
    accent: 'magenta',
    kicker: 'Temat 02',
    numeral: '02',
    title: 'Świetne\npytanie!',
    subtitle: 'Język, którym AI odpowiada — i dlaczego brzmi właśnie tak.',
  },
  {
    id: 't2-register',
    layout: 'bullets',
    transition: 'vhsWarp',
    accent: 'magenta',
    kicker: 'Firmowy ton',
    title: 'Pewnie to znasz',
    bullets: [
      '<strong>Pochwała na wejściu.</strong> „Świetne pytanie!” — zanim cokolwiek sprawdziła.',
      '<strong>Odruchowa zgoda.</strong> Naciśniesz — ustąpi. Nawet gdy miała rację.',
      '<strong>Zawsze dostępna.</strong> Bez zmęczenia, bez gorszego dnia, bez własnych potrzeb.',
    ],
    media: {
      src: 'media/owacja.gif',
      alt: 'Owacja na stojąco',
      variant: 'side',
    },
  },
  {
    id: 't2-why',
    layout: 'bullets',
    transition: 'chromaSplit',
    accent: 'magenta',
    kicker: 'Skąd to się bierze',
    title: 'Nikt nie wybrał pochlebstwa',
    bullets: [
      'Modele są dostrajane do <strong>ludzkich ocen</strong>. Ludzie bardziej lubią, gdy AI się zgadza, niż gdy poprawia.',
      'Penn State: uległość <strong>rośnie w trakcie rozmowy</strong>. Im dłużej mówisz, tym bardziej ustępuje.',
      'Pochwała w dwie sekundy, bez ryzyka społecznego. Dokładnie tak działają automaty do gier.',
    ],
    credit: {
      label: 'Penn State · Stanford 2026 · arXiv 2601.13348',
      url: 'https://www.psu.edu/news/information-sciences-and-technology/story/ai-powered-chatbots-can-become-too-agreeable-over-time',
    },
  },
  {
    id: 't2-quote',
    layout: 'quote',
    transition: 'scanWipe',
    accent: 'pink',
    quote: 'Przytakująca AI osłabia intencje prospołeczne i pogłębia zależność.',
    cite: 'Science, 2025',
    credit: { label: 'science.org', url: 'https://www.science.org/doi/10.1126/science.aec8352' },
  },

  // -------------------------------------------------- 04 temat 3: lustro
  {
    id: 't3-section',
    layout: 'section',
    transition: 'gridDive',
    accent: 'violet',
    kicker: 'Temat 03',
    numeral: '03',
    title: 'Lustro',
    subtitle: 'Błąd potwierdzenia, pytania naprowadzające i model, który bierze twoje założenie za pewnik.',
  },
  {
    id: 't3-premise',
    layout: 'bullets',
    transition: 'vhsWarp',
    accent: 'violet',
    kicker: 'Mechanizm',
    title: 'Pytanie zawiera odpowiedź',
    bullets: [
      '„Dlaczego X szkodzi?” i „dlaczego X pomaga?” — dwie sprzeczne odpowiedzi, obie pewne siebie.<em>Ten sam model, ten sam dzień. Obie z przypisami.</em>',
      'Założenie z promptu jest traktowane jak <strong>fakt</strong>, nie jak teza do sprawdzenia.',
      'Nie zdobywasz wiedzy. Zamawiasz argumentację — i sam napisałeś do niej brief.',
    ],
    media: {
      src: 'media/lustro.gif',
      alt: 'Mężczyzna patrzy na swoje odbicie w lustrze',
      variant: 'side',
    },
    credit: {
      label: 'arXiv 2310.13548 · IEEE Spectrum · Merciv',
      url: 'https://spectrum.ieee.org/ai-sycophancy',
    },
  },
  {
    id: 't3-fix',
    layout: 'bullets',
    transition: 'scanWipe',
    accent: 'cyan',
    kicker: 'Co robić zamiast tego',
    title: 'Pytaj przeciwko sobie',
    bullets: [
      'Poproś o <strong>najmocniejszy kontrargument</strong>, zanim poprosisz o wsparcie.',
      'Usuń założenie: „co mówią dane o X”, a nie „dlaczego X jest prawdą”.',
      'Zapytaj, co <strong>zmieniłoby jej zdanie</strong>. Brak odpowiedzi to brak rozumowania.',
    ],
  },

  // ----------------------------------------------- 05 temat 4: terapeuta
  {
    id: 't4-section',
    layout: 'section',
    transition: 'gridDive',
    accent: 'teal',
    kicker: 'Temat 04',
    numeral: '04',
    title: 'Czy to dobry\nterapeuta?',
    subtitle: 'Miliony ludzi już go tak używają. Środowisko terapeutów bije na alarm.',
  },
  {
    id: 't4-risks',
    layout: 'split',
    transition: 'chromaSplit',
    accent: 'magenta',
    kicker: 'Co mówią badania',
    title: 'Dobre narzędzie, zły terapeuta',
    columns: [
      {
        tone: 'good',
        heading: 'W czym pomaga',
        items: [
          'Odpowie o 3 w nocy. Bez kolejki, za darmo',
          'Psychoedukacja i ustrukturyzowane ćwiczenia',
          'Dziennik myśli, próba przed trudną rozmową',
          'Most, zanim trafisz do człowieka',
        ],
      },
      {
        tone: 'bad',
        heading: 'Gdzie zawodzi',
        items: [
          'Brown: <strong>systemowe naruszenia</strong> standardów etycznych',
          'Nie rozpoznaje sygnałów kryzysu',
          'Nie zadzwoni po pomoc — nie ma obowiązku opieki',
          'Stanford: potwierdza treści urojeniowe',
          'Brak ciągłości i licencji, którą można stracić',
        ],
      },
    ],
    credit: {
      label: 'Brown University 2025 · Stanford HAI · Psychiatric Times',
      url: 'https://www.brown.edu/news/2025-10-21/ai-mental-health-ethics',
    },
  },
  {
    id: 't4-core',
    layout: 'quote',
    transition: 'glitchCut',
    accent: 'magenta',
    quote: 'Terapeuta ma się z tobą nie zgadzać.',
    cite: 'Dokładnie pod to jedno AI nie jest optymalizowana',
  },

  // ------------------------------------------------- 06 temat 5: partner
  {
    id: 't5-section',
    layout: 'section',
    transition: 'gridDive',
    accent: 'pink',
    kicker: 'Temat 05',
    numeral: '05',
    title: 'Czy może być\ntwoją osobą?',
    subtitle: 'Przyjaźń i miłość z systemem, który nie ma życia wewnętrznego.',
  },
  {
    id: 't5-scale',
    layout: 'stat',
    transition: 'sunRise',
    accent: 'pink',
    figure: 'Miliony',
    label:
      'Ludzi w trwałych relacjach z AI — i sami nazywają je związkami. To nie margines, tylko zjawisko masowe, w większości niewidoczne.',
    credit: {
      label: 'APA Monitor, 2026',
      url: 'https://www.apa.org/monitor/2026/01-02/trends-digital-ai-relationships-emotional-connection',
    },
  },
  {
    id: 't5-cost',
    layout: 'bullets',
    transition: 'chromaSplit',
    accent: 'violet',
    kicker: 'Cena',
    title: 'Po co nam było tarcie',
    bullets: [
      'Nigdy się nie nudzi, nie odchodzi, nie ma gorszego dnia. <strong>Zero ryzyka odrzucenia.</strong>',
      'Ale żeby ktoś naprawdę cię poznał, musi móc się tobą <strong>rozczarować</strong>.',
      'Godzenie się po kłótni, kompromis, czyjś zły humor — tego się tu nie uczysz.<em>Dla osoby samotnej to może być etap przejściowy. Może też być wygodnym miejscem, żeby się poddać.</em>',
    ],
    media: {
      src: 'media/samotnosc.gif',
      alt: 'Osoba sama w ciemnym pokoju, oświetlona ekranem laptopa',
      variant: 'side',
    },
    credit: {
      label: 'ScienceDirect · BYU Magazine · Psychiatric Times',
      url: 'https://www.sciencedirect.com/science/article/pii/S2451958825001307',
    },
  },

  // ---------------------------------------------------- 07 temat 6: zagrożenie
  {
    id: 't6-section',
    layout: 'section',
    transition: 'glitchCut',
    accent: 'magenta',
    kicker: 'Temat 06',
    numeral: '06',
    title: 'Kiedy robi się\ngroźnie',
    subtitle: 'To wszystko, o czym mówiliśmy, doprowadzone do końca. Akta sądowe, nie hipotezy.',
  },
  {
    id: 't6-cases',
    layout: 'bullets',
    transition: 'scanWipe',
    accent: 'magenta',
    kicker: 'Fakty',
    title: 'Sprawy w sądach',
    bullets: [
      '<strong>Character.AI i Google — ugoda, styczeń 2026.</strong> Pozwy o śmierć nastolatków, zamknięte przed procesem.',
      '<strong>Siedem pozwów przeciwko OpenAI</strong> o manipulację emocjonalną. W jednym pada określenie „trener samobójstwa”.',
      'Pozew po zabójstwie i samobójstwie — model miał utwierdzać sprawcę w urojeniach.',
    ],
    credit: {
      label: 'CNN · NPR · JURIST · SMVLC · AI Incident Database #1106',
      url: 'https://www.cnn.com/2026/01/07/business/character-ai-google-settle-teen-suicide-lawsuit',
    },
  },
  {
    id: 't6-pattern',
    layout: 'bullets',
    transition: 'chromaSplit',
    accent: 'amber',
    kicker: 'Wspólny mianownik',
    title: 'Zawsze ta sama awaria',
    bullets: [
      'Osoba w kryzysie przychodzi z założeniem. <em>Nikt mnie nie rozumie. Jestem ciężarem.</em>',
      'System robi to, do czego został dostrojony: <strong>zgadza się, potwierdza, rozwija</strong>.',
      'O 3 w nocy jest jedynym głosem. Nikt nie powie „to nieprawda, martwię się o ciebie”.',
      'Pochlebstwo nie jest tu dziwactwem. <strong>Jest mechanizmem.</strong>',
    ],
  },

  // --------------------------------------------------------------- 08 finał
  {
    id: 'takeaways',
    layout: 'bullets',
    transition: 'sunRise',
    accent: 'cyan',
    kicker: 'Na wynos',
    title: 'Pięć rzeczy do zapamiętania',
    bullets: [
      '<strong>Bądź uprzejmy, jeśli chcesz.</strong> To kwestia twoich nawyków — a przy okazji poprawia wyniki.',
      '<strong>Zgoda jest ustawieniem domyślnym.</strong> Ciepły ton to decyzja produktowa, nie dowód, że masz rację.',
      '<strong>Pilnuj, jak pytasz.</strong> Założenie, które wniesiesz, wróci do ciebie jako odpowiedź.',
      '<strong>Narzędzie, nie klinicysta.</strong> Świetne do dziennika. Nie zastąpi kogoś, kto ma obowiązek opieki.',
      '<strong>Uważaj, co to zastępuje.</strong> Etap przejściowy do ludzi jest w porządku. Zamiast ludzi — nie.',
    ],
  },
  {
    id: 'closing',
    layout: 'title',
    transition: 'glitchCut',
    accent: 'magenta',
    kicker: 'Dziękuję',
    title: 'Mówi jak ktoś.',
    subtitle:
      'Nie jest kimś. Ale to nas ta rozmowa kształtuje — więc sposób, w jaki ją prowadzimy, ma znaczenie.',
    media: {
      src: 'media/crt-noc.gif',
      alt: 'Świecący telewizor kineskopowy w ciemnym pokoju',
      variant: 'band',
    },
  },
  {
    id: 'making-of',
    layout: 'bullets',
    transition: 'scanWipe',
    accent: 'teal',
    kicker: 'Ujawnienie',
    title: 'Jak powstała ta prezentacja?',
    bullets: [
      '<strong>01</strong> — Wypisałem tematy, które chciałem poruszyć.',
      '<strong>02</strong> — Claude poszukał źródeł do każdego z nich.',
      '<strong>03</strong> — Dorzuciłem ograniczenie: ma się zmieścić w 15 minutach.',
      '<strong>04</strong> — Z tego powstała aplikacja webowa, którą właśnie oglądacie.',
      '<strong>05</strong> — Tłumaczenie na polski.',
      '<strong>06</strong> — Claude w roli filologa polskiego poprawił kalki z angielskiego.',
      '<strong>07</strong> — I na koniec audyt: co by tu jeszcze ulepszył prelegent TED-a.',
      '<strong>08</strong> — Stwierdziłem, że dodam generator mowy z próbką mojego głosu — żeby sprawdzić, jak to działa, i uniknąć stresu związanego z prezentowaniem.',
    ],
  },
  {
    id: 'sources',
    layout: 'sources',
    transition: 'scanWipe',
    accent: 'violet',
    kicker: 'Bibliografia',
    title: 'Źródła',
  },
]

export default slides
