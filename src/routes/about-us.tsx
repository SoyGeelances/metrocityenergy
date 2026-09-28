import { createFileRoute, Link } from "@tanstack/react-router";

import { ContactBand } from "../components/site-chrome";

const heroImage = "/assets/solar-energy-mce.webp";
const teamImage = "/assets/people.jpg";
const awardImage = "/assets/award.png";

export const Route = createFileRoute("/about-us")({
  head: () => ({ meta: [
    { title: "About Us | Metro City Energy" },
    { name: "description", content: "Learn about Metro City Builders, a Southern California real estate investment and development firm focused on long-term value and thoughtful community building." },
    { property: "og:title", content: "About Us | Metro City Energy" },
    { property: "og:description", content: "A long-term developer and investor in residential, mixed-use, and medical properties throughout Southern California." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutUsPage,
});

function AboutUsPage() {
  return (
    <>
      <section className="bg-background px-5 pt-8 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-accent">About us</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[0.98] text-primary sm:text-7xl lg:text-[5.25rem]">
            One of Southern California&apos;s
            <br />
            fastest growing developers.
          </h1>
        </div>
      </section>

      <div className="mt-8 px-5 sm:px-8">
        <img
          src={heroImage}
          alt="Metro City Builders team and development work"
          className="mx-auto h-[auto] w-full max-w-7xl object-cover"
          width={1600}
          height={380}
        />
      </div>

      <section className="bg-background px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow text-accent">Our history</p>
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              Metro City Builders is one of Southern California&apos;s fastest growing real estate investors and developers.
              Based in Los Angeles County, CA, and active in Orange, Riverside, and San Bernardino Counties, MCB specializes in
              investment and development of state-of-the-art mixed-use, senior, apartment communities, office, retail, and light industrial properties since 2003.
            </p>
            <p>
              Founded by Principal and CEO Tony Zeng, the firm has grown from a developer known for design excellence, innovation,
              and community-focused work — projects delivered with humility, creativity, and a strong sense of place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-5 py-20 text-primary-foreground sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-4xl italic leading-tight text-primary-foreground sm:text-6xl">
            “Artistic in everything we touch.”
          </p>
          <p className="mt-6 text-[0.7rem] uppercase tracking-[0.28em] text-primary-foreground/70">
            Thomas Kim, Construction Director
          </p>
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="eyebrow text-accent">Development approach</p>
            <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-none text-primary sm:text-6xl">
              A comprehensive approach, held for the long term.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              As a long-term investment company, as well as a developer, MCB takes a comprehensive approach to real estate development by acquiring the land,
              developing plans, securing entitlements, arranging financing, and managing the construction of developments, primarily for our own account and at times in conjunction with select partners or institutions.
              We serve companies or public agencies requiring build-to-suit commercial or industrial property and individual residential or commercial tenants.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              At MCB companies, we have built an industry-wide reputation for sustainable development, diverse product types, financial stability, and professionalism.
            </p>
          </div>

          <div className="space-y-4">
            <img
              src={teamImage}
              alt="Metro City Builders team portrait"
              className="h-72 w-full object-cover sm:h-80"
              width={1200}
              height={800}
            />
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 border-t border-border pt-4 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              <div>
                <span className="block text-accent">Headquarters</span>
                <span className="mt-2 block font-medium normal-case tracking-normal text-foreground">Los Angeles County, CA</span>
              </div>
              <div>
                <span className="block text-accent">Active in</span>
                <span className="mt-2 block font-medium normal-case tracking-normal text-foreground">Orange, Riverside, San Bernardino</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <img
            src={awardImage}
            alt="California Small Business of the Year 2018 award"
            className="h-[20rem] w-full object-cover sm:h-[24rem] lg:h-[28rem]"
            width={1200}
            height={800}
          />

          <div>
            <p className="eyebrow text-accent">Awards</p>
            <h3 className="mt-4 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl">
              California Small Business of the Year, 2018
            </h3>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              Metro City Builders extremely honored to receive this recognition from State of California, which is an excellent morale-booster that will encourage us to continue our best work.
              We will continue to continue to do our very best for our community.
            </p>
            <Link to="/leadership" className="mt-8 inline-flex items-center gap-2 border-b-2 border-accent pb-2 text-xs font-bold uppercase text-primary">
              Meet the leadership
            </Link>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
