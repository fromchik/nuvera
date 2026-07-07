const fs = require("fs");
const path = require("path");

const root = process.cwd();
const cssRoot = path.join(root, "public", "webflow");
const reportPath = path.join(root, "ASSET_AUDIT.md");

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const cssFiles = walk(cssRoot).filter((file) => file.endsWith(".css"));
const missing = [];
const found = [];

for (const file of cssFiles) {
  const css = fs.readFileSync(file, "utf8");
  const regex = /url\(([^)]+)\)/g;
  let match;

  while ((match = regex.exec(css))) {
    const raw = match[1].trim().replace(/^["']|["']$/g, "");
    if (!raw || raw.startsWith("data:") || /^https?:/i.test(raw)) {
      found.push({ file, raw, status: "ignored" });
      continue;
    }

    const clean = decodeURIComponent(raw.replace(/[?#].*$/, ""));
    const abs = clean.startsWith("/webflow/")
      ? path.join(root, "public", clean)
      : path.resolve(path.dirname(file), clean);

    if (fs.existsSync(abs)) {
      found.push({ file, raw, status: "ok" });
    } else {
      missing.push({ file, raw, expected: abs });
    }
  }
}

const report = `# Asset Audit

## CSS files checked
${cssFiles.map((file) => `- ${path.relative(root, file).replace(/\\/g, "/")}`).join("\n") || "- none"}

## CSS url(...) references
- Total: ${found.length + missing.length}
- Missing: ${missing.length}

## Missing CSS assets
${
  missing.length
    ? missing
        .map(
          (item) =>
            `- ${item.raw}\n  Source: ${path.relative(root, item.file).replace(/\\/g, "/")}\n  Expected: ${item.expected}`
        )
        .join("\n")
    : "No issues found."
}
`;

fs.writeFileSync(reportPath, report, "utf8");

if (missing.length > 0) {
  console.error(report);
  process.exit(1);
}

console.log("CSS asset URLs audited successfully.");
