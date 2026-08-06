const fs = require('fs');
const filePath = 'E:/travel/src/data/coverImages.js';
let content = fs.readFileSync(filePath, 'utf8');

const P = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop`;

const replacements = {
  'shijiazhuang-bazwan': { old: '7563033', new: '24186431' },
  'anshan-niuzhuang': { old: '6612642', new: '7287696' },
  'qingdao-geli': { old: '6978242', new: '11830203' },
  'kaifeng-tongzi': { old: '5848527', new: '12350418' },
  'nanning-ningmengya': { old: '5848535', new: '10692530' },
  'lijiang-baba': { old: '5112529', new: '32565694' },
  'fenghuang-xue': { old: '5848525', new: '36388451' },
  'xitang-fenzheng': { old: '8029532', new: '8257029' },
  'huangguoshu-suan': { old: '566343', new: '2365949' },
  'wulumuqi-dapan': { old: '5374014', new: '19969203' },
  'xiamen-haisheng': { old: '2365943', new: '33085849' },
  'pingyao-daoxiao': { old: '11064614', new: '5409027' },
  'dunhuang-huangmian': { old: '11064614', new: '34618114' },
  'haerbin-lapi': { old: '7719909', new: '28895971' },
  'zhangye-cuoyu': { old: '7719909', new: '24186431' },
  'wudangshan-jiangyu': { old: '3640448', new: '11830200' },
  'fenghuang-suan': { old: '3640448', new: '11830201' },
  'wuyuan-fenzheng': { old: '34834550', new: '8256988' },
  'shanghai-braised': { old: '10692545', new: '8257027' },
  'zhouzhuang-wan': { old: '10692545', new: '8256983' },
  'chongqing-xiaomian': { old: '7703365', new: '5409027' },
  'lasa-zanghuoguo': { old: '7703365', new: '38770081' },
  'zhangjiajie-sanxia': { old: '38843571', new: '11830203' },
  'pingyao-niurou': { old: '38843571', new: '33085849' },
  'changsha-kouwei': { old: '12572537', new: '19969203' },
  'dali-shaguoyu': { old: '11161345', new: '11830201' },
  'xiamen-tusundong': { old: '10966644', new: '33085849' },
  'wuhan-xiaolongxia': { old: '9928538', new: '14786461' },
  'changsha-tangyou': { old: '19499006', new: '31317063' },
  'shanghai-shengjian': { old: '19240003', new: '7363964' },
  'wulumuqi-shouzhua': { old: '28635476', new: '19969203' },
  'wuzhen-chaodian': { old: '16045981', new: '32565694' },
  'taishan-chaoji': { old: '12739828', new: '10692530' },
  'haerbin-madir': { old: '20943985', new: '8724096' },
  'shenyang-diao': { old: '13914952', new: '32565694' },
  'jiuzhai-qingke': { old: '13914951', new: '6449866' },
  'xian-paomo': { old: '15220877', new: '24186431' },
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