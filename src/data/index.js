import { cities } from './cities'
import { spots } from './spots'
import { foods } from './foods'
import { galleries } from './galleries'
import { guides } from './guides'

export { cities, spots, foods, galleries, guides }

// ============ Cities Helpers ============

export const cityHelpers = {
  findById(id) {
    return cities.find(c => c.id === id) || null
  },

  findByName(name) {
    return cities.find(c => c.name === name) || null
  },

  filterByRegion(region) {
    return cities.filter(c => c.region === region)
  },

  getRegions() {
    return [...new Set(cities.map(c => c.region))]
  },

  filterByProvince(province) {
    return cities.filter(c => c.province === province)
  },

  getAllProvinces() {
    return [...new Set(cities.map(c => c.province))]
  },

  search(keyword) {
    const kw = keyword.toLowerCase().trim()
    if (!kw) return []
    return cities.filter(c =>
      c.name.toLowerCase().includes(kw) ||
      c.pinyin.toLowerCase().includes(kw) ||
      c.province.toLowerCase().includes(kw) ||
      c.slogan.toLowerCase().includes(kw)
    )
  }
}

// ============ Spots Helpers ============

export const spotHelpers = {
  findById(id) {
    return spots.find(s => s.id === id) || null
  },

  filterByCity(cityId) {
    return spots.filter(s => s.cityId === cityId)
  },

  filterByTag(tag) {
    return spots.filter(s => (s.tags || []).includes(tag))
  },

  getTags() {
    const tagSet = new Set()
    spots.forEach(s => (s.tags || []).forEach(t => tagSet.add(t)))
    return [...tagSet]
  },

  getTopRated(limit = 10) {
    return [...spots].sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, limit)
  },

  search(keyword) {
    const kw = keyword.toLowerCase().trim()
    if (!kw) return []
    return spots.filter(s =>
      s.name.toLowerCase().includes(kw) ||
      s.intro.toLowerCase().includes(kw) ||
      (s.tags || []).some(t => t.toLowerCase().includes(kw))
    )
  }
}

// ============ Foods Helpers ============

export const foodHelpers = {
  findById(id) {
    return foods.find(f => f.id === id) || null
  },

  filterByCity(cityId) {
    return foods.filter(f => f.cityId === cityId)
  },

  filterByType(type) {
    return foods.filter(f => f.type === type)
  },

  getTypes() {
    return [...new Set(foods.map(f => f.type))]
  },

  search(keyword) {
    const kw = keyword.toLowerCase().trim()
    if (!kw) return []
    return foods.filter(f =>
      f.name.toLowerCase().includes(kw) ||
      f.desc.toLowerCase().includes(kw) ||
      f.recommend.some(r => r.toLowerCase().includes(kw))
    )
  }
}

// ============ Guides Helpers ============

export const guideHelpers = {
  findById(id) {
    return guides.find(g => g.id === id) || null
  },

  filterByCity(cityId) {
    return guides.filter(g => g.cityId === cityId)
  },

  filterByDays(minDays, maxDays) {
    return guides.filter(g => {
      if (minDays != null && g.days < minDays) return false
      if (maxDays != null && g.days > maxDays) return false
      return true
    })
  },

  getByCity(cityId) {
    return guides.filter(g => g.cityId === cityId)
  },

  search(keyword) {
    const kw = keyword.toLowerCase().trim()
    if (!kw) return []
    return guides.filter(g =>
      g.title.toLowerCase().includes(kw) ||
      g.summary.toLowerCase().includes(kw) ||
      (g.itinerary || []).some(d =>
        (d.schedule || []).some(s => s.content.toLowerCase().includes(kw))
      )
    )
  },

  getBudgetRange(cityId) {
    const cityGuides = guides.filter(g => g.cityId === cityId)
    if (!cityGuides.length) return null
    return {
      min: Math.min(...cityGuides.map(g => g.budget?.min || Infinity)),
      max: Math.max(...cityGuides.map(g => g.budget?.max || 0))
    }
  }
}

// ============ Global Search ============

export function searchAll(q) {
  const kw = q.trim().toLowerCase()
  if (!kw) return { cities: [], spots: [], foods: [], guides: [] }

  const match = (str) => String(str || '').toLowerCase().includes(kw)

  return {
    cities: cities.filter(c => match(c.name) || match(c.province) || match(c.slogan) || match(c.intro)),
    spots: spots.filter(s => match(s.name) || match(s.intro) || (s.tags || []).some(match)),
    foods: foods.filter(f => match(f.name) || match(f.desc) || match(f.recommend)),
    guides: guides.filter(g => match(g.title) || match(g.summary) || match(g.content))
  }
}