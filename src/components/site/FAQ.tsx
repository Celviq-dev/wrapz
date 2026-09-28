import { useState } from "react";

import { Reveal } from "./Reveal";
import { FAQS } from "@/data/faqs";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[860px] px-5 md:px-8">
        <Reveal>
          <h2 className="mb-10 font-display text-3xl leading-[1.04] tracking-[-0.035em] text-charcoal md:mb-14 md:text-5xl">
            A few things worth knowing.
          </h2>
        </Reveal>

        <div className="divide-y divide-beige border-y border-beige">
          {FAQS.map((faq, index) => {
            const isOpen = open === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex min-h-[56px] w-full items-center justify-between gap-6 py-5 text-left md:py-6"
                  >
                    <span className="font-display text-lg text-charcoal md:text-xl">{faq.q}</span>
                    <span
                      className={`shrink-0 text-2xl text-bronze transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  hidden={!isOpen}
                  className="grid transition-[grid-template-rows] duration-200 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-6 leading-[1.8] text-warm-gray">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
