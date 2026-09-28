import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/site/Contact";
import { STUDIO, media } from "@/data/catalog";

const SITE = "https://snehawrapzz.lovable.app";
const TITLE = "Contact & Enquiries — Sneha's Wrapzz, Secunderabad";
const DESC = `Enquire about silver decor, hampers, festive gifting or a bulk order. Call or WhatsApp ${STUDIO.phone}, or send the details through the enquiry form.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: STUDIO.legalName,
          telephone: STUDIO.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot no 49, Krishna, Sindhi Colony",
            addressLocality: "Secunderabad",
            addressRegion: "Hyderabad",
            postalCode: "500003",
            addressCountry: "IN",
          },
          url: `${SITE}/contact`,
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        eyebrow="Enquiries"
        title="Start an enquiry."
        description="Orders are quoted per enquiry. Tell us the collection or piece, the quantity and the date you need it by."
        asset={media("hampers-12")}
        actions={
          <>
            <a
              href={STUDIO.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="min-h-[48px] btn-primary"
            >
              Message on WhatsApp
            </a>
            <a
              href={STUDIO.phoneHref}
              className="link-underline inline-flex min-h-[44px] items-center text-sm font-semibold text-charcoal"
            >
              {STUDIO.phone}
            </a>
          </>
        }
      />

      <Contact />
    </>
  );
}
