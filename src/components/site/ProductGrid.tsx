import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/catalog";
import { getCategory } from "@/data/catalog";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

const GRID = "grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-12 lg:grid-cols-4";

/** Product grid with optional category filter chips. Server-renders every product. */
export function ProductGrid({
  products,
  filterable = false,
  emptyNote,
}: {
  products: Product[];
  filterable?: boolean;
  emptyNote?: string;
}) {
  const [active, setActive] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of products) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    return [...counts.entries()]
      .map(([slug, count]) => ({ slug, count, title: getCategory(slug)?.title ?? slug }))
      .sort((a, b) => b.count - a.count);
  }, [products]);
  const CHIP_LIMIT = 6;
  const visibleChips = showAll ? categories : categories.slice(0, CHIP_LIMIT);
  const shown = active === "all" ? products : products.filter((p) => p.category === active);

  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-surface px-6 py-12 text-center">
        <p className="font-display text-xl text-ink">Made to order</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
          {emptyNote ?? "Tell us what you have in mind and we'll share options from our studio."}
        </p>
        <Link to="/contact" className="btn-primary mt-6">Ask the studio</Link>
      </div>
    );
  }

  return (
    <>
      {filterable && categories.length > 1 && (
        <div role="group" aria-label="Filter by category" className="mb-10 flex flex-wrap gap-2">
          <Chip active={active === "all"} onClick={() => setActive("all")} label={`All · ${products.length}`} />
          {visibleChips.map((c) => (
            <Chip key={c.slug} active={active === c.slug} onClick={() => setActive(c.slug)} label={`${c.title} · ${c.count}`} />
          ))}
          {categories.length > CHIP_LIMIT && (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              {showAll ? "Fewer" : `+${categories.length - CHIP_LIMIT} more`}
            </button>
          )}
        </div>
      )}
      <div className={GRID}>
        {shown.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 4) * 60} variant="fade-up">
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

function Chip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex min-h-10 items-center rounded-full border px-4 text-sm font-medium tabular-nums transition-colors duration-150",
        active ? "border-ink bg-ink text-porcelain" : "border-line bg-surface text-ink hover:border-ink",
      )}
    >
      {label}
    </button>
  );
}

/** One row per category of a pillar: a preview of products and a link to the full list. */
export function CategoryShowcase({
  groups,
  limit = 8,
}: {
  groups: Array<{ category: { slug: string; title: string; description: string }; products: Product[] }>;
  limit?: number;
}) {
  return (
    <div className="space-y-20 md:space-y-24">
      {groups
        .filter((g) => g.products.length > 0)
        .map(({ category, products }) => (
          <section key={category.slug} aria-labelledby={`cat-${category.slug}`}>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
              <div className="max-w-2xl">
                <h2 id={`cat-${category.slug}`} className="font-display text-2xl font-medium text-ink md:text-3xl">
                  {category.title}
                  <span className="ml-3 align-middle font-sans text-sm font-normal text-ink-soft tabular-nums">{products.length} designs</span>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-[15px]">{category.description}</p>
              </div>
              {products.length > limit && (
                <Link to="/category/$slug" params={{ slug: category.slug }} className="tap-area inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-gold-deep">
                  View all {products.length}<span className="sr-only"> {category.title}</span> <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
                </Link>
              )}
            </div>
            <div className={GRID}>
              {products.slice(0, limit).map((p, i) => (
                <Reveal key={p.slug} delay={(i % 4) * 60} variant="fade-up">
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </section>
        ))}
    </div>
  );
}
