// Catalog model for Sneha’s Wrapzz. Every product and photo comes from the brand's own PDF
// catalogs, organised by the pillars of Sneha_Wrapzz_Master_Catalog.xlsx. Product rows are
// generated into ./products.ts; categories, occasions and budgets below curate them.

import { PRODUCTS } from "./products";
import { SITE } from "./site";

export { PRODUCTS };

export type PillarKey = "silver" | "hampers" | "corporate" | "festive" | "home" | "pooja";

export type Photo = { path: string; w: number; h: number; alt: string };

export type Product = {
  slug: string;
  name: string;
  spec: string;
  pillar: PillarKey;
  category: string;
  sub: string;
  photos: Photo[];
  tags: string[];
  /** Occasion, curated-category and budget slugs this product belongs to. */
  collections: string[];
  /** Workbook row, e.g. "I007". Absent for catalog photos with no workbook row. */
  ref?: string;
};

export type Pillar = {
  key: PillarKey;
  to: "/silver" | "/personalized" | "/corporate" | "/festive" | "/home-decor" | "/pooja";
  title: string;
  short: string;
  eyebrow: string;
  description: string;
  cover: string;
};

export type Category = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  group: PillarKey | "packaging";
  /** "type" = a workbook sub-category; "curated" = an intent/occasion edit across pillars. */
  kind: "type" | "curated";
  cover?: string;
  /** Kept live for existing links but left out of navigation and the homepage. */
  hidden?: boolean;
};

export type Occasion = { slug: string; title: string; short: string; description: string; cover: string };

export type BudgetRange = {
  slug: string;
  label: string;
  min: number;
  max: number | null;
  description: string;
};

export const PILLARS: Pillar[] = [
  { key: "silver", to: "/silver", title: "Silver Artifacts", short: "Silver", eyebrow: "Silver Collection", description: "Idols, relief art, animal décor, clocks and ritual pieces in a silver finish, many presented in acrylic cases or velvet boxes.", cover: "peacock-pair-on-branches" },
  { key: "hampers", to: "/personalized", title: "Hampers & Keepsakes", short: "Hampers", eyebrow: "Personalized Hampers", description: "Potlis, baskets, tray hampers and hand-painted keepsakes, curated and hand-tied in our Hyderabad studio.", cover: "woven-basket-hamper" },
  { key: "festive", to: "/festive", title: "Diyas & Candles", short: "Festive", eyebrow: "Festive & Seasonal", description: "Wax diyas, candelabras, lanterns and boxed tealight sets for Diwali and every celebration after it.", cover: "three-arm-candelabra" },
  { key: "home", to: "/home-decor", title: "Home & Table", short: "Home & Table", eyebrow: "Home & Table Décor", description: "Dry-fruit bowls, painted trays, cloches, jars and drinkware for festive hosting and housewarmings.", cover: "three-tier-dessert-stand" },
  { key: "pooja", to: "/pooja", title: "Pooja Essentials", short: "Pooja", eyebrow: "Pooja & Ritual", description: "Pooja thalis and Ganesh-Lakshmi sets in velvet and satin-lined presentation boxes.", cover: "scalloped-enamel-pooja-thali-set" },
  { key: "corporate", to: "/corporate", title: "Corporate & Bulk", short: "Corporate", eyebrow: "Corporate & Bulk Gifting", description: "Branded hampers and identical favors in any quantity, finished with your cards and delivered pan-India.", cover: "pichwai-peacock-hamper-boxes" },
];

