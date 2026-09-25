import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteHeader, i as SiteFooter } from "./site-chrome-COSyFwqu.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-txrX0v4g.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Wj5nVruF.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "Metro City Energy"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
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
				href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Inter:wght@400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var $$splitComponentImporter$3 = () => import("./routes-6OcEvh_3.mjs");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Metro City Energy | Powering the Urban Core" },
		{
			name: "description",
			content: "Metro City Energy develops resilient power infrastructure and renewable energy systems for modern cities."
		},
		{
			property: "og:title",
			content: "Metro City Energy | Powering the Urban Core"
		},
		{
			property: "og:description",
			content: "Resilient power infrastructure and renewable energy systems for modern cities."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-629k576j.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us | Metro City Energy" },
		{
			name: "description",
			content: "Learn how Metro City Energy approaches energy infrastructure with responsibility, collaboration, and long-term thinking."
		},
		{
			property: "og:title",
			content: "About Metro City Energy"
		},
		{
			property: "og:description",
			content: "Our approach to responsible, resilient energy infrastructure."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contact-BSVGu7TN.mjs");
var Route$1 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact | Metro City Energy" },
		{
			name: "description",
			content: "Contact Metro City Energy to discuss energy infrastructure, development opportunities, and partnerships."
		},
		{
			property: "og:title",
			content: "Contact Metro City Energy"
		},
		{
			property: "og:description",
			content: "Start a conversation about your next energy infrastructure opportunity."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./what-we-do-D0G7iMzJ.mjs");
var Route = createFileRoute("/what-we-do")({
	head: () => ({ meta: [
		{ title: "What We Do | Metro City Energy" },
		{
			name: "description",
			content: "Explore Metro City Energy capabilities in grid modernization, renewable integration, and energy storage."
		},
		{
			property: "og:title",
			content: "What We Do | Metro City Energy"
		},
		{
			property: "og:description",
			content: "Integrated energy capabilities for reliable, modern infrastructure."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	AboutRoute: Route$2.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$4
	}),
	ContactRoute: Route$1.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$4
	}),
	WhatWeDoRoute: Route.update({
		id: "/what-we-do",
		path: "/what-we-do",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
