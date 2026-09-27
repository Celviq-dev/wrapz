import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CATEGORIES, OCCASIONS, BUDGETS } from "@/data/catalog";

const BASE_URL = "https://snehawrapzz.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const STATIC_PATHS: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/personalized", changefreq: "weekly", priority: "0.9" },
  { path: "/corporate", changefreq: "weekly", priority: "0.9" },
  { path: "/packaging", changefreq: "weekly", priority: "0.9" },
  { path: "/festive", changefreq: "weekly", priority: "0.8" },
  { path: "/build-hamper", changefreq: "monthly", priority: "0.8" },
  { path: "/bulk-orders", changefreq: "monthly", priority: "0.8" },
  { path: "/occasions", changefreq: "monthly", priority: "0.7" },
  { path: "/about", changefreq: "yearly", priority: "0.5" },
  { path: "/clients", changefreq: "monthly", priority: "0.5" },
  { path: "/journal", changefreq: "monthly", priority: "0.5" },
  { path: "/contact", changefreq: "yearly", priority: "0.6" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...STATIC_PATHS,
          ...CATEGORIES.map((c) => ({
            path: `/category/${c.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...OCCASIONS.map((o) => ({
            path: `/occasion/${o.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
          ...BUDGETS.map((b) => ({
            path: `/budget/${b.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
