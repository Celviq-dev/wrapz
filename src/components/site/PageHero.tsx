import type { ReactNode } from "react";
import type { Photo } from "@/data/catalog";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "./Breadcrumbs";
import { CatalogImage } from "./CatalogImage";

export function PageHero({
  eyebrow,
  title,
  italic,
  description,
  breadcrumbs,
  actions,
  photo,
  tone = "ivory",
}: {
  eyebrow?: string;
  title: string;
  italic?: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; to?: string }>;
  actions?: ReactNode;
  photo?: Photo;
  tone?: "ivory" | "cream" | "warm";
}) {
  return (
    <section className={cn("pb-14 pt-28 md:pb-20 md:pt-36", tone === "warm" ? "bg-paper" : "bg-porcelain")}>
      <div className="page-x grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className={photo ? "lg:col-span-7" : "lg:col-span-9"}>
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          {eyebrow && <p className="eyebrow mt-8">{eyebrow}</p>}
          <h1 className={cn("font-display text-[40px] font-medium leading-[1.06] text-ink md:text-6xl", eyebrow ? "mt-3" : "mt-6")}>
            {title}
            {italic && <em className="font-normal text-gold-deep"> {italic}</em>}
          </h1>
          {description && <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-ink-soft md:text-lg">{description}</p>}
          {actions && <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>}
        </div>
        {photo && (
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-paper">
              <CatalogImage photo={photo} priority sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
