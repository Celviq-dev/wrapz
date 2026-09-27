import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CategoryCard } from "@/components/site/CategoryCard";
import { LeadForm } from "@/components/site/LeadForm";
import { CATEGORIES, PACKAGING_STRIP } from "@/data/catalog";
import hero from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/packaging")({
  head: () => ({
    meta: [
      { title: "Custom Packaging & Branded Boxes — Sneha Wrapzz" },
      { name: "description", content: "Rigid boxes, wooden boxes, paper bags, trays, and custom-branded packaging — designed and produced for hampers, gifting, and brand launches." },
      { property: "og:title", content: "Custom Packaging & Branded Boxes — Sneha Wrapzz" },
      { property: "og:description", content: "Premium packaging systems — rigid, wooden, transparent, and custom-branded — made for gifting and retail." },
      { property: "og:url", content: "https://snehawrapzz.lovable.app/packaging" },
    ],
    links: [{ rel: "canonical", href: "https://snehawrapzz.lovable.app/packaging" }],
  }),
  component: PackagingPage,
});

function PackagingPage() {
  const cats = CATEGORIES.filter((c) => c.group === "packaging");
  return (
    <>
      <PageHero
        tone="warm"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Packaging" }]}
        eyebrow="Packaging Studio"
        title="Boxes, bags & finishing —"
        italic="made to your palette."
        description="From rigid boxes and wooden crates to paper bags and translucent reveals. Sample first, produce at scale, delivered pan-India."
        image={hero}
        actions={
          <>
            <Link to="/contact" className="btn-primary">Request a sample →</Link>
            <Link to="/bulk-orders" className="btn-outline">Bulk quote</Link>
          </>
        }
      />

      <section className="py-14 md:py-16 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {PACKAGING_STRIP.map((p) => (
              <Link key={p.slug} to="/category/$slug" params={{ slug: p.slug }} className="rounded-full border border-beige bg-cream px-4 py-2 text-xs font-medium text-charcoal hover:border-bronze transition">
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="Categories" title="Packaging" italic="systems." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cats.map((c) => (
              <CategoryCard key={c.slug} to="/category/$slug" params={{ slug: c.slug }} image={c.image} eyebrow={c.eyebrow} title={c.title} description={c.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeader eyebrow="Custom Enquiry" title="Send us your" italic="brand kit." description="Palette, logo, and quantities — we'll produce sample options and pricing within a working day." />
          </div>
          <LeadForm title="Packaging enquiry" subtitle="Include quantities, sizing, and any branding notes." variant="terracotta" />
        </div>
      </section>
    </>
  );
}
