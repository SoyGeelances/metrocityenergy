import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact | Metro City Energy" },
    { name: "description", content: "Contact Metro City Energy to discuss energy infrastructure, development opportunities, and partnerships." },
    { property: "og:title", content: "Contact Metro City Energy" },
    { property: "og:description", content: "Start a conversation about your next energy infrastructure opportunity." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ContactPage,
});

function ContactPage() { return <section className="bg-primary px-5 py-16 text-primary-foreground sm:px-8 lg:py-24"><div className="mx-auto grid min-h-[68vh] max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"><div><p className="eyebrow text-accent">Contact</p><h1 className="mt-5 font-display text-6xl font-bold uppercase leading-[0.88] sm:text-8xl">Let’s move energy forward.</h1><p className="mt-8 max-w-lg text-base leading-8 text-primary-foreground/70">Tell us about your organization, project, or partnership opportunity. Our team will review your message and follow up with the right conversation.</p><a className="mt-10 inline-block border-b border-accent pb-2 text-sm text-accent" href="mailto:contact@metrocityenergy.com">contact@metrocityenergy.com</a></div><form className="bg-background p-6 text-foreground sm:p-10" onSubmit={(event) => event.preventDefault()}><div className="grid gap-7 sm:grid-cols-2"><Field label="Name" name="name" /><Field label="Email" name="email" type="email" /><Field label="Organization" name="organization" /><Field label="Phone" name="phone" type="tel" /></div><label className="mt-7 block"><span className="eyebrow text-muted-foreground">How can we help?</span><textarea name="message" rows={6} required className="mt-3 w-full resize-none border border-input bg-background p-4 outline-hidden focus:border-accent" /></label><button type="submit" className="button button-dark mt-7">Send inquiry</button><p className="mt-4 text-xs leading-5 text-muted-foreground">This form is currently a visual prototype and does not send submissions yet.</p></form></div></section>; }

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) { return <label className="block"><span className="eyebrow text-muted-foreground">{label}</span><input name={name} type={type} required className="mt-3 h-12 w-full border-b border-input bg-transparent outline-hidden focus:border-accent" /></label>; }