export const CATEGORIES: Category[] = [
  // Silver
  { slug: "silver-idols", title: "Deities & Idols", eyebrow: "Silver", group: "silver", kind: "type", cover: "ganesh-idol-in-acrylic-case", description: "Ganesh, Lakshmi, Radha-Krishna and more in a silver finish, many in clear acrylic display cases, for the pooja room or a gifting table." },
  { slug: "silver-wall-art", title: "Wall Art & Relief Panels", eyebrow: "Silver", group: "silver", kind: "type", cover: "backlit-radha-krishna-relief-frame", description: "Framed paintings, relief plaques and backlit statement frames that anchor a wall or an entryway." },
  { slug: "silver-animal-decor", title: "Animal Décor", eyebrow: "Silver", group: "silver", kind: "type", cover: "swan-pair-on-pearl-bases", description: "Peacocks, swans, elephants, parrots and koi: auspicious motifs, sold singly and in pairs." },
  { slug: "silver-clocks", title: "Clocks", eyebrow: "Silver", group: "silver", kind: "type", cover: "floral-frame-wall-clock", description: "Mantel and wall clocks framed in silver-finish filigree, mother-of-pearl and deity motifs." },
  { slug: "silver-boxes", title: "Decorative Boxes", eyebrow: "Silver", group: "silver", kind: "type", cover: "scalloped-mother-of-pearl-box", description: "Mother-of-pearl inlay and relief boxes for dry fruits, jewelry or simply to be kept." },
  { slug: "silver-ritual-decor", title: "Ritual & Décor Objects", eyebrow: "Silver", group: "silver", kind: "type", cover: "kalash-brimming-with-coins", description: "Shubh-Labh plaques, kalash, shankh and mandir pieces for pooja rooms, griha pravesh and festive gifting." },
  // Hampers
  { slug: "wrapped-gift-sets", title: "Wrapped Gift Sets", eyebrow: "Hampers", group: "hampers", kind: "type", cover: "potli-and-brownie-basket-hamper", description: "Potlis, baskets, tasselled boxes and tray hampers, curated, wrapped and hand-tied in our studio." },
  { slug: "personalized-keepsakes", title: "Personalized Keepsakes", eyebrow: "Hampers", group: "hampers", kind: "type", cover: "hand-painted-personalized-plate", description: "Hand-painted plates and gift boxes finished with a name, a date or a message." },
  // Festive
  { slug: "diyas", title: "Diyas", eyebrow: "Festive", group: "festive", kind: "type", cover: "rangoli-wax-diyas", description: "Hand-finished wax diyas, hanging diyas and cut-work diya plates for Diwali and every puja." },
  { slug: "candles", title: "Candles & Lanterns", eyebrow: "Festive", group: "festive", kind: "type", cover: "three-arm-candelabra", description: "Candelabras, glass holders and enamel lanterns that make a table glow." },
  { slug: "tealight-sets", title: "Tealight Sets", eyebrow: "Festive", group: "festive", kind: "type", cover: "enamel-hurricane-tealights", description: "Boxed tealight holders, mirror trays and enamel stands, ready to gift." },
  // Home & Table
  { slug: "serveware-trays", title: "Serveware & Trays", eyebrow: "Home & Table", group: "home", kind: "type", cover: "three-tier-dessert-stand", description: "Dry-fruit bowls, painted trays, cloches and dessert stands for festive hosting." },
  { slug: "jars-coasters", title: "Jars, Boxes & Coasters", eyebrow: "Home & Table", group: "home", kind: "type", cover: "glass-jar-set-on-wooden-tray", description: "Glass jars, filigree lidded boxes, painted canisters and coaster sets." },
  { slug: "drinkware-frames", title: "Drinkware & Frames", eyebrow: "Home & Table", group: "home", kind: "type", cover: "cut-glass-goblets", description: "Goblets, tumbler sets, bottle holders and photo frames, gift-boxed." },
  // Pooja
  { slug: "pooja-sets", title: "Pooja Sets & Boxes", eyebrow: "Pooja", group: "pooja", kind: "type", cover: "ganesh-lakshmi-and-shubh-labh-velvet-set", description: "Ganesh-Lakshmi sets, Shubh-Labh boxes and pooja essentials in presentation boxes." },
  { slug: "pooja-thalis", title: "Pooja Thalis", eyebrow: "Pooja", group: "pooja", kind: "type", cover: "scalloped-enamel-pooja-thali-set", description: "Complete thali sets with bell, diya and katoris in enamel and silver finishes." },
  // Corporate
  { slug: "branded-hampers", title: "Branded Hampers", eyebrow: "Corporate", group: "corporate", kind: "type", cover: "pichwai-peacock-hamper-boxes", description: "Hampers built around your brand with custom boxes, tags and inserts." },
  { slug: "bulk-favors", title: "Bulk Favors", eyebrow: "Corporate", group: "corporate", kind: "type", cover: "floral-jute-potli-return-gifts", description: "Identical favors in any quantity for weddings, events and corporate send-outs." },

  // Curated edits: personal
  { slug: "gifts-for-her", title: "Gifts for Her", eyebrow: "Gift Edit", group: "hampers", kind: "curated", cover: "pastel-enamel-filigree-boxes", description: "Filigree boxes, candles, keepsakes and hampers she will keep on display." },
  { slug: "gifts-for-him", title: "Gifts for Him", eyebrow: "Gift Edit", group: "hampers", kind: "curated", cover: "scroll-bottle-holder", description: "Clocks, drinkware and statement silver-finish pieces for the man who notices detail." },
  { slug: "gifts-for-couples", title: "Gifts for Couples", eyebrow: "Gift Edit", group: "hampers", kind: "curated", cover: "kissing-swans", description: "Pairs made for pairs: swans, Radha-Krishna, Shubh-Labh and wedding frames." },
  { slug: "gifts-for-parents", title: "Gifts for Parents", eyebrow: "Gift Edit", group: "hampers", kind: "curated", cover: "lakshmi-and-ganesh-seated-pair", description: "Idols, pooja sets and clocks: warm, lasting gestures for the people who raised us." },
  { slug: "gifts-for-kids", title: "Gifts for Kids & New Arrivals", eyebrow: "Gift Edit", group: "hampers", kind: "curated", cover: "crawling-baby-krishna-in-acrylic-case", description: "Baby Krishna, carriage boxes and playful keepsakes for little ones and their families." },
  { slug: "photo-gifts", title: "Photo Frames", eyebrow: "Gift Edit", group: "hampers", kind: "curated", cover: "arch-top-wedding-portrait-frame", description: "Frames that hold a specific afternoon, from wedding portraits to beaded pairs." },
  { slug: "name-gifts", title: "Name & Message Gifts", eyebrow: "Gift Edit", group: "hampers", kind: "curated", cover: "hand-painted-personalized-plate", description: "Gifts finished with a name, a date or a note: painted plates, custom cards and tags." },
  { slug: "keepsake-boxes", title: "Keepsake Boxes", eyebrow: "Gift Edit", group: "hampers", kind: "curated", cover: "mother-of-pearl-footed-box-chequer", description: "Mother-of-pearl, filigree and relief boxes made to be kept long after the gift is opened." },
  { slug: "wedding-return-gifts", title: "Wedding Return Gifts", eyebrow: "Gift Edit", group: "hampers", kind: "curated", cover: "floral-jute-potli-return-gifts", description: "Consistent, elegant favors for every guest, from potlis to diya and tealight sets." },
  { slug: "baby-shower-gifts", title: "Baby Shower Gifts", eyebrow: "Gift Edit", group: "hampers", kind: "curated", cover: "crawling-baby-krishna-in-acrylic-case", description: "Gentle, auspicious gifts and favors for a growing family." },
  // Curated edits: corporate
  { slug: "employee-onboarding-kits", title: "Employee Joining Gifts", eyebrow: "Corporate", group: "corporate", kind: "curated", cover: "striped-festive-gift-boxes", description: "Welcome hampers and favors that make a first day feel considered." },
  { slug: "festive-corporate", title: "Festive Corporate Gifting", eyebrow: "Corporate", group: "corporate", kind: "curated", cover: "tasselled-festive-gift-boxes", description: "Diwali and year-end hampers, diya sets and pooja boxes for teams and clients at scale." },
  { slug: "client-gifting", title: "Client Gifting", eyebrow: "Corporate", group: "corporate", kind: "curated", cover: "elephant-family-trio", description: "Silver-finish décor, velvet-boxed sets and serveware that quietly deepen relationships." },
  { slug: "appreciation-rewards", title: "Appreciation & Rewards", eyebrow: "Corporate", group: "corporate", kind: "curated", cover: "standing-peacock-on-marble-base", description: "Milestones and long-service moments marked with pieces worth keeping." },
  { slug: "event-gifting", title: "Event & Conference Gifts", eyebrow: "Corporate", group: "corporate", kind: "curated", cover: "lace-potli-dry-fruit-favors", description: "Favors and tealight sets for offsites, launches and conferences, packed identically." },
  { slug: "leadership-gifts", title: "Leadership Gifts", eyebrow: "Corporate", group: "corporate", kind: "curated", cover: "horse-chariot-figurine", description: "Statement pieces for boards, partners and VIPs." },
  { slug: "wfh-desk-kits", title: "Desk & Work-from-Home Gifts", eyebrow: "Corporate", group: "corporate", kind: "curated", cover: "elephant-base-mantel-clock", description: "Table clocks, frames, jars and tumblers that earn a place on a desk." },
  { slug: "sustainable-gifts", title: "Sustainable Gifts", eyebrow: "Corporate", group: "corporate", kind: "curated", cover: "sustainable-soiree-gift-hamper", description: "Jute, cane, wood and our Sustainable Soirée hamper for low-impact gifting." },
  // Packaging, folded into hampers
  { slug: "festive-packaging", title: "Festive Packaging", eyebrow: "Packaging", group: "packaging", kind: "curated", cover: "shubh-diwali-gift-box", description: "Tasselled boxes, potlis and festive gift boxes, wrapped by hand in seasonal palettes." },
  { slug: "wooden-boxes", title: "Wooden Boxes & Trays", eyebrow: "Packaging", group: "packaging", kind: "curated", cover: "hand-painted-wooden-box-set", description: "Hand-painted and turned-wood boxes and trays that become part of the gift." },
  { slug: "trays-baskets", title: "Trays & Baskets", eyebrow: "Packaging", group: "packaging", kind: "curated", cover: "swan-carriage-basket", description: "Woven baskets and tray hampers for arrangements that look generous." },
  { slug: "custom-branded-packaging", title: "Custom Branded Packaging", eyebrow: "Packaging", group: "packaging", kind: "curated", cover: "striped-festive-gift-boxes", description: "Your logo, palette and message on boxes, tags and cards, produced for bulk orders." },
  { slug: "hamper-accessories", title: "Potlis & Finishing", eyebrow: "Packaging", group: "packaging", kind: "curated", cover: "lace-potli-dry-fruit-favors", description: "Potlis, tassels, lace and clear cases, the finishing layer of every hamper." },
  { slug: "rigid-boxes", title: "Rigid Gift Boxes", eyebrow: "Packaging", group: "packaging", kind: "curated", hidden: true, cover: "sage-suede-hamper-box", description: "Rigid, velvet and satin-lined presentation boxes, made to order for your hamper." },
  { slug: "magnetic-boxes", title: "Hamper Boxes", eyebrow: "Packaging", group: "packaging", kind: "curated", hidden: true, cover: "sage-suede-hamper-box", description: "Presentation hamper boxes, made to order in your palette." },
  { slug: "window-boxes", title: "Window & Clear Boxes", eyebrow: "Packaging", group: "packaging", kind: "curated", hidden: true, cover: "acrylic-briefcase-hamper", description: "Clear cases and cloches that show the gift before it is opened. Made to order." },
  { slug: "transparent-packaging", title: "Transparent Packaging", eyebrow: "Packaging", group: "packaging", kind: "curated", hidden: true, cover: "acrylic-briefcase-hamper", description: "Acrylic cases, glass jars and cloches for a modern reveal. Made to order." },
  { slug: "collapsible-boxes", title: "Gift Boxes", eyebrow: "Packaging", group: "packaging", kind: "curated", hidden: true, cover: "shubh-diwali-gift-box", description: "Gift boxes for hampers of every size, made to order." },
  { slug: "paper-bags", title: "Gift Bags & Totes", eyebrow: "Packaging", group: "packaging", kind: "curated", hidden: true, cover: "tote-hamper-with-gourmet-jars", description: "Tote-style hampers and gift bags, made to order." },
];

