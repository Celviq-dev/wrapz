import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  italic,
  description,
  breadcrumbs,
  actions,
  image,
  tone = "ivory",
}: {
  eyebrow?: string;
  title: string;
  italic?: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; to?: string }>;
  actions?: ReactNode;
  image?: string;
  tone?: "ivory" | "cream" | "warm";
}) {
  const bg =
    tone === "cream" ? "bg-cream" : tone === "warm" ? "bg-warm-white" : "bg-ivory";
  return (
    <section className={`${bg} paper-grain pt-[120px] pb-16 md:pt-[150px] md:pb-24`}>
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <Reveal className="lg:col-span-7">
          {breadcrumbs && <div className="mb-6"><Breadcrumbs items={breadcrumbs} /></div>}
          {eyebrow && (
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
              — {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold text-charcoal leading-[1.08]">
            {title}
            {italic && (
              <>
                <br />
                <span className="italic text-bronze">{italic}</span>
              </>
            )}
          </h1>
          {description && (
            <p className="mt-6 text-warm-gray text-[16px] md:text-lg leading-[1.7] max-w-xl">
              {description}
            </p>
          )}
          {actions && <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>}
        </Reveal>
        {image && (
          <Reveal delay={120} className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img src={image} alt="" className="w-full aspect-[4/5] object-cover" />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
