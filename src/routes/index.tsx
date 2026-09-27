import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Collections } from "@/components/site/Collections";
import { Process } from "@/components/site/Process";
import { Weddings } from "@/components/site/Weddings";
import { Corporate } from "@/components/site/Corporate";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CategoryCard } from "@/components/site/CategoryCard";
import { Reveal } from "@/components/site/Reveal";
import { StatsRow } from "@/components/site/StatsRow";
import {
  CATEGORIES,
  OCCASIONS,
  BUDGETS,
  GIFTING_INTENTS,
  PACKAGING_STRIP,
} from "@/data/catalog";

const HOME_FAQS = [
  {
    q: "How long does customization take?",
    a: "Most personalized orders are ready within 3–5 days. Wedding and corporate volumes are planned 2–4 weeks in advance. Rush requests are welcome — just tell us the date.",
  },
  {
    q: "Do you ship across India?",
    a: "Yes. We ship pan-India with tracked courier, packed inside protective outer boxes so the wrapping arrives exactly as it left our studio.",
  },
  {
    q: "Can I include my own items in a hamper?",
    a: "Absolutely. Send us a note, a bottle, a book, a family recipe — we wrap it into the hamper as if it were always meant to be there.",
  },
  {
    q: "Do you offer corporate discounts?",
    a: "Volume pricing begins at 25 units. We'll build a proposal within 48 hours of a quick brief — nothing generic, nothing bloated.",
  },
  {
    q: "What's your returns policy?",
    a: "Personalized gifts are non-returnable, but if anything arrives less than perfect, we replace it. No forms, no fine print.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sneha Wrapzz — Luxury & Corporate Gifting Studio" },
      { name: "description", content: "Bespoke personalized gifts, corporate hampers, and premium packaging, crafted in India. Build a hamper or request a bulk quote." },
      { property: "og:title", content: "Sneha Wrapzz — Luxury & Corporate Gifting Studio" },
      { property: "og:description", content: "Bespoke gifting, corporate hampers, and premium packaging — crafted for weddings, festivals, and brands." },
      { property: "og:url", content: "https://snehawrapzz.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://snehawrapzz.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const personalized = CATEGORIES.filter((c) => c.group === "personalized").slice(0, 6);
  const packaging = CATEGORIES.filter((c) => c.group === "packaging").slice(0, 4);

  return (
    <>
      <Hero />
      <TrustBar />

      {/* Signature Categories */}
      <section className="py-20 md:py-28 bg-warm-white paper-grain">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="Signature Categories"
              title="Gifting for every"
              italic="moment that matters"
              description="A curated studio of personalized gifts, festive hampers, and executive presentation — each piece finished by hand."
            />
            <Link to="/personalized" className="link-underline text-sm font-medium text-olive">
              Browse all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {personalized.map((c) => (
              <CategoryCard
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                image={c.image}
                eyebrow={c.eyebrow}
                title={c.title}
                description={c.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Occasion Explorer */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader
            align="center"
            eyebrow="By Occasion"
            title="What are you celebrating"
            italic="today?"
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6">
            {OCCASIONS.slice(0, 6).map((o) => (
              <CategoryCard
                key={o.slug}
                to="/occasion/$slug"
                params={{ slug: o.slug }}
                image={o.image}
                eyebrow="Occasion"
                title={o.title}
                description={o.description}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/occasions" className="btn-outline">See every occasion →</Link>
          </div>
        </div>
      </section>

      {/* Corporate Intents */}
      <section className="py-20 md:py-28 bg-charcoal text-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-champagne">— For Businesses</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-[1.12]">
                Corporate gifting that
                <br /><span className="italic text-champagne">feels considered.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-ivory/75 text-[15px] md:text-lg leading-[1.75]">
                Joining kits, festive hampers, client appreciations and executive
                gifts — designed, branded, and delivered pan-India. From 20
                pieces to 20,000.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/corporate" className="btn-terracotta">Explore corporate →</Link>
                <Link to="/bulk-orders" className="btn-outline !bg-transparent !text-ivory !border-ivory/30">Bulk enquiry</Link>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GIFTING_INTENTS.slice(0, 8).map((it) => (
              <Link
                key={it.slug}
                to={"type" in it && it.type === "occasion" ? "/occasion/$slug" : "/category/$slug"}
                params={{ slug: it.slug }}
                className="group rounded-2xl border border-ivory/15 bg-ivory/[0.04] p-6 hover:bg-ivory/[0.07] transition"
              >
                <h3 className="font-display text-lg font-semibold text-ivory">{it.title}</h3>
                <p className="mt-2 text-sm text-ivory/70 leading-relaxed">{it.body}</p>
                <span className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-champagne">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Build a Hamper CTA */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="rounded-3xl bg-cream border border-beige shadow-soft p-8 md:p-14 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">— Bespoke</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-charcoal leading-[1.12]">
                Build your own
                <br /><span className="italic text-bronze">hamper, your way.</span>
              </h2>
              <p className="mt-5 text-warm-gray text-[15px] md:text-lg leading-[1.7] max-w-lg">
                A seven-step guided journey — occasion, recipient, budget,
                theme, packaging, personalization, quantity. We come back
                within a working day with curated concepts.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/build-hamper" className="btn-primary">Start building →</Link>
                <Link to="/contact" className="btn-outline">Or brief us directly</Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-3">
                {["Occasion", "Recipient", "Budget", "Theme", "Packaging", "Personalization"].map((s, i) => (
                  <div
                    key={s}
                    className="rounded-xl border border-beige bg-ivory px-4 py-4 text-sm"
                  >
                    <span className="text-[11px] uppercase tracking-[0.18em] text-bronze">Step {i + 1}</span>
                    <div className="mt-1 font-medium text-charcoal">{s}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Packaging strip */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHeader
              eyebrow="Packaging"
              title="Boxes, bags, and finishing"
              italic="crafted to your palette."
            />
            <Link to="/packaging" className="link-underline text-sm font-medium text-olive">
              All packaging →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {packaging.map((c) => (
              <CategoryCard
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                image={c.image}
                eyebrow={c.eyebrow}
                title={c.title}
                description={c.description}
              />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {PACKAGING_STRIP.map((p) => (
              <Link
                key={p.slug}
                to="/category/$slug"
                params={{ slug: p.slug }}
                className="rounded-full border border-beige bg-cream px-4 py-2 text-xs font-medium text-charcoal hover:border-bronze transition"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Budget explorer */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader
            align="center"
            eyebrow="Shop by Budget"
            title="A gift for every"
            italic="thoughtful budget."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BUDGETS.map((b) => (
              <Link
                key={b.slug}
                to="/budget/$slug"
                params={{ slug: b.slug }}
                className="group card-lift rounded-2xl border border-beige bg-cream p-6 shadow-soft"
              >
                <div className="text-[11px] uppercase tracking-[0.18em] text-bronze">Budget</div>
                <div className="mt-2 font-display text-lg font-semibold text-charcoal">{b.label}</div>
                <p className="mt-2 text-xs text-warm-gray leading-relaxed line-clamp-3">{b.description}</p>
                <span className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-olive">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Weddings />
      <Corporate />
      <Gallery />

      {/* Stats */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <StatsRow />
        </div>
      </section>

      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
