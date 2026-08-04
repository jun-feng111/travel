export const guides = [

  // ==================== 华北 (15篇) ====================

  // ---- 北京 (2篇) ----
  {
    id: 'beijing-guide-3days',
    cityId: 'beijing',
    title: '北京3日经典·皇城漫步',
    days: 3,
    cover: 'beijing-forbidden-city',
    summary: '紫禁城、长城、胡同全覆盖，3天穿越六百年皇城历史与现代活力。',
    budget: { min: 2000, max: 4000, currency: 'CNY', note: '含住宿、餐饮、门票、交通，不含往返大交通' },
    transport: '地铁发达，覆盖所有主要景点；长城可乘S2线火车或一日游',
    itinerary: [
      {
        day: 1, title: '皇城中轴·紫禁盛世',
        schedule: [
          { time: '08:30', content: '天安门广场看升旗仪式，参观人民英雄纪念碑', spotId: 'beijing-tiananmen', foodId: '', cost: 0 },
          { time: '09:30', content: '故宫博物院：午门入→太和殿→珍宝馆→钟表馆→神武门出', spotId: 'beijing-gugong', foodId: '', cost: 60 },
          { time: '12:30', content: '故宫角楼咖啡或四季民福烤鸭店午餐', spotId: '', foodId: 'beijing-duck', cost: 120 },
          { time: '14:30', content: '景山公园俯瞰故宫全景，北海公园逛皇家园林', spotId: 'beijing-jingshan', foodId: '', cost: 20 },
          { time: '18:00', content: '什刹海烟袋斜街，南锣鼓巷胡同晚餐', spotId: 'beijing-shichahai', foodId: 'beijing-chaoganr', cost: 80 }
        ],
        hotel: '王府井/前门附近，如家/汉庭约300-500元/晚',
        transport: '地铁1号线天安门东站→8号线中国美术馆站步行',
        cost: 380
      },
      {
        day: 2, title: '不到长城·好汉之旅',
        schedule: [
          { time: '07:30', content: '西直门乘S2线火车赴八达岭长城（约1.5小时）', spotId: '', foodId: '', cost: 25 },
          { time: '09:30', content: '八达岭长城：缆车上行→北8楼→南7楼→步行下山', spotId: 'beijing-changcheng', foodId: '', cost: 40 },
          { time: '13:00', content: '长城脚下农家菜或返回市区京味儿炒肝', spotId: '', foodId: 'beijing-chaoganr', cost: 60 },
          { time: '15:30', content: '颐和园：北宫门入→苏州街→四大部洲→昆明湖→十七孔桥', spotId: 'beijing-summerpalace', foodId: '', cost: 30 },
          { time: '19:00', content: '中关村/五道口晚餐，局气或大董烤鸭', spotId: '', foodId: 'beijing-duck', cost: 200 }
        ],
        hotel: '西直门/中关村附近，桔子/全季约400-600元/晚',
        transport: 'S2线火车+地铁4号线',
        cost: 555
      },
      {
        day: 3, title: '胡同京味儿·文化深度',
        schedule: [
          { time: '09:00', content: '天坛公园：祈年殿→回音壁→圜丘，感受祭天文化', spotId: 'beijing-tiantan', foodId: '', cost: 35 },
          { time: '12:00', content: '老北京炸酱面大王午餐', spotId: '', foodId: 'beijing-noodle', cost: 40 },
          { time: '14:00', content: '国家博物馆（需预约）或首都博物馆看历史文物', spotId: 'beijing-museum', foodId: '', cost: 0 },
          { time: '17:00', content: '王府井大街购物，稻香村买伴手礼', spotId: 'beijing-wangfujing', foodId: '', cost: 50 },
          { time: '19:00', content: '全聚德/大董烤鸭晚餐，观看杂技或京剧', spotId: '', foodId: 'beijing-duck', cost: 200 }
        ],
        hotel: '',
        transport: '地铁5号线天坛东门站→1号线王府井站',
        cost: 325
      }
    ],
    tips: [
      '故宫、国博必须提前7天在官网预约，否则无法入场',
      '长城建议穿防滑运动鞋，冬季需备羽绒服和手套',
      '地铁高峰拥挤，尽量避开8-9点和17-18点',
      '全聚德前门店最正宗但排队久，大董烤鸭更现代化',
      '胡同游推荐南锣鼓巷+什刹海，避开春节等节假日'
    ],
    bestSeason: '4-5月春花、9-10月秋高气爽',
    highlights: ['故宫600年皇家宫殿', '八达岭长城雄姿', '老北京胡同文化']
  },
  {
    id: 'beijing-guide-5days',
    cityId: 'beijing',
    title: '北京5日深度·皇城里的慢时光',
    days: 5,
    cover: 'beijing-forbidden-city',
    summary: '5天深入北京，从皇家园林到胡同四合院，从长城雄姿到798艺术，全方位体验帝都魅力。',
    budget: { min: 3000, max: 6000, currency: 'CNY', note: '含住宿、餐饮、门票、市内交通，不含往返机票' },
    transport: '地铁1/2/4/5/8/10号线覆盖全城，日票20元不限次；景点联票更划算',
    itinerary: [
      {
        day: 1, title: '皇城中轴·开国帝都',
        schedule: [
          { time: '08:00', content: '天安门广场升旗仪式，参观国家博物馆', spotId: 'beijing-tiananmen', foodId: '', cost: 0 },
          { time: '10:00', content: '故宫博物院深度游：午门→前朝三大殿→后三宫→御花园→珍宝馆', spotId: 'beijing-gugong', foodId: '', cost: 60 },
          { time: '13:00', content: '故宫角楼咖啡午餐，窗外就是紫禁城角楼和护城河', spotId: '', foodId: 'beijing-duck', cost: 100 },
          { time: '15:00', content: '景山公园登高俯瞰紫禁城，北海公园赏湖', spotId: 'beijing-jingshan', foodId: '', cost: 20 },
          { time: '19:00', content: '什刹海晚餐，后海酒吧街小酌', spotId: 'beijing-shichahai', foodId: 'beijing-chaoganr', cost: 150 }
        ],
        hotel: '王府井/前门精品酒店，500-800元/晚',
        transport: '地铁1号线+步行',
        cost: 330
      },
      {
        day: 2, title: '不到长城·皇家园林',
        schedule: [
          { time: '07:00', content: '西直门乘S2线赴八达岭长城（1.5小时车程）', spotId: '', foodId: '', cost: 25 },
          { time: '09:00', content: '八达岭长城：缆车上→北8楼→好汉坡→南7楼→步行下', spotId: 'beijing-changcheng', foodId: '', cost: 40 },
          { time: '12:30', content: '返回市区，聚宝源铜锅涮肉午餐', spotId: '', foodId: 'beijing-hotpot', cost: 150 },
          { time: '14:30', content: '颐和园深度游：东宫门入→仁寿殿→长廊→昆明湖→佛香阁', spotId: 'beijing-summerpalace', foodId: '', cost: 30 },
          { time: '18:30', content: '中关村晚餐，局气烤鸭或胡大饭馆', spotId: '', foodId: 'beijing-duck', cost: 180 }
        ],
        hotel: '西单/金融街酒店，600-900元/晚',
        transport: 'S2线火车+地铁4号线',
        cost: 425
      },
      {
        day: 3, title: '胡同老巷·京味儿文化',
        schedule: [
          { time: '09:00', content: '天坛公园：祈年殿→回音壁→圜丘→神乐署', spotId: 'beijing-tiantan', foodId: '', cost: 35 },
          { time: '11:30', content: '老北京炸酱面午餐', spotId: '', foodId: 'beijing-noodle', cost: 45 },
          { time: '13:30', content: '南锣鼓巷+恭王府（和珅故居）', spotId: 'beijing-gongwangfu', foodId: '', cost: 40 },
          { time: '16:00', content: '国子监+孔庙，感受古代最高学府', spotId: 'beijing-guozijian', foodId: '', cost: 30 },
          { time: '18:30', content: '簋街夜宵，麻辣小龙虾+羊蝎子火锅', spotId: '', foodId: 'beijing-hotpot', cost: 200 }
        ],
        hotel: '北新桥/东直门，400-700元/晚',
        transport: '地铁5号线+步行',
        cost: 350
      },
      {
        day: 4, title: '艺术创意·现代北京',
        schedule: [
          { time: '09:30', content: '798艺术区：当代艺术展览+创意小店', spotId: 'beijing-798', foodId: '', cost: 50 },
          { time: '12:00', content: '798内小剧场咖啡午餐', spotId: '', foodId: '', cost: 80 },
          { time: '14:00', content: '雍和宫祈福（北京最大藏传佛教寺庙）', spotId: 'beijing-yonghegong', foodId: '', cost: 25 },
          { time: '15:30', content: '地坛公园散步（史铁生《我与地坛》原型）', spotId: 'beijing-ditan', foodId: '', cost: 0 },
          { time: '19:00', content: '三里屯/国贸CBD晚餐，大董烤鸭旗舰店', spotId: '', foodId: 'beijing-duck', cost: 250 }
        ],
        hotel: '国贸/三里屯，800-1200元/晚',
        transport: '地铁14号线+步行',
        cost: 405
      },
      {
        day: 5, title: '皇家祭祀·采购告别',
        schedule: [
          { time: '08:30', content: '明十三陵（定陵地宫+长陵祾恩殿）', spotId: 'beijing-mingling', foodId: '', cost: 135 },
          { time: '13:00', content: '返回市区，海碗居炸酱面午餐', spotId: '', foodId: 'beijing-noodle', cost: 60 },
          { time: '15:00', content: '王府井大街+北京百货大楼选购伴手礼', spotId: 'beijing-wangfujing', foodId: '', cost: 50 },
          { time: '17:30', content: '前门大街，张一元茶庄买花茶', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '全聚德烤鸭告别晚餐，看一场京剧晚会', spotId: '', foodId: 'beijing-duck', cost: 300 }
        ],
        hotel: '',
        transport: '旅游专线+地铁2号线',
        cost: 545
      }
    ],
    tips: [
      '故宫、国博、恭王府需提前7-14天网络预约',
      '长城一日游务必选择正规渠道，黑导游会强制消费',
      '北京冬季干燥，备润唇膏和保湿面膜',
      '地铁高峰非常拥挤，建议8点前或9点后出行',
      '大董烤鸭比全聚德更有性价比，推荐酥不腻烤鸭'
    ],
    bestSeason: '4-5月、9-10月，避开极端天气',
    highlights: ['紫禁城皇家宫殿群', '八达岭长城+明十三陵', '798艺术区+胡同文化']
  },

  // ---- 天津 (2篇) ----
  {
    id: 'tianjin-guide-3days',
    cityId: 'tianjin',
    title: '天津3日·津门故里万国风情',
    days: 3,
    cover: 'tianjin-binhai',
    summary: '五大道欧陆风情、古文化街民俗、小洋楼建筑博览，3天读懂天津卫。',
    budget: { min: 1200, max: 2500, currency: 'CNY', note: '含住宿、餐饮、门票、市内交通' },
    transport: '地铁1/2/3/5/6号线覆盖主要景点；五大道可租自行车游览',
    itinerary: [
      {
        day: 1, title: '欧式建筑·五大道风情',
        schedule: [
          { time: '09:00', content: '五大道民园广场出发，沿马场道、睦南道骑行看小洋楼', spotId: 'tianjin-wudadao', foodId: '', cost: 0 },
          { time: '12:00', content: '利顺德大饭店午餐（民国风情主题餐厅）', spotId: '', foodId: 'tianjin-bagao', cost: 150 },
          { time: '14:00', content: '天津外国语大学+瓷器房子（疙瘩楼）', spotId: 'tianjin-cichifangzi', foodId: '', cost: 40 },
          { time: '16:00', content: '西开天主教堂（中国最大罗马式建筑）', spotId: 'tianjin-xikai', foodId: '', cost: 0 },
          { time: '18:30', content: '滨江道商业步行街晚餐', spotId: 'tianjin-binjiangdao', foodId: 'tianjin-jianbingguozi', cost: 80 }
        ],
        hotel: '滨江道/和平区，300-500元/晚',
        transport: '地铁1号线+共享单车',
        cost: 270
      },
      {
        day: 2, title: '民俗文化·古街名楼',
        schedule: [
          { time: '09:00', content: '古文化街：天后宫+泥人张彩塑+杨柳青木版年画', spotId: 'tianjin-guwenjiejie', foodId: '', cost: 50 },
          { time: '12:00', content: '狗不理包子总店午餐（推荐三鲜包+蟹黄包）', spotId: '', foodId: 'tianjin-goubuli', cost: 100 },
          { time: '14:30', content: '天津之眼摩天轮（横跨海河的巨型摩天轮）', spotId: 'tianjin-eye', foodId: '', cost: 70 },
          { time: '16:30', content: '意式风情区漫步（亚洲最大意大利风貌建筑群）', spotId: 'tianjin-yishi', foodId: '', cost: 0 },
          { time: '19:00', content: '南市食品街，十八街麻花+耳朵眼炸糕', spotId: '', foodId: 'tianjin-erduoyan', cost: 60 }
        ],
        hotel: '鼓楼/南开区，250-450元/晚',
        transport: '地铁2号线+步行',
        cost: 280
      },
      {
        day: 3, title: '滨海新区·现代天津',
        schedule: [
          { time: '09:00', content: '滨海新区：泰达航母主题公园（基辅号航母）', spotId: 'tianjin-hangmu', foodId: '', cost: 160 },
          { time: '13:00', content: '塘沽海鲜市场午餐，现买现加工', spotId: '', foodId: 'tianjin-seafood', cost: 120 },
          { time: '15:00', content: '天津港东疆湾海滨浴场或大沽口炮台', spotId: 'tianjin-dagukou', foodId: '', cost: 50 },
          { time: '17:30', content: '返回市区，小白楼音乐厅看夜景', spotId: 'tianjin-xiaobailou', foodId: '', cost: 0 },
          { time: '19:00', content: '陈记锅巴菜+正阳春烤鸭，告别晚餐', spotId: '', foodId: 'tianjin-yangrouchuan', cost: 90 }
        ],
        hotel: '',
        transport: '地铁9号线+公交',
        cost: 420
      }
    ],
    tips: [
      '天津话直爽幽默，本地人热情好客',
      '狗不理包子游客居多，本地人推荐陈记、石头门坎',
      '滨海新区与市区距离远，建议留一整天',
      '天津之眼摩天轮排队久，建议提前预约或非高峰期乘坐',
      '特色早餐：锅巴菜、煎饼果子、老豆腐，街边小摊最地道'
    ],
    bestSeason: '4-5月、9-10月',
    highlights: ['五大道万国建筑博览', '天津之眼摩天轮', '古文化街民俗风情']
  },
  {
    id: 'tianjin-guide-5days',
    cityId: 'tianjin',
    title: '天津5日深度·小洋楼里的津门往事',
    days: 5,
    cover: 'tianjin-binhai',
    summary: '5天深度游天津，从租界洋楼到胡同四合，从港口工业到曲艺文化，全方位领略津门风情。',
    budget: { min: 2000, max: 4000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁覆盖完善，滨海新区可乘9号线；景点间公交便利',
    itinerary: [
      {
        day: 1, title: '五大道·万国建筑博物馆',
        schedule: [
          { time: '09:00', content: '五大道全景：民园广场→马场道→睦南道→重庆道→常德道', spotId: 'tianjin-wudadao', foodId: '', cost: 0 },
          { time: '12:30', content: '利顺德大饭店午餐（百年老字号，孙中山、袁世凯曾下榻）', spotId: '', foodId: 'tianjin-bagao', cost: 200 },
          { time: '14:30', content: '天津外国语大学+瓷房子（张连志私人博物馆）', spotId: 'tianjin-cichifangzi', foodId: '', cost: 50 },
          { time: '16:30', content: '西开天主教堂（可入内参观弥撒）', spotId: 'tianjin-xikai', foodId: '', cost: 0 },
          { time: '19:00', content: '滨江道+劝业场，正阳春烤鸭晚餐', spotId: 'tianjin-binjiangdao', foodId: 'tianjin-yangrouchuan', cost: 120 }
        ],
        hotel: '和平区精品酒店，500-800元/晚',
        transport: '地铁1号线+共享单车',
        cost: 370
      },
      {
        day: 2, title: '民俗古街·曲艺之乡',
        schedule: [
          { time: '09:00', content: '古文化街+天后宫（妈祖庙，北方最大妈祖庙）', spotId: 'tianjin-guwenjiejie', foodId: '', cost: 60 },
          { time: '12:00', content: '石头门坎素包午餐（天津老字号素食）', spotId: '', foodId: 'tianjin-sushibao', cost: 50 },
          { time: '14:00', content: '广东会馆（中国北方最大会馆，戏曲博物馆）', spotId: 'tianjin-guangdong', foodId: '', cost: 30 },
          { time: '15:30', content: '听一场相声（名流茶馆或谦祥益文苑）', spotId: 'tianjin-xiangsheng', foodId: '', cost: 80 },
          { time: '19:00', content: '南市食品街：十八街麻花+桂发祥+耳朵眼炸糕', spotId: '', foodId: 'tianjin-erduoyan', cost: 70 }
        ],
        hotel: '南开区酒店，400-600元/晚',
        transport: '地铁2号线+步行',
        cost: 290
      },
      {
        day: 3, title: '海河两岸·现代天津',
        schedule: [
          { time: '09:30', content: '天津之眼摩天轮（建议上午人少时段）', spotId: 'tianjin-eye', foodId: '', cost: 70 },
          { time: '11:30', content: '意式风情区漫步，马可波罗广场拍照', spotId: 'tianjin-yishi', foodId: '', cost: 0 },
          { time: '13:00', content: '狗不理总店（总店体验最好）', spotId: '', foodId: 'tianjin-goubuli', cost: 150 },
          { time: '15:00', content: '津塔+津门故里（天津地标建筑群）', spotId: 'tianjin-jinta', foodId: '', cost: 0 },
          { time: '19:30', content: '海河夜景游船（100元含餐，看两岸灯光秀）', spotId: 'tianjin-haihe', foodId: '', cost: 100 }
        ],
        hotel: '河西区酒店，450-700元/晚',
        transport: '地铁1/3号线',
        cost: 420
      },
      {
        day: 4, title: '滨海新区·港口工业',
        schedule: [
          { time: '08:30', content: '乘地铁9号线赴滨海新区（约1小时）', spotId: '', foodId: '', cost: 8 },
          { time: '10:00', content: '泰达航母主题公园（基辅号航母+驱逐舰）', spotId: 'tianjin-hangmu', foodId: '', cost: 160 },
          { time: '13:00', content: '塘沽海鲜市场，选购加工渤海海鲜', spotId: '', foodId: 'tianjin-seafood', cost: 200 },
          { time: '15:30', content: '大沽口炮台（近代史遗址，看海防线）', spotId: 'tianjin-dagukou', foodId: '', cost: 50 },
          { time: '18:00', content: '东疆湾海滨，看海上日落', spotId: 'tianjin-dongjiangwan', foodId: '', cost: 0 },
          { time: '20:00', content: '返回市区，陈记锅巴菜夜宵', spotId: '', foodId: 'tianjin-jianbingguozi', cost: 30 }
        ],
        hotel: '',
        transport: '地铁9号线+公交',
        cost: 538
      },
      {
        day: 5, title: '历史人文·博物馆之旅',
        schedule: [
          { time: '09:00', content: '天津博物馆（国家一级馆，青铜器+书画+民俗）', spotId: 'tianjin-museum', foodId: '', cost: 0 },
          { time: '12:00', content: '正阳春烤鸭店午餐（聚乐宾鸭肉包）', spotId: '', foodId: 'tianjin-yangrouchuan', cost: 150 },
          { time: '14:00', content: '梁启超故居+饮冰室（维新变法先驱故居）', spotId: 'tianjin-liangqichao', foodId: '', cost: 20 },
          { time: '15:30', content: '张学良故居（少帅天津故居）', spotId: 'tianjin-zhangxueliang', foodId: '', cost: 20 },
          { time: '17:00', content: '瓷房子再访，选购瓷器伴手礼', spotId: 'tianjin-cichifangzi', foodId: '', cost: 50 },
          { time: '19:00', content: '陈记锅巴菜+张记包子，地道天津味告别晚餐', spotId: '', foodId: 'tianjin-guobacai', cost: 60 }
        ],
        hotel: '',
        transport: '地铁1/2号线',
        cost: 300
      }
    ],
    tips: [
      '天津相声和京剧是必体验，名流茶馆最正宗',
      '滨海新区面积大，建议自驾或包车游览',
      '天津博物馆需提前预约，周一闭馆',
      '特色小吃：锅巴菜、煎饼果子、老豆腐、面茶、爆肚',
      '狗不理、桂发祥、正阳春是三大老字号，品质有保障'
    ],
    bestSeason: '4-5月、9-10月，海河两岸春暖花开',
    highlights: ['五大道欧陆建筑群', '天津之眼+海河游船', '泰达航母主题公园']
  },

  // ---- 石家庄 (1篇) ----
  {
    id: 'shijiazhuang-guide-3days',
    cityId: 'shijiazhuang',
    title: '石家庄3日·燕赵古都人文行',
    days: 3,
    cover: 'shijiazhuang-hebei',
    summary: '赵州桥千年智慧、西柏坡革命记忆、正定古城隆兴寺，燕赵大地历史回响。',
    budget: { min: 800, max: 2000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '市区地铁1/3号线覆盖；景点间公交便利',
    itinerary: [
      {
        day: 1, title: '千年赵州·古桥智慧',
        schedule: [
          { time: '08:30', content: '乘公交赴赵州桥（约1小时车程）', spotId: '', foodId: '', cost: 10 },
          { time: '10:00', content: '赵州桥景区：安济桥+桥楼+民俗博物馆', spotId: 'shijiazhuang-zhaozhou', foodId: '', cost: 40 },
          { time: '12:30', content: '赵州驴肉美食午餐（老字号驴肉馆）', spotId: '', foodId: 'shijiazhuang-danrou', cost: 80 },
          { time: '14:00', content: '返回市区，河北博物院（国家一级馆）', spotId: 'shijiazhuang-museum', foodId: '', cost: 0 },
          { time: '18:30', content: '裕华万达商圈晚餐，河北特色菜', spotId: '', foodId: 'shijiazhuang-hecaipin', cost: 100 }
        ],
        hotel: '裕华区/长安区，200-400元/晚',
        transport: '公交+步行',
        cost: 230
      },
      {
        day: 2, title: '革命圣地·西柏坡精神',
        schedule: [
          { time: '07:30', content: '乘西柏坡旅游专线（约2小时车程）', spotId: '', foodId: '', cost: 20 },
          { time: '10:30', content: '西柏坡纪念馆：中共中央旧址+七届二中全会会址', spotId: 'shijiazhuang-xibaipo', foodId: '', cost: 0 },
          { time: '13:00', content: '西柏坡农家菜午餐（大锅菜+贴饼子）', spotId: '', foodId: 'shijiazhuang-nongjia', cost: 60 },
          { time: '15:00', content: '返回市区，华北烈士陵园', spotId: 'shijiazhuang-lieshi', foodId: '', cost: 0 },
          { time: '18:30', content: '勒泰中心晚餐，石家庄特色小吃', spotId: '', foodId: 'shijiazhuang-slate', cost: 80 }
        ],
        hotel: '桥西区酒店，200-350元/晚',
        transport: '旅游专线+步行',
        cost: 160
      },
      {
        day: 3, title: '正定古城·隆兴寺寻踪',
        schedule: [
          { time: '08:00', content: '乘公交赴正定古城（约1小时）', spotId: '', foodId: '', cost: 5 },
          { time: '09:30', content: '隆兴寺（大佛寺）：宋代古建筑群+千手观音', spotId: 'shijiazhuang-longxing', foodId: '', cost: 50 },
          { time: '12:00', content: '正定古城百年老字号午餐（马家鸡+宋记烧麦）', spotId: '', foodId: 'shijiazhuang-majiaji', cost: 60 },
          { time: '14:00', content: '荣国府（红楼梦拍摄地）+赵云庙', spotId: 'shijiazhuang-rongguo', foodId: '', cost: 70 },
          { time: '17:30', content: '返回市区，华北食品城采购伴手礼', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '正定宋记八大碗，告别晚餐', spotId: '', foodId: 'shijiazhuang-bafanwan', cost: 90 }
        ],
        hotel: '',
        transport: '公交+步行',
        cost: 275
      }
    ],
    tips: [
      '西柏坡和赵州桥建议拼车或包车，公共交通班次少',
      '正定古城保留完好，推荐住一晚感受古城夜景',
      '河北博物院需预约，有满城汉墓金缕玉衣复制品',
      '石家庄美食：驴肉火烧、扒肘子、正定八大碗',
      '冬季石家庄雾霾较重，出行关注空气质量'
    ],
    bestSeason: '4-5月、9-11月',
    highlights: ['赵州桥千年古桥', '西柏坡革命圣地', '正定隆兴寺宋代建筑']
  },

  // ---- 承德 (1篇) ----
  {
    id: 'chengde-guide-3days',
    cityId: 'chengde',
    title: '承德3日·避暑山庄皇家游',
    days: 3,
    cover: 'chengde-mountain-resort',
    summary: '避暑山庄湖光山色、外八庙宏伟壮观，感受清代皇家夏宫与草原风情。',
    budget: { min: 1200, max: 2800, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '市区景点步行可达；草原行可包车',
    itinerary: [
      {
        day: 1, title: '避暑山庄·皇家夏宫',
        schedule: [
          { time: '08:00', content: '避暑山庄：正宫→松鹤斋→万壑松风→芝径云堤', spotId: 'chengde-mountain-resort', foodId: '', cost: 130 },
          { time: '12:30', content: '山庄内万树园餐厅午餐（仿御膳）', spotId: '', foodId: 'chengde-yushan', cost: 200 },
          { time: '14:30', content: '湖区：烟雨楼→金山→月色江声→热河泉', spotId: '', foodId: '', cost: 0 },
          { time: '17:00', content: '山区：坐环山车游磬锤峰→蛤蟆石→罗汉山', spotId: '', foodId: '', cost: 50 },
          { time: '19:30', content: '承德特色晚餐：气锅鸡+满族八大碗', spotId: '', foodId: 'chengde-bafanwan', cost: 120 }
        ],
        hotel: '避暑山庄旁，300-500元/晚',
        transport: '景区内步行+环山车',
        cost: 500
      },
      {
        day: 2, title: '外八庙·藏传佛教',
        schedule: [
          { time: '08:00', content: '普陀宗乘之庙（小布达拉宫）：大红台→万法归一殿', spotId: 'chengde-potala', foodId: '', cost: 80 },
          { time: '11:30', content: '须弥福寿之庙（班禅行宫）+ 福寿园', spotId: 'chengde-xumifu', foodId: '', cost: 60 },
          { time: '13:00', content: '承德老字号：八旗饭庄午餐', spotId: '', foodId: 'chengde-bajiu', cost: 150 },
          { time: '15:00', content: '普宁寺（大佛寺）+ 普佑寺', spotId: 'chengde-puning', foodId: '', cost: 80 },
          { time: '19:00', content: '鼎盛王朝康熙大典实景演出（强烈推荐）', spotId: 'chengde-kangxi', foodId: '', cost: 200 }
        ],
        hotel: '承德市区，250-450元/晚',
        transport: '步行/打车',
        cost: 570
      },
      {
        day: 3, title: '草原风光·坝上风情',
        schedule: [
          { time: '07:00', content: '包车赴塞罕坝/乌兰布统草原（约3小时）', spotId: '', foodId: '', cost: 300 },
          { time: '11:00', content: '乌兰布统：红山军马场→将军泡子→公主湖', spotId: 'chengde-wulanbutong', foodId: '', cost: 0 },
          { time: '13:00', content: '草原蒙古包午餐：手把肉+奶茶+奶皮子', spotId: '', foodId: 'chengde-mengu', cost: 200 },
          { time: '15:00', content: '康熙点将台+十二连营遗址', spotId: 'chengde-dianjiangtai', foodId: '', cost: 0 },
          { time: '18:00', content: '返回承德，满族风情晚餐', spotId: '', foodId: 'chengde-manzu', cost: 100 }
        ],
        hotel: '',
        transport: '包车往返',
        cost: 600
      }
    ],
    tips: [
      '避暑山庄面积非常大，建议预留一整天，穿舒适鞋子',
      '外八庙门票各庙独立购买，联票更划算',
      '草原行务必包车，公共交通不便',
      '冬季承德寒冷，需备羽绒服+保暖内衣',
      '鼎盛王朝演出票价贵但值回票价，场面震撼'
    ],
    bestSeason: '6-10月，夏季凉爽避暑',
    highlights: ['避暑山庄皇家园林', '外八庙藏传佛教建筑群', '乌兰布统草原风光']
  },

  // ---- 秦皇岛 (1篇) ----
  {
    id: 'qinhuangdao-guide-3days',
    cityId: 'qinhuangdao',
    title: '秦皇岛3日·北戴河海滨度假',
    days: 3,
    cover: 'qinhuangdao-beach',
    summary: '北戴河沙滩、山海关雄关、鸽子窝日出，华北海滨明珠的悠闲时光。',
    budget: { min: 1200, max: 3000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '市区公交覆盖；山海关和北戴河可分别游览',
    itinerary: [
      {
        day: 1, title: '北戴河·海滨悠闲',
        schedule: [
          { time: '06:00', content: '鸽子窝公园看日出（鹰角亭观日台）', spotId: 'qinhuangdao-gezituo', foodId: '', cost: 25 },
          { time: '09:00', content: '北戴河东海水浴场游泳+沙滩日光浴', spotId: 'qinhuangdao-beidaihe', foodId: '', cost: 0 },
          { time: '12:30', content: '北戴河海鲜大排档午餐', spotId: '', foodId: 'qinhuangdao-seafood', cost: 150 },
          { time: '14:30', content: '碧螺塔海上酒吧公园（网红打卡地）', spotId: 'qinhuangdao-biluota', foodId: '', cost: 100 },
          { time: '19:00', content: '滨海大道夜景，秦皇岛奥体公园', spotId: '', foodId: 'qinhuangdao-hanbing', cost: 80 }
        ],
        hotel: '北戴河海景酒店，400-800元/晚',
        transport: '公交15路+步行',
        cost: 455
      },
      {
        day: 2, title: '山海关·雄关古城',
        schedule: [
          { time: '08:00', content: '天下第一关（山海关古城）：箭楼+瓮城+钟鼓楼', spotId: 'qinhuangdao-shanhai', foodId: '', cost: 50 },
          { time: '12:00', content: '山海关四条包子老字号午餐', spotId: '', foodId: 'qinhuangdao-sitiao', cost: 60 },
          { time: '14:00', content: '老龙头长城（入海长城，长城起点）', spotId: 'qinhuangdao-laolongtou', foodId: '', cost: 60 },
          { time: '17:00', content: '孟姜女庙（贞女祠）+ 望夫石', spotId: 'qinhuangdao-mengjiangnv', foodId: '', cost: 30 },
          { time: '19:00', content: '山海关浑锅+海鲜大餐', spotId: '', foodId: 'qinhuangdao-seafood', cost: 120 }
        ],
        hotel: '山海关古城客栈，250-500元/晚',
        transport: '公交33路+步行',
        cost: 320
      },
      {
        day: 3, title: '南戴河·黄金海岸',
        schedule: [
          { time: '09:00', content: '南戴河国际娱乐中心（金沙湾沙雕大世界）', spotId: 'qinhuangdao-nandaihe', foodId: '', cost: 120 },
          { time: '12:30', content: '黄金海岸海鲜自助午餐', spotId: '', foodId: 'qinhuangdao-seafood', cost: 100 },
          { time: '14:30', content: '滑沙+滑草（中国滑沙发源地）', spotId: '', foodId: '', cost: 0 },
          { time: '17:00', content: '返回秦皇岛市区，秦皇求仙入海处', spotId: 'qinhuangdao-qiuxian', foodId: '', cost: 40 },
          { time: '19:00', content: '秦皇岛海鲜大排档告别晚餐', spotId: '', foodId: 'qinhuangdao-seafood', cost: 120 }
        ],
        hotel: '',
        transport: '公交801路+打车',
        cost: 380
      }
    ],
    tips: [
      '北戴河沙滩最好的地段是老虎石浴场，需提前预约停车位',
      '鸽子窝日出要查日出时间表，夏季约4:30',
      '海鲜市场加工费便宜，可在市场选购后加工',
      '山海关与北戴河相距约40公里，建议分两天游玩',
      '冬季海边风大，夏季防晒必备'
    ],
    bestSeason: '5-10月，夏季海滨避暑',
    highlights: ['北戴河海滨浴场', '山海关天下第一关', '老龙头入海长城']
  },

  // ---- 张家口 (1篇) ----
  {
    id: 'zhangjiakou-guide-3days',
    cityId: 'zhangjiakou',
    title: '张家口3日·冰雪之都草原天路',
    days: 3,
    cover: 'zhangjiakou-ski',
    summary: '崇礼滑雪天堂、坝上草原天路、鸡鸣驿古驿站，2022冬奥之城塞外风光。',
    budget: { min: 1500, max: 4000, currency: 'CNY', note: '含住宿、餐饮、门票、交通；滑雪季费用更高' },
    transport: '崇礼滑雪场可乘高铁直达；草原天路建议包车',
    itinerary: [
      {
        day: 1, title: '崇礼滑雪·冬奥之城',
        schedule: [
          { time: '08:00', content: '乘高铁赴崇礼（北京→崇礼1小时）', spotId: '', foodId: '', cost: 60 },
          { time: '09:30', content: '密苑云顶乐园/太舞滑雪场（冬奥会场地）', spotId: 'zhangjiakou-chongli', foodId: '', cost: 380 },
          { time: '12:30', content: '雪场午餐（简餐约100元/人）', spotId: '', foodId: 'zhangjiakou-lamb', cost: 100 },
          { time: '14:30', content: '继续滑雪/雪圈/雪地摩托', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '崇礼木屋别墅，火锅晚餐', spotId: '', foodId: 'zhangjiakou-huoguo', cost: 150 }
        ],
        hotel: '崇礼滑雪度假酒店，800-1500元/晚',
        transport: '高铁+景区大巴',
        cost: 690
      },
      {
        day: 2, title: '草原天路·塞外风光',
        schedule: [
          { time: '07:00', content: '包车赴草原天路（中国66号公路）', spotId: '', foodId: '', cost: 300 },
          { time: '09:30', content: '草沿天路：桦皮岭→阎片山→坝上草原', spotId: 'zhangjiakou-caoyuan', foodId: '', cost: 0 },
          { time: '13:00', content: '蒙古包午餐：烤全羊+手把肉+奶茶', spotId: '', foodId: 'zhangjiakou-kaoyang', cost: 200 },
          { time: '15:00', content: '元中都遗址（元朝首都遗址）', spotId: 'zhangjiakou-yuanzhongdu', foodId: '', cost: 30 },
          { time: '18:00', content: '返回张家口市区，莜面栲栳栳晚餐', spotId: '', foodId: 'zhangjiakou-youmian', cost: 80 }
        ],
        hotel: '张家口市区，300-500元/晚',
        transport: '包车往返',
        cost: 610
      },
      {
        day: 3, title: '古驿古镇·长城关隘',
        schedule: [
          { time: '08:00', content: '鸡鸣驿古城（中国现存最大最完整古驿站）', spotId: 'zhangjiakou-jimingyi', foodId: '', cost: 40 },
          { time: '11:00', content: '宣化古城（京西第一府）+ 清远楼', spotId: 'zhangjiakou-xuanhua', foodId: '', cost: 20 },
          { time: '13:00', content: '宣化老字号：涮羊肉+口蘑菜', spotId: '', foodId: 'zhangjiakou-koumo', cost: 120 },
          { time: '15:00', content: '大境门长城（长城第一门）', spotId: 'zhangjiakou-dajingmen', foodId: '', cost: 40 },
          { time: '18:00', content: '张家口特产：口蘑+莜面+杏干', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '张家口烤羊腿告别晚餐', spotId: '', foodId: 'zhangjiakou-kaoyang', cost: 150 }
        ],
        hotel: '',
        transport: '公交+打车',
        cost: 370
      }
    ],
    tips: [
      '滑雪季（12月-次年3月）崇礼酒店价格翻倍，提前预订',
      '草原天路自驾/包车最佳，公共交通极少',
      '冬季张家口极寒，滑雪需备专业装备',
      '口蘑是张家口特产，炖鸡炖肉都很香',
      '鸡鸣驿是《大话西游》取景地，值得一看'
    ],
    bestSeason: '1-3月（滑雪）、6-9月（草原）',
    highlights: ['崇礼冬奥滑雪场', '草原天路66号公路', '鸡鸣驿古驿站']
  },

  // ---- 保定 (1篇) ----
  {
    id: 'baoding-guide-3days',
    cityId: 'baoding',
    title: '保定3日·直隶总督署古莲花池',
    days: 3,
    cover: 'baoding-ancient-city',
    summary: '直隶总督署、古莲花池、满城汉墓，千年古城历史文化底蕴深厚。',
    budget: { min: 800, max: 2000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '市区景点集中，步行可达；满城和清苑需乘公交',
    itinerary: [
      {
        day: 1, title: '直隶总督·莲池书院',
        schedule: [
          { time: '08:30', content: '直隶总督署（清代直隶最高军政衙门）', spotId: 'baoding-zhidu', foodId: '', cost: 25 },
          { time: '10:30', content: '古莲花池（中国十大名园，明清行宫）', spotId: 'baoding-lianchi', foodId: '', cost: 30 },
          { time: '12:30', content: '保定驴肉火烧+槐茂酱菜', spotId: '', foodId: 'baoding-danrouhuoshao', cost: 80 },
          { time: '14:30', content: '莲池书院（清代直隶最高学府）', spotId: 'baoding-lianchi-shuyuan', foodId: '', cost: 0 },
          { time: '17:00', content: '保定军校广场（中国近代军事教育圣地）', spotId: 'baoding-junxiao', foodId: '', cost: 0 },
          { time: '19:00', content: '玉兰香保定菜馆晚餐（直隶官府菜）', spotId: '', foodId: 'baoding-guanfu', cost: 120 }
        ],
        hotel: '保定市区，200-400元/晚',
        transport: '步行+公交',
        cost: 255
      },
      {
        day: 2, title: '满城汉墓·中山靖王',
        schedule: [
          { time: '08:00', content: '乘公交赴满城（约1小时）', spotId: '', foodId: '', cost: 10 },
          { time: '09:30', content: '满城汉墓：陵山汉墓博物馆+西汉中山靖王刘胜墓', spotId: 'baoding-mancheng', foodId: '', cost: 90 },
          { time: '13:00', content: '满城农家菜午餐（草莓大棚采摘）', spotId: '', foodId: 'baoding-nongjia', cost: 60 },
          { time: '15:00', content: '返回市区，保定市博物馆', spotId: 'baoding-museum', foodId: '', cost: 0 },
          { time: '19:00', content: '马家老鸡铺+白运章包子', spotId: '', foodId: 'baoding-malaoji', cost: 70 }
        ],
        hotel: '保定市区，200-350元/晚',
        transport: '公交+步行',
        cost: 230
      },
      {
        day: 3, title: '清苑冉庄·地道战遗址',
        schedule: [
          { time: '08:00', content: '乘公交赴清苑冉庄（约1小时）', spotId: '', foodId: '', cost: 8 },
          { time: '09:30', content: '冉庄地道战遗址（抗战地道+电影原型）', spotId: 'baoding-ranzhuang', foodId: '', cost: 40 },
          { time: '12:30', content: '冉庄农家铁锅炖午餐', spotId: '', foodId: 'baoding-tieguo', cost: 70 },
          { time: '14:30', content: '安国中药文化博物馆（千年药都）', spotId: 'baoding-anguo', foodId: '', cost: 30 },
          { time: '17:00', content: '返回保定，钟楼+古莲花池夜景', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '保定王家大院，告别晚餐', spotId: '', foodId: 'baoding-wangjia', cost: 80 }
        ],
        hotel: '',
        transport: '公交+步行',
        cost: 228
      }
    ],
    tips: [
      '直隶总督署与古莲花池一街之隔，可买联票更划算',
      '满城汉墓的金缕玉衣、长信宫灯是国宝级文物',
      '保定早餐必尝：驴肉火烧+小米粥+茶鸡蛋',
      '冉庄地道战遗址夏天凉爽，适合避暑',
      '槐茂酱菜、马家卤鸡、驴肉是保定三大特产'
    ],
    bestSeason: '3-5月、9-11月',
    highlights: ['直隶总督署', '满城汉墓金缕玉衣', '古莲花池古典园林']
  },

  // ---- 平遥 (1篇) ----
  {
    id: 'pingyao-guide-3days',
    cityId: 'pingyao',
    title: '平遥3日·晋商票号古城行',
    days: 3,
    cover: 'pingyao-ancient-city',
    summary: '日升昌票号金融传奇、古城墙雄风、晋商文化发源地，世界文化遗产。',
    budget: { min: 1500, max: 3500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '高铁至平遥站，古城步行/电瓶车游览',
    itinerary: [
      {
        day: 1, title: '古城墙·票号传奇',
        schedule: [
          { time: '08:00', content: '平遥古城墙（中国现存最完整的汉族古县城）', spotId: 'pingyao-citywall', foodId: '', cost: 130 },
          { time: '11:00', content: '日升昌票号（中国第一家票号，金融鼻祖）', spotId: 'pingyao-rishengchang', foodId: '', cost: 0 },
          { time: '12:30', content: '古城内客栈午餐（平遥牛肉+碗托）', spotId: '', foodId: 'pingyao-niurou', cost: 100 },
          { time: '14:30', content: '县衙博物馆+文庙+城隍庙', spotId: 'pingyao-yamen', foodId: '', cost: 0 },
          { time: '19:00', content: '古城夜景，看《又见平遥》情境演出', spotId: '', foodId: '', cost: 220 }
        ],
        hotel: '平遥古城内客栈，400-800元/晚',
        transport: '步行+电瓶车',
        cost: 450
      },
      {
        day: 2, title: '晋商文化·大院深宅',
        schedule: [
          { time: '08:30', content: '乔家大院（北方民居明珠，《大红灯笼高高挂》取景地）', spotId: 'pingyao-qiaojia', foodId: '', cost: 130 },
          { time: '12:30', content: '乔家附近农家乐午餐（刀削面+过油肉）', spotId: '', foodId: 'pingyao-daoxiaomian', cost: 80 },
          { time: '14:30', content: '双林寺（东方彩塑艺术宝库，辽宋古刹）', spotId: 'pingyao-shuanglin', foodId: '', cost: 60 },
          { time: '17:00', content: '镇国寺（五代木构建筑）', spotId: 'pingyao-zhenguo', foodId: '', cost: 30 },
          { time: '19:00', content: '古城内晋商家常菜，汾酒品尝', spotId: '', foodId: 'pingyao-fenjiu', cost: 100 }
        ],
        hotel: '古城内客栈，400-700元/晚',
        transport: '包车往返',
        cost: 400
      },
      {
        day: 3, title: '古城深度·文化体验',
        schedule: [
          { time: '09:00', content: '协同庆钱庄+博物馆（古代银行体验）', spotId: 'pingyao-xietongqing', foodId: '', cost: 0 },
          { time: '11:00', content: '票号群：蔚泰厚+日升昌+天成亨', spotId: '', foodId: '', cost: 0 },
          { time: '12:30', content: '平遥古城特色：莜面栲栳栳+平遥牛肉', spotId: '', foodId: 'pingyao-niurou', cost: 120 },
          { time: '14:30', content: '古城非遗：推光漆器+手工银器', spotId: 'pingyao-qiqi', foodId: '', cost: 0 },
          { time: '17:00', content: '古城门楼看日落，拍全景', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '平遥家宴：长山药+过油肉+黄酒', spotId: '', foodId: 'pingyao-guorou', cost: 120 }
        ],
        hotel: '',
        transport: '步行',
        cost: 240
      }
    ],
    tips: [
      '平遥古城通票120元可游览全部景点，3天有效',
      '《又见平遥》演出必看，情境式体验震撼',
      '建议住古城内客栈，体验明清风情',
      '平遥牛肉、推光漆器、汾酒是三大特产',
      '古城内禁止机动车，可坐电瓶车或步行'
    ],
    bestSeason: '3-5月、9-11月',
    highlights: ['日升昌票号金融文化', '平遥古城世界遗产', '乔家大院北方民居']
  },



  // ==================== 东北 (12篇) ====================

  // ---- 哈尔滨 (2篇) ----
  {
    id: 'haerbin-guide-3days',
    cityId: 'haerbin',
    title: '哈尔滨3日·东方莫斯科冰雪游',
    days: 3,
    cover: 'harbin-ice-snow',
    summary: '中央大街巴洛克、索菲亚教堂穹顶、冰雪大世界奇幻，冬日最美冰城。',
    budget: { min: 2000, max: 4500, currency: 'CNY', note: '冰雪大世界等门票较贵；夏季避暑便宜' },
    transport: '地铁1/2/3号线覆盖；中央大街步行区集中',
    itinerary: [
      {
        day: 1, title: '中央大街·欧陆风情',
        schedule: [
          { time: '09:00', content: '中央大街步行街：防洪纪念塔→马迭尔→圣索菲亚教堂', spotId: 'haerbin-central', foodId: '', cost: 0 },
          { time: '12:00', content: '华梅西餐厅午餐（俄式西餐：红菜汤+牛排+软炸里脊）', spotId: '', foodId: 'haerbin-xican', cost: 200 },
          { time: '14:00', content: '圣索菲亚教堂内部（哈尔滨历史博物馆）', spotId: 'haerbin-sophia', foodId: '', cost: 40 },
          { time: '16:00', content: '兆麟公园+哈尔滨冰雕展（冬季）', spotId: 'haerbin-zhaolin', foodId: '', cost: 80 },
          { time: '19:00', content: '中央大街俄式晚餐，马迭尔冰棍必吃', spotId: '', foodId: 'haerbin-madier', cost: 150 }
        ],
        hotel: '中央大街酒店，400-700元/晚',
        transport: '地铁1号线+步行',
        cost: 470
      },
      {
        day: 2, title: '冰雪大世界·极地馆',
        schedule: [
          { time: '10:00', content: '哈尔滨极地馆（白鲸表演+企鹅馆+北极熊）', spotId: 'haerbin-jidi', foodId: '', cost: 160 },
          { time: '12:30', content: '太阳岛风景区午餐（简餐）', spotId: '', foodId: 'haerbin-jiaozi', cost: 80 },
          { time: '14:30', content: '哈尔滨冰雪大世界（12月-次年2月，世界最大冰雪乐园）', spotId: 'haerbin-bingxue', foodId: '', cost: 298 },
          { time: '19:00', content: '冰雪大世界内演出+烟花', spotId: '', foodId: '', cost: 0 },
          { time: '21:00', content: '返回市区，东北饺子王夜宵', spotId: '', foodId: 'haerbin-jiaozi', cost: 50 }
        ],
        hotel: '南岗区酒店，300-600元/晚',
        transport: '公交+专线',
        cost: 588
      },
      {
        day: 3, title: '历史文化·工业遗产',
        schedule: [
          { time: '09:00', content: '哈尔滨文庙（东北最大孔庙）+ 极乐寺', spotId: 'haerbin-wenmiao', foodId: '', cost: 40 },
          { time: '11:30', content: '老昌春饼午餐（东北春卷+酱肘子）', spotId: '', foodId: 'haerbin-chunbing', cost: 100 },
          { time: '13:30', content: '侵华日军第七三一部队罪证陈列馆（必去）', spotId: 'haerbin-731', foodId: '', cost: 0 },
          { time: '16:00', content: '中华巴洛克历史文化街区', spotId: 'haerbin-baluoke', foodId: '', cost: 0 },
          { time: '19:00', content: '东北杀猪菜+酸菜粉条，告别晚餐', spotId: '', foodId: 'haerbin-suancai', cost: 120 }
        ],
        hotel: '',
        transport: '地铁+公交',
        cost: 260
      }
    ],
    tips: [
      '冰雪大世界冬季16:00开园，建议傍晚入园看夜景冰灯',
      '冬季哈尔滨极寒（-20℃以下），备羽绒服+手套+暖宝宝',
      '中央大街马迭尔冰棍冬天也必吃，60年老店',
      '731部队罪证陈列馆免费开放，值得一看',
      '东北菜分量大，2人点1份菜足够'
    ],
    bestSeason: '1-2月（冰雪节）、7-8月（避暑）',
    highlights: ['冰雪大世界+冰雕艺术', '中央大街+索菲亚教堂', '极地馆+太阳岛']
  },
  {
    id: 'haerbin-guide-5days',
    cityId: 'haerbin',
    title: '哈尔滨5日深度·冰雪音乐之都',
    days: 5,
    cover: 'harbin-ice-snow',
    summary: '5天深度游冰城，从冰雪大世界到中央大街，从圣索菲亚到731罪证，全方位体验哈尔滨。',
    budget: { min: 3500, max: 7000, currency: 'CNY', note: '含住宿、餐饮、门票、交通；冰雪季价格更高' },
    transport: '地铁覆盖完善，主要景点公交可达',
    itinerary: [
      {
        day: 1, title: '中央大街·俄式风情',
        schedule: [
          { time: '09:00', content: '中央大街全景：从防洪纪念塔到经纬街', spotId: 'haerbin-central', foodId: '', cost: 0 },
          { time: '11:30', content: '华梅西餐厅俄式午餐（红菜汤+奶汁杂拌+软炸里脊）', spotId: '', foodId: 'haerbin-xican', cost: 250 },
          { time: '13:30', content: '圣索菲亚大教堂（内部博物馆+穹顶壁画）', spotId: 'haerbin-sophia', foodId: '', cost: 40 },
          { time: '15:00', content: '兆麟公园冰雕展（冬季）+ 松花江畔散步', spotId: 'haerbin-zhaolin', foodId: '', cost: 80 },
          { time: '19:00', content: '中央大街晚餐，波特曼西餐厅', spotId: '', foodId: 'haerbin-xican', cost: 200 }
        ],
        hotel: '中央大街精品酒店，600-1000元/晚',
        transport: '步行+地铁1号线',
        cost: 570
      },
      {
        day: 2, title: '冰雪大世界·极地探秘',
        schedule: [
          { time: '09:30', content: '哈尔滨极地馆（白鲸海洋之心+企鹅+北极熊）', spotId: 'haerbin-jidi', foodId: '', cost: 160 },
          { time: '12:30', content: '太阳岛雪雕艺术园（冬季）+ 简餐', spotId: 'haerbin-taiyangdao', foodId: 'haerbin-jiaozi', cost: 80 },
          { time: '15:30', content: '冰雪大世界（下午场入园看日落+夜景）', spotId: 'haerbin-bingxue', foodId: '', cost: 298 },
          { time: '20:00', content: '冰雪大世界内的文艺演出+烟花表演', spotId: '', foodId: '', cost: 0 },
          { time: '22:00', content: '返回市区，老昌春饼夜宵', spotId: '', foodId: 'haerbin-chunbing', cost: 60 }
        ],
        hotel: '南岗区酒店，500-800元/晚',
        transport: '公交+专线',
        cost: 598
      },
      {
        day: 3, title: '历史人文·苦难记忆',
        schedule: [
          { time: '09:00', content: '侵华日军第七三一部队罪证陈列馆（建议停留2小时，免费）', spotId: 'haerbin-731', foodId: '', cost: 0 },
          { time: '12:30', content: '老昌春饼午餐（春饼+酱肘子+土豆丝）', spotId: '', foodId: 'haerbin-chunbing', cost: 120 },
          { time: '14:30', content: '哈尔滨文庙+极乐寺（东北最大孔庙）', spotId: 'haerbin-wenmiao', foodId: '', cost: 40 },
          { time: '16:30', content: '中华巴洛克历史文化街区+松花江落日', spotId: 'haerbin-baluoke', foodId: '', cost: 0 },
          { time: '19:00', content: '东北杀猪菜+酸菜粉条，地道东北味', spotId: '', foodId: 'haerbin-suancai', cost: 150 }
        ],
        hotel: '道里区酒店，400-700元/晚',
        transport: '地铁+公交',
        cost: 310
      },
      {
        day: 4, title: '太阳岛上·生态湿地',
        schedule: [
          { time: '09:30', content: '太阳岛风景区（雪雕艺术园+湿地+松鼠岛）', spotId: 'haerbin-taiyangdao', foodId: '', cost: 30 },
          { time: '12:30', content: '太阳岛俄罗斯风情小镇午餐', spotId: '', foodId: 'haerbin-jiaozi', cost: 100 },
          { time: '14:30', content: '哈尔滨大剧院（世界最美建筑，可参观剧场）', spotId: 'haerbin-dajuyuan', foodId: '', cost: 0 },
          { time: '17:00', content: '松北区哈尔滨新貌，沿江散步', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '松北万达茂，东北饺子王晚餐', spotId: '', foodId: 'haerbin-jiaozi', cost: 120 }
        ],
        hotel: '松北区酒店，500-800元/晚',
        transport: '索道/过江大桥+公交',
        cost: 250
      },
      {
        day: 5, title: '工业遗产·购物告别',
        schedule: [
          { time: '09:00', content: '哈尔滨电机厂+哈飞汽车工业旅游（可选）', spotId: 'haerbin-industry', foodId: '', cost: 50 },
          { time: '11:30', content: '中央大街华梅西餐厅俄式午餐', spotId: '', foodId: 'haerbin-xican', cost: 200 },
          { time: '13:30', content: '松雷商厦+远大购物中心购物', spotId: 'haerbin-songlei', foodId: '', cost: 0 },
          { time: '16:00', content: '老道外中华巴洛克街区（张包铺+老街）', spotId: 'haerbin-laodao', foodId: '', cost: 0 },
          { time: '19:00', content: '波特曼西餐厅告别晚餐，听一场哈尔滨之夏音乐会', spotId: '', foodId: 'haerbin-xican', cost: 300 }
        ],
        hotel: '',
        transport: '地铁+步行',
        cost: 550
      }
    ],
    tips: [
      '冰雪大世界冬季16:00开园，傍晚入场可看日落+夜景冰灯双重体验',
      '冬季极寒（-25℃以下），必备：羽绒服+保暖内衣+手套+帽子+暖宝宝',
      '中央大街马迭尔冰棍60年老店，冬天吃更有味道',
      '731罪证陈列馆免费开放，是每个中国人都应去的地方',
      '东北菜分量大，2人点1份菜足够，多点会浪费'
    ],
    bestSeason: '1-2月（冰雪节）、7-8月（避暑）',
    highlights: ['冰雪大世界+冰雕艺术', '中央大街+索菲亚教堂', '731罪证陈列馆（历史警示）', '太阳岛+哈尔滨大剧院']
  },

  // ---- 长春 (1篇) ----
  {
    id: 'changchun-guide-3days',
    cityId: 'changchun',
    title: '长春3日·汽车城电影城森林城',
    days: 3,
    cover: 'changchun-spring-city',
    summary: '伪满皇宫历史、一汽工业名片、净月潭林海雪原，北国春城四季各异。',
    budget: { min: 1000, max: 2500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁1/2/3/4号线覆盖；景点间公交便利',
    itinerary: [
      {
        day: 1, title: '伪满皇宫·近代历史',
        schedule: [
          { time: '08:30', content: '伪满皇宫博物院（溥仪故居+东北沦陷史）', spotId: 'changchun-weiman', foodId: '', cost: 80 },
          { time: '12:00', content: '长春鼎丰真糕点+老昌春饼午餐', spotId: '', foodId: 'changchun-chunbing', cost: 100 },
          { time: '14:00', content: '伪满八大部旧址（文化广场周边）', spotId: 'changchun-babu', foodId: '', cost: 0 },
          { time: '16:00', content: '南湖公园散步（长春最大城市公园）', spotId: 'changchun-nanhu', foodId: '', cost: 0 },
          { time: '19:00', content: '桂林路夜市，长春烧烤+啤酒', spotId: '', foodId: 'changchun-kaorou', cost: 100 }
        ],
        hotel: '长春市区，250-450元/晚',
        transport: '地铁+步行',
        cost: 280
      },
      {
        day: 2, title: '一汽工业·电影文化',
        schedule: [
          { time: '09:00', content: '第一汽车制造厂（中国汽车工业摇篮）', spotId: 'changchun-yiqi', foodId: '', cost: 50 },
          { time: '12:00', content: '一汽附近农家菜午餐', spotId: '', foodId: 'changchun-nongjia', cost: 80 },
          { time: '14:00', content: '长春电影制片厂+长影世纪城（电影主题乐园）', spotId: 'changchun-yingying', foodId: '', cost: 240 },
          { time: '18:00', content: '重庆路美食街，长春特色菜', spotId: '', foodId: 'changchun-tecai', cost: 80 }
        ],
        hotel: '朝阳酒店，250-400元/晚',
        transport: '公交+打车',
        cost: 450
      },
      {
        day: 3, title: '净月潭·自然生态',
        schedule: [
          { time: '08:00', content: '净月潭国家森林公园（亚洲最大人工林海）', spotId: 'changchun-jingyuetan', foodId: '', cost: 30 },
          { time: '12:30', content: '净月潭附近农家乐午餐', spotId: '', foodId: 'changchun-nongjia', cost: 70 },
          { time: '14:30', content: '伪满皇宫博物院再游/长春世界雕塑公园', spotId: 'changchun-diaosu', foodId: '', cost: 30 },
          { time: '17:00', content: '重庆路商圈购物', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '长春鼎丰真糕点+伊通烧鸽子，告别晚餐', spotId: '', foodId: 'changchun-kaogezi', cost: 100 }
        ],
        hotel: '',
        transport: '公交+步行',
        cost: 230
      }
    ],
    tips: [
      '伪满皇宫博物院建议请讲解员，历史信息量很大',
      '净月潭冬季滑雪，夏季避暑，是长春人周末最爱',
      '长春电影制片厂是新中国电影摇篮，长影世纪城适合亲子',
      '长春美食：鼎丰真糕点、老昌春饼、伊通烧鸽子',
      '冬季长春寒冷，需备羽绒服和防滑鞋'
    ],
    bestSeason: '4-5月、9-10月、12月-次年2月',
    highlights: ['伪满皇宫博物院', '净月潭森林公园', '长影世纪城']
  },

  // ---- 沈阳 (1篇) ----
  {
    id: 'shenyang-guide-3days',
    cityId: 'shenyang',
    title: '沈阳3日·满清发祥地共和国长子',
    days: 3,
    cover: 'shenyang-imperial-palace',
    summary: '故宫皇家气派、张氏帅府民国风华、中街老字号，历史与现代交织。',
    budget: { min: 1000, max: 2500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁1/2/9/10号线覆盖；景点集中在市中心',
    itinerary: [
      {
        day: 1, title: '盛京皇宫·满清发源地',
        schedule: [
          { time: '08:30', content: '沈阳故宫（中国仅存两大皇家宫殿之一）', spotId: 'shenyang-gugong', foodId: '', cost: 60 },
          { time: '12:00', content: '中街老字号：老边饺子+马家烧麦', spotId: '', foodId: 'shenyang-jiaozi', cost: 100 },
          { time: '14:00', content: '张氏帅府（张学良旧居+赵四小姐楼）', spotId: 'shenyang-shuaifu', foodId: '', cost: 50 },
          { time: '16:30', content: '沈阳金融博物馆（张氏父子开办）', spotId: 'shenyang-jinrong', foodId: '', cost: 30 },
          { time: '19:00', content: '老雪花啤酒厂+东北大板冰棍', spotId: '', foodId: 'shenyang-pijiu', cost: 80 }
        ],
        hotel: '沈阳故宫酒店，250-450元/晚',
        transport: '步行+地铁1号线',
        cost: 320
      },
      {
        day: 2, title: '皇陵庙宇·历史寻踪',
        schedule: [
          { time: '08:30', content: '北陵公园（清昭陵，皇太极陵寝）', spotId: 'shenyang-beiling', foodId: '', cost: 50 },
          { time: '12:00', content: '东北大铁锅炖午餐', spotId: '', foodId: 'shenyang-tieguo', cost: 100 },
          { time: '14:00', content: '东陵公园（清福陵，努尔哈赤陵寝）', spotId: 'shenyang-dongling', foodId: '', cost: 40 },
          { time: '16:30', content: '太清宫+慈恩寺（沈阳古老寺庙）', spotId: 'shenyang-ciensi', foodId: '', cost: 20 },
          { time: '19:00', content: '西塔韩国城，冷面+烤肉', spotId: '', foodId: 'shenyang-kaorou', cost: 120 }
        ],
        hotel: '太原街酒店，250-400元/晚',
        transport: '公交+步行',
        cost: 330
      },
      {
        day: 3, title: '工业遗产·现代沈阳',
        schedule: [
          { time: '09:00', content: '铁西工业博物馆（共和国工业长子遗产）', spotId: 'shenyang-tiexi', foodId: '', cost: 30 },
          { time: '12:00', content: '东北酸菜白肉+老雪花啤酒', spotId: '', foodId: 'shenyang-suancai', cost: 80 },
          { time: '14:00', content: '棋盘山风景区/世博园', spotId: 'shenyang-qipanshan', foodId: '', cost: 50 },
          { time: '17:00', content: '中街步行街+太原街购物', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '老边饺子+鹿鸣春饭店，告别晚餐', spotId: '', foodId: 'shenyang-jiaozi', cost: 120 }
        ],
        hotel: '',
        transport: '地铁+公交',
        cost: 280
      }
    ],
    tips: [
      '沈阳故宫比北京故宫小，但有满族特色，建筑风格独特',
      '张氏帅府建议请讲解员，了解民国东北历史',
      '东北菜分量极大，2人一份菜足够',
      '沈阳特产：老雪花啤酒、东北大板、不老林糖、鹿鸣春糕点',
      '冬季沈阳寒冷，棋盘山冰雪大世界值得一去'
    ],
    bestSeason: '4-5月、9-10月',
    highlights: ['沈阳故宫', '张氏帅府', '北陵公园清昭陵']
  },

  // ---- 大连 (2篇) ----
  {
    id: 'dalian-guide-3days',
    cityId: 'dalian',
    title: '大连3日·浪漫海滨北方明珠',
    days: 3,
    cover: 'dalian-coastal',
    summary: '星海广场壮阔、金石滩黄金海岸、旅顺口历史遗迹，红瓦绿树浪漫之都。',
    budget: { min: 1500, max: 3500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁1/2/12号线覆盖；滨海路可骑行或徒步',
    itinerary: [
      {
        day: 1, title: '星海广场·都市海滨',
        schedule: [
          { time: '09:00', content: '星海广场（亚洲最大城市广场）+ 百年城雕', spotId: 'dalian-xinghai', foodId: '', cost: 0 },
          { time: '11:00', content: '星海公园+大连自然博物馆', spotId: 'dalian-ziran', foodId: '', cost: 0 },
          { time: '12:30', content: '星海渔港海鲜午餐', spotId: '', foodId: 'dalian-seafood', cost: 150 },
          { time: '14:30', content: '滨海路徒步：星海→傅家庄→燕窝岭', spotId: 'dalian-binhai', foodId: '', cost: 0 },
          { time: '19:00', content: '星海广场夜景，大连啤酒节（夏季）', spotId: '', foodId: 'dalian-pijiu', cost: 100 }
        ],
        hotel: '星海附近，400-700元/晚',
        transport: '地铁1号线+步行',
        cost: 250
      },
      {
        day: 2, title: '金石滩·黄金海岸',
        schedule: [
          { time: '08:00', content: '乘快轨赴金石滩（约50分钟）', spotId: '', foodId: '', cost: 8 },
          { time: '09:00', content: '金石滩黄金海岸+十里黄金海岸', spotId: 'dalian-jinshi', foodId: '', cost: 0 },
          { time: '11:30', content: '发现王国主题公园（适合亲子/年轻人）', spotId: 'dalian-faxian', foodId: '', cost: 190 },
          { time: '13:00', content: '金石滩海鲜大排档午餐', spotId: '', foodId: 'dalian-seafood', cost: 100 },
          { time: '15:30', content: '蜡像馆+奇石馆', spotId: 'dalian-lashi', foodId: '', cost: 80 },
          { time: '19:00', content: '返回市区，旅顺南路海鲜晚餐', spotId: '', foodId: 'dalian-seafood', cost: 150 }
        ],
        hotel: '中山区酒店，300-600元/晚',
        transport: '快轨+公交',
        cost: 528
      },
      {
        day: 3, title: '旅顺口·历史遗迹',
        schedule: [
          { time: '08:30', content: '乘公交赴旅顺（约1小时）', spotId: '', foodId: '', cost: 5 },
          { time: '09:30', content: '旅顺口：白玉山塔+旅顺港', spotId: 'dalian-lvshun', foodId: '', cost: 50 },
          { time: '11:30', content: '日俄监狱旧址博物馆（历史教育基地）', spotId: 'dalian-jianyu', foodId: '', cost: 25 },
          { time: '13:00', content: '旅顺海鲜：焖子+海胆+鲍鱼', spotId: '', foodId: 'dalian-seafood', cost: 120 },
          { time: '15:00', content: '大连蛇岛自然保护区/鸟岛', spotId: 'dalian-shedao', foodId: '', cost: 0 },
          { time: '17:30', content: '返回市区，青泥洼桥商圈', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '大连铁板鱿鱼+焖子+海鲜大餐', spotId: '', foodId: 'dalian-seafood', cost: 150 }
        ],
        hotel: '',
        transport: '公交+步行',
        cost: 350
      }
    ],
    tips: [
      '滨海路全程约30公里，推荐骑自行车或分段徒步',
      '金石滩夏季可下水，注意防晒',
      '旅顺历史遗迹较多，建议留一整天',
      '大连海鲜品种丰富，9-10月最肥美',
      '大连话（胶辽官话）与山东相近，部分人说"歹"（吃）'
    ],
    bestSeason: '5-10月',
    highlights: ['星海广场都市海滨', '金石滩黄金海岸', '旅顺口历史遗迹']
  },
  {
    id: 'dalian-guide-5days',
    cityId: 'dalian',
    title: '大连5日深度·海滨山城浪漫行',
    days: 5,
    cover: 'dalian-coastal',
    summary: '5天深度游大连，从星海广场到金石滩，从旅顺口到冰峪沟，全方位体验海滨浪漫之都。',
    budget: { min: 2500, max: 5000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁+快轨+公交；景点间交通便利',
    itinerary: [
      {
        day: 1, title: '星海广场·都市名片',
        schedule: [
          { time: '09:00', content: '星海广场：百年城雕+贝壳博物馆+大连现代博物馆', spotId: 'dalian-xinghai', foodId: '', cost: 50 },
          { time: '12:30', content: '星海渔港海鲜午餐', spotId: '', foodId: 'dalian-seafood', cost: 150 },
          { time: '14:30', content: '滨海路徒步：星海→傅家庄→燕窝岭→北大桥', spotId: 'dalian-binhai', foodId: '', cost: 0 },
          { time: '19:00', content: '星海广场夜景+大连啤酒节（夏季）', spotId: '', foodId: 'dalian-pijiu', cost: 100 }
        ],
        hotel: '星海附近精品酒店，600-1000元/晚',
        transport: '地铁1号线+步行',
        cost: 300
      },
      {
        day: 2, title: '金石滩·主题乐园',
        schedule: [
          { time: '08:00', content: '快轨赴金石滩（约50分钟）', spotId: '', foodId: '', cost: 8 },
          { time: '09:00', content: '发现王国主题公园（一整天，过山车+花车巡游）', spotId: 'dalian-faxian', foodId: '', cost: 190 },
          { time: '13:00', content: '园内午餐（简餐约80元）', spotId: '', foodId: 'dalian-seafood', cost: 80 },
          { time: '15:30', content: '金石滩黄金海岸+蜡像馆', spotId: 'dalian-jinshi', foodId: '', cost: 80 },
          { time: '19:00', content: '返回市区，海鲜大餐', spotId: '', foodId: 'dalian-seafood', cost: 150 }
        ],
        hotel: '中山区酒店，500-800元/晚',
        transport: '快轨+公交',
        cost: 508
      },
      {
        day: 3, title: '旅顺口·历史深度',
        schedule: [
          { time: '08:30', content: '公交赴旅顺（约1小时）', spotId: '', foodId: '', cost: 5 },
          { time: '09:30', content: '白玉山塔+旅顺港+东鸡冠山炮台', spotId: 'dalian-lvshun', foodId: '', cost: 80 },
          { time: '12:30', content: '旅顺海鲜午餐', spotId: '', foodId: 'dalian-seafood', cost: 120 },
          { time: '14:30', content: '日俄监狱旧址博物馆+苏军烈士墓', spotId: 'dalian-jianyu', foodId: '', cost: 25 },
          { time: '17:00', content: '返回市区，黄河路美食街', spotId: '', foodId: '', cost: 80 }
        ],
        hotel: '旅顺口酒店，300-500元/晚',
        transport: '公交+步行',
        cost: 310
      },
      {
        day: 4, title: '冰峪沟·自然山水',
        schedule: [
          { time: '07:00', content: '包车赴冰峪沟（约2.5小时）', spotId: '', foodId: '', cost: 300 },
          { time: '10:00', content: '冰峪沟风景区：龙华山+小桂林+云水渡', spotId: 'dalian-bingyu', foodId: '', cost: 120 },
          { time: '13:00', content: '冰峪沟农家菜午餐（羊汤+烤鱼）', spotId: '', foodId: 'dalian-nongjia', cost: 80 },
          { time: '15:00', content: '英那河漂流（夏季）+ 天门山', spotId: 'dalian-tianmen', foodId: '', cost: 80 },
          { time: '18:00', content: '返回大连，海鲜自助晚餐', spotId: '', foodId: 'dalian-seafood', cost: 150 }
        ],
        hotel: '',
        transport: '包车往返',
        cost: 730
      },
      {
        day: 5, title: '海岛风光·购物告别',
        schedule: [
          { time: '08:30', content: '大连湾乘船赴獐子岛/广鹿岛', spotId: '', foodId: '', cost: 120 },
          { time: '10:00', content: '海岛风光：沙滩漫步+海鲜捕捞体验', spotId: 'dalian-zhangzi', foodId: '', cost: 0 },
          { time: '12:30', content: '海岛海鲜午餐（最新鲜的海鲜）', spotId: '', foodId: 'dalian-seafood', cost: 200 },
          { time: '15:00', content: '返回大连，青泥洼桥+柏威年购物', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '大连特色：铁板鱿鱼+焖子+海鲜大餐告别', spotId: '', foodId: 'dalian-seafood', cost: 200 }
        ],
        hotel: '',
        transport: '船班+打车',
        cost: 640
      }
    ],
    tips: [
      '滨海路全程30公里，推荐租自行车骑行或分段乘公交',
      '金石滩发现王国适合年轻人，夏季有夜场',
      '旅顺有100多年历史，中日甲午战争和日俄战争遗址集中',
      '大连海鲜9-10月最肥美，推荐去市场选购加工',
      '冰峪沟有"北方小桂林"之称，夏季漂流非常刺激'
    ],
    bestSeason: '5-10月，夏季海滨避暑',
    highlights: ['星海广场+滨海路', '金石滩发现王国', '旅顺口历史遗迹', '冰峪沟山水风光']
  },

  // ---- 长白山 (1篇) ----
  {
    id: 'changbaishan-guide-3days',
    cityId: 'changbaishan',
    title: '长白山3日·天池仙境神山圣水',
    days: 3,
    cover: 'changbaishan-mountain',
    summary: '天池碧水深潭、长白瀑布飞流、地下森林幽静，满族文化发源地。',
    budget: { min: 1500, max: 3500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '白山/延吉机场转大巴赴景区；景区内坐环保车',
    itinerary: [
      {
        day: 1, title: '天池主峰·登顶仙境',
        schedule: [
          { time: '07:00', content: '乘大巴赴长白山西坡/北坡景区', spotId: '', foodId: '', cost: 50 },
          { time: '09:00', content: '北坡景区：山门→环保车→天池瀑布→天池', spotId: 'changbaishan-tianchi', foodId: '', cost: 125 },
          { time: '13:00', content: '天池附近简易午餐', spotId: '', foodId: 'changbaishan-lengmian', cost: 80 },
          { time: '15:00', content: '地下森林（原始森林徒步）+ 小天池', spotId: 'changbaishan-dixia', foodId: '', cost: 0 },
          { time: '18:00', content: '二道白河/长白山天池景区酒店入住', spotId: '', foodId: 'changbaishan-guochang', cost: 150 }
        ],
        hotel: '景区附近酒店，500-800元/晚',
        transport: '大巴+景区环保车',
        cost: 405
      },
      {
        day: 2, title: '西坡大峡谷·锦江漂流',
        schedule: [
          { time: '08:00', content: '西坡景区：山门→环保车→天池西坡（可登顶）', spotId: 'changbaishan-xipo', foodId: '', cost: 125 },
          { time: '12:00', content: '天池附近午餐', spotId: '', foodId: 'changbaishan-lengmian', cost: 80 },
          { time: '14:00', content: '锦江大峡谷（中国十大最美森林）', spotId: 'changbaishan-jinjiang', foodId: '', cost: 0 },
          { time: '17:00', content: '万达长白山国际度假区', spotId: 'changbaishan-wanda', foodId: '', cost: 0 },
          { time: '19:00', content: '度假区火锅晚餐+温泉SPA', spotId: '', foodId: 'changbaishan-huoguo', cost: 200 }
        ],
        hotel: '万达度假区酒店，600-1000元/晚',
        transport: '景区环保车+步行',
        cost: 405
      },
      {
        day: 3, title: '朝鲜族文化·镜泊湖',
        schedule: [
          { time: '08:30', content: '镜泊湖风景区（世界最大高山堰塞湖）', spotId: 'changbaishan-jingpo', foodId: '', cost: 80 },
          { time: '12:00', content: '镜泊湖鱼宴午餐（湖鱼+山野菜）', spotId: '', foodId: 'changbaishan-yuyan', cost: 120 },
          { time: '14:00', content: '朝鲜族民俗村（体验朝鲜族文化）', spotId: 'changbaishan-chaoxian', foodId: '', cost: 50 },
          { time: '17:00', content: '返回市区/机场', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '延吉冷面+朝鲜族泡菜，告别晚餐', spotId: '', foodId: 'changbaishan-lengmian', cost: 80 }
        ],
        hotel: '',
        transport: '大巴+景区交通',
        cost: 330
      }
    ],
    tips: [
      '长白山天池山顶天气多变，即使夏季也可能下雪，需备厚外套',
      '景区门票+环保车约125元，北坡西坡联票更划算',
      '想看天池全貌建议北坡，西坡可登顶',
      '万达度假区适合度假，有温泉、雪场（冬季）',
      '长白山是满族发源地，朝鲜族文化也很有特色'
    ],
    bestSeason: '6-9月（避暑）、12月-次年2月（滑雪）',
    highlights: ['天池仙境', '长白瀑布', '地下森林', '锦江大峡谷']
  },

  // ---- 漠河 (1篇) ----
  {
    id: 'mohe-guide-3days',
    cityId: 'mohe',
    title: '漠河3日·中国北极极光之城',
    days: 3,
    cover: 'mohe-northern-lights',
    summary: '中国最北县城，北极村极光奇观、漠河北极星庄严、胭脂沟淘金史。',
    budget: { min: 2000, max: 5000, currency: 'CNY', note: '交通费用较高；北极村住宿较贵' },
    transport: '乘火车/飞机至漠河，包车赴北极村',
    itinerary: [
      {
        day: 1, title: '北极村·找北之旅',
        schedule: [
          { time: '08:00', content: '乘火车/飞机赴漠河（需中转）', spotId: '', foodId: '', cost: 500 },
          { time: '12:00', content: '漠河午餐（东北菜）', spotId: '', foodId: 'mohe-kaorou', cost: 100 },
          { time: '14:00', content: '包车赴北极村（约3小时）', spotId: '', foodId: '', cost: 300 },
          { time: '17:00', content: '北极村：中国最北点+北红村+北极星广场', spotId: 'mohe-beijicun', foodId: '', cost: 60 },
          { time: '19:00', content: '北极村农家菜：冷水鱼+野生菌', spotId: '', foodId: 'mohe-yucai', cost: 150 },
          { time: '21:00', content: '北极村夜空观测极光（冬季/极夜更容易看到）', spotId: '', foodId: '', cost: 0 }
        ],
        hotel: '北极村农家院，400-600元/晚',
        transport: '火车+包车',
        cost: 1110
      },
      {
        day: 2, title: '胭脂沟·淘金古镇',
        schedule: [
          { time: '08:00', content: '胭脂沟（古淘金遗址+李金镛祠堂）', spotId: 'mohe-yanzhigou', foodId: '', cost: 80 },
          { time: '11:00', content: '北红村（中国最北原始村落）', spotId: 'mohe-beihong', foodId: '', cost: 0 },
          { time: '13:00', content: '北红村农家菜午餐', spotId: '', foodId: 'mohe-yewei', cost: 100 },
          { time: '15:00', content: '龙江第一湾（黑龙江大拐弯）', spotId: 'mohe-longjiang', foodId: '', cost: 60 },
          { time: '18:00', content: '返回北极村，继续观测极光', spotId: '', foodId: 'mohe-yucai', cost: 120 }
        ],
        hotel: '北极村农家院，400-600元/晚',
        transport: '包车往返',
        cost: 360
      },
      {
        day: 3, title: '漠河县·历史回顾',
        schedule: [
          { time: '08:00', content: '返回漠河县（约3小时）', spotId: '', foodId: '', cost: 300 },
          { time: '12:00', content: '漠河县午餐', spotId: '', foodId: 'mohe-kaorou', cost: 100 },
          { time: '14:00', content: '漠河县城：松苑公园+5·6火灾纪念馆', spotId: 'mohe-songyuan', foodId: '', cost: 30 },
          { time: '17:00', content: '漠河机场/火车站', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '漠河特产：蓝莓干+松子+鹿茸', spotId: '', foodId: '', cost: 0 }
        ],
        hotel: '',
        transport: '包车+火车/飞机',
        cost: 430
      }
    ],
    tips: [
      '北极村距漠河县城约70公里，包车300元左右',
      '看极光最佳时间：12月-次年3月极夜期间',
      '夏季（6-7月）有极昼现象，可体验"不夜城"',
      '漠河冬季极寒（-40℃以下），需备极地装备',
      '北极村消费较高，建议带足现金'
    ],
    bestSeason: '6-7月（极昼）、12月-次年2月（极夜+极光）',
    highlights: ['中国最北点', '北极村极光', '龙江第一湾']
  },

  // ---- 鞍山 (1篇) ----
  {
    id: 'anshan-guide-3days',
    cityId: 'anshan',
    title: '鞍山3日·钢都玉都千山万壑',
    days: 3,
    cover: 'anshan-steel-city',
    summary: '千山道教名山、玉佛苑世界之最、汤岗子温泉，工业与自然并存。',
    budget: { min: 800, max: 2000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '市区公交覆盖；千山需坐专线',
    itinerary: [
      {
        day: 1, title: '千山·道教名山',
        schedule: [
          { time: '08:00', content: '乘公交赴千山（约1小时）', spotId: '', foodId: '', cost: 5 },
          { time: '09:30', content: '千山风景区：正门→无量观→佛道共融', spotId: 'anshan-qianshan', foodId: '', cost: 80 },
          { time: '12:30', content: '千山脚下农家菜午餐', spotId: '', foodId: 'anshan-nongjia', cost: 70 },
          { time: '14:30', content: '继续登山：天上天→五佛顶→仙人台', spotId: '', foodId: '', cost: 0 },
          { time: '18:00', content: '返回鞍山，钢都烤肉晚餐', spotId: '', foodId: 'anshan-kaorou', cost: 100 }
        ],
        hotel: '鞍山市区，200-350元/晚',
        transport: '公交+步行',
        cost: 255
      },
      {
        day: 2, title: '玉佛苑·文化朝圣',
        schedule: [
          { time: '09:00', content: '玉佛苑（世界最大玉佛，岫岩玉雕刻）', spotId: 'anshan-yufo', foodId: '', cost: 70 },
          { time: '12:00', content: '鞍山特色：牛庄馅饼+羊汤', spotId: '', foodId: 'anshan-yangtang', cost: 80 },
          { time: '14:00', content: '汤岗子温泉（中国四大温泉之一）', spotId: 'anshan-tanggangzi', foodId: '', cost: 100 },
          { time: '17:00', content: '鞍山博物馆+工业遗产展', spotId: 'anshan-museum', foodId: '', cost: 0 },
          { time: '19:00', content: '东北大铁锅炖晚餐', spotId: '', foodId: 'anshan-tieguo', cost: 80 }
        ],
        hotel: '鞍山酒店，200-350元/晚',
        transport: '公交+步行',
        cost: 330
      },
      {
        day: 3, title: '岫岩玉雕·乡村体验',
        schedule: [
          { time: '08:00', content: '岫岩满族自治县（中国玉都）', spotId: '', foodId: '', cost: 30 },
          { time: '09:30', content: '岫岩玉雕产业园+玉博物馆', spotId: 'anshan-xiuyan', foodId: '', cost: 50 },
          { time: '12:30', content: '岫岩满族菜午餐', spotId: '', foodId: 'anshan-manzu', cost: 80 },
          { time: '14:30', content: '药山风景区/清凉山', spotId: 'anshan-yaoshan', foodId: '', cost: 40 },
          { time: '17:00', content: '返回鞍山，特产：岫岩玉+南国梨', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '鞍山南国梨+烧烤，告别晚餐', spotId: '', foodId: 'anshan-kaorou', cost: 90 }
        ],
        hotel: '',
        transport: '公交+打车',
        cost: 290
      }
    ],
    tips: [
      '千山是东北道教名山，佛道共融，非常值得一去',
      '玉佛苑的玉佛重达260吨，世界最大',
      '汤岗子温泉历史悠久，张作霖曾在此疗养',
      '鞍山特产：岫岩玉、南国梨、牛庄馅饼',
      '冬季鞍山滑雪可去千山温泉滑雪场'
    ],
    bestSeason: '4-5月、9-10月',
    highlights: ['千山道教名山', '玉佛苑世界最大玉佛', '汤岗子温泉']
  },



  // ==================== 华东 (22篇) ====================

  // ---- 上海 (2篇) ----
  {
    id: 'shanghai-guide-3days',
    cityId: 'shanghai',
    title: '上海3日·东方魔都经典游',
    days: 3,
    cover: 'shanghai-bund',
    summary: '外滩万国建筑、陆家嘴天际线、石库门弄堂，中西合璧的海派文化。',
    budget: { min: 2500, max: 5000, currency: 'CNY', note: '含住宿、餐饮、门票、交通；上海消费较高' },
    transport: '地铁1/2/10/14号线覆盖全市；外滩可步行',
    itinerary: [
      {
        day: 1, title: '外滩·万国建筑博览',
        schedule: [
          { time: '09:00', content: '外滩漫步：从和平饭店到十六铺码头', spotId: 'shanghai-bund', foodId: '', cost: 0 },
          { time: '11:00', content: '豫园+城隍庙：江南古典园林+小吃街', spotId: 'shanghai-yuyuan', foodId: '', cost: 40 },
          { time: '12:30', content: '南翔小笼包午餐（豫园店）', spotId: '', foodId: 'shanghai-xiaolong', cost: 100 },
          { time: '14:30', content: '陆家嘴：东方明珠+金茂大厦+上海中心', spotId: 'shanghai-lujiazui', foodId: '', cost: 180 },
          { time: '19:00', content: '外滩夜景游船+本帮菜晚餐', spotId: '', foodId: 'shanghai-hun', cost: 200 }
        ],
        hotel: '外滩/南京路，800-1500元/晚',
        transport: '地铁2/10号线+步行',
        cost: 520
      },
      {
        day: 2, title: '石库门·海派文化',
        schedule: [
          { time: '09:00', content: '新天地+中共一大会址（石库门里弄）', spotId: 'shanghai-xintiandi', foodId: '', cost: 0 },
          { time: '11:30', content: '田子坊（创意街区+小资小店）', spotId: 'shanghai-tianzifang', foodId: '', cost: 0 },
          { time: '12:30', content: '外婆家/兰心餐厅本帮菜午餐', spotId: '', foodId: 'shanghai-hun', cost: 150 },
          { time: '14:30', content: '上海博物馆（青铜器+书画+陶瓷）', spotId: 'shanghai-museum', foodId: '', cost: 0 },
          { time: '19:00', content: '南京西路商圈+吴江路美食街', spotId: '', foodId: 'shanghai-xiaolong', cost: 120 }
        ],
        hotel: '静安/徐汇，600-1000元/晚',
        transport: '地铁1/2/13号线',
        cost: 270
      },
      {
        day: 3, title: '现代上海·水乡古镇',
        schedule: [
          { time: '08:30', content: '乘地铁11号线赴朱家角古镇', spotId: '', foodId: '', cost: 10 },
          { time: '10:00', content: '朱家角：放生桥+课植园+水乡人家', spotId: 'shanghai-zhujiajiao', foodId: '', cost: 60 },
          { time: '12:30', content: '朱家角古镇本帮菜午餐', spotId: '', foodId: 'shanghai-hun', cost: 80 },
          { time: '15:00', content: '返回市区，徐家汇天主教堂+港汇广场', spotId: 'shanghai-xujiahui', foodId: '', cost: 0 },
          { time: '19:00', content: '上海环球金融中心观光厅+告别晚餐', spotId: '', foodId: 'shanghai-xiaolong', cost: 250 }
        ],
        hotel: '',
        transport: '地铁+公交',
        cost: 400
      }
    ],
    tips: [
      '外滩最佳观赏时间：傍晚18:30-20:00亮灯时段',
      '豫园和城隍庙人多，建议早上去',
      '上海博物馆免费需预约，周一闭馆',
      '本帮菜推荐：红烧肉、糖醋小排、清蒸鲈鱼',
      '地铁高峰非常拥挤，建议非高峰出行'
    ],
    bestSeason: '3-5月、9-11月',
    highlights: ['外滩+陆家嘴夜景', '豫园+石库门文化', '朱家角水乡古镇']
  },
  {
    id: 'shanghai-guide-5days',
    cityId: 'shanghai',
    title: '上海5日深度·海派文化之旅',
    days: 5,
    cover: 'shanghai-bund',
    summary: '5天深度游上海，从外滩到弄堂，从陆家嘴到朱家角，全方位体验海派文化。',
    budget: { min: 4000, max: 8000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁网络发达，日票18元；景点间公交便利',
    itinerary: [
      {
        day: 1, title: '外滩·陆家嘴',
        schedule: [
          { time: '09:00', content: '外滩全景：和平饭店→海关大楼→东方明珠', spotId: 'shanghai-bund', foodId: '', cost: 0 },
          { time: '12:00', content: '豫园南翔小笼包午餐', spotId: '', foodId: 'shanghai-xiaolong', cost: 120 },
          { time: '14:00', content: '陆家嘴：上海中心118层观光厅', spotId: 'shanghai-shanghai-center', foodId: '', cost: 180 },
          { time: '19:00', content: '外滩夜景+游轮晚餐', spotId: '', foodId: 'shanghai-hun', cost: 300 }
        ],
        hotel: '外滩精品酒店，1000-1800元/晚',
        transport: '地铁+步行',
        cost: 600
      },
      {
        day: 2, title: '石库门·法租界',
        schedule: [
          { time: '09:00', content: '新天地+中共一大会址', spotId: 'shanghai-xintiandi', foodId: '', cost: 0 },
          { time: '11:00', content: '田子坊+思南公馆', spotId: 'shanghai-tianzifang', foodId: '', cost: 0 },
          { time: '12:30', content: '兰心餐厅本帮菜午餐', spotId: '', foodId: 'shanghai-hun', cost: 180 },
          { time: '14:30', content: '上海博物馆+上海美术馆', spotId: 'shanghai-museum', foodId: '', cost: 0 },
          { time: '19:00', content: '新天地晚餐+酒吧', spotId: '', foodId: 'shanghai-xiaolong', cost: 200 }
        ],
        hotel: '法租界酒店，800-1400元/晚',
        transport: '地铁+步行',
        cost: 380
      },
      {
        day: 3, title: '苏州园林·古镇水乡',
        schedule: [
          { time: '08:00', content: '乘高铁赴苏州（约30分钟）', spotId: '', foodId: '', cost: 80 },
          { time: '09:00', content: '拙政园+狮子林', spotId: 'suzhou-zizhuyuan', foodId: '', cost: 180 },
          { time: '12:00', content: '松鹤楼松鼠鳜鱼午餐', spotId: '', foodId: 'suzhou-sx', cost: 150 },
          { time: '14:30', content: '平江路+观前街', spotId: '', foodId: '', cost: 0 },
          { time: '17:00', content: '返回上海，南京西路晚餐', spotId: '', foodId: 'shanghai-hun', cost: 200 }
        ],
        hotel: '静安酒店，700-1200元/晚',
        transport: '高铁+地铁',
        cost: 610
      },
      {
        day: 4, title: '迪士尼·主题乐园',
        schedule: [
          { time: '08:00', content: '乘地铁11号线赴迪士尼度假区', spotId: '', foodId: '', cost: 10 },
          { time: '09:00', content: '上海迪士尼乐园（一整天）', spotId: 'shanghai-disney', foodId: '', cost: 599 },
          { time: '12:30', content: '园内午餐（约150元）', spotId: '', foodId: '', cost: 150 },
          { time: '19:30', content: '迪士尼城堡烟花秀', spotId: '', foodId: '', cost: 0 },
          { time: '21:00', content: '返回市区，夜宵', spotId: '', foodId: 'shanghai-xiaolong', cost: 80 }
        ],
        hotel: '',
        transport: '地铁11号线',
        cost: 839
      },
      {
        day: 5, title: '艺术人文·购物告别',
        schedule: [
          { time: '09:00', content: 'M50创意园+上海当代艺术博物馆', spotId: 'shanghai-m50', foodId: '', cost: 0 },
          { time: '11:30', content: '徐家汇天主教堂+港汇广场', spotId: 'shanghai-xujiahui', foodId: '', cost: 0 },
          { time: '13:00', content: '外婆家午餐', spotId: '', foodId: 'shanghai-hun', cost: 100 },
          { time: '15:00', content: '南京路步行街+和平饭店下午茶', spotId: '', foodId: '', cost: 200 },
          { time: '19:00', content: '外滩告别晚餐+黄浦江游轮', spotId: '', foodId: 'shanghai-xiaolong', cost: 400 }
        ],
        hotel: '',
        transport: '地铁+步行',
        cost: 700
      }
    ],
    tips: [
      '上海中心118层观光厅比东方明珠更高更值得',
      '迪士尼提前买票，早享卡可提前入园',
      '苏州一日游建议拙政园+平江路组合',
      '外滩夜景最美时段18:30-21:00',
      '上海消费高，本帮菜人均150-200元'
    ],
    bestSeason: '3-5月、9-11月',
    highlights: ['外滩+陆家嘴天际线', '石库门海派文化', '迪士尼主题乐园', '苏州古典园林']
  },

  // ---- 杭州 (2篇) ----
  {
    id: 'hangzhou-guide-3days',
    cityId: 'hangzhou',
    title: '杭州3日·上有天堂下有苏杭',
    days: 3,
    cover: 'hangzhou-west-lake',
    summary: '西湖诗情画意、灵隐寺禅意、龙井茶清香，江南水乡温婉典范。',
    budget: { min: 2000, max: 4500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁1/2/5/16号线覆盖；西湖可租自行车',
    itinerary: [
      {
        day: 1, title: '西湖十景·诗意江南',
        schedule: [
          { time: '08:30', content: '断桥→白堤→孤山→西泠印社', spotId: 'hangzhou-xihu', foodId: '', cost: 0 },
          { time: '11:30', content: '楼外楼午餐：西湖醋鱼+东坡肉+龙井虾仁', spotId: '', foodId: 'hangzhou-xihucuyu', cost: 200 },
          { time: '13:30', content: '苏堤骑行→花港观鱼→雷峰塔', spotId: '', foodId: '', cost: 40 },
          { time: '16:30', content: '河坊街+南宋御街（小吃街）', spotId: 'hangzhou-hefang', foodId: '', cost: 60 },
          { time: '19:00', content: '《宋城千古情》演出（世界三大名秀）', spotId: '', foodId: '', cost: 320 }
        ],
        hotel: '西湖附近，500-800元/晚',
        transport: '地铁1号线+租自行车',
        cost: 620
      },
      {
        day: 2, title: '灵隐禅意·龙井茶乡',
        schedule: [
          { time: '07:30', content: '灵隐寺+飞来峰石窟', spotId: 'hangzhou-lingyin', foodId: '', cost: 75 },
          { time: '11:30', content: '灵隐寺素面+素斋', spotId: '', foodId: '', cost: 60 },
          { time: '13:00', content: '龙井村茶园参观+品茶', spotId: 'hangzhou-longjing', foodId: '', cost: 50 },
          { time: '15:30', content: '九溪烟树→钱塘江畔', spotId: 'hangzhou-jiuxi', foodId: '', cost: 0 },
          { time: '19:00', content: '外婆家/知味观晚餐', spotId: '', foodId: 'hangzhou-dongpo', cost: 120 }
        ],
        hotel: '灵隐附近，400-700元/晚',
        transport: '公交Y2路+步行',
        cost: 305
      },
      {
        day: 3, title: '西溪湿地·京杭运河',
        schedule: [
          { time: '09:00', content: '西溪湿地（摇橹船+芦苇荡）', spotId: 'hangzhou-xixi', foodId: '', cost: 80 },
          { time: '12:30', content: '湿地附近农家菜午餐', spotId: '', foodId: 'hangzhou-longjingxiaoren', cost: 100 },
          { time: '14:30', content: '京杭运河桥西历史街区+手工艺活态展示馆', spotId: 'hangzhou-yunhe', foodId: '', cost: 0 },
          { time: '17:00', content: '武林夜市+湖滨步行街', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '知味观小吃：猫耳朵+片儿川+定胜糕', spotId: '', foodId: 'hangzhou-dongpo', cost: 80 }
        ],
        hotel: '',
        transport: '地铁5/19号线+步行',
        cost: 260
      }
    ],
    tips: [
      '西湖景区免门票，租自行车环湖最方便',
      '灵隐寺门票30元+飞来峰45元，灵隐寺素面必吃',
      '楼外楼最正宗但排队久，外婆家性价比高',
      '龙井茶3-4月新茶，可到龙井村茶农家购买',
      '最佳季节：3-5月桃花、9-11月桂花'
    ],
    bestSeason: '3-5月（桃花）、9-11月（桂花）',
    highlights: ['西湖十景', '灵隐寺禅意', '宋城千古情演出']
  },
  {
    id: 'hangzhou-guide-5days',
    cityId: 'hangzhou',
    title: '杭州5日深度·江南水乡慢生活',
    days: 5,
    cover: 'hangzhou-west-lake',
    summary: '5天深度游杭州，西湖、灵隐、西溪、千岛湖、乌镇一次玩遍江南。',
    budget: { min: 3500, max: 7000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁+公交+租自行车；千岛湖/乌镇需乘车',
    itinerary: [
      {
        day: 1, title: '西湖全景·诗意杭州',
        schedule: [
          { time: '08:00', content: '断桥→白堤→苏堤→雷峰塔（环湖骑行）', spotId: 'hangzhou-xihu', foodId: '', cost: 40 },
          { time: '12:00', content: '楼外楼西湖醋鱼午餐', spotId: '', foodId: 'hangzhou-xihucuyu', cost: 250 },
          { time: '14:00', content: '三潭印月（小瀛洲）+花港观鱼', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '河坊街+南宋御街晚餐', spotId: '', foodId: 'hangzhou-dongpo', cost: 100 }
        ],
        hotel: '西湖精品酒店，600-1000元/晚',
        transport: '地铁+租自行车',
        cost: 390
      },
      {
        day: 2, title: '灵隐禅意·龙井问茶',
        schedule: [
          { time: '07:00', content: '灵隐寺+飞来峰石窟', spotId: 'hangzhou-lingyin', foodId: '', cost: 75 },
          { time: '11:00', content: '龙井村茶园+品茶', spotId: 'hangzhou-longjing', foodId: '', cost: 50 },
          { time: '13:00', content: '九溪烟树+杨公堤', spotId: 'hangzhou-jiuxi', foodId: '', cost: 0 },
          { time: '15:00', content: '中国茶叶博物馆', spotId: 'hangzhou-chabo', foodId: '', cost: 0 },
          { time: '19:00', content: '外婆家晚餐', spotId: '', foodId: 'hangzhou-dongpo', cost: 120 }
        ],
        hotel: '灵隐附近，500-800元/晚',
        transport: '公交+步行',
        cost: 245
      },
      {
        day: 3, title: '千岛湖·水乡乌镇',
        schedule: [
          { time: '07:00', content: '乘大巴赴乌镇（约2小时）', spotId: '', foodId: '', cost: 60 },
          { time: '09:00', content: '乌镇西栅（水乡夜景最美）', spotId: 'wuzhen-water-town', foodId: '', cost: 150 },
          { time: '12:30', content: '乌镇水乡午餐', spotId: '', foodId: 'hangzhou-sx', cost: 100 },
          { time: '15:00', content: '乌镇东栅（原汁原味）', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '乌镇水乡夜景+返回杭州', spotId: '', foodId: '', cost: 150 }
        ],
        hotel: '杭州酒店，500-800元/晚',
        transport: '大巴+步行',
        cost: 460
      },
      {
        day: 4, title: '西溪湿地·京杭运河',
        schedule: [
          { time: '09:00', content: '西溪湿地（摇橹船+深潭口）', spotId: 'hangzhou-xixi', foodId: '', cost: 80 },
          { time: '12:30', content: '运河桥西历史街区午餐', spotId: 'hangzhou-yunhe', foodId: '', cost: 100 },
          { time: '14:30', content: '手工艺活态展示馆+京杭运河博物馆', spotId: '', foodId: '', cost: 0 },
          { time: '17:00', content: '武林夜市+湖滨步行街', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '知味观小吃晚餐', spotId: '', foodId: 'hangzhou-dongpo', cost: 80 }
        ],
        hotel: '杭州酒店，500-800元/晚',
        transport: '地铁+步行',
        cost: 260
      },
      {
        day: 5, title: '宋城千古情·购物告别',
        schedule: [
          { time: '09:00', content: '宋城景区+《宋城千古情》演出', spotId: 'hangzhou-songcheng', foodId: '', cost: 320 },
          { time: '12:30', content: '宋城附近午餐', spotId: '', foodId: '', cost: 80 },
          { time: '14:30', content: '六和塔+钱塘江大桥', spotId: 'hangzhou-liuhe', foodId: '', cost: 20 },
          { time: '16:00', content: '银泰城+杭州大厦购物', spotId: '', foodId: '', cost: 0 },
          { time: '19:00', content: '楼外楼告别晚餐', spotId: '', foodId: 'hangzhou-xihucuyu', cost: 200 }
        ],
        hotel: '',
        transport: '公交+地铁',
        cost: 620
      }
    ],
    tips: [
      '西湖景区完全免费，租自行车最方便',
      '宋城千古情值得一看，世界三大名秀之一',
      '乌镇西栅夜景最美，建议下午进入',
      '龙井茶在龙井村茶农家购买最正宗',
      '外婆家性价比高，楼外楼最正宗但排队久'
    ],
    bestSeason: '3-5月、9-11月',
    highlights: ['西湖十景', '灵隐寺+龙井茶', '乌镇水乡', '宋城千古情']
  },

  // ---- 苏州 (2篇) ----
  {
    id: 'suzhou-guide-3days',
    cityId: 'suzhou',
    title: '苏州3日·江南水乡园林城',
    days: 3,
    cover: 'suzhou-garden',
    summary: '拙政园园林艺术、平江路小桥流水、昆曲评弹江南韵味，东方威尼斯。',
    budget: { min: 1500, max: 3500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁1/2/4号线覆盖；平江路步行区集中',
    itinerary: [
      { day: 1, title: '拙政园·平江路', schedule: [
        { time: '08:30', content: '拙政园（中国四大名园之首）', spotId: 'suzhou-zizhuyuan', foodId: '', cost: 90 },
        { time: '11:30', content: '松鹤楼松鼠鳜鱼午餐', spotId: '', foodId: 'suzhou-sx', cost: 150 },
        { time: '13:30', content: '狮子林+平江路（小桥流水）', spotId: 'suzhou-shizilin', foodId: '', cost: 40 },
        { time: '17:00', content: '平江路听评弹+夜游', spotId: '', foodId: '', cost: 60 },
        { time: '19:00', content: '观前街美食：奥灶面+海棠糕', spotId: '', foodId: 'suzhou-noodle', cost: 80 }
      ], hotel: '观前街酒店，400-600元/晚', transport: '地铁+步行', cost: 420 },
      { day: 2, title: '虎丘·寒山寺', schedule: [
        { time: '08:30', content: '虎丘塔（吴中第一名胜，斜塔）', spotId: 'suzhou-huqiu', foodId: '', cost: 80 },
        { time: '11:30', content: '寒山寺（枫桥夜泊诗境）', spotId: 'suzhou-hanshan', foodId: '', cost: 20 },
        { time: '12:30', content: '得月楼午餐（苏帮菜）', spotId: '', foodId: 'suzhou-sx', cost: 120 },
        { time: '14:30', content: '留园（四大名园之一）', spotId: 'suzhou-liuyuan', foodId: '', cost: 50 },
        { time: '19:00', content: '山塘街夜景+七里山塘游船', spotId: 'suzhou-shantang', foodId: '', cost: 150 }
      ], hotel: '石路酒店，350-500元/晚', transport: '公交+步行', cost: 420 },
      { day: 3, title: '周庄古镇·水乡', schedule: [
        { time: '07:30', content: '乘大巴赴周庄（约1.5小时）', spotId: '', foodId: '', cost: 15 },
        { time: '09:00', content: '周庄古镇：双桥+沈厅+张厅', spotId: 'zhouzhuang-water-town', foodId: '', cost: 100 },
        { time: '12:30', content: '周庄万三蹄午餐', spotId: '', foodId: '', cost: 80 },
        { time: '15:00', content: '返回苏州，苏州博物馆（贝聿铭设计）', spotId: 'suzhou-museum', foodId: '', cost: 0 },
        { time: '19:00', content: '苏州中心商圈+诚品书店', spotId: '', foodId: 'suzhou-noodle', cost: 80 }
      ], hotel: '', transport: '大巴+公交', cost: 355 }
    ],
    tips: ['拙政园早上入园人少，景色最美', '平江路+山塘街免费，商业气息较浓', '周庄最佳游览时间：早晨或傍晚', '苏帮菜推荐：松鼠鳜鱼、响油鳝糊、蟹粉豆腐', '苏州博物馆需提前预约'],
    bestSeason: '3-5月、9-11月',
    highlights: ['拙政园园林', '平江路水乡', '虎丘塔+寒山寺']
  },
  {
    id: 'suzhou-guide-5days',
    cityId: 'suzhou',
    title: '苏州5日深度·园林水乡文化之旅',
    days: 5,
    cover: 'suzhou-garden',
    summary: '5天深度游苏州，从拙政园到周庄，从虎丘到太湖，全方位体验江南水乡。',
    budget: { min: 2500, max: 5000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁+公交+大巴；景点间交通便利',
    itinerary: [
      { day: 1, title: '拙政园·平江路', schedule: [
        { time: '08:00', content: '拙政园+狮子林', spotId: 'suzhou-zizhuyuan', foodId: '', cost: 130 },
        { time: '12:00', content: '松鹤楼午餐', spotId: '', foodId: 'suzhou-sx', cost: 180 },
        { time: '14:00', content: '平江路+苏州博物馆', spotId: 'suzhou-shizilin', foodId: '', cost: 0 },
        { time: '19:00', content: '观前街晚餐+昆曲', spotId: '', foodId: 'suzhou-noodle', cost: 200 }
      ], hotel: '观前街精品酒店，600-900元/晚', transport: '地铁+步行', cost: 510 },
      { day: 2, title: '虎丘·寒山寺', schedule: [
        { time: '08:30', content: '虎丘塔+寒山寺', spotId: 'suzhou-huqiu', foodId: '', cost: 100 },
        { time: '12:00', content: '得月楼午餐', spotId: '', foodId: 'suzhou-sx', cost: 150 },
        { time: '14:00', content: '留园+拙政园（可选再次游览）', spotId: 'suzhou-liuyuan', foodId: '', cost: 90 },
        { time: '19:00', content: '山塘街夜景+游船晚餐', spotId: 'suzhou-shantang', foodId: '', cost: 200 }
      ], hotel: '石路酒店，500-700元/晚', transport: '公交+步行', cost: 540 },
      { day: 3, title: '周庄·同里水乡', schedule: [
        { time: '07:00', content: '赴周庄古镇', spotId: '', foodId: '', cost: 15 },
        { time: '09:00', content: '周庄：双桥+沈厅+文化街', spotId: 'zhouzhuang-water-town', foodId: '', cost: 100 },
        { time: '12:30', content: '周庄午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '同里古镇（退思园）', spotId: 'suzhou-tongli', foodId: '', cost: 100 },
        { time: '18:00', content: '返回苏州', spotId: '', foodId: 'suzhou-sx', cost: 150 }
      ], hotel: '苏州酒店，400-600元/晚', transport: '大巴+公交', cost: 445 },
      { day: 4, title: '太湖·西山岛', schedule: [
        { time: '08:00', content: '太湖西山岛（包船/大巴）', spotId: 'suzhou-xishan', foodId: '', cost: 200 },
        { time: '12:00', content: '太湖渔船午餐（太湖三白）', spotId: '', foodId: 'suzhou-sx', cost: 150 },
        { time: '14:30', content: '西山景区+太湖大桥', spotId: '', foodId: '', cost: 0 },
        { time: '18:00', content: '返回苏州', spotId: '', foodId: '', cost: 100 }
      ], hotel: '苏州酒店，400-600元/晚', transport: '大巴+船', cost: 450 },
      { day: 5, title: '博物馆·购物告别', schedule: [
        { time: '09:00', content: '苏州博物馆西馆（新馆）', spotId: 'suzhou-museum', foodId: '', cost: 0 },
        { time: '11:30', content: '诚品书店+苏州中心', spotId: '', foodId: '', cost: 0 },
        { time: '13:00', content: '外婆家午餐', spotId: '', foodId: 'suzhou-sx', cost: 120 },
        { time: '15:00', content: '平江路选特产（碧螺春+丝绸）', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '松鹤楼告别晚餐', spotId: '', foodId: 'suzhou-sx', cost: 180 }
      ], hotel: '', transport: '地铁+步行', cost: 300 }
    ],
    tips: ['苏州博物馆需提前7天预约', '周庄/同里建议提前网上购票', '太湖三白：白鱼、白虾、银鱼', '碧螺春茶产地在洞庭东山', '苏帮菜人均150-200元'],
    bestSeason: '3-5月、9-11月',
    highlights: ['拙政园+苏州博物馆', '周庄+同里水乡', '太湖西山岛', '平江路昆曲评弹']
  },

  // ---- 南京 (2篇) ----
  {
    id: 'nanjing-guide-3days',
    cityId: 'nanjing',
    title: '南京3日·六朝古都江南佳丽',
    days: 3,
    cover: 'nanjing-qinhuai',
    summary: '中山陵恢弘、夫子庙秦淮风月、梧桐大道诗意，历史名城底蕴。',
    budget: { min: 1500, max: 3500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁1/2/3/10号线覆盖；景点间公交便利',
    itinerary: [
      { day: 1, title: '中山陵·紫金山', schedule: [
        { time: '08:30', content: '中山陵（孙中山陵墓，392级台阶）', spotId: 'nanjing-zhongshan', foodId: '', cost: 0 },
        { time: '11:00', content: '明孝陵（世界遗产，朱元璋陵）', spotId: 'nanjing-mingxiaoling', foodId: '', cost: 70 },
        { time: '12:30', content: '南京大牌档午餐（盐水鸭+鸭血粉丝）', spotId: '', foodId: 'nanjing-duck', cost: 120 },
        { time: '14:30', content: '紫金山天文台+中山植物园', spotId: '', foodId: '', cost: 40 },
        { time: '19:00', content: '夫子庙秦淮河画舫夜游', spotId: 'nanjing-fuzimiao', foodId: '', cost: 100 }
      ], hotel: '新街口酒店，400-600元/晚', transport: '地铁2号线+步行', cost: 330 },
      { day: 2, title: '夫子庙·秦淮文化', schedule: [
        { time: '09:00', content: '夫子庙+江南贡院+科举博物馆', spotId: 'nanjing-fuzimiao', foodId: '', cost: 30 },
        { time: '12:00', content: '尹氏鸡汤馄饨+赤豆元宵', spotId: '', foodId: 'nanjing-xiaochi', cost: 60 },
        { time: '13:30', content: '秦淮河画舫（1小时）+李香君故居', spotId: '', foodId: '', cost: 50 },
        { time: '15:30', content: '老门东历史街区+云锦博物馆', spotId: 'nanjing-laomendong', foodId: '', cost: 20 },
        { time: '19:00', content: '南京烤鸭+牛肉锅贴', spotId: '', foodId: 'nanjing-duck', cost: 100 }
      ], hotel: '夫子庙酒店，350-550元/晚', transport: '地铁1号线+步行', cost: 260 },
      { day: 3, title: '民国建筑·侵华日军', schedule: [
        { time: '09:00', content: '侵华日军南京大屠杀遇难同胞纪念馆', spotId: 'nanjing-tusikun', foodId: '', cost: 0 },
        { time: '12:00', content: '南京博物院（国家一级馆）', spotId: 'nanjing-museum', foodId: '', cost: 0 },
        { time: '13:30', content: '博物院午餐', spotId: '', foodId: 'nanjing-xiaochi', cost: 60 },
        { time: '15:30', content: '总统府（民国历史）+ 1912民国风情街', spotId: 'nanjing-zongtongfu', foodId: '', cost: 40 },
        { time: '19:00', content: '南京站附近，鸭血粉丝汤告别晚餐', spotId: '', foodId: 'nanjing-xiaochi', cost: 60 }
      ], hotel: '', transport: '地铁+步行', cost: 160 }
    ],
    tips: ['中山陵免费，明孝陵70元联票可看5个景点', '南京大屠杀纪念馆免费，周一闭馆', '南京博物院需预约，珍品馆有金缕玉衣', '盐水鸭是南京必尝，韩复兴最正宗', '秦淮河画舫夜景最美'],
    bestSeason: '3-5月、9-11月',
    highlights: ['中山陵+明孝陵', '夫子庙+秦淮河', '南京大屠杀纪念馆']
  },
  {
    id: 'nanjing-guide-5days',
    cityId: 'nanjing',
    title: '南京5日深度·六朝古都文化之旅',
    days: 5,
    cover: 'nanjing-qinhuai',
    summary: '5天深度游南京，从中山陵到夫子庙，从总统府到明孝陵，全方位体验六朝古都。',
    budget: { min: 2500, max: 5000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁覆盖完善，景点间公交便利',
    itinerary: [
      { day: 1, title: '中山陵·明孝陵', schedule: [
        { time: '08:00', content: '中山陵+音乐台+明孝陵', spotId: 'nanjing-zhongshan', foodId: '', cost: 70 },
        { time: '12:00', content: '南京大牌档午餐', spotId: '', foodId: 'nanjing-duck', cost: 150 },
        { time: '14:00', content: '紫金山天文台+植物园', spotId: '', foodId: '', cost: 40 },
        { time: '19:00', content: '夫子庙秦淮河夜游', spotId: 'nanjing-fuzimiao', foodId: '', cost: 120 }
      ], hotel: '新街口精品酒店，500-800元/晚', transport: '地铁2号线+步行', cost: 380 },
      { day: 2, title: '夫子庙·秦淮文化', schedule: [
        { time: '09:00', content: '夫子庙+贡院+秦淮河画舫', spotId: 'nanjing-fuzimiao', foodId: '', cost: 80 },
        { time: '12:00', content: '尹氏鸡汤馄饨午餐', spotId: '', foodId: 'nanjing-xiaochi', cost: 80 },
        { time: '14:00', content: '老门东+云锦博物馆', spotId: 'nanjing-laomendong', foodId: '', cost: 20 },
        { time: '19:00', content: '南京烤鸭晚餐', spotId: '', foodId: 'nanjing-duck', cost: 120 }
      ], hotel: '夫子庙酒店，400-600元/晚', transport: '地铁+步行', cost: 300 },
      { day: 3, title: '总统府·民国建筑', schedule: [
        { time: '09:00', content: '总统府+1912街区', spotId: 'nanjing-zongtongfu', foodId: '', cost: 40 },
        { time: '12:00', content: '颐和路民国公馆区午餐', spotId: '', foodId: 'nanjing-duck', cost: 150 },
        { time: '14:30', content: '南京大学+先锋书店', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '上海路美食晚餐', spotId: '', foodId: 'nanjing-xiaochi', cost: 100 }
      ], hotel: '南京酒店，400-600元/晚', transport: '地铁+步行', cost: 290 },
      { day: 4, title: '大屠杀·雨花台', schedule: [
        { time: '09:00', content: '南京大屠杀遇难同胞纪念馆', spotId: 'nanjing-tusikun', foodId: '', cost: 0 },
        { time: '12:00', content: '南京博物院（全程游览）', spotId: 'nanjing-museum', foodId: '', cost: 0 },
        { time: '13:30', content: '博物院午餐', spotId: '', foodId: 'nanjing-xiaochi', cost: 80 },
        { time: '15:30', content: '雨花台烈士陵园+牛首山', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '江宁路美食晚餐', spotId: '', foodId: 'nanjing-duck', cost: 100 }
      ], hotel: '南京酒店，400-600元/晚', transport: '地铁+公交', cost: 230 },
      { day: 5, title: '栖霞山·购物告别', schedule: [
        { time: '08:30', content: '栖霞山（秋季红叶最美）+栖霞寺', spotId: '', foodId: '', cost: 40 },
        { time: '12:00', content: '返回市区午餐', spotId: '', foodId: 'nanjing-duck', cost: 120 },
        { time: '14:00', content: '新街口商圈+德基广场', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '韩复兴盐水鸭告别晚餐', spotId: '', foodId: 'nanjing-duck', cost: 150 }
      ], hotel: '', transport: '公交+地铁', cost: 350 }
    ],
    tips: ['中山陵免费，明孝陵值得一看', '南京博物院需提前预约', '大屠杀纪念馆免费开放', '盐水鸭选韩复兴最正宗', '栖霞山秋季红叶11月最美'],
    bestSeason: '3-5月、9-11月',
    highlights: ['中山陵+明孝陵', '夫子庙+秦淮河', '南京大屠杀纪念馆', '明孝陵世界遗产']
  },

  // ---- 厦门 (2篇) ----
  {
    id: 'xiamen-guide-3days',
    cityId: 'xiamen',
    title: '厦门3日·面朝大海春暖花开',
    days: 3,
    cover: 'xiamen-gulangyu',
    summary: '鼓浪屿琴声、环岛路海风、沙坡尾艺术范，慢节奏里藏着浪漫。',
    budget: { min: 2000, max: 4000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁1/2/3号线覆盖；鼓浪屿乘船往返',
    itinerary: [
      { day: 1, title: '鼓浪屿·海岛文艺', schedule: [
        { time: '07:30', content: '轮渡赴鼓浪屿（提前买票）', spotId: '', foodId: '', cost: 35 },
        { time: '09:00', content: '鼓浪屿：日光岩+菽庄花园+皓月园', spotId: 'xiamen-gulangyu', foodId: '', cost: 0 },
        { time: '12:30', content: '鼓浪屿娜雅咖啡厅午餐', spotId: '', foodId: 'xiamen-shachamian', cost: 120 },
        { time: '14:30', content: '鼓浪屿万国建筑群+风琴博物馆', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '返回厦门，中山路黄则和花生汤', spotId: '', foodId: 'xiamen-zongzi', cost: 80 }
      ], hotel: '中山路酒店，400-600元/晚', transport: '轮渡+步行', cost: 285 },
      { day: 2, title: '环岛路·渔村风情', schedule: [
        { time: '08:30', content: '环岛路骑行：白城沙滩+黄厝海滩', spotId: 'xiamen-huandao', foodId: '', cost: 0 },
        { time: '11:00', content: '曾厝垵文创村+海鲜大排档', spotId: 'xiamen-zengcuoan', foodId: '', cost: 150 },
        { time: '13:30', content: '厦门大学（需预约）+南普陀寺', spotId: 'xiamen-daxue', foodId: '', cost: 0 },
        { time: '16:00', content: '沙坡尾艺术区+避风坞', spotId: 'xiamen-shapo', foodId: '', cost: 0 },
        { time: '19:00', content: '小眼镜海鲜大排档', spotId: '', foodId: 'xiamen-seafood', cost: 200 }
      ], hotel: '曾厝垵民宿，400-700元/晚', transport: '公交+租自行车', cost: 350 },
      { day: 3, title: '土楼·温泉度假', schedule: [
        { time: '07:00', content: '乘大巴赴南靖土楼（约2小时）', spotId: '', foodId: '', cost: 90 },
        { time: '09:30', content: '田螺坑土楼群（四菜一汤）', spotId: 'xiamen-tulou', foodId: '', cost: 90 },
        { time: '12:30', content: '土楼农家乐午餐', spotId: '', foodId: 'xiamen-seafood', cost: 80 },
        { time: '15:00', content: '返回厦门，日月谷温泉（可选）', spotId: '', foodId: '', cost: 250 },
        { time: '19:00', content: '1980烧肉粽店晚餐', spotId: '', foodId: 'xiamen-zongzi', cost: 80 }
      ], hotel: '', transport: '大巴+公交', cost: 590 }
    ],
    tips: ['鼓浪屿船票提前在"厦门轮渡"公众号购买', '厦门大学需提前3天预约', '土楼一日游建议报正规团', '厦门公交支持扫码，E卡9折', '特色：沙茶面、海蛎煎、土笋冻'],
    bestSeason: '3-5月、10-12月',
    highlights: ['鼓浪屿万国建筑', '环岛路+曾厝垵', '南靖土楼']
  },
  {
    id: 'xiamen-guide-5days',
    cityId: 'xiamen',
    title: '厦门5日深度·海岛慢生活之旅',
    days: 5,
    cover: 'xiamen-gulangyu',
    summary: '5天深度游厦门，鼓浪屿、土楼、环岛路、厦门大学一网打尽。',
    budget: { min: 3000, max: 6000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁+公交+轮渡+大巴',
    itinerary: [
      { day: 1, title: '鼓浪屿·万国建筑', schedule: [
        { time: '07:00', content: '鼓浪屿一日游', spotId: 'xiamen-gulangyu', foodId: '', cost: 150 },
        { time: '13:00', content: '返回厦门午餐', spotId: '', foodId: 'xiamen-shachamian', cost: 100 },
        { time: '15:00', content: '中山路+八市菜市场', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '小眼镜海鲜晚餐', spotId: '', foodId: 'xiamen-seafood', cost: 200 }
      ], hotel: '鼓浪屿精品酒店/中山路，500-900元/晚', transport: '轮渡+步行', cost: 450 },
      { day: 2, title: '环岛路·厦门大学', schedule: [
        { time: '08:30', content: '环岛路骑行+白城沙滩', spotId: 'xiamen-huandao', foodId: '', cost: 0 },
        { time: '11:00', content: '厦门大学+南普陀寺', spotId: 'xiamen-daxue', foodId: '', cost: 0 },
        { time: '12:30', content: '曾厝垵午餐', spotId: 'xiamen-zengcuoan', foodId: '', cost: 120 },
        { time: '14:30', content: '沙坡尾+艺术西区', spotId: 'xiamen-shapo', foodId: '', cost: 0 },
        { time: '19:00', content: '曾厝垵海鲜大排档', spotId: '', foodId: 'xiamen-seafood', cost: 180 }
      ], hotel: '曾厝垵民宿，500-800元/晚', transport: '公交+骑行', cost: 300 },
      { day: 3, title: '土楼·客家文化', schedule: [
        { time: '07:00', content: '南靖土楼一日游', spotId: 'xiamen-tulou', foodId: '', cost: 300 },
        { time: '13:00', content: '土楼午餐', spotId: '', foodId: 'xiamen-seafood', cost: 80 },
        { time: '15:00', content: '返回厦门', spotId: '', foodId: '', cost: 80 },
        { time: '19:00', content: '厦门海鲜自助晚餐', spotId: '', foodId: 'xiamen-seafood', cost: 150 }
      ], hotel: '厦门酒店，500-800元/晚', transport: '大巴+公交', cost: 610 },
      { day: 4, title: '金门岛·两岸风情', schedule: [
        { time: '08:00', content: '五通码头赴金门（需通行证）', spotId: '', foodId: '', cost: 300 },
        { time: '10:00', content: '金门：翟山坑道+莒光楼+酒厂', spotId: '', foodId: '', cost: 0 },
        { time: '13:00', content: '金门牛肉面馆午餐', spotId: '', foodId: '', cost: 100 },
        { time: '15:30', content: '返回厦门', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '八市菜市场海鲜晚餐', spotId: '', foodId: 'xiamen-seafood', cost: 200 }
      ], hotel: '厦门酒店，500-800元/晚', transport: '船班+公交', cost: 600 },
      { day: 5, title: '沙滩·购物告别', schedule: [
        { time: '09:00', content: '观音山沙滩+椰风寨', spotId: '', foodId: '', cost: 0 },
        { time: '12:00', content: '磐基中心午餐', spotId: '', foodId: 'xiamen-shachamian', cost: 100 },
        { time: '14:00', content: 'SM城市广场+中山路购物', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '1980烧肉粽店告别晚餐', spotId: '', foodId: 'xiamen-zongzi', cost: 100 }
      ], hotel: '', transport: '公交+步行', cost: 200 }
    ],
    tips: ['鼓浪屿船票紧张，务必提前购买', '厦门大学需提前3天官方预约', '金门需要办理通行证', '土楼推荐田螺坑+洪坑线路', '八市菜市场是厦门最地道的海鲜市场'],
    bestSeason: '3-5月、10-12月',
    highlights: ['鼓浪屿万国建筑', '环岛路+厦门大学', '南靖土楼', '金门岛两岸风情']
  },

  // ---- 青岛 (2篇) ----
  {
    id: 'qingdao-guide-3days',
    cityId: 'qingdao',
    title: '青岛3日·红瓦绿树碧海蓝天',
    days: 3,
    cover: 'qingdao-coast',
    summary: '栈桥海鸥、八大关德式建筑、崂山海上名山、啤酒节狂欢，浪漫之都。',
    budget: { min: 2000, max: 4000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁2/3/11号线覆盖；景点间公交便利',
    itinerary: [
      { day: 1, title: '栈桥·八大关', schedule: [
        { time: '08:30', content: '栈桥+回澜阁+海鸥', spotId: 'qingdao-zhanqiao', foodId: '', cost: 0 },
        { time: '10:30', content: '八大关+花石楼（德式建筑群）', spotId: 'qingdao-badaguan', foodId: '', cost: 50 },
        { time: '12:30', content: '青岛啤酒屋午餐（原浆+辣炒蛤蜊）', spotId: '', foodId: 'qingdao-beer', cost: 120 },
        { time: '14:30', content: '第二海水浴场+太平角', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '台东步行街+啤酒节（夏季）', spotId: '', foodId: 'qingdao-beer', cost: 100 }
      ], hotel: '香港中路酒店，400-700元/晚', transport: '地铁+步行', cost: 270 },
      { day: 2, title: '崂山·海上名山', schedule: [
        { time: '07:30', content: '乘大巴赴崂山（约1小时）', spotId: '', foodId: '', cost: 20 },
        { time: '09:00', content: '崂山风景区：仰口/太清线', spotId: 'qingdao-laoshan', foodId: '', cost: 130 },
        { time: '12:30', content: '崂山农家宴（海菜+啤酒）', spotId: '', foodId: 'qingdao-seafood', cost: 100 },
        { time: '15:00', content: '返回市区，青岛啤酒博物馆', spotId: 'qingdao-pijiu', foodId: '', cost: 60 },
        { time: '19:00', content: '营口路市场+啤酒屋晚餐', spotId: '', foodId: 'qingdao-beer', cost: 150 }
      ], hotel: '登州路酒店，300-500元/晚', transport: '大巴+公交', cost: 460 },
      { day: 3, title: '金沙滩·德式建筑', schedule: [
        { time: '08:30', content: '金沙滩+银沙滩（黄岛开发区）', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '黄岛海鲜午餐', spotId: '', foodId: 'qingdao-seafood', cost: 100 },
        { time: '14:30', content: '德国风情街+青岛邮电博物馆', spotId: '', foodId: '', cost: 20 },
        { time: '17:00', content: '中山路+百盛购物', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '青岛啤酒街+海鲜大餐', spotId: '', foodId: 'qingdao-beer', cost: 150 }
      ], hotel: '', transport: '隧道公交+地铁', cost: 270 }
    ],
    tips: ['青岛啤酒原浆最正宗，登州路啤酒街聚集', '崂山分多条线，推荐仰口或太清', '八大关秋季银杏最美', '海鲜推荐去市场选购后到啤酒屋加工', '青岛人叫塑料袋为"方便袋"'],
    bestSeason: '5-10月',
    highlights: ['栈桥+八大关', '崂山海上名山', '青岛啤酒+海鲜']
  },
  {
    id: 'qingdao-guide-5days',
    cityId: 'qingdao',
    title: '青岛5日深度·海滨德式文化之旅',
    days: 5,
    cover: 'qingdao-coast',
    summary: '5天深度游青岛，栈桥、八大关、崂山、金沙滩、啤酒博物馆一网打尽。',
    budget: { min: 3000, max: 6000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁+公交+大巴',
    itinerary: [
      { day: 1, title: '栈桥·八大关', schedule: [
        { time: '08:00', content: '栈桥+八大关+花石楼', spotId: 'qingdao-zhanqiao', foodId: '', cost: 50 },
        { time: '12:00', content: '青岛啤酒屋午餐', spotId: '', foodId: 'qingdao-beer', cost: 120 },
        { time: '14:30', content: '第二海水浴场+太平角', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '台东步行街晚餐', spotId: '', foodId: 'qingdao-beer', cost: 120 }
      ], hotel: '香港中路精品酒店，600-900元/晚', transport: '地铁+步行', cost: 290 },
      { day: 2, title: '崂山·海上名山', schedule: [
        { time: '07:00', content: '崂山仰口+太清线', spotId: 'qingdao-laoshan', foodId: '', cost: 150 },
        { time: '12:30', content: '崂山农家宴', spotId: '', foodId: 'qingdao-seafood', cost: 100 },
        { time: '15:00', content: '返回市区，啤酒博物馆', spotId: 'qingdao-pijiu', foodId: '', cost: 60 },
        { time: '19:00', content: '登州路啤酒街晚餐', spotId: '', foodId: 'qingdao-beer', cost: 120 }
      ], hotel: '登州路酒店，400-600元/晚', transport: '大巴+公交', cost: 430 },
      { day: 3, title: '金沙滩·黄岛', schedule: [
        { time: '09:00', content: '金沙滩+银沙滩+跨海大桥', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '黄岛海鲜午餐', spotId: '', foodId: 'qingdao-seafood', cost: 120 },
        { time: '14:30', content: '唐岛湾公园+红树林', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '返回市区，营口路海鲜晚餐', spotId: '', foodId: 'qingdao-beer', cost: 150 }
      ], hotel: '青岛酒店，400-600元/晚', transport: '隧道公交+地铁', cost: 270 },
      { day: 4, title: '德国建筑·博物馆', schedule: [
        { time: '09:00', content: '德国风情街+邮电博物馆+德国总督府', spotId: '', foodId: '', cost: 80 },
        { time: '12:00', content: '中山路午餐', spotId: '', foodId: 'qingdao-beer', cost: 100 },
        { time: '14:30', content: '青岛山炮台遗址+一战遗址博物馆', spotId: '', foodId: '', cost: 40 },
        { time: '19:00', content: '中山路美食晚餐', spotId: '', foodId: 'qingdao-beer', cost: 120 }
      ], hotel: '青岛酒店，400-600元/晚', transport: '地铁+步行', cost: 340 },
      { day: 5, title: '购物·告别', schedule: [
        { time: '09:00', content: '奥帆中心+燕儿岛山公园', spotId: '', foodId: '', cost: 0 },
        { time: '12:00', content: '海信广场午餐', spotId: '', foodId: 'qingdao-beer', cost: 120 },
        { time: '14:00', content: '万象城+奥帆中心购物', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '青岛啤酒街告别晚餐', spotId: '', foodId: 'qingdao-beer', cost: 150 }
      ], hotel: '', transport: '地铁+步行', cost: 270 }
    ],
    tips: ['青岛啤酒博物馆值得一看，含原浆品尝', '崂山一日游建议报正规团', '八大关秋季银杏+枫叶最美', '海鲜加工费5-10元/菜', '德国风情街是青岛历史的缩影'],
    bestSeason: '5-10月',
    highlights: ['栈桥+八大关德式建筑', '崂山海上名山', '青岛啤酒文化', '金沙滩海滨']
  },

  // ---- 无锡 (1篇) ----
  {
    id: 'wuxi-guide-3days',
    cityId: 'wuxi',
    title: '无锡3日·太湖明珠鱼米之乡',
    days: 3, cover: 'wuxi-taihu',
    summary: '鼋头渚湖光山色、灵山大佛壮观、惠山古镇韵味，江南富庶之地。',
    budget: { min: 1000, max: 2500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁1/2号线覆盖；鼋头渚可乘公交',
    itinerary: [
      { day: 1, title: '鼋头渚·太湖山水', schedule: [
        { time: '08:30', content: '鼋头渚风景区（太湖最美山水）', spotId: 'wuxi-yuantouzhu', foodId: '', cost: 90 },
        { time: '12:30', content: '太湖湖鲜午餐（三白：白鱼白虾银鱼）', spotId: '', foodId: 'wuxi-sanbai', cost: 120 },
        { time: '14:30', content: '灵山小镇拈花湾（禅意小镇）', spotId: 'wuxi-chanhua', foodId: '', cost: 60 },
        { time: '19:00', content: '无锡排骨+清水油面筋', spotId: '', foodId: 'wuxi-paigu', cost: 100 }
      ], hotel: '无锡市区，250-450元/晚', transport: '公交+步行', cost: 370 },
      { day: 2, title: '灵山大佛·惠山古镇', schedule: [
        { time: '08:00', content: '灵山大佛（88米青铜大佛）', spotId: 'wuxi-lingshan', foodId: '', cost: 210 },
        { time: '12:30', content: '灵山景区素斋午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '惠山古镇+惠山寺+天下第二泉', spotId: 'wuxi-huishan', foodId: '', cost: 60 },
        { time: '19:00', content: '无锡本帮菜晚餐', spotId: '', foodId: 'wuxi-paigu', cost: 80 }
      ], hotel: '惠山酒店，250-400元/晚', transport: '公交+步行', cost: 410 },
      { day: 3, title: '宜兴紫砂·陶瓷之都', schedule: [
        { time: '07:30', content: '乘大巴赴宜兴（约1小时）', spotId: '', foodId: '', cost: 30 },
        { time: '09:30', content: '宜兴陶瓷博物馆+紫砂壶作坊', spotId: 'wuxi-yixing', foodId: '', cost: 50 },
        { time: '12:30', content: '宜兴竹海公园午餐', spotId: '', foodId: 'wuxi-suncai', cost: 80 },
        { time: '15:00', content: '返回无锡，南长街古运河', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '无锡小笼包晚餐', spotId: '', foodId: 'wuxi-xiaolong', cost: 80 }
      ], hotel: '', transport: '大巴+公交', cost: 240 }
    ],
    tips: ['鼋头渚春季樱花秋季桂花最美', '灵山大佛景区很大，建议留一整天', '无锡排骨是特色，三凤桥最正宗', '宜兴紫砂壶可在陶都购买', '太湖三白是无锡必尝'],
    bestSeason: '3-5月、9-11月',
    highlights: ['鼋头渚太湖山水', '灵山大佛', '惠山古镇']
  },

  // ---- 宁波 (1篇) ----
  {
    id: 'ningbo-guide-3days',
    cityId: 'ningbo',
    title: '宁波3日·东方大港海上丝路',
    days: 3, cover: 'ningbo-harbor',
    summary: '天一阁藏书文化、老外滩欧式风情、溪口山水，浙东名城。',
    budget: { min: 1000, max: 2500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁1/2/4号线覆盖；溪口可乘大巴',
    itinerary: [
      { day: 1, title: '天一阁·老外滩', schedule: [
        { time: '09:00', content: '天一阁（中国现存最早私家藏书楼）', spotId: 'ningbo-tianyige', foodId: '', cost: 30 },
        { time: '11:30', content: '老外滩+三江口夜景', spotId: 'ningbo-waiwaitan', foodId: '', cost: 0 },
        { time: '12:30', content: '缸鸭狗汤圆+宁波汤团店午餐', spotId: '', foodId: 'ningbo-tangtuan', cost: 80 },
        { time: '14:30', content: '月湖公园+鼓楼', spotId: 'ningbo-yuehu', foodId: '', cost: 0 },
        { time: '19:00', content: '宁波海鲜：红膏炝蟹+黄鱼', spotId: '', foodId: 'ningbo-seafood', cost: 150 }
      ], hotel: '宁波市区，300-500元/晚', transport: '地铁+步行', cost: 260 },
      { day: 2, title: '溪口古镇·雪窦山', schedule: [
        { time: '07:30', content: '乘大巴赴溪口（约1.5小时）', spotId: '', foodId: '', cost: 30 },
        { time: '09:30', content: '溪口古镇：蒋氏故居+丰镐房', spotId: 'ningbo-xikou', foodId: '', cost: 120 },
        { time: '12:30', content: '溪口千层饼+农家菜午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '雪窦山（弥勒大佛+千丈岩瀑布）', spotId: 'ningbo-xuedou', foodId: '', cost: 120 },
        { time: '19:00', content: '返回宁波，宁波汤圆晚餐', spotId: '', foodId: 'ningbo-tangtuan', cost: 60 }
      ], hotel: '宁波酒店，300-500元/晚', transport: '大巴+步行', cost: 410 },
      { day: 3, title: '普陀山·佛教文化', schedule: [
        { time: '06:30', content: '赴普陀山（大巴+船）', spotId: '', foodId: '', cost: 120 },
        { time: '09:00', content: '普陀山：普济寺+南海观音+佛顶山', spotId: 'ningbo-putuo', foodId: '', cost: 160 },
        { time: '13:00', content: '普陀山素斋午餐', spotId: '', foodId: '', cost: 60 },
        { time: '15:00', content: '返回宁波', spotId: '', foodId: '', cost: 60 },
        { time: '19:00', content: '宁波海鲜大餐', spotId: '', foodId: 'ningbo-seafood', cost: 150 }
      ], hotel: '', transport: '大巴+船', cost: 550 }
    ],
    tips: ['普陀山佛教圣地，注意着装端庄', '溪口千层饼是特色', '宁波汤圆以缸鸭狗最有名', '天一阁需提前预约', '海鲜推荐：红膏炝蟹、野生黄鱼'],
    bestSeason: '3-5月、9-11月',
    highlights: ['天一阁藏书楼', '溪口古镇', '普陀山佛教圣地']
  },

  // ---- 温州 (1篇) ----
  {
    id: 'wenzhou-guide-3days',
    cityId: 'wenzhou',
    title: '温州3日·永嘉山水瓯越风情',
    days: 3, cover: 'wenzhou-island',
    summary: '雁荡山奇峰异石、楠溪江清流、江心屿孤屿，山水诗之乡。',
    budget: { min: 1000, max: 2500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '轨道交通S1线+公交；景点间交通便利',
    itinerary: [
      { day: 1, title: '雁荡山·奇峰异石', schedule: [
        { time: '07:30', content: '乘大巴赴雁荡山（约2小时）', spotId: '', foodId: '', cost: 40 },
        { time: '09:30', content: '雁荡山：大龙湫+灵峰+灵岩', spotId: 'wenzhou-yandang', foodId: '', cost: 160 },
        { time: '12:30', content: '雁荡山农家菜午餐', spotId: '', foodId: 'wenzhou-yangguang', cost: 80 },
        { time: '15:00', content: '返回温州', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '温州鱼丸+矮人松糕晚餐', spotId: '', foodId: 'wenzhou-yuwantou', cost: 80 }
      ], hotel: '温州酒店，250-450元/晚', transport: '大巴+步行', cost: 410 },
      { day: 2, title: '楠溪江·古村落', schedule: [
        { time: '08:00', content: '楠溪江风景区（竹筏漂流+古村落）', spotId: 'wenzhou-nanxi', foodId: '', cost: 100 },
        { time: '12:30', content: '楠溪江农家乐午餐', spotId: '', foodId: 'wenzhou-yangguang', cost: 80 },
        { time: '14:30', content: '芙蓉古村+苍坡古村', spotId: '', foodId: '', cost: 30 },
        { time: '18:00', content: '返回温州', spotId: '', foodId: '', cost: 60 },
        { time: '19:00', content: '温州瘦肉丸+楠溪江麦饼', spotId: '', foodId: 'wenzhou-yuwantou', cost: 70 }
      ], hotel: '温州酒店，250-400元/晚', transport: '大巴+步行', cost: 340 },
      { day: 3, title: '江心屿·瓯越文化', schedule: [
        { time: '09:00', content: '江心屿（中国四大孤屿之一）', spotId: 'wenzhou-jiangxin', foodId: '', cost: 20 },
        { time: '11:00', content: '江心寺+文天祥祠', spotId: '', foodId: '', cost: 0 },
        { time: '12:00', content: '温州老字号午餐（阿外楼）', spotId: '', foodId: 'wenzhou-yangguang', cost: 100 },
        { time: '14:00', content: '五马历史文化街区+禅街', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '温州家宴告别晚餐', spotId: '', foodId: 'wenzhou-yuwantou', cost: 120 }
      ], hotel: '', transport: '公交+步行', cost: 240 }
    ],
    tips: ['雁荡山以奇峰异石著称，大龙湫瀑布必看', '楠溪江春季油菜花最美', '温州小吃：鱼丸、瘦肉丸、松糕、敲鱼汤', '江心屿有"瓯江蓬莱"之称', '五马街是温州历史文化街区'],
    bestSeason: '4-6月、9-11月',
    highlights: ['雁荡山奇峰', '楠溪江古村落', '江心屿文化']
  },

  // ---- 合肥 (1篇) ----
  {
    id: 'hefei-guide-3days',
    cityId: 'hefei',
    title: '合肥3日·包公故里创新之都',
    days: 3, cover: 'hefei-ancient',
    summary: '包公墓清正、三河古镇水乡风情、巢湖碧波，科教名城现代魅力。',
    budget: { min: 800, max: 2000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁1/2/3/5号线覆盖',
    itinerary: [
      { day: 1, title: '包公祠·庐州古城', schedule: [
        { time: '08:30', content: '包公祠+包公墓（千古清官）', spotId: 'hefei-baogong', foodId: '', cost: 25 },
        { time: '11:00', content: '李鸿章故居+淮军文化', spotId: 'hefei-lihongzhang', foodId: '', cost: 20 },
        { time: '12:30', content: '合肥老字号午餐（吴裕泰+詹记桃酥）', spotId: '', foodId: 'hefei-guli', cost: 80 },
        { time: '14:30', content: '安徽省博物院+天鹅湖', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '宁国路龙虾街晚餐', spotId: '', foodId: 'hefei-xiaolongxia', cost: 100 }
      ], hotel: '合肥酒店，250-400元/晚', transport: '地铁+步行', cost: 225 },
      { day: 2, title: '三河古镇·巢湖', schedule: [
        { time: '07:30', content: '乘大巴赴三河古镇（约1小时）', spotId: '', foodId: '', cost: 10 },
        { time: '09:00', content: '三河古镇：古街+鹊渚廊桥+杨振宁故居', spotId: 'hefei-sanhe', foodId: '', cost: 0 },
        { time: '12:30', content: '三河米饺+三河小炒午餐', spotId: '', foodId: 'hefei-sanhe', cost: 60 },
        { time: '14:30', content: '巢湖风景区（姥山岛+中庙）', spotId: 'hefei-chaohu', foodId: '', cost: 80 },
        { time: '18:00', content: '返回合肥', spotId: '', foodId: '', cost: 50 }
      ], hotel: '合肥酒店，250-400元/晚', transport: '大巴+公交', cost: 200 },
      { day: 3, title: '创新之都·现代合肥', schedule: [
        { time: '09:00', content: '中国科学技术大学+合肥科技馆', spotId: 'hefei-keda', foodId: '', cost: 0 },
        { time: '11:30', content: '合肥之心城午餐', spotId: '', foodId: 'hefei-guli', cost: 100 },
        { time: '14:00', content: '融创融创乐园+滨湖湿地', spotId: '', foodId: '', cost: 80 },
        { time: '19:00', content: '合肥詹记桃酥+吴裕泰，告别晚餐', spotId: '', foodId: 'hefei-guli', cost: 120 }
      ], hotel: '', transport: '地铁+公交', cost: 300 }
    ],
    tips: ['包公祠免费，包公墓需购票', '三河古镇免费，三河米饺是特色', '合肥龙虾全国闻名，夏季最红火', '安徽省博物院需预约', '巢湖是中国五大淡水湖之一'],
    bestSeason: '3-5月、9-11月',
    highlights: ['包公祠+包公墓', '三河古镇', '巢湖风景区']
  },

  // ---- 福州 (1篇) ----
  {
    id: 'fuzhou-guide-3days',
    cityId: 'fuzhou',
    title: '福州3日·有福之州榕城春意',
    days: 3, cover: 'fuzhou-drum-tower',
    summary: '三坊七巷明清建筑、鼓山摩崖石刻、平潭岛海景，闽都文化深厚。',
    budget: { min: 1000, max: 2500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁1/2号线覆盖；平潭岛乘大巴',
    itinerary: [
      { day: 1, title: '三坊七巷·榕城文化', schedule: [
        { time: '09:00', content: '三坊七巷（中国城市里坊制度活化石）', spotId: 'fuzhou-sanfang', foodId: '', cost: 0 },
        { time: '11:30', content: '南后街+林则徐故居', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '佛跳墙+聚春园午餐', spotId: '', foodId: 'fuzhou- Fotiaoqiang', cost: 200 },
        { time: '14:30', content: '鼓山风景区（摩崖石刻+涌泉寺）', spotId: 'fuzhou-gushan', foodId: '', cost: 40 },
        { time: '19:00', content: '安泰楼+鱼丸+肉燕晚餐', spotId: '', foodId: 'fuzhou-yuywan', cost: 80 }
      ], hotel: '福州酒店，300-500元/晚', transport: '地铁+公交', cost: 320 },
      { day: 2, title: '平潭岛·海滨风光', schedule: [
        { time: '07:30', content: '乘大巴赴平潭岛（约1.5小时）', spotId: '', foodId: '', cost: 50 },
        { time: '09:30', content: '平潭坛南湾+龙凤头海滨浴场', spotId: 'fuzhou-pingtan', foodId: '', cost: 0 },
        { time: '12:30', content: '平潭海鲜午餐（黄鱼+紫菜）', spotId: '', foodId: 'fuzhou-seafood', cost: 120 },
        { time: '14:30', content: '北港石头厝+东海仙境', spotId: '', foodId: '', cost: 60 },
        { time: '19:00', content: '返回福州', spotId: '', foodId: '', cost: 100 }
      ], hotel: '福州酒店，300-500元/晚', transport: '大巴+公交', cost: 330 },
      { day: 3, title: '福州美食·宗教文化', schedule: [
        { time: '09:00', content: '开元寺+华林寺（福建最古老木构）', spotId: 'fuzhou-kaiyuan', foodId: '', cost: 10 },
        { time: '11:00', content: '船政文化景区（马尾）', spotId: 'fuzhou-chuanzheng', foodId: '', cost: 30 },
        { time: '12:30', content: '福州小吃一条街（鱼丸+肉燕+锅边）', spotId: '', foodId: 'fuzhou-yuywan', cost: 60 },
        { time: '14:30', content: '昙石山文化遗址+福建省博物院', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '聚春园佛跳墙告别晚餐', spotId: '', foodId: 'fuzhou- Fotiaoqiang', cost: 200 }
      ], hotel: '', transport: '地铁+公交', cost: 300 }
    ],
    tips: ['三坊七巷免费，主街商业化', '佛跳墙是闽菜之王，聚春园最正宗', '平潭岛风大，注意防晒', '福州小吃：鱼丸、肉燕、锅边、光饼', '鼓山是福州第一名山'],
    bestSeason: '3-5月、10-12月',
    highlights: ['三坊七巷', '鼓山摩崖石刻', '平潭岛海滨']
  },

  // ---- 烟台 (1篇) ----
  {
    id: 'yantai-guide-3days',
    cityId: 'yantai',
    title: '烟台3日·仙境海岸葡萄酒城',
    days: 3, cover: 'yantai-mountain',
    summary: '蓬莱阁八仙传说、烟台山近代建筑、长岛海岛风光，葡萄酒之都。',
    budget: { min: 1000, max: 2500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '市区公交覆盖；长岛需乘船',
    itinerary: [
      { day: 1, title: '烟台山·近代建筑', schedule: [
        { time: '09:00', content: '烟台山+朝阳街（近代领事馆建筑群）', spotId: 'yantai-mountain', foodId: '', cost: 0 },
        { time: '11:30', content: '蓬莱小面+鲅鱼饺子午餐', spotId: '', foodId: 'yantai-gyuju', cost: 80 },
        { time: '13:30', content: '东炮台+海门公园', spotId: 'yantai-dongpaotai', foodId: '', cost: 20 },
        { time: '15:30', content: '张裕酒文化博物馆', spotId: 'yantai-changyu', foodId: '', cost: 50 },
        { time: '19:00', content: '烟台海鲜+葡萄酒晚餐', spotId: '', foodId: 'yantai-seafood', cost: 150 }
      ], hotel: '烟台酒店，300-500元/晚', transport: '公交+步行', cost: 300 },
      { day: 2, title: '蓬莱阁·八仙过海', schedule: [
        { time: '07:30', content: '乘大巴赴蓬莱（约1小时）', spotId: '', foodId: '', cost: 30 },
        { time: '09:00', content: '蓬莱阁（八仙过海+海市蜃楼）', spotId: 'yantai-penglai', foodId: '', cost: 100 },
        { time: '12:30', content: '蓬莱渔家乐午餐', spotId: '', foodId: 'yantai-seafood', cost: 80 },
        { time: '14:30', content: '蓬莱海洋极地世界（可选）', spotId: 'yantai-ocean', foodId: '', cost: 150 },
        { time: '19:00', content: '返回烟台，海鲜晚餐', spotId: '', foodId: 'yantai-seafood', cost: 150 }
      ], hotel: '烟台酒店，300-500元/晚', transport: '大巴+公交', cost: 510 },
      { day: 3, title: '长岛·海岛风光', schedule: [
        { time: '07:00', content: '赴长岛（大巴+船约2小时）', spotId: '', foodId: '', cost: 100 },
        { time: '09:30', content: '长岛：九丈崖+月牙湾+望夫礁', spotId: 'yantai-changdao', foodId: '', cost: 100 },
        { time: '12:30', content: '长岛海鲜午餐', spotId: '', foodId: 'yantai-seafood', cost: 100 },
        { time: '15:00', content: '返回烟台', spotId: '', foodId: '', cost: 80 },
        { time: '19:00', content: '烟台告别晚餐', spotId: '', foodId: 'yantai-seafood', cost: 150 }
      ], hotel: '', transport: '大巴+船', cost: 530 }
    ],
    tips: ['蓬莱阁门票100元，含蓬莱阁+水师衙门', '长岛风大浪急，晕船者注意', '张裕博物馆可品尝葡萄酒', '烟台特产：张裕葡萄酒、龙口粉丝', '八仙过海发源于蓬莱阁'],
    bestSeason: '5-10月',
    highlights: ['蓬莱阁八仙传说', '烟台山近代建筑', '长岛海岛风光']
  },

  // ---- 黄山 (1篇) ----
  {
    id: 'huangshan-guide-3days',
    cityId: 'huangshan',
    title: '黄山3日·天下第一奇山',
    days: 3, cover: 'huangshan-mountain',
    summary: '迎客松傲然、云海缥缈、日出壮丽、温泉养生，徐霞客盛赞。',
    budget: { min: 2000, max: 5000, currency: 'CNY', note: '含住宿、餐饮、门票、交通；山上住宿贵' },
    transport: '高铁至黄山北站+景区大巴+索道',
    itinerary: [
      { day: 1, title: '黄山主峰·云海日出', schedule: [
        { time: '06:00', content: '乘高铁赴黄山北站+景区大巴（约2小时）', spotId: '', foodId: '', cost: 80 },
        { time: '08:30', content: '慈光阁索道上山→玉屏楼→迎客松→天都峰', spotId: 'huangshan-mountain', foodId: '', cost: 190 },
        { time: '12:30', content: '白云宾馆自助餐', spotId: '', foodId: '', cost: 150 },
        { time: '14:30', content: '光明顶→飞来石→排云亭', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '山上白云宾馆住宿（约800元）', spotId: '', foodId: '', cost: 800 }
      ], hotel: '黄山白云宾馆，800-1500元/晚', transport: '大巴+索道', cost: 1220 },
      { day: 2, title: '西海大峡谷·温泉', schedule: [
        { time: '05:00', content: '光明顶看日出', spotId: '', foodId: '', cost: 0 },
        { time: '07:00', content: '西海大峡谷（一环+二环+谷底）', spotId: '', foodId: '', cost: 100 },
        { time: '12:30', content: '西海饭店午餐', spotId: '', foodId: '', cost: 150 },
        { time: '14:30', content: '太平索道下山→翡翠谷（情人谷）', spotId: '', foodId: '', cost: 80 },
        { time: '19:00', content: '汤口温泉度假村晚餐+住宿', spotId: '', foodId: '', cost: 300 }
      ], hotel: '汤口温泉酒店，400-700元/晚', transport: '索道+大巴', cost: 630 },
      { day: 3, title: '宏村西递·古民居', schedule: [
        { time: '08:00', content: '宏村（中国画里乡村）', spotId: 'huangshan-hongcun', foodId: '', cost: 100 },
        { time: '12:30', content: '宏村农家乐午餐', spotId: '', foodId: 'huangshan-ma', cost: 80 },
        { time: '14:30', content: '西递（桃花源里人家）', spotId: 'huangshan-xidi', foodId: '', cost: 100 },
        { time: '18:00', content: '返回屯溪', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '屯溪老街晚餐', spotId: '', foodId: 'huangshan-ma', cost: 120 }
      ], hotel: '', transport: '包车+公交', cost: 450 }
    ],
    tips: ['黄山门票190元+索道90元，旺季更贵', '山上住宿紧张，务必提前数月预订', '黄山冬季有积雪，注意防滑', '宏村西递是世界文化遗产', '黄山毛峰茶产地'],
    bestSeason: '4-6月、9-11月',
    highlights: ['迎客松+云海日出', '西海大峡谷', '宏村西递古民居']
  },

  // ---- 泉州 (1篇) ----
  {
    id: 'quanzhou-guide-3days',
    cityId: 'quanzhou',
    title: '泉州3日·世遗之城宋元港航',
    days: 3, cover: 'quanzhou-maritime',
    summary: '开元寺东西塔、蟳埔村簪花围、海上丝绸之路起点，多元文化交融。',
    budget: { min: 1000, max: 2500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '公交/滴滴覆盖主要景点',
    itinerary: [
      { day: 1, title: '开元寺·世遗文化', schedule: [
        { time: '08:30', content: '开元寺（东西塔+大雄宝殿）', spotId: 'quanzhou-kaiyuan', foodId: '', cost: 10 },
        { time: '10:00', content: '西街+钟楼+中山路', spotId: 'quanzhou-xijie', foodId: '', cost: 0 },
        { time: '12:00', content: '泉州牛肉羹+面线糊午餐', spotId: '', foodId: 'quanzhou-rougeng', cost: 80 },
        { time: '14:00', content: '蟳埔村（簪花围+海上丝绸之路）', spotId: 'quanzhou-xunpu', foodId: '', cost: 0 },
        { time: '19:00', content: '泉州姜母鸭+土笋冻晚餐', spotId: '', foodId: 'quanzhou-tusundong', cost: 120 }
      ], hotel: '泉州酒店，200-400元/晚', transport: '公交+步行', cost: 210 },
      { day: 2, title: '清源山·老君岩', schedule: [
        { time: '08:00', content: '清源山（老君岩+伊斯兰圣墓）', spotId: 'quanzhou-qingyuan', foodId: '', cost: 70 },
        { time: '11:00', content: '泉州博物馆+海外交通史博物馆', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '泉州小吃：土笋冻+海蛎煎+面线糊', spotId: '', foodId: 'quanzhou-tusundong', cost: 60 },
        { time: '14:30', content: '洛阳桥（宋代古桥）', spotId: 'quanzhou-luoyang', foodId: '', cost: 20 },
        { time: '19:00', content: '泉州姜母鸭晚餐', spotId: '', foodId: 'quanzhou-rougeng', cost: 80 }
      ], hotel: '泉州酒店，200-400元/晚', transport: '公交+步行', cost: 230 },
      { day: 3, title: '鼓浪屿·中山路', schedule: [
        { time: '09:00', content: '中山路步行街+骑楼', spotId: '', foodId: '', cost: 0 },
        { time: '11:30', content: '关岳庙+清净寺（印度教+伊斯兰教）', spotId: 'quanzhou-guanyue', foodId: '', cost: 0 },
        { time: '12:30', content: '泉州老字号午餐', spotId: '', foodId: 'quanzhou-rougeng', cost: 100 },
        { time: '14:30', content: '石狮黄金海岸/惠安崇武古城', spotId: '', foodId: '', cost: 60 },
        { time: '19:00', content: '泉州海鲜大餐告别', spotId: '', foodId: 'quanzhou-seafood', cost: 150 }
      ], hotel: '', transport: '公交+步行', cost: 310 }
    ],
    tips: ['泉州2021年入选世遗，景点含多个文化遗产', '蟳埔村簪花围服饰是泉州特色', '泉州小吃：面线糊、土笋冻、姜母鸭', '开元寺东西塔是中国最高石塔', '洛阳桥是中国四大古桥之一'],
    bestSeason: '3-5月、10-12月',
    highlights: ['开元寺东西塔', '蟳埔村簪花围', '海上丝绸之路文化']
  },

  // ==================== 华中 (14篇) ====================

  // ---- 武汉 (2篇) ----
  {
    id: 'wuhan-guide-3days', cityId: 'wuhan', title: '武汉3日·江城知音樱花行', days: 3,
    cover: 'wuhan-yellowcrane',
    summary: '黄鹤楼俯瞰江城，东湖绿道骑行，樱花烂漫，热干面飘香。',
    budget: { min: 1200, max: 2800, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁覆盖主要景点，东湖可乘景区观光车',
    itinerary: [
      { day: 1, title: '黄鹤楼·江城烟雨', schedule: [
        { time: '08:30', content: '黄鹤楼：武昌起义纪念馆→黄鹤楼公园', spotId: 'wuhan-huanghe', foodId: '', cost: 70 },
        { time: '12:30', content: '户部巷热干面+豆皮午餐', spotId: '', foodId: 'wuhan-reganmian', cost: 40 },
        { time: '14:30', content: '东湖风景区：绿道骑行+磨山樱花园', spotId: 'wuhan-donghu', foodId: '', cost: 0 },
        { time: '19:00', content: '江汉路步行街+长江大桥夜景', spotId: 'wuhan-jianghan', foodId: 'wuhan-xiaolong', cost: 80 }
      ], hotel: '武昌/汉口商务酒店，250-400元/晚', transport: '地铁4号线', cost: 190 },
      { day: 2, title: '樱花大学·民国风情', schedule: [
        { time: '08:30', content: '武汉大学樱花大道+老斋舍', spotId: '', foodId: '', cost: 0 },
        { time: '11:30', content: '湖北省博物馆（曾侯乙编钟+越王勾践剑）', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '梁子湖大闸蟹+清蒸武昌鱼', spotId: '', foodId: 'wuhan-crab', cost: 120 },
        { time: '14:30', content: '昙华林文艺街区+辛亥革命博物馆', spotId: '', foodId: '', cost: 0 },
        { time: '19:30', content: '长江大桥夜游+知音号游轮', spotId: '', foodId: 'wuhan-xiaolong', cost: 150 }
      ], hotel: '武昌/汉口商务酒店，250-400元/晚', transport: '地铁2号线', cost: 270 },
      { day: 3, title: '古镇黄陂·木兰文化', schedule: [
        { time: '08:00', content: '黄陂木兰文化生态旅游区', spotId: '', foodId: '', cost: 80 },
        { time: '12:30', content: '黄陂三合汤+糊米酒午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '归元寺数罗汉+汉正街小商品城', spotId: '', foodId: '', cost: 20 },
        { time: '19:00', content: '小龙虾+油焖大虾告别晚餐', spotId: '', foodId: 'wuhan-xiaolong', cost: 150 }
      ], hotel: '', transport: '公交+景区大巴', cost: 310 }
    ],
    tips: ['3月樱花季最美，武汉大学樱花大道限时限流', '武汉夏季炎热，建议春秋前往', '长江大桥限行，打车需绕行', '热干面+豆皮是武汉早餐灵魂', '知音号游轮是特色体验'],
    bestSeason: '3-4月樱花季、9-10月秋高气爽',
    highlights: ['黄鹤楼长江风光', '东湖绿道骑行', '武汉大学樱花']
  },
  {
    id: 'wuhan-guide-5days', cityId: 'wuhan', title: '武汉5日·江城深度人文', days: 5,
    cover: 'wuhan-eastlake',
    summary: '黄鹤楼+东湖+樱花+黄陂+知音号，5天深度漫游江城人文风情。',
    budget: { min: 2200, max: 4500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁+公交+景区大巴，黄陂可包车',
    itinerary: [
      { day: 1, title: '黄鹤楼·武昌历史', schedule: [
        { time: '08:30', content: '黄鹤楼+武昌起义纪念馆', spotId: 'wuhan-huanghe', foodId: '', cost: 70 },
        { time: '12:30', content: '户部巷热干面午餐', spotId: '', foodId: 'wuhan-reganmian', cost: 40 },
        { time: '14:30', content: '昙华林+湖北省博物馆', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '江汉路+长江大桥夜景', spotId: 'wuhan-jianghan', foodId: 'wuhan-xiaolong', cost: 100 }
      ], hotel: '武昌酒店，300-500元/晚', transport: '地铁', cost: 210 },
      { day: 2, title: '东湖·绿道骑行', schedule: [
        { time: '08:30', content: '东湖绿道骑行（湖中道+磨山道）', spotId: 'wuhan-donghu', foodId: '', cost: 0 },
        { time: '12:30', content: '东湖渔庄武昌鱼午餐', spotId: '', foodId: 'wuhan-crab', cost: 120 },
        { time: '14:30', content: '磨山樱花园+梅园', spotId: '', foodId: '', cost: 30 },
        { time: '19:30', content: '知音号游轮夜游长江', spotId: '', foodId: 'wuhan-xiaolong', cost: 200 }
      ], hotel: '武昌酒店，300-500元/晚', transport: '东湖观光车', cost: 350 },
      { day: 3, title: '武汉大学·樱花', schedule: [
        { time: '08:30', content: '武汉大学樱花大道+老斋舍+图书馆', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '珞珈山食堂午餐', spotId: '', foodId: 'wuhan-reganmian', cost: 60 },
        { time: '14:30', content: '华中科技大学+光谷步行街', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '光谷广场小龙虾晚餐', spotId: '', foodId: 'wuhan-xiaolong', cost: 150 }
      ], hotel: '光谷酒店，300-500元/晚', transport: '地铁2号线', cost: 210 },
      { day: 4, title: '黄陂·木兰文化', schedule: [
        { time: '07:00', content: '乘大巴赴黄陂木兰文化旅游区', spotId: '', foodId: '', cost: 30 },
        { time: '09:00', content: '木兰草原+木兰天池', spotId: '', foodId: '', cost: 120 },
        { time: '12:30', content: '黄陂三鲜（肉糕+鱼丸+肉丸）', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '锦里沟土家风情', spotId: '', foodId: '', cost: 60 },
        { time: '19:00', content: '返回武汉，吉庆街夜市', spotId: '', foodId: 'wuhan-xiaolong', cost: 120 }
      ], hotel: '汉口酒店，300-500元/晚', transport: '旅游大巴', cost: 410 },
      { day: 5, title: '归元寺·汉正街', schedule: [
        { time: '08:30', content: '归元寺数罗汉+拜财神', spotId: '', foodId: '', cost: 20 },
        { time: '10:30', content: '晴川阁+古琴台', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '蔡林记热干面+面窝', spotId: '', foodId: 'wuhan-reganmian', cost: 30 },
        { time: '14:30', content: '汉正街+楚河汉街购物', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '江滩告别晚餐+江汉路夜游', spotId: 'wuhan-jianghan', foodId: 'wuhan-crab', cost: 200 }
      ], hotel: '', transport: '地铁+步行', cost: 250 }
    ],
    tips: ['樱花季3月中至4月初，需预约入校', '知音号游轮提前1周订票', '黄陂景区夏季比市区低5℃', '吉庆街夜市有湖北特色小吃', '武汉公交发达，建议办一卡通'],
    bestSeason: '3-4月樱花、9-10月秋',
    highlights: ['黄鹤楼+长江大桥', '东湖绿道骑行', '知音号游轮', '武汉大学樱花', '黄陂木兰文化']
  },

  // ---- 长沙 (2篇) ----
  {
    id: 'changsha-guide-3days', cityId: 'changsha', title: '长沙3日·烟火橘子洲', days: 3,
    cover: 'changsha-juzizhou',
    summary: '岳麓书院书香、橘子洲头青年毛泽东、太平街烟火、麻辣小龙虾。',
    budget: { min: 1200, max: 2800, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁覆盖主要景点',
    itinerary: [
      { day: 1, title: '岳麓山·千年书院', schedule: [
        { time: '08:30', content: '岳麓书院+爱晚亭', spotId: 'changsha-yuelu', foodId: '', cost: 40 },
        { time: '12:30', content: '坡子街火宫殿臭豆腐+糖油粑粑', spotId: '', foodId: 'changsha-stinkytofu', cost: 50 },
        { time: '14:30', content: '湖南省博物馆（马王堆+辛追夫人）', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '黄兴南路步行街+小龙虾晚餐', spotId: '', foodId: 'changsha-xiaolong', cost: 150 }
      ], hotel: '长沙酒店，200-400元/晚', transport: '地铁2号线', cost: 240 },
      { day: 2, title: '橘子洲·青年毛泽东', schedule: [
        { time: '08:30', content: '橘子洲头青年毛泽东雕像', spotId: 'changsha-juzizhou', foodId: '', cost: 0 },
        { time: '12:30', content: '岳麓山下农家菜', spotId: '', foodId: 'changsha-duojiao', cost: 80 },
        { time: '14:30', content: '湖南大学+东方红广场', spotId: '', foodId: '', cost: 0 },
        { time: '19:30', content: '解放西路酒吧街+小龙虾', spotId: '', foodId: 'changsha-xiaolong', cost: 180 }
      ], hotel: '长沙酒店，200-400元/晚', transport: '地铁2号线', cost: 260 },
      { day: 3, title: '太平街·烟火长沙', schedule: [
        { time: '09:00', content: '太平老街+贾谊故居', spotId: 'changsha-taiping', foodId: '', cost: 0 },
        { time: '12:30', content: '文和友龙虾+茶颜悦色奶茶', spotId: '', foodId: 'changsha-xiaolong', cost: 100 },
        { time: '14:30', content: '天心阁+杜甫江阁', spotId: '', foodId: '', cost: 30 },
        { time: '19:00', content: '湘江夜景+南门口夜宵', spotId: '', foodId: 'changsha-stinkytofu', cost: 80 }
      ], hotel: '', transport: '步行', cost: 210 }
    ],
    tips: ['茶颜悦色是长沙特色奶茶，每500米一家', '文和友龙虾排队2小时起', '湖南省博物馆需预约', '橘子洲头有小火车', '长沙夏季炎热，夜宵火爆'],
    bestSeason: '3-5月、9-11月',
    highlights: ['岳麓书院千年书香', '橘子洲头青年毛泽东', '太平街烟火小吃']
  },
  {
    id: 'changsha-guide-5days', cityId: 'changsha', title: '长沙5日·深度湖湘', days: 5,
    cover: 'changsha-yuelu',
    summary: '岳麓山+橘子洲+凤凰古城+桃花源，湖湘文化深度游。',
    budget: { min: 2500, max: 5000, currency: 'CNY', note: '含往返凤凰高铁' },
    transport: '地铁+高铁+景区大巴',
    itinerary: [
      { day: 1, title: '岳麓山·书院文化', schedule: [
        { time: '08:30', content: '岳麓书院+爱晚亭+古麓山寺', spotId: 'changsha-yuelu', foodId: '', cost: 40 },
        { time: '12:30', content: '火宫殿臭豆腐+口味虾', spotId: '', foodId: 'changsha-stinkytofu', cost: 80 },
        { time: '14:30', content: '湖南大学+东方红广场', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '解放西路小龙虾晚餐', spotId: '', foodId: 'changsha-xiaolong', cost: 150 }
      ], hotel: '长沙酒店，250-450元/晚', transport: '地铁2号线', cost: 270 },
      { day: 2, title: '橘子洲·烟火长沙', schedule: [
        { time: '08:30', content: '橘子洲头青年毛泽东像+青年毛泽东纪念馆', spotId: 'changsha-juzizhou', foodId: '', cost: 0 },
        { time: '12:30', content: '文和友长沙小吃', spotId: '', foodId: 'changsha-duojiao', cost: 80 },
        { time: '14:30', content: '太平街+贾谊故居', spotId: 'changsha-taiping', foodId: '', cost: 0 },
        { time: '19:30', content: '湘江夜景+南门口夜宵', spotId: '', foodId: 'changsha-xiaolong', cost: 120 }
      ], hotel: '长沙酒店，250-450元/晚', transport: '地铁', cost: 200 },
      { day: 3, title: '凤凰古城·沈从文', schedule: [
        { time: '07:00', content: '乘高铁赴凤凰古城（约3小时）', spotId: '', foodId: '', cost: 150 },
        { time: '12:00', content: '凤凰古城沱江两岸', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '凤凰血粑鸭+酸汤鱼', spotId: '', foodId: 'changsha-duojiao', cost: 100 },
        { time: '14:30', content: '沈从文故居+熊希龄故居', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '凤凰沱江夜景+篝火晚会', spotId: '', foodId: '', cost: 50 }
      ], hotel: '凤凰古城客栈，300-600元/晚', transport: '高铁+步行', cost: 350 },
      { day: 4, title: '凤凰·古城漫游', schedule: [
        { time: '08:00', content: '沱江晨雾+苗族银饰工艺', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '凤凰姜糖+小吃午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '南华山+凤凰古城博物馆', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '返回长沙', spotId: '', foodId: 'changsha-xiaolong', cost: 200 }
      ], hotel: '长沙酒店，250-450元/晚', transport: '高铁', cost: 310 },
      { day: 5, title: '湖南省博·桃花源', schedule: [
        { time: '08:30', content: '湖南省博物馆（马王堆汉墓）', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '岳麓山下湘菜午餐', spotId: '', foodId: 'changsha-duojiao', cost: 100 },
        { time: '14:30', content: '天心阁+杜甫江阁', spotId: '', foodId: '', cost: 30 },
        { time: '19:00', content: '湘江夜景告别晚餐', spotId: '', foodId: 'changsha-xiaolong', cost: 150 }
      ], hotel: '', transport: '地铁+步行', cost: 280 }
    ],
    tips: ['凤凰古城高铁需提前订', '湖南省博物馆马王堆必看', '长沙小龙虾旺季5-9月', '茶颜悦色买三免一活动', '建议买一张交通卡'],
    bestSeason: '3-5月、9-11月',
    highlights: ['岳麓书院', '橘子洲头', '凤凰古城', '湖南省博物馆', '湘江夜景']
  },

  // ---- 郑州 (1篇) ----
  {
    id: 'zhengzhou-guide-3days', cityId: 'zhengzhou', title: '郑州3日·少林禅宗·戏剧幻城', days: 3,
    cover: 'zhengzhou-shaolin',
    summary: '少林寺禅宗祖庭、龙门石窟石刻、只有河南戏剧幻城震撼。',
    budget: { min: 1200, max: 2800, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '高铁+景区大巴',
    itinerary: [
      { day: 1, title: '少林寺·禅宗祖庭', schedule: [
        { time: '07:00', content: '乘高铁赴登封少林寺（约40分钟）', spotId: '', foodId: '', cost: 60 },
        { time: '08:30', content: '少林寺：山门+天王殿+大雄宝殿+塔林', spotId: 'zhengzhou-shaolin', foodId: '', cost: 100 },
        { time: '12:30', content: '少林寺素斋+登封烧饼', spotId: '', foodId: '', cost: 50 },
        { time: '14:30', content: '观看少林武术表演', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '返回郑州，合记烩面晚餐', spotId: '', foodId: '', cost: 80 }
      ], hotel: '郑州酒店，200-400元/晚', transport: '高铁+景区大巴', cost: 290 },
      { day: 2, title: '龙门石窟·石刻艺术', schedule: [
        { time: '07:00', content: '乘高铁赴洛阳龙门石窟（约30分钟）', spotId: '', foodId: '', cost: 70 },
        { time: '09:00', content: '龙门石窟西山：卢舍那大佛+万佛洞', spotId: 'zhengzhou-longmen', foodId: '', cost: 90 },
        { time: '12:30', content: '洛阳水席+牛肉汤午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '龙门石窟东山+香山寺', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '返回郑州，黄河鲤鱼晚餐', spotId: '', foodId: '', cost: 100 }
      ], hotel: '郑州酒店，200-400元/晚', transport: '高铁+步行', cost: 340 },
      { day: 3, title: '戏剧幻城·只有河南', schedule: [
        { time: '08:30', content: '只有河南·戏剧幻城（3大剧场+56个小剧场）', spotId: 'zhengzhou-henan', foodId: '', cost: 390 },
        { time: '12:30', content: '园区内河南特色午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '继续观赏戏剧（建议下午场）', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '郑州二七纪念馆+德化步行街晚餐', spotId: '', foodId: '', cost: 100 }
      ], hotel: '', transport: '地铁+公交', cost: 570 }
    ],
    tips: ['少林寺门票100元+表演免费', '龙门石窟需预约，门票90元', '只有河南戏剧幻城390元套票', '合记烩面是郑州特色', '黄河鲤鱼焙面是豫菜名品'],
    bestSeason: '4-5月、9-10月',
    highlights: ['少林寺禅宗', '龙门石窟石刻', '只有河南戏剧幻城']
  },

  // ---- 洛阳 (1篇) ----
  {
    id: 'luoyang-guide-3days', cityId: 'luoyang', title: '洛阳3日·十三朝古都·牡丹花城', days: 3,
    cover: 'luoyang-peony',
    summary: '龙门石窟、白马寺、牡丹花会、洛阳水席，千年古都神韵。',
    budget: { min: 1500, max: 3200, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '公交+景区大巴',
    itinerary: [
      { day: 1, title: '龙门石窟·石刻瑰宝', schedule: [
        { time: '08:30', content: '龙门石窟西山石窟', spotId: 'luoyang-longmen', foodId: '', cost: 90 },
        { time: '12:30', content: '真不同洛阳水席午餐', spotId: '', foodId: '', cost: 120 },
        { time: '14:30', content: '龙门石窟东山石窟+香山寺', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '洛浦公园夜景+老城十字街晚餐', spotId: '', foodId: '', cost: 80 }
      ], hotel: '洛阳酒店，250-400元/晚', transport: '公交', cost: 290 },
      { day: 2, title: '白马寺·释源祖庭', schedule: [
        { time: '08:30', content: '白马寺（中国第一古刹）', spotId: 'luoyang-baima', foodId: '', cost: 35 },
        { time: '12:30', content: '马杰牛肉汤+锅贴', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '洛阳博物馆（东汉石辟邪+唐三彩黑釉马）', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '河洛古城晚餐', spotId: '', foodId: '', cost: 80 }
      ], hotel: '洛阳酒店，250-400元/晚', transport: '公交', cost: 175 },
      { day: 3, title: '牡丹花会·隋唐城', schedule: [
        { time: '08:30', content: '中国国花园（牡丹花会）', spotId: 'luoyang-peony', foodId: '', cost: 60 },
        { time: '12:30', content: '洛阳真不同水席宴', spotId: '', foodId: '', cost: 150 },
        { time: '14:30', content: '隋唐洛阳城国家遗址公园', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '应天门灯光秀+明堂天堂', spotId: '', foodId: '', cost: 100 }
      ], hotel: '', transport: '公交+步行', cost: 360 }
    ],
    tips: ['牡丹花会4月1日至5月5日', '龙门石窟门票90元，需预约', '白马寺35元，含国际佛殿区', '洛阳水席24道菜，真不同最正宗', '应天门有灯光秀表演'],
    bestSeason: '4月牡丹花会、9月金秋',
    highlights: ['龙门石窟石刻', '白马寺禅宗祖庭', '牡丹花会盛况']
  },

  // ---- 开封 (1篇) ----
  {
    id: 'kaifeng-guide-3days', cityId: 'kaifeng', title: '开封3日·大宋东京·菊花水城', days: 3,
    cover: 'kaifeng-qingming',
    summary: '清明上河园、铁塔、包公祠，菊花盛宴，宋韵风情。',
    budget: { min: 1200, max: 2500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '公交+景区步行',
    itinerary: [
      { day: 1, title: '清明上河园·大宋风情', schedule: [
        { time: '08:30', content: '清明上河园（东京梦华表演）', spotId: 'kaifeng-qingming', foodId: '', cost: 100 },
        { time: '12:30', content: '开封第一楼灌汤包午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '开封府+包公祠', spotId: 'kaifeng-baogong', foodId: '', cost: 30 },
        { time: '19:00', content: '东京梦华大型实景演出', spotId: '', foodId: '', cost: 200 }
      ], hotel: '开封酒店，200-350元/晚', transport: '公交', cost: 410 },
      { day: 2, title: '铁塔·古城漫游', schedule: [
        { time: '08:30', content: '铁塔公园（宋代开宝寺灵感塔）', spotId: 'kaifeng-tieta', foodId: '', cost: 50 },
        { time: '12:30', content: '又一新糖醋软熘鲤鱼焙面', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '龙亭公园（北宋皇宫遗址）', spotId: '', foodId: '', cost: 35 },
        { time: '19:00', content: '大宋御河夜游+西司夜市', spotId: '', foodId: '', cost: 60 }
      ], hotel: '开封酒店，200-350元/晚', transport: '公交', cost: 225 },
      { day: 3, title: '菊花·美食开封', schedule: [
        { time: '08:30', content: '禹王台公园（菊花展）', spotId: '', foodId: '', cost: 20 },
        { time: '12:30', content: '开封小吃（桶子鸡+凉粉+锅贴）', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '山陕甘会馆+相国寺', spotId: '', foodId: '', cost: 25 },
        { time: '19:00', content: '西司夜市美食告别', spotId: '', foodId: '', cost: 60 }
      ], hotel: '', transport: '步行+公交', cost: 185 }
    ],
    tips: ['清明上河园门票100元，东京梦华演出200元', '菊花会10-11月举办', '开封小吃：灌汤包+桶子鸡+鲤鱼焙面', '西司夜市是开封夜市代表', '龙亭公园有菊花展'],
    bestSeason: '4月、10-11月菊花',
    highlights: ['清明上河园宋韵', '铁塔千年古迹', '开封夜市美食']
  },

  // ---- 南昌 (1篇) ----
  {
    id: 'nanchang-guide-3days', cityId: 'nanchang', title: '南昌3日·豫章故郡·英雄之城', days: 3,
    cover: 'nanchang-tengwang',
    summary: '滕王勃序、秋水共长天、八一军旗、瓦罐汤香。',
    budget: { min: 1000, max: 2200, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁+公交',
    itinerary: [
      { day: 1, title: '滕王阁·秋水长天', schedule: [
        { time: '08:30', content: '滕王勃序+背诵免门票', spotId: 'nanchang-tengwang', foodId: '', cost: 50 },
        { time: '12:30', content: '绳金塔拌粉+瓦罐汤午餐', spotId: '', foodId: 'nanchang-waguan', cost: 30 },
        { time: '14:30', content: '秋水广场（音乐喷泉）', spotId: 'nanchang-qianshan', foodId: '', cost: 0 },
        { time: '19:00', content: '红谷滩夜景+摩天轮晚餐', spotId: '', foodId: '', cost: 80 }
      ], hotel: '南昌酒店，200-350元/晚', transport: '地铁1号线', cost: 160 },
      { day: 2, title: '八一军旗·英雄城', schedule: [
        { time: '08:30', content: '八一起义纪念馆（需预约）', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '南昌米粉+瓦罐汤', spotId: '', foodId: 'nanchang-waguan', cost: 40 },
        { time: '14:30', content: '八一广场+八一纪念塔', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '绳金塔美食街晚餐', spotId: 'nanchang-shengjin', foodId: '', cost: 100 }
      ], hotel: '南昌酒店，200-350元/晚', transport: '地铁', cost: 140 },
      { day: 3, title: '古镇婺源·自然生态', schedule: [
        { time: '07:00', content: '乘高铁赴婺源（约1小时）', spotId: '', foodId: '', cost: 100 },
        { time: '09:30', content: '婺源篁岭晒秋', spotId: '', foodId: '', cost: 140 },
        { time: '12:30', content: '婺源粉蒸鱼+清明果', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '婺源江岭油菜花', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '返回南昌，绳金塔晚餐', spotId: '', foodId: 'nanchang-waguan', cost: 60 }
      ], hotel: '', transport: '高铁+景区大巴', cost: 380 }
    ],
    tips: ['滕王勃序背诵全文免门票', '秋水广场喷泉每晚8点', '南昌瓦罐汤是特色小吃', '婺源春季油菜花最美', '八一起义纪念馆需预约'],
    bestSeason: '3-4月、9-11月',
    highlights: ['滕王勃序', '秋水共长天', '八一英雄城']
  },

  // ---- 武当山 (1篇) ----
  {
    id: 'wudangshan-guide-3days', cityId: 'wudangshan', title: '武当山3日·道教圣地·金顶云海', days: 3,
    cover: 'wudangshan-jinding',
    summary: '武当金顶云海、紫霄宫道教宫观、南岩宫悬空奇景。',
    budget: { min: 1800, max: 4000, currency: 'CNY', note: '含住宿、餐饮、门票、索道' },
    transport: '景区大巴+索道',
    itinerary: [
      { day: 1, title: '金顶·云海日出', schedule: [
        { time: '06:00', content: '景区大巴至南岩宫+索道上金顶', spotId: 'wudangshan-jinding', foodId: '', cost: 210 },
        { time: '09:00', content: '金顶游览：金殿+观景台+日出', spotId: '', foodId: '', cost: 0 },
        { time: '12:00', content: '金顶紫霄宫素斋', spotId: '', foodId: '', cost: 60 },
        { time: '14:00', content: '大岳太和宫+南岩宫', spotId: 'wudangshan-nanyan', foodId: '', cost: 0 },
        { time: '19:00', content: '山下丹江口晚餐+住宿', spotId: '', foodId: '', cost: 200 }
      ], hotel: '武当山宾馆，400-700元/晚', transport: '景区大巴+索道', cost: 470 },
      { day: 2, title: '紫霄宫·道教修炼', schedule: [
        { time: '08:30', content: '紫霄宫（道教祖庭）', spotId: 'wudangshan-zixiao', foodId: '', cost: 0 },
        { time: '12:30', content: '山下武当山道家斋菜', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '逍遥谷（张三丰练功处）', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '武当山功夫表演', spotId: '', foodId: '', cost: 50 }
      ], hotel: '武当山宾馆，400-700元/晚', transport: '景区大巴+步行', cost: 130 },
      { day: 3, title: '太子坡·南岩宫', schedule: [
        { time: '08:30', content: '太子坡（复真观）', spotId: '', foodId: '', cost: 0 },
        { time: '10:30', content: '南岩宫（龙首石悬空）', spotId: 'wudangshan-nanyan', foodId: '', cost: 30 },
        { time: '12:30', content: '武当山道家宴席', spotId: '', foodId: '', cost: 120 },
        { time: '14:30', content: '玉虚宫遗址', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '离开武当山', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '景区大巴', cost: 150 }
    ],
    tips: ['门票140元+景区大巴100元+索道上行90元', '金顶住宿紧张，务必提前预订', '武当山海拔1612米，带厚外套', '金顶日出建议夏季5点到达', '紫霄宫道教法事可参与'],
    bestSeason: '5-10月',
    highlights: ['金顶云海日出', '紫霄宫道教祖庭', '南岩宫龙首石']
  },

  // ---- 张家界 (2篇) ----
  {
    id: 'zhangjiajie-guide-3days', cityId: 'zhangjiajie', title: '张家界3日·阿凡达仙境', days: 3,
    cover: 'zhangjiajie-wulingyuan',
    summary: '武陵源袁家界、天子山、天门山玻璃栈道，阿凡达取景地。',
    budget: { min: 2200, max: 4500, currency: 'CNY', note: '含住宿、餐饮、门票、索道' },
    transport: '景区大巴+索道',
    itinerary: [
      { day: 1, title: '袁家界·阿凡达取景', schedule: [
        { time: '07:30', content: '武陵源门票站入园+环保车至袁家界', spotId: 'zhangjiajie-wulingyuan', foodId: '', cost: 228 },
        { time: '09:00', content: '袁家界：哈利路亚山+迷魂台+后花园', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '山顶餐厅盒饭', spotId: '', foodId: '', cost: 50 },
        { time: '14:30', content: '杨家界+天子山（云青岩+贺龙公园）', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '山上住宿或下山至武陵源', spotId: '', foodId: '', cost: 300 }
      ], hotel: '山上客栈，400-600元/晚', transport: '景区环保车', cost: 578 },
      { day: 2, title: '金鞭溪·天门山', schedule: [
        { time: '07:00', content: '金鞭溪徒步（7.5公里）', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '山下三下锅湘西菜', spotId: '', foodId: '', cost: 80 },
        { time: '14:00', content: '天门山索道+玻璃栈道', spotId: 'zhangjiajie-tianmenshan', foodId: '', cost: 278 },
        { time: '19:00', content: '天门山天门洞夜景', spotId: '', foodId: '', cost: 0 }
      ], hotel: '张家界酒店，300-500元/晚', transport: '景区索道+环保车', cost: 358 },
      { day: 3, title: '大峡谷·玻璃桥', schedule: [
        { time: '08:00', content: '张家界大峡谷+玻璃桥', spotId: 'zhangjiajie-glassbridge', foodId: '', cost: 258 },
        { time: '12:30', content: '大峡谷出口三下锅', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '大庸古城+土家风情园', spotId: '', foodId: '', cost: 100 },
        { time: '19:00', content: '张家界夜景告别', spotId: '', foodId: '', cost: 80 }
      ], hotel: '', transport: '公交+景区车', cost: 498 }
    ],
    tips: ['武陵源门票228元（含3天环保车）', '天门山门票278元（含索道）', '玻璃桥需提前预约', '山上住宿比山下贵1倍', '三下锅是张家界特色'],
    bestSeason: '4-10月',
    highlights: ['袁家界阿凡达山', '天门山玻璃栈道', '大峡谷玻璃桥']
  },
  {
    id: 'zhangjiajie-guide-5days', cityId: 'zhangjiajie', title: '张家界5日·深度湘西·凤凰古城', days: 5,
    cover: 'zhangjiajie-tianmenshan',
    summary: '武陵源+天门山+大峡谷+凤凰古城，5天深度湘西山水人文。',
    budget: { min: 3500, max: 7000, currency: 'CNY', note: '含住宿、餐饮、门票、高铁' },
    transport: '景区环保车+索道+高铁',
    itinerary: [
      { day: 1, title: '袁家界·天子山', schedule: [
        { time: '07:30', content: '武陵源入园+袁家界哈利路亚山', spotId: 'zhangjiajie-wulingyuan', foodId: '', cost: 228 },
        { time: '12:30', content: '山顶餐厅午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '天子山+贺龙公园', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '山上客栈住宿', spotId: '', foodId: '', cost: 300 }
      ], hotel: '山上客栈，400-600元/晚', transport: '景区环保车', cost: 588 },
      { day: 2, title: '金鞭溪·十里画廊', schedule: [
        { time: '07:00', content: '金鞭溪徒步', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '山下三下锅', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '十里画廊（小火车）', spotId: '', foodId: '', cost: 40 },
        { time: '19:00', content: '张家界酒店住宿', spotId: '', foodId: '', cost: 300 }
      ], hotel: '张家界酒店，300-500元/晚', transport: '景区环保车', cost: 420 },
      { day: 3, title: '天门山·玻璃栈道', schedule: [
        { time: '07:00', content: '天门山索道+玻璃栈道+天门洞', spotId: 'zhangjiajie-tianmenshan', foodId: '', cost: 278 },
        { time: '12:30', content: '天门山快餐', spotId: '', foodId: '', cost: 50 },
        { time: '14:30', content: '大庸古城+土家风情园', spotId: '', foodId: '', cost: 100 },
        { time: '19:00', content: '张家界酒店住宿', spotId: '', foodId: '', cost: 300 }
      ], hotel: '张家界酒店，300-500元/晚', transport: '索道+环保车', cost: 728 },
      { day: 4, title: '大峡谷·玻璃桥·凤凰', schedule: [
        { time: '08:00', content: '张家界大峡谷+玻璃桥', spotId: 'zhangjiajie-glassbridge', foodId: '', cost: 258 },
        { time: '12:30', content: '三下锅', spotId: '', foodId: '', cost: 60 },
        { time: '15:00', content: '乘高铁赴凤凰古城（约2.5小时）', spotId: '', foodId: '', cost: 200 },
        { time: '19:00', content: '凤凰古城沱江夜景', spotId: '', foodId: '', cost: 0 }
      ], hotel: '凤凰古城客栈，300-500元/晚', transport: '高铁+打车', cost: 518 },
      { day: 5, title: '凤凰·沈从文故里', schedule: [
        { time: '08:30', content: '凤凰古城漫游+沈从文故居', spotId: '', foodId: '', cost: 50 },
        { time: '12:30', content: '凤凰血粑鸭午餐', spotId: '', foodId: '', cost: 100 },
        { time: '14:30', content: '虹桥+万名塔+万寿宫', spotId: '', foodId: '', cost: 30 },
        { time: '19:00', content: '离开凤凰', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '步行', cost: 180 }
    ],
    tips: ['武陵源门票3天有效', '天门山需全天游览', '玻璃桥需实名预约', '凤凰古城高铁至铜仁', '三下锅+葛根粉是特色'],
    bestSeason: '4-10月',
    highlights: ['阿凡达取景地', '天门山玻璃栈道', '凤凰古城']
  },

  // ---- 凤凰古城 (1篇) ----
  {
    id: 'fenghuang-guide-3days', cityId: 'fenghuang', title: '凤凰3日·沈从文的边城', days: 3,
    cover: 'fenghuang-ancient',
    summary: '沱江穿城而过，吊脚楼依水而建，沈从文笔下的边城。',
    budget: { min: 1500, max: 3000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '高铁+步行+游船',
    itinerary: [
      { day: 1, title: '古城漫游·沱江夜景', schedule: [
        { time: '09:00', content: '凤凰古城入口+沈从文故居', spotId: 'fenghuang-ancient', foodId: '', cost: 0 },
        { time: '12:30', content: '虹桥美食午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '沱江游船+吊脚楼', spotId: 'fenghuang-tuo', foodId: '', cost: 60 },
        { time: '19:00', content: '沱江夜景+篝火晚会', spotId: '', foodId: '', cost: 50 }
      ], hotel: '凤凰古城客栈，300-600元/晚', transport: '步行+游船', cost: 190 },
      { day: 2, title: '南华山·苗族风情', schedule: [
        { time: '08:30', content: '南华山国家森林公园', spotId: 'fenghuang-nanhua', foodId: '', cost: 50 },
        { time: '12:30', content: '苗族酸汤鱼午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '凤凰古城博物馆+万寿宫', spotId: '', foodId: '', cost: 30 },
        { time: '19:00', content: '沱江夜景+酒吧', spotId: '', foodId: '', cost: 100 }
      ], hotel: '凤凰古城客栈，300-600元/晚', transport: '步行', cost: 260 },
      { day: 3, title: '奇梁洞·南方长城', schedule: [
        { time: '08:30', content: '奇梁洞（喀斯特溶洞）', spotId: '', foodId: '', cost: 100 },
        { time: '12:30', content: '凤凰血粑鸭午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '南方长城（中国南方唯一长城）', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '离开凤凰', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '包车+公交', cost: 230 }
    ],
    tips: ['古城免费，部分景点收费', '沱江游船60元/人', '吊脚楼客栈体验最佳', '苗族银饰注意辨别真伪', '凤凰姜糖是特色伴手礼'],
    bestSeason: '3-5月、9-11月',
    highlights: ['沱江吊脚楼', '沈从文故居', '南方长城']
  },

  // ---- 婺源 (1篇) ----
  {
    id: 'wuyuan-guide-3days', cityId: 'wuyuan', title: '婺源3日·中国最美乡村', days: 3,
    cover: 'wuyuan-huangling',
    summary: '篁岭晒秋、江岭油菜、思溪古村，徽州文化乡村。',
    budget: { min: 1200, max: 2500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '高铁+景区大巴',
    itinerary: [
      { day: 1, title: '篁岭·晒秋人家', schedule: [
        { time: '07:00', content: '乘高铁赴婺源（约1小时）', spotId: '', foodId: '', cost: 60 },
        { time: '09:00', content: '篁岭古村（晒秋+油菜花）', spotId: 'wuyuan-huangling', foodId: '', cost: 140 },
        { time: '12:30', content: '徽州粉蒸鱼+清明果', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '篁岭天街+玻璃栈道', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '婺源民宿入住', spotId: '', foodId: '', cost: 200 }
      ], hotel: '婺源民宿，300-500元/晚', transport: '高铁+索道', cost: 480 },
      { day: 2, title: '江岭·油菜花海', schedule: [
        { time: '07:30', content: '江岭油菜花梯田', spotId: 'wuyuan-jiangling', foodId: '', cost: 60 },
        { time: '12:30', content: '婺源农家菜', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '晓起古村+李坑', spotId: '', foodId: '', cost: 80 },
        { time: '19:00', content: '婺源民宿住宿', spotId: '', foodId: '', cost: 200 }
      ], hotel: '婺源民宿，300-500元/晚', transport: '景区大巴', cost: 400 },
      { day: 3, title: '思溪·延村', schedule: [
        { time: '08:30', content: '思溪延村（徽派古建）', spotId: 'wuyuan-sixi', foodId: '', cost: 30 },
        { time: '12:30', content: '婺源粉蒸鱼+荷包红鲤鱼', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '彩虹桥+理坑', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '离开婺源', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '景区大巴', cost: 160 }
    ],
    tips: ['春季油菜花3-4月最美', '篁岭门票145元（含索道）', '江岭免费，需景区大巴', '徽州古建筑精美', '粉蒸鱼+清明果必尝'],
    bestSeason: '3-4月油菜花、10-11月晒秋',
    highlights: ['篁岭晒秋', '江岭油菜花海', '徽派古建']
  },

  // ==================== 华南 (12篇) ====================

  // ---- 广州 (2篇) ----
  {
    id: 'guangzhou-guide-3days', cityId: 'guangzhou', title: '广州3日·花城骑楼美食行', days: 3,
    cover: 'guangzhou-tianhe',
    summary: '广州塔小蛮腰、沙面岛骑楼、陈家祠岭南文化、早茶文化。',
    budget: { min: 1500, max: 3500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁发达，APM线直达广州塔',
    itinerary: [
      { day: 1, title: '广州塔·珠江夜游', schedule: [
        { time: '08:30', content: '广州塔（小蛮腰）观光', spotId: 'guangzhou-tianhe', foodId: '', cost: 150 },
        { time: '12:30', content: '陶陶居早茶+虾饺烧卖', spotId: '', foodId: 'guangzhou-dimsum', cost: 100 },
        { time: '14:30', content: '沙面岛（欧陆风情骑楼）', spotId: 'guangzhou-shamian', foodId: '', cost: 0 },
        { time: '19:00', content: '珠江夜游+北京路美食', spotId: '', foodId: 'guangzhou-seafood', cost: 200 }
      ], hotel: '广州酒店，300-500元/晚', transport: '地铁+APM', cost: 450 },
      { day: 2, title: '陈家祠·岭南文化', schedule: [
        { time: '08:30', content: '陈家祠（岭南建筑瑰宝）', spotId: 'guangzhou-chenjia', foodId: '', cost: 20 },
        { time: '12:30', content: '点都德早茶+白切鸡', spotId: '', foodId: 'guangzhou-chicken', cost: 80 },
        { time: '14:30', content: '广东省博物馆+花城广场', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '珠江新城夜景+潮州牛肉火锅', spotId: '', foodId: '', cost: 150 }
      ], hotel: '广州酒店，300-500元/晚', transport: '地铁', cost: 250 },
      { day: 3, title: '上下九·美食广州', schedule: [
        { time: '09:00', content: '上下九步行街+骑楼街', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '广州早茶（莲香楼）', spotId: '', foodId: 'guangzhou-dimsum', cost: 100 },
        { time: '14:30', content: '越秀公园+西汉南越王博物馆', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '广州美食告别（白切鸡+海鲜）', spotId: '', foodId: 'guangzhou-seafood', cost: 200 }
      ], hotel: '', transport: '地铁+步行', cost: 300 }
    ],
    tips: ['早茶文化建议去陶陶居/莲香楼', '广州塔门票150元，含摩天轮', '沙面岛免费，骑楼拍照圣地', '珠江夜游80-150元', '地铁日票20元'],
    bestSeason: '10月-次年4月',
    highlights: ['广州塔小蛮腰', '沙面岛骑楼', '陈家祠岭南文化']
  },
  {
    id: 'guangzhou-guide-5days', cityId: 'guangzhou', title: '广州5日·岭南文化深度游', days: 5,
    cover: 'guangzhou-chenjia',
    summary: '广州塔+沙面岛+陈家祠+长隆野生动物园，5天深度岭南文化。',
    budget: { min: 3000, max: 6000, currency: 'CNY', note: '含住宿、餐饮、门票、长隆' },
    transport: '地铁+长隆接驳车',
    itinerary: [
      { day: 1, title: '广州塔·珠江夜游', schedule: [
        { time: '08:30', content: '广州塔观光', spotId: 'guangzhou-tianhe', foodId: '', cost: 150 },
        { time: '12:30', content: '陶陶居早茶', spotId: '', foodId: 'guangzhou-dimsum', cost: 100 },
        { time: '14:30', content: '花城广场+广东省博物馆', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '珠江夜游+潮州牛肉火锅', spotId: '', foodId: '', cost: 180 }
      ], hotel: '广州酒店，350-550元/晚', transport: '地铁+APM', cost: 430 },
      { day: 2, title: '陈家祠·沙面岛', schedule: [
        { time: '08:30', content: '陈家祠（岭南建筑）', spotId: 'guangzhou-chenjia', foodId: '', cost: 20 },
        { time: '12:30', content: '点都德早茶', spotId: '', foodId: 'guangzhou-chicken', cost: 80 },
        { time: '14:30', content: '沙面岛+上下九', spotId: 'guangzhou-shamian', foodId: '', cost: 0 },
        { time: '19:00', content: '老城区美食晚餐', spotId: '', foodId: 'guangzhou-seafood', cost: 150 }
      ], hotel: '广州酒店，350-550元/晚', transport: '地铁', cost: 250 },
      { day: 3, title: '长隆·野生动物园', schedule: [
        { time: '09:00', content: '长隆野生动物园（步行+缆车+小火车）', spotId: '', foodId: '', cost: 300 },
        { time: '12:30', content: '园区内午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '继续游览+动物表演', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '返回广州市区，海鲜晚餐', spotId: '', foodId: 'guangzhou-seafood', cost: 120 }
      ], hotel: '广州酒店，350-550元/晚', transport: '长隆接驳车', cost: 480 },
      { day: 4, title: '越秀·南越王博物馆', schedule: [
        { time: '08:30', content: '越秀公园+五羊石像', spotId: '', foodId: '', cost: 0 },
        { time: '10:30', content: '西汉南越王博物馆', spotId: '', foodId: '', cost: 12 },
        { time: '12:30', content: '莲香楼早茶', spotId: '', foodId: 'guangzhou-dimsum', cost: 100 },
        { time: '14:30', content: '北京路步行街+千年古道', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '珠江夜景+粤菜晚餐', spotId: '', foodId: 'guangzhou-chicken', cost: 180 }
      ], hotel: '广州酒店，350-550元/晚', transport: '地铁+步行', cost: 472 },
      { day: 5, title: '美食·购物告别', schedule: [
        { time: '09:00', content: '上下九步行街+骑楼', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '广州早茶+粤菜', spotId: '', foodId: 'guangzhou-dimsum', cost: 150 },
        { time: '14:30', content: '正佳广场+天河城购物', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '广州美食告别晚宴', spotId: '', foodId: 'guangzhou-seafood', cost: 200 }
      ], hotel: '', transport: '地铁', cost: 350 }
    ],
    tips: ['长隆300元，建议提前一天订票', '早茶推荐陶陶居/莲香楼/点都德', '陈家祠20元，博物馆多免费', '广州夏季炎热，注意防晒', '地铁日票20元'],
    bestSeason: '10月-次年4月',
    highlights: ['广州塔珠江夜景', '长隆野生动物园', '陈家祠岭南文化', '沙面岛骑楼', '广州早茶文化']
  },

  // ---- 深圳 (2篇) ----
  {
    id: 'shenzhen-guide-3days', cityId: 'shenzhen', title: '深圳3日·创新之城·主题乐园', days: 3,
    cover: 'shenzhen-bay',
    summary: '世界之窗主题乐园、深圳湾海滨、华侨城创新文化。',
    budget: { min: 2000, max: 4500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁+滨海大道公交',
    itinerary: [
      { day: 1, title: '世界之窗·主题乐园', schedule: [
        { time: '09:00', content: '世界之窗（世界名胜微缩）', spotId: 'shenzhen-worldwindow', foodId: '', cost: 220 },
        { time: '12:30', content: '园区内中式午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '欢乐谷（紧邻世界之窗）', spotId: '', foodId: '', cost: 230 },
        { time: '19:00', content: '福田CBD夜景+潮州牛肉火锅', spotId: '', foodId: '', cost: 150 }
      ], hotel: '深圳酒店，400-700元/晚', transport: '地铁1号线', cost: 660 },
      { day: 2, title: '深圳湾·海滨休闲', schedule: [
        { time: '09:00', content: '深圳湾公园（海滨栈道+红树林）', spotId: 'shenzhen-bay', foodId: '', cost: 0 },
        { time: '12:30', content: '蛇口海上世界海鲜午餐', spotId: '', foodId: 'guangzhou-seafood', cost: 120 },
        { time: '14:30', content: '华侨城OCT-LOFT创意园', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '莲花山公园夜景+潮州牛肉火锅', spotId: '', foodId: '', cost: 120 }
      ], hotel: '深圳酒店，400-700元/晚', transport: '地铁+海滨公交', cost: 240 },
      { day: 3, title: '小梅沙·华侨城', schedule: [
        { time: '09:00', content: '小梅沙海滨（沙滩+海洋馆）', spotId: 'shenzhen-xiaomeisha', foodId: '', cost: 150 },
        { time: '12:30', content: '大鹏所城海鲜午餐', spotId: '', foodId: 'guangzhou-seafood', cost: 100 },
        { time: '14:30', content: '东部华侨城（茶溪谷+大峡谷）', spotId: '', foodId: '', cost: 180 },
        { time: '19:00', content: '深圳湾夜景告别', spotId: '', foodId: '', cost: 150 }
      ], hotel: '', transport: '公交+景区大巴', cost: 580 }
    ],
    tips: ['世界之窗220元，建议全天', '小梅沙夏季有水上乐园', '深圳湾公园免费，观鸟胜地', '东部华侨城适合家庭游', '地铁通八达，非常方便'],
    bestSeason: '10月-次年4月',
    highlights: ['世界之窗+欢乐谷', '深圳湾海滨', '东部华侨城']
  },
  {
    id: 'shenzhen-guide-5days', cityId: 'shenzhen', title: '深圳5日·创新都市·主题乐园全攻略', days: 5,
    cover: 'shenzhen-worldwindow',
    summary: '世界之窗+欢乐谷+小梅沙+东部华侨城，5天玩转深圳主题乐园。',
    budget: { min: 4000, max: 8000, currency: 'CNY', note: '含全部主题乐园门票' },
    transport: '地铁+景区大巴',
    itinerary: [
      { day: 1, title: '世界之窗·欢乐谷', schedule: [
        { time: '09:00', content: '世界之窗全天', spotId: 'shenzhen-worldwindow', foodId: '', cost: 220 },
        { time: '12:30', content: '园区午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '欢乐谷（紧邻）', spotId: '', foodId: '', cost: 230 },
        { time: '19:00', content: '福田CBD夜景', spotId: '', foodId: '', cost: 150 }
      ], hotel: '深圳酒店，450-700元/晚', transport: '地铁1号线', cost: 660 },
      { day: 2, title: '深圳湾·蛇口', schedule: [
        { time: '09:00', content: '深圳湾公园', spotId: 'shenzhen-bay', foodId: '', cost: 0 },
        { time: '12:30', content: '蛇口海上世界午餐', spotId: '', foodId: 'guangzhou-seafood', cost: 120 },
        { time: '14:30', content: '华侨城LOFT创意园', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '莲花山公园夜景', spotId: '', foodId: '', cost: 120 }
      ], hotel: '深圳酒店，450-700元/晚', transport: '地铁', cost: 240 },
      { day: 3, title: '小梅沙·东部华侨城', schedule: [
        { time: '09:00', content: '小梅沙海洋世界', spotId: 'shenzhen-xiaomeisha', foodId: '', cost: 150 },
        { time: '12:30', content: '大鹏所城午餐', spotId: '', foodId: 'guangzhou-seafood', cost: 100 },
        { time: '14:30', content: '东部华侨城大峡谷', spotId: '', foodId: '', cost: 180 },
        { time: '19:00', content: '深圳湾夜景', spotId: '', foodId: '', cost: 150 }
      ], hotel: '深圳酒店，450-700元/晚', transport: '公交', cost: 580 },
      { day: 4, title: '观澜湖·高尔夫', schedule: [
        { time: '09:00', content: '观澜湖高尔夫球会（参观）', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '观澜湖度假酒店午餐', spotId: '', foodId: '', cost: 150 },
        { time: '14:30', content: '观澜湖温泉度假村', spotId: '', foodId: '', cost: 200 },
        { time: '19:00', content: '福田CBD晚餐', spotId: '', foodId: '', cost: 180 }
      ], hotel: '深圳酒店，450-700元/晚', transport: '地铁+打车', cost: 530 },
      { day: 5, title: '购物·美食告别', schedule: [
        { time: '09:00', content: '华强北电子市场', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '潮汕牛肉火锅', spotId: '', foodId: '', cost: 120 },
        { time: '14:30', content: '万象城+海岸城购物', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '深圳湾夜景告别', spotId: '', foodId: 'guangzhou-seafood', cost: 200 }
      ], hotel: '', transport: '地铁', cost: 320 }
    ],
    tips: ['世界之窗+欢乐谷套票更划算', '东部华侨城分茶溪谷+大峡谷', '小梅沙夏季水上乐园开放', '观澜湖高尔夫需预约', '深圳湾红树林观鸟'],
    bestSeason: '10月-次年4月',
    highlights: ['主题乐园集群', '深圳湾海滨', '华侨城创意园', '东部华侨城', '观澜湖']
  },

  // ---- 珠海 (1篇) ----
  {
    id: 'zhuhai-guide-3days', cityId: 'zhuhai', title: '珠海3日·百岛之市·长隆海洋王国', days: 3,
    cover: 'zhuhai-chimelong',
    summary: '长隆海洋王国、情侣路海滨、外伶仃岛海岛风光。',
    budget: { min: 2500, max: 5000, currency: 'CNY', note: '含住宿、餐饮、长隆门票' },
    transport: '长隆接驳车+公交',
    itinerary: [
      { day: 1, title: '长隆海洋王国', schedule: [
        { time: '09:30', content: '长隆海洋王国全天', spotId: 'zhuhai-chimelong', foodId: '', cost: 395 },
        { time: '12:30', content: '园区内主题餐厅', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '企鹅馆+鲸鲨馆+海豚湾', spotId: '', foodId: '', cost: 0 },
        { time: '19:30', content: '烟花幻彩横琴海表演', spotId: '', foodId: '', cost: 0 }
      ], hotel: '珠海长隆酒店，800-1500元/晚', transport: '长隆接驳车', cost: 475 },
      { day: 2, title: '情侣路·海滨休闲', schedule: [
        { time: '09:00', content: '情侣路海滨+珠海渔女', spotId: 'zhuhai-lovers', foodId: '', cost: 0 },
        { time: '12:30', content: '湾仔海鲜街午餐', spotId: '', foodId: 'guangzhou-seafood', cost: 100 },
        { time: '14:30', content: '野狸岛海滨公园+日月贝大剧院', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '拱北步行街晚餐', spotId: '', foodId: '', cost: 80 }
      ], hotel: '珠海酒店，300-500元/晚', transport: '公交', cost: 180 },
      { day: 3, title: '外伶仃岛·海岛游', schedule: [
        { time: '08:00', content: '乘船赴外伶仃岛（约1.5小时）', spotId: '', foodId: '', cost: 120 },
        { time: '10:00', content: '外伶仃岛海滩+钓鱼+潜水', spotId: 'zhuhai-wailingding', foodId: '', cost: 0 },
        { time: '12:30', content: '岛上海鲜午餐', spotId: '', foodId: 'guangzhou-seafood', cost: 100 },
        { time: '14:30', content: '返回珠海', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '珠海夜景告别', spotId: '', foodId: '', cost: 100 }
      ], hotel: '', transport: '船班+打车', cost: 320 }
    ],
    tips: ['长隆395元，建议提前一天订票', '外伶仃岛船班需查时刻表', '情侣路全程28公里，可租单车', '珠海渔女是地标', '湾仔海鲜街价格公道'],
    bestSeason: '10月-次年4月',
    highlights: ['长隆海洋王国', '情侣路海滨', '外伶仃岛海岛风光']
  },

  // ---- 桂林 (1篇) ----
  {
    id: 'guilin-guide-3days', cityId: 'guilin', title: '桂林3日·山水甲天下·漓江游', days: 3,
    cover: 'guilin-lijiang',
    summary: '漓江山水画廊、象鼻山、两江四湖，喀斯特地貌精华。',
    budget: { min: 1800, max: 3800, currency: 'CNY', note: '含住宿、餐饮、门票、船票' },
    transport: '漓江游船+公交',
    itinerary: [
      { day: 1, title: '漓江·山水画廊', schedule: [
        { time: '08:00', content: '漓江游船（竹江-阳朔段，约4小时）', spotId: 'guilin-lijiang', foodId: '', cost: 215 },
        { time: '12:30', content: '游船上自助餐', spotId: '', foodId: '', cost: 50 },
        { time: '14:30', content: '阳朔西街漫游', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '返回桂林，正阳步行街晚餐', spotId: '', foodId: '', cost: 80 }
      ], hotel: '桂林酒店，300-500元/晚', transport: '游船+大巴', cost: 345 },
      { day: 2, title: '象鼻山·两江四湖', schedule: [
        { time: '08:30', content: '象鼻山公园（桂林地标）', spotId: 'guilin-xiangbi', foodId: '', cost: 55 },
        { time: '12:30', content: '桂林米粉午餐', spotId: '', foodId: 'guilin-mifen', cost: 20 },
        { time: '14:30', content: '两江四湖（榕湖+杉湖+桂湖+木龙湖）', spotId: 'guilin-liangjiang', foodId: '', cost: 190 },
        { time: '19:00', content: '两江四湖夜游+桂林美食', spotId: '', foodId: '', cost: 100 }
      ], hotel: '桂林酒店，300-500元/晚', transport: '公交+步行', cost: 365 },
      { day: 3, title: '龙脊梯田·壮乡', schedule: [
        { time: '07:00', content: '乘车赴龙脊梯田（约2.5小时）', spotId: '', foodId: '', cost: 50 },
        { time: '10:00', content: '金坑大寨梯田+平安壮族梯田', spotId: '', foodId: '', cost: 100 },
        { time: '12:30', content: '壮乡竹筒饭', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '返回桂林', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '桂林三花酒+漓江啤酒鱼', spotId: '', foodId: '', cost: 100 }
      ], hotel: '', transport: '大巴+景区车', cost: 310 }
    ],
    tips: ['漓江游船215元，含船餐', '两江四湖夜游190元', '象鼻山55元，是桂林地标', '龙脊梯田秋季最美', '桂林米粉是早餐灵魂'],
    bestSeason: '3-5月、9-11月',
    highlights: ['漓江山水画廊', '象鼻山地标', '两江四湖夜游']
  },

  // ---- 阳朔 (1篇) ----
  {
    id: 'yangshuo-guide-3days', cityId: 'yangshuo', title: '阳朔3日·西街洋人街·遇龙河', days: 3,
    cover: 'yangshuo-west',
    summary: '阳朔西街、遇龙河竹筏、十里画廊骑行，浪漫小城。',
    budget: { min: 1500, max: 3200, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '高铁+竹筏+单车',
    itinerary: [
      { day: 1, title: '西街·洋人街', schedule: [
        { time: '09:00', content: '阳朔西街（洋人街+中西合璧建筑）', spotId: 'yangshuo-west', foodId: '', cost: 0 },
        { time: '12:30', content: '阳朔啤酒鱼+桂林米粉', spotId: '', foodId: 'guilin-mifen', cost: 80 },
        { time: '14:30', content: '印象·刘三姐（大型实景演出）', spotId: '', foodId: '', cost: 188 },
        { time: '19:30', content: '西街酒吧+异国美食', spotId: '', foodId: '', cost: 100 }
      ], hotel: '阳朔酒店，300-500元/晚', transport: '步行', cost: 368 },
      { day: 2, title: '遇龙河·竹筏漂流', schedule: [
        { time: '08:00', content: '遇龙河竹筏漂流（金龙桥-旧县段）', spotId: 'yangshuo-yulong', foodId: '', cost: 180 },
        { time: '12:30', content: '农家午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '十里画廊骑行（月亮山+大榕树）', spotId: 'yangshuo-shili', foodId: '', cost: 40 },
        { time: '19:00', content: '西街美食晚餐', spotId: '', foodId: '', cost: 80 }
      ], hotel: '阳朔酒店，300-500元/晚', transport: '竹筏+单车', cost: 360 },
      { day: 3, title: '龙脊·十里画廊', schedule: [
        { time: '08:00', content: '十里画廊骑行（遇龙河畔）', spotId: 'yangshuo-shili', foodId: '', cost: 40 },
        { time: '12:30', content: '阳朔特色午餐', spotId: '', foodId: 'guilin-mifen', cost: 80 },
        { time: '14:30', content: '图腾古道+聚龙潭', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '离开阳朔', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '单车+公交', cost: 170 }
    ],
    tips: ['印象刘三姐188元，建议B区以上', '遇龙河竹筏180元，两人一筏', '十里画廊骑行免费', '西街异国美食丰富', '阳朔啤酒鱼是特色'],
    bestSeason: '3-5月、9-11月',
    highlights: ['阳朔西街', '遇龙河竹筏', '印象·刘三姐']
  },

  // ---- 南宁 (1篇) ----
  {
    id: 'nanning-guide-3days', cityId: 'nanning', title: '南宁3日·绿城邕江·东盟风情', days: 3,
    cover: 'nanning-qingxiu',
    summary: '青秀山、邕江夜游、中山路美食、东盟博览会。',
    budget: { min: 1000, max: 2200, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁+公交',
    itinerary: [
      { day: 1, title: '青秀山·绿城生态', schedule: [
        { time: '08:30', content: '青秀山（东南亚风情园+龙象塔）', spotId: 'nanning-qingxiu', foodId: '', cost: 30 },
        { time: '12:30', content: '中山路老友粉午餐', spotId: '', foodId: 'nanning-youyou', cost: 20 },
        { time: '14:30', content: '南宁国际会展中心+东盟商务区', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '邕江夜游+中山路夜市', spotId: 'nanning-yongjiang', foodId: '', cost: 80 }
      ], hotel: '南宁酒店，200-400元/晚', transport: '地铁1号线', cost: 130 },
      { day: 2, title: '中山路·美食南宁', schedule: [
        { time: '09:00', content: '中山路历史文化街区', spotId: 'nanning-zhongshan', foodId: '', cost: 0 },
        { time: '12:30', content: '南宁小吃（老友粉+柠檬鸭）', spotId: '', foodId: 'nanning-youyou', cost: 50 },
        { time: '14:30', content: '广西博物馆（铜鼓文化）', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '中山路夜市+邕江夜景', spotId: '', foodId: '', cost: 100 }
      ], hotel: '南宁酒店，200-400元/晚', transport: '地铁', cost: 150 },
      { day: 3, title: '德天瀑布·中越边境', schedule: [
        { time: '07:00', content: '乘大巴赴德天瀑布（约2.5小时）', spotId: '', foodId: '', cost: 50 },
        { time: '10:00', content: '德天跨国大瀑布', spotId: '', foodId: '', cost: 80 },
        { time: '12:30', content: '中越边境越南小吃', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '返回南宁', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '南宁老友粉告别晚餐', spotId: '', foodId: 'nanning-youyou', cost: 50 }
      ], hotel: '', transport: '大巴', cost: 240 }
    ],
    tips: ['老友粉是南宁特色，中山路最正宗', '青秀山30元，绿城代表', '德天瀑布80元，中越边境', '邕江夜景可乘船', '夏季炎热，避雨防晒'],
    bestSeason: '10月-次年4月',
    highlights: ['青秀山绿城', '中山路美食', '德天瀑布跨国']
  },

  // ---- 三亚 (2篇) ----
  {
    id: 'sanya-guide-3days', cityId: 'sanya', title: '三亚3日·海岛度假·阳光沙滩', days: 3,
    cover: 'sanya-yalongbay',
    summary: '亚龙湾、天涯海角、蜈支洲岛，碧海蓝天椰林。',
    budget: { min: 2500, max: 5500, currency: 'CNY', note: '含住宿、餐饮、门票、船票' },
    transport: '公交+船班',
    itinerary: [
      { day: 1, title: '亚龙湾·沙滩日光', schedule: [
        { time: '09:00', content: '亚龙湾海滩（沙滩+海水浴）', spotId: 'sanya-yalongbay', foodId: '', cost: 0 },
        { time: '12:30', content: '亚龙湾酒店海鲜自助午餐', spotId: '', foodId: 'guangzhou-seafood', cost: 200 },
        { time: '14:30', content: '蝴蝶谷+亚龙湾热带森林公园', spotId: '', foodId: '', cost: 60 },
        { time: '19:00', content: '三亚湾海鲜晚餐+椰林夜景', spotId: '', foodId: '', cost: 150 }
      ], hotel: '三亚酒店，500-1000元/晚', transport: '公交', cost: 410 },
      { day: 2, title: '蜈支洲岛·潜水', schedule: [
        { time: '08:00', content: '蜈支洲岛（船票+潜水+环岛）', spotId: 'sanya-wuzhizhou', foodId: '', cost: 168 },
        { time: '12:30', content: '岛上海鲜自助午餐', spotId: '', foodId: '', cost: 150 },
        { time: '14:30', content: '环岛观光车+情人桥', spotId: '', foodId: '', cost: 80 },
        { time: '19:00', content: '返回三亚，海鲜大餐', spotId: '', foodId: 'guangzhou-seafood', cost: 200 }
      ], hotel: '三亚酒店，500-1000元/晚', transport: '船班+公交', cost: 598 },
      { day: 3, title: '天涯海角·南山寺', schedule: [
        { time: '09:00', content: '天涯海角公园（海滩+石刻）', spotId: 'sanya-tianya', foodId: '', cost: 68 },
        { time: '12:30', content: '天涯海角海鲜午餐', spotId: '', foodId: 'guangzhou-seafood', cost: 120 },
        { time: '14:30', content: '南山寺（海上观音）', spotId: '', foodId: '', cost: 129 },
        { time: '19:00', content: '三亚湾落日+海鲜告别', spotId: '', foodId: '', cost: 150 }
      ], hotel: '', transport: '公交', cost: 467 }
    ],
    tips: ['蜈支洲岛168元含船票，潜水另付', '亚龙湾沙滩免费', '天涯海角68元，打卡必去', '南山寺129元，海上观音壮观', '冬季是三亚最佳季节'],
    bestSeason: '10月-次年4月',
    highlights: ['亚龙湾沙滩', '蜈支洲岛潜水', '天涯海角']
  },
  {
    id: 'sanya-guide-5days', cityId: 'sanya', title: '三亚5日·海岛深度·度假休闲', days: 5,
    cover: 'sanya-tianya',
    summary: '亚龙湾+蜈支洲岛+天涯海角+南山+分界洲岛，5天完美海岛假期。',
    budget: { min: 4500, max: 10000, currency: 'CNY', note: '含全部景点门票' },
    transport: '公交+船班+打车',
    itinerary: [
      { day: 1, title: '亚龙湾·海滩日光', schedule: [
        { time: '09:00', content: '亚龙湾海滩全天', spotId: 'sanya-yalongbay', foodId: '', cost: 0 },
        { time: '12:30', content: '亚龙湾酒店自助午餐', spotId: '', foodId: 'guangzhou-seafood', cost: 200 },
        { time: '14:30', content: '蝴蝶谷+热带森林公园', spotId: '', foodId: '', cost: 60 },
        { time: '19:00', content: '三亚湾海鲜晚餐', spotId: '', foodId: '', cost: 150 }
      ], hotel: '三亚酒店，600-1200元/晚', transport: '公交', cost: 410 },
      { day: 2, title: '蜈支洲岛·潜水', schedule: [
        { time: '08:00', content: '蜈支洲岛（船票+潜水）', spotId: 'sanya-wuzhizhou', foodId: '', cost: 168 },
        { time: '12:30', content: '岛上午餐', spotId: '', foodId: '', cost: 100 },
        { time: '14:30', content: '环岛观光车', spotId: '', foodId: '', cost: 80 },
        { time: '19:00', content: '三亚湾海鲜大餐', spotId: '', foodId: 'guangzhou-seafood', cost: 200 }
      ], hotel: '三亚酒店，600-1200元/晚', transport: '船班', cost: 548 },
      { day: 3, title: '天涯海角·南山', schedule: [
        { time: '09:00', content: '天涯海角公园', spotId: 'sanya-tianya', foodId: '', cost: 68 },
        { time: '12:30', content: '天涯海角午餐', spotId: '', foodId: '', cost: 100 },
        { time: '14:30', content: '南山寺（海上观音）', spotId: '', foodId: '', cost: 129 },
        { time: '19:00', content: '三亚湾椰林晚餐', spotId: '', foodId: '', cost: 150 }
      ], hotel: '三亚酒店，600-1200元/晚', transport: '公交', cost: 447 },
      { day: 4, title: '分界洲岛·陵水', schedule: [
        { time: '08:00', content: '分界洲岛（船票+浮潜）', spotId: '', foodId: '', cost: 168 },
        { time: '12:30', content: '陵水海鲜午餐', spotId: '', foodId: 'guangzhou-seafood', cost: 120 },
        { time: '14:30', content: '南湾猴岛（索道+岛上观光）', spotId: '', foodId: '', cost: 154 },
        { time: '19:00', content: '返回三亚，海鲜晚餐', spotId: '', foodId: '', cost: 180 }
      ], hotel: '三亚酒店，600-1200元/晚', transport: '船班+公交', cost: 622 },
      { day: 5, title: '三亚湾·购物告别', schedule: [
        { time: '09:00', content: '三亚湾椰林长廊+落日', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '第一市场海鲜加工午餐', spotId: '', foodId: 'guangzhou-seafood', cost: 150 },
        { time: '14:30', content: 'CDF离岛免税购物', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '三亚湾告别晚餐', spotId: '', foodId: '', cost: 200 }
      ], hotel: '', transport: '公交+打车', cost: 350 }
    ],
    tips: ['蜈支洲岛浮潜需会游泳', '南山寺海上观音必看', '分界洲岛人少水清', '三亚湾落日最美', '免税购物满16岁享免税'],
    bestSeason: '10月-次年4月',
    highlights: ['三亚湾落日', '蜈支洲岛潜水', '南山寺海上观音', '天涯海角', '免税购物']
  },

  // ==================== 西南 (16篇) ====================

  // ---- 成都 (2篇) ----
  {
    id: 'chengdu-guide-3days', cityId: 'chengdu', title: '成都3日·熊猫川菜·休闲之都', days: 3,
    cover: 'chengdu-panda',
    summary: '大熊猫繁育基地、宽窄巷子、都江堰、川菜美食。',
    budget: { min: 1500, max: 3500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁+景区大巴',
    itinerary: [
      { day: 1, title: '熊猫基地·都江堰', schedule: [
        { time: '07:30', content: '大熊猫繁育研究基地（上午熊猫最活跃）', spotId: 'chengdu-panda', foodId: '', cost: 58 },
        { time: '12:30', content: '宽窄巷子小吃午餐', spotId: 'chengdu-kuanzhai', foodId: 'chengdu-hotpot', cost: 100 },
        { time: '14:00', content: '乘高铁赴都江堰（约30分钟）', spotId: '', foodId: '', cost: 10 },
        { time: '15:00', content: '都江堰水利工程（世界遗产）', spotId: 'chengdu-dujiangyan', foodId: '', cost: 80 },
        { time: '19:00', content: '返回成都，锦里古街晚餐', spotId: '', foodId: 'chengdu-hotpot', cost: 150 }
      ], hotel: '成都酒店，250-450元/晚', transport: '地铁+高铁', cost: 398 },
      { day: 2, title: '宽窄巷子·川菜美食', schedule: [
        { time: '09:00', content: '宽窄巷子（老成都文化）', spotId: 'chengdu-kuanzhai', foodId: '', cost: 0 },
        { time: '12:30', content: '陈麻婆豆腐+夫妻肺片午餐', spotId: '', foodId: 'chengdu-mapodoufu', cost: 80 },
        { time: '14:30', content: '武侯祠+锦里古街', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '川菜晚餐（水煮鱼+回锅肉）', spotId: '', foodId: 'chengdu-hotpot', cost: 150 }
      ], hotel: '成都酒店，250-450元/晚', transport: '地铁+步行', cost: 280 },
      { day: 3, title: '东郊记忆·美食购物', schedule: [
        { time: '09:00', content: '东郊记忆（文艺创意园）', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '成都小吃（赖汤圆+龙抄手）', spotId: '', foodId: 'chengdu-mapodoufu', cost: 60 },
        { time: '14:30', content: '春熙路+太古里购物', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '川剧变脸+火锅晚餐', spotId: '', foodId: 'chengdu-hotpot', cost: 200 }
      ], hotel: '', transport: '地铁', cost: 260 }
    ],
    tips: ['熊猫基地58元，7-8月最活跃', '都江堰80元，世界遗产', '宽窄巷子免费', '火锅+川剧是成都标配', '地铁日票10元'],
    bestSeason: '3-6月、9-11月',
    highlights: ['大熊猫基地', '都江堰水利', '宽窄巷子美食']
  },
  {
    id: 'chengdu-guide-5days', cityId: 'chengdu', title: '成都5日·川西人文·美食深度', days: 5,
    cover: 'chengdu-kuanzhai',
    summary: '熊猫+都江堰+青城山+乐山+川菜，5天深度成都之旅。',
    budget: { min: 3000, max: 6000, currency: 'CNY', note: '含乐山高铁往返' },
    transport: '地铁+高铁+景区大巴',
    itinerary: [
      { day: 1, title: '熊猫基地·都江堰', schedule: [
        { time: '07:30', content: '大熊猫繁育研究基地', spotId: 'chengdu-panda', foodId: '', cost: 58 },
        { time: '12:30', content: '宽窄巷子午餐', spotId: 'chengdu-kuanzhai', foodId: 'chengdu-hotpot', cost: 80 },
        { time: '14:00', content: '高铁都江堰', spotId: '', foodId: '', cost: 10 },
        { time: '15:00', content: '都江堰水利工程', spotId: 'chengdu-dujiangyan', foodId: '', cost: 80 },
        { time: '19:00', content: '返回成都，锦里古街晚餐', spotId: '', foodId: 'chengdu-hotpot', cost: 150 }
      ], hotel: '成都酒店，300-500元/晚', transport: '地铁+高铁', cost: 378 },
      { day: 2, title: '青城山·道教名山', schedule: [
        { time: '07:00', content: '高铁赴青城山（约30分钟）', spotId: '', foodId: '', cost: 10 },
        { time: '09:00', content: '青城山（前山+后山）', spotId: '', foodId: '', cost: 80 },
        { time: '12:30', content: '山上道家素斋', spotId: '', foodId: '', cost: 50 },
        { time: '14:30', content: '下山+泰安古镇', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '返回成都，火锅晚餐', spotId: '', foodId: 'chengdu-hotpot', cost: 180 }
      ], hotel: '成都酒店，300-500元/晚', transport: '高铁+景区车', cost: 370 },
      { day: 3, title: '乐山·峨眉山', schedule: [
        { time: '07:00', content: '高铁赴乐山（约1小时）', spotId: '', foodId: '', cost: 50 },
        { time: '09:00', content: '乐山大佛（东方佛都）', spotId: '', foodId: '', cost: 80 },
        { time: '12:30', content: '乐山跷脚牛肉', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '乘船看大佛全景', spotId: '', foodId: '', cost: 70 },
        { time: '19:00', content: '返回成都，川菜晚餐', spotId: '', foodId: 'chengdu-mapodoufu', cost: 150 }
      ], hotel: '成都酒店，300-500元/晚', transport: '高铁+船班', cost: 410 },
      { day: 4, title: '宽窄巷子·美食文化', schedule: [
        { time: '09:00', content: '宽窄巷子+杜甫草堂', spotId: 'chengdu-kuanzhai', foodId: '', cost: 50 },
        { time: '12:30', content: '陈麻婆豆腐午餐', spotId: '', foodId: 'chengdu-mapodoufu', cost: 80 },
        { time: '14:30', content: '武侯祠+锦里古街', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '川剧变脸+火锅', spotId: '', foodId: 'chengdu-hotpot', cost: 200 }
      ], hotel: '成都酒店，300-500元/晚', transport: '地铁', cost: 380 },
      { day: 5, title: '东郊记忆·购物告别', schedule: [
        { time: '09:00', content: '东郊记忆+四川博物院', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '成都小吃午餐', spotId: '', foodId: 'chengdu-mapodoufu', cost: 80 },
        { time: '14:30', content: '春熙路+太古里购物', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '火锅告别晚餐', spotId: '', foodId: 'chengdu-hotpot', cost: 200 }
      ], hotel: '', transport: '地铁', cost: 280 }
    ],
    tips: ['青城山80元，道家祖庭', '乐山大佛80元+船票70元', '都江堰+青城山可买联票', '熊猫基地上午熊猫最活跃', '火锅必点毛肚+鸭肠'],
    bestSeason: '3-6月、9-11月',
    highlights: ['大熊猫基地', '都江堰+青城山', '乐山大佛', '宽窄巷子', '川剧变脸火锅']
  },

  // ---- 重庆 (2篇) ----
  {
    id: 'chongqing-guide-3days', cityId: 'chongqing', title: '重庆3日·8D魔幻·火锅之都', days: 3,
    cover: 'chongqing-hongyadong',
    summary: '洪崖洞、长江索道、磁器口古镇、重庆火锅。',
    budget: { min: 1500, max: 3500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '轻轨+索道+步行',
    itinerary: [
      { day: 1, title: '洪崖洞·8D魔幻', schedule: [
        { time: '09:00', content: '洪崖洞（千与千寻取景）', spotId: 'chongqing-hongyadong', foodId: '', cost: 0 },
        { time: '12:30', content: '解放碑美食+重庆小面', spotId: '', foodId: 'chongqing-hotpot', cost: 80 },
        { time: '14:30', content: '长江索道（新华路-上新街）', spotId: 'chongqing-suoyi', foodId: '', cost: 20 },
        { time: '19:00', content: '南山一棵树观夜景+火锅', spotId: '', foodId: 'chongqing-hotpot', cost: 200 }
      ], hotel: '重庆酒店，250-450元/晚', transport: '轻轨+索道', cost: 300 },
      { day: 2, title: '磁器口·古镇文化', schedule: [
        { time: '09:00', content: '磁器口古镇（青石板路+茶馆）', spotId: 'chongqing-ciqikou', foodId: '', cost: 0 },
        { time: '12:30', content: '古镇毛血旺+重庆小面', spotId: '', foodId: 'chongqing-hotpot', cost: 80 },
        { time: '14:30', content: '白公馆+渣滓洞', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '朝天门两江夜景+火锅', spotId: '', foodId: 'chongqing-hotpot', cost: 200 }
      ], hotel: '重庆酒店，250-450元/晚', transport: '轻轨+步行', cost: 280 },
      { day: 3, title: '武隆·天坑地缝', schedule: [
        { time: '07:00', content: '乘大巴赴武隆（约3小时）', spotId: '', foodId: '', cost: 100 },
        { time: '11:00', content: '武隆天生三桥（变形金刚取景）', spotId: '', foodId: '', cost: 120 },
        { time: '12:30', content: '武隆乌江鱼午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '龙水峡地缝', spotId: '', foodId: '', cost: 115 },
        { time: '19:00', content: '返回重庆，火锅告别', spotId: '', foodId: 'chongqing-hotpot', cost: 150 }
      ], hotel: '', transport: '大巴+景区车', cost: 565 }
    ],
    tips: ['长江索道20元单程，20分钟', '洪崖洞免费，夜景最佳', '磁器口古镇免费', '武隆天生三桥120元', '重庆火锅必点毛血旺'],
    bestSeason: '3-5月、9-11月',
    highlights: ['洪崖洞8D夜景', '长江索道', '武隆天坑地缝']
  },
  {
    id: 'chongqing-guide-5days', cityId: 'chongqing', title: '重庆5日·魔幻山城·深度游', days: 5,
    cover: 'chongqing-ciqikou',
    summary: '洪崖洞+磁器口+武隆+大足石刻，5天深度魔幻山城。',
    budget: { min: 3000, max: 6000, currency: 'CNY', note: '含大足石刻往返' },
    transport: '轻轨+大巴+索道',
    itinerary: [
      { day: 1, title: '洪崖洞·长江索道', schedule: [
        { time: '09:00', content: '洪崖洞', spotId: 'chongqing-hongyadong', foodId: '', cost: 0 },
        { time: '12:30', content: '解放碑午餐', spotId: '', foodId: 'chongqing-hotpot', cost: 80 },
        { time: '14:30', content: '长江索道+南山一棵树', spotId: 'chongqing-suoyi', foodId: '', cost: 30 },
        { time: '19:00', content: '两江夜游+火锅', spotId: '', foodId: 'chongqing-hotpot', cost: 200 }
      ], hotel: '重庆酒店，300-500元/晚', transport: '轻轨+索道', cost: 310 },
      { day: 2, title: '磁器口·白公馆', schedule: [
        { time: '09:00', content: '磁器口古镇', spotId: 'chongqing-ciqikou', foodId: '', cost: 0 },
        { time: '12:30', content: '古镇午餐', spotId: '', foodId: 'chongqing-hotpot', cost: 80 },
        { time: '14:30', content: '白公馆+渣滓洞+红岩', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '朝天门两江夜景', spotId: '', foodId: 'chongqing-hotpot', cost: 200 }
      ], hotel: '重庆酒店，300-500元/晚', transport: '轻轨', cost: 280 },
      { day: 3, title: '武隆·天生三桥', schedule: [
        { time: '07:00', content: '大巴赴武隆', spotId: '', foodId: '', cost: 100 },
        { time: '11:00', content: '天生三桥+地缝', spotId: '', foodId: '', cost: 235 },
        { time: '12:30', content: '武隆午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '仙女山国家森林公园', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '返回重庆', spotId: '', foodId: 'chongqing-hotpot', cost: 150 }
      ], hotel: '重庆酒店，300-500元/晚', transport: '大巴', cost: 615 },
      { day: 4, title: '大足石刻·世界遗产', schedule: [
        { time: '07:00', content: '大巴赴大足石刻（约2小时）', spotId: '', foodId: '', cost: 80 },
        { time: '09:30', content: '大足宝顶山石刻+北山石刻', spotId: '', foodId: '', cost: 140 },
        { time: '12:30', content: '大足冬菜+邮亭鲫鱼', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '返回重庆', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '重庆火锅晚餐', spotId: '', foodId: 'chongqing-hotpot', cost: 200 }
      ], hotel: '重庆酒店，300-500元/晚', transport: '大巴', cost: 500 },
      { day: 5, title: '鹅岭·购物告别', schedule: [
        { time: '09:00', content: '鹅岭公园+鹅岭二厂文创园', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '重庆小面+酸辣粉', spotId: '', foodId: 'chongqing-hotpot', cost: 80 },
        { time: '14:30', content: '解放碑+观音桥购物', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '重庆火锅告别晚餐', spotId: '', foodId: 'chongqing-hotpot', cost: 200 }
      ], hotel: '', transport: '轻轨', cost: 280 }
    ],
    tips: ['大足石刻140元，世界遗产', '武隆天生三桥120元', '长江索道建议早上', '重庆地形复杂，导航易错', '重庆小面是早餐灵魂'],
    bestSeason: '3-5月、9-11月',
    highlights: ['洪崖洞+长江索道', '武隆天坑地缝', '大足石刻', '磁器口古镇', '重庆火锅']
  },

  // ---- 昆明 (1篇) ----
  {
    id: 'kunming-guide-3days', cityId: 'kunming', title: '昆明3日·春城石林·滇池海鸥', days: 3,
    cover: 'kunming-dianchi',
    summary: '石林世界遗产、滇池红嘴鸥、翠湖春城、过桥米线。',
    budget: { min: 1500, max: 3200, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '高铁+公交',
    itinerary: [
      { day: 1, title: '石林·世界遗产', schedule: [
        { time: '07:00', content: '高铁赴石林（约40分钟）', spotId: '', foodId: '', cost: 60 },
        { time: '09:00', content: '石林风景区（大石林+小石林）', spotId: 'kunming-shilin', foodId: '', cost: 130 },
        { time: '12:30', content: '石林彝族午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '返回昆明', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '昆明老街+过桥米线', spotId: '', foodId: 'kunming-mixian', cost: 120 }
      ], hotel: '昆明酒店，250-450元/晚', transport: '高铁+景区车', cost: 370 },
      { day: 2, title: '滇池·红嘴鸥', schedule: [
        { time: '09:00', content: '滇池海埂大坝（11月-次年3月看红嘴鸥）', spotId: 'kunming-dianchi', foodId: '', cost: 10 },
        { time: '12:30', content: '篆新农贸市场小吃', spotId: '', foodId: 'kunming-mixian', cost: 50 },
        { time: '14:30', content: '翠湖公园+讲武堂', spotId: 'kunming-cuihu', foodId: '', cost: 0 },
        { time: '19:00', content: '南屏步行街+野生菌火锅', spotId: '', foodId: '', cost: 150 }
      ], hotel: '昆明酒店，250-450元/晚', transport: '公交', cost: 210 },
      { day: 3, title: '世博园·民族村', schedule: [
        { time: '09:00', content: '昆明世博园（花卉博览）', spotId: '', foodId: '', cost: 100 },
        { time: '12:30', content: '云南过桥米线', spotId: '', foodId: 'kunming-mixian', cost: 80 },
        { time: '14:30', content: '云南民族村（25个民族风情）', spotId: '', foodId: '', cost: 90 },
        { time: '19:00', content: '昆明夜景告别', spotId: '', foodId: '', cost: 80 }
      ], hotel: '', transport: '公交', cost: 350 }
    ],
    tips: ['石林130元，含景区车', '滇池红嘴鸥11月-次年3月', '翠湖公园免费', '过桥米线推荐建新园', '昆明四季如春'],
    bestSeason: '11月-次年4月',
    highlights: ['石林世界遗产', '滇池红嘴鸥', '春城昆明']
  },

  // ---- 大理 (1篇) ----
  {
    id: 'dali-guide-3days', cityId: 'dali', title: '大理3日·苍山洱海·风花雪月', days: 3,
    cover: 'dali-erhai',
    summary: '洱海环线、苍山索道、大理古城、崇圣寺三塔。',
    budget: { min: 2000, max: 4200, currency: 'CNY', note: '含住宿、餐饮、门票、租车' },
    transport: '高铁+租车+索道',
    itinerary: [
      { day: 1, title: '洱海·环湖骑行', schedule: [
        { time: '07:00', content: '乘高铁赴大理（约2小时）', spotId: '', foodId: '', cost: 145 },
        { time: '10:00', content: '租电动车环湖（约65公里）', spotId: 'dali-erhai', foodId: '', cost: 80 },
        { time: '12:30', content: '喜洲古镇白族午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '环海西路+海舌公园', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '大理古城夜生活', spotId: 'dali-ancient', foodId: '', cost: 80 }
      ], hotel: '大理客栈，400-600元/晚', transport: '高铁+租车', cost: 365 },
      { day: 2, title: '苍山·崇圣寺', schedule: [
        { time: '08:00', content: '苍山感通索道+洗马潭大索道', spotId: '', foodId: '', cost: 115 },
        { time: '12:30', content: '苍山饭店白族土菜', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '崇圣寺三塔（大理标志）', spotId: 'dali-santa', foodId: '', cost: 75 },
        { time: '19:00', content: '大理古城洋人街', spotId: 'dali-ancient', foodId: '', cost: 100 }
      ], hotel: '大理客栈，400-600元/晚', transport: '索道+打车', cost: 350 },
      { day: 3, title: '双廊·挖色', schedule: [
        { time: '08:00', content: '双廊古镇（海景客栈）', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '双廊鱼庄洱海鱼', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '挖色镇+小普陀', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '离开大理', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '打车+公交', cost: 130 }
    ],
    tips: ['洱海环湖电动车80元/天', '苍山索道115元往返', '崇圣寺三塔75元', '大理古城免费', '风花雪月是大理意境'],
    bestSeason: '4-6月、9-11月',
    highlights: ['洱海环线', '苍山雪洱海月', '崇圣寺三塔']
  },

  // ---- 丽江 (1篇) ----
  {
    id: 'lijiang-guide-3days', cityId: 'lijiang', title: '丽江3日·古城雪山·纳西风情', days: 3,
    cover: 'lijiang-oldtown',
    summary: '丽江古城、玉龙雪山、束河古镇、泸沽湖。',
    budget: { min: 2200, max: 4500, currency: 'CNY', note: '含住宿、餐饮、门票、索道' },
    transport: '高铁+景区大巴+索道',
    itinerary: [
      { day: 1, title: '玉龙雪山·蓝月谷', schedule: [
        { time: '07:00', content: '乘高铁赴丽江（约3小时）', spotId: '', foodId: '', cost: 220 },
        { time: '11:00', content: '玉龙雪山（大索道+4680米观景台）', spotId: 'lijiang-yulong', foodId: '', cost: 130 },
        { time: '12:30', content: '蓝月谷午餐', spotId: '', foodId: '', cost: 50 },
        { time: '14:30', content: '蓝月谷+印象丽江', spotId: '', foodId: '', cost: 300 },
        { time: '19:00', content: '丽江古城酒吧街', spotId: 'lijiang-oldtown', foodId: '', cost: 150 }
      ], hotel: '丽江客栈，300-500元/晚', transport: '高铁+景区车', cost: 850 },
      { day: 2, title: '束河·白沙古镇', schedule: [
        { time: '09:00', content: '束河古镇（比丽江古城安静）', spotId: 'lijiang-shuhe', foodId: '', cost: 40 },
        { time: '12:30', content: '束河纳西家宴', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '白沙古镇+玉龙雪山实景', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '丽江古城夜景', spotId: 'lijiang-oldtown', foodId: '', cost: 100 }
      ], hotel: '丽江客栈，300-500元/晚', transport: '公交', cost: 200 },
      { day: 3, title: '泸沽湖·摩梭人', schedule: [
        { time: '07:00', content: '乘车赴泸沽湖（约3.5小时）', spotId: '', foodId: '', cost: 70 },
        { time: '11:00', content: '泸沽湖游船+摩梭人家访', spotId: '', foodId: '', cost: 160 },
        { time: '12:30', content: '泸沽湖鱼宴', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '返回丽江', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '离开丽江', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '大巴+游船', cost: 310 }
    ],
    tips: ['玉龙雪山索道+门票130元，需抢票', '印象丽江300元，张艺谋导演', '丽江古城维护费50元', '泸沽湖摩梭族走婚文化', '束河比丽江清静'],
    bestSeason: '4-6月、9-11月',
    highlights: ['玉龙雪山', '丽江古城', '泸沽湖摩梭风情']
  },

  // ---- 香格里拉 (1篇) ----
  {
    id: 'shangrila-guide-3days', cityId: 'shangrila', title: '香格里拉3日·普达措·松赞林寺', days: 3,
    cover: 'shangrila-pudacuo',
    summary: '普达措国家公园、松赞林寺、独克宗古城、纳帕海。',
    budget: { min: 2500, max: 5000, currency: 'CNY', note: '含住宿、餐饮、门票、大巴' },
    transport: '大巴+景区车',
    itinerary: [
      { day: 1, title: '普达措·国家公园', schedule: [
        { time: '07:00', content: '乘车赴普达措（约4小时）', spotId: '', foodId: '', cost: 150 },
        { time: '12:00', content: '普达措国家公园（属都湖+碧塔海）', spotId: 'shangrila-pudacuo', foodId: '', cost: 138 },
        { time: '12:30', content: '景区内午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '独克宗古城（世界最大转经筒）', spotId: 'shangrila-dukezong', foodId: '', cost: 0 },
        { time: '19:00', content: '香格里拉藏家宴', spotId: '', foodId: '', cost: 150 }
      ], hotel: '香格里拉酒店，300-500元/晚', transport: '大巴+景区车', cost: 498 },
      { day: 2, title: '松赞林寺·纳帕海', schedule: [
        { time: '08:30', content: '松赞林寺（小布达拉宫）', spotId: 'shangrila-songzhan', foodId: '', cost: 90 },
        { time: '12:30', content: '藏式自助餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '纳帕海依拉草原', spotId: '', foodId: '', cost: 30 },
        { time: '19:00', content: '独克宗古城夜景+藏餐', spotId: '', foodId: '', cost: 150 }
      ], hotel: '香格里拉酒店，300-500元/晚', transport: '包车', cost: 350 },
      { day: 3, title: '白马雪山·返回', schedule: [
        { time: '08:00', content: '白马雪山垭口（4292米）', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '奔子栏藏家午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '返回丽江/香格里拉', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '离开香格里拉', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '包车', cost: 60 }
    ],
    tips: ['普达措138元+景区车', '松赞林寺90元，有"小布达拉宫"之称', '香格里拉海拔3300米，注意高反', '独克宗古城有世界最大转经筒', '5-7月草原最美'],
    bestSeason: '5-7月草原、10月金秋',
    highlights: ['普达措国家公园', '松赞林寺', '纳帕海草原']
  },

  // ---- 九寨沟 (1篇) ----
  {
    id: 'jiuzhai-guide-3days', cityId: 'jiuzhai', title: '九寨沟3日·童话世界·人间仙境', days: 3,
    cover: 'jiuzhai-canghai',
    summary: '五彩池、诺日朗瀑布、长海，人间仙境。',
    budget: { min: 2500, max: 5000, currency: 'CNY', note: '含住宿、餐饮、门票、大巴' },
    transport: '大巴+景区观光车',
    itinerary: [
      { day: 1, title: '九寨沟·树正沟', schedule: [
        { time: '07:00', content: '乘大巴赴九寨沟（约4小时）', spotId: '', foodId: '', cost: 200 },
        { time: '13:00', content: '九寨沟口入住酒店', spotId: '', foodId: '', cost: 400 },
        { time: '18:00', content: '酒店晚餐', spotId: '', foodId: '', cost: 100 },
        { time: '19:30', content: '藏羌风情晚会', spotId: '', foodId: '', cost: 150 }
      ], hotel: '九寨沟酒店，500-800元/晚', transport: '大巴', cost: 850 },
      { day: 2, title: '日则沟·则查洼沟', schedule: [
        { time: '07:00', content: '九寨沟景区观光车入园', spotId: '', foodId: '', cost: 169 },
        { time: '09:00', content: '日则沟：诺日朗瀑布→熊猫海→五花海', spotId: 'jiuzhai-nuorilang', foodId: '', cost: 0 },
        { time: '12:30', content: '诺日朗中心站午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '则查洼沟：五彩池→长海', spotId: 'jiuzhai-canghai', foodId: '', cost: 0 },
        { time: '19:00', content: '酒店晚餐', spotId: '', foodId: '', cost: 100 }
      ], hotel: '九寨沟酒店，500-800元/晚', transport: '景区观光车', cost: 329 },
      { day: 3, title: '树正沟·出口', schedule: [
        { time: '07:00', content: '树正沟：犀牛海→树正瀑布→火花海', spotId: 'jiuzhai-changhai', foodId: '', cost: 0 },
        { time: '12:30', content: '口午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '乘大巴返回成都', spotId: '', foodId: '', cost: 200 },
        { time: '19:00', content: '离开九寨沟', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '景区车+大巴', cost: 260 }
    ],
    tips: ['九寨沟门票169元，含3天观光车', '景区内禁止吸烟', '海拔2000-3000米，注意防晒', '9月金秋最美', '诺日朗瀑布86版西游记取景'],
    bestSeason: '9-10月金秋、4-5月春季',
    highlights: ['五彩池', '诺日朗瀑布', '长海', '五花海']
  },

  // ---- 稻城 (1篇) ----
  {
    id: 'daocheng-guide-3days', cityId: 'daocheng', title: '稻城3日·亚丁三神山·蓝色星球', days: 3,
    cover: 'daocheng-yading',
    summary: '稻城亚丁仙乃日、央迈勇、夏诺多吉三神山。',
    budget: { min: 3000, max: 6000, currency: 'CNY', note: '含住宿、餐饮、门票、大巴' },
    transport: '大巴+景区车+骑马',
    itinerary: [
      { day: 1, title: '稻城·红草地', schedule: [
        { time: '07:00', content: '乘大巴赴稻城（约8小时）', spotId: '', foodId: '', cost: 400 },
        { time: '16:00', content: '稻城红草地+傍河塔林', spotId: 'daocheng-redgrass', foodId: '', cost: 0 },
        { time: '18:30', content: '稻城酒店入住', spotId: '', foodId: '', cost: 400 },
        { time: '19:30', content: '酒店晚餐', spotId: '', foodId: '', cost: 100 }
      ], hotel: '稻城酒店，400-700元/晚', transport: '大巴', cost: 900 },
      { day: 2, title: '亚丁·牛奶海', schedule: [
        { time: '07:00', content: '景区车赴亚丁村', spotId: 'daocheng-yading', foodId: '', cost: 270 },
        { time: '10:00', content: '冲古寺+珍珠海', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '洛绒牛场午餐', spotId: '', foodId: '', cost: 50 },
        { time: '14:30', content: '骑马/徒步赴牛奶海', spotId: 'daocheng-milksea', foodId: '', cost: 300 },
        { time: '19:00', content: '返回稻城', spotId: '', foodId: '', cost: 100 }
      ], hotel: '稻城酒店，400-700元/晚', transport: '景区车+骑马', cost: 1020 },
      { day: 3, title: '稻城·返回', schedule: [
        { time: '07:00', content: '稻城草场+贡嘎雪山观景台', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '稻城午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '乘大巴返回成都', spotId: '', foodId: '', cost: 400 },
        { time: '19:00', content: '离开稻城', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '大巴', cost: 460 }
    ],
    tips: ['稻城亚丁270元含景区车', '牛奶海骑马300元，徒步5小时', '海拔4000+米，注意高反', '10月红草地最美', '建议带氧气瓶'],
    bestSeason: '9-10月金秋',
    highlights: ['稻城红草地', '亚丁牛奶海', '仙乃日神山']
  },

  // ---- 峨眉山 (1篇) ----
  {
    id: 'emeishan-guide-3days', cityId: 'emeishan', title: '峨眉山3日·金顶云海·乐山大佛', days: 3,
    cover: 'emeishan-jinding',
    summary: '峨眉山金顶、乐山大佛、清音阁，普贤菩萨道场。',
    budget: { min: 2000, max: 4000, currency: 'CNY', note: '含住宿、餐饮、门票、索道' },
    transport: '高铁+景区大巴+索道',
    itinerary: [
      { day: 1, title: '峨眉山·金顶', schedule: [
        { time: '07:00', content: '乘高铁赴峨眉山（约1.5小时）', spotId: '', foodId: '', cost: 65 },
        { time: '09:00', content: '景区大巴至雷洞坪+索道上金顶', spotId: 'emeishan-jinding', foodId: '', cost: 185 },
        { time: '12:30', content: '金顶素斋', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '金顶云海+日出', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '山下住宿', spotId: '', foodId: '', cost: 300 }
      ], hotel: '峨眉山酒店，400-700元/晚', transport: '高铁+索道', cost: 610 },
      { day: 2, title: '清音阁·猴区', schedule: [
        { time: '08:30', content: '清音阁+一线天+生态猴区', spotId: 'emeishan-qingyin', foodId: '', cost: 0 },
        { time: '12:30', content: '峨眉山素斋午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '万年寺+报国寺', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '峨眉山市酒店', spotId: '', foodId: '', cost: 200 }
      ], hotel: '峨眉山酒店，400-700元/晚', transport: '景区大巴', cost: 260 },
      { day: 3, title: '乐山大佛·东方佛都', schedule: [
        { time: '07:00', content: '乘高铁赴乐山（约30分钟）', spotId: '', foodId: '', cost: 25 },
        { time: '08:30', content: '乐山大佛（乘船观全景）', spotId: 'emeishan-leshan', foodId: '', cost: 160 },
        { time: '12:30', content: '乐山跷脚牛肉', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '东方佛都+麻浩崖墓', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '离开乐山', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '高铁+船班', cost: 245 }
    ],
    tips: ['峨眉山185元含景区车+索道', '金顶海拔3079米，带厚外套', '生态猴区注意防范', '乐山大佛门票80元+船票70元', '金顶云海日出壮丽'],
    bestSeason: '4-6月、9-11月',
    highlights: ['金顶云海日出', '乐山大佛', '清音阁猴区']
  },

  // ---- 拉萨 (1篇) ----
  {
    id: 'lasa-guide-3days', cityId: 'lasa', title: '拉萨3日·圣城布达拉·大昭寺', days: 3,
    cover: 'lasa-potala',
    summary: '布达拉宫、大昭寺、纳木错，西藏圣城探秘。',
    budget: { min: 3000, max: 6000, currency: 'CNY', note: '含住宿、餐饮、门票、机票' },
    transport: '飞机+包车',
    itinerary: [
      { day: 1, title: '布达拉宫·八廓街', schedule: [
        { time: '09:00', content: '布达拉宫（需提前1天预约）', spotId: 'lasa-potala', foodId: '', cost: 200 },
        { time: '12:30', content: '八廓街藏餐午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '大昭寺+八廓街转经', spotId: 'lasa-dazhao', foodId: '', cost: 85 },
        { time: '19:00', content: '布达拉宫夜景+藏餐', spotId: '', foodId: '', cost: 150 }
      ], hotel: '拉萨酒店，400-700元/晚', transport: '包车', cost: 515 },
      { day: 2, title: '纳木错·圣湖', schedule: [
        { time: '07:00', content: '包车赴纳木错（约3小时）', spotId: '', foodId: '', cost: 400 },
        { time: '11:00', content: '纳木错（天湖+扎西半岛）', spotId: 'lasa-namucuo', foodId: '', cost: 80 },
        { time: '12:30', content: '纳木错藏餐午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '返回拉萨', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '拉萨藏餐晚餐', spotId: '', foodId: '', cost: 150 }
      ], hotel: '拉萨酒店，400-700元/晚', transport: '包车', cost: 690 },
      { day: 3, title: '哲蚌寺·色拉寺', schedule: [
        { time: '09:00', content: '哲蚌寺（最大寺庙+晒佛台）', spotId: '', foodId: '', cost: 50 },
        { time: '12:30', content: '拉萨藏面午餐', spotId: '', foodId: '', cost: 40 },
        { time: '14:30', content: '色拉寺（辩经场）', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '离开拉萨', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '包车', cost: 140 }
    ],
    tips: ['布达拉宫需提前1天预约', '拉萨海拔3650米，注意高反', '纳木错海拔4718米', '大昭寺85元，藏传佛教圣地', '八廓街购物注意辨别'],
    bestSeason: '5-10月',
    highlights: ['布达拉宫', '大昭寺', '纳木错']
  },

  // ---- 黄果树 (1篇) ----
  {
    id: 'huangguoshu-guide-3days', cityId: 'huangguoshu', title: '黄果树3日·亚洲第一瀑·喀斯特奇观', days: 3,
    cover: 'huangguoshu-waterfall',
    summary: '黄果树大瀑布、天星桥、陡坡塘瀑布，喀斯特奇观。',
    budget: { min: 1500, max: 3200, currency: 'CNY', note: '含住宿、餐饮、门票、大巴' },
    transport: '高铁+景区大巴',
    itinerary: [
      { day: 1, title: '黄果树·大瀑布', schedule: [
        { time: '07:00', content: '乘高铁赴安顺（约1小时）', spotId: '', foodId: '', cost: 70 },
        { time: '09:30', content: '黄果树大瀑布（亚洲第一瀑）', spotId: 'huangguoshu-waterfall', foodId: '', cost: 160 },
        { time: '12:30', content: '黄果树布依午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '天星桥景区', spotId: 'huangguoshu-tianxing', foodId: '', cost: 0 },
        { time: '19:00', content: '安顺酒店住宿', spotId: '', foodId: '', cost: 200 }
      ], hotel: '安顺酒店，250-450元/晚', transport: '高铁+景区车', cost: 490 },
      { day: 2, title: '陡坡塘·喀斯特', schedule: [
        { time: '09:00', content: '陡坡塘瀑布（86版西游记取景）', spotId: 'huangguoshu-duopotang', foodId: '', cost: 40 },
        { time: '12:30', content: '安顺裹卷+破酥包午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '龙宫风景区（水溶洞）', spotId: '', foodId: '', cost: 120 },
        { time: '19:00', content: '安顺夜市', spotId: '', foodId: '', cost: 100 }
      ], hotel: '安顺酒店，250-450元/晚', transport: '景区车', cost: 320 },
      { day: 3, title: '织金洞·世界溶洞', schedule: [
        { time: '07:00', content: '乘车赴织金洞（约2小时）', spotId: '', foodId: '', cost: 80 },
        { time: '10:00', content: '织金洞（世界溶洞之王）', spotId: '', foodId: '', cost: 120 },
        { time: '12:30', content: '织金荞凉粉午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '返回安顺', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '离开安顺', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '大巴', cost: 260 }
    ],
    tips: ['黄果树160元含景区车', '陡坡塘瀑布40元', '织金洞120元', '夏季丰水期最壮观', '86版西游记多处取景'],
    bestSeason: '6-10月丰水期',
    highlights: ['黄果树大瀑布', '天星桥', '织金洞']
  },

  // ==================== 西北 (10篇) ====================

  // ---- 西安 (2篇) ----
  {
    id: 'xian-guide-3days', cityId: 'xian', title: '西安3日·千年古都·兵马俑华清池', days: 3,
    cover: 'xian-bingmayong',
    summary: '秦始皇兵马俑、大雁塔、西安城墙、回民街美食。',
    budget: { min: 1500, max: 3500, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '地铁+公交',
    itinerary: [
      { day: 1, title: '兵马俑·华清池', schedule: [
        { time: '07:30', content: '乘地铁赴兵马俑（约1小时）', spotId: '', foodId: '', cost: 8 },
        { time: '09:00', content: '秦始皇兵马俑博物馆（1-3号坑）', spotId: 'xian-bingmayong', foodId: '', cost: 120 },
        { time: '12:30', content: '兵马俑景区午餐', spotId: '', foodId: 'xian-roujiamo', cost: 60 },
        { time: '14:30', content: '华清宫（长恨歌演出）', spotId: '', foodId: '', cost: 120 },
        { time: '19:00', content: '返回西安，回民街羊肉泡馍', spotId: '', foodId: 'xian-roujiamo', cost: 100 }
      ], hotel: '西安酒店，250-450元/晚', transport: '地铁+公交', cost: 408 },
      { day: 2, title: '西安城墙·大雁塔', schedule: [
        { time: '08:30', content: '西安城墙骑行（南门出发）', spotId: 'xian-chengqiang', foodId: '', cost: 54 },
        { time: '12:30', content: '回民街腊汁肉夹馍', spotId: '', foodId: 'xian-roujiamo', cost: 80 },
        { time: '14:30', content: '大雁塔+大唐不夜城', spotId: 'xian-dayanta', foodId: '', cost: 50 },
        { time: '19:00', content: '大唐不夜城夜景+陕博', spotId: '', foodId: '', cost: 0 }
      ], hotel: '西安酒店，250-450元/晚', transport: '地铁+骑行', cost: 184 },
      { day: 3, title: '陕西历史博物馆', schedule: [
        { time: '09:00', content: '陕西历史博物馆（需预约）', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '西安biangbiang面+羊肉泡馍', spotId: '', foodId: 'xian-roujiamo', cost: 50 },
        { time: '14:30', content: '大明宫国家遗址公园', spotId: '', foodId: '', cost: 60 },
        { time: '19:00', content: '回民街美食告别', spotId: '', foodId: '', cost: 100 }
      ], hotel: '', transport: '地铁', cost: 210 }
    ],
    tips: ['兵马俑120元，含博物馆+遗址', '华清宫120元，长恨歌演出另付', '陕历博需预约，免费', '西安城墙54元骑行', '回民街小吃丰富'],
    bestSeason: '3-5月、9-11月',
    highlights: ['秦始皇兵马俑', '大雁塔', '西安城墙']
  },
  {
    id: 'xian-guide-5days', cityId: 'xian', title: '西安5日·千年古都·深度探秘', days: 5,
    cover: 'xian-dayanta',
    summary: '兵马俑+华清池+华山+大雁塔，5天深度千年古都。',
    budget: { min: 3000, max: 6500, currency: 'CNY', note: '含华山往返' },
    transport: '地铁+高铁+索道',
    itinerary: [
      { day: 1, title: '兵马俑·华清池', schedule: [
        { time: '07:30', content: '兵马俑博物馆', spotId: 'xian-bingmayong', foodId: '', cost: 120 },
        { time: '12:30', content: '兵马俑午餐', spotId: '', foodId: 'xian-roujiamo', cost: 60 },
        { time: '14:30', content: '华清宫+骊山', spotId: '', foodId: '', cost: 120 },
        { time: '19:00', content: '返回西安', spotId: '', foodId: '', cost: 100 }
      ], hotel: '西安酒店，300-500元/晚', transport: '地铁', cost: 400 },
      { day: 2, title: '华山·五岳之西', schedule: [
        { time: '07:00', content: '高铁赴华山（约30分钟）', spotId: '', foodId: '', cost: 55 },
        { time: '08:30', content: '华山西峰索道上山→南峰→东峰', spotId: 'huashan-west', foodId: '', cost: 260 },
        { time: '12:30', content: '华山酒店午餐', spotId: '', foodId: '', cost: 50 },
        { time: '14:30', content: '华山长空栈道', spotId: 'huashan-changkong', foodId: '', cost: 0 },
        { time: '19:00', content: '返回西安', spotId: '', foodId: 'xian-roujiamo', cost: 150 }
      ], hotel: '西安酒店，300-500元/晚', transport: '高铁+索道', cost: 515 },
      { day: 3, title: '大雁塔·大唐', schedule: [
        { time: '09:00', content: '大雁塔+大唐不夜城', spotId: 'xian-dayanta', foodId: '', cost: 50 },
        { time: '12:30', content: '大唐不夜城午餐', spotId: '', foodId: 'xian-roujiamo', cost: 80 },
        { time: '14:30', content: '陕西历史博物馆', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '大唐不夜城夜景', spotId: '', foodId: '', cost: 0 }
      ], hotel: '西安酒店，300-500元/晚', transport: '地铁', cost: 130 },
      { day: 4, title: '城墙·华山', schedule: [
        { time: '08:30', content: '西安城墙骑行', spotId: 'xian-chengqiang', foodId: '', cost: 54 },
        { time: '12:30', content: '回民街午餐', spotId: '', foodId: 'xian-roujiamo', cost: 80 },
        { time: '14:30', content: '大明宫遗址公园', spotId: '', foodId: '', cost: 60 },
        { time: '19:00', content: '回民街晚餐', spotId: '', foodId: '', cost: 100 }
      ], hotel: '西安酒店，300-500元/晚', transport: '地铁', cost: 294 },
      { day: 5, title: '兵马俑·告别', schedule: [
        { time: '09:00', content: '秦始皇陵（与兵马俑相邻）', spotId: '', foodId: '', cost: 40 },
        { time: '12:30', content: 'biangbiang面午餐', spotId: '', foodId: 'xian-roujiamo', cost: 50 },
        { time: '14:30', content: '大雁塔北广场', spotId: 'xian-dayanta', foodId: '', cost: 0 },
        { time: '19:00', content: '西安美食告别', spotId: '', foodId: 'xian-roujiamo', cost: 100 }
      ], hotel: '', transport: '地铁', cost: 190 }
    ],
    tips: ['华山260元含门票+索道', '兵马俑建议早上去', '陕历博需预约', '大唐不夜城夜景美丽', '羊肉泡馍+肉夹馍必尝'],
    bestSeason: '3-5月、9-11月',
    highlights: ['兵马俑+华清池', '华山长空栈道', '大唐不夜城', '西安城墙', '陕历博']
  },

  // ---- 敦煌 (1篇) ----
  {
    id: 'dunhuang-guide-3days', cityId: 'dunhuang', title: '敦煌3日·莫高窟·鸣沙月牙', days: 3,
    cover: 'dunhuang-mogao',
    summary: '莫高窟千年壁画、鸣沙山月牙泉、雅丹魔鬼城。',
    budget: { min: 2800, max: 5500, currency: 'CNY', note: '含住宿、餐饮、门票、机票' },
    transport: '飞机+包车',
    itinerary: [
      { day: 1, title: '莫高窟·千年壁画', schedule: [
        { time: '08:30', content: '莫高窟数字展示中心+实体洞窟', spotId: 'dunhuang-mogao', foodId: '', cost: 248 },
        { time: '12:30', content: '莫高窟素斋午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '鸣沙山月牙泉（沙漠+绿洲）', spotId: 'dunhuang-mingsha', foodId: '', cost: 55 },
        { time: '19:00', content: '沙洲夜市+敦煌烤羊肉', spotId: '', foodId: '', cost: 120 }
      ], hotel: '敦煌酒店，400-600元/晚', transport: '包车', cost: 483 },
      { day: 2, title: '雅丹魔鬼城', schedule: [
        { time: '07:00', content: '包车赴雅丹魔鬼城（约2小时）', spotId: '', foodId: '', cost: 200 },
        { time: '10:00', content: '雅丹国家地质公园（风蚀地貌）', spotId: 'dunhuang-yadan', foodId: '', cost: 120 },
        { time: '12:30', content: '雅丹午餐', spotId: '', foodId: '', cost: 50 },
        { time: '14:30', content: '返回敦煌', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '沙洲夜市晚餐', spotId: '', foodId: '', cost: 120 }
      ], hotel: '敦煌酒店，400-600元/晚', transport: '包车', cost: 490 },
      { day: 3, title: '玉门关·阳关', schedule: [
        { time: '07:00', content: '包车赴玉门关（约1.5小时）', spotId: '', foodId: '', cost: 150 },
        { time: '09:30', content: '玉门关+汉长城遗址', spotId: '', foodId: '', cost: 90 },
        { time: '12:30', content: '阳关博物馆+午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '返回敦煌', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '离开敦煌', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '包车', cost: 320 }
    ],
    tips: ['莫高窟248元，旺季需预约', '鸣沙山月牙泉55元', '雅丹120元，日落最美', '玉门关90元，西出阳关', '昼夜温差大'],
    bestSeason: '5-10月',
    highlights: ['莫高窟壁画', '鸣沙山月牙泉', '雅丹魔鬼城']
  },

  // ---- 乌鲁木齐 (1篇) ----
  {
    id: 'wulumuqi-guide-3days', cityId: 'wulumuqi', title: '乌鲁木齐3日·天山天池·大巴扎', days: 3,
    cover: 'wulumuqi-tianchi',
    summary: '天山天池、新疆国际大巴扎、火焰山坎儿井。',
    budget: { min: 2500, max: 5000, currency: 'CNY', note: '含住宿、餐饮、门票、机票' },
    transport: '飞机+包车',
    itinerary: [
      { day: 1, title: '天山天池·瑶池', schedule: [
        { time: '07:00', content: '包车赴天池（约2小时）', spotId: '', foodId: '', cost: 150 },
        { time: '10:00', content: '天山天池（瑶池+西王母庙）', spotId: 'wulumuqi-tianchi', foodId: '', cost: 155 },
        { time: '12:30', content: '天池手抓饭午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '返回乌鲁木齐', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '大巴扎烤羊肉串', spotId: 'wulumuqi-bazaa', foodId: '', cost: 100 }
      ], hotel: '乌鲁木齐酒店，400-600元/晚', transport: '包车', cost: 465 },
      { day: 2, title: '大巴扎·博物馆', schedule: [
        { time: '09:00', content: '新疆国际大巴扎（维族集市）', spotId: 'wulumuqi-bazaa', foodId: '', cost: 0 },
        { time: '12:30', content: '大巴扎手抓饭午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '新疆维吾尔自治区博物馆', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '五一夜市烤肉', spotId: '', foodId: '', cost: 120 }
      ], hotel: '乌鲁木齐酒店，400-600元/晚', transport: '公交+步行', cost: 180 },
      { day: 3, title: '吐鲁番·火焰山', schedule: [
        { time: '07:00', content: '包车赴吐鲁番（约1.5小时）', spotId: '', foodId: '', cost: 150 },
        { time: '09:30', content: '火焰山+坎儿井葡萄沟', spotId: 'wulumuqi-huoshan', foodId: '', cost: 180 },
        { time: '12:30', content: '吐鲁番葡萄架午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '返回乌鲁木齐', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '离开乌鲁木齐', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '包车', cost: 390 }
    ],
    tips: ['天山天池155元含景区车', '大巴扎免费，异域风情', '火焰山夏季40℃+', '新疆大盘鸡必尝', '昼夜温差大'],
    bestSeason: '6-10月',
    highlights: ['天山天池', '大巴扎异域风情', '火焰山坎儿井']
  },

  // ---- 青海湖 (1篇) ----
  {
    id: 'qinghaihu-guide-3days', cityId: 'qinghaihu', title: '青海湖3日·中国最大咸水湖', days: 3,
    cover: 'qinghaihu-erdao',
    summary: '青海湖二郎剑、鸟岛、西海镇、油菜花。',
    budget: { min: 2000, max: 4200, currency: 'CNY', note: '含住宿、餐饮、门票、包车' },
    transport: '包车+景区车',
    itinerary: [
      { day: 1, title: '青海湖·二郎剑', schedule: [
        { time: '07:00', content: '包车赴青海湖（约1.5小时）', spotId: '', foodId: '', cost: 100 },
        { time: '09:00', content: '青海湖二郎剑景区', spotId: 'qinghaihu-erdao', foodId: '', cost: 100 },
        { time: '12:30', content: '青海湖湟鱼午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '环湖东路骑行', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '西海镇原子城晚餐', spotId: 'qinghaihu-xihai', foodId: '', cost: 120 }
      ], hotel: '青海湖酒店，400-700元/晚', transport: '包车', cost: 400 },
      { day: 2, title: '鸟岛·草原', schedule: [
        { time: '07:00', content: '鸟岛（候鸟栖息地）', spotId: 'qinghaihu-niaodao', foodId: '', cost: 125 },
        { time: '12:30', content: '草原藏餐午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '金银滩草原', spotId: '', foodId: '', cost: 50 },
        { time: '19:00', content: '西海镇晚餐', spotId: '', foodId: '', cost: 100 }
      ], hotel: '青海湖酒店，400-700元/晚', transport: '包车', cost: 355 },
      { day: 3, title: '塔尔寺·西宁', schedule: [
        { time: '07:00', content: '包车赴塔尔寺（约2小时）', spotId: '', foodId: '', cost: 80 },
        { time: '10:00', content: '塔尔寺（藏传佛教格鲁派六大寺院）', spotId: '', foodId: '', cost: 80 },
        { time: '12:30', content: '西宁手抓羊肉午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '西宁东关清真大寺', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '离开西宁', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '包车', cost: 220 }
    ],
    tips: ['青海湖100元，鸟岛125元', '油菜花7-8月最美', '塔尔寺80元，藏传佛教圣地', '海拔3200米，注意防晒', '环青海湖360公里'],
    bestSeason: '7-8月油菜花',
    highlights: ['青海湖二郎剑', '鸟岛候鸟', '塔尔寺']
  },

  // ---- 茶卡盐湖 (1篇) ----
  {
    id: 'chaka-guide-3days', cityId: 'chaka', title: '茶卡3日·天空之镜·星空壹号', days: 3,
    cover: 'chaka-yunjing',
    summary: '茶卡盐湖天空之镜、星空壹号、盐雕公园。',
    budget: { min: 2000, max: 4000, currency: 'CNY', note: '含住宿、餐饮、门票、包车' },
    transport: '包车+景区小火车',
    itinerary: [
      { day: 1, title: '茶卡·天空之镜', schedule: [
        { time: '07:00', content: '包车赴茶卡盐湖（约4小时）', spotId: '', foodId: '', cost: 200 },
        { time: '11:00', content: '茶卡盐湖天空之镜', spotId: 'chaka-yunjing', foodId: '', cost: 60 },
        { time: '12:30', content: '盐湖盐雕公园午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '茶卡壹号盐湖（老盐场）', spotId: 'chaka-yinxiang', foodId: '', cost: 50 },
        { time: '19:00', content: '茶卡星空壹号住宿', spotId: 'chaka-xingkong', foodId: '', cost: 400 }
      ], hotel: '星空壹号酒店，600-900元/晚', transport: '包车', cost: 770 },
      { day: 2, title: '星空·日出', schedule: [
        { time: '05:00', content: '茶卡盐湖日出（天空之镜倒影）', spotId: 'chaka-yunjing', foodId: '', cost: 0 },
        { time: '12:30', content: '茶卡牦牛火锅午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '返回西宁', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '西宁马忠牛肉面', spotId: '', foodId: '', cost: 50 }
      ], hotel: '西宁酒店，300-500元/晚', transport: '包车', cost: 130 },
      { day: 3, title: '塔尔寺·返回', schedule: [
        { time: '09:00', content: '塔尔寺', spotId: '', foodId: '', cost: 80 },
        { time: '12:30', content: '西宁手抓羊肉', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '西宁市区漫游', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '离开西宁', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '公交', cost: 140 }
    ],
    tips: ['茶卡盐湖60元，小火车另付100元', '星空壹号400-900元', '7-8月最美，镜面倒影', '带拖鞋下水', '紫外线强烈'],
    bestSeason: '7-9月',
    highlights: ['天空之镜倒影', '星空壹号', '茶卡盐雕']
  },

  // ---- 张掖 (1篇) ----
  {
    id: 'zhangye-guide-3days', cityId: 'zhangye', title: '张掖3日·七彩丹霞·丝路古道', days: 3,
    cover: 'zhangye-danxia',
    summary: '七彩丹霞、冰沟丹霞、马蹄寺、大佛寺。',
    budget: { min: 2000, max: 4200, currency: 'CNY', note: '含住宿、餐饮、门票、包车' },
    transport: '火车+包车',
    itinerary: [
      { day: 1, title: '七彩丹霞·彩色丘陵', schedule: [
        { time: '07:00', content: '乘火车赴张掖（约5小时）', spotId: '', foodId: '', cost: 150 },
        { time: '13:00', content: '七彩丹霞（彩色丘陵）', spotId: 'zhangye-danxia', foodId: '', cost: 150 },
        { time: '12:30', content: '张掖牛肉小饭午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '冰沟丹霞', spotId: 'zhangye-binggou', foodId: '', cost: 80 },
        { time: '19:00', content: '张掖宾馆住宿', spotId: '', foodId: '', cost: 250 }
      ], hotel: '张掖酒店，300-500元/晚', transport: '火车+包车', cost: 690 },
      { day: 2, title: '马蹄寺·大佛寺', schedule: [
        { time: '09:00', content: '马蹄寺（三十三天石窟）', spotId: 'zhangye-mati', foodId: '', cost: 80 },
        { time: '12:30', content: '马蹄寺裕固族午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '张掖大佛寺（亚洲最大卧佛）', spotId: '', foodId: '', cost: 40 },
        { time: '19:00', content: '张掖夜市搓鱼面', spotId: '', foodId: '', cost: 80 }
      ], hotel: '张掖酒店，300-500元/晚', transport: '包车', cost: 260 },
      { day: 3, title: '国家湿地·返回', schedule: [
        { time: '09:00', content: '张掖国家湿地公园', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '张掖小吃午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '乘火车返回', spotId: '', foodId: '', cost: 150 },
        { time: '19:00', content: '离开张掖', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '火车', cost: 210 }
    ],
    tips: ['七彩丹霞150元含景区车', '冰沟丹霞80元', '马蹄寺80元，裕固族风情', '彩色丘陵日落最美', '昼夜温差大'],
    bestSeason: '5-10月',
    highlights: ['七彩丹霞彩色丘陵', '马蹄寺石窟', '大佛寺卧佛']
  },

  // ---- 华山 (1篇) ----
  {
    id: 'huashan-guide-3days', cityId: 'huashan', title: '华山3日·奇险天下第一山', days: 3,
    cover: 'huashan-south',
    summary: '华山南峰、西峰、长空栈道、鹞子翻身。',
    budget: { min: 1800, max: 4000, currency: 'CNY', note: '含住宿、餐饮、门票、索道' },
    transport: '高铁+索道',
    itinerary: [
      { day: 1, title: '华山·西峰上北峰下', schedule: [
        { time: '07:00', content: '乘高铁赴华山北（约30分钟）', spotId: '', foodId: '', cost: 55 },
        { time: '08:00', content: '西峰索道上山→西峰→南峰→东峰', spotId: 'huashan-west', foodId: '', cost: 260 },
        { time: '12:30', content: '华山饭店午餐', spotId: '', foodId: '', cost: 50 },
        { time: '14:30', content: '长空栈道+鹞子翻身', spotId: 'huashan-changkong', foodId: '', cost: 0 },
        { time: '19:00', content: '北峰索道下山→返回西安', spotId: '', foodId: 'xian-roujiamo', cost: 150 }
      ], hotel: '华山酒店或西安酒店', transport: '高铁+索道', cost: 515 },
      { day: 2, title: '华山·东峰日出', schedule: [
        { time: '05:00', content: '东峰看日出', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '华山饭店午餐', spotId: '', foodId: '', cost: 50 },
        { time: '14:30', content: '北峰+中峰', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '返回西安', spotId: '', foodId: 'xian-roujiamo', cost: 150 }
      ], hotel: '', transport: '索道', cost: 200 },
      { day: 3, title: '西安·兵马俑', schedule: [
        { time: '09:00', content: '兵马俑博物馆', spotId: 'xian-bingmayong', foodId: '', cost: 120 },
        { time: '12:30', content: '西安午餐', spotId: '', foodId: 'xian-roujiamo', cost: 60 },
        { time: '14:30', content: '大雁塔', spotId: 'xian-dayanta', foodId: '', cost: 50 },
        { time: '19:00', content: '离开西安', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '地铁', cost: 230 }
    ],
    tips: ['华山260元含门票+西峰索道', '长空栈道必体验，需安全扣', '东峰日出夏季5点', '山上住宿贵，建议当天往返', '量力而行，注意安全'],
    bestSeason: '4-6月、9-11月',
    highlights: ['华山南峰', '长空栈道', '西峰日落']
  },

  // ==================== 特色 (9篇) ====================

  // ---- 周庄 (1篇) ----
  {
    id: 'zhouzhuang-guide-3days', cityId: 'zhouzhuang', title: '周庄3日·中国第一水乡', days: 3,
    cover: 'zhouzhuang-ancient',
    summary: '周庄古镇、双桥、沈厅，江南水乡典范。',
    budget: { min: 1500, max: 3000, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '高铁+公交',
    itinerary: [
      { day: 1, title: '周庄·古镇漫游', schedule: [
        { time: '09:00', content: '周庄古镇（全福寺入口）', spotId: 'zhouzhuang-ancient', foodId: '', cost: 100 },
        { time: '12:30', content: '万三蹄+阿婆茶午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '双桥+沈厅（江南民居）', spotId: 'zhouzhuang-shuangqiao', foodId: '', cost: 0 },
        { time: '19:00', content: '周庄古镇夜景+住宿', spotId: '', foodId: '', cost: 150 }
      ], hotel: '周庄客栈，400-600元/晚', transport: '公交+步行', cost: 330 },
      { day: 2, title: '江南水乡·美食', schedule: [
        { time: '09:00', content: '周庄古镇深度游', spotId: 'zhouzhuang-shenting', foodId: '', cost: 0 },
        { time: '12:30', content: '周庄糕点+小吃', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '同里古镇（退思园）', spotId: '', foodId: '', cost: 100 },
        { time: '19:00', content: '返回周庄住宿', spotId: '', foodId: '', cost: 150 }
      ], hotel: '周庄客栈，400-600元/晚', transport: '公交', cost: 310 },
      { day: 3, title: '乌镇·返回', schedule: [
        { time: '07:00', content: '乘公交赴乌镇（约1小时）', spotId: '', foodId: '', cost: 20 },
        { time: '09:00', content: '乌镇东栅', spotId: '', foodId: '', cost: 110 },
        { time: '12:30', content: '乌镇午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '返回', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '离开', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '公交', cost: 190 }
    ],
    tips: ['周庄100元含古镇所有景点', '沈厅是江南民居典范', '万三蹄是特色美食', '古镇夜景最美', '建议住古镇内体验'],
    bestSeason: '3-5月、9-11月',
    highlights: ['周庄古镇', '双桥', '沈厅']
  },

  // ---- 乌镇 (1篇) ----
  {
    id: 'wuzhen-guide-3days', cityId: 'wuzhen', title: '乌镇3日·枕水人家·水乡情怀', days: 3,
    cover: 'wuzhen-dongzha',
    summary: '乌镇西栅夜色、东栅水乡、茅盾故居。',
    budget: { min: 1800, max: 3600, currency: 'CNY', note: '含住宿、餐饮、门票、交通' },
    transport: '高铁+公交',
    itinerary: [
      { day: 1, title: '西栅·夜色', schedule: [
        { time: '09:00', content: '乌镇西栅（世界互联网大会永久会址）', spotId: 'wuzhen-xizha', foodId: '', cost: 150 },
        { time: '12:30', content: '乌镇红烧羊肉午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '西栅古镇漫游', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '西栅夜游+住宿', spotId: '', foodId: '', cost: 400 }
      ], hotel: '乌镇西栅民宿，600-900元/晚', transport: '公交', cost: 630 },
      { day: 2, title: '东栅·茅盾', schedule: [
        { time: '09:00', content: '乌镇东栅（茅盾故居）', spotId: 'wuzhen-dongzha', foodId: '', cost: 110 },
        { time: '12:30', content: '乌镇小吃午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '茅盾故居+蓝印花布染坊', spotId: 'wuzhen-maodun', foodId: '', cost: 0 },
        { time: '19:00', content: '返回西栅住宿', spotId: '', foodId: '', cost: 150 }
      ], hotel: '乌镇西栅民宿，600-900元/晚', transport: '公交', cost: 320 },
      { day: 3, title: '西塘·返回', schedule: [
        { time: '07:00', content: '乘公交赴西塘（约1.5小时）', spotId: '', foodId: '', cost: 30 },
        { time: '09:00', content: '西塘古镇（烟雨长廊）', spotId: 'xitang-ancient', foodId: '', cost: 100 },
        { time: '12:30', content: '西塘午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '返回', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '离开', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '公交', cost: 190 }
    ],
    tips: ['西栅150元，含夜景', '东栅110元', '西栅住宿贵，建议住景区内', '茅盾故居是免费景点', '西栅夜景最美'],
    bestSeason: '3-5月、9-11月',
    highlights: ['乌镇西栅', '茅盾故居', '蓝印花布']
  },

  // ---- 千岛湖 (1篇) ----
  {
    id: 'qiandaohu-guide-3days', cityId: 'qiandaohu', title: '千岛湖3日·天下第一秀水', days: 3,
    cover: 'qiandaohu-scenic',
    summary: '千岛湖梅峰岛、渔乐岛、龙山岛，湖光山色。',
    budget: { min: 1500, max: 3200, currency: 'CNY', note: '含住宿、餐饮、门票、船票' },
    transport: '高铁+游船',
    itinerary: [
      { day: 1, title: '梅峰岛·渔乐岛', schedule: [
        { time: '07:00', content: '乘高铁赴千岛湖（约1.5小时）', spotId: '', foodId: '', cost: 95 },
        { time: '10:00', content: '梅峰岛登高观全景', spotId: 'qiandaohu-meifeng', foodId: '', cost: 0 },
        { time: '12:30', content: '渔乐岛船餐（千岛湖鱼头）', spotId: 'qiandaohu-yule', foodId: '', cost: 80 },
        { time: '14:30', content: '龙山岛（海瑞祠）', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '千岛湖酒店住宿', spotId: '', foodId: '', cost: 300 }
      ], hotel: '千岛湖酒店，400-600元/晚', transport: '高铁+游船', cost: 475 },
      { day: 2, title: '东南湖区·千岛湖', schedule: [
        { time: '09:00', content: '东南湖区游船（黄山尖+天池岛）', spotId: '', foodId: '', cost: 150 },
        { time: '12:30', content: '游船午餐', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '千岛湖环湖骑行', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '千岛湖鱼头大餐', spotId: '', foodId: '', cost: 150 }
      ], hotel: '千岛湖酒店，400-600元/晚', transport: '游船', cost: 380 },
      { day: 3, title: '森林氧吧·返回', schedule: [
        { time: '09:00', content: '千岛湖森林氧吧', spotId: '', foodId: '', cost: 80 },
        { time: '12:30', content: '千岛湖特色午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '乘高铁返回', spotId: '', foodId: '', cost: 95 },
        { time: '19:00', content: '离开千岛湖', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '高铁', cost: 235 }
    ],
    tips: ['千岛湖门票+船票150元', '梅峰岛是观景点', '千岛湖鱼头是特色', '夏季避暑胜地', '森林氧吧免费'],
    bestSeason: '4-11月',
    highlights: ['梅峰岛全景', '渔乐岛', '千岛湖鱼头']
  },

  // ---- 武夷山 (1篇) ----
  {
    id: 'wuyishan-guide-3days', cityId: 'wuyishan', title: '武夷山3日·世界文化与自然双遗产', days: 3,
    cover: 'wuyishan-tianyou',
    summary: '天游峰、九曲溪、大红袍、竹筏漂流。',
    budget: { min: 2200, max: 4500, currency: 'CNY', note: '含住宿、餐饮、门票、竹筏' },
    transport: '高铁+景区大巴+竹筏',
    itinerary: [
      { day: 1, title: '天游峰·九曲溪', schedule: [
        { time: '07:00', content: '乘高铁赴武夷山（约1小时）', spotId: '', foodId: '', cost: 100 },
        { time: '09:00', content: '天游峰（武夷山标志）', spotId: 'wuyishan-tianyou', foodId: '', cost: 140 },
        { time: '12:30', content: '武夷山素斋午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '九曲溪竹筏漂流', spotId: 'wuyishan-jiqu', foodId: '', cost: 130 },
        { time: '19:00', content: '武夷山庄住宿', spotId: '', foodId: '', cost: 300 }
      ], hotel: '武夷山酒店，400-600元/晚', transport: '高铁+景区车', cost: 730 },
      { day: 2, title: '大红袍·武夷宫', schedule: [
        { time: '09:00', content: '大红袍母树+茶文化', spotId: 'wuyishan-dahongpao', foodId: '', cost: 0 },
        { time: '12:30', content: '武夷山红袍蛋+蛇宴', spotId: '', foodId: '', cost: 100 },
        { time: '14:30', content: '武夷宫+宋街', spotId: '', foodId: '', cost: 0 },
        { time: '19:00', content: '《印象大红袍》演出', spotId: '', foodId: '', cost: 218 }
      ], hotel: '武夷山酒店，400-600元/晚', transport: '景区大巴', cost: 318 },
      { day: 3, title: '虎啸岩·一线天', schedule: [
        { time: '09:00', content: '虎啸岩+一线天', spotId: '', foodId: '', cost: 0 },
        { time: '12:30', content: '武夷山午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '乘高铁返回', spotId: '', foodId: '', cost: 100 },
        { time: '19:00', content: '离开武夷山', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '高铁', cost: 160 }
    ],
    tips: ['武夷山140元含景区车', '九曲溪竹筏130元', '大红袍母树仅6棵', '印象大红袍演出218元', '茶文化深厚'],
    bestSeason: '3-5月、9-11月',
    highlights: ['天游峰', '九曲溪竹筏', '大红袍母树']
  },

  // ---- 泰山 (1篇) ----
  {
    id: 'taishan-guide-3days', cityId: 'taishan', title: '泰山3日·五岳之首·天下第一山', days: 3,
    cover: 'taishan-summit',
    summary: '泰山日观峰、十八盘、岱庙、封禅文化。',
    budget: { min: 1500, max: 3200, currency: 'CNY', note: '含住宿、餐饮、门票、索道' },
    transport: '高铁+索道',
    itinerary: [
      { day: 1, title: '泰山·登山', schedule: [
        { time: '07:00', content: '乘高铁赴泰安（约1.5小时）', spotId: '', foodId: '', cost: 100 },
        { time: '09:00', content: '天外村索道上山→中天门→十八盘', spotId: 'taishan-18pan', foodId: '', cost: 250 },
        { time: '12:30', content: '泰山饭店午餐', spotId: '', foodId: '', cost: 60 },
        { time: '14:30', content: '南天门→日观峰→玉皇顶', spotId: 'taishan-summit', foodId: '', cost: 0 },
        { time: '19:00', content: '下山住宿', spotId: '', foodId: '', cost: 300 }
      ], hotel: '泰安酒店，400-600元/晚', transport: '高铁+索道', cost: 710 },
      { day: 2, title: '岱庙·封禅', schedule: [
        { time: '09:00', content: '岱庙（历代封禅之地）', spotId: 'taishan-daishan', foodId: '', cost: 30 },
        { time: '12:30', content: '泰安炒鸡+豆腐宴', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '泰安方特欢乐世界', spotId: '', foodId: '', cost: 220 },
        { time: '19:00', content: '泰安夜市', spotId: '', foodId: '', cost: 80 }
      ], hotel: '泰安酒店，400-600元/晚', transport: '公交', cost: 410 },
      { day: 3, title: '曲阜·三孔', schedule: [
        { time: '07:00', content: '乘高铁赴曲阜（约30分钟）', spotId: '', foodId: '', cost: 30 },
        { time: '09:00', content: '曲阜三孔（孔庙+孔府+孔林）', spotId: '', foodId: '', cost: 140 },
        { time: '12:30', content: '曲阜煎饼+孔府宴', spotId: '', foodId: '', cost: 80 },
        { time: '14:30', content: '返回', spotId: '', foodId: '', cost: 100 },
        { time: '19:00', content: '离开', spotId: '', foodId: '', cost: 0 }
      ], hotel: '', transport: '高铁', cost: 350 }
    ],
    tips: ['泰山250元含门票+索道', '日观峰日出壮观', '岱庙30元，封禅文化', '曲阜三孔140元', '泰山登山需体力'],
    bestSeason: '5-10月',
    highlights: ['泰山日观峰', '十八盘', '岱庙封禅文化']
  }
]

// ==================== 导出函数 ====================

/**
 * 根据ID查找攻略
 * @param {string} id - 攻略ID
 * @returns {Object|undefined} 攻略对象
 */
export function getGuide(id) {
  return guides.find(g => g.id === id)
}

/**
 * 根据城市ID查找所有攻略
 * @param {string} cityId - 城市ID
 * @returns {Array} 该城市的所有攻略
 */
export function guidesByCity(cityId) {
  return guides.filter(g => g.cityId === cityId)
}

/**
 * 根据天数查找攻略
 * @param {number} days - 天数(3|5|7)
 * @returns {Array} 指定天数的攻略
 */
export function guidesByDays(days) {
  return guides.filter(g => g.days === days)
}

/**
 * 获取热门攻略
 * @param {number} limit - 返回数量
 * @returns {Array} 热门攻略列表
 */
export function getPopularGuides(limit = 10) {
  const cityPopularity = [
    'beijing', 'shanghai', 'chengdu', 'hangzhou', 'xian',
    'xiamen', 'guangzhou', 'shenzhen', 'chongqing', 'lijiang',
    'zhangjiajie', 'dali', 'guilin', 'sanya', 'huangshan'
  ]
  const sorted = [...guides].sort((a, b) => {
    const aIdx = cityPopularity.indexOf(a.cityId)
    const bIdx = cityPopularity.indexOf(b.cityId)
    return (aIdx === -1 ? 999 : aIdx) - (bIdx === -1 ? 999 : bIdx)
  })
  return sorted.slice(0, limit)
}

/**
 * 估算旅行费用
 * @param {string} cityId - 城市ID
 * @param {number} days - 天数
 * @param {string} style - 风格: 'budget'|'standard'|'luxury'
 * @returns {Object} 费用估算
 */
export function estimateCost(cityId, days = 3, style = 'standard') {
  const styleMultiplier = {
    budget: { hotel: 150, food: 60, ticketRatio: 0.5 },
    standard: { hotel: 350, food: 100, ticketRatio: 0.8 },
    luxury: { hotel: 700, food: 200, ticketRatio: 1.2 }
  }
  const cfg = styleMultiplier[style] || styleMultiplier.standard

  const citySpecific = {
    'sanya': { transport: 200, ticketBase: 200 },
    'lasa': { transport: 500, ticketBase: 300 },
    'dunhuang': { transport: 300, ticketBase: 250 },
    'daocheng': { transport: 400, ticketBase: 350 },
    'jiuzhai': { transport: 300, ticketBase: 250 },
    'shangrila': { transport: 300, ticketBase: 200 },
    'lijiang': { transport: 250, ticketBase: 200 },
    'shenzhen': { transport: 150, ticketBase: 250 },
    'zhuhai': { transport: 100, ticketBase: 250 },
    'chengde': { transport: 100, ticketBase: 150 }
  }

  const city = citySpecific[cityId] || { transport: 100, ticketBase: 100 }
  const perDay = cfg.hotel + cfg.food
  const totalHotelFood = perDay * days
  const ticketCost = city.ticketBase * cfg.ticketRatio * days * 0.5
  const transportCost = city.transport * (days > 2 ? 1.2 : 1)

  const total = Math.round(totalHotelFood + ticketCost + transportCost)

  return {
    cityId,
    days,
    style,
    total,
    breakdown: {
      accommodation: Math.round(cfg.hotel * days),
      food: Math.round(cfg.food * days),
      tickets: Math.round(ticketCost),
      transport: Math.round(transportCost)
    },
    currency: 'CNY',
    note: `基于${style}标准估算，实际费用因个人消费而异`
  }
}