// Real-browser sweep: console/hydration errors, failed requests, overflow and basic a11y facts per route.
import { chromium } from "playwright-core";
import fs from "node:fs";

const BASE = process.env.BASE || "http://localhost:8081";
const ROUTES = [
  "/", "/silver", "/personalized", "/festive", "/home-decor", "/pooja", "/corporate", "/occasions",
  "/occasion/diwali", "/category/silver-idols", "/budget/under-500", "/product/favor-boxes-with-keepsake-cards",
  "/build-hamper", "/lookbook", "/about", "/bulk-orders", "/packaging", "/clients", "/journal", "/contact", "/no-such-page",
];
const MOBILE = ["/", "/lookbook", "/product/favor-boxes-with-keepsake-cards", "/build-hamper", "/contact", "/corporate"];

const facts = () => {
  const ids = [...document.querySelectorAll("[id]")].map((e) => e.id);
  const dupIds = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
  const vis = (el) => el.checkVisibility?.() ?? true;
  const name = (el) => (el.getAttribute("aria-label") || el.getAttribute("aria-labelledby") && document.getElementById(el.getAttribute("aria-labelledby"))?.textContent || el.textContent || el.getAttribute("title") || el.querySelector("img[alt]")?.getAttribute("alt") || "").trim();
  const unnamed = [...document.querySelectorAll("a[href], button, [role=button], input:not([type=hidden]), select, textarea")]
    .filter(vis)
    .filter((el) => {
      if (/^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName)) return !(el.labels?.length || el.getAttribute("aria-label") || el.getAttribute("aria-labelledby"));
      return !name(el);
    })
    .map((el) => el.outerHTML.slice(0, 140));
  const noAlt = [...document.querySelectorAll("img")].filter((i) => !i.hasAttribute("alt")).map((i) => i.src.slice(-60));
  const small = [...document.querySelectorAll("a[href], button, [role=button], summary, input, select, textarea")]
    .filter(vis)
    .map((el) => ({ el, r: el.getBoundingClientRect() }))
    .filter(({ el, r }) => r.width > 0 && r.height > 0 && (r.width < 24 || r.height < 24) && !el.closest("p, li p, dd"))
    .map(({ el, r }) => `${el.tagName.toLowerCase()} ${Math.round(r.width)}x${Math.round(r.height)} ${(el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 40)}`);
  const headings = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].filter(vis).map((h) => Number(h.tagName[1]));
  const skips = headings.filter((lvl, i) => i > 0 && lvl > headings[i - 1] + 1).length;
  return {
    title: document.title,
    lang: document.documentElement.lang,
    h1: [...document.querySelectorAll("h1")].map((h) => h.textContent.trim().slice(0, 70)),
    overflowX: document.documentElement.scrollWidth - window.innerWidth,
    dupIds, unnamed: unnamed.slice(0, 8), unnamedCount: unnamed.length, noAlt, headingSkips: skips,
    smallTargets: small.slice(0, 10), smallTargetCount: small.length,
    hrefHash: document.querySelectorAll('a[href="#"]').length,
  };
};

async function visit(ctx, route) {
  const page = await ctx.newPage();
  const logs = [];
  page.on("console", (m) => { if (m.type() === "error" || m.type() === "warning") logs.push(`${m.type()}: ${m.text().slice(0, 300)}`); });
  page.on("pageerror", (e) => logs.push(`pageerror: ${String(e).slice(0, 300)}`));
  const failed = [];
  page.on("response", (r) => { if (r.status() >= 400 && r.url().startsWith(BASE) && !r.url().includes("no-such-page")) failed.push(`${r.status()} ${r.url().replace(BASE, "")}`); });
  page.on("requestfailed", (r) => { if (r.url().startsWith(BASE)) failed.push(`FAILED ${r.url().replace(BASE, "")} ${r.failure()?.errorText}`); });
  const res = await page.goto(`${BASE}${route}${route.includes("?") ? "&" : "?"}noreticle`, { waitUntil: "load", timeout: 120000 });
  await page.waitForTimeout(1500);
  const f = await page.evaluate(facts);
  await page.close();
  return { route, status: res?.status(), logs, failed, ...f };
}

