import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Rise } from "@/components/rise";
import { departments, inkTones, services, shop, steps, toneClass } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <section className="bg-yellow text-ink">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-12 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-6">
            <motion.p initial={{ y: 12 }} animate={{ y: 0 }} transition={{ duration: 0.45 }} className="text-xs tracking-widest uppercase">
              Tipografie · Roman, Neamț
            </motion.p>
            <motion.h1 initial={{ y: 16 }} animate={{ y: 0 }} transition={{ duration: 0.55, delay: 0.05 }} className="mt-4 font-display text-5xl leading-none font-medium text-balance sm:text-7xl">
              Aducem <span className="text-magenta">culoare</span> în viața ta.
            </motion.h1>
            <motion.p initial={{ y: 16 }} animate={{ y: 0 }} transition={{ duration: 0.55, delay: 0.12 }} className="mt-6 max-w-md text-lg">
              Copycenter, tipar digital și offset, print mare și obiecte personalizate. În Roman, pe Roman Mușat, lângă bibliotecă.
            </motion.p>
            <motion.div initial={{ y: 16 }} animate={{ y: 0 }} transition={{ duration: 0.55, delay: 0.18 }} className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="tap rounded-full bg-magenta px-6 py-3 text-sm font-medium text-surface">Cere o ofertă</Link>
              <Link to="/servicii" className="tap rounded-full bg-cyan px-6 py-3 text-sm font-medium text-ink">Vezi serviciile</Link>
            </motion.div>
          </div>
          <motion.figure initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="lg:col-span-6">
            <div className="rounded-3xl bg-magenta p-2">
              <img
                src="/media/storefront.jpeg"
                alt="Vitrina Color Print Roman — tipografie și copycenter pe Str. Roman Mușat"
                className="aspect-[16/10] w-full rounded-2xl object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-xs tracking-widest uppercase">
              <span>Str. Roman Mușat · Roman</span>
              <span className="flex gap-2">
                <i className="size-3 rounded-full bg-cyan" />
                <i className="size-3 rounded-full bg-magenta" />
                <i className="size-3 rounded-full bg-ink" />
              </span>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl sm:grid-cols-4">
          {departments.map((dept, index) => (
            <div key={dept.title} className={`${inkTones[index]} px-5 py-6`}>
              <p className="font-display text-2xl">{dept.title}</p>
              <ul className="mt-3 grid gap-1 text-sm">
                {dept.points.map((point) => (<li key={point}>{point}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest text-magenta uppercase">Servicii</p>
            <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Ce iese din atelier</h2>
          </div>
          <Link to="/servicii" className="text-sm font-medium text-magenta">Tot catalogul</Link>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <li key={item.slug}>
              <Rise delay={index * 0.04}>
                <Link to="/servicii/$slug" params={{ slug: item.slug }} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface">
                  <div className={`${toneClass(item.slug)} aspect-[16/10] overflow-hidden`}>
                    <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex-1">
                      <p className={`${toneClass(item.slug)} inline-block rounded-full px-3 py-1 text-xs tracking-widest uppercase`}>{item.kicker}</p>
                      <h3 className="mt-3 font-display text-2xl text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm text-ink-soft">{item.summary}</p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-magenta">
                      Detalii
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Rise>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-5 pb-6">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.n} className={`${inkTones[index]} rounded-3xl p-5`}>
              <p className="font-display text-3xl">{step.n}</p>
              <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-magenta text-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 lg:grid-cols-2">
          <img src="/media/cards-macro.jpg" alt="Cărți de vizită cu forme geometrice și cerneală proaspătă" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <div>
            <p className="text-xs tracking-widest text-yellow uppercase">În magazin</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Hai să colaborăm.</h2>
            <p className="mt-4 text-surface/90">{shop.street}, {shop.city}. {shop.landmark}. Luni–vineri până la 18:00, sâmbăta până la 13:00.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${shop.phoneTel}`} className="tap rounded-full bg-yellow px-6 py-3 text-sm font-medium text-ink">{shop.phoneDisplay}</a>
              <Link to="/contact" className="tap rounded-full bg-ink px-6 py-3 text-sm text-surface">Scrie-ne</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
