import { Link } from "@tanstack/react-router";
import { PRODUCTS, pick } from "@/data/catalog";
import { CatalogImage } from "./CatalogImage";

const SHOTS = pick([
  "radha-krishna-idol-in-acrylic-case",
  "hand-painted-platter-with-three-bowls",
  "om-shankh",
  "cut-glass-goblets",
  "daisy-and-pearl-wax-candle-bowl",
  "illuminated-mirror-frame",
  "leaping-koi-on-wave-base",
  "glass-cloche-on-wooden-base",
  "tall-cone-lanterns",
  "jewel-studded-tumblers-set-of-4",
  "mother-of-pearl-footed-box-chequer",
  "ganesh-lakshmi-pooja-box-with-conch-and-bell",
]);

const PHOTO_COUNT = PRODUCTS.reduce((n, p) => n + p.photos.length, 0);

export function LookbookTeaser() {
  return (
    <section aria-labelledby="lookbook-title" className="on-dark bg-plum-950 py-20 text-porcelain md:py-28">
      <div className="page-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id="lookbook-title" className="font-display text-[34px] font-medium leading-[1.1] md:text-5xl">
              The catalog, up close.
            </h2>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-porcelain/70">
              Every photograph here comes from our own catalogs: <span className="tabular-nums">{PHOTO_COUNT}</span> of them, across{" "}
              <span className="tabular-nums">{PRODUCTS.length}</span> designs.
            </p>
          </div>
          <Link to="/lookbook" className="btn-gold">
            Open the lookbook
          </Link>
        </div>
        <ul className="mt-12 columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
          {SHOTS.map((p) => (
            <li key={p.slug} className="mb-3 break-inside-avoid md:mb-4">
              <Link to="/product/$slug" params={{ slug: p.slug }} className="group relative block overflow-hidden rounded-2xl bg-porcelain/5">
                <CatalogImage
                  photo={p.photos[0]}
                  sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 48vw"
                  className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-2 bottom-2 truncate rounded-full bg-plum-950/80 px-3 py-1.5 text-xs text-porcelain opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  {p.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
