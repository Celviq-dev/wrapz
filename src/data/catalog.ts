// Catalog data for Sneha Wrapzz — drives dynamic category / occasion / budget routes
// and shared listing components. All copy is original.

import heroGift from "@/assets/hero-gift.jpg";
import corp from "@/assets/collection-corporate.jpg";
import festival from "@/assets/collection-festival.jpg";
import personal from "@/assets/collection-personal.jpg";
import wedding from "@/assets/collection-wedding.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  tags: string[];
};

export type Category = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  group: "personalized" | "corporate" | "packaging" | "festive";
  productSlugs?: string[];
};

export type Occasion = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export type BudgetRange = {
  slug: string;
  label: string;
  min: number;
  max: number | null;
  description: string;
};

const img = { heroGift, corp, festival, personal, wedding, gallery1, gallery2, gallery3, gallery4 };

export const PRODUCTS: Product[] = [
  { slug: "linen-keepsake-box", name: "Linen Keepsake Box", tagline: "Hand-stitched ivory linen, magnetic close", price: "₹ 1,650", image: img.personal, tags: ["personalized", "keepsakes"] },
  { slug: "champagne-ribbon-hamper", name: "Champagne Ribbon Hamper", tagline: "Rigid box, satin ribbon, dried florals", price: "₹ 2,400", image: img.wedding, tags: ["wedding", "hampers"] },
  { slug: "welcome-kit-classic", name: "Welcome Kit — Classic", tagline: "Notebook, mug, tote, branded card", price: "₹ 1,200 / kit", image: img.corp, tags: ["corporate", "onboarding"] },
  { slug: "festive-diya-hamper", name: "Festive Diya Hamper", tagline: "Brass diyas, artisanal sweets, wrapped in silk", price: "₹ 3,100", image: img.festival, tags: ["festive", "diwali"] },
  { slug: "wooden-heritage-box", name: "Wooden Heritage Box", tagline: "Sheesham wood, laser-etched monogram", price: "₹ 2,800", image: img.gallery1, tags: ["packaging", "wooden"] },
  { slug: "translucent-window-box", name: "Translucent Window Box", tagline: "Rigid frame with a soft acetate window", price: "₹ 480 / pc", image: img.gallery2, tags: ["packaging", "window"] },
  { slug: "executive-leather-set", name: "Executive Leather Set", tagline: "Notebook, card holder, pen — bronze foiled", price: "₹ 4,200", image: img.gallery3, tags: ["corporate", "executive"] },
  { slug: "photo-memory-frame", name: "Photo Memory Frame", tagline: "Personalized print, hand-finished frame", price: "₹ 1,150", image: img.gallery4, tags: ["personalized", "photo"] },
  { slug: "muslin-tray-basket", name: "Muslin Tray Basket", tagline: "Cotton-lined bamboo tray for hampers", price: "₹ 690 / pc", image: img.corp, tags: ["packaging", "tray"] },
  { slug: "monogram-paper-bag", name: "Monogram Paper Bag", tagline: "Kraft paper, foil-stamped initials", price: "₹ 120 / pc", image: img.festival, tags: ["packaging", "paperbag"] },
  { slug: "baby-arrival-hamper", name: "Baby Arrival Hamper", tagline: "Muslin swaddles, silver rattle, keepsake card", price: "₹ 2,950", image: img.personal, tags: ["personalized", "baby"] },
  { slug: "sustainable-desk-kit", name: "Sustainable Desk Kit", tagline: "Cork coaster, seed pen, recycled notebook", price: "₹ 1,450 / kit", image: img.gallery2, tags: ["corporate", "sustainable"] },
];

