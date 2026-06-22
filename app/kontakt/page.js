"use client";

import { useLanguage } from "../../components/LanguageProvider";

const contactTranslations = {
  sk: {
    eyebrow: "Kontakt",
    title: "Kontaktujte Fortis Security",
    text: "Potrebujete zabezpečiť objekt, osobu alebo podujatie? Kontaktujte nás a pripravíme riešenie podľa vašich požiadaviek.",
    slogan: "Spoľahlivý partner pre vašu bezpečnosť",
    phone: "Telefón",
    email: "E-mail",
  },
  en: {
    eyebrow: "Contact",
    title: "Contact Fortis Security",
    text: "Do you need to secure a building, person or event? Contact us and we will prepare a solution according to your requirements.",
    slogan: "A reliable partner for your safety",
    phone: "Phone",
    email: "E-mail",
  },
  de: {
    eyebrow: "Kontakt",
    title: "Kontaktieren Sie Fortis Security",
    text: "Müssen Sie ein Objekt, eine Person oder eine Veranstaltung sichern? Kontaktieren Sie uns und wir erstellen eine Lösung nach Ihren Anforderungen.",
    slogan: "Ein zuverlässiger Partner für Ihre Sicherheit",
    phone: "Telefon",
    email: "E-Mail",
  },
};

export default function ContactPage() {
  const { language } = useLanguage();
  const content = contactTranslations[language] || contactTranslations.sk;

  return (
    <main className="min-h-screen bg-[#111111] px-4 pb-20 pt-32 text-white sm:px-6 sm:pb-24 sm:pt-36">
      <section className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-yellow-400 sm:tracking-[0.3em]">
            {content.eyebrow}
          </p>

          <h1 className="break-words text-4xl font-black uppercase leading-tight sm:text-5xl md:text-7xl">
            {content.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            {content.text}
          </p>
        </div>

        <div className="rounded-3xl bg-black p-6 shadow-2xl sm:p-8">
          <div className="mb-8 flex items-center gap-4">
            <img
              src="/fortis-icon.png"
              alt="Fortis Security logo"
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            />

            <div>
              <p className="text-xl font-black sm:text-2xl">Fortis Security</p>
              <p className="text-sm text-zinc-400">{content.slogan}</p>
            </div>
          </div>

          <div className="space-y-6">
            <p>
              <span className="block text-sm text-zinc-400">
                {content.phone}
              </span>
              <a
                href="tel:+421911879566"
                className="break-words text-xl font-black text-yellow-400 sm:text-2xl"
              >
                +421 911 879 566
              </a>
            </p>

            <p>
              <span className="block text-sm text-zinc-400">
                {content.email}
              </span>
              <a
                href="mailto:info@fortissecurity.eu"
                className="break-words text-xl font-black text-yellow-400 sm:text-2xl"
              >
                info@fortissecurity.eu
              </a>
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61590909960308"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-5 py-3 font-bold transition hover:border-yellow-400 hover:text-yellow-400"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/fortis_security__/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-5 py-3 font-bold transition hover:border-yellow-400 hover:text-yellow-400"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}