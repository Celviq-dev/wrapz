import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CatalogImage } from "@/components/site/CatalogImage";
import { absoluteUrl, coverPhoto } from "@/data/catalog";

// Short guides that lead into real, curated collections (no placeholder articles).
const GUIDES = [
  { to: "/occasion/$slug", params: { slug: "diwali" }, title: "A calm way to plan Diwali gifting", tag: "Festive", cover: "lotus-wax-diyas", excerpt: "Diyas, pooja sets and dry-fruit trays for family, teams and clients, and why briefing us 6–8 weeks ahead matters." },
  { to: "/category/$slug", params: { slug: "wedding-return-gifts" }, title: "Return gifts every guest will keep", tag: "Weddings", cover: "floral-jute-potli-return-gifts", excerpt: "Potlis, diya sets and tealight favors packed identically from mehendi to reception." },
  { to: "/occasion/$slug", params: { slug: "housewarming" }, title: "What to gift for a griha pravesh", tag: "Housewarming", cover: "shubh-labh-8-piece-presentation-set", excerpt: "Ganesh idols, Shubh-Labh plaques and a kalash of coins: auspicious pieces for a new address." },
  { to: "/category/$slug", params: { slug: "client-gifting" }, title: "Client gifts that don't feel corporate", tag: "Corporate", cover: "elephant-family-trio", excerpt: "Silver-finish décor and velvet-boxed sets that quietly deepen relationships." },
  { to: "/category/$slug", params: { slug: "gifts-for-couples" }, title: "Gifts made in pairs", tag: "Anniversaries", cover: "kissing-swans", excerpt: "Swans, Radha-Krishna and Shubh-Labh: why pairs make the most meaningful couple gifts." },
  { to: "/category/$slug", params: { slug: "sustainable-gifts" }, title: "Sustainable gifting, actually", tag: "Sustainable", cover: "sustainable-soiree-gift-hamper", excerpt: "Jute, cane and wood, and our Sustainable Soirée hamper for low-impact gifting." },
] as const;

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Gifting Guides — The Sneha’s Wrapzz Journal" },
      { name: "description", content: "Gifting guides from the Sneha’s Wrapzz studio: Diwali planning, wedding return gifts, griha pravesh gifts, client gifting and sustainable hampers." },
      { property: "og:title", content: "Gifting Guides — The Sneha’s Wrapzz Journal" },
      { property: "og:description", content: "Guides to considered gifting, from Diwali to weddings and corporate sends." },
      { property: "og:url", content: absoluteUrl("/journal") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/journal") }],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Journal" }]}
        eyebrow="The Journal"
        title="Gifting guides,"
        italic="from our studio."
        description="Short guides to the occasions we gift for most, each leading to the pieces we recommend."
      />

      <section className="pb-24 md:pb-32 bg-ivory">
        <div className="page-x">
          <SectionHeader title="Where to" italic="start." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {GUIDES.map((g) => {
              const photo = coverPhoto(g.cover);
              return (
                <Link
                  key={g.title}
                  to={g.to}
                  params={g.params}
                  className="group card-lift flex flex-col overflow-hidden rounded-3xl border border-beige bg-cream shadow-soft"
                >
                  <div className="aspect-[5/4] overflow-hidden bg-warm-white">
                    {photo && <CatalogImage photo={photo} alt="" sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="text-sm font-medium text-gold-deep">{g.tag} · Guide</div>
                    <h3 className="mt-3 font-display text-xl font-semibold text-charcoal leading-snug">{g.title}</h3>
                    <p className="mt-2 text-sm text-warm-gray leading-relaxed line-clamp-3">{g.excerpt}</p>
                    <span className="mt-auto pt-4 inline-flex link-underline text-xs font-medium text-olive w-fit">See the pieces →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
