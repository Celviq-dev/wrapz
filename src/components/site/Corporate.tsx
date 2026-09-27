import corporate from "@/assets/collection-corporate.jpg";
import { Reveal } from "./Reveal";

const tiers = [
  {
    tier: "Small Teams",
    range: "10 — 50 gifts",
    body: "Curated hampers for close-knit teams and thank-you gestures to top clients.",
  },
  {
    tier: "Enterprise",
    range: "50 — 500 gifts",
    body: "Consistent unboxing, personalized notes, branded touches — kept quietly premium.",
  },
  {
    tier: "Bespoke",
    range: "500+",
    body: "Custom sourcing, brand-aligned packaging, and a dedicated concierge from brief to delivery.",
  },
];

export function Corporate() {
  return (
    <section id="corporate" className="bg-warm-white paper-grain py-28 md:py-36">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
            — Corporate Gifting
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-charcoal leading-[1.15]">
            Premium gifting,<br />
            <span className="italic text-bronze">without the corporate.</span>
          </h2>
          <p className="mt-6 text-warm-gray text-lg leading-[1.7] max-w-lg">
            For clients you actually want to keep. For teams that notice
            details. We handle sourcing, personalization, and logistics — you
            get to be the person who sent the perfect gift.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl shadow-soft">
            <img
              src={corporate}
              alt="Stacked corporate gift boxes with bronze ribbon on warm wood desk"
              loading="lazy"
              width={1000}
              height={800}
              className="w-full aspect-[5/4] object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7 space-y-6">
          {tiers.map((t, i) => (
            <Reveal key={t.tier} delay={i * 120}>
              <div className="group rounded-3xl border border-beige bg-cream p-8 md:p-10 transition-all duration-500 hover:shadow-lift hover:-translate-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-charcoal">
                    {t.tier}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-bronze whitespace-nowrap">
                    {t.range}
                  </span>
                </div>
                <p className="mt-4 text-warm-gray text-[15px] leading-relaxed max-w-xl">
                  {t.body}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex link-underline text-sm font-medium text-olive"
                >
                  Request a quote →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
