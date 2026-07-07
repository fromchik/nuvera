const fs = require("fs");
const path = require("path");

const root = process.cwd();
const appRoot = path.join(root, "src", "app");
const locales = ["us", "ru", "ua"];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }

  return out;
}

function fail(message, details = []) {
  console.error(message);
  for (const detail of details) console.error(`- ${detail}`);
  process.exit(1);
}

const missingLocaleRoots = locales
  .map((locale) => path.join(appRoot, locale, "page.tsx"))
  .filter((file) => !fs.existsSync(file));

if (missingLocaleRoots.length > 0) {
  fail("Missing localized root routes:", missingLocaleRoots);
}

const localizedPageFiles = locales.flatMap((locale) =>
  walk(path.join(appRoot, locale))
    .filter((file) => file.endsWith("page.tsx"))
    .map((file) => ({ locale, file }))
);

const wrongLinks = [];

for (const { locale, file } of localizedPageFiles) {
  const content = fs.readFileSync(file, "utf8");

  for (const match of content.matchAll(/href=["'](\/[^"']*)["']/g)) {
    const href = match[1];
    if (
      href.startsWith("/webflow/") ||
      href.startsWith("/_next/") ||
      href.startsWith(`/${locale}`) ||
      href === `/${locale}`
    ) {
      continue;
    }

    wrongLinks.push(`${path.relative(root, file)} -> ${href}`);
  }
}

if (wrongLinks.length > 0) {
  fail("Localized pages contain internal links outside the current locale:", wrongLinks);
}

const ruHome = fs.readFileSync(path.join(appRoot, "ru", "page.tsx"), "utf8");
const uaHome = fs.readFileSync(path.join(appRoot, "ua", "page.tsx"), "utf8");
const usHome = fs.readFileSync(path.join(appRoot, "us", "page.tsx"), "utf8");

if (!ruHome.includes("Натуральный уход за кожей")) {
  fail("Russian home page does not contain expected translated hero text.");
}

if (!uaHome.includes("Натуральний догляд за шкірою")) {
  fail("Ukrainian home page does not contain expected translated hero text.");
}

if (!usHome.includes("Naturally pure skincare essentials")) {
  fail("English /us home page does not contain expected English hero text.");
}

console.log("I18n route audit passed.");
