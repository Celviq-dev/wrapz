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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-semibold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-medium text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    const err = error instanceof Error ? error : new Error(String(error));
    reportLovableError(err, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
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
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
      { title: "Sneha\x27s Wrapzz — Silver Decor, Festive Gifting & Hampers" },
      {
        name: "description",
        content:
          "A gifting studio in Secunderabad, Hyderabad: silver decor and devotional pieces, diyas and candles, serveware, hampers and bulk corporate gifting.",
      },
      { name: "author", content: "Wrapzz Gifting India" },
      { property: "og:site_name", content: "Sneha\x27s Wrapzz" },
      {
        property: "og:title",
        content: "Sneha\x27s Wrapzz — Silver Decor, Festive Gifting & Hampers",
      },
      {
        property: "og:description",
        content:
          "Silver decor and devotional pieces, festive diyas and candles, serveware, hampers and bulk gifting. Secunderabad, Hyderabad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Sneha\x27s Wrapzz — Silver Decor, Festive Gifting & Hampers",
      },
      {
        name: "twitter:description",
        content:
          "Silver decor and devotional pieces, festive diyas and candles, serveware, hampers and bulk gifting. Secunderabad, Hyderabad.",
      },
      {
        property: "og:image",
        content: "https://snehawrapzz.lovable.app/media/wall-art/wall-art-01.webp",
      },
      {
        name: "twitter:image",
        content: "https://snehawrapzz.lovable.app/media/wall-art/wall-art-01.webp",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Marcellus&family=DM+Sans:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://snehawrapzz.lovable.app/#organization",
              name: "Wrapzz Gifting India",
              alternateName: "Sneha\x27s Wrapzz",
              url: "https://snehawrapzz.lovable.app/",
              telephone: "+91 9966307889",
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://snehawrapzz.lovable.app/#studio",
              name: "Wrapzz Gifting India",
              url: "https://snehawrapzz.lovable.app/",
              telephone: "+91 9966307889",
              image: "https://snehawrapzz.lovable.app/media/wall-art/wall-art-01.webp",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plot no 49, Krishna, Sindhi Colony",
                addressLocality: "Secunderabad",
                addressRegion: "Hyderabad",
                postalCode: "500003",
                addressCountry: "IN",
              },
              parentOrganization: { "@id": "https://snehawrapzz.lovable.app/#organization" },
            },
            {
              "@type": "WebSite",
              "@id": "https://snehawrapzz.lovable.app/#website",
              name: "Sneha\x27s Wrapzz",
              url: "https://snehawrapzz.lovable.app/",
              publisher: { "@id": "https://snehawrapzz.lovable.app/#organization" },
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
    <html lang="en">
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-ivory pb-[76px] text-charcoal md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:inline-flex focus:min-h-[44px] focus:items-center focus:bg-bottle-dark focus:px-4 focus:text-sm focus:font-semibold focus:text-ivory"
        >
          Skip to content
        </a>
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
