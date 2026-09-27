import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import p from "@/assets/collection-personal.jpg";
import w from "@/assets/collection-wedding.jpg";

const POSTS = [
  { slug: "art-of-wrapping", title: "The quiet art of wrapping", read: "5 min read", tag: "Craft", img: g1, excerpt: "Why the way a gift arrives matters as much as what's inside." },
  { slug: "diwali-planning", title: "A calm way to plan Diwali gifting", read: "6 min read", tag: "Festive", img: g2, excerpt: "Timelines, budgeting, and the case for briefing your gifting studio in August." },
  { slug: "onboarding-kits", title: "First-day kits that don't feel corporate", read: "4 min read", tag: "Corporate", img: g3, excerpt: "Small design choices that turn a joining kit into a welcome." },
  { slug: "sustainable-choices", title: "Sustainable gifting, actually", read: "7 min read", tag: "Sustainable", img: g4, excerpt: "Beyond the buzzwords — the material choices that matter." },
  { slug: "wedding-language", title: "Building a gifting language for weddings", read: "8 min read", tag: "Weddings", img: w, excerpt: "How to keep gifting consistent from mehendi to reception." },
  { slug: "personalization-101", title: "Personalization, without cliché", read: "5 min read", tag: "Personal", img: p, excerpt: "Monograms, colour, texture — how to make a gift feel truly for someone." },
];

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "The Gifting Journal — Sneha Wrapzz" },
      { name: "description", content: "Notes on considered gifting, packaging, festive planning, and corporate gifting rituals — from the Sneha Wrapzz studio." },
      { property: "og:title", content: "The Gifting Journal — Sneha Wrapzz" },
      { property: "og:description", content: "Field notes on considered gifting and packaging craft." },
      { property: "og:url", content: "https://snehawrapzz.lovable.app/journal" },
    ],
    links: [{ rel: "canonical", href: "https://snehawrapzz.lovable.app/journal" }],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Journal" }]}
        eyebrow="The Journal"
        title="Field notes on"
        italic="the craft of gifting."
        description="Short essays on considered gifting, festive planning, packaging craft, and the rituals of receiving."
      />

      <section className="pb-24 md:pb-32 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="Recent" title="From the" italic="studio." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                to="/contact"
                className="group card-lift block overflow-hidden rounded-3xl border border-beige bg-cream shadow-soft"
              >
                <div className="aspect-[5/4] overflow-hidden">
                  <img src={post.img} alt={post.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-bronze">
                    <span>{post.tag}</span>
                    <span className="text-beige">·</span>
                    <span className="text-warm-gray">{post.read}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-charcoal leading-snug">{post.title}</h3>
                  <p className="mt-2 text-sm text-warm-gray leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <span className="mt-4 inline-flex link-underline text-xs font-medium text-olive">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
