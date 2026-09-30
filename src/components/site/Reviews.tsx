import { ArrowUpRight, Star } from "lucide-react";
import { PILLARS, PRODUCTS } from "@/data/catalog";
import { FEATURED_REVIEW, SITE } from "@/data/site";

const STATS = [
  { value: `${SITE.customers.toLocaleString("en-IN")}+`, label: "Happy customers" },
  { value: `${SITE.reviews}+`, label: "Google reviews" },
  { value: String(PRODUCTS.length), label: "Designs in the catalog" },
  { value: String(PILLARS.length), label: "Collections" },
];

export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="bg-porcelain py-20 md:py-28">
      <div className="page-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <figure className="lg:col-span-7">
          <h2 id="reviews-title" className="text-sm font-semibold text-ink">
            From our Google reviews
          </h2>
          <div role="img" aria-label={`Rated ${FEATURED_REVIEW.rating} out of 5`} className="mt-4 flex gap-1 text-gold">
            {Array.from({ length: FEATURED_REVIEW.rating }, (_, i) => (
              <Star key={i} aria-hidden strokeWidth={0} className="size-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-6 font-display text-[24px] italic leading-[1.4] text-ink md:text-[30px]">
            <p>“{FEATURED_REVIEW.quote}”</p>
          </blockquote>
          <figcaption className="mt-6 text-sm text-ink-soft">
            <span className="font-semibold text-ink">{FEATURED_REVIEW.author}</span> · {FEATURED_REVIEW.source}
          </figcaption>
        </figure>

        <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-ink-soft">{s.label}</dt>
                <dd className="font-display text-4xl font-medium text-ink tabular-nums md:text-[44px]">{s.value}</dd>
              </div>
            ))}
          </dl>
          <a href={SITE.reviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-10 self-start">
            {`Read all ${SITE.reviews}+ reviews`} <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </section>
  );
}
