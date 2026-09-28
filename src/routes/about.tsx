import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { Figure } from "@/components/site/Figure";
import { Reveal } from "@/components/site/Reveal";
import { Contact } from "@/components/site/Contact";
import { COLLECTIONS, itemCount, TOTAL_ITEMS, STUDIO, media } from "@/data/catalog";

const SITE = "https://snehawrapzz.lovable.app";
const TITLE = "About — Sneha's Wrapzz Gifting India, Secunderabad";
const DESC =
  "Sneha's Wrapzz Gifting India is a gifting studio in Secunderabad, Hyderabad, working across silver decor, festive diyas and candles, serveware, hampers and bulk corporate gifting.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        eyebrow={STUDIO.legalName}
        title="Gifting, catalogued."
        description={`Every piece on this site comes from the studio's own catalogs — ${TOTAL_ITEMS} items across six collections, photographed as supplied. Nothing here is stock imagery.`}
        asset={media("deities-idols-01")}
      />

      <About />

      {/* Range across the catalog, one frame per collection. */}
      <Reveal>
        <section className="bg-cream py-14 md:py-20">
          <div className="mx-auto max-w-[1380px] px-5 md:px-8">
            <h2 className="max-w-2xl font-display text-2xl leading-[1.08] tracking-[-0.03em] text-charcoal md:text-4xl">
              The range, in one view.
            </h2>
            <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
              {COLLECTIONS.map((c) => (
                <li key={c.slug}>
                  <Figure
                    asset={media(c.hero)}
                    ratio="portrait"
                    sizes="(min-width: 1024px) 15vw, (min-width: 768px) 30vw, 45vw"
                  />
                  <h3 className="mt-3 text-sm font-medium leading-snug text-charcoal">{c.name}</h3>
                  <p className="mt-0.5 text-xs text-warm-gray">{itemCount(c)} pieces</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      <FAQ />
      <Contact />
    </>
  );
}
