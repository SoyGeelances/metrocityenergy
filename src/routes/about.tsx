import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/renewable-integration.jpg";
import { ContactBand, NumberedItem, PageHero } from "../components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us | Metro City Energy" },
    { name: "description", content: "Learn how Metro City Energy approaches energy infrastructure with responsibility, collaboration, and long-term thinking." },
    { property: "og:title", content: "About Metro City Energy" },
    { property: "og:description", content: "Our approach to responsible, resilient energy infrastructure." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: AboutPage,
});

function AboutPage() { return <>
  <PageHero eyebrow="About Metro City Energy" title="Energy with purpose." copy="We bring engineering discipline, long-term thinking, and a collaborative mindset to the infrastructure that keeps cities moving." image={heroImage} />
  <section className="px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><p className="eyebrow text-accent">Our perspective</p><div><h2 className="font-display text-5xl font-bold uppercase leading-none sm:text-7xl">Progress has to perform.</h2><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">The energy transition demands more than ambition. It requires infrastructure that works reliably, decisions grounded in real conditions, and relationships designed to last. Metro City Energy exists to bring those elements together.</p></div></div></section>
  <section className="bg-secondary px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><p className="eyebrow text-accent">How we work</p><div className="mt-10"><NumberedItem number="01" title="Understand the system">We begin with the realities of the grid, the site, and the people who depend on them.</NumberedItem><NumberedItem number="02" title="Align every partner">Clear objectives and direct communication turn complex energy work into coordinated progress.</NumberedItem><NumberedItem number="03" title="Engineer for resilience">We plan around performance, adaptability, and the long operating life of critical assets.</NumberedItem><NumberedItem number="04" title="Stay accountable">Our responsibility extends through decisions, delivery, and the long-term value of the work.</NumberedItem></div></div></section>
  <section className="px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><p className="eyebrow text-accent">What guides us</p><div className="mt-10 grid gap-px bg-border md:grid-cols-3"><div className="bg-card p-9"><h3 className="font-display text-3xl font-bold uppercase">Clarity</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">We make complex challenges understandable and decisions transparent.</p></div><div className="bg-card p-9"><h3 className="font-display text-3xl font-bold uppercase">Stewardship</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">We respect the land, systems, capital, and trust placed in every project.</p></div><div className="bg-card p-9"><h3 className="font-display text-3xl font-bold uppercase">Resolve</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">We meet demanding work with rigor, adaptability, and ownership.</p></div></div></div></section>
  <ContactBand />
</>; }