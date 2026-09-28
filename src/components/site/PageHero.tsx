import type { ReactNode } from "react";

import { Breadcrumbs } from "./Breadcrumbs";
import { Figure } from "./Figure";
import { Reveal } from "./Reveal";
import type { MediaAsset } from "@/data/media.generated";

/**
 * Inner-page header. The top padding is small because the site header is sticky
 * rather than fixed, so it no longer overlaps the first element on the page.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  asset,
  meta,
  tone = "cream",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; to?: string }>;
  actions?: ReactNode;
  asset?: MediaAsset;
  meta?: ReactNode;
  tone?: "ivory" | "cream" | "warm";
}) {
  const bg = tone === "cream" ? "bg-cream" : tone === "warm" ? "bg-warm-white" : "bg-ivory";

  return (
    <section className={`${bg} border-b border-beige pb-14 pt-8 md:pb-20 md:pt-12`}>
      <div className="mx-auto grid max-w-[1380px] grid-cols-1 items-end gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-14">
        <Reveal className={asset ? "lg:col-span-7" : "lg:col-span-9"}>
          {breadcrumbs ? (
            <div className="mb-6">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          ) : null}
          {eyebrow ? (
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-bronze">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 font-display text-[2.4rem] leading-[1] tracking-[-0.035em] text-charcoal md:text-[3.4rem]">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-base leading-[1.8] text-warm-gray md:text-[1.05rem]">
              {description}
            </p>
          ) : null}
          {meta}
          {actions ? <div className="mt-8 flex flex-wrap items-center gap-5">{actions}</div> : null}
        </Reveal>

        {asset ? (
          <Reveal className="lg:col-span-5" delay={80}>
            <Figure
              asset={asset}
              ratio="landscape"
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
