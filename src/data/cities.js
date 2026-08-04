// 城市基础数据
export const cities = [
  {
    id: 'chengdu',
    name: '成都',
    province: '四川',
    region: '西南',
    slogan: '一座来了就不想走的城市',
    cover: 'img/chengdu-cover.png',
    intro: '成都，四川省会，以慢生活、火锅、大熊猫和宽窄巷子闻名。这里是美食与休闲的天堂，也是探索川西高原的起点。',
    bestSeason: '3-6月、9-11月',
    weather: '亚热带湿润气候，春秋最舒适，夏季闷热多雨。',
    lng: 104.0668, lat: 30.5728
  },
  {
    id: 'hangzhou',
    name: '杭州',
    province: '浙江',
    region: '华东',
    slogan: '上有天堂，下有苏杭',
    cover: 'img/hangzhou-cover.png',
    intro: '杭州，浙江省会，因西湖而名扬天下。江南水乡的温婉、龙井茶香与千年古刹，构成了这座城市的诗意底色。',
    bestSeason: '3-5月（桃花）、9-11月（桂花）',
    weather: '亚热带季风气候，四季分明，梅雨季在6月，秋季最宜人。',
    lng: 120.1551, lat: 30.2741
  },
  {
    id: 'xian',
    name: '西安',
    province: '陕西',
    region: '西北',
    slogan: '千年古都，一眼万年',
    cover: 'img/xian-g1.png',
    intro: '西安，十三朝古都，丝绸之路起点。兵马俑、古城墙、回民街，历史与现代在这里交错碰撞。',
    bestSeason: '3-5月、9-10月',
    weather: '温带季风气候，昼夜温差大，夏季炎热，冬季干冷。',
    lng: 108.9402, lat: 34.3416
  },
  {
    id: 'lijiang',
    name: '丽江',
    province: '云南',
    region: '西南',
    slogan: '遇见雪山与古城的柔软时光',
    cover: 'img/lijiang-g2.png',
    intro: '丽江，云南西北的古城，玉龙雪山下的纳西家园。小桥流水、酒吧民谣、茶马古道，是逃离喧嚣的乌托邦。',
    bestSeason: '4-6月、9-11月',
    weather: '高原季风气候，紫外线强，昼夜温差大，雨季在7-8月。',
    lng: 100.2330, lat: 26.8721
  },
  {
    id: 'xiamen',
    name: '厦门',
    province: '福建',
    region: '东南',
    slogan: '面朝大海，春暖花开',
    cover: 'img/xiamen-g1.png',
    intro: '厦门，海滨花园城市，鼓浪屿的琴声、环岛路的海风、沙茶面的香气，慢节奏里藏着文艺与浪漫。',
    bestSeason: '3-5月、10-12月',
    weather: '亚热带海洋性气候，温和湿润，夏季有台风，冬季短暂凉爽。',
    lng: 118.0894, lat: 24.4798
  }
]

export function getCity(id) {
  return cities.find(c => c.id === id)
}
