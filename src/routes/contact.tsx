import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LeadForm } from "@/components/site/LeadForm";
import { WhatsAppIcon } from "@/components/site/ProductCard";
import { absoluteUrl, coverPhoto } from "@/data/catalog";
import { ADDRESS_LINE, SITE, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Quote — Sneha’s Wrapzz Gifting, Hyderabad" },
      { name: "description", content: `Call or WhatsApp ${SITE.phoneDisplay}, or visit our studio in ${SITE.address.locality}, ${SITE.address.city}. Personal gifts, corporate hampers and bulk orders. We reply within one working day.` },
      { property: "og:title", content: "Get a Quote — Sneha’s Wrapzz Gifting" },
      { property: "og:description", content: "Call, WhatsApp or send a brief. We reply within one working day." },
      { property: "og:url", content: absoluteUrl("/contact") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: ContactPage,
});

const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ADDRESS_LINE}, India`)}`;

function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Get a quote" }]}
        title="Tell us what you are planning."
        description="Personal gifts, corporate hampers or bulk orders. WhatsApp is the fastest way to reach the studio; we reply within one working day."
        photo={coverPhoto("velvet-tray-hamper-with-photo-frame")}
        actions={
          <a href={whatsappLink(`Hi ${SITE.name}, I'd like to plan a gift.`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WhatsAppIcon /> WhatsApp {SITE.phoneDisplay}
          </a>
        }
      />

      <section className="bg-porcelain py-16 md:py-24">
        <div className="page-x grid gap-12 lg:grid-cols-12 lg:gap-10">
          <dl className="divide-y divide-line border-y border-line lg:col-span-4">
            <div className="py-6">
              <dt className="text-sm text-ink-soft">Call or WhatsApp</dt>
              <dd className="mt-1.5">
                <a href={SITE.phoneHref} className="font-display text-2xl text-ink tabular-nums hover:text-gold-deep">
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-sm text-ink-soft">Studio</dt>
              <dd className="mt-1.5">
                <address className="font-display text-xl not-italic leading-snug text-ink">
                  {SITE.address.street},<br />
                  {SITE.address.locality}, {SITE.address.city} {SITE.address.postalCode}
                </address>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                  Get directions
                </a>
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-sm text-ink-soft">Instagram and reviews</dt>
              <dd className="mt-1.5 space-y-2">
                <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="block font-display text-xl text-ink hover:text-gold-deep">
                  {SITE.instagram.handle}
                </a>
                <a href={SITE.reviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                  Read {SITE.reviews}+ Google reviews
                </a>
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-sm text-ink-soft">Planning for a company?</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-ink">
                Branded hampers and identical favors in any quantity.{" "}
                <Link to="/bulk-orders" className="font-semibold underline decoration-line underline-offset-4 hover:decoration-ink">
                  Bulk and corporate quotes
                </Link>
              </dd>
            </div>
          </dl>
          <div className="lg:col-span-7 lg:col-start-6">
            <LeadForm title="Send us a brief" subtitle="It opens as a WhatsApp message to the studio, ready for you to send." />
          </div>
        </div>
      </section>
    </>
  );
}
