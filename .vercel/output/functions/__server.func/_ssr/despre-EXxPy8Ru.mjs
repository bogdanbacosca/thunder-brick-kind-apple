import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as shop, i as departments } from "./router-dTHWeQq4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/despre-EXxPy8Ru.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pt-12 pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-cyan uppercase",
					children: "Despre noi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-5xl leading-none text-ink sm:text-6xl",
					children: "Un atelier de tipar în Roman, nu un catalog fără adresă."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg text-ink-soft",
					children: "Oferim servicii diverse, făcute cu grijă: design, grafică, tipar digital și offset, finisare și obiecte personalizate. Misiunea e calitatea lucrării care pleacă din mână, nu lista cea mai lungă."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-5 pb-16 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/still-life.jpg",
				alt: "Masa de lucru cu coli și cerneluri",
				className: "aspect-[4/3] w-full rounded-3xl object-cover lg:col-span-3"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between rounded-3xl bg-ink p-6 text-paper lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-cyan uppercase",
						children: "Unde ne găsești"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-3xl",
						children: shop.street
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: shop.city
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-paper/75",
						children: shop.landmark
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-2 text-sm",
					children: shop.hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-4 border-t border-paper/15 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.days }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.time })]
					}, row.days))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl text-ink",
						children: "Patru mese, același atelier"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: departments.map((dept) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-3xl border border-line p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: dept.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 grid gap-1 text-sm text-ink-soft",
								children: dept.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
							})]
						}, dept.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 max-w-2xl text-ink-soft",
						children: "Pregătim fișiere, calibrăm culorile și finisăm: legătorie, laminare, plastifiere, print foto. Dacă materialul trebuie să iasă din oraș, îl ridici de aici sau stabilim livrarea când ceri oferta."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "tap mt-8 inline-flex rounded-full bg-magenta px-6 py-3 text-sm font-medium text-surface",
						children: "Vorbește cu atelierul"
					})
				]
			})
		})
	] });
}
//#endregion
export { About as component };
