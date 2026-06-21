export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#111111] px-6 pb-24 pt-36 text-white">
      <section className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-yellow-400">
            Kontakt
          </p>

          <h1 className="text-5xl font-black uppercase leading-tight md:text-7xl">
            Kontaktujte Fortis Security
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Potrebujete zabezpečiť objekt, osobu alebo podujatie?
            Kontaktujte nás a pripravíme riešenie podľa vašich požiadaviek.
          </p>
        </div>

        <div className="rounded-3xl bg-black p-8 shadow-2xl">
          <div className="mb-8 flex items-center gap-4">
            <img
              src="/fortis-icon.png"
              alt="Fortis Security logo"
              className="h-16 w-16 object-contain"
            />

            <div>
              <p className="text-2xl font-black">Fortis Security</p>
              <p className="text-sm text-zinc-400">
                Spoľahlivý partner pre vašu bezpečnosť
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p>
              <span className="block text-sm text-zinc-400">Telefón</span>
              <a
                href="tel:+421911879566"
                className="text-2xl font-black text-yellow-400"
              >
                +421 911 879 566
              </a>
            </p>

            <p>
              <span className="block text-sm text-zinc-400">E-mail</span>
              <a
                href="mailto:info@fortissecurity.eu"
                className="text-2xl font-black text-yellow-400"
              >
                info@fortissecurity.eu
              </a>
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61590909960308"
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