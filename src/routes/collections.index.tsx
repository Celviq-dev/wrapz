import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { FigureHover } from "@/components/site/Figure";
import { Reveal } from "@/components/site/Reveal";
import { Contact } from "@/components/site/Contact";
import { COLLECTIONS, CORPORATE, itemCount, TOTAL_ITEMS, media } from "@/data/catalog";

const SITE = "https://snehawrapzz.lovable.app";
const TITLE = "Collections — Sneha's Wrapzz";
const DESC = `Six collections across ${TOTAL_ITEMS} catalogued pieces: silver decor and devotional pieces, hampers and gift sets, diyas and candles, serveware and trays, home and table decor, and pooja essentials.`;

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/collections` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/collections` }],
  }),
  component: CollectionsIndex,
});

/** All seven tracks at equal weight — the homepage handles hierarchy; this is the index. */
function CollectionsIndex() {
  const all = [...COLLECTIONS, CORPORATE];

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Collections" }]}
        eyebrow={`${TOTAL_ITEMS} catalogued pieces`}
        title="The collections"
        description={DESC}
      />

      <section className="bg-ivory py-14 md:py-20">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <ul className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((c, i) => {
              const isCorporate = c.slug === CORPORATE.slug;
              return (
                <Reveal key={c.slug} delay={(i % 3) * 70}>
                  <li>
                    <Link
                      to={isCorporate ? "/corporate" : "/collections/$slug"}
                      params={isCorporate ? undefined : ({ slug: c.slug } as never)}
                      className="group block"
                    >
                      <FigureHover
                        asset={media(c.hero)}
                        ratio="portrait"
                        sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw"
                      />
                      <div className="mt-4 flex items-baseline justify-between gap-4">
                        <h2 className="font-display text-xl text-charcoal md:text-2xl">{c.name}</h2>
                        <span className="shrink-0 text-xs text-warm-gray">
                          {itemCount(c)} pieces
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-[1.7] text-warm-gray">{c.tagline}</p>
                      <p className="mt-3 text-xs text-bronze">
                        {c.groups.map((g) => g.name).join(" · ")}
                      </p>
                    </Link>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <Contact compact />
    </>
  );
}
