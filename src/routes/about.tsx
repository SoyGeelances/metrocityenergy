import { createFileRoute, Link } from "@tanstack/react-router";

import { ContactBand, PageHero } from "../components/site-chrome";

const heroImage = "/assets/renewable-integration.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Metro City Builders | Metro City Energy" },
    { name: "description", content: "Metro City Builders brings more than two decades of experience in residential, commercial, and medical development throughout Southern California." },
    { property: "og:title", content: "About Metro City Builders" },
    { property: "og:description", content: "A Los Angeles-based real estate investment and development firm with more than 20 years of experience." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Metro City Builders"
        title="Building Southern California with intention."
        copy="For more than twenty years, Metro City Builders has developed high-quality residential and commercial projects shaped by design excellence, disciplined execution, and a long-term perspective."
        image={heroImage}
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">
            <p className="eyebrow text-accent">Our story</p>
            <div>
              <h2 className="font-display text-5xl font-bold uppercase leading-none sm:text-7xl">Over twenty years of thoughtful development.</h2>
              <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
                <p>
                  Metro City Builders is a Los Angeles–based real estate development firm founded in 2003 by Principal and CEO Tony Zeng.
                  Since then, the firm has established a reputation for delivering high-quality residential and commercial projects across Southern California.
                </p>
                <p>
                  The company specializes in the investment and development of state-of-the-art medical facilities, micro-hospitals, and multifamily communities,
                  with a focus on design excellence, innovation, and strong community impact.
                </p>
                <p>
                  With a presence throughout the region, Metro City Builders remains committed to creating spaces that elevate the built environment
                  while responding to the needs of a dynamic, growing population.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <StatCard value="25+" label="Years of development" />
            <StatCard value="$300+" label="Million invested to date" />
            <StatCard value="2018" label="CA Small Business of the Year" />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-accent">Expertise</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl font-bold uppercase leading-none sm:text-7xl">Four disciplines, one standard of execution.</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <CapabilityCard number="01" title="Medical & Micro-Hospitals" copy="State-of-the-art clinical and surgical facilities designed around physicians and patients." />
            <CapabilityCard number="02" title="Mixed-Use" copy="Residential density paired with ground-floor retail in walkable, transit-adjacent neighborhoods." />
            <CapabilityCard number="03" title="Multifamily & Residential" copy="Townhomes, condominiums, and detached homes designed for families at every stage of life." />
            <CapabilityCard number="04" title="Senior, Office & Retail" copy="Properties positioned for lasting value across a broad range of uses and communities." />
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow text-accent">Development approach</p>
              <h2 className="mt-4 max-w-2xl font-display text-5xl font-bold uppercase leading-none sm:text-7xl">A comprehensive approach from land acquisition through construction management.</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-primary-foreground/75">
              <p>We source and acquire land across Los Angeles, Orange, Riverside, and San Bernardino Counties, primarily as principal investors.</p>
              <p>Plans are developed and entitlements secured in close coordination with municipalities and the communities we build in.</p>
              <p>As both long-term investors and developers, we arrange financing through select capital partners and institutions.</p>
              <p>We manage construction end-to-end, delivering build-to-suit projects for public agencies, companies, and residential and commercial tenants.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-accent">Why Metro City</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl font-bold uppercase leading-none sm:text-7xl">Strengths built over two decades.</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard title="Sustainable development" copy="An industry-wide reputation for responsible, community-minded building." />
            <FeatureCard title="Diverse product types" copy="Spanning medical, mixed-use, senior, apartment, office, retail, and light industrial properties." />
            <FeatureCard title="Financial stability" copy="A long-term investment company that holds and stewards what it develops." />
            <FeatureCard title="Professionalism" copy="Experienced leadership delivering with clarity, creativity, and a strong sense of place." />
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow text-accent">Partner with us</p>
          <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-none sm:text-7xl">Let’s discuss your next development.</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            We work with landowners, physicians, institutions, and public agencies on build-to-suit and joint-venture opportunities across Southern California.
          </p>
          <Link to="/contact" className="button button-gold mt-10">Contact the team</Link>
        </div>
      </section>

      <ContactBand />
    </>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-none border border-border bg-card p-8 text-center sm:p-10">
      <div className="font-display text-5xl font-bold uppercase text-primary">{value}</div>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}

function CapabilityCard({ number, title, copy }: { number: string; title: string; copy: string }) {
  return (
    <article className="border border-border bg-card p-7">
      <span className="font-display text-3xl font-bold text-accent">{number}</span>
      <h3 className="mt-5 font-display text-3xl font-bold uppercase leading-tight">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p>
    </article>
  );
}

function FeatureCard({ title, copy }: { title: string; copy: string }) {
  return (
    <article className="border border-border bg-card p-7">
      <h3 className="font-display text-2xl font-bold uppercase leading-tight">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p>
    </article>
  );
}
