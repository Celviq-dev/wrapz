import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BUDGETS } from "@/data/catalog";

const STEPS = ["Occasion", "Recipient", "Budget", "Theme", "Packaging", "Personal touch", "Quantity"];

/** Two ways in for someone without a product in mind: a guided brief, or a budget. */
export function HamperStudio() {
  return (
    <section aria-labelledby="hamper-title" className="bg-paper py-20 md:py-28">
      <div className="page-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h2 id="hamper-title" className="font-display text-[34px] font-medium leading-[1.1] text-ink md:text-5xl">
            Build your own hamper.
          </h2>
          <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-ink-soft md:text-lg">
            Answer seven short questions. We come back within a working day with concepts from our catalog, wrapped your way.
          </p>
          <ol className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3.5 sm:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s} className="flex items-center gap-3 text-[15px] text-ink">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-xs font-semibold text-gold-deep tabular-nums">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/build-hamper" className="btn-primary">
              Start building
            </Link>
            <Link to="/packaging" className="btn-outline">
              See packaging
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
            <h3 className="font-display text-2xl font-medium text-ink">Or start from a budget</h3>
            <p className="mt-1.5 text-sm text-ink-soft">Per gift and indicative; final pricing depends on size, quantity and personalization.</p>
            <ul className="mt-4 divide-y divide-line">
              {BUDGETS.map((b) => (
                <li key={b.slug}>
                  <Link
                    to="/budget/$slug"
                    params={{ slug: b.slug }}
                    className="group grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 py-4 sm:grid-cols-[9.5rem_1fr_auto]"
                  >
                    <span className="font-display text-lg font-medium text-ink tabular-nums">{b.label}</span>
                    <span className="col-start-1 row-start-2 text-sm leading-snug text-ink-soft sm:col-start-2 sm:row-start-1">{b.description}</span>
                    <ArrowRight
                      aria-hidden
                      strokeWidth={1.75}
                      className="col-start-2 row-span-2 row-start-1 size-4 text-ink-soft transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-ink sm:col-start-3 sm:row-span-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
