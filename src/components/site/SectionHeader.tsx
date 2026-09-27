import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  italic,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  italic?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
          — {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-charcoal leading-[1.12]">
        {title}
        {italic && (
          <>
            <br />
            <span className="italic text-bronze">{italic}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-warm-gray text-[15px] md:text-lg leading-[1.7]">{description}</p>
      )}
    </Reveal>
  );
}
