/**
 * 真实风景图源 - 基于 LoremFlickr
 * https://loremflickr.com/{w}/{h}/{keywords}?lock={seed}
 *
 * - 关键词逗号分隔：默认 OR 关系（任一匹配即返回），匹配范围更广
 * - lock 参数锁定 seed，相同 seed + keywords 永远返回同一张图，保证一致性
 * - 免费无 API Key，适合作为城市/景点/美食封面图源
 *
 * 注：与地图功能完全解耦，地图仍由 CityMap.vue (Leaflet) 独立提供。
 */

const BASE = 'https://loremflickr.com'

// 默认兜底关键词
const DEFAULT_KEYWORDS = 'china,travel,landscape'

/**
 * 把短横线/下划线分隔的字符串转换为逗号分隔的关键词
 * 'beijing-forbidden-city' -> 'beijing,forbidden,city'
 */
function toKeywords(str) {
  if (!str) return DEFAULT_KEYWORDS
  return String(str)
    .split(/[-_\s]+/)
    .filter(Boolean)
    .join(',')
}

/**
 * 字符串 hash → 正整数，用作 lock seed
 */
function hashSeed(str) {
  if (!str) return 1
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h) % 9999 + 1
}

/**
 * 生成 LoremFlickr 图片 URL
 * @param {string} keywords - 逗号分隔的英文关键词
 * @param {number} [seed=1] - 锁定种子
 * @param {number} [w=800]
 * @param {number} [h=500]
 * @returns {string} 图片 URL
 */
export function getImageUrl(keywords, seed = 1, w = 800, h = 500) {
  const kw = keywords && keywords.trim() ? keywords : DEFAULT_KEYWORDS
  return `${BASE}/${w}/${h}/${encodeURIComponent(kw)}?lock=${seed}`
}

/**
 * 城市封面图（真实风景）
 * 优先使用 city.imageKeywords（精挑的英文关键词），否则从 cover 字段派生
 *
 * @param {Object} city - 城市对象（cities.js 中的项）
 * @param {number} [seed] - 可选种子，默认按 id hash
 * @returns {string}
 */
export function getCityImage(city, seed) {
  if (!city) return ''
  const keywords = city.imageKeywords
    ? city.imageKeywords
    : toKeywords(city.cover || city.id)
  return getImageUrl(keywords, seed ?? hashSeed(city.id || city.name))
}

/**
 * 景点图片
 * @param {Object} spot - 景点对象
 * @param {Object} [city] - 所属城市（可选，用于追加城市关键词提升相关性）
 * @returns {string}
 */
export function getSpotImage(spot, city) {
  if (!spot) return ''
  const spotKw = toKeywords(spot.cover || spot.id)
  const cityKw = city
    ? (city.imageKeywords || toKeywords(city.cover || city.id || ''))
    : ''
  // 组合关键词（OR 关系），让 LoremFlickr 有更多匹配空间
  const keywords = cityKw ? `${spotKw},${cityKw}` : spotKw
  return getImageUrl(keywords, hashSeed(spot.id || spot.name))
}

/**
 * 美食图片
 * @param {Object} food - 美食对象
 * @param {Object} [city] - 所属城市（可选）
 * @returns {string}
 */
export function getFoodImage(food, city) {
  if (!food) return ''
  const foodKw = toKeywords(food.cover || food.id) + ',food'
  const cityKw = city
    ? (city.imageKeywords || toKeywords(city.cover || city.id || ''))
    : ''
  const keywords = cityKw ? `${foodKw},${cityKw}` : foodKw
  return getImageUrl(keywords, hashSeed(food.id || food.name))
}

/**
 * 攻略图片
 * @param {Object} guide - 攻略对象
 * @param {Object} [city] - 所属城市（可选）
 * @returns {string}
 */
export function getGuideImage(guide, city) {
  if (!guide) return ''
  const guideKw = toKeywords(guide.cover || guide.id)
  const cityKw = city
    ? (city.imageKeywords || toKeywords(city.cover || city.id || ''))
    : ''
  const keywords = cityKw ? `${guideKw},${cityKw}` : guideKw
  return getImageUrl(keywords, hashSeed(guide.id || guide.title))
}

export { hashSeed, toKeywords }
