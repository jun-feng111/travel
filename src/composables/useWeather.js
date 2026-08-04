import { ref, computed } from 'vue'
import { getNowWeather, get7DayWeather, getIndices, searchCity } from '../api/qweather'
import { getAMap, searchPoi } from '../api/amap'
import { cities } from '../data/cities'

const weatherCache = new Map()

export function useWeather() {
  const now = ref(null)
  const daily = ref([])
  const indices = ref([])
  const loading = ref(false)
  const error = ref(null)

  const WEATHER_ID_MAP = {
    '北京': '101010100', '上海': '101020100', '广州': '101280101',
    '深圳': '101280601', '成都': '101270101', '杭州': '101210101',
    '西安': '101110100', '南京': '101190101', '重庆': '101040100',
    '武汉': '101200101', '长沙': '101250101', '青岛': '101120201',
    '厦门': '101230101', '大连': '101070201', '天津': '101030100',
    '苏州': '101190401', '昆明': '101290101', '哈尔滨': '101050100',
    '郑州': '101180101', '沈阳': '101070101', '济南': '101120101',
    '合肥': '101220101', '福州': '101230101', '南昌': '101240101',
    '贵阳': '101260101', '太原': '101100101', '南宁': '101300101',
    '乌鲁木齐': '101130101', '拉萨': '101140101', '海口': '101310101',
    '三亚': '101310202', '丽江': '101291401', '大理': '101290201',
    '桂林': '101250501', '九寨沟': '101270402', '张家界': '101240901'
  }

  function getCityId(cityName) {
    if (WEATHER_ID_MAP[cityName]) return WEATHER_ID_MAP[cityName]
    const city = cities.find(c => c.name === cityName)
    if (city) {
      const amap = getAMap()
      if (amap) {
        return city.adcode
      }
    }
    return cityName
  }

  async function fetchWeather(cityName) {
    if (weatherCache.has(cityName)) {
      const cached = weatherCache.get(cityName)
      now.value = cached.now
      daily.value = cached.daily
      indices.value = cached.indices
      return
    }

    loading.value = true
    error.value = null

    try {
      const cityId = getCityId(cityName)
      const [nowData, dailyData, indicesData] = await Promise.all([
        getNowWeather(cityId),
        get7DayWeather(cityId),
        getIndices(cityId)
      ])

      now.value = nowData
      daily.value = dailyData
      indices.value = indicesData

      weatherCache.set(cityName, {
        now: nowData,
        daily: dailyData,
        indices: indicesData
      })
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  const weatherTips = computed(() => {
    if (!now.value) return []
    const tips = []
    const temp = parseInt(now.value.temp)
    if (temp >= 35) tips.push('☀️ 高温天气，注意防晒补水')
    if (temp <= 5) tips.push('🥶 天气寒冷，注意保暖')
    if (temp <= 0) tips.push('❄️ 气温极低，注意防寒防滑')
    if (now.value.text?.includes('雨')) tips.push('🌂 有雨，记得带伞')
    if (now.value.text?.includes('雪')) tips.push('⛄ 有雪，注意保暖和出行安全')
    if (now.value.humidity > 80) tips.push('💧 湿度较高，注意防潮')
    if (now.value.windScale >= 5) tips.push('💨 风力较大，注意安全')
    return tips
  })

  return {
    now,
    daily,
    indices,
    loading,
    error,
    fetchWeather,
    weatherTips,
    getCityId
  }
}
