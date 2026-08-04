// 景点数据 - 全国70个城市，约200个著名景点
export const spots = [
  // ==================== 华北 (8城市) ====================

  // --- 北京 beijing ---
  {
    id: 'beijing-gugong', cityId: 'beijing', name: '故宫博物院',
    cover: 'forbidden-city-beijing', rating: 4.9, tags: ['人文', '必去', '世界遗产'],
    openTime: '08:30-17:00（周一闭馆）', ticket: '60元', traffic: '地铁1号线天安门东站B口',
    duration: '半天-一天', tips: '提前7天网上预约；走午门入神武门出；珍宝馆钟表馆值得一看',
    intro: '明清两代皇家宫殿，世界文化遗产，藏百万件宫廷珍宝，中国古代宫廷艺术集大成者',
    lng: 116.3974, lat: 39.9163
  },
  {
    id: 'beijing-changcheng-badaling', cityId: 'beijing', name: '八达岭长城',
    cover: 'great-wall-badaling', rating: 4.8, tags: ['自然', '人文', '必去', '世界遗产'],
    openTime: '07:30-17:30', ticket: '40元', traffic: 'S2线火车青龙桥站步行',
    duration: '半天', tips: '建议坐缆车上行步行下山；避开节假日；有体力可尝试木栈道',
    intro: '明代长城保存最完好的一段，"不到长城非好汉"，气势磅礴的军事防御工程',
    lng: 116.0210, lat: 40.3587
  },
  {
    id: 'beijing-summerpalace', cityId: 'beijing', name: '颐和园',
    cover: 'summer-palace-beijing', rating: 4.7, tags: ['人文', '自然', '世界遗产'],
    openTime: '07:00-18:00', ticket: '30元', traffic: '地铁4号线北宫门站D口',
    duration: '半天', tips: '从北宫门入游苏州街至昆明湖；十七孔桥夕阳绝美；联票含圆明园',
    intro: '中国现存规模最大保存最完整的皇家园林，皇家御苑典范，世界文化遗产',
    lng: 116.2710, lat: 39.9999
  },
  {
    id: 'beijing-tiantan', cityId: 'beijing', name: '天坛公园',
    cover: 'temple-of-heaven-beijing', rating: 4.6, tags: ['人文', '世界遗产'],
    openTime: '06:00-22:00', ticket: '15元联票34元', traffic: '地铁5号线天坛东门站',
    duration: '2-3小时', tips: '祈年殿回声圜丘是核心；清晨有老北京晨练；穿舒服的鞋',
    intro: '明清两代皇帝祭天祈谷之所，祈年殿蓝色琉璃瓦圆顶为其标志，世界文化遗产',
    lng: 116.4106, lat: 39.8822
  },

  // --- 天津 tianjin ---
  {
    id: 'tianjin-wudadao', cityId: 'tianjin', name: '五大道',
    cover: 'tianjin-wudadao', rating: 4.6, tags: ['人文', '拍照', '必去'],
    openTime: '全天', ticket: '免费', traffic: '地铁1号线营口道站',
    duration: '2-3小时', tips: '租共享单车骑行最佳；秋季银杏金黄；庆王府可参观',
    intro: '万国建筑博览会，数百栋欧式小洋楼，近代天津的历史缩影',
    lng: 117.2142, lat: 39.1189
  },
  {
    id: 'tianjin-gunwenhua', cityId: 'tianjin', name: '古文化街',
    cover: 'tianjin-ancient-street', rating: 4.3, tags: ['人文', '美食'],
    openTime: '全天', ticket: '免费', traffic: '地铁2号线东北角站',
    duration: '2小时', tips: '泥人张彩塑杨柳青年画为特产；尝狗不理包子和茶汤',
    intro: '天津民俗文化一条街，天后宫所在地，年货节和庙会热闹非凡',
    lng: 117.2105, lat: 39.1390
  },
  {
    id: 'tianjin-dagu', cityId: 'tianjin', name: '大沽口炮台',
    cover: 'tianjin-dagu-fort', rating: 4.4, tags: ['人文', '历史'],
    openTime: '08:30-16:30', ticket: '30元', traffic: '公交102路大沽口炮台站',
    duration: '2小时', tips: '近代史重要遗迹；可看海上风光；与滨海新区联游',
    intro: '明清海防军事要塞，近代史遗迹遗址，见证了中国近代屈辱与抗争',
    lng: 117.6967, lat: 38.9836
  },

  // --- 石家庄 shijiazhuang ---
  {
    id: 'shijiazhuang-zhaozhou', cityId: 'shijiazhuang', name: '赵州桥',
    cover: 'zhaozhou-bridge', rating: 4.5, tags: ['人文', '世界遗产'],
    openTime: '07:00-18:00', ticket: '40元', traffic: '石家庄乘长途车至赵县',
    duration: '2小时', tips: '中国最古老石拱桥；可逛赵县梨花节；有桥史博物馆',
    intro: '隋代李春建造，世界上最古老的石拱桥，"赵州桥来什么人修"，千古奇迹',
    lng: 114.7750, lat: 37.7563
  },
  {
    id: 'shijiazhuang-xibaipo', cityId: 'shijiazhuang', name: '西柏坡',
    cover: 'xibaipo-revolution', rating: 4.4, tags: ['人文', '历史'],
    openTime: '08:00-17:00', ticket: '免费', traffic: '石家庄北站乘专线车',
    duration: '半天', tips: '革命圣地；可看党中央旧址；与沕沕水瀑布联游',
    intro: '党中央解放战争时期最后一个农村指挥所，"新中国从这里走来"',
    lng: 113.7830, lat: 38.3456
  },
  {
    id: 'shijiazhuang-longxing', cityId: 'shijiazhuang', name: '隆兴寺',
    cover: 'longxing-temple', rating: 4.5, tags: ['人文', '宗教'],
    openTime: '07:30-17:30', ticket: '50元', traffic: '正定县内步行可达',
    duration: '2小时', tips: '现存宋代建筑代表作；千手观音铜像；可逛正定古城',
    intro: '中国现存最大最著名的宋代佛教寺院，摩尼殿转轮殿各具特色',
    lng: 114.5736, lat: 38.1478
  },

  // --- 承德 chengde ---
  {
    id: 'chengde-bishu', cityId: 'chengde', name: '避暑山庄',
    cover: 'chengde-mountain-resort', rating: 4.8, tags: ['人文', '自然', '世界遗产', '必去'],
    openTime: '07:00-18:00', ticket: '130元（联票含博物馆）', traffic: '承德站公交1路',
    duration: '一天', tips: '皇家园林典范；可坐环山车；湖区洲岛区最精华',
    intro: '清代皇帝夏日避暑之地，中国现存最大的古典皇家园林，世界文化遗产',
    lng: 117.9436, lat: 41.0068
  },
  {
    id: 'chengde-waimiao', cityId: 'chengde', name: '外八庙',
    cover: 'chengde-temples', rating: 4.7, tags: ['人文', '宗教', '世界遗产'],
    openTime: '07:30-17:30', ticket: '须弥福寿之庙100元', traffic: '避暑山庄步行可达',
    duration: '半天', tips: '融合汉藏建筑风格；普陀宗乘之庙规模最大；小布达拉宫',
    intro: '清代皇家寺庙群，融合汉藏蒙古建筑艺术，民族团结的历史见证',
    lng: 117.9536, lat: 41.0128
  },
  {
    id: 'chengde-jinshanling', cityId: 'chengde', name: '金山岭长城',
    cover: 'jinshanling-great-wall', rating: 4.7, tags: ['自然', '人文', '必去'],
    openTime: '05:30-19:00', ticket: '65元', traffic: '承德乘班车至滦平',
    duration: '半天-一天', tips: '长城最精华段；敌楼密集；摄影天堂；春秋最美',
    intro: '长城最精华最完好的一段，"万里长城金山独秀"，敌楼密集气势雄伟',
    lng: 117.2564, lat: 40.6622
  },

  // --- 秦皇岛 qinhuangdao ---
  {
    id: 'qinhuangdao-shanhai', cityId: 'qinhuangdao', name: '山海关',
    cover: 'shanhai-guan', rating: 4.6, tags: ['人文', '自然', '必去'],
    openTime: '07:30-18:00', ticket: '50元（天下第一关）', traffic: '秦皇岛公交33路',
    duration: '半天', tips: '"天下第一关"城楼；老龙头入海长城；孟姜女庙',
    intro: '长城入海处，"天下第一关"，华北东北咽喉要冲，历史文化名城',
    lng: 119.7668, lat: 39.9788
  },
  {
    id: 'qinhuangdao-beidaihe', cityId: 'qinhuangdao', name: '北戴河',
    cover: 'beidaihe-beach', rating: 4.5, tags: ['自然', '亲子', '海滩'],
    openTime: '全天', ticket: '免费', traffic: '秦皇岛乘公交15路',
    duration: '半天-一天', tips: '鸽子窝看日出；老虎石海上公园；海鲜大排档',
    intro: '中国最早的海滨避暑胜地，沙软潮平，绿树红瓦，夏日度假天堂',
    lng: 119.5172, lat: 39.8342
  },
  {
    id: 'qinhuangdao-gulou', cityId: 'qinhuangdao', name: '鸽子窝公园',
    cover: 'geziwo-park', rating: 4.5, tags: ['自然', '观鸟'],
    openTime: '04:00-18:00', ticket: '25元', traffic: '北戴河公交15路',
    duration: '2小时', tips: '看海上日出最佳地；候鸟栖息地；湿地风光',
    intro: '北戴河看日出绝佳之地，也是候鸟迁徙重要驿站，国际观鸟胜地',
    lng: 119.5210, lat: 39.8470
  },

  // --- 张家口 zhangjiakou ---
  {
    id: 'zhangjiakou-chongli', cityId: 'zhangjiakou', name: '崇礼滑雪小镇',
    cover: 'chongli-ski-resort', rating: 4.7, tags: ['运动', '亲子', '冬季'],
    openTime: '08:30-17:30（冬季）', ticket: '雪票约300-500元', traffic: '张家口乘班车至崇礼',
    duration: '半天-一天', tips: '2022冬奥场地；多乐美地云顶乐园；初学者可请教练',
    intro: '2022年北京冬奥会雪上项目举办地，华北最著名的滑雪度假胜地',
    lng: 115.2768, lat: 40.9712
  },
  {
    id: 'zhangjiakou-bashang', cityId: 'zhangjiakou', name: '坝上草原天路',
    cover: 'bashang-grassland', rating: 4.6, tags: ['自然', '自驾', '必去'],
    openTime: '全天', ticket: '免费', traffic: '张家口自驾或包车',
    duration: '1-2天', tips: '中国最美公路；秋季层林尽染；温差大带厚衣',
    intro: '连接张北沽源的草原公路，66号公路中国版，夏秋景色绝美',
    lng: 114.7190, lat: 41.1521
  },
  {
    id: 'zhangjiakou-jiimingyi', cityId: 'zhangjiakou', name: '鸡鸣驿古城',
    cover: 'jiminyi-ancient-post', rating: 4.4, tags: ['人文', '历史'],
    openTime: '08:00-17:30', ticket: '40元', traffic: '张家口乘公交至怀来',
    duration: '2-3小时', tips: '中国现存最大最古驿站；可看古城墙；明清建筑群',
    intro: '国内保存最完整的古代驿站，"万里邮路第一驿"，明清军事要塞',
    lng: 115.4210, lat: 40.4142
  },

  // --- 保定 baoding ---
  {
    id: 'baoding-zhili', cityId: 'baoding', name: '直隶总督署',
    cover: 'zhili-governor', rating: 4.5, tags: ['人文', '历史'],
    openTime: '08:00-17:30', ticket: '35元', traffic: '保定市内公交4路',
    duration: '2小时', tips: '"一座总督署，半部清史稿"；与古莲花池毗邻',
    intro: '清代直隶省最高军政衙门，中国唯一保存完整的清代省级衙署',
    lng: 115.4790, lat: 38.8790
  },
  {
    id: 'baoding-lianhua', cityId: 'baoding', name: '古莲花池',
    cover: 'baoding-lianhua-pond', rating: 4.4, tags: ['人文', '自然'],
    openTime: '07:30-18:00', ticket: '25元', traffic: '保定市内步行可达总督署',
    duration: '1-2小时', tips: '江南园林风格；冬季有雪景；与直隶总督署联游',
    intro: '中国北方著名园林，始建于元代，明清时为皇家行宫，清幽雅致',
    lng: 115.4780, lat: 38.8780
  },
  {
    id: 'baoding-mancheng', cityId: 'baoding', name: '满城汉墓',
    cover: 'mancheng-han-tomb', rating: 4.4, tags: ['人文', '历史'],
    openTime: '08:30-17:30', ticket: '10元', traffic: '保定乘公交至满城',
    duration: '2小时', tips: '西汉中山靖王刘胜墓；金缕玉衣铜壶等国宝出土',
    intro: '西汉中山靖王刘胜夫妇墓，出土金缕玉衣等珍贵文物，历史价值极高',
    lng: 115.3311, lat: 38.9472
  },

  // --- 平遥 pingyao ---
  {
    id: 'pingyao-ancient', cityId: 'pingyao', name: '平遥古城',
    cover: 'pingyao-ancient-city', rating: 4.8, tags: ['人文', '必去', '世界遗产'],
    openTime: '全天', ticket: '125元（通票）', traffic: '平遥站步行或打车',
    duration: '1-2天', tips: '通票含22个景点；骑自行车游城墙；客栈住宿体验',
    intro: '保存最完好的四大古城之一，世界文化遗产，明清金融中心"日升昌"所在地',
    lng: 112.1753, lat: 37.2056
  },
  {
    id: 'pingyao-rishengchang', cityId: 'pingyao', name: '日升昌票号',
    cover: 'rishengchang-piaohao', rating: 4.6, tags: ['人文', '历史', '必去'],
    openTime: '08:00-18:00', ticket: '通票已含', traffic: '古城内步行',
    duration: '1-2小时', tips: '中国第一家票号；晋商文化发源地；可看地下金库',
    intro: '中国第一家票号"日升昌"，开启中国金融业先河，汇通天下的晋商传奇',
    lng: 112.1762, lat: 37.2061
  },
  {
    id: 'pingyao-shuanglin', cityId: 'pingyao', name: '双林寺',
    cover: 'shuanglin-temple', rating: 4.5, tags: ['人文', '世界遗产'],
    openTime: '08:00-17:30', ticket: '40元', traffic: '平遥乘公交至桥头村',
    duration: '2小时', tips: '东方彩塑艺术宝库；2000余尊彩塑；与平遥古城联游',
    intro: '被誉为"东方彩塑艺术宝库"，2000余尊宋元明清彩塑，世界文化遗产',
    lng: 112.1583, lat: 37.1825
  },

  // ==================== 东北 (7城市) ====================

  // --- 哈尔滨 haerbin ---
  {
    id: 'haerbin-ice-snow', cityId: 'haerbin', name: '冰雪大世界',
    cover: 'harbin-ice-snow', rating: 4.8, tags: ['亲子', '夜游', '必去'],
    openTime: '11:00-21:30（冬季）', ticket: '298元', traffic: '公交55路冰雪大世界站',
    duration: '3-4小时', tips: '12月-次年2月开放；零下20度注意保暖；夜景最美',
    intro: '哈尔滨国际冰雪节核心项目，巨型冰雕雪雕艺术群，冬日童话世界',
    lng: 126.5872, lat: 45.8386
  },
  {
    id: 'haerbin-central', cityId: 'haerbin', name: '中央大街',
    cover: 'harbin-central-street', rating: 4.6, tags: ['人文', '夜游', '必去'],
    openTime: '全天', ticket: '免费', traffic: '地铁1号线兆麟街站',
    duration: '2-3小时', tips: '亚洲最长步行街；马迭尔冰棍必尝；俄式建筑拍照',
    intro: '亚洲最长的商业步行街之一，71栋欧式建筑，哈尔滨的"历史年轮"',
    lng: 126.6190, lat: 45.7628
  },
  {
    id: 'haerbin-sophia', cityId: 'haerbin', name: '圣索菲亚大教堂',
    cover: 'saint-sophia-harbin', rating: 4.5, tags: ['人文', '拍照'],
    openTime: '08:30-17:00', ticket: '40元', traffic: '地铁1号线兆麟街站',
    duration: '1-2小时', tips: '远东最大东正教教堂；广场鸽子；内部有哈尔滨历史展',
    intro: '远东地区最大的东正教教堂，砖石结构拜占庭风格，哈尔滨地标建筑',
    lng: 126.6255, lat: 45.7635
  },

  // --- 长春 changchun ---
  {
    id: 'changchun-palace', cityId: 'changchun', name: '伪满皇宫博物院',
    cover: 'weiman-palace', rating: 4.5, tags: ['人文', '历史'],
    openTime: '08:30-17:20', ticket: '80元', traffic: '长春轻轨4号线',
    duration: '3-4小时', tips: '了解近代东北史；含缉熙楼勤民楼；可逛东北沦陷史陈列馆',
    intro: '中国现存三大宫廷遗址之一，伪满皇宫旧址，近代东北历史的见证',
    lng: 125.3475, lat: 43.9097
  },
  {
    id: 'changchun-jingyuetan', cityId: 'changchun', name: '净月潭',
    cover: 'jingyuetan-forest', rating: 4.6, tags: ['自然', '亲子'],
    openTime: '06:00-21:00', ticket: '30元', traffic: '长春轻轨3号线',
    duration: '半天-一天', tips: '亚洲最大人工林海；森林浴场；冬季雪雕',
    intro: '亚洲最大的人工林海，净月潭水环绕山林，长春"绿肺"，四季各异',
    lng: 125.4360, lat: 43.7718
  },
  {
    id: 'changchun-changying', cityId: 'changchun', name: '长影世纪城',
    cover: 'changchun-film-city', rating: 4.4, tags: ['亲子', '主题乐园'],
    openTime: '09:00-17:30', ticket: '240元', traffic: '长春轻轨3号线',
    duration: '一天', tips: '"东方好莱坞"；特效电影；适合家庭游玩',
    intro: '中国第一家电影制片厂旧址改建，集电影工业与主题娱乐于一体',
    lng: 125.3553, lat: 43.8414
  },

  // --- 沈阳 shenyang ---
  {
    id: 'shenyang-gugong', cityId: 'shenyang', name: '沈阳故宫',
    cover: 'shenyang-imperial-palace', rating: 4.7, tags: ['人文', '必去', '世界遗产'],
    openTime: '08:30-17:30', ticket: '50元', traffic: '沈阳地铁1号线怀远门站',
    duration: '3-4小时', tips: '中国仅存两大宫殿建筑群之一；八旗文化；与张氏帅府联游',
    intro: '清朝初期皇家宫殿，中国现存两大宫殿建筑群之一，世界文化遗产',
    lng: 123.4572, lat: 41.7968
  },
  {
    id: 'shenyang-shuaifu', cityId: 'shenyang', name: '张氏帅府',
    cover: 'zhang-shuaifu', rating: 4.5, tags: ['人文', '历史'],
    openTime: '08:30-17:30', ticket: '50元', traffic: '沈阳地铁1号线中街站',
    duration: '2-3小时', tips: '张作霖张学良父子官邸；民国建筑；与沈阳故宫步行可达',
    intro: '张作霖张学良父子的官邸和私宅，中西合璧建筑群，近代东北历史缩影',
    lng: 123.4590, lat: 41.7914
  },
  {
    id: 'shenyang-beiling', cityId: 'shenyang', name: '北陵公园',
    cover: 'zhaoling-mausoleum', rating: 4.5, tags: ['人文', '自然'],
    openTime: '06:00-22:00', ticket: '6元（昭陵另收）', traffic: '沈阳地铁2号线北陵公园站',
    duration: '半天', tips: '清太宗皇太极昭陵所在地；皇家园林风格；晨练好去处',
    intro: '清太宗皇太极陵墓"昭陵"所在地，沈阳最大的皇家园林式公园',
    lng: 123.4315, lat: 41.8298
  },

  // --- 大连 dalian ---
  {
    id: 'dalian-xinghai', cityId: 'dalian', name: '星海广场',
    cover: 'dalian-xinghai-square', rating: 4.6, tags: ['自然', '必去', '免费'],
    openTime: '全天', ticket: '免费', traffic: '大连地铁1号线星海广场站',
    duration: '2-3小时', tips: '亚洲最大城市广场；海鸥盘旋；大连啤酒节举办地',
    intro: '亚洲最大的城市公用广场，环绕星海公园，海风海景与欧式建筑辉映',
    lng: 121.6147, lat: 38.8731
  },
  {
    id: 'dalian-jinshi', cityId: 'dalian', name: '金石滩',
    cover: 'jinshitan-beach', rating: 4.5, tags: ['自然', '海滩', '亲子'],
    openTime: '全天', ticket: '免费（各景点另收）', traffic: '大连快轨3号线金石滩站',
    duration: '一天', tips: '"海上石林"；金石滩国家地质公园；黄金海岸',
    intro: '"海上石林"国家级风景名胜区，黄金海岸金石园海之恋等景点群',
    lng: 122.0193, lat: 39.0367
  },
  {
    id: 'dalian-lvshun', cityId: 'dalian', name: '旅顺口',
    cover: 'lvshun-port', rating: 4.4, tags: ['人文', '历史'],
    openTime: '07:30-17:30', ticket: '100元（通票）', traffic: '大连乘公交至旅顺',
    duration: '半天-一天', tips: '近代史遗迹；军港公园；樱花盛开',
    intro: '中国近代史的缩影，甲午战争日俄战争遗迹所在地，军港要塞',
    lng: 121.2408, lat: 38.8175
  },

  // --- 长白山 changbaishan ---
  {
    id: 'changbaishan-tianchi', cityId: 'changbaishan', name: '长白山天池',
    cover: 'changbaishan-tianchi', rating: 4.9, tags: ['自然', '必去', '世界遗产'],
    openTime: '07:00-17:00', ticket: '125元（门票+环保车）', traffic: '二道白河乘景区专线',
    duration: '半天-一天', tips: '天池视天气开放；山顶需穿厚衣；看日出需住宿',
    intro: '中国最大的火山口湖，松花江源头，神山圣水，长白山的灵魂',
    lng: 128.0864, lat: 42.0716
  },
  {
    id: 'changbaishan-waterfall', cityId: 'changbaishan', name: '长白瀑布',
    cover: 'changbaishan-waterfall', rating: 4.6, tags: ['自然'],
    openTime: '07:00-17:00', ticket: '门票已含', traffic: '景区环保车+徒步',
    duration: '2-3小时', tips: '落差68米；从天池步行下山路；负离子极高',
    intro: '中国东北最大的瀑布群，天池水由此泄出，三江源头之一',
    lng: 128.0970, lat: 42.0688
  },
  {
    id: 'changbaishan-didong', cityId: 'changbaishan', name: '地下森林',
    cover: 'changbaishan-underground-forest', rating: 4.5, tags: ['自然', '徒步'],
    openTime: '07:30-17:00', ticket: '门票已含', traffic: '景区环保车',
    duration: '2-3小时', tips: '原始森林徒步；空气极佳；注意保暖',
    intro: '长白山火山喷发形成的地下原始森林，珍稀植物和动物栖息地',
    lng: 128.0500, lat: 42.1100
  },

  // --- 漠河 mohe ---
  {
    id: 'mohe-beijicun', cityId: 'mohe', name: '北极村',
    cover: 'mohe-northern-village', rating: 4.7, tags: ['自然', '必去'],
    openTime: '全天', ticket: '68元', traffic: '漠河乘旅游专线',
    duration: '半天-一天', tips: '中国最北村庄；找北之旅；冬季极光夏季极昼',
    intro: '中国最北的村庄，"找北"的终点，北极光奇观和极昼极夜现象',
    lng: 122.4348, lat: 53.4890
  },
  {
    id: 'mohe-northern-lights', cityId: 'mohe', name: '漠河北极星公园',
    cover: 'mohe-polar-star', rating: 4.5, tags: ['自然', '打卡'],
    openTime: '全天', ticket: '免费', traffic: '漠河县内步行',
    duration: '1-2小时', tips: '北极星雕塑；七星广场；中国最北邮局',
    intro: '中国最北的公园，标志性北极星雕塑，"神州北极"石碑所在地',
    lng: 122.5390, lat: 52.9960
  },
  {
    id: 'mohe-yanzhi', cityId: 'mohe', name: '胭脂沟',
    cover: 'yanzhi-gold-mine', rating: 4.4, tags: ['人文', '历史'],
    openTime: '08:00-17:00', ticket: '免费', traffic: '漠河乘包车前往',
    duration: '2小时', tips: '淘金圣地；李金镛祠堂；电视剧《闯关东》取景',
    intro: '清代著名的淘金圣地，"胭脂沟"因慈禧太后而得名，闯关东文化发源地',
    lng: 122.5172, lat: 52.9528
  },

  // --- 鞍山 anshan ---
  {
    id: 'anshan-qianshan', cityId: 'anshan', name: '千山',
    cover: 'qianshan-mountain', rating: 4.6, tags: ['自然', '人文', '必去'],
    openTime: '06:00-18:00', ticket: '80元', traffic: '鞍山公交8路',
    duration: '一天', tips: '东北道教名山；佛道共融；仙人台五佛顶',
    intro: '东北著名道教名山，千山万壑佛道共融，东北"小黄山"',
    lng: 122.9890, lat: 41.1345
  },
  {
    id: 'anshan-yufo', cityId: 'anshan', name: '玉佛苑',
    cover: 'anshan-buddha', rating: 4.5, tags: ['人文', '宗教'],
    openTime: '08:00-17:00', ticket: '70元', traffic: '鞍山公交34路',
    duration: '2小时', tips: '世界最大玉佛；岫岩玉雕；与千山联游',
    intro: '供奉世界最大玉佛的寺院，高7.95米玉佛堪称世界之最',
    lng: 122.9956, lat: 41.1140
  },
  {
    id: 'anshan-tanggangzi', cityId: 'anshan', name: '汤岗子温泉',
    cover: 'tanggangzi-hot-spring', rating: 4.4, tags: ['温泉', '养生'],
    openTime: '09:00-22:00', ticket: '约200元', traffic: '鞍山公交11路',
    duration: '半天', tips: '中国四大温泉之一；热泥疗；康复疗养',
    intro: '中国四大温泉康复中心之一，热泥疗法独特，温泉水温72°C',
    lng: 122.9472, lat: 41.0058
  },

  // ==================== 华东 (14城市) ====================

  // --- 上海 shanghai ---
  {
    id: 'shanghai-bund', cityId: 'shanghai', name: '外滩',
    cover: 'shanghai-bund', rating: 4.8, tags: ['人文', '夜游', '必去'],
    openTime: '全天', ticket: '免费', traffic: '地铁2/10号线南京东路站',
    duration: '2-3小时', tips: '傍晚看两岸夜景；和平饭店至十六铺段经典',
    intro: '万国建筑博览群与陆家嘴天际线完美对照，上海的城市名片',
    lng: 121.4900, lat: 31.2400
  },
  {
    id: 'shanghai-yuyuan', cityId: 'shanghai', name: '豫园',
    cover: 'shanghai-yuyuan-garden', rating: 4.5, tags: ['人文', '美食'],
    openTime: '08:30-17:00', ticket: '40元', traffic: '地铁10号线豫园站',
    duration: '2-3小时', tips: '城隍庙小吃丰富；南翔小笼包必尝；元宵灯会',
    intro: '明代古典园林，江南水乡韵味，与城隍庙美食商圈相连',
    lng: 121.4925, lat: 31.2273
  },
  {
    id: 'shanghai-lujiazui', cityId: 'shanghai', name: '陆家嘴',
    cover: 'shanghai-lujiazui-skyline', rating: 4.7, tags: ['夜游', '必去'],
    openTime: '全天', ticket: '免费', traffic: '地铁2号线陆家嘴站',
    duration: '2-3小时', tips: '东方明珠上海中心观景；陆家嘴中心绿地；夜景绝好',
    intro: '东方华尔街，东方明珠上海中心金茂大厦组成世界最壮观天际线',
    lng: 121.5057, lat: 31.2335
  },

  // --- 杭州 hangzhou ---
  {
    id: 'hangzhou-xihu', cityId: 'hangzhou', name: '西湖',
    cover: 'hangzhou-west-lake', rating: 4.9, tags: ['自然', '必去', '免费'],
    openTime: '全天', ticket: '免费', traffic: '地铁1号线龙翔桥站',
    duration: '半天-一天', tips: '骑单车环湖或坐手划船；清晨人少景美；三潭印月',
    intro: '中国最著名湖泊，"西湖十景"闻名，断桥残雪苏堤春晓处处皆画',
    lng: 120.1480, lat: 30.2489
  },
  {
    id: 'hangzhou-lingyin', cityId: 'hangzhou', name: '灵隐寺',
    cover: 'hangzhou-lingyin-temple', rating: 4.6, tags: ['人文', '宗教'],
    openTime: '07:00-18:15', ticket: '75元（含飞来峰）', traffic: '公交Y2路',
    duration: '2-3小时', tips: '先买飞来峰门票再进寺；寺内素面值得一试',
    intro: '东晋千年古刹，背靠北高峰面朝飞来峰，禅意悠远，香火鼎盛',
    lng: 120.1002, lat: 30.2411
  },
  {
    id: 'hangzhou-longjing', cityId: 'hangzhou', name: '龙井村',
    cover: 'longjing-tea-village', rating: 4.5, tags: ['自然', '文化'],
    openTime: '全天', ticket: '免费', traffic: '公交27路龙井村站',
    duration: '3小时', tips: '春季采茶季；品龙井茶；与灵隐寺九溪联游',
    intro: '龙井茶原产地，群山环抱茶园层叠，体验采茶制茶的茶文化',
    lng: 120.0930, lat: 30.2283
  },

  // --- 苏州 suzhou ---
  {
    id: 'suzhou-zhuozheng', cityId: 'suzhou', name: '拙政园',
    cover: 'suzhou-zhuozheng-garden', rating: 4.8, tags: ['人文', '必去', '世界遗产'],
    openTime: '07:30-17:00', ticket: '90元', traffic: '地铁4号线北寺塔站',
    duration: '3小时', tips: '建议早上入园；与狮子林联票更划算；听雨轩',
    intro: '中国四大名园之首，明代私家园林典范，世界文化遗产',
    lng: 120.6290, lat: 31.3258
  },
  {
    id: 'suzhou-liuyuan', cityId: 'suzhou', name: '留园',
    cover: 'suzhou-liuyuan-garden', rating: 4.7, tags: ['人文', '世界遗产'],
    openTime: '07:30-17:00', ticket: '55元', traffic: '地铁1号线桐泾公园站',
    duration: '2小时', tips: '与拙政园并列中国四大名园；以建筑空间艺术著称',
    intro: '与拙政园并列中国四大名园，以建筑空间处理艺术著称，世界文化遗产',
    lng: 120.5850, lat: 31.3176
  },
  {
    id: 'suzhou-pingjiang', cityId: 'suzhou', name: '平江路',
    cover: 'suzhou-pingjiang-road', rating: 4.6, tags: ['人文', '夜游', '免费'],
    openTime: '全天', ticket: '免费', traffic: '地铁1号线相门站',
    duration: '2-3小时', tips: '小桥流水；昆曲评弹；桃花源记咖啡馆',
    intro: '苏州最著名的历史街区，小桥流水人家，江南水乡的活化石',
    lng: 120.6285, lat: 31.3150
  },

  // --- 南京 nanjing ---
  {
    id: 'nanjing-zhongshan', cityId: 'nanjing', name: '中山陵',
    cover: 'nanjing-zhongshan-mausoleum', rating: 4.7, tags: ['人文', '必去', '免费'],
    openTime: '08:30-17:30', ticket: '免费', traffic: '地铁2号线苜蓿园站',
    duration: '3小时', tips: '紫金山风景区内；可连游明孝陵；音乐台',
    intro: '孙中山先生陵墓，建筑宏伟，钟山风景区核心景点',
    lng: 118.8210, lat: 32.0585
  },
  {
    id: 'nanjing-qinhuai', cityId: 'nanjing', name: '夫子庙秦淮河',
    cover: 'nanjing-qinhuai-river', rating: 4.5, tags: ['人文', '夜游', '必去'],
    openTime: '全天', ticket: '免费（部分景点收费）', traffic: '地铁3号线夫子庙站',
    duration: '3小时', tips: '秦淮画舫夜游；盐水鸭鸭血粉丝汤；江南贡院',
    intro: '六朝金粉之地，秦淮河畔夫子庙，江南贡院，文人墨客聚集之地',
    lng: 118.7875, lat: 32.0205
  },
  {
    id: 'nanjing-xiaolingwei', cityId: 'nanjing', name: '明孝陵',
    cover: 'ming-xiaoling-mausoleum', rating: 4.6, tags: ['人文', '世界遗产'],
    openTime: '08:30-17:30', ticket: '70元', traffic: '地铁2号线苜蓿园站',
    duration: '3小时', tips: '朱元璋陵墓；神道石像生气势非凡；秋季银杏',
    intro: '明太祖朱元璋陵墓，"明清皇家陵寝"世界文化遗产，神道石像生壮观',
    lng: 118.8180, lat: 32.0610
  },

  // --- 无锡 wuxi ---
  {
    id: 'wuxi-yuantouzhu', cityId: 'wuxi', name: '鼋头渚',
    cover: 'yuantouzhu-taihu', rating: 4.7, tags: ['自然', '必去'],
    openTime: '07:00-17:30', ticket: '105元（含游船）', traffic: '无锡公交1路',
    duration: '半天', tips: '太湖最佳观赏点；春季樱花；三山仙岛',
    intro: '太湖风景区最佳观赏点，"太湖第一名胜"，赏樱胜地',
    lng: 120.2672, lat: 31.5436
  },
  {
    id: 'wuxi-lingshan', cityId: 'wuxi', name: '灵山大佛',
    cover: 'lingshan-buddha', rating: 4.6, tags: ['人文', '宗教'],
    openTime: '07:30-17:30', ticket: '210元', traffic: '无锡公交88路',
    duration: '半天', tips: '世界最高露天青铜释迦牟尼立像；梵宫建筑精美',
    intro: '世界最高露天青铜释迦牟尼立像，高88米，灵山梵宫金碧辉煌',
    lng: 120.0200, lat: 31.4350
  },
  {
    id: 'wuxi-huishan', cityId: 'wuxi', name: '惠山古镇',
    cover: 'huishan-ancient-town', rating: 4.5, tags: ['人文', '美食'],
    openTime: '全天', ticket: '免费（古迹另收）', traffic: '无锡公交4路',
    duration: '2-3小时', tips: '"无锡露天历史博物馆"；惠山泥人；油面筋',
    intro: '无锡老街坊文化博物馆，祠堂园林寺庙林立，吴文化发源地之一',
    lng: 120.2826, lat: 31.5930
  },

  // --- 宁波 ningbo ---
  {
    id: 'ningbo-tianyige', cityId: 'ningbo', name: '天一阁',
    cover: 'tianyige-library', rating: 4.6, tags: ['人文', '必去'],
    openTime: '08:30-17:00', ticket: '30元', traffic: '宁波公交9路',
    duration: '2小时', tips: '中国现存最早私家藏书楼；园林式藏书文化',
    intro: '中国现存最早的私家藏书楼，"亚洲现有最古老的图书馆"',
    lng: 121.5480, lat: 29.8730
  },
  {
    id: 'ningbo-laowai', cityId: 'ningbo', name: '老外滩',
    cover: 'ningbo-old-bund', rating: 4.4, tags: ['人文', '夜游'],
    openTime: '全天', ticket: '免费', traffic: '宁波地铁2号线外滩大桥站',
    duration: '2小时', tips: '近代欧式建筑群；夜景灯光；酒吧一条街',
    intro: '中国最早开埠口岸之一，近代欧式建筑群，宁波的"外滩"',
    lng: 121.5620, lat: 29.8880
  },
  {
    id: 'ningbo-xikou', cityId: 'ningbo', name: '溪口',
    cover: 'xikou-scenic', rating: 4.5, tags: ['自然', '人文'],
    openTime: '07:30-17:30', ticket: '120元（通票）', traffic: '宁波乘长途车至溪口',
    duration: '一天', tips: '蒋介石故里；雪窦山瀑布；溪口千层饼',
    intro: '蒋介石先生故里，雪窦山千丈岩瀑布，民国文化与自然山水交融',
    lng: 121.2976, lat: 29.7090
  },

  // --- 温州 wenzhou ---
  {
    id: 'wenzhou-yandang', cityId: 'wenzhou', name: '雁荡山',
    cover: 'yandang-mountain', rating: 4.7, tags: ['自然', '人文'],
    openTime: '07:30-17:30', ticket: '50-100元（分景区）', traffic: '温州乘公交至雁荡',
    duration: '一天', tips: '东南第一山；灵峰夜景；大龙湫瀑布',
    intro: '"东南第一山"，世界地质公园，奇峰异石飞瀑洞壑，山水诗发源地',
    lng: 120.9660, lat: 28.3325
  },
  {
    id: 'wenzhou-nanxi', cityId: 'wenzhou', name: '楠溪江',
    cover: 'nanxi-river', rating: 4.5, tags: ['自然', '漂流'],
    openTime: '07:30-17:30', ticket: '70元（竹筏另收）', traffic: '温州乘公交至永嘉',
    duration: '半天-一天', tips: '竹筏漂流；古村落；永嘉书院',
    intro: '国家重点风景名胜区，清流见底，两岸田园风光，"中国山水诗摇篮"',
    lng: 120.7060, lat: 28.3760
  },
  {
    id: 'wenzhou-jiangxin', cityId: 'wenzhou', name: '江心屿',
    cover: 'jiangxin-island', rating: 4.4, tags: ['人文', '自然'],
    openTime: '07:30-17:30', ticket: '30元（含船票）', traffic: '温州江心码头乘船',
    duration: '2小时', tips: '"瓯江蓬莱"；双塔古塔；夜景灯光',
    intro: '瓯江中心孤屿，"诗之岛"，双塔古塔，谢灵运江心屿诗',
    lng: 120.6990, lat: 28.9920
  },

  // --- 合肥 hefei ---
  {
    id: 'hefei-baogong', cityId: 'hefei', name: '包公墓',
    cover: 'baogong-mausoleum', rating: 4.5, tags: ['人文', '历史'],
    openTime: '08:00-17:30', ticket: '50元', traffic: '合肥公交1路',
    duration: '2小时', tips: '包拯故里；包青天祠；廉洁文化',
    intro: '北宋名臣包拯陵墓，包青天祠，"铁面无私"的象征',
    lng: 117.2950, lat: 31.8214
  },
  {
    id: 'hefei-sanhe', cityId: 'hefei', name: '三河古镇',
    cover: 'sanhe-ancient-town', rating: 4.4, tags: ['人文', '美食'],
    openTime: '全天', ticket: '免费（景点另收）', traffic: '合肥乘公交至三河',
    duration: '半天', tips: '水乡古镇；合肥老母鸡；三河米粉',
    intro: '合肥唯一的5A级古镇，水乡风情，淮军发源地，美食之乡',
    lng: 117.2710, lat: 31.5360
  },
  {
    id: 'hefei-chaohu', cityId: 'hefei', name: '巢湖',
    cover: 'chaohu-lake', rating: 4.4, tags: ['自然', '骑行'],
    openTime: '全天', ticket: '免费', traffic: '合肥乘公交至巢湖',
    duration: '半天', tips: '安徽最大淡水湖；环湖骑行；中庙姥山岛',
    intro: '安徽最大淡水湖，"五大淡水湖"之一，环湖骑行和湿地观鸟胜地',
    lng: 117.7770, lat: 31.5830
  },

  // --- 福州 fuzhou ---
  {
    id: 'fuzhou-sanfang', cityId: 'fuzhou', name: '三坊七巷',
    cover: 'sanfang-qixiang', rating: 4.6, tags: ['人文', '必去', '世界遗产'],
    openTime: '全天', ticket: '免费（展馆另收）', traffic: '福州公交5路',
    duration: '2-3小时', tips: '明清建筑；严复故居；肉燕鱼丸',
    intro: '中国现存规模较大保护较完整的历史文化街区，"中国城市里坊制度活化石"',
    lng: 119.2976, lat: 26.0788
  },
  {
    id: 'fuzhou-gushan', cityId: 'fuzhou', name: '鼓山',
    cover: 'gushan-mountain', rating: 4.5, tags: ['自然', '人文'],
    openTime: '06:00-18:00', ticket: '40元（鼓山）', traffic: '福州公交7路',
    duration: '半天', tips: '摩崖石刻；涌泉寺；鼓山十八景',
    intro: '福州名山，摩崖石刻群国内罕见，涌泉寺为闽刹之冠',
    lng: 119.3860, lat: 26.0522
  },
  {
    id: 'fuzhou-pingtan', cityId: 'fuzhou', name: '平潭岛',
    cover: 'pingtan-island', rating: 4.5, tags: ['自然', '海滩'],
    openTime: '全天', ticket: '免费（景点另收）', traffic: '福州乘动车至平潭',
    duration: '1-2天', tips: '"岚岛蓝眼泪"；石头厝；坛南湾',
    intro: '福建最大海岛，"海蚀地貌博物馆"，蓝眼泪奇观和石头厝民居',
    lng: 119.7910, lat: 25.4870
  },

  // --- 厦门 xiamen ---
  {
    id: 'xiamen-gulangyu', cityId: 'xiamen', name: '鼓浪屿',
    cover: 'xiamen-gulangyu-island', rating: 4.7, tags: ['自然', '人文', '必去'],
    openTime: '全天（船班运营）', ticket: '船票35元往返', traffic: '轮渡码头乘船',
    duration: '一天', tips: '提前公众号买船票；岛上无机动车；穿舒服的鞋',
    intro: '海上花园小岛，万国建筑博览，"钢琴之岛"，世界文化遗产',
    lng: 118.0665, lat: 24.4483
  },
  {
    id: 'xiamen-huandao', cityId: 'xiamen', name: '环岛路',
    cover: 'xiamen-island-road', rating: 4.6, tags: ['自然', '骑行', '免费'],
    openTime: '全天', ticket: '免费', traffic: '公交29路',
    duration: '2-3小时', tips: '租自行车沿海骑行；黄厝海滩看日出；曾厝垵',
    intro: '"最美海滨公路"，串联椰风寨曾厝垵白城沙滩，海风椰影骑行天堂',
    lng: 118.1100, lat: 24.4300
  },
  {
    id: 'xiamen-shapowei', cityId: 'xiamen', name: '沙坡尾',
    cover: 'xiamen-shapowei', rating: 4.4, tags: ['文艺', '美食'],
    openTime: '全天', ticket: '免费', traffic: '公交71路',
    duration: '2小时', tips: '避风坞艺术区；文创小店；落日黄昏',
    intro: '厦门最文艺的渔港，避风坞艺术区，网红店和文创小店聚集地',
    lng: 118.0846, lat: 24.4279
  },

  // --- 青岛 qingdao ---
  {
    id: 'qingdao-zhanqiao', cityId: 'qingdao', name: '栈桥',
    cover: 'qingdao-zhanqiao', rating: 4.4, tags: ['自然', '必去', '免费'],
    openTime: '全天', ticket: '免费', traffic: '地铁3号线青岛站',
    duration: '1-2小时', tips: '回澜阁是尽头；海鸥盘旋；与八大关联游',
    intro: '青岛百年地标，回澜阁深入大海，海鸥飞舞，"回澜阁"景观',
    lng: 120.3165, lat: 36.0582
  },
  {
    id: 'qingdao-laoshan', cityId: 'qingdao', name: '崂山',
    cover: 'qingdao-laoshan-mountain', rating: 4.7, tags: ['自然', '必去'],
    openTime: '06:00-18:00', ticket: '130元', traffic: '崂山旅游专线',
    duration: '一天', tips: '"海上名山第一"；仰口或太清线；道教发源地',
    intro: '海上名山第一，道教发源地之一，海山胜景，"泰山虽云高，不如东海崂"',
    lng: 120.6000, lat: 36.2279
  },
  {
    id: 'qingdao-badaguan', cityId: 'qingdao', name: '八大关',
    cover: 'qingdao-badaguan', rating: 4.5, tags: ['人文', '拍照'],
    openTime: '全天', ticket: '免费', traffic: '公交26路',
    duration: '2小时', tips: '"万国建筑博览会"；公主楼花石楼；海滨风光',
    intro: '青岛近代欧式建筑最集中区域，"万国建筑博览会"，海滨风景绝美',
    lng: 120.3408, lat: 36.0413
  },

  // --- 烟台 yantai ---
  {
    id: 'yantai-penglai', cityId: 'yantai', name: '蓬莱阁',
    cover: 'penglai-pavilion', rating: 4.6, tags: ['人文', '自然', '必去'],
    openTime: '07:00-18:00', ticket: '100元', traffic: '烟台乘长途车至蓬莱',
    duration: '半天', tips: '八仙过海传说地；海市蜃楼；蓬莱水城',
    intro: '八仙过海传说地，海市蜃楼奇观，"蓬莱仙境"，中国四大名楼之一',
    lng: 120.7450, lat: 37.8120
  },
  {
    id: 'yantai-mountain', cityId: 'yantai', name: '烟台山',
    cover: 'yantai-mountain', rating: 4.4, tags: ['人文', '拍照'],
    openTime: '全天', ticket: '免费', traffic: '烟台市内步行',
    duration: '2小时', tips: '近代领事馆建筑群；灯塔；海景',
    intro: '烟台标志性小山，近代17国领事馆建筑群，"万国建筑博物馆"',
    lng: 121.3830, lat: 37.5176
  },
  {
    id: 'yantai-changdao', cityId: 'yantai', name: '长岛',
    cover: 'changdao-island', rating: 4.5, tags: ['自然', '海岛'],
    openTime: '全天', ticket: '免费（船票45元）', traffic: '蓬莱乘渡船至长岛',
    duration: '1-2天', tips: '庙岛群岛；九丈崖；月牙湾',
    intro: '山东唯一海岛县，庙岛群岛，九丈崖海蚀地貌，候鸟栖息地',
    lng: 120.7450, lat: 37.9838
  },

  // --- 黄山 huangshan ---
  {
    id: 'huangshan-scenic', cityId: 'huangshan', name: '黄山风景区',
    cover: 'huangshan-mountain', rating: 4.9, tags: ['自然', '必去', '世界遗产'],
    openTime: '07:00-17:00', ticket: '190元（旺季）', traffic: '汤口南大门进山',
    duration: '2天', tips: '迎客松光明顶；日出云海；山上住宿',
    intro: '"五岳归来不看山，黄山归来不看岳"，世界文化与自然双遗产',
    lng: 118.1686, lat: 30.1344
  },
  {
    id: 'huangshan-hongcun', cityId: 'huangshan', name: '宏村',
    cover: 'hongcun-ancient-village', rating: 4.7, tags: ['人文', '世界遗产', '拍照'],
    openTime: '07:30-17:30', ticket: '94元', traffic: '黄山乘班车至宏村',
    duration: '半天', tips: '"中国画里的乡村"；月沼；承志堂',
    intro: '世界文化遗产，"中国画里的乡村"，徽派建筑典范，月沼倒影绝美',
    lng: 117.9874, lat: 30.0400
  },
  {
    id: 'huangshan-xidi', cityId: 'huangshan', name: '西递',
    cover: 'xidi-ancient-village', rating: 4.6, tags: ['人文', '世界遗产'],
    openTime: '07:30-17:30', ticket: '104元', traffic: '黄山乘班车至西递',
    duration: '半天', tips: '"桃花源里人家"；胡氏宗祠；敬爱堂',
    intro: '世界文化遗产，"桃花源里人家"，保存完好的徽派古村落',
    lng: 117.9830, lat: 29.8989
  },

  // --- 泉州 quanzhou ---
  {
    id: 'quanzhou-kaiyuan', cityId: 'quanzhou', name: '开元寺',
    cover: 'quanzhou-kaiyuan-temple', rating: 4.5, tags: ['人文', '宗教', '世界遗产'],
    openTime: '07:30-18:00', ticket: '免费', traffic: '泉州市内公交2路',
    duration: '1-2小时', tips: '东西塔；甘露戒坛；桑莲法界',
    intro: '泉州现存最大佛寺，东西塔为中国最高的一对石塔，世遗之城标志',
    lng: 118.6730, lat: 24.8745
  },
  {
    id: 'quanzhou-xunpu', cityId: 'quanzhou', name: '蟳埔村',
    cover: 'quanzhou-xunpu-village', rating: 4.5, tags: ['人文', '拍照'],
    openTime: '全天', ticket: '免费', traffic: '泉州公交3路',
    duration: '2小时', tips: '簪花围头饰；妈祖庙；海鲜大排档',
    intro: '古代海上丝绸之路起点，蟳埔女"簪花围"独特头饰，渔村文化',
    lng: 118.6890, lat: 24.8120
  },
  {
    id: 'quanzhou-qingyuan', cityId: 'quanzhou', name: '清源山',
    cover: 'qingyuan-mountain', rating: 4.4, tags: ['自然', '人文'],
    openTime: '06:00-19:00', ticket: '70元', traffic: '泉州公交3路',
    duration: '3小时', tips: '老君岩；中国现存最大道教石雕；弘一法师舍利塔',
    intro: '泉州名山，老君岩为中国现存最大最早的道教石雕，世遗之地',
    lng: 118.6240, lat: 24.8570
  },

  // --- 武夷山 wuyishan ---
  {
    id: 'wuyishan-tianyou', cityId: 'wuyishan', name: '天游峰',
    cover: 'wuyishan-tianyou-peak', rating: 4.7, tags: ['自然', '必去', '世界遗产'],
    openTime: '07:30-17:30', ticket: '140元（含观光车）', traffic: '武夷山景区专线',
    duration: '半天', tips: '武夷第一峰；俯瞰九曲溪；云海日出',
    intro: '武夷山"第一峰"，海拔408米，登顶俯瞰九曲溪，云海奇观',
    lng: 118.0334, lat: 27.7560
  },
  {
    id: 'wuyishan-jiqu', cityId: 'wuyishan', name: '九曲溪',
    cover: 'wuyishan-nine-bend-river', rating: 4.8, tags: ['自然', '漂流', '必去'],
    openTime: '07:30-17:00', ticket: '竹筏130元', traffic: '武夷山景区竹筏',
    duration: '3小时', tips: '竹筏漂流；两岸奇峰；摄影绝佳',
    intro: '武夷山精华，九曲溪竹筏漂流，两岸奇峰怪石，如诗如画',
    lng: 118.0280, lat: 27.7520
  },
  {
    id: 'wuyishan-dahongpao', cityId: 'wuyishan', name: '大红袍',
    cover: 'wuyishan-dahongpao', rating: 4.5, tags: ['文化', '人文'],
    openTime: '07:30-17:30', ticket: '门票已含', traffic: '武夷山景区步行',
    duration: '1-2小时', tips: '岩茶之王；九龙窠；茶文化',
    intro: '岩茶之王大红袍的原产地，九龙窠悬崖上的6株母树',
    lng: 118.0350, lat: 27.7600
  },

  // --- 泰山 taishan ---
  {
    id: 'taishan-summit', cityId: 'taishan', name: '泰山日观峰',
    cover: 'taishan-sunrise-peak', rating: 4.9, tags: ['自然', '人文', '必去', '世界遗产'],
    openTime: '05:00-21:00', ticket: '125元（旺季）', traffic: '泰安乘专线至泰山',
    duration: '1-2天', tips: '看日出需夜爬；十八盘；玉皇顶',
    intro: '五岳之首，"天下第一山"，泰山日出云海，封禅文化发源地',
    lng: 117.1000, lat: 36.2551
  },
  {
    id: 'taishan-daishan', cityId: 'taishan', name: '岱庙',
    cover: 'taishan-dai-temple', rating: 4.6, tags: ['人文', '历史', '世界遗产'],
    openTime: '07:30-17:30', ticket: '30元', traffic: '泰安市内步行',
    duration: '2小时', tips: '历代帝王封禅泰山驻跸地；古建筑群',
    intro: '历代帝王封禅泰山的驻跸地，中国现存最大的古建筑群之一',
    lng: 117.0970, lat: 36.2600
  },
  {
    id: 'taishan-18pan', cityId: 'taishan', name: '泰山十八盘',
    cover: 'taishan-18-pan', rating: 4.7, tags: ['自然', '徒步'],
    openTime: '05:00-21:00', ticket: '门票已含', traffic: '泰山景区步行',
    duration: '2-3小时', tips: '泰山最险；1633级台阶；南天门',
    intro: '泰山最险要的登山路，1633级台阶直通南天门，"天梯"',
    lng: 117.1000, lat: 36.2540
  },

  // ==================== 华中 (7城市) ====================

  // --- 武汉 wuhan ---
  {
    id: 'wuhan-huanghe', cityId: 'wuhan', name: '黄鹤楼',
    cover: 'wuhan-huanghe-tower', rating: 4.7, tags: ['人文', '必去', '夜游'],
    openTime: '08:00-22:00', ticket: '70元', traffic: '武汉公交4路',
    duration: '2小时', tips: '"天下江山第一楼"；长江大桥夜景；热干面',
    intro: '江南三大名楼之一，"天下江山第一楼"，千古名楼，武汉地标',
    lng: 114.3030, lat: 30.5430
  },
  {
    id: 'wuhan-donghu', cityId: 'wuhan', name: '东湖',
    cover: 'wuhan-donghu-lake', rating: 4.5, tags: ['自然', '骑行', '亲子'],
    openTime: '全天', ticket: '免费（部分景点收费）', traffic: '武汉公交401路',
    duration: '半天-一天', tips: '中国最大城中湖；绿道骑行；磨山樱园',
    intro: '中国最大的城中湖，"白云黄鹤的地方"，东湖绿道骑行天堂',
    lng: 114.4150, lat: 30.5470
  },
  {
    id: 'wuhan-jianghan', cityId: 'wuhan', name: '江汉路',
    cover: 'wuhan-jianghan-road', rating: 4.4, tags: ['人文', '夜游', '美食'],
    openTime: '全天', ticket: '免费', traffic: '武汉地铁2号线江汉路站',
    duration: '2小时', tips: '百年商业街；汉口江滩；豆皮汤包',
    intro: '武汉百年商业街，老建筑云集，"楚天第一街"，江汉关钟声',
    lng: 114.2860, lat: 30.5860
  },

  // --- 长沙 changsha ---
  {
    id: 'changsha-yuelu', cityId: 'changsha', name: '岳麓书院',
    cover: 'yuelu-academy', rating: 4.6, tags: ['人文', '必去'],
    openTime: '07:30-18:00', ticket: '50元', traffic: '长沙公交202路',
    duration: '2-3小时', tips: '中国四大书院之一；岳麓山；爱晚亭',
    intro: '中国四大书院之一，千年学府，与岳麓山融为一体，湖湘文化源头',
    lng: 112.9380, lat: 28.2080
  },
  {
    id: 'changsha-juzizhou', cityId: 'changsha', name: '橘子洲',
    cover: 'juzizhou-island', rating: 4.6, tags: ['自然', '必去', '免费'],
    openTime: '全天', ticket: '免费（观光车20元）', traffic: '长沙地铁2号线橘子洲站',
    duration: '半天', tips: '湘江中央长岛；毛泽东青年雕像；烟花表演',
    intro: '湘江中央长岛，"独立寒秋，湘江北去，橘子洲头"，毛泽东青年艺术雕塑',
    lng: 112.9710, lat: 28.1830
  },
  {
    id: 'changsha-taiping', cityId: 'changsha', name: '太平街',
    cover: 'changsha-taiping-street', rating: 4.4, tags: ['美食', '人文'],
    openTime: '全天', ticket: '免费', traffic: '长沙地铁2号线五一广场站',
    duration: '2小时', tips: '臭豆腐；长沙米粉；贾谊故居',
    intro: '长沙最著名的老街，美食与文艺小店云集，"潮"长沙的代表',
    lng: 112.9760, lat: 28.1990
  },

  // --- 郑州 zhengzhou ---
  {
    id: 'zhengzhou-shaolin', cityId: 'zhengzhou', name: '少林寺',
    cover: 'shaolin-temple', rating: 4.7, tags: ['人文', '宗教', '必去', '世界遗产'],
    openTime: '07:00-18:00', ticket: '100元', traffic: '郑州乘登封班车',
    duration: '半天', tips: '禅宗祖庭；武术表演；塔林',
    intro: '中国佛教禅宗祖庭，天下第一名刹，少林武术发源地，世界文化遗产',
    lng: 113.0380, lat: 34.5050
  },
  {
    id: 'zhengzhou-longmen', cityId: 'zhengzhou', name: '龙门石窟',
    cover: 'longmen-grottoes', rating: 4.8, tags: ['人文', '必去', '世界遗产'],
    openTime: '07:30-18:00', ticket: '90元', traffic: '郑州乘龙门石窟专线',
    duration: '3-4小时', tips: '与敦煌莫高窟云冈石窟并称；西山石窟精华',
    intro: '中国四大石窟之一，世界文化遗产，北魏至唐代佛教艺术代表作',
    lng: 112.4720, lat: 34.5550
  },
  {
    id: 'zhengzhou-henan', cityId: 'zhengzhou', name: '只有河南戏剧幻城',
    cover: 'only-henan-theater', rating: 4.6, tags: ['人文', '亲子'],
    openTime: '09:00-22:00', ticket: '298元', traffic: '郑州乘公交至中牟',
    duration: '一天', tips: '沉浸式戏剧；黄土麦浪；幻城夜景',
    intro: '沉浸式戏剧聚落，21个剧场共同演绎中原文化，震撼的戏剧体验',
    lng: 113.9730, lat: 34.7170
  },

  // --- 洛阳 luoyang ---
  {
    id: 'luoyang-longmen', cityId: 'luoyang', name: '龙门石窟',
    cover: 'luoyang-longmen-grottoes', rating: 4.8, tags: ['人文', '必去', '世界遗产'],
    openTime: '07:30-18:00', ticket: '90元', traffic: '洛阳公交53路',
    duration: '3-4小时', tips: '西山石窟精华；对岸香山寺；伊河风景',
    intro: '中国四大石窟之一，世界文化遗产，皇家造像艺术巅峰',
    lng: 112.4610, lat: 34.5470
  },
  {
    id: 'luoyang-baima', cityId: 'luoyang', name: '白马寺',
    cover: 'baima-temple', rating: 4.6, tags: ['人文', '宗教'],
    openTime: '07:30-18:00', ticket: '35元', traffic: '洛阳公交58路',
    duration: '2小时', tips: '中国第一古刹；印度风格佛殿；齐云塔',
    intro: '中国第一古刹，佛教传入中原后建立的第一座官办寺院',
    lng: 112.5960, lat: 34.7250
  },
  {
    id: 'luoyang-peony', cityId: 'luoyang', name: '中国国花园',
    cover: 'peony-garden', rating: 4.5, tags: ['自然', '打卡'],
    openTime: '07:00-18:00', ticket: '30-50元（花期）', traffic: '洛阳公交68路',
    duration: '3小时', tips: '4月牡丹花会；千种牡丹；花期较短',
    intro: '中国最大的牡丹专类观赏园，"洛阳牡丹甲天下"，春季花会',
    lng: 112.4580, lat: 34.6190
  },

  // --- 开封 kaifeng ---
  {
    id: 'kaifeng-qingming', cityId: 'kaifeng', name: '清明上河园',
    cover: 'qingming-riverside-park', rating: 4.7, tags: ['人文', '必去'],
    openTime: '09:00-22:00', ticket: '120元', traffic: '开封公交1路',
    duration: '半天-一天', tips: '《东京梦华》演出；按《清明上河图》复原',
    intro: '按《清明上河图》为蓝本建造的大型宋代历史文化主题公园',
    lng: 114.3476, lat: 34.7971
  },
  {
    id: 'kaifeng-tieta', cityId: 'kaifeng', name: '铁塔',
    cover: 'kaifeng-tieta-pagoda', rating: 4.5, tags: ['人文', '历史'],
    openTime: '07:30-18:00', ticket: '50元', traffic: '开封公交1路',
    duration: '2小时', tips: '北宋铁塔；琉璃砖塔；登塔远眺',
    intro: '北宋皇祐元年建造，"天下第一塔"，琉璃砖塔颜色如铁',
    lng: 114.3520, lat: 34.8000
  },
  {
    id: 'kaifeng-baogong', cityId: 'kaifeng', name: '包公祠',
    cover: 'baogong-temple-kaifeng', rating: 4.4, tags: ['人文', '历史'],
    openTime: '07:30-18:00', ticket: '20元', traffic: '开封公交8路',
    duration: '1小时', tips: '包拯故居；开封府；历史文化区',
    intro: '北宋清官包拯的祠堂，"铁面无私"的象征，开封府衙署文化',
    lng: 114.3430, lat: 34.7930
  },

  // --- 南昌 nanchang ---
  {
    id: 'nanchang-tengwang', cityId: 'nanchang', name: '滕王阁',
    cover: 'tengwang-pavilion', rating: 4.7, tags: ['人文', '必去'],
    openTime: '07:30-18:00', ticket: '50元', traffic: '南昌公交2路',
    duration: '2小时', tips: '王勃《滕王阁序》；赣江夜景；落霞与孤鹜齐飞',
    intro: '江南三大名楼之首，王勃《滕王阁序》名扬天下，"物华天宝，人杰地灵"',
    lng: 115.8640, lat: 28.6860
  },
  {
    id: 'nanchang-qianshan', cityId: 'nanchang', name: '秋水广场',
    cover: 'qiushui-square', rating: 4.5, tags: ['夜游', '免费'],
    openTime: '全天', ticket: '免费', traffic: '南昌地铁1号线',
    duration: '1-2小时', tips: '喷泉表演；赣江夜景；摩天轮',
    intro: '南昌大型滨江广场，音乐喷泉表演壮观，赣江两岸夜景璀璨',
    lng: 115.8420, lat: 28.6700
  },
  {
    id: 'nanchang-shengjin', cityId: 'nanchang', name: '绳金塔',
    cover: 'shengjin-pagoda', rating: 4.4, tags: ['人文', '历史'],
    openTime: '07:30-18:00', ticket: '10元', traffic: '南昌公交5路',
    duration: '1小时', tips: '南昌城内最高古塔；绳金塔庙会',
    intro: '南昌城内最高古塔，始建于唐代，"镇城之宝"，庙会热闹',
    lng: 115.8930, lat: 28.6720
  },

  // --- 武当山 wudangshan ---
  {
    id: 'wudangshan-jinding', cityId: 'wudangshan', name: '武当金顶',
    cover: 'wudangshan-golden-roof', rating: 4.8, tags: ['人文', '自然', '必去', '世界遗产'],
    openTime: '06:00-18:00', ticket: '170元（门票+金顶）', traffic: '武当山景区专线',
    duration: '一天', tips: '天柱峰金顶；日出云海；需坐索道',
    intro: '武当山主峰天柱峰金顶，海拔1612米，道教圣地，世界文化遗产',
    lng: 111.0086, lat: 32.4054
  },
  {
    id: 'wudangshan-zixiao', cityId: 'wudangshan', name: '紫霄宫',
    cover: 'wudangshan-zixiao-palace', rating: 4.6, tags: ['人文', '宗教'],
    openTime: '07:30-18:00', ticket: '门票已含', traffic: '武当山景区环保车',
    duration: '2-3小时', tips: '武当道教宫观；红墙金瓦；玄武神',
    intro: '武当山道教宫观建筑群代表，红墙金瓦依山而建，紫霄福地',
    lng: 111.0120, lat: 32.3980
  },
  {
    id: 'wudangshan-nanyan', cityId: 'wudangshan', name: '南岩宫',
    cover: 'wudangshan-nanyan-palace', rating: 4.5, tags: ['人文', '自然'],
    openTime: '07:30-18:00', ticket: '门票已含', traffic: '武当山景区环保车',
    duration: '2小时', tips: '悬空建筑；龙头香；悬崖栈道',
    intro: '武当山最险峻的宫观，悬崖峭壁之上，"真武修炼之所"',
    lng: 111.0220, lat: 32.3870
  },

  // --- 张家界 zhangjiajie ---
  {
    id: 'zhangjiajie-wulingyuan', cityId: 'zhangjiajie', name: '武陵源',
    cover: 'zhangjiajie-wulingyuan', rating: 4.9, tags: ['自然', '必去', '世界遗产'],
    openTime: '07:00-18:00', ticket: '228元（通票4天）', traffic: '张家界火车站乘专线',
    duration: '2-3天', tips: '阿凡达取景地；住山上客栈；金鞭溪',
    intro: '三千奇峰八百秀水，世界自然遗产，"阿凡达"悬浮山原型',
    lng: 110.4792, lat: 29.3249
  },
  {
    id: 'zhangjiajie-tianmenshan', cityId: 'zhangjiajie', name: '天门山',
    cover: 'zhangjiajie-tianmenshan', rating: 4.7, tags: ['自然', '刺激', '必去'],
    openTime: '07:30-18:00', ticket: '278元（含索道）', traffic: '张家界索道直达',
    duration: '半天-一天', tips: '世界最长索道；玻璃栈道；通天大道99弯',
    intro: '天门洞奇观，通天大道99道弯，世界最长高山索道，玻璃栈道',
    lng: 110.4770, lat: 29.1070
  },
  {
    id: 'zhangjiajie-glassbridge', cityId: 'zhangjiajie', name: '大峡谷玻璃桥',
    cover: 'zhangjiajie-glass-bridge', rating: 4.6, tags: ['刺激', '自然'],
    openTime: '07:30-18:00', ticket: '256元', traffic: '张家界乘专线至慈利',
    duration: '半天', tips: '世界最高玻璃桥；云端漫步；需穿鞋套',
    intro: '世界最高玻璃桥，430米高空挑战，"云端漫步"体验',
    lng: 110.5820, lat: 29.3170
  },

  // --- 凤凰 fenghuang ---
  {
    id: 'fenghuang-ancient', cityId: 'fenghuang', name: '凤凰古城',
    cover: 'fenghuang-ancient-city', rating: 4.7, tags: ['人文', '夜游', '必去'],
    openTime: '全天', ticket: '免费（部分景点收费）', traffic: '吉首乘汽车至凤凰',
    duration: '2天', tips: '沱江夜景；吊脚楼；苗族银饰',
    intro: '沈从文笔下的边城，沱江吊脚楼虹桥夜景，湘西梦幻之城',
    lng: 109.6096, lat: 27.9480
  },
  {
    id: 'fenghuang-tuo', cityId: 'fenghuang', name: '沱江',
    cover: 'fenghuang-tuo-river', rating: 4.5, tags: ['自然', '夜游'],
    openTime: '全天', ticket: '免费', traffic: '古城内步行',
    duration: '2-3小时', tips: '夜景灯光；游船；吊脚楼倒影',
    intro: '穿城而过的沱江，吊脚楼倒映水中，凤凰古城的灵魂',
    lng: 109.6110, lat: 27.9490
  },
  {
    id: 'fenghuang-nanhua', cityId: 'fenghuang', name: '南华山',
    cover: 'fenghuang-nanhua-mountain', rating: 4.4, tags: ['自然', '徒步'],
    openTime: '06:00-18:00', ticket: '48元', traffic: '凤凰古城步行上山',
    duration: '半天', tips: '俯瞰古城全景；森林氧吧；适合晨练',
    intro: '凤凰古城标志性山峰，登顶可俯瞰沱江古城全景',
    lng: 109.6080, lat: 27.9430
  },

  // --- 婺源 wuyuan ---
  {
    id: 'wuyuan-jiangling', cityId: 'wuyuan', name: '江岭',
    cover: 'wuyuan-rapeseed', rating: 4.7, tags: ['自然', '打卡', '必去'],
    openTime: '06:00-18:00', ticket: '60元', traffic: '婺源乘班车至江岭',
    duration: '半天', tips: '3-4月油菜花季；篁岭连线；晨雾最美',
    intro: '中国最美乡村，万亩油菜花梯田，春季花海，摄影天堂',
    lng: 117.8340, lat: 29.3820
  },
  {
    id: 'wuyuan-huangling', cityId: 'wuyuan', name: '篁岭',
    cover: 'wuyuan-huangling', rating: 4.6, tags: ['人文', '自然', '世界遗产'],
    openTime: '07:00-17:30', ticket: '140元（含索道）', traffic: '婺源乘班车至篁岭',
    duration: '一天', tips: '晒秋奇观；徽派古村；垒心桥',
    intro: '"挂在山崖上的人家"，晒秋奇观，徽派古村落，世界文化遗产',
    lng: 117.8280, lat: 29.3480
  },
  {
    id: 'wuyuan-sixi', cityId: 'wuyuan', name: '思溪延村',
    cover: 'wuyuan-sixiyan-village', rating: 4.5, tags: ['人文', '世界遗产'],
    openTime: '07:30-17:30', ticket: '免费', traffic: '婺源乘乡村公交',
    duration: '半天', tips: '徽派建筑群；乡村写生；春油菜花',
    intro: '婺源最经典的徽派古村落群，"小桥流水人家"的乡村版',
    lng: 117.8460, lat: 29.3220
  },

  // ==================== 华南 (7城市) ====================

  // --- 广州 guangzhou ---
  {
    id: 'guangzhou-tianhe', cityId: 'guangzhou', name: '广州塔',
    cover: 'guangzhou-canton-tower', rating: 4.6, tags: ['夜游', '必去'],
    openTime: '09:30-22:30', ticket: '150元', traffic: '地铁3号线广州塔站',
    duration: '2小时', tips: '傍晚登塔看日落变夜景；摩天轮项目另收费',
    intro: '世界第三高塔，"小蛮腰"造型独特，俯瞰羊城夜景',
    lng: 113.3240, lat: 23.1060
  },
  {
    id: 'guangzhou-shamian', cityId: 'guangzhou', name: '沙面岛',
    cover: 'guangzhou-shamian-island', rating: 4.5, tags: ['人文', '拍照'],
    openTime: '全天', ticket: '免费', traffic: '地铁6号线文化公园站',
    duration: '2-3小时', tips: '欧陆风情建筑群；白天光线好；拍婚纱照胜地',
    intro: '昔日租界区，150多座欧式建筑，被称为"羊城第九景"',
    lng: 113.2380, lat: 23.1070
  },
  {
    id: 'guangzhou-chenjia', cityId: 'guangzhou', name: '陈家祠',
    cover: 'chenjia-shrine', rating: 4.6, tags: ['人文', '必去'],
    openTime: '08:30-17:30', ticket: '10元', traffic: '地铁1号线陈家祠站',
    duration: '2小时', tips: '岭南建筑瑰宝；砖雕木雕灰塑；广州必看',
    intro: '岭南建筑艺术明珠，砖雕木雕灰塑精美绝伦，广东72县陈姓合族祠',
    lng: 113.2440, lat: 23.1260
  },

  // --- 深圳 shenzhen ---
  {
    id: 'shenzhen-worldwindow', cityId: 'shenzhen', name: '世界之窗',
    cover: 'shenzhen-world-window', rating: 4.3, tags: ['亲子', '主题乐园'],
    openTime: '09:00-22:00', ticket: '220元', traffic: '地铁1号线世界之窗站',
    duration: '一天', tips: '微缩世界景点；夜游门票更便宜；适合带孩子',
    intro: '将世界奇观微缩展示的主题公园，深圳标志性景点',
    lng: 113.9730, lat: 22.5360
  },
  {
    id: 'shenzhen-bay', cityId: 'shenzhen', name: '深圳湾公园',
    cover: 'shenzhen-shenzhen-bay', rating: 4.5, tags: ['自然', '骑行', '免费'],
    openTime: '全天', ticket: '免费', traffic: '地铁2号线深圳湾公园站',
    duration: '3-4小时', tips: '海滨长廊骑行；看香港日落；候鸟栖息地',
    intro: '滨海生态公园，遥望香港，候鸟栖息地，都市中的绿洲',
    lng: 113.9440, lat: 22.5170
  },
  {
    id: 'shenzhen-xiaomeisha', cityId: 'shenzhen', name: '小梅沙',
    cover: 'xiaomeisha-beach', rating: 4.4, tags: ['自然', '海滩', '亲子'],
    openTime: '全天', ticket: '30元', traffic: '深圳公交103路',
    duration: '半天', tips: '深圳最大海滨浴场；海洋世界；需带防晒',
    intro: '深圳最大的海滨浴场，沙白水清，小梅沙海洋世界',
    lng: 114.3200, lat: 22.5820
  },

  // --- 珠海 zhuhai ---
  {
    id: 'zhuhai-chimelong', cityId: 'zhuhai', name: '长隆海洋王国',
    cover: 'chimelong-ocean-kingdom', rating: 4.7, tags: ['亲子', '主题乐园', '必去'],
    openTime: '10:00-21:00', ticket: '395元', traffic: '珠海公交K10路',
    duration: '一天', tips: '世界最大海洋乐园；鲸鲨馆；烟花表演',
    intro: '世界最大海洋主题乐园，多项吉尼斯世界纪录，亲子游首选',
    lng: 113.5760, lat: 22.1170
  },
  {
    id: 'zhuhai-lovers', cityId: 'zhuhai', name: '情侣路',
    cover: 'zhuhai-lovers-road', rating: 4.5, tags: ['自然', '免费', '夜游'],
    openTime: '全天', ticket: '免费', traffic: '珠海公交9路',
    duration: '2-3小时', tips: '海滨散步；渔女雕像；日落绝美',
    intro: '珠海标志性海滨大道，渔女雕像，情侣路沿线风景秀美',
    lng: 113.5767, lat: 22.2707
  },
  {
    id: 'zhuhai-wailingding', cityId: 'zhuhai', name: '外伶仃岛',
    cover: 'wailingding-island', rating: 4.5, tags: ['自然', '海岛'],
    openTime: '全天', ticket: '免费（船票120元）', traffic: '珠海香洲港乘船',
    duration: '1-2天', tips: '"海上香格里拉"；石景公园；海鲜',
    intro: '珠海海岛度假胜地，"海上香格里拉"，水清沙细，民风淳朴',
    lng: 114.0230, lat: 22.3990
  },

  // --- 桂林 guilin ---
  {
    id: 'guilin-lijiang', cityId: 'guilin', name: '漓江',
    cover: 'guilin-li-river', rating: 4.8, tags: ['自然', '必去'],
    openTime: '全天（游船）', ticket: '215元游船', traffic: '磨盘山码头乘船',
    duration: '4-5小时', tips: '漓江精华段：杨堤-兴坪；20元人民币背面图案',
    intro: '"桂林山水甲天下"代表，喀斯特地貌山水画廊，漓江精华游',
    lng: 110.4970, lat: 25.2270
  },
  {
    id: 'guilin-xiangbi', cityId: 'guilin', name: '象鼻山',
    cover: 'xiangbi-mountain', rating: 4.6, tags: ['自然', '必去'],
    openTime: '07:00-18:00', ticket: '55元', traffic: '桂林公交2路',
    duration: '2小时', tips: '桂林城徽；象山夜景；与两江四湖联游',
    intro: '桂林城徽，一头临江饮水的巨象，"象鼻山"景观独特',
    lng: 110.2960, lat: 25.2736
  },
  {
    id: 'guilin-liangjiang', cityId: 'guilin', name: '两江四湖',
    cover: 'liangjiang-four-lakes', rating: 4.5, tags: ['夜游', '免费'],
    openTime: '全天', ticket: '免费（游船另收）', traffic: '桂林市内步行',
    duration: '2小时', tips: '环城水系；日月双塔；夜游更美',
    intro: '桂林市中心环城水系，日月双塔倒影，夜游打卡地',
    lng: 110.2900, lat: 25.2740
  },

  // --- 阳朔 yangshuo ---
  {
    id: 'yangshuo-west', cityId: 'yangshuo', name: '西街',
    cover: 'yangshuo-west-street', rating: 4.6, tags: ['人文', '夜游', '必去'],
    openTime: '全天', ticket: '免费', traffic: '阳朔步行可达',
    duration: '2-3小时', tips: '千年古街；中西文化；啤酒鱼',
    intro: '阳朔最著名的步行街，千年古街，中西文化交融，漓江畔',
    lng: 110.4960, lat: 24.7760
  },
  {
    id: 'yangshuo-shili', cityId: 'yangshuo', name: '十里画廊',
    cover: 'yangshuo-shili-gallery', rating: 4.6, tags: ['自然', '骑行'],
    openTime: '全天', ticket: '免费', traffic: '阳朔租自行车前往',
    duration: '3-4小时', tips: '骑行最佳；月亮山；大榕树',
    intro: '阳朔经典骑行路线，喀斯特峰林田园风光，"十里画廊"',
    lng: 110.4720, lat: 24.7740
  },
  {
    id: 'yangshuo-yulong', cityId: 'yangshuo', name: '遇龙河',
    cover: 'yulong-river', rating: 4.7, tags: ['自然', '漂流', '必去'],
    openTime: '全天', ticket: '竹筏漂流168元', traffic: '阳朔乘竹筏',
    duration: '半天', tips: '漓江支流；竹筏漂流；人间仙境',
    intro: '漓江最美支流，"小漓江"，竹筏漂流如诗如画',
    lng: 110.4470, lat: 24.8170
  },

  // --- 南宁 nanning ---
  {
    id: 'nanning-qingxiu', cityId: 'nanning', name: '青秀山',
    cover: 'nanning-qingxiu-mountain', rating: 4.5, tags: ['自然', '亲子'],
    openTime: '07:00-18:00', ticket: '20元', traffic: '南宁公交10路',
    duration: '半天', tips: '东南亚风情园；龙象塔；桃花节',
    intro: '南宁绿肺，东南亚风情园，龙象塔远眺南宁',
    lng: 108.3480, lat: 22.7670
  },
  {
    id: 'nanning-yongjiang', cityId: 'nanning', name: '邕江',
    cover: 'nanning-yongjiang-river', rating: 4.4, tags: ['自然', '夜游'],
    openTime: '全天', ticket: '免费', traffic: '南宁公交1路',
    duration: '2小时', tips: '滨水步道；邕江大桥夜景；龙舟',
    intro: '南宁母亲河，滨水公园，邕江大桥夜景，邕江上的明珠',
    lng: 108.3690, lat: 22.8170
  },
  {
    id: 'nanning-zhongshan', cityId: 'nanning', name: '中山路',
    cover: 'nanning-zhongshan-road', rating: 4.4, tags: ['美食', '夜游'],
    openTime: '全天', ticket: '免费', traffic: '南宁地铁1号线',
    duration: '2小时', tips: '老友粉；柠檬鸭；烧烤一条街',
    intro: '南宁美食街，老友粉柠檬鸭烧烤，最地道的南宁味道',
    lng: 108.3670, lat: 22.8150
  },

  // --- 三亚 sanya ---
  {
    id: 'sanya-yalongbay', cityId: 'sanya', name: '亚龙湾',
    cover: 'sanya-yalong-bay', rating: 4.7, tags: ['自然', '海滩', '必去'],
    openTime: '全天', ticket: '免费', traffic: '三亚公交15路',
    duration: '半天-一天', tips: '"天下第一湾"；沙质最细；带好防晒',
    intro: '"天下第一湾"，7公里银白沙滩，清澈海水，度假天堂',
    lng: 109.6120, lat: 18.2170
  },
  {
    id: 'sanya-tianya', cityId: 'sanya', name: '天涯海角',
    cover: 'sanya-tianya-haijiao', rating: 4.5, tags: ['自然', '打卡'],
    openTime: '07:00-18:00', ticket: '68元', traffic: '三亚公交16路',
    duration: '3小时', tips: '石刻"天涯""海角"打卡；风大浪急注意安全',
    intro: '海南南端，"天涯""海角"石刻，浪漫地标，"海角七号"',
    lng: 109.3570, lat: 18.3030
  },
  {
    id: 'sanya-wuzhizhou', cityId: 'sanya', name: '蜈支洲岛',
    cover: 'wuzhizhou-island', rating: 4.7, tags: ['自然', '海岛', '必去'],
    openTime: '08:00-17:30', ticket: '168元（含船票）', traffic: '三亚乘专线至蜈支洲',
    duration: '半天-一天', tips: '"中国第一潜水基地"；海底漫步；环岛观光车',
    intro: '中国首屈一指的潜水基地，"东方马尔代夫"，海水清澈见底',
    lng: 109.7620, lat: 18.3100
  },

  // ==================== 西南 (11城市) ====================

  // --- 成都 chengdu ---
  {
    id: 'chengdu-panda', cityId: 'chengdu', name: '成都大熊猫繁育研究基地',
    cover: 'chengdu-panda', rating: 4.8, tags: ['亲子', '自然', '必去'],
    openTime: '07:30-18:00', ticket: '55元', traffic: '地铁3号线熊猫大道站',
    duration: '3-4小时', tips: '建议早上8点前到；带好防晒和饮水',
    intro: '全球最大的大熊猫人工繁育基地，可近距离观看幼年熊猫进食嬉戏',
    lng: 104.1470, lat: 30.7330
  },
  {
    id: 'chengdu-kuanzhai', cityId: 'chengdu', name: '宽窄巷子',
    cover: 'chengdu-kuanzhai', rating: 4.5, tags: ['人文', '美食', '夜游'],
    openTime: '全天', ticket: '免费', traffic: '地铁4号线宽窄巷子站',
    duration: '2-3小时', tips: '盖碗茶掏耳朵体验；避开节假日高峰',
    intro: '由宽巷子窄巷子井巷子组成的清朝古街区，融合老成都院落文化',
    lng: 104.0630, lat: 30.6730
  },
  {
    id: 'chengdu-dujiangyan', cityId: 'chengdu', name: '都江堰',
    cover: 'chengdu-dujiangyan', rating: 4.7, tags: ['人文', '自然', '世界遗产'],
    openTime: '08:00-17:30', ticket: '80元', traffic: '城际列车犀浦→都江堰站',
    duration: '半天', tips: '可结合青城山一日游；雨季水量大更壮观',
    intro: '战国李冰父子修建的古代水利工程，"世界水利文化的鼻祖"',
    lng: 103.6220, lat: 30.9990
  },

  // --- 重庆 chongqing ---
  {
    id: 'chongqing-hongyadong', cityId: 'chongqing', name: '洪崖洞',
    cover: 'chongqing-hongyadong', rating: 4.6, tags: ['夜游', '美食', '必去'],
    openTime: '全天', ticket: '免费', traffic: '地铁6号线小什字站',
    duration: '2-3小时', tips: '千厮门大桥拍照视角好；11楼观景台免费',
    intro: '巴渝吊脚楼风格建筑群，《千与千寻》现实版，夜景璀璨',
    lng: 106.5830, lat: 29.5630
  },
  {
    id: 'chongqing-ciqikou', cityId: 'chongqing', name: '磁器口古镇',
    cover: 'chongqing-ciqikou', rating: 4.4, tags: ['人文', '美食'],
    openTime: '全天', ticket: '免费', traffic: '地铁1号线磁器口站',
    duration: '2-3小时', tips: '陈麻花必买；古镇深处更清净',
    intro: '千年古镇，明清风貌，"一条石板路，千年磁器口"',
    lng: 106.4230, lat: 29.8070
  },
  {
    id: 'chongqing-suoyi', cityId: 'chongqing', name: '长江索道',
    cover: 'chongqing-ropeway', rating: 4.5, tags: ['体验', '夜游', '必去'],
    openTime: '07:30-22:00', ticket: '20元', traffic: '地铁1号线小什字站',
    duration: '1-2小时', tips: '"万里长江第一条空中走廊"；夜晚两岸灯光',
    intro: '跨越长江的空中索道，"万里长江第一条空中走廊"，立体重庆',
    lng: 106.5830, lat: 29.5600
  },

  // --- 昆明 kunming ---
  {
    id: 'kunming-dianchi', cityId: 'kunming', name: '滇池',
    cover: 'kunming-dianchi-lake', rating: 4.5, tags: ['自然', '骑行'],
    openTime: '全天', ticket: '免费', traffic: '公交24路海埂公园站',
    duration: '半天', tips: '冬季红嘴鸥；骑行环湖；海埂大坝',
    intro: '云南最大湖泊，高原明珠，海埂大坝看海鸥，春城标志性景点',
    lng: 102.6850, lat: 24.8130
  },
  {
    id: 'kunming-shilin', cityId: 'kunming', name: '石林',
    cover: 'kunming-shilin', rating: 4.7, tags: ['自然', '世界遗产', '必去'],
    openTime: '07:30-18:00', ticket: '130元', traffic: '昆明乘汽车至石林',
    duration: '一天', tips: '世界自然遗产；阿诗玛故乡；喀斯特地貌',
    intro: '世界自然遗产，"天下第一奇观"，喀斯特地貌代表作，阿诗玛故乡',
    lng: 103.2750, lat: 24.7720
  },
  {
    id: 'kunming-cuihu', cityId: 'kunming', name: '翠湖公园',
    cover: 'kunming-cuihu-park', rating: 4.4, tags: ['自然', '免费'],
    openTime: '全天', ticket: '免费', traffic: '昆明公交1路',
    duration: '2小时', tips: '"城中之玉"；红嘴鸥；周边西南联大旧址',
    intro: '昆明城中的绿宝石，"城中之玉"，红嘴鸥冬季聚集地',
    lng: 102.7030, lat: 25.0470
  },

  // --- 大理 dali ---
  {
    id: 'dali-erhai', cityId: 'dali', name: '洱海',
    cover: 'dali-erhai-lake', rating: 4.8, tags: ['自然', '骑行', '必去'],
    openTime: '全天', ticket: '免费', traffic: '大理古城租电瓶车',
    duration: '一天', tips: '环洱海骑行；喜洲古镇双廊必停；海舌公园',
    intro: '云南第二大淡水湖，"风花雪月"四景之一，文艺圣地',
    lng: 100.1870, lat: 25.7630
  },
  {
    id: 'dali-santa', cityId: 'dali', name: '崇圣寺三塔',
    cover: 'dali-three-pagodas', rating: 4.6, tags: ['人文', '世界遗产'],
    openTime: '07:00-19:00', ticket: '75元', traffic: '公交三塔专线',
    duration: '2小时', tips: '三塔倒影公园拍照最佳；早去人少',
    intro: '大理标志性建筑，南诏国遗迹，世界文化遗产，三塔倒影',
    lng: 100.1670, lat: 25.7070
  },
  {
    id: 'dali-ancient', cityId: 'dali', name: '大理古城',
    cover: 'dali-ancient-city', rating: 4.6, tags: ['人文', '夜游'],
    openTime: '全天', ticket: '免费', traffic: '大理公交4路',
    duration: '半天', tips: '人民路洋人街；五华楼；白族三道茶',
    intro: '大理古城，白族文化中心，人民路洋人街，苍山洱海门户',
    lng: 100.1630, lat: 25.7080
  },

  // --- 丽江 lijiang ---
  {
    id: 'lijiang-oldtown', cityId: 'lijiang', name: '丽江古城',
    cover: 'lijiang-old-town', rating: 4.7, tags: ['人文', '夜游', '必去', '世界遗产'],
    openTime: '全天', ticket: '维护费80元', traffic: '机场大巴至古城',
    duration: '一天', tips: '四方街篝火打跳；清晨巷子最安静',
    intro: '纳西族千年古城，小桥流水青石板路，世界文化遗产',
    lng: 100.2330, lat: 26.8721
  },
  {
    id: 'lijiang-yulong', cityId: 'lijiang', name: '玉龙雪山',
    cover: 'lijiang-yulong-snow-mountain', rating: 4.7, tags: ['自然', '必去'],
    openTime: '07:00-18:00', ticket: '100元+索道', traffic: '旅游专线车',
    duration: '一天', tips: '提前备氧气瓶和羽绒服；蓝月谷就在山下',
    intro: '纳西神山，终年积雪，冰川公园云杉坪蓝月谷绝美',
    lng: 100.2030, lat: 27.1090
  },
  {
    id: 'lijiang-shuhe', cityId: 'lijiang', name: '束河古镇',
    cover: 'lijiang-shuhe', rating: 4.5, tags: ['人文', '安静'],
    openTime: '全天', ticket: '免费', traffic: '公交11路',
    duration: '半天', tips: '比大研古城更清净；适合发呆喝茶',
    intro: '茶马古道上的重要集镇，纳西村落，溪水穿镇，安静悠闲',
    lng: 100.2180, lat: 26.8800
  },

  // --- 香格里拉 shangrila ---
  {
    id: 'shangrila-pudacuo', cityId: 'shangrila', name: '普达措国家公园',
    cover: 'pudacuo-national-park', rating: 4.7, tags: ['自然', '徒步'],
    openTime: '08:00-17:00', ticket: '138元（含观光车）', traffic: '香格里拉乘专线',
    duration: '一天', tips: '海拔3500米；注意高原反应；属都湖',
    intro: '中国大陆第一个国家公园，高原湖泊草甸森林，"人间仙境"',
    lng: 99.9050, lat: 27.8350
  },
  {
    id: 'shangrila-songzhan', cityId: 'shangrila', name: '松赞林寺',
    cover: 'songzanlin-monastery', rating: 4.6, tags: ['人文', '宗教'],
    openTime: '07:00-18:00', ticket: '90元', traffic: '香格里拉公交3路',
    duration: '2-3小时', tips: '"小布达拉宫"；金顶；藏传佛教文化',
    intro: '云南最大藏传佛教寺院，"小布达拉宫"，金顶辉煌',
    lng: 99.7180, lat: 27.8530
  },
  {
    id: 'shangrila-dukezong', cityId: 'shangrila', name: '独克宗古城',
    cover: 'dukezong-ancient-city', rating: 4.5, tags: ['人文', '夜游'],
    openTime: '全天', ticket: '免费', traffic: '香格里拉步行可达',
    duration: '2-3小时', tips: '月光古城；转经筒；藏式建筑',
    intro: '香格里拉老城，"月光古城"，世界最大转经筒所在地',
    lng: 99.7070, lat: 27.8190
  },

  // --- 九寨沟 jiuzhai ---
  {
    id: 'jiuzhai-canghai', cityId: 'jiuzhai', name: '五彩池',
    cover: 'jiuzhai-colorful-pond', rating: 4.9, tags: ['自然', '必去', '世界遗产'],
    openTime: '07:00-17:00', ticket: '169元（含观光车）', traffic: '九寨沟机场大巴',
    duration: '一天', tips: '海子彩林绝美；秋季最佳；注意高原反应',
    intro: '九寨沟灵魂景点，多彩池水钙化彩池，人间仙境',
    lng: 103.9222, lat: 33.2614
  },
  {
    id: 'jiuzhai-nuorilang', cityId: 'jiuzhai', name: '诺日朗瀑布',
    cover: 'jiuzhai-nuorilang-waterfall', rating: 4.7, tags: ['自然', '世界遗产'],
    openTime: '07:00-17:00', ticket: '门票已含', traffic: '景区观光车',
    duration: '1-2小时', tips: '中国最宽的钙化瀑布；《西游记》取景地',
    intro: '中国最宽的钙化瀑布，《西游记》片尾取景地，宽270米',
    lng: 103.9240, lat: 33.2570
  },
  {
    id: 'jiuzhai-changhai', cityId: 'jiuzhai', name: '长海',
    cover: 'jiuzhai-long-sea', rating: 4.6, tags: ['自然', '世界遗产'],
    openTime: '07:00-17:00', ticket: '门票已含', traffic: '景区观光车',
    duration: '2小时', tips: '九寨沟最大湖泊；冰碛堤；雪山倒影',
    intro: '九寨沟最大的海子，海拔3100米，冰碛堤形成的高山湖泊',
    lng: 103.9300, lat: 33.2850
  },

  // --- 稻城 daocheng ---
  {
    id: 'daocheng-yading', cityId: 'daocheng', name: '稻城亚丁',
    cover: 'daocheng-yading', rating: 4.8, tags: ['自然', '徒步', '必去'],
    openTime: '07:00-17:00', ticket: '270元（含观光车）', traffic: '稻城乘景区专线',
    duration: '2天', tips: '海拔4000米；牛奶海徒步；注意高原反应',
    intro: '"蓝色星球上最后一片净土"，央迈勇神山牛奶海，户外天堂',
    lng: 100.3350, lat: 29.0314
  },
  {
    id: 'daocheng-milksea', cityId: 'daocheng', name: '牛奶海',
    cover: 'daocheng-milk-sea', rating: 4.7, tags: ['自然', '徒步'],
    openTime: '07:00-17:00', ticket: '门票已含', traffic: '景区骑马/徒步',
    duration: '5-6小时', tips: '徒步或骑马上行；海拔4500米；注意保暖',
    intro: '亚丁核心景点，蓝绿色高山海子，四周雪山环绕，徒步圣地',
    lng: 100.3200, lat: 29.0200
  },
  {
    id: 'daocheng-redgrass', cityId: 'daocheng', name: '红草地',
    cover: 'daocheng-red-grass', rating: 4.5, tags: ['自然', '打卡'],
    openTime: '全天', ticket: '10元', traffic: '稻城乘包车',
    duration: '1-2小时', tips: '10月秋季最美；红草与杨树；摄影天堂',
    intro: '稻城标志性景点，秋季红草金黄杨，"童话世界"般的美景',
    lng: 100.3520, lat: 29.0440
  },

  // --- 峨眉山 emeishan ---
  {
    id: 'emeishan-jinding', cityId: 'emeishan', name: '峨眉山金顶',
    cover: 'emeishan-golden-top', rating: 4.8, tags: ['自然', '人文', '必去', '世界遗产'],
    openTime: '06:00-18:00', ticket: '160元（旺季）', traffic: '峨眉山景区专线',
    duration: '1-2天', tips: '云海日出佛光是三大奇观；住宿金顶',
    intro: '普贤菩萨道场，金顶云海日出，十方普贤金身，世界双遗产',
    lng: 103.4836, lat: 29.5415
  },
  {
    id: 'emeishan-leshan', cityId: 'emeishan', name: '乐山大佛',
    cover: 'leshan-giant-buddha', rating: 4.7, tags: ['人文', '必去', '世界遗产'],
    openTime: '07:30-18:00', ticket: '80元', traffic: '乐山大佛景区公交',
    duration: '3小时', tips: '乘船远观或近看栈道；与峨眉山联游',
    intro: '世界最大石刻弥勒佛坐像，高71米，"山是一尊佛，佛是一座山"',
    lng: 103.7710, lat: 29.5490
  },
  {
    id: 'emeishan-qingyin', cityId: 'emeishan', name: '清音阁',
    cover: 'emeishan-qingyin-pavilion', rating: 4.5, tags: ['自然', '人文'],
    openTime: '07:30-17:30', ticket: '门票已含', traffic: '峨眉山景区步行',
    duration: '2小时', tips: '一线天；峨眉山生态猴区；小心猴子',
    intro: '峨眉山经典景点，黑白二水交汇，"双桥清音"，山水诗意',
    lng: 103.4770, lat: 29.5400
  },

  // --- 拉萨 lasa ---
  {
    id: 'lasa-potala', cityId: 'lasa', name: '布达拉宫',
    cover: 'lhasa-potala-palace', rating: 4.9, tags: ['人文', '必去', '世界遗产'],
    openTime: '09:00-16:00（周一闭馆）', ticket: '200元', traffic: '拉萨市内步行',
    duration: '3-4小时', tips: '需提前预约；海拔3650米；慢爬台阶',
    intro: '世界文化遗产，世界上海拔最高的宫堡建筑群，藏传佛教中心',
    lng: 91.1170, lat: 29.6500
  },
  {
    id: 'lasa-dazhao', cityId: 'lasa', name: '大昭寺',
    cover: 'lhasa-jokhang-temple', rating: 4.7, tags: ['人文', '宗教', '世界遗产'],
    openTime: '09:00-18:00', ticket: '85元', traffic: '拉萨八廓街内',
    duration: '2小时', tips: '藏传佛教最神圣的寺庙；释迦牟尼12岁等身像',
    intro: '藏传佛教最神圣的寺庙，供奉释迦牟尼12岁等身像，朝圣中心',
    lng: 91.1140, lat: 29.6510
  },
  {
    id: 'lasa-namucuo', cityId: 'lasa', name: '纳木错',
    cover: 'lhasa-namucuo-lake', rating: 4.8, tags: ['自然', '必去'],
    openTime: '全天', ticket: '120元', traffic: '拉萨乘包车/专线',
    duration: '一天', tips: '"天湖"；海拔4718米；风大注意保暖',
    intro: '"天湖"纳木错，西藏三大圣湖之一，世界海拔最高咸水湖之一',
    lng: 90.5480, lat: 30.7000
  },

  // --- 黄果树 huangguoshu ---
  {
    id: 'huangguoshu-waterfall', cityId: 'huangguoshu', name: '黄果树大瀑布',
    cover: 'huangguoshu-waterfall', rating: 4.8, tags: ['自然', '必去', '世界遗产'],
    openTime: '07:30-19:00', ticket: '160元（含观光车）', traffic: '贵阳乘专线至安顺',
    duration: '半天-一天', tips: '水帘洞可穿瀑布；夏秋季水量最大',
    intro: '亚洲第一大瀑布，落差77.8米，宽101米，水帘洞穿越体验',
    lng: 105.6750, lat: 25.9880
  },
  {
    id: 'huangguoshu-tianxing', cityId: 'huangguoshu', name: '天星桥',
    cover: 'huangguoshu-tianxingqiao', rating: 4.5, tags: ['自然'],
    openTime: '07:30-19:00', ticket: '门票已含', traffic: '景区观光车',
    duration: '3小时', tips: '水上石林；喀斯特地貌；银链坠潭',
    intro: '黄果树三大景区之一，"水上石林"，喀斯特地貌精华',
    lng: 105.7100, lat: 25.9570
  },
  {
    id: 'huangguoshu-duopotang', cityId: 'huangguoshu', name: '陡坡塘瀑布',
    cover: 'huangguoshu-duopotang', rating: 4.4, tags: ['自然'],
    openTime: '07:30-19:00', ticket: '门票已含', traffic: '景区观光车',
    duration: '1-2小时', tips: '86版《西游记》片尾取景；瀑顶宽阔',
    intro: '86版《西游记》片尾取景地，瀑顶宽阔平缓，"吼瀑"之声',
    lng: 105.6830, lat: 26.0100
  },

  // ==================== 西北 (7城市) ====================

  // --- 西安 xian ---
  {
    id: 'xian-bingmayong', cityId: 'xian', name: '秦始皇兵马俑',
    cover: 'xian-terracotta-army', rating: 4.9, tags: ['人文', '必去', '世界遗产'],
    openTime: '08:30-17:00', ticket: '120元', traffic: '游5(306)路公交',
    duration: '半天', tips: '请讲解员或租语音导览；1号坑最震撼',
    intro: '世界第八大奇迹，秦始皇陵陪葬坑，数千陶俑神态各异',
    lng: 109.2780, lat: 34.3840
  },
  {
    id: 'xian-chengqiang', cityId: 'xian', name: '西安城墙',
    cover: 'xian-ancient-city-wall', rating: 4.7, tags: ['人文', '夜游'],
    openTime: '08:00-22:00', ticket: '54元', traffic: '地铁2号线永宁门站',
    duration: '2-3小时', tips: '租自行车绕城(13.7km)；傍晚看日落',
    intro: '中国现存最完整的古代城垣，明代洪武年间重建，骑行其上',
    lng: 108.9480, lat: 34.2630
  },
  {
    id: 'xian-dayanta', cityId: 'xian', name: '大雁塔',
    cover: 'xian-giant-wild-goose-pagoda', rating: 4.6, tags: ['人文', '夜游'],
    openTime: '08:00-22:00', ticket: '50元', traffic: '地铁3号线大雁塔站',
    duration: '2小时', tips: '唐代佛塔；北广场音乐喷泉；大唐不夜城',
    intro: '唐代玄奘法师藏经译经之所，西安地标，音乐喷泉夜景璀璨',
    lng: 108.9640, lat: 34.2220
  },

  // --- 敦煌 dunhuang ---
  {
    id: 'dunhuang-mogao', cityId: 'dunhuang', name: '莫高窟',
    cover: 'dunhuang-mogao-caves', rating: 4.9, tags: ['人文', '必去', '世界遗产'],
    openTime: '08:00-17:00', ticket: '200元（含讲解）', traffic: '敦煌乘公交至莫高窟',
    duration: '半天', tips: '需提前预约；数字展示中心；禁拍照',
    intro: '世界现存最大佛教艺术宝库，735个洞窟，壁画4.5万平方米',
    lng: 94.8140, lat: 40.0470
  },
  {
    id: 'dunhuang-mingsha', cityId: 'dunhuang', name: '鸣沙山月牙泉',
    cover: 'dunhuang-mingsha-yueya', rating: 4.7, tags: ['自然', '必去'],
    openTime: '06:00-19:00', ticket: '120元', traffic: '敦煌乘公交至鸣沙山',
    duration: '半天', tips: '沙漠骑骆驼；月牙泉日落；带防沙口罩',
    intro: '沙漠中的奇迹，鸣沙山与月牙泉千年共存，沙漠绿洲奇观',
    lng: 94.6680, lat: 40.0930
  },
  {
    id: 'dunhuang-yadan', cityId: 'dunhuang', name: '雅丹魔鬼城',
    cover: 'dunhuang-yadan-landform', rating: 4.6, tags: ['自然'],
    openTime: '全天', ticket: '50元（含观光车）', traffic: '敦煌乘包车前往',
    duration: '半天', tips: '风蚀地貌；日落最美；带饮用水',
    intro: '风蚀形成的雅丹地貌，"魔鬼城"，大漠孤烟长河落日',
    lng: 94.3280, lat: 40.3950
  },

  // --- 乌鲁木齐 wulumuqi ---
  {
    id: 'wulumuqi-tianchi', cityId: 'wulumuqi', name: '天山天池',
    cover: 'tianchi-lake', rating: 4.7, tags: ['自然', '必去'],
    openTime: '08:00-18:00', ticket: '155元（含区间车）', traffic: '乌鲁木齐乘专线至阜康',
    duration: '一天', tips: '瑶池仙境；王母传说；夏季避暑',
    intro: '西王母传说中的"瑶池"，天山博格达峰下的高山湖泊',
    lng: 88.1980, lat: 43.8930
  },
  {
    id: 'wulumuqi-bazaa', cityId: 'wulumuqi', name: '新疆国际大巴扎',
    cover: 'urumqi-grand-bazaar', rating: 4.5, tags: ['人文', '美食'],
    openTime: '10:00-22:00', ticket: '免费', traffic: '乌鲁木齐地铁1号线',
    duration: '2小时', tips: '民族特色建筑；手工艺品；新疆美食',
    intro: '世界最大的大巴扎，维吾尔族文化商业中心，民族风情浓郁',
    lng: 87.6160, lat: 43.8250
  },
  {
    id: 'wulumuqi-huoshan', cityId: 'wulumuqi', name: '火焰山',
    cover: 'flame-mountain', rating: 4.6, tags: ['自然', '打卡'],
    openTime: '08:00-21:00', ticket: '60元', traffic: '吐鲁番公交1路',
    duration: '1-2小时', tips: '"火洲"；地表温度70°C；《西游记》取景',
    intro: '中国最热的地方，《西游记》三借芭蕉扇取景地，地表温度超70°C',
    lng: 89.3980, lat: 42.9510
  },

  // --- 青海湖 qinghaihu ---
  {
    id: 'qinghaihu-erdao', cityId: 'qinghaihu', name: '青海湖二郎剑',
    cover: 'qinghaihu-erdao', rating: 4.7, tags: ['自然', '必去'],
    openTime: '06:00-20:00', ticket: '100元', traffic: '西宁乘专线至二郎剑',
    duration: '半天-一天', tips: '中国最大内陆湖；7月油菜花；环湖骑行',
    intro: '中国最大内陆咸水湖，二郎剑景区为核心，油菜花海绝美',
    lng: 100.5470, lat: 36.7000
  },
  {
    id: 'qinghaihu-xihai', cityId: 'qinghaihu', name: '西海镇',
    cover: 'qinghaihu-xihai-town', rating: 4.4, tags: ['人文', '骑行'],
    openTime: '全天', ticket: '免费', traffic: '西海镇骑行起点',
    duration: '半天', tips: '环湖骑行起点；原子城；草原风光',
    intro: '青海湖环湖骑行起点，"原子城"所在地，草原湖泊交汇',
    lng: 100.9970, lat: 36.8960
  },
  {
    id: 'qinghaihu-niaodao', cityId: 'qinghaihu', name: '鸟岛',
    cover: 'qinghaihu-bird-island', rating: 4.5, tags: ['自然', '观鸟'],
    openTime: '07:00-18:00', ticket: '115元', traffic: '西宁乘专线至鸟岛',
    duration: '3小时', tips: '候鸟栖息地；5-7月最佳；鸬鹚斑头雁',
    intro: '青海湖西岸，候鸟栖息地，中国八大鸟类保护区之一',
    lng: 100.3750, lat: 36.9450
  },

  // --- 茶卡盐湖 chaka ---
  {
    id: 'chaka-yunjing', cityId: 'chaka', name: '茶卡盐湖天空之镜',
    cover: 'chaka-salt-lake', rating: 4.7, tags: ['自然', '打卡', '必去'],
    openTime: '全天', ticket: '60元', traffic: '西宁乘专线至茶卡',
    duration: '3-4小时', tips: '"天空之镜"；镜面倒影；穿红裙拍照',
    intro: '中国"天空之镜"，湖面如镜倒映天空云彩，摄影圣地',
    lng: 99.0860, lat: 36.9145
  },
  {
    id: 'chaka-yinxiang', cityId: 'chaka', name: '茶卡壹号盐湖',
    cover: 'chaka-no1-salt-lake', rating: 4.5, tags: ['自然', '拍照'],
    openTime: '全天', ticket: '50元', traffic: '茶卡镇步行',
    duration: '2小时', tips: '盐雕；小火车；与天空之镜相邻',
    intro: '茶卡盐湖新景区，盐雕艺术小火车观光，较人少',
    lng: 99.0820, lat: 36.9120
  },
  {
    id: 'chaka-xingkong', cityId: 'chaka', name: '星空壹号',
    cover: 'chaka-starry-sky', rating: 4.4, tags: ['自然', '打卡'],
    openTime: '全天', ticket: '50元', traffic: '茶卡镇步行',
    duration: '2小时', tips: '夜空银河；盐雕灯光；浪漫星空',
    intro: '茶卡盐湖星空体验区，夜晚银河星空与盐雕灯光交相辉映',
    lng: 99.0800, lat: 36.9100
  },

  // --- 张掖 zhangye ---
  {
    id: 'zhangye-danxia', cityId: 'zhangye', name: '七彩丹霞',
    cover: 'zhangye-colorful-danxia', rating: 4.8, tags: ['自然', '必去'],
    openTime: '06:00-20:00', ticket: '54元（含观光车）', traffic: '张掖乘专线至丹霞',
    duration: '半天', tips: '彩色丘陵；4号观景台最美；日落最佳',
    intro: '"大地调色板"，彩色丘陵地貌，中国最美丹霞之一',
    lng: 100.1180, lat: 38.8870
  },
  {
    id: 'zhangye-binggou', cityId: 'zhangye', name: '冰沟丹霞',
    cover: 'zhangye-binggou-danxia', rating: 4.6, tags: ['自然'],
    openTime: '07:00-18:00', ticket: '60元', traffic: '张掖乘包车前往',
    duration: '3小时', tips: '宫殿式丹霞；卢浮驿站；较七彩丹霞人少',
    intro: '"天下第一窗"，宫殿式丹霞地貌，"雄险奇幽"四绝',
    lng: 100.2530, lat: 38.9390
  },
  {
    id: 'zhangye-mati', cityId: 'zhangye', name: '马蹄寺',
    cover: 'zhangye-mati-temple', rating: 4.5, tags: ['人文', '自然'],
    openTime: '07:00-18:00', ticket: '73元', traffic: '张掖乘班车至马蹄寺',
    duration: '3小时', tips: '石窟群；三十三天；裕固族风情',
    intro: '藏传佛教石窟寺，"三十三天"悬空石窟，裕固族聚居地',
    lng: 100.2220, lat: 38.5580
  },

  // --- 华山 huashan ---
  {
    id: 'huashan-south', cityId: 'huashan', name: '华山南峰',
    cover: 'huashan-south-peak', rating: 4.8, tags: ['自然', '人文', '必去'],
    openTime: '06:00-20:00', ticket: '160元（含进山车）', traffic: '华山站乘专线',
    duration: '1-2天', tips: '"华山论剑"；长空栈道；鹞子翻身',
    intro: '五岳之西岳，"奇险天下第一山"，长空栈道鹞子翻身惊险刺激',
    lng: 110.0855, lat: 34.4890
  },
  {
    id: 'huashan-west', cityId: 'huashan', name: '华山西峰',
    cover: 'huashan-west-peak', rating: 4.6, tags: ['自然', '人文'],
    openTime: '06:00-20:00', ticket: '门票已含', traffic: '华山索道西峰上',
    duration: '半天', tips: '斧劈石；沉香劈山救母；西峰索道',
    intro: '"莲花峰"，沉香劈山救母传说地，斧劈石逼真',
    lng: 110.0800, lat: 34.4860
  },
  {
    id: 'huashan-changkong', cityId: 'huashan', name: '长空栈道',
    cover: 'huashan-changkong-plank', rating: 4.7, tags: ['刺激', '体验'],
    openTime: '06:00-20:00', ticket: '门票已含', traffic: '华山南峰步行',
    duration: '1小时', tips: '华山最险；需绑安全绳；恐高慎入',
    intro: '华山"第一天险"，建在千仞绝壁上的铁索木板栈道，惊心动魄',
    lng: 110.0820, lat: 34.4910
  },

  // ==================== 江南古镇 (4城市) ====================

  // --- 周庄 zhouzhuang ---
  {
    id: 'zhouzhuang-ancient', cityId: 'zhouzhuang', name: '周庄古镇',
    cover: 'zhouzhuang-water-town', rating: 4.7, tags: ['人文', '水乡', '必去', '世界遗产'],
    openTime: '08:00-21:00', ticket: '100元', traffic: '苏州汽车北站乘班车',
    duration: '一天', tips: '摇橹船游古镇；夜游双桥；沈厅',
    intro: '"中国第一水乡"，小桥流水人家，江南水乡代表，世界文化遗产',
    lng: 120.8345, lat: 31.1118
  },
  {
    id: 'zhouzhuang-shuangqiao', cityId: 'zhouzhuang', name: '双桥',
    cover: 'zhouzhuang-shuangqiao', rating: 4.6, tags: ['人文', '拍照'],
    openTime: '08:00-21:00', ticket: '通票已含', traffic: '古镇内步行',
    duration: '1小时', tips: '周庄标志性景点；陈逸飞画作；夜景最美',
    intro: '周庄最著名的景点，两座古桥一横一竖，陈逸飞《双桥》画作',
    lng: 120.8350, lat: 31.1120
  },
  {
    id: 'zhouzhuang-shenting', cityId: 'zhouzhuang', name: '沈厅',
    cover: 'zhouzhuang-shenting', rating: 4.5, tags: ['人文', '历史'],
    openTime: '08:00-21:00', ticket: '通票已含', traffic: '古镇内步行',
    duration: '1-2小时', tips: '江南富豪沈万三故居；七进院落；雕刻精美',
    intro: '江南首富沈万三的宅邸，"江南第一家"，七进院落，雕刻精美',
    lng: 120.8330, lat: 31.1110
  },

  // --- 乌镇 wuzhen ---
  {
    id: 'wuzhen-dongzha', cityId: 'wuzhen', name: '乌镇东栅',
    cover: 'wuzhen-dongzha', rating: 4.6, tags: ['人文', '水乡', '必去'],
    openTime: '07:00-17:30', ticket: '110元', traffic: '桐乡乘公交至乌镇',
    duration: '半天', tips: '原汁原味；茅盾故居；蓝印花布',
    intro: '乌镇保存完好的老街区，原汁原味的水乡风貌，茅盾故里',
    lng: 120.4900, lat: 30.6355
  },
  {
    id: 'wuzhen-xizha', cityId: 'wuzhen', name: '乌镇西栅',
    cover: 'wuzhen-xizha', rating: 4.7, tags: ['人文', '夜游', '水乡'],
    openTime: '09:00-22:00', ticket: '150元', traffic: '桐乡乘公交至乌镇',
    duration: '半天-一天', tips: '夜景如画；乌篷船；民宿住宿',
    intro: '乌镇精心打造的西栅景区，夜景如诗如画，"枕水人家"',
    lng: 120.4890, lat: 30.6360
  },
  {
    id: 'wuzhen-maodun', cityId: 'wuzhen', name: '茅盾故居',
    cover: 'wuzhen-maodun', rating: 4.4, tags: ['人文', '历史'],
    openTime: '08:00-17:00', ticket: '通票已含', traffic: '乌镇东栅步行',
    duration: '1小时', tips: '文学巨匠故居；《子夜》《林家铺子》',
    intro: '茅盾先生的故居，东栅景区内，了解文坛巨匠的生平',
    lng: 120.4910, lat: 30.6350
  },

  // --- 西塘 xitang ---
  {
    id: 'xitang-ancient', cityId: 'xitang', name: '西塘古镇',
    cover: 'xitang-water-town', rating: 4.6, tags: ['人文', '水乡', '必去', '世界遗产'],
    openTime: '全天', ticket: '100元', traffic: '嘉善乘公交至西塘',
    duration: '一天', tips: '烟雨长廊；石皮弄；红粉朱楼',
    intro: '"生活着的千年古镇"，烟雨长廊浪漫，世界文化遗产',
    lng: 120.9000, lat: 30.9300
  },
  {
    id: 'xitang-yanyu', cityId: 'xitang', name: '烟雨长廊',
    cover: 'xitang-yanyu-corridor', rating: 4.5, tags: ['人文', '夜游', '拍照'],
    openTime: '全天', ticket: '通票已含', traffic: '西塘古镇内步行',
    duration: '2小时', tips: '雨中最美；长廊座椅；夜景灯光',
    intro: '西塘最著名的长廊，雨中漫步最浪漫，"烟雨长廊"',
    lng: 120.9010, lat: 30.9310
  },
  {
    id: 'xitang-pishi', cityId: 'xitang', name: '石皮弄',
    cover: 'xitang-pishi-lane', rating: 4.4, tags: ['人文', '拍照'],
    openTime: '全天', ticket: '通票已含', traffic: '西塘古镇内步行',
    duration: '1小时', tips: '西塘最窄的弄堂；两侧高墙；回音壁',
    intro: '西塘最著名的弄堂，狭长幽深，两侧高墙，回音效果独特',
    lng: 120.8990, lat: 30.9290
  },

  // --- 千岛湖 qiandaohu ---
  {
    id: 'qiandaohu-scenic', cityId: 'qiandaohu', name: '千岛湖景区',
    cover: 'qiandaohu-lake', rating: 4.6, tags: ['自然', '必去'],
    openTime: '08:00-17:00', ticket: '150元（含游船）', traffic: '杭州乘专线至千岛湖',
    duration: '一天', tips: '1078座岛屿；农夫山泉水源地；鱼头汤',
    intro: '世界上岛屿最多的湖，1078座岛屿星罗棋布，"千岛星罗"',
    lng: 119.0463, lat: 29.6088
  },
  {
    id: 'qiandaohu-meifeng', cityId: 'qiandaohu', name: '梅峰岛',
    cover: 'qiandaohu-meifeng-island', rating: 4.5, tags: ['自然'],
    openTime: '08:00-17:00', ticket: '门票已含', traffic: '千岛湖游船',
    duration: '2小时', tips: '"千岛第一峰"；俯瞰千岛湖光；缆车',
    intro: '"千岛第一峰"，海拔600米，俯瞰千岛湖全景',
    lng: 119.0300, lat: 29.6260
  },
  {
    id: 'qiandaohu-yule', cityId: 'qiandaohu', name: '渔乐岛',
    cover: 'qiandaohu-yule-island', rating: 4.4, tags: ['亲子', '自然'],
    openTime: '08:00-17:00', ticket: '门票已含', traffic: '千岛湖游船',
    duration: '2小时', tips: '千岛湖捕鱼表演；鱼头汤品尝；水上活动',
    intro: '千岛湖传统文化体验岛，捕鱼表演，千岛湖鱼头汤品尝地',
    lng: 119.0600, lat: 29.6180
  },
]

