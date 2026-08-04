<template>
  <div class="home-view">
    <!-- ===== Hero Section ===== -->
    <section class="hero-section">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-shape shape-1"></div>
        <div class="hero-shape shape-2"></div>
        <div class="hero-shape shape-3"></div>
        <div class="hero-shape shape-4"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          探索 {{ totalCities }}+ 个中国城市
        </div>
        <h1 class="hero-title">
          <span class="title-line">发现中国之美</span>
          <span class="title-accent">启程你的旅行</span>
        </h1>
        <p class="hero-sub">搜索全国城市的景点、美食、攻略，规划你的梦想之旅</p>

        <div class="hero-search">
          <div class="search-box">
            <el-input
              v-model="searchKw"
              size="large"
              placeholder="试试搜索：北京、成都火锅、西湖、故宫..."
              clearable
              class="search-input"
              @keyup.enter="goExplore"
              @input="onSearchInput"
            >
              <template #prefix>
                <el-icon class="search-icon"><Search /></el-icon>
              </template>
              <template #append>
                <button class="search-btn" @click="goExplore">
                  <el-icon><Search /></el-icon>
                  <span>搜索</span>
                </button>
              </template>
            </el-input>

            <transition name="fade">
              <div v-if="showSuggestions && searchSuggestions.length" class="suggestions-panel">
                <div
                  v-for="(s, i) in searchSuggestions"
                  :key="i"
                  class="suggestion-item"
                  @click="selectSuggestion(s)"
                >
                  <span class="suggestion-icon">{{ getSuggestionIcon(s.type) }}</span>
                  <span class="suggestion-text">{{ s.name }}</span>
                  <span class="suggestion-type">{{ getSuggestionLabel(s.type) }}</span>
                </div>
              </div>
            </transition>
          </div>

          <div class="hero-hot">
            <span class="hot-label">热门搜索：</span>
            <el-tag
              v-for="tag in hotTags"
              :key="tag"
              class="hot-tag"
              effect="plain"
              round
              @click="quickSearch(tag)"
            >{{ tag }}</el-tag>
          </div>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-num">{{ totalCities }}</span>
            <span class="stat-label">城市</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">{{ spots.length }}</span>
            <span class="stat-label">景点</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">{{ foods.length }}</span>
            <span class="stat-label">美食</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">{{ guides.length }}</span>
            <span class="stat-label">攻略</span>
          </div>
        </div>

        <div class="hero-actions">
          <router-link to="/explore" class="hero-btn primary">
            <el-icon><Compass /></el-icon>
            开始探索
          </router-link>
          <router-link to="/planner" class="hero-btn ghost">
            <el-icon><Calendar /></el-icon>
            行程规划
          </router-link>
        </div>
      </div>

      <div class="hero-scroll">
        <span>向下滚动</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- ===== 热门区域 ===== -->
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">
          <span class="title-icon">🗺️</span>
          热门区域
        </h2>
        <span class="section-desc">按区域筛选城市，发现不同地域的独特魅力</span>
      </div>
      <div class="region-grid">
        <div
          v-for="r in regionList"
          :key="r.name"
          class="region-card"
          :class="{ active: activeRegion === r.name }"
          @click="activeRegion = activeRegion === r.name ? '' : r.name"
        >
          <div class="region-icon">{{ r.icon }}</div>
          <div class="region-info">
            <h3>{{ r.name }}</h3>
            <span>{{ r.count }} 个城市</span>
          </div>
          <div class="region-arrow">→</div>
        </div>
      </div>
    </section>

    <!-- ===== 精选城市 ===== -->
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">
          <span class="title-icon">⭐</span>
          精选城市
        </h2>
        <router-link to="/cities" class="more-link">查看全部 →</router-link>
      </div>
      <div class="city-grid">
        <router-link
          v-for="c in featuredCities"
          :key="c.id"
          :to="`/city/${c.id}`"
          class="city-card"
        >
          <div class="city-cover">
            <ImgBox
              :src="getCityCoverUrl(c)"
              :alt="c.name"
              height="220px"
              overlay
            />
            <div class="city-tag">{{ c.region }}</div>
            <div class="city-rating">
              <span class="star">★</span>
              {{ getCityRating(c.id) }}
            </div>
          </div>
          <div class="city-body">
            <div class="city-name-row">
              <h3>{{ c.name }}</h3>
              <span class="city-prov">{{ c.province }}</span>
            </div>
            <p class="city-slogan">"{{ c.slogan }}"</p>
          </div>
        </router-link>
      </div>
    </section>

    <!-- ===== 热门攻略 ===== -->
    <section class="section alt-bg">
      <div class="section-head">
        <h2 class="section-title">
          <span class="title-icon">📖</span>
          热门攻略
        </h2>
        <router-link to="/guides" class="more-link">查看全部 →</router-link>
      </div>
      <div class="guide-grid">
        <router-link
          v-for="g in featuredGuides"
          :key="g.id"
          :to="`/guide/${g.id}`"
          class="guide-card"
        >
          <div class="guide-cover">
            <ImgBox
              :src="getGuideCoverUrl(g)"
              :alt="g.title"
              height="180px"
              overlay
            />
            <div class="guide-days">
              <span class="days-num">{{ g.days }}</span>
              <span class="days-label">天</span>
            </div>
          </div>
          <div class="guide-body">
            <div class="guide-tags">
              <span class="guide-city">{{ getCityName(g.cityId) }}</span>
              <span class="guide-budget">💰 {{ formatBudget(g.budget) }}</span>
            </div>
            <h3 class="guide-title">{{ g.title }}</h3>
            <p class="guide-summary">{{ g.summary }}</p>
          </div>
        </router-link>
      </div>
    </section>

    <!-- ===== 景点推荐 ===== -->
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">
          <span class="title-icon">🏛️</span>
          景点推荐
        </h2>
        <router-link to="/explore?tab=spots" class="more-link">查看全部 →</router-link>
      </div>
      <div class="spot-grid">
        <router-link
          v-for="s in topSpots"
          :key="s.id"
          :to="`/spot/${s.id}`"
          class="spot-card"
        >
          <div class="spot-cover">
            <ImgBox
              :src="getSpotCoverUrl(s)"
              :alt="s.name"
              height="160px"
              overlay
            />
            <div class="spot-tags">
              <span v-for="t in s.tags?.slice(0, 2)" :key="t" class="spot-tag">{{ t }}</span>
            </div>
          </div>
          <div class="spot-body">
            <div class="spot-info">
              <h4>{{ s.name }}</h4>
              <span class="spot-city">{{ getCityName(s.cityId) }}</span>
            </div>
            <div class="spot-rating">
              <span class="star">★</span>
              {{ s.rating }}
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <!-- ===== 美食推荐 ===== -->
    <section class="section alt-bg">
      <div class="section-head">
        <h2 class="section-title">
          <span class="title-icon">🍜</span>
          美食推荐
        </h2>
        <router-link to="/explore?tab=foods" class="more-link">查看全部 →</router-link>
      </div>
      <div class="food-grid">
        <router-link
          v-for="f in topFoods"
          :key="f.id"
          :to="`/food/${f.id}`"
          class="food-card"
        >
          <div class="food-cover">
            <ImgBox
              :src="getFoodCoverUrl(f)"
              :alt="f.name"
              height="160px"
              overlay
            />
            <div class="food-type">{{ f.type }}</div>
          </div>
          <div class="food-body">
            <div class="food-name-row">
              <h4>{{ f.name }}</h4>
              <span class="food-rating">
                <span class="star">★</span>
                {{ f.rating }}
              </span>
            </div>
            <p class="food-desc">{{ f.desc }}</p>
            <div class="food-meta">
              <span>{{ getCityName(f.cityId) }}</span>
              <span class="food-price">{{ f.priceRange }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <!-- ===== 底部号召 ===== -->
    <section class="cta-section">
      <div class="cta-bg">
        <div class="cta-gradient"></div>
      </div>
      <div class="cta-content">
        <h2>准备好你的旅行了吗？</h2>
        <p>从精选城市开始，规划属于你的完美旅程</p>
        <div class="cta-actions">
          <router-link to="/cities" class="cta-btn primary">
            浏览所有城市
          </router-link>
          <router-link to="/planner" class="cta-btn secondary">
            打开行程规划
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Compass, Calendar } from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { cities, getCity, regions } from '../data/cities'
import { guides } from '../data/guides'
import { spots } from '../data/spots'
import { foods, getPopularFoods } from '../data/foods'
import { getCityImage, getSpotImage, getFoodImage, getGuideImage } from '../composables/useImageSource'

