import { useState } from "react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-ivory py-28 md:py-36">
      <div className="mx-auto max-w-[1180px] px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
            — Get in Touch
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-charcoal leading-[1.15]">
            Let&apos;s wrap<br />
            <span className="italic text-bronze">your moment.</span>
          </h2>
          <p className="mt-6 text-warm-gray leading-[1.7] max-w-md">
            Tell us the story — the occasion, the person, the feeling you want
            them to have when the ribbon comes undone. We&apos;ll take it from there.
          </p>

          <div className="mt-10 space-y-5 text-charcoal">
            <div>
              <div className="text-xs uppercase tracking-widest text-bronze mb-1">
                Studio
              </div>
              <div className="text-[15px]">Bandra West, Mumbai</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-bronze mb-1">
                Write to us
              </div>
              <a
                href="mailto:hello@snehaswrapzz.com"
                className="link-underline text-[15px]"
              >
                hello@snehaswrapzz.com
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-bronze mb-1">
                Instagram
              </div>
              <a
                href="https://instagram.com"
                className="link-underline text-[15px]"
              >
                @snehaswrapzz
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-beige bg-cream p-7 md:p-10 shadow-soft"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Name" id="name" placeholder="Sneha D." />
              <Field label="Email" id="email" type="email" placeholder="you@lovely.com" />
              <Field label="Occasion" id="occasion" placeholder="Wedding, Diwali, birthday…" />
              <Field label="Timeline" id="timeline" placeholder="Approx. date" />
            </div>
            <div className="mt-5">
              <label htmlFor="msg" className="block text-sm font-medium text-charcoal mb-2">
                Tell us the story
              </label>
              <textarea
                id="msg"
                rows={5}
                placeholder="Who is it for, and what do you want them to feel?"
                className="w-full rounded-lg border border-beige bg-ivory px-4 py-3 text-[15px] text-charcoal placeholder:text-warm-gray/70 focus:outline-none focus:border-olive focus:ring-2 focus:ring-champagne/40 transition"
              />
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-warm-gray">
                We reply within one working day, gently.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-sage px-7 py-3 text-sm font-semibold text-ivory shadow-soft hover:scale-[1.03] hover:shadow-lift transition-all duration-300"
              >
                {sent ? "Sent ✓" : "Send message"}
              </button>
            </div>

            {sent && (
              <p className="mt-5 text-sm text-olive font-medium">
                Thank you — we&apos;ll be in touch soon.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-charcoal mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-beige bg-ivory px-4 py-3 text-[15px] text-charcoal placeholder:text-warm-gray/70 focus:outline-none focus:border-olive focus:ring-2 focus:ring-champagne/40 transition"
      />
    </div>
  );
}
