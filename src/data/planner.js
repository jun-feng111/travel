// 行程规划算法（纯前端，基于现有 spots/foods 数据打分排程）
import { spotsByCity } from './spots'
import { foodsByCity } from './foods'
import { getCity } from './cities'

// 风格权重：对景点标签 / 美食的偏好
const STYLE_WEIGHT = {
  休闲: { tag: { '自然': 2, '夜游': 1.5, '亲子': 1 }, food: 1, perDay: 2 },
  深度: { tag: { '人文': 2, '世界遗产': 2, '宗教': 1.5 }, food: 1, perDay: 2 },
  亲子: { tag: { '亲子': 3, '自然': 1.5 }, food: 1, perDay: 2 },
  美食: { tag: { '美食': 2 }, food: 3, perDay: 3 }
}

// 景点门票估算（元），用于预算控制
function ticketCost(ticket) {
  if (!ticket) return 0
  const m = ticket.match(/(\d+)/)
  return m ? Number(m[1]) : 0
}
// 游玩时长估算（小时）
function durationHours(d) {
  const m = String(d).match(/(\d+)\s*-\s*(\d+)/)
  if (m) return (Number(m[2]) + Number(m[1])) / 2
  if (/半天/.test(d)) return 4
  if (/天/.test(d)) return 7
  return 2
}

export function planTrip({ cityId, days, budget, style }) {
  const city = getCity(cityId)
  if (!city) return []
  const w = STYLE_WEIGHT[style] || STYLE_WEIGHT['休闲']

  // 给景点按风格打分
  let spots = spotsByCity(cityId).map(s => {
    let score = s.rating || 4
    ;(s.tags || []).forEach(t => { score += (w.tag[t] || 0) })
    return { ...s, score, cost: ticketCost(s.ticket), hours: durationHours(s.duration), kind: 'spot' }
  }).sort((a, b) => b.score - a.score)

  let foods = foodsByCity(cityId).map(f => ({
    ...f, score: 4 + w.food, cost: 80, hours: 1.5, kind: 'food', name: f.name
  })).sort((a, b) => b.score - a.score)

  const perDay = w.perDay
  const dailyBudget = Number(budget) || 300
  const plan = []

  let si = 0, fi = 0
  for (let d = 1; d <= days; d++) {
    const items = []
    let usedBudget = 0
    let usedHours = 0
    let count = 0
    // 每天优先放景点，穿插美食
    while (count < perDay && (si < spots.length || fi < foods.length)) {
      const canSpot = si < spots.length && usedHours + spots[si].hours <= 8 && usedBudget + spots[si].cost <= dailyBudget
      const canFood = fi < foods.length && usedBudget + foods[fi].cost <= dailyBudget
      if (canSpot && (count % 2 === 0 || !canFood)) {
        items.push(spots[si]); usedBudget += spots[si].cost; usedHours += spots[si].hours; si++; count++
      } else if (canFood) {
        items.push(foods[fi]); usedBudget += foods[fi].cost; usedHours += foods[fi].hours; fi++; count++
      } else {
        // 预算/时长不足，放低成本美食或结束当天
        if (fi < foods.length) { items.push(foods[fi]); fi++; count++ } else break
      }
    }
    plan.push({
      day: d,
      items: items.map(it => ({
        kind: it.kind,
        id: it.id,
        name: it.name,
        cover: it.cover,
        rating: it.rating,
        cost: it.cost,
        tags: it.tags,
        refCityId: cityId
      })),
      dayCost: items.reduce((s, it) => s + it.cost, 0)
    })
    if (si >= spots.length && fi >= foods.length) break
  }
  return plan
}
