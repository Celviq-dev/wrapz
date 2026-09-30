import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PILLARS, PRODUCTS, pillarPhoto, productsForPillar, type PillarKey } from "@/data/catalog";
import { cn } from "@/lib/utils";
import { CatalogImage } from "./CatalogImage";

// Six cells for six collections. Phones: 2 columns with full-width first and last cells, so no row is left half empty.
const CELL: Record<PillarKey, string> = {
  silver: "col-span-2 aspect-[4/3] md:aspect-auto lg:col-span-7 lg:row-span-2",
  hampers: "aspect-[4/5] md:aspect-auto lg:col-span-5",
  festive: "aspect-[4/5] md:aspect-auto lg:col-span-5",
  home: "aspect-[4/5] md:aspect-auto lg:col-span-4",
  pooja: "aspect-[4/5] md:aspect-auto lg:col-span-4",
  corporate: "col-span-2 aspect-[16/9] md:aspect-auto lg:col-span-4",
};

export function Collections() {
  return (
    <section id="collections" aria-labelledby="collections-title" className="bg-porcelain pb-20 md:pb-28">
      <div className="page-x">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <h2 id="collections-title" className="font-display text-[34px] font-medium leading-[1.1] text-ink md:text-5xl">
            Six collections, <em className="font-normal text-gold-deep">one studio.</em>
          </h2>
          <Link to="/lookbook" className="tap-area inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-gold-deep">
            See all {PRODUCTS.length} designs <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:auto-rows-[17rem] md:gap-4 lg:grid-cols-12 xl:auto-rows-[19rem]">
          {PILLARS.map((p) => {
            const photo = pillarPhoto(p);
            const big = p.key === "silver";
            return (
              <li key={p.key} className={cn("relative", CELL[p.key])}>
                <Link to={p.to} className="group absolute inset-0 overflow-hidden rounded-2xl bg-paper">
                  {photo && (
                    <CatalogImage
                      photo={photo}
                      alt=""
                      sizes={big ? "(min-width: 1024px) 56vw, 100vw" : "(min-width: 1024px) 34vw, 50vw"}
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  )}
                  <span className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-3 rounded-xl bg-porcelain/95 px-3.5 py-3 shadow-soft md:inset-x-4 md:bottom-4 md:right-auto md:min-w-[17rem] md:px-5 md:py-4">
                    <span className="min-w-0">
                      <span className="block font-display text-[17px] font-medium leading-tight text-ink md:text-2xl">
                        {/* Phones show the short label; assistive tech always gets the full title. */}
                        <span aria-hidden className="md:hidden">{p.short}</span>
                        <span className="sr-only md:not-sr-only">{p.title}</span>
                      </span>
                      <span className="mt-1 block text-xs text-ink-soft tabular-nums">{productsForPillar(p.key).length} designs</span>
                      {big && <span className="mt-2 hidden max-w-[26rem] text-sm leading-relaxed text-ink-soft lg:block">{p.description}</span>}
                    </span>
                    <span className="hidden size-9 shrink-0 items-center justify-center rounded-full bg-ink text-porcelain transition-transform duration-200 group-hover:translate-x-0.5 sm:inline-flex">
                      <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
