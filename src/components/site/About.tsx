import { Figure } from "./Figure";
import { Reveal } from "./Reveal";
import { STUDIO, TOTAL_ITEMS, media } from "@/data/catalog";

/**
 * Only three claims appear here, each traceable to the client's own catalogs:
 * the location and trading name (closing page of both PDFs), the repeat-customer
 * figure and the review count (both catalog covers). Nothing about heritage,
 * years in business or team size, because the source material does not say.
 */
export function About() {
  return (
    <section id="about" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="order-2 lg:order-1 lg:col-span-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-bronze">
            The studio
          </p>
          <h2 className="mt-4 font-display text-3xl leading-[1.04] tracking-[-0.035em] text-charcoal md:text-5xl">
            A gifting studio in Secunderabad.
          </h2>
          <div className="mt-7 max-w-xl space-y-5 text-base leading-[1.8] text-warm-gray">
            <p>
              {STUDIO.legalName} works across two halves of one catalog. On one side, silver and
              silver-plated decor — deity idols, relief wall panels, peacocks and elephants, clocks
              and inlaid boxes. On the other, the festive and table side: diyas and candles, painted
              trays and serving stands, jars, and wrapped hampers.
            </p>
            <p>
              Orders are assembled to the brief you bring: the occasion, the quantity and the date.
              That covers a single piece for a home as readily as a repeat run of identical favour
              boxes for a wedding or a company.
            </p>
          </div>

          <dl className="mt-9 grid grid-cols-2 gap-6 border-t border-beige pt-6 sm:grid-cols-3">
            <div>
              <dt className="font-display text-2xl text-charcoal">5000+</dt>
              <dd className="mt-1 text-xs leading-snug text-warm-gray">
                satisfied and repeat customers
              </dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-charcoal">300+</dt>
              <dd className="mt-1 text-xs leading-snug text-warm-gray">
                <a
                  href={STUDIO.reviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex min-h-[44px] items-center font-medium text-charcoal"
                >
                  reviews on Google
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-charcoal">{TOTAL_ITEMS}</dt>
              <dd className="mt-1 text-xs leading-snug text-warm-gray">catalogued pieces</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="order-1 lg:order-2 lg:col-span-6" delay={80}>
          {/* Neither of these is a collection hero, so this pair never repeats a
              frame shown elsewhere on the home or about page. */}
          <div className="grid grid-cols-2 gap-4">
            <Figure
              asset={media("ritual-objects-02")}
              ratio="portrait"
              sizes="(min-width: 1024px) 24vw, 45vw"
              className="mt-8"
            />
            <Figure
              asset={media("serveware-trays-03")}
              ratio="portrait"
              sizes="(min-width: 1024px) 24vw, 45vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
