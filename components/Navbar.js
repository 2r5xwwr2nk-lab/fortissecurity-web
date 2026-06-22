"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { services } from "../data/services";
import { useLanguage } from "./LanguageProvider";

const fallbackT = {
  nav: {
    home: "Domov",
    services: "Služby",
    allServices: "Všetky služby",
    about: "O nás",
    contact: "Kontakt",
  },
  servicesMenu: {},
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const safeLanguage = mounted ? language : "sk";
  const safeT = mounted ? t : fallbackT;

  const languageButtonClass = (code) =>
    safeLanguage === code ? "text-yellow-400" : "text-zinc-400";

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-[9999] w-full border-b border-white/10 bg-[#151515]">
      <div className="mx-auto flex w-full max-w-[1760px] items-center justify-between px-4 py-3 lg:px-10">
        <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-3">
          <img src="/fortis-icon.png" alt="Fortis Security" className="h-12 w-12" />
          <span className="text-lg font-black text-white">
            <span className="text-yellow-400">F</span>ortis Security
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold text-zinc-300 md:flex">
          <Link href="/">{safeT.nav.home}</Link>
          <Link href="/sluzby">{safeT.nav.services}</Link>
          <Link href="/#onas">{safeT.nav.about}</Link>
          <Link href="/kontakt">{safeT.nav.contact}</Link>
        </nav>

        <div className="hidden gap-4 text-sm font-black md:flex">
          <button onClick={() => setLanguage("sk")} className={languageButtonClass("sk")}>SK</button>
          <button onClick={() => setLanguage("en")} className={languageButtonClass("en")}>EN</button>
          <button onClick={() => setLanguage("de")} className={languageButtonClass("de")}>DE</button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black text-2xl text-white md:hidden"
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-white/10 bg-[#111111] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-base font-bold text-white">
            <Link href="/" onClick={closeMobileMenu} className="rounded-xl bg-black px-5 py-4">
              {safeT.nav.home}
            </Link>

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between rounded-xl bg-black px-5 py-4 text-left"
            >
              {safeT.nav.services}
              <span>{servicesOpen ? "▴" : "▾"}</span>
            </button>

            {servicesOpen && (
              <div className="grid gap-2 rounded-xl bg-black/60 p-3">
                <Link href="/sluzby" onClick={closeMobileMenu} className="rounded-lg bg-yellow-400 px-4 py-3 font-black text-black">
                  {safeT.nav.allServices}
                </Link>

                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/sluzby/${service.slug}`}
                    onClick={closeMobileMenu}
                    className="rounded-lg px-4 py-3 text-zinc-300"
                  >
                    {safeT.servicesMenu?.[service.slug] || service.shortTitle}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/#onas" onClick={closeMobileMenu} className="rounded-xl bg-black px-5 py-4">
              {safeT.nav.about}
            </Link>

            <Link href="/kontakt" onClick={closeMobileMenu} className="rounded-xl bg-black px-5 py-4">
              {safeT.nav.contact}
            </Link>
          </nav>

          <div className="mt-4 flex justify-center gap-5 rounded-xl bg-black px-5 py-4 font-black">
            <button onClick={() => setLanguage("sk")} className={languageButtonClass("sk")}>SK</button>
            <button onClick={() => setLanguage("en")} className={languageButtonClass("en")}>EN</button>
            <button onClick={() => setLanguage("de")} className={languageButtonClass("de")}>DE</button>
          </div>
        </div>
      )}
    </header>
  );
}