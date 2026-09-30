import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Photo } from "@/data/catalog";
import { CatalogImage } from "./CatalogImage";

export function CategoryCard({
  to,
  params,
  photo,
  eyebrow,
  title,
  description,
  count,
  sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw",
}: {
  to: string;
  params?: Record<string, string>;
  photo?: Photo;
  eyebrow?: string;
  title: string;
  description?: string;
  count?: number;
  sizes?: string;
}) {
  const meta = [eyebrow, count !== undefined ? `${count} designs` : null].filter(Boolean).join(" · ");
  return (
    <Link to={to as string} params={params as never} className="group flex h-full flex-col">
      {photo && (
        <div className="aspect-[5/4] overflow-hidden rounded-2xl bg-paper">
          <CatalogImage
            photo={photo}
            alt=""
            sizes={sizes}
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col pt-4">
        {meta && <p className="text-xs text-ink-soft tabular-nums">{meta}</p>}
        <h3 className="mt-1 font-display text-xl font-medium text-ink md:text-2xl">{title}</h3>
        {description && <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">{description}</p>}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-ink group-hover:text-gold-deep">
          Explore <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
        </span>
      </div>
    </Link>
  );
}
