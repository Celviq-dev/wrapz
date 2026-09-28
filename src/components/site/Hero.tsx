import { Link } from "@tanstack/react-router";

import { Figure } from "./Figure";
import { STUDIO, TOTAL_ITEMS, media } from "@/data/catalog";

/**
 * Editorial hero: one large photograph carries the page, with two supporting
 * frames stacked beside it. The copy stays short and factual — the catalog's own
 * range is the claim, not an adjective about it.
 */
export function Hero() {
  // A silver piece styled as a gift rather than as decor: it signals both halves
  // of the catalog at once. Deliberately not a collection hero (those appear
  // lower down this same page), and deliberately not the wedding portrait frame,
  // which shows identifiable faces and belongs in its own subcategory.
  const lead = media("serveware-trays-11");
  const support = [media("diyas-candles-13"), media("hampers-12")];

  return (
    <section className="relative overflow-hidden border-b border-beige bg-cream">
      <div className="mx-auto max-w-[1380px] px-5 pt-12 pb-14 md:px-8 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Type block */}
          <div className="lg:col-span-4 lg:pt-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-bronze">
              {STUDIO.legalName} · {STUDIO.addressShort}
            </p>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[0.98] tracking-[-0.035em] text-charcoal sm:text-6xl lg:text-[4.1rem]">
              Silver, light
              <br />
              and wrapped
              <br />
              <span className="text-bronze">gifting.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-[1.75] text-warm-gray">
              A gifting studio in Secunderabad working across silver decor and devotional pieces,
              festive diyas and candles, serveware, and wrapped hampers put together to your brief.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to="/collections" className="btn-primary min-h-[48px]">
                See the collections
              </Link>
              <a
                href={STUDIO.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex min-h-[44px] items-center text-sm font-semibold text-charcoal"
              >
                Enquire on WhatsApp
              </a>
            </div>

            <dl className="mt-11 grid grid-cols-3 gap-4 border-t border-beige pt-6">
              {[
                [String(TOTAL_ITEMS), "catalogued pieces"],
                ["6", "collections"],
                ["5000+", "repeat customers"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-xl text-charcoal md:text-2xl">{value}</dt>
                  <dd className="mt-0.5 text-xs leading-snug text-warm-gray">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Lead image */}
          <figure className="lg:col-span-5">
            <Figure
              asset={lead}
              ratio="tall"
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="hero-image-reveal"
            />
            <figcaption className="mt-3 text-xs text-warm-gray">
              Silver peacock bowl, from Serveware &amp; Trays
            </figcaption>
          </figure>

          {/* Supporting stack */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-3 lg:grid-cols-1 lg:gap-5">
            {support.map((asset, i) => (
              <Figure
                key={asset.slug}
                asset={asset}
                ratio={i === 0 ? "portrait" : "square"}
                sizes="(min-width: 1024px) 24vw, 50vw"
                priority={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
