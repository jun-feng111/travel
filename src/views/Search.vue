<template>
  <div class="search-page">
    <div class="search-hero">
      <div class="container">
        <h1 class="hero-title">发现你的下一段旅程</h1>
        <p class="hero-sub">搜索城市、景点、美食和攻略，开启精彩旅程</p>
        <div class="search-box">
          <el-input
            v-model="kw"
            placeholder="输入城市、景点、美食或攻略关键词..."
            size="large"
            class="search-input"
            @keyup.enter="doSearch"
          >
            <template #prefix><el-icon><Search /></el-icon></template>
            <template #append>
              <el-button @click="doSearch" class="search-btn">搜索</el-button>
            </template>
          </el-input>
        </div>

        <div class="tabs-row" v-if="hasSearched">
          <div
            v-for="tab in tabs"
            :key="tab.key"
            class="tab"
            :class="{ active: activeTab === tab.key }"
            @click="activeTab = tab.key"
          >
            <span class="tab-icon">{{ tab.icon }}</span>
            <span class="tab-label">{{ tab.label }}</span>
            <span class="tab-count" v-if="getTabCount(tab.key) > 0">{{ getTabCount(tab.key) }}</span>
          </div>
        </div>

        <div class="filters-row" v-if="hasSearched && activeTab === 'city'">
          <span class="filter-label">区域筛选:</span>
          <el-tag
            v-for="r in regionOptions"
            :key="r"
            :type="activeRegion === r ? 'primary' : 'info'"
            effect="plain"
            class="filter-tag"
            @click="activeRegion = activeRegion === r ? '' : r"
          >{{ r }}</el-tag>
        </div>

        <div class="filters-row" v-if="hasSearched && activeTab === 'food'">
          <span class="filter-label">类型筛选:</span>
          <el-tag
            v-for="t in foodTypeOptions"
            :key="t"
            :type="activeFoodType === t ? 'primary' : 'info'"
            effect="plain"
            class="filter-tag"
            @click="activeFoodType = activeFoodType === t ? '' : t"
          >{{ t }}</el-tag>
        </div>

        <div class="filters-row" v-if="hasSearched && activeTab === 'spot'">
          <span class="filter-label">标签筛选:</span>
          <el-tag
            v-for="t in spotTagOptions"
            :key="t"
            :type="activeSpotTag === t ? 'primary' : 'info'"
            effect="plain"
            class="filter-tag"
            @click="activeSpotTag = activeSpotTag === t ? '' : t"
          >{{ t }}</el-tag>
        </div>
      </div>
    </div>

    <div class="container" v-if="hasSearched">
      <div class="results-area">
        <template v-if="activeTab === 'all' || activeTab === 'city'">
          <section v-if="filteredCities.length" class="result-section">
            <h3 class="section-heading">
              <span class="heading-dot"></span>
              城市 <span class="heading-count">{{ filteredCities.length }}</span>
            </h3>
            <div class="results-grid grid-cols-4">
              <router-link
                v-for="c in filteredCities"
                :key="c.id"
                :to="`/city/${c.id}`"
                class="result-card city-card"
              >
                <div class="card-cover">
                  <ImgBox :src="getCityImg(c)" :alt="c.name" height="180px" :overlay="true" />
                  <div class="cover-badge">{{ c.region }}</div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">{{ c.name }}</h4>
                  <p class="card-slogan">{{ c.slogan }}</p>
                  <div class="card-meta">
                    <span>📍 {{ c.province }}</span>
                  </div>
                </div>
              </router-link>
            </div>
          </section>
        </template>

        <template v-if="activeTab === 'all' || activeTab === 'spot'">
          <section v-if="filteredSpots.length" class="result-section">
            <h3 class="section-heading">
              <span class="heading-dot"></span>
              景点 <span class="heading-count">{{ filteredSpots.length }}</span>
            </h3>
            <div class="results-grid grid-cols-3">
              <router-link
                v-for="s in filteredSpots"
                :key="s.id"
                :to="`/spot/${s.id}`"
                class="result-card spot-card"
              >
                <div class="card-cover">
                  <ImgBox :src="getSpotImg(s)" :alt="s.name" height="180px" :overlay="true" />
                  <div class="cover-rating">★ {{ s.rating }}</div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">{{ s.name }}</h4>
                  <p class="card-desc">{{ s.intro }}</p>
                  <div class="card-tags">
                    <span v-for="t in (s.tags || []).slice(0, 2)" :key="t" class="mini-tag">{{ t }}</span>
                  </div>
                </div>
              </router-link>
            </div>
          </section>
        </template>

        <template v-if="activeTab === 'all' || activeTab === 'food'">
          <section v-if="filteredFoods.length" class="result-section">
            <h3 class="section-heading">
              <span class="heading-dot"></span>
              美食 <span class="heading-count">{{ filteredFoods.length }}</span>
            </h3>
            <div class="results-grid grid-cols-3">
              <div
                v-for="f in filteredFoods"
                :key="f.id"
                class="result-card food-card"
              >
                <div class="card-cover">
                  <ImgBox :src="getFoodImg(f)" :alt="f.name" height="180px" :overlay="true" />
                  <div class="cover-type">{{ f.type }}</div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">{{ f.name }}</h4>
                  <p class="card-desc">{{ f.desc }}</p>
                  <div class="card-meta">
                    <span>💰 {{ f.priceRange }}</span>
                    <span class="rating-sm">★ {{ f.rating }}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </template>

        <template v-if="activeTab === 'all' || activeTab === 'guide'">
          <section v-if="filteredGuides.length" class="result-section">
            <h3 class="section-heading">
              <span class="heading-dot"></span>
              攻略 <span class="heading-count">{{ filteredGuides.length }}</span>
            </h3>
            <div class="results-grid grid-cols-2">
              <router-link
                v-for="g in filteredGuides"
                :key="g.id"
                :to="`/guide/${g.id}`"
                class="result-card guide-card"
              >
                <div class="card-cover">
                  <ImgBox :src="getGuideImg(g)" :alt="g.title" height="200px" :overlay="true" />
                  <div class="cover-days">{{ g.days }}天</div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">{{ g.title }}</h4>
                  <p class="card-desc">{{ g.summary }}</p>
                  <div class="card-meta">
                    <span>💰 ¥{{ g.budget?.min }}-{{ g.budget?.max }}</span>
                    <span class="dot-sep">·</span>
                    <span>{{ g.days }}天行程</span>
                  </div>
                </div>
              </router-link>
            </div>
          </section>
        </template>

        <el-empty v-if="!hasAnyResult" description="没有找到相关内容，换个关键词试试">
          <el-button type="primary" @click="resetSearch">清除搜索</el-button>
        </el-empty>
      </div>
    </div>

    <div class="empty-state" v-else>
      <div class="empty-icon">🔍</div>
      <h3>搜索你想要的旅行内容</h3>
      <p>试试搜索城市名、景点类型、美食关键词等</p>
      <div class="suggestions">
        <span class="suggestion-tag" @click="quickSearch('成都')">🐼 成都</span>
        <span class="suggestion-tag" @click="quickSearch('杭州')">🏞️ 杭州</span>
        <span class="suggestion-tag" @click="quickSearch('北京')">🏯 北京</span>
        <span class="suggestion-tag" @click="quickSearch('美食')">🍜 美食</span>
        <span class="suggestion-tag" @click="quickSearch('攻略')">📋 攻略</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { getCityImage, getSpotImage, getFoodImage, getGuideImage } from '../composables/useImageSource'
