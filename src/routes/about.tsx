import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { StatsRow } from "@/components/site/StatsRow";
import { PILLARS, absoluteUrl, coverPhoto } from "@/data/catalog";
import { SITE } from "@/data/site";

const VALUES = [
  { t: "Handcraft", d: "Every hamper is hand-tied, hand-wrapped and hand-finished in our studio. No shortcuts." },
  { t: "Considered", d: "We think about the person on the other side of the box, always." },
  { t: "Trusted at scale", d: "From a single keepsake to identical favors for every guest or employee." },
  { t: "Warmly Indian", d: "Pichwai prints, silver-finish deities, diyas and potlis, rooted in our festivals." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sneha’s Wrapzz — A Hand-wrapped Gifting Studio in Hyderabad" },
      { name: "description", content: `Sneha’s Wrapzz is a gifting studio in ${SITE.address.locality}, ${SITE.address.city}: silver artifacts, hampers, diyas and pooja sets, curated and hand-wrapped for ${SITE.customers.toLocaleString("en-IN")}+ customers.` },
      { property: "og:title", content: "About Sneha’s Wrapzz — A Hand-wrapped Gifting Studio" },
      { property: "og:description", content: "Silver artifacts, hampers and festive gifting, curated and hand-wrapped in Hyderabad." },
      { property: "og:url", content: absoluteUrl("/about") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        eyebrow="Our Studio"
        title="Considered gifting,"
        italic="hand-wrapped in Hyderabad."
        description={`Sneha’s Wrapzz began as a home studio wrapping gifts for friends and their weddings. Today we curate silver artifacts, hampers and festive gifting for ${SITE.customers.toLocaleString("en-IN")}+ customers, many of whom come back every season.`}
        photo={coverPhoto("woven-basket-hamper")}
        actions={
          <>
            <Link to="/clients" className="btn-outline">See real orders</Link>
            <a href={SITE.reviewsUrl} target="_blank" rel="noopener noreferrer" className="link-underline text-sm font-medium text-olive">
              {SITE.reviews}+ Google reviews
            </a>
          </>
        }
      />

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="page-x">
          <SectionHeader title="Small values that" italic="show in every box." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 80} className="rounded-2xl border border-beige bg-cream p-6 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-charcoal">{v.t}</h3>
                <p className="mt-2 text-sm text-warm-gray leading-relaxed">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ivory">
        <div className="page-x">
          <SectionHeader title="Six collections," italic="one studio." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p) => (
              <Link key={p.key} to={p.to} className="group rounded-2xl border border-beige bg-cream p-6 shadow-soft card-lift">
                <div className="text-sm font-medium text-gold-deep">{p.eyebrow}</div>
                <h3 className="mt-2 font-display text-xl font-semibold text-charcoal">{p.title}</h3>
                <p className="mt-2 text-sm text-warm-gray leading-relaxed">{p.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-14">
            <StatsRow />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <SectionHeader align="center" title="Plan a gift" italic="with us." description="Whether it's a single keepsake or favors for every guest, we'd love to hear about it." />
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary">Get a quote</Link>
            <Link to="/build-hamper" className="btn-outline">Build a hamper</Link>
          </div>
        </div>
      </section>
    </>
  );
}
