import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Figure } from "@/components/site/Figure";
import { Reveal } from "@/components/site/Reveal";
import { Contact } from "@/components/site/Contact";
import { CORPORATE, STUDIO, media } from "@/data/catalog";

const SITE = "https://snehawrapzz.lovable.app";
const TITLE = "Corporate & Bulk Gifting — Sneha's Wrapzz, Hyderabad";
const DESC =
  "Repeat-run gifting from Sneha's Wrapzz: eco hamper boxes with compartmented dry fruit trays, jute favour boxes and totes, ribbon-tied festive boxes and wrapped potli pouches for wedding return gifts.";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/corporate` },
      { property: "og:image", content: `${SITE}/media/corporate/corporate-01.webp` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/corporate` }],
  }),
  component: CorporatePage,
});

/**
 * What the source material supports for bulk is *order-scale evidence* — grids of
 * identical boxes and totes — rather than a service menu. The page leads with that
 * photography instead of inventing packaging options or onboarding-kit products.
 */
function CorporatePage() {
  return (
    <>
      <PageHero
        tone="warm"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Corporate & Bulk" }]}
        eyebrow="For companies, weddings and events"
        title="Corporate & bulk gifting"
        description={DESC}
        asset={media("corporate-01")}
        actions={
          <>
            <a
              href={`${STUDIO.whatsappHref}?text=${encodeURIComponent(
                "Hello, I'd like a quote for a bulk gifting order.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="min-h-[48px] btn-primary"
            >
              Request a bulk quote
            </a>
            <a
              href={STUDIO.phoneHref}
              className="link-underline inline-flex min-h-[44px] items-center text-sm font-semibold text-charcoal"
            >
              {STUDIO.phone}
            </a>
          </>
        }
      />

      {CORPORATE.groups.map((group, gi) => (
        <section
          key={group.name}
          className={gi % 2 === 0 ? "bg-ivory py-14 md:py-20" : "bg-cream py-14 md:py-20"}
        >
          <div className="mx-auto max-w-[1380px] px-5 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <Reveal>
                  <h2 className="font-display text-2xl leading-[1.1] tracking-[-0.03em] text-charcoal md:text-3xl">
                    {group.name}
                  </h2>
                  <ul className="mt-6 space-y-2 border-t border-beige pt-5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm leading-[1.6] text-warm-gray">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 gap-4 md:gap-5">
                  {group.gallery
                    .filter((slug) => slug !== CORPORATE.hero)
                    .map((slug, i) => (
                      <Reveal key={slug} delay={(i % 2) * 70}>
                        <Figure
                          asset={media(slug)}
                          ratio={i % 3 === 0 ? "landscape" : "square"}
                          sizes="(min-width: 1024px) 38vw, 45vw"
                        />
                      </Reveal>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-bottle-dark py-14 text-ivory md:py-16">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <h2 className="font-display text-2xl leading-[1.1] text-ivory md:text-3xl">
            What to include in a bulk enquiry
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              ["Quantity", "How many identical sets you need, and whether the count is firm."],
              ["Date", "When they need to be ready, and whether delivery is one drop or several."],
              [
                "The brief",
                "The occasion, roughly what should go inside, and any presentation you have in mind.",
              ],
            ].map(([t, d], i) => (
              <li key={t}>
                <div className="font-display text-3xl text-aged-brass">0{i + 1}</div>
                <h3 className="mt-3 font-display text-lg text-ivory">{t}</h3>
                <p className="mt-2 text-sm leading-[1.75] text-ivory/70">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Contact />
    </>
  );
}
