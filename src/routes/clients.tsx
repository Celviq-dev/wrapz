import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const CLIENTS = [
  "Serein & Co.", "Meridian Studio", "Northlight", "House of Aria", "Kaya Group",
  "Verdant Labs", "Halcyon", "Ivory & Oak", "Fable & Co.", "Marigold House",
  "Terra Studio", "Cadence", "Quill & Quire", "Sapient", "Auric", "Loom & Field",
];

const CASE_STUDIES = [
  { img: g1, brand: "House of Aria", scope: "Festive Hampers · 1,200 pcs", note: "A Diwali rollout for their leadership and top clients — brass diyas, hand-stitched linen, and a monogrammed card." },
  { img: g2, brand: "Northlight", scope: "Joining Kits · 300 pcs / quarter", note: "A warm first-day kit for new joiners — mug, notebook, tote, and a hand-signed welcome note from the founder." },
  { img: g3, brand: "Kaya Group", scope: "Leadership Gifts · 20 pcs", note: "Sheesham wood boxes, laser-etched initials, and a curated executive stationery set for the board." },
  { img: g4, brand: "Meridian Studio", scope: "Wedding Return Gifts · 450 pcs", note: "A consistent gifting language across mehendi, sangeet, and reception — silk pouches, gold foil, dried florals." },
];

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Case Studies — Sneha Wrapzz" },
      { name: "description", content: "Selected corporate case studies and gifting rollouts — Diwali hampers, joining kits, leadership gifts, and wedding return gifts for brands across India." },
      { property: "og:title", content: "Clients & Case Studies — Sneha Wrapzz" },
      { property: "og:description", content: "A selected view of the brands we've gifted for, and how we approached each rollout." },
      { property: "og:url", content: "https://snehawrapzz.lovable.app/clients" },
    ],
    links: [{ rel: "canonical", href: "https://snehawrapzz.lovable.app/clients" }],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <>
      <PageHero
        tone="cream"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Clients" }]}
        eyebrow="Trusted by 120+ brands"
        title="Clients &"
        italic="case studies."
        description="A selected view of the teams we've gifted for — how we approached each rollout, and what shipped."
      />

      <section className="py-20 md:py-24 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="In good company" title="Some of the" italic="brands we work with." />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {CLIENTS.map((c) => (
              <div key={c} className="rounded-xl border border-beige bg-cream px-5 py-6 text-center font-display text-lg text-charcoal/85">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="Case studies" title="Selected" italic="rollouts." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((c) => (
              <Reveal key={c.brand} className="card-lift rounded-3xl border border-beige bg-cream overflow-hidden shadow-soft">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={c.img} alt={c.brand} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-7">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-bronze">{c.scope}</div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-charcoal">{c.brand}</h3>
                  <p className="mt-3 text-warm-gray leading-relaxed">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-charcoal text-ivory text-center">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-champagne">— Ready?</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-[1.12]">
            Your brand,
            <br /><span className="italic text-champagne">warmly gifted.</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/bulk-orders" className="btn-terracotta">Request a quote →</Link>
            <Link to="/corporate" className="btn-outline !bg-transparent !text-ivory !border-ivory/30">Explore corporate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
