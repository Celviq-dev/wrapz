import { useId, useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SITE, whatsappLink } from "@/data/site";
import { emit, Sig } from "@/lib/reticle-signals";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./ProductCard";

const STEPS = [
  { key: "occasion", label: "Occasion", prompt: "What's the occasion?", options: ["Birthday", "Anniversary", "Wedding", "Diwali", "New Year", "Corporate", "Baby Shower", "Housewarming"] },
  { key: "recipient", label: "Recipient", prompt: "Who is it for?", options: ["For Her", "For Him", "Couple", "Parents", "Kids", "Team / Employees", "Clients", "Leadership"] },
  { key: "budget", label: "Budget per gift", prompt: "What's your budget per gift?", options: ["Under ₹1,000", "₹1,000 – ₹2,000", "₹2,000 – ₹5,000", "₹5,000 – ₹10,000", "Above ₹10,000"] },
  { key: "theme", label: "Theme", prompt: "Pick a mood or theme.", options: ["Silver & Traditional", "Festive & Ornate", "Modern Minimal", "Sustainable / Earthy", "Executive / Refined"] },
  { key: "packaging", label: "Packaging", prompt: "How should it be presented?", options: ["Velvet / Rigid Box", "Tasselled Gift Box", "Potli", "Woven Basket", "Wooden Box", "Tray Hamper"] },
  { key: "personalization", label: "Personalization", prompt: "Any personalization?", options: ["Name / Monogram", "Custom Card or Tag", "Handwritten Note", "Brand Logo", "No personalization"] },
  { key: "quantity", label: "Quantity", prompt: "How many hampers do you need?", options: ["1 – 10", "10 – 50", "50 – 200", "200 – 500", "500+"] },
] as const;

type StepKey = (typeof STEPS)[number]["key"];

