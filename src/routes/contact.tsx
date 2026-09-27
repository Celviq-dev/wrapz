import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sneha Wrapzz Gifting Studio" },
      { name: "description", content: "Get in touch with the Sneha Wrapzz gifting studio — for personal gifts, corporate hampers, and packaging enquiries. Response within one working day." },
      { property: "og:title", content: "Contact — Sneha Wrapzz Gifting Studio" },
      { property: "og:description", content: "Reach the Sneha Wrapzz studio — email, WhatsApp, or the enquiry form. We reply within one working day." },
      { property: "og:url", content: "https://snehawrapzz.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://snehawrapzz.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        tone="cream"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        eyebrow="Say hello"
        title="Let's plan"
        italic="something warm."
        description="Personal gifts, corporate hampers, or packaging enquiries — we respond within one working day."
      />

      <section className="pb-24 md:pb-32 bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10">
          <div className="space-y-6">
            <div className="rounded-2xl border border-beige bg-cream p-7 shadow-soft">
              <div className="text-[11px] uppercase tracking-[0.18em] text-bronze">Email</div>
              <a href="mailto:hello@snehawrapzz.com" className="mt-2 block font-display text-xl text-charcoal link-underline">hello@snehawrapzz.com</a>
            </div>
            <div className="rounded-2xl border border-beige bg-cream p-7 shadow-soft">
              <div className="text-[11px] uppercase tracking-[0.18em] text-bronze">WhatsApp</div>
              <a href="https://wa.me/919999999999" className="mt-2 block font-display text-xl text-charcoal link-underline">+91 99999 99999</a>
              <p className="mt-2 text-sm text-warm-gray">Fastest way to reach a gifting concierge.</p>
            </div>
            <div className="rounded-2xl border border-beige bg-cream p-7 shadow-soft">
              <div className="text-[11px] uppercase tracking-[0.18em] text-bronze">Studio</div>
              <div className="mt-2 font-display text-xl text-charcoal">By appointment</div>
              <p className="mt-2 text-sm text-warm-gray leading-relaxed">Mumbai, India · Mon–Sat · 11am – 7pm IST</p>
            </div>
            <div className="rounded-2xl border border-beige bg-cream p-7 shadow-soft">
              <div className="text-[11px] uppercase tracking-[0.18em] text-bronze">Instagram</div>
              <a href="https://instagram.com" className="mt-2 block font-display text-xl text-charcoal link-underline">@snehawrapzz</a>
            </div>
          </div>

          <LeadForm title="Send us a note" subtitle="Tell us what you're planning — we'll write back within a working day." variant="terracotta" />
        </div>
      </section>
    </>
  );
}
