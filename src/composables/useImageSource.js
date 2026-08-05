const BASE = 'https://picsum.photos'
const FLICKR = 'https://loremflickr.com'
const DEFAULT_W = 800
const DEFAULT_H = 500

function hashSeed(str) {
  if (!str) return 1
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h) % 9999 + 1
}

export function getImageUrl(keywords, seed = 1, w = DEFAULT_W, h = DEFAULT_H) {
  return `${BASE}/seed/${seed}/${w}/${h}`
}

const localCityImages = {
  chengdu: 'img/chengdu-cover.png',
  hangzhou: 'img/hangzhou-cover.png',
  xian: 'img/xian-cover.png',
  lijiang: 'img/lijiang-cover.png',
  xiamen: 'img/xiamen-cover.png'
}

const localSpotImages = {
  'chengdu-panda': 'img/chengdu-panda.png',
  'chengdu-kuanzhai': 'img/chengdu-kuanzhai.png',
  'chengdu-dujiangyan': 'img/chengdu-dujiangyan.png',
  'hangzhou-xihu': 'img/hangzhou-xihu.png',
  'hangzhou-lingyin': 'img/hangzhou-lingyin.png',
  'hangzhou-xixi': 'img/hangzhou-xixi.png',
  'xian-bingmayong': 'img/xian-bingmayong.png',
  'xian-chengqiang': 'img/xian-chengqiang.png',
  'xian-huiminjie': 'img/xian-huiminjie.png',
  'lijiang-oldtown': 'img/lijiang-oldtown.png',
  'lijiang-yulong': 'img/lijiang-yulong.png',
  'lijiang-shuhe': 'img/lijiang-shuhe.png',
  'xiamen-gulangyu': 'img/xiamen-gulangyu.png',
  'xiamen-huandao': 'img/xiamen-huandao.png',
  'xiamen-zengcuoan': 'img/xiamen-zengcuoan.png'
}

const localFoodImages = {
  'chengdu-hotpot': 'img/chengdu-hotpot.png',
  'chengdu-chuanchuan': 'img/chengdu-chuanchuan.png',
  'chengdu-longchaoshou': 'img/chengdu-longchaoshou.png',
  'hangzhou-xihucuyu': 'img/hangzhou-xihucuyu.png',
  'hangzhou-longjingxiaoren': 'img/hangzhou-longjingxiaoren.png',
  'hangzhou-dongpo': 'img/hangzhou-dongpo.png',
  'xian-roujiamo': 'img/xian-roujiamo.png',
  'xian-paomo': 'img/xian-paomo.png',
  'xian-liangpi': 'img/xian-liangpi.png',
  'lijiang-guozhuang': 'img/lijiang-guozhuang.png',
  'lijiang-baba': 'img/lijiang-baba.png',
  'lijiang-shanguo': 'img/lijiang-shanguo.png',
  'xiamen-shachamian': 'img/xiamen-shachamian.png',
  'xiamen-haishen': 'img/xiamen-haishen.png',
  'xiamen-zongzi': 'img/xiamen-zongzi.png'
}

export function getCityImage(city, seed) {
  if (!city) return ''
  if (city.coverImage) return city.coverImage
  if (localCityImages[city.id]) return localCityImages[city.id]
  if (city.imageKeywords) {
    const s = seed ?? hashSeed(city.id)
    return `${FLICKR}/${DEFAULT_W}/${DEFAULT_H}/${encodeURIComponent(city.imageKeywords)}?lock=${s}`
  }
  return getImageUrl(null, seed ?? hashSeed(city.id || city.name))
}

export function getSpotImage(spot, city) {
  if (!spot) return ''
  if (spot.coverImage) return spot.coverImage
  if (localSpotImages[spot.id]) return localSpotImages[spot.id]
  if (spot.cover && spot.cover.startsWith('img/')) return spot.cover
  const keywords = spot.cover || (city?.imageKeywords) || ''
  if (keywords) {
    return `${FLICKR}/${DEFAULT_W}/${DEFAULT_H}/${encodeURIComponent(keywords)}?lock=${hashSeed(spot.id)}`
  }
  return getImageUrl(null, hashSeed(spot.id || spot.name))
}

export function getFoodImage(food, city) {
  if (!food) return ''
  if (food.coverImage) return food.coverImage
  if (localFoodImages[food.id]) return localFoodImages[food.id]
  if (food.cover && food.cover.startsWith('img/')) return food.cover
  const keywords = food.cover || (city?.imageKeywords) || ''
  if (keywords) {
    return `${FLICKR}/${DEFAULT_W}/${DEFAULT_H}/${encodeURIComponent(keywords)}?lock=${hashSeed(food.id)}`
  }
  return getImageUrl(null, hashSeed(food.id || food.name))
}

export function getGuideImage(guide, city) {
  if (!guide) return ''
  if (guide.coverImage) return guide.coverImage
  if (city?.imageKeywords) {
    return `${FLICKR}/${DEFAULT_W}/${DEFAULT_H}/${encodeURIComponent(city.imageKeywords)}?lock=${hashSeed(guide.id)}`
  }
  return getImageUrl(null, hashSeed(guide.id || guide.title))
}

export { hashSeed }
