import { createFileRoute, Link } from "@tanstack/react-router";

import { ContactBand } from "../components/site-chrome";

const heroImage = "/assets/team-mcb.webp";
const carolImage = "/assets/carol-gao.webp";
const michelleImage = "/assets/michelle-li.png";
const ericImage = "/assets/eric-shehata.jpg";
const alejandroImage = "/assets/alejandro-ortiz.webp";

const leadership = [
  { name: "John Morrison", role: "Chief Operating Officer", image: heroImage },
  { name: "Tony Zeng", role: "Chairman & Chief Executive Officer", image: heroImage },
  { name: "Michael Campbell", role: "Chief Marketing Officer", image: heroImage },
  { name: "Carol Gao", role: "Project Director, Vice President", image: carolImage },
  { name: "Michelle Hong Li", role: "Director of Sales, Vice President", image: michelleImage },
  { name: "Eric Shehata", role: "Director of Construction", image: ericImage },
  { name: "Alejandro J. Ortiz", role: "Director of Design", image: alejandroImage },
];

export const Route = createFileRoute("/leadership")({
  head: () => ({ meta: [
    { title: "Leadership | Metro City Energy" },
    { name: "description", content: "Meet the leadership team behind Metro City Builders and its development strategy across Southern California." },
    { property: "og:title", content: "Leadership | Metro City Energy" },
    { property: "og:description", content: "Experienced leadership behind every development." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <>
      <section className="bg-background px-5 pt-8 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-accent">Leadership</p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-bold leading-[0.95] text-primary sm:text-7xl lg:text-[5rem]">
            Experienced leadership behind every development.
          </h1>
          <p className="mt-6 max-w-5xl text-base leading-7 text-muted-foreground">
            Metro City Builders is guided by a team of executives and directors spanning construction, design, project delivery, and sales.
          </p>
        </div>
      </section>

      <div className="mt-8 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden bg-[#161616]">
          <div className="relative h-auto overflow-hidden bg-ink">
            <img
              src={heroImage}
              alt="Metro City Builders leadership team"
              className="h-full w-full object-cover max-w-[900px] mx-auto"
            />
          </div>
        </div>
      </div>

      <section className="bg-background px-8 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {leadership.slice(3).map((person) => (
            <div key={person.name} className="border border-border bg-card">
              <img src={person.image} alt={person.name} className="h-52 w-full object-cover sm:h-80" />
              <div className="p-5 text-center">
                <div className="font-display text-2xl font-bold text-primary">{person.name}</div>
                {person.role && <div className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">{person.role}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background px-5 pb-20 pt-10 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl font-bold leading-none text-primary sm:text-6xl">Work with our team.</h2>
          <Link to="/contact" className="mt-8 inline-flex min-w-[12rem] items-center justify-center border border-border px-6 py-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-primary transition-colors hover:border-accent hover:text-accent">
            Get in touch
          </Link>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
