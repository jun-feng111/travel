const fs = require('fs');
const filePath = 'E:/travel/src/data/coverImages.js';
let content = fs.readFileSync(filePath, 'utf8');

const P = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop`;

const replacements = {
  'tianjin-mahua': { old: '36169944', new: '32565694' },
  'zhangjiakou-yangrou': { old: '32083372', new: '33085849' },
  'baoding-doufu': { old: '27039863', new: '8256965' },
  'chengde-lvgun': { old: '31332192', new: '31317063' },
  'changchun-dingfeng': { old: '38003551', new: '31317060' },
  'mohe-jiangyu': { old: '17313073', new: '11830203' },
  'wuxi-baiyu': { old: '28935581', new: '11830200' },
  'wenzhou-yubing': { old: '18784859', new: '11830201' },
  'hangzhou-xihucuyu': { old: '31764068', new: '2365949' },
  'hangzhou-dongpo': { old: '10296241', new: '8257029' },
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