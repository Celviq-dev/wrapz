import { useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Product } from "@/data/catalog";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";

/** Horizontal product carousel: drag or swipe, arrow buttons, focus scrolls the slide into view. */
export function ProductRail({
  id,
  title,
  action,
  products,
  className,
}: {
  id: string;
  title: ReactNode;
  action?: ReactNode;
  products: Product[];
  className?: string;
}) {
  const [viewport, api] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  // Both arrows stay disabled until Embla is ready; before that a click would be silently dropped.
  const [edges, setEdges] = useState({ prev: false, next: false });

  useEffect(() => {
    if (!api) return;
    const update = () => setEdges({ prev: api.canScrollPrev(), next: api.canScrollNext() });
    update();
    api.on("select", update).on("reInit", update);
    return () => {
      api.off("select", update).off("reInit", update);
    };
  }, [api]);

  const arrow = "inline-flex size-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-150 hover:border-ink disabled:pointer-events-none disabled:opacity-35";

  return (
    <section aria-labelledby={`${id}-title`} aria-roledescription="carousel" className={className}>
      <div className="page-x">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <h2 id={`${id}-title`} className="font-display text-[34px] font-medium leading-[1.1] text-ink md:text-5xl">
            {title}
          </h2>
          <div className="flex items-center gap-5">
            {action}
            <div className="hidden gap-2 md:flex">
              <button type="button" aria-label="Previous pieces" disabled={!edges.prev} onClick={() => api?.scrollPrev()} className={arrow}>
                <ArrowLeft aria-hidden className="size-4" strokeWidth={1.75} />
              </button>
              <button type="button" aria-label="Next pieces" disabled={!edges.next} onClick={() => api?.scrollNext()} className={arrow}>
                <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </div>
        <div ref={viewport} className="-mx-1.5 mt-10 overflow-hidden px-1.5 py-1.5 md:mt-12">
          <ul className="flex touch-pan-y gap-4 md:gap-6">
            {products.map((p, i) => (
              <li
                key={p.slug}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${products.length}`}
                className={cn("min-w-0 shrink-0 grow-0 basis-[72%] sm:basis-[calc((100%-1rem)/2)] md:basis-[calc((100%-3rem)/3)] lg:basis-[calc((100%-4.5rem)/4)]")}
              >
                <ProductCard product={p} sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 72vw" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
