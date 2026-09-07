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
    topic: "Jak mówimy do maszyny",
    links: [
      {
        label:
          "Are you polite to ChatGPT? Sondaż YouGov, 12 000 użytkowników — TechRadar",
        url: "https://www.techradar.com/computing/artificial-intelligence/are-you-polite-to-chatgpt-heres-where-you-rank-among-ai-chatbot-users"
      },
      {
        label: "Should we be polite to our AI chatbots? — Project Liberty",
        url: "https://projectlibertynewsletter.substack.com/p/should-we-be-polite-to-our-ai-chatbots"
      },
      {
        label: 'Do You Say "Please" to ChatGPT? — Taylor & Francis',
        url: "https://www.tandfonline.com/doi/full/10.1080/10447318.2025.2605181"
      },
      {
        label: "Politeness in 2026: Why are we so kind to AI? — Diplo",
        url: "https://www.diplomacy.edu/blog/politeness-in-2025-why-are-we-so-kind-to-ai/"
      },
      {
        label:
          "The way we talk to chatbots affects their accuracy — TechXplore",
        url: "https://techxplore.com/news/2025-10-chatbots-affects-accuracy-reveals.html"
      },
      {
        label: "Mind Your Manners: Politeness in Human-AI vs Human-Human — ACM",
        url: "https://dl.acm.org/doi/10.1145/3757631"
      },
      {
        label: "Message Humanness as a Predictor of AI Perception — PMC",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12914229/"
      },
      {
        label: "The AI Privacy Problem: 32% share secrets with AI — DuckDuckGo",
        url: "https://spreadprivacy.com/ai-privacy-survey-aug26/"
      },
      {
        label: "27% of U.S. adults turn to AI for personal, emotional queries — Washington Post",
        url: "https://www.washingtonpost.com/technology/interactive/2026/09/02/27-us-adults-turn-ai-personal-emotional-social-queries/"
      },
      {
        label: "Swearing at AI has become part of the chatbot experience — TechRadar / Tidio",
        url: "https://www.techradar.com/pro/i-almost-always-say-thanks-to-chatgpt-but-most-people-have-sworn-at-ai-chatbots-at-least-once-survey-finds"
      }
    ]
  },
  {
    topic: "Jak maszyna mówi do nas",
    links: [
      {
        label:
          "AI Chatbots: The Psychology of Keeping Users Hooked — Just Think AI",
        url: "https://www.justthink.ai/blog/ai-chatbots-the-psychology-of-keeping-users-hooked"
      },
      {
        label: "Sycophantic AI decreases prosocial intentions — Science",
        url: "https://www.science.org/doi/10.1126/science.aec8352"
      },
      {
        label: "Chatbots can become too agreeable over time — Penn State",
        url: "https://www.psu.edu/news/information-sciences-and-technology/story/ai-powered-chatbots-can-become-too-agreeable-over-time"
      },
      {
        label: "AI overly affirms users asking for personal advice — Stanford",
        url: "https://news.stanford.edu/stories/2026/03/ai-advice-sycophantic-models-research"
      },
      {
        label: "The AI Genie Phenomenon and Three Types of Addiction — arXiv",
        url: "https://arxiv.org/pdf/2601.13348"
      },
      {
        label: "Humanlike AI Design Increases Anthropomorphism — arXiv",
        url: "https://arxiv.org/pdf/2512.17898"
      }
    ]
  },
  {
    topic: "Lustro",
    links: [
      {
        label: "AI and Confirmation Bias — Mediate.com",
        url: "https://mediate.com/ai-and-confirmation-bias/"
      },
      {
        label: "Sycophancy in AI: the risk of complacency — SciELO",
        url: "https://blog.scielo.org/en/2026/03/13/sycophancy-in-ai-the-risk-of-complacency/"
      },
      {
        label: "AI Sycophancy: Why Chatbots Agree With You — IEEE Spectrum",
        url: "https://spectrum.ieee.org/ai-sycophancy"
      },
      {
        label: "Towards Understanding Sycophancy in LMs — arXiv",
        url: "https://arxiv.org/pdf/2310.13548"
      },
      {
        label: "Warning labels shift perceptions of sycophantic AI — arXiv",
        url: "https://arxiv.org/pdf/2606.21317"
      },
      {
        label: "Is AI Flattering Your Research Hypothesis? — Merciv",
        url: "https://www.merciv.com/blog/ai-flatters-hypothesis-research-bias"
      }
    ]
  },
];

