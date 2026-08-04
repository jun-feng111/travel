// 美景图集数据（image 留空时使用占位渐变）
export const galleries = [
  { id: 'chengdu-1', cityId: 'chengdu', title: '熊猫基地的晨光', image: 'img/chengdu-g1.png', desc: '幼年熊猫在竹林里打滚的治愈瞬间。' },
  { id: 'chengdu-2', cityId: 'chengdu', title: '宽巷子的盖碗茶', image: 'img/chengdu-g2.png', desc: '老茶馆里一盅茶、一下午的成都慢生活。' },
  { id: 'chengdu-3', cityId: 'chengdu', title: '都江堰鱼嘴', image: 'img/chengdu-g3.png', desc: '两千年水利工程分水的壮阔。' },

  { id: 'hangzhou-1', cityId: 'hangzhou', title: '苏堤春晓', image: 'img/hangzhou-g1.png', desc: '春日苏堤桃柳夹岸，湖光潋滟。' },
  { id: 'hangzhou-2', cityId: 'hangzhou', title: '雷峰夕照', image: 'img/hangzhou-g2.png', desc: '夕阳下的雷峰塔倒映湖面。' },
  { id: 'hangzhou-3', cityId: 'hangzhou', title: '灵隐晨钟', image: 'img/hangzhou-g3.png', desc: '北高峰云雾中的古刹飞檐。' },

  { id: 'xian-1', cityId: 'xian', title: '城墙日落', image: 'img/xian-g1.png', desc: '骑行城垣俯瞰古城华灯初上。' },
  { id: 'xian-2', cityId: 'xian', title: '兵马俑阵列', image: 'img/xian-g2.png', desc: '一号坑千军俑阵的震撼。' },
  { id: 'xian-3', cityId: 'xian', title: '回民街烟火', image: 'img/xian-g3.png', desc: '夜市灯火与烤肉香气。' },

  { id: 'lijiang-1', cityId: 'lijiang', title: '玉龙雪峰', image: 'img/lijiang-g1.png', desc: '蓝月谷倒映的雪山银顶。' },
  { id: 'lijiang-2', cityId: 'lijiang', title: '古城流水', image: 'img/lijiang-g2.png', desc: '纳西院落前的小桥流水。' },
  { id: 'lijiang-3', cityId: 'lijiang', title: '束河晨雾', image: 'img/lijiang-g3.png', desc: '清晨古镇巷口的薄雾。' },

  { id: 'xiamen-1', cityId: 'xiamen', title: '鼓浪屿日落', image: 'img/xiamen-g1.png', desc: '日光岩上望海的橘色黄昏。' },
  { id: 'xiamen-2', cityId: 'xiamen', title: '环岛路骑行', image: 'img/xiamen-g2.png', desc: '椰风海韵间的沿海公路。' },
  { id: 'xiamen-3', cityId: 'xiamen', title: '曾厝垵夜色', image: 'img/xiamen-g3.png', desc: '文艺渔村的霓虹与小店。' }
]

export function galleriesByCity(cityId) {
  return galleries.filter(g => g.cityId === cityId)
}
