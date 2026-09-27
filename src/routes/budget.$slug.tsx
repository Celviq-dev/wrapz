import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { LeadForm } from "@/components/site/LeadForm";
import { getBudget, PRODUCTS, BUDGETS } from "@/data/catalog";

export const Route = createFileRoute("/budget/$slug")({
  loader: ({ params }) => {
    const b = getBudget(params.slug);
    if (!b) throw notFound();
    return { b, products: PRODUCTS.slice(0, 8) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Budget — Sneha Wrapzz" }, { name: "robots", content: "noindex" }] };
    const { b } = loaderData;
    const url = `https://snehawrapzz.lovable.app/budget/${params.slug}`;
    return {
      meta: [
        { title: `${b.label} — Gifting by Budget | Sneha Wrapzz` },
        { name: "description", content: b.description },
        { property: "og:title", content: `${b.label} — Gifting by Budget` },
        { property: "og:description", content: b.description },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: BudgetPage,
});

function BudgetPage() {
  const { b, products } = Route.useLoaderData();
  const others = BUDGETS.filter((x) => x.slug !== b.slug);
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "By Budget" }, { label: b.label }]}
        eyebrow="Shop by Budget"
        title={b.label}
        italic="gifting."
        description={b.description}
      />

      <section className="py-20 md:py-24 bg-warm-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeader eyebrow="Picks in this range" title="Curated" italic="options." />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {(products as import("@/data/catalog").Product[]).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-2 justify-center">
            {others.map((o) => (
              <Link key={o.slug} to="/budget/$slug" params={{ slug: o.slug }} className="rounded-full border border-beige bg-cream px-4 py-2 text-xs font-medium text-charcoal hover:border-bronze transition">
                {o.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <LeadForm title="Not sure which to pick?" subtitle="Share a couple of details — we'll curate three options in your range." variant="sage" />
        </div>
      </section>
    </>
  );
}