const router = useRouter()
const searchKw = ref('')
const showSuggestions = ref(false)
const searchSuggestions = ref([])
const activeRegion = ref('')
let searchTimer = null

const hotTags = ['北京', '成都', '火锅', '西湖', '故宫', '三亚', '丽江', '西安']

const totalCities = computed(() => cities.length)

const regionList = computed(() => {
  const icons = { '华北': '🏛️', '东北': '❄️', '华东': '🌊', '华中': '🏞️', '华南': '🏖️', '西南': '🏔️', '西北': '🏜️' }
  return regions.map(r => ({
    name: r,
    icon: icons[r] || '📍',
    count: cities.filter(c => c.region === r).length
  }))
})

const featuredCities = computed(() => {
  const list = activeRegion.value
    ? cities.filter(c => c.region === activeRegion.value)
    : cities
  return list.slice(0, 8)
})

const featuredGuides = computed(() => {
  return guides.slice(0, 6).map(g => ({
    ...g,
    cityName: getCity(g.cityId)?.name || ''
  }))
})

const topSpots = computed(() => {
  const list = activeRegion.value
    ? spots.filter(s => {
        const c = getCity(s.cityId)
        return c && c.region === activeRegion.value
      })
    : spots
  return [...list].sort((a, b) => b.rating - a.rating).slice(0, 8)
})

