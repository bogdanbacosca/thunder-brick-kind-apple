import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { finishes, serviceBySlug, services } from "@/lib/site";
import { Rise } from "@/components/rise";
import { TextReveal } from "@/components/text-reveal";

export const Route = createFileRoute("/servicii/$slug")({
  beforeLoad: ({ params }) => {
    if (!serviceBySlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const service = serviceBySlug(params.slug);
    return {
      meta: [
        { title: service ? `${service.title} — Color Print Roman` : "Pagină negăsită — Color Print Roman" },
        { name: "description", content: service?.summary ?? "Pagina nu există." },
      ],
    };
  },
  notFoundComponent: MissingService,
  component: ServicePage,
});

function MissingService() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20">
      <p className="text-xs tracking-widest text-cyan uppercase">404</p>
      <h1 className="mt-3 font-display text-5xl text-ink">Nu avem pagina asta în catalog.</h1>
      <Link to="/servicii" className="tap mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm text-paper">
        Toate serviciile
      </Link>
    </main>
  );
}

function ServicePage() {
  const { slug } = Route.useParams();
  const service = serviceBySlug(slug);
  const [finish, setFinish] = useState<(typeof finishes)[number]["id"]>("digital");
  if (!service) return <MissingService />;

  const showFinishes = slug === "tipar-digital" || slug === "print-mari-dimensiuni";
  const active = finishes.find((item) => item.id === finish) ?? finishes[0];
  const others = services.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-end gap-8 px-5 py-12 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-widest text-cyan uppercase">{service.kicker}</p>
          <TextReveal tag="h1" className="mt-3 font-display text-5xl leading-none text-ink sm:text-6xl">
            {service.title}
          </TextReveal>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">{service.summary}</p>
          <Link
            to="/contact"
            search={{ serviciu: service.slug }}
            className="tap mt-8 inline-flex rounded-full bg-magenta px-6 py-3 text-sm font-medium text-surface"
          >
            Cere ofertă pentru asta
          </Link>
        </div>
        <img src={service.image} alt={service.imageAlt} className="aspect-[16/10] w-full rounded-3xl object-cover" />
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <TextReveal tag="h2" className="font-display text-3xl text-ink">
            Ce intră aici
          </TextReveal>
          <ul className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {service.items.map((item, index) => (
              <li key={item.name} className="border-t border-line pt-4">
                <Rise delay={(index % 4) * 0.05}>
                  <h3 className="font-display text-2xl text-ink">{item.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
                </Rise>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {showFinishes ? (
        <section className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs tracking-widest text-cyan uppercase">Alege direcția</p>
          <TextReveal tag="h2" className="mt-2 font-display text-4xl text-ink">
            Finisajul schimbă piesa
          </TextReveal>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Finisaje">
            {finishes.map((item) => {
              const selected = item.id === finish;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setFinish(item.id)}
                  className={`tap rounded-full px-4 py-2 text-sm ${selected ? "bg-ink text-paper" : "border border-line bg-surface text-ink"}`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-6 max-w-xl text-lg text-ink-soft"
            >
              {active.note}
            </motion.p>
          </AnimatePresence>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="font-display text-2xl text-ink">Și alte lucrări</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {others.map((item) => (
            <li key={item.slug}>
              <Link to="/servicii/$slug" params={{ slug: item.slug }} className="block rounded-2xl border border-line p-4 hover:bg-surface">
                <p className="text-xs tracking-widest text-muted uppercase">{item.kicker}</p>
                <p className="mt-1 font-display text-xl">{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
