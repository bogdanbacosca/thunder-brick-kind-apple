import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { Mark } from "@/components/mark";
import { services, shop } from "@/lib/site";

const links = [
  { to: "/", label: "Acasă" },
  { to: "/despre", label: "Despre" },
  { to: "/servicii", label: "Servicii" },
  { to: "/contact", label: "Contact" },
] as const;

function pathActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function CmykBar() {
  return (
    <div className="grid grid-cols-4" aria-hidden="true">
      <span className="h-2 bg-cyan" />
      <span className="h-2 bg-magenta" />
      <span className="h-2 bg-yellow" />
      <span className="h-2 bg-ink" />
    </div>
  );
}

function ScrollRule() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const background = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [
    "#00b5d4",
    "#e1066b",
    "#ffd000",
    "#141210",
    "#e1066b",
  ]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, background, transformOrigin: "0% 50%" }}
      className="pointer-events-none fixed top-0 right-0 left-0 z-50 h-1"
    />
  );
}

export function Header() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <ScrollRule />
      <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-md">
      <CmykBar />
      <div className="bg-cyan text-ink">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 text-sm">
          <p className="hidden sm:block">
            {shop.street}, {shop.city}
          </p>
          <p className="sm:hidden">Roman, Neamț</p>
          <a href={`tel:${shop.phoneTel}`} className="inline-flex items-center gap-2 font-medium">
            <Phone className="size-4" />
            {shop.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 border-b border-line px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Color Print Roman">
          <span className="inline-flex items-center rounded-lg bg-ink px-2.5 py-1.5">
            <Mark className="h-8 w-auto max-w-[160px] object-contain object-left" />
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {links.map((link) =>
            link.to === "/servicii" ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={link.to}
                  className={`text-sm tracking-wide ${pathActive(pathname, link.to) ? "text-magenta" : "text-ink"}`}
                >
                  Servicii
                </Link>
                <AnimatePresence>
                  {servicesOpen ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full right-0 z-20 w-80 pt-3"
                    >
                      <ul className="rounded-2xl border border-line bg-surface p-2 shadow-sm">
                        {services.map((item) => (
                          <li key={item.slug}>
                            <Link
                              to="/servicii/$slug"
                              params={{ slug: item.slug }}
                              className="block rounded-xl px-3 py-2 hover:bg-paper"
                            >
                              <span className="block text-sm text-ink">{item.title}</span>
                              <span className="block text-xs text-muted">{item.kicker}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide ${pathActive(pathname, link.to) ? "text-magenta" : "text-ink"}`}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link to="/contact" className="tap rounded-full bg-yellow px-5 py-2.5 text-sm font-medium text-ink">
            Cere o ofertă
          </Link>
        </nav>
        <button
          type="button"
          className="tap inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-line bg-paper px-5 py-4 lg:hidden"
            aria-label="Mobil"
          >
            <ul className="grid gap-1">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-lg text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 px-3 text-xs tracking-widest text-muted uppercase">În atelier</p>
            <ul className="mt-2 grid gap-1">
              {services.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/servicii/$slug"
                    params={{ slug: item.slug }}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm text-ink-soft"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <CmykBar />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Mark className="h-10 w-auto max-w-[200px] object-contain object-left" />
          </div>
          <p className="mt-4 max-w-sm text-paper/80">{shop.tagline} Copycenter, tipar și personalizare în Roman.</p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-yellow uppercase">Atelier</p>
          <p className="mt-3">{shop.street}</p>
          <p>{shop.city}</p>
          <p className="mt-2 text-sm text-paper/70">{shop.landmark}</p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-yellow uppercase">Program</p>
          <ul className="mt-3 grid gap-1 text-sm">
            {shop.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4">
                <span>{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
          <a href={`mailto:${shop.email}`} className="mt-4 block text-sm text-paper underline-offset-4 hover:underline">
            {shop.email}
          </a>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 text-xs text-paper/60">
          <p>© {new Date().getFullYear()} Color Print Roman</p>
          <Link to="/contact" className="text-paper">
            Hai să colaborăm
          </Link>
        </div>
      </div>
    </footer>
  );
}
