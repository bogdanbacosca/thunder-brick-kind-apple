import { S as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DhjqwXBr.js
var import_jsx_runtime = require_jsx_runtime();
function MissingService() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-5 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-cyan uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl text-ink",
				children: "Nu avem pagina asta în catalog."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/servicii",
				className: "tap mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm text-paper",
				children: "Toate serviciile"
			})
		]
	});
}
//#endregion
export { MissingService as t };
