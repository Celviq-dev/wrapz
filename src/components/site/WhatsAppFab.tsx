import { STUDIO } from "@/data/catalog";

/**
 * Desktop-only: on mobile the sticky bar at the bottom already carries the
 * enquiry action, and stacking both put two competing buttons in the same corner.
 * Styled as a flat brass-ruled panel rather than a round floating bubble so it
 * reads as part of the page furniture.
 */
export function WhatsAppFab() {
  return (
    <a
      href={STUDIO.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`Message ${STUDIO.name} on WhatsApp`}
      className="fixed bottom-6 right-6 z-40 hidden min-h-[48px] items-center gap-3 border border-aged-brass bg-bottle-dark px-5 py-3 text-sm font-semibold text-ivory shadow-lift transition-colors hover:bg-bottle md:inline-flex"
    >
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-aged-brass" />
      Enquire on WhatsApp
    </a>
  );
}
