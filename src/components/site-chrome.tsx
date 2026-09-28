import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const logo = "/logo-metro-city-energy.webp";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Why Metro City Energy", to: "/why-metro-city-energy" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto grid h-24 max-w-[92rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Metro City Energy home">
          <img src={logo} alt="Metro City Energy" className="h-[4.5rem] w-auto shrink-0 object-contain" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${pathname === item.to ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="icon-button lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-2xl font-bold uppercase"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:py-20">
        <div>
          <img src={logo} alt="Metro City Energy" className="h-28 w-auto object-contain" loading="lazy" />
          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
            Energy infrastructure shaped for stronger cities, reliable systems, and enduring value.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="eyebrow">Company</p>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link to="/about-us">About Us</Link>
              <Link to="/leadership">Leadership</Link>
              <Link to="/what-we-do">What We Do</Link>
            </div>
          </div>
          <div>
            <p className="eyebrow">Connect</p>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link to="/contact">Contact</Link>
              <a href="mailto:info@metrocitybuilders.com">Email us</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>© 2026 Metro City Energy. All rights reserved.</span>
          <span>Developed by <span style={{ color: "#1c2967" }}>Geelances</span></span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy: string; image: string }) {
  return (
    <section className="grid min-h-[68vh] bg-background lg:grid-cols-[45%_55%]">
      <div className="flex items-center px-5 py-20 sm:px-12 lg:px-[10vw]">
        <div className="max-w-xl">
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h1 className="mt-5 font-display text-6xl font-bold leading-[0.9] text-primary sm:text-8xl">{title}</h1>
          <div className="mt-7 h-1 w-24 bg-accent" />
          <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">{copy}</p>
        </div>
      </div>
      <img src={image} alt="" className="h-full min-h-[26rem] w-full object-cover" width={1920} height={1080} />
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
        <div>
          <p className="eyebrow text-accent">Start a conversation</p>
          <h2 className="mt-5 max-w-3xl font-display text-5xl font-bold uppercase leading-none sm:text-7xl">Let’s build what powers tomorrow.</h2>
        </div>
        <Link to="/contact" className="button button-gold shrink-0">
          Contact us <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export function NumberedItem({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <article className="border-t border-border py-8">
      <div className="grid gap-5 sm:grid-cols-[5rem_1fr]">
        <span className="font-display text-2xl font-bold text-accent">{number}</span>
        <div>
          <h3 className="font-display text-3xl font-bold uppercase">{title}</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{children}</p>
        </div>
      </div>
    </article>
  );
}