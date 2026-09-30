import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProductGrid } from "@/components/site/ProductGrid";
import { SectionHeader } from "@/components/site/SectionHeader";
import { LeadForm } from "@/components/site/LeadForm";
import { BUDGETS, absoluteUrl, getBudget, productsForBudget, type Product } from "@/data/catalog";

export const Route = createFileRoute("/budget/$slug")({
  loader: ({ params }) => {
    const b = getBudget(params.slug);
    if (!b) throw notFound();
    return { b, products: productsForBudget(params.slug) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Budget — Sneha’s Wrapzz" }, { name: "robots", content: "noindex" }] };
    const { b } = loaderData;
    const url = absoluteUrl(`/budget/${params.slug}`);
    return {
      meta: [
        { title: `Gifts ${b.label} — Gifting by Budget | Sneha’s Wrapzz` },
        { name: "description", content: `${b.description} Price on request, curated to your budget per gift.` },
        { property: "og:title", content: `Gifts ${b.label} — Gifting by Budget` },
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
        <div className="page-x">
          <SectionHeader
            title="Curated"
            italic="options."
            description="Indicative only: final pricing depends on size, quantity and personalization. Tell us your budget per gift and we'll confirm options that fit."
          />
          <div className="mt-12">
            <ProductGrid products={products as Product[]} filterable />
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
          <LeadForm title="Not sure which to pick?" subtitle="Share a couple of details and we'll curate three options in your range." purpose={`Gifts ${b.label}`} />
        </div>
      </section>
    </>
  );
}
