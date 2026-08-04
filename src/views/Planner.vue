<template>
  <div class="container planner">
    <h2 class="section-title"><el-icon><MagicStick /></el-icon> 行程规划器</h2>
    <p class="desc">选择城市、天数、预算和旅行风格，自动生成一份逐日行程（基于本站景点与美食数据）。</p>

    <div class="form-card card">
      <el-form :model="form" label-width="80px">
        <el-row :gutter="16">
          <el-col :span="8">
            <el-form-item label="目的地">
              <el-select v-model="form.cityId" placeholder="选择城市" style="width:100%" filterable>
                <el-option v-for="c in cities" :key="c.id" :label="c.name" :value="c.id" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="天数">
              <el-input-number v-model="form.days" :min="1" :max="7" style="width:100%" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="风格">
              <el-select v-model="form.style" style="width:100%">
                <el-option label="休闲" value="休闲" />
                <el-option label="深度" value="深度" />
                <el-option label="亲子" value="亲子" />
                <el-option label="美食" value="美食" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="天气提示">
              <div v-if="weather.now" class="weather-info-inline">
                <span class="w-temp">{{ weather.now.temp }}°C</span>
                <span class="w-text">{{ weather.now.text }}</span>
              </div>
              <span v-else class="no-weather">选择城市后自动获取天气</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="每日预算">
          <el-slider v-model="form.budget" :min="100" :max="1000" :step="50" show-input />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="generate" :disabled="!form.cityId">生成行程</el-button>
          <el-button v-if="plan.length" @click="goMap" :disabled="!form.cityId">🗺️ 地图查看</el-button>
          <el-button v-if="plan.length" type="success" @click="savePlan">💾 保存攻略</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div v-if="plan.length" class="result">
      <div v-for="d in plan" :key="d.day" class="day-card card">
        <div class="day-head">
          <span class="day-no">Day {{ d.day }}</span>
          <span class="day-title">{{ d.title }}</span>
          <span class="day-cost">约 {{ d.dayCost }} 元</span>
        </div>
        <div v-for="(it, i) in d.items" :key="i" class="item">
          <div class="item-thumb" :style="{ background: getGradient(it.name) }">
            <span class="item-emoji">{{ getEmoji(it.kind) }}</span>
          </div>
          <div class="item-info">
            <span class="badge" :class="it.kind">{{ it.kind === 'spot' ? '景点' : '美食' }}</span>
            <router-link v-if="it.kind === 'spot'" :to="`/spot/${it.id}`" class="item-name">{{ it.name }}</router-link>
            <span v-else class="item-name">{{ it.name }}</span>
            <div class="item-meta">
              <span v-if="it.rating" class="rating">★ {{ it.rating }}</span>
              <span class="cost">{{ it.cost }} 元</span>
              <span v-if="it.tips" class="tips-inline">💡 {{ it.tips }}</span>
            </div>
          </div>
          <el-button
            text
            :type="isFav(it.kind, it.id) ? 'warning' : 'default'"
            @click="fav(it)"
          >
            {{ isFav(it.kind, it.id) ? '已收藏' : '收藏' }}
          </el-button>
        </div>
      </div>

      <div class="total card">
        <div class="total-info">
          <span>总预算预估：</span>
          <strong class="total-amount">{{ totalCost }} 元</strong>
        </div>
        <div class="total-detail">
          <el-tag v-for="(v, k) in budgetBreakdown" :key="k" size="small" effect="plain">
            {{ getBudgetLabel(k) }}：¥{{ v }}
          </el-tag>
        </div>
        <div class="plan-tips" v-if="weatherTips.length">
          <span class="tips-title">💡 出行贴士：</span>
          <span v-for="(t, i) in weatherTips" :key="i" class="tip-tag">{{ t }}</span>
        </div>
      </div>
    </div>

    <el-empty v-else-if="generated" description="该城市数据不足，暂无法生成行程" />
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Star, StarFilled, MagicStick } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { cities, getCity } from '../data/cities'
import { planTrip } from '../data/planner'
import { useFavorites } from '../composables/useFavorites'
import { useWeather } from '../composables/useWeather'

const router = useRouter()
const route = useRoute()
const { isFavorite, toggleFavorite, addPlan } = useFavorites()
const { now, weatherTips, fetchWeather } = useWeather()

const form = reactive({
  cityId: route.query.city || '',
  days: Number(route.query.days) || 3,
  budget: 300,
  style: '休闲'
})
const plan = ref([])
const generated = ref(false)

const weather = computed(() => ({ now: now.value }))

watch(() => form.cityId, (id) => {
  if (id) {
    const city = getCity(id)
    if (city) fetchWeather(city.name)
  }
})

const totalCost = computed(() => plan.value.reduce((s, d) => s + d.dayCost, 0))

