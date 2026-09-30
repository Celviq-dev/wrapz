import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { LeadForm } from "@/components/site/LeadForm";
import { StatsRow } from "@/components/site/StatsRow";
import { ProductGrid } from "@/components/site/ProductGrid";
import { absoluteUrl, coverPhoto, productsForCategory } from "@/data/catalog";

const STEPS = [
  { t: "Brief", d: "Share quantity, timeline, budget and any branding." },
  { t: "Concept", d: "Two or three options from our catalog with pricing and lead time." },
  { t: "Sample", d: "Approve a sample before we pack at scale." },
  { t: "Pack", d: "Hand-packed in our Hyderabad studio, checked piece by piece." },
  { t: "Deliver", d: "One address or many, shipped pan-India with tracking." },
];

export const Route = createFileRoute("/bulk-orders")({
  head: () => ({
    meta: [
      { title: "Bulk Orders & Corporate Gifting Quotes — Sneha’s Wrapzz" },
      { name: "description", content: "Request bulk gifting quotes for corporate events, festive hampers, weddings, and brand launches. Pan-India delivery. Response within one working day." },
      { property: "og:title", content: "Bulk Orders & Corporate Quotes — Sneha’s Wrapzz" },
      { property: "og:description", content: "Bulk gifting for corporates, weddings, and festive rollouts — quoted within one working day." },
      { property: "og:url", content: absoluteUrl("/bulk-orders") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/bulk-orders") }],
  }),
  component: BulkOrdersPage,
});

function BulkOrdersPage() {
  return (
    <>
      <PageHero
        tone="cream"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Bulk Orders" }]}
        eyebrow="Bulk & Corporate"
        title="Gifting"
        italic="at scale."
        description="Return gifts, festive hampers and branded favors packed identically in any quantity, managed end-to-end and delivered pan-India."
        photo={coverPhoto("floral-jute-potli-return-gifts")}
      />

      <section className="py-20 md:py-24 bg-warm-white">
        <div className="page-x">
          <SectionHeader title="Brief to" italic="delivery." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STEPS.map((s, i) => (
              <div key={s.t} className="rounded-2xl border border-beige bg-cream p-6 shadow-soft">
                <div className="text-sm font-medium text-gold-deep tabular-nums">Step {i + 1}</div>
                <h3 className="mt-2 font-display text-lg font-semibold text-charcoal">{s.t}</h3>
                <p className="mt-2 text-sm text-warm-gray leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <StatsRow />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-ivory">
        <div className="page-x">
          <SectionHeader title="Favors and hampers," italic="packed identically." />
          <div className="mt-12">
            <ProductGrid products={productsForCategory("event-gifting").slice(0, 8)} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <LeadForm title="Request a bulk quote" subtitle="Share quantity, timeline, budget and any branding. We respond within one working day." purpose="Bulk order" />
        </div>
      </section>
    </>
  );
}
