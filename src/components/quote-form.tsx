import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy } from "lucide-react";
import { services, shop } from "@/lib/site";

const field =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink outline-none transition focus:border-ink";

export function QuoteForm({ initialService = "" }: { initialService?: string }) {
  const preset = services.some((item) => item.slug === initialService) ? initialService : "";
  const [nume, setNume] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [serviciu, setServiciu] = useState(preset);
  const [detalii, setDetalii] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState("");
  const [copied, setCopied] = useState(false);

  function compose() {
    const label = services.find((item) => item.slug === serviciu)?.title ?? "nespecificat";
    return [
      `Nume: ${nume}`,
      `Telefon: ${telefon}`,
      email ? `Email: ${email}` : null,
      `Serviciu: ${label}`,
      "",
      detalii.trim() || "(fără detalii)",
    ]
      .filter((line) => line !== null)
      .join("\n");
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (nume.trim().length < 2) {
      setError("Spune-ne cum te cheamă.");
      return;
    }
    if (telefon.replace(/\D/g, "").length < 10) {
      setError("Lasă un telefon la care te putem suna.");
      return;
    }
    setError("");
    const body = compose();
    setSent(body);
    const label = services.find((item) => item.slug === serviciu)?.title ?? "ofertă";
    const href = `mailto:${shop.email}?subject=${encodeURIComponent(`Cerere de ofertă — ${label}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(sent);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-ink-soft">
          Nume
          <input className={field} value={nume} onChange={(e) => setNume(e.target.value)} name="nume" autoComplete="name" />
        </label>
        <label className="grid gap-2 text-sm text-ink-soft">
          Telefon
          <input
            className={field}
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
            name="telefon"
            inputMode="tel"
            autoComplete="tel"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-ink-soft">
        Email <span className="text-muted">(opțional)</span>
        <input
          className={field}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          autoComplete="email"
        />
      </label>
      <label className="grid gap-2 text-sm text-ink-soft">
        Serviciu
        <select className={field} value={serviciu} onChange={(e) => setServiciu(e.target.value)} name="serviciu">
          <option value="">Alege din listă</option>
          {services.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.title}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm text-ink-soft">
        Ce trebuie tipărit
        <textarea
          className={`${field} min-h-32 resize-y`}
          value={detalii}
          onChange={(e) => setDetalii(e.target.value)}
          name="detalii"
          placeholder="Tiraj, format, termen, finisaj."
        />
      </label>
      {error ? <p className="text-sm text-magenta">{error}</p> : null}
      <button type="submit" className="tap w-full rounded-full bg-magenta px-6 py-3 text-base font-medium text-surface sm:w-auto">
        Deschide mesajul în email
      </button>
      <p className="text-sm text-muted">
        Mesajul se deschide în programul tău de email, către {shop.email}. Nu păstrăm datele pe site.
      </p>
      <AnimatePresence initial={false}>
        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-line bg-paper-deep p-4"
          >
            <p className="text-sm font-medium text-ink">Dacă emailul nu s-a deschis, copiază textul și trimite-l tu.</p>
            <pre className="mt-3 whitespace-pre-wrap font-sans text-sm text-ink-soft">{sent}</pre>
            <button
              type="button"
              onClick={copy}
              className="tap mt-3 inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-sm"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Copiat" : "Copiază mesajul"}
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
