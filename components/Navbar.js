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

function FortisMiniLogo() {
  return (
    <svg
      viewBox="0 0 120 140"
      className="h-12 w-12 drop-shadow-[0_0_18px_rgba(250,204,21,0.22)] sm:h-16 sm:w-16"
      aria-hidden="true"
    >
      <path
        d="M60 9 C80 20 100 24 112 26 L112 61 C112 96 91 121 60 134 C29 121 8 96 8 61 L8 26 C20 24 40 20 60 9Z"
        fill="#050505"
        stroke="white"
        strokeWidth="7"
      />

      <path
        d="M60 21 C78 29 94 33 103 34 L103 61 C103 89 86 111 60 123 C34 111 17 89 17 61 L17 34 C26 33 42 29 60 21Z"
        fill="none"
        stroke="white"
        strokeWidth="3"
        opacity="0.95"
      />

      <text
        x="60"
        y="91"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="78"
        fontWeight="900"
        fill="#facc15"
        stroke="#6b4200"
        strokeWidth="1"
      >
        F
      </text>
    </svg>
  );
}

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
    safeLanguage === code
      ? "text-yellow-400"
      : "text-zinc-500 transition hover:text-white";

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#151515]/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1760px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 sm:gap-4"
          onClick={closeMobileMenu}
        >
          <FortisMiniLogo />

          <span className="text-base font-black tracking-wide text-white sm:text-xl md:text-2xl">
            <span className="text-yellow-400">F</span>ortis Security
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-semibold text-zinc-400 md:flex">
          <Link href="/" className="transition hover:text-yellow-400">
            {safeT.nav.home}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-2 py-2 transition hover:text-yellow-400"
            >
              {safeT.nav.services}

              <span
                className={`transition ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full pt-4">
                <div className="w-[22rem] rounded-2xl border border-white/10 bg-black p-3 shadow-2xl shadow-black/60">
                  <Link
                    href="/sluzby"
                    className="mb-2 block rounded-xl border border-yellow-400/20 bg-yellow-400 px-4 py-3 font-black text-black transition hover:bg-yellow-300"
                    onClick={() => setServicesOpen(false)}
                  >
                    {safeT.nav.allServices}
                  </Link>

                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/sluzby/${service.slug}`}
                      className="block rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-yellow-400 hover:text-black"
                      onClick={() => setServicesOpen(false)}
                    >
                      {safeT.servicesMenu?.[service.slug] ||
                        service.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/#onas" className="transition hover:text-yellow-400">
            {safeT.nav.about}
          </Link>

          <Link href="/kontakt" className="transition hover:text-yellow-400">
            {safeT.nav.contact}
          </Link>
        </nav>

        <div className="hidden items-center gap-4 text-sm font-bold md:flex">
          <button
            type="button"
            onClick={() => setLanguage("sk")}
            className={languageButtonClass("sk")}
          >
            SK
          </button>

          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={languageButtonClass("en")}
          >
            EN
          </button>

          <button
            type="button"
            onClick={() => setLanguage("de")}
            className={languageButtonClass("de")}
          >
            DE
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-2xl font-black text-white transition hover:border-yellow-400 hover:text-yellow-400 md:hidden"
          aria-label="Otvoriť menu"
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#111111] px-4 py-4 shadow-2xl shadow-black/60 md:hidden">
          <nav className="flex flex-col gap-3 text-base font-bold text-white">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="rounded-2xl border border-white/10 bg-black px-5 py-4 transition hover:border-yellow-400 hover:text-yellow-400"
            >
              {safeT.nav.home}
            </Link>

            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-black px-5 py-4 text-left transition hover:border-yellow-400 hover:text-yellow-400"
            >
              <span>{safeT.nav.services}</span>

              <span
                className={`transition ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {servicesOpen && (
              <div className="grid gap-2 rounded-2xl border border-white/10 bg-black/60 p-3">
                <Link
                  href="/sluzby"
                  onClick={closeMobileMenu}
                  className="rounded-xl bg-yellow-400 px-4 py-3 font-black text-black transition hover:bg-yellow-300"
                >
                  {safeT.nav.allServices}
                </Link>

                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/sluzby/${service.slug}`}
                    onClick={closeMobileMenu}
                    className="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-yellow-400 hover:text-black"
                  >
                    {safeT.servicesMenu?.[service.slug] ||
                      service.shortTitle}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/#onas"
              onClick={closeMobileMenu}
              className="rounded-2xl border border-white/10 bg-black px-5 py-4 transition hover:border-yellow-400 hover:text-yellow-400"
            >
              {safeT.nav.about}
            </Link>

            <Link
              href="/kontakt"
              onClick={closeMobileMenu}
              className="rounded-2xl border border-white/10 bg-black px-5 py-4 transition hover:border-yellow-400 hover:text-yellow-400"
            >
              {safeT.nav.contact}
            </Link>
          </nav>

          <div className="mt-5 flex items-center justify-center gap-5 rounded-2xl border border-white/10 bg-black px-5 py-4 text-sm font-black">
            <button
              type="button"
              onClick={() => setLanguage("sk")}
              className={languageButtonClass("sk")}
            >
              SK
            </button>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={languageButtonClass("en")}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => setLanguage("de")}
              className={languageButtonClass("de")}
            >
              DE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}