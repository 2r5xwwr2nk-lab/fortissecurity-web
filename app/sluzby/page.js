import Link from "next/link";
import { services } from "../../data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#111111] px-6 pb-24 pt-36 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-yellow-400">
          Služby
        </p>

        <h1 className="max-w-4xl text-5xl font-black uppercase leading-tight md:text-7xl">
          Bezpečnostné riešenia pre každý typ objektu
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          Vyberte si službu, ktorá najlepšie zodpovedá vašim požiadavkám.
          Každé riešenie vieme prispôsobiť podľa typu objektu, rizika a potrieb klienta.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/sluzby/${service.slug}`}
              className="group rounded-3xl border border-white/10 bg-black p-8 transition hover:-translate-y-1 hover:border-yellow-400"
            >
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                Fortis Security
              </p>

              <h2 className="text-3xl font-black uppercase group-hover:text-yellow-400">
                {service.title}
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">{service.intro}</p>

              <span className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-2xl font-black text-black">
                ›
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}