"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { services } from "../data/services";
import ContactMap from "../components/ContactMap";
import { useLanguage } from "../components/LanguageProvider";

const serviceFallbackKeys = [
  "pco",
  "ochrana_osob",
  "ochrana_majetku",
  "kamerove_systemy",
  "prevoz_cenin",
];

const pageTranslations = {
  sk: {
    hero: {
      eyebrow: "Fortis Security",
      title: "Spoľahlivý partner pre vašu bezpečnosť",
      text: "Fortis Security je spoľahlivým partnerom v oblasti bezpečnostných služieb. Od roku 2021 poskytujeme komplexné riešenia v oblasti ochrany osôb, majetku a objektov.",
      primaryButton: "Naše služby",
      secondaryButton: "Kontakt",
      brand: "Fortis Security",
      marquee:
        "Špecialisti na bezpečnostné služby • ochrana osôb • ochrana majetku • PCO • kamerové systémy • prevoz cenín • ochrana podujatí •",
    },

    stats: [
      { value: "24/7", label: "nepretržitý dohľad" },
      { value: "2021", label: "pôsobíme od roku" },
      { value: "5+", label: "oblastí služieb" },
      { value: "100%", label: "spokojnosť zákazníkov" },
    ],

    targetGroupsTitle: {
      eyebrow: "Pre koho sú služby",
      title: "Vyberte si riešenie pre vašu bezpečnosť",
      text: "Bezpečnostné služby sú rozdelené do prehľadných oblastí. Vyberte si službu, ktorá najviac zodpovedá vašim potrebám, a otvoríte jej detail.",
    },

    servicesSection: {
      detailButton: "Detail služby",
    },

    serviceTexts: {
      pco: {
        shortTitle: "PCO",
        intro:
          "Nepretržité monitorovanie objektov cez pult centralizovanej ochrany a rýchla reakcia pri narušení.",
        items: [
          "Nepretržitý dohľad",
          "Rýchla reakcia",
          "Monitoring objektov",
          "Ochrana majetku",
        ],
      },
      ochrana_osob: {
        shortTitle: "Ochrana osôb",
        intro:
          "Osobná ochrana pre klientov, ktorí potrebujú zvýšenú bezpečnosť, diskrétny prístup a profesionálny dohľad.",
        items: [
          "Osobná ochrana",
          "Diskrétny prístup",
          "Bezpečný sprievod",
          "Profesionálny dohľad",
        ],
      },
      ochrana_majetku: {
        shortTitle: "Ochrana majetku",
        intro:
          "Zabezpečenie budov, prevádzok, skladov a súkromného majetku fyzickou ochranou alebo technickými riešeniami.",
        items: [
          "Ochrana objektov",
          "Kontrola vstupov",
          "Dohľad nad priestormi",
          "Prevencia škôd",
        ],
      },
      kamerove_systemy: {
        shortTitle: "Kamerové systémy",
        intro:
          "Kamerové riešenia pre domácnosti, firmy, sklady, areály a rizikové priestory s dôrazom na prehľad a bezpečnosť.",
        items: [
          "Monitoring priestoru",
          "Prevencia incidentov",
          "Kontrola objektov",
          "Technická bezpečnosť",
        ],
      },
      prevoz_cenin: {
        shortTitle: "Prevoz cenín",
        intro:
          "Bezpečný prevoz hotovosti, cenín, cenností a dôležitých zásielok podľa potrieb klienta.",
        items: [
          "Prevoz hotovosti",
          "Prevoz cenností",
          "Diskrétny prístup",
          "Bezpečné doručenie",
        ],
      },
      ochrana_podujati: {
        shortTitle: "Ochrana podujatí",
        intro:
          "Bezpečnostný dohľad pri kultúrnych, športových a spoločenských podujatiach vrátane usmerňovania návštevníkov.",
        items: [
          "Kultúrne akcie",
          "Športové akcie",
          "Kontrola vstupov",
          "Ochrana návštevníkov",
        ],
      },
      podujatia: {
        shortTitle: "Ochrana podujatí",
        intro:
          "Bezpečnostný dohľad pri kultúrnych, športových a spoločenských podujatiach vrátane usmerňovania návštevníkov.",
        items: [
          "Kultúrne akcie",
          "Športové akcie",
          "Kontrola vstupov",
          "Ochrana návštevníkov",
        ],
      },
    },

    about: {
      eyebrow: "O nás",
      title: "Bezpečnosť, na ktorú sa môžete spoľahnúť",
      text: "Naše skúsenosti, profesionálny prístup a dôraz na bezpečnosť nám umožňujú poskytovať služby na vysokej úrovni pre súkromných aj firemných klientov. Naším cieľom je prinášať istotu, ochranu a pokoj každému zákazníkovi.",
      items: [
        "Nepretržitý dohľad nad chránenými objektmi",
        "Rýchla reakcia pri bezpečnostných incidentoch",
        "Profesionálny a zodpovedný prístup",
        "Individuálne riešenia podľa potrieb klienta",
      ],
    },

    reasonsSection: {
      eyebrow: "Prečo Fortis Security",
      title: "Istota, ochrana a pokoj pre každého zákazníka",
      text: "Bezpečnosť riešime komplexne — od monitoringu cez fyzickú ochranu až po technické zabezpečenie a ochranu podujatí.",
      reasons: [
        "Nepretržitý dohľad nad chránenými objektmi",
        "Rýchla reakcia pri bezpečnostných incidentoch",
        "Profesionálny a zodpovedný prístup",
        "Individuálne riešenia podľa potrieb klienta",
        "Ochrana osôb, majetku a objektov",
        "Technická aj fyzická bezpečnosť na jednom mieste",
      ],
    },

    contact: {
      eyebrow: "Kontakt",
      title: "Potrebujete zabezpečiť objekt, osobu alebo podujatie?",
      text: "Kontaktujte nás a pripravíme bezpečnostné riešenie podľa vašich požiadaviek.",
      phoneLabel: "Telefón",
      emailLabel: "E-mail",
      addressLabel: "Adresa",
      address: "Obrancov mieru 1346/11",
      slogan: "Spoľahlivý partner pre vašu bezpečnosť",
      openContact: "Otvoriť kontakt",
    },

    footer: {
      rights: "© 2026 Fortis Security. Všetky práva vyhradené.",
    },
  },

  en: {
    hero: {
      eyebrow: "Fortis Security",
      title: "A reliable partner for your safety",
      text: "Fortis Security is a reliable partner in the field of security services. Since 2021, we have provided comprehensive solutions for the protection of people, property and buildings.",
      primaryButton: "Our services",
      secondaryButton: "Contact",
      brand: "Fortis Security",
      marquee:
        "Specialists in security services • personal protection • property protection • monitoring center • camera systems • valuables transport • event security •",
    },

    stats: [
      { value: "24/7", label: "continuous monitoring" },
      { value: "2021", label: "operating since" },
      { value: "5+", label: "service areas" },
      { value: "100%", label: "customer satisfaction" },
    ],

    targetGroupsTitle: {
      eyebrow: "Who we serve",
      title: "Choose a solution for your safety",
      text: "Security services are divided into clear areas. Choose the service that best matches your needs and open its detail page.",
    },

    servicesSection: {
      detailButton: "Service detail",
    },

    serviceTexts: {
      pco: {
        shortTitle: "Monitoring center",
        intro:
          "Continuous monitoring of protected buildings through a central monitoring station and fast response in case of intrusion.",
        items: [
          "Continuous monitoring",
          "Fast response",
          "Building supervision",
          "Property protection",
        ],
      },
      ochrana_osob: {
        shortTitle: "Personal protection",
        intro:
          "Personal protection for clients who require increased safety, discretion and professional supervision.",
        items: [
          "Personal protection",
          "Discreet approach",
          "Safe escort",
          "Professional supervision",
        ],
      },
      ochrana_majetku: {
        shortTitle: "Property protection",
        intro:
          "Protection of buildings, business premises, warehouses and private property using physical security or technical solutions.",
        items: [
          "Building protection",
          "Entrance control",
          "Area supervision",
          "Damage prevention",
        ],
      },
      kamerove_systemy: {
        shortTitle: "Camera systems",
        intro:
          "Camera solutions for households, companies, warehouses, areas and high-risk spaces with a focus on safety and control.",
        items: [
          "Area monitoring",
          "Incident prevention",
          "Building control",
          "Technical security",
        ],
      },
      prevoz_cenin: {
        shortTitle: "Valuables transport",
        intro:
          "Safe transport of cash, valuables and important deliveries according to the client’s needs.",
        items: [
          "Cash transport",
          "Valuables transport",
          "Discreet approach",
          "Secure delivery",
        ],
      },
      ochrana_podujati: {
        shortTitle: "Event security",
        intro:
          "Security supervision for cultural, sports and social events, including entrance control and visitor guidance.",
        items: [
          "Cultural events",
          "Sports events",
          "Entrance control",
          "Visitor protection",
        ],
      },
      podujatia: {
        shortTitle: "Event security",
        intro:
          "Security supervision for cultural, sports and social events, including entrance control and visitor guidance.",
        items: [
          "Cultural events",
          "Sports events",
          "Entrance control",
          "Visitor protection",
        ],
      },
    },

    about: {
      eyebrow: "About us",
      title: "Security you can rely on",
      text: "Our experience, professional approach and focus on safety allow us to provide high-quality services for private and business clients. Our goal is to bring confidence, protection and peace of mind to every customer.",
      items: [
        "Continuous monitoring of protected buildings",
        "Fast response to security incidents",
        "Professional and responsible approach",
        "Individual solutions based on client needs",
      ],
    },

    reasonsSection: {
      eyebrow: "Why Fortis Security",
      title: "Confidence, protection and peace of mind for every customer",
      text: "We handle security comprehensively — from monitoring and physical protection to technical security and event protection.",
      reasons: [
        "Continuous monitoring of protected buildings",
        "Fast response to security incidents",
        "Professional and responsible approach",
        "Individual solutions based on client needs",
        "Protection of people, property and buildings",
        "Technical and physical security in one place",
      ],
    },

    contact: {
      eyebrow: "Contact",
      title: "Do you need to secure a building, person or event?",
      text: "Contact us and we will prepare a security solution according to your requirements.",
      phoneLabel: "Phone",
      emailLabel: "E-mail",
      addressLabel: "Address",
      address: "Obrancov mieru 1346/11",
      slogan: "A reliable partner for your safety",
      openContact: "Open contact",
    },

    footer: {
      rights: "© 2026 Fortis Security. All rights reserved.",
    },
  },

  de: {
    hero: {
      eyebrow: "Fortis Security",
      title: "Ein zuverlässiger Partner für Ihre Sicherheit",
      text: "Fortis Security ist ein zuverlässiger Partner im Bereich Sicherheitsdienstleistungen. Seit 2021 bieten wir umfassende Lösungen zum Schutz von Personen, Eigentum und Objekten.",
      primaryButton: "Unsere Dienstleistungen",
      secondaryButton: "Kontakt",
      brand: "Fortis Security",
      marquee:
        "Spezialisten für Sicherheitsdienstleistungen • Personenschutz • Objektschutz • Notruf- und Serviceleitstelle • Kamerasysteme • Werttransport • Veranstaltungsschutz •",
    },

    stats: [
      { value: "24/7", label: "durchgehende Überwachung" },
      { value: "2021", label: "tätig seit" },
      { value: "5+", label: "Dienstleistungsbereiche" },
      { value: "100%", label: "Kundenzufriedenheit" },
    ],

    targetGroupsTitle: {
      eyebrow: "Für wen sind die Dienstleistungen",
      title: "Wählen Sie eine Lösung für Ihre Sicherheit",
      text: "Die Sicherheitsdienstleistungen sind in übersichtliche Bereiche gegliedert. Wählen Sie die Dienstleistung, die am besten zu Ihren Bedürfnissen passt, und öffnen Sie ihre Detailseite.",
    },

    servicesSection: {
      detailButton: "Dienstleistung ansehen",
    },

    serviceTexts: {
      pco: {
        shortTitle: "Leitstelle",
        intro:
          "Ständige Überwachung geschützter Objekte über eine zentrale Leitstelle und schnelle Reaktion bei Vorfällen.",
        items: [
          "Ständige Überwachung",
          "Schnelle Reaktion",
          "Objektüberwachung",
          "Eigentumsschutz",
        ],
      },
      ochrana_osob: {
        shortTitle: "Personenschutz",
        intro:
          "Personenschutz für Kunden, die erhöhte Sicherheit, Diskretion und professionelle Betreuung benötigen.",
        items: [
          "Personenschutz",
          "Diskreter Ansatz",
          "Sichere Begleitung",
          "Professionelle Betreuung",
        ],
      },
      ochrana_majetku: {
        shortTitle: "Objektschutz",
        intro:
          "Schutz von Gebäuden, Betriebsstätten, Lagern und Privateigentum durch physische Sicherheit oder technische Lösungen.",
        items: [
          "Objektschutz",
          "Eingangskontrolle",
          "Bereichsüberwachung",
          "Schadensvorbeugung",
        ],
      },
      kamerove_systemy: {
        shortTitle: "Kamerasysteme",
        intro:
          "Kameralösungen für Haushalte, Unternehmen, Lager, Areale und Risikobereiche mit Fokus auf Sicherheit und Kontrolle.",
        items: [
          "Raumüberwachung",
          "Vorbeugung von Vorfällen",
          "Objektkontrolle",
          "Technische Sicherheit",
        ],
      },
      prevoz_cenin: {
        shortTitle: "Werttransport",
        intro:
          "Sicherer Transport von Bargeld, Wertgegenständen und wichtigen Sendungen nach den Bedürfnissen des Kunden.",
        items: [
          "Bargeldtransport",
          "Werttransport",
          "Diskreter Ansatz",
          "Sichere Zustellung",
        ],
      },
      ochrana_podujati: {
        shortTitle: "Veranstaltungsschutz",
        intro:
          "Sicherheitsüberwachung bei Kultur-, Sport- und Gesellschaftsveranstaltungen einschließlich Eingangskontrolle.",
        items: [
          "Kulturveranstaltungen",
          "Sportveranstaltungen",
          "Eingangskontrolle",
          "Besucherschutz",
        ],
      },
      podujatia: {
        shortTitle: "Veranstaltungsschutz",
        intro:
          "Sicherheitsüberwachung bei Kultur-, Sport- und Gesellschaftsveranstaltungen einschließlich Eingangskontrolle.",
        items: [
          "Kulturveranstaltungen",
          "Sportveranstaltungen",
          "Eingangskontrolle",
          "Besucherschutz",
        ],
      },
    },

    about: {
      eyebrow: "Über uns",
      title: "Sicherheit, auf die Sie sich verlassen können",
      text: "Unsere Erfahrung, unser professioneller Ansatz und unser Fokus auf Sicherheit ermöglichen es uns, hochwertige Dienstleistungen für private und gewerbliche Kunden anzubieten. Unser Ziel ist es, jedem Kunden Sicherheit, Schutz und Ruhe zu bieten.",
      items: [
        "Durchgehende Überwachung geschützter Objekte",
        "Schnelle Reaktion auf Sicherheitsvorfälle",
        "Professioneller und verantwortungsvoller Ansatz",
        "Individuelle Lösungen nach Kundenbedarf",
      ],
    },

    reasonsSection: {
      eyebrow: "Warum Fortis Security",
      title: "Sicherheit, Schutz und Ruhe für jeden Kunden",
      text: "Wir lösen Sicherheit umfassend — von Monitoring über physischen Schutz bis hin zu technischer Sicherung und Veranstaltungsschutz.",
      reasons: [
        "Durchgehende Überwachung geschützter Objekte",
        "Schnelle Reaktion auf Sicherheitsvorfälle",
        "Professioneller und verantwortungsvoller Ansatz",
        "Individuelle Lösungen nach Kundenbedarf",
        "Schutz von Personen, Eigentum und Objekten",
        "Technische und physische Sicherheit an einem Ort",
      ],
    },

    contact: {
      eyebrow: "Kontakt",
      title: "Müssen Sie ein Objekt, eine Person oder eine Veranstaltung sichern?",
      text: "Kontaktieren Sie uns und wir erstellen eine Sicherheitslösung nach Ihren Anforderungen.",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      addressLabel: "Adresse",
      address: "Obrancov mieru 1346/11",
      slogan: "Ein zuverlässiger Partner für Ihre Sicherheit",
      openContact: "Kontakt öffnen",
    },

    footer: {
      rights: "© 2026 Fortis Security. Alle Rechte vorbehalten.",
    },
  },
};

