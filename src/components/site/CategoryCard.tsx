import { Link } from "@tanstack/react-router";

export function CategoryCard({
  to,
  params,
  image,
  eyebrow,
  title,
  description,
}: {
  to: string;
  params?: Record<string, string>;
  image?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Link
      to={to as string}
      params={params as never}
      className="group card-lift block overflow-hidden rounded-3xl border border-beige bg-cream shadow-soft"
    >
      {image && (
        <div className="aspect-[5/4] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 md:p-7">
        {eyebrow && (
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-bronze">
            {eyebrow}
          </span>
        )}
        <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold text-charcoal">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-warm-gray leading-relaxed line-clamp-2">
            {description}
          </p>
        )}
        <span className="mt-4 inline-flex link-underline text-xs font-medium text-olive">
          Explore →
        </span>
      </div>
    </Link>
  );
}
