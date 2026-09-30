import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type HeadingVariant = "statement" | "editorial-split" | "minimal" | "badge-serif" | "dark-invert";

/**
 * Section heading: one headline, optional italic tail, optional description stacked below.
 * No eyebrow label: the section's place on the page already says what it is.
 */
export function SectionHeader({
  title,
  italic,
  description,
  align = "left",
  variant = "badge-serif",
  className,
}: {
  title: string;
  italic?: string;
  description?: string;
  align?: "left" | "center";
  variant?: HeadingVariant;
  className?: string;
}) {
  const dark = variant === "dark-invert";
  const size =
    variant === "statement"
      ? "text-[36px] md:text-6xl"
      : variant === "minimal"
        ? "text-2xl md:text-3xl"
        : "text-[32px] md:text-[44px]";

  return (
    <Reveal className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      <h2 className={cn("font-display font-medium leading-[1.1]", size, dark ? "text-porcelain" : "text-ink")}>
        {title}
        {italic && <em className={cn("font-normal", dark ? "text-gold-light" : "text-gold-deep")}> {italic}</em>}
      </h2>
      {description && (
        <p className={cn("mt-4 max-w-[60ch] text-base leading-relaxed md:text-lg", align === "center" && "mx-auto", dark ? "text-porcelain/70" : "text-ink-soft")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
