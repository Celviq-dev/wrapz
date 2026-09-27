import { Link } from "@tanstack/react-router";

export function Breadcrumbs({
  items,
}: {
  items: Array<{ label: string; to?: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-warm-gray">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.to ? (
              <Link to={it.to as string} className="hover:text-bronze transition-colors">
                {it.label}
              </Link>
            ) : (
              <span className="text-charcoal">{it.label}</span>
            )}
            {i < items.length - 1 && <span className="text-beige">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
