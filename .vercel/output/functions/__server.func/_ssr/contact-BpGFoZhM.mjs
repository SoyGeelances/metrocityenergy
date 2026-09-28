import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as Mail, r as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BpGFoZhM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WEB3FORMS_ACCESS_KEY = "a0f16cbe-66cc-4808-8af9-4f2e08d58ed6";
var WEB3FORMS_SCRIPT_URL = "https://web3forms.com/client/script.js";
function ContactPage() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!document.querySelector(`script[src="${WEB3FORMS_SCRIPT_URL}"]`)) {
			const script = document.createElement("script");
			script.src = WEB3FORMS_SCRIPT_URL;
			script.async = true;
			script.defer = true;
			document.body.appendChild(script);
		}
	}, []);
	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const captchaField = form.querySelector("textarea[name=\"h-captcha-response\"]");
		if (!captchaField || !captchaField.value.trim()) {
			setStatus("error");
			setMessage("Please complete the hCaptcha challenge before sending.");
			return;
		}
		const formData = new FormData(form);
		formData.set("access_key", WEB3FORMS_ACCESS_KEY);
		formData.set("subject", "New inquiry from Metro City Energy website");
		setStatus("sending");
		setMessage("");
		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData
			});
			const result = await response.json();
			if (!response.ok || !result.success) throw new Error(result.message || "Submission failed.");
			setStatus("success");
			setMessage("Your message has been sent successfully.");
			form.reset();
		} catch (error) {
			setStatus("error");
			setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
		}
	};
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-3 text-base text-primary-foreground/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-1 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "1211 Center Court Dr #208, Covina CA 91724" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-1 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "underline underline-offset-4",
							href: "mailto:info@metrocitybuilders.com",
							children: "info@metrocitybuilders.com"
						})]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "bg-background p-6 text-foreground sm:p-10",
				onSubmit: handleSubmit,
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						name: "botcheck",
						className: "hidden",
						tabIndex: -1,
						autoComplete: "off"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-captcha",
							"data-captcha": "true",
							"data-theme": "light",
							"aria-label": "Security check"
						})
					}),
					message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-4 text-sm ${status === "success" ? "text-green-700" : "text-red-600"}`,
						children: message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "button button-dark mt-7",
						disabled: status === "sending",
						children: status === "sending" ? "Sending..." : "Send inquiry"
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
