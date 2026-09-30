// Single source of truth for business details, all taken from the brand's own catalogs: phone,
// WhatsApp and address from the contact page, the name from the gold seal, the Instagram handle
// from the "wrapzz gifting india" sign-off and the review from the catalog's "Words that mean the
// world" page. The catalogs list no email address, so the site offers none.

export const SITE = {
  name: "Sneha’s Wrapzz",
  legalName: "Sneha’s Wrapzz Gifting",
  url: "https://snehawrapzz.lovable.app",
  phoneDisplay: "+91 99663 07889",
  phoneHref: "tel:+919966307889",
  whatsapp: "919966307889",
  instagram: { handle: "@wrapzzgiftingindia", url: "https://www.instagram.com/wrapzzgiftingindia/" },
  reviewsUrl: "https://share.google/90nFY2n3HkGTklTR9",
  address: {
    street: "Plot No. 49, Krishna, Sindhi Colony",
    locality: "Secunderabad",
    city: "Hyderabad",
    region: "Telangana",
    postalCode: "500003",
    country: "IN",
  },
  hours: "Mon – Sat · 11am – 7pm IST",
  customers: 5000,
  reviews: 300,
} as const;

/** A five-star Google review the studio published in its own catalog. */
export const FEATURED_REVIEW = {
  author: "Aashray R.",
  source: "Google review",
  rating: 5,
  quote:
    "Excellent experience from start to finish. The box quality was outstanding and looked very premium. A special thanks to Sneha for being so responsive, patient, and helpful throughout the entire process. She made the customization easy and ensured everything was perfect.",
} as const;

export const ADDRESS_LINE = `${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.city} ${SITE.address.postalCode}`;

export function whatsappLink(text?: string) {
  return `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}
