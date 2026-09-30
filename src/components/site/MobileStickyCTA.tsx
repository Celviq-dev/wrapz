import { Link } from "@tanstack/react-router";
import { SITE, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./ProductCard";

export function MobileStickyCTA() {
  return (
    <div className="on-dark fixed inset-x-0 bottom-0 z-20 flex gap-2 border-t border-porcelain/10 bg-plum-950 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 md:hidden">
      <a href={whatsappLink(`Hi ${SITE.name}, I'd like to plan a gift.`)} target="_blank" rel="noopener noreferrer" className="btn-glass flex-1">
        <WhatsAppIcon /> WhatsApp
      </a>
      <Link to="/contact" className="btn-gold flex-1">
        Get a quote
      </Link>
    </div>
  );
}
