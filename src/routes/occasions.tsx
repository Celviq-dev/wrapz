import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CategoryCard } from "@/components/site/CategoryCard";
import { OCCASIONS, absoluteUrl, occasionPhoto, productsForOccasion } from "@/data/catalog";

export const Route = createFileRoute("/occasions")({
  head: () => ({
    meta: [
      { title: "Every Occasion — Gifting by Moment | Sneha’s Wrapzz" },
      { name: "description", content: "Shop gifts by occasion — birthdays, anniversaries, weddings, baby showers, housewarmings, Diwali, and every corporate milestone." },
      { property: "og:title", content: "Gifting by Occasion — Sneha’s Wrapzz" },
      { property: "og:description", content: "Shop gifts by the moment you're marking — personal and corporate occasions." },
      { property: "og:url", content: absoluteUrl("/occasions") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/occasions") }],
  }),
  component: OccasionsPage,
});

function OccasionsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Occasions" }]}
        eyebrow="By Occasion"
        title="What are you"
        italic="marking today?"
        description="A quick way in — pick the moment, and we'll show curated gifts and hampers ready to send."
      />

      <section aria-labelledby="occasions-list" className="pb-24 md:pb-32 bg-ivory">
        <h2 id="occasions-list" className="sr-only">
          All occasions
        </h2>
        <div className="page-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {OCCASIONS.map((o) => (
              <CategoryCard
                key={o.slug}
                to="/occasion/$slug"
                params={{ slug: o.slug }}
                photo={occasionPhoto(o)}
                eyebrow="Occasion"
                count={productsForOccasion(o.slug).length}
                title={o.title}
                description={o.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