const topFoods = computed(() => {
  const list = activeRegion.value
    ? foods.filter(f => {
        const c = getCity(f.cityId)
        return c && c.region === activeRegion.value
      })
    : foods
  return [...list].sort((a, b) => b.rating - a.rating).slice(0, 8)
})

function getCityCoverUrl(city) {
  return getCityImage(city)
}

function getSpotCoverUrl(spot) {
  const city = getCity(spot.cityId)
  return getSpotImage(spot, city)
}

function getFoodCoverUrl(food) {
  const city = getCity(food.cityId)
  return getFoodImage(food, city)
}

function getGuideCoverUrl(guide) {
  const city = getCity(guide.cityId)
  return getGuideImage(guide, city)
}

function getCityName(id) {
  return getCity(id)?.name || ''
}

function getCityRating(id) {
  const citySpots = spots.filter(s => s.cityId === id)
  if (!citySpots.length) return '4.5'
  const avg = citySpots.reduce((sum, s) => sum + (s.rating || 0), 0) / citySpots.length
  return avg.toFixed(1)
}

function formatBudget(budget) {
  if (!budget) return '自由行'
  return `${budget.min}-${budget.max}元`
}

function goExplore() {
  const q = searchKw.value.trim()
  router.push({ name: 'explore', query: q ? { kw: q } : {} })
}

function quickSearch(tag) {
  searchKw.value = tag
  goExplore()
}

function onSearchInput() {
  if (searchTimer) clearTimeout(searchTimer)
  const kw = searchKw.value.trim()
  if (!kw) {
    showSuggestions.value = false
    searchSuggestions.value = []
    return
  }
  searchTimer = setTimeout(() => {
    generateSuggestions(kw)
  }, 250)
}

function generateSuggestions(kw) {
  const results = []
  const kwLower = kw.toLowerCase()

  const cityMatches = cities.filter(c =>
    c.name.includes(kw) || c.province.includes(kw)
  ).slice(0, 3)
  cityMatches.forEach(c => results.push({ type: 'city', name: c.name, id: c.id }))

  const spotMatches = spots.filter(s =>
    s.name.includes(kw)
  ).slice(0, 3)
  spotMatches.forEach(s => results.push({ type: 'spot', name: s.name, id: s.id }))

  const foodMatches = foods.filter(f =>
    f.name.includes(kw) || f.desc?.toLowerCase().includes(kwLower)
  ).slice(0, 3)
  foodMatches.forEach(f => results.push({ type: 'food', name: f.name, id: f.id }))

  searchSuggestions.value = results
  showSuggestions.value = results.length > 0
}

