import { createFileRoute, Link } from "@tanstack/react-router";
import { PillarPage, pillarHead } from "@/components/site/PillarPage";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CategoryCard } from "@/components/site/CategoryCard";
import { StatsRow } from "@/components/site/StatsRow";
import { BUDGETS, CATEGORIES, categoryPhoto, productsForCategory } from "@/data/catalog";

export const Route = createFileRoute("/personalized")({
  head: () =>
    pillarHead(
      "hampers",
      "Personalized Hampers, Potlis & Keepsakes — Sneha’s Wrapzz",
      "Potli hampers, woven baskets, tray hampers, tasselled gift boxes and hand-painted personalized keepsakes, curated and hand-tied in Hyderabad.",
    ),
  component: PersonalizedPage,
});

function PersonalizedPage() {
  const edits = CATEGORIES.filter((c) => c.group === "hampers" && c.kind === "curated" && c.slug !== "baby-shower-gifts");
  return (
    <PillarPage
      pillarKey="hampers"
      title="Small gestures,"
      italic="held with intention."
      description="Potlis, woven baskets, tray hampers and hand-painted keepsakes, curated around the person and hand-tied in our studio."
      actions={
        <>
          <Link to="/build-hamper" className="btn-primary">Build a hamper</Link>
          <a href="#browse" className="btn-outline">Browse hampers</a>
        </>
      }
      formTitle="Plan a personal gift"
    >
      <section className="py-20 md:py-24 bg-warm-white">
        <div className="page-x">
          <SectionHeader title="Chosen for" italic="the person." description="Edits drawn from across our collections, from silver-finish keepsakes to candles and serveware." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {edits.map((c) => (
              <CategoryCard
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                photo={categoryPhoto(c)}
                count={productsForCategory(c.slug).length}
                title={c.title}
                description={c.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-ivory">
        <div className="page-x">
          <SectionHeader title="A gift for" italic="every thoughtful budget." />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3">
            {BUDGETS.map((b) => (
              <Link key={b.slug} to="/budget/$slug" params={{ slug: b.slug }} className="rounded-xl border border-beige bg-cream px-4 py-4 text-center text-sm font-medium text-charcoal card-lift">
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-warm-white">
        <div className="page-x">
          <StatsRow />
        </div>
      </section>
    </PillarPage>
  );
}
