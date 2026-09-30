import { useId, useState } from "react";
import { Check } from "lucide-react";
import { z } from "zod";
import { SITE, whatsappLink } from "@/data/site";
import { emit, Sig } from "@/lib/reticle-signals";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./ProductCard";

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().min(6, "Phone looks too short").max(20),
  email: z.string().trim().email("Enter a valid email").max(160).optional().or(z.literal("")),
  purpose: z.string().trim().min(2, "Tell us the occasion").max(120),
  quantity: z.string().trim().max(60).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(1200).optional().or(z.literal("")),
});

export type LeadFormValues = z.infer<typeof schema>;

const LABELS: Record<keyof LeadFormValues, string> = {
  name: "Name",
  company: "Company",
  phone: "Phone",
  email: "Email",
  purpose: "Occasion",
  quantity: "Quantity",
  budget: "Budget per gift",
  location: "Delivery to",
  message: "Notes",
};

/** Enquiries go to the studio's WhatsApp, pre-filled, since that is where orders are handled. */
function toMessage(v: LeadFormValues) {
  const lines = (Object.keys(LABELS) as Array<keyof LeadFormValues>)
    .filter((k) => v[k])
    .map((k) => `${LABELS[k]}: ${v[k]}`);
  return `Hi ${SITE.name}, I'd like a quote.\n\n${lines.join("\n")}`;
}

export function LeadForm({
  title = "Request a quote",
  subtitle = "Tell us what you're planning. We'll come back within one working day.",
  compact = false,
  purpose = "",
}: {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  /** Pre-fills the occasion field, e.g. with the product or category being viewed. */
  purpose?: string;
}) {
  const uid = useId();
  const [values, setValues] = useState<LeadFormValues>({
    name: "",
    company: "",
    phone: "",
    email: "",
    purpose,
    quantity: "",
    budget: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormValues, string>>>({});
  const [sentTo, setSentTo] = useState<string | null>(null);


  function update<K extends keyof LeadFormValues>(k: K, v: LeadFormValues[K]) {
    setValues((s) => ({ ...s, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Partial<Record<keyof LeadFormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof LeadFormValues;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      document.getElementById(`${uid}-${Object.keys(errs)[0]}`)?.focus();
      emit(Sig.ENQUIRY_BLOCKED, { form: "quote", fields: Object.keys(errs) });
      return;
    }
    setErrors({});
    const url = whatsappLink(toMessage(parsed.data));
    window.open(url, "_blank", "noopener,noreferrer");
    setSentTo(url);
    emit(Sig.ENQUIRY_READY, { form: "quote", fields: Object.keys(parsed.data).filter((k) => parsed.data[k as keyof LeadFormValues]) });
  }

  if (sentTo) {
    return (
      <div role="status" className="rounded-2xl border border-line bg-surface p-10 text-center shadow-soft">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-sage/15 text-sage" aria-hidden>
          <Check className="size-6" strokeWidth={1.75} />
        </div>
        <h2 className="mt-5 font-display text-2xl font-medium text-ink">
          Your enquiry is ready on WhatsApp.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Press send in WhatsApp and our studio will reply within one working day. If it didn&apos;t
          open,{" "}
          <a href={sentTo} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">
            open WhatsApp
          </a>{" "}
          or call us on{" "}
          <a href={SITE.phoneHref} className="font-semibold text-ink underline underline-offset-4">
            {SITE.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  const field = (k: keyof LeadFormValues, label: string, extra: Partial<FieldProps> = {}) => (
    <Field
      id={`${uid}-${k}`}
      label={label}
      value={values[k] ?? ""}
      error={errors[k]}
      onChange={(v) => update(k, v)}
      {...extra}
    />
  );

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-6 shadow-soft md:p-10" noValidate>
      {(title || subtitle) && (
        <div className="mb-7">
          {title && <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">{title}</h2>}
          {subtitle && <p className="mt-2 text-[15px] text-ink-soft">{subtitle}</p>}
        </div>
      )}

      <div className={`grid grid-cols-1 ${compact ? "" : "md:grid-cols-2"} gap-5`}>
        {field("name", "Name", { required: true, autoComplete: "name" })}
        {field("phone", "Phone / WhatsApp", { required: true, type: "tel", autoComplete: "tel" })}
        {field("email", "Email (optional)", { type: "email", autoComplete: "email" })}
        {field("company", "Company (optional)", { autoComplete: "organization" })}
        {field("purpose", "Occasion or product", { required: true, placeholder: "Diwali hampers, return gifts…" })}
        {field("quantity", "Quantity (approx)", { placeholder: "e.g. 50 gifts" })}
        {field("budget", "Budget per gift", { placeholder: "₹ range" })}
        {field("location", "Delivery location", { placeholder: "City / pan-India / multi-city", autoComplete: "address-level2" })}
      </div>

      <div className="mt-5">
        <label htmlFor={`${uid}-message`} className="mb-2 block text-sm font-medium text-ink">
          Anything else we should know?
        </label>
        <textarea
          id={`${uid}-message`}
          rows={4}
          value={values.message ?? ""}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Timeline, branding, personalization notes…"
          className={cn(CONTROL, "border-line py-3")}
        />
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-[34ch] text-[13px] text-ink-soft">Opens WhatsApp with your details filled in. Nothing is sent until you press send there.</p>
        <button type="submit" data-testid="quote-send" className="btn-whatsapp">
          <WhatsAppIcon /> Send on WhatsApp
        </button>
      </div>
    </form>
  );
}

const CONTROL =
  "w-full rounded-lg border bg-porcelain px-4 text-[15px] text-ink placeholder:text-ink-soft transition-colors duration-150 hover:border-ink/30 focus-visible:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40";

type FieldProps = {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  required?: boolean;
  autoComplete?: string;
};

function Field({ label, id, type = "text", placeholder, value, error, onChange, required, autoComplete }: FieldProps) {
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
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(CONTROL, "h-12", error ? "border-destructive" : "border-line")}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
