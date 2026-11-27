import { i as __toESM } from "./_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as MissingService } from "./_slug-DhjqwXBr.mjs";
import { i as AnimatePresence } from "./_libs/framer-motion+[...].mjs";
import { t as motion } from "./_libs/motion.mjs";
import { a as finishes, n as Route, o as serviceBySlug, s as services } from "./_ssr/router-dTHWeQq4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-LuPXhDm1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServicePage() {
	const { slug } = Route.useParams();
	const service = serviceBySlug(slug);
	const [finish, setFinish] = (0, import_react.useState)("digital");
	if (!service) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingService, {});
	const showFinishes = slug === "tipar-digital" || slug === "print-mari-dimensiuni";
	const active = finishes.find((item) => item.id === finish) ?? finishes[0];
	const others = services.filter((item) => item.slug !== slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-end gap-8 px-5 py-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-cyan uppercase",
					children: service.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl leading-none text-ink sm:text-6xl",
					children: service.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-lg text-ink-soft",
					children: service.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					search: { serviciu: service.slug },
					className: "tap mt-8 inline-flex rounded-full bg-magenta px-6 py-3 text-sm font-medium text-surface",
					children: "Cere ofertă pentru asta"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: service.image,
				alt: service.imageAlt,
				className: "aspect-[16/10] w-full rounded-3xl object-cover"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-ink",
					children: "Ce intră aici"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2",
					children: service.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-line pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-ink",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink-soft",
							children: item.body
						})]
					}, item.name))
				})]
			})
		}),
		showFinishes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-cyan uppercase",
					children: "Alege direcția"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl text-ink",
					children: "Finisajul schimbă piesa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					role: "tablist",
					"aria-label": "Finisaje",
					children: finishes.map((item) => {
						const selected = item.id === finish;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": selected,
							onClick: () => setFinish(item.id),
							className: `tap rounded-full px-4 py-2 text-sm ${selected ? "bg-ink text-paper" : "border border-line bg-surface text-ink"}`,
							children: item.name
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
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
						transition: { duration: .2 },
						className: "mt-6 max-w-xl text-lg text-ink-soft",
						children: active.note
					}, active.id)
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-ink",
				children: "Și alte lucrări"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-3",
				children: others.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/servicii/$slug",
					params: { slug: item.slug },
					className: "block rounded-2xl border border-line p-4 hover:bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-muted uppercase",
						children: item.kicker
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-xl",
						children: item.title
					})]
				}) }, item.slug))
			})]
		})
	] });
}
//#endregion
export { ServicePage as component };
