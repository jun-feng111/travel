<template>
  <div v-if="city" class="city-detail">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-bg">
        <ImgBox :src="heroCoverUrl" :alt="city.name" height="480px" overlay class="hero-img" />
      </div>
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="hero-top">
          <span class="region-tag">{{ city.region }} · {{ city.province }}</span>
          <div class="hero-actions">
            <router-link :to="`/planner?city=${city.id}`" class="action-btn">
              <el-icon><Calendar /></el-icon> 规划行程
            </router-link>
            <button
              class="action-btn fav"
              @click="toggleCityFav"
            >
              <el-icon v-if="cityFaved"><StarFilled /></el-icon>
              <el-icon v-else><Star /></el-icon>
              {{ cityFaved ? '已收藏' : '收藏城市' }}
            </button>
          </div>
        </div>
        <h1 class="hero-title">{{ city.name }}</h1>
        <p class="hero-slogan">「{{ city.slogan }}」</p>
        <p class="hero-intro">{{ city.intro }}</p>
      </div>
    </div>

    <!-- Quick Info Bar -->
    <div class="container">
      <div class="quick-bar">
        <div class="quick-item">
          <div class="qi-icon season">
            <el-icon><Sunny /></el-icon>
          </div>
          <div class="qi-body">
            <span class="qi-label">最佳季节</span>
            <span class="qi-value">{{ city.bestSeason }}</span>
          </div>
        </div>
        <div class="quick-item">
          <div class="qi-icon weather">
            <el-icon><Cloudy /></el-icon>
          </div>
          <div class="qi-body">
            <span class="qi-label">气候特征</span>
            <span class="qi-value">{{ city.weather }}</span>
          </div>
        </div>
        <div class="quick-item">
          <div class="qi-icon coord">
            <el-icon><Location /></el-icon>
          </div>
          <div class="qi-body">
            <span class="qi-label">地理坐标</span>
            <span class="qi-value">{{ city.lng.toFixed(3) }}°E, {{ city.lat.toFixed(3) }}°N</span>
          </div>
        </div>
        <div class="quick-item">
          <div class="qi-icon rating">
            <el-icon><StarFilled /></el-icon>
          </div>
          <div class="qi-body">
            <span class="qi-label">综合评分</span>
            <span class="qi-value">{{ avgRating }} / 5.0</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab Navigation -->
    <div class="container">
      <div class="tab-nav">
        <button
          v-for="t in tabs"
          :key="t.name"
          class="tab-btn"
          :class="{ active: tab === t.name }"
          @click="tab = t.name"
        >
          <el-icon><component :is="t.icon" /></el-icon>
          <span>{{ t.label }}</span>
          <span v-if="t.count" class="tab-count">{{ t.count }}</span>
        </button>
      </div>

      <!-- 景点 Tab -->
      <div v-show="tab === 'spots'" class="tab-content">
        <div v-if="spots.length" class="spot-grid">
          <div v-for="s in spots" :key="s.id" class="spot-card" @click="goSpot(s.id)">
            <div class="spot-cover">
              <ImgBox :src="getSpotCoverUrl(s)" :alt="s.name" height="200px" />
              <div class="spot-rating">
                <el-icon><StarFilled /></el-icon>
                <span>{{ s.rating }}</span>
              </div>
              <button
                class="spot-fav"
                @click.stop="toggleSpotFav(s)"
                :class="{ active: s.faved }"
              >
                <el-icon v-if="s.faved"><StarFilled /></el-icon>
                <el-icon v-else><Star /></el-icon>
              </button>
            </div>
            <div class="spot-info">
              <h3 class="spot-name">{{ s.name }}</h3>
              <div class="spot-tags">
                <span v-for="t in s.tags.slice(0, 3)" :key="t" class="spot-tag">{{ t }}</span>
              </div>
              <p class="spot-desc">{{ s.intro }}</p>
            </div>
          </div>
        </div>
        <el-empty v-else description="暂无景点数据" />
      </div>

      <!-- 美食 Tab -->
      <div v-show="tab === 'foods'" class="tab-content">
        <div v-if="foods.length" class="food-grid">
          <div v-for="f in foods" :key="f.id" class="food-card">
            <div class="food-cover">
              <ImgBox :src="getFoodCoverUrl(f)" :alt="f.name" height="180px" />
              <div class="food-type">{{ f.type }}</div>
              <div class="food-rating">
                <el-icon><StarFilled /></el-icon>
                <span>{{ f.rating }}</span>
              </div>
            </div>
            <div class="food-info">
              <h3 class="food-name">{{ f.name }}</h3>
              <p class="food-desc">{{ f.desc }}</p>
              <div class="food-rec">
                <el-icon><Shop /></el-icon>
                <span>{{ f.recommend.join('、') }}</span>
              </div>
              <div class="food-bottom">
                <span class="food-price">{{ f.priceRange }}</span>
                <button
                  class="food-fav"
                  @click="toggleFoodFav(f)"
                  :class="{ active: f.faved }"
                >
                  <el-icon v-if="f.faved"><StarFilled /></el-icon>
                  <el-icon v-else><Star /></el-icon>
                  {{ f.faved ? '已收藏' : '收藏' }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <el-empty v-else description="暂无美食数据" />
      </div>

      <!-- 攻略 Tab -->
      <div v-show="tab === 'guides'" class="tab-content">
        <div v-if="guides.length" class="guide-list">
          <div v-for="g in guides" :key="g.id" class="guide-card" @click="goGuide(g.id)">
            <div class="guide-cover">
              <ImgBox :src="getGuideCoverUrl(g)" :alt="g.title" height="160px" />
              <div class="guide-days">{{ g.days }}天</div>
            </div>
            <div class="guide-info">
              <h3 class="guide-title">{{ g.title }}</h3>
              <p class="guide-summary">{{ g.summary }}</p>
              <div class="guide-meta">
                <span class="guide-budget">💰 {{ g.budget.min }}-{{ g.budget.max }} 元</span>
                <span class="guide-season">🗓 {{ g.bestSeason || '四季适宜' }}</span>
              </div>
            </div>
          </div>
        </div>
        <el-empty v-else description="暂无攻略，敬请期待" />
      </div>

      <!-- 天气 Tab -->
      <div v-show="tab === 'weather'" class="tab-content">
        <div class="weather-section">
          <div v-if="weather.now" class="weather-now-card">
            <div class="wn-left">
              <span class="wn-icon">{{ getWeatherEmoji(weather.now.text) }}</span>
              <span class="wn-temp">{{ weather.now.temp }}°</span>
            </div>
            <div class="wn-right">
              <h3>{{ weather.now.text }}</h3>
              <p>💨 {{ weather.now.windDir }} {{ weather.now.windScale }}级</p>
              <p>💧 湿度 {{ weather.now.humidity }}%</p>
            </div>
          </div>
          <div v-else class="weather-loading">正在加载天气信息...</div>

          <h3 class="weather-title">7日天气预报</h3>
          <div v-if="weather.daily.length" class="forecast-grid">
            <div v-for="(d, i) in weather.daily.slice(0, 7)" :key="i" class="forecast-day">
              <span class="fd-date">{{ d.date.slice(5) }}</span>
              <span class="fd-icon">{{ getWeatherEmoji(d.textDay) }}</span>
              <span class="fd-temp">{{ d.tempMin }}°~{{ d.tempMax }}°</span>
              <span class="fd-text">{{ d.textDay }}</span>
            </div>
          </div>

          <h3 class="weather-title">月度旅行指数</h3>
          <div class="month-grid">
            <div
              v-for="(m, i) in months"
              :key="i"
              class="month-cell"
              :class="m.level"
            >
              <span class="month-no">{{ i + 1 }}月</span>
              <span class="month-tag">{{ m.label }}</span>
            </div>
          </div>

          <h3 class="weather-title">出行建议</h3>
          <div class="tips-list">
            <div v-for="t in seasonTips" :key="t" class="tip-item">
              <el-icon><CircleCheckFilled /></el-icon>
              <span>{{ t }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 地图 Tab -->
      <div v-show="tab === 'map'" class="tab-content">
        <div class="map-section">
          <p class="map-desc">点击地图标记查看景点详细位置</p>
          <div id="cityMap" class="map-box"></div>
          <div class="spot-markers">
            <div v-for="s in spots" :key="s.id" class="marker-item" @click="focusMarker(s)">
              <el-icon><LocationFilled /></el-icon>
              <span>{{ s.name }}</span>
              <span class="marker-rating">★ {{ s.rating }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <el-empty v-else description="未找到该城市" />
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  Star, StarFilled, Sunny, Cloudy, Location, Calendar,
  Shop, CircleCheckFilled, LocationFilled,
  View, Food, Reading, DataAnalysis, MapLocation
} from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { getCity } from '../data/cities'
import { spotsByCity } from '../data/spots'
import { guidesByCity } from '../data/guides'
import { foodsByCity } from '../data/foods'
import { useFavorites } from '../composables/useFavorites'
import { useWeather } from '../composables/useWeather'
import { getCityCover } from '../composables/useImageLoader'

const route = useRoute()
const router = useRouter()
const tab = ref('spots')
const { isFavorite, toggleFavorite } = useFavorites()
const { now, daily, fetchWeather } = useWeather()

const city = computed(() => getCity(route.params.cityId))

const weather = computed(() => ({ now: now.value, daily: daily.value }))

const heroCoverUrl = computed(() => {
  if (!city.value) return ''
  const cover = getCityCover(city.value.lng, city.value.lat, city.value.name)
  return cover.primary
})

onMounted(() => {
  if (city.value) fetchWeather(city.value.name)
})

watch(() => route.params.cityId, (newId) => {
  if (newId) fetchWeather(getCity(newId)?.name)
})

const tabs = computed(() => [
  { name: 'spots', label: '景点', icon: View, count: spots.value.length },
  { name: 'foods', label: '美食', icon: Food, count: foods.value.length },
  { name: 'guides', label: '攻略', icon: Reading, count: guides.value.length },
  { name: 'weather', label: '天气', icon: DataAnalysis },
  { name: 'map', label: '地图', icon: MapLocation }
])

const spots = computed(() => {
  if (!city.value) return []
  return spotsByCity(city.value.id).map(s => ({
    ...s,
    faved: isFavorite('spots', s.id)
  }))
})

const guides = computed(() => {
  if (!city.value) return []
  return guidesByCity(city.value.id)
})

const foods = computed(() => {
  if (!city.value) return []
  return foodsByCity(city.value.id).map(f => ({
    ...f,
    faved: isFavorite('foods', f.id)
  }))
})

const avgRating = computed(() => {
  if (!spots.value.length) return '4.50'
  const sum = spots.value.reduce((a, s) => a + (s.rating || 0), 0)
  return (sum / spots.value.length).toFixed(2)
})

const cityFaved = ref(false)
watch(city, (c) => {
  cityFaved.value = c ? isFavorite('cities', c.id) : false
}, { immediate: true })

function toggleCityFav() {
  if (!city.value) return
  toggleFavorite('cities', city.value.id, {
    id: city.value.id, name: city.value.name, province: city.value.province,
    region: city.value.region, slogan: city.value.slogan, intro: city.value.intro
  })
  cityFaved.value = isFavorite('cities', city.value.id)
}

function toggleSpotFav(s) {
  toggleFavorite('spots', s.id, {
    id: s.id, name: s.name, cover: s.cover,
    rating: s.rating, tags: s.tags, cityId: city.value?.id,
    cityName: city.value?.name, intro: s.intro
  })
  s.faved = isFavorite('spots', s.id)
}

function toggleFoodFav(f) {
  toggleFavorite('foods', f.id, {
    id: f.id, name: f.name, cover: f.cover,
    desc: f.desc, recommend: f.recommend,
    cityId: city.value?.id, cityName: city.value?.name
  })
  f.faved = isFavorite('foods', f.id)
}

function goSpot(id) { router.push(`/spot/${id}`) }
function goGuide(id) { router.push(`/guide/${id}`) }

function getSpotCoverUrl(s) {
  if (!city.value) return ''
  const cover = getCityCover(city.value.lng, city.value.lat, s.name)
  return cover.primary
}

function getFoodCoverUrl(f) {
  if (!city.value) return ''
  const cover = getCityCover(city.value.lng, city.value.lat, f.name)
  return cover.primary
}

function getGuideCoverUrl(g) {
  if (!city.value) return ''
  const cover = getCityCover(city.value.lng, city.value.lat, g.title)
  return cover.primary
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

function parseMonths(seasonStr) {
  const best = new Set()
  const re = /(\d+)\s*-\s*(\d+)\s*月/g
  let match
  while ((match = re.exec(seasonStr)) !== null) {
    const a = +match[1], b = +match[2]
    for (let i = a; i <= b; i++) best.add(i)
  }
  const re2 = /(\d+)\s*月/g
  let m2
  while ((m2 = re2.exec(seasonStr)) !== null) best.add(+m2[1])
  const months = []
  for (let i = 1; i <= 12; i++) {
    if (best.has(i)) months.push({ level: 'best', label: '推荐' })
    else if (best.has(i - 1) || best.has(i + 1)) months.push({ level: 'good', label: '适宜' })
    else months.push({ level: 'normal', label: '一般' })
  }
  return months
}

const months = computed(() => city.value ? parseMonths(city.value.bestSeason) : [])

const seasonTips = computed(() => {
  if (!city.value) return []
  const tips = []
  const w = city.value.weather || ''
  if (/高原|紫外线/.test(w)) tips.push('高原地区紫外线强，务必做好防晒，携带墨镜和防晒霜')
  if (/温差/.test(w)) tips.push('昼夜温差大，建议携带外套，采用洋葱式穿搭')
  if (/台风/.test(w)) tips.push('夏季可能受台风影响，出行前关注天气预报，避免台风期间前往')
  if (/雨季|梅雨/.test(w)) tips.push('雨季出行请备好雨具，室内景点是雨天的好选择')
  if (/炎热|闷热/.test(w)) tips.push('夏季炎热，注意防暑降温，多补充水分')
  if (/干冷|寒冷/.test(w)) tips.push('冬季干冷，需备保暖衣物和润肤用品')
  tips.push('节假日景点人流较大，建议错峰出行，体验更佳')
  tips.push('提前在线预订门票和住宿，旺季价格更优且避免售罄')
  return tips
})

let map = null
let mapInited = false
async function initMap() {
  if (!city.value || mapInited) return
  mapInited = true
  if (!window.L) {
    const css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(css)
    await new Promise((res, rej) => {
      const s = document.createElement('script')
      s.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      s.onload = res
      s.onerror = rej
      document.head.appendChild(s)
    })
  }
  await nextTick()
  const el = document.getElementById('cityMap')
  if (!el || !window.L) return
  const spotsList = spotsByCity(city.value.id)
  const center = [city.value.lat, city.value.lng]
  map = window.L.map('cityMap').setView(center, 12)
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map)
  spotsList.forEach(s => {
    const marker = window.L.marker([s.lat, s.lng]).addTo(map)
    const html = `
      <div style="width:200px">
        <div style="height:80px;background:linear-gradient(135deg,#4fd1c5,#1f9e8f);border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:600">${s.name}</div>
        <h4 style="margin:6px 0 2px">${s.name}</h4>
        <div style="color:#f0a830;font-size:13px">★ ${s.rating}</div>
        <p style="font-size:12px;color:#666;margin:4px 0">${s.intro}</p>
        <a href="#/spot/${s.id}" style="color:#1f9e8f;font-size:13px;font-weight:600">查看详情 →</a>
      </div>`
    marker.bindPopup(html)
  })
  setTimeout(() => map && map.invalidateSize(), 200)
}

function focusMarker(s) {
  if (!map) return
  map.setView([s.lat, s.lng], 15)
  const marker = map._layers
    ? Object.values(map._layers).find(m => m.getLatLng && Math.abs(m.getLatLng().lat - s.lat) < 0.001)
    : null
  if (marker) marker.openPopup()
}

watch(tab, (v) => {
  if (v === 'map') nextTick(() => initMap())
})
</script>

<style scoped>
.city-detail { min-height: 100vh; background: #f7fafc; }

/* ===== Hero Section ===== */
.hero-section {
  position: relative;
  height: 480px;
  overflow: hidden;
}
.hero-bg { position: absolute; inset: 0; }
.hero-bg .hero-img :deep(.imgbox-img) {
  filter: brightness(0.45) saturate(1.1);
  transform: scale(1.05);
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, rgba(15,35,45,0.3) 0%, rgba(15,35,45,0.65) 100%);
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 2;
  padding-top: 60px;
  padding-bottom: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}
.hero-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.region-tag {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.25);
  letter-spacing: 1px;
}
.hero-actions {
  display: flex;
  gap: 10px;
}
.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
  color: #fff;
  padding: 8px 18px;
  border-radius: 24px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}
