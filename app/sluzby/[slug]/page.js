"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../../data/services";
import { useLanguage } from "../../../components/LanguageProvider";

const detailTranslations = {
  sk: {
    back: "Späť na služby",
    cta: "Mám záujem",
    subtitle: "Spoľahlivý partner pre vašu bezpečnosť",
    includes: "Zabezpečujeme",
    services: {},
  },
  en: {
    back: "Back to services",
    cta: "I'm interested",
    subtitle: "A reliable partner for your safety",
    includes: "We provide",
    services: {
      pco: {
        title: "Monitoring Center",
        intro:
          "Continuous monitoring of protected buildings through a central monitoring station and fast response in case of intrusion.",
        text:
          "We provide professional monitoring of buildings, alarm systems and security signals with an emphasis on fast response and reliable protection.",
        items: [
          "Continuous monitoring",
          "Fast response",
          "Building supervision",
          "Property protection",
        ],
      },
      "fyzicka-ochrana": {
        title: "Physical Security",
        intro:
          "Professional physical protection of buildings, premises, property and people.",
        text:
          "We provide security guards, entrance control, patrols and supervision according to the needs of the client and the type of building.",
        items: [
          "Building protection",
          "Entrance control",
          "Security patrols",
          "Property supervision",
        ],
      },
      "kamerove-systemy": {
        title: "Camera Systems",
        intro:
          "Camera solutions for homes, companies, warehouses and high-risk areas.",
        text:
          "We design and provide camera systems focused on visibility, prevention and better control over protected spaces.",
        items: [
          "Area monitoring",
          "Incident prevention",
          "Building control",
          "Technical security",
        ],
      },
      "prevoz-cenin": {
        title: "Valuables Transport",
        intro:
          "Safe transport of cash, valuables and important deliveries according to client needs.",
        text:
          "We provide discreet and reliable transport of valuables with an emphasis on safety, responsibility and timely delivery.",
        items: [
          "Cash transport",
          "Valuables transport",
          "Discreet approach",
          "Secure delivery",
        ],
      },
      "ochrana-podujati": {
        title: "Event Security",
        intro:
          "Security supervision for cultural, sports and social events.",
        text:
          "We provide visitor guidance, entrance control and security supervision during events of different sizes.",
        items: [
          "Cultural events",
          "Sports events",
          "Entrance control",
          "Visitor protection",
        ],
      },
    },
  },
  de: {
    back: "Zurück zu den Dienstleistungen",
    cta: "Ich bin interessiert",
    subtitle: "Ein zuverlässiger Partner für Ihre Sicherheit",
    includes: "Wir sichern",
    services: {
      pco: {
        title: "Leitstelle",
        intro:
          "Ständige Überwachung geschützter Objekte über eine zentrale Leitstelle und schnelle Reaktion bei Vorfällen.",
        text:
          "Wir bieten professionelle Überwachung von Objekten, Alarmsystemen und Sicherheitssignalen mit Fokus auf schnelle Reaktion und zuverlässigen Schutz.",
        items: [
          "Ständige Überwachung",
          "Schnelle Reaktion",
          "Objektüberwachung",
          "Eigentumsschutz",
        ],
      },
      "fyzicka-ochrana": {
        title: "Physischer Schutz",
        intro:
          "Professioneller physischer Schutz von Objekten, Räumen, Eigentum und Personen.",
        text:
          "Wir bieten Sicherheitsdienst, Eingangskontrolle, Kontrollgänge und Aufsicht nach den Bedürfnissen des Kunden und der Art des Objekts.",
        items: [
          "Objektschutz",
          "Eingangskontrolle",
          "Kontrollgänge",
          "Eigentumsüberwachung",
        ],
      },
      "kamerove-systemy": {
        title: "Kamerasysteme",
        intro:
          "Kameralösungen für Haushalte, Unternehmen, Lager und Risikobereiche.",
        text:
          "Wir planen und bieten Kamerasysteme mit Fokus auf Übersicht, Prävention und bessere Kontrolle geschützter Räume.",
        items: [
          "Raumüberwachung",
          "Vorbeugung von Vorfällen",
          "Objektkontrolle",
          "Technische Sicherheit",
        ],
      },
      "prevoz-cenin": {
        title: "Werttransport",
        intro:
          "Sicherer Transport von Bargeld, Wertgegenständen und wichtigen Sendungen.",
        text:
          "Wir bieten diskreten und zuverlässigen Transport von Wertgegenständen mit Fokus auf Sicherheit, Verantwortung und pünktliche Zustellung.",
        items: [
          "Bargeldtransport",
          "Werttransport",
          "Diskreter Ansatz",
          "Sichere Zustellung",
        ],
      },
      "ochrana-podujati": {
        title: "Veranstaltungsschutz",
        intro:
          "Sicherheitsüberwachung bei Kultur-, Sport- und Gesellschaftsveranstaltungen.",
        text:
          "Wir bieten Besucherlenkung, Eingangskontrolle und Sicherheitsaufsicht bei Veranstaltungen unterschiedlicher Größe.",
        items: [
          "Kulturveranstaltungen",
          "Sportveranstaltungen",
          "Eingangskontrolle",
          "Besucherschutz",
        ],
      },
    },
  },
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }) {
  const { language } = useLanguage();
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const content = detailTranslations[language] || detailTranslations.sk;
  const translatedService = content.services?.[service.slug] || service;

  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.16),_transparent_35%),linear-gradient(to_bottom,_#111,_#050505)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <div>
            <div className="mb-8 sm:mb-10">
              <Link
                href="/sluzby"
                className="inline-flex max-w-full items-center gap-3 rounded-full border border-yellow-400/40 bg-black px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-yellow-400 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black sm:px-6 sm:text-sm sm:tracking-[0.18em]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-lg text-black">
                  ←
                </span>
                <span className="break-words">{content.back}</span>
              </Link>
            </div>

            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Fortis Security
            </p>

            <h1 className="break-words text-4xl font-black uppercase leading-tight sm:text-5xl md:text-7xl">
              {translatedService.title}
            </h1>

            <p className="mt-6 text-lg font-semibold leading-8 text-zinc-300 sm:text-xl">
              {translatedService.intro}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              {translatedService.text}
            </p>

            <Link
              href="/kontakt"
              className="mt-10 inline-flex rounded-full bg-yellow-400 px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              {content.cta}
            </Link>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black p-6 shadow-2xl sm:p-8">
            <div className="mb-8 flex items-center gap-4">
              <img
                src="/fortis-icon.png"
                alt="Fortis Security logo"
                className="h-14 w-14 object-contain sm:h-16 sm:w-16"
              />

              <div>
                <p className="text-xl font-black sm:text-2xl">
                  Fortis Security
                </p>
                <p className="text-sm text-zinc-500">{content.subtitle}</p>
              </div>
            </div>

            <h2 className="mb-6 text-2xl font-black uppercase text-yellow-400">
              {content.includes}
            </h2>

            <ul className="grid gap-4">
              {(translatedService.items || []).map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-zinc-950 p-4 text-zinc-300 transition hover:border-yellow-400/40 hover:bg-zinc-900"
                >
                  <span className="mr-3 text-yellow-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}