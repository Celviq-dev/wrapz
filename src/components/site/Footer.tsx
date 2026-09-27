import { Link } from "@tanstack/react-router";

const COLUMNS = [
  {
    heading: "Personalized",
    links: [
      { to: "/personalized", label: "All personalized gifts" },
      { to: "/category/$slug", params: { slug: "gifts-for-her" }, label: "Gifts for Her" },
      { to: "/category/$slug", params: { slug: "gifts-for-him" }, label: "Gifts for Him" },
      { to: "/category/$slug", params: { slug: "keepsake-boxes" }, label: "Keepsake Boxes" },
      { to: "/category/$slug", params: { slug: "wedding-return-gifts" }, label: "Wedding Return Gifts" },
    ],
  },
  {
    heading: "Corporate",
    links: [
      { to: "/corporate", label: "Corporate gifting" },
      { to: "/category/$slug", params: { slug: "employee-onboarding-kits" }, label: "Joining Kits" },
      { to: "/category/$slug", params: { slug: "festive-corporate" }, label: "Festive Hampers" },
      { to: "/category/$slug", params: { slug: "leadership-gifts" }, label: "Leadership Gifts" },
      { to: "/bulk-orders", label: "Bulk Orders" },
    ],
  },
  {
    heading: "Packaging",
    links: [
      { to: "/packaging", label: "Packaging solutions" },
      { to: "/category/$slug", params: { slug: "rigid-boxes" }, label: "Rigid Boxes" },
      { to: "/category/$slug", params: { slug: "wooden-boxes" }, label: "Wooden Boxes" },
      { to: "/category/$slug", params: { slug: "paper-bags" }, label: "Paper Bags" },
      { to: "/category/$slug", params: { slug: "custom-branded-packaging" }, label: "Custom Branded" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { to: "/about", label: "About us" },
      { to: "/clients", label: "Clients & stories" },
      { to: "/journal", label: "Gifting Journal" },
      { to: "/build-hamper", label: "Build a Hamper" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-10">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-semibold text-ivory">Sneha</span>
              <span className="font-display italic text-xl text-champagne">Wrapzz</span>
            </Link>
            <p className="mt-5 text-sm text-ivory/70 leading-[1.75] max-w-xs">
              Considered gifting and packaging craft — for people who mark
              moments and brands that make them memorable.
            </p>
            <a
              href="#catalog"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-ivory/25 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-ivory hover:border-champagne hover:text-champagne transition"
            >
              Download Catalog →
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne">
                {col.heading}
              </div>
              <ul className="mt-4 space-y-3 text-sm text-ivory/80">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to as string}
                      params={(l as { params?: Record<string, string> }).params as never}
                      className="hover:text-champagne transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-ivory/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-ivory/60">
          <div>© {new Date().getFullYear()} Sneha Wrapzz. Handcrafted in India.</div>
          <div className="flex gap-5">
            <a href="mailto:hello@snehawrapzz.com" className="hover:text-champagne">hello@snehawrapzz.com</a>
            <a href="https://instagram.com" className="hover:text-champagne">Instagram</a>
            <a href="https://wa.me/919999999999" className="hover:text-champagne">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
