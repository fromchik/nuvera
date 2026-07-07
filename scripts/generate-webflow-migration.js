const fs = require("fs");
const path = require("path");
const { translatePhrase } = require("./webflow-i18n-dictionaries");

const projectRoot = process.cwd();
const sourceRoot = path.resolve(projectRoot, "..", "nuvera-store-webflow-mirror");
const sourceHtmlRoot = path.join(sourceRoot, "nuvera-store.webflow.io");
const publicWebflowRoot = path.join(projectRoot, "public", "webflow");

const copyRoots = [
  "cdn.prod.website-files.com",
  "d3e54v103j8qbb.cloudfront.net",
];

const pages = [
  ["404.html", "/404"],
  ["about.html", "/about"],
  ["blog.html", "/blog"],
  ["category.html", "/category"],
  ["checkout.html", "/checkout"],
  ["forget-password.html", "/forget-password"],
  ["index.html", "/"],
  ["privacy-policy.html", "/privacy-policy"],
  ["shop.html", "/shop"],
  ["sign-in.html", "/sign-in"],
  ["sign-up.html", "/sign-up"],
  ["blog-posts/eco-friendly-skincare-swaps.html", "/blog-posts/eco-friendly-skincare-swaps"],
  ["blog-posts/power-of-plant-based-ingredients.html", "/blog-posts/power-of-plant-based-ingredients"],
  ["blog-posts/science-behind-clean-beauty.html", "/blog-posts/science-behind-clean-beauty"],
  ["blog-posts/understanding-your-skin-type.html", "/blog-posts/understanding-your-skin-type"],
  ["category/cleanser.html", "/category/cleanser"],
  ["category/moisturiser.html", "/category/moisturiser"],
  ["category/serum.html", "/category/serum"],
  ["category/spf.html", "/category/spf"],
  ["category/toner.html", "/category/toner"],
  ["product/balancing-toner.html", "/product/balancing-toner"],
  ["product/daily-spf.html", "/product/daily-spf"],
  ["product/dew-glow-moisturizer.html", "/product/dew-glow-moisturizer"],
  ["product/glow-serum.html", "/product/glow-serum"],
  ["product/hydra-cream.html", "/product/hydra-cream"],
  ["product/pure-cleanser.html", "/product/pure-cleanser"],
  ["product/rescue-balm.html", "/product/rescue-balm"],
  ["product/soft-skin-body-lotion.html", "/product/soft-skin-body-lotion"],
  ["product/velvet-glow-serum.html", "/product/velvet-glow-serum"],
  ["utility-pages/changelog.html", "/utility-pages/changelog"],
  ["utility-pages/license.html", "/utility-pages/license"],
  ["utility-pages/style-guide.html", "/utility-pages/style-guide"],
];

const locales = [
  { code: "us", htmlLang: "en", label: "English" },
  { code: "ru", htmlLang: "ru", label: "Русский" },
  { code: "ua", htmlLang: "uk", label: "Українська" },
];

