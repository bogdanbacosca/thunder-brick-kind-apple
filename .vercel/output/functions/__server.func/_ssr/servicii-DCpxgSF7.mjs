import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as services, d as toneClass, o as inkTones } from "./router-CSzy65SK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/servicii-DCpxgSF7.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-magenta text-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-yellow uppercase",
					children: "Servicii"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-2xl font-display text-5xl leading-none sm:text-6xl",
					children: "De la o carte de vizită la fațada clădirii."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-lg text-surface/90",
					children: "Alege piesa. Pe pagina ei sunt materialele și finisajele cu care lucrăm în Roman."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mx-auto grid max-w-6xl gap-5 px-5 py-12",
		children: services.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/servicii/$slug",
			params: { slug: item.slug },
			className: "grid items-center gap-5 rounded-3xl bg-surface p-3 sm:grid-cols-[180px_1fr_auto] sm:p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `${toneClass(item.slug)} rounded-2xl p-1`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: "",
						className: "aspect-[4/3] w-full rounded-xl object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: `${inkTones[index % inkTones.length]} inline-block rounded-full px-3 py-1 text-xs tracking-widest uppercase`,
						children: [
							String(index + 1).padStart(2, "0"),
							" · ",
							item.kicker
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl text-ink",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-ink-soft",
						children: item.summary
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden pr-3 text-sm font-medium text-magenta sm:inline",
					children: "Deschide"
				})
			]
		}) }, item.slug))
	})] });
}
//#endregion
export { ServicesIndex as component };
