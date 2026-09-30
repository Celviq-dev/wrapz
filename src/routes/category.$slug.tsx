import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProductGrid } from "@/components/site/ProductGrid";
import { SectionHeader } from "@/components/site/SectionHeader";
import { LeadForm } from "@/components/site/LeadForm";
import { CatalogImage } from "@/components/site/CatalogImage";
import {
  CATEGORIES,
  absoluteUrl,
  categoryParent,
  categoryPhoto,
  getCategory,
  photoUrl,
  productsForCategory,
  type Product,
} from "@/data/catalog";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const cat = getCategory(params.slug);
    if (!cat) throw notFound();
    return { cat, products: productsForCategory(params.slug) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Category — Sneha’s Wrapzz" }, { name: "robots", content: "noindex" }] };
    const { cat, products } = loaderData;
    const url = absoluteUrl(`/category/${params.slug}`);
    const photo = categoryPhoto(cat);
    return {
      meta: [
        { title: `${cat.title} — Sneha’s Wrapzz` },
        { name: "description", content: cat.description },
        { property: "og:title", content: `${cat.title} — Sneha’s Wrapzz` },
        { property: "og:description", content: cat.description },
        { property: "og:url", content: url },
        ...(photo ? [{ property: "og:image", content: absoluteUrl(photoUrl(photo, 1600)) }] : []),
        // Made-to-order packaging pages have no dedicated products; keep them out of the index.
        ...(products.length === 0 ? [{ name: "robots", content: "noindex, follow" }] : []),
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
            isPartOf: { "@id": absoluteUrl("/#website") },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: products.length,
              itemListElement: (products as Product[]).map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(`/product/${p.slug}`),
                name: p.name,
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
  const parent = categoryParent(cat);
  const related = CATEGORIES.filter((c) => c.group === cat.group && c.slug !== cat.slug && !c.hidden).slice(0, 4);
  const list = products as Product[];

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: parent.label, to: parent.to }, { label: cat.title }]}
        eyebrow={list.length ? `${cat.eyebrow} · ${list.length} designs` : cat.eyebrow}
        title={cat.title}
        description={cat.description}
        photo={categoryPhoto(cat)}
        actions={
          <>
            {list.length > 0 && <a href="#pieces" className="btn-primary">See the pieces</a>}
            <a href="#enquire" className="btn-outline">Enquire</a>
          </>
        }
      />

      <section id="pieces" className="py-20 md:py-24 bg-warm-white scroll-mt-20">
        <div className="page-x">
          <SectionHeader
            variant="editorial-split"
            title={list.length ? `${list.length} designs,` : "Made to order,"}
            italic={list.length ? "price on request." : "in your palette."}
          />
          <div className="mt-12">
            <ProductGrid
              products={list}
              filterable={cat.kind === "curated"}
              emptyNote="We make these to order for your hamper or brand. Share quantities and sizing and we'll send options."
            />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 md:py-24 bg-ivory">
          <div className="page-x">
            <SectionHeader variant="minimal" title="Related categories." />
            <div className="mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
              {related.map((c) => {
                const photo = categoryPhoto(c);
                return (
                  <Link
                    key={c.slug}
                    to="/category/$slug"
                    params={{ slug: c.slug }}
                    className="group snap-center shrink-0 w-[70vw] md:w-auto card-lift rounded-2xl border border-beige bg-cream p-5 shadow-soft"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-xl bg-warm-white">
                      {photo && (
                        <CatalogImage
                          photo={photo}
                          alt=""
                          sizes="(min-width: 768px) 22vw, 70vw"
                          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="mt-4 font-display text-lg font-semibold text-charcoal">{c.title}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section id="enquire" className="py-20 md:py-28 bg-warm-white scroll-mt-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <LeadForm title={`Enquire about ${cat.title.toLowerCase()}`} subtitle="Share quantity, timeline and any personalization." purpose={cat.title} />
        </div>
      </section>
    </>
  );
}
