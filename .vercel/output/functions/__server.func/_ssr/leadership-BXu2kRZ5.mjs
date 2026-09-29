import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ContactBand } from "./site-chrome-CuWBmziF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leadership-BXu2kRZ5.js
var import_jsx_runtime = require_jsx_runtime();
var heroImage = "/assets/team-mcb.webp";
var leadership = [
	{
		name: "John Morrison",
		role: "Chief Operating Officer",
		image: heroImage
	},
	{
		name: "Tony Zeng",
		role: "Chairman & Chief Executive Officer",
		image: heroImage
	},
	{
		name: "Michael Campbell",
		role: "Chief Marketing Officer",
		image: heroImage
	},
	{
		name: "Carol Gao",
		role: "Project Director, Vice President",
		image: "/assets/carol-gao.webp"
	},
	{
		name: "Michelle Hong Li",
		role: "Director of Sales, Vice President",
		image: "/assets/michelle-li.png"
	},
	{
		name: "Eric Shehata",
		role: "Director of Construction",
		image: "/assets/eric-shehata.jpg"
	},
	{
		name: "Alejandro J. Ortiz",
		role: "Director of Design",
		image: "/assets/alejandro-ortiz.webp"
	}
];
function LeadershipPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background px-5 pt-8 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-accent",
						children: "Leadership"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-5xl font-display text-5xl font-bold leading-[0.95] text-primary sm:text-7xl lg:text-[5rem]",
						children: "Experienced leadership behind every development."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-5xl text-base leading-7 text-muted-foreground",
						children: "Metro City Builders is guided by a team of executives and directors spanning construction, design, project delivery, and sales."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl overflow-hidden bg-[#161616]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-auto overflow-hidden bg-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: heroImage,
						alt: "Metro City Builders leadership team",
						className: "h-full w-full object-cover max-w-[900px] mx-auto"
					})
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background px-4 py-12 sm:px-8 sm:py-16 lg:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-1 gap-4 min-[321px]:max-[1023px]:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8",
				children: leadership.slice(3).map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: person.image,
						alt: person.name,
						className: "mx-auto h-[180px] w-full max-w-[280px] object-contain min-[480px]:h-[280px]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 text-center sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "break-words font-display text-lg font-bold text-primary sm:text-xl lg:text-2xl",
							children: person.name
						}), person.role && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-[0.58rem] uppercase leading-5 tracking-[0.12em] text-muted-foreground sm:text-[0.68rem] sm:tracking-[0.18em] lg:tracking-[0.2em]",
							children: person.role
						})]
					})]
				}, person.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background px-5 pb-20 pt-10 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-5xl font-bold leading-none text-primary sm:text-6xl",
					children: "Work with our team."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "mt-8 inline-flex min-w-[12rem] items-center justify-center border border-border px-6 py-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-primary transition-colors hover:border-accent hover:text-accent",
					children: "Get in touch"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, {})
	] });
}
//#endregion
export { LeadershipPage as component };
