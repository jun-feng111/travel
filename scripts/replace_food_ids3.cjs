const fs = require('fs');
const filePath = 'E:/travel/src/data/coverImages.js';
let content = fs.readFileSync(filePath, 'utf8');

const P = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop`;

const replacements = {
  'shangrila-yakrou': { old: '12552691', new: '8257029' },
  'daocheng-yakrou': { old: '38339991', new: '8256988' },
  'emeishan-qiaojiao': { old: '18299587', new: '8256983' },
};

let count = 0;
for (const [key, { old: oldId, new: newId }] of Object.entries(replacements)) {
  const oldUrl = P(oldId);
  const newUrl = P(newId);
  const keyPattern = `'${key}'`;
  const idx = content.indexOf(keyPattern);
  if (idx === -1) {
    console.log(`WARN: key '${key}' not found`);
    continue;
  }
  const lineStart = content.lastIndexOf('\n', idx) + 1;
  const lineEnd = content.indexOf('\n', idx);
  const line = content.substring(lineStart, lineEnd);
  if (line.includes(oldId)) {
    content = content.substring(0, lineStart) + line.replace(oldUrl, newUrl) + content.substring(lineEnd);
    count++;
    console.log(`OK: ${key} ${oldId} -> ${newId}`);
  } else {
    console.log(`WARN: ${key} line doesn't contain old ID ${oldId}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nTotal replaced: ${count}/${Object.keys(replacements).length}`);