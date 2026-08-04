export const foodTypes = [
  '中餐', '小吃', '海鲜', '面食', '火锅', '烧烤', '糕点', '茶饮', '素食', '野味', '家常菜'
]

export const foods = [
  // ========== 华北 (8城市) ==========

  // --- 北京 ---
  {
    id: 'beijing-duck', cityId: 'beijing', name: '北京烤鸭',
    cover: 'beijing-roast-duck',
    desc: '果木炭火烤制，皮脆肉嫩，配薄饼甜面酱葱丝黄瓜丝食用。',
    recommend: ['全聚德', '大董烤鸭', '便宜坊'],
    type: '中餐', priceRange: '人均200-500元', rating: 4.8
  },
  {
    id: 'beijing-noodles', cityId: 'beijing', name: '老北京炸酱面',
    cover: 'beijing-noodles',
    desc: '手工面条配肉丁炸酱，码子丰富，老北京早餐经典。',
    recommend: ['海碗居', '老北京炸酱面大王'],
    type: '面食', priceRange: '人均30-60元', rating: 4.5
  },
  {
    id: 'beijing-douzhi', cityId: 'beijing', name: '豆汁焦圈',
    cover: 'beijing-doujiao',
    desc: '绿豆发酵豆汁配焦圈咸菜，老北京最地道的早餐。',
    recommend: ['姚记豆汁', '老磁器口豆汁店'],
    type: '小吃', priceRange: '人均15-30元', rating: 4.2
  },

  // --- 天津 ---
  {
    id: 'tianjin-goubuli', cityId: 'tianjin', name: '狗不理包子',
    cover: 'tianjin-goubuli',
    desc: '十八个褶，皮薄馅大，猪肉馅鲜香，津门老字号。',
    recommend: ['狗不理总店', '张记包子铺'],
    type: '中餐', priceRange: '人均50-120元', rating: 4.3
  },
  {
    id: 'tianjin-mahua', cityId: 'tianjin', name: '十八街麻花',
    cover: 'tianjin-mahua',
    desc: '桂发祥十八街麻花，酥脆香甜，百余年工艺传承。',
    recommend: ['桂发祥总店', '食品街分店'],
    type: '糕点', priceRange: '人均20-40元', rating: 4.4
  },
  {
    id: 'tianjin-gaojuan', cityId: 'tianjin', name: '耳朵眼炸糕',
    cover: 'tianjin-zhagao',
    desc: '黄米江米面外裹豆沙馅，炸至金黄，外酥里糯。',
    recommend: ['耳朵眼炸糕总店', '西北角店'],
    type: '小吃', priceRange: '人均10-20元', rating: 4.3
  },

  // --- 石家庄 ---
  {
    id: 'shijiazhuang-ganglu', cityId: 'shijiazhuang', name: '缸炉烧饼',
    cover: 'hebei-shaobing',
    desc: '缸炉烘烤，外皮酥脆，内瓤层次分明，河北家常主食。',
    recommend: ['正定宋记', '栾城老陈家'],
    type: '面食', priceRange: '人均5-15元', rating: 4.2
  },
  {
    id: 'shijiazhuang-bazwan', cityId: 'shijiazhuang', name: '正定八大碗',
    cover: 'zhengding-bazwan',
    desc: '正定传统宴席，八道菜荤素搭配，肘子肉肥而不腻。',
    recommend: ['正定宋记八大碗', '马家老饭铺'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.4
  },

  // --- 承德 ---
  {
    id: 'chengde-lvgun', cityId: 'chengde', name: '驴打滚',
    cover: 'chengde-lvgun',
    desc: '黍米面裹豆沙卷黄豆粉，软糯香甜，清廷御用点心。',
    recommend: ['承德老字号', '避暑山庄特产店'],
    type: '糕点', priceRange: '人均20-40元', rating: 4.3
  },
  {
    id: 'chengde-nansha', cityId: 'chengde', name: '南沙饼',
    cover: 'chengde-nanshabing',
    desc: '承德传统糕点，内馅用南沙馅，甜而不腻，酥脆可口。',
    recommend: ['承德食品厂', '老字号糕点铺'],
    type: '糕点', priceRange: '人均15-30元', rating: 4.2
  },

  // --- 秦皇岛 ---
  {
    id: 'qinhuangdao-seafood', cityId: 'qinhuangdao', name: '海鲜大咖',
    cover: 'qinhuangdao-seafood',
    desc: '皮皮虾、梭子蟹、扇贝、生蚝一锅蒸，鲜活美味。',
    recommend: ['北戴河海鲜市场', '山海关渔家院'],
    type: '海鲜', priceRange: '人均150-300元', rating: 4.5
  },
  {
    id: 'qinhuangdao-hunguo', cityId: 'qinhuangdao', name: '山海关浑锅',
    cover: 'shanhai-guo',
    desc: '酸菜、白肉、丸子、冻豆腐同锅炖煮，山海关冬季暖身。',
    recommend: ['山海关古城', '浑锅老店'],
    type: '火锅', priceRange: '人均60-100元', rating: 4.3
  },

  // --- 张家口 ---
  {
    id: 'zhangjiakou-yangrou', cityId: 'zhangjiakou', name: '张家口羊肉汤',
    cover: 'zhangjiakou-yangrou',
    desc: '坝上羊骨熬汤，配莜面馒头，塞外山城冬日暖身。',
    recommend: ['张家口老字号', '坝上牧民家'],
    type: '中餐', priceRange: '人均50-80元', rating: 4.3
  },
  {
    id: 'zhangjiakou-youmian', cityId: 'zhangjiakou', name: '莜面栲栳栳',
    cover: 'youmiankaolaolao',
    desc: '莜面制成栲栳栳状，蒸后蘸羊肉汤或蘑菇酱食用。',
    recommend: ['张家口莜面馆', '坝上农家院'],
    type: '面食', priceRange: '人均20-40元', rating: 4.4
  },

  // --- 保定 ---
  {
    id: 'baoding-lvrou', cityId: 'baoding', name: '驴肉火烧',
    cover: 'lvrouhuoshao',
    desc: '卤驴肉夹入烤脆的白吉馍，"天上龙肉地下驴肉"。',
    recommend: ['袁家驴肉', '永茂驴肉'],
    type: '小吃', priceRange: '人均20-50元', rating: 4.6
  },
  {
    id: 'baoding-doufu', cityId: 'baoding', name: '高碑店豆腐丝',
    cover: 'doufusi',
    desc: '高碑店特产豆腐丝，凉拌清口，炒制绵软，远近闻名。',
    recommend: ['高碑店豆制品厂', '保定特产店'],
    type: '家常菜', priceRange: '人均30-50元', rating: 4.2
  },

  // --- 平遥 ---
  {
    id: 'pingyao-niurou', cityId: 'pingyao', name: '平遥牛肉',
    cover: 'pingyao-niurou',
    desc: '国宝级美食，肥而不腻，瘦而不柴，千年平遥工艺。',
    recommend: ['冠云牛肉', '平遥老字号'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.5
  },
  {
    id: 'pingyao-daoxiao', cityId: 'pingyao', name: '山西刀削面',
    cover: 'daoxiaomian',
    desc: '刀削面条筋道有力，配牛肉哨子或番茄鸡蛋，三晋味。',
    recommend: ['平遥刀削面馆', '晋味轩'],
    type: '面食', priceRange: '人均20-40元', rating: 4.4
  },

  // ========== 东北 (7城市) ==========

  // --- 哈尔滨 ---
  {
    id: 'haerbin-guobaorou', cityId: 'haerbin', name: '锅包肉',
    cover: 'guobaorou',
    desc: '猪里脊炸至金黄，浇糖醋汁，外脆里嫩，东北菜经典。',
    recommend: ['老昌春饼', '东方饺子王', '哈尔滨饭店'],
    type: '中餐', priceRange: '人均50-80元', rating: 4.7
  },
  {
    id: 'haerbin-madir', cityId: 'haerbin', name: '马迭尔冰棍',
    cover: 'madier-binggun',
    desc: '中央大街百年冰棍，奶味浓郁，冬日吃冰棍是哈尔滨特色。',
    recommend: ['马迭尔总店', '中央大街分店'],
    type: '小吃', priceRange: '人均5-15元', rating: 4.5
  },
  {
    id: 'haerbin-lapi', cityId: 'haerbin', name: '东北大拉皮',
    cover: 'dongbei-lapi',
    desc: '土豆淀粉制成拉皮，拌酱牛肉丝黄瓜丝，爽滑开胃。',
    recommend: ['老东北菜馆', '中央大街小吃店'],
    type: '小吃', priceRange: '人均20-40元', rating: 4.4
  },

  // --- 长春 ---
  {
    id: 'changchun-dingfeng', cityId: 'changchun', name: '鼎丰真糕点',
    cover: 'dingfengzhen',
    desc: '长春百年老字号，蛋糕、桃酥、月饼，东北人的甜蜜记忆。',
    recommend: ['鼎丰真总店', '重庆路店'],
    type: '糕点', priceRange: '人均30-60元', rating: 4.3
  },
  {
    id: 'changchun-pork', cityId: 'changchun', name: '猪肉炖粉条',
    cover: 'zhurou-tuntiao',
    desc: '东北四大炖之一，五花肉配东北粉条，汤浓味足。',
    recommend: ['长春东北菜馆', '乡村大院'],
    type: '中餐', priceRange: '人均60-100元', rating: 4.5
  },

  // --- 沈阳 ---
  {
    id: 'shenyang-laobai', cityId: 'shenyang', name: '老雪花啤酒',
    cover: 'shenyang-laoxuehua',
    desc: '沈阳本土百年啤酒厂，老雪花啤酒精选原料，麦香浓郁。',
    recommend: ['雪花啤酒厂', '沈阳烧烤摊'],
    type: '茶饮', priceRange: '人均10-30元', rating: 4.3
  },
  {
    id: 'shenyang-diao', cityId: 'shenyang', name: '杨家吊炉饼',
    cover: 'shenyang-diaobing',
    desc: '吊炉烤制的薄饼，层次分明，配鸡蛋糕和绿豆汤。',
    recommend: ['杨家吊炉饼', '沈阳老字号'],
    type: '小吃', priceRange: '人均10-20元', rating: 4.2
  },

  // --- 大连 ---
  {
    id: 'dalian-seafood', cityId: 'dalian', name: '海鲜焖子',
    cover: 'dalian-seafood',
    desc: '地瓜淀粉制成焖子，煎至金黄，配海鲜酱和芝麻酱。',
    recommend: ['大连焖子店', '黑石礁小吃'],
    type: '海鲜', priceRange: '人均20-50元', rating: 4.4
  },
  {
    id: 'dalian-cherry', cityId: 'dalian', name: '金州樱桃肉',
    cover: 'dalian-cherry-meat',
    desc: '大连老菜，樱桃酸甜味汁浇炸里脊，开胃下饭。',
    recommend: ['金州饭店', '大连老菜馆'],
    type: '中餐', priceRange: '人均80-120元', rating: 4.3
  },

  // --- 长白山 ---
  {
    id: 'changbaishan-linwa', cityId: 'changbaishan', name: '林蛙锅',
    cover: 'linwa-guo',
    desc: '长白山野生林蛙，肉质鲜美，炖汤滋补，山珍之王。',
    recommend: ['长白山温泉度假村', '二道白河林蛙馆'],
    type: '中餐', priceRange: '人均120-200元', rating: 4.5
  },
  {
    id: 'changbaishan-ginseng', cityId: 'changbaishan', name: '人参炖鸡',
    cover: 'ginseng-chicken',
    desc: '长白山野山参配土鸡炖煮，滋补养生，林区特色。',
    recommend: ['长白山特产馆', '松江河镇'],
    type: '中餐', priceRange: '人均100-180元', rating: 4.4
  },

  // --- 漠河 ---
  {
    id: 'mohe-guotie', cityId: 'mohe', name: '铁锅炖',
    cover: 'mohe-guotie',
    desc: '东北铁锅炖大鹅，配酸菜粉条玉米贴饼子，冬日暖身。',
    recommend: ['漠河铁锅炖', '北极村农家院'],
    type: '火锅', priceRange: '人均100-160元', rating: 4.5
  },
  {
    id: 'mohe-jiangyu', cityId: 'mohe', name: '江鱼宴',
    cover: 'mohe-jiangyu',
    desc: '黑龙江野生江鱼，三花五罗十八子，冷水鱼鲜嫩无比。',
    recommend: ['北极村江鱼馆', '漠河渔村'],
    type: '海鲜', priceRange: '人均150-250元', rating: 4.6
  },

  // --- 鞍山 ---
  {
    id: 'anshan-niuzhuang', cityId: 'anshan', name: '牛庄馅饼',
    cover: 'niuzhuang-xianbing',
    desc: '海城牛庄特产馅饼，皮薄馅多，牛肉馅配大白菜。',
    recommend: ['牛庄馅饼总店', '鞍山老字号'],
    type: '小吃', priceRange: '人均30-60元', rating: 4.3
  },
  {
    id: 'anshan-wentang', cityId: 'anshan', name: '汤岗子温泉蛋',
    cover: 'anggong-wentang',
    desc: '汤岗子温泉水煮蛋，蛋白嫩滑蛋黄微熟，温泉特色。',
    recommend: ['汤岗子温泉疗养院', '鞍山温泉度假村'],
    type: '小吃', priceRange: '人均50-100元', rating: 4.2
  },

  // ========== 华东 (14城市) ==========

  // --- 上海 ---
  {
    id: 'shanghai-xiaolongbao', cityId: 'shanghai', name: '小笼包',
    cover: 'xiaolongbao',
    desc: '皮薄汁多十八褶，配姜丝香醋，海派点心代表。',
    recommend: ['南翔馒头店', '富春小笼', '鼎泰丰'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.7
  },
  {
    id: 'shanghai-braised', cityId: 'shanghai', name: '本帮红烧肉',
    cover: 'shanghai-braised-pork',
    desc: '五花三层，浓油赤酱，肥而不腻，本帮菜经典。',
    recommend: ['外婆家', '兰心餐厅', '老吉士'],
    type: '中餐', priceRange: '人均100-200元', rating: 4.6
  },
  {
    id: 'shanghai-shengjian', cityId: 'shanghai', name: '生煎包',
    cover: 'shengjianbao',
    desc: '底部金黄酥脆，皮薄汁多，撒芝麻香葱，上海街头经典。',
    recommend: ['小杨生煎', '大壶春', '阿德哥生煎'],
    type: '小吃', priceRange: '人均20-50元', rating: 4.5
  },

  // --- 杭州 ---
  {
    id: 'hangzhou-xihucuyu', cityId: 'hangzhou', name: '西湖醋鱼',
    cover: 'xihu-cuyu',
    desc: '选草鱼活养，鱼肉嫩滑，糖醋汁酸甜适口，杭州第一名菜。',
    recommend: ['楼外楼', '知味观', '外婆家'],
    type: '中餐', priceRange: '人均120-200元', rating: 4.6
  },
  {
    id: 'hangzhou-longjing', cityId: 'hangzhou', name: '龙井虾仁',
    cover: 'longjing-xiaoren',
    desc: '明前龙井茶叶与河虾仁同炒，清香鲜美，春令佳肴。',
    recommend: ['楼外楼', '知味观'],
    type: '中餐', priceRange: '人均150-250元', rating: 4.7
  },
  {
    id: 'hangzhou-dongpo', cityId: 'hangzhou', name: '东坡肉',
    cover: 'dongpo-rou',
    desc: '肥而不腻酥烂入味，相传为苏东坡所创，浙菜代表。',
    recommend: ['楼外楼', '外婆家', '知味观'],
    type: '中餐', priceRange: '人均60-120元', rating: 4.5
  },

  // --- 苏州 ---
  {
    id: 'suzhou-squirrel', cityId: 'suzhou', name: '松鼠鳜鱼',
    cover: 'squirrel-fish',
    desc: '造型如松鼠，浇番茄汁酸甜适口，苏帮菜经典之作。',
    recommend: ['松鹤楼', '得月楼', '老苏州'],
    type: '中餐', priceRange: '人均100-180元', rating: 4.6
  },
  {
    id: 'suzhou-aoyao', cityId: 'suzhou', name: '奥灶面',
    cover: 'aoyao-mian',
    desc: '红汤爆鱼面，汤浓味鲜，苏式早茶的灵魂。',
    recommend: ['朱鸿兴', '陆长兴', '东吴面馆'],
    type: '面食', priceRange: '人均20-40元', rating: 4.5
  },
  {
    id: 'suzhou-dazha', cityId: 'suzhou', name: '阳澄湖大闸蟹',
    cover: 'yangcheng-dazha',
    desc: '阳澄湖清水大闸蟹，青背白肚金爪黄毛，天下第一鲜。',
    recommend: ['阳澄湖蟹庄', '苏州老字号'],
    type: '海鲜', priceRange: '人均200-500元', rating: 4.8
  },

  // --- 南京 ---
  {
    id: 'nanjing-yanshui', cityId: 'nanjing', name: '盐水鸭',
    cover: 'nanjing-yanshuiya',
    desc: '皮白肉嫩肥而不腻，金陵菜代表，"南京第一菜"。',
    recommend: ['韩复兴', '板鸭名家', '桂花鸭'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.6
  },
  {
    id: 'nanjing-yaxue', cityId: 'nanjing', name: '鸭血粉丝汤',
    cover: 'yaxue-fensi',
    desc: '鸭血鸭肠鸭肝鸭汤，配豆泡花生香菜，金陵小吃之王。',
    recommend: ['回味', '鸭得堡', '金陵鸭血粉丝'],
    type: '小吃', priceRange: '人均20-40元', rating: 4.5
  },

  // --- 无锡 ---
  {
    id: 'wuxi-paigu', cityId: 'wuxi', name: '无锡排骨',
    cover: 'wuxi-paigu',
    desc: '无锡酱排骨，色泽红亮，咸甜适中，骨酥肉烂。',
    recommend: ['三凤桥', '陆稿荐', '无锡老字号'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.4
  },
  {
    id: 'wuxi-baiyu', cityId: 'wuxi', name: '太湖白鱼',
    cover: 'taihu-baiyu',
    desc: '太湖三白之一，清蒸白鱼肉质细嫩，原汁原味。',
    recommend: ['太湖饭店', '蠡园酒家'],
    type: '海鲜', priceRange: '人均150-250元', rating: 4.5
  },

  // --- 宁波 ---
  {
    id: 'ningbo-tangyuan', cityId: 'ningbo', name: '宁波汤圆',
    cover: 'ningbo-tangyuan',
    desc: '猪油芝麻馅汤圆，皮薄馅多，甜糯不腻，冬至必备。',
    recommend: ['缸鸭狗', '宁波汤圆老字号'],
    type: '小吃', priceRange: '人均20-40元', rating: 4.4
  },
  {
    id: 'ningbo-haixian', cityId: 'ningbo', name: '象山海鲜面',
    cover: 'ningbo-haixian',
    desc: '象山新鲜海鲜配手工面，虾蟹贝类齐聚，汤汁鲜美。',
    recommend: ['象山海鲜城', '石浦渔港'],
    type: '海鲜', priceRange: '人均100-200元', rating: 4.5
  },

  // --- 温州 ---
  {
    id: 'wenzhou-yubing', cityId: 'wenzhou', name: '温州鱼饼',
    cover: 'wenzhou-yubing',
    desc: '鮸鱼或马鲛鱼剁成泥，蒸制鱼饼，鲜嫩弹牙，瓯菜代表。',
    recommend: ['强能鱼饼', '温州老字号'],
    type: '海鲜', priceRange: '人均60-120元', rating: 4.4
  },
  {
    id: 'wenzhou-maibing', cityId: 'wenzhou', name: '永嘉麦饼',
    cover: 'yongjia-maibing',
    desc: '永嘉楠溪江传统麦饼，猪肉咸菜馅，外皮酥脆。',
    recommend: ['永嘉麦饼店', '楠溪江小吃'],
    type: '小吃', priceRange: '人均10-25元', rating: 4.2
  },

  // --- 合肥 ---
  {
    id: 'hefei-jimu', cityId: 'hefei', name: '老母鸡汤',
    cover: 'hefei-jimu',
    desc: '合肥老母鸡汤，选用本地土鸡，炖制数小时，汤清味鲜。',
    recommend: ['老乡鸡', '肥西老母鸡'],
    type: '中餐', priceRange: '人均60-120元', rating: 4.4
  },
  {
    id: 'hefei-mijiao', cityId: 'hefei', name: '三河米饺',
    cover: 'sanhe-mijiao',
    desc: '三河古镇特产，大米粉制成饺皮，馅心用豆腐猪肉。',
    recommend: ['三河古镇', '合肥老字号'],
    type: '小吃', priceRange: '人均15-30元', rating: 4.2
  },

  // --- 福州 ---
  {
    id: 'fuzhou-fo', cityId: 'fuzhou', name: '佛跳墙',
    cover: 'fotiaoqiang',
    desc: '闽菜之王，鲍鱼海参鱼肚干贝同坛煨制，浓郁醇香。',
    recommend: ['聚春园', '福州大酒楼', '安泰楼'],
    type: '中餐', priceRange: '人均200-500元', rating: 4.7
  },
  {
    id: 'fuzhou-yuwán', cityId: 'fuzhou', name: '福州鱼丸',
    cover: 'fuzhou-yuwán',
    desc: '鲨鱼肉或鳗鱼肉捣浆制丸，馅心丰富，汤鲜味美。',
    recommend: ['永和鱼丸', '依土鱼丸', '福州老字号'],
    type: '小吃', priceRange: '人均30-60元', rating: 4.5
  },

  // --- 厦门 ---
  {
    id: 'xiamen-shacha', cityId: 'xiamen', name: '沙茶面',
    cover: 'xiamen-shacha',
    desc: '沙茶酱熬汤，鲜辣浓香，配料自选，闽南味代表。',
    recommend: ['乌糖沙茶面', '四里沙茶面', '1980沙茶面'],
    type: '面食', priceRange: '人均30-60元', rating: 4.5
  },
  {
    id: 'xiamen-haisheng', cityId: 'xiamen', name: '海蛎煎',
    cover: 'haisheng-jian',
    desc: '鲜海蛎裹地瓜粉煎制，外软内鲜，配甜辣酱和香菜。',
    recommend: ['中山路夜市', '莲欢海蛎煎'],
    type: '小吃', priceRange: '人均30-50元', rating: 4.4
  },
  {
    id: 'xiamen-tusundong', cityId: 'xiamen', name: '土笋冻',
    cover: 'tusun-dong',
    desc: '沙虫熬煮凝冻，配醋酱油香菜，闽南独特风味。',
    recommend: ['西门土笋冻', '中山公园店'],
    type: '小吃', priceRange: '人均20-40元', rating: 4.3
  },

  // --- 青岛 ---
  {
    id: 'qingdao-pijiu', cityId: 'qingdao', name: '青岛啤酒',
    cover: 'qingdao-beer',
    desc: '百年品牌，原浆鲜啤，配蛤蜊绝配，夏日青岛灵魂。',
    recommend: ['登州路啤酒街', '青岛啤酒博物馆'],
    type: '茶饮', priceRange: '人均50-100元', rating: 4.6
  },
  {
    id: 'qingdao-geli', cityId: 'qingdao', name: '辣炒蛤蜊',
    cover: 'qingdao-geli',
    desc: '青岛家常菜，鲜活蛤蜊配辣椒花椒，下酒神器。',
    recommend: ['营口路市场', '台东大排档'],
    type: '海鲜', priceRange: '人均50-100元', rating: 4.5
  },

  // --- 烟台 ---
  {
    id: 'yantai-mian', cityId: 'yantai', name: '蓬莱小面',
    cover: 'penglai-xiaomian',
    desc: '蓬莱传统手拉面，卤汤用鱼或羊骨，配卤蛋鱼卤。',
    recommend: ['蓬莱小面总店', '烟台老字号'],
    type: '面食', priceRange: '人均15-30元', rating: 4.3
  },
  {
    id: 'yantai-menzi', cityId: 'yantai', name: '烟台焖子',
    cover: 'yantai-menzi',
    desc: '地瓜淀粉煎制焖子，配芝麻酱虾油酱油，烟台特色。',
    recommend: ['烟台焖子老店', '南洪街小吃'],
    type: '小吃', priceRange: '人均15-30元', rating: 4.2
  },

  // --- 黄山 ---
  {
    id: 'huangshan-shaobing', cityId: 'huangshan', name: '黄山烧饼',
    cover: 'huangshan-shaobing',
    desc: '梅干菜扣肉馅烧饼，酥脆咸香，黄山旅游必尝。',
    recommend: ['黄山烧饼老字号', '屯溪老街'],
    type: '糕点', priceRange: '人均20-40元', rating: 4.3
  },
  {
    id: 'huangshan-guiyu', cityId: 'huangshan', name: '臭鳜鱼',
    cover: 'chou-guiyu',
    desc: '徽州名菜，鳜鱼经腌制发酵，肉质如蒜瓣，鲜而不臭。',
    recommend: ['屯溪老街', '徽商酒楼', '黄山饭店'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.5
  },

  // --- 泉州 ---
  {
    id: 'quanzhou-mianxian', cityId: 'quanzhou', name: '面线糊',
    cover: 'quanzhou-mianxian',
    desc: '泉州早餐之王，面线熬汤配猪肝大肠醋肉，味美价亲民。',
    recommend: ['好成财', '国仔面线糊', '泉州老字号'],
    type: '早餐', priceRange: '人均20-50元', rating: 4.5
  },
  {
    id: 'quanzhou-tusun', cityId: 'quanzhou', name: '土笋冻',
    cover: 'quanzhou-tusun',
    desc: '泉州安海土笋冻，沙虫熬煮凝冻，配酱油醋，清凉爽口。',
    recommend: ['安海土笋冻', '泉州中山路'],
    type: '小吃', priceRange: '人均20-40元', rating: 4.3
  },

  // ========== 华中 (7城市) ==========

  // --- 武汉 ---
  {
    id: 'wuhan-regan', cityId: 'wuhan', name: '热干面',
    cover: 'wuhan-reganmian',
    desc: '芝麻酱拌面，配酸豆角萝卜丁，武汉人的早餐执念。',
    recommend: ['蔡林记', '赵师傅', '天天红油赵师傅'],
    type: '面食', priceRange: '人均10-25元', rating: 4.5
  },
  {
    id: 'wuhan-wuyu', cityId: 'wuhan', name: '武昌鱼',
    cover: 'wuhan-wuchangyu',
    desc: '梁子湖武昌鱼，清蒸最佳，肉质细嫩，鄂菜代表。',
    recommend: ['东湖宾馆', '楚天情', '武汉老字号'],
    type: '中餐', priceRange: '人均100-180元', rating: 4.5
  },
  {
    id: 'wuhan-xiaolongxia', cityId: 'wuhan', name: '小龙虾',
    cover: 'wuhan-crayfish',
    desc: '油焖大虾蒜蓉小龙虾，江城夏日宵夜之王。',
    recommend: ['肥肥虾庄', '虾蟹至尊', '小亮蒸虾'],
    type: '海鲜', priceRange: '人均100-200元', rating: 4.6
  },

  // --- 长沙 ---
  {
    id: 'changsha-choudoufu', cityId: 'changsha', name: '臭豆腐',
    cover: 'changsha-choudoufu',
    desc: '黑色经典臭豆腐，外脆里嫩，配蒜蓉辣酱和卤汁。',
    recommend: ['黑色经典', '文和友', '罗家臭豆腐'],
    type: '小吃', priceRange: '人均20-40元', rating: 4.5
  },
  {
    id: 'changsha-kouwei', cityId: 'changsha', name: '口味虾',
    cover: 'changsha-kouweixia',
    desc: '长沙口味虾，麻辣鲜香，配冰饮，夏夜排档之王。',
    recommend: ['老梅园', '大龙虾', '浏阳蒸菜馆'],
    type: '海鲜', priceRange: '人均80-150元', rating: 4.5
  },
  {
    id: 'changsha-tangyou', cityId: 'changsha', name: '糖油粑粑',
    cover: 'tangyou-baba',
    desc: '糯米糍粑糖油煎炸，外脆内软，甜糯香，长沙传统甜品。',
    recommend: ['黑色经典', '太平街小吃'],
    type: '糕点', priceRange: '人均10-20元', rating: 4.3
  },

  // --- 郑州 ---
  {
    id: 'zhengzhou-huimian', cityId: 'zhengzhou', name: '郑州烩面',
    cover: 'zhengzhou-huimian',
    desc: '羊肉烩面，汤浓味鲜，面条筋道，河南人的心头好。',
    recommend: ['合记烩面', '萧记烩面', '郑州烩面老字号'],
    type: '面食', priceRange: '人均30-60元', rating: 4.5
  },
  {
    id: 'zhengzhou-hula', cityId: 'zhengzhou', name: '胡辣汤',
    cover: 'hula-tang',
    desc: '逍遥镇胡辣汤，胡椒辛辣，配牛肉丸粉条，中原早餐经典。',
    recommend: ['逍遥镇胡辣汤', '方中山胡辣汤'],
    type: '早餐', priceRange: '人均10-20元', rating: 4.3
  },

  // --- 洛阳 ---
  {
    id: 'luoyang-shuixi', cityId: 'luoyang', name: '洛阳水席',
    cover: 'luoyang-shuixi',
    desc: '洛阳传统宴席，24道菜道道有汤，行云流水，豫菜之魂。',
    recommend: ['真不同饭店', '洛阳水席老字号'],
    type: '中餐', priceRange: '人均150-280元', rating: 4.6
  },
  {
    id: 'luoyang-bufan', cityId: 'luoyang', name: '不翻汤',
    cover: 'bufan-tang',
    desc: '绿豆浆摊饼入汤，配海带丝木耳丝，酸辣开胃。',
    recommend: ['洛阳不翻汤', '老城区小吃'],
    type: '小吃', priceRange: '人均20-40元', rating: 4.3
  },

  // --- 开封 ---
  {
    id: 'kaifeng-xiaolongbao', cityId: 'kaifeng', name: '开封小笼包',
    cover: 'kaifeng-xiaolongbao',
    desc: '开封第一楼小笼包，皮薄馅多，灌汤流油。',
    recommend: ['第一楼', '黄家老店', '开封老字号'],
    type: '中餐', priceRange: '人均50-100元', rating: 4.4
  },
  {
    id: 'kaifeng-tongzi', cityId: 'kaifeng', name: '桶子鸡',
    cover: 'tongzi-ji',
    desc: '开封特产桶子鸡，选三年以上母鸡，卤制后皮脆肉嫩。',
    recommend: ['马豫兴桶子鸡', '开封老字号'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.3
  },

  // --- 南昌 ---
  {
    id: 'nanchang-banfen', cityId: 'nanchang', name: '南昌拌粉',
    cover: 'nanchang-banfen',
    desc: '南昌街头经典，米粉拌酱油辣椒萝卜干，爽口开胃。',
    recommend: ['南昌拌粉王', '绳金塔小吃'],
    type: '早餐', priceRange: '人均10-20元', rating: 4.2
  },
  {
    id: 'nanchang-waguan', cityId: 'nanchang', name: '瓦罐汤',
    cover: 'waguan-tang',
    desc: '南昌瓦罐汤，排骨汤肉饼汤乌鸡汤，汤鲜肉嫩。',
    recommend: ['绳金塔瓦罐汤', '老字号瓦罐'],
    type: '中餐', priceRange: '人均20-50元', rating: 4.3
  },

  // --- 武当山 ---
  {
    id: 'wudangshan-zhai', cityId: 'wudangshan', name: '道家斋菜',
    cover: 'wudangshan-zhai',
    desc: '武当山道家斋菜，以素仿荤，清淡养生，仙风道骨。',
    recommend: ['武当山紫霄宫', '金顶贵宾楼'],
    type: '素食', priceRange: '人均80-150元', rating: 4.4
  },
  {
    id: 'wudangshan-jiangyu', cityId: 'wudangshan', name: '汉江鱼宴',
    cover: 'wudangshan-jiangyu',
    desc: '汉江野生鱼，肉质鲜美，配武当山野菜，山珍河鲜。',
    recommend: ['武当山宾馆', '汉江渔村'],
    type: '海鲜', priceRange: '人均120-200元', rating: 4.4
  },

  // ========== 华南 (7城市) ==========

  // --- 广州 ---
  {
    id: 'guangzhou-zaocha', cityId: 'guangzhou', name: '早茶',
    cover: 'guangzhou-zaocha',
    desc: '虾饺烧卖叉烧包凤爪，粤式早茶文化，一盅两件。',
    recommend: ['莲香楼', '陶陶居', '泮溪酒家', '广州酒家'],
    type: '茶饮', priceRange: '人均100-200元', rating: 4.7
  },
  {
    id: 'guangzhou-baiqie', cityId: 'guangzhou', name: '白切鸡',
    cover: 'guangzhou-baiqieji',
    desc: '皮爽肉滑原汁原味，粤式经典，"无鸡不成宴"。',
    recommend: ['清平鸡', '文记', '东兴饭店'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.5
  },
  {
    id: 'guangzhou-baozai', cityId: 'guangzhou', name: '煲仔饭',
    cover: 'guangzhou-baozaifan',
    desc: '腊味煲仔饭滑鸡煲仔饭，瓦煲煮饭锅巴香脆。',
    recommend: ['坤记煲仔饭', '西关煲仔饭'],
    type: '中餐', priceRange: '人均60-100元', rating: 4.4
  },

  // --- 深圳 ---
  {
    id: 'shenzhen-niurou', cityId: 'shenzhen', name: '潮汕牛肉火锅',
    cover: 'chaoshan-huoguo',
    desc: '吊龙匙柄匙仁三花趾，部位讲究，涮煮鲜嫩。',
    recommend: ['八合里海记', '潮牛道', '汕头牛肉火锅'],
    type: '火锅', priceRange: '人均100-200元', rating: 4.6
  },
  {
    id: 'shenzhen-pencai', cityId: 'shenzhen', name: '客家盆菜',
    cover: 'kejia-pencai',
    desc: '深圳客家盆菜，层层叠叠十种食材，团圆喜庆。',
    recommend: ['客家围村', '深圳客家菜馆'],
    type: '中餐', priceRange: '人均120-200元', rating: 4.4
  },

  // --- 珠海 ---
  {
    id: 'zhuhai-hao', cityId: 'zhuhai', name: '横琴蚝',
    cover: 'zhuhai-hengqinhao',
    desc: '珠海横琴蚝，肉大膏肥，炭烤蒜蓉清蒸皆宜。',
    recommend: ['横琴蚝生态园', '珠海海鲜街'],
    type: '海鲜', priceRange: '人均100-200元', rating: 4.5
  },
  {
    id: 'zhuhai-zaocha', cityId: 'zhuhai', name: '粤式早茶',
    cover: 'zhuhai-zaocha',
    desc: '珠海粤式早茶，虾饺烧卖蛋挞，精致点心配靓茶。',
    recommend: ['珠海度假村', '海湾大酒店'],
    type: '茶饮', priceRange: '人均80-150元', rating: 4.4
  },

  // --- 桂林 ---
  {
    id: 'guilin-mifen', cityId: 'guilin', name: '桂林米粉',
    cover: 'guilin-mifen',
    desc: '卤菜粉马肉米粉，卤水百年传承，桂林人的早餐。',
    recommend: ['石记米粉', '秋刀鱼', '崇善米粉'],
    type: '早餐', priceRange: '人均10-25元', rating: 4.4
  },
  {
    id: 'guilin-yudi', cityId: 'guilin', name: '荔浦芋头扣肉',
    cover: 'lipu-yutou',
    desc: '荔浦香芋扣肉，芋头吸饱肉汁，肉烂芋糯，桂菜经典。',
    recommend: ['桂林酒家', '阳朔大师傅'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.5
  },

  // --- 阳朔 ---
  {
    id: 'yangshuo-pijiu', cityId: 'yangshuo', name: '啤酒鱼',
    cover: 'yangshuo-pijiuyu',
    desc: '漓江鱼配啤酒焖煮，鱼肉鲜嫩，汤甜酒香，阳朔招牌。',
    recommend: ['大师傅啤酒鱼', '谢大姐啤酒鱼'],
    type: '海鲜', priceRange: '人均80-150元', rating: 4.5
  },
  {
    id: 'yangshuo-tong', cityId: 'yangshuo', name: '竹筒饭',
    cover: 'yangshuo-tong',
    desc: '漓江竹制竹筒饭，配腊肉排骨，米香竹香交融。',
    recommend: ['阳朔西街', '十里画廊农家乐'],
    type: '中餐', priceRange: '人均50-80元', rating: 4.3
  },

  // --- 南宁 ---
  {
    id: 'nanning-laoyou', cityId: 'nanning', name: '老友粉',
    cover: 'nanning-laoyoufen',
    desc: '酸笋豆豉炒料汤底，酸辣鲜香，南宁人的精神食粮。',
    recommend: ['复记老友粉', '舒记老友粉'],
    type: '面食', priceRange: '人均15-30元', rating: 4.5
  },
  {
    id: 'nanning-ningmengya', cityId: 'nanning', name: '柠檬鸭',
    cover: 'ningmeng-ya',
    desc: '柠檬鸭，鸭肉配柠檬酸笋焖制，酸辣开胃，壮乡风味。',
    recommend: ['南宁柠檬鸭老店', '高峰柠檬鸭'],
    type: '中餐', priceRange: '人均60-120元', rating: 4.4
  },

  // --- 三亚 ---
  {
    id: 'sanya-wenchang', cityId: 'sanya', name: '文昌鸡',
    cover: 'wenchang-ji',
    desc: '海南四大名菜之首，文昌白切鸡，皮爽肉滑骨带香味。',
    recommend: ['海南四大名菜', '三亚海鲜广场'],
    type: '中餐', priceRange: '人均100-200元', rating: 4.5
  },
  {
    id: 'sanya-seafood', cityId: 'sanya', name: '海鲜大餐',
    cover: 'sanya-seafood',
    desc: '和乐蟹基围虾石斑鱼清蒸东星斑，海南海鲜原汁原味。',
    recommend: ['第一市场', '林姐海鲜', '阿浪海鲜'],
    type: '海鲜', priceRange: '人均200-500元', rating: 4.6
  },

  // ========== 西南 (10城市) ==========

  // --- 成都 ---
  {
    id: 'chengdu-huoguo', cityId: 'chengdu', name: '成都火锅',
    cover: 'sichuan-hotpot',
    desc: '牛油锅底麻辣鲜香，毛肚鸭肠黄喉必点，川味之魂。',
    recommend: ['小龙坎', '蜀大侠', '大龙燚', '珮姐老火锅'],
    type: '火锅', priceRange: '人均100-200元', rating: 4.7
  },
  {
    id: 'chengdu-chuanchuan', cityId: 'chengdu', name: '串串香',
    cover: 'chengdu-chuanchuan',
    desc: '火锅串成签，按签计费，市井烟火气十足。',
    recommend: ['钢管厂五区小郡肝', '玉林串串', '袁记串串香'],
    type: '火锅', priceRange: '人均60-120元', rating: 4.5
  },
  {
    id: 'chengdu-longchaoshou', cityId: 'chengdu', name: '龙抄手',
    cover: 'chengdu-longchaoshou',
    desc: '成都名小吃，皮薄馅嫩，红油抄手尤为经典。',
    recommend: ['龙抄手总店', '赖汤圆', '钟水饺'],
    type: '小吃', priceRange: '人均30-60元', rating: 4.5
  },

  // --- 重庆 ---
  {
    id: 'chongqing-huoguo', cityId: 'chongqing', name: '重庆火锅',
    cover: 'chongqing-hotpot',
    desc: '九宫格火锅，麻辣鲜香，毛肚鸭肠黄喉，山城名片。',
    recommend: ['珮姐老火锅', '朝天门', '刘一手', '德庄'],
    type: '火锅', priceRange: '人均100-200元', rating: 4.7
  },
  {
    id: 'chongqing-xiaomian', cityId: 'chongqing', name: '重庆小面',
    cover: 'chongqing-xiaomian',
    desc: '麻辣鲜香的早餐面，佐料丰富，重庆人的一天从这碗面开始。',
    recommend: ['胖妹面庄', '开半天面', '眼镜面'],
    type: '早餐', priceRange: '人均10-20元', rating: 4.5
  },
  {
    id: 'chongqing-suanla', cityId: 'chongqing', name: '酸辣粉',
    cover: 'chongqing-suanlafen',
    desc: '手工红薯粉，酸辣烫口，配榨菜花生碎，山城小吃代表。',
    recommend: ['好又来酸辣粉', '花市豌杂面'],
    type: '小吃', priceRange: '人均15-30元', rating: 4.4
  },

  // --- 昆明 ---
  {
    id: 'kunming-guoqiao', cityId: 'kunming', name: '过桥米线',
    cover: 'guoqiao-mixian',
    desc: '汤烫菜熟，配料丰富，百年传承，云南美食名片。',
    recommend: ['建新园', '福华园', '过桥米线老字号'],
    type: '小吃', priceRange: '人均50-100元', rating: 4.5
  },
  {
    id: 'kunming-qiguo', cityId: 'kunming', name: '汽锅鸡',
    cover: 'qiguo-ji',
    desc: '建水汽锅，蒸汽炖鸡，汤清味鲜，云南特色。',
    recommend: ['云南汽锅鸡', '昆明老字号'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.5
  },

  // --- 大理 ---
  {
    id: 'dali-bawan', cityId: 'dali', name: '大理土八碗',
    cover: 'dali-bawan',
    desc: '白族传统宴席，八道菜荤素搭配，红白喜事必备。',
    recommend: ['大理古城白族人家', '大理王府'],
    type: '中餐', priceRange: '人均100-180元', rating: 4.5
  },
  {
    id: 'dali-shaguoyu', cityId: 'dali', name: '大理砂锅鱼',
    cover: 'dali-shaguoyu',
    desc: '洱海鱼配松茸，鲜嫩无比，砂锅慢炖，鱼汤浓郁。',
    recommend: ['大理古城砂锅鱼', '洱海边鱼庄'],
    type: '海鲜', priceRange: '人均120-200元', rating: 4.6
  },

  // --- 丽江 ---
  {
    id: 'lijiang-guokao', cityId: 'lijiang', name: '纳西烤鱼',
    cover: 'lijiang-guokao',
    desc: '丽江烤鱼配纳西调料，外焦里嫩，蘸水香辣。',
    recommend: ['丽江古城农家菜', '纳西烤鱼庄'],
    type: '海鲜', priceRange: '人均80-150元', rating: 4.4
  },
  {
    id: 'lijiang-baba', cityId: 'lijiang', name: '丽江粑粑',
    cover: 'lijiang-baba',
    desc: '纳西传统面食，甜咸两味，酥香耐存，纳西美食代表。',
    recommend: ['丽江老字号', '古城街边铺'],
    type: '小吃', priceRange: '人均15-30元', rating: 4.3
  },
  {
    id: 'lijiang-lapai', cityId: 'lijiang', name: '腊排骨火锅',
    cover: 'lijiang-lapaihuoguo',
    desc: '高原土猪腊排骨熬汤，咸香浓郁，配高原野菜。',
    recommend: ['丽江新城腊排骨一条街', '象山市场'],
    type: '火锅', priceRange: '人均100-180元', rating: 4.5
  },

  // --- 香格里拉 ---
  {
    id: 'shangrila-yakrou', cityId: 'shangrila', name: '牦牛肉火锅',
    cover: 'shangrila-yakrou',
    desc: '高原牦牛肉，肉质紧实，配松茸虫草，滋补养生。',
    recommend: ['香格里拉牦牛肉馆', '独克宗古城'],
    type: '火锅', priceRange: '人均150-250元', rating: 4.6
  },
  {
    id: 'shangrila-suyoucha', cityId: 'shangrila', name: '酥油茶',
    cover: 'suyou-cha',
    desc: '藏式酥油茶，咸香解腻，高原御寒，藏民日常必备。',
    recommend: ['松赞林寺', '独克宗古城藏家'],
    type: '茶饮', priceRange: '人均30-60元', rating: 4.4
  },

  // --- 九寨沟 ---
  {
    id: 'jiuzhai-zanghuoguo', cityId: 'jiuzhai', name: '藏式火锅',
    cover: 'jiuzhai-zanghuoguo',
    desc: '牦牛肉青稞饼酥油茶，高原风味，藏家热情款待。',
    recommend: ['九寨沟藏寨', '沟口藏家乐'],
    type: '火锅', priceRange: '人均150-250元', rating: 4.5
  },
  {
    id: 'jiuzhai-qingke', cityId: 'jiuzhai', name: '青稞饼',
    cover: 'qingke-bing',
    desc: '青稞粉制成烙饼，香脆可口，藏区传统主食。',
    recommend: ['九寨沟藏寨', '若尔盖藏家'],
    type: '小吃', priceRange: '人均20-40元', rating: 4.3
  },

  // --- 稻城 ---
  {
    id: 'daocheng-yakrou', cityId: 'daocheng', name: '牦牛肉火锅',
    cover: 'daocheng-yakrou',
    desc: '稻城亚丁牦牛肉火锅，肉质紧实鲜美，高原特色。',
    recommend: ['稻城亚丁村', '香格里拉镇'],
    type: '火锅', priceRange: '人均200-300元', rating: 4.6
  },
  {
    id: 'daocheng-songrong', cityId: 'daocheng', name: '松茸炖鸡',
    cover: 'daocheng-songrong',
    desc: '高原松茸配土鸡炖汤，鲜美无比，稻城山珍之王。',
    recommend: ['稻城亚丁松茸馆', '香格里拉镇'],
    type: '中餐', priceRange: '人均200-400元', rating: 4.7
  },

  // --- 峨眉山 ---
  {
    id: 'emeishan-zhai', cityId: 'emeishan', name: '峨眉山素斋',
    cover: 'emeishan-zhai',
    desc: '峨眉山佛教素斋，以素仿荤，清淡养生，禅意十足。',
    recommend: ['峨眉山报国寺', '金顶素斋'],
    type: '素食', priceRange: '人均80-150元', rating: 4.4
  },
  {
    id: 'emeishan-qiaojiao', cityId: 'emeishan', name: '跷脚牛肉',
    cover: 'qiaojiao-niurou',
    desc: '乐山跷脚牛肉，汤色清澈，牛肉鲜嫩，药膳养生。',
    recommend: ['峨眉山跷脚牛肉', '乐山老字号'],
    type: '中餐', priceRange: '人均60-120元', rating: 4.5
  },

  // --- 拉萨 ---
  {
    id: 'lasa-zanghuoguo', cityId: 'lasa', name: '藏式火锅',
    cover: 'lasa-zanghuoguo',
    desc: '拉萨藏式火锅，牦牛肉藏式腊肠奶渣，雪域风味。',
    recommend: ['拉萨藏家宴', '八廓街藏餐'],
    type: '火锅', priceRange: '人均150-250元', rating: 4.5
  },
  {
    id: 'lasa-suyoucha', cityId: 'lasa', name: '酥油茶',
    cover: 'lasa-suyoucha',
    desc: '拉萨酥油茶，咸香浓郁，高原御寒必备，藏传待客。',
    recommend: ['八廓街茶馆', '拉萨藏家'],
    type: '茶饮', priceRange: '人均50-80元', rating: 4.4
  },

  // ========== 西北 (6城市) ==========

  // --- 西安 ---
  {
    id: 'xian-roujiamo', cityId: 'xian', name: '肉夹馍',
    cover: 'xian-roujiamo',
    desc: '腊汁肉夹白吉馍，"中式汉堡"，外脆里嫩，三秦套餐。',
    recommend: ['樊记腊汁肉', '子午路张记', '老潼关'],
    type: '小吃', priceRange: '人均15-30元', rating: 4.6
  },
  {
    id: 'xian-paomo', cityId: 'xian', name: '羊肉泡馍',
    cover: 'xian-paomo',
    desc: '掰碎馍块煮入羊肉汤，配糖蒜辣酱，暖胃饱腹。',
    recommend: ['老孙家', '同盛祥', '老米家'],
    type: '中餐', priceRange: '人均30-60元', rating: 4.5
  },
  {
    id: 'xian-liangpi', cityId: 'xian', name: '凉皮',
    cover: 'xian-liangpi',
    desc: '筋道凉皮拌麻酱辣油，夏天开胃神器，西安街头经典。',
    recommend: ['魏家凉皮', '赵记凉皮'],
    type: '小吃', priceRange: '人均10-20元', rating: 4.3
  },

  // --- 敦煌 ---
  {
    id: 'dunhuang-huangmian', cityId: 'dunhuang', name: '驴肉黄面',
    cover: 'dunhuang-huangmian',
    desc: '敦煌驴肉黄面，手工拉面配卤驴肉，丝路美食。',
    recommend: ['达记驴肉黄面', '敦煌老字号'],
    type: '面食', priceRange: '人均40-80元', rating: 4.5
  },
  {
    id: 'dunhuang-kaorou', cityId: 'dunhuang', name: '烤羊肉',
    cover: 'dunhuang-kaorou',
    desc: '敦煌烤羊肉，孜然辣椒配啤酒，夜市烟火气十足。',
    recommend: ['敦煌夜市', '沙洲市场'],
    type: '烧烤', priceRange: '人均60-120元', rating: 4.4
  },

  // --- 乌鲁木齐 ---
  {
    id: 'wulumuqi-dapan', cityId: 'wulumuqi', name: '大盘鸡',
    cover: 'xinjiang-dapanji',
    desc: '新疆大盘鸡，土豆青椒鸡块配皮带面，西域风味。',
    recommend: ['友谊宾馆', '阿布拉的馕'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.6
  },
  {
    id: 'wulumuqi-shouzhua', cityId: 'wulumuqi', name: '手抓饭',
    cover: 'xinjiang-zhuafan',
    desc: '胡萝卜洋葱羊肉同焖，油香四溢，维吾尔族节庆美食。',
    recommend: ['乌鲁木齐手抓饭', '大巴扎饭庄'],
    type: '中餐', priceRange: '人均60-120元', rating: 4.5
  },

  // --- 青海湖 ---
  {
    id: 'qinghaihu-huangyu', cityId: 'qinghaihu', name: '青海湖湟鱼',
    cover: 'qinghai-huangyu',
    desc: '青海湖裸鲤（湟鱼），青海湖特有，清蒸或红烧。',
    recommend: ['青海湖二郎剑', '海滨藏餐'],
    type: '海鲜', priceRange: '人均120-200元', rating: 4.4
  },
  {
    id: 'qinghaihu-suanla', cityId: 'qinghaihu', name: '青海老酸奶',
    cover: 'qinghai-suanla',
    desc: '青海传统老酸奶，牦牛奶发酵，配白糖青稞，醇厚。',
    recommend: ['青海湖特产', '西宁老字号'],
    type: '茶饮', priceRange: '人均20-50元', rating: 4.3
  },

  // --- 茶卡盐湖 ---
  {
    id: 'chaka-kaorou', cityId: 'chaka', name: '草原烤羊肉',
    cover: 'chaka-kaorou',
    desc: '茶卡盐湖草原烤羊肉，肉质鲜嫩，配青稞酒，西北豪情。',
    recommend: ['茶卡盐湖牧民家', '草原蒙古包'],
    type: '烧烤', priceRange: '人均100-180元', rating: 4.5
  },
  {
    id: 'chaka-huoguo', cityId: 'chaka', name: '青海土火锅',
    cover: 'qinghai-tuhuoguo',
    desc: '青海土火锅，以羊肉牛肉酸菜为主，高原暖身。',
    recommend: ['茶卡镇火锅店', '青海湖土火锅'],
    type: '火锅', priceRange: '人均80-150元', rating: 4.4
  },

  // --- 张掖 ---
  {
    id: 'zhangye-cuoyu', cityId: 'zhangye', name: '搓鱼面',
    cover: 'zhangye-cuoyumian',
    desc: '张掖搓鱼面，手工搓制如鱼，配卤汁，河西走廊美味。',
    recommend: ['张掖老字号', '甘州搓鱼面'],
    type: '面食', priceRange: '人均30-60元', rating: 4.4
  },
  {
    id: 'zhangye-niurou', cityId: 'zhangye', name: '牛肉小饭',
    cover: 'zhangye-niurou',
    desc: '张掖牛肉小饭，牛肉汤配小面片，汤鲜味美，早餐经典。',
    recommend: ['张掖牛肉小饭', '甘州老字号'],
    type: '早餐', priceRange: '人均20-40元', rating: 4.3
  },

  // ========== 特色 (11城市) ==========

  // --- 张家界 ---
  {
    id: 'zhangjiajie-sanxia', cityId: 'zhangjiajie', name: '三下锅',
    cover: 'zhangjiajie-sanxia',
    desc: '湘西特色，腊肉萝卜豆腐同煮，一锅三味，张家界味。',
    recommend: ['张家界市区', '武陵源三下锅'],
    type: '火锅', priceRange: '人均60-120元', rating: 4.4
  },
  {
    id: 'zhangjiajie-larou', cityId: 'zhangjiajie', name: '湘西腊肉',
    cover: 'xiangxi-larou',
    desc: '湘西农家腊肉，烟熏味浓，配冬笋或蒜苗炒制。',
    recommend: ['张家界农家院', '湘西腊肉馆'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.5
  },

  // --- 凤凰古城 ---
  {
    id: 'fenghuang-xue', cityId: 'fenghuang', name: '血粑鸭',
    cover: 'fenghuang-xuebaya',
    desc: '凤凰血粑鸭，鸭血糯米灌鸭肠，蒸煮或油炸，苗家味。',
    recommend: ['凤凰古城', '沱江人家'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.5
  },
  {
    id: 'fenghuang-suan', cityId: 'fenghuang', name: '苗家酸汤鱼',
    cover: 'miaojia-suan',
    desc: '苗家酸汤鱼，野生江鱼配自制酸汤，酸辣开胃。',
    recommend: ['凤凰古城苗家菜', '沱江苗寨'],
    type: '海鲜', priceRange: '人均100-180元', rating: 4.5
  },

  // --- 婺源 ---
  {
    id: 'wuyuan-fenzheng', cityId: 'wuyuan', name: '粉蒸鱼',
    cover: 'wuyuan-fenzheng',
    desc: '婺源粉蒸鱼，草鱼裹蒸粉蒸制，配腊肉，徽州家常味。',
    recommend: ['婺源老字号', '江岭农家院'],
    type: '中餐', priceRange: '人均80-150元', rating: 4.4
  },
  {
    id: 'wuyuan-hebao', cityId: 'wuyuan', name: '荷包红鲤鱼',
    cover: 'wuyuan-hebao',
    desc: '婺源特色荷包红鲤鱼，清蒸或红烧，肉质细嫩。',
    recommend: ['婺源荷包红鲤', '徽州人家'],
    type: '海鲜', priceRange: '人均120-200元', rating: 4.5
  },

  // --- 周庄 ---
  {
    id: 'zhouzhuang-wan', cityId: 'zhouzhuang', name: '万三蹄',
    cover: 'zhouzhuang-wansanti',
    desc: '周庄万三蹄，沈万三宴请朱元璋的红烧蹄髈，肥而不腻。',
    recommend: ['周庄沈厅', '万三蹄总店'],
    type: '中餐', priceRange: '人均120-200元', rating: 4.5
  },
  {
    id: 'zhouzhuang-apoch', cityId: 'zhouzhuang', name: '阿婆茶',
    cover: 'zhouzhuang-apoch',
    desc: '周庄阿婆茶，配茴香豆、盐渍梅子，江南水乡慢生活。',
    recommend: ['周庄阿婆茶楼', '双桥茶楼'],
    type: '茶饮', priceRange: '人均40-80元', rating: 4.3
  },

  // --- 乌镇 ---
  {
    id: 'wuzhen-hongshao', cityId: 'wuzhen', name: '红烧羊肉',
    cover: 'wuzhen-hongshao',
    desc: '乌镇红烧羊肉，湖羊五花，萝卜同烧，冬令进补。',
    recommend: ['乌镇羊肉老店', '西栅菜馆'],
    type: '中餐', priceRange: '人均100-180元', rating: 4.5
  },
  {
    id: 'wuzhen-chaodian', cityId: 'wuzhen', name: '乌镇茶点',
    cover: 'wuzhen-chaodian',
    desc: '乌镇传统茶点，定胜糕、青团、姑嫂饼，江南精致。',
    recommend: ['乌镇茶糕铺', '东栅老字号'],
    type: '糕点', priceRange: '人均40-80元', rating: 4.3
  },

  // --- 西塘 ---
  {
    id: 'xitang-fenzheng', cityId: 'xitang', name: '粉蒸肉',
    cover: 'xitang-fenzheng',
    desc: '西塘粉蒸肉，五花肉裹蒸肉粉，配荷叶蒸制，肥而不腻。',
    recommend: ['西塘老字号', '烟雨长廊'],
    type: '中餐', priceRange: '人均100-180元', rating: 4.4
  },
  {
    id: 'xitang-baozhen', cityId: 'xitang', name: '八珍糕',
    cover: 'xitang-bazhengao',
    desc: '西塘八珍糕，八种果仁磨粉制成，健脾益胃，江南名点。',
    recommend: ['西塘八珍糕铺', '古镇糕点店'],
    type: '糕点', priceRange: '人均20-40元', rating: 4.3
  },

  // --- 千岛湖 ---
  {
    id: 'qiandaohu-yutou', cityId: 'qiandaohu', name: '千岛湖鱼头',
    cover: 'qiandaohu-yutou',
    desc: '千岛湖有机花鲢鱼头，煲汤奶白，肉质鲜嫩，鱼头宴之王。',
    recommend: ['千岛湖鱼头馆', '农夫山泉鱼庄'],
    type: '海鲜', priceRange: '人均150-250元', rating: 4.6
  },
  {
    id: 'qiandaohu-suanla', cityId: 'qiandaohu', name: '千岛湖有机鱼',
    cover: 'qiandaohu-youjiyu',
    desc: '千岛湖野生鱼，清蒸红烧皆宜，水质好鱼质鲜。',
    recommend: ['千岛湖渔庄', '梅峰观景台餐厅'],
    type: '海鲜', priceRange: '人均120-200元', rating: 4.5
  },

  // --- 武夷山 ---
  {
    id: 'wuyishan-dahongpao', cityId: 'wuyishan', name: '大红袍鸡',
    cover: 'wuyishan-dahongpao',
    desc: '武夷山大红袍茶叶炖鸡，茶香鸡鲜，岩茶入菜独特。',
    recommend: ['武夷山老字号', '三姑度假区'],
    type: '中餐', priceRange: '人均120-200元', rating: 4.5
  },
  {
    id: 'wuyishan-tongfan', cityId: 'wuyishan', name: '竹筒饭',
    cover: 'wuyishan-tongfan',
    desc: '武夷山竹筒饭，配腊肉香菇，米香竹香交融，山民风味。',
    recommend: ['武夷山农家饭', '星村竹林人家'],
    type: '中餐', priceRange: '人均50-80元', rating: 4.3
  },

  // --- 泰山 ---
  {
    id: 'taishan-doufu', cityId: 'taishan', name: '泰山豆腐宴',
    cover: 'taishan-doufu',
    desc: '泰山豆腐宴，二十余种做法，营养丰富，登泰山必尝。',
    recommend: ['泰山豆腐庄', '泰安老字号'],
    type: '中餐', priceRange: '人均150-250元', rating: 4.5
  },
  {
    id: 'taishan-chaoji', cityId: 'taishan', name: '泰山炒鸡',
    cover: 'taishan-chaoji',
    desc: '泰山炒鸡，农家土鸡配泰山参，汤鲜肉嫩，滋补养生。',
    recommend: ['泰山炒鸡老店', '泰山东麓农家'],
    type: '中餐', priceRange: '人均100-180元', rating: 4.4
  },

  // --- 华山 ---
  {
    id: 'huashan-dadao', cityId: 'huashan', name: '大刀面',
    cover: 'huashan-dadaomian',
    desc: '华山大刀面，面条宽厚如刀，配臊子或油泼辣子，西北豪迈。',
    recommend: ['华山大刀面馆', '华阴老字号'],
    type: '面食', priceRange: '人均30-60元', rating: 4.4
  },
  {
    id: 'huashan-yecai', cityId: 'huashan', name: '华山野菜宴',
    cover: 'huashan-yecai',
    desc: '华山野生野菜，香椿芽、山木耳、灰灰菜，清淡养生。',
    recommend: ['华山野菜馆', '华阴农家院'],
    type: '家常菜', priceRange: '人均60-100元', rating: 4.3
  },

  // --- 黄果树 ---
  {
    id: 'huangguoshu-suan', cityId: 'huangguoshu', name: '贵州酸汤鱼',
    cover: 'guizhou-suantangyu',
    desc: '贵州苗家酸汤鱼，红酸汤配草鱼，酸辣开胃，黔菜代表。',
    recommend: ['黄果树酸汤鱼', '安顺老字号'],
    type: '海鲜', priceRange: '人均100-180元', rating: 4.5
  },
  {
    id: 'huangguoshu-siwa', cityId: 'huangguoshu', name: '丝娃娃',
    cover: 'guizhou-siwawa',
    desc: '贵州丝娃娃，薄如蝉翼的米皮包十余种菜丝，淋酸辣汁。',
    recommend: ['贵阳丝娃娃', '安顺小吃店'],
    type: '小吃', priceRange: '人均30-60元', rating: 4.4
  }
]

export function getFood(id) {
  return foods.find(f => f.id === id)
}

export function foodsByCity(cityId) {
  return foods.filter(f => f.cityId === cityId)
}

export function foodsByType(type) {
  if (!type) return foods
  return foods.filter(f => f.type === type)
}

export function searchFoods(keyword) {
  if (!keyword) return foods
  const kw = keyword.toLowerCase().trim()
  return foods.filter(f => {
    const name = f.name.toLowerCase()
    const desc = (f.desc || '').toLowerCase()
    const recommend = (f.recommend || []).join(' ').toLowerCase()
    const type = (f.type || '').toLowerCase()
    return name.includes(kw) || desc.includes(kw) || recommend.includes(kw) || type.includes(kw)
  })
}

export function getPopularFoods(limit = 10) {
  return [...foods]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit)
}