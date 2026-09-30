import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { OccasionRail } from "@/components/site/OccasionRail";
import { Collections } from "@/components/site/Collections";
import { ProductRail } from "@/components/site/ProductRail";
import { FestiveBand } from "@/components/site/FestiveBand";
import { Corporate } from "@/components/site/Corporate";
import { HamperStudio } from "@/components/site/HamperStudio";
import { Weddings } from "@/components/site/Weddings";
import { LookbookTeaser } from "@/components/site/LookbookTeaser";
import { Reviews } from "@/components/site/Reviews";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { pick } from "@/data/catalog";
import { SITE } from "@/data/site";

const HOME_FAQS = [
  {
    q: "How long does customization take?",
    a: "Most personalized orders are ready within 3–5 days. Wedding and corporate volumes are planned 2–4 weeks in advance. Rush requests are welcome, just tell us the date.",
  },
  {
    q: "Do you ship across India?",
    a: "Yes. We pack every order in protective outer boxes in our Hyderabad studio and ship pan-India with tracked courier.",
  },
  {
    q: "How is pricing worked out?",
    a: "Every piece is priced on request because the final price depends on size, quantity, packaging and personalization. Share your budget per gift and we'll send options that fit it.",
  },
  {
    q: "Can I include my own items in a hamper?",
    a: "Absolutely. Send us a note, a book or a family recipe and we'll wrap it into the hamper as if it were always meant to be there.",
  },
  {
    q: "Do you take bulk and corporate orders?",
    a: "Yes. We regularly pack identical favors and branded hampers in bulk for weddings, events and companies, with your cards, tags and branding.",
  },
];

// One statement piece from each collection; none repeats a photo used elsewhere on this page.
const SIGNATURE = pick([
  "ganesh-idol-in-acrylic-case",
  "hand-painted-wooden-box-set",
  "crystal-tree-three-bowl-stand",
  "elephant-candle-holders-with-glass-globes",
  "shubh-labh-8-piece-presentation-set",
  "pichwai-mirror-top-round-tray",
  "hand-poured-scalloped-wax-candles",
  "ganesh-lakshmi-and-shubh-labh-velvet-set",
  "kissing-swans",
  "peacock-carriage-laddu-box",
]);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sneha’s Wrapzz — Silver Gifts, Hampers & Festive Gifting, Hyderabad" },
      { name: "description", content: "Silver-finish idols and décor, festive hampers, diyas, pooja sets and corporate gifting, curated and hand-wrapped in Hyderabad. Delivered pan-India." },
      { property: "og:title", content: "Sneha’s Wrapzz — Silver Gifts, Hampers & Festive Gifting" },
      { property: "og:description", content: `Six collections, ${SITE.customers.toLocaleString("en-IN")}+ happy customers. Hand-wrapped in Hyderabad, delivered pan-India.` },
      { property: "og:url", content: `${SITE.url}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/` }],
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
  return (
    <>
      <Hero />
      <TrustBar />
      <OccasionRail />
      <Collections />
      <ProductRail
        id="signature"
        title="Pieces people ask about first."
        products={SIGNATURE}
        className="bg-paper py-20 md:py-28"
        action={
          <Link to="/silver" className="tap-area inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-gold-deep">
            Silver collection <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
          </Link>
        }
      />
      <FestiveBand />
      <Corporate />
      <HamperStudio />
      <Weddings />
      <LookbookTeaser />
      <Reviews />
      <About />
      <FAQ items={HOME_FAQS} />
      <Contact />
    </>
  );
}
