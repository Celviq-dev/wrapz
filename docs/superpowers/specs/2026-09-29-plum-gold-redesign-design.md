# Sneha's Wrapzz: plum & gold redesign

Status: approved by default (owner unavailable; every open choice below takes the recommended option).

## Goal

Make the site feel like a finished, premium brand, using only the brand's own assets from the four PDF catalogs:
product photos, the gold seal logo, the watercolor leaf art and the published Google review. No AI imagery.

## Design read

Premium-consumer redesign (overhaul) of an Indian heritage gifting studio's catalog site for Hyderabad
families, wedding planners and HR buyers. Editorial-luxury language, Tailwind v4 + existing Radix
primitives, restrained CSS motion. Dials: variance 7, motion 5, density 4.

## Decisions

| Topic | Decision | Why |
| --- | --- | --- |
| Palette | Plum-black ink, deep plum, logo gold, porcelain and rose-paper surfaces; sage only for WhatsApp | Taken from the catalog: plum headline, gold seal, rose script, sage contact panel. Replaces generic espresso + brass. |
| Accent | Gold is the only accent. Plum is the dark neutral. | One accent per view. |
| Type | Keep Playfair Display + DM Sans | The catalog's own headline serif is Playfair-style; the fix is rhythm, not a new face. |
| Italic accent line | Max three per page | The "title + bronze italic" formula was on every section. |
| Eyebrows | Max one per three sections | Template tell. |
| Buttons | Pill. Solid plum on light, solid gold on dark, 1px outline secondary. No gradients or glow. | Luxury retail convention; baseline-ui. |
| Cards | Product cards lose the box: image, then text on the page ground | Cards only where elevation means something. |
| Radius | Pills for interactive, 16px (rounded-2xl) for media and panels, 12px for inputs | Shape lock. |
| Motion | CSS only: opacity/transform, ease-out, <=200ms for feedback, no loops | baseline-ui. |
| Primitives | Radix: NavigationMenu (desktop), Dialog (mobile menu, lightbox), Accordion (FAQ), ToggleGroup (hamper builder) | Replaces the hand-rolled focus trap. |
| z-index | 10 raised, 20 sticky UI, 30 header, 40 dialogs, 50 skip link | Fixed scale. |
| Logo | Gold seal from the catalog + serif wordmark; seal also becomes the favicon | Real brand asset. |
| Email | Removed; the catalogs list none | No invented contact. |
| Reviews | Quote the Google review published in the catalog (Aashray R.) + link to the Google profile | Real, attributable. |

## Photos: every usable PDF image

- Raise the per-product photo cap from 4 to 6 so all alternates show.
- Promote the 31 unused product photos: ~18 new products plus alternates on existing ones.
- Studio wax candles (phone shots) become a hand-poured candle series.
- New `/lookbook` page shows every catalog photo, grouped by collection, in a lightbox.
- Still excluded, with reason: other brands' watermarks or lockups (Silver Stories, Rangraas, Marwadi,
  Soni's), client logos (Siemon, Cyient, A2DK), customer names, purity stickers, phone screenshots and
  duplicates.

## Homepage (distinct layout families, in order)

1. Announcement line (Diwali 2026 orders open)
2. Hero: dark plum split, headline + one line + two CTAs, captioned photo composition
3. Trust row: four static facts
4. Occasion rail: circular thumbnails, horizontal scroll
5. Collections: six-cell bento
6. Signature rail: Embla carousel of statement pieces
7. Festive band: full-bleed photo with plum panel
8. Corporate: split, divided list instead of cards
9. Weddings: overlapping photo pair + text
10. Hamper studio: builder CTA + budget bands + packaging chips (replaces three sections)
11. Lookbook teaser: masonry columns, link to /lookbook
12. Reviews: large real quote + four stats
13. Story: seal + text + photo
14. FAQ: Radix accordion
15. Contact: form + details, watercolor leaves

## Verification loop

Headless captures (desktop + mobile) -> parallel audits (ui-review, ux-audit, ui-a11y, uxui-principles,
design-taste pre-flight, baseline-ui) -> fix -> repeat until no P0/P1 remain. Then tsc, SSR checks,
production build, Reticle CLI verify, code review.
