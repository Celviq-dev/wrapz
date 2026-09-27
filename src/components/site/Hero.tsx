import { useEffect, useState } from "react";
import heroGift from "@/assets/hero-gift.jpg";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallax = Math.min(scrollY * 0.15, 80);

  return (
    <section
      id="top"
      className="paper-grain relative overflow-hidden bg-ivory pt-[120px] pb-24 md:pt-[140px] md:pb-32"
    >
      {/* soft radial warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 30%, color-mix(in oklab, var(--champagne) 22%, transparent), transparent 70%)",
        }}
      />

      {/* floating particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        {[...Array(9)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-champagne/60"
            style={{
              left: `${(i * 11 + 8) % 96}%`,
              bottom: `${(i * 13) % 30}%`,
              width: `${4 + (i % 3) * 2}px`,
              height: `${4 + (i % 3) * 2}px`,
              animation: `float-particle ${6 + (i % 4)}s ease-in-out ${i * 0.7}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        {/* Text */}
        <div className="animate-reveal">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-bronze">
            <span className="h-px w-8 bg-champagne" />
            Handcrafted in India
          </span>
          <h1 className="mt-6 font-display text-[44px] leading-[1.08] font-semibold text-charcoal sm:text-[56px] md:text-[68px] lg:text-[72px]">
            Every gift tells
            <br />
            <span className="italic text-bronze">a story.</span>
          </h1>
          <p className="mt-7 max-w-[520px] text-lg leading-[1.7] text-warm-gray md:text-[19px]">
            Handcrafted wrapping, personalized hampers, and quiet moments of
            wonder — unfolded slowly, ribbon by ribbon.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#collections"
              className="inline-flex items-center gap-2 rounded-lg bg-sage px-7 py-3.5 text-sm font-semibold text-ivory shadow-soft transition-all duration-300 hover:scale-[1.03] hover:shadow-lift"
            >
              Explore Collections
              <span aria-hidden>→</span>
            </a>
            <a
              href="#about"
              className="link-underline text-sm font-medium text-charcoal"
            >
              Our craft
            </a>
          </div>

          {/* small meta strip */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-[460px]">
            {[
              ["5,000+", "gifts wrapped"],
              ["100%", "customizable"],
              ["48h", "quick turnaround"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-semibold text-charcoal">
                  {n}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-warm-gray">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div
            className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-3xl shadow-lift animate-soft-fade"
            style={{ transform: `translateY(${parallax * 0.3}px)` }}
          >
            <img
              src={heroGift}
              alt="Ivory gift box tied with champagne satin ribbon on linen"
              width={1400}
              height={1600}
              className="h-full w-full object-cover"
            />
            {/* subtle warm overlay */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--ivory) 30%, transparent))",
              }}
            />
          </div>

          {/* floating chip */}
          <div
            className="absolute -left-2 top-8 hidden md:flex items-center gap-3 rounded-2xl border border-beige bg-cream/90 backdrop-blur-md px-4 py-3 shadow-soft animate-ribbon-sway"
            style={{ transform: `translateY(${-parallax * 0.1}px)` }}
          >
            <span className="h-2 w-2 rounded-full bg-sage" />
            <span className="text-xs font-medium text-charcoal">
              New: Festival Edit ’26
            </span>
          </div>

          <div
            className="absolute -right-4 bottom-10 hidden md:block rounded-2xl border border-beige bg-cream/90 backdrop-blur-md px-5 py-4 shadow-soft max-w-[220px]"
            style={{ transform: `translateY(${parallax * 0.15}px)` }}
          >
            <p className="font-display italic text-sm text-charcoal leading-snug">
              &ldquo;It felt like opening a memory.&rdquo;
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-warm-gray">
              — Aanya, Mumbai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
