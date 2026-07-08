const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  const files = execSync('git ls-files src').toString().split('\n').filter(Boolean);
  for (const file of files) {
    if (!file.endsWith('.tsx')) continue;
    try {
      const filePath = path.join(__dirname, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      const targetStr1 = '/webflow/cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/69dac90c64b8895501930882_Frame%201%20(1).png';
      const targetStr2 = '/webflow/cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/69dac90c64b8895501930882_Frame 1 (1).png';
      
      let changed = false;
      if (content.includes(targetStr1)) {
        content = content.split(targetStr1).join('/pureglow_logo.svg');
        changed = true;
      }
      if (content.includes(targetStr2)) {
        content = content.split(targetStr2).join('/pureglow_logo.svg');
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated logo in ${file}`);
      }
    } catch (e) {}
  }
} catch(e) {
  console.error(e);
}
