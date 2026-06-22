"use client";

import Link from "next/link";
import { services } from "../../data/services";
import { useLanguage } from "../../components/LanguageProvider";

const servicesTranslations = {
  sk: {
    eyebrow: "Služby",
    title: "Bezpečnostné riešenia pre každý typ objektu",
    text: "Vyberte si službu, ktorá najlepšie zodpovedá vašim požiadavkám. Každé riešenie vieme prispôsobiť podľa typu objektu, rizika a potrieb klienta.",
    services: {},
  },
  en: {
    eyebrow: "Services",
    title: "Security solutions for every type of building",
    text: "Choose the service that best matches your requirements. Every solution can be adapted to the type of building, risk and client needs.",
    services: {
      pco: {
        title: "Monitoring Center",
        intro:
          "Continuous monitoring of buildings through a central monitoring station and fast response in case of intrusion.",
      },
      "fyzicka-ochrana": {
        title: "Physical Security",
        intro:
          "Professional protection of buildings, premises, property and people according to client needs.",
      },
      "kamerove-systemy": {
        title: "Camera Systems",
        intro:
          "Camera solutions for homes, companies, warehouses and high-risk areas with a focus on safety and control.",
      },
      "prevoz-cenin": {
        title: "Valuables Transport",
        intro:
          "Safe transport of cash, valuables and important deliveries according to client needs.",
      },
      "ochrana-podujati": {
        title: "Event Security",
        intro:
          "Security supervision for cultural, sports and social events, including entrance control and visitor guidance.",
      },
    },
  },
  de: {
    eyebrow: "Dienstleistungen",
    title: "Sicherheitslösungen für jeden Objekttyp",
    text: "Wählen Sie die Dienstleistung, die Ihren Anforderungen am besten entspricht. Jede Lösung kann an Objekttyp, Risiko und Kundenbedarf angepasst werden.",
    services: {
      pco: {
        title: "Leitstelle",
        intro:
          "Ständige Überwachung von Objekten über eine zentrale Leitstelle und schnelle Reaktion bei Vorfällen.",
      },
      "fyzicka-ochrana": {
        title: "Physischer Schutz",
        intro:
          "Professioneller Schutz von Gebäuden, Räumen, Eigentum und Personen nach Kundenbedarf.",
      },
      "kamerove-systemy": {
        title: "Kamerasysteme",
        intro:
          "Kameralösungen für Haushalte, Unternehmen, Lager und Risikobereiche mit Fokus auf Sicherheit und Kontrolle.",
      },
      "prevoz-cenin": {
        title: "Werttransport",
        intro:
          "Sicherer Transport von Bargeld, Wertgegenständen und wichtigen Sendungen nach Kundenbedarf.",
      },
      "ochrana-podujati": {
        title: "Veranstaltungsschutz",
        intro:
          "Sicherheitsüberwachung bei Kultur-, Sport- und Gesellschaftsveranstaltungen einschließlich Eingangskontrolle.",
      },
    },
  },
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const content = servicesTranslations[language] || servicesTranslations.sk;

  return (
    <main className="min-h-screen bg-[#111111] px-4 pb-20 pt-32 text-white sm:px-6 sm:pb-24 sm:pt-36">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-yellow-400 sm:tracking-[0.3em]">
          {content.eyebrow}
        </p>

        <h1 className="max-w-4xl break-words text-4xl font-black uppercase leading-tight sm:text-5xl md:text-7xl">
          {content.title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
          {content.text}
        </p>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {services.map((service) => {
            const translatedService =
              content.services?.[service.slug] || service;

            return (
              <Link
                key={service.slug}
                href={`/sluzby/${service.slug}`}
                className="group rounded-3xl border border-white/10 bg-black p-6 transition hover:-translate-y-1 hover:border-yellow-400 sm:p-8"
              >
                <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                  Fortis Security
                </p>

                <h2 className="break-words text-2xl font-black uppercase leading-tight group-hover:text-yellow-400 sm:text-3xl">
                  {translatedService.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  {translatedService.intro}
                </p>

                <span className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-2xl font-black text-black">
                  ›
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}