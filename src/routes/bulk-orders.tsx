import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { LeadForm } from "@/components/site/LeadForm";
import { StatsRow } from "@/components/site/StatsRow";

const STEPS = [
  { t: "Brief", d: "Share quantity, timeline, budget, and any branding." },
  { t: "Concept", d: "Two or three curated concepts with mood, pricing, and lead time." },
  { t: "Sample", d: "Approve a physical sample before we produce at scale." },
  { t: "Produce", d: "Handcrafted in our studio with quality checks at every step." },
  { t: "Deliver", d: "Consolidated dispatch or multi-address, tracked end to end." },
];

export const Route = createFileRoute("/bulk-orders")({
  head: () => ({
    meta: [
      { title: "Bulk Orders & Corporate Gifting Quotes — Sneha Wrapzz" },
      { name: "description", content: "Request bulk gifting quotes for corporate events, festive hampers, weddings, and brand launches. Pan-India delivery. Response within one working day." },
      { property: "og:title", content: "Bulk Orders & Corporate Quotes — Sneha Wrapzz" },
      { property: "og:description", content: "Bulk gifting for corporates, weddings, and festive rollouts — quoted within one working day." },
      { property: "og:url", content: "https://snehawrapzz.lovable.app/bulk-orders" },
    ],
    links: [{ rel: "canonical", href: "https://snehawrapzz.lovable.app/bulk-orders" }],
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
        description="20 pieces to 20,000 — festive hampers, joining kits, wedding sends, and event kits. Managed end-to-end, delivered pan-India."
      />

      <section className="py-20 md:py-24 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="How it works" title="Brief to" italic="delivery." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STEPS.map((s, i) => (
              <div key={s.t} className="rounded-2xl border border-beige bg-cream p-6 shadow-soft">
                <div className="text-[11px] uppercase tracking-[0.18em] text-bronze">Step {i + 1}</div>
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

      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <LeadForm title="Request a bulk quote" subtitle="Share quantity, timeline, budget, and any branding — we respond within one working day." variant="terracotta" />
        </div>
      </section>
    </>
  );
}
