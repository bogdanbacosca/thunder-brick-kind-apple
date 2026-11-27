import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { c as shop, i as departments, l as steps, s as services } from "./router-dTHWeQq4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DwzOtzn2.js
var import_jsx_runtime = require_jsx_runtime();
var ease = [
	.22,
	1,
	.36,
	1
];
function Rise({ children, className, delay = 0 }) {
	if (useReducedMotion()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: { y: 18 },
		whileInView: { y: 0 },
		viewport: {
			once: true,
			margin: "0px 0px -10% 0px"
		},
		transition: {
			duration: .55,
			delay,
			ease
		},
		children
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-end gap-10 px-5 pt-10 pb-16 lg:grid-cols-12 lg:pt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { y: 12 },
						animate: { y: 0 },
						transition: { duration: .45 },
						className: "text-xs tracking-widest text-cyan uppercase",
						children: "Tipografie · Roman, Neamț"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: { y: 16 },
						animate: { y: 0 },
						transition: {
							duration: .55,
							delay: .05
						},
						className: "mt-4 font-display text-5xl leading-none font-medium text-balance text-ink sm:text-7xl",
						children: shop.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { y: 16 },
						animate: { y: 0 },
						transition: {
							duration: .55,
							delay: .12
						},
						className: "mt-6 max-w-md text-lg text-ink-soft",
						children: "Copycenter, tipar digital și offset, print mare și obiecte personalizate. În Roman, pe Roman Mușat, lângă bibliotecă."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { y: 16 },
						animate: { y: 0 },
						transition: {
							duration: .55,
							delay: .18
						},
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "tap rounded-full bg-magenta px-6 py-3 text-sm font-medium text-surface",
							children: "Cere o ofertă"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/servicii",
							className: "tap rounded-full border border-ink px-6 py-3 text-sm text-ink",
							children: "Vezi serviciile"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
				initial: { y: 20 },
				animate: { y: 0 },
				transition: {
					duration: .6,
					delay: .08
				},
				className: "lg:col-span-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/still-life.jpg",
					alt: "Coli tipărite, cerneluri cyan și magenta și o lupă pe masa de lucru",
					className: "aspect-[16/10] w-full rounded-3xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-3 flex items-center justify-between text-xs tracking-widest text-muted uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cerneală pe hârtie" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "C · M · Y · K" })]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-4",
				children: departments.map((dept) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-surface px-5 py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-ink",
						children: dept.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-1 text-sm text-ink-soft",
						children: dept.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
					})]
				}, dept.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-cyan uppercase",
					children: "Servicii"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl text-ink sm:text-5xl",
					children: "Ce iese din atelier"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/servicii",
					className: "text-sm text-ink underline-offset-4 hover:underline",
					children: "Tot catalogul"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-4 md:grid-cols-2",
				children: services.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rise, {
					delay: index * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/servicii/$slug",
						params: { slug: item.slug },
						className: "group grid overflow-hidden rounded-3xl border border-line bg-surface sm:grid-cols-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: "",
							className: "aspect-[4/3] h-full w-full object-cover sm:col-span-2 sm:aspect-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between p-5 sm:col-span-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-muted uppercase",
									children: item.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-2xl text-ink",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink-soft",
									children: item.summary
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-1 text-sm text-magenta",
								children: ["Detalii", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
							})]
						})]
					})
				}) }, item.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-cyan uppercase",
						children: "Cum lucrăm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl sm:text-5xl",
						children: "De la fișier la coală"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-paper/75",
						children: "Misiunea e simplă: servicii diverse, făcute curat. Experiența stă în alegerea suportului, nu în promisiuni mari."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-6",
					children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[auto_1fr] gap-4 border-t border-paper/15 pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl text-cyan",
							children: step.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: step.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-paper/75",
							children: step.body
						})] })]
					}, step.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/cards-macro.jpg",
				alt: "Cărți de vizită cu forme geometrice și cerneală proaspătă",
				className: "aspect-[4/3] w-full rounded-3xl object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-cyan uppercase",
					children: "În magazin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl text-ink sm:text-5xl",
					children: "Hai să colaborăm."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-ink-soft",
					children: [
						shop.street,
						", ",
						shop.city,
						". ",
						shop.landmark,
						". Luni–vineri până la 18:00, sâmbăta până la 13:00."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${shop.phoneTel}`,
						className: "tap rounded-full bg-ink px-6 py-3 text-sm text-paper",
						children: shop.phoneDisplay
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "tap rounded-full border border-ink px-6 py-3 text-sm",
						children: "Scrie-ne"
					})]
				})
			] })]
		})
	] });
}
//#endregion
export { Home as component };
