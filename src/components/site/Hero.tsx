import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/catalog";
import { pick } from "@/data/catalog";
import { CatalogImage } from "./CatalogImage";

const [feature, hamper, diyas] = pick([
  "backlit-radha-krishna-relief-frame",
  "potli-and-brownie-basket-hamper",
  "lotus-wax-diyas",
]);

// CSS-only entrance so the headline paints without waiting for JavaScript.
const rise = (delay: number) => ({ animationDelay: `${delay}ms` });

function Shot({ product, sizes, priority, compact, className }: { product: Product; sizes: string; priority?: boolean; compact?: boolean; className?: string }) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      aria-label={product.name}
      className={`group relative block overflow-hidden rounded-2xl bg-porcelain/5 ${className ?? ""}`}
    >
      <CatalogImage
        photo={product.photos[0]}
        priority={priority}
        sizes={sizes}
        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <span
        aria-hidden
        className={`absolute inset-x-3 bottom-3 items-center justify-between gap-3 rounded-full bg-plum-950/80 py-2 pl-4 pr-2 text-[13px] text-porcelain ${compact ? "hidden md:flex" : "flex"}`}
      >
        <span className="truncate">{product.name}</span>
        <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-gold text-plum-950 transition-transform duration-200 group-hover:translate-x-0.5">
          <ArrowRight aria-hidden className="size-3.5" strokeWidth={2} />
        </span>
      </span>
    </Link>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-plum-950 pb-14 pt-28 text-porcelain md:pb-20 md:pt-32 lg:pb-24">
      <div className="page-x grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p style={rise(0)} className="eyebrow animate-reveal !text-gold-light">
            Hyderabad gifting studio · Pan-India delivery
          </p>
          <h1 className="mt-5 font-display text-[clamp(44px,5.8vw,86px)] font-medium leading-[1.04]">
            <span style={rise(80)} className="block animate-reveal">Every gift</span>
            <span style={rise(200)} className="block animate-reveal pb-1">
              tells <em className="font-normal text-gold-light">a story.</em>
            </span>
          </h1>
          <p style={rise(340)} className="mt-6 max-w-[30rem] animate-reveal text-base leading-relaxed text-porcelain/75 md:text-lg">
            Silver artifacts, festive hampers and pooja sets, curated and hand-wrapped in our Hyderabad studio.
          </p>
          <div style={rise(460)} className="mt-9 flex animate-reveal flex-wrap items-center gap-3">
            <a href="#collections" className="btn-gold">
              Explore collections
              <ArrowRight aria-hidden className="size-4" strokeWidth={2} />
            </a>
            <Link to="/build-hamper" className="btn-glass">
              Build a hamper
            </Link>
          </div>
        </div>

        {/* Real catalog photography, each shot opens its product */}
        <div className="relative lg:col-span-7">
          <img
            src="/brand/seal.webp"
            width={215}
            height={217}
            alt=""
            className="absolute -left-5 -top-6 z-10 hidden size-24 rounded-full bg-plum-950 p-1.5 lg:block"
          />
          <div className="grid grid-cols-5 gap-3 md:gap-4 lg:h-[min(72dvh,700px)] lg:grid-rows-2">
            <Shot product={feature} priority sizes="(min-width: 1024px) 34vw, 60vw" className="col-span-3 row-span-2 aspect-[3/4] lg:aspect-auto" />
            <Shot product={hamper} compact sizes="(min-width: 1024px) 22vw, 40vw" className="col-span-2 aspect-[4/5] lg:aspect-auto" />
            <Shot product={diyas} compact sizes="(min-width: 1024px) 22vw, 40vw" className="col-span-2 aspect-[4/5] lg:aspect-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
