import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/site/Hero";
import { CollectionsEditorial } from "@/components/site/CollectionsEditorial";
import { Figure } from "@/components/site/Figure";
import { Reveal } from "@/components/site/Reveal";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { CORPORATE, STUDIO, TOTAL_ITEMS, media } from "@/data/catalog";
import { FAQS } from "@/data/faqs";

const SITE = "https://snehawrapzz.lovable.app";
const TITLE = "Sneha's Wrapzz — Silver Decor, Festive Gifting & Hampers, Hyderabad";
const DESC = `A gifting studio in Secunderabad, Hyderabad: silver decor and devotional pieces, diyas and candles, serveware, hampers and bulk corporate gifting. ${TOTAL_ITEMS} catalogued pieces, enquiry-led.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: `${SITE}/media/wall-art/wall-art-01.webp` },
      { name: "twitter:image", content: `${SITE}/media/wall-art/wall-art-01.webp` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <CollectionsEditorial />

      {/* Corporate & bulk: a dark band so the B2B track reads as a different
          audience rather than a seventh collection. */}
      <Reveal>
        <section className="bg-bottle-dark py-16 text-ivory md:py-24">
          <div className="mx-auto max-w-[1380px] px-5 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-aged-brass">
                  Corporate &amp; bulk
                </p>
                <h2 className="mt-4 font-display text-3xl leading-[1.04] tracking-[-0.035em] text-ivory md:text-[2.8rem]">
                  Same gift, two hundred times over.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-[1.8] text-ivory/75">
                  {CORPORATE.intro}
                </p>
                <Link
                  to="/corporate"
                  className="group mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-ivory"
                >
                  <span className="link-underline">Corporate &amp; bulk gifting</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 lg:col-span-7 lg:gap-5">
                {["corporate-05", "corporate-01", "corporate-08"].map((slug, i) => (
                  <Figure
                    key={slug}
                    asset={media(slug)}
                    ratio="tall"
                    sizes="(min-width: 1024px) 19vw, 31vw"
                    className={i === 1 ? "mt-8" : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <About />
      <FAQ />
      <Contact />
      <p className="sr-only">
        {STUDIO.legalName}, {STUDIO.address}. Telephone {STUDIO.phone}.
      </p>
    </>
  );
}