export const OCCASIONS: Occasion[] = [
  { slug: "diwali", title: "Diwali Gifting", short: "Diwali", cover: "rangoli-wax-diyas", description: "Diyas, pooja sets, dry-fruit trays and festive hampers for family, teams and clients." },
  { slug: "weddings", title: "Weddings & Return Gifts", short: "Weddings", cover: "floral-jute-potli-return-gifts", description: "Potlis, favors, frames and couple pieces, from mehendi to reception." },
  { slug: "housewarming", title: "Housewarming", short: "Housewarming", cover: "kalash-brimming-with-coins", description: "Ganesh, Shubh-Labh, kalash and serveware for a new address." },
  { slug: "anniversaries", title: "Anniversary Gifts", short: "Anniversary", cover: "swan-pair-on-pearl-bases", description: "Pairs, frames and clocks for marking the years." },
  { slug: "birthdays", title: "Birthday Gifts", short: "Birthday", cover: "pastel-enamel-filigree-boxes", description: "Hampers, keepsakes, candles and jars, wrapped for the day." },
  { slug: "baby-shower", title: "Baby Shower", short: "Baby shower", cover: "crawling-baby-krishna-in-acrylic-case", description: "Auspicious, gentle gifting for growing families." },
  { slug: "year-end", title: "Year-End Gifting", short: "Year-end", cover: "sage-suede-hamper-box", description: "Hampers, drinkware and dry-fruit sets for corporate closes and holiday sends." },
  { slug: "employee-joining", title: "Employee Joining", short: "New joiners", cover: "striped-festive-gift-boxes", description: "Welcome gifts that make new hires feel chosen." },
  { slug: "client-appreciation", title: "Client Appreciation", short: "Clients", cover: "elephant-family-trio", description: "Understated silver-finish pieces and boxed sets for long relationships." },
];

