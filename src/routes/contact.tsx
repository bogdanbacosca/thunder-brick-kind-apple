import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { Rise } from "@/components/rise";
import { TextReveal } from "@/components/text-reveal";
import { shop } from "@/lib/site";

type ContactSearch = { serviciu?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    serviciu: typeof search.serviciu === "string" && search.serviciu ? search.serviciu : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact — Color Print Roman" },
      {
        name: "description",
        content: "Color Print Roman, Str. Roman Mușat nr. 21, Roman. Telefon 0743 178 667. Luni–vineri 08–18.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { serviciu } = Route.useSearch();

  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <p className="text-xs tracking-widest text-cyan uppercase">Contact</p>
        <TextReveal tag="h1" className="mt-3 font-display text-5xl leading-none text-ink">
          Hai să colaborăm.
        </TextReveal>
        <p className="mt-4 text-ink-soft">
          Sună, treci pe la magazin sau lasă detaliile lucrării. Răspundem în program.
        </p>
        <figure className="mt-8 rounded-3xl overflow-hidden border border-line">
          <img
            src="/media/colaborare.jpg"
            alt="Echipă Color Print Roman — strângere de mâini după închiderea unei colaborări"
            className="aspect-[16/9] w-full h-auto block object-cover"
          />
        </figure>
        <ul className="mt-8 grid gap-5 text-sm">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-cyan" />
            <div>
              <p className="text-ink">{shop.street}</p>
              <p>{shop.city}</p>
              <p className="text-muted">{shop.landmark}</p>
              <a href={shop.maps} className="mt-1 inline-block text-magenta underline-offset-4 hover:underline">
                Deschide harta
              </a>
            </div>
          </li>
          <li className="flex gap-3">
            <Phone className="size-5 shrink-0 text-cyan" />
            <a href={`tel:${shop.phoneTel}`} className="text-ink">
              {shop.phoneDisplay}
            </a>
          </li>
          <li className="flex gap-3">
            <Mail className="size-5 shrink-0 text-cyan" />
            <a href={`mailto:${shop.email}`} className="break-all text-ink">
              {shop.email}
            </a>
          </li>
          <li className="flex gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-cyan" />
            <ul>
              {shop.hours.map((row) => (
                <li key={row.days}>
                  {row.days}: {row.time}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <Rise className="rounded-3xl border border-line bg-surface p-5 sm:p-8 lg:col-span-3" delay={0.08}>
        <h2 className="font-display text-3xl text-ink">Cerere de ofertă</h2>
        <p className="mt-2 mb-6 text-sm text-muted">Tiraj, format, termen. Cu cât e mai concret, cu atât oferta e mai scurtă.</p>
        <QuoteForm initialService={serviciu ?? ""} />
      </Rise>
    </main>
  );
}
