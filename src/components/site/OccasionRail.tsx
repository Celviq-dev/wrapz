import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { OCCASIONS, occasionPhoto } from "@/data/catalog";
import { CatalogImage } from "./CatalogImage";

/** Story-style shortcuts: the quickest way in for someone who knows the occasion, not the product. */
export function OccasionRail() {
  return (
    <section aria-labelledby="occasions-title" className="bg-porcelain py-14 md:py-20">
      <div className="page-x">
        <div className="flex items-end justify-between gap-6">
          <h2 id="occasions-title" className="font-display text-[28px] font-medium leading-tight text-ink md:text-4xl">
            What are you celebrating?
          </h2>
          <Link to="/occasions" className="tap-area hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-ink hover:text-gold-deep sm:inline-flex">
            All occasions <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
          </Link>
        </div>
        <ul className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-9 md:gap-5 md:overflow-visible md:px-0">
          {OCCASIONS.map((o) => {
            const photo = occasionPhoto(o);
            return (
              <li key={o.slug} className="w-[5.75rem] shrink-0 snap-start md:w-auto">
                <Link to="/occasion/$slug" params={{ slug: o.slug }} className="group block text-center">
                  <span className="block aspect-square overflow-hidden rounded-full bg-paper ring-1 ring-line ring-offset-[3px] ring-offset-porcelain transition-shadow duration-200 group-hover:ring-2 group-hover:ring-gold">
                    {photo && (
                      <CatalogImage
                        photo={photo}
                        alt=""
                        sizes="(min-width: 768px) 9vw, 92px"
                        className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    )}
                  </span>
                  <span className="mt-3 block text-[13px] font-medium leading-tight text-ink md:text-sm">{o.short}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
