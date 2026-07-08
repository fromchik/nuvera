const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  const files = execSync('git ls-files').toString().split('\n').filter(Boolean);
  for (const file of files) {
    if (file.endsWith('.avif') || file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.svg')) continue;
    try {
      const filePath = path.join(__dirname, file);
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.toLowerCase().includes('nuvéra')) {
        content = content.replace(/Nuvéra/g, 'PureGlow');
        content = content.replace(/nuvéra/g, 'pureglow');
        content = content.replace(/NUVÉRA/g, 'PUREGLOW');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
      }
    } catch (e) {}
  }
} catch(e) {
  console.error(e);
}
