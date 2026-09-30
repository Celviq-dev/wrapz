import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { HamperWizard } from "@/components/site/HamperWizard";
import { CatalogImage } from "@/components/site/CatalogImage";
import { pick } from "@/data/catalog";

const STRIP = pick(["potli-and-brownie-basket-hamper", "velvet-tray-hamper-with-photo-frame", "sage-suede-hamper-box", "tasselled-festive-gift-boxes"]);

export const Route = createFileRoute("/build-hamper")({
  head: () => ({
    meta: [
      { title: "Build a Hamper — Bespoke Gifting | Sneha’s Wrapzz" },
      { name: "description", content: "A seven-step guided journey to build your own curated hamper — occasion, recipient, budget, theme, packaging, personalization, and quantity." },
      { property: "og:title", content: "Build Your Own Hamper — Sneha’s Wrapzz" },
      { property: "og:description", content: "A guided seven-step journey to your bespoke hamper. We respond within one working day." },
      { property: "og:url", content: "https://snehawrapzz.lovable.app/build-hamper" },
    ],
    links: [{ rel: "canonical", href: "https://snehawrapzz.lovable.app/build-hamper" }],
  }),
  component: BuildHamperPage,
});

function BuildHamperPage() {
  return (
    <>
      <section className="bg-paper pb-12 pt-28 md:pb-16 md:pt-36">
        <div className="page-x grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Build a hamper" }]} />
            <h1 className="mt-6 font-display text-[40px] font-medium leading-[1.06] text-ink md:text-6xl">
              Build your <em className="font-normal text-gold-deep">hamper.</em>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Answer seven quick questions. Our studio replies within one working day with curated
              hamper concepts from our catalog.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-3 lg:col-span-6" aria-hidden>
            {STRIP.map((p) => (
              <div key={p.slug} className="overflow-hidden rounded-2xl bg-porcelain">
                <CatalogImage photo={p.photos[0]} alt="" sizes="(min-width: 1024px) 12vw, 25vw" className="aspect-[3/4] w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-porcelain py-14 md:py-20">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8">
          <HamperWizard />
        </div>
      </section>
    </>
  );
}
