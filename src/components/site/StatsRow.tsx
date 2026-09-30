import { PILLARS, PRODUCTS } from "@/data/catalog";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

// Real numbers only: customers and reviews from the brand's catalogs, designs from this catalog.
const DEFAULT_STATS = [
  { end: SITE.customers, suffix: "+", label: "Happy customers" },
  { end: SITE.reviews, suffix: "+", label: "Google reviews" },
  { end: PRODUCTS.length, suffix: "", label: "Designs in the catalog" },
  { end: PILLARS.length, suffix: "", label: "Collections" },
] as const;

export function StatsRow({
  stats = DEFAULT_STATS,
  variant = "light",
}: {
  stats?: ReadonlyArray<{ end: number; suffix: string; label: string }>;
  variant?: "light" | "dark" | "burgundy";
}) {
  const dark = variant !== "light";
  const list = (
    <dl
      className={cn(
        "grid grid-cols-2 gap-y-8 border-y py-8 md:grid-cols-4 md:divide-x md:py-10",
        dark ? "border-porcelain/15 md:divide-porcelain/15" : "border-line md:divide-line",
      )}
    >
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col-reverse md:px-8 md:first:pl-0">
          <dt className={cn("mt-1 text-sm", dark ? "text-porcelain/65" : "text-ink-soft")}>{s.label}</dt>
          <dd className={cn("font-display text-4xl font-medium tabular-nums md:text-5xl", dark ? "text-porcelain" : "text-ink")}>
            {s.end.toLocaleString("en-IN")}
            {s.suffix}
          </dd>
        </div>
      ))}
    </dl>
  );

  if (variant === "burgundy") {
    return (
      <section className="on-dark bg-plum-900 py-16 md:py-20">
        <div className="page-x">{list}</div>
      </section>
    );
  }
  return list;
}
