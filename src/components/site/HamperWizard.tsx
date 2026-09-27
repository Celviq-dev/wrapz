import { useState } from "react";

const STEPS = [
  { key: "occasion", label: "Occasion", options: ["Birthday", "Anniversary", "Wedding", "Diwali", "New Year", "Corporate", "Baby Shower", "Housewarming"] },
  { key: "recipient", label: "Recipient", options: ["For Her", "For Him", "Couple", "Parents", "Kids", "Team / Employees", "Clients", "Leadership"] },
  { key: "budget", label: "Budget / gift", options: ["Under ₹1,000", "₹1,000 – ₹2,000", "₹2,000 – ₹5,000", "₹5,000 – ₹10,000", "Above ₹10,000"] },
  { key: "theme", label: "Theme", options: ["Warm & Rustic", "Modern Minimal", "Festive & Ornate", "Sustainable / Earthy", "Executive / Refined"] },
  { key: "packaging", label: "Packaging", options: ["Rigid Box", "Magnetic Box", "Wooden Box", "Tray / Basket", "Paper Bag", "Transparent PVC"] },
  { key: "personalization", label: "Personalization", options: ["Name / Monogram", "Photo Print", "Handwritten Card", "Brand Logo", "No personalization"] },
  { key: "quantity", label: "Quantity", options: ["1 – 10", "10 – 50", "50 – 200", "200 – 500", "500+"] },
] as const;

type StepKey = (typeof STEPS)[number]["key"];

export function HamperWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<StepKey, string>>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const isSummary = step === STEPS.length;
  const total = STEPS.length + 1;
  const progress = ((step + 1) / total) * 100;

  const current = STEPS[step];
  const selected = current && answers[current.key];

  if (sent) {
    return (
      <div className="rounded-3xl border border-beige bg-cream p-10 md:p-14 text-center shadow-soft">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/15 text-sage text-3xl">✓</div>
        <h3 className="mt-6 font-display text-3xl font-semibold text-charcoal">Your hamper brief is in.</h3>
        <p className="mt-3 text-warm-gray max-w-lg mx-auto">
          Our gifting concierge will assemble two or three curated hamper
          concepts and write back within one working day.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-beige bg-cream p-6 md:p-10 shadow-soft">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-warm-gray">
        <span>Step {Math.min(step + 1, total)} of {total}</span>
        <span>{isSummary ? "Review & submit" : current.label}</span>
      </div>
      <div className="mt-3 h-1 rounded-full bg-beige overflow-hidden">
        <div className="h-full bg-sage transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-8 min-h-[280px]">
        {!isSummary ? (
          <>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-charcoal">
              {promptFor(current.key)}
            </h3>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              {current.options.map((opt) => {
                const active = answers[current.key] === opt;
                return (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setAnswers((a) => ({ ...a, [current.key]: opt }))}
                    className={`rounded-xl border px-4 py-4 text-sm text-left transition ${
                      active
                        ? "border-sage bg-sage/10 text-charcoal"
                        : "border-beige bg-ivory text-charcoal hover:border-bronze"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-charcoal">
              Your hamper brief
            </h3>
            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STEPS.map((s) => (
                <div key={s.key} className="rounded-xl border border-beige bg-ivory p-4">
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-bronze">{s.label}</dt>
                  <dd className="mt-1 text-sm text-charcoal font-medium">{answers[s.key] ?? "—"}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="rounded-lg border border-beige bg-ivory px-4 py-3 text-sm" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="rounded-lg border border-beige bg-ivory px-4 py-3 text-sm" />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" type="tel" className="rounded-lg border border-beige bg-ivory px-4 py-3 text-sm" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="btn-outline disabled:opacity-40"
        >
          ← Back
        </button>
        {!isSummary ? (
          <button
            type="button"
            disabled={!selected}
            onClick={() => setStep((s) => s + 1)}
            className="btn-primary disabled:opacity-40"
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            disabled={!name || !email || !phone}
            onClick={() => setSent(true)}
            className="btn-terracotta disabled:opacity-40"
          >
            Submit brief →
          </button>
        )}
      </div>
    </div>
  );
}

function promptFor(key: StepKey) {
  switch (key) {
    case "occasion": return "What's the occasion?";
    case "recipient": return "Who is it for?";
    case "budget": return "What's your budget per gift?";
    case "theme": return "Pick a mood or theme.";
    case "packaging": return "How should it be presented?";
    case "personalization": return "Any personalization?";
    case "quantity": return "How many hampers do you need?";
  }
}