import { cities } from './cities'

const _cityMap = Object.fromEntries(cities.map(c => [c.id, c]))

spots.forEach((s, i) => {
  if (s.lng == null || s.lat == null) {
    const c = _cityMap[s.cityId]
    if (c) {
      s.lng = +(c.lng + (i % 5) * 0.015 + 0.003).toFixed(4)
      s.lat = +(c.lat + (Math.floor(i / 5) % 5) * 0.012 - 0.006).toFixed(4)
    }
  }
})

export function getSpot(id) {
  return spots.find(s => s.id === id)
}

export function spotsByCity(cityId) {
  return spots.filter(s => s.cityId === cityId)
}

export function spotsByTag(tag) {
  return spots.filter(s => s.tags.includes(tag))
}

export function searchSpots(keyword) {
  if (!keyword) return spots
  const k = keyword.toLowerCase().trim()
  return spots.filter(s =>
    s.name.includes(keyword) ||
    s.cityId.toLowerCase().includes(k) ||
    s.tags.some(t => t.includes(keyword)) ||
    s.intro.includes(keyword)
  )
}

export const allTags = [
  '人文', '自然', '必去', '世界遗产', '免费', '亲子', '夜游',
  '美食', '拍照', '宗教', '历史', '文化', '运动', '骑行',
  '徒步', '刺激', '体验', '温泉', '养生', '海滩', '海岛',
  '水乡', '打卡', '主题乐园', '观光', '秋季', '春季', '冬季'
]