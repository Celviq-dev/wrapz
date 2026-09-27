import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { OCCASIONS } from "@/data/catalog";

export const Route = createFileRoute("/occasions")({
  head: () => ({
    meta: [
      { title: "Every Occasion — Gifting by Moment | Sneha Wrapzz" },
      { name: "description", content: "Shop gifts by occasion — birthdays, anniversaries, weddings, baby showers, housewarmings, Diwali, and every corporate milestone." },
      { property: "og:title", content: "Gifting by Occasion — Sneha Wrapzz" },
      { property: "og:description", content: "Shop gifts by the moment you're marking — personal and corporate occasions." },
      { property: "og:url", content: "https://snehawrapzz.lovable.app/occasions" },
    ],
    links: [{ rel: "canonical", href: "https://snehawrapzz.lovable.app/occasions" }],
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

      <section className="pb-24 md:pb-32 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {OCCASIONS.map((o) => (
              <Link key={o.slug} to="/occasion/$slug" params={{ slug: o.slug }} className="group card-lift block overflow-hidden rounded-3xl border border-beige bg-cream shadow-soft">
                <div className="aspect-[5/4] overflow-hidden">
                  <img src={o.image} alt={o.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 md:p-7">
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-bronze">Occasion</span>
                  <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold text-charcoal">{o.title}</h3>
                  <p className="mt-2 text-sm text-warm-gray leading-relaxed">{o.description}</p>
                  <span className="mt-4 inline-flex link-underline text-xs font-medium text-olive">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
