import { createFileRoute, notFound, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Figure } from "@/components/site/Figure";
import { Reveal } from "@/components/site/Reveal";
import { Contact } from "@/components/site/Contact";
import { COLLECTIONS, getCollection, itemCount, media, STUDIO } from "@/data/catalog";
import type { Ratio } from "@/components/site/Figure";

const SITE = "https://snehawrapzz.lovable.app";

/**
 * Ratios cycle so a group of photographs reads as a composition rather than a
 * uniform grid. The sequence is deterministic, so layout never shifts between
 * server and client render.
 */
const CYCLE: Ratio[] = ["portrait", "square", "landscape", "portrait", "tall", "square"];

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const collection = getCollection(params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.collection;
    if (!c) return {};
    const title = `${c.name} — Sneha's Wrapzz`;
    const hero = media(c.hero);
    return {
      meta: [
        { title },
        { name: "description", content: c.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: c.intro },
        { property: "og:url", content: `${SITE}/collections/${c.slug}` },
        { property: "og:image", content: `${SITE}${hero.src}` },
      ],
      links: [{ rel: "canonical", href: `${SITE}/collections/${c.slug}` }],
    };
  },
  component: CollectionPage,
});

function CollectionPage() {
  const { collection } = Route.useLoaderData();
  const others = COLLECTIONS.filter((c) => c.slug !== collection.slug);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Collections", to: "/collections" },
          { label: collection.name },
        ]}
        eyebrow={`${itemCount(collection)} catalogued pieces`}
        title={collection.name}
        description={collection.intro}
        asset={media(collection.hero)}
        meta={
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-beige pt-5">
            {collection.groups.map((g) => (
              <li key={g.name} className="text-sm text-charcoal">
                {g.name}
                <span className="text-warm-gray"> · {g.items.length}</span>
              </li>
            ))}
          </ul>
        }
      />

      {collection.groups.map((group, gi) => (
        <section
          key={group.name}
          className={gi % 2 === 0 ? "bg-ivory py-14 md:py-20" : "bg-cream py-14 md:py-20"}
        >
          <div className="mx-auto max-w-[1380px] px-5 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Group heading and the real item names from the master catalog. */}
              <div className="lg:col-span-3">
                <Reveal>
                  <h2 className="font-display text-2xl leading-[1.1] tracking-[-0.03em] text-charcoal md:text-3xl">
                    {group.name}
                  </h2>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
                    {group.items.length} pieces catalogued
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-beige pt-5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm leading-[1.6] text-warm-gray">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              {/* Photographs belonging to this group only, minus the hero frame
                  already shown at the top of the page. */}
              <div className="lg:col-span-9">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
                  {group.gallery
                    .filter((slug) => slug !== collection.hero)
                    .map((slug, i) => (
                      <Reveal key={slug} delay={(i % 3) * 60}>
                        <Figure
                          asset={media(slug)}
                          ratio={CYCLE[i % CYCLE.length]}
                          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 30vw, 45vw"
                        />
                      </Reveal>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Enquiry band */}
      <section className="bg-bottle-dark py-14 text-ivory md:py-16">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <h2 className="font-display text-2xl leading-[1.1] text-ivory md:text-3xl">
              Ask about a piece in {collection.name.toLowerCase()}.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-[1.75] text-ivory/75">
              Pieces are quoted per enquiry. Name the piece and the quantity and we will come back
              to you.
            </p>
          </div>
          <a
            href={`${STUDIO.whatsappHref}?text=${encodeURIComponent(
              `Hello, I'd like to enquire about the ${collection.name} collection.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="min-h-[48px] shrink-0 btn-brass"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* Other collections */}
      <section className="bg-ivory py-14 md:py-20">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <h2 className="font-display text-xl text-charcoal md:text-2xl">Other collections</h2>
          <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-5">
            {others.map((c) => (
              <li key={c.slug}>
                <Link to="/collections/$slug" params={{ slug: c.slug }} className="group block">
                  <Figure
                    asset={media(c.hero)}
                    ratio="square"
                    sizes="(min-width: 768px) 18vw, 45vw"
                    imgClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <h3 className="mt-3 text-sm font-medium text-charcoal">{c.name}</h3>
                  <p className="mt-0.5 text-xs text-warm-gray">{itemCount(c)} pieces</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact compact />
    </>
  );
}
