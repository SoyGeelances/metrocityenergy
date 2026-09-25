import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Menu, r as ArrowRight, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-chrome-COSyFwqu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo = "/logo-metro-city-energy.webp";
var navItems = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About Us",
		to: "/about"
	},
	{
		label: "What We Do",
		to: "/what-we-do"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid h-24 max-w-[92rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex min-w-0 items-center",
					"aria-label": "Metro City Energy home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo,
						alt: "Metro City Energy",
						className: "h-[4.5rem] w-auto shrink-0 object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Main navigation",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: `nav-link ${pathname === item.to ? "nav-link-active" : ""}`,
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "icon-button lg:hidden",
					"aria-label": open ? "Close navigation" : "Open navigation",
					"aria-expanded": open,
					onClick: () => setOpen((value) => !value),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border bg-background px-5 py-5 lg:hidden",
			"aria-label": "Mobile navigation",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-7xl flex-col",
				children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "border-b border-border py-4 font-display text-2xl font-bold uppercase",
					children: item.label
				}, item.to))
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: logo,
				alt: "Metro City Energy",
				className: "h-28 w-auto object-contain",
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-md text-sm leading-7 text-muted-foreground",
				children: "Energy infrastructure shaped for stronger cities, reliable systems, and enduring value."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-col gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						children: "About Us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/what-we-do",
						children: "What We Do"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Connect"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-col gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:contact@metrocityenergy.com",
						children: "Email us"
					})]
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border px-5 py-6 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-2 text-xs uppercase text-muted-foreground sm:flex-row sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Metro City Energy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Energy built for what comes next" })]
			})
		})]
	});
}
function PageHero({ eyebrow, title, copy, image }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid min-h-[68vh] bg-background lg:grid-cols-[45%_55%]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center px-5 py-20 sm:px-12 lg:px-[10vw]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-accent",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 font-display text-6xl font-bold leading-[0.9] text-primary sm:text-8xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-7 h-1 w-24 bg-accent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 text-base leading-8 text-muted-foreground sm:text-lg",
						children: copy
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: "",
			className: "h-full min-h-[26rem] w-full object-cover",
			width: 1920,
			height: 1080
		})]
	});
}
function ContactBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-accent",
				children: "Start a conversation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 max-w-3xl font-display text-5xl font-bold uppercase leading-none sm:text-7xl",
				children: "Let’s build what powers tomorrow."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "button button-gold shrink-0",
				children: ["Contact us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					size: 18,
					"aria-hidden": "true"
				})]
			})]
		})
	});
}
function NumberedItem({ number, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "border-t border-border py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 sm:grid-cols-[5rem_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-2xl font-bold text-accent",
				children: number
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-3xl font-bold uppercase",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-sm leading-7 text-muted-foreground",
				children
			})] })]
		})
	});
}
//#endregion
export { SiteHeader as a, SiteFooter as i, NumberedItem as n, PageHero as r, ContactBand as t };