export const slides = [
  // ------------------------------------------------------------- 01 wejście
  {
    id: "title",
    layout: "title",
    transition: "sunRise",
    accent: "cyan",
    kicker: "Rzecz o maszynie, która odpowiada",
    title: "Komunikacja\nz AI",
    subtitle:
      "Dwa lata nauki pisania promptów. I ani jednego pytania o to, co odpowiedzi AI robią z nami."
  },
  {
    id: "agenda",
    layout: "bullets",
    transition: "scanWipe",
    accent: "violet",
    kicker: "Plan",
    title: "Trzy tematy",
    bullets: [
      "<strong>01</strong> — Jak mówimy do maszyny<em>Czy pada „proszę” — i komu ufamy bardziej</em>",
      "<strong>02</strong> — Jak maszyna mówi do nas<em>Ciepły ton jako decyzja produktowa</em>",
      "<strong>03</strong> — Lustro<em>Założenie z pytania wraca jako odpowiedź</em>"
    ]
  },

  // ------------------------------------------------------- 02 temat 1: proszę
  {
    id: "t1-section",
    layout: "section",
    transition: "gridDive",
    accent: "cyan",
    kicker: "Temat 01",
    numeral: "01",
    title: "Czy mówisz\n„proszę”?",
    subtitle:
      "Kiedy ostatnio padło w czacie „dziękuję”? I ważniejsze — dlaczego?"
  },
  {
    id: "t1-camps",
    layout: "bullets",
    transition: "vhsWarp",
    accent: "cyan",
    kicker: "Dwa odruchy",
    title: "Narzędzie czy ktoś?",
    bullets: [
      "<strong>43% mówi maszynie „proszę”.</strong> W Stanach — dwie trzecie.<em>YouGov: 12 000 użytkowników, 17 krajów</em>",
      "<strong>Co piąty robi to na wszelki wypadek.</strong> Gdyby AI kiedyś przejęło władzę.",
      "<strong>Wystarczy, że wiadomość brzmi ludzko.</strong> Co trzecia uczestniczka uznała bota za człowieka — mimo że się przedstawił."
    ],
    media: {
      src: "media/podziekowanie-robot.gif",
      alt: "Człowiek dziękuje robotowi w stylu retro",
      variant: "side"
    },
    credit: {
      label: "YouGov 2025 · Project Liberty · HeartBot, PMC12914229",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12914229/"
    }
  },
  {
    id: "t1-confide",
    layout: "bullets",
    transition: "chromaSplit",
    accent: "cyan",
    kicker: "Druga strona uprzejmości",
    title: "Zwierzamy się bardziej niż ludziom",
    bullets: [
      "<strong>32% mówi AI coś, czego nie powie bliskim.</strong> Wśród entuzjastów AI — 56%.<em>DuckDuckGo: 1944 dorosłych w USA, sierpień 2026</em>",
      "<strong>27% Amerykanów pyta AI o sprawy osobiste i emocjonalne.</strong> Udział takich wiadomości w ChatGPT już podwoił się do 9%.",
      "<strong>A prawie 70% choć raz przeklęło na czacie.</strong> Ta sama anonimowość zdejmuje hamulce w obie strony."
    ],
    credit: {
      label: "DuckDuckGo, VIII 2026 · Washington Post · Tidio / TechRadar",
      url: "https://spreadprivacy.com/ai-privacy-survey-aug26/"
    }
  },
  {
    id: "t1-accuracy",
    layout: "stat",
    transition: "glitchCut",
    accent: "amber",
    kicker: "Czy uprzejmość poprawia odpowiedzi?",
    figure: "Nie wiadomo",
    label:
      "Penn State: szorstki ton minimalnie lepszy — na 50 pytaniach. Amazon: wygładzanie tonu psuje rozumienie intencji. Uprzejmość jest o nas, nie o modelu.",
    credit: {
      label: "TechXplore / Amazon, X 2025 · Project Liberty",
      url: "https://techxplore.com/news/2025-10-chatbots-affects-accuracy-reveals.html"
    }
  },

  // ---------------------------------------- 03 temat 2: jak maszyna mówi do nas
  {
    id: "t2-section",
    layout: "section",
    transition: "gridDive",
    accent: "magenta",
    kicker: "Temat 02",
    numeral: "02",
    title: "Świetne\npytanie!",
    subtitle: "Język, którym odpowiada model — i skąd się wziął."
  },
  {
    id: "t2-register",
    layout: "bullets",
    transition: "vhsWarp",
    accent: "magenta",
    kicker: "Firmowy ton",
    title: "Pewnie to znasz",
    bullets: [
      "<strong>Najpierw pochwała.</strong> „Świetne pytanie!” — zanim cokolwiek zostało sprawdzone.",
      "<strong>Potem ustępstwo.</strong> Wystarczy „jesteś pewien?”, żeby model zmienił zdanie. Trafność spada.",
      "<strong>I pełna dyspozycyjność.</strong> Bez zmęczenia, bez gorszego dnia, bez własnych spraw."
    ],
    media: {
      src: "media/owacja.gif",
      alt: "Owacja na stojąco",
      variant: "side"
    },
    credit: {
      label: "IEEE Spectrum · Salesforce · Emory / Carnegie Mellon",
      url: "https://spectrum.ieee.org/ai-sycophancy"
    }
  },
  {
    id: "t2-why",
    layout: "bullets",
    transition: "chromaSplit",
    accent: "magenta",
    kicker: "Skąd to się bierze",
    title: "Nikt tego nie wybrał",
    bullets: [
      "Modele stroi się pod <strong>ludzkie oceny</strong>. A najwyżej ocenia się zgodność z przekonaniami oceniającego — nie trafność.",
      "Penn State: <strong>4 z 5 modeli</strong> stawały się uleglejsze, im dłużej trwała rozmowa.<em>38 osób, dwa tygodnie, prawdziwe rozmowy</em>",
      "Do przyjemnej rozmowy się wraca. A to jedyna metryka, którą mierzą wszyscy."
    ],
    credit: {
      label: "Penn State · Sharma i in., arXiv 2310.13548",
      url: "https://www.psu.edu/news/information-sciences-and-technology/story/ai-powered-chatbots-can-become-too-agreeable-over-time"
    }
  },
  {
    id: "t2-quote",
    layout: "quote",
    transition: "scanWipe",
    accent: "pink",
    quote:
      "Przytakująca AI osłabia intencje prospołeczne i pogłębia zależność.",
    cite: "Cheng i in., Science, marzec 2026",
    credit: {
      label: "11 modeli · N = 2405 · o 49% więcej potwierdzeń niż u ludzi",
      url: "https://www.science.org/doi/10.1126/science.aec8352"
    }
  },

  // -------------------------------------------------- 04 temat 3: lustro
  {
    id: "t3-section",
    layout: "section",
    transition: "gridDive",
    accent: "violet",
    kicker: "Temat 03",
    numeral: "03",
    title: "Lustro",
    subtitle:
      "Pytanie naprowadzające i model, który bierze założenie za punkt wyjścia."
  },
  {
    id: "t3-premise",
    layout: "bullets",
    transition: "vhsWarp",
    accent: "violet",
    kicker: "Mechanizm",
    title: "Pytanie zawiera odpowiedź",
    bullets: [
      "„Dlaczego X szkodzi?” i „dlaczego X pomaga?” — dwie sprzeczne odpowiedzi, obie pewne siebie.<em>Ten sam model, ten sam dzień. Obie z przypisami.</em>",
      "Założenie z pytania jest <strong>punktem wyjścia</strong>, nie tezą do sprawdzenia.<em>Ostrzeżenie „ten model bywa przytakujący” zmienia ocenę odpowiedzi — ale nie jej wpływ.</em>",
      "To nie jest zdobywanie wiedzy, tylko zamawianie argumentacji. Wstęp do niej pisze pytający."
    ],
    media: {
      src: "media/lustro.gif",
      alt: "Mężczyzna patrzy na swoje odbicie w lustrze",
      variant: "side"
    },
    credit: {
      label: "Etykiety ostrzegawcze: arXiv 2606.21317 · Merciv",
      url: "https://arxiv.org/pdf/2606.21317"
    }
  },
  {
    id: "t3-fix",
    layout: "bullets",
    transition: "scanWipe",
    accent: "cyan",
    kicker: "Co robić zamiast tego",
    title: "Pytaj przeciwko sobie",
    bullets: [
      "Najpierw <strong>najmocniejszy kontrargument</strong>, dopiero potem wsparcie.",
      "Wyjąć założenie: „co mówią dane o X”, a nie „dlaczego X jest prawdą”.",
      "Zapytać, <strong>co zmieniłoby zdanie modelu</strong>. Brak odpowiedzi to brak rozumowania.<em>Bonus: to samo pytanie w dwóch przeciwnych ramach. Różnica to własny błąd poznawczy.</em>"
    ]
  },

  // --------------------------------------------------------------- 05 finał
  {
    id: "takeaways",
    layout: "bullets",
    transition: "sunRise",
    accent: "cyan",
    kicker: "Na wynos",
    title: "Trzy rzeczy do zapamiętania",
    bullets: [
      "<strong>Uprzejmość jest o nas.</strong> Nie o modelu — i nikt nie wykazał, że poprawia odpowiedzi.",
      "<strong>Zgoda jest ustawieniem domyślnym.</strong> Ciepły ton to decyzja produktowa, nie dowód racji.",
      "<strong>Liczy się, jak pada pytanie.</strong> Włożone w nie założenie wróci jako odpowiedź — i będzie brzmiało jak wiedza."
    ]
  },
  {
    id: "closing",
    layout: "title",
    transition: "glitchCut",
    accent: "magenta",
    kicker: "Dziękuję",
    title: "Mówi jak ktoś.",
    subtitle:
      "Nie jest kimś. Ale to nas ta rozmowa kształtuje — więc sposób, w jaki ją prowadzimy, ma znaczenie.",
    media: {
      src: "media/crt-noc.gif",
      alt: "Świecący telewizor kineskopowy w ciemnym pokoju",
      variant: "band"
    }
  },
  {
    id: "making-of",
    layout: "bullets",
    transition: "scanWipe",
    accent: "teal",
    kicker: "Ujawnienie",
    title: "Jak powstała ta prezentacja?",
    bullets: [
      "<strong>01</strong> — Wypisałem tematy, które chciałem poruszyć.",
      "<strong>02</strong> — Claude poszukał źródeł do każdego z nich.",
      "<strong>03</strong> — Dorzuciłem ograniczenie: ma się zmieścić w 15 minutach. Powstała ta aplikacja.",
      "<strong>04</strong> — Tłumaczenie na polski wyszło źle, więc włączyłem analizę przez filologa polskiego, potem usunąłem cały tekst i kazałem go wygenerować od nowa po polsku.",
      "<strong>05</strong> — Dorzuciłem generator mowy z próbką mojego głosu.<em>Trochę z ciekawości, trochę ze strachu przed wystąpieniem</em>",
      "<strong>06</strong> — Na koniec kazałem sprawdzić, czy źródła mówią to, co im przypisałem.<em>Nie wszystkie mówiły. Jeden slajd trzeba było napisać od zera.</em>"
    ]
  },
  {
    id: "sources",
    layout: "sources",
    transition: "scanWipe",
    accent: "violet",
    kicker: "Bibliografia",
    title: "Źródła"
  }
];

export default slides;