// Bands are indicative, assigned by product type in the catalog generator; final pricing
// depends on size, quantity and customisation.
export const BUDGETS: BudgetRange[] = [
  { slug: "under-500", label: "Under ₹500", min: 0, max: 500, description: "Diyas, favors and potlis for return gifts and bulk orders." },
  { slug: "500-1000", label: "₹500 – ₹1,000", min: 500, max: 1000, description: "Tealight sets, candle holders and small keepsakes." },
  { slug: "1000-2000", label: "₹1,000 – ₹2,000", min: 1000, max: 2000, description: "Serveware, jars, drinkware, thalis and wrapped gift sets." },
  { slug: "2000-5000", label: "₹2,000 – ₹5,000", min: 2000, max: 5000, description: "Silver-finish décor, clocks, pooja boxes and branded hampers." },
  { slug: "above-5000", label: "Above ₹5,000", min: 5000, max: null, description: "Idols in display cases, backlit frames and statement sets." },
];

export const GIFTING_INTENTS = [
  { slug: "employee-onboarding-kits", title: "Employee Joining Gifts", body: "Welcome hampers that feel considered." },
  { slug: "client-gifting", title: "Client Gifting", body: "Silver-finish pieces and boxed sets, never generic." },
  { slug: "festive-corporate", title: "Festive Hampers", body: "Diwali and year-end, at team scale." },
  { slug: "appreciation-rewards", title: "Appreciation Gifts", body: "Milestones and thank-yous that land." },
  { slug: "bulk-favors", title: "Bulk Favors", body: "Identical favors in any quantity." },
  { slug: "event-gifting", title: "Event Giveaways", body: "Packed identically for offsites and launches." },
  { slug: "leadership-gifts", title: "Leadership Gifts", body: "Statement pieces for boards and VIPs." },
  { slug: "sustainable-gifts", title: "Sustainable Gifts", body: "Jute, cane and wood, thoughtfully sourced." },
] as const;

