import { useId, useState } from "react";
import { ADDRESS_LINE, SITE, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";
import { emit, Sig } from "@/lib/reticle-signals";
import { WhatsAppIcon } from "./ProductCard";

const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;

type Errors = { name?: string; reach?: string };

function validate(name: string, reach: string): Errors {
  return {
    name: name.length < 2 ? "Please share your name" : undefined,
    reach: reach.includes("@") || reach.replace(/\D/g, "").length >= 6 ? undefined : "Add a phone number or email so we can reply",
  };
}

export function Contact() {
  const uid = useId();
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-paper py-20 md:py-28">
      <img
        src="/brand/leaves.webp"
        width={475}
        height={660}
        alt=""
        loading="lazy"
        className="pointer-events-none absolute -right-16 -top-10 hidden w-64 opacity-60 lg:block"
      />
      <div className="page-x relative grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h2 id="contact-title" className="font-display text-[34px] font-medium leading-[1.1] text-ink md:text-5xl">
            Tell us what you are planning.
          </h2>
          <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-ink-soft md:text-lg">
            The occasion, the person and the date. We reply within one working day.
          </p>
          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-sm text-ink-soft">Call or WhatsApp</dt>
              <dd className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                <a href={SITE.phoneHref} className="font-display text-xl text-ink tabular-nums hover:text-gold-deep">
                  {SITE.phoneDisplay}
                </a>
                <a
                  href={whatsappLink(`Hi ${SITE.name}, I'd like to plan a gift.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-area text-sm font-semibold text-sage underline decoration-sage/30 underline-offset-4 hover:decoration-sage"
                >
                  Message on WhatsApp
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-ink-soft">Studio</dt>
              <dd className="mt-1">
                <address className="not-italic text-[15px] leading-relaxed text-ink">{ADDRESS_LINE}</address>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="tap-area mt-1 inline-block text-sm font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                  Get directions
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-ink-soft">Instagram</dt>
              <dd className="mt-1">
                <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="tap-area text-[15px] text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                  {SITE.instagram.handle}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const get = (k: string) => String(data.get(k) ?? "").trim();
              const errs = validate(get("name"), get("reach"));
              setErrors(errs);
              const firstBad = errs.name ? "name" : errs.reach ? "reach" : null;
              if (firstBad) {
                document.getElementById(`${uid}-${firstBad}`)?.focus();
                emit(Sig.ENQUIRY_BLOCKED, { form: "home-contact", fields: Object.keys(errs).filter((k) => errs[k as keyof Errors]) });
                return;
              }
              const lines = [
                ["Name", get("name")],
                ["Contact", get("reach")],
                ["Occasion", get("occasion")],
                ["Needed by", get("timeline")],
                ["Details", get("message")],
              ].filter(([, v]) => v);
              const url = whatsappLink(`Hi ${SITE.name}, I'd like to plan a gift.\n\n${lines.map(([k, v]) => `${k}: ${v}`).join("\n")}`);
              window.open(url, "_blank", "noopener,noreferrer");
              setSentTo(url);
              emit(Sig.ENQUIRY_READY, { form: "home-contact", fields: lines.map(([k]) => k) });
            }}
            className="rounded-2xl border border-line bg-surface p-6 shadow-soft md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field id={`${uid}-name`} label="Name" name="name" autoComplete="name" required error={errors.name} />
              <Field id={`${uid}-reach`} label="Phone or email" name="reach" autoComplete="tel" required hint="So we can reply" error={errors.reach} />
              <Field id={`${uid}-occasion`} label="Occasion" name="occasion" placeholder="Wedding, Diwali, corporate" />
              <Field id={`${uid}-timeline`} label="Needed by" name="timeline" placeholder="Approximate date" />
            </div>
            <Field id={`${uid}-message`} label="What should we know?" name="message" multiline placeholder="Who it is for, how many, any budget per gift" className="mt-5" />
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-[34ch] text-[13px] text-ink-soft">Opens WhatsApp with your message filled in. Nothing is sent until you press send there.</p>
              <button type="submit" data-testid="home-contact-send" className="btn-whatsapp">
                <WhatsAppIcon /> Send on WhatsApp
              </button>
            </div>
            {sentTo && (
              <p role="status" className="mt-5 text-sm font-medium text-ink">
                Your message is ready in WhatsApp. Didn’t open?{" "}
                <a href={sentTo} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Open WhatsApp
                </a>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

const control =
  "w-full rounded-lg border bg-porcelain px-4 text-[15px] text-ink placeholder:text-ink-soft transition-colors duration-150 hover:border-ink/30 focus-visible:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40";

function Field({
  id,
  label,
  name,
  placeholder,
  autoComplete,
  required,
  hint,
  error,
  multiline,
  className,
}: {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  multiline?: boolean;
  className?: string;
}) {
  // The error replaces the hint, so only one of them is ever rendered and referenced.
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required && (
          <span className="text-ink-soft">
            {" "}
            <span aria-hidden>*</span>
            <span className="sr-only">(required)</span>
          </span>
        )}
      </label>
      {multiline ? (
        <textarea id={id} name={name} rows={5} placeholder={placeholder} className={`${control} border-line py-3`} />
      ) : (
        <input
          id={id}
          name={name}
          type="text"
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={cn(control, "h-12", error ? "border-destructive" : "border-line")}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] font-medium text-destructive">
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${id}-hint`} className="mt-1.5 text-[13px] text-ink-soft">
            {hint}
          </p>
        )
      )}
    </div>
  );
}
