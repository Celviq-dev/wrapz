import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { CatalogImage } from "@/components/site/CatalogImage";
import { absoluteUrl, pick } from "@/data/catalog";
import { SITE } from "@/data/site";

// Real orders photographed in the brand's catalogs. Client names are deliberately not shown:
// add them here only with each client's permission.
const ORDERS = [
  { slug: "pichwai-peacock-hamper-boxes", scope: "Corporate · Bulk hampers", note: "Identical pichwai-print hamper boxes with jute bows, cream florals and tassels, packed for a company-wide send." },
  { slug: "favor-boxes-with-keepsake-cards", scope: "Festive · Favor boxes", note: "Keepsake favor boxes with custom printed cards, assembled and packed as one consistent set." },
  { slug: "floral-jute-potli-return-gifts", scope: "Wedding · Return gifts", note: "Hand-tied jute potlis with florals for every guest, finished to match the wedding palette." },
  { slug: "sustainable-soiree-gift-hamper", scope: "Corporate · Sustainable hamper", note: "Our Sustainable Soirée hamper: natural textures, reusable containers and a handwritten tag." },
];

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Real Orders — Sneha’s Wrapzz" },
      { name: "description", content: "Real bulk and corporate orders packed in the Sneha’s Wrapzz studio: branded hampers, wedding return gifts and festive favors, delivered pan-India." },
      { property: "og:title", content: "Clients & Real Orders — Sneha’s Wrapzz" },
      { property: "og:description", content: "Real orders from our studio: branded hampers, return gifts and festive favors." },
      { property: "og:url", content: absoluteUrl("/clients") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/clients") }],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  const orders = ORDERS.map((o) => ({ ...o, product: pick([o.slug])[0] })).filter((o) => o.product);
  return (
    <>
      <PageHero
        tone="cream"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Clients" }]}
        eyebrow={`${SITE.customers.toLocaleString("en-IN")}+ happy customers`}
        title="Real orders,"
        italic="from our studio."
        description="Families, wedding planners and companies come back to us every season. Here is what some of those orders looked like when they left our studio."
        photo={orders[0]?.product.photos[0]}
        actions={
          <a href={SITE.reviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Read {SITE.reviews}+ Google reviews
          </a>
        }
      />

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="page-x">
          <SectionHeader title="Packed for" italic="real occasions." />
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
            {orders.map((o) => (
              <Reveal key={o.slug}>
                <Link to="/product/$slug" params={{ slug: o.slug }} className="group block">
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-paper">
                    <CatalogImage photo={o.product.photos[0]} sizes="(min-width: 768px) 45vw, 100vw" className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                  </div>
                  <div className="pt-5">
                    <div className="text-sm font-medium text-gold-deep">{o.scope}</div>
                    <h3 className="mt-1 font-display text-2xl font-medium text-ink">{o.product.name}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">{o.note}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark bg-plum-950 py-20 text-center text-porcelain md:py-28">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <h2 className="font-display text-[34px] font-medium leading-[1.1] md:text-5xl">
            Your brand, <em className="font-normal text-gold-light">warmly gifted.</em>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/bulk-orders" className="btn-gold">Request a bulk quote</Link>
            <Link to="/corporate" className="btn-glass">Explore corporate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
