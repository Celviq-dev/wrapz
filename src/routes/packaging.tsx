import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CategoryCard } from "@/components/site/CategoryCard";
import { LeadForm } from "@/components/site/LeadForm";
import { CATEGORIES, PACKAGING_STRIP, absoluteUrl, categoryPhoto, coverPhoto, photoUrl, productsForCategory } from "@/data/catalog";

const HERO = coverPhoto("tasselled-festive-gift-boxes");

export const Route = createFileRoute("/packaging")({
  head: () => ({
    meta: [
      { title: "Gift Packaging: Potlis, Boxes & Baskets — Sneha’s Wrapzz" },
      { name: "description", content: "Tasselled gift boxes, potlis, woven baskets, wooden boxes and custom-branded packaging, wrapped by hand in Hyderabad for hampers, weddings and corporate orders." },
      { property: "og:title", content: "Gift Packaging: Potlis, Boxes & Baskets — Sneha’s Wrapzz" },
      { property: "og:description", content: "Tasselled boxes, potlis, baskets and custom-branded packaging, wrapped by hand." },
      { property: "og:url", content: absoluteUrl("/packaging") },
      ...(HERO ? [{ property: "og:image", content: absoluteUrl(photoUrl(HERO, 1600)) }] : []),
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/packaging") }],
  }),
  component: PackagingPage,
});

function PackagingPage() {
  const cats = CATEGORIES.filter((c) => c.group === "packaging" && !c.hidden);
  return (
    <>
      <PageHero
        tone="warm"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Packaging" }]}
        eyebrow="Presentation"
        title="Wrapped, boxed"
        italic="and hand-tied."
        description="Every hamper leaves our studio in packaging chosen for it: tasselled boxes, potlis, woven baskets or hand-painted wood. Custom-branded packaging for bulk orders."
        photo={HERO}
        actions={
          <>
            <Link to="/personalized" className="btn-primary">See our hampers</Link>
            <Link to="/bulk-orders" className="btn-outline">Bulk quote</Link>
          </>
        }
      />

      <section className="py-14 md:py-16 bg-ivory">
        <div className="page-x">
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
        <div className="page-x">
          <SectionHeader title="Packaging," italic="from our studio." description="Photographed from real orders. Rigid, clear and branded boxes are made to order in your palette." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cats.map((c) => (
              <CategoryCard
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                photo={categoryPhoto(c)}
                eyebrow={c.eyebrow}
                count={productsForCategory(c.slug).length}
                title={c.title}
                description={c.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="page-x grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeader title="Send us your" italic="brand kit." description="Palette, logo and quantities. We'll share packaging options and pricing within a working day." />
          </div>
          <LeadForm title="Packaging enquiry" subtitle="Include quantities, sizing and any branding notes." purpose="Custom packaging" />
        </div>
      </section>
    </>
  );
}
