import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { PageHero } from "./PageHero";
import { CategoryCard } from "./CategoryCard";
import { CategoryShowcase } from "./ProductGrid";
import { LeadForm } from "./LeadForm";
import {
  absoluteUrl,
  categoryPhoto,
  getPillar,
  photoUrl,
  pillarPhoto,
  productsByCategory,
  productsForPillar,
  type PillarKey,
} from "@/data/catalog";

export function pillarHead(key: PillarKey, title: string, description: string) {
  const pillar = getPillar(key);
  const url = absoluteUrl(pillar.to);
  const photo = pillarPhoto(pillar);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      ...(photo ? [{ property: "og:image", content: absoluteUrl(photoUrl(photo, 1600)) }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/** Standard collection page: hero, category tiles, a preview row per category, enquiry form. */
export function PillarPage({
  pillarKey,
  title,
  italic,
  description,
  actions,
  intro,
  children,
  formTitle,
}: {
  pillarKey: PillarKey;
  title: string;
  italic?: string;
  description: string;
  actions?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  formTitle?: string;
}) {
  const pillar = getPillar(pillarKey);
  const groups = productsByCategory(pillarKey);
  const total = productsForPillar(pillarKey).length;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: pillar.short }]}
        eyebrow={`${pillar.eyebrow} · ${total} designs`}
        title={title}
        italic={italic}
        description={description}
        photo={pillarPhoto(pillar)}
        actions={
          actions ?? (
            <>
              <a href="#browse" className="btn-primary">Browse {total} designs</a>
              <Link to="/contact" className="btn-outline">Get a quote</Link>
            </>
          )
        }
      />

      {groups.length > 1 && (
        <section className="bg-paper py-14 md:py-20" aria-labelledby={`${pillar.key}-categories`}>
          <h2 id={`${pillar.key}-categories`} className="sr-only">
            {pillar.title} categories
          </h2>
          <div className="page-x grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map(({ category, products }) => (
              <CategoryCard
                key={category.slug}
                to="/category/$slug"
                params={{ slug: category.slug }}
                photo={categoryPhoto(category)}
                count={products.length}
                title={category.title}
                description={category.description}
              />
            ))}
          </div>
        </section>
      )}

      {intro}

      <section id="browse" className="scroll-mt-20 bg-porcelain py-20 md:py-24">
        <div className="page-x">
          <CategoryShowcase groups={groups} />
        </div>
      </section>

      {children}

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <LeadForm
            title={formTitle ?? `Enquire about ${pillar.title.toLowerCase()}`}
            subtitle="Tell us the occasion and quantity. We reply within one working day with options and pricing."
            purpose={pillar.title}
          />
        </div>
      </section>
    </>
  );
}
