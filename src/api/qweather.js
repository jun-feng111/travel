import { QWEATHER_KEY } from './apikey'

const BASE = 'https://devapi.qweather.com/v7'

async function fetchQWeather(path, params = {}) {
  const query = new URLSearchParams({ ...params, key: QWEATHER_KEY })
  const res = await fetch(`${BASE}${path}?${query}`)
  if (!res.ok) throw new Error('QWeather API error')
  return res.json()
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
  } catch (e) {
    return []
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
  } catch (e) {
    return null
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
  } catch (e) {
    return []
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
  } catch (e) {
    return []
  }
}
