import { Link } from "@tanstack/react-router";

import { COLLECTIONS, STUDIO } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="bg-bottle-dark pb-8 pt-16 text-ivory md:pt-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex min-h-[44px] items-baseline gap-2">
              <span className="font-display text-3xl text-ivory">Sneha&apos;s</span>
              <span className="text-xs font-semibold tracking-[0.17em] text-aged-brass">
                WRAPZZ
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-[1.8] text-ivory/75">
              {STUDIO.legalName}. Silver decor and devotional pieces, festive diyas and candles,
              serveware, and wrapped hampers — from Secunderabad, Hyderabad.
            </p>
          </div>

          <nav className="md:col-span-4" aria-label="Collections">
            <h2 className="text-sm font-medium text-aged-brass">Collections</h2>
            <ul className="mt-4 space-y-1">
              {COLLECTIONS.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/collections/$slug"
                    params={{ slug: c.slug }}
                    className="inline-flex min-h-[44px] items-center text-sm text-ivory/80 transition-colors hover:text-aged-brass"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/corporate"
                  className="inline-flex min-h-[44px] items-center text-sm text-ivory/80 transition-colors hover:text-aged-brass"
                >
                  Corporate &amp; Bulk Gifting
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="text-sm font-medium text-aged-brass">Get in touch</h2>
            <ul className="mt-4 space-y-1">
              <li>
                <a
                  href={STUDIO.phoneHref}
                  className="inline-flex min-h-[44px] items-center text-sm text-ivory/80 transition-colors hover:text-aged-brass"
                >
                  {STUDIO.phone}
                </a>
              </li>
              <li>
                <a
                  href={STUDIO.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center text-sm text-ivory/80 transition-colors hover:text-aged-brass"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-flex min-h-[44px] items-center text-sm text-ivory/80 transition-colors hover:text-aged-brass"
                >
                  Send an enquiry
                </Link>
              </li>
              <li>
                <a
                  href={STUDIO.reviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center text-sm text-ivory/80 transition-colors hover:text-aged-brass"
                >
                  Reviews on Google
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  className="inline-flex min-h-[44px] items-center text-sm text-ivory/80 transition-colors hover:text-aged-brass"
                >
                  About the studio
                </Link>
              </li>
            </ul>
            <address className="mt-4 text-sm not-italic leading-[1.7] text-ivory/60">
              {STUDIO.address}
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-xs text-ivory/60 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {STUDIO.legalName}
          </div>
          <div>{STUDIO.addressShort}</div>
        </div>
      </div>
    </footer>
  );
}
