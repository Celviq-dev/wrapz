import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProductGrid } from "@/components/site/ProductGrid";
import { SectionHeader } from "@/components/site/SectionHeader";
import { LeadForm } from "@/components/site/LeadForm";
import { OCCASIONS, absoluteUrl, getOccasion, occasionPhoto, photoUrl, productsForOccasion, type Product } from "@/data/catalog";

export const Route = createFileRoute("/occasion/$slug")({
  loader: ({ params }) => {
    const occ = getOccasion(params.slug);
    if (!occ) throw notFound();
    return { occ, products: productsForOccasion(params.slug) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Occasion — Sneha’s Wrapzz" }, { name: "robots", content: "noindex" }] };
    const { occ } = loaderData;
    const url = absoluteUrl(`/occasion/${params.slug}`);
    const photo = occasionPhoto(occ);
    return {
      meta: [
        { title: `${occ.title} — Sneha’s Wrapzz` },
        { name: "description", content: occ.description },
        { property: "og:title", content: `${occ.title} — Sneha’s Wrapzz` },
        { property: "og:description", content: occ.description },
        { property: "og:url", content: url },
        ...(photo ? [{ property: "og:image", content: absoluteUrl(photoUrl(photo, 1600)) }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: OccasionPage,
});

function OccasionPage() {
  const { occ, products } = Route.useLoaderData();
  const other = OCCASIONS.filter((o) => o.slug !== occ.slug);
  const list = products as Product[];
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Occasions", to: "/occasions" }, { label: occ.title }]}
        eyebrow={`By Occasion · ${list.length} designs`}
        title={occ.title}
        description={occ.description}
        photo={occasionPhoto(occ)}
        actions={<a href="#pieces" className="btn-primary">See the pieces</a>}
      />

      <section id="pieces" className="py-20 md:py-24 bg-warm-white scroll-mt-20">
        <div className="page-x">
          <SectionHeader title="Selected" italic="pieces." />
          <div className="mt-12">
            <ProductGrid products={list} filterable />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ivory">
        <div className="page-x">
          <h2 className="text-center font-display text-2xl text-charcoal">More occasions</h2>
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
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
          <LeadForm title={`Plan a gift for ${occ.title.toLowerCase()}`} subtitle="Tell us who it's for and we'll come back with curated options." purpose={occ.title} />
        </div>
      </section>
    </>
  );
}
