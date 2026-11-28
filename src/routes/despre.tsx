import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Rise } from "@/components/rise";
import { TextReveal } from "@/components/text-reveal";
import { departments, finishes, services, shop, steps } from "@/lib/site";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre noi — Color Print Roman" },
      {
        name: "description",
        content:
          "Color Print Roman, copycenter pe Str. Roman Mușat 21. Cum pregătim fișierul, alegem digital sau offset, finisăm și predăm lucrarea în Roman.",
      },
    ],
  }),
  component: About,
});

const essays = [
  {
    title: "Mai întâi, ce trebuie să facă piesa",
    body: "Tirajul și locul decid suportul. O coală care stă în mână, un autocolant pe geam și un mesh pe fațadă nu se tipăresc la fel. Spui unde ajunge materialul — de acolo alegem gramajul, finisajul și mașina.",
  },
  {
    title: "Fișierul, înainte de mașină",
    body: "Preferăm PDF cu fonturile incluse. Dacă nu e gata, îl putem pregăti noi: logo și siglă, invitații, afișe, flyere, reviste, prelucrare de imagine, redimensionare, calibrare de culori. Un fișier curat contează mai mult decât unul mare.",
  },
  {
    title: "Digital când e puțin, offset când crește",
    body: "Digitalul e rapid pe serii mici și medii, color sau alb-negru, fără plăci. Offsetul coboară costul pe bucată când tirajul crește — cataloage, campanii lungi, materiale care se repetă. Plotul CAD merge de la A4 până la A0+, cu tăiere, împăturire și îndosariere.",
  },
  {
    title: "Finisarea e partea care se ține în mână",
    body: "Tăiere, big, falt, laminare, plastifiere, îndosariere, legătorie, print foto. Matul lasă mai puțină amprentă și ține mai bine pe mape. Luciosul scoate culoarea pe coperți și pe afișe văzute de departe. Gravura laser rămâne în lemn, piele sau metal și după ce cerneala s-ar șterge.",
  },
] as const;

const stepRules = ["border-cyan", "border-magenta", "border-yellow", "border-ink"] as const;

