<template>
  <div class="planner-page">
    <div class="page-hero">
      <div class="hero-bg"></div>
      <div class="container hero-content">
        <h1>🗺️ 智能行程规划</h1>
        <p>选择目的地，自动生成每日行程安排</p>
      </div>
    </div>

    <div class="container">
      <div class="form-card">
        <h2 class="card-title">
          <span class="title-bar"></span>
          规划你的旅行
        </h2>
        <el-form :model="form" label-width="100px" class="plan-form">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8">
              <el-form-item label="目的地">
                <el-select v-model="form.cityId" placeholder="选择城市" style="width:100%" filterable>
                  <el-option v-for="c in cities" :key="c.id" :label="c.name" :value="c.id" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="4">
              <el-form-item label="天数">
                <el-input-number v-model="form.days" :min="1" :max="7" style="width:100%" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="4">
              <el-form-item label="风格">
                <el-select v-model="form.style" style="width:100%">
                  <el-option label="休闲" value="休闲" />
                  <el-option label="深度" value="深度" />
                  <el-option label="亲子" value="亲子" />
                  <el-option label="美食" value="美食" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8">
              <el-form-item label="天气">
                <div v-if="weather.now" class="weather-info-inline">
                  <span class="w-icon">{{ getWeatherIcon(weather.now.text) }}</span>
                  <span class="w-temp">{{ weather.now.temp }}°C</span>
                  <span class="w-text">{{ weather.now.text }}</span>
                </div>
                <span v-else class="no-weather">选择城市后自动获取天气</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="每日预算">
            <el-slider v-model="form.budget" :min="100" :max="1000" :step="50" show-input class="budget-slider" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="large" @click="generate" :disabled="!form.cityId">
              <el-icon><MagicStick /></el-icon> 生成行程
            </el-button>
            <el-button v-if="plan.length" size="large" @click="goMap" :disabled="!form.cityId">
              🗺️ 地图查看
            </el-button>
            <el-button v-if="plan.length" type="success" size="large" @click="savePlan">
              💾 保存攻略
            </el-button>
          </el-form-item>
        </el-form>
      </div>

      <div v-if="plan.length" class="result-area">
        <div v-for="d in plan" :key="d.day" class="day-card">
          <div class="day-header">
            <div class="day-badge">Day {{ d.day }}</div>
            <h3 class="day-title">{{ d.title }}</h3>
            <div class="day-cost">约 ¥{{ d.dayCost }}</div>
          </div>
          <div class="day-items">
            <div v-for="(it, i) in d.items" :key="i" class="item-row">
              <div class="item-icon" :class="it.kind">
                <span>{{ it.kind === 'spot' ? '📍' : '🍽️' }}</span>
              </div>
              <div class="item-info">
                <div class="item-top">
                  <router-link
                    v-if="it.kind === 'spot' && it.id"
                    :to="`/spot/${it.id}`"
                    class="item-name"
                  >{{ it.name }}</router-link>
                  <span v-else class="item-name">{{ it.name }}</span>
                  <span v-if="it.rating" class="rating">★ {{ it.rating }}</span>
                </div>
                <div class="item-meta">
                  <span v-if="it.cost" class="cost">💰 ¥{{ it.cost }}</span>
                  <span v-if="it.tips" class="tips-inline">💡 {{ it.tips }}</span>
                </div>
              </div>
              <el-button
                text
                size="small"
                :type="isFav(it.kind + 's', it.id) ? 'warning' : 'default'"
                @click="fav(it)"
              >
                {{ isFav(it.kind + 's', it.id) ? '已收藏' : '收藏' }}
              </el-button>
            </div>
          </div>
        </div>

        <div class="total-card">
          <div class="total-row">
            <div class="total-info">
              <span class="total-label">总预算预估</span>
              <span class="total-amount">¥{{ totalCost }}</span>
            </div>
            <div class="budget-detail">
              <div v-for="(v, k) in budgetBreakdown" :key="k" class="budget-chip">
                {{ getBudgetLabel(k) }}：<strong>¥{{ v }}</strong>
              </div>
            </div>
          </div>
          <div v-if="weatherTips.length" class="plan-tips">
            <span class="tips-title">💡 出行贴士：</span>
            <span v-for="(t, i) in weatherTips" :key="i" class="tip-tag">{{ t }}</span>
          </div>
        </div>
      </div>

      <el-empty v-else-if="generated" description="该城市数据不足，暂无法生成行程" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { MagicStick } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { cities } from '../data/cities'
import { planTrip } from '../data/planner'
import { useFavorites } from '../composables/useFavorites'
import { useWeather } from '../composables/useWeather'

const router = useRouter()
const route = useRoute()
const { isFavorite, toggleFavorite, addPlan, getPlans } = useFavorites()
const { now: weatherNow, weatherTips: weatherTipList, fetchWeather } = useWeather()

const form = reactive({
  cityId: route.query.city || '',
  days: Number(route.query.days) || 3,
  budget: 300,
  style: '休闲'
})

const plan = ref([])
const generated = ref(false)

const weather = computed(() => ({ now: weatherNow.value }))
const weatherTips = computed(() => weatherTipList.value)

