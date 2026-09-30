import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { pick } from "@/data/catalog";
import { CatalogImage } from "./CatalogImage";

const [hero, ...minis] = pick(["diya-tealight-candles", "shubh-diwali-gift-box", "ganesh-lakshmi-pooja-thali", "hanging-petal-diyas"]);

/** Seasonal band: full-bleed studio photo with the season's call to action. */
export function FestiveBand() {
  return (
    <section aria-labelledby="festive-title" className="on-dark relative overflow-hidden bg-plum-900 text-porcelain">
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <CatalogImage photo={hero.photos[0]} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] size-full object-cover lg:aspect-auto" />
      </div>
      <div className="page-x relative">
        <div className="py-16 md:py-20 lg:w-1/2 lg:py-28 lg:pr-16">
          <p className="eyebrow !text-gold-light">Diwali 2026</p>
          <h2 id="festive-title" className="mt-4 font-display text-[34px] font-medium leading-[1.1] md:text-5xl">
            Festive and corporate orders are open.
          </h2>
          <p className="mt-5 max-w-[34rem] text-base leading-relaxed text-porcelain/75 md:text-lg">
            Diyas, pooja thalis, dry-fruit trays and branded hampers from our catalog. Bulk orders are planned two to four weeks ahead, so an early brief gets the widest choice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/occasion/$slug" params={{ slug: "diwali" }} className="btn-gold">
              Shop Diwali gifts <ArrowRight aria-hidden className="size-4" strokeWidth={2} />
            </Link>
            <Link to="/corporate" className="btn-glass">
              Plan a corporate order
            </Link>
          </div>
          <ul className="mt-12 grid grid-cols-3 gap-3 border-t border-porcelain/15 pt-8">
            {minis.map((p) => (
              <li key={p.slug}>
                <Link to="/product/$slug" params={{ slug: p.slug }} className="group block">
                  <span className="block aspect-square overflow-hidden rounded-xl bg-porcelain/5">
                    <CatalogImage photo={p.photos[0]} alt="" sizes="(min-width: 1024px) 12vw, 30vw" className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
                  </span>
                  <span className="mt-2 line-clamp-2 block text-[13px] leading-snug text-porcelain/80 group-hover:text-porcelain">{p.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
