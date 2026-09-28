/**
 * The catalog, derived from the client's own material.
 *
 * Sources, in order of authority:
 *   1. Sneha_Wrapzz_Master_Catalog.xlsx — 147 distinct items across 6 pillars.
 *      Used for what exists, how it groups and what things are called.
 *   2. The four supplied PDF catalogs — used for photography and brand language.
 *
 * Item counts are DERIVED from the item lists below rather than hard-coded, so a
 * heading can never claim a number the page does not actually show.
 *
 * Two deliberate departures from the spreadsheet, both documented:
 *
 *   - The spreadsheet's pillar 3 is labelled "Personalized Hampers" and several
 *     items carry a "Personalized" prefix. Its own "How to use this" sheet states
 *     the pillar groupings were authored from "catalog patterns and general market
 *     knowledge", not by the studio. The studio does not offer a personalisation
 *     service, so the pillar is presented here as what the photographs actually
 *     show: wrapped gift sets and hand-painted keepsakes. The objects are real;
 *     only the invented positioning is gone.
 *
 *   - "Personalized coaster with photo/name insert" is omitted entirely rather
 *     than reworded, because a photo/name insert *is* a personalisation service.
 *     Flagged for the client rather than guessed at. This is why the derived total
 *     is 146 rather than the spreadsheet's 147.
 *
 * There are no prices here. The spreadsheet contains none, and the studio works
 * enquiry-led, so every route ends in an enquiry rather than a cart.
 */

import { media, mediaFor, type MediaAsset } from "./media.generated";

/** Verified from page 50 of the Diwali catalog and page 24 of the gifting catalog. */
export const STUDIO = {
  name: "Sneha's Wrapzz",
  legalName: "Wrapzz Gifting India",
  phone: "+91 9966307889",
  phoneHref: "tel:+919966307889",
  whatsappHref: "https://wa.me/919966307889",
  address: "Plot no 49, Krishna, Sindhi Colony, Secunderabad, Hyderabad, 500003",
  addressShort: "Secunderabad, Hyderabad",
  /** Both catalog covers state "A brand with 5000+ satisfied and repeated customers". */
  customersClaim: "5000+ satisfied and repeat customers",
  /** Both catalogs state "We have 300+ reviews". */
  reviewsClaim: "300+ customer reviews",
  /**
   * The "click here to see what our customers tell about us" link embedded on
   * page 49 of the Diwali catalog and page 23 of the gifting catalog. Confirmed to
   * resolve to the studio's own Google Business Profile for "Sneha's Wrapzz
   * Gifting", so the review claim on this site is checkable rather than asserted.
   */
  reviewsUrl: "https://share.google/90nFY2n3HkGTklTR9",
} as const;

export type Group = {
  name: string;
  /** Item names as they appear in the master catalog. */
  items: string[];
  /** Media slugs from the generated manifest. */
  gallery: string[];
};

export type Collection = {
  slug: string;
  name: string;
  /** Short line used in navigation and card overlays. */
  tagline: string;
  /** One or two sentences. Describes what the photographs show, nothing more. */
  intro: string;
  hero: string;
  groups: Group[];
  /** Feature weight drives the editorial layout, not a taste judgement. */
  feature: "flagship" | "major" | "supporting";
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "silver",
    name: "Silver Collection",
    tagline: "Idols, wall panels, animal forms, clocks",
    intro:
      "The largest part of the catalog: eighty-seven distinct pieces in silver and silver plate, from deity idols and relief wall panels to peacocks, elephants, clocks and inlaid boxes. Photographed as they are meant to be lived with, in furnished rooms rather than on a white sweep.",
    hero: "wall-art-01",
    feature: "flagship",
    groups: [
      {
        name: "Deities & Idols",
        items: [
          "Ganesh statue in acrylic display case",
          "Lakshmi idol on wood stand",
          "Radha-Krishna statue in acrylic display case",
          "Krishna bust playing flute",
          "Crawling baby Krishna statue in acrylic case",
          "Nandi bull statue in acrylic case",
          "Lakshmi-Ganesh seated statue pair",
          "Lakshmi-Ganesh-Saraswati trio statue",
          "Hanuman statue",
          "Radha-Krishna standing pair statue",
          "Meera / devotee saint figure statue",
          "Cow and calf statue",
        ],
        gallery: [
          "deities-idols-01",
          "deities-idols-02",
          "deities-idols-03",
          "deities-idols-04",
          "deities-idols-05",
          "deities-idols-06",
          "deities-idols-07",
          "deities-idols-08",
          "deities-idols-09",
          "deities-idols-10",
        ],
      },
      {
        name: "Wall Art & Relief Panels",
        items: [
          "Radha-Krishna framed painting, silver wall frame",
          "Saraswati framed painting, mother-of-pearl frame",
          "Radha-Krishna on swing framed painting",
          "Radha-Krishna arched temple-style wall frame",
          "Wedding couple and cows relief panel, inlay frame",
          "Wedding couple and cows relief panel, long format",
          "Krishna child face relief plaque",
          "Tirupati Balaji headdress relief plaque",
          "Devi relief plaque, painted face detail",
          "Kali mask relief plaque",
          "Ram-Sita standing couple relief plaque",
          "Ram-Lakshman round wall plaque",
          "Krishna face round plaque, peacock-feather headdress",
          "Large Radha-Krishna framed relief, square",
          "Krishna relief panel, dark ground",
          "Radha-Krishna relief, pillow-shaped frame",
          "Ganesh panel, hand-painted colour detail",
          "Deity framed portrait flanked by pillars",
          "Vishnu namam crest piece",
          "Swastik round wall plaque",
          "Wedding couple portrait frame, arch top",
          "Wedding couple frame, pearl border",
        ],
        gallery: [
          "wall-art-01",
          "wall-art-09",
          "wall-art-10",
          "wall-art-11",
          "wall-art-02",
          "wall-art-03",
          "wall-art-04",
          "wall-art-05",
          "wall-art-06",
          "wall-art-07",
          "wall-art-08",
          "wall-art-12",
          "wall-art-13",
          "wall-art-14",
        ],
      },
      {
        name: "Animal Decor",
        items: [
          "Elephant statue, sitting, trunk raised",
          "Elephant family trio statue",
          "Pair of elephant figurines, trunks up (style A)",
          "Pair of elephant figurines, trunks up (style B)",
          "Elephant statue, 5 inch",
          "Peacock statue, standing, marble base",
          "Pair of peacock statues on branch",
          "Pair of peacock urns",
          "Peacock statue, 9 inch",
          "Peacock statue, 13 inch",
          "Pair of parrot statues on wooden perch",
          "Pair of swan figures, nightstand style",
          "Pair of swan figures, standing",
          "Swan pair statue, pearl base",
          "Swan couple statue, kissing pose",
          "Swan-shaped basket planter with wheels",
          "Horse carriage figurine",
          "Koi fish statue, single, large",
          "Pair of koi fish statues (variant 1)",
          "Pair of koi fish statues (variant 2)",
          "Silver turtle, ornate lidded piece",
        ],
        gallery: [
          "animal-decor-01",
          "animal-decor-02",
          "animal-decor-03",
          "animal-decor-04",
          "animal-decor-05",
          "animal-decor-06",
          "animal-decor-07",
          "animal-decor-08",
          "animal-decor-09",
          "animal-decor-10",
          "animal-decor-11",
          "animal-decor-12",
        ],
      },
      {
        name: "Clocks",
        items: [
          "Mantel clock, elephant base",
          "Mantel clock, floral swirl design",
          "Mantel clock, ornate alternate design",
          "Round wall clock, floral silver frame",
          "Round wall clock, mother-of-pearl inlay",
          "Round wall clock, jewelled floral frame",
          "Ganesh-face wall clock",
          "Conch-shaped wall clock",
          "Square floral wall clock",
        ],
        gallery: ["clocks-01", "clocks-02", "clocks-03", "clocks-04", "clocks-05", "clocks-06"],
      },
      {
        name: "Decorative Boxes & Trays",
        items: [
          "Square mother-of-pearl inlaid footed box (pattern 1)",
          "Square mother-of-pearl inlaid footed box (pattern 2)",
          "Square mother-of-pearl inlaid footed box, scalloped edge",
          "Square mother-of-pearl frame, decorative corners",
          "Swan and bamboo relief rectangular box (variant 1)",
          "Swan and bamboo relief rectangular box (variant 2)",
          "Wedding couple and cows long relief box",
        ],
        gallery: [
          "boxes-trays-01",
          "boxes-trays-02",
          "boxes-trays-03",
          "boxes-trays-04",
          "boxes-trays-05",
        ],
      },
      {
        name: "Ritual & Small Decor Objects",
        items: [
          "Silver Om conch (sankh), plain",
          "Ganesh sankh conch piece",
          "Silver hand-mudra pair with peacock detail",
          "Elephant-head lamp and candle holder",
          "Trishul and diya lamp piece",
          "Silver paduka plaque pair",
          "Toran door hanging",
          "Peacock relief serving tray",
          "Tall peacock-feather decorative piece",
          "Illuminated mirror frame",
          "Decorative vase and urn",
          "Small diya lamp on marble stand",
          "Silver mandir piece with Lakshmi",
          "Silver Lakshmi pot filled with coins",
          "Pair of Shubh-Labh wall plaques",
          "Eight-piece Shubh-Labh presentation box set",
        ],
        gallery: [
          "ritual-objects-01",
          "ritual-objects-02",
          "ritual-objects-03",
          "ritual-objects-04",
          "ritual-objects-05",
          "ritual-objects-06",
          "ritual-objects-07",
        ],
      },
    ],
  },
  {
    slug: "hampers",
    name: "Hampers & Gift Sets",
    tagline: "Wrapped sets and hand-painted boxes",
    intro:
      "Wrapped and boxed gifting: potli pouches, tasselled festive boxes, woven basket hampers and hand-painted wooden boxes in floral and pichwai styles. Contents are put together to the brief and budget you bring.",
    hero: "hampers-01",
    feature: "major",
    groups: [
      {
        name: "Wrapped Gift Sets",
        items: [
          "Individually wrapped dry fruit gift pouches",
          "Themed wrapped potli and pouch gift sets",
          "Premium wrapped festive box with tassels",
          "Woven basket hamper with ribbon",
          "Tote-bag style gift hamper with jars",
        ],
        gallery: [
          "hampers-01",
          "hampers-02",
          "hampers-03",
          "hampers-04",
          "hampers-05",
          "hampers-11",
          "hampers-12",
          "hampers-13",
          "hampers-14",
        ],
      },
      {
        name: "Hand-Painted Keepsakes",
        items: [
          "Hand-painted compact and mirror box, floral",
          "Hand-painted plate, floral and tile pattern",
          "Round hand-painted jewellery-style box",
          "Wooden box set, hand-painted lid in floral and pichwai styles",
        ],
        gallery: ["hampers-06", "hampers-07", "hampers-08", "hampers-09", "hampers-10"],
      },
    ],
  },
  {
    slug: "diyas-candles",
    name: "Diyas & Candles",
    tagline: "Festive light",
    intro:
      "Wax flower and rangoli diyas, cutwork lanterns, pearl and enamel tealight holders, brass diya stands and glass candle goblets. The seasonal part of the catalog, photographed lit.",
    hero: "diyas-candles-01",
    feature: "major",
    groups: [
      {
        name: "Diyas",
        items: [
          "Wax flower-shaped diyas, multi-colour",
          "Wax rangoli-pattern diyas, multi-colour",
          "Diya-shaped tealight candles",
        ],
        gallery: ["diyas-candles-05", "diyas-candles-09", "diyas-candles-10", "diyas-candles-03"],
      },
      {
        name: "Candles & Holders",
        items: [
          "Heart-shaped decorative candles",
          "Flower-shaped metal candle stands, tulip and lotus styles",
          "Feather-topped glass candle holders, gold base",
          "Elephant-base candle holders with coloured glass globes",
          "Crystal-glass candle holder, gold base",
          "Three-arm silver candelabra",
        ],
        gallery: [
          "diyas-candles-01",
          "diyas-candles-02",
          "diyas-candles-13",
          "diyas-candles-14",
          "diyas-candles-11",
          "diyas-candles-12",
        ],
      },
      {
        name: "Tealight Sets",
        items: [
          "Round mirror tray with beaded trim",
          "Petal-trim bowl and dish",
          "Brass tray with tealight holders and candles",
        ],
        gallery: ["diyas-candles-04", "diyas-candles-06", "diyas-candles-07", "diyas-candles-08"],
      },
    ],
  },
  {
    slug: "serveware-trays",
    name: "Serveware & Trays",
    tagline: "Stands, bowls and painted trays",
    intro:
      "Tiered stands, peacock and horse pedestal bowls, glass domes, and trays hand-painted with pichwai, floral and horse motifs. The pieces that carry dry fruits and sweets to the table.",
    hero: "serveware-trays-01",
    feature: "major",
    groups: [
      {
        name: "Stands & Bowls",
        items: [
          "Three-tier dessert and nut stand",
          "Peacock lidded bowl",
          "Peacock bowl with dry fruits, stemmed",
          "Horse pedestal bowl and tray",
          "Glass dome display on wooden base",
        ],
        gallery: [
          "serveware-trays-01",
          "serveware-trays-02",
          "serveware-trays-11",
          "serveware-trays-12",
          "serveware-trays-08",
          "serveware-trays-09",
        ],
      },
      {
        name: "Trays",
        items: [
          "Dry fruit tray, marble-stem style",
          "Dry fruit bowl, peacock-stand style",
          "Round mirror-top serving tray, elephant motif",
          "Round mirror-top serving tray, pichwai pattern",
          "Rectangular painted tray, horse motif",
          "Rectangular painted tray, floral pichwai style",
          "Wooden ladder-style tiered tray",
          "Wooden circular tray with copper cups and bowls",
          "Silver square tray, four peacock recesses",
          "Rectangular silver tray with figure handle",
        ],
        gallery: [
          "serveware-trays-03",
          "serveware-trays-04",
          "serveware-trays-05",
          "serveware-trays-06",
          "serveware-trays-07",
          "serveware-trays-10",
          "serveware-trays-13",
          "serveware-trays-14",
        ],
      },
    ],
  },
  {
    slug: "home-decor",
    name: "Home & Table Decor",
    tagline: "Jars, canisters, coasters, drinkware",
    intro:
      "Printed and peacock-lidded jars, brass canisters, compartmented dry fruit containers, coaster sets and boxed drinkware — the smaller pieces that sit on a table all year rather than only at Diwali.",
    hero: "home-decor-09",
    feature: "supporting",
    groups: [
      {
        name: "Jars, Coasters & Small Decor",
        items: [
          "Round coaster set, painted horse and floral motif, boxed",
          "Silver tree and leaf-shaped trinket dish",
          "Painted tin canister, floral and elephant motif",
          "Round peacock-topped carriage box",
          "Horse-carriage box topper",
        ],
        gallery: [
          "home-decor-01",
          "home-decor-02",
          "home-decor-03",
          "home-decor-04",
          "home-decor-05",
          "home-decor-06",
          "home-decor-07",
          "home-decor-08",
          "home-decor-09",
          "home-decor-10",
        ],
      },
      {
        name: "Drinkware & Frames",
        items: [
          "Fine bowl and gold cutlery gift set",
          "Brass goblet and glass set, four-piece boxed",
          "Four silver-look tumblers with gem detail, boxed",
          "Silver bottle holder on a scroll stand",
          "Leaf-motif photo frame pair",
          "Perfume and attar bottle set, boxed",
          "Peacock decorative stand",
        ],
        gallery: [
          "drinkware-frames-01",
          "drinkware-frames-02",
          "drinkware-frames-03",
          "drinkware-frames-04",
        ],
      },
    ],
  },
  {
    slug: "pooja",
    name: "Pooja & Ritual Essentials",
    tagline: "Thalis and boxed pooja sets",
    intro:
      "Boxed pooja sets and thalis — kalash, bell and diya groupings, Ganesh-Lakshmi sets in velvet presentation boxes, and marble and enamel plates.",
    hero: "pooja-05",
    feature: "supporting",
    groups: [
      {
        name: "Pooja Sets & Thalis",
        items: [
          "Ganesh-Lakshmi idol and Shubh-Labh box set, red velvet",
          "Silver Ganesh-Lakshmi gold-trim box set with kalash, bell and diya",
          "Small pooja item set — kalash, bell, diya, boxed",
          "Dry fruit tray in presentation box",
          "Ganesh-Lakshmi pooja thali set, boxed",
        ],
        gallery: ["pooja-01", "pooja-02", "pooja-03", "pooja-04", "pooja-05", "pooja-06"],
      },
    ],
  },
];

/**
 * Corporate and bulk is kept out of COLLECTIONS: the spreadsheet marks it as a
 * separate B2B track, and the evidence for it is order-scale photography rather
 * than individual products.
 */
export const CORPORATE = {
  slug: "corporate",
  name: "Corporate & Bulk Gifting",
  tagline: "Repeat-run gifting at order scale",
  intro:
    "Identical sets produced in quantity: eco hamper boxes with compartmented dry fruit trays, jute favour boxes and totes, ribbon-tied festive boxes and wrapped potli pouches for wedding return gifts.",
  hero: "corporate-01",
  groups: [
    {
      name: "Branded Hampers",
      items: [
        "Sustainable Soiree gift hamper, eco hamper box",
        "Dry fruit gift boxes with individual foil pouches",
        "Festive striped stationery-style boxes",
      ],
      gallery: ["corporate-01", "corporate-02", "corporate-03", "corporate-04"],
    },
    {
      name: "Bulk Favour Sets",
      items: [
        "Bulk wedding and corporate favour boxes",
        "Bulk wedding return-gift pouches, jute and mesh wrapped",
        "Bulk small silver items",
      ],
      gallery: ["corporate-05", "corporate-06", "corporate-07", "corporate-08"],
    },
  ],
} satisfies Omit<Collection, "feature">;

export type AnyCollection = Collection | typeof CORPORATE;

/** Derived so a displayed count always matches the items actually listed. */
export function itemCount(c: AnyCollection): number {
  return c.groups.reduce((n, g) => n + g.items.length, 0);
}

/** 146: the spreadsheet's 147 less the withheld photo/name coaster. */
export const TOTAL_ITEMS = COLLECTIONS.reduce((n, c) => n + itemCount(c), 0) + itemCount(CORPORATE);

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function collectionGallery(c: AnyCollection): MediaAsset[] {
  return c.groups.flatMap((g) => g.gallery).map(media);
}

export { media, mediaFor, type MediaAsset };
