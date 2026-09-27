import wedding from "@/assets/collection-wedding.jpg";
import corporate from "@/assets/collection-corporate.jpg";
import festival from "@/assets/collection-festival.jpg";
import personal from "@/assets/collection-personal.jpg";
import { Reveal } from "./Reveal";

export function Collections() {
  return (
    <section id="collections" className="relative bg-ivory py-28 md:py-36">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
            <div className="max-w-xl">
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
                — Collections
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-charcoal leading-[1.15]">
                For every kind of<br />
                <span className="italic text-bronze">quiet celebration.</span>
              </h2>
            </div>
            <p className="text-warm-gray max-w-sm md:text-right">
              Curated by moment, not by category. Choose a mood — we&apos;ll
              make the rest feel handmade.
            </p>
          </div>
        </Reveal>

        {/* asymmetric editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Wedding - large left */}
          <Reveal className="md:col-span-7">
            <a href="#weddings" className="group block">
              <div className="relative overflow-hidden rounded-3xl bg-warm-white shadow-soft">
                <div className="aspect-[5/6] md:aspect-[6/7] overflow-hidden">
                  <img
                    src={wedding}
                    alt="White roses in wicker gift hamper with champagne ribbon"
                    loading="lazy"
                    width={1000}
                    height={1200}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-ivory/80">
                    01 — Weddings
                  </span>
                  <h3 className="mt-2 font-display text-3xl md:text-4xl font-semibold text-ivory">
                    Vows, wrapped in silk
                  </h3>
                  <p className="mt-3 text-ivory/85 max-w-md text-[15px]">
                    Bridal hampers, welcome boxes, and heirloom favors for the
                    ones you love the most.
                  </p>
                </div>
              </div>
            </a>
          </Reveal>

          {/* Right column - stacked */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6 md:gap-8">
            <Reveal delay={120}>
              <a href="#corporate" className="group block">
                <div className="relative overflow-hidden rounded-3xl bg-warm-white shadow-soft">
                  <div className="aspect-[5/4] overflow-hidden">
                    <img
                      src={corporate}
                      alt="Stacked corporate gift boxes with bronze ribbon"
                      loading="lazy"
                      width={1000}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-bronze">
                      02 — Corporate
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-charcoal">
                      Gifts that feel personal, at scale.
                    </h3>
                    <span className="mt-4 inline-flex link-underline text-sm font-medium text-olive">
                      Explore →
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>

            <Reveal delay={220}>
              <a href="#collections" className="group block">
                <div className="relative overflow-hidden rounded-3xl bg-warm-white shadow-soft">
                  <div className="aspect-[5/4] overflow-hidden">
                    <img
                      src={personal}
                      alt="Handwritten birthday card on a personalized gift"
                      loading="lazy"
                      width={900}
                      height={900}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-bronze">
                      03 — Personal
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-charcoal">
                      Birthdays, anniversaries, just-because.
                    </h3>
                    <span className="mt-4 inline-flex link-underline text-sm font-medium text-olive">
                      Explore →
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Festival wide banner */}
          <Reveal className="md:col-span-12" delay={100}>
            <a href="#collections" className="group block">
              <div className="relative overflow-hidden rounded-3xl bg-warm-white shadow-soft">
                <div className="grid md:grid-cols-[1.2fr_1fr]">
                  <div className="aspect-[4/3] md:aspect-auto md:min-h-[380px] overflow-hidden">
                    <img
                      src={festival}
                      alt="Festival hamper with dried flowers, marigolds and rose gold ribbon"
                      loading="lazy"
                      width={900}
                      height={1100}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-bronze">
                      04 — Festivals
                    </span>
                    <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-charcoal leading-[1.15]">
                      Diwali, Rakhi, Eid,<br />
                      <span className="italic text-bronze">and everything sacred.</span>
                    </h3>
                    <p className="mt-5 text-warm-gray max-w-md">
                      Seasonal edits with marigolds, brass, and hand-tied
                      ribbons. Booked in small batches so nothing feels
                      mass-made.
                    </p>
                    <span className="mt-8 inline-flex link-underline text-sm font-medium text-olive w-fit">
                      See the Festival Edit →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