export const PACKAGING_STRIP = CATEGORIES.filter((c) => c.group === "packaging" && !c.hidden).map((c) => ({ slug: c.slug, label: c.title }));

const BY_SLUG = new Map(PRODUCTS.map((p) => [p.slug, p]));

export function getProduct(slug: string) {
  return BY_SLUG.get(slug);
}
export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
export function getOccasion(slug: string) {
  return OCCASIONS.find((o) => o.slug === slug);
}
export function getBudget(slug: string) {
  return BUDGETS.find((b) => b.slug === slug);
}
export function getPillar(key: PillarKey) {
  return PILLARS.find((p) => p.key === key)!;
}

/** Interleave products category by category so curated lists show range, not 20 jars in a row. */
function mix(list: Product[]) {
  const groups = new Map<string, Product[]>();
  for (const p of list) groups.set(p.category, [...(groups.get(p.category) ?? []), p]);
  const out: Product[] = [];
  const queues = [...groups.values()];
  for (let i = 0; out.length < list.length; i++) {
    for (const q of queues) if (q[i]) out.push(q[i]);
  }
  return out;
}

export function productsForCategory(slug: string): Product[] {
  const cat = getCategory(slug);
  if (!cat) return [];
  if (cat.kind === "type") return PRODUCTS.filter((p) => p.category === slug);
  return mix(PRODUCTS.filter((p) => p.collections.includes(slug)));
}
export function productsForPillar(key: PillarKey) {
  return PRODUCTS.filter((p) => p.pillar === key);
}
export function productsForOccasion(slug: string) {
  return mix(PRODUCTS.filter((p) => p.collections.includes(slug)));
}
export function productsForBudget(slug: string) {
  return mix(PRODUCTS.filter((p) => p.collections.includes(slug)));
}
export function productsByCategory(key: PillarKey) {
  return CATEGORIES.filter((c) => c.group === key && c.kind === "type").map((c) => ({ category: c, products: productsForCategory(c.slug) }));
}
export function relatedProducts(product: Product, count = 4) {
  const same = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug);
  const pillar = PRODUCTS.filter((p) => p.pillar === product.pillar && p.category !== product.category);
  return [...same, ...pillar].slice(0, count);
}

