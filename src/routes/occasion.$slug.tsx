import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { LeadForm } from "@/components/site/LeadForm";
import { getOccasion, PRODUCTS, OCCASIONS } from "@/data/catalog";

export const Route = createFileRoute("/occasion/$slug")({
  loader: ({ params }) => {
    const occ = getOccasion(params.slug);
    if (!occ) throw notFound();
    return { occ, products: PRODUCTS.slice(0, 8) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Occasion — Sneha Wrapzz" }, { name: "robots", content: "noindex" }] };
    const { occ } = loaderData;
    const url = `https://snehawrapzz.lovable.app/occasion/${params.slug}`;
    return {
      meta: [
        { title: `${occ.title} — Sneha Wrapzz` },
        { name: "description", content: occ.description },
        { property: "og:title", content: `${occ.title} — Sneha Wrapzz` },
        { property: "og:description", content: occ.description },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: OccasionPage,
});

function OccasionPage() {
  const { occ, products } = Route.useLoaderData();
  const other = OCCASIONS.filter((o) => o.slug !== occ.slug).slice(0, 5);
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Occasions", to: "/occasions" }, { label: occ.title }]}
        eyebrow="By Occasion"
        title={occ.title}
        description={occ.description}
        image={occ.image}
      />

      <section className="py-20 md:py-24 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="Curated for the day" title="Selected" italic="picks." />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {(products as import("@/data/catalog").Product[]).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {other.map((o) => (
              <Link key={o.slug} to="/occasion/$slug" params={{ slug: o.slug }} className="rounded-full border border-beige bg-cream px-4 py-2 text-xs font-medium text-charcoal hover:border-bronze transition">
                {o.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <LeadForm title={`Plan a gift for ${occ.title.toLowerCase()}`} subtitle="Tell us who it's for and we'll come back with curated options." variant="sage" />
        </div>
      </section>
    </>
  );
}