const browser = await chromium.launch({ headless: true });
const out = { desktop: [], mobile: [], checks: {} };
const desk = await browser.newContext({ viewport: { width: 1440, height: 900 } });
for (const r of ROUTES) out.desktop.push(await visit(desk, r));
const mob = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
for (const r of MOBILE) out.mobile.push(await visit(mob, r));

// FAQ: is a closed answer really hidden, and does opening one close the other?
{
  const page = await desk.newPage();
  await page.goto(`${BASE}/?noreticle`, { waitUntil: "load" });
  await page.waitForTimeout(1000);
  const before = await page.evaluate(() => [...document.querySelectorAll('details[name="faq"]')].map((d) => ({ open: d.open, pVisible: d.querySelector("p").checkVisibility() })));
  await page.locator("summary", { hasText: "Do you ship across India?" }).click();
  const after = await page.evaluate(() => [...document.querySelectorAll('details[name="faq"]')].map((d) => ({ open: d.open, pVisible: d.querySelector("p").checkVisibility() })));
  out.checks.faq = { before: before.slice(0, 2), after: after.slice(0, 2) };
  await page.close();
}

// Mega menu -> Silver: does the destination actually render, and how fast?
{
  const page = await desk.newPage();
  await page.goto(`${BASE}/?noreticle`, { waitUntil: "load" });
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Collections" }).click();
  const tile = page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Silver Artifacts 97 designs", exact: true });
  await tile.waitFor({ state: "visible", timeout: 5000 });
  const t0 = Date.now();
  await tile.click();
  await page.waitForURL("**/silver", { timeout: 15000 });
  const tUrl = Date.now() - t0;
  await page.waitForFunction(() => document.querySelector("h1")?.textContent?.match(/silver/i), null, { timeout: 15000 }).catch(() => null);
  const tH1 = Date.now() - t0;
  const h1 = await page.evaluate(() => document.querySelector("h1")?.textContent?.trim());
  const menuOpen = await page.evaluate(() => document.querySelector('[aria-label="Main"] button[aria-expanded="true"]') !== null);
  const scrollY = await page.evaluate(() => window.scrollY);
  out.checks.megaToSilver = { tUrl, tH1, h1, menuStillOpen: menuOpen, scrollY };
  await page.close();
}

await browser.close();
fs.writeFileSync(new URL("./sweep_out.json", import.meta.url), JSON.stringify(out, null, 1));

const bad = (r) => r.logs.length || r.failed.length || r.overflowX > 0 || r.dupIds.length || r.unnamedCount || r.noAlt.length || r.h1.length !== 1 || r.headingSkips;
for (const [k, list] of Object.entries({ desktop: out.desktop, mobile: out.mobile })) {
  console.log(`\n== ${k}`);
  for (const r of list) {
    const flags = [
      r.status !== 200 && `status=${r.status}`,
      r.logs.length && `logs=${r.logs.length}`,
      r.failed.length && `failed=${r.failed.length}`,
      r.overflowX > 0 && `overflowX=${r.overflowX}`,
      r.dupIds.length && `dupIds=${r.dupIds.join(",")}`,
      r.unnamedCount && `unnamed=${r.unnamedCount}`,
      r.noAlt.length && `noAlt=${r.noAlt.length}`,
      r.h1.length !== 1 && `h1=${r.h1.length}`,
      r.headingSkips && `headingSkips=${r.headingSkips}`,
      r.smallTargetCount && `small=${r.smallTargetCount}`,
    ].filter(Boolean);
    console.log(`${bad(r) ? "!!" : "ok"} ${r.route}  ${flags.join("  ")}`);
    for (const l of r.logs.slice(0, 4)) console.log(`     ${l}`);
    for (const l of r.failed.slice(0, 4)) console.log(`     ${l}`);
    for (const l of r.unnamed.slice(0, 3)) console.log(`     unnamed: ${l}`);
  }
}
console.log("\n== checks\n" + JSON.stringify(out.checks, null, 1));
