import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    t: "Tell us the moment",
    d: "A wedding, a milestone, a Tuesday that matters. We start with the story.",
  },
  {
    n: "02",
    t: "Choose the palette",
    d: "Ivory & champagne. Bronze & linen. We build a mood, not a template.",
  },
  {
    n: "03",
    t: "Personalize it, softly",
    d: "A handwritten note, an initial, a curated stack of small delights.",
  },
  {
    n: "04",
    t: "We hand-wrap & deliver",
    d: "Tied in silk ribbon, boxed with care, delivered ready to be opened slowly.",
  },
];

export function Process() {
  return (
    <section className="relative bg-warm-white paper-grain py-28 md:py-36">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
              — The Ritual
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-charcoal leading-[1.15]">
              Four gentle steps,<br />
              <span className="italic text-bronze">one unforgettable moment.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative pl-8 md:pl-0 md:pt-8">
                <div className="absolute left-0 top-0 md:relative md:left-auto md:top-auto font-display text-5xl md:text-6xl italic text-champagne/80">
                  {s.n}
                </div>
                <div className="hidden md:block mt-6 mb-6 ribbon-divider" />
                <h3 className="mt-2 md:mt-0 font-display text-xl font-semibold text-charcoal">
                  {s.t}
                </h3>
                <p className="mt-3 text-warm-gray text-[15px] leading-relaxed max-w-[280px]">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
