// @reticle-ignore
// Reticle's dev-only source stamps land on different lines in the server and client transforms of
// this root route, which React reports as a hydration mismatch on every page. Only this file opts out.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MobileStickyCTA } from "@/components/site/MobileStickyCTA";
import { SITE } from "@/data/site";

const OG_IMAGE = `${SITE.url}/og-image.jpg`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-[80dvh] items-center justify-center bg-porcelain px-5 pt-24">
      <div className="max-w-md text-center">
        <img src="/brand/seal.webp" width={215} height={217} alt="" className="mx-auto size-20" />
        <p className="mt-6 text-sm font-semibold text-gold-deep">Page not found</p>
        <h1 className="mt-3 font-display text-4xl font-medium text-ink md:text-5xl">
          This page has been <em className="font-normal text-gold-deep">unwrapped.</em>
        </h1>
        <p className="mt-4 text-ink-soft">
          The page you're looking for doesn't exist or has moved. Our collections are a click away.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
          <Link to="/lookbook" className="btn-outline">
            Browse the lookbook
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-medium tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a
            href="/"
            className="btn-outline"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sneha’s Wrapzz — Silver Gifts, Hampers & Festive Gifting, Hyderabad" },
      {
        name: "description",
        content:
          "Silver-finish idols and décor, festive hampers, diyas, pooja sets and corporate gifting, curated and hand-wrapped in Hyderabad and delivered pan-India.",
      },
      { name: "author", content: "Sneha’s Wrapzz" },
      { name: "theme-color", content: "#211119" },
      { property: "og:site_name", content: "Sneha’s Wrapzz" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:title", content: "Sneha’s Wrapzz — Silver Gifts, Hampers & Festive Gifting" },
      {
        property: "og:description",
        content: "Silver artifacts, hampers, diyas and pooja sets, hand-wrapped in Hyderabad and delivered pan-India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sneha’s Wrapzz — Silver Gifts, Hampers & Festive Gifting" },
      {
        name: "twitter:description",
        content: "Silver artifacts, hampers, diyas and pooja sets, hand-wrapped in Hyderabad and delivered pan-India.",
      },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE.url}/#organization`,
              name: SITE.legalName,
              alternateName: SITE.name,
              url: `${SITE.url}/`,
              logo: `${SITE.url}/brand/seal.png`,
              telephone: SITE.phoneHref.replace("tel:", ""),
              sameAs: [SITE.instagram.url],
            },
            {
              "@type": "LocalBusiness",
              "@id": `${SITE.url}/#studio`,
              name: SITE.legalName,
              url: `${SITE.url}/`,
              image: OG_IMAGE,
              logo: `${SITE.url}/brand/seal.png`,
              telephone: SITE.phoneHref.replace("tel:", ""),
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE.address.street,
                addressLocality: SITE.address.locality,
                addressRegion: SITE.address.region,
                postalCode: SITE.address.postalCode,
                addressCountry: SITE.address.country,
              },
              areaServed: "IN",
              parentOrganization: { "@id": `${SITE.url}/#organization` },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE.url}/#website`,
              name: SITE.name,
              url: `${SITE.url}/`,
              publisher: { "@id": `${SITE.url}/#organization` },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

declare const __RETICLE_TOKEN__: string;

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    // Dev-only overlay; `?noreticle` keeps it out of design-review screenshots.
    const params = new URLSearchParams(window.location.search);
    if (import.meta.env.DEV && params.has("reviewfrom")) {
      // Dev-only: headless review captures of long pages start at a given section by hiding
      // the sections above it (headless capture can't rasterise scrolled content).
      let el = document.getElementById(params.get("reviewfrom") ?? "");
      while (el && el.parentElement?.id !== "main") el = el.parentElement;
      for (let s = el?.previousElementSibling; s; s = s.previousElementSibling) (s as HTMLElement).style.display = "none";
    }
    if (import.meta.env.DEV && params.has("noreveal")) {
      document.querySelectorAll<HTMLImageElement>("img[loading=lazy]").forEach((img) => (img.loading = "eager"));
      // Tall capture windows would otherwise stretch <main> to the full window height.
      document.getElementById("main")?.parentElement?.style.setProperty("min-height", "0px");
    }
    if (import.meta.env.DEV && !params.has("noreticle")) {
      const token = typeof __RETICLE_TOKEN__ !== "undefined" ? __RETICLE_TOKEN__ : "";
      const connect = () =>
        void import("@reticlehq/react").then(({ reticle, install }) => {
          install();
          reticle.connect({
            projectId: "tanstack-start-ts-d1a3f707",
            ...(token.length > 0 ? { token } : {}),
          });
        });
      // A cold dev-server load pulls a few hundred modules; connecting only once the page has loaded
      // keeps a verification run from sending its first command into a page that is still loading.
      if (document.readyState === "complete") connect();
      else window.addEventListener("load", connect, { once: true });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col bg-porcelain pb-20 text-ink md:pb-0">
        <Header />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFab />
        <MobileStickyCTA />
      </div>
    </QueryClientProvider>
  );
}
