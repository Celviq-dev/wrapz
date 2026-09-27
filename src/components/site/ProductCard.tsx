import type { Product } from "@/data/catalog";
import { Link } from "@tanstack/react-router";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group card-lift overflow-hidden rounded-2xl border border-beige bg-cream shadow-soft">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-charcoal leading-snug">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-warm-gray leading-relaxed line-clamp-2">
          {product.tagline}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-bronze">{product.price}</span>
          <Link
            to="/contact"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-olive link-underline"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
