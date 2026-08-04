<template>
  <div class="container fav-page">
    <h2 class="section-title"><el-icon><Star /></el-icon> 我的收藏</h2>
    <p class="desc">收藏和攻略保存在本浏览器本地，不会上传服务器。</p>

    <!-- My Plans Section -->
    <div class="plans-section" v-if="plans.length">
      <h3 class="section-title">📋 我的攻略（{{ plans.length }}）</h3>
      <div class="plans-grid">
        <div v-for="plan in plans" :key="plan.id" class="plan-card" @click="goPlan(plan.id)">
          <div class="plan-cover" :style="{ background: getGradient(plan.cityName || '旅行') }">
            <span class="plan-emoji">{{ getEmoji(plan.cityName || '旅行') }}</span>
          </div>
          <div class="plan-info">
            <h4>{{ plan.cityName }} {{ plan.days }}日游</h4>
            <p class="plan-style">
              <el-tag size="small" effect="plain">{{ plan.style || '休闲' }}</el-tag>
              <span class="plan-date">{{ formatDate(plan.createdAt) }}</span>
            </p>
            <p class="plan-budget">预算约 ¥{{ totalBudget(plan) }}</p>
          </div>
          <div class="plan-actions">
            <el-button type="primary" size="small" @click.stop="goPlan(plan.id)">查看攻略</el-button>
            <el-button type="danger" size="small" text @click.stop="deletePlan(plan.id)">删除</el-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Favorites Section -->
    <div class="favs-section">
      <h3 class="section-title">❤️ 我的收藏（{{ totalFavCount }}）</h3>

      <el-empty v-if="totalFavCount === 0" description="还没有收藏，去探索页发现喜欢的城市和景点吧！">
        <el-button type="primary" @click="$router.push('/explore')">去探索</el-button>
      </el-empty>

      <div v-else class="groups">
        <div v-for="g in groups" :key="g.type" class="group">
          <h4 class="group-title">{{ g.label }}（{{ g.items.length }}）</h4>
          <div class="grid grid-cols-3">
            <div v-for="f in g.items" :key="f.id" class="card fav-card">
              <div class="fav-cover" :style="{ background: getFavGradient(f.name) }">
                <span class="fav-emoji">{{ getFavEmoji(f.name, f.type) }}</span>
              </div>
              <div class="fav-body">
                <h4>{{ f.name }}</h4>
                <p v-if="f.cityName" class="sub">{{ f.cityName }}</p>
                <p v-else-if="f.desc" class="sub desc-text">{{ f.desc }}</p>
                <div class="fav-actions">
                  <router-link v-if="f.type === 'city'" :to="`/city/${f.id}`" class="view-link">查看 →</router-link>
                  <router-link v-else-if="f.type === 'spot'" :to="`/spot/${f.id}`" class="view-link">查看 →</router-link>
                  <el-button text type="danger" size="small" @click="removeFav(f)">取消收藏</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Star } from '@element-plus/icons-vue'
import { useFavorites } from '../composables/useFavorites'
import { getCity, getCityByName } from '../data/cities'
import { getSpot } from '../data/spots'

const router = useRouter()
const { state, removeFavorite, getPlans } = useFavorites()

const plans = computed(() => getPlans())

const totalFavCount = computed(() => {
  const s = state.value
  return (s.cities?.length || 0) + (s.spots?.length || 0) + (s.foods?.length || 0)
})

const groups = computed(() => {
  const s = state.value
  const defs = [
    { type: 'cities', label: '城市', ids: s.cities || [], data: s.cities_data || {} },
    { type: 'spots', label: '景点', ids: s.spots || [], data: s.spots_data || {} },
    { type: 'foods', label: '美食', ids: s.foods || [], data: s.foods_data || {} }
  ]

  return defs.map(d => ({
    type: d.type,
    label: d.label,
    items: d.ids.map(id => {
      const data = d.data[id]
      if (data) {
        return { ...data, id, type: d.type.replace('s', '') }
      }
      return null
    }).filter(Boolean)
  })).filter(g => g.items.length)
})

function removeFav(f) {
  const type = f.type === 'city' ? 'cities' : f.type + 's'
  removeFavorite(type, f.id)
}

function goPlan(id) {
  router.push(`/plan-detail/${id}`)
}

function deletePlan(id) {
  if (confirm('确定删除这个攻略吗？')) {
    const { removePlan } = useFavorites()
    removePlan(id)
  }
}

function totalBudget(plan) {
  if (!plan.budget) return 0
  return Object.values(plan.budget).reduce((s, v) => s + v, 0)
}

function formatDate(iso) {
  const d = new Date(iso)
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
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

function getFavGradient(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return gradients[Math.abs(hash) % gradients.length]
}

function getFavEmoji(name, type) {
  if (type === 'city') return getEmoji(name)
  if (type === 'spot') return '📍'
  if (type === 'food') return '🍽️'
  return '⭐'
}
</script>

<style scoped>
.fav-page { padding: 24px 16px; }
.desc { color: var(--text-light); margin-bottom: 16px; }

.plans-section { margin-bottom: 40px; }
.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
}
.plan-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}
.plan-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}
.plan-cover {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.plan-emoji { font-size: 48px; }
.plan-info { padding: 16px; flex: 1; }
.plan-info h4 { margin: 0 0 8px; font-size: 18px; }
.plan-style { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px; color: #666; }
.plan-date { color: #999; font-size: 12px; }
.plan-budget { color: #667eea; font-weight: 600; margin: 0; }
.plan-actions { display: flex; gap: 8px; padding: 0 16px 16px; }

.groups { display: flex; flex-direction: column; gap: 24px; }
.group-title {
  font-size: 16px;
  color: var(--primary-dark);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.group-title::before {
  content: '';
  width: 4px;
  height: 16px;
  background: var(--primary);
  border-radius: 2px;
}
.fav-card { overflow: hidden; }
.fav-cover {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fav-emoji { font-size: 48px; }
.fav-body { padding: 12px 14px; }
.fav-body h4 { font-size: 15px; margin: 0 0 4px; }
.sub { color: var(--text-light); font-size: 13px; margin: 0; }
.desc-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.fav-actions { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; }
.view-link { color: var(--primary); font-size: 13px; font-weight: 600; }
</style>
