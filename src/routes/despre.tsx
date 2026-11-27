import { createFileRoute, Link } from "@tanstack/react-router";
import { departments, inkTones, shop } from "@/lib/site";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre noi — Color Print Roman" },
      {
        name: "description",
        content: "Atelier de tipar și personalizare în Roman, județul Neamț. Design, grafică, tipografie și editură.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <section className="bg-cyan text-ink">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs tracking-widest uppercase">Despre noi</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-none sm:text-6xl">
            Un atelier de tipar în Roman, nu un catalog fără adresă.
          </h1>
          <p className="mt-6 max-w-2xl text-lg">
            Oferim servicii diverse, făcute cu grijă: design, grafică, tipar digital și offset, finisare și
            obiecte personalizate. Misiunea e calitatea lucrării care pleacă din mână, nu lista cea mai lungă.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 lg:grid-cols-5">
        <img
          src="/media/still-life.jpg"
          alt="Masa de lucru cu coli și cerneluri"
          className="aspect-[4/3] w-full rounded-3xl object-cover lg:col-span-3"
        />
        <div className="flex flex-col justify-between rounded-3xl bg-magenta p-6 text-surface lg:col-span-2">
          <div>
            <p className="text-xs tracking-widest text-yellow uppercase">Unde ne găsești</p>
            <p className="mt-4 font-display text-3xl">{shop.street}</p>
            <p className="mt-1">{shop.city}</p>
            <p className="mt-3 text-sm text-surface/80">{shop.landmark}</p>
          </div>
          <ul className="mt-8 grid gap-2 text-sm">
            {shop.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4 border-t border-surface/25 pt-2">
                <span>{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-4xl text-ink">Patru mese, același atelier</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, index) => (
              <li key={dept.title} className={`${inkTones[index]} rounded-3xl p-5`}>
                <h3 className="font-display text-2xl">{dept.title}</h3>
                <ul className="mt-3 grid gap-1 text-sm text-ink-soft">
                  {dept.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-ink-soft">
            Pregătim fișiere, calibrăm culorile și finisăm: legătorie, laminare, plastifiere, print foto.
            Dacă materialul trebuie să iasă din oraș, îl ridici de aici sau stabilim livrarea când ceri oferta.
          </p>
          <Link to="/contact" className="tap mt-8 inline-flex rounded-full bg-yellow px-6 py-3 text-sm font-medium text-ink">
            Vorbește cu atelierul
          </Link>
        </div>
      </section>
    </main>
  );
}
