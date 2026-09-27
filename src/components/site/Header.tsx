import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/personalized", label: "Personalized" },
  { to: "/corporate", label: "Corporate" },
  { to: "/packaging", label: "Packaging" },
  { to: "/festive", label: "Festive" },
  { to: "/build-hamper", label: "Build a Hamper" },
  { to: "/bulk-orders", label: "Bulk Orders" },
  { to: "/about", label: "About" },
  { to: "/clients", label: "Clients" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/85 backdrop-blur-md border-b border-beige/60" : "bg-ivory/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 h-[70px] max-w-[1320px] px-5 md:px-8 lg:grid-cols-[auto_1fr_auto]">
        <Link to="/" className="flex items-baseline gap-2 min-w-0">
          <span className="font-display text-2xl font-semibold text-charcoal tracking-tight truncate">
            Sneha
          </span>
          <span className="font-display italic text-lg text-bronze">Wrapzz</span>
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-bronze" }}
              className="link-underline text-[13px] font-medium text-charcoal/85 hover:text-charcoal transition-colors whitespace-nowrap"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center rounded-lg bg-terracotta px-4 py-2.5 text-[13px] font-semibold text-ivory shadow-soft transition-all duration-300 hover:scale-[1.03]"
          >
            Request a Quote
          </Link>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-charcoal"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16" strokeLinecap="round" />
                  <path d="M4 12h16" strokeLinecap="round" />
                  <path d="M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-beige/60 bg-ivory/97 backdrop-blur-md max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="mx-auto max-w-[1280px] px-5 py-5 flex flex-col gap-1">
            <Link to="/" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-charcoal border-b border-beige/60">Home</Link>
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-charcoal border-b border-beige/60"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center rounded-lg bg-terracotta px-5 py-3 text-sm font-semibold text-ivory"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
