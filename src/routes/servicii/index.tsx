import { createFileRoute, Link } from "@tanstack/react-router";
import { Rise } from "@/components/rise";
import { TextReveal } from "@/components/text-reveal";
import { inkTones, services, toneClass } from "@/lib/site";

export const Route = createFileRoute("/servicii/")({
  head: () => ({
    meta: [
      { title: "Servicii — Color Print Roman" },
      {
        name: "description",
        content:
          "Tipar digital și offset, print de mari dimensiuni, produse promoționale, cadouri, sisteme de afișare, gravură laser și cabină foto.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <main>
      <section className="bg-magenta text-surface">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs tracking-widest text-yellow uppercase">Servicii</p>
          <TextReveal tag="h1" className="mt-3 max-w-2xl font-display text-5xl leading-none sm:text-6xl" stagger={0.04}>
            De la o carte de vizită la fațada clădirii.
          </TextReveal>
          <p className="mt-5 max-w-xl text-lg text-surface/90">
            Alege piesa. Pe pagina ei sunt materialele și finisajele cu care lucrăm în Roman.
          </p>
        </div>
      </section>
      <ul className="mx-auto grid max-w-6xl gap-5 px-5 py-12">
        {services.map((item, index) => (
          <li key={item.slug}>
            <Rise delay={index * 0.04}>
              <Link
                to="/servicii/$slug"
                params={{ slug: item.slug }}
                className="grid items-center gap-5 rounded-3xl bg-surface p-3 sm:grid-cols-[180px_1fr_auto] sm:p-4"
              >
              <div className={`${toneClass(item.slug)} rounded-2xl p-1`}>
                <img src={item.image} alt="" className="aspect-[4/3] w-full rounded-xl object-cover" />
              </div>
              <div>
                <p className={`${inkTones[index % inkTones.length]} inline-block rounded-full px-3 py-1 text-xs tracking-widest uppercase`}>
                  {String(index + 1).padStart(2, "0")} · {item.kicker}
                </p>
                <h2 className="mt-2 font-display text-3xl text-ink">{item.title}</h2>
                <p className="mt-2 max-w-xl text-sm text-ink-soft">{item.summary}</p>
              </div>
              <span className="hidden pr-3 text-sm font-medium text-magenta sm:inline">Deschide</span>
              </Link>
            </Rise>
          </li>
        ))}
      </ul>
    </main>
  );
}
