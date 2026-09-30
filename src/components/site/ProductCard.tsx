import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/catalog";
import { getCategory } from "@/data/catalog";
import { SITE, whatsappLink } from "@/data/site";
import { CatalogImage } from "./CatalogImage";

export function ProductCard({ product, sizes }: { product: Product; sizes?: string }) {
  const photo = product.photos[0];
  const category = getCategory(product.category);

  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-paper">
        <CatalogImage
          photo={photo}
          sizes={sizes}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {product.photos.length > 1 && (
          <span className="absolute left-3 top-3 rounded-full bg-porcelain/90 px-2.5 py-1 text-[11px] font-medium text-ink tabular-nums">
            {product.photos.length} photos
          </span>
        )}
        <a
          href={whatsappLink(`Hi ${SITE.name}, I'd like to know more about the ${product.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ask about ${product.name} on WhatsApp`}
          className="absolute bottom-3 right-3 z-10 hidden size-10 items-center justify-center rounded-full bg-porcelain/95 text-sage shadow-soft transition-colors duration-150 hover:bg-sage hover:text-porcelain md:inline-flex"
        >
          <WhatsAppIcon />
        </a>
      </div>
      <div className="flex flex-1 flex-col pt-3.5">
        {category && <p className="truncate text-xs text-ink-soft">{category.title}</p>}
        <h3 className="mt-1 line-clamp-2 font-display text-[17px] font-medium leading-snug text-ink md:text-lg">
          {/* Stretched link: the whole card opens the product; the WhatsApp button sits above it. */}
          <Link to="/product/$slug" params={{ slug: product.slug }} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 line-clamp-1 text-[13px] text-ink-soft">{product.spec}</p>
        <p className="mt-auto pt-2 text-[13px] font-semibold text-gold-deep">Price on request</p>
      </div>
      {/* Keyboard focus ring for the stretched link */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-1.5 rounded-2xl ring-2 ring-transparent transition-shadow duration-150 group-has-[a:focus-visible]:ring-gold-deep"
      />
    </article>
  );
}

export function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}
