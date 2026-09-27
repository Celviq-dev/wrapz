import wedding from "@/assets/collection-wedding.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { Reveal } from "./Reveal";

export function Weddings() {
  return (
    <section id="weddings" className="bg-ivory py-28 md:py-36">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* offset image stack */}
        <Reveal className="lg:col-span-6 relative">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={wedding}
                alt="Bridal hamper with white roses and champagne ribbon"
                loading="lazy"
                width={1000}
                height={1200}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 md:-right-10 w-40 md:w-56 overflow-hidden rounded-2xl border-4 border-ivory shadow-lift hidden sm:block">
              <img
                src={gallery4}
                alt="Woman receiving a wrapped gift"
                loading="lazy"
                width={900}
                height={1200}
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={150}>
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
            — Weddings
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-charcoal leading-[1.15]">
            Gifts for life&apos;s most<br />
            <span className="italic text-bronze">beautiful mornings.</span>
          </h2>
          <p className="mt-6 text-warm-gray text-lg leading-[1.7] max-w-xl">
            Welcome boxes for guests arriving from three time zones. Bridal
            party hampers, filled with things she&apos;ll actually keep.
            Trousseau wrapping that turns the exchange itself into ceremony.
          </p>

          <ul className="mt-8 space-y-3 text-charcoal">
            {[
              "Bridal & bridesmaid hampers",
              "Welcome boxes for out-of-town guests",
              "Trousseau & registry wrapping",
              "Return favors, softly curated",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-champagne" />
                <span className="text-[15px]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-sage px-6 py-3 text-sm font-semibold text-ivory shadow-soft hover:scale-[1.03] hover:shadow-lift transition-all duration-300"
            >
              Plan wedding gifting
            </a>
            <a href="#gallery" className="link-underline self-center text-sm font-medium text-charcoal">
              See real weddings
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
