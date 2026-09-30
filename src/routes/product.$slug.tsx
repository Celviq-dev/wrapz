import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CatalogImage } from "@/components/site/CatalogImage";
import { LeadForm } from "@/components/site/LeadForm";
import { ProductRail } from "@/components/site/ProductRail";
import { WhatsAppIcon } from "@/components/site/ProductCard";
import {
  OCCASIONS,
  absoluteUrl,
  categoryParent,
  getCategory,
  getPillar,
  getProduct,
  photoUrl,
  relatedProducts,
} from "@/data/catalog";
import { SITE, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Product — Sneha’s Wrapzz" }, { name: "robots", content: "noindex" }] };
    const { product } = loaderData;
    const category = getCategory(product.category);
    const pillar = getPillar(product.pillar);
    const url = absoluteUrl(`/product/${params.slug}`);
    const description = `${product.name}: ${product.spec}. ${category?.description ?? pillar.description} Price on request, gift-wrapped and delivered pan-India.`.slice(0, 300);
    const image = absoluteUrl(photoUrl(product.photos[0], 1600));
    return {
      meta: [
        { title: `${product.name} — ${category?.title ?? pillar.title} | Sneha’s Wrapzz` },
        { name: "description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:title", content: `${product.name} | Sneha’s Wrapzz` },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: pillar.title, item: absoluteUrl(pillar.to) },
              ...(category ? [{ "@type": "ListItem", position: 3, name: category.title, item: absoluteUrl(`/category/${category.slug}`) }] : []),
              { "@type": "ListItem", position: category ? 4 : 3, name: product.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ProductPage,
});

const GOOD_TO_KNOW = [
  "Gift-wrapped by hand in our Hyderabad studio",
  "Add a message card, name tag or your branding",
  "Single gifts, return gifts and bulk quantities",
  "Delivered pan-India with tracked courier",
];

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const category = getCategory(product.category);
  const pillar = getPillar(product.pillar);
  const parent = category ? categoryParent(category) : { to: pillar.to, label: pillar.short };
  const occasions = OCCASIONS.filter((o) => product.collections.includes(o.slug)).slice(0, 6);
  const related = relatedProducts(product, 8);
  const photo = product.photos[active] ?? product.photos[0];
  const enquiry = whatsappLink(
    `Hi ${SITE.name}, I'd like to know the price and availability of the ${product.name} (${absoluteUrl(`/product/${product.slug}`)}).`,
  );

  return (
    <>
      <section className="bg-porcelain pb-16 pt-24 md:pb-24 md:pt-28">
        <div className="page-x">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: parent.label, to: parent.to },
              ...(category ? [{ label: category.title, to: `/category/${category.slug}` }] : []),
              { label: product.name },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl bg-paper">
                <CatalogImage
                  key={photo.path}
                  photo={photo}
                  priority={active === 0}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="mx-auto max-h-[78dvh] w-full object-contain animate-in fade-in-0 duration-200"
                />
              </div>
              {product.photos.length > 1 && (
                <div role="group" aria-label="Product photos" className="mt-4 flex flex-wrap gap-3">
                  {product.photos.map((p, i) => (
                    <button
                      key={p.path}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Show photo ${i + 1} of ${product.photos.length}`}
                      aria-pressed={i === active}
                      className={`size-20 overflow-hidden rounded-xl bg-paper ring-offset-2 ring-offset-porcelain transition duration-150 md:size-24 ${
                        i === active ? "ring-2 ring-ink" : "opacity-75 hover:opacity-100"
                      }`}
                    >
                      <CatalogImage photo={p} alt="" sizes="96px" className="size-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
              {category && (
                <Link to="/category/$slug" params={{ slug: category.slug }} className="tap-area text-sm text-ink-soft transition-colors duration-150 hover:text-ink">
                  {category.title}
                </Link>
              )}
              <h1 className="mt-2 font-display text-4xl font-medium leading-[1.1] text-ink md:text-5xl">{product.name}</h1>
              <p className="mt-4 text-lg text-ink-soft">{product.spec}</p>

              <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="font-display text-2xl font-medium text-ink">Price on request</span>
                  <span className="text-[13px] text-ink-soft">Reply within one working day</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Pricing depends on size, quantity and personalization. Share what you need and we&apos;ll quote with delivery timelines.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a href={enquiry} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                    <WhatsAppIcon /> Ask on WhatsApp
                  </a>
                  <a href={SITE.phoneHref} className="btn-outline tabular-nums">
                    Call {SITE.phoneDisplay}
                  </a>
                </div>
                <a href="#enquire" className="tap-area mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-gold-deep">
                  Or send a detailed brief <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
                </a>
              </div>

              <dl className="mt-8 divide-y divide-line border-y border-line text-sm">
                <div className="flex justify-between gap-6 py-3">
                  <dt className="text-ink-soft">Collection</dt>
                  <dd>
                    <Link to={pillar.to} className="tap-area font-medium text-ink hover:text-gold-deep">
                      {pillar.title}
                    </Link>
                  </dd>
                </div>
                {category && (
                  <div className="flex justify-between gap-6 py-3">
                    <dt className="text-ink-soft">Category</dt>
                    <dd>
                      <Link to="/category/$slug" params={{ slug: category.slug }} className="tap-area font-medium text-ink hover:text-gold-deep">
                        {category.title}
                      </Link>
                    </dd>
                  </div>
                )}
                <div className="flex justify-between gap-6 py-3">
                  <dt className="text-ink-soft">Finish &amp; format</dt>
                  <dd className="text-right font-medium text-ink">{product.spec}</dd>
                </div>
              </dl>

              {occasions.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-sm font-semibold text-ink">A thoughtful gift for</h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {occasions.map((o) => (
                      <li key={o.slug}>
                        <Link
                          to="/occasion/$slug"
                          params={{ slug: o.slug }}
                          className="inline-flex min-h-10 items-center rounded-full border border-line bg-surface px-4 text-sm text-ink transition-colors duration-150 hover:border-ink"
                        >
                          {o.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ul className="mt-8 space-y-2.5 text-sm text-ink">
                {GOOD_TO_KNOW.map((g) => (
                  <li key={g} className="flex gap-3">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-gold-deep" strokeWidth={2} />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <ProductRail
          id="related"
          title="You may also like"
          products={related}
          className="bg-paper py-20 md:py-24"
          action={
            category && (
              <Link to="/category/$slug" params={{ slug: category.slug }} className="tap-area inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-gold-deep">
                More {category.title.toLowerCase()} <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
              </Link>
            )
          }
        />
      )}

      <section id="enquire" className="scroll-mt-24 bg-porcelain py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <LeadForm title={`Enquire about the ${product.name}`} subtitle="Quantity, timeline and any personalization." purpose={product.name} />
        </div>
      </section>
    </>
  );
}
