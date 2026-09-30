import { SITE, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./ProductCard";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(`Hi ${SITE.name}, I'd like to plan a gift.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-6 z-20 hidden size-14 items-center justify-center rounded-full bg-sage text-porcelain shadow-lift transition-colors duration-150 hover:bg-[oklch(0.39_0.035_135)] active:scale-95 md:flex"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
