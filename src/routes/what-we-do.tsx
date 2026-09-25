import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/grid-modernization.jpg";
import solarImage from "../assets/renewable-integration.jpg";
import storageImage from "../assets/energy-storage.jpg";
import { ContactBand, PageHero } from "../components/site-chrome";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({ meta: [
    { title: "What We Do | Metro City Energy" },
    { name: "description", content: "Explore Metro City Energy capabilities in grid modernization, renewable integration, and energy storage." },
    { property: "og:title", content: "What We Do | Metro City Energy" },
    { property: "og:description", content: "Integrated energy capabilities for reliable, modern infrastructure." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: WhatWeDoPage,
});

const capabilities = [
  { n: "01", title: "Grid Modernization", image: heroImage, copy: "We help shape stronger, more responsive electrical infrastructure around the needs of growing metropolitan and commercial environments.", points: ["System-minded planning", "Reliability-focused execution", "Infrastructure built to adapt"] },
  { n: "02", title: "Renewable Integration", image: solarImage, copy: "We connect renewable generation with the places that need it, balancing technical performance with thoughtful development.", points: ["Solar infrastructure", "Site and grid coordination", "Responsible development"] },
  { n: "03", title: "Energy Storage", image: storageImage, copy: "We advance storage solutions that support grid flexibility, strengthen resilience, and unlock greater value from renewable energy.", points: ["Utility-scale systems", "Operational resilience", "Long-term asset thinking"] },
];

function WhatWeDoPage() { return <>
  <PageHero eyebrow="Integrated capabilities" title="What we do." copy="Metro City Energy brings planning, engineering, and infrastructure thinking together to strengthen the systems cities rely on." image={heroImage} />
  <section className="px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="eyebrow text-accent">The Metro City approach</p><h2 className="mt-4 font-display text-5xl font-bold uppercase leading-none sm:text-7xl">One system. Multiple disciplines.</h2><p className="mt-7 text-lg leading-8 text-muted-foreground">Energy challenges do not arrive in isolation. Our capabilities are designed to work together, aligning generation, storage, and grid needs around a clear operating objective.</p></div></div></section>
  {capabilities.map((item, index) => <section key={item.n} className={index % 2 ? "bg-secondary" : "bg-background"}><div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2"><img src={item.image} alt={item.title} loading="lazy" width={960} height={688} className={`h-full min-h-96 w-full object-cover ${index % 2 ? "lg:order-2" : ""}`} /><div className="flex flex-col justify-center px-5 py-14 sm:px-12 lg:p-20"><span className="font-display text-3xl font-bold text-accent">{item.n}</span><h2 className="mt-5 font-display text-5xl font-bold uppercase leading-none">{item.title}</h2><p className="mt-6 text-base leading-8 text-muted-foreground">{item.copy}</p><ul className="mt-8 space-y-3 border-t border-border pt-6">{item.points.map((point) => <li key={point} className="flex items-center gap-3 text-sm font-semibold uppercase"><span className="h-px w-8 bg-accent" />{point}</li>)}</ul></div></div></section>)}
  <ContactBand />
</>; }