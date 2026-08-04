// 景点数据
export const spots = [
  // ===== 成都 =====
  {
    id: 'chengdu-panda', cityId: 'chengdu', name: '成都大熊猫繁育研究基地',
    cover: 'img/chengdu-panda.png', rating: 4.8, tags: ['亲子', '自然', '必去'],
    openTime: '07:30-18:00', ticket: '55元', traffic: '地铁3号线熊猫大道站', duration: '3-4小时',
    tips: '建议早上8点前到，熊猫最活跃；带好防晒和饮水。',
    intro: '全球最大的大熊猫人工繁育基地，可近距离观看幼年熊猫进食、嬉戏，是成都亲子游首选。'
  },
  {
    id: 'chengdu-kuanzhai', cityId: 'chengdu', name: '宽窄巷子',
    cover: 'img/chengdu-kuanzhai.png', rating: 4.5, tags: ['人文', '美食', '夜游'],
    openTime: '全天', ticket: '免费', traffic: '地铁4号线宽窄巷子站', duration: '2-3小时',
    tips: '巷子里的盖碗茶和掏耳朵体验不可错过；避开节假日高峰更惬意。',
    intro: '由宽巷子、窄巷子、井巷子组成的清朝古街区，融合老成都院落文化与时尚小店、酒吧。'
  },
  {
    id: 'chengdu-dujiangyan', cityId: 'chengdu', name: '都江堰',
    cover: 'img/chengdu-dujiangyan.png', rating: 4.7, tags: ['人文', '自然', '世界遗产'],
    openTime: '08:00-17:30', ticket: '80元', traffic: '城际列车犀浦→都江堰站', duration: '半天',
    tips: '可结合青城山一日游；雨季水量大更壮观。',
    intro: '战国时期李冰父子修建的古代水利工程，至今仍在灌溉成都平原，被誉为"世界水利文化的鼻祖"。'
  },

  // ===== 杭州 =====
  {
    id: 'hangzhou-xihu', cityId: 'hangzhou', name: '西湖',
    cover: 'img/hangzhou-xihu.png', rating: 4.9, tags: ['自然', '必去', '免费'],
    openTime: '全天', ticket: '免费', traffic: '地铁1号线龙翔桥站', duration: '半天-一天',
    tips: '推荐骑单车环湖或坐手划船游曲院风荷；清晨人少景美。',
    intro: '中国最著名湖泊之一，以"西湖十景"闻名。断桥残雪、苏堤春晓、三潭印月，处处皆画。'
  },
  {
    id: 'hangzhou-lingyin', cityId: 'hangzhou', name: '灵隐寺',
    cover: 'img/hangzhou-lingyin.png', rating: 4.6, tags: ['人文', '宗教'],
    openTime: '07:00-18:15', ticket: '75元(含飞来峰)', traffic: '公交Y2路', duration: '2-3小时',
    tips: '先买飞来峰门票再进寺；寺内素面值得一试。',
    intro: '始建于东晋的千年古刹，背靠北高峰，面朝飞来峰石窟造像，香火鼎盛，禅意悠远。'
  },
  {
    id: 'hangzhou-xixi', cityId: 'hangzhou', name: '西溪湿地',
    cover: 'img/hangzhou-xixi.png', rating: 4.4, tags: ['自然', '亲子'],
    openTime: '08:00-17:30', ticket: '80元', traffic: '地铁19号线西溪湿地站', duration: '半天',
    tips: '秋季芦苇季最美；可坐摇橹船深入芦苇荡。',
    intro: '城市中的天然湿地，"杭州之肾"，《非诚勿扰》取景地，芦花飞雪、柿林晚霞令人沉醉。'
  },

  // ===== 西安 =====
  {
    id: 'xian-bingmayong', cityId: 'xian', name: '秦始皇兵马俑',
    cover: 'img/xian-bingmayong.png', rating: 4.9, tags: ['人文', '必去', '世界遗产'],
    openTime: '08:30-17:00', ticket: '120元', traffic: '游5(306)路公交', duration: '半天',
    tips: '请讲解员或租语音导览；1号坑最震撼。',
    intro: '世界第八大奇迹，秦始皇陵的陪葬坑，数千陶俑神态各异，再现秦军雄风。'
  },
  {
    id: 'xian-chengqiang', cityId: 'xian', name: '西安城墙',
    cover: 'img/xian-chengqiang.png', rating: 4.7, tags: ['人文', '夜游'],
    openTime: '08:00-22:00', ticket: '54元', traffic: '地铁2号线永宁门站', duration: '2-3小时',
    tips: '推荐租自行车绕城一圈(13.7km)；傍晚登城看日落最美。',
    intro: '中国现存最完整的古代城垣，明代洪武年间重建，骑行其上可俯瞰古城格局。'
  },
  {
    id: 'xian-huiminjie', cityId: 'xian', name: '回民街',
    cover: 'img/xian-huiminjie.png', rating: 4.3, tags: ['美食', '夜游'],
    openTime: '全天', ticket: '免费', traffic: '地铁2号线钟楼站', duration: '2小时',
    tips: '主街偏游客，深入大皮院、红柳枝烤肉更地道。',
    intro: '西安美食核心区，肉夹馍、羊肉泡馍、凉皮、柿子饼，清真风味一条街。'
  },

  // ===== 丽江 =====
  {
    id: 'lijiang-oldtown', cityId: 'lijiang', name: '丽江古城',
    cover: 'img/lijiang-oldtown.png', rating: 4.5, tags: ['人文', '夜游', '必去'],
    openTime: '全天', ticket: '维护费80元(部分查)', traffic: '机场大巴至古城', duration: '一天',
    tips: '四方街夜晚有篝火打跳；清晨巷子最安静。',
    intro: '纳西族聚居的千年古城，小桥流水、青石板路，世界文化遗产，文艺青年的集散地。'
  },
  {
    id: 'lijiang-yulong', cityId: 'lijiang', name: '玉龙雪山',
    cover: 'img/lijiang-g1.png', rating: 4.7, tags: ['自然', '必去'],
    openTime: '07:00-18:00', ticket: '100元+索道', traffic: '旅游专线车', duration: '一天',
    tips: '提前备氧气瓶和羽绒服；蓝月谷就在山下别错过。',
    intro: '纳西神山，终年积雪，海拔5596米。冰川公园、云杉坪、蓝月谷构成绝美画卷。'
  },
  {
    id: 'lijiang-shuhe', cityId: 'lijiang', name: '束河古镇',
    cover: 'img/lijiang-shuhe.png', rating: 4.4, tags: ['人文', '安静'],
    openTime: '全天', ticket: '免费', traffic: '公交11路', duration: '半天',
    tips: '比大研古城更清净，适合发呆喝茶。',
    intro: '茶马古道上的重要集镇，保存完好的纳西村落，溪水穿镇，安静悠闲。'
  },

  // ===== 厦门 =====
  {
    id: 'xiamen-gulangyu', cityId: 'xiamen', name: '鼓浪屿',
    cover: 'img/xiamen-gulangyu.png', rating: 4.6, tags: ['自然', '人文', '必去'],
    openTime: '全天(船班运营)', ticket: '船票35元往返', traffic: '轮渡码头乘船', duration: '一天',
    tips: '提前在公众号买船票；岛上没有机动车，穿舒服的鞋。',
    intro: '海上花园小岛，万国建筑博览，钢琴之岛。日光岩、菽庄花园、皓月园是经典。'
  },
  {
    id: 'xiamen-huandao', cityId: 'xiamen', name: '环岛路',
    cover: 'img/xiamen-g2.png', rating: 4.5, tags: ['自然', '骑行'],
    openTime: '全天', ticket: '免费', traffic: '公交29路', duration: '2-3小时',
    tips: '租自行车沿海骑行，黄厝海滩看日出绝佳。',
    intro: '"最美海滨公路"，串联椰风寨、曾厝垵、白城沙滩，海风椰影，骑行天堂。'
  },
  {
    id: 'xiamen-zengcuoan', cityId: 'xiamen', name: '曾厝垵',
    cover: 'img/xiamen-g3.png', rating: 4.2, tags: ['美食', '文艺'],
    openTime: '全天', ticket: '免费', traffic: '公交29路', duration: '2小时',
    tips: '文艺小店+海鲜大排档，傍晚最热闹。',
    intro: '曾经的渔村，如今的"最文艺渔村"，文创小店、民宿、小吃云集。'
  }
]

// 自动补全经纬度：以城市中心为基准，按景点顺序做轻微偏移散开（无真实坐标时的近似）
import { cities } from './cities'
const _cityMap = Object.fromEntries(cities.map(c => [c.id, c]))
spots.forEach((s, i) => {
  if (s.lng == null || s.lat == null) {
    const c = _cityMap[s.cityId]
    if (c) {
      s.lng = +(c.lng + (i % 3) * 0.02 + 0.005).toFixed(4)
      s.lat = +(c.lat + (Math.floor(i / 3) % 3) * 0.015 - 0.005).toFixed(4)
    }
  }
})

export function getSpot(id) {
  return spots.find(s => s.id === id)
}
export function spotsByCity(cityId) {
  return spots.filter(s => s.cityId === cityId)
}
