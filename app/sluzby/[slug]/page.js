import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../../data/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.16),_transparent_35%),linear-gradient(to_bottom,_#111,_#050505)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-10">
              <Link
                href="/sluzby"
                className="inline-flex items-center gap-3 rounded-full border border-yellow-400/40 bg-black px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-yellow-400 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-lg text-black">
                  ←
                </span>
                Späť na služby
              </Link>
            </div>

            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Fortis Security
            </p>

            <h1 className="text-5xl font-black uppercase leading-tight md:text-7xl">
              {service.title}
            </h1>

            <p className="mt-6 text-xl font-semibold text-zinc-300">
              {service.intro}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              {service.text}
            </p>

            <Link
              href="/kontakt"
              className="mt-10 inline-flex rounded-full bg-yellow-400 px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              Mám záujem
            </Link>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black p-8 shadow-2xl">
            <div className="mb-8 flex items-center gap-4">
              <img
                src="/fortis-icon.png"
                alt="Fortis Security logo"
                className="h-16 w-16 object-contain"
              />

              <div>
                <p className="text-2xl font-black">Fortis Security</p>
                <p className="text-sm text-zinc-500">
                  Spoľahlivý partner pre vašu bezpečnosť
                </p>
              </div>
            </div>

            <h2 className="mb-6 text-2xl font-black uppercase text-yellow-400">
              Zabezpečujeme
            </h2>

            <ul className="grid gap-4">
              {service.items.map((item) => (
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