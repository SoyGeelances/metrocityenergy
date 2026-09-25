import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImage from "../assets/metro-energy-hero.jpg";
import gridImage from "../assets/grid-modernization.jpg";
import solarImage from "../assets/renewable-integration.jpg";
import storageImage from "../assets/energy-storage.jpg";
import { ContactBand } from "../components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Metro City Energy | Powering the Urban Core" },
    { name: "description", content: "Metro City Energy develops resilient power infrastructure and renewable energy systems for modern cities." },
    { property: "og:title", content: "Metro City Energy | Powering the Urban Core" },
    { property: "og:description", content: "Resilient power infrastructure and renewable energy systems for modern cities." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const services = [
  { number: "01", title: "Grid Modernization", copy: "Strengthening critical electrical networks with thoughtful planning, precise execution, and systems designed for evolving demand.", image: gridImage },
  { number: "02", title: "Renewable Integration", copy: "Connecting solar generation to metropolitan and commercial environments with infrastructure built around reliability.", image: solarImage },
  { number: "03", title: "Energy Storage", copy: "Advancing resilient energy systems with utility-scale storage that helps balance supply and demand.", image: storageImage },
];

function HomePage() {
  return <>
    <section className="grid min-h-[calc(100vh-6rem)] overflow-hidden bg-background lg:grid-cols-[45%_55%]">
      <div className="relative flex items-center px-5 py-20 sm:px-12 lg:px-[6vw]">
        <div className="max-w-xl">
          <p className="eyebrow text-accent">Infrastructure for a changing world</p>
          <h1 className="mt-5 font-display text-6xl font-bold leading-[0.88] text-primary sm:text-8xl lg:text-[6.5rem]">Leading the energy future.</h1>
          <div className="mt-7 h-1 w-24 bg-accent" />
          <p className="mt-7 max-w-lg text-base font-medium leading-8 text-primary/80">Metro City Energy advances dependable energy infrastructure and renewable integration for the places where people live, work, and build the future.</p>
          <div className="mt-9">
            <Link to="/what-we-do" className="button button-gold">Explore our work <ArrowRight size={18} /></Link>
          </div>
        </div>
      </div>
      <img src={heroImage} alt="Solar infrastructure and a metropolitan grid at sunset" className="h-full min-h-[32rem] w-full object-cover" width={1920} height={1088} />
    </section>

    <section className="bg-background px-5 py-24 sm:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div><p className="eyebrow text-accent">About Metro City Energy</p></div>
          <div className="max-w-3xl">
            <h2 className="font-display text-5xl font-bold leading-none text-primary sm:text-7xl">Delivering reliable energy solutions.</h2>
            <p className="mt-8 text-lg leading-8 text-muted-foreground">We bring together energy expertise, disciplined development, and long-term stewardship to create infrastructure that performs for communities and partners.</p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 border-b-2 border-accent pb-2 text-xs font-bold uppercase text-primary">Discover our approach <ArrowRight size={16} /></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div className="max-w-3xl"><p className="eyebrow text-accent">What we do</p><h2 className="mt-4 font-display text-5xl font-bold leading-none sm:text-7xl">Powering progress across the energy system.</h2></div><Link to="/what-we-do" className="inline-flex items-center gap-2 border-b-2 border-accent pb-2 text-xs font-bold uppercase text-accent">View capabilities <ArrowRight size={16} /></Link></div>
        <div className="mt-14 grid gap-px bg-primary-foreground/20 md:grid-cols-3">
          {services.map((service) => <article key={service.number} className="bg-primary p-7 lg:p-9"><img src={service.image} alt={service.title} loading="lazy" width={960} height={688} className="aspect-[3/2] w-full object-cover" /><span className="mt-7 block font-display text-2xl font-bold text-accent">{service.number}</span><h3 className="mt-3 font-display text-3xl font-bold">{service.title}</h3><p className="mt-4 text-sm leading-7 text-primary-foreground/65">{service.copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="px-5 py-20 sm:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><p className="eyebrow text-accent">The responsibility of scale</p><div><h2 className="font-display text-5xl font-bold leading-none text-primary sm:text-7xl">Built beyond the moment.</h2><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">Energy infrastructure is a long-term commitment. We approach every opportunity with disciplined stewardship, collaborative thinking, and respect for the communities and environments our work touches.</p></div></div></section>
    <ContactBand />
  </>;
}