const budgetBreakdown = computed(() => {
  const base = form.budget * form.days
  return {
    accommodation: Math.round(base * 0.3),
    food: Math.round(base * 0.25),
    ticket: Math.round(base * 0.2),
    transport: Math.round(base * 0.15),
    shopping: Math.round(base * 0.1)
  }
})

function decorate(items, cityId) {
  return items.map(it => ({
    ...it,
    faved: isFavorite(it.kind + 's', it.id)
  }))
}

function generate() {
  const city = getCity(form.cityId)
  if (!city) return

  fetchWeather(city.name)

  const raw = planTrip({ ...form })
  plan.value = raw.map(d => ({
    ...d,
    title: getDayTitle(d.day, form.style),
    items: decorate(d.items, form.cityId)
  }))
  generated.value = true
}

function getDayTitle(day, style) {
  const titles = {
    休闲: ['抵达与城市漫步', '核心景点深度游', '文化体验与美食'],
    深度: ['历史文化探索', '自然景观深度游', '当地生活体验'],
    亲子: ['亲子乐园与互动', '自然科普之旅', '家庭美食时光'],
    美食: ['必吃美食打卡', '地道小吃探索', '特色餐厅体验']
  }
  const dayTitles = titles[style] || titles.休闲
  return dayTitles[(day - 1) % dayTitles.length]
}

function isFav(kind, id) {
  return isFavorite(kind + 's', id)
}

function fav(it) {
  const type = it.kind + 's'
  toggleFavorite(type, it.id, {
    id: it.id,
    name: it.name,
    cover: it.cover,
    desc: it.intro,
    cityId: form.cityId,
    cityName: getCity(form.cityId)?.name
  })
}

function goMap() {
  router.push(`/map/${form.cityId}`)
}

function savePlan() {
  const city = getCity(form.cityId)
  const planData = {
    cityId: form.cityId,
    cityName: city?.name || '',
    days: form.days,
    style: form.style,
    budget: budgetBreakdown.value,
    tips: weatherTips.value,
    dayPlans: plan.value.map(d => ({
      title: d.title,
      items: d.items.map(it => ({
        type: it.kind,
        id: it.id,
        name: it.name,
        cover: it.cover,
        desc: it.intro,
        cityId: form.cityId
      }))
    }))
  }
  addPlan(planData)
  ElMessage.success('攻略已保存到我的收藏！')
  router.push('/favorites')
}

const gradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
]

function getGradient(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return gradients[Math.abs(hash) % gradients.length]
}

function getEmoji(kind) {
  return kind === 'spot' ? '📍' : '🍽️'
}

function getBudgetLabel(key) {
  const map = { accommodation: '住宿', food: '餐饮', ticket: '门票', transport: '交通', shopping: '购物' }
  return map[key] || key
}
</script>

<style scoped>
.desc { color: var(--text-light); margin-bottom: 16px; }
.form-card { padding: 20px; margin-bottom: 24px; }
.day-card { padding: 16px 18px; margin-bottom: 16px; }
.day-head { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
.day-no { font-weight: 700; font-size: 17px; color: var(--primary-dark); }
.day-title { flex: 1; color: #666; font-size: 14px; }
.day-cost { color: var(--accent); font-weight: 600; }
.item { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-top: 1px dashed #eee; }
.item:first-child { border-top: none; }
.item-thumb { width: 60px; height: 60px; flex-shrink: 0; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.item-emoji { font-size: 28px; }
.item-info { flex: 1; display: flex; flex-direction: column; gap: 4px; }
.badge { font-size: 11px; padding: 2px 8px; border-radius: 8px; color: #fff; width: fit-content; }
.badge.spot { background: var(--primary); }
.badge.food { background: var(--accent); }
.item-name { font-weight: 600; font-size: 15px; }
.item-meta { display: flex; gap: 12px; font-size: 13px; color: var(--text-light); }
.rating { color: var(--accent); }
.tips-inline { color: #faad14; }
.total { padding: 20px; text-align: center; }
.total-info { margin-bottom: 12px; font-size: 16px; }
.total-amount { font-size: 24px; color: #f56c6c; margin-left: 8px; }
.total-detail { display: flex; justify-content: center; gap: 8px; margin-bottom: 12px; flex-wrap: wrap; }
.plan-tips { background: #fff9e6; padding: 12px; border-radius: 8px; text-align: left; }
.tips-title { font-weight: 600; margin-right: 8px; }
.tip-tag { display: inline-block; margin: 2px 4px 0 0; font-size: 13px; color: #666; }
.weather-info-inline { display: flex; align-items: center; gap: 8px; }
.w-temp { font-weight: bold; color: #667eea; font-size: 16px; }
.w-text { color: #666; }
.no-weather { color: #999; font-size: 13px; }
</style>