export function pick(slugs: string[]) {
  return slugs.map((s) => BY_SLUG.get(s)).filter((p): p is Product => Boolean(p));
}

export function coverPhoto(slug: string | undefined, fallback?: Product[]): Photo | undefined {
  return (slug ? BY_SLUG.get(slug)?.photos[0] : undefined) ?? fallback?.[0]?.photos[0];
}
export function categoryPhoto(cat: Category) {
  return coverPhoto(cat.cover, productsForCategory(cat.slug));
}
export function pillarPhoto(pillar: Pillar) {
  return coverPhoto(pillar.cover, productsForPillar(pillar.key));
}
export function occasionPhoto(o: Occasion) {
  return coverPhoto(o.cover, productsForOccasion(o.slug));
}

export function categoryParent(cat: Category) {
  if (cat.group === "packaging") return { to: "/packaging" as const, label: "Packaging" };
  const pillar = getPillar(cat.group);
  return { to: pillar.to, label: pillar.short };
}

// Images: the generator writes <path>-<width>.webp for each of these widths, clamped to the source.
export const IMAGE_WIDTHS = [480, 960, 1600] as const;

function widthsFor(p: Photo) {
  return [...new Set(IMAGE_WIDTHS.map((w) => Math.min(w, p.w)))];
}
export function photoUrl(p: Photo, width = 960) {
  const widths = widthsFor(p);
  return `/catalog/${p.path}-${widths.find((w) => w >= Math.min(width, p.w)) ?? widths[widths.length - 1]}.webp`;
}
export function photoSrcSet(p: Photo) {
  return widthsFor(p).map((w) => `/catalog/${p.path}-${w}.webp ${w}w`).join(", ");
}
export function absoluteUrl(path: string) {
  return `${SITE.url}${path}`;
}
