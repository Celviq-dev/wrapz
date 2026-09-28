import { Link } from "@tanstack/react-router";

export function Breadcrumbs({ items }: { items: Array<{ label: string; to?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-warm-gray">
      <ol className="flex flex-wrap items-center gap-x-2">
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-x-2">
            {it.to ? (
              // min-h keeps the link a 44px tap target on a phone without
              // changing where the text sits.
              <Link
                to={it.to as string}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center px-1 transition-colors hover:text-bronze"
              >
                {it.label}
              </Link>
            ) : (
              <span className="inline-flex min-h-[44px] items-center text-charcoal">
                {it.label}
              </span>
            )}
            {i < items.length - 1 ? (
              // Was text-beige at 1.45:1 against the page — decorative, but a
              // separator still has to be legible. bronze measures well past AA
              // and the slash is hidden from screen readers either way.
              <span className="text-bronze" aria-hidden="true">
                /
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