function selectSuggestion(s) {
  searchKw.value = s.name
  showSuggestions.value = false
  if (s.type === 'city') {
    router.push(`/city/${s.id}`)
  } else if (s.type === 'spot') {
    router.push(`/spot/${s.id}`)
  } else if (s.type === 'food') {
    router.push(`/food/${s.id}`)
  } else {
    goExplore()
  }
}

function getSuggestionIcon(type) {
  const map = { city: '🏙️', spot: '🏛️', food: '🍜', guide: '📖' }
  return map[type] || '📍'
}

function getSuggestionLabel(type) {
  const map = { city: '城市', spot: '景点', food: '美食', guide: '攻略' }
  return map[type] || ''
}

function onClickOutside(e) {
  const box = document.querySelector('.search-box')
  if (box && !box.contains(e.target)) {
    showSuggestions.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
  if (searchTimer) clearTimeout(searchTimer)
})
</script>

<style scoped>
.home-view {
  overflow: hidden;
}

/* ===== Hero ===== */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0f2027 0%, #203a43 30%, #2c5364 60%, #1a365d 100%);
}

.hero-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #d69e2e, #f0a830);
  top: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.shape-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #4fd1c5, #1f9e8f);
  bottom: -80px;
  left: -80px;
  animation: float 10s ease-in-out infinite reverse;
}

.shape-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  top: 50%;
  right: 15%;
  animation: float 12s ease-in-out infinite;
}

.shape-4 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  top: 20%;
  left: 10%;
  animation: float 9s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 60px 20px;
  max-width: 800px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 30px;
  padding: 8px 20px;
  font-size: 14px;
  margin-bottom: 24px;
  color: rgba(255, 255, 255, 0.95);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #4fd1c5;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.3); }
}

.hero-title {
  font-size: 64px;
  font-weight: 900;
  margin: 0 0 20px;
  letter-spacing: 3px;
  line-height: 1.1;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}

.title-line {
  display: block;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-accent {
  display: block;
  font-size: 42px;
  margin-top: 8px;
  background: linear-gradient(135deg, #f0a830 0%, #fbd38d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 20px;
  margin: 0 0 36px;
  opacity: 0.9;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.hero-search {
  max-width: 640px;
  margin: 0 auto;
}

.search-box {
  position: relative;
}

.search-input :deep(.el-input__wrapper) {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  padding: 4px 4px 4px 20px;
}

.search-icon {
  font-size: 18px;
  color: #2c5364;
}

.search-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #d69e2e, #b7791f);
  color: white;
  border: none;
  padding: 0 20px;
  height: 100%;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  border-radius: 0 16px 16px 0;
  transition: all 0.25s ease;
}

.search-btn:hover {
  background: linear-gradient(135deg, #b7791f, #975a16);
}

.search-btn .el-icon {
  font-size: 16px;
}

.suggestions-panel {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-radius: 12px;
  margin-top: 8px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 100;
}

.suggestion-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s;
  color: #1f2d3a;
}

.suggestion-item:hover {
  background: #f7fafc;
}

.suggestion-item + .suggestion-item {
  border-top: 1px solid #edf2f7;
}

.suggestion-icon {
  font-size: 18px;
}

.suggestion-text {
  flex: 1;
  font-weight: 500;
}

.suggestion-type {
  font-size: 12px;
  background: linear-gradient(135deg, #2c5364, #0f2027);
  color: white;
  padding: 2px 10px;
  border-radius: 10px;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.hero-hot {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.9);
}

.hot-label {
  font-size: 14px;
  font-weight: 500;
}

.hot-tag {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.15) !important;
  border-color: rgba(255, 255, 255, 0.3) !important;
  color: white !important;
  transition: all 0.25s ease;
  font-size: 13px;
}

.hot-tag:hover {
  background: rgba(255, 255, 255, 0.28) !important;
  transform: scale(1.05);
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 36px;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.stat-num {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #f0a830, #fbd38d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 13px;
  opacity: 0.85;
  margin-top: 2px;
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: white;
  cursor: pointer;
}

.hero-btn.primary {
  background: linear-gradient(135deg, #d69e2e, #b7791f);
  box-shadow: 0 8px 24px rgba(214, 158, 46, 0.4);
}

.hero-btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(214, 158, 46, 0.5);
}

.hero-btn.ghost {
  background: rgba(255, 255, 255, 0.1);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.hero-btn.ghost:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.2);
}

.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  z-index: 2;
}

.scroll-line {
  width: 2px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.5; height: 40px; }
  50% { opacity: 1; height: 50px; }
}

