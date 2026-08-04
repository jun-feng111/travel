import { ref } from 'vue'
import { autoComplete, searchPoi } from '../api/amap'
import { searchCity } from '../api/qweather'
import { cities as localCities } from '../data/cities'

export function useGlobalSearch() {
  const suggestions = ref([])
  const results = ref({ cities: [], spots: [], foods: [], guides: [] })
  const loading = ref(false)

  async function getSuggestions(keyword, city) {
    if (!keyword.trim()) {
      suggestions.value = []
      return
    }
    try {
      const [amapTips, qwCities] = await Promise.all([
        autoComplete(keyword, city || ''),
        searchCity(keyword)
      ])

      const merged = [
        ...amapTips.map(t => ({
          type: 'poi',
          name: t.name,
          district: t.district,
          location: t.location
        })),
        ...qwCities.map(c => ({
          type: 'city',
          name: c.name,
          district: `${c.adm1}${c.adm2 || ''}`,
          location: { lng: c.lon, lat: c.lat }
        }))
      ]

      suggestions.value = merged.slice(0, 10)
    } catch (e) {
      suggestions.value = []
    }
  }

  async function doSearch(keyword, city) {
    if (!keyword.trim()) return
    loading.value = true

    try {
      const localResults = filterLocal(keyword)

      let amapResults = []
      try {
        amapResults = await searchPoi(keyword, city || '')
      } catch (e) {}

      results.value = {
        cities: localResults.cities,
        spots: [
          ...localResults.spots,
          ...amapResults.filter(p => isSpotType(p.type)).map(p => ({
            id: p.id,
            name: p.name,
            cover: p.photos?.[0] || '',
            rating: p.rating,
            tags: [p.type || '景点'],
            intro: p.address || '',
            location: p.location,
            fromAmap: true
          }))
        ],
        foods: [
          ...localResults.foods,
          ...amapResults.filter(p => isFoodType(p.type)).map(p => ({
            id: p.id,
            name: p.name,
            cover: p.photos?.[0] || '',
            desc: p.address || '',
            rating: p.rating,
            tel: p.tel,
            location: p.location,
            fromAmap: true
          }))
        ],
        guides: localResults.guides
      }
    } catch (e) {
      results.value = { cities: [], spots: [], foods: [], guides: [] }
    } finally {
      loading.value = false
    }
  }

  function filterLocal(keyword) {
    const kw = keyword.trim().toLowerCase()
    const match = (str) => String(str || '').toLowerCase().includes(kw)

    const cityHits = localCities.filter(c =>
      match(c.name) || match(c.province) || match(c.slogan) || match(c.intro)
    )

    const allSpots = [
      ...getAllSpots(),
      ...getAllFoods()
    ].filter(s => match(s.name) || match(s.intro) || match(s.desc))

    return {
      cities: cityHits,
      spots: allSpots.filter(s => !s.food).slice(0, 20),
      foods: allSpots.filter(s => s.food).slice(0, 20),
      guides: []
    }
  }

  function isSpotType(type) {
    if (!type) return false
    return /景点|景区|公园|博物馆|纪念馆|寺庙|教堂|塔|桥|城堡|岛屿|山|湖|海|瀑布|温泉|沙滩/.test(type)
  }

  function isFoodType(type) {
    if (!type) return false
    return /餐厅|酒店|美食|小吃|菜馆|酒楼|咖啡|茶馆|甜品|烧烤|火锅|海鲜/.test(type)
  }

  function getAllSpots() {
    const spots = []
    localCities.forEach(c => {
      if (c.spots) spots.push(...c.spots)
    })
    return spots
  }

  function getAllFoods() {
    const foods = []
    localCities.forEach(c => {
      if (c.foods) foods.push(...c.foods)
    })
    return foods
  }

  return {
    suggestions,
    results,
    loading,
    getSuggestions,
    doSearch
  }
}
