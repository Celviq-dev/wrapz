import { Link } from "@tanstack/react-router";

export function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-beige/70 bg-cream/95 backdrop-blur-md px-4 py-3 flex gap-2">
      <a
        href="https://wa.me/919999999999?text=Hi%20Sneha%20Wrapzz"
        className="flex-1 rounded-lg border border-beige bg-ivory text-charcoal py-3 text-sm font-semibold text-center"
      >
        WhatsApp
      </a>
      <Link
        to="/contact"
        className="flex-1 rounded-lg bg-terracotta text-ivory py-3 text-sm font-semibold text-center shadow-soft"
      >
        Request a Quote
      </Link>
    </div>
  );
}