export const CATEGORIES: Category[] = [
  // Personalized
  { slug: "gifts-for-her", title: "Gifts for Her", eyebrow: "Personalized", description: "Thoughtful, feminine gifting — from keepsakes to curated hampers.", image: img.personal, group: "personalized" },
  { slug: "gifts-for-him", title: "Gifts for Him", eyebrow: "Personalized", description: "Grounded, quietly premium gifts for the men who notice detail.", image: img.gallery3, group: "personalized" },
  { slug: "gifts-for-couples", title: "Gifts for Couples", eyebrow: "Personalized", description: "Shared moments, doubled — anniversaries, housewarmings, milestones.", image: img.wedding, group: "personalized" },
  { slug: "gifts-for-parents", title: "Gifts for Parents", eyebrow: "Personalized", description: "Warm, unhurried gestures for the people who raised us.", image: img.gallery4, group: "personalized" },
  { slug: "gifts-for-kids", title: "Gifts for Kids", eyebrow: "Personalized", description: "Storybook packaging, playful contents, kept-forever cards.", image: img.festival, group: "personalized" },
  { slug: "photo-gifts", title: "Photo Gifts", eyebrow: "Personalized", description: "Prints, frames, and albums that hold a specific afternoon.", image: img.gallery1, group: "personalized" },
  { slug: "name-gifts", title: "Name & Monogram", eyebrow: "Personalized", description: "Foil-stamped, engraved, or embroidered — quietly personal.", image: img.gallery2, group: "personalized" },
  { slug: "keepsake-boxes", title: "Keepsake Boxes", eyebrow: "Personalized", description: "Hand-finished boxes made to be kept long after the gift is unwrapped.", image: img.personal, group: "personalized" },
  { slug: "wedding-return-gifts", title: "Wedding Return Gifts", eyebrow: "Personalized", description: "Consistent, elegant tokens for guests who travelled for you.", image: img.wedding, group: "personalized" },
  { slug: "baby-shower-gifts", title: "Baby Shower Gifts", eyebrow: "Personalized", description: "Soft palettes, keepable pieces, thoughtful new-parent extras.", image: img.personal, group: "personalized" },

  // Corporate
  { slug: "employee-onboarding-kits", title: "Employee Onboarding Kits", eyebrow: "Corporate", description: "First-day kits that set the tone — branded, useful, and warmly presented.", image: img.corp, group: "corporate" },
  { slug: "festive-corporate", title: "Festive Corporate Gifting", eyebrow: "Corporate", description: "Diwali, New Year, and year-end hampers for teams and clients at scale.", image: img.festival, group: "corporate" },
  { slug: "client-gifting", title: "Client Gifting", eyebrow: "Corporate", description: "Considered, brand-aligned gifts that quietly deepen relationships.", image: img.corp, group: "corporate" },
  { slug: "appreciation-rewards", title: "Appreciation & Rewards", eyebrow: "Corporate", description: "Milestones, long-service moments, and quarterly recognition kits.", image: img.gallery3, group: "corporate" },
  { slug: "event-gifting", title: "Event & Conference Kits", eyebrow: "Corporate", description: "On-brand kits for offsites, conferences, and launches.", image: img.gallery1, group: "corporate" },
  { slug: "leadership-gifts", title: "Leadership Gifts", eyebrow: "Corporate", description: "Restrained, executive-grade gifting for boards, partners, and VIPs.", image: img.gallery3, group: "corporate" },
  { slug: "wfh-desk-kits", title: "Work-From-Home Kits", eyebrow: "Corporate", description: "Desk essentials that make remote teams feel included and cared for.", image: img.gallery2, group: "corporate" },
  { slug: "sustainable-gifts", title: "Sustainable Gifts", eyebrow: "Corporate", description: "Low-impact materials, recycled packaging, and responsibly-sourced picks.", image: img.gallery2, group: "corporate" },

  // Packaging
  { slug: "rigid-boxes", title: "Rigid Boxes", eyebrow: "Packaging", description: "Structured, premium boxes that hold their shape and their story.", image: img.gallery1, group: "packaging" },
  { slug: "window-boxes", title: "Window Boxes", eyebrow: "Packaging", description: "Framed reveals — a first look before the ribbon is undone.", image: img.gallery2, group: "packaging" },
  { slug: "magnetic-boxes", title: "Magnetic Boxes", eyebrow: "Packaging", description: "Soft-close lids with an unmistakably premium open.", image: img.gallery1, group: "packaging" },
  { slug: "collapsible-boxes", title: "Collapsible Boxes", eyebrow: "Packaging", description: "Flat-pack shipping, full-body presentation — clever and clean.", image: img.gallery4, group: "packaging" },
  { slug: "wooden-boxes", title: "Wooden Boxes", eyebrow: "Packaging", description: "Sheesham, mango, and pine — engraved or foiled to order.", image: img.gallery3, group: "packaging" },
  { slug: "trays-baskets", title: "Trays & Baskets", eyebrow: "Packaging", description: "Cane, bamboo, and lined trays for hamper arrangements.", image: img.corp, group: "packaging" },
  { slug: "paper-bags", title: "Paper Bags", eyebrow: "Packaging", description: "Kraft, coated, and foil-stamped paper bags in your palette.", image: img.festival, group: "packaging" },
  { slug: "transparent-packaging", title: "Transparent Packaging", eyebrow: "Packaging", description: "Clear PVC pouches and acetate boxes for a modern reveal.", image: img.gallery2, group: "packaging" },
  { slug: "festive-packaging", title: "Festive Packaging", eyebrow: "Packaging", description: "Diwali, Eid, Christmas, and New Year — seasonal palettes ready.", image: img.festival, group: "packaging" },
  { slug: "custom-branded-packaging", title: "Custom Branded Packaging", eyebrow: "Packaging", description: "Your logo, palette, and voice — printed, foiled, or embossed.", image: img.corp, group: "packaging" },
  { slug: "hamper-accessories", title: "Hamper Accessories", eyebrow: "Packaging", description: "Ribbons, tags, shredded fill, tissue, and finishing touches.", image: img.wedding, group: "packaging" },
];

