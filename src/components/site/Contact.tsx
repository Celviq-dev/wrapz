import { useState } from "react";

import { Reveal } from "./Reveal";
import { COLLECTIONS, CORPORATE, STUDIO } from "@/data/catalog";

const INTERESTS = [...COLLECTIONS.map((c) => c.name), CORPORATE.name, "Not sure yet"];

/**
 * The enquiry form composes a WhatsApp message to the studio's published number.
 *
 * The previous version collected fields and then admitted it had nowhere to send
 * them. WhatsApp is the only contact channel the source material confirms, so the
 * form hands over to it with the details already written out — no backend, and
 * nothing that silently discards an enquiry.
 */
export function Contact({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [quantity, setQuantity] = useState("");
  const [timeline, setTimeline] = useState("");
  const [details, setDetails] = useState("");

  const message = [
    name ? `Hello, this is ${name}.` : "Hello,",
    `I'd like to enquire about: ${interest}.`,
    quantity ? `Quantity: ${quantity}.` : "",
    timeline ? `Needed by: ${timeline}.` : "",
    details ? `Details: ${details}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const href = `${STUDIO.whatsappHref}?text=${encodeURIComponent(message)}`;

  return (
    <section
      id="contact"
      className={compact ? "bg-warm-white py-16 md:py-20" : "bg-warm-white py-20 md:py-28"}
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <h2 className="font-display text-3xl leading-[1.04] tracking-[-0.035em] text-charcoal md:text-5xl">
            Tell us what you need, and for how many.
          </h2>
          <p className="mt-6 max-w-md text-base leading-[1.8] text-warm-gray">
            Orders are put together to your brief. Share the collection you have in mind, the
            quantity and the date you need it by.
          </p>

          <dl className="mt-9 space-y-4 border-t border-beige pt-6 text-sm">
            <div>
              <dt className="font-medium text-charcoal">{STUDIO.legalName}</dt>
              <dd className="mt-1 leading-[1.7] text-warm-gray">{STUDIO.address}</dd>
            </div>
            <div>
              <dt className="font-medium text-charcoal">Phone &amp; WhatsApp</dt>
              <dd className="mt-1">
                <a
                  href={STUDIO.phoneHref}
                  className="link-underline inline-flex min-h-[44px] items-center font-medium text-charcoal"
                >
                  {STUDIO.phone}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={80}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="border border-beige bg-cream p-6 md:p-9"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field id="name" label="Your name" value={name} onChange={setName} />

              <div>
                <label htmlFor="interest" className="mb-2 block text-sm font-medium text-charcoal">
                  What are you interested in?
                </label>
                <select
                  id="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="min-h-[48px] w-full border border-beige bg-ivory px-4 py-3 text-[15px] text-charcoal focus:border-olive focus:outline-none focus:ring-2 focus:ring-aged-brass/40"
                >
                  {INTERESTS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <Field
                id="quantity"
                label="Quantity"
                value={quantity}
                onChange={setQuantity}
                placeholder="1 piece, or 150 sets"
              />
              <Field
                id="timeline"
                label="Needed by"
                value={timeline}
                onChange={setTimeline}
                placeholder="Approximate date"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="details" className="mb-2 block text-sm font-medium text-charcoal">
                Anything else
              </label>
              <textarea
                id="details"
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Who it's for, the occasion, or a piece you saw in a collection"
                className="w-full border border-beige bg-ivory px-4 py-3 text-[15px] text-charcoal placeholder:text-warm-gray/70 focus:border-olive focus:outline-none focus:ring-2 focus:ring-aged-brass/40"
              />
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-xs text-xs leading-relaxed text-warm-gray">
                Opens WhatsApp with these details filled in, so nothing is retyped.
              </p>
              <a href={href} target="_blank" rel="noreferrer" className="min-h-[48px] btn-primary">
                Send on WhatsApp
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-charcoal">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[48px] w-full border border-beige bg-ivory px-4 py-3 text-[15px] text-charcoal placeholder:text-warm-gray/70 focus:border-olive focus:outline-none focus:ring-2 focus:ring-aged-brass/40"
      />
    </div>
  );
}