function About() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-start gap-8 px-5 pt-12 pb-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs tracking-widest text-magenta uppercase">Despre noi</p>
          <TextReveal
            tag="h1"
            className="mt-3 max-w-xl font-display text-5xl leading-none sm:text-6xl"
            stagger={0.035}
          >
            Atelierul din Roman Mușat, văzut dinăuntru.
          </TextReveal>
          <p className="mt-5 max-w-md text-lg text-ink-soft">
            {shop.name} e un copycenter cu adresă, nu un catalog trimis de undeva. Design, tipar,
            finisare și obiecte personalizate — făcute aici și ridicate de aici.
          </p>
          <figure className="mt-8">
            <img
              src="/media/storefront.jpeg"
              alt="Vitrina Color Print Roman, tipografie și copycenter pe Str. Roman Mușat"
              className="aspect-[16/10] w-full rounded-3xl object-cover"
            />
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs tracking-widest text-muted uppercase">
              <span>Vitrina · {shop.street}</span>
              <span>{shop.city}</span>
            </figcaption>
          </figure>
        </div>
        <aside className="rounded-3xl border border-line bg-surface p-6 lg:sticky lg:top-36 lg:col-span-5 lg:self-start">
          <p className="text-xs tracking-widest text-magenta uppercase">Fișă de atelier</p>
          <p className="mt-3 font-display text-3xl leading-none">{shop.name}</p>
          <p className="mt-2 text-sm text-ink-soft">{shop.tagline}</p>
          <dl className="mt-6 grid gap-4 text-sm">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-magenta" aria-hidden />
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Adresă</dt>
                <dd className="mt-1">
                  {shop.street}
                  <br />
                  {shop.city}
                </dd>
                <dd className="mt-1 text-ink-soft">{shop.landmark}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-magenta" aria-hidden />
              <div className="min-w-0 flex-1">
                <dt className="text-xs tracking-widest text-muted uppercase">Program</dt>
                <dd className="mt-1">
                  <ul className="grid gap-1">
                    {shop.hours.map((row) => (
                      <li key={row.days} className="flex justify-between gap-4">
                        <span>{row.days}</span>
                        <span className="text-ink-soft">{row.time}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </div>
          </dl>
          <div className="mt-6 grid gap-2">
            <a
              href={`tel:${shop.phoneTel}`}
              className="tap inline-flex min-h-11 items-center gap-2 rounded-full bg-yellow px-4 py-2 text-sm font-medium text-ink"
            >
              <Phone className="size-4" aria-hidden />
              {shop.phoneDisplay}
            </a>
            <a
              href={`mailto:${shop.email}`}
              className="tap inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 py-2 text-sm"
            >
              <Mail className="size-4" aria-hidden />
              {shop.email}
            </a>
            <a
              href={shop.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="tap inline-flex min-h-11 items-center justify-between gap-2 rounded-full border border-line px-4 py-2 text-sm"
            >
              Deschide harta
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </aside>
      </section>

      <section className="border-y border-line bg-surface/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-36 lg:self-start">
            <p className="text-xs tracking-widest text-muted uppercase">Cum lucrează atelierul</p>
            <TextReveal tag="h2" className="mt-3 font-display text-4xl leading-none">
              Patru pași între fișier și coală.
            </TextReveal>
            <p className="mt-5 text-ink-soft">
              Misiunea e calitatea lucrării care pleacă din mână, nu lista cea mai lungă. Dacă
              materialul trebuie să iasă din oraș, îl ridici de aici sau stabilim livrarea când ceri
              oferta.
            </p>
          </div>
          <ol className="grid gap-8 lg:col-span-8">
            {essays.map((item, index) => (
              <li key={item.title}>
                <Rise delay={index * 0.04}>
                  <p className="font-display text-sm text-magenta">0{index + 1}</p>
                  <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-ink-soft">{item.body}</p>
                </Rise>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <TextReveal tag="h2" className="max-w-xl font-display text-4xl leading-none">
          De la ce spui, până la ce ridici.
        </TextReveal>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.n} className={`border-t-4 pt-4 ${stepRules[index]}`}>
              <p className="font-display text-3xl">{step.n}</p>
              <h3 className="mt-3 font-display text-xl">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <TextReveal tag="h2" className="font-display text-4xl leading-none lg:col-span-7">
              Patru mese, același atelier.
            </TextReveal>
            <p className="text-paper/75 lg:col-span-5">
              Designul, grafica, tipografia și editura stau în același loc. Nu trimitem fișierul
              „undeva” și nu predăm o coală pe care n-am văzut-o.
            </p>
          </div>
          <ul className="mt-10 divide-y divide-paper/15 border-y border-paper/15">
            {departments.map((dept, index) => (
              <li key={dept.title} className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-4">
                <span className="font-display text-2xl text-yellow sm:col-span-1">0{index + 1}</span>
                <h3 className="font-display text-3xl sm:col-span-3">{dept.title}</h3>
                <p className="text-paper/75 sm:col-span-8">{dept.points.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-widest text-muted uppercase">Finisaje</p>
            <h2 className="mt-3 font-display text-4xl leading-none">Cum se simte coala, nu doar cum arată.</h2>
          </div>
          <p className="text-ink-soft lg:col-span-5">
            Alegerea se face după tiraj și după unde stă piesa. Spune-ne ambele când ceri oferta.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {finishes.map((finish) => (
            <li key={finish.id} className="rounded-3xl bg-paper-deep p-6">
              <h3 className="font-display text-3xl">{finish.name}</h3>
              <p className="mt-3 text-ink-soft">{finish.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl leading-none">Ce iese din atelier</h2>
            <Link to="/servicii" className="text-sm text-magenta underline-offset-4 hover:underline">
              Toate serviciile
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {services.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/servicii/$slug"
                  params={{ slug: item.slug }}
                  className="group flex h-full items-start justify-between gap-4 rounded-3xl border border-line bg-surface p-5"
                >
                  <span>
                    <span className="text-xs tracking-widest text-muted uppercase">{item.kicker}</span>
                    <span className="mt-1 block font-display text-2xl">{item.title}</span>
                    <span className="mt-2 block text-sm text-ink-soft">{item.summary}</span>
                  </span>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-20 lg:grid-cols-2">
        <img
          src="/media/still-life.jpg"
          alt="Masa de lucru cu coli și cerneluri"
          className="aspect-[4/3] w-full rounded-3xl object-cover"
        />
        <div>
          <h2 className="font-display text-4xl leading-none">Vii, suni sau scrii.</h2>
          <p className="mt-4 max-w-md text-ink-soft">
            {shop.street}, {shop.city}. {shop.landmark}. Dacă termenul e strâns, sună înainte să
            pleci — spunem dacă piesa e gata de ridicat.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="tap inline-flex min-h-11 items-center rounded-full bg-magenta px-6 py-3 text-sm font-medium text-surface"
            >
              Vorbește cu atelierul
            </Link>
            <a
              href={shop.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="tap inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-6 py-3 text-sm"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
