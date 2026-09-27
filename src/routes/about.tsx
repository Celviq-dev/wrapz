import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import craft from "@/assets/about-craft.jpg";

const VALUES = [
  { t: "Handcraft", d: "Every hamper is hand-tied, hand-wrapped, and hand-finished. No shortcuts." },
  { t: "Considered", d: "We think about the person on the other side of the box — always." },
  { t: "Trusted at scale", d: "From two-piece gestures to 5,000-piece festive rollouts." },
  { t: "Warmly Indian", d: "Local materials, artisan crafts, and a palette rooted in place." },
];

const TIMELINE = [
  { y: "2018", t: "The studio begins", d: "A small home studio, wrapping gifts for friends and their weddings." },
  { y: "2020", t: "First corporate briefs", d: "Word travels — brands ask for joining kits and festive sends." },
  { y: "2022", t: "Packaging line", d: "We open our own packaging line, sampling boxes to order." },
  { y: "2024", t: "Pan-India dispatch", d: "Managed dispatch launches across metros and tier-2 cities." },
  { y: "2026", t: "120+ brands", d: "A trusted gifting partner for teams, families, and founders." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sneha Wrapzz — A Considered Gifting Studio" },
      { name: "description", content: "Sneha Wrapzz is a considered gifting and packaging studio — handcrafting personalized gifts and corporate hampers from India, since 2018." },
      { property: "og:title", content: "About Sneha Wrapzz — A Considered Gifting Studio" },
      { property: "og:description", content: "Handcrafted personalized gifts and corporate hampers — a considered studio, since 2018." },
      { property: "og:url", content: "https://snehawrapzz.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://snehawrapzz.lovable.app/about" }],
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
        italic="handmade in India."
        description="Sneha Wrapzz began in 2018 as a home studio. Today, we're a trusted gifting and packaging partner for families and 120+ brands across India."
        image={craft}
        actions={<Link to="/clients" className="btn-outline">See our clients →</Link>}
      />

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="What we believe" title="Small values that" italic="show in every box." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div key={v.t} className="rounded-2xl border border-beige bg-cream p-6 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-charcoal">{v.t}</h3>
                <p className="mt-2 text-sm text-warm-gray leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="Our story" title="A short" italic="timeline." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-5">
            {TIMELINE.map((t) => (
              <Reveal key={t.y} className="rounded-2xl border border-beige bg-cream p-6 shadow-soft">
                <div className="font-display text-2xl font-semibold text-bronze">{t.y}</div>
                <div className="mt-2 font-medium text-charcoal">{t.t}</div>
                <p className="mt-2 text-sm text-warm-gray leading-relaxed">{t.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <SectionHeader align="center" eyebrow="Let's talk" title="Plan a gift" italic="with us." description="Whether it's a single keepsake or a 5,000-piece festive send — we'd love to hear about it." />
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary">Contact the studio →</Link>
            <Link to="/build-hamper" className="btn-outline">Build a hamper</Link>
          </div>
        </div>
      </section>
    </>
  );
}
