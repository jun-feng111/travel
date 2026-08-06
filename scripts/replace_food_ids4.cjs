const fs = require('fs');
const filePath = 'E:/travel/src/data/coverImages.js';
let content = fs.readFileSync(filePath, 'utf8');

const P = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop`;

const replacements = {
  'beijing-douzhi': { old: '2365946', new: '5409027' },
  'tianjin-gaojuan': { old: '12463133', new: '32565694' },
  'changbaishan-linwa': { old: '6705486', new: '11830200' },
  'changbaishan-ginseng': { old: '18968671', new: '8256965' },
  'anshan-wentang': { old: '15059718', new: '38770081' },
  'hangzhou-longjing': { old: '6718709', new: '8952049' },
  'suzhou-squirrel': { old: '32809021', new: '11830203' },
  'ningbo-haixian': { old: '5531093', new: '14786461' },
  'wuhan-wuyu': { old: '35138972', new: '11830201' },
  'taishan-doufu': { old: '16446206', new: '8256965' },
  'wudangshan-zhai': { old: '19559228', new: '24186431' },
  'emeishan-zhai': { old: '15590359', new: '8257027' },
  'wuyuan-hebao': { old: '27104067', new: '11830201' },
  'xitang-baozhen': { old: '30427442', new: '31317063' },
  'dalian-cherry': { old: '15797951', new: '33085849' },
  'guilin-yudi': { old: '5848522', new: '11830200' },
  'yangshuo-tong': { old: '28559495', new: '31317060' },
  'jiuzhai-zanghuoguo': { old: '29740954', new: '38770081' },
  'qinghaihu-suanla': { old: '36792526', new: '8257029' },
  'chaka-huoguo': { old: '33691815', new: '38770081' },
  'wuyishan-tongfan': { old: '35091311', new: '28895971' },
  'huashan-yecai': { old: '7492300', new: '8256983' },
  'huangguoshu-siwa': { old: '37100215', new: '33085849' },
  'xian-roujiamo': { old: '25390101', new: '10692530' },
  'xian-liangpi': { old: '18803174', new: '34618114' },
  'ningbo-tangyuan': { old: '18803174', new: '7363964' },
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
    console.log(`SKIP: ${key} old ID ${oldId} not in line`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nTotal replaced: ${count}/${Object.keys(replacements).length}`);