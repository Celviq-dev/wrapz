import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { LeadForm } from "@/components/site/LeadForm";
import { getCategory, productsForCategory, CATEGORIES } from "@/data/catalog";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const cat = getCategory(params.slug);
    if (!cat) throw notFound();
    return { cat, products: productsForCategory(params.slug) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Category — Sneha Wrapzz" }, { name: "robots", content: "noindex" }] };
    const { cat } = loaderData;
    const url = `https://snehawrapzz.lovable.app/category/${params.slug}`;
    return {
      meta: [
        { title: `${cat.title} — Sneha Wrapzz` },
        { name: "description", content: cat.description },
        { property: "og:title", content: `${cat.title} — Sneha Wrapzz` },
        { property: "og:description", content: cat.description },
        { property: "og:url", content: url },
        { property: "og:image", content: `https://snehawrapzz.lovable.app${cat.image}` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: cat.title,
            description: cat.description,
            url,
            isPartOf: { "@id": "https://snehawrapzz.lovable.app/#website" },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: loaderData.products.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "Product",
                  name: p.name,
                  description: p.tagline,
                  image: `https://snehawrapzz.lovable.app${p.image}`,
                  brand: { "@type": "Brand", name: "Sneha Wrapzz" },
                },
              })),
            },
          }),
        },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { cat, products } = Route.useLoaderData();
  const parentTo = cat.group === "personalized" ? "/personalized" : cat.group === "corporate" ? "/corporate" : cat.group === "packaging" ? "/packaging" : "/festive";
  const parentLabel = cat.group.charAt(0).toUpperCase() + cat.group.slice(1);
  const related = CATEGORIES.filter((c) => c.group === cat.group && c.slug !== cat.slug).slice(0, 4);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: parentLabel, to: parentTo }, { label: cat.title }]}
        eyebrow={cat.eyebrow}
        title={cat.title}
        description={cat.description}
        image={cat.image}
        actions={<Link to="/contact" className="btn-primary">Enquire →</Link>}
      />

      <section className="py-20 md:py-24 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="Signature picks" title="Curated" italic="options." />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {(products as import("@/data/catalog").Product[]).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 md:py-24 bg-ivory">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <SectionHeader eyebrow="You may also like" title="Related" italic="categories." />
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((c) => (
                <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }} className="group card-lift rounded-2xl border border-beige bg-cream p-5 shadow-soft">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold text-charcoal">{c.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <LeadForm title={`Enquire about ${cat.title.toLowerCase()}`} subtitle="Share quantity, timeline, and any personalization." variant="sage" />
        </div>
      </section>
    </>
  );
}
