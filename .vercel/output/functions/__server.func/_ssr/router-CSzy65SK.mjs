import { i as __toESM } from "../_runtime.mjs";
import { J as notFound, S as require_jsx_runtime, Y as require_react, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, n as TriangleAlert, r as Phone, t as X } from "../_libs/lucide-react.mjs";
import { i as AnimatePresence, r as MotionConfig } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-BlwbomNC.js
var shop = {
	name: "Color Print Roman",
	tagline: "Aducem culoare în viața ta.",
	phoneDisplay: "0743 178 667",
	phoneTel: "+40743178667",
	email: "colorprint_roman@yahoo.com",
	street: "Str. Roman Mușat nr. 21",
	city: "Roman, jud. Neamț",
	landmark: "Lângă Biblioteca Municipală și Farmacia 32",
	hours: [
		{
			days: "Luni – Vineri",
			time: "08:00 – 18:00"
		},
		{
			days: "Sâmbătă",
			time: "09:00 – 13:00"
		},
		{
			days: "Duminică",
			time: "Închis"
		}
	],
	maps: "https://www.google.com/maps/search/?api=1&query=Strada+Roman+Musat+21+Roman+Neamt"
};
var services = [
	{
		slug: "tipar-digital",
		title: "Tipar digital și offset",
		kicker: "Tiraje mici și mari",
		summary: "De la o coală până la un catalog. Digitalul e rapid pe serii mici; offsetul coboară costul când tirajul crește.",
		image: "/media/work-2.jpg",
		imageAlt: "Mașină de tipar digital Konica Minolta AccurioPress",
		items: [
			{
				name: "Copiere și imprimare",
				body: "Alb-negru sau color, serii mici și medii, de la documente la materiale de prezentare."
			},
			{
				name: "Flyere și pliante",
				body: "Cel mai scurt drum de la o ofertă la stradă. Pliantul are una sau mai multe îndoituri; flyerul stă întins."
			},
			{
				name: "Cărți de vizită",
				body: "O față sau două, carton simplu sau special, laminare, lac selectiv. Prima impresie, pe un dreptunghi de carton."
			},
			{
				name: "Mape de prezentare",
				body: "Carton 300 g/mp, mat sau lucios. Clienții aleg de obicei matul: mai rigid, ține mai bine în timp."
			},
			{
				name: "Broșuri și reviste",
				body: "Capsă, broșare sau spirală. Meniuri, cataloage, prezentări de companie. Plastifierea de copertă e opțională."
			},
			{
				name: "Afișe și calendare",
				body: "Afișe pentru eveniment sau loc. Calendare de buzunar, birou sau perete — un an de prezență pe un perete."
			},
			{
				name: "Foi cu antet și tipizate",
				body: "Antetul personalizează orice document ieftin. Tipizatele țin biroul în același format."
			},
			{
				name: "Plase CAD",
				body: "Plot pentru planuri de arhitectură, A4 până la A0+. Tăiere la format, împăturire, îndosariere."
			},
			{
				name: "Scanare și finisare",
				body: "Cărți, cataloage, acte, planșe. Îndosariere, plastifiere, tăiere, big și falt."
			}
		]
	},
	{
		slug: "print-mari-dimensiuni",
		title: "Print de mari dimensiuni",
		kicker: "Fațade, stradă, vitrină",
		summary: "Bannere, autocolante și mesh pentru exterior. Materialul se alege după lumină, vânt și cât trebuie să țină.",
		image: "/media/hero-press.jpg",
		imageAlt: "Plotter Epson pentru print de mari dimensiuni",
		items: [
			{
				name: "Banner frontlit",
				body: "Pânză de poliester, alb mat, luminată din față. Panouri mari afară și print de rezoluție bună în interior."
			},
			{
				name: "Banner blockout",
				body: "Trei straturi, miez negru, opac, printabil pe ambele fețe. Steaguri, panouri stradale, billboard."
			},
			{
				name: "Banner backlit",
				body: "Se aprinde din spate: casete luminoase, lightbox, display iluminat."
			},
			{
				name: "Mesh",
				body: "Perforat, lasă vântul și lumina să treacă. Pentru fațade, unde un banner plin ar trage prea tare."
			},
			{
				name: "Autocolante",
				body: "Personalizate sau colorate în masă și decupate. Pentru geam, mașină, panou."
			},
			{
				name: "Window graphic",
				body: "Folie one-way vision: grafică pe geam, vedere din interior. Și folie tip sablare, când vrei discret."
			},
			{
				name: "Canvas și steaguri",
				body: "Tablouri canvas sau multi-canvas, plus steaguri personalizate."
			}
		]
	},
	{
		slug: "produse-promotionale",
		title: "Produse promoționale",
		kicker: "Obiecte care circulă",
		summary: "Pixul, agenda și tricoul duc numele firmei mai departe decât un flyer lăsat pe masă.",
		image: "/media/produse-promotionale.jpeg",
		imageAlt: "Agendă, pix și tricou personalizate cu logo, plus flyer",
		items: [
			{
				name: "Pixuri",
				body: "Serii pentru târg, recepție sau kit de bun venit. Gravură sau print, după material."
			},
			{
				name: "Notebook-uri și agende",
				body: "Coperți personalizate pentru echipe, clienți sau conferințe."
			},
			{
				name: "Brelocuri",
				body: "Mici, ținute în buzunar. Utile când campania trebuie să rămână la îndemână."
			},
			{
				name: "Tricouri, veste, geci",
				body: "Pentru echipe, evenimente și uniforme lejere. Personalizare pe textil."
			}
		]
	},
	{
		slug: "cadouri-personalizate",
		title: "Cadouri personalizate",
		kicker: "Pentru oameni, nu doar pentru brand",
		summary: "Căni, magneți, ardezie, ceasuri. Cadoul de firmă sau de eveniment, făcut pe comandă.",
		image: "/media/cadouri-personalizate.jpeg",
		imageAlt: "Căni, piatră de ardezie, puzzle, magneți și insigne personalizate",
		items: [
			{
				name: "Căni",
				body: "Pentru birou sau pentru un eveniment. Un obiect care se folosește, nu se aruncă în sertar."
			},
			{
				name: "Magneți",
				body: "Mici, de frigider sau de promoție. Buni când mesajul trebuie să rămână la vedere."
			},
			{
				name: "Pietre de ardezie",
				body: "Suport mai greu, mai puțin „plastic”. Pentru cadouri care trebuie să se simtă solide."
			},
			{
				name: "Ceasuri",
				body: "Personalizate pentru aniversări de firmă sau cadouri către parteneri."
			},
			{
				name: "Tricouri",
				body: "Și în zona de cadou, nu doar de uniformă: echipe, nunți, echipe de proiect."
			}
		]
	},
	{
		slug: "sisteme-de-afisare",
		title: "Sisteme de afișare",
		kicker: "Standul care se montează dimineața",
		summary: "Roll-up, people stopper, casete luminoase, litere volumetrice și structuri pentru târg, recepție sau magazin. Grafica se schimbă, sistemul rămâne.",
		image: "/media/sisteme-de-afisare.jpg",
		imageAlt: "Roll-up, people stopper, casete luminoase, litere volumetrice și stand de târg",
		items: [
			{
				name: "Roll-up",
				body: "Se deschide în câteva minute. Pentru prezentări, recepție, colț de târg."
			},
			{
				name: "People stopper",
				body: "Stand de podea care oprește privirea pe culoar sau la intrare. Compact, mobil, ușor de mutat."
			},
			{
				name: "Casete și lightbox",
				body: "Față iluminată, când mesajul trebuie să se vadă și seara."
			},
			{
				name: "Litere volumetrice",
				body: "Pentru firmă, recepție sau eveniment. Se văd din unghi, nu doar din față."
			},
			{
				name: "Display de interior",
				body: "Panouri și sisteme pentru spații în care bannerul de stradă ar fi prea brut."
			}
		]
	},
	{
		slug: "litere-si-invitatii",
		title: "Invitații și afișe de eveniment",
		kicker: "Hârtie de ocazie",
		summary: "Invitații de nuntă sau botez care se țin în mână înainte de eveniment, și afișe în aceeași familie vizuală.",
		image: "/media/invitatii.jpeg",
		imageAlt: "Invitații de nuntă și botez, cu afiș de bun venit",
		items: [{
			name: "Invitații de nuntă și botez",
			body: "Hârtie, pliere, personalizare. Spune-ne numărul și termenul — restul îl stabilim pe mostră."
		}, {
			name: "Afișe de eveniment",
			body: "Același eveniment poate avea și invitația, și afișul. Le ținem în aceeași familie vizuală."
		}]
	},
	{
		slug: "gravura-laser",
		title: "Gravură laser",
		kicker: "În material, nu doar pe el",
		summary: "Gravăm logo-ul sau un desen în lemn, piele și obiecte promo. Rămâne și după ce cerneala s-ar șterge.",
		image: "/media/laser.jpg",
		imageAlt: "Cap de laser gravat pe lemn",
		items: [{
			name: "Lemn și piele",
			body: "Plăcuțe, coperți, obiecte de birou. Fișierul curat contează mai mult decât dimensiunea."
		}, {
			name: "Obiecte promo",
			body: "Pixuri metalice, brelocuri, plăcuțe de premiu. Serii mici, fără clișeu."
		}]
	},
	{
		slug: "cabina-foto",
		title: "Cabină foto",
		kicker: "Magia din cutie",
		summary: "Cabină pentru nunți, botezuri și petreceri de firmă. Oamenii pleacă cu o poză, nu doar cu o amintire.",
		image: "/media/gifts.jpg",
		imageAlt: "Recuzită de cabină foto pentru nunți și botezuri",
		items: [{
			name: "Nunți și botezuri",
			body: "Recuzită, fundal, print pe loc. Spune-ne data și sala."
		}, {
			name: "Evenimente de firmă",
			body: "Aceeași cabină, altă recuzită. Brandul poate sta pe ramă, nu pe fețele oamenilor."
		}]
	}
];
var departments = [
	{
		title: "Design",
		points: [
			"Logo și siglă",
			"Invitații",
			"Afișe și flyere",
			"Reviste"
		]
	},
	{
		title: "Grafică",
		points: [
			"Prelucrare de imagini",
			"Redimensionare",
			"Calibrare de culori",
			"Efecte și focalizare"
		]
	},
	{
		title: "Tipografie",
		points: [
			"Legătorie",
			"Multiplicare",
			"Print foto",
			"Laminare și plastifiere"
		]
	},
	{
		title: "Editură",
		points: [
			"Tipar digital",
			"Multiplicare rapidă",
			"Broșuri",
			"Reviste și afișe"
		]
	}
];
var steps = [
	{
		n: "01",
		title: "Spui ce trebuie să facă piesa",
		body: "Tiraj, termen, unde ajunge: în mână, pe geam sau pe fațadă. De aici alegem suportul."
	},
	{
		n: "02",
		title: "Verificăm fișierul",
		body: "Preferăm PDF cu fonturile incluse. Dacă nu e gata, îl putem pregăti noi."
	},
	{
		n: "03",
		title: "Tipărim și finisăm",
		body: "Digital sau offset, apoi tăiere, big, plastifiere, îndosariere — ce cere piesa."
	},
	{
		n: "04",
		title: "O ridici din Roman",
		body: "Str. Roman Mușat 21, lângă bibliotecă. Sună înainte dacă termenul e strâns."
	}
];
var finishes = [
	{
		id: "digital",
		name: "Digital",
		note: "Serii mici și medii. Gata repede, color sau alb-negru, fără plăci."
	},
	{
		id: "offset",
		name: "Offset",
		note: "Când tirajul crește, costul pe bucată coboară. Potrivit pentru cataloage și campanii lungi."
	},
	{
		id: "mat",
		name: "Mat",
		note: "Plastifiere mată: mai puțină amprentă, ton mai liniștit. Preferatul pentru mape."
	},
	{
		id: "lucios",
		name: "Lucios",
		note: "Culorile tari ies în față. Bun pe coperți și pe afișe care trebuie văzute de departe."
	}
];
var inkTones = [
	"tone-cyan",
	"tone-magenta",
	"tone-yellow",
	"tone-ink"
];
function toneClass(slug) {
	const index = services.findIndex((item) => item.slug === slug);
	return inkTones[(index < 0 ? 0 : index) % inkTones.length];
}
function serviceBySlug(slug) {
	return services.find((item) => item.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CSzy65SK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/logo.svg",
		alt: "",
		className,
		width: 160,
		height: 60,
		decoding: "async"
	});
}
var links = [
	{
		to: "/",
		label: "Acasă"
	},
	{
		to: "/despre",
		label: "Despre"
	},
	{
		to: "/servicii",
		label: "Servicii"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function pathActive(pathname, to) {
	if (to === "/") return pathname === "/";
	return pathname === to || pathname.startsWith(`${to}/`);
}
function CmykBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-4",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 bg-cyan" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 bg-magenta" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 bg-yellow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 bg-ink" })
		]
	});
}
function Header() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [servicesOpen, setServicesOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 bg-paper/95 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmykBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-cyan text-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "hidden sm:block",
							children: [
								shop.street,
								", ",
								shop.city
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sm:hidden",
							children: "Roman, Neamț"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${shop.phoneTel}`,
							className: "inline-flex items-center gap-2 font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), shop.phoneDisplay]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-4 border-b border-line px-5 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						onClick: () => setOpen(false),
						"aria-label": "Color Print Roman",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center rounded-lg bg-ink px-2.5 py-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "h-8 w-auto max-w-[160px] object-contain object-left" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-7 lg:flex",
						"aria-label": "Principal",
						children: [links.map((link) => link.to === "/servicii" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => setServicesOpen(true),
							onMouseLeave: () => setServicesOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.to,
								className: `text-sm tracking-wide ${pathActive(pathname, link.to) ? "text-magenta" : "text-ink"}`,
								children: "Servicii"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: servicesOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
									y: 8
								},
								transition: { duration: .18 },
								className: "absolute top-full right-0 z-20 w-80 pt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "rounded-2xl border border-line bg-surface p-2 shadow-sm",
									children: services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/servicii/$slug",
										params: { slug: item.slug },
										className: "block rounded-xl px-3 py-2 hover:bg-paper",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-sm text-ink",
											children: item.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs text-muted",
											children: item.kicker
										})]
									}) }, item.slug))
								})
							}) : null })]
						}, link.to) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: `text-sm tracking-wide ${pathActive(pathname, link.to) ? "text-magenta" : "text-ink"}`,
							children: link.label
						}, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "tap rounded-full bg-yellow px-5 py-2.5 text-sm font-medium text-ink",
							children: "Cere o ofertă"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tap inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden",
						"aria-expanded": open,
						"aria-label": open ? "Închide meniul" : "Deschide meniul",
						onClick: () => setOpen((value) => !value),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
				initial: {
					opacity: 0,
					y: -8
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
				className: "border-t border-line bg-paper px-5 py-4 lg:hidden",
				"aria-label": "Mobil",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-1",
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							onClick: () => setOpen(false),
							className: "block rounded-xl px-3 py-3 text-lg text-ink",
							children: link.label
						}) }, link.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 px-3 text-xs tracking-widest text-muted uppercase",
						children: "În atelier"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 grid gap-1",
						children: services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/servicii/$slug",
							params: { slug: item.slug },
							onClick: () => setOpen(false),
							className: "block rounded-xl px-3 py-2 text-sm text-ink-soft",
							children: item.title
						}) }, item.slug))
					})
				]
			}) : null })
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmykBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "h-10 w-auto max-w-[200px] object-contain object-left" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-sm text-paper/80",
							children: [shop.tagline, " Copycenter, tipar și personalizare în Roman."]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-yellow uppercase",
							children: "Atelier"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3",
							children: shop.street
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: shop.city }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-paper/70",
							children: shop.landmark
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-yellow uppercase",
							children: "Program"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid gap-1 text-sm",
							children: shop.hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.days }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.time })]
							}, row.days))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${shop.email}`,
							className: "mt-4 block text-sm text-paper underline-offset-4 hover:underline",
							children: shop.email
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-paper/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 text-xs text-paper/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Color Print Roman"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "text-paper",
						children: "Hai să colaborăm"
					})]
				})
			})
		]
	});
}
var styles_default = "/assets/styles-CCRmyj-W.css";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Color Print Roman — Aducem culoare în viața ta" },
			{
				name: "description",
				content: "Tipografie și copycenter în Roman, Neamț. Tipar digital și offset, print de mari dimensiuni, produse promoționale și cadouri personalizate."
			},
			{
				name: "theme-color",
				content: "#f3efe6"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.ico",
				sizes: "any"
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560;9..144,650&family=Outfit:wght@400;500;600&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFound
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ro",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MotionConfig, {
		reducedMotion: "user",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}, pathname)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-5 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-magenta uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: "Pagina nu există"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm text-paper",
				children: "Înapoi acasă"
			})
		]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-BMt0-G5R.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./contact-aSzUqST5.mjs");
