import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().min(6, "Phone looks too short").max(20),
  email: z.string().trim().email("Enter a valid email").max(160),
  purpose: z.string().trim().min(2, "Tell us the occasion").max(120),
  quantity: z.string().trim().max(60).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(1200).optional().or(z.literal("")),
});

export type LeadFormValues = z.infer<typeof schema>;

export function LeadForm({
  title = "Request a quote",
  subtitle = "Tell us what you're planning — we'll come back within one working day.",
  compact = false,
  variant = "sage",
}: {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  variant?: "sage" | "terracotta";
}) {
  const [values, setValues] = useState<LeadFormValues>({
    name: "",
    company: "",
    phone: "",
    email: "",
    purpose: "",
    quantity: "",
    budget: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormValues, string>>>({});
  const [sent, setSent] = useState(false);

  const btnClass = variant === "terracotta" ? "btn-terracotta" : "btn-primary";

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
      return;
    }
    setErrors({});
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-beige bg-cream p-10 text-center shadow-soft">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-sage text-2xl">
          ✓
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-charcoal">
          Thank you — your request is with us.
        </h3>
        <p className="mt-3 text-warm-gray max-w-md mx-auto">
          A gifting concierge will write back within one working day with curated
          options and next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-beige bg-cream p-7 md:p-10 shadow-soft"
      noValidate
    >
      {(title || subtitle) && (
        <div className="mb-7">
          {title && (
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-charcoal">
              {title}
            </h3>
          )}
          {subtitle && <p className="mt-2 text-warm-gray text-[15px]">{subtitle}</p>}
        </div>
      )}

      <div className={`grid grid-cols-1 ${compact ? "" : "md:grid-cols-2"} gap-5`}>
        <Field label="Name" id="name" value={values.name} error={errors.name} onChange={(v) => update("name", v)} required />
        <Field label="Company (optional)" id="company" value={values.company ?? ""} onChange={(v) => update("company", v)} />
        <Field label="Phone" id="phone" type="tel" value={values.phone} error={errors.phone} onChange={(v) => update("phone", v)} required />
        <Field label="Email" id="email" type="email" value={values.email} error={errors.email} onChange={(v) => update("email", v)} required />
        <Field label="Gifting purpose" id="purpose" placeholder="Diwali hampers, joinee kits…" value={values.purpose} error={errors.purpose} onChange={(v) => update("purpose", v)} required />
        <Field label="Quantity (approx)" id="quantity" placeholder="e.g. 50 kits" value={values.quantity ?? ""} onChange={(v) => update("quantity", v)} />
        <Field label="Budget per gift" id="budget" placeholder="₹ range or total" value={values.budget ?? ""} onChange={(v) => update("budget", v)} />
        <Field label="Delivery location" id="location" placeholder="City / pan-India / multi-city" value={values.location ?? ""} onChange={(v) => update("location", v)} />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
          Anything else we should know?
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message ?? ""}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Timeline, branding, personalization notes…"
          className="w-full rounded-lg border border-beige bg-ivory px-4 py-3 text-[15px] text-charcoal placeholder:text-warm-gray/70 focus:outline-none focus:border-olive focus:ring-2 focus:ring-champagne/40 transition"
        />
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-warm-gray">
          We reply within one working day. No spam, just gifting.
        </p>
        <button type="submit" className={btnClass}>
          Send request →
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-charcoal mb-2">
        {label} {required && <span className="text-terracotta">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className={`w-full rounded-lg border ${
          error ? "border-terracotta" : "border-beige"
        } bg-ivory px-4 py-3 text-[15px] text-charcoal placeholder:text-warm-gray/70 focus:outline-none focus:border-olive focus:ring-2 focus:ring-champagne/40 transition`}
      />
      {error && <p className="mt-1 text-xs text-terracotta">{error}</p>}
    </div>
  );
}
