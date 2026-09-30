import { useState } from "react";
import { Link } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { Photo, Product } from "@/data/catalog";
import { PILLARS, photoSrcSet, photoUrl, productsForPillar } from "@/data/catalog";
import { emit, Sig } from "@/lib/reticle-signals";
import { CatalogImage } from "./CatalogImage";

type Shot = { product: Product; photo: Photo; n: number; of: number };

const GROUPS = (() => {
  let offset = 0;
  return PILLARS.map((pillar) => {
    const shots: Shot[] = productsForPillar(pillar.key).flatMap((product) =>
      product.photos.map((photo, i) => ({ product, photo, n: i + 1, of: product.photos.length })),
    );
    const group = { pillar, shots, offset };
    offset += shots.length;
    return group;
  });
})();

export const LOOKBOOK_SHOTS = GROUPS.flatMap((g) => g.shots);
const CHIPS = GROUPS.map((g) => ({ id: g.pillar.key, label: g.pillar.short, count: g.shots.length }));

/** Every catalog photo, grouped by collection, with a keyboard-friendly lightbox (Radix Dialog). */
export function Lookbook() {
  const [index, setIndex] = useState<number | null>(null);
  const shot = index === null ? null : LOOKBOOK_SHOTS[index];
  const total = LOOKBOOK_SHOTS.length;
  const step = (d: number) => setIndex((i) => (i === null ? i : (i + d + total) % total));

  return (
    <>
      <nav aria-label="Collections in the lookbook" className="sticky top-[72px] z-10 border-b border-line bg-porcelain">
        <ul className="page-x no-scrollbar flex gap-2 overflow-x-auto py-3">
          {CHIPS.map((c) => (
            <li key={c.id} className="shrink-0">
              <a
                href={`#${c.id}`}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink"
              >
                {c.label} <span className="text-ink-soft tabular-nums">{c.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="page-x space-y-20 py-14 md:py-20">
        {GROUPS.map(({ pillar, shots, offset }) => (
          <section key={pillar.key} id={pillar.key} aria-labelledby={`${pillar.key}-title`} className="scroll-mt-36">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
              <div>
                <h2 id={`${pillar.key}-title`} className="font-display text-3xl font-medium text-ink md:text-4xl">
                  {pillar.title}
                </h2>
                <p className="mt-1 text-sm text-ink-soft tabular-nums">{shots.length} photographs</p>
              </div>
              <Link to={pillar.to} className="tap-area inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-gold-deep">
                Shop the collection <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
              </Link>
            </div>
            <ul className="mt-6 columns-2 gap-3 sm:columns-3 md:gap-4 lg:columns-4 xl:columns-5">
              {shots.map((s, i) => (
                <li key={s.photo.path} className="mb-3 break-inside-avoid md:mb-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIndex(offset + i);
                      emit(Sig.LIGHTBOX_OPENED, { index: offset + i, slug: s.product.slug });
                    }}
                    aria-label={`${s.product.name}${s.of > 1 ? `, photo ${s.n} of ${s.of}` : ""}. Open larger`}
                    className="group block w-full overflow-hidden rounded-xl bg-paper"
                  >
                    <CatalogImage
                      photo={s.photo}
                      alt=""
                      sizes="(min-width: 1280px) 19vw, (min-width: 1024px) 24vw, (min-width: 640px) 32vw, 48vw"
                      className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Dialog.Root
        open={shot !== null}
        onOpenChange={(open) => {
          if (open) return;
          emit(Sig.LIGHTBOX_CLOSED, { index });
          setIndex(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-40 bg-plum-950/95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 duration-200" />
          <Dialog.Content
            aria-describedby={undefined}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") step(1);
              if (e.key === "ArrowLeft") step(-1);
            }}
            className="on-dark fixed inset-0 z-40 flex flex-col px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 text-porcelain focus:outline-none md:px-8 md:pb-8"
          >
            {shot && (
              <>
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <Dialog.Title className="truncate font-display text-lg md:text-xl">{shot.product.name}</Dialog.Title>
                    <p className="text-sm text-porcelain/60 tabular-nums">
                      {(index ?? 0) + 1} of {total}
                    </p>
                  </div>
                  <Dialog.Close aria-label="Close" className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-porcelain/80 transition-colors duration-150 hover:bg-porcelain/10 hover:text-porcelain">
                    <X aria-hidden className="size-6" strokeWidth={1.5} />
                  </Dialog.Close>
                </div>
                <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
                  <img
                    key={shot.photo.path}
                    src={photoUrl(shot.photo, 1600)}
                    srcSet={photoSrcSet(shot.photo)}
                    sizes="100vw"
                    width={shot.photo.w}
                    height={shot.photo.h}
                    alt={shot.photo.alt}
                    className="max-h-full w-auto max-w-full rounded-xl object-contain animate-in fade-in-0 duration-200"
                  />
                  <button type="button" aria-label="Previous photo" onClick={() => step(-1)} className="absolute left-0 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-plum-950/70 text-porcelain transition-colors duration-150 hover:bg-porcelain hover:text-plum-950">
                    <ArrowLeft aria-hidden className="size-5" strokeWidth={1.75} />
                  </button>
                  <button type="button" aria-label="Next photo" onClick={() => step(1)} className="absolute right-0 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-plum-950/70 text-porcelain transition-colors duration-150 hover:bg-porcelain hover:text-plum-950">
                    <ArrowRight aria-hidden className="size-5" strokeWidth={1.75} />
                  </button>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link to="/product/$slug" params={{ slug: shot.product.slug }} onClick={() => setIndex(null)} className="btn-gold">
                    View this piece
                  </Link>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
