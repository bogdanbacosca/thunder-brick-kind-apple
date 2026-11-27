import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, c as Clock, l as Check, o as Mail, r as Phone, s as Copy } from "../_libs/lucide-react.mjs";
import { i as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { c as services, l as shop, r as Route$3 } from "./router-CSzy65SK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-aSzUqST5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var field = "w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink outline-none transition focus:border-ink";
function QuoteForm({ initialService = "" }) {
	const preset = services.some((item) => item.slug === initialService) ? initialService : "";
	const [nume, setNume] = (0, import_react.useState)("");
	const [telefon, setTelefon] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [serviciu, setServiciu] = (0, import_react.useState)(preset);
	const [detalii, setDetalii] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	function compose() {
		const label = services.find((item) => item.slug === serviciu)?.title ?? "nespecificat";
		return [
			`Nume: ${nume}`,
			`Telefon: ${telefon}`,
			email ? `Email: ${email}` : null,
			`Serviciu: ${label}`,
			"",
			detalii.trim() || "(fără detalii)"
		].filter((line) => line !== null).join("\n");
	}
	function onSubmit(event) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-4",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-2 text-sm text-ink-soft",
					children: ["Nume", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: nume,
						onChange: (e) => setNume(e.target.value),
						name: "nume",
						autoComplete: "name"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-2 text-sm text-ink-soft",
					children: ["Telefon", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: telefon,
						onChange: (e) => setTelefon(e.target.value),
						name: "telefon",
						inputMode: "tel",
						autoComplete: "tel"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2 text-sm text-ink-soft",
				children: [
					"Email ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "(opțional)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: email,
						onChange: (e) => setEmail(e.target.value),
						name: "email",
						type: "email",
						autoComplete: "email"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2 text-sm text-ink-soft",
				children: ["Serviciu", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: field,
					value: serviciu,
					onChange: (e) => setServiciu(e.target.value),
					name: "serviciu",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Alege din listă"
					}), services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item.slug,
						children: item.title
					}, item.slug))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2 text-sm text-ink-soft",
				children: ["Ce trebuie tipărit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: `${field} min-h-32 resize-y`,
					value: detalii,
					onChange: (e) => setDetalii(e.target.value),
					name: "detalii",
					placeholder: "Tiraj, format, termen, finisaj."
				})]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-magenta",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "tap w-full rounded-full bg-magenta px-6 py-3 text-base font-medium text-surface sm:w-auto",
				children: "Deschide mesajul în email"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Mesajul se deschide în programul tău de email, către ",
					shop.email,
					". Nu păstrăm datele pe site."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -8
					},
					transition: { duration: .25 },
					className: "rounded-2xl border border-line bg-paper-deep p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-ink",
							children: "Dacă emailul nu s-a deschis, copiază textul și trimite-l tu."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "mt-3 whitespace-pre-wrap font-sans text-sm text-ink-soft",
							children: sent
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: copy,
							className: "tap mt-3 inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-sm",
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? "Copiat" : "Copiază mesajul"]
						})
					]
				}) : null
			})
		]
	});
}
function ContactPage() {
	const { serviciu } = Route$3.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-cyan uppercase",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl leading-none text-ink",
					children: "Hai să colaborăm."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-ink-soft",
					children: "Sună, treci pe la magazin sau lasă detaliile lucrării. Răspundem în program."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 grid gap-5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-5 shrink-0 text-cyan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-ink",
									children: shop.street
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: shop.city }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: shop.landmark
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: shop.maps,
									className: "mt-1 inline-block text-magenta underline-offset-4 hover:underline",
									children: "Deschide harta"
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5 shrink-0 text-cyan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${shop.phoneTel}`,
								className: "text-ink",
								children: shop.phoneDisplay
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5 shrink-0 text-cyan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${shop.email}`,
								className: "break-all text-ink",
								children: shop.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-5 shrink-0 text-cyan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: shop.hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								row.days,
								": ",
								row.time
							] }, row.days)) })]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border border-line bg-surface p-5 sm:p-8 lg:col-span-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-ink",
					children: "Cerere de ofertă"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 mb-6 text-sm text-muted",
					children: "Tiraj, format, termen. Cu cât e mai concret, cu atât oferta e mai scurtă."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, { initialService: serviciu ?? "" })
			]
		})]
	});
}
//#endregion
export { ContactPage as component };
