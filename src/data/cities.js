export const cities = [
  // ========== 华北 (8) ==========
  {
    id: 'beijing', name: '北京', pinyin: 'beijing', province: '北京', region: '华北',
    slogan: '千年帝都，大气庄重',
    cover: 'beijing-forbidden-city',
    intro: '北京，中国首都，紫禁城的红墙黄瓦、长城的蜿蜒雄姿、胡同四合院的京味儿，历史厚重与现代都市交相辉映。',
    bestSeason: '4-5月、9-10月',
    weather: '温带季风气候，四季分明，春季多风沙，冬季寒冷干燥。',
    lng: 116.4074, lat: 39.9042, adcode: '110100', qweatherId: '101010100'
  },
  {
    id: 'tianjin', name: '天津', pinyin: 'tianjin', province: '天津', region: '华北',
    slogan: '津门故里，万国建筑博览会',
    cover: 'tianjin-binhai',
    intro: '天津，北方商埠，五大道的欧式别墅、古文化街的民俗风情、狗不理的飘香，中西文化在此交融。',
    bestSeason: '4-5月、9-10月',
    weather: '温带季风气候，四季分明，冬季寒冷，夏季炎热多雨。',
    lng: 117.2009, lat: 39.0844, adcode: '120100', qweatherId: '101030100'
  },
  {
    id: 'shijiazhuang', name: '石家庄', pinyin: 'shijiazhuang', province: '河北', region: '华北',
    slogan: '燕赵之都，现代活力之城',
    cover: 'shijiazhuang-hebei',
    intro: '石家庄，河北省会，赵州桥的千年智慧、西柏坡的革命记忆、正定古城的隆兴寺，燕赵大地的历史回响。',
    bestSeason: '4-5月、9-10月',
    weather: '温带季风气候，四季分明，春季多风沙，夏季炎热。',
    lng: 114.5149, lat: 38.0428, adcode: '130100', qweatherId: '101090101'
  },
  {
    id: 'chengde', name: '承德', pinyin: 'chengde', province: '河北', region: '华北',
    slogan: '避暑胜地，皇家园林',
    cover: 'chengde-mountain-resort',
    intro: '承德，清代皇家夏宫所在地，避暑山庄的湖光山色、外八庙的宏伟壮观，感受皇家气派与草原风情。',
    bestSeason: '6-10月',
    weather: '温带大陆性季风气候，夏季凉爽，冬季寒冷漫长。',
    lng: 117.9331, lat: 40.9707, adcode: '130800', qweatherId: '101090902'
  },
  {
    id: 'qinhuangdao', name: '秦皇岛', pinyin: 'qinhuangdao', province: '河北', region: '华北',
    slogan: '北戴河畔，海滨明珠',
    cover: 'qinhuangdao-beach',
    intro: '秦皇岛，海滨度假胜地，北戴河的沙滩、山海关的雄关、鸽子窝的日出，是华北的海洋明珠。',
    bestSeason: '5-10月',
    weather: '温带季风气候，夏季凉爽宜人，冬季寒冷干燥。',
    lng: 119.6006, lat: 39.9354, adcode: '130300', qweatherId: '101100302'
  },
  {
    id: 'zhangjiakou', name: '张家口', pinyin: 'zhangjiakou', province: '河北', region: '华北',
    slogan: '塞外山城，冰雪之都',
    cover: 'zhangjiakou-ski',
    intro: '张家口，2022冬奥之城，崇礼的滑雪天堂、坝上的草原天路、鸡鸣驿的古驿站，塞外风光壮美。',
    bestSeason: '1-3月（滑雪）、6-9月（草原）',
    weather: '温带大陆性气候，冬季漫长严寒，夏季凉爽短促。',
    lng: 114.8865, lat: 40.8244, adcode: '130700', qweatherId: '101090303'
  },
  {
    id: 'baoding', name: '保定', pinyin: 'baoding', province: '河北', region: '华北',
    slogan: '直隶总督署，千年古莲花池',
    cover: 'baoding-ancient-city',
    intro: '保定，直隶总督署所在地，古莲花池的园林雅致、满城汉墓的文物瑰宝，历史文化底蕴深厚。',
    bestSeason: '3-5月、9-11月',
    weather: '温带季风气候，四季分明，春季多风沙。',
    lng: 115.4646, lat: 38.8681, adcode: '130600', qweatherId: '101090201'
  },
  {
    id: 'pingyao', name: '晋中平遥', pinyin: 'jinzhong', province: '山西', region: '华北',
    slogan: '平遥古城，晋商之源',
    cover: 'pingyao-ancient-city',
    intro: '平遥古城，世界文化遗产，票号日升昌的金融传奇、古城墙的雄风、晋商文化的发源地。',
    bestSeason: '3-5月、9-11月',
    weather: '温带季风气候，四季分明，昼夜温差大。',
    lng: 112.1753, lat: 37.2056, adcode: '140700', qweatherId: '101100402'
  },

  // ========== 东北 (7) ==========
  {
    id: 'haerbin', name: '哈尔滨', pinyin: 'haerbin', province: '黑龙江', region: '东北',
    slogan: '东方莫斯科，冰雪大世界',
    cover: 'harbin-ice-snow',
    intro: '哈尔滨，冰城，中央大街的巴洛克风情、索菲亚教堂的穹顶、冰雪大世界的奇幻，冬日最美。',
    bestSeason: '1-2月（冰雪节）、7-8月（避暑）',
    weather: '温带季风气候，冬季极寒漫长，夏季凉爽短暂。',
    lng: 126.6614, lat: 45.7421, adcode: '230100', qweatherId: '101050100'
  },
  {
    id: 'changchun', name: '长春', pinyin: 'changchun', province: '吉林', region: '东北',
    slogan: '汽车城，电影城，森林城',
    cover: 'changchun-spring-city',
    intro: '长春，北国春城，伪满皇宫的历史痕迹、一汽的工业名片、净月潭的林海雪原，四季风光各异。',
    bestSeason: '4-5月、9-10月、12月-次年2月',
    weather: '温带季风气候，冬季漫长严寒，夏季温暖短暂。',
    lng: 125.3245, lat: 43.8868, adcode: '220100', qweatherId: '101060101'
  },
  {
    id: 'shenyang', name: '沈阳', pinyin: 'shenyang', province: '辽宁', region: '东北',
    slogan: '共和国长子，满清发祥地',
    cover: 'shenyang-imperial-palace',
    intro: '沈阳，东北中心城市，故宫的皇家气派、张氏帅府的民国风华、中街的老字号，历史与现代交织。',
    bestSeason: '4-5月、9-10月',
    weather: '温带季风气候，冬季寒冷，夏季炎热多雨。',
    lng: 123.4315, lat: 41.8057, adcode: '210100', qweatherId: '101070101'
  },
  {
    id: 'dalian', name: '大连', pinyin: 'dalian', province: '辽宁', region: '东北',
    slogan: '浪漫海滨，北方明珠',
    cover: 'dalian-coastal',
    intro: '大连，海滨浪漫之都，星海广场的壮阔、金石滩的黄金海岸、旅顺口的历史遗迹，红瓦绿树。',
    bestSeason: '5-10月',
    weather: '温带海洋性气候，夏季凉爽，冬季寒冷。',
    lng: 121.6147, lat: 38.9140, adcode: '210200', qweatherId: '101070201'
  },
  {
    id: 'changbaishan', name: '长白山', pinyin: 'changbaishan', province: '吉林', region: '东北',
    slogan: '天池仙境，神山圣水',
    cover: 'changbaishan-mountain',
    intro: '长白山，神山圣地，天池的碧水深潭、长白瀑布的飞流、地下森林的幽静，满族文化发源地。',
    bestSeason: '6-9月（避暑）、12月-次年2月（滑雪）',
    weather: '温带大陆性气候，山顶常年积雪，山下四季分明。',
    lng: 128.0864, lat: 42.0716, adcode: '222400', qweatherId: '101060301'
  },
  {
    id: 'mohe', name: '漠河', pinyin: 'mohe', province: '黑龙江', region: '东北',
    slogan: '中国北极，极光之城',
    cover: 'mohe-northern-lights',
    intro: '漠河，中国最北县城，北极村的极光奇观、漠河北极星的庄严、胭脂沟的淘金史，极境之旅。',
    bestSeason: '6-7月（极昼）、12月-次年2月（极夜+极光）',
    weather: '寒温带大陆性气候，冬季极寒，夏季短暂温暖。',
    lng: 122.5336, lat: 52.9958, adcode: '232700', qweatherId: '101051201'
  },
  {
    id: 'anshan', name: '鞍山', pinyin: 'anshan', province: '辽宁', region: '东北',
    slogan: '钢都玉都，千山万壑',
    cover: 'anshan-steel-city',
    intro: '鞍山，中国钢都，千山的道教名山、玉佛苑的世界之最、汤岗子的温泉，工业与自然并存。',
    bestSeason: '4-5月、9-10月',
    weather: '温带季风气候，四季分明，春季多风沙。',
    lng: 122.9956, lat: 41.1089, adcode: '210300', qweatherId: '101070301'
  },

  // ========== 华东 (20) ==========
  {
    id: 'shanghai', name: '上海', pinyin: 'shanghai', province: '上海', region: '华东',
    slogan: '东方魔都，时尚之都',
    cover: 'shanghai-bund',
    intro: '上海，国际金融中心，外滩万国建筑群、陆家嘴天际线、石库门弄堂，中西合璧的海派文化。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，四季分明，梅雨季在6月。',
    lng: 121.4737, lat: 31.2304, adcode: '310100', qweatherId: '101020100'
  },
  {
    id: 'hangzhou', name: '杭州', pinyin: 'hangzhou', province: '浙江', region: '华东',
    slogan: '上有天堂，下有苏杭',
    cover: 'hangzhou-west-lake',
    intro: '杭州，浙江省会，西湖的诗情画意、灵隐寺的禅意、龙井茶的清香，江南水乡的温婉典范。',
    bestSeason: '3-5月（桃花）、9-11月（桂花）',
    weather: '亚热带季风气候，四季分明，梅雨季在6月，秋季最宜人。',
    lng: 120.1551, lat: 30.2741, adcode: '330100', qweatherId: '101210101'
  },
  {
    id: 'suzhou', name: '苏州', pinyin: 'suzhou', province: '江苏', region: '华东',
    slogan: '江南水乡，园林之城',
    cover: 'suzhou-garden',
    intro: '苏州，东方威尼斯，拙政园、留园的园林艺术，平江路的小桥流水，昆曲评弹的江南韵味。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，四季分明，园林四季各有美景。',
    lng: 120.5853, lat: 31.2988, adcode: '320500', qweatherId: '101190401'
  },
  {
    id: 'nanjing', name: '南京', pinyin: 'nanjing', province: '江苏', region: '华东',
    slogan: '六朝古都，江南佳丽',
    cover: 'nanjing-qinhuai',
    intro: '南京，六朝古都，中山陵的恢弘、夫子庙的秦淮风月、梧桐大道的诗意，历史名城的底蕴。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，四季分明，春季花开最美。',
    lng: 118.7969, lat: 32.0603, adcode: '320100', qweatherId: '101190101'
  },
  {
    id: 'wuxi', name: '无锡', pinyin: 'wuxi', province: '江苏', region: '华东',
    slogan: '太湖明珠，鱼米之乡',
    cover: 'wuxi-taihu',
    intro: '无锡，太湖之滨，鼋头渚的湖光山色、灵山大佛的壮观、惠山古镇的韵味，江南富庶之地。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，四季分明，春季樱花烂漫。',
    lng: 120.3119, lat: 31.4912, adcode: '320200', qweatherId: '101190201'
  },
  {
    id: 'ningbo', name: '宁波', pinyin: 'ningbo', province: '浙江', region: '华东',
    slogan: '东方大港，海上丝路',
    cover: 'ningbo-harbor',
    intro: '宁波，海上丝绸之路起点，天一阁的藏书文化、老外滩的欧式风情、溪口的山水，浙东名城。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，四季分明，夏季有台风影响。',
    lng: 121.5498, lat: 29.8683, adcode: '330200', qweatherId: '101210401'
  },
  {
    id: 'wenzhou', name: '温州', pinyin: 'wenzhou', province: '浙江', region: '华东',
    slogan: '永嘉山水，瓯越风情',
    cover: 'wenzhou-island',
    intro: '温州，瓯越文化发源地，雁荡山的奇峰异石、楠溪江的清流、江心屿的孤屿，山水诗之乡。',
    bestSeason: '4-6月、9-11月',
    weather: '亚热带季风气候，四季分明，夏季有台风。',
    lng: 120.6994, lat: 28.9939, adcode: '330300', qweatherId: '101210701'
  },
  {
    id: 'hefei', name: '合肥', pinyin: 'hefei', province: '安徽', region: '华东',
    slogan: '包公故里，创新之都',
    cover: 'hefei-ancient',
    intro: '合肥，包公故里，包公墓的清正、三河古镇的水乡风情、巢湖的碧波，科教名城的现代魅力。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，四季分明，梅雨季在6月。',
    lng: 117.2272, lat: 31.8206, adcode: '340100', qweatherId: '101220101'
  },
  {
    id: 'fuzhou', name: '福州', pinyin: 'fuzhou', province: '福建', region: '华东',
    slogan: '有福之州，榕城春意',
    cover: 'fuzhou-drum-tower',
    intro: '福州，有福之州，三坊七巷的明清建筑、鼓山的摩崖石刻、平潭岛的海景，闽都文化深厚。',
    bestSeason: '3-5月、10-12月',
    weather: '亚热带季风气候，四季温暖，夏季有台风。',
    lng: 119.2965, lat: 26.0745, adcode: '350100', qweatherId: '101230101'
  },
  {
    id: 'xiamen', name: '厦门', pinyin: 'xiamen', province: '福建', region: '华东',
    slogan: '面朝大海，春暖花开',
    cover: 'xiamen-gulangyu',
    intro: '厦门，海滨花园城市，鼓浪屿的琴声、环岛路的海风、沙坡尾的艺术范，慢节奏里藏着浪漫。',
    bestSeason: '3-5月、10-12月',
    weather: '亚热带海洋性气候，温和湿润，夏季有台风。',
    lng: 118.0894, lat: 24.4798, adcode: '350200', qweatherId: '101230201'
  },
  {
    id: 'qingdao', name: '青岛', pinyin: 'qingdao', province: '山东', region: '华东',
    slogan: '红瓦绿树，碧海蓝天',
    cover: 'qingdao-coast',
    intro: '青岛，海滨城市，栈桥的海鸥、八大关的德式建筑、崂山的海上名山、啤酒节的狂欢，浪漫之都。',
    bestSeason: '5-10月',
    weather: '温带海洋性气候，夏季凉爽，冬季寒冷。',
    lng: 120.3826, lat: 36.0671, adcode: '370200', qweatherId: '101120201'
  },
  {
    id: 'yantai', name: '烟台', pinyin: 'yantai', province: '山东', region: '华东',
    slogan: '仙境海岸，葡萄酒城',
    cover: 'yantai-mountain',
    intro: '烟台，海上仙山，蓬莱阁的八仙传说、烟台山的近代建筑、长岛的海岛风光，葡萄酒之都。',
    bestSeason: '5-10月',
    weather: '温带海洋性气候，四季分明，冬季较冷。',
    lng: 121.3915, lat: 37.5136, adcode: '370600', qweatherId: '101120501'
  },
  {
    id: 'huangshan', name: '黄山', pinyin: 'huangshan', province: '安徽', region: '华东',
    slogan: '五岳归来不看山，黄山归来不看岳',
    cover: 'huangshan-mountain',
    intro: '黄山，天下第一奇山，迎客松的傲然、云海的缥缈、日出的壮丽、温泉的养生，徐霞客盛赞。',
    bestSeason: '4-6月、9-11月',
    weather: '亚热带季风气候，山区垂直气候明显，山顶常年寒冷。',
    lng: 118.1686, lat: 30.1344, adcode: '341000', qweatherId: '101221003'
  },
  {
    id: 'quanzhou', name: '泉州', pinyin: 'quanzhou', province: '福建', region: '华东',
    slogan: '世遗之城，宋元港航',
    cover: 'quanzhou-maritime',
    intro: '泉州，世遗之城，开元寺的东西塔、蟳埔村的簪花围、海上丝绸之路的起点，多元文化交融。',
    bestSeason: '3-5月、10-12月',
    weather: '亚热带季风气候，四季温暖，夏季有台风。',
    lng: 118.6758, lat: 24.8741, adcode: '350500', qweatherId: '101230501'
  },
  {
    id: 'zhouzhuang', name: '周庄古镇', pinyin: 'zhouzhuang', province: '江苏', region: '华东',
    slogan: '中国第一水乡',
    cover: 'zhouzhuang-water-town',
    intro: '周庄，江南水乡典范，双桥的经典、沈厅的富贵、万三蹄的飘香，小桥流水人家的诗意。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，四季分明，春季烟雨朦胧。',
    lng: 120.8345, lat: 31.1118, adcode: '320500', qweatherId: '101190401'
  },
  {
    id: 'wuzhen', name: '乌镇', pinyin: 'wuzhen', province: '浙江', region: '华东',
    slogan: '枕水人家，江南六大古镇之一',
    cover: 'wuzhen-water-town',
    intro: '乌镇，枕水人家，东栅的原汁原味、西栅的夜景如画、水乡的小桥乌篷船，茅盾故里。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，四季分明，烟雨江南。',
    lng: 120.4900, lat: 30.6355, adcode: '330300', qweatherId: '101210301'
  },
  {
    id: 'xitang', name: '西塘', pinyin: 'xitang', province: '浙江', region: '华东',
    slogan: '生活着的千年古镇',
    cover: 'xitang-water-town',
    intro: '西塘，生活着的千年古镇，烟雨长廊的浪漫、红粉朱楼的倒影、千年古井的传说，原汁原味。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，四季分明，春季最美。',
    lng: 120.9000, lat: 30.9300, adcode: '330300', qweatherId: '101210302'
  },
  {
    id: 'qiandaohu', name: '千岛湖', pinyin: 'qiandaohu', province: '浙江', region: '华东',
    slogan: '湖光山色，千岛星罗',
    cover: 'qiandaohu-lake',
    intro: '千岛湖，新安江水电站形成的人工湖，1078座岛屿星罗棋布，农夫山泉的水源地，山水绝美。',
    bestSeason: '4-11月',
    weather: '亚热带季风气候，四季分明，湖光山色四季各异。',
    lng: 119.0463, lat: 29.6088, adcode: '330100', qweatherId: '101210102'
  },
  {
    id: 'wuyishan', name: '武夷山', pinyin: 'wuyishan', province: '福建', region: '华东',
    slogan: '碧水丹山，世界文化与自然双遗产',
    cover: 'wuyishan-mountain',
    intro: '武夷山，世界双遗产，天游峰的俯瞰、九曲溪的竹筏、大红袍的茶香、朱熹的理学，人文与自然兼具。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，四季温暖，山区温差较大。',
    lng: 118.0334, lat: 27.7560, adcode: '350700', qweatherId: '101230601'
  },
  {
    id: 'taishan', name: '泰山', pinyin: 'taishan', province: '山东', region: '华东',
    slogan: '五岳之首，天下第一山',
    cover: 'taishan-mountain',
    intro: '泰山，五岳之首，泰山日出的壮丽、十八盘的险峻、封禅文化的厚重，登泰山而小天下。',
    bestSeason: '4-5月、9-11月',
    weather: '温带季风气候，山顶常年低温，需备厚衣。',
    lng: 117.1000, lat: 36.2551, adcode: '370900', qweatherId: '101120801'
  },

  // ========== 华中 (10) ==========
  {
    id: 'wuhan', name: '武汉', pinyin: 'wuhan', province: '湖北', region: '华中',
    slogan: '江城武汉，大江大湖',
    cover: 'wuhan-yangtze',
    intro: '武汉，江城，黄鹤楼的千古名楼、东湖的碧波、江汉路的繁华、热干面的烟火气，九省通衢。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，夏季炎热，冬季寒冷。',
    lng: 114.3055, lat: 30.5928, adcode: '420100', qweatherId: '101200101'
  },
  {
    id: 'changsha', name: '长沙', pinyin: 'changsha', province: '湖南', region: '华中',
    slogan: '星城长沙，娱乐之都',
    cover: 'changsha-yuelu',
    intro: '长沙，娱乐之都，岳麓书院的千年文脉、橘子洲的湘江风光、太平街的美食臭豆腐，火辣热情。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，夏季炎热，冬季湿冷。',
    lng: 112.9389, lat: 28.2278, adcode: '430100', qweatherId: '101250101'
  },
  {
    id: 'zhengzhou', name: '郑州', pinyin: 'zhengzhou', province: '河南', region: '华中',
    slogan: '天地之中，商都郑州',
    cover: 'zhengzhou-shang',
    intro: '郑州，商都，少林寺的禅宗、龙门石窟的瑰宝、只有河南戏剧幻城的震撼，中原文化之源。',
    bestSeason: '3-5月、9-11月',
    weather: '温带季风气候，四季分明，夏季炎热。',
    lng: 113.6253, lat: 34.7466, adcode: '410100', qweatherId: '101180101'
  },
  {
    id: 'luoyang', name: '洛阳', pinyin: 'luoyang', province: '河南', region: '华中',
    slogan: '千年古都，牡丹花城',
    cover: 'luoyang-longmen',
    intro: '洛阳，十三朝古都，龙门石窟的佛教艺术、白马寺的祖庭、牡丹花的国色天香，河洛文明之源。',
    bestSeason: '4月（牡丹节）、9-11月',
    weather: '温带季风气候，四季分明，春季牡丹花盛。',
    lng: 112.4540, lat: 34.6197, adcode: '410300', qweatherId: '101180901'
  },
  {
    id: 'kaifeng', name: '开封', pinyin: 'kaifeng', province: '河南', region: '华中',
    slogan: '东京梦华，千年汴梁',
    cover: 'kaifeng-ancient',
    intro: '开封，北宋东京城，清明上河园的《东京梦华》、铁塔的千年屹立、包公祠的铁面无私，汴梁古韵。',
    bestSeason: '4-5月、9-11月',
    weather: '温带季风气候，四季分明，秋季最宜人。',
    lng: 114.3476, lat: 34.7971, adcode: '410200', qweatherId: '101180801'
  },
  {
    id: 'nanchang', name: '南昌', pinyin: 'nanchang', province: '江西', region: '华中',
    slogan: '英雄之城，豫章故郡',
    cover: 'nanchang-jiangxi',
    intro: '南昌，英雄城，滕王阁的千古绝唱、秋水广场的音乐喷泉、绳金塔的庙会，赣江穿城而过。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，四季分明，梅雨季在6月。',
    lng: 115.8581, lat: 28.6832, adcode: '360100', qweatherId: '101240101'
  },
  {
    id: 'wudangshan', name: '武当山', pinyin: 'wudangshan', province: '湖北', region: '华中',
    slogan: '道教圣地，金顶云海',
    cover: 'wudangshan-temple',
    intro: '武当山，道教圣地，金顶的云海日出、紫霄宫的红墙金瓦、太极峡的秀美，张三丰的武当武术发源地。',
    bestSeason: '4-10月',
    weather: '亚热带季风气候，山区垂直气候，山顶温度较低。',
    lng: 111.0086, lat: 32.4054, adcode: '420300', qweatherId: '101200901'
  },
  {
    id: 'zhangjiajie', name: '张家界', pinyin: 'zhangjiajie', province: '湖南', region: '华中',
    slogan: '阿凡达秘境，人间仙境',
    cover: 'zhangjiajie-avatar',
    intro: '张家界，世界自然遗产，三千奇峰、八百秀水，天子山的御笔峰、金鞭溪的清流，阿凡达取景地。',
    bestSeason: '4-11月',
    weather: '亚热带季风气候，山区温差大，多雾。',
    lng: 110.4792, lat: 29.3249, adcode: '430800', qweatherId: '101240901'
  },
  {
    id: 'fenghuang', name: '凤凰古城', pinyin: 'fenghuang', province: '湖南', region: '华中',
    slogan: '边城沱江，梦幻湘西',
    cover: 'fenghuang-ancient',
    intro: '凤凰古城，沈从文笔下的边城，沱江的吊脚楼、虹桥的夜景、苗族银饰的闪光，湘西的梦幻。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，四季分明，春季最美。',
    lng: 109.6096, lat: 27.9480, adcode: '431200', qweatherId: '101241001'
  },
  {
    id: 'wuyuan', name: '婺源', pinyin: 'wuyuan', province: '江西', region: '华中',
    slogan: '中国最美乡村',
    cover: 'wuyuan-rapeseed',
    intro: '婺源，最美乡村，江岭的万亩油菜花、篁岭的晒秋、古村落的徽派建筑，春日里的世外桃源。',
    bestSeason: '3-4月（油菜花）、9-11月（晒秋）',
    weather: '亚热带季风气候，四季分明，春季花海最美。',
    lng: 117.8580, lat: 29.2452, adcode: '361100', qweatherId: '101240301'
  },

  // ========== 华南 (7) ==========
  {
    id: 'guangzhou', name: '广州', pinyin: 'guangzhou', province: '广东', region: '华南',
    slogan: '花城美食，千年商都',
    cover: 'guangzhou-pearl-river',
    intro: '广州，千年商都，早茶文化的精致、骑楼风情的独特、珠江夜游的璀璨、粤菜的鲜美，岭南文化中心。',
    bestSeason: '10月-次年4月',
    weather: '亚热带季风气候，冬季温暖，夏季炎热多雨。',
    lng: 113.2644, lat: 23.1291, adcode: '440100', qweatherId: '101280101'
  },
  {
    id: 'shenzhen', name: '深圳', pinyin: 'shenzhen', province: '广东', region: '华南',
    slogan: '创新之城，活力无限',
    cover: 'shenzhen-skyline',
    intro: '深圳，改革开放前沿，鹏城的科技创新、海滨风光、主题乐园，从小渔村到国际都市的传奇。',
    bestSeason: '10月-次年4月',
    weather: '亚热带海洋性气候，全年温暖，夏季有台风。',
    lng: 114.0579, lat: 22.5431, adcode: '440300', qweatherId: '101280601'
  },
  {
    id: 'zhuhai', name: '珠海', pinyin: 'zhuhai', province: '广东', region: '华南',
    slogan: '百岛之市，浪漫之城',
    cover: 'zhuhai-island',
    intro: '珠海，百岛之市，情侣路的海岸线、长隆海洋王国的欢乐、横琴岛的生态，粤港澳大湾区明珠。',
    bestSeason: '10月-次年4月',
    weather: '亚热带海洋性气候，全年温暖，夏季有台风。',
    lng: 113.5767, lat: 22.2707, adcode: '440400', qweatherId: '101280701'
  },
  {
    id: 'guilin', name: '桂林', pinyin: 'guilin', province: '广西', region: '华南',
    slogan: '桂林山水甲天下',
    cover: 'guilin-li-river',
    intro: '桂林，喀斯特地貌代表，漓江山水的画卷、象鼻山的神似、两江四湖的夜景，山水甲天下。',
    bestSeason: '4-10月',
    weather: '亚热带季风气候，四季分明，雨量充沛。',
    lng: 110.2993, lat: 25.2736, adcode: '450300', qweatherId: '101250501'
  },
  {
    id: 'yangshuo', name: '阳朔', pinyin: 'yangshuo', province: '广西', region: '华南',
    slogan: '阳朔山水甲桂林',
    cover: 'yangshuo-west-street',
    intro: '阳朔，桂林山水精华，西街的异域风情、十里画廊的骑行、漓江竹筏的悠闲，背包客的天堂。',
    bestSeason: '4-10月',
    weather: '亚热带季风气候，四季分明，春秋最佳。',
    lng: 110.4955, lat: 24.7766, adcode: '450300', qweatherId: '101250502'
  },
  {
    id: 'nanning', name: '南宁', pinyin: 'nanning', province: '广西', region: '华南',
    slogan: '绿城南宁，邕江明珠',
    cover: 'nanning-green-city',
    intro: '南宁，绿城，青秀山的东南亚风情园、邕江的滨水步道、中山路的老友粉，东盟博览会举办地。',
    bestSeason: '10月-次年4月',
    weather: '亚热带季风气候，全年温暖，夏季炎热。',
    lng: 108.3669, lat: 22.8170, adcode: '450100', qweatherId: '101250102'
  },
  {
    id: 'sanya', name: '三亚', pinyin: 'sanya', province: '海南', region: '华南',
    slogan: '天涯海角，热带天堂',
    cover: 'sanya-tropical-beach',
    intro: '三亚，热带海滨，亚龙湾的细软沙滩、蜈支洲岛的海底世界、天涯海角的浪漫，冬季避寒首选。',
    bestSeason: '10月-次年4月',
    weather: '热带季风气候，全年温暖，夏季台风。',
    lng: 109.5119, lat: 18.2528, adcode: '460200', qweatherId: '101310202'
  },

  // ========== 西南 (11) ==========
  {
    id: 'chengdu', name: '成都', pinyin: 'chengdu', province: '四川', region: '西南',
    slogan: '一座来了就不想走的城市',
    cover: 'chengdu-panda',
    intro: '成都，四川省会，大熊猫的憨态可掬、宽窄巷子的慢生活、火锅的麻辣飘香、锦里的三国文化。',
    bestSeason: '3-6月、9-11月',
    weather: '亚热带湿润气候，春秋最舒适，夏季闷热多雨。',
    lng: 104.0668, lat: 30.5728, adcode: '510100', qweatherId: '101270101'
  },
  {
    id: 'chongqing', name: '重庆', pinyin: 'chongqing', province: '重庆', region: '西南',
    slogan: '8D魔幻山城',
    cover: 'chongqing-mountain-city',
    intro: '重庆，山城雾都，洪崖洞的吊脚楼、磁器口的老街、长江索道的过江、火锅的热情，立体都市。',
    bestSeason: '3-5月、9-11月',
    weather: '亚热带季风气候，夏季炎热，冬季湿冷，多雾。',
    lng: 106.5516, lat: 29.5630, adcode: '500100', qweatherId: '101040100'
  },
  {
    id: 'kunming', name: '昆明', pinyin: 'kunming', province: '云南', region: '西南',
    slogan: '春城无处不飞花',
    cover: 'kunming-spring-city',
    intro: '昆明，春城四季如春，滇池的高原明珠、石林的喀斯特奇观、翠湖的红嘴鸥、过桥米线的传说。',
    bestSeason: '全年适宜',
    weather: '亚热带高原季风气候，四季如春，紫外线强。',
    lng: 102.8329, lat: 24.8801, adcode: '530100', qweatherId: '101290101'
  },
  {
    id: 'dali', name: '大理', pinyin: 'dali', province: '云南', region: '西南',
    slogan: '风花雪月，苍山洱海',
    cover: 'dali-erhai',
    intro: '大理，白族自治州，苍山的云弄峰、洱海的碧波、三塔的千年崇圣寺、古城的人民路，风花雪月。',
    bestSeason: '4-6月、9-11月',
    weather: '高原季风气候，四季如春，紫外线强。',
    lng: 100.2406, lat: 25.6066, adcode: '532900', qweatherId: '101290201'
  },
  {
    id: 'lijiang', name: '丽江', pinyin: 'lijiang', province: '云南', region: '西南',
    slogan: '遇见雪山与古城的柔软时光',
    cover: 'lijiang-old-town',
    intro: '丽江，纳西古城，玉龙雪山的冰川、丽江古城的酒吧街、束河古镇的宁静、茶马古道的历史。',
    bestSeason: '4-6月、9-11月',
    weather: '高原季风气候，紫外线强，昼夜温差大。',
    lng: 100.2330, lat: 26.8721, adcode: '530700', qweatherId: '101291401'
  },
  {
    id: 'shangrila', name: '香格里拉', pinyin: 'xianggelila', province: '云南', region: '西南',
    slogan: '消失的地平线，世外桃源',
    cover: 'shangrila-plateau',
    intro: '香格里拉，普达措的国家公园、松赞林寺的小布达拉宫、纳帕海的依拉草原、独克宗的月光古城。',
    bestSeason: '5-10月',
    weather: '高原季风气候，海拔3300米，冬季寒冷，紫外线强。',
    lng: 99.7062, lat: 27.8194, adcode: '533400', qweatherId: '101291301'
  },
  {
    id: 'jiuzhai', name: '九寨沟', pinyin: 'jiuzhai', province: '四川', region: '西南',
    slogan: '童话世界，人间仙境',
    cover: 'jiuzhai-valley',
    intro: '九寨沟，世界自然遗产，翠海的五彩池、叠瀑的诺日朗、彩林的层林尽染、雪峰的皑皑雪山。',
    bestSeason: '4-11月',
    weather: '高原季风气候，夏季凉爽，冬季寒冷。',
    lng: 103.9222, lat: 33.2614, adcode: '510300', qweatherId: '101270402'
  },
  {
    id: 'daocheng', name: '稻城', pinyin: 'daocheng', province: '四川', region: '西南',
    slogan: '最后的香格里拉，稻城亚丁',
    cover: 'daocheng-yading',
    intro: '稻城亚丁，蓝色星球上最后一片净土，央迈勇的神山、牛奶海的碧池、红草地的金秋，户外天堂。',
    bestSeason: '5-6月（花海）、10月（秋景）',
    weather: '高原气候，海拔4000米以上，冬季严寒，紫外线强。',
    lng: 100.3350, lat: 29.0314, adcode: '513300', qweatherId: '101271301'
  },
  {
    id: 'emeishan', name: '峨眉山', pinyin: 'emeishan', province: '四川', region: '西南',
    slogan: '普贤道场，佛教四大名山之一',
    cover: 'emeishan-buddha',
    intro: '峨眉山，普贤菩萨道场，金顶的云海日出、十方普贤的金身、清音阁的山水、乐山大佛的雄伟。',
    bestSeason: '4-6月、9-11月',
    weather: '亚热带季风气候，山区垂直气候，山顶有积雪。',
    lng: 103.4836, lat: 29.5415, adcode: '511400', qweatherId: '101271401'
  },
  {
    id: 'lasa', name: '拉萨', pinyin: 'lasa', province: '西藏', region: '西南',
    slogan: '日光城，布达拉宫',
    cover: 'lhasa-potala',
    intro: '拉萨，日光城，布达拉宫的雄伟、大昭寺的朝圣、八廓街的转经、纳木错的天湖，藏传佛教中心。',
    bestSeason: '5-10月',
    weather: '高原气候，海拔3650米，紫外线极强，昼夜温差大。',
    lng: 91.1409, lat: 29.6456, adcode: '540100', qweatherId: '101140100'
  },
  {
    id: 'huangguoshu', name: '黄果树', pinyin: 'huangguoshu', province: '贵州', region: '西南',
    slogan: '亚洲第一大瀑布',
    cover: 'huangguoshu-waterfall',
    intro: '黄果树瀑布，亚洲第一大瀑布，水帘洞的穿越、天星桥的水上石林、陡坡塘的西游取景地，壮哉。',
    bestSeason: '5-10月',
    weather: '亚热带季风气候，四季温暖，瀑布水量夏秋最大。',
    lng: 105.6867, lat: 25.9881, adcode: '520400', qweatherId: '101260401'
  },

  // ========== 西北 (7) ==========
  {
    id: 'xian', name: '西安', pinyin: 'xian', province: '陕西', region: '西北',
    slogan: '千年古都，一眼万年',
    cover: 'xian-terracotta',
    intro: '西安，十三朝古都，兵马俑的世界奇迹、古城墙的骑行、回民街的小吃、大雁塔的音乐喷泉。',
    bestSeason: '3-5月、9-10月',
    weather: '温带季风气候，昼夜温差大，夏季炎热，冬季干冷。',
    lng: 108.9402, lat: 34.3416, adcode: '610100', qweatherId: '101110100'
  },
  {
    id: 'dunhuang', name: '敦煌', pinyin: 'dunhuang', province: '甘肃', region: '西北',
    slogan: '丝路明珠，千年飞天',
    cover: 'dunhuang-mogao',
    intro: '敦煌，丝绸之路明珠，莫高窟的壁画飞天、鸣沙山的月牙泉、雅丹的魔鬼城、玉门关的春风。',
    bestSeason: '5-10月',
    weather: '温带大陆性气候，极干燥，昼夜温差大，紫外线强。',
    lng: 94.6630, lat: 40.1422, adcode: '620900', qweatherId: '101160800'
  },
  {
    id: 'wulumuqi', name: '乌鲁木齐', pinyin: 'wulumuqi', province: '新疆', region: '西北',
    slogan: '亚心之都，西域风情',
    cover: 'urumqi-mosque',
    intro: '乌鲁木齐，亚心之都，天山天池的瑶池、大巴扎的民族风情、火焰山的炎热、葡萄沟的甜蜜。',
    bestSeason: '6-10月',
    weather: '温带大陆性气候，冬季严寒，夏季炎热干燥。',
    lng: 87.6168, lat: 43.8256, adcode: '650100', qweatherId: '101130101'
  },
  {
    id: 'qinghaihu', name: '青海湖', pinyin: 'qinghaihu', province: '青海', region: '西北',
    slogan: '中国最大内陆咸水湖',
    cover: 'qinghaihu-lake',
    intro: '青海湖，中国最大内陆湖，7月的油菜花海、环湖骑行的浪漫、二郎剑的观鸟、海心山的朝圣。',
    bestSeason: '7-8月（油菜花）、5-6月（候鸟）',
    weather: '高原大陆性气候，海拔3200米，冬季严寒，夏季凉爽。',
    lng: 100.9066, lat: 36.7388, adcode: '632200', qweatherId: '101150501'
  },
  {
    id: 'chaka', name: '茶卡盐湖', pinyin: 'chaka', province: '青海', region: '西北',
    slogan: '天空之镜，梦幻盐湖',
    cover: 'chaka-salt-lake',
    intro: '茶卡盐湖，天空之镜，镜面倒影的梦幻、盐雕艺术的震撼、小火车的复古、星空的璀璨。',
    bestSeason: '5-10月',
    weather: '高原大陆性气候，海拔3100米，紫外线极强，昼夜温差大。',
    lng: 99.0860, lat: 36.9145, adcode: '632800', qweatherId: '101150502'
  },
  {
    id: 'zhangye', name: '张掖', pinyin: 'zhangye', province: '甘肃', region: '西北',
    slogan: '七彩丹霞，塞上江南',
    cover: 'zhangye-danxia',
    intro: '张掖，七彩丹霞的彩色丘陵、冰沟丹霞的壮观、马蹄寺的石窟、湿地公园的芦苇，河西走廊重镇。',
    bestSeason: '5-10月',
    weather: '温带大陆性气候，干燥少雨，昼夜温差大。',
    lng: 100.4490, lat: 38.9256, adcode: '620700', qweatherId: '101160201'
  },
  {
    id: 'huashan', name: '华山', pinyin: 'huashan', province: '陕西', region: '西北',
    slogan: '奇险天下第一山',
    cover: 'huashan-mountain',
    intro: '华山，五岳之西岳，苍龙岭的险峻、长空栈道的刺激、西峰的斧劈石、北峰的云台，道教圣地。',
    bestSeason: '4-5月、9-11月',
    weather: '温带季风气候，山顶常年低温，登山需备防寒装备。',
    lng: 110.0855, lat: 34.4890, adcode: '610500', qweatherId: '101110401'
  }
]

export function getCity(id) {
  return cities.find(c => c.id === id)
}

export function getCityByName(name) {
  return cities.find(c => c.name === name)
}

export function getCitiesByRegion(region) {
  if (!region) return cities
  return cities.filter(c => c.region === region)
}

export function getCitiesBySearch(query) {
  if (!query) return cities
  const q = query.toLowerCase().trim()
  return cities.filter(c =>
    c.name.includes(query) ||
    c.pinyin.toLowerCase().includes(q) ||
    c.province.includes(query)
  )
}

export const regions = ['华北', '东北', '华东', '华中', '华南', '西南', '西北']

export const totalCities = cities.length