import {
  cityHelpers,
  spotHelpers,
  foodHelpers,
  guideHelpers,
  cities
} from '../data/index'

const route = useRoute()
const router = useRouter()

const kw = ref(route.query.q || '')
const activeTab = ref('all')
const activeRegion = ref('')
const activeFoodType = ref('')
const activeSpotTag = ref('')
const hasSearched = ref(false)

const tabs = [
  { key: 'all', label: '全部', icon: '🌍' },
  { key: 'city', label: '城市', icon: '🏙️' },
  { key: 'spot', label: '景点', icon: '📍' },
  { key: 'food', label: '美食', icon: '🍽️' },
  { key: 'guide', label: '攻略', icon: '📋' }
]

const searchResults = ref({ cities: [], spots: [], foods: [], guides: [] })

function doSearch() {
  const q = kw.value.trim()
  if (!q) {
    hasSearched.value = false
    return
  }
  hasSearched.value = true
  searchResults.value = {
    cities: cityHelpers.search(q),
    spots: spotHelpers.search(q),
    foods: foodHelpers.search(q),
    guides: guideHelpers.search(q)
  }
}

function resetSearch() {
  kw.value = ''
  hasSearched.value = false
  activeTab.value = 'all'
  activeRegion.value = ''
  activeFoodType.value = ''
  activeSpotTag.value = ''
}

