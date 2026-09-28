import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as PageHero, t as ContactBand } from "./site-chrome-DwY3NYra.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/what-we-do-IfSS6uG7.js
var import_jsx_runtime = require_jsx_runtime();
var heroImage = "/assets/grid-modernization.jpg";
var capabilities = [
	{
		n: "01",
		title: "Grid Modernization",
		image: heroImage,
		copy: "We help shape stronger, more responsive electrical infrastructure around the needs of growing metropolitan and commercial environments.",
		points: [
			"System-minded planning",
			"Reliability-focused execution",
			"Infrastructure built to adapt"
		]
	},
	{
		n: "02",
		title: "Renewable Integration",
		image: "/assets/renewable-integration.jpg",
		copy: "We connect renewable generation with the places that need it, balancing technical performance with thoughtful development.",
		points: [
			"Solar infrastructure",
			"Site and grid coordination",
			"Responsible development"
		]
	},
	{
		n: "03",
		title: "Energy Storage",
		image: "/assets/energy-storage.jpg",
		copy: "We advance storage solutions that support grid flexibility, strengthen resilience, and unlock greater value from renewable energy.",
		points: [
			"Utility-scale systems",
			"Operational resilience",
			"Long-term asset thinking"
		]
	}
];
function WhatWeDoPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Integrated capabilities",
			title: "What we do.",
			copy: "Metro City Energy brings planning, engineering, and infrastructure thinking together to strengthen the systems cities rely on.",
			image: heroImage
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 py-20 sm:px-8 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-accent",
							children: "The Metro City approach"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-5xl font-bold uppercase leading-none sm:text-7xl",
							children: "One system. Multiple disciplines."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 text-lg leading-8 text-muted-foreground",
							children: "Energy challenges do not arrive in isolation. Our capabilities are designed to work together, aligning generation, storage, and grid needs around a clear operating objective."
						})
					]
				})
			})
		}),
		capabilities.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: index % 2 ? "bg-secondary" : "bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-0 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: item.title,
					loading: "lazy",
					width: 960,
					height: 688,
					className: `h-full min-h-96 w-full object-cover ${index % 2 ? "lg:order-2" : ""}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center px-5 py-14 sm:px-12 lg:p-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl font-bold text-accent",
							children: item.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-5xl font-bold uppercase leading-none",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base leading-8 text-muted-foreground",
							children: item.copy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-3 border-t border-border pt-6",
							children: item.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-sm font-semibold uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-accent" }), point]
							}, point))
						})
					]
				})]
			})
		}, item.n)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, {})
	] });
}
//#endregion
export { WhatWeDoPage as component };