watch(() => form.cityId, (id) => {
  if (id) {
    const city = cities.find(c => c.id === id)
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

function generate() {
  const city = cities.find(c => c.id === form.cityId)
  if (!city) return

  fetchWeather(city.name)

  const raw = planTrip({ ...form })
  plan.value = raw.map(d => ({
    ...d,
    title: getDayTitle(d.day, form.style),
    items: d.items.map(it => ({
      ...it,
      faved: isFavorite(it.kind + 's', it.id)
    }))
  }))
  generated.value = true
}

function getDayTitle(day, style) {
  const titles = {
    休闲: ['抵达与城市漫步', '核心景点深度游', '文化体验与美食', '自由活动与购物'],
    深度: ['历史文化探索', '自然景观深度游', '当地生活体验', '小众秘境探访'],
    亲子: ['亲子乐园与互动', '自然科普之旅', '家庭美食时光', '休闲娱乐日'],
    美食: ['必吃美食打卡', '地道小吃探索', '特色餐厅体验', '美食地图收官']
  }
  const dayTitles = titles[style] || titles.休闲
  return dayTitles[(day - 1) % dayTitles.length]
}

function isFav(kind, id) {
  return isFavorite(kind, id)
}

function fav(it) {
  const type = it.kind + 's'
  toggleFavorite(type, it.id, {
    id: it.id,
    name: it.name,
    cover: it.cover,
    desc: it.intro,
    cityId: form.cityId,
    cityName: cities.find(c => c.id === form.cityId)?.name
  })
}

function goMap() {
  router.push(`/map/${form.cityId}`)
}

function savePlan() {
  const city = cities.find(c => c.id === form.cityId)
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

function getBudgetLabel(key) {
  const map = { accommodation: '住宿', food: '餐饮', ticket: '门票', transport: '交通', shopping: '购物' }
  return map[key] || key
}

function getWeatherIcon(text) {
  if (!text) return '☀️'
  if (/晴/.test(text)) return '☀️'
  if (/多云|阴/.test(text)) return '⛅'
  if (/雨/.test(text)) return '🌧️'
  if (/雪/.test(text)) return '❄️'
  return '🌤️'
}
</script>

<style scoped>
.planner-page { padding-bottom: 60px; }

.page-hero {
  position: relative;
  padding: 50px 0 30px;
  text-align: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.4;
}

.hero-content { position: relative; z-index: 1; color: #fff; }
.hero-content h1 { font-size: 32px; font-weight: 800; margin: 0 0 8px; }
.hero-content p { font-size: 16px; opacity: 0.9; margin: 0; }

.form-card {
  background: #fff;
  border-radius: 20px;
  padding: 28px;
  margin: 30px 0;
  box-shadow: 0 8px 32px rgba(20, 60, 60, 0.08);
}

.card-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 700;
  color: var(--primary-dark);
  margin-bottom: 20px;
}

.title-bar {
  width: 4px;
  height: 24px;
  background: linear-gradient(180deg, var(--primary-light), var(--primary));
  border-radius: 2px;
}

.budget-slider { padding: 0 20px; }

.weather-info-inline { display: flex; align-items: center; gap: 8px; }
.w-icon { font-size: 24px; }
.w-temp { font-weight: 700; font-size: 18px; color: var(--primary); }
.w-text { color: var(--text-light); }
.no-weather { color: #999; font-size: 13px; }

.result-area { display: flex; flex-direction: column; gap: 20px; }

.day-card {
  background: #fff;
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 4px 20px rgba(20, 60, 60, 0.06);
  border-left: 4px solid var(--primary);
}

.day-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
  padding-bottom: 14px;
  border-bottom: 2px dashed var(--bg-soft);
}

.day-badge {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 20px;
}

.day-title { font-size: 18px; font-weight: 700; color: var(--text); flex: 1; margin: 0; }
.day-cost { background: var(--accent-soft); color: #8a5a18; font-size: 13px; font-weight: 600; padding: 4px 14px; border-radius: 14px; }

.day-items { display: flex; flex-direction: column; gap: 8px; }

.item-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  background: #f7fafc;
  border-radius: 12px;
}

.item-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}
.item-icon.spot { background: linear-gradient(135deg, var(--primary-light), var(--primary)); }
.item-icon.food { background: linear-gradient(135deg, var(--accent-light), var(--accent)); }

.item-info { flex: 1; min-width: 0; }
.item-top { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
.item-name { font-weight: 600; font-size: 15px; color: var(--text); }
a.item-name { color: var(--primary); text-decoration: none; }
a.item-name:hover { text-decoration: underline; }
.rating { color: var(--accent); font-weight: 600; font-size: 13px; }

.item-meta { display: flex; gap: 12px; font-size: 12px; color: var(--text-light); }
.cost { color: var(--accent); font-weight: 600; }
.tips-inline { color: #faad14; }

.total-card {
  background: linear-gradient(135deg, #fff8ec 0%, #fff3da 100%);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(20, 60, 60, 0.06);
}

.total-row { display: flex; align-items: center; gap: 30px; margin-bottom: 16px; }

.total-info { display: flex; flex-direction: column; }
.total-label { font-size: 14px; color: #8a5a18; margin-bottom: 6px; }
.total-amount { font-size: 36px; font-weight: 800; color: var(--accent); }

.budget-detail { display: flex; flex-wrap: wrap; gap: 8px; }
.budget-chip {
  background: rgba(255, 255, 255, 0.8);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  color: #6b4a18;
}
.budget-chip strong { color: var(--accent); font-weight: 700; }

.plan-tips {
  background: rgba(255, 255, 255, 0.6);
  padding: 14px 16px;
  border-radius: 12px;
}

.tips-title { font-weight: 600; color: #8a5a18; margin-right: 8px; }
.tip-tag {
  display: inline-block;
  margin: 4px 8px 0 0;
  font-size: 13px;
  color: #6b4a18;
}

@media (max-width: 768px) {
  .hero-content h1 { font-size: 26px; }
  .form-card { padding: 20px; }
  .total-row { flex-direction: column; align-items: flex-start; gap: 16px; }
  .day-header { flex-wrap: wrap; }
}
</style>