/* ===== Container ===== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ===== Sections ===== */
.section {
  padding: 72px 0;
}

.section.alt-bg {
  background: linear-gradient(180deg, rgba(20, 118, 140, 0.03) 0%, rgba(20, 118, 140, 0.06) 100%);
}

.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 12px;
}

.section-title {
  font-size: 28px;
  font-weight: 800;
  color: #1a365d;
  display: flex;
  align-items: center;
  gap: 10px;
}

.title-icon {
  font-size: 24px;
}

.section-desc {
  color: #718096;
  font-size: 14px;
}

.more-link {
  color: #2c5364;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.2s;
}

.more-link:hover {
  color: #d69e2e;
}

/* ===== Region Grid ===== */
.region-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 16px;
}

.region-card {
  background: white;
  border-radius: 16px;
  padding: 20px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  border: 2px solid transparent;
  box-shadow: 0 4px 20px rgba(20, 60, 60, 0.06);
}

.region-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(20, 60, 60, 0.12);
  border-color: rgba(214, 158, 46, 0.3);
}

.region-card.active {
  background: linear-gradient(135deg, #1a365d, #2c5364);
  color: white;
  border-color: #d69e2e;
  box-shadow: 0 12px 32px rgba(26, 54, 93, 0.3);
}

.region-card.active .region-info span {
  color: rgba(255, 255, 255, 0.8);
}

.region-card.active .region-arrow {
  color: #d69e2e;
}

.region-icon {
  font-size: 28px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f7fafc, #edf2f7);
  border-radius: 12px;
  flex-shrink: 0;
}

.region-card.active .region-icon {
  background: rgba(255, 255, 255, 0.15);
}

.region-info {
  flex: 1;
  min-width: 0;
}

.region-info h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 2px;
}

.region-info span {
  font-size: 12px;
  color: #718096;
}

.region-arrow {
  font-size: 16px;
  color: #a0aec0;
  transition: transform 0.3s;
}

.region-card:hover .region-arrow {
  transform: translateX(4px);
  color: #d69e2e;
}

/* ===== City Grid ===== */
.city-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.city-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(20, 60, 60, 0.08);
  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-decoration: none;
  color: inherit;
  display: block;
}

.city-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 48px rgba(20, 60, 60, 0.16);
}

.city-cover {
  position: relative;
}

.city-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #1a365d;
  z-index: 2;
}

.city-rating {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #d69e2e, #b7791f);
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 2;
}

.city-rating .star {
  font-size: 12px;
}

.city-body {
  padding: 18px 20px;
}

.city-name-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 6px;
}

.city-name-row h3 {
  font-size: 20px;
  font-weight: 700;
  color: #1a365d;
}

.city-prov {
  font-size: 12px;
  color: #718096;
  background: #f7fafc;
  padding: 2px 10px;
  border-radius: 8px;
}

.city-slogan {
  font-size: 13px;
  color: #718096;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ===== Guide Grid ===== */
.guide-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.guide-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(20, 60, 60, 0.08);
  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-decoration: none;
  color: inherit;
  display: block;
}

.guide-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 48px rgba(20, 60, 60, 0.16);
}

.guide-cover {
  position: relative;
}

