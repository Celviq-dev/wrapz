import { Link } from "@tanstack/react-router";

import { STUDIO } from "@/data/catalog";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-beige bg-cream px-4 py-3 md:hidden">
      <Link
        to="/collections"
        className="flex min-h-[48px] flex-1 items-center justify-center border border-beige bg-ivory text-sm font-semibold text-charcoal"
      >
        Collections
      </Link>
      <a
        href={STUDIO.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-[48px] flex-1 items-center justify-center bg-bottle text-sm font-semibold text-ivory"
      >
        Enquire
      </a>
    </div>
  );
}
