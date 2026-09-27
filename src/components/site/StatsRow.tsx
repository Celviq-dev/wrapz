const DEFAULT_STATS = [
  ["5,000+", "gifts wrapped"],
  ["120+", "brands served"],
  ["48h", "quick turnaround"],
  ["Pan-India", "delivery"],
] as const;

export function StatsRow({
  stats = DEFAULT_STATS as unknown as ReadonlyArray<readonly [string, string]>,
  variant = "light",
}: {
  stats?: ReadonlyArray<readonly [string, string]>;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 rounded-3xl border ${
        isDark
          ? "border-charcoal/20 bg-charcoal text-ivory"
          : "border-beige bg-cream text-charcoal"
      } px-6 md:px-10 py-8 md:py-10 shadow-soft`}
    >
      {stats.map(([n, l]) => (
        <div key={l}>
          <div className="font-display text-2xl md:text-3xl font-semibold">{n}</div>
          <div
            className={`mt-1 text-[11px] uppercase tracking-[0.2em] ${
              isDark ? "text-ivory/70" : "text-warm-gray"
            }`}
          >
            {l}
          </div>
        </div>
      ))}
    </div>
  );
}
