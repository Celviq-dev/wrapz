import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Figure, FigureHover } from "./Figure";
import { Reveal } from "./Reveal";
import { COLLECTIONS, itemCount, media } from "@/data/catalog";

/**
 * Collections are presented at three weights rather than as six identical cards:
 *
 *   flagship   — the silver collection is the largest by item count, so it
 *                gets a full-width composition with its own gallery strip.
 *   major      — alternating image/text rows, side flipping each time.
 *   supporting — a quieter pair at the end.
 *
 * The weight comes from the catalog's real item counts, not from visual taste.
 */
export function CollectionsEditorial() {
  const flagship = COLLECTIONS.find((c) => c.feature === "flagship")!;
  const major = COLLECTIONS.filter((c) => c.feature === "major");
  const supporting = COLLECTIONS.filter((c) => c.feature === "supporting");

  return (
    <section id="collections" className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <header className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-bronze">
            The collections
          </p>
          <h2 className="mt-4 font-display text-3xl leading-[1.05] tracking-[-0.03em] text-charcoal md:text-[2.9rem]">
            Six collections, catalogued piece by piece.
          </h2>
        </header>
      </div>

      {/* Flagship */}
      <Reveal>
        <div className="mx-auto mt-12 max-w-[1380px] px-5 md:mt-16 md:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <Link
              to="/collections/$slug"
              params={{ slug: flagship.slug }}
              className="group block lg:col-span-7"
            >
              <FigureHover
                asset={media(flagship.hero)}
                ratio="wide"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </Link>

            <div className="lg:col-span-5 lg:py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
                {itemCount(flagship)} pieces · the largest collection
              </p>
              <h3 className="mt-4 font-display text-3xl leading-[1.05] tracking-[-0.03em] text-charcoal md:text-[2.5rem]">
                {flagship.name}
              </h3>
              <p className="mt-5 text-base leading-[1.75] text-warm-gray">{flagship.intro}</p>

              <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2 border-t border-beige pt-6 sm:grid-cols-2">
                {flagship.groups.map((g) => (
                  <li key={g.name} className="text-sm text-charcoal">
                    {g.name}
                    <span className="text-warm-gray"> · {g.items.length}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/collections/$slug"
                params={{ slug: flagship.slug }}
                className="group mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-charcoal"
              >
                <span className="link-underline">Browse the silver collection</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Gallery strip: four more frames from inside the collection. */}
          <div className="mt-5 grid grid-cols-2 gap-4 md:mt-6 md:grid-cols-4 md:gap-5">
            {["deities-idols-01", "animal-decor-06", "clocks-06", "boxes-trays-02"].map((slug) => (
              <Figure
                key={slug}
                asset={media(slug)}
                ratio="square"
                sizes="(min-width: 768px) 23vw, 45vw"
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Major collections — alternating */}
      <div className="mx-auto mt-20 max-w-[1380px] space-y-16 px-5 md:mt-28 md:space-y-24 md:px-8">
        {major.map((c, i) => {
          const flip = i % 2 === 1;
          const extra = c.groups.flatMap((g) => g.gallery).filter((s) => s !== c.hero)[0];

          return (
            <Reveal key={c.slug}>
              <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <Link
                  to="/collections/$slug"
                  params={{ slug: c.slug }}
                  className={`group block lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
                >
                  <FigureHover
                    asset={media(c.hero)}
                    ratio="landscape"
                    sizes="(min-width: 1024px) 58vw, 100vw"
                  />
                </Link>

                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
                    {itemCount(c)} pieces
                  </p>
                  <h3 className="mt-3 font-display text-2xl leading-[1.08] tracking-[-0.03em] text-charcoal md:text-4xl">
                    {c.name}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-[1.75] text-warm-gray">{c.intro}</p>

                  <div className="mt-6 flex items-start gap-5">
                    {extra ? (
                      <Figure
                        asset={media(extra)}
                        ratio="square"
                        sizes="140px"
                        className="w-28 shrink-0 md:w-36"
                      />
                    ) : null}
                    <ul className="space-y-1.5 pt-1">
                      {c.groups.map((g) => (
                        <li key={g.name} className="text-sm text-charcoal">
                          {g.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/collections/$slug"
                    params={{ slug: c.slug }}
                    className="group mt-7 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-charcoal"
                  >
                    <span className="link-underline">View {c.name.toLowerCase()}</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Supporting collections */}
      <Reveal>
        <div className="mx-auto mt-20 max-w-[1380px] px-5 md:mt-28 md:px-8">
          <div className="grid grid-cols-1 gap-8 border-t border-beige pt-12 sm:grid-cols-2 md:gap-10">
            {supporting.map((c) => (
              <Link
                key={c.slug}
                to="/collections/$slug"
                params={{ slug: c.slug }}
                className="group block"
              >
                <FigureHover
                  asset={media(c.hero)}
                  ratio="landscape"
                  sizes="(min-width: 640px) 45vw, 100vw"
                />
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl text-charcoal md:text-2xl">{c.name}</h3>
                  <span className="shrink-0 text-xs text-warm-gray">{itemCount(c)} pieces</span>
                </div>
                <p className="mt-2 text-sm leading-[1.7] text-warm-gray">{c.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
