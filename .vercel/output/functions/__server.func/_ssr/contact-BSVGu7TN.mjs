import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BSVGu7TN.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary px-5 py-16 text-primary-foreground sm:px-8 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-[68vh] max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-accent",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-6xl font-bold uppercase leading-[0.88] sm:text-8xl",
					children: "Let’s move energy forward."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-lg text-base leading-8 text-primary-foreground/70",
					children: "Tell us about your organization, project, or partnership opportunity. Our team will review your message and follow up with the right conversation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "mt-10 inline-block border-b border-accent pb-2 text-sm text-accent",
					href: "mailto:contact@metrocityenergy.com",
					children: "contact@metrocityenergy.com"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "bg-background p-6 text-foreground sm:p-10",
				onSubmit: (event) => event.preventDefault(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-7 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								name: "name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Organization",
								name: "organization"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								name: "phone",
								type: "tel"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-7 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "How can we help?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							rows: 6,
							required: true,
							className: "mt-3 w-full resize-none border border-input bg-background p-4 outline-hidden focus:border-accent"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "button button-dark mt-7",
						children: "Send inquiry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs leading-5 text-muted-foreground",
						children: "This form is currently a visual prototype and does not send submissions yet."
					})
				]
			})]
		})
	});
}
function Field({ label, name, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required: true,
			className: "mt-3 h-12 w-full border-b border-input bg-transparent outline-hidden focus:border-accent"
		})]
	});
}
//#endregion
export { ContactPage as component };
