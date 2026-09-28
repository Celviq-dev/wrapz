import { Reveal } from "./Reveal";

export function SectionHeader({
  title,
  continuation,
  description,
  align = "left",
}: {
  title: string;
  continuation?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] text-charcoal md:text-5xl">
        {title}
        {continuation && <span className="block font-normal text-aged-brass">{continuation}</span>}
      </h2>
      {description && (
        <p className="mt-5 text-[15px] leading-[1.75] text-warm-gray md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
