import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { InkField } from "@/components/ink-field";
import { Rise } from "@/components/rise";
import { TextReveal } from "@/components/text-reveal";
import { departments, inkTones, services, shop, steps, toneClass } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
});

const ease = [0.22, 1, 0.36, 1] as const;
const heroWords = ["Aducem", "culoare", "în", "viața", "ta."] as const;

function Home() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroBg = useTransform(scrollYProgress, [0, 0.14, 0.3], ["#ffd000", "#ffe7c2", "#d7f4f8"]);
  const photoScale = useTransform(scrollYProgress, [0, 0.22], [1.08, 1]);
  const accent = useTransform(scrollYProgress, [0, 0.12, 0.24, 0.36], ["#e1066b", "#0a5c6e", "#141210", "#e1066b"]);

  return (
    <main>
      <motion.section className="text-ink" style={{ background: reduce ? "#ffd000" : heroBg }}>
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-12 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-6">
            <motion.p
              initial={reduce ? false : { y: "110%", filter: "blur(4px)" }}
              animate={reduce ? undefined : { y: "0%", filter: "blur(0px)" }}
              transition={{ duration: 0.55, ease }}
              className="overflow-hidden text-xs tracking-widest uppercase"
            >
              Tipografie · Roman, Neamț
            </motion.p>
            <h1 className="mt-4 font-display text-5xl leading-[0.92] font-medium text-balance sm:text-7xl">
              {heroWords.map((word, index) => (
                <span key={word}>
                  <span className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom">
                    <motion.span
                      className={`inline-block ${word === "culoare" && reduce ? "text-magenta" : ""}`}
                      style={word === "culoare" && !reduce ? { color: accent } : undefined}
                      initial={reduce ? false : { y: "115%", filter: "blur(4px)" }}
                      animate={reduce ? undefined : { y: "0%", filter: "blur(0px)" }}
                      transition={{ duration: 0.72, delay: 0.05 + index * 0.055, ease }}
                    >
                      {word}
                    </motion.span>
                  </span>
                  {index < heroWords.length - 1 ? " " : null}
                </span>
              ))}
            </h1>
            <motion.p
              initial={reduce ? false : { y: 18, filter: "blur(4px)", opacity: 0 }}
              animate={reduce ? undefined : { y: 0, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.34, ease }}
              className="mt-6 max-w-md text-lg"
            >
              Copycenter, tipar digital și offset, print mare și obiecte personalizate. În Roman, pe
              Roman Mușat, lângă bibliotecă.
            </motion.p>
            <motion.div
              initial={reduce ? false : { y: 18, filter: "blur(4px)", opacity: 0 }}
              animate={reduce ? undefined : { y: 0, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.44, ease }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/contact"
                className="tap rounded-full bg-magenta px-6 py-3 text-sm font-medium text-surface"
              >
                Cere o ofertă
              </Link>
              <Link
                to="/servicii"
                className="tap rounded-full bg-cyan px-6 py-3 text-sm font-medium text-ink"
              >
                Vezi serviciile
              </Link>
            </motion.div>
          </div>
          <motion.figure
            initial={reduce ? false : { y: 24, filter: "blur(4px)", opacity: 0 }}
            animate={reduce ? undefined : { y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="lg:col-span-6"
          >
            <div className="overflow-hidden rounded-3xl bg-magenta p-2">
              <motion.img
                style={{ scale: reduce ? 1 : photoScale }}
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
      </motion.section>

      <InkTicker progress={scrollYProgress} reduce={!!reduce} />

      <section>
        <div className="mx-auto grid max-w-6xl sm:grid-cols-4">
          {departments.map((dept, index) => (
            <Rise key={dept.title} className={`${inkTones[index]} h-full px-5 py-6`} delay={index * 0.06}>
              <p className="font-display text-2xl">{dept.title}</p>
              <ul className="mt-3 grid gap-1 text-sm">
                {dept.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Rise>
          ))}
        </div>
      </section>

      <InkField />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest text-magenta uppercase">Servicii</p>
            <TextReveal tag="h2" className="mt-2 font-display text-4xl text-ink sm:text-5xl">
              Ce iese din atelier
            </TextReveal>
          </div>
          <Link to="/servicii" className="text-sm font-medium text-magenta">
            Tot catalogul
          </Link>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <li key={item.slug}>
              <Rise delay={index * 0.04}>
                <Link
                  to="/servicii/$slug"
                  params={{ slug: item.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface"
                >
                  <div className={`${toneClass(item.slug)} aspect-[16/10] overflow-hidden`}>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex-1">
                      <p
                        className={`${toneClass(item.slug)} inline-block rounded-full px-3 py-1 text-xs tracking-widest uppercase`}
                      >
                        {item.kicker}
                      </p>
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
            <Rise key={step.n} className={`${inkTones[index]} rounded-3xl p-5`} delay={index * 0.05}>
              <p className="font-display text-3xl">{step.n}</p>
              <TextReveal tag="h3" className="mt-3 font-display text-2xl" delay={index * 0.04}>
                {step.title}
              </TextReveal>
              <p className="mt-2 text-sm">{step.body}</p>
            </Rise>
          ))}
        </div>
      </section>

      <section className="bg-magenta text-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 lg:grid-cols-2">
          <Rise>
            <img
              src="/media/colaborare.jpg"
              alt="Batem palma pentru colaborare"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
          </Rise>
          <div>
            <p className="text-xs tracking-widest text-yellow uppercase">În magazin</p>
            <TextReveal tag="h2" className="mt-3 font-display text-4xl sm:text-5xl">
              Hai să colaborăm.
            </TextReveal>
            <p className="mt-4 text-surface/90">
              {shop.street}, {shop.city}. {shop.landmark}. Luni–vineri până la 18:00, sâmbăta până
              la 13:00.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${shop.phoneTel}`}
                className="tap rounded-full bg-yellow px-6 py-3 text-sm font-medium text-ink"
              >
                {shop.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="tap rounded-full bg-ink px-6 py-3 text-sm text-surface"
              >
                Scrie-ne
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const ticker = ["Cyan", "Magenta", "Galben", "Negru"] as const;

function InkTicker({ progress, reduce }: { progress: MotionValue<number>; reduce: boolean }) {
  const x = useTransform(progress, [0, 1], ["0%", "-42%"]);
  const chips = Array.from({ length: 8 }, () => ticker).flat();

  return (
    <div className="overflow-hidden border-y border-line/80 bg-surface/75 py-3 backdrop-blur-sm">
      <motion.div style={{ x: reduce ? 0 : x }} className="flex w-max gap-3 px-5">
        {chips.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className={`${inkTones[index % inkTones.length]} rounded-full px-4 py-1 text-sm whitespace-nowrap`}
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
