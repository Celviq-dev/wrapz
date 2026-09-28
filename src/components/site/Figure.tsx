import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/data/media.generated";

const RATIO: Record<string, string> = {
  portrait: "aspect-[3/4]",
  tall: "aspect-[2/3]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
  panorama: "aspect-[21/9]",
  natural: "",
};

export type Ratio = keyof typeof RATIO;

/**
 * The single way a catalog photograph reaches the page.
 *
 * Every asset carries its own alt text and intrinsic dimensions in the generated
 * manifest, so this component cannot be used without them — which is what stops
 * the previous implementation's habit of dropping the same decorative image into
 * six unrelated places with a vague caption.
 *
 * Two widths are emitted by the build script; `sizes` tells the browser which to
 * take so a card never downloads a 1600px file.
 */
export function Figure({
  asset,
  ratio = "portrait",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  className,
  imgClassName,
  position = "object-center",
}: {
  asset: MediaAsset;
  ratio?: Ratio;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  position?: string;
}) {
  return (
    <div className={cn("overflow-hidden bg-charcoal/90", RATIO[ratio], className)}>
      <img
        src={asset.src}
        srcSet={`${asset.srcNarrow} 800w, ${asset.src} 1600w`}
        sizes={sizes}
        width={asset.w}
        height={asset.h}
        alt={asset.alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn("h-full w-full object-cover", position, imgClassName)}
      />
    </div>
  );
}

/**
 * Figure plus a slow scale on hover. Used only where the image is itself a link,
 * so the motion always signals something actionable.
 */
export function FigureHover({
  asset,
  ratio = "portrait",
  sizes,
  className,
}: {
  asset: MediaAsset;
  ratio?: Ratio;
  sizes?: string;
  className?: string;
}) {
  return (
    <Figure
      asset={asset}
      ratio={ratio}
      sizes={sizes}
      className={className}
      imgClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
    />
  );
}
