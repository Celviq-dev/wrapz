import { useState } from "react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "How long does customization take?",
    a: "Most personalized orders are ready within 3–5 days. Wedding and corporate volumes are planned 2–4 weeks in advance. Rush requests are welcome — just tell us the date.",
  },
  {
    q: "Do you ship across India?",
    a: "Yes. We ship pan-India with tracked courier, packed inside protective outer boxes so the wrapping arrives exactly as it left our studio.",
  },
  {
    q: "Can I include my own items in a hamper?",
    a: "Absolutely. Send us a note, a bottle, a book, a family recipe — we wrap it into the hamper as if it were always meant to be there.",
  },
  {
    q: "Do you offer corporate discounts?",
    a: "Volume pricing begins at 25 units. We&apos;ll build a proposal within 48 hours of a quick brief — nothing generic, nothing bloated.",
  },
  {
    q: "What&apos;s your returns policy?",
    a: "Personalized gifts are non-returnable, but if anything arrives less than perfect, we replace it. No forms, no fine print.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-warm-white py-28 md:py-36">
      <div className="mx-auto max-w-[860px] px-5 md:px-8">
        <Reveal>
          <div className="text-center mb-14 md:mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
              — Questions
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-charcoal leading-[1.15]">
              Everything you might<br />
              <span className="italic text-bronze">want to know.</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 60}>
                <div className="rounded-2xl border border-beige bg-cream overflow-hidden transition-shadow duration-300 hover:shadow-soft">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 text-left px-6 md:px-8 py-6"
                  >
                    <span className="font-display text-lg md:text-xl font-semibold text-charcoal">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 text-bronze text-2xl transition-transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="px-6 md:px-8 pb-7 text-warm-gray leading-[1.7]"
                        dangerouslySetInnerHTML={{ __html: f.a }}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