.action-btn:hover {
  background: rgba(255,255,255,0.28);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}
.action-btn.fav.active,
.action-btn.fav:active {
  background: linear-gradient(135deg, #f0a830, #e6941f);
  border-color: transparent;
}
.hero-title {
  font-size: 56px;
  font-weight: 800;
  letter-spacing: 3px;
  text-shadow: 0 4px 20px rgba(0,0,0,0.5);
  margin-bottom: 8px;
}
.hero-slogan {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 16px;
  opacity: 0.95;
  text-shadow: 0 2px 10px rgba(0,0,0,0.4);
  letter-spacing: 1px;
}
.hero-intro {
  max-width: 700px;
  font-size: 15px;
  line-height: 1.8;
  opacity: 0.88;
  text-shadow: 0 1px 8px rgba(0,0,0,0.3);
}

/* ===== Quick Bar ===== */
.quick-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  background: #fff;
  margin: -30px 24px 0;
  position: relative;
  z-index: 10;
  border-radius: 18px;
  box-shadow: 0 12px 40px rgba(20,60,60,0.12);
  overflow: hidden;
}
.quick-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px;
  border-right: 1px solid rgba(20,60,60,0.06);
  transition: background 0.3s;
}
.quick-item:last-child { border-right: none; }
.quick-item:hover { background: rgba(31,158,143,0.04); }
.qi-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22px;
  flex-shrink: 0;
}
.qi-icon.season { background: linear-gradient(135deg, #f0a830, #e6941f); }
.qi-icon.weather { background: linear-gradient(135deg, #4fd1c5, #1f9e8f); }
.qi-icon.coord { background: linear-gradient(135deg, #667eea, #5a67d8); }
.qi-icon.rating { background: linear-gradient(135deg, #f093fb, #f5576c); }
.qi-body { display: flex; flex-direction: column; min-width: 0; }
.qi-label { font-size: 12px; color: #718096; margin-bottom: 2px; }
.qi-value { font-size: 15px; font-weight: 600; color: #1a365d; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* ===== Tab Nav ===== */
.tab-nav {
  display: flex;
  gap: 4px;
  margin: 32px 0 28px;
  background: #fff;
  padding: 6px;
  border-radius: 16px;
  box-shadow: 0 6px 24px rgba(20,60,60,0.08);
  overflow-x: auto;
}
.tab-btn {
  flex: 1;
  min-width: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 22px;
  border: none;
  background: transparent;
  color: #718096;
  font-size: 15px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}
.tab-btn:hover { color: #2c5364; background: rgba(31,158,143,0.06); }
.tab-btn.active {
  background: linear-gradient(135deg, #4fd1c5, #1f9e8f);
  color: #fff;
  box-shadow: 0 8px 20px rgba(31,158,143,0.35);
}
.tab-count {
  background: rgba(255,255,255,0.25);
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 12px;
}
.tab-btn:not(.active) .tab-count {
  background: #f7fafc;
  color: #2c5364;
}

/* ===== Tab Content ===== */
.tab-content { min-height: 300px; padding-bottom: 40px; }

/* ===== Spot Cards ===== */
.spot-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.spot-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(20,60,60,0.08);
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.4s ease;
  border: 1px solid rgba(20,60,60,0.04);
}
.spot-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 48px rgba(20,60,60,0.14);
}
.spot-cover { position: relative; overflow: hidden; }
.spot-cover :deep(.imgbox-img) { transition: transform 0.6s ease; }
.spot-card:hover .spot-cover :deep(.imgbox-img) { transform: scale(1.08); }
.spot-rating {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: #f0a830;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
}
.spot-fav {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.9);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #718096;
  font-size: 16px;
  transition: all 0.3s;
}
.spot-fav:hover { transform: scale(1.1); }
.spot-fav.active { color: #f0a830; background: #fff; }
.spot-info { padding: 18px 20px 22px; }
.spot-name {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1a365d;
}
.spot-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}
.spot-tag {
  background: linear-gradient(135deg, rgba(31,158,143,0.08), rgba(79,209,197,0.08));
  color: #2c5364;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 8px;
}
.spot-desc {
  font-size: 13px;
  color: #718096;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ===== Food Cards ===== */
.food-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.food-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(20,60,60,0.08);
  transition: transform 0.4s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.4s ease;
  border: 1px solid rgba(20,60,60,0.04);
}
.food-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 48px rgba(20,60,60,0.14);
}
.food-cover { position: relative; overflow: hidden; }
.food-cover :deep(.imgbox-img) { transition: transform 0.6s ease; }
.food-card:hover .food-cover :deep(.imgbox-img) { transform: scale(1.08); }
.food-type {
  position: absolute;
  top: 12px;
  left: 12px;
  background: linear-gradient(135deg, #f5576c, #f093fb);
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}
.food-rating {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: #f0a830;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
}
.food-info { padding: 18px 20px 22px; }
.food-name {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1a365d;
}
.food-desc {
  font-size: 13px;
  color: #718096;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
}
.food-rec {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 12px;
  color: #2c5364;
  margin-bottom: 14px;
  line-height: 1.5;
}
.food-rec .el-icon { flex-shrink: 0; margin-top: 2px; }
.food-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid rgba(20,60,60,0.06);
}
.food-price {
  font-size: 13px;
  font-weight: 600;
  color: #f0a830;
}
.food-fav {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: none;
  background: transparent;
  color: #718096;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: color 0.2s;
}
.food-fav:hover { color: #f0a830; }
.food-fav.active { color: #f0a830; }

/* ===== Guide Cards ===== */
.guide-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.guide-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(20,60,60,0.08);
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.4s ease;
  display: flex;
  border: 1px solid rgba(20,60,60,0.04);
}
.guide-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 48px rgba(20,60,60,0.14);
}
.guide-cover {
  position: relative;
  width: 220px;
  flex-shrink: 0;
}
.guide-cover :deep(.imgbox-img) { transition: transform 0.6s ease; }
.guide-card:hover .guide-cover :deep(.imgbox-img) { transform: scale(1.06); }
.guide-days {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: linear-gradient(135deg, #4fd1c5, #1f9e8f);
  color: #fff;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
}
.guide-info {
  flex: 1;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
}
.guide-title {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1a365d;
}
.guide-summary {
  font-size: 13px;
  color: #718096;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 14px;
  flex: 1;
}
.guide-meta {
  display: flex;
  gap: 12px;
  font-size: 12px;
  font-weight: 500;
}
.guide-budget { color: #f0a830; }
.guide-season { color: #2c5364; }

/* ===== Weather Tab ===== */
.weather-section { max-width: 900px; margin: 0 auto; }
.weather-now-card {
  display: flex;
  align-items: center;
  gap: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 32px 40px;
  color: #fff;
  margin-bottom: 36px;
  box-shadow: 0 16px 40px rgba(102,126,234,0.3);
}
.wn-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.wn-icon { font-size: 64px; }
.wn-temp { font-size: 56px; font-weight: 800; }
.wn-right h3 { font-size: 22px; margin-bottom: 6px; }
.wn-right p { font-size: 14px; opacity: 0.9; }
.weather-loading {
  text-align: center;
  padding: 40px;
  color: #718096;
}
.weather-title {
  font-size: 17px;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.weather-title::before {
  content: '';
  width: 4px;
  height: 18px;
  background: linear-gradient(180deg, #4fd1c5, #1f9e8f);
  border-radius: 2px;
}
.forecast-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px;
  margin-bottom: 36px;
}
.forecast-day {
  background: #fff;
  border-radius: 14px;
  padding: 16px 8px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(20,60,60,0.06);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.forecast-day:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(20,60,60,0.12);
}
.fd-date { font-size: 12px; color: #718096; font-weight: 500; }
.fd-icon { font-size: 28px; }
.fd-temp { font-size: 13px; font-weight: 700; color: #1a365d; }
.fd-text { font-size: 11px; color: #718096; }

.month-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 36px;
}
.month-cell {
  text-align: center;
  padding: 14px 8px;
  border-radius: 12px;
  font-size: 13px;
  transition: transform 0.3s;
}
.month-cell:hover { transform: scale(1.05); }
.month-no { display: block; font-weight: 700; margin-bottom: 4px; }
.month-tag { font-size: 11px; }
.month-cell.best {
  background: linear-gradient(135deg, #e8f7f1, #d1f0e3);
  color: #1f9e8f;
}
.month-cell.good {
  background: #fff8ec;
  color: #b8861a;
}
.month-cell.normal {
  background: #f7fafc;
  color: #a0aec0;
}

.tips-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(20,60,60,0.06);
  font-size: 14px;
  color: #1a365d;
  transition: background 0.3s;
}
.tip-item:hover { background: rgba(31,158,143,0.04); }
.tip-item .el-icon { color: #1f9e8f; flex-shrink: 0; margin-top: 2px; }

/* ===== Map Tab ===== */
.map-section { max-width: 900px; }
.map-desc {
  color: #718096;
  margin-bottom: 16px;
  font-size: 14px;
}
.map-box {
  height: 480px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(20,60,60,0.12);
  margin-bottom: 20px;
}
.spot-markers {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.marker-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 14px rgba(20,60,60,0.08);
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.3s;
}
.marker-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(20,60,60,0.14);
  color: #2c5364;
}
.marker-item .el-icon { color: #2c5364; }
.marker-rating {
  color: #f0a830;
  font-weight: 600;
}

/* ===== Container ===== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .spot-grid, .food-grid { grid-template-columns: repeat(2, 1fr); }
  .guide-list { grid-template-columns: 1fr; }
  .forecast-grid { grid-template-columns: repeat(4, 1fr); }
  .month-grid { grid-template-columns: repeat(4, 1fr); }
}
@media (max-width: 768px) {
  .hero-section { height: 380px; }
  .hero-content { padding-top: 40px; }
  .hero-title { font-size: 36px; letter-spacing: 2px; }
  .hero-slogan { font-size: 17px; }
  .hero-intro { font-size: 13px; }
  .quick-bar {
    grid-template-columns: repeat(2, 1fr);
    margin: -20px 16px 0;
  }
  .quick-item { border-right: none; border-bottom: 1px solid rgba(20,60,60,0.06); }
  .quick-item:nth-child(3), .quick-item:nth-child(4) { border-bottom: none; }
  .spot-grid, .food-grid { grid-template-columns: 1fr; }
  .forecast-grid { grid-template-columns: repeat(3, 1fr); }
  .month-grid { grid-template-columns: repeat(3, 1fr); }
  .tips-list { grid-template-columns: 1fr; }
  .weather-now-card {
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    text-align: center;
  }
  .tab-btn { padding: 10px 16px; font-size: 13px; }
  .hero-top { flex-direction: column; gap: 12px; align-items: flex-start; }
  .guide-card { flex-direction: column; }
  .guide-cover { width: 100%; height: 180px; }
}
</style>