import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CategoryCard } from "@/components/site/CategoryCard";
import { LeadForm } from "@/components/site/LeadForm";
import { StatsRow } from "@/components/site/StatsRow";
import { Reveal } from "@/components/site/Reveal";
import { ProductGrid } from "@/components/site/ProductGrid";
import { CATEGORIES, absoluteUrl, categoryPhoto, coverPhoto, photoUrl, productsForCategory, productsForPillar } from "@/data/catalog";
import { whatsappLink } from "@/data/site";

const HERO = coverPhoto("pichwai-peacock-hamper-boxes");

const PROMISE = [
  { t: "Brand-aligned", d: "Your palette, logo and message on boxes, cards and tags." },
  { t: "Scale-ready", d: "From leadership sets to identical favors for every employee." },
  { t: "Sustainable options", d: "Jute, cane and wood, including our Sustainable Soirée hamper." },
  { t: "Managed dispatch", d: "Packed in our studio and shipped pan-India, to one address or many." },
];

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Gifting & Bulk Hampers, Hyderabad — Sneha’s Wrapzz" },
      { name: "description", content: "Branded hampers, bulk favors, festive corporate gifting and silver-finish client gifts, packed in Hyderabad and delivered pan-India." },
      { property: "og:title", content: "Corporate Gifting & Bulk Hampers — Sneha’s Wrapzz" },
      { property: "og:description", content: "Branded hampers, bulk favors and client gifts, packed identically and delivered pan-India." },
      { property: "og:url", content: absoluteUrl("/corporate") },
      ...(HERO ? [{ property: "og:image", content: absoluteUrl(photoUrl(HERO, 1600)) }] : []),
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/corporate") }],
  }),
  component: CorporatePage,
});

function CorporatePage() {
  const edits = CATEGORIES.filter((c) => c.group === "corporate" && c.kind === "curated");
  const products = productsForPillar("corporate");
  return (
    <>
      <PageHero
        tone="cream"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Corporate" }]}
        eyebrow="For Businesses"
        title="Corporate gifting that"
        italic="feels considered."
        description="Branded hampers, bulk favors and silver-finish client gifts, designed on-brand, packed identically in our studio and delivered pan-India."
        photo={HERO}
        actions={
          <>
            <Link to="/bulk-orders" className="btn-primary">Request a bulk quote</Link>
            <a href={whatsappLink("Hi Sneha’s Wrapzz, please share your corporate gifting catalog.")} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Get the catalog on WhatsApp
            </a>
          </>
        }
      />

      <section className="py-20 md:py-24 bg-warm-white">
        <div className="page-x">
          <SectionHeader title="Hampers and favors," italic="packed at scale." />
          <div className="mt-12">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>

      <section className="bg-porcelain py-20 md:py-24">
        <div className="page-x">
          <SectionHeader title="Corporate" italic="gift edits." />
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {edits.map((c) => (
              <CategoryCard
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                photo={categoryPhoto(c)}
                count={productsForCategory(c.slug).length}
                title={c.title}
                description={c.description}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark on-dark py-20 md:py-28">
        <div className="page-x">
          <SectionHeader variant="dark-invert" title="Managed end-to-end." italic="You just approve." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROMISE.map((p, i) => (
              <Reveal key={p.t} delay={i * 80} variant="fade-up">
                <div className="glass-card-dark h-full p-6 transition-colors duration-150 hover:border-gold/40">
                  <h3 className="text-lg font-semibold text-porcelain">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-porcelain/70">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-14">
            <StatsRow variant="dark" />
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="page-x grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader variant="statement" title="Tell us what you're planning." description="Timelines, quantities and any branding. We'll come back with concept options and pricing within one working day." />
          </div>
          <LeadForm title="Request a corporate quote" subtitle="Quantities, timeline and branding. We reply within one working day." purpose="Corporate gifting" />
        </div>
      </section>
    </>
  );
}
