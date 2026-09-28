import { Mail, MapPin } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";

const WEB3FORMS_ACCESS_KEY = "a0f16cbe-66cc-4808-8af9-4f2e08d58ed6";
const WEB3FORMS_SCRIPT_URL = "https://web3forms.com/client/script.js";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact | Metro City Energy" },
    { name: "description", content: "Contact Metro City Energy to discuss energy infrastructure, development opportunities, and partnerships." },
    { property: "og:title", content: "Contact Metro City Energy" },
    { property: "og:description", content: "Start a conversation about your next energy infrastructure opportunity." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${WEB3FORMS_SCRIPT_URL}"]`);
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = WEB3FORMS_SCRIPT_URL;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const captchaField = form.querySelector<HTMLTextAreaElement>('textarea[name="h-captcha-response"]');

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
        body: formData,
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed.");
      }

      setStatus("success");
      setMessage("Your message has been sent successfully.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-primary px-5 py-16 text-primary-foreground sm:px-8 lg:py-24">
      <div className="mx-auto grid min-h-[68vh] max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="eyebrow text-accent">Contact</p>
          <h1 className="mt-5 font-display text-6xl font-bold uppercase leading-[0.88] sm:text-8xl">Let’s move energy forward.</h1>
          <p className="mt-8 max-w-lg text-base leading-8 text-primary-foreground/70">Tell us about your organization, project, or partnership opportunity. Our team will review your message and follow up with the right conversation.</p>
          <div className="mt-8 space-y-3 text-base text-primary-foreground/80">
            <div className="flex items-start gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" /><p>1211 Center Court Dr #208, Covina CA 91724</p></div>
            <div className="flex items-start gap-3"><Mail className="mt-1 h-4 w-4 shrink-0 text-accent" /><a className="underline underline-offset-4" href="mailto:info@metrocitybuilders.com">info@metrocitybuilders.com</a></div>
          </div>
        </div>

        <form className="bg-background p-6 text-foreground sm:p-10" onSubmit={handleSubmit}>
          <div className="grid gap-7 sm:grid-cols-2">
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Organization" name="organization" />
            <Field label="Phone" name="phone" type="tel" />
          </div>

          <label className="mt-7 block">
            <span className="eyebrow text-muted-foreground">How can we help?</span>
            <textarea name="message" rows={6} required className="mt-3 w-full resize-none border border-input bg-background p-4 outline-hidden focus:border-accent" />
          </label>

          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="mt-7 flex justify-center">
            <div className="h-captcha" data-captcha="true" data-theme="light" aria-label="Security check" />
          </div>

          {message && (
            <p className={`mt-4 text-sm ${status === "success" ? "text-green-700" : "text-red-600"}`}>
              {message}
            </p>
          )}

          <button type="submit" className="button button-dark mt-7" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) { return <label className="block"><span className="eyebrow text-muted-foreground">{label}</span><input name={name} type={type} required className="mt-3 h-12 w-full border-b border-input bg-transparent outline-hidden focus:border-accent" /></label>; }