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
  },

  // ===== 北京 =====
  {
    id: 'beijing-gugong', cityId: 'beijing', name: '故宫博物院',
    cover: 'img/xian-bingmayong.png', rating: 4.9, tags: ['人文', '必去', '世界遗产'],
    openTime: '08:30-17:00(周一闭馆)', ticket: '60元', traffic: '地铁1号线天安门东站', duration: '半天-一天',
    tips: '提前网上预约；走午门入，神武门出；珍宝馆和钟表馆值得一看。',
    intro: '明清两代皇家宫殿，世界文化遗产，藏品百万件，是中国古代宫廷艺术的集大成者。'
  },
  {
    id: 'beijing-changcheng', cityId: 'beijing', name: '八达岭长城',
    cover: 'img/xian-chengqiang.png', rating: 4.8, tags: ['自然', '人文', '必去'],
    openTime: '07:30-17:30', ticket: '40元', traffic: 'S2线火车至青龙桥站', duration: '半天',
    tips: '建议坐缆车上行，步行下山；避开节假日。',
    intro: '"不到长城非好汉"，明代长城保存最完好的一段，气势磅礴。'
  },
  {
    id: 'beijing-summerpalace', cityId: 'beijing', name: '颐和园',
    cover: 'img/hangzhou-xihu.png', rating: 4.7, tags: ['人文', '自然'],
    openTime: '07:00-18:00', ticket: '30元', traffic: '地铁4号线北宫门站', duration: '半天',
    tips: '从北宫门入，游苏州街到昆明湖；十七孔桥夕阳绝美。',
    intro: '中国现存规模最大、保存最完整的皇家园林，皇家御苑之典范。'
  },

  // ===== 上海 =====
  {
    id: 'shanghai-bund', cityId: 'shanghai', name: '外滩',
    cover: 'img/hangzhou-cover.png', rating: 4.8, tags: ['人文', '夜游', '必去'],
    openTime: '全天', ticket: '免费', traffic: '地铁2号线南京东路站', duration: '2-3小时',
    tips: '傍晚看两岸夜景最美；和平饭店至十六铺段经典。',
    intro: '万国建筑博览群与陆家嘴天际线的完美对照，上海的城市名片。'
  },
  {
    id: 'shanghai-yuyuan', cityId: 'shanghai', name: '豫园',
    cover: 'img/lijiang-oldtown.png', rating: 4.5, tags: ['人文', '美食'],
    openTime: '08:30-17:00', ticket: '40元', traffic: '地铁10号线豫园站', duration: '2-3小时',
    tips: '城隍庙小吃丰富；南翔小笼包必尝。',
    intro: '明代古典园林，江南水乡韵味，与城隍庙美食商圈相连。'
  },

  // ===== 广州 =====
  {
    id: 'guangzhou-tianhe', cityId: 'guangzhou', name: '广州塔',
    cover: 'img/xiamen-g1.png', rating: 4.6, tags: ['夜游', '必去'],
    openTime: '09:30-22:30', ticket: '150元', traffic: '地铁3号线广州塔站', duration: '2小时',
    tips: '建议傍晚登塔看日落变夜景；摩天轮项目另收费。',
    intro: '世界第三高塔，"小蛮腰"造型独特，俯瞰羊城夜景。'
  },
  {
    id: 'guangzhou-shamian', cityId: 'guangzhou', name: '沙面岛',
    cover: 'img/xiamen-g3.png', rating: 4.5, tags: ['人文', '拍照'],
    openTime: '全天', ticket: '免费', traffic: '地铁6号线文化公园站', duration: '2-3小时',
    tips: '欧陆风情建筑群，适合拍照；白天光线好。',
    intro: '昔日租界区，150多座欧式建筑，被称为"羊城第九景"。'
  },

  // ===== 深圳 =====
  {
    id: 'shenzhen-oct', cityId: 'shenzhen', name: '世界之窗',
    cover: 'img/xiamen-g1.png', rating: 4.3, tags: ['亲子', '主题乐园'],
    openTime: '09:00-22:00', ticket: '220元', traffic: '地铁1号线世界之窗站', duration: '一天',
    tips: '微缩世界景点，适合带孩子；夜游门票更便宜。',
    intro: '将世界奇观微缩展示的主题公园，深圳标志性景点。'
  },
  {
    id: 'shenzhen-xiao', cityId: 'shenzhen', name: '深圳湾公园',
    cover: 'img/xiamen-huandao.png', rating: 4.5, tags: ['自然', '骑行'],
    openTime: '全天', ticket: '免费', traffic: '地铁2号线深圳湾公园站', duration: '3-4小时',
    tips: '海滨长廊骑行绝佳；看香港日落。',
    intro: '滨海生态公园，遥望香港，候鸟栖息地，都市中的绿洲。'
  },

  // ===== 重庆 =====
  {
    id: 'chongqing-hongyadong', cityId: 'chongqing', name: '洪崖洞',
    cover: 'img/xian-huiminjie.png', rating: 4.6, tags: ['夜游', '美食', '必去'],
    openTime: '全天', ticket: '免费', traffic: '地铁6号线小什字站', duration: '2-3小时',
    tips: '千厮门大桥拍照视角好；11楼观景台免费。',
    intro: '巴渝吊脚楼风格建筑群，《千与千寻》现实版，夜景璀璨。'
  },
  {
    id: 'chongqing-ciqikou', cityId: 'chongqing', name: '磁器口古镇',
    cover: 'img/lijiang-shuhe.png', rating: 4.4, tags: ['人文', '美食'],
    openTime: '全天', ticket: '免费', traffic: '地铁1号线磁器口站', duration: '2-3小时',
    tips: '陈麻花必买；古镇深处更清净。',
    intro: '千年古镇，明清风貌，"一条石板路，千年磁器口"。'
  },

  // ===== 苏州 =====
  {
    id: 'suzhou-zizhuyuan', cityId: 'hangzhou-new', name: '拙政园',
    cover: 'img/hangzhou-xixi.png', rating: 4.8, tags: ['人文', '必去', '世界遗产'],
    openTime: '07:30-17:00', ticket: '90元', traffic: '地铁4号线北寺塔站', duration: '3小时',
    tips: '建议早上入园；与狮子林联票更划算。',
    intro: '中国四大名园之首，明代私家园林典范，世界文化遗产。'
  },
  {
    id: 'suzhou-zhouzhuang', cityId: 'hangzhou-new', name: '周庄古镇',
    cover: 'img/lijiang-oldtown.png', rating: 4.5, tags: ['人文', '水乡'],
    openTime: '08:00-21:00', ticket: '100元', traffic: '苏州汽车北站乘班车', duration: '一天',
    tips: '摇橹船游古镇；夜游双桥绝美。',
    intro: '"中国第一水乡"，小桥流水人家，江南水乡代表。'
  },

  // ===== 南京 =====
  {
    id: 'nanjing-zhongshan', cityId: 'nanjing', name: '中山陵',
    cover: 'img/xian-bingmayong.png', rating: 4.7, tags: ['人文', '必去'],
    openTime: '08:30-17:30', ticket: '免费', traffic: '地铁2号线苜蓿园站', duration: '3小时',
    tips: '紫金山风景区内，可连游明孝陵。',
    intro: '孙中山先生陵墓，建筑宏伟，钟山风景区核心景点。'
  },

  // ===== 昆明 =====
  {
    id: 'kunming-dianchi', cityId: 'chengdu-new', name: '滇池',
    cover: 'img/lijiang-g2.png', rating: 4.5, tags: ['自然', '骑行'],
    openTime: '全天', ticket: '免费', traffic: '公交24路海埂公园站', duration: '半天',
    tips: '冬季红嘴鸥；骑行环湖。',
    intro: '云南最大湖泊，高原明珠，海埂大坝看海鸥。'
  },

  // ===== 大理 =====
  {
    id: 'dali-erhai', cityId: 'hangzhou-west', name: '洱海',
    cover: 'img/xiamen-huandao.png', rating: 4.8, tags: ['自然', '骑行', '必去'],
    openTime: '全天', ticket: '免费', traffic: '大理古城租电瓶车', duration: '一天',
    tips: '环洱海骑行/租车；喜洲古镇、双廊必停。',
    intro: '云南第二大淡水湖，"风花雪月"四景之一，文艺圣地。'
  },
  {
    id: 'dali-santa', cityId: 'hangzhou-west', name: '崇圣寺三塔',
    cover: 'img/xian-chengqiang.png', rating: 4.6, tags: ['人文', '世界遗产'],
    openTime: '07:00-19:00', ticket: '75元', traffic: '公交三塔专线', duration: '2小时',
    tips: '三塔倒影公园拍照最佳；早去人少。',
    intro: '大理标志性建筑，南诏国遗迹，世界文化遗产。'
  },

  // ===== 青岛 =====
  {
    id: 'qingdao-zhanqiao', cityId: 'xian-new', name: '栈桥',
    cover: 'img/xiamen-g1.png', rating: 4.4, tags: ['自然', '必去'],
    openTime: '全天', ticket: '免费', traffic: '地铁3号线青岛站', duration: '1-2小时',
    tips: '回澜阁是尽头；海鸥盘旋。',
    intro: '青岛百年地标，回澜阁深入大海，海鸥飞舞。'
  },
  {
    id: 'qingdao-laoshan', cityId: 'xian-new', name: '崂山',
    cover: 'img/lijiang-g1.png', rating: 4.7, tags: ['自然', '必去'],
    openTime: '06:00-18:00', ticket: '130元', traffic: '崂山旅游专线', duration: '一天',
    tips: '海上名山第一；建议游览仰口或太清线。',
    intro: '海上名山第一，道教发源地之一，海山胜景。'
  },

  // ===== 三亚 =====
  {
    id: 'sanya-yalongbay', cityId: 'lijiang-new', name: '亚龙湾',
    cover: 'img/xiamen-gulangyu.png', rating: 4.7, tags: ['自然', '海滩', '必去'],
    openTime: '全天', ticket: '免费', traffic: '公交15路', duration: '半天-一天',
    tips: '沙质最细；带好防晒。',
    intro: '"天下第一湾"，7公里银白沙滩，清澈海水。'
  },
  {
    id: 'sanya-tianya', cityId: 'lijiang-new', name: '天涯海角',
    cover: 'img/xiamen-g2.png', rating: 4.5, tags: ['自然', '打卡'],
    openTime: '07:00-18:00', ticket: '68元', traffic: '公交16路', duration: '3小时',
    tips: '石刻"天涯""海角"打卡；风大浪急注意安全。',
    intro: '海南南端，"天涯""海角"石刻，浪漫地标。'
  },

  // ===== 哈尔滨 =====
  {
    id: 'haerbin-central', cityId: 'xiamen-new', name: '中央大街',
    cover: 'img/xian-g1.png', rating: 4.6, tags: ['人文', '夜游'],
    openTime: '全天', ticket: '免费', traffic: '地铁1号线兆麟街站', duration: '2-3小时',
    tips: '马迭尔冰棍必吃；看索菲亚教堂。',
    intro: '亚洲最长的步行街，俄式建筑云集，冰雕艺术展。'
  },
  {
    id: 'haerbin-sophia', cityId: 'xiamen-new', name: '圣索菲亚大教堂',
    cover: 'img/xian-chengqiang.png', rating: 4.5, tags: ['人文', '拍照'],
    openTime: '08:30-17:00', ticket: '40元', traffic: '地铁1号线兆麟街站', duration: '1-2小时',
    tips: '广场拍照；内部有哈尔滨历史展。',
    intro: '远东最大东正教教堂，砖石结构，拜占庭风格。'
  },

  // ===== 张家界 =====
  {
    id: 'zhangjiajie-wuling', cityId: 'beijing-new', name: '武陵源',
    cover: 'img/xian-chengqiang.png', rating: 4.9, tags: ['自然', '必去', '世界遗产'],
    openTime: '07:00-18:00', ticket: '228元', traffic: '张家界火车站乘专线', duration: '2-3天',
    tips: '阿凡达取景地；建议住山上客栈省时间。',
    intro: '三千奇峰八百秀水，世界自然遗产，"阿凡达"悬浮山原型。'
  },
  {
    id: 'zhangjiajie-tianmen', cityId: 'beijing-new', name: '天门山',
    cover: 'img/lijiang-g1.png', rating: 4.7, tags: ['自然', '刺激'],
    openTime: '07:30-18:00', ticket: '278元', traffic: '索道直达山顶', duration: '半天-一天',
    tips: '世界最长索道；玻璃栈道需穿鞋套。',
    intro: '天门洞奇观，通天大道99道弯，玻璃栈道刺激。'
  },

  // ===== 桂林 =====
  {
    id: 'guilin-lijiang', cityId: 'shanghai-new', name: '漓江',
    cover: 'img/lijiang-g1.png', rating: 4.8, tags: ['自然', '必去'],
    openTime: '全天(游船)', ticket: '215元游船', traffic: '磨盘山码头乘船', duration: '4-5小时',
    tips: '漓江精华段：杨堤-兴坪；20元人民币背面图案。',
    intro: '"桂林山水甲天下"代表，喀斯特地貌山水画廊。'
  },

  // ===== 九寨沟 =====
  {
    id: 'jiuzhai-canghai', cityId: 'guangzhou-new', name: '五彩池',
    cover: 'img/chengdu-dujiangyan.png', rating: 4.9, tags: ['自然', '必去', '世界遗产'],
    openTime: '07:00-17:00', ticket: '169元(含观光车)', traffic: '九寨沟机场大巴', duration: '一天',
    tips: '海子彩林绝美；秋季最佳；高原反应注意。',
    intro: '九寨沟灵魂景点，多彩池水，钙化彩池，人间仙境。'
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
