<template>
  <div class="container">
    <h2 class="section-title"><el-icon><Location /></el-icon> 选择城市</h2>

    <div class="filter-bar">
      <el-radio-group v-model="region" size="small">
        <el-radio-button label="全部">全部</el-radio-button>
        <el-radio-button v-for="r in regions" :key="r" :label="r">{{ r }}</el-radio-button>
      </el-radio-group>
      <el-input v-model="kw" placeholder="搜索城市名 / 省份" size="small" class="search" clearable>
        <template #prefix><el-icon><Search /></el-icon></template>
      </el-input>
    </div>

    <div class="grid grid-cols-4">
      <router-link v-for="c in filtered" :key="c.id" :to="`/city/${c.id}`" class="card city-card">
        <div class="city-cover" :style="{ background: getGradient(c.name) }">
          <span class="city-emoji">{{ getEmoji(c.name) }}</span>
          <span class="region-badge">{{ c.region }}</span>
        </div>
        <div class="city-body">
          <div class="name-row">
            <h3>{{ c.name }}</h3>
            <span class="prov">{{ c.province }}</span>
          </div>
          <p class="slogan">{{ c.slogan }}</p>
          <p class="intro">{{ c.intro }}</p>
        </div>
      </router-link>
    </div>

    <el-empty v-if="!filtered.length" description="没有找到匹配的城市" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ImgBox from '../components/ImgBox.vue'
import { cities, regions as cityRegions } from '../data/cities'

const regions = ['华北', '华东', '华南', '西北', '西南', '东南', '东北', '华中']
const region = ref('全部')
const kw = ref('')

const gradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
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

const filtered = computed(() => {
  const q = kw.value.trim().toLowerCase()
  return cities.filter(c => {
    const okRegion = region.value === '全部' || c.region === region.value
    const okKw = !q || c.name.toLowerCase().includes(q) || c.province.toLowerCase().includes(q)
    return okRegion && okKw
  })
})
</script>

<style scoped>
.filter-bar { display: flex; gap: 16px; align-items: center; margin-bottom: 24px; flex-wrap: wrap; }
.search { width: 260px; }

.city-cover {
  position: relative;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.city-emoji {
  font-size: 64px;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
}
.region-badge {
  position: absolute; top: 12px; left: 12px;
  background: rgba(255,255,255,0.9); backdrop-filter: blur(8px);
  color: var(--primary-dark); font-size: 12px; font-weight: 600;
  padding: 4px 12px; border-radius: 12px; z-index: 2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.city-body { padding: 14px 16px; }
.name-row { display: flex; align-items: baseline; justify-content: space-between; }
.name-row h3 { font-size: 18px; }
.prov { color: var(--text-light); font-size: 13px; }
.slogan { color: var(--primary-dark); font-size: 13px; margin: 4px 0 6px; font-weight: 500; }
.intro { color: var(--text-light); font-size: 13px;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
</style>
