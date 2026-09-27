import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";
import { Reveal } from "./Reveal";

const items = [
  {
    img: t1,
    quote:
      "It felt like receiving a letter, not a package. Every layer had a small surprise. My mother cried, and she never cries.",
    name: "Aanya Sharma",
    role: "Bride, Delhi",
    align: "left" as const,
  },
  {
    img: t2,
    quote:
      "We sent 240 of these to our clients across four cities. Every single reply mentioned the wrapping first. First.",
    name: "Rohan Mehta",
    role: "Founder, Meridian Studio",
    align: "right" as const,
  },
  {
    img: t3,
    quote:
      "Our welcome boxes made guests feel loved before the wedding even began. Sneha understood the whole story in one call.",
    name: "Priya & Arjun",
    role: "Married in Udaipur",
    align: "left" as const,
  },
];

export function Testimonials() {
  return (
    <section className="bg-ivory py-28 md:py-36">
      <div className="mx-auto max-w-[1180px] px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
              — Kind Words
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-charcoal leading-[1.15]">
              From the people<br />
              <span className="italic text-bronze">who unwrapped them.</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-24 md:space-y-32">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center ${
                  t.align === "right" ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:col-span-5 [direction:ltr]">
                  <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square mx-auto md:mx-0 overflow-hidden rounded-full md:rounded-3xl shadow-lift">
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-7 [direction:ltr]">
                  <div className="font-display italic text-champagne text-5xl leading-none mb-4">
                    &ldquo;
                  </div>
                  <p className="font-display text-2xl md:text-3xl text-charcoal leading-[1.35] italic max-w-2xl">
                    {t.quote}
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-px w-10 bg-champagne" />
                    <div>
                      <div className="font-semibold text-charcoal">{t.name}</div>
                      <div className="text-sm text-warm-gray">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