export function HamperWizard() {
  const uid = useId();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<StepKey, string>>>({});
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [sent, setSent] = useState<string | null>(null);

  const isSummary = step === STEPS.length;
  const total = STEPS.length + 1;
  const current = STEPS[step];
  const answered = Object.keys(answers).length;

  function submit() {
    const errs = {
      name: contact.name.trim().length < 2 ? "Please share your name" : undefined,
      phone: contact.phone.replace(/\D/g, "").length < 6 ? "Add a phone or WhatsApp number so we can reply" : undefined,
    };
    setErrors(errs);
    if (errs.name || errs.phone) {
      document.getElementById(`${uid}-${errs.name ? "name" : "phone"}`)?.focus();
      emit(Sig.ENQUIRY_BLOCKED, { form: "hamper", fields: Object.keys(errs).filter((k) => errs[k as keyof typeof errs]) });
      return;
    }
    const brief = STEPS.map((s) => `${s.label}: ${answers[s.key] ?? "-"}`).join("\n");
    const who = [`Name: ${contact.name}`, `Phone: ${contact.phone}`, contact.email && `Email: ${contact.email}`].filter(Boolean).join("\n");
    const url = whatsappLink(`Hi ${SITE.name}, here is my hamper brief.\n\n${brief}\n\n${who}`);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(url);
    emit(Sig.ENQUIRY_READY, { form: "hamper", answered: Object.keys(answers).length, ...answers });
  }

  if (sent) {
    return (
      <div role="status" className="rounded-2xl border border-line bg-surface p-10 text-center shadow-soft md:p-14">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gold text-plum-950" aria-hidden>
          <Check className="size-7" strokeWidth={2} />
        </div>
        <h2 className="mt-6 font-display text-3xl font-medium text-ink">Your hamper brief is ready on WhatsApp.</h2>
        <p className="mx-auto mt-3 max-w-lg text-ink-soft">
          Press send in WhatsApp and the studio will reply within one working day with two or three concepts. Didn&apos;t open?{" "}
          <a href={sent} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">
            Open WhatsApp
          </a>{" "}
          or call{" "}
          <a href={SITE.phoneHref} className="font-semibold text-ink underline underline-offset-4">
            {SITE.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_20rem]">
      <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft md:p-10">
        <div className="flex items-center justify-between text-sm text-ink-soft">
          <span className="tabular-nums">
            Step {Math.min(step + 1, total)} of {total}
          </span>
          <span className="font-medium text-ink">{isSummary ? "Review and send" : current.label}</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line" aria-hidden>
          <div
            className="h-full origin-left rounded-full bg-gold transition-transform duration-300 ease-out"
            style={{ transform: `scaleX(${(step + 1) / total})` }}
          />
        </div>

        {/* Jump to any step; the visible dot is small, the tap target is 32px */}
        <nav aria-label="Steps" className="-ml-2 mt-2 flex items-center">
          {[...STEPS.map((s) => s.label), "Summary"].map((label, i) => (
            <button
              type="button"
              key={label}
              onClick={() => setStep(i)}
              aria-label={`Go to step ${i + 1}: ${label}`}
              aria-current={i === step ? "step" : undefined}
              className="group inline-flex h-8 min-w-8 items-center justify-center px-1"
            >
              <span
                className={cn(
                  "block h-2 rounded-full transition-colors duration-150",
                  i === step ? "w-6 bg-gold" : i < STEPS.length && answers[STEPS[i].key] ? "w-2 bg-ink" : "w-2 bg-line group-hover:bg-gold-light",
                )}
              />
            </button>
          ))}
        </nav>

        <div key={step} className="mt-8 min-h-[18.75rem] animate-in fade-in-0 slide-in-from-right-4 duration-200">
          {!isSummary ? (
            <>
              <h2 id={`${uid}-prompt`} className="font-display text-2xl font-medium text-ink md:text-3xl">
                {current.prompt}
              </h2>
              <ToggleGroup.Root
                type="single"
                aria-labelledby={`${uid}-prompt`}
                value={answers[current.key] ?? ""}
                onValueChange={(v) => v && setAnswers((a) => ({ ...a, [current.key]: v }))}
                className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3"
              >
                {current.options.map((opt) => (
                  <ToggleGroup.Item
                    key={opt}
                    value={opt}
                    className="group flex min-h-14 items-center justify-between gap-2 rounded-xl border border-line bg-porcelain px-4 py-3 text-left text-sm font-medium text-ink transition-colors duration-150 hover:border-ink/40 data-[state=on]:border-ink data-[state=on]:bg-ink data-[state=on]:text-porcelain"
                  >
                    {opt}
                    <Check aria-hidden className="size-4 shrink-0 opacity-0 group-data-[state=on]:opacity-100" strokeWidth={2} />
                  </ToggleGroup.Item>
                ))}
              </ToggleGroup.Root>
            </>
          ) : (
            <div>
              <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">Your hamper brief</h2>
              <dl className="mt-6 grid grid-cols-1 gap-x-8 divide-y divide-line border-y border-line sm:grid-cols-2 sm:divide-y-0">
                {STEPS.map((s, i) => (
                  <div key={s.key} className="flex items-baseline justify-between gap-4 py-3 sm:border-b sm:border-line">
                    <dt className="text-sm text-ink-soft">{s.label}</dt>
                    <dd className="text-right text-sm font-medium text-ink">
                      {answers[s.key] ?? (
                        <button type="button" onClick={() => setStep(i)} className="font-semibold text-gold-deep underline underline-offset-4">
                          Choose
                        </button>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                <ContactField id={`${uid}-name`} label="Your name" required value={contact.name} error={errors.name} autoComplete="name" onChange={(v) => setContact((c) => ({ ...c, name: v }))} />
                <ContactField id={`${uid}-phone`} label="Phone or WhatsApp" required type="tel" value={contact.phone} error={errors.phone} autoComplete="tel" onChange={(v) => setContact((c) => ({ ...c, phone: v }))} />
                <ContactField id={`${uid}-email`} label="Email (optional)" type="email" value={contact.email} autoComplete="email" onChange={(v) => setContact((c) => ({ ...c, email: v }))} />
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <button type="button" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))} className="btn-outline disabled:pointer-events-none disabled:opacity-35">
            <ArrowLeft aria-hidden className="size-4" strokeWidth={1.75} /> Back
          </button>
          {!isSummary ? (
            <button type="button" onClick={() => setStep((s) => s + 1)} className="btn-primary">
              {answers[current.key] ? "Continue" : "Skip for now"} <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
            </button>
          ) : (
            <button type="button" onClick={submit} className="btn-whatsapp">
              <WhatsAppIcon /> Send brief on WhatsApp
            </button>
          )}
        </div>
      </div>

      <aside aria-label="Your brief so far" className="sticky top-28 hidden self-start rounded-2xl border border-line bg-porcelain p-6 lg:block">
        <h2 className="font-display text-xl font-medium text-ink">Your brief so far</h2>
        <ul className="mt-4 divide-y divide-line">
          {STEPS.map((s) => {
            const val = answers[s.key];
            return (
              <li key={s.key} className="flex items-center justify-between gap-3 py-2.5">
                <div className="min-w-0">
                  <div className="text-xs text-ink-soft">{s.label}</div>
                  <div className={cn("truncate text-sm font-medium", val ? "text-ink" : "text-ink-soft/70")}>{val ?? "Not chosen yet"}</div>
                </div>
                {val && <Check aria-hidden className="size-4 shrink-0 text-gold-deep" strokeWidth={2} />}
              </li>
            );
          })}
        </ul>
        <p className="mt-4 border-t border-line pt-4 text-sm text-ink-soft tabular-nums">
          {answered} of {STEPS.length} answered
        </p>
      </aside>
    </div>
  );
}

function ContactField({
  id,
  label,
  type = "text",
  value,
  error,
  required,
  autoComplete,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
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
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "h-12 w-full rounded-lg border bg-porcelain px-4 text-[15px] text-ink transition-colors duration-150 hover:border-ink/30 focus-visible:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40",
          error ? "border-destructive" : "border-line",
        )}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
