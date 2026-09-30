import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { LOOKBOOK_SHOTS, Lookbook } from "@/components/site/Lookbook";
import { PRODUCTS, absoluteUrl } from "@/data/catalog";

export const Route = createFileRoute("/lookbook")({
  head: () => ({
    meta: [
      { title: "The Lookbook — Every Piece in Our Catalog | Sneha’s Wrapzz" },
      { name: "description", content: `${LOOKBOOK_SHOTS.length} photographs of ${PRODUCTS.length} silver artifacts, hampers, diyas, pooja sets and home décor gifts from the Sneha’s Wrapzz catalogs.` },
      { property: "og:title", content: "The Lookbook — Sneha’s Wrapzz" },
      { property: "og:description", content: "Every photograph from our catalogs, grouped by collection." },
      { property: "og:url", content: absoluteUrl("/lookbook") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/lookbook") }],
  }),
  component: LookbookPage,
});

function LookbookPage() {
  return (
    <>
      <header className="bg-porcelain pb-10 pt-28 md:pb-14 md:pt-36">
        <div className="page-x">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Lookbook" }]} />
          <h1 className="mt-6 font-display text-[40px] font-medium leading-[1.05] text-ink md:text-6xl">
            The lookbook<span className="text-gold-deep">.</span>
          </h1>
          <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-ink-soft md:text-lg">
            Every photograph from our catalogs: <span className="tabular-nums">{LOOKBOOK_SHOTS.length}</span> of them, across{" "}
            <span className="tabular-nums">{PRODUCTS.length}</span> designs. Open any photo to see it larger, then go straight to the piece.
          </p>
        </div>
      </header>
      <Lookbook />
    </>
  );
}