function getServiceTranslation(content, service, index) {
  const normalizedSlug = service.slug.replaceAll("-", "_");
  const fallbackKey = serviceFallbackKeys[index];

  return (
    content.serviceTexts[service.slug] ||
    content.serviceTexts[normalizedSlug] ||
    content.serviceTexts[fallbackKey] ||
    service
  );
}

function FortisHeroLogo() {
  return (
    <div className="fortis-hero-shield-wrap mx-auto w-[min(78vw,340px)] sm:w-[min(70vw,460px)] xl:mx-0 xl:w-[min(42vw,620px)]">
      <svg
        viewBox="0 0 520 580"
        className="fortis-hero-shield-svg h-auto w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="fortisGoldBase"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#7a4a00" />
            <stop offset="18%" stopColor="#d99a12" />
            <stop offset="38%" stopColor="#fff0a3" />
            <stop offset="55%" stopColor="#facc15" />
            <stop offset="72%" stopColor="#b77905" />
            <stop offset="100%" stopColor="#5c3500" />

            <animate
              attributeName="x1"
              values="0%;18%;0%"
              dur="5.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y1"
              values="0%;12%;0%"
              dur="5.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              values="100%;82%;100%"
              dur="5.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="100%;88%;100%"
              dur="5.5s"
              repeatCount="indefinite"
            />
          </linearGradient>

          <linearGradient
            id="fortisGoldShine"
            x1="-120%"
            y1="0%"
            x2="-20%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="35%" stopColor="rgba(255,255,255,0)" />
            <stop offset="48%" stopColor="#fff7c2" />
            <stop offset="55%" stopColor="#ffffff" />
            <stop offset="63%" stopColor="#facc15" />
            <stop offset="78%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />

            <animate
              attributeName="x1"
              values="-130%;20%;-130%"
              dur="4.2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              values="-30%;150%;-30%"
              dur="4.2s"
              repeatCount="indefinite"
            />
          </linearGradient>

          <filter id="fortisGoldGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                1 0 0 0 0.98
                0 1 0 0 0.72
                0 0 1 0 0.08
                0 0 0 0.85 0
              "
              result="goldGlow"
            />
            <feMerge>
              <feMergeNode in="goldGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="fortisShieldShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="24"
              stdDeviation="18"
              floodColor="#000000"
              floodOpacity="0.72"
            />
          </filter>
        </defs>

        <path
          d="M260 34 C340 74 423 89 486 94 L486 238 C486 382 397 499 260 558 C123 499 34 382 34 238 L34 94 C97 89 180 74 260 34Z"
          fill="rgba(0,0,0,0.22)"
          stroke="white"
          strokeWidth="13"
          filter="url(#fortisShieldShadow)"
        />

        <path
          d="M260 58 C329 91 400 105 458 110 L458 235 C458 363 378 465 260 520 C142 465 62 363 62 235 L62 110 C120 105 191 91 260 58Z"
          fill="none"
          stroke="white"
          strokeWidth="6"
          opacity="0.95"
        />

        <text
          x="260"
          y="410"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="350"
          fontWeight="900"
          fill="url(#fortisGoldBase)"
          stroke="#6b4200"
          strokeWidth="2"
          filter="url(#fortisGoldGlow)"
          className="fortis-gold-letter"
        >
          F
        </text>

        <text
          x="260"
          y="410"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="350"
          fontWeight="900"
          fill="url(#fortisGoldShine)"
          opacity="0.85"
          className="fortis-gold-shine"
        >
          F
        </text>

        <text
          x="260"
          y="410"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="350"
          fontWeight="900"
          fill="transparent"
          stroke="rgba(255,255,255,0.32)"
          strokeWidth="2"
        >
          F
        </text>
      </svg>
    </div>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const safeLanguage = mounted ? language : "sk";
  const content = pageTranslations[safeLanguage] || pageTranslations.sk;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#111111] text-white">
      <section
        id="domov"
        className="fortis-hero relative min-h-screen overflow-hidden bg-[#1d1b1b] px-4 pt-28 sm:px-6 sm:pt-36 lg:px-10 lg:pt-40"
      >
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,_rgba(27,27,27,0.72),_#111111_62%),radial-gradient(circle_at_18%_45%,_rgba(250,204,21,0.16),_transparent_30%),url('/hero-texture.png')] bg-cover bg-center" />
        <div className="absolute left-[55%] top-24 hidden h-[720px] w-px bg-white/15 md:block" />
        <div className="absolute left-[66%] top-48 hidden h-[520px] w-px rotate-[-34deg] bg-white/15 md:block" />

        <div className="relative z-20 mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-[1760px] items-center gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="relative flex items-center justify-center xl:justify-start">
            <FortisHeroLogo />
          </div>

          <div className="relative z-10 text-center xl:text-left">
            <p className="mb-5 inline-flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-yellow-400 sm:text-sm sm:tracking-[0.25em] xl:justify-start">
              <span className="h-px w-8 bg-yellow-400 sm:w-12" />
              {content.hero.eyebrow}
            </p>

            <h1 className="mx-auto max-w-5xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-7xl xl:mx-0 xl:text-8xl">
              {content.hero.title}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8 xl:mx-0">
              {content.hero.text}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center xl:justify-start">
              <Link
                href="#sluzby"
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-7 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                {content.hero.primaryButton}
              </Link>

              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-400"
              >
                {content.hero.secondaryButton}
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {content.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-black/40 p-5 text-left transition hover:border-yellow-400/50 hover:bg-black/70"
                >
                  <p className="text-3xl font-black text-yellow-400">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-20 border-t border-white/15 py-6 sm:py-8">
          <div className="marquee text-3xl font-light text-white/90 sm:text-4xl md:text-6xl">
            <span>{content.hero.marquee}</span>
          </div>
        </div>
      </section>

      <section id="sluzby" className="bg-black px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto w-full max-w-[1760px]">
          <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end sm:mb-14">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-yellow-400 sm:text-sm sm:tracking-[0.3em]">
                {content.targetGroupsTitle.eyebrow}
              </p>

              <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-6xl">
                {content.targetGroupsTitle.title}
              </h2>
            </div>

            <p className="text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              {content.targetGroupsTitle.text}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {services.slice(0, 5).map((service, index) => {
              const translatedService = getServiceTranslation(
                content,
                service,
                index
              );
              const cardItems =
                translatedService.items || service.items || [];

              return (
                <Link
                  key={service.slug}
                  href={`/sluzby/${service.slug}`}
                  className={`group rounded-[1.5rem] border bg-[#151515] p-6 transition duration-300 hover:-translate-y-2 hover:bg-[#1d1b1b] sm:rounded-[2rem] sm:p-8 ${index === 2
                      ? "border-yellow-400/50"
                      : "border-white/10 hover:border-yellow-400/50"
                    }`}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-xl font-black text-black transition group-hover:scale-110 sm:mb-8 sm:h-16 sm:w-16 sm:text-2xl">
                    {index + 1}
                  </div>

                  <h3
                    className={`text-2xl font-black uppercase leading-tight sm:text-3xl ${index === 2 ? "text-yellow-400" : "text-white"
                      } group-hover:text-yellow-400`}
                  >
                    {translatedService.shortTitle || service.shortTitle}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400 sm:mt-5 sm:text-base sm:leading-8">
                    {translatedService.intro || service.intro}
                  </p>

                  <ul className="mt-6 grid gap-3 text-sm text-zinc-300 sm:mt-8">
                    {cardItems.slice(0, 4).map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-yellow-400">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between gap-5 sm:mt-8">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400 sm:text-sm">
                      {content.servicesSection.detailButton}
                    </p>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-yellow-400 text-black transition group-hover:scale-110 sm:h-12 sm:w-12">
                      <span className="text-2xl font-black">›</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="onas" className="bg-black px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1760px] gap-10 md:grid-cols-2 md:items-center sm:gap-12">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-yellow-400 sm:text-sm sm:tracking-[0.3em]">
              {content.about.eyebrow}
            </p>

            <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
              {content.about.title}
            </h2>
          </div>

          <div>
            <p className="text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              {content.about.text}
            </p>

            <div className="mt-7 grid gap-4 sm:mt-8">
              {content.about.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-zinc-950 p-5"
                >
                  <p className="font-semibold text-zinc-200">
                    <span className="mr-3 text-yellow-400">✓</span>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#151515] px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto w-full max-w-[1760px]">
          <div className="mb-10 max-w-4xl sm:mb-14">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-yellow-400 sm:text-sm sm:tracking-[0.3em]">
              {content.reasonsSection.eyebrow}
            </p>

            <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-6xl">
              {content.reasonsSection.title}
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
              {content.reasonsSection.text}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {content.reasonsSection.reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-3xl border border-white/10 bg-black p-6 transition hover:border-yellow-400/50"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-xl font-black text-black">
                  ✓
                </div>

                <p className="text-base font-bold text-zinc-200 sm:text-lg">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        className="bg-yellow-400 px-4 py-16 text-black sm:px-6 sm:py-24 lg:px-10"
      >
        <div className="mx-auto grid w-full max-w-[1760px] gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] sm:text-sm sm:tracking-[0.3em]">
              {content.contact.eyebrow}
            </p>

            <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
              {content.contact.title}
            </h2>

            <p className="mt-5 text-base leading-7 sm:text-lg sm:leading-8">
              {content.contact.text}
            </p>
          </div>

          <div className="rounded-3xl bg-black p-6 text-white shadow-2xl sm:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-yellow-400/20 bg-black shadow-lg shadow-yellow-400/10 sm:h-16 sm:w-16">
                <img
                  src="/fortis-icon.png"
                  alt="Fortis Security logo"
                  className="h-10 w-10 object-contain sm:h-11 sm:w-11"
                />
              </div>

              <div>
                <p className="text-xl font-black sm:text-2xl">
                  Fortis Security
                </p>
                <p className="text-sm text-zinc-400">
                  {content.contact.slogan}
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <p>
                <span className="block text-sm text-zinc-400">
                  {content.contact.phoneLabel}
                </span>
                <a
                  href="tel:+421911879566"
                  className="break-words text-lg font-bold text-yellow-400 sm:text-xl"
                >
                  +421 911 879 566
                </a>
              </p>

              <p>
                <span className="block text-sm text-zinc-400">
                  {content.contact.emailLabel}
                </span>
                <a
                  href="mailto:info@fortissecurity.eu"
                  className="break-words text-lg font-bold text-yellow-400 sm:text-xl"
                >
                  info@fortissecurity.eu
                </a>
              </p>

              <p>
                <span className="block text-sm text-zinc-400">
                  {content.contact.addressLabel}
                </span>
                <span className="break-words text-lg font-bold text-yellow-400 sm:text-xl">
                  {content.contact.address}
                </span>
              </p>

              <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61590909960308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black px-5 py-3 font-bold text-white transition hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-yellow-400/20"
                >
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/fortis_security__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black px-5 py-3 font-bold text-white transition hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-yellow-400/20"
                >
                  Instagram
                </a>
              </div>

              <Link
                href="/kontakt"
                className="mt-8 inline-flex w-full justify-center rounded-full bg-yellow-400 px-7 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:bg-yellow-300 sm:w-auto"
              >
                {content.contact.openContact}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactMap />

      <footer className="bg-black px-4 py-10 text-center text-sm text-zinc-500 sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-[1760px] flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-400/20 bg-black">
              <img
                src="/fortis-icon.png"
                alt="Fortis Security logo"
                className="h-7 w-7 object-contain"
              />
            </div>

            <p className="font-bold text-white">
              Fortis <span className="text-yellow-400">Security</span>
            </p>
          </div>

          <p>{content.footer.rights}</p>

          <div className="text-center md:text-right">
            <p className="font-bold text-white">Fortis Security</p>
            <p className="mt-1 text-zinc-500">{content.contact.slogan}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}