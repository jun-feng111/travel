const fs = require('fs');
const c = fs.readFileSync('E:/travel/src/data/coverImages.js', 'utf8');
const foodMatch = c.match(/export const foodCovers = \{([\s\S]*?)\}/);
if (!foodMatch) { console.log('no match'); process.exit(); }
const lines = foodMatch[1].split('\n').filter(l => l.trim().startsWith("'"));
const entries = lines.map(l => {
  const m = l.match(/'([^']+)'.*?photos\/(\d+)\//);
  return m ? { key: m[1], id: m[2] } : null;
}).filter(Boolean);
console.log('Total:', entries.length);
const verified = ['beijing-duck','chengdu-huoguo','suzhou-dazha','xiamen-shacha','huangshan-shaobing','huangshan-guiyu','quanzhou-mianxian','qiandaohu-suanla','huangguoshu-suan','shijiazhuang-ganglu','chengde-nansha','hefei-mijiao','wenzhou-maibing','fuzhou-yuwán'];
const unverified = entries.filter(e => !verified.includes(e.key));
console.log('Unverified:', unverified.length);
unverified.forEach(e => console.log(e.key + '=' + e.id));