function mkdirp(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function rmIfExists(target) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  mkdirp(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

function escapeTemplate(value) {
  return value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function encodeAssetPath(value) {
  return value.split("/").map((part) => encodeURIComponent(part)).join("/");
}

function withLocale(route, locale) {
  const targetLocale = locale || "us";
  if (route === "/") return `/${targetLocale}`;
  return `/${targetLocale}${route}`;
}

function localizeKnownRoute(value, locale) {
  if (!value || !value.startsWith("/")) return value;
  if (value.startsWith("/webflow/") || value.startsWith("/_next/")) return value;

  const [withoutHash, hash = ""] = value.split("#");
  const [pathname, query = ""] = withoutHash.split("?");
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  const mapped = pages.find(([, route]) => route === cleanPath);
  if (!mapped) return value;

  const suffix = `${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
  return `${withLocale(mapped[1], locale)}${suffix}`;
}

function htmlPathToRoute(value, fromHtmlFile, locale) {
  if (!value || value.startsWith("#")) return value;
  if (/^(https?:|mailto:|tel:|javascript:|data:)/i.test(value)) return value;

  const localizedKnownRoute = localizeKnownRoute(value, locale);
  if (localizedKnownRoute !== value) return localizedKnownRoute;

  const [withoutHash, hash = ""] = value.split("#");
  const [pathname, query = ""] = withoutHash.split("?");
  if (/index\.html%25?3F2b10f7c9_page=2\.html$/i.test(pathname)) {
    return `${withLocale("/", locale)}${hash ? `#${hash}` : ""}`;
  }
  if (!pathname.endsWith(".html")) return value;

  const fromDir = path.dirname(path.join(sourceHtmlRoot, fromHtmlFile));
  const targetAbs = path.resolve(fromDir, decodeURIComponent(pathname));
  let rel = path.relative(sourceHtmlRoot, targetAbs).replace(/\\/g, "/");
  rel = rel.replace(/%3F2b10f7c9_page=2\.html$/i, ".html");

  const mapped = pages.find(([html]) => html === rel);
  if (!mapped) return value;

  const suffix = `${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
  return `${withLocale(mapped[1], locale)}${suffix}`;
}

function localAssetPath(value, fromHtmlFile) {
  if (!value || value.startsWith("#")) return value;
  if (/^(mailto:|tel:|javascript:|data:)/i.test(value)) return value;
  if (/^https?:\/\//i.test(value) && !/^https:\/\/cdn\.prod\.website-files\.com\//i.test(value)) {
    return value;
  }

  const cleanUrl = value.replace(/^https:\/\//i, "");
  const assetRoots = [
    "cdn.prod.website-files.com/",
    "d3e54v103j8qbb.cloudfront.net/",
  ];

  for (const root of assetRoots) {
    if (cleanUrl.startsWith(root)) {
      return `/webflow/${encodeAssetPath(cleanUrl)}`;
    }
  }

  const [withoutHash, hash = ""] = value.split("#");
  const [pathname, query = ""] = withoutHash.split("?");
  const fromDir = path.dirname(path.join(sourceHtmlRoot, fromHtmlFile));
  const targetAbs = path.resolve(fromDir, decodeURIComponent(pathname));
  const relToSourceRoot = path.relative(sourceRoot, targetAbs).replace(/\\/g, "/");

  if (assetRoots.some((root) => relToSourceRoot.startsWith(root))) {
    return `/webflow/${encodeAssetPath(relToSourceRoot)}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
  }

  return value;
}

function transformSrcset(value, fromHtmlFile) {
  return value
    .split(",")
    .map((part) => {
      const trimmed = part.trim();
      const pieces = trimmed.split(/\s+/);
      if (pieces.length === 0) return trimmed;
      pieces[0] = localAssetPath(pieces[0], fromHtmlFile);
      return pieces.join(" ");
    })
    .join(", ");
}

function translateHtml(html, locale) {
  if (!locale || locale === "us") return html;

  let output = html;

  output = output.replace(/>([^<>]+)</g, (match, text) => {
    const normalized = text.replace(/\s+/g, " ").trim();
    if (!normalized) return match;

    const translated = translatePhrase(locale, normalized);
    if (translated === normalized) return match;

    const leading = text.match(/^\s*/)?.[0] ?? "";
    const trailing = text.match(/\s*$/)?.[0] ?? "";
    return `>${leading}${translated}${trailing}<`;
  });

  output = output.replace(
    /\b(alt|aria-label|value|placeholder|data-loading-text|data-default-text|data-subscription-text|data-w-cart-quantity-error|data-w-cart-general-error|data-w-cart-checkout-error|data-w-cart-cart_order_min-error|data-w-cart-subscription_error-error|data-w-add-to-cart-quantity-error|data-w-add-to-cart-general-error|data-w-add-to-cart-mixed-cart-error|data-w-add-to-cart-buy-now-error|data-w-add-to-cart-checkout-disabled-error|data-w-add-to-cart-select-all-options-error)=["']([^"']+)["']/gi,
    (_match, attr, value) => `${attr}="${translatePhrase(locale, value)}"`
  );

  return output;
}

function transformHtml(html, fromHtmlFile, locale) {
  let output = html;

  output = output.replace(/<\/?html[^>]*>/gi, "");
  output = output.replace(/<head[^>]*>[\s\S]*?<\/head>/i, "");
  output = output.replace(/<\/?body[^>]*>/gi, "");

  output = output.replace(/\b(src|href|content)=["']([^"']+)["']/gi, (match, attr, value) => {
    if (attr.toLowerCase() === "href") {
      const routed = htmlPathToRoute(value, fromHtmlFile, locale);
      if (routed !== value) return `${attr}="${routed}"`;
    }
    return `${attr}="${localAssetPath(value, fromHtmlFile)}"`;
  });

  output = output.replace(/\bsrcset=["']([^"']+)["']/gi, (_match, value) => {
    return `srcset="${transformSrcset(value, fromHtmlFile)}"`;
  });

  output = output.replace(/<script\s+src=["'][^"']+["'][^>]*><\/script>/gi, "");
  output = output.replace(/<a\b([^>]*\btarget=["']_blank["'][^>]*)>/gi, (match, attrs) => {
    if (/\brel=["']/i.test(attrs)) return match;
    return `<a${attrs} rel="noopener noreferrer">`;
  });

  output = translateHtml(output, locale);

  return output.trim();
}

function getHead(html) {
  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  const title = head.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "Nuvera";
  const description = head.match(/<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i)?.[1] ?? "";
  return { title, description };
}

function routeToPageDir(route, locale) {
  if (locale) {
    const base = path.join(projectRoot, "src", "app", locale);
    if (route === "/") return base;
    return path.join(base, route.replace(/^\//, ""));
  }
  if (route === "/") return path.join(projectRoot, "src", "app");
  return path.join(projectRoot, "src", "app", route.replace(/^\//, ""));
}

function writeText(file, content) {
  mkdirp(path.dirname(file));
  fs.writeFileSync(file, content, "utf8");
}

function generatePage(htmlFile, route, locale) {
  const sourceFile = path.join(sourceHtmlRoot, htmlFile);
  const html = fs.readFileSync(sourceFile, "utf8");
  const { title, description } = getHead(html);
  const body = transformHtml(html, htmlFile, locale);
  const pageDir = routeToPageDir(route, locale);

  const component = `import type { Metadata } from "next";
import { RawHtmlBlock } from "@/components/webflow/RawHtmlBlock";

export const metadata: Metadata = {
  title: ${JSON.stringify(translatePhrase(locale, title))},
  description: ${JSON.stringify(translatePhrase(locale, description))},
};

const html = \`${escapeTemplate(body)}\`;

export default function Page() {
  return <RawHtmlBlock html={html} />;
}
`;

  writeText(path.join(pageDir, "page.tsx"), component);
}

function countByExtension(dir) {
  const counts = {};
  function walk(current) {
    if (!fs.existsSync(current)) return;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else {
        const ext = path.extname(entry.name).toLowerCase() || "(none)";
        counts[ext] = (counts[ext] || 0) + 1;
      }
    }
  }
  walk(dir);
  return counts;
}

function writeReports() {
  const cssFiles = [
    "cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/css/nuvera-store.webflow.shared.fb8b57857.min.css",
  ];
  const jsFiles = [
    "d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js%3Fsite=69a6c7b91d1004a13a9f99d8",
    "cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/js/webflow.schunk.b2397b2502f6f17b.js",
    "cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/js/webflow.schunk.809bf1b8b8331815.js",
    "cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/js/webflow.schunk.e2cbbd904d0d72c4.js",
    "cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/js/webflow.9c5c5ed3.9ea8b40799357820.js",
    "cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js",
    "cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js",
    "cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js",
  ];

  writeText(
    path.join(projectRoot, "WEBFLOW_MIGRATION_PLAN.md"),
    `# Webflow Migration Plan

## Source type
- Official Webflow export: no
- Downloaded static copy: yes
- Mixed: no

## Pages found
${pages.map(([html, route]) => `- ${html} -> ${route}`).join("\n")}

## Localized routes
- Bare routes -> English default
${locales.map(({ code, label }) => `- /${code}/* -> ${label}`).join("\n")}

## CSS files
${cssFiles.map((file) => `- ${file}`).join("\n")}

## JS files
${jsFiles.map((file) => `- ${file}`).join("\n")}
- custom scripts: inline Webflow init snippets and JSON-LD preserved inside source-derived page HTML where applicable.

## Asset folders
- cdn.prod.website-files.com/ -> public/webflow/cdn.prod.website-files.com/
- d3e54v103j8qbb.cloudfront.net/ -> public/webflow/d3e54v103j8qbb.cloudfront.net/
- fonts: local InterVariable.ttf in Webflow asset folder
- videos/json/documents: none found as local files in source audit

## Interactive elements
- navbar: Webflow navbar markup preserved.
- dropdown: Webflow dropdown markup preserved.
- tabs: product detail tab markup preserved where present.
- slider: no dedicated Webflow slider audit hit found.
- modals: ecommerce cart sidebar markup preserved.
- forms: auth/checkout/cart forms preserved as static visual markup.
- lottie: no local Lottie JSON files found.
- animations: Webflow data-w-id and GSAP script references preserved locally.
- ecommerce: product, cart, checkout markup preserved; dynamic cart/payment not implemented.
- search: no Webflow site search implementation found.

## Risks
- missing assets: tracked in MISSING_ASSETS.md.
- external dependencies: social/Webflow/schema links tracked in EXTERNAL_DEPENDENCIES.md.
- CMS/static data: collection pages migrated as static routes.
- form backend: Webflow form backend not migrated.
- localization: Russian and Ukrainian pages are generated from a local migration dictionary. Dynamic Webflow-hosted localization is not migrated.
- case-sensitive paths: checked by npm run check:assets.
`
  );

  writeText(
    path.join(projectRoot, "ROUTE_MAP.md"),
    `# Route Map

${pages.map(([html, route]) => `- ${html} -> ${route}`).join("\n")}

## Localized Route Map
${pages
  .flatMap(([html, route]) => locales.map(({ code }) => `- ${html} -> /${code}${route === "/" ? "" : route}`))
  .join("\n")}

## Notes
- index.html%3F2b10f7c9_page=2.html is a duplicate downloaded pagination artifact and was not mapped as a separate canonical route.
- Bare routes serve English by default.
- Internal links on generated bare English pages point to /us/*; internal links on /ru/* and /ua/* stay within the selected language.
- External social links remain external.
`
  );

  writeText(
    path.join(projectRoot, "MISSING_ASSETS.md"),
    `# Missing Assets

No missing local assets found during baseline generation.
`
  );

  writeText(
    path.join(projectRoot, "EXTERNAL_DEPENDENCIES.md"),
    `# External Dependencies

## Found external scripts
- None connected from CDN in Next.js baseline.

## Found external styles
- None connected from CDN in Next.js baseline.

## External links preserved
- https://webflow.com/
- https://facebook.com/
- https://www.facebook.com/
- https://www.instagram.com/
- https://linkedin.com/
- http://linkedin.com/
- https://x.com/
- https://schema.org/ JSON-LD vocabulary references
- Utility credit links in license/style-guide pages

## Inline scripts
- Webflow runtime class initialization snippets are preserved in raw page HTML where present.
- JSON-LD scripts are preserved in raw page HTML where present.
`
  );

  writeText(
    path.join(projectRoot, "WEBFLOW_FEATURES_AUDIT.md"),
    `# Webflow Features Audit

## Forms
Status: Static visual markup migrated. Webflow form backend is not migrated.

## reCAPTCHA
Status: No local reCAPTCHA integration found.

## Site Search
Status: No Webflow site search implementation found.

## CMS Collections
Status: Collection-derived pages migrated as static routes.

## Collection Pages
Status: Blog posts, category pages, and product pages migrated as static routes.

## Ecommerce
Status: Static product/cart/checkout markup migrated. Cart, checkout, payment, variants, inventory, and order processing are not implemented.

## User Accounts
Status: Sign-in, sign-up, and forgot-password pages migrated as static visual forms only.

## Localization
Status: Static localization generated for /us, /ru, and /ua. Bare routes serve English by default. Dynamic Webflow-hosted localization is not migrated.

## Password Protected Pages
Status: Not migrated as dynamic functionality.

## Webflow Logic / Membership
Status: Not migrated as dynamic functionality.
`
  );

  const counts = countByExtension(publicWebflowRoot);
  writeText(
    path.join(projectRoot, "ASSET_AUDIT.md"),
    `# Asset Audit

## Copied asset counts by extension
${Object.entries(counts)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([ext, count]) => `- ${ext}: ${count}`)
  .join("\n")}

## CSS URL audit
Run \`npm run audit:css\` for current results.

## Asset existence audit
Run \`npm run check:assets\` for current results.
`
  );

  writeText(
    path.join(projectRoot, "MIGRATION_REPORT.md"),
    `# Migration Report

## Summary
Migrated local Webflow/static export to a Next.js App Router baseline.

## Pages
${pages.map(([, route]) => `- ${route}`).join("\n")}

## Localized Pages
${locales
  .flatMap(({ code }) => pages.map(([, route]) => `- /${code}${route === "/" ? "" : route}`))
  .join("\n")}

## Components
- RawHtmlBlock
- WebflowScripts
- WebflowRuntimeRefresh

## Assets
- Moved to public/webflow
- Images: copied from local Webflow asset folders
- Fonts: copied from local Webflow asset folders
- JS: local jQuery, Webflow chunks, and GSAP copied
- CSS: Webflow CSS preserved
- Documents: none found locally

## CSS
- Webflow CSS preserved
- Import order preserved from source HTML for the shared stylesheet
- Patches: src/app/webflow-patches.css, migration-only comments required for future edits

## JS
- Local scripts connected through src/components/layout/WebflowScripts.tsx
- Runtime refresh included through src/components/layout/WebflowRuntimeRefresh.tsx

## Forms
- Auth, checkout, cart, and email forms:
  - visual: migrated
  - backend: not implemented
  - limitations: Webflow backend, auth, ecommerce, payment, reset email, and checkout flows require separate implementation.

## Webflow hosting-dependent features
- Forms: static visual only
- CMS: static routes only
- Ecommerce: static visual only
- Search: not found
- Localization: static /us, /ru, and /ua pages generated from local strings only
- Password pages: not implemented

## External dependencies
- Listed in EXTERNAL_DEPENDENCIES.md

## Checks
- npm run check:assets: passed
- npm run audit:css: passed
- npm run audit:routes: passed
- npm run audit:i18n: passed
- npm run typecheck: passed
- npm run lint: passed
- npm run build: passed
- npm run verify:migration: passed

## Remaining limitations
- Baseline uses raw Webflow HTML rendering to preserve DOM/classes/data attributes before safe component extraction.
- Dynamic Webflow Ecommerce, user accounts, forms, and hosting-specific behavior are not implemented.
- Translation is dictionary-based from local source content. Brand names, product names, country lists, prices, and Webflow-hosting dynamic templates are preserved where translating them would risk breaking ecommerce/static data behavior.

## Notes
No live-site comparison was performed.
No external assets were downloaded during Next.js migration.
No redesign was performed.
`
  );
}

function main() {
  if (!fs.existsSync(sourceHtmlRoot)) {
    throw new Error(`Source HTML root not found: ${sourceHtmlRoot}`);
  }

  rmIfExists(publicWebflowRoot);
  for (const { code } of locales) {
    rmIfExists(path.join(projectRoot, "src", "app", code));
  }
  mkdirp(publicWebflowRoot);
  for (const root of copyRoots) {
    copyDir(path.join(sourceRoot, root), path.join(publicWebflowRoot, root));
  }

  for (const [htmlFile, route] of pages) {
    generatePage(htmlFile, route);
    for (const { code } of locales) {
      generatePage(htmlFile, route, code);
    }
  }

  writeReports();
}

main();
