import { Link } from "@tanstack/react-router";
import { pick } from "@/data/catalog";
import { CatalogImage } from "./CatalogImage";

const TIERS = [
  { range: "10–50", unit: "gifts", name: "Small teams", body: "Curated hampers for close-knit teams and thank-you gestures to key clients." },
  { range: "50–500", unit: "gifts", name: "Enterprise", body: "Identical unboxing at scale with personalized notes and your branding on cards and tags." },
  { range: "500+", unit: "gifts", name: "Bespoke", body: "Custom sourcing and brand-aligned packaging, managed from brief to pan-India dispatch." },
];

const [bulk, boxed] = pick(["favor-boxes-with-keepsake-cards", "dry-fruit-gift-box-with-diwali-card"]);

export function Corporate() {
  return (
    <section aria-labelledby="corporate-title" className="bg-porcelain py-20 md:py-28">
      <div className="page-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 id="corporate-title" className="font-display text-[34px] font-medium leading-[1.1] text-ink md:text-5xl">
              Corporate gifting, handled end to end.
            </h2>
            <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-ink-soft md:text-lg">
              For clients you want to keep and teams that notice details. We source, brand, pack and dispatch across India, and you deal directly with the studio.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Link to="/corporate" className="btn-primary">
              Plan a corporate order
            </Link>
            <Link to="/clients" className="btn-outline">
              See real orders
            </Link>
          </div>
        </div>

        <dl className="mt-12 grid border-y border-line md:grid-cols-3 md:divide-x md:divide-line">
          {TIERS.map((t) => (
            <div key={t.name} className="border-b border-line py-7 last:border-b-0 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0">
              <dt>
                <span className="font-display text-4xl font-medium text-ink tabular-nums md:text-5xl">{t.range}</span>
                <span className="ml-2 text-sm text-ink-soft">{t.unit}</span>
                <span className="mt-3 block text-sm font-semibold text-ink">{t.name}</span>
              </dt>
              <dd className="mt-1.5 max-w-[36ch] text-[15px] leading-relaxed text-ink-soft">{t.body}</dd>
            </div>
          ))}
        </dl>

        <figure className="mt-10 grid grid-cols-12 gap-3 md:gap-4">
          <div className="col-span-7 overflow-hidden rounded-2xl bg-paper">
            <CatalogImage photo={bulk.photos[0]} sizes="(min-width: 1024px) 55vw, 58vw" className="aspect-[4/3] size-full object-cover" />
          </div>
          <div className="col-span-5 overflow-hidden rounded-2xl bg-paper">
            <CatalogImage photo={boxed.photos[0]} sizes="(min-width: 1024px) 38vw, 42vw" className="size-full object-cover" />
          </div>
          <figcaption className="col-span-12 text-[13px] text-ink-soft">
            From real orders: keepsake favor boxes with custom Ganesha cards, and a dry-fruit box finished with a Diwali card.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
