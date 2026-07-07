const fs = require("fs");
const path = require("path");

const root = process.cwd();
const publicDir = path.join(root, "public");
const checkedExtensions = [".tsx", ".ts", ".jsx", ".js", ".css", ".html", ".json"];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;

  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walk(full, out);
    } else {
      out.push(full);
    }
  }

  return out;
}

function fileExistsCaseSensitive(absPath) {
  if (!fs.existsSync(absPath)) return false;

  const resolved = path.resolve(absPath);
  const parsed = path.parse(resolved);
  let current = parsed.root;
  const relativeParts = path.relative(parsed.root, resolved).split(path.sep);

  for (const part of relativeParts) {
    if (!part) continue;

    const entries = fs.readdirSync(current);
    if (!entries.includes(part)) return false;

    current = path.join(current, part);
  }

  return true;
}

function normalizeAsset(asset) {
  return asset
    .replace(/^['"`]/, "")
    .replace(/['"`]$/, "")
    .replace(/#.*$/, "")
    .replace(/\?.*$/, "");
}

function checkPublicPath(asset, sourceFile, missing) {
  const clean = normalizeAsset(asset);

  if (!clean.startsWith("/webflow/")) return;

  const abs = path.join(publicDir, decodeURIComponent(clean));

  if (!fileExistsCaseSensitive(abs)) {
    missing.push({
      sourceFile,
      asset: clean,
      expected: abs,
    });
  }
}

const files = [
  ...walk(path.join(root, "src")),
  ...walk(path.join(root, "public", "webflow", "cdn.prod.website-files.com")),
  ...walk(path.join(root, "public", "webflow", "d3e54v103j8qbb.cloudfront.net")),
].filter((file) => checkedExtensions.includes(path.extname(file)));

const missing = [];

const regexes = [
  /["'`](\/webflow\/[^"'`) \n]+)["'`]/g,
  /url\(([^)]+)\)/g,
  /srcset=["'`]([^"'`]+)["'`]/g,
];

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");

  for (const regex of regexes) {
    let match;

    while ((match = regex.exec(content))) {
      const raw = match[1].trim().replace(/^["']|["']$/g, "");
      const candidates =
        regex.source.startsWith("srcset")
          ? raw.split(",").map((part) => part.trim().split(/\s+/)[0])
          : [raw];

      for (const candidate of candidates) {
        if (candidate.startsWith("/webflow/")) {
          checkPublicPath(candidate, file, missing);
        }
      }
    }
  }
}

if (missing.length > 0) {
  console.error("Missing or case-mismatched assets found:");

  for (const item of missing) {
    console.error(`- ${item.asset}`);
    console.error(`  Source: ${item.sourceFile}`);
    console.error(`  Expected: ${item.expected}`);
  }

  process.exit(1);
}

console.log("All /webflow assets exist with correct case.");
