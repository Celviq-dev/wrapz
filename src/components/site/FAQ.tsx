import { Plus } from "lucide-react";
import { SITE, whatsappLink } from "@/data/site";

/**
 * Native <details> disclosure: keyboard and screen-reader behavior come from the browser, and every
 * answer stays in the HTML (the same Q&A is published as FAQPage JSON-LD). `name` keeps one open at a time.
 */
export function FAQ({ items, title = "Questions, answered." }: { items: Array<{ q: string; a: string }>; title?: string }) {
  return (
    <section aria-labelledby="faq-title" className="bg-porcelain py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 id="faq-title" className="text-center font-display text-[34px] font-medium leading-[1.1] text-ink md:text-5xl">
          {title}
        </h2>
        <div className="mt-10 divide-y divide-line border-y border-line md:mt-12">
          {items.map((f, i) => (
            <details key={f.q} name="faq" open={i === 0} className="group">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-lg font-medium leading-snug text-ink md:text-xl">{f.q}</h3>
                <span
                  aria-hidden
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-transform duration-200 group-open:rotate-45"
                >
                  <Plus className="size-4" strokeWidth={1.75} />
                </span>
              </summary>
              <p className="pb-6 pr-12 text-base leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-ink-soft">
          Still deciding?{" "}
          <a
            href={whatsappLink(`Hi ${SITE.name}, I have a question about gifting.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            Ask us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