var Route$3 = createFileRoute("/contact")({
	validateSearch: (search) => ({ serviciu: typeof search.serviciu === "string" && search.serviciu ? search.serviciu : void 0 }),
	head: () => ({ meta: [{ title: "Contact — Color Print Roman" }, {
		name: "description",
		content: "Color Print Roman, Str. Roman Mușat nr. 21, Roman. Telefon 0743 178 667. Luni–vineri 08–18."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./despre-DA4OblWI.mjs");
var Route$2 = createFileRoute("/despre")({
	head: () => ({ meta: [{ title: "Despre noi — Color Print Roman" }, {
		name: "description",
		content: "Atelier de tipar și personalizare în Roman, județul Neamț. Design, grafică, tipografie și editură."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./servicii-DCpxgSF7.mjs");
var Route$1 = createFileRoute("/servicii/")({
	head: () => ({ meta: [{ title: "Servicii — Color Print Roman" }, {
		name: "description",
		content: "Tipar digital și offset, print de mari dimensiuni, produse promoționale, cadouri, sisteme de afișare, gravură laser și cabină foto."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-DP8iVvxn.mjs");
var $$splitNotFoundComponentImporter = () => import("../_slug-Cra1b-l7.mjs");
var Route = createFileRoute("/servicii/$slug")({
	beforeLoad: ({ params }) => {
		if (!serviceBySlug(params.slug)) throw notFound();
	},
	head: ({ params }) => {
		const service = serviceBySlug(params.slug);
		return { meta: [{ title: service ? `${service.title} — Color Print Roman` : "Pagină negăsită — Color Print Roman" }, {
			name: "description",
			content: service?.summary ?? "Pagina nu există."
		}] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var DespreRoute = Route$2.update({
	id: "/despre",
	path: "/despre",
	getParentRoute: () => Route$5
});
var ServiciiIndexRoute = Route$1.update({
	id: "/servicii/",
	path: "/servicii/",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	ContactRoute,
	DespreRoute,
	ServiciiSlugRoute: Route.update({
		id: "/servicii/$slug",
		path: "/servicii/$slug",
		getParentRoute: () => Route$5
	}),
	ServiciiIndexRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { finishes as a, services as c, toneClass as d, departments as i, shop as l, Route as n, inkTones as o, Route$3 as r, serviceBySlug as s, router_exports as t, steps as u };
