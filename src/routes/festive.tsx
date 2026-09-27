import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CategoryCard } from "@/components/site/CategoryCard";
import { LeadForm } from "@/components/site/LeadForm";
import { CATEGORIES, OCCASIONS } from "@/data/catalog";
import hero from "@/assets/collection-festival.jpg";

export const Route = createFileRoute("/festive")({
  head: () => ({
    meta: [
      { title: "Festive Hampers — Diwali, New Year & Year-End Gifting" },
      { name: "description", content: "Festive gifting collections for Diwali, New Year, and year-end — thoughtful hampers for families, teams, and clients at any scale." },
      { property: "og:title", content: "Festive Hampers — Diwali, New Year & Year-End Gifting" },
      { property: "og:description", content: "Diwali, New Year, and year-end hampers — for families, teams, and clients." },
      { property: "og:url", content: "https://snehawrapzz.lovable.app/festive" },
    ],
    links: [{ rel: "canonical", href: "https://snehawrapzz.lovable.app/festive" }],
  }),
  component: FestivePage,
});

function FestivePage() {
  const festiveCats = CATEGORIES.filter((c) => ["festive-corporate", "festive-packaging", "wedding-return-gifts", "leadership-gifts"].includes(c.slug));
  const festiveOccasions = OCCASIONS.filter((o) => ["diwali", "year-end", "weddings", "anniversaries"].includes(o.slug));
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Festive" }]}
        eyebrow="Festive Collections"
        title="A season of"
        italic="warmly-wrapped gifting."
        description="Diwali, New Year, weddings, and year-end sends — curated hampers, custom branding, and pan-India delivery."
        image={hero}
        actions={<Link to="/bulk-orders" className="btn-terracotta">Request festive quote →</Link>}
      />

      <section className="py-20 md:py-24 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="Seasonal" title="Festive" italic="edits." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {festiveCats.map((c) => (
              <CategoryCard key={c.slug} to="/category/$slug" params={{ slug: c.slug }} image={c.image} eyebrow={c.eyebrow} title={c.title} description={c.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="Occasions" title="Every" italic="celebration." />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
            {festiveOccasions.map((o) => (
              <Link key={o.slug} to="/occasion/$slug" params={{ slug: o.slug }} className="group card-lift rounded-2xl border border-beige bg-cream p-5 shadow-soft">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img src={o.image} alt={o.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-4 font-display text-lg font-semibold text-charcoal">{o.title}</div>
                <p className="mt-1 text-xs text-warm-gray line-clamp-2">{o.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeader eyebrow="Plan Ahead" title="Festive rollouts" italic="book early." description="For Diwali and year-end, we recommend briefing us 6–8 weeks ahead for the best crafting window." />
          </div>
          <LeadForm title="Plan a festive send" subtitle="Share timelines and quantities — we'll come back with concept options." variant="terracotta" />
        </div>
      </section>
    </>
  );
}
