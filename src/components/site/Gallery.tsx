import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import personal from "@/assets/collection-personal.jpg";
import festival from "@/assets/collection-festival.jpg";
import { Reveal } from "./Reveal";

const items = [
  { src: g1, alt: "Hands holding a gold-wrapped gift", tall: true },
  { src: g3, alt: "Detail of champagne ribbon bow", tall: false },
  { src: personal, alt: "Handwritten birthday card on gift", tall: false },
  { src: g2, alt: "Flat lay wrapping with dried flowers and scissors", tall: false },
  { src: g4, alt: "Woman smiling holding wrapped gift", tall: true },
  { src: festival, alt: "Festival hamper with marigolds", tall: false },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-ivory py-28 md:py-36">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-16">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
                — Gallery
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-charcoal leading-[1.15]">
                Real moments,<br />
                <span className="italic text-bronze">softly unwrapped.</span>
              </h2>
            </div>
            <a
              href="https://instagram.com"
              className="link-underline text-sm font-medium text-charcoal self-start md:self-end"
            >
              Follow on Instagram
            </a>
          </div>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 [column-fill:_balance]">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 3) * 100} className="mb-6 md:mb-8 break-inside-avoid">
              <div className="group relative overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-all duration-[1200ms] group-hover:scale-[1.04] ${
                    it.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