function quickSearch(q) {
  kw.value = q
  doSearch()
}

const filteredCities = computed(() => {
  let list = searchResults.value.cities
  if (activeRegion.value) {
    list = list.filter(c => c.region === activeRegion.value)
  }
  return list
})

const filteredSpots = computed(() => {
  let list = searchResults.value.spots
  if (activeSpotTag.value) {
    list = list.filter(s => (s.tags || []).includes(activeSpotTag.value))
  }
  return list
})

const filteredFoods = computed(() => {
  let list = searchResults.value.foods
  if (activeFoodType.value) {
    list = list.filter(f => f.type === activeFoodType.value)
  }
  return list
})

const filteredGuides = computed(() => searchResults.value.guides)

const regionOptions = computed(() => {
  const set = new Set()
  searchResults.value.cities.forEach(c => set.add(c.region))
  return [...set]
})

const foodTypeOptions = computed(() => {
  const set = new Set()
  searchResults.value.foods.forEach(f => set.add(f.type))
  return [...set]
})

const spotTagOptions = computed(() => {
  const set = new Set()
  searchResults.value.spots.forEach(s => (s.tags || []).forEach(t => set.add(t)))
  return [...set]
})

const hasAnyResult = computed(() => {
  return filteredCities.value.length || filteredSpots.value.length ||
    filteredFoods.value.length || filteredGuides.value.length
})

function getTabCount(key) {
  switch (key) {
    case 'city': return filteredCities.value.length
    case 'spot': return filteredSpots.value.length
    case 'food': return filteredFoods.value.length
    case 'guide': return filteredGuides.value.length
    case 'all': return filteredCities.value.length + filteredSpots.value.length +
      filteredFoods.value.length + filteredGuides.value.length
    default: return 0
  }
}

function getCityImg(city) {
  return getCityImage(city)
}

function getSpotImg(spot) {
  return getSpotImage(spot)
}

function getFoodImg(food) {
  const city = food.cityId ? cityHelpers.findById(food.cityId) : null
  return getFoodImage(food, city)
}

function getGuideImg(guide) {
  const city = guide.cityId ? cityHelpers.findById(guide.cityId) : null
  return getGuideImage(guide, city)
}

if (kw.value) {
  doSearch()
}
</script>

<style scoped>
.search-page { padding-bottom: 60px; }

.search-hero {
  background: linear-gradient(135deg, #1f9e8f 0%, #14746a 50%, #0d5c55 100%);
  padding: 50px 0 30px;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.search-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.4;
}

.hero-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
}

.hero-sub {
  font-size: 16px;
  opacity: 0.9;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
}

.search-box {
  max-width: 680px;
  position: relative;
  z-index: 1;
}

.search-input :deep(.el-input__wrapper) {
  border-radius: 12px 0 0 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  height: 50px;
}

.search-input :deep(.el-input__inner) {
  font-size: 15px;
}

.search-btn {
  height: 50px;
  background: linear-gradient(135deg, #f0a830, #e09020) !important;
  color: #fff !important;
  font-weight: 600;
  border: none !important;
  padding: 0 24px !important;
}

.tabs-row {
  display: flex;
  gap: 8px;
  margin-top: 24px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}

.tab:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.tab.active {
  background: #fff;
  color: var(--primary-dark);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.tab-icon { font-size: 16px; }

.tab-count {
  display: inline-block;
  min-width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background: var(--accent);
  color: #fff;
  border-radius: 11px;
  font-size: 12px;
  font-weight: 600;
  padding: 0 6px;
}

.tab.active .tab-count {
  background: var(--primary);
}

.filters-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.filter-label {
  font-size: 13px;
  opacity: 0.8;
  margin-right: 4px;
}

.filter-tag {
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s ease;
}

.filter-tag:hover {
  transform: translateY(-2px);
}

.results-area { padding: 30px 0; }

.result-section { margin-bottom: 36px; }

.section-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-dark);
  margin-bottom: 18px;
}

.heading-dot {
  width: 4px;
  height: 22px;
  background: linear-gradient(180deg, var(--primary-light), var(--primary));
  border-radius: 2px;
}

.heading-count {
  background: var(--accent-soft);
  color: #8a5a18;
  font-size: 13px;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 12px;
}

.results-grid {
  display: grid;
  gap: 20px;
}

.result-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(20, 60, 60, 0.08);
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(20, 60, 60, 0.04);
}

.result-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(20, 60, 60, 0.15);
}

.card-cover {
  position: relative;
  overflow: hidden;
}

.card-cover::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 50%);
  pointer-events: none;
}

.cover-badge,
.cover-rating,
.cover-type,
.cover-days {
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(6px);
  font-size: 12px;
  font-weight: 600;
}

.cover-badge {
  top: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary-dark);
  padding: 4px 12px;
  border-radius: 14px;
}

.cover-rating {
  top: 10px;
  right: 10px;
  background: rgba(240, 168, 48, 0.9);
  color: #fff;
  padding: 4px 10px;
  border-radius: 14px;
}

.cover-type {
  top: 10px;
  left: 10px;
  background: rgba(31, 158, 143, 0.9);
  color: #fff;
  padding: 4px 12px;
  border-radius: 14px;
}

.cover-days {
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary-dark);
  padding: 4px 12px;
  border-radius: 14px;
}

.card-body {
  padding: 16px 18px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin: 0;
}

.card-slogan {
  font-size: 13px;
  color: var(--text-light);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-desc {
  font-size: 13px;
  color: var(--text-light);
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--text-light);
  margin-top: auto;
}

.card-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.rating-sm {
  color: var(--accent);
  font-weight: 600;
}

.dot-sep {
  opacity: 0.5;
}

.empty-state {
  text-align: center;
  padding: 80px 20px;
}

.empty-icon {
  font-size: 72px;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 22px;
  color: var(--primary-dark);
  margin-bottom: 8px;
}

.empty-state p {
  color: var(--text-light);
  margin-bottom: 24px;
}

.suggestions {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.suggestion-tag {
  display: inline-block;
  padding: 8px 18px;
  background: #fff;
  border: 1px solid var(--primary-light);
  color: var(--primary-dark);
  border-radius: 24px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.25s ease;
  box-shadow: 0 2px 8px rgba(20, 60, 60, 0.06);
}

.suggestion-tag:hover {
  background: var(--primary);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(31, 158, 143, 0.25);
}

@media (max-width: 768px) {
  .hero-title { font-size: 24px; }
  .hero-sub { font-size: 14px; }
  .search-hero { padding: 36px 0 24px; }
  .tab { padding: 8px 14px; font-size: 13px; }
  .section-heading { font-size: 18px; }
}
</style>
