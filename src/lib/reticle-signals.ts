/**
 * Dev-only Reticle signals: the app announcing an outcome in its own words, so verification flows can
 * assert "the brief was built" rather than "some text rendered". Compiled out of production builds.
 */
export const Sig = {
  ENQUIRY_READY: "enquiry:ready",
  ENQUIRY_BLOCKED: "enquiry:blocked",
  LIGHTBOX_OPENED: "lightbox:opened",
  LIGHTBOX_CLOSED: "lightbox:closed",
} as const;

export type SigName = (typeof Sig)[keyof typeof Sig];

export function emit(name: SigName, data: Record<string, unknown> = {}): void {
  if (!import.meta.env.DEV || typeof window === "undefined") return;
  void import("@reticlehq/react").then(({ reticle }) => reticle.signal(name, data)).catch(() => {});
}
