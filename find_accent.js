const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  // Try to find Nuvéra in all text files
  const files = execSync('git ls-files').toString().split('\n').filter(Boolean);
  let found = false;
  for (const file of files) {
    if (file.endsWith('.avif') || file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.svg')) continue;
    try {
      const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
      if (content.toLowerCase().includes('nuvéra')) {
        console.log(`Found in ${file}`);
        found = true;
      }
    } catch (e) {}
  }
  if (!found) {
    console.log("Not found in any text files.");
  }
} catch(e) {
  console.error(e);
}
