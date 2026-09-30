import { Link } from "@tanstack/react-router";
import { PILLARS } from "@/data/catalog";
import { ADDRESS_LINE, SITE, whatsappLink } from "@/data/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./ProductCard";

const COLUMNS = [
  {
    heading: "Collections",
    links: [...PILLARS.map((p) => ({ to: p.to, label: p.title })), { to: "/lookbook", label: "Lookbook" }],
  },
  {
    heading: "Gift edits",
    links: [
      { to: "/category/$slug", params: { slug: "gifts-for-her" }, label: "Gifts for her" },
      { to: "/category/$slug", params: { slug: "gifts-for-him" }, label: "Gifts for him" },
      { to: "/category/$slug", params: { slug: "gifts-for-couples" }, label: "Gifts for couples" },
      { to: "/category/$slug", params: { slug: "gifts-for-parents" }, label: "Gifts for parents" },
      { to: "/category/$slug", params: { slug: "wedding-return-gifts" }, label: "Wedding return gifts" },
      { to: "/occasions", label: "All occasions" },
    ],
  },
  {
    heading: "Corporate",
    links: [
      { to: "/corporate", label: "Corporate gifting" },
      { to: "/category/$slug", params: { slug: "branded-hampers" }, label: "Branded hampers" },
      { to: "/category/$slug", params: { slug: "festive-corporate" }, label: "Festive corporate" },
      { to: "/bulk-orders", label: "Bulk orders" },
      { to: "/packaging", label: "Packaging" },
      { to: "/clients", label: "Real orders" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { to: "/about", label: "About the studio" },
      { to: "/build-hamper", label: "Build a hamper" },
      { to: "/journal", label: "Gifting guides" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="on-dark bg-plum-950 text-porcelain">
      <div className="border-b border-porcelain/10">
        <div className="page-x flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
          <p className="max-w-[22ch] font-display text-[28px] font-medium leading-tight md:text-4xl">Plan a gift with the studio.</p>
          <div className="flex flex-wrap gap-3">
            <a href={whatsappLink(`Hi ${SITE.name}, I'd like to plan a gift.`)} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <WhatsAppIcon /> WhatsApp us
            </a>
            <Link to="/contact" className="btn-glass">
              Get a quote
            </Link>
          </div>
        </div>
      </div>

      <div className="page-x grid gap-12 py-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-porcelain/65">
            Silver artifacts, hampers, diyas and pooja sets, curated and hand-wrapped in Secunderabad and delivered across India.
          </p>
          <address className="mt-6 text-sm not-italic text-porcelain/80">
            <span className="mb-1 block">{ADDRESS_LINE}</span>
            <a href={SITE.phoneHref} className="flex min-h-10 w-fit items-center tabular-nums hover:text-gold-light md:min-h-8">
              {SITE.phoneDisplay}
            </a>
            <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="flex min-h-10 w-fit items-center hover:text-gold-light md:min-h-8">
              Instagram {SITE.instagram.handle}
            </a>
          </address>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h2 className="text-sm font-semibold text-gold-light">{col.heading}</h2>
              <ul className="mt-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      params={"params" in l ? l.params : undefined}
                      className="flex min-h-10 items-center text-sm text-porcelain/70 transition-colors duration-150 hover:text-porcelain md:min-h-8"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-porcelain/10">
        <div className="page-x flex flex-col gap-2 py-6 text-xs text-porcelain/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. Hand-wrapped in Hyderabad.
          </p>
          <p>Every photograph is from our own catalogs.</p>
        </div>
      </div>
    </footer>
  );
}
