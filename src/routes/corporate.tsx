import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CategoryCard } from "@/components/site/CategoryCard";
import { LeadForm } from "@/components/site/LeadForm";
import { StatsRow } from "@/components/site/StatsRow";
import { Reveal } from "@/components/site/Reveal";
import { CATEGORIES } from "@/data/catalog";
import hero from "@/assets/collection-corporate.jpg";

const STORY_STATS: ReadonlyArray<readonly [string, string]> = [
  ["120+", "brands trust us"],
  ["20 – 20k", "quantity range"],
  ["48h", "sample turnaround"],
  ["Pan-India", "delivery"],
];

const PROMISE = [
  { t: "Brand-aligned", d: "Colour palette, monogram, foil — matched to your identity." },
  { t: "Scale-ready", d: "From 20-piece leadership sets to 5,000-piece festive rollouts." },
  { t: "Sustainable options", d: "Recycled boards, cotton fill, plantable finishes." },
  { t: "Managed logistics", d: "Consolidated dispatches or multi-address, tracked end-to-end." },
];

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Gifting & Bulk Hampers — Sneha Wrapzz" },
      { name: "description", content: "Employee onboarding kits, festive corporate hampers, client gifting, and executive presentation — designed, branded and delivered pan-India." },
      { property: "og:title", content: "Corporate Gifting & Bulk Hampers — Sneha Wrapzz" },
      { property: "og:description", content: "Considered corporate gifting at scale — joining kits, festive hampers, client and leadership gifts." },
      { property: "og:url", content: "https://snehawrapzz.lovable.app/corporate" },
    ],
    links: [{ rel: "canonical", href: "https://snehawrapzz.lovable.app/corporate" }],
  }),
  component: CorporatePage,
});

function CorporatePage() {
  const cats = CATEGORIES.filter((c) => c.group === "corporate");
  return (
    <>
      <PageHero
        tone="cream"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Corporate" }]}
        eyebrow="For Businesses"
        title="Corporate gifting"
        italic="that feels considered."
        description="Joining kits, festive hampers, client appreciations and executive gifts — designed on-brand and delivered at scale."
        image={hero}
        actions={
          <>
            <Link to="/bulk-orders" className="btn-terracotta">Request bulk quote →</Link>
            <a href="#catalog" className="btn-outline">Download catalog</a>
          </>
        }
      />

      <section className="py-20 md:py-24 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="What we deliver" title="Corporate" italic="categories." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cats.map((c) => (
              <CategoryCard key={c.slug} to="/category/$slug" params={{ slug: c.slug }} image={c.image} eyebrow={c.eyebrow} title={c.title} description={c.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-charcoal text-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-champagne">— Our Promise</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-[1.12]">
              Managed end-to-end.
              <br /><span className="italic text-champagne">You just approve.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROMISE.map((p) => (
              <div key={p.t} className="rounded-2xl border border-ivory/15 bg-ivory/[0.04] p-6">
                <h3 className="font-display text-lg font-semibold text-ivory">{p.t}</h3>
                <p className="mt-2 text-sm text-ivory/70 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <StatsRow variant="dark" stats={STORY_STATS} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeader eyebrow="Bulk Quote" title="Tell us what you're" italic="planning." description="Timelines, quantities, and any personalization — we'll come back with three concept options and pricing within one working day." />
            <div id="catalog" className="mt-8 rounded-2xl border border-beige bg-cream p-6 shadow-soft">
              <div className="text-[11px] uppercase tracking-[0.18em] text-bronze">Corporate Catalog</div>
              <div className="mt-2 font-display text-xl text-charcoal">Download the 2026 catalog</div>
              <p className="mt-2 text-sm text-warm-gray">A 40-page PDF with case studies, packaging systems, and price bands.</p>
              <a href="mailto:hello@snehawrapzz.com?subject=Send%20me%20the%20corporate%20catalog" className="btn-outline mt-4">Email me the catalog</a>
            </div>
          </div>
          <LeadForm title="Request a corporate quote" subtitle="No spam, just gifting." variant="terracotta" />
        </div>
      </section>
    </>
  );
}
