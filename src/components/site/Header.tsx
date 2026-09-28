import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

import { COLLECTIONS, itemCount, STUDIO } from "@/data/catalog";

const NAV = [
  { to: "/collections", label: "Collections" },
  { to: "/corporate", label: "Corporate & Bulk" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock the page behind the mobile sheet so the body cannot scroll under it.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-aged-brass/20 bg-bottle-dark text-ivory">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-5 px-5 md:px-8">
        <Link
          to="/"
          className="flex min-h-[44px] shrink-0 items-baseline gap-2"
          aria-label={`${STUDIO.name} — home`}
        >
          <span className="font-display text-[1.5rem] tracking-[-0.04em] text-ivory">
            Sneha&apos;s
          </span>
          <span className="text-[0.7rem] font-semibold tracking-[0.17em] text-aged-brass">
            WRAPZZ
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "!text-aged-brass" }}
              className="inline-flex min-h-[44px] items-center whitespace-nowrap px-1 text-[13px] font-medium text-ivory transition-colors hover:text-aged-brass"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={STUDIO.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-[44px] lg:inline-flex btn-brass"
          >
            Enquire
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
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

      {/* Mobile sheet: collections are listed individually here, because on a
          phone the nav is the main way into the catalog. */}
      {open ? (
        <nav
          className="max-h-[calc(100svh-72px)] overflow-y-auto border-t border-aged-brass/20 bg-bottle-dark px-5 pb-8 pt-2 lg:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex min-h-[52px] items-center border-b border-ivory/12 text-base font-medium text-ivory"
              >
                {item.label}
              </Link>
            ))}

            <p className="pt-6 pb-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-aged-brass">
              Collections
            </p>
            {COLLECTIONS.map((c) => (
              <Link
                key={c.slug}
                to="/collections/$slug"
                params={{ slug: c.slug }}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center justify-between gap-4 border-b border-ivory/10 text-[0.95rem] text-ivory/85"
              >
                <span>{c.name}</span>
                {/* ivory/45 measured 4.04:1 against the bottle-dark drawer, just
                    under AA for 12px text; ivory/70 clears it. */}
                <span className="text-xs text-ivory/70">{itemCount(c)}</span>
              </Link>
            ))}

            <a
              href={STUDIO.whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-7 min-h-[48px] justify-center btn-brass"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
