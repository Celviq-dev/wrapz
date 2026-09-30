import { createFileRoute, Link } from "@tanstack/react-router";
import { PillarPage, pillarHead } from "@/components/site/PillarPage";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CategoryCard } from "@/components/site/CategoryCard";
import { CATEGORIES, OCCASIONS, occasionPhoto, productsForOccasion } from "@/data/catalog";

export const Route = createFileRoute("/festive")({
  head: () =>
    pillarHead(
      "festive",
      "Diwali Diyas, Candles & Festive Hampers — Sneha’s Wrapzz",
      "Hand-finished wax diyas, candelabras, lanterns and boxed tealight sets for Diwali, weddings and year-end gifting. Bulk orders welcome, delivered pan-India.",
    ),
  component: FestivePage,
});

function FestivePage() {
  const festiveOccasions = OCCASIONS.filter((o) => ["diwali", "weddings", "year-end", "housewarming"].includes(o.slug));
  const edits = CATEGORIES.filter((c) => ["festive-corporate", "festive-packaging", "wedding-return-gifts"].includes(c.slug));
  return (
    <PillarPage
      pillarKey="festive"
      title="A season of"
      italic="warmly lit gifting."
      description="Wax diyas, candelabras, enamel lanterns and boxed tealight sets, finished by hand for Diwali and every celebration after it. Book festive volumes 6–8 weeks ahead."
      actions={
        <>
          <a href="#browse" className="btn-primary">Browse diyas &amp; candles</a>
          <Link to="/bulk-orders" className="btn-outline">Request a festive quote</Link>
        </>
      }
      formTitle="Plan a festive send"
    >
      <section className="bg-warm-white py-20 md:py-24">
        <div className="page-x">
          <SectionHeader title="Every" italic="celebration." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {festiveOccasions.map((o) => (
              <CategoryCard
                key={o.slug}
                to="/occasion/$slug"
                params={{ slug: o.slug }}
                photo={occasionPhoto(o)}
                count={productsForOccasion(o.slug).length}
                title={o.title}
                description={o.description}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
              />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {edits.map((c) => (
              <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }} className="rounded-full border border-beige bg-cream px-4 py-2 text-xs font-medium text-charcoal hover:border-bronze transition">
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PillarPage>
  );
}
