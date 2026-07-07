const fs = require("fs");
const path = require("path");

const root = process.cwd();
const srcRoot = path.join(root, "src", "app");
const routeMapPath = path.join(root, "ROUTE_MAP.md");
const routeMap = fs.existsSync(routeMapPath) ? fs.readFileSync(routeMapPath, "utf8") : "";

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const files = walk(srcRoot).filter((file) => file.endsWith(".tsx") || file.endsWith(".ts"));
const htmlLinks = [];
const blankWithoutRel = [];

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(/href=["']([^"']+\.html[^"']*)["']/g)) {
    htmlLinks.push({ file, href: match[1] });
  }
  for (const match of content.matchAll(/<a\b[^>]*target=["']_blank["'][^>]*>/g)) {
    if (!/rel=["'][^"']*noopener/i.test(match[0])) {
      blankWithoutRel.push({ file, tag: match[0] });
    }
  }
}

const unmapped = htmlLinks.filter((item) => !routeMap.includes(item.href.split("#")[0].split("?")[0]));

if (htmlLinks.length > 0 || unmapped.length > 0 || blankWithoutRel.length > 0) {
  console.error("Route audit found issues:");
  for (const item of htmlLinks) {
    console.error(`- .html href remains: ${item.href} in ${item.file}`);
  }
  for (const item of blankWithoutRel) {
    console.error(`- target=_blank without noopener in ${item.file}: ${item.tag}`);
  }
  process.exit(1);
}

console.log("Route audit passed: no .html links remain in migrated source.");
