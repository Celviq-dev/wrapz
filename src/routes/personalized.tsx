import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CategoryCard } from "@/components/site/CategoryCard";
import { LeadForm } from "@/components/site/LeadForm";
import { StatsRow } from "@/components/site/StatsRow";
import { CATEGORIES, OCCASIONS, BUDGETS } from "@/data/catalog";
import hero from "@/assets/collection-personal.jpg";

export const Route = createFileRoute("/personalized")({
  head: () => ({
    meta: [
      { title: "Personalized Gifting — Sneha Wrapzz" },
      { name: "description", content: "Handcrafted personalized gifts, keepsake boxes, wedding return gifts, and thoughtful hampers for every relationship and occasion." },
      { property: "og:title", content: "Personalized Gifting — Sneha Wrapzz" },
      { property: "og:description", content: "Personalized gifts, keepsake boxes and thoughtful hampers for every relationship and moment." },
      { property: "og:url", content: "https://snehawrapzz.lovable.app/personalized" },
    ],
    links: [{ rel: "canonical", href: "https://snehawrapzz.lovable.app/personalized" }],
  }),
  component: PersonalizedPage,
});

function PersonalizedPage() {
  const cats = CATEGORIES.filter((c) => c.group === "personalized");
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Personalized" }]}
        eyebrow="Personalized Gifting"
        title="Small gestures,"
        italic="held with intention."
        description="Keepsakes, hampers, and made-just-for-them gifts — for birthdays, anniversaries, weddings, and everyday warmth."
        image={hero}
        actions={
          <>
            <Link to="/build-hamper" className="btn-primary">Build a hamper →</Link>
            <Link to="/contact" className="btn-outline">Talk to us</Link>
          </>
        }
      />

      <section className="py-20 md:py-24 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="Browse" title="By category" italic="find your fit." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cats.map((c) => (
              <CategoryCard key={c.slug} to="/category/$slug" params={{ slug: c.slug }} image={c.image} eyebrow={c.eyebrow} title={c.title} description={c.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="Occasions" title="Shop by" italic="the moment." />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {OCCASIONS.slice(0, 8).map((o) => (
              <Link key={o.slug} to="/occasion/$slug" params={{ slug: o.slug }} className="group card-lift rounded-2xl border border-beige bg-cream p-5 shadow-soft">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img src={o.image} alt={o.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-4 font-display text-lg font-semibold text-charcoal">{o.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="By Budget" title="A gift for" italic="every thoughtful budget." />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3">
            {BUDGETS.map((b) => (
              <Link key={b.slug} to="/budget/$slug" params={{ slug: b.slug }} className="rounded-xl border border-beige bg-cream px-4 py-4 text-center text-sm font-medium text-charcoal card-lift">
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <StatsRow />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeader eyebrow="Personal Enquiry" title="Tell us about" italic="the person." description="Share who it's for and the occasion — we'll come back with two or three curated options." />
          </div>
          <LeadForm title="Plan a personal gift" subtitle="A gifting concierge will reply within one working day." variant="sage" />
        </div>
      </section>
    </>
  );
}
