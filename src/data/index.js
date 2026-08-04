// 数据汇总 + 全局搜索
import { cities } from './cities'
import { spots } from './spots'
import { foods } from './foods'
import { galleries } from './galleries'
import { guides } from './guides'

export { cities, spots, foods, galleries, guides }

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
