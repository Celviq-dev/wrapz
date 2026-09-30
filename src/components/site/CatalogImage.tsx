import type { Photo } from "@/data/catalog";
import { photoSrcSet, photoUrl } from "@/data/catalog";

/** Responsive catalog photo. Width/height come from the source so the browser reserves space. */
export function CatalogImage({
  photo,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw",
  className,
  alt,
  priority = false,
}: {
  photo: Photo;
  sizes?: string;
  className?: string;
  alt?: string;
  /** Above-the-fold hero image: load eagerly with high fetch priority. */
  priority?: boolean;
}) {
  return (
    <img
      src={photoUrl(photo)}
      srcSet={photoSrcSet(photo)}
      sizes={sizes}
      width={photo.w}
      height={photo.h}
      alt={alt ?? photo.alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
      className={className}
    />
  );
}
