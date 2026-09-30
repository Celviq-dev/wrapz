import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { pick } from "@/data/catalog";
import { CatalogImage } from "./CatalogImage";

const [tray, frame] = pick(["velvet-tray-hamper-with-photo-frame", "arch-top-wedding-portrait-frame"]);

const POINTS = [
  "Return gifts and potlis in any quantity, packed identically",
  "Tray hampers for the bridal party and both families",
  "Wedding frames, swan pairs and Radha-Krishna pieces",
  "Cards and tags printed with your names",
];

export function Weddings() {
  return (
    <section aria-labelledby="weddings-title" className="bg-porcelain py-20 md:py-28">
      <div className="page-x grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="relative pb-10 pr-10 sm:pb-14 sm:pr-16 lg:col-span-6">
          <div className="overflow-hidden rounded-2xl bg-paper">
            <CatalogImage photo={tray.photos[0]} sizes="(min-width: 1024px) 44vw, 90vw" className="aspect-[4/5] size-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-[42%] overflow-hidden rounded-2xl border-[6px] border-porcelain bg-paper shadow-lift">
            <CatalogImage photo={frame.photos[0]} sizes="(min-width: 1024px) 20vw, 40vw" className="aspect-[3/4] size-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <h2 id="weddings-title" className="font-display text-[34px] font-medium leading-[1.1] text-ink md:text-5xl">
            Wedding gifting, from mehendi to reception.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
            Favors for every guest, hampers for the bridal party and silver-finish keepsakes the couple will keep on display.
          </p>
          <ul className="mt-8 space-y-3.5">
            {POINTS.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] leading-snug text-ink">
                <Check aria-hidden strokeWidth={1.75} className="mt-0.5 size-[18px] shrink-0 text-gold-deep" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/occasion/$slug" params={{ slug: "weddings" }} className="btn-primary">
              Explore wedding gifts
            </Link>
            <Link to="/category/$slug" params={{ slug: "wedding-return-gifts" }} className="btn-outline">
              Return gifts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