.guide-days {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: linear-gradient(135deg, #1a365d, #2c5364);
  color: white;
  padding: 8px 16px;
  border-radius: 14px;
  display: flex;
  align-items: baseline;
  gap: 2px;
  z-index: 2;
}

.days-num {
  font-size: 22px;
  font-weight: 800;
}

.days-label {
  font-size: 13px;
}

.guide-body {
  padding: 18px 20px;
}

.guide-tags {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.guide-city {
  font-size: 12px;
  font-weight: 600;
  color: #2c5364;
  background: linear-gradient(135deg, rgba(44, 83, 100, 0.1), rgba(15, 32, 39, 0.05));
  padding: 3px 12px;
  border-radius: 10px;
}

.guide-budget {
  font-size: 12px;
  color: #b7791f;
  font-weight: 500;
}

.guide-title {
  font-size: 17px;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 8px;
  line-height: 1.4;
}

.guide-summary {
  font-size: 13px;
  color: #718096;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ===== Spot Grid ===== */
.spot-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.spot-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(20, 60, 60, 0.06);
  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-decoration: none;
  color: inherit;
  display: block;
}

.spot-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(20, 60, 60, 0.14);
}

.spot-cover {
  position: relative;
}

.spot-tags {
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 6px;
  z-index: 2;
}

.spot-tag {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  padding: 3px 10px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  color: #1a365d;
}

.spot-body {
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.spot-info h4 {
  font-size: 16px;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 2px;
}

.spot-city {
  font-size: 12px;
  color: #a0aec0;
}

.spot-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  font-size: 14px;
  color: #d69e2e;
}

.spot-rating .star {
  color: #d69e2e;
}

/* ===== Food Grid ===== */
.food-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.food-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(20, 60, 60, 0.06);
  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-decoration: none;
  color: inherit;
  display: block;
}

.food-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(20, 60, 60, 0.14);
}

.food-cover {
  position: relative;
}

.food-type {
  position: absolute;
  top: 10px;
  left: 10px;
  background: linear-gradient(135deg, #d69e2e, #b7791f);
  color: white;
  padding: 3px 12px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 600;
  z-index: 2;
}

.food-body {
  padding: 14px 16px;
}

.food-name-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.food-name-row h4 {
  font-size: 16px;
  font-weight: 700;
  color: #1a365d;
}

.food-rating {
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: 600;
  font-size: 13px;
  color: #d69e2e;
}

.food-rating .star {
  font-size: 13px;
}

.food-desc {
  font-size: 12px;
  color: #718096;
  line-height: 1.5;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.food-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: #a0aec0;
}

.food-price {
  color: #b7791f;
  font-weight: 600;
}

/* ===== CTA Section ===== */
.cta-section {
  position: relative;
  padding: 80px 0;
  overflow: hidden;
}

.cta-bg {
  position: absolute;
  inset: 0;
}

.cta-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
}

.cta-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 24px;
}

.cta-content h2 {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.cta-content p {
  font-size: 18px;
  opacity: 0.85;
  margin-bottom: 32px;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.cta-btn {
  display: inline-block;
  padding: 14px 32px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.cta-btn.primary {
  background: linear-gradient(135deg, #d69e2e, #b7791f);
  color: white;
  box-shadow: 0 8px 24px rgba(214, 158, 46, 0.4);
}

.cta-btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(214, 158, 46, 0.5);
}

.cta-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  color: white;
  backdrop-filter: blur(8px);
}

.cta-btn.secondary:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.2);
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .region-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .city-grid,
  .spot-grid,
  .food-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .guide-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
    letter-spacing: 1px;
  }
  .title-accent {
    font-size: 24px;
  }
  .hero-sub {
    font-size: 16px;
  }
  .hero-stats {
    gap: 20px;
    padding: 12px 20px;
  }
  .stat-num {
    font-size: 22px;
  }
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  .hero-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  .region-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .city-grid,
  .spot-grid,
  .food-grid,
  .guide-grid {
    grid-template-columns: 1fr;
  }
  .section {
    padding: 48px 0;
  }
  .section-title {
    font-size: 22px;
  }
  .cta-content h2 {
    font-size: 26px;
  }
  .cta-content p {
    font-size: 15px;
  }
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  .cta-btn {
    width: 100%;
    max-width: 260px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-stats {
    display: none;
  }
  .region-grid {
    grid-template-columns: 1fr;
  }
}
</style>