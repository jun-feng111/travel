<template>
  <div class="cities-page">
    <div class="page-hero">
      <div class="hero-bg"></div>
      <div class="container hero-content">
        <h1>选择你的目的地</h1>
        <p>浏览全国热门城市，开启专属你的旅行体验</p>
      </div>
    </div>

    <div class="container">
      <div class="filter-bar">
        <div class="region-tabs">
          <div
            class="region-tab"
            :class="{ active: region === '全部' }"
            @click="region = '全部'"
          >全部</div>
          <div
            v-for="r in availableRegions"
            :key="r"
            class="region-tab"
            :class="{ active: region === r }"
            @click="region = region === r ? '全部' : r"
          >{{ r }}</div>
        </div>
        <el-input
          v-model="kw"
          placeholder="搜索城市名 / 省份"
          size="large"
          class="search-input"
          clearable
        >
          <template #prefix><el-icon><Search /></el-icon></template>
        </el-input>
      </div>

      <div class="city-grid">
        <router-link
          v-for="c in filtered"
          :key="c.id"
          :to="`/city/${c.id}`"
          class="city-card"
        >
          <div class="city-cover">
            <ImgBox :src="getCityImg(c)" :alt="c.name" height="200px" :overlay="true" />
            <div class="city-tags">
              <span class="region-badge">{{ c.region }}</span>
              <span class="prov-badge">{{ c.province }}</span>
            </div>
          </div>
          <div class="city-body">
            <h3>{{ c.name }}</h3>
            <p class="slogan">{{ c.slogan }}</p>
            <p class="intro">{{ c.intro }}</p>
          </div>
        </router-link>
      </div>

      <el-empty v-if="!filtered.length" description="没有找到匹配的城市">
        <el-button type="primary" @click="resetFilter">清除筛选</el-button>
      </el-empty>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search } from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { getCityImage } from '../composables/useImageSource'
import { cityHelpers } from '../data/index'

const region = ref('全部')
const kw = ref('')

const availableRegions = computed(() => {
  return [...new Set(cityHelpers['getRegions'] ? cityHelpers.getRegions() : [])]
})

const filtered = computed(() => {
  const q = kw.value.trim().toLowerCase()
  const all = region.value === '全部'
    ? (cityHelpers.findAll ? cityHelpers.findAll() : [])
    : (cityHelpers.filterByRegion ? cityHelpers.filterByRegion(region.value) : [])
  if (!q) return all
  return all.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.province.toLowerCase().includes(q) ||
    c.slogan.toLowerCase().includes(q)
  )
})

function getCityImg(city) {
  return getCityImage(city)
}

function resetFilter() {
  region.value = '全部'
  kw.value = ''
}
</script>

<style scoped>
.cities-page { padding-bottom: 60px; }

.page-hero {
  position: relative;
  padding: 60px 0 40px;
  overflow: hidden;
  text-align: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1f9e8f 0%, #14746a 50%, #0d5c55 100%);
}

.hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.4;
}

.hero-content { position: relative; z-index: 1; color: #fff; }
.hero-content h1 {
  font-size: 36px;
  font-weight: 800;
  margin: 0 0 8px;
}
.hero-content p {
  font-size: 16px;
  opacity: 0.9;
  margin: 0;
}

.filter-bar {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 30px 0 24px;
  flex-wrap: wrap;
}

.region-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.region-tab {
  padding: 8px 18px;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #555;
  transition: all 0.25s ease;
}

.region-tab:hover {
  background: #edf2f7;
  transform: translateY(-2px);
}

.region-tab.active {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(31, 158, 143, 0.3);
}

.search-input { width: 280px; }

.city-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.city-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(20, 60, 60, 0.08);
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-decoration: none;
  color: inherit;
  display: block;
}

.city-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(20, 60, 60, 0.15);
}

.city-cover {
  position: relative;
}

.city-tags {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 8px;
  z-index: 2;
}

.region-badge {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  color: var(--primary-dark);
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
}

.prov-badge {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  color: #555;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 10px;
}

.city-body { padding: 16px 18px; }

.city-body h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-dark);
  margin: 0 0 6px;
}

.slogan {
  font-size: 13px;
  color: var(--primary);
  font-weight: 500;
  margin: 0 0 6px;
}

.intro {
  font-size: 13px;
  color: var(--text-light);
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {
  .hero-content h1 { font-size: 28px; }
  .search-input { width: 100%; }
  .filter-bar { flex-direction: column; align-items: stretch; }
}
</style>
