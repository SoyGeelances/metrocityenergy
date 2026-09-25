import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as ContactBand } from "./site-chrome-COSyFwqu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-6OcEvh_3.js
var import_jsx_runtime = require_jsx_runtime();
var heroImage = "/assets/metro-energy-hero.jpg";
var services = [
	{
		number: "01",
		title: "Grid Modernization",
		copy: "Strengthening critical electrical networks with thoughtful planning, precise execution, and systems designed for evolving demand.",
		image: "/assets/grid-modernization.jpg"
	},
	{
		number: "02",
		title: "Renewable Integration",
		copy: "Connecting solar generation to metropolitan and commercial environments with infrastructure built around reliability.",
		image: "/assets/renewable-integration.jpg"
	},
	{
		number: "03",
		title: "Energy Storage",
		copy: "Advancing resilient energy systems with utility-scale storage that helps balance supply and demand.",
		image: "/assets/energy-storage.jpg"
	}
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid min-h-[calc(100vh-6rem)] overflow-hidden bg-background lg:grid-cols-[45%_55%]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex items-center px-5 py-20 sm:px-12 lg:px-[6vw]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-accent",
							children: "Infrastructure for a changing world"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 font-display text-6xl font-bold leading-[0.88] text-primary sm:text-8xl lg:text-[6.5rem]",
							children: "Leading the energy future."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-7 h-1 w-24 bg-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-lg text-base font-medium leading-8 text-primary/80",
							children: "Metro City Energy advances dependable energy infrastructure and renewable integration for the places where people live, work, and build the future."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/what-we-do",
								className: "button button-gold",
								children: ["Explore our work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
							})
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: heroImage,
				alt: "Solar infrastructure and a metropolitan grid at sunset",
				className: "h-full min-h-[32rem] w-full object-cover",
				width: 1920,
				height: 1088
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background px-5 py-24 sm:px-8 lg:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-accent",
						children: "About Metro City Energy"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-5xl font-bold leading-none text-primary sm:text-7xl",
								children: "Delivering reliable energy solutions."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-lg leading-8 text-muted-foreground",
								children: "We bring together energy expertise, disciplined development, and long-term stewardship to create infrastructure that performs for communities and partners."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/about",
								className: "mt-8 inline-flex items-center gap-2 border-b-2 border-accent pb-2 text-xs font-bold uppercase text-primary",
								children: ["Discover our approach ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
							})
						]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-accent",
							children: "What we do"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-5xl font-bold leading-none sm:text-7xl",
							children: "Powering progress across the energy system."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/what-we-do",
						className: "inline-flex items-center gap-2 border-b-2 border-accent pb-2 text-xs font-bold uppercase text-accent",
						children: ["View capabilities ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-px bg-primary-foreground/20 md:grid-cols-3",
					children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-primary p-7 lg:p-9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: service.image,
								alt: service.title,
								loading: "lazy",
								width: 960,
								height: 688,
								className: "aspect-[3/2] w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-7 block font-display text-2xl font-bold text-accent",
								children: service.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-3xl font-bold",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-7 text-primary-foreground/65",
								children: service.copy
							})
						]
					}, service.number))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 py-20 sm:px-8 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-accent",
					children: "The responsibility of scale"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-5xl font-bold leading-none text-primary sm:text-7xl",
					children: "Built beyond the moment."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-2xl text-lg leading-8 text-muted-foreground",
					children: "Energy infrastructure is a long-term commitment. We approach every opportunity with disciplined stewardship, collaborative thinking, and respect for the communities and environments our work touches."
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, {})
	] });
}
//#endregion
export { HomePage as component };
