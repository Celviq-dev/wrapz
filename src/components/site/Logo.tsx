import { Link } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

/** The gold seal from the brand's catalog with a serif wordmark. */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link to="/" aria-label={`${SITE.name} home`} className={cn("flex min-w-0 items-center gap-2.5", className)}>
      <img src="/brand/seal.webp" width={215} height={217} alt="" className="size-10 shrink-0 md:size-11" />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "truncate font-display text-[19px] font-semibold md:text-[21px]",
            tone === "light" ? "text-porcelain" : "text-ink",
          )}
        >
          {SITE.name}
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-semibold uppercase tracking-[0.32em]",
            tone === "light" ? "text-gold-light" : "text-gold-deep",
          )}
        >
          Gifting
        </span>
      </span>
    </Link>
  );
}
