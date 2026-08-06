const fs = require('fs');
const c = fs.readFileSync('E:/travel/src/data/coverImages.js', 'utf8');
const foodMatch = c.match(/export const foodCovers = \{([\s\S]*?)\}/);
const lines = foodMatch[1].split('\n').filter(l => l.trim().startsWith("'"));
const entries = lines.map(l => {
  const m = l.match(/'([^']+)'.*?photos\/(\d+)\//);
  return m ? { key: m[1], id: m[2] } : null;
}).filter(Boolean);

const verified = [
  'beijing-duck','chengdu-huoguo','suzhou-dazha','xiamen-shacha','huangshan-shaobing','huangshan-guiyu','quanzhou-mianxian','qiandaohu-suanla','huangguoshu-suan',
  'shijiazhuang-ganglu','chengde-nansha','hefei-mijiao','wenzhou-maibing','fuzhou-yuwán',
  'shijiazhuang-bazwan','anshan-niuzhuang','qingdao-geli','kaifeng-tongzi','nanning-ningmengya','lijiang-baba','fenghuang-xue','xitang-fenzheng',
  'wulumuqi-dapan','xiamen-haisheng','pingyao-daoxiao','dunhuang-huangmian','haerbin-lapi','zhangye-cuoyu','wudangshan-jiangyu','fenghuang-suan',
  'wuyuan-fenzheng','shanghai-braised','zhouzhuang-wan','chongqing-xiaomian','lasa-zanghuoguo','zhangjiajie-sanxia','pingyao-niurou','changsha-kouwei',
  'dali-shaguoyu','xiamen-tusundong','wuhan-xiaolongxia','changsha-tangyou','shanghai-shengjian','wulumuqi-shouzhua','wuzhen-chaodian','taishan-chaoji',
  'haerbin-madir','shenyang-diao','jiuzhai-qingke','xian-paomo',
  'tianjin-mahua','zhangjiakou-yangrou','baoding-doufu','chengde-lvgun','changchun-dingfeng','mohe-jiangyu','wuxi-baiyu','wenzhou-yubing',
  'hangzhou-xihucuyu','hangzhou-dongpo','shangrila-yakrou','daocheng-yakrou','emeishan-qiaojiao',
  'tianjin-goubuli','qinhuangdao-seafood','qinhuangdao-hunguo','haerbin-guobaorou','changchun-pork',
  'zhengzhou-hula','luoyang-bufan','dunhuang-kaorou','nanning-laoyou','chongqing-suanla',
  'guangzhou-zaocha','guangzhou-baozai','zhuhai-zaocha','xiamen-shacha',
  'shenzhen-pencai','chengdu-chuanchuan','chengdu-longchaoshou','chongqing-huoguo',
  'kunming-qiguo','dali-bawan','lijiang-lapai','sanya-wenchang','sanya-seafood',
  'guangzhou-baiqie','lasa-suyoucha','shangrila-suyoucha',
  '8178934','8250197','7780853','11161343','6545319','5975975','7492246','6896031','4030788',
  '14786461','16341443','19969203','28895971','5409027','24186431',
  '32860319','32860305','34834550'
];

const unverified = entries.filter(e => !verified.includes(e.key) && !verified.includes(e.id));
console.log('Total:', entries.length, 'Verified:', entries.length - unverified.length, 'Unverified:', unverified.length);
unverified.forEach(e => console.log(e.key + '=' + e.id));