<template>
  <div class="plan-detail-page">
    <div v-if="!plan" class="empty-state">
      <el-empty description="攻略不存在" />
      <el-button type="primary" @click="$router.push('/favorites')">返回我的收藏</el-button>
    </div>

    <div v-else>
      <div class="plan-header">
        <div class="plan-cover" :style="{ background: getGradient(plan.cityName || '旅行') }">
          <span class="plan-emoji">{{ getEmoji(plan.cityName || '旅行') }}</span>
        </div>
        <div class="plan-info">
          <h1>{{ plan.cityName }} {{ plan.days }}日游</h1>
          <p class="plan-meta">
            <el-tag size="small" effect="plain">{{ plan.style || '休闲' }}</el-tag>
            <span class="plan-date">{{ formatDate(plan.createdAt) }}</span>
          </p>
          <div class="plan-actions">
            <el-button type="primary" @click="startNav">开始导航</el-button>
            <el-button @click="exportPlan">导出攻略</el-button>
            <el-button type="danger" @click="deletePlan">删除</el-button>
          </div>
        </div>
      </div>

      <div class="plan-content">
        <div class="weather-section" v-if="weather.now">
          <h3>🌤️ 天气预报</h3>
          <div class="weather-now">
            <div class="weather-icon">{{ getWeatherEmoji(weather.now.text) }}</div>
            <div class="weather-info">
              <div class="weather-temp">{{ weather.now.temp }}°C</div>
              <div class="weather-text">{{ weather.now.text }}</div>
              <div class="weather-detail">
                <span>💨 {{ weather.now.windDir }} {{ weather.now.windScale }}级</span>
                <span>💧 湿度 {{ weather.now.humidity }}%</span>
              </div>
            </div>
          </div>
          <div class="weather-tips" v-if="weatherTips.length">
            <div v-for="(tip, i) in weatherTips" :key="i" class="tip">{{ tip }}</div>
          </div>
        </div>

        <div class="days-section">
          <h3>📅 行程安排</h3>
          <div class="day-list">
            <div v-for="(day, idx) in plan.dayPlans || plan.days" :key="idx" class="day-item">
              <div class="day-header">
                <span class="day-num">Day {{ idx + 1 }}</span>
                <span class="day-title">{{ day.title }}</span>
              </div>
              <div class="day-content">
                <div v-for="(item, i) in day.items" :key="i" class="day-item-card">
                  <el-icon class="item-icon" :size="20">
                    <component :is="item.type === 'spot' ? 'LocationFilled' : (item.type === 'food' ? 'Food' : 'Goods')" />
                  </el-icon>
                  <div class="item-info">
                    <div class="item-name">{{ item.name }}</div>
                    <div class="item-desc" v-if="item.desc">{{ item.desc }}</div>
                    <div class="item-time" v-if="item.time">⏰ {{ item.time }}</div>
                  </div>
                  <el-button
                    v-if="item.cityId"
                    size="small"
                    link
                    type="primary"
                    @click="goDetail(item)"
                  >查看详情</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="budget-section" v-if="plan.budget">
          <h3>💰 预算参考</h3>
          <div class="budget-list">
            <div v-for="(item, key) in plan.budget" :key="key" class="budget-item">
              <span class="budget-label">{{ getBudgetLabel(key) }}</span>
              <span class="budget-value">¥{{ item }}</span>
            </div>
          </div>
          <div class="budget-total">
            总计：<span class="total-value">¥{{ totalBudget }}</span>
          </div>
        </div>

        <div class="tips-section" v-if="plan.tips?.length">
          <h3>💡 实用贴士</h3>
          <div class="tips-list">
            <div v-for="(tip, i) in plan.tips" :key="i" class="tip-item">
              {{ tip }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { LocationFilled, Food, Goods } from '@element-plus/icons-vue'
import { useFavorites } from '../composables/useFavorites'
import { useWeather } from '../composables/useWeather'
import { getCity, getCityByName } from '../data/cities'

const route = useRoute()
const router = useRouter()
const { getPlans, removePlan } = useFavorites()
const { now, weatherTips, fetchWeather } = useWeather()

const plan = ref(null)

const weather = computed(() => ({ now: now.value }))

const totalBudget = computed(() => {
  if (!plan.value?.budget) return 0
  return Object.values(plan.value.budget).reduce((sum, v) => sum + v, 0)
})

onMounted(() => {
  const plans = getPlans()
  plan.value = plans.find(p => p.id === route.params.planId)
  if (plan.value?.cityName) {
    fetchWeather(plan.value.cityName)
  }
})

function formatDate(iso) {
  const d = new Date(iso)
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
}

function startNav() {
  router.push(`/city/${plan.value.cityId}`)
}

function exportPlan() {
  const text = generateText()
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${plan.value.cityName}攻略.txt`
  a.click()
  URL.revokeObjectURL(url)
}

function generateText() {
  let text = `${plan.value.cityName} ${plan.value.days}日游攻略\n\n`
  text += `生成日期：${formatDate(plan.value.createdAt)}\n`
  text += `风格：${plan.value.style}\n\n`
  text += '行程安排：\n'
  plan.value.days.forEach((day, idx) => {
    text += `\nDay ${idx+1} - ${day.title}\n`
    day.items.forEach(item => {
      text += `  • ${item.name}${item.time ? ` (${item.time})` : ''}\n`
    })
  })
  if (plan.value.budget) {
    text += '\n预算：\n'
    Object.entries(plan.value.budget).forEach(([k,v]) => {
      text += `${getBudgetLabel(k)}：¥${v}\n`
    })
    text += `总计：¥${totalBudget.value}\n`
  }
  return text
}

function deletePlan() {
  if (confirm('确定删除这个攻略吗？')) {
    removePlan(plan.value.id)
    router.push('/favorites')
  }
}

function goDetail(item) {
  if (item.cityId && item.type === 'spot') {
    router.push(`/spot/${item.id}`)
  } else if (item.cityId) {
    router.push(`/city/${item.cityId}`)
  }
}

function getBudgetLabel(key) {
  const map = { accommodation: '住宿', food: '餐饮', ticket: '门票', transport: '交通', shopping: '购物' }
  return map[key] || key
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

function getEmoji(name) {
  const map = {
    '北京': '🏯', '上海': '🌃', '广州': '🌴', '深圳': '🏙️', '成都': '🐼',
    '杭州': '🏞️', '西安': '🏛️', '重庆': '🌉', '苏州': '🏮', '南京': '⛩️',
    '厦门': '🏖️', '三亚': '🌊', '丽江': '🏔️', '大理': '⛰️', '昆明': '🌸',
    '青岛': '⚓', '哈尔滨': '❄️', '张家界': '🗻', '桂林': '⛰️', '九寨沟': '🌲'
  }
  return map[name] || '📍'
}

function getWeatherEmoji(text) {
  if (!text) return '☀️'
  if (/晴/.test(text)) return '☀️'
  if (/多云|阴/.test(text)) return '⛅'
  if (/雨/.test(text)) return '🌧️'
  if (/雪/.test(text)) return '❄️'
  if (/雾|霾/.test(text)) return '🌫️'
  return '🌤️'
}
</script>

<style scoped>
.plan-detail-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 16px;
}

.plan-header {
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.plan-cover {
  width: 200px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.plan-emoji {
  font-size: 80px;
}

.plan-info {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.plan-info h1 {
  margin: 0 0 12px;
  font-size: 28px;
}

.plan-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #666;
  margin: 0 0 16px;
}

.plan-actions {
  display: flex;
  gap: 12px;
}

.plan-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.weather-section, .days-section, .budget-section, .tips-section {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}

.weather-section h3, .days-section h3, .budget-section h3, .tips-section h3 {
  margin: 0 0 16px;
  font-size: 20px;
}

.weather-now {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  color: white;
}

.weather-icon {
  font-size: 64px;
}

.weather-temp {
  font-size: 48px;
  font-weight: bold;
}

.weather-text {
  font-size: 18px;
  opacity: 0.9;
}

.weather-detail {
  display: flex;
  gap: 16px;
  margin-top: 8px;
  font-size: 14px;
  opacity: 0.8;
}

.weather-tips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.tip {
  padding: 6px 12px;
  background: #f0f7ff;
  border-radius: 20px;
  font-size: 13px;
  color: #1d7cf3;
}

.day-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.day-item {
  border-left: 4px solid #667eea;
  padding-left: 16px;
}

.day-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.day-num {
  background: #667eea;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
}

.day-title {
  font-weight: 600;
  color: #333;
}

.day-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.day-item-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: #f8f9fb;
  border-radius: 8px;
}

.item-icon {
  color: #667eea;
  flex-shrink: 0;
}

.item-info {
  flex: 1;
}

.item-name {
  font-weight: 600;
  font-size: 15px;
}

.item-desc {
  font-size: 13px;
  color: #666;
  margin-top: 2px;
}

.item-time {
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}

.budget-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.budget-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #f8f9fb;
  border-radius: 8px;
}

.budget-label {
  color: #666;
}

.budget-value {
  font-weight: 600;
  color: #667eea;
}

.budget-total {
  text-align: right;
  padding-top: 12px;
  border-top: 2px solid #f0f0f0;
  font-size: 18px;
}

.total-value {
  font-size: 24px;
  color: #f56c6c;
  font-weight: bold;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tip-item {
  padding: 12px;
  background: #fff9e6;
  border-radius: 8px;
  border-left: 3px solid #faad14;
  font-size: 14px;
  color: #666;
}

.empty-state {
  text-align: center;
  padding: 100px 0;
}
</style>