export const OCCASIONS: Occasion[] = [
  { slug: "birthdays", title: "Birthday Gifts", description: "For the ones who mark another loop around the sun with warmth.", image: img.personal },
  { slug: "anniversaries", title: "Anniversary Gifts", description: "Marking years with something worth keeping.", image: img.wedding },
  { slug: "weddings", title: "Wedding Hampers & Return Gifts", description: "Consistent, elegant gifting from mehendi to reception.", image: img.wedding },
  { slug: "baby-shower", title: "Baby Shower", description: "Soft-palette gifting for growing families.", image: img.personal },
  { slug: "housewarming", title: "Housewarming", description: "Warm, useful, quietly luxurious — for a new address.", image: img.gallery4 },
  { slug: "diwali", title: "Diwali Gifting", description: "Festive hampers for family, teams, and clients — at every scale.", image: img.festival },
  { slug: "year-end", title: "Year-End Gifting", description: "Bulk festive hampers for corporate closes and holiday sends.", image: img.festival },
  { slug: "employee-joining", title: "Employee Joining", description: "First-day kits that make new hires feel chosen.", image: img.corp },
  { slug: "client-appreciation", title: "Client Appreciation", description: "Understated gestures that keep long relationships warm.", image: img.corp },
];

export const BUDGETS: BudgetRange[] = [
  { slug: "under-500", label: "Under ₹500", min: 0, max: 500, description: "Thoughtful tokens, favours, and small-scale gifting." },
  { slug: "500-1000", label: "₹500 – ₹1,000", min: 500, max: 1000, description: "Small hampers, keepsake gifts, and single-item presentation." },
  { slug: "1000-2000", label: "₹1,000 – ₹2,000", min: 1000, max: 2000, description: "The everyday premium band — hampers, welcome kits, boxed gifts." },
  { slug: "2000-5000", label: "₹2,000 – ₹5,000", min: 2000, max: 5000, description: "Substantial hampers, executive gifts, and wedding-scale sets." },
  { slug: "above-5000", label: "Above ₹5,000", min: 5000, max: null, description: "Signature hampers, leadership gifts, and bespoke presentation." },
];

export const GIFTING_INTENTS = [
  { slug: "employee-onboarding-kits", title: "Employee Joining Kits", body: "First-day kits that feel warmly considered." },
  { slug: "client-gifting", title: "Client Gifting", body: "Considered, quietly memorable — never generic." },
  { slug: "festive-corporate", title: "Festive Hampers", body: "Diwali, New Year, year-end — at team scale." },
  { slug: "appreciation-rewards", title: "Appreciation Gifts", body: "Milestones, thank-yous, and rewards that land." },
  { slug: "birthdays", title: "Birthday & Anniversary", body: "Personal moments, presented beautifully.", type: "occasion" as const },
  { slug: "event-gifting", title: "Event Giveaways", body: "On-brand kits for offsites, launches, conferences." },
  { slug: "leadership-gifts", title: "Executive Gifts", body: "Restrained, board-level gifting done right." },
  { slug: "sustainable-gifts", title: "Sustainable Gifts", body: "Low-impact materials, thoughtfully sourced." },
  { slug: "wedding-return-gifts", title: "Wedding Hampers", body: "Cohesive gifting across every function." },
  { slug: "keepsake-boxes", title: "Keepsakes", body: "Small, kept-forever objects with meaning." },
];

export const PACKAGING_STRIP = [
  { slug: "rigid-boxes", label: "Rigid Boxes" },
  { slug: "window-boxes", label: "Window Boxes" },
  { slug: "collapsible-boxes", label: "Collapsible Boxes" },
  { slug: "wooden-boxes", label: "Wooden Boxes" },
  { slug: "trays-baskets", label: "Trays & Baskets" },
  { slug: "paper-bags", label: "Paper Bags" },
  { slug: "transparent-packaging", label: "PVC / Transparent" },
  { slug: "magnetic-boxes", label: "Hamper Boxes" },
  { slug: "festive-packaging", label: "Festive Packaging" },
  { slug: "custom-branded-packaging", label: "Custom Branded" },
];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
export function getOccasion(slug: string) {
  return OCCASIONS.find((o) => o.slug === slug);
}
export function getBudget(slug: string) {
  return BUDGETS.find((b) => b.slug === slug);
}
export function productsForCategory(slug: string): Product[] {
  const cat = getCategory(slug);
  if (!cat) return [];
  // Cheap tag-match; falls back to a rotating slice so listings always feel full.
  const matched = PRODUCTS.filter((p) => p.tags.some((t) => cat.slug.includes(t) || t.includes(cat.group)));
  return matched.length >= 4 ? matched : [...matched, ...PRODUCTS].slice(0, 8);
}
