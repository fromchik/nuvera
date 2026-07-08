const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all files from git
const files = execSync('git grep -l -i nuvera').toString().split('\n').filter(Boolean);

for (const file of files) {
  try {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace different casings
    content = content.replace(/Nuvera/g, 'PureGlow');
    content = content.replace(/nuvera/g, 'pureglow');
    content = content.replace(/NUVERA/g, 'PUREGLOW');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } catch (e) {
    console.error(`Error processing ${file}:`, e);
  }
}
