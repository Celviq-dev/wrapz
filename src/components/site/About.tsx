import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { pick } from "@/data/catalog";
import { CatalogImage } from "./CatalogImage";

const [photo] = pick(["shubh-diwali-gift-box"]);

/** The studio, in the words the brand uses in its own catalog. */
export function About() {
  return (
    <section aria-labelledby="story-title" className="bg-paper py-20 md:py-28">
      <div className="page-x grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <img src="/brand/seal.webp" width={215} height={217} alt="" className="size-24 md:size-28" />
          <h2 id="story-title" className="mt-8 font-display text-[34px] font-medium leading-[1.1] text-ink md:text-5xl">
            From your thoughts to <em className="font-normal text-gold-deep">our craft.</em>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Sneha’s Wrapzz is a gifting studio in Secunderabad, led by Sneha. Every order is planned with you, customized by hand and wrapped in the studio before it
              leaves for anywhere in India.
            </p>
            <p>Working to a limited budget? Don’t worry. Tell us what you have in mind and we will build the hamper around it.</p>
          </div>
          <Link to="/about" className="tap-area mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-gold-deep">
            About the studio <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
          </Link>
        </div>
        <figure className="lg:col-span-6 lg:col-start-7">
          <div className="overflow-hidden rounded-2xl bg-porcelain">
            <CatalogImage photo={photo.photos[0]} sizes="(min-width: 1024px) 46vw, 100vw" className="aspect-square size-full object-cover" />
          </div>
          <figcaption className="mt-3 text-[13px] text-ink-soft">{photo.name}, wrapped in the studio.</figcaption>
        </figure>
      </div>
    </section>
  );
}
