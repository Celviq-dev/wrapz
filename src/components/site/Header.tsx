import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { PILLARS, getCategory, pillarPhoto, productsForPillar } from "@/data/catalog";
import { SITE, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";
import { CatalogImage } from "./CatalogImage";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./ProductCard";

const LINKS = [
  { to: "/occasions", label: "Occasions" },
  { to: "/corporate", label: "Corporate" },
  { to: "/build-hamper", label: "Build a hamper" },
  { to: "/lookbook", label: "Lookbook" },
  { to: "/about", label: "About" },
] as const;

const MORE = [
  { to: "/bulk-orders", label: "Bulk orders" },
  { to: "/packaging", label: "Packaging" },
  { to: "/clients", label: "Real orders" },
  { to: "/journal", label: "Gifting guides" },
  { to: "/contact", label: "Contact" },
] as const;

const EDITS = ["gifts-for-her", "gifts-for-him", "gifts-for-couples", "gifts-for-parents", "wedding-return-gifts", "festive-corporate"]
  .map(getCategory)
  .filter((c) => c !== undefined);

const TILES = PILLARS.map((p) => ({ ...p, photo: pillarPhoto(p), count: productsForPillar(p.key).length }));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState("");
  const [open, setOpen] = useState(false);
  // Only the homepage opens on a dark hero; every other page starts with the solid header.
  const onHome = useLocation({ select: (l) => l.pathname === "/" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = onHome && !scrolled && menu === "";
  const item = cn(
    "inline-flex h-10 items-center gap-1 rounded-full px-3.5 text-sm font-medium whitespace-nowrap transition-colors duration-150",
    dark
      ? "text-porcelain/85 hover:bg-porcelain/10 hover:text-porcelain aria-[current=page]:text-gold-light data-[state=open]:text-porcelain"
      : "text-ink/80 hover:bg-paper hover:text-ink aria-[current=page]:text-ink aria-[current=page]:font-semibold data-[state=open]:bg-paper data-[state=open]:text-ink",
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 border-b transition-colors duration-200",
        dark ? "border-transparent bg-transparent" : "border-line bg-porcelain",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-porcelain"
      >
        Skip to content
      </a>
      <div className="page-x grid h-[72px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
        <Logo tone={dark ? "light" : "dark"} />

        <NavigationMenu.Root value={menu} onValueChange={setMenu} delayDuration={80} className="hidden justify-self-center lg:block" aria-label="Main">
          <NavigationMenu.List className="flex items-center gap-0.5">
            <NavigationMenu.Item value="collections">
              <NavigationMenu.Trigger className={cn(item, "group")}>
                Collections
                <ChevronDown aria-hidden strokeWidth={1.75} className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="page-x grid grid-cols-[1fr_15rem] gap-10 py-7">
                <ul className="grid grid-cols-6 gap-3">
                  {TILES.map((t) => (
                    <li key={t.key}>
                      <NavigationMenu.Link asChild>
                        <Link to={t.to} className="group/tile block">
                          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-paper">
                            {t.photo && (
                              <CatalogImage
                                photo={t.photo}
                                alt=""
                                sizes="180px"
                                className="size-full object-cover transition-transform duration-500 ease-out group-hover/tile:scale-[1.04]"
                              />
                            )}
                          </div>
                          <div className="mt-2.5 text-sm font-semibold text-ink">{t.title}</div>
                          <div className="text-xs text-ink-soft tabular-nums">{t.count} designs</div>
                        </Link>
                      </NavigationMenu.Link>
                    </li>
                  ))}
                </ul>
                <div className="border-l border-line pl-8">
                  <p className="text-sm font-semibold text-ink">Gift edits</p>
                  <ul className="mt-3 space-y-1">
                    {EDITS.map((c) => (
                      <li key={c.slug}>
                        <NavigationMenu.Link asChild>
                          <Link to="/category/$slug" params={{ slug: c.slug }} className="block py-1 text-sm text-ink-soft transition-colors duration-150 hover:text-ink">
                            {c.title}
                          </Link>
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                  <NavigationMenu.Link asChild>
                    <Link to="/occasions" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-gold-deep">
                      Shop by occasion <ArrowRight aria-hidden className="size-3.5" strokeWidth={1.75} />
                    </Link>
                  </NavigationMenu.Link>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            {LINKS.map((l) => (
              <NavigationMenu.Item key={l.to}>
                <NavigationMenu.Link asChild>
                  <Link to={l.to} className={item}>
                    {l.label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
          <NavigationMenu.Viewport className="absolute inset-x-0 top-full h-[var(--radix-navigation-menu-viewport-height)] overflow-hidden border-b border-line bg-porcelain shadow-lift data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 duration-150" />
        </NavigationMenu.Root>

        <div className="flex items-center gap-2">
          <Link to="/contact" className={cn("hidden min-h-10 px-5 lg:inline-flex", dark ? "btn-glass" : "btn-primary")}>
            Get a quote
          </Link>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger
              aria-label="Open menu"
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-full transition-colors duration-150 lg:hidden",
                dark ? "text-porcelain hover:bg-porcelain/10" : "text-ink hover:bg-paper",
              )}
            >
              <Menu aria-hidden strokeWidth={1.5} className="size-6" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-40 bg-plum-950/60 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 duration-200" />
              <Dialog.Content className="on-dark fixed inset-y-0 right-0 z-40 flex w-full max-w-[26rem] flex-col bg-plum-950 text-porcelain data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right duration-200 ease-out">
                <div className="flex h-[72px] shrink-0 items-center justify-between gap-4 px-5">
                  <Logo tone="light" />
                  <Dialog.Close aria-label="Close menu" className="inline-flex size-11 items-center justify-center rounded-full text-porcelain/80 transition-colors duration-150 hover:bg-porcelain/10 hover:text-porcelain">
                    <X aria-hidden strokeWidth={1.5} className="size-6" />
                  </Dialog.Close>
                </div>
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <Dialog.Description className="sr-only">Collections and pages of {SITE.name}</Dialog.Description>
                <div className="flex-1 overflow-y-auto px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                  <ul className="grid grid-cols-3 gap-2.5">
                    {TILES.map((t) => (
                      <li key={t.key}>
                        <Link to={t.to} onClick={() => setOpen(false)} className="block">
                          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-porcelain/5">
                            {t.photo && <CatalogImage photo={t.photo} alt="" sizes="30vw" className="size-full object-cover" />}
                          </div>
                          <span className="mt-1.5 block text-[13px] font-medium leading-tight text-porcelain">{t.short}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <nav aria-label="Pages" className="mt-6">
                    <ul className="divide-y divide-porcelain/10 border-y border-porcelain/10">
                      {[...LINKS, ...MORE].map((l) => (
                        <li key={l.to}>
                          <Link
                            to={l.to}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between py-3.5 text-[17px] text-porcelain/90 transition-colors duration-150 hover:text-gold-light aria-[current=page]:text-gold-light"
                          >
                            {l.label}
                            <ArrowRight aria-hidden strokeWidth={1.5} className="size-4 text-porcelain/40" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="mt-6 grid gap-3">
                    <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold">
                      Get a quote
                    </Link>
                    <a href={whatsappLink(`Hi ${SITE.name}, I'd like to plan a gift.`)} target="_blank" rel="noopener noreferrer" className="btn-glass">
                      <WhatsAppIcon /> WhatsApp {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
