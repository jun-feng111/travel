import { QWEATHER_KEY } from './apikey'

const BASE = 'https://api.qweather.com/v7'

const cache = new Map()
const CACHE_TTL = 5 * 60 * 1000

let apiAvailable = null
let fallbackMode = false

function generateMockWeather(cityId) {
  const conditions = [
    { text: '晴', icon: '100', temp: '26', feelTemp: '28', windDir: '东南风', windScale: '3', humidity: '45', precip: '0' },
    { text: '多云', icon: '102', temp: '24', feelTemp: '26', windDir: '南风', windScale: '2', humidity: '55', precip: '0' },
    { text: '阴', icon: '104', temp: '22', feelTemp: '23', windDir: '北风', windScale: '3', humidity: '70', precip: '0' },
    { text: '小雨', icon: '307', temp: '18', feelTemp: '17', windDir: '东风', windScale: '3', humidity: '85', precip: '2' },
    { text: '雷阵雨', icon: '315', temp: '25', feelTemp: '27', windDir: '南风', windScale: '4', humidity: '90', precip: '8' }
  ]
  const idx = Math.abs(hashCode(cityId)) % conditions.length
  return conditions[idx]
}

function hashCode(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0
  }
  return h
}

function generateMock7DayWeather(cityId) {
  const base = generateMockWeather(cityId)
  const days = []
  const today = new Date()
  for (let i = 0; i < 7; i++) {
    const d = new Date(today)
    d.setDate(d.getDate() + i)
    const cond = generateMockWeather(cityId + '_' + i)
    days.push({
      date: d.toISOString().slice(0, 10),
      tempMax: String(parseInt(cond.temp) + 3),
      tempMin: String(parseInt(cond.temp) - 5),
      textDay: cond.text,
      textNight: cond.text === '晴' ? '晴' : '多云',
      iconDay: cond.icon,
      windDirDay: cond.windDir,
      humidity: cond.humidity,
      precip: cond.precip
    })
  }
  return days
}

function generateMockIndices(cityId) {
  return [
    { type: '1', name: '运动指数', level: '较适宜', text: '天气较好，户外运动较适宜' },
    { type: '3', name: '穿衣指数', level: '舒适', text: '建议穿长袖衬衫或薄外套' },
    { type: '5', name: '紫外线指数', level: '中等', text: '建议涂抹SPF15防晒霜' }
  ]
}

function generateMockCityResults(keyword) {
  return [
    { id: '101010100', name: '北京', adm1: '北京', adm2: '北京', lat: '39.9042', lon: '116.4074' },
    { id: '101020100', name: '上海', adm1: '上海', adm2: '上海', lat: '31.2304', lon: '121.4737' },
    { id: '101280101', name: '广州', adm1: '广东', adm2: '广州', lat: '23.1291', lon: '113.2644' },
    { id: '101210101', name: '杭州', adm1: '浙江', adm2: '杭州', lat: '30.2741', lon: '120.1551' },
    { id: '101230101', name: '深圳', adm1: '广东', adm2: '深圳', lat: '22.5431', lon: '114.0579' }
  ].filter(c => c.name.includes(keyword) || keyword.includes(c.name))
}

async function fetchQWeather(path, params = {}) {
  const query = new URLSearchParams({ ...params, key: QWEATHER_KEY })
  const url = `${BASE}${path}?${query}`

  if (cache.has(url)) {
    const cached = cache.get(url)
    if (Date.now() - cached.time < CACHE_TTL) {
      return cached.data
    }
    cache.delete(url)
  }

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`QWeather API error: ${res.status}`)
    const data = await res.json()
    cache.set(url, { data, time: Date.now() })
    apiAvailable = true
    fallbackMode = false
    return data
  } catch (e) {
    apiAvailable = false
    fallbackMode = true
    throw e
  }
}

export async function isApiAvailable() {
  if (apiAvailable !== null) return apiAvailable
  try {
    const res = await fetch(`${BASE}/weather/now?location=101010100&key=${QWEATHER_KEY}`)
    apiAvailable = res.ok
    return apiAvailable
  } catch {
    apiAvailable = false
    return false
  }
}

export function isFallbackMode() {
  return fallbackMode
}

export function clearCache() {
  cache.clear()
}

export async function searchCity(keyword) {
  try {
    const data = await fetchQWeather('/geoapi/v2/city/lookup', {
      location: keyword,
      number: 10
    })
    return (data.location || []).map(c => ({
      id: c.id,
      name: c.name,
      adm1: c.adm1,
      adm2: c.adm2,
      lat: c.lat,
      lon: c.lon
    }))
  } catch {
    return generateMockCityResults(keyword)
  }
}

export async function getNowWeather(cityId) {
  try {
    const data = await fetchQWeather('/weather/now', { location: cityId })
    const now = data.now
    return {
      temp: now.temp,
      text: now.text,
      windDir: now.windDir,
      windScale: now.windScale,
      humidity: now.humidity,
      precip: now.precip,
      feelTemp: now.feelsLike,
      icon: now.icon
    }
  } catch {
    const mock = generateMockWeather(cityId)
    return {
      temp: mock.temp,
      text: mock.text,
      windDir: mock.windDir,
      windScale: mock.windScale,
      humidity: mock.humidity,
      precip: mock.precip,
      feelTemp: mock.feelTemp,
      icon: mock.icon
    }
  }
}

export async function get7DayWeather(cityId) {
  try {
    const data = await fetchQWeather('/weather/7d', { location: cityId })
    return (data.daily || []).map(d => ({
      date: d.fxDate,
      tempMax: d.tempMax,
      tempMin: d.tempMin,
      textDay: d.textDay,
      textNight: d.textNight,
      iconDay: d.iconDay,
      windDirDay: d.windDirDay,
      humidity: d.humidity,
      precip: d.precip
    }))
  } catch {
    return generateMock7DayWeather(cityId)
  }
}

export async function getIndices(cityId, type = '1,3,5') {
  try {
    const data = await fetchQWeather('/indices/1d', {
      location: cityId,
      type
    })
    return (data.daily || []).map(i => ({
      type: i.type,
      name: i.name,
      level: i.level,
      text: i.text
    }))
  } catch {
    return generateMockIndices(cityId)
  }
}