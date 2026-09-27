import craft from "@/assets/about-craft.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-warm-white py-28 md:py-36">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
            — Our Story
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-charcoal leading-[1.15]">
            We started with<br />
            <span className="italic text-bronze">a single ribbon.</span>
          </h2>
          <div className="mt-8 space-y-5 text-warm-gray text-[17px] leading-[1.75] max-w-xl">
            <p>
              Sneha&apos;s Wrapzz began at a kitchen table with three spools of
              satin and one stubborn belief — that the way a gift is given
              matters as much as the gift itself.
            </p>
            <p>
              Today, we hand-wrap thousands of moments a year. Weddings.
              Diwalis. New babies. Big promotions. Tuesdays. Every one still
              tied by someone who cares how the bow sits.
            </p>
            <p className="font-display italic text-charcoal text-xl">
              &ldquo;Slow. Warm. Made by hand. Always.&rdquo;
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={150}>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={craft}
                alt="Hands tying a champagne ribbon on a wrapped gift"
                loading="lazy"
                width={1200}
                height={1400}
                className="w-full aspect-[5/6] object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 hidden md:flex h-32 w-32 rounded-full items-center justify-center bg-champagne text-charcoal font-display italic text-center leading-tight text-sm shadow-soft rotate-[-8deg]">
              Est.<br />
              <span className="font-semibold text-lg not-italic">2019</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
