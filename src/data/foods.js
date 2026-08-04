// 美食数据
export const foods = [
  // ===== 成都 =====
  { id: 'chengdu-hotpot', cityId: 'chengdu', name: '成都火锅', cover: 'img/chengdu-hotpot.png', desc: '以牛油锅底、麻辣鲜香著称，毛肚、鸭肠、黄喉是必点。', recommend: ['小龙坎', '蜀大侠', '大龙燚'] },
  { id: 'chengdu-chuanchuan', cityId: 'chengdu', name: '串串香', cover: 'img/chengdu-chuanchuan.png', desc: '把火锅串成签，按签计费，市井烟火气十足。', recommend: ['钢管厂五区小郡肝', '玉林串串'] },
  { id: 'chengdu-longchaoshou', cityId: 'chengdu', name: '龙抄手', cover: 'img/chengdu-longchaoshou.png', desc: '成都名小吃，皮薄馅嫩，红油抄手尤为经典。', recommend: ['龙抄手总店'] },

  // ===== 杭州 =====
  { id: 'hangzhou-xihucuyu', cityId: 'hangzhou', name: '西湖醋鱼', cover: 'img/hangzhou-xihucuyu.png', desc: '选草鱼活养，鱼肉嫩滑，糖醋汁酸甜适口。', recommend: ['楼外楼', '知味观'] },
  { id: 'hangzhou-longjingxiaoren', cityId: 'hangzhou', name: '龙井虾仁', cover: 'img/hangzhou-longjingxiaoren.png', desc: '明前龙井茶叶与河虾仁同炒，清香鲜美。', recommend: ['楼外楼'] },
  { id: 'hangzhou-dongpo', cityId: 'hangzhou', name: '东坡肉', cover: 'img/hangzhou-dongpo.png', desc: '肥而不腻、酥烂入味，相传为苏东坡所创。', recommend: ['楼外楼', '外婆家'] },

  // ===== 西安 =====
  { id: 'xian-roujiamo', cityId: 'xian', name: '肉夹馍', cover: 'img/xian-roujiamo.png', desc: '腊汁肉夹白吉馍，"中式汉堡"，外脆里嫩。', recommend: ['樊记腊汁肉', '子午路张记'] },
  { id: 'xian-paomo', cityId: 'xian', name: '羊肉泡馍', cover: 'img/xian-paomo.png', desc: '掰碎馍块煮入羊肉汤，配糖蒜辣酱，暖胃饱腹。', recommend: ['老孙家', '同盛祥'] },
  { id: 'xian-liangpi', cityId: 'xian', name: '凉皮', cover: 'img/xian-liangpi.png', desc: '筋道凉皮拌麻酱辣油，夏天开胃神器。', recommend: ['魏家凉皮'] },

  // ===== 丽江 =====
  { id: 'lijiang-guozhuang', cityId: 'lijiang', name: '纳西烤鱼', cover: 'img/lijiang-guozhuang.png', desc: '丽江粑粑配烤鱼，外焦里嫩，蘸水香辣。', recommend: ['古城农家菜'] },
  { id: 'lijiang-baba', cityId: 'lijiang', name: '丽江粑粑', cover: 'img/lijiang-baba.png', desc: '纳西传统面食，甜咸两味，酥香耐存。', recommend: ['街边老店'] },
  { id: 'lijiang-shanguo', cityId: 'lijiang', name: '腊排骨火锅', cover: 'img/lijiang-shanguo.png', desc: '高原土猪腊排骨熬汤，咸香浓郁，配野菜。', recommend: ['新城腊排骨一条街'] },

  // ===== 厦门 =====
  { id: 'xiamen-shachamian', cityId: 'xiamen', name: '沙茶面', cover: 'img/xiamen-shachamian.png', desc: '沙茶酱熬汤，鲜辣浓香，配料自选。', recommend: ['乌糖沙茶面', '四里沙茶面'] },
  { id: 'xiamen-haishen', cityId: 'xiamen', name: '海蛎煎', cover: 'img/xiamen-haishen.png', desc: '鲜海蛎裹地瓜粉煎制，外软内鲜，配甜辣酱。', recommend: ['中山路夜市'] },
  { id: 'xiamen-zongzi', cityId: 'xiamen', name: '烧肉粽', cover: 'img/xiamen-zongzi.png', desc: '糯米包五花肉、蛋黄、香菇，蘸花生酱甜辣酱。', recommend: ['1980烧肉粽'] },

  // ===== 北京 =====
  { id: 'beijing-duck', cityId: 'beijing', name: '北京烤鸭', cover: 'img/xian-roujiamo.png', desc: '果木炭火烤制，皮脆肉嫩，配薄饼甜面酱葱丝。', recommend: ['全聚德', '大董烤鸭', '便宜坊'] },
  { id: 'beijing-chaoganr', cityId: 'beijing', name: '炒肝', cover: 'img/chengdu-chuanchuan.png', desc: '猪肝大肠勾芡熬制，老北京早餐经典。', recommend: ['姚记炒肝'] },

  // ===== 上海 =====
  { id: 'shanghai-xiaolong', cityId: 'shanghai', name: '小笼包', cover: 'img/hangzhou-longjingxiaoren.png', desc: '皮薄汁多，十八个褶，配姜丝香醋。', recommend: ['南翔馒头店', '富春小笼'] },
  { id: 'shanghai-hun', cityId: 'shanghai', name: '本帮红烧肉', cover: 'img/hangzhou-dongpo.png', desc: '五花三层，浓油赤酱，肥而不腻。', recommend: ['外婆家', '兰心餐厅'] },

  // ===== 广州 =====
  { id: 'guangzhou-zaocha', cityId: 'guangzhou', name: '早茶', cover: 'img/lijiang-baba.png', desc: '虾饺、烧卖、叉烧包、凤爪，粤式早茶文化。', recommend: ['莲香楼', '陶陶居', '泮溪酒家'] },
  { id: 'guangzhou-baiji', cityId: 'guangzhou', name: '白切鸡', cover: 'img/hangzhou-xihucuyu.png', desc: '皮爽肉滑，原汁原味，粤式经典。', recommend: ['清平鸡', '文记'] },

  // ===== 深圳 =====
  { id: 'shenzhen-chaozhou', cityId: 'shenzhen', name: '潮汕牛肉火锅', cover: 'img/chengdu-hotpot.png', desc: '吊龙、匙柄、匙仁，三花趾部位讲究。', recommend: ['八合里海记', '潮牛道'] },

  // ===== 重庆 =====
  { id: 'chongqing-lazi', cityId: 'chongqing', name: '重庆火锅', cover: 'img/chengdu-hotpot.png', desc: '九宫格火锅，麻辣鲜香，毛肚鸭肠黄喉。', recommend: ['珮姐老火锅', '朝天门', '刘一手'] },
  { id: 'chongqing-xiaomian', cityId: 'chongqing', name: '重庆小面', cover: 'img/chengdu-longchaoshou.png', desc: '麻辣鲜香的早餐面，佐料丰富。', recommend: ['胖妹面庄', '开半天面'] },

  // ===== 苏州 =====
  { id: 'suzhou-sx', cityId: 'hangzhou-new', name: '松鼠鳜鱼', cover: 'img/hangzhou-xihucuyu.png', desc: '造型如松鼠，酸甜适口，苏帮菜代表。', recommend: ['松鹤楼', '得月楼'] },
  { id: 'suzhou-noodle', cityId: 'hangzhou-new', name: '奥灶面', cover: 'img/chengdu-longchaoshou.png', desc: '红汤爆鱼面，汤浓味鲜，苏州早餐之王。', recommend: ['朱鸿兴', '陆长兴'] },

  // ===== 南京 =====
  { id: 'nanjing-duck', cityId: 'nanjing', name: '南京盐水鸭', cover: 'img/hangzhou-xihucuyu.png', desc: '皮白肉嫩，肥而不腻，金陵菜代表。', recommend: ['韩复兴', '板鸭名家'] },
  { id: 'nanjing-xiaochi', cityId: 'nanjing', name: '鸭血粉丝汤', cover: 'img/xian-liangpi.png', desc: '鸭血、鸭肠、鸭肝、鸭汤，金陵小吃。', recommend: ['回味', '鸭得堡'] },

  // ===== 昆明 =====
  { id: 'kunming-guoqiao', cityId: 'chengdu-new', name: '过桥米线', cover: 'img/lijiang-baba.png', desc: '汤烫菜熟，配料丰富，云南名片。', recommend: ['建新园', '福华园'] },

  // ===== 大理 =====
  { id: 'dali-ba', cityId: 'hangzhou-west', name: '大理土八碗', cover: 'img/lijiang-shanguo.png', desc: '白族传统宴席，八道菜，红白喜事必备。', recommend: ['古城白族人家'] },
  { id: 'dali-han', cityId: 'hangzhou-west', name: '大理砂锅鱼', cover: 'img/hangzhou-xihucuyu.png', desc: '洱海鱼配松茸，鲜嫩无比。', recommend: ['古城砂锅鱼'] },

  // ===== 青岛 =====
  { id: 'qingdao-beer', cityId: 'xian-new', name: '青岛啤酒', cover: 'img/lijiang-guozhuang.png', desc: '百年品牌，原浆鲜啤，配蛤蜊绝配。', recommend: ['登州路啤酒街'] },
  { id: 'qingdao-seafood', cityId: 'xian-new', name: '辣炒蛤蜊', cover: 'img/xiamen-haishen.png', desc: '青岛家常菜，鲜活蛤蜊配辣椒，下酒神器。', recommend: ['营口路市场'] },

  // ===== 三亚 =====
  { id: 'sanya-seafood', cityId: 'lijiang-new', name: '海鲜大餐', cover: 'img/xiamen-haishen.png', desc: '和乐蟹、文昌鱼、基围虾，原汁原味。', recommend: ['第一市场', '林姐海鲜'] },
  { id: 'sanya-ba', cityId: 'lijiang-new', name: '海南四大名菜', cover: 'img/hangzhou-xihucuyu.png', desc: '文昌鸡、加积鸭、东山羊、和乐蟹。', recommend: ['四大名菜'] },

  // ===== 哈尔滨 =====
  { id: 'haerbin-jiaozi', cityId: 'xiamen-new', name: '东北饺子', cover: 'img/xian-roujiamo.png', desc: '猪肉酸菜馅，皮薄馅大。', recommend: ['老昌春饼', '东方饺子王'] },
  { id: 'haerbin-binghua', cityId: 'xiamen-new', name: '冰雕大世界', cover: 'img/xiamen-g3.png', desc: '冰雪大世界，滑雪滑冰，冬日狂欢。', recommend: ['中央大街'] },

  // ===== 张家界 =====
  { id: 'zhangjiajie-militiao', cityId: 'beijing-new', name: '三下锅', cover: 'img/lijiang-shanguo.png', desc: '湘西特色，腊肉、萝卜、豆腐同煮。', recommend: ['张家界市区'] },

  // ===== 桂林 =====
  { id: 'guilin-mifen', cityId: 'shanghai-new', name: '桂林米粉', cover: 'img/chengdu-longchaoshou.png', desc: '卤菜粉、马肉米粉，早餐之王。', recommend: ['石记米粉', '秋刀鱼'] },
  { id: 'guilin-yang', cityId: 'shanghai-new', name: '阳朔啤酒鱼', cover: 'img/hangzhou-xihucuyu.png', desc: '漓江鱼配啤酒焖煮，鲜嫩无比。', recommend: ['阳朔大师傅啤酒鱼'] },

  // ===== 九寨沟 =====
  { id: 'jiuzhai-zang', cityId: 'guangzhou-new', name: '藏式火锅', cover: 'img/lijiang-shanguo.png', desc: '牦牛肉、青稞饼、酥油茶，高原风味。', recommend: ['沟口藏寨'] }
]

export function foodsByCity(cityId) {
  return foods.filter(f => f.cityId === cityId)
}
