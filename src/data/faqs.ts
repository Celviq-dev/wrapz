import { COLLECTIONS, itemCount, STUDIO, TOTAL_ITEMS } from "./catalog";

const SILVER = COLLECTIONS.find((c) => c.slug === "silver")!;

/**
 * Answers are limited to what the catalogs and the master spreadsheet actually
 * establish. The previous set described a hamper builder and personalisation
 * options that the studio does not offer.
 *
 * Kept in the data layer rather than in the FAQ component so the homepage can
 * reuse it for FAQPage structured data without importing a component.
 */
export const FAQS = [
  {
    q: "What does the catalog cover?",
    a: `${TOTAL_ITEMS} catalogued pieces across six collections: silver decor and devotional pieces, hampers and gift sets, diyas and candles, serveware and trays, home and table decor, and pooja essentials. Silver is the largest part at ${itemCount(SILVER)} pieces.`,
  },
  {
    q: "Can I order a single piece?",
    a: "Yes. The catalog runs from single decor pieces and boxed pooja sets through to repeat runs of identical favour boxes, so both individual and bulk orders are handled.",
  },
  {
    q: "Do you take wedding and corporate orders?",
    a: "Yes. The catalog includes bulk wedding and corporate favour boxes, jute return-gift pouches and totes, and eco hamper boxes with compartmented dry fruit trays. Share the quantity and date in an enquiry.",
  },
  {
    q: "How do prices work?",
    a: "Prices are quoted per enquiry rather than listed, because they depend on the pieces chosen, the quantity and the presentation. There is no online checkout.",
  },
  {
    q: "Where are you based?",
    a: `${STUDIO.legalName} is at ${STUDIO.address}.`,
  },
  {
    q: "How do I ask about a specific piece?",
    a: `Message ${STUDIO.phone} on WhatsApp, or use the enquiry form, and name the collection and the piece. Each collection page lists the pieces it contains.`,
  },
];
