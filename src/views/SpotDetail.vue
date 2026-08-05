<template>
  <div v-if="spot" class="spot-detail">
    <div class="container">
      <router-link :to="`/city/${city.id}`" class="back-link">
        <el-icon><ArrowLeft /></el-icon> 返回 {{ city.name }}
      </router-link>
    </div>

    <div class="spot-hero">
      <ImgBox :src="spotImg" :alt="spot.name" height="380px" :overlay="true" class="hero-img" />
      <div class="hero-content">
        <div class="container">
          <div class="hero-tags">
            <span v-for="t in spot.tags" :key="t" class="hero-tag">{{ t }}</span>
          </div>
          <h1 class="hero-title">{{ spot.name }}</h1>
          <div class="hero-meta">
            <span class="rating">★ {{ spot.rating }}</span>
            <span class="dot">·</span>
            <span>{{ spot.duration }}</span>
            <span class="dot">·</span>
            <span>{{ spot.ticket }}</span>
          </div>
          <div class="hero-actions">
            <el-button
              :type="isFav ? 'danger' : 'default'"
              @click="toggleFav"
              class="fav-btn"
              :class="{ active: isFav }"
            >
              <el-icon><Star v-if="!isFav" /><StarFilled v-else /></el-icon>
              {{ isFav ? '已收藏' : '收藏' }}
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="container main-layout">
      <div class="layout-main">
        <section class="intro-card">
          <p class="intro-text">{{ spot.intro }}</p>
        </section>

        <section class="info-grid">
          <div class="info-card">
            <div class="info-icon"><el-icon><Clock /></el-icon></div>
            <div class="info-content">
              <div class="info-label">开放时间</div>
              <div class="info-val">{{ spot.openTime }}</div>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon"><el-icon><Ticket /></el-icon></div>
            <div class="info-content">
              <div class="info-label">门票</div>
              <div class="info-val">{{ spot.ticket }}</div>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon"><el-icon><Position /></el-icon></div>
            <div class="info-content">
              <div class="info-label">交通</div>
              <div class="info-val">{{ spot.traffic }}</div>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon"><el-icon><Timer /></el-icon></div>
            <div class="info-content">
              <div class="info-label">建议游玩</div>
              <div class="info-val">{{ spot.duration }}</div>
            </div>
          </div>
        </section>

        <section class="tips-card">
          <el-icon class="tips-icon"><Warning /></el-icon>
          <div class="tips-content">
            <strong class="tips-title">实用贴士</strong>
            <p class="tips-text">{{ spot.tips }}</p>
          </div>
        </section>

        <section class="map-section">
          <h2 class="section-title">
            <span class="title-bar"></span>
            位置导航
          </h2>
          <div class="map-card">
            <div ref="spotMapRef" class="map-container"></div>
            <div class="map-info">
              <div class="map-coords">
                <span>经度: {{ spot.lng }}</span>
                <span>纬度: {{ spot.lat }}</span>
              </div>
              <a
                :href="`https://uri.amap.com/marker?position=${spot.lng},${spot.lat}&name=${encodeURIComponent(spot.name)}&src=travel-site`"
                target="_blank"
                class="map-link"
              >
                <el-icon><Guide /></el-icon> 在高德地图中打开
              </a>
            </div>
          </div>
        </section>

        <section v-if="nearbySpots.length" class="nearby-section">
          <h2 class="section-title">
            <span class="title-bar"></span>
            附近景点
          </h2>
          <div class="nearby-grid">
            <router-link
              v-for="s in nearbySpots"
              :key="s.id"
              :to="`/spot/${s.id}`"
              class="nearby-card"
            >
              <div class="nearby-cover">
                <ImgBox :src="getNearbyImg(s)" :alt="s.name" height="140px" :overlay="true" />
              </div>
              <div class="nearby-body">
                <h4>{{ s.name }}</h4>
                <div class="nearby-meta">
                  <span class="rating-sm">★ {{ s.rating }}</span>
                  <span class="nearby-dist">{{ s.tags?.[0] }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </section>
      </div>

      <aside class="layout-sidebar">
        <div class="sidebar-card city-card">
          <ImgBox :src="cityImg" :alt="city.name" height="160px" :overlay="true" />
          <div class="city-info">
            <h3>{{ city.name }}</h3>
            <p>{{ city.slogan }}</p>
            <router-link :to="`/city/${city.id}`" class="sidebar-link">查看城市详情 →</router-link>
          </div>
        </div>

        <div class="sidebar-card quick-info">
          <h4>快速信息</h4>
          <ul>
            <li>
              <span>🏙️ 所属城市</span>
              <span class="val">{{ city.name }}</span>
            </li>
            <li>
              <span>⭐ 评分</span>
              <span class="val">{{ spot.rating }}</span>
            </li>
            <li>
              <span>🎫 门票</span>
              <span class="val">{{ spot.ticket }}</span>
            </li>
            <li>
              <span>⏰ 建议时长</span>
              <span class="val">{{ spot.duration }}</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
  <el-empty v-else description="未找到该景点" />
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import {
  ArrowLeft,
  Star,
  StarFilled,
  Clock,
  Ticket,
  Position,
  Timer,
  Warning,
  Guide
} from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { getSpotImage, getCityImage } from '../composables/useImageSource'
import { useFavorites } from '../composables/useFavorites'
import { spotHelpers, cityHelpers } from '../data/index'
import { useAMap } from '../composables/useAMap'

const route = useRoute()
const { isFavorite, toggleFavorite } = useFavorites()

const spot = computed(() => spotHelpers.findById(route.params.spotId))
const city = computed(() => spot.value ? cityHelpers.findById(spot.value.cityId) : null)

const spotImg = computed(() => {
  if (!spot.value) return ''
  return getSpotImage(spot.value, city.value)
})

const cityImg = computed(() => {
  if (!city.value) return ''
  return getCityImage(city.value)
})

const nearbySpots = computed(() => {
  if (!spot.value) return []
  const allSpots = spotHelpers.filterByCity(spot.value.cityId)
  return allSpots
    .filter(s => s.id !== spot.value.id)
    .slice(0, 6)
})

function getNearbyImg(s) {
  return getSpotImage(s, city.value)
}

const isFav = computed(() => {
  if (!spot.value) return false
  return isFavorite('spots', spot.value.id)
})

function toggleFav() {
  if (!spot.value) return
  toggleFavorite('spots', spot.value.id, {
    id: spot.value.id,
    name: spot.value.name,
    cityId: spot.value.cityId,
    cityName: city.value?.name,
    cover: spot.value.cover,
    rating: spot.value.rating,
    intro: spot.value.intro,
    tags: spot.value.tags,
    duration: spot.value.duration,
    ticket: spot.value.ticket
  })
}

const spotMapRef = ref(null)
const { initMap, addMarker, setCenter, setZoom, destroy } = useAMap(spotMapRef, {
  zoom: 15,
  center: [116.397428, 39.90923],
  showToolBar: false,
  showScale: true
})

let spotMarker = null

async function initSpotMap() {
  if (!spot.value) return
  await nextTick()
  try {
    const center = [spot.value.lng, spot.value.lat]
    const mapInstance = await initMap(center)
    if (mapInstance && spot.value) {
      if (spotMarker) {
        mapInstance.remove(spotMarker)
      }
      setCenter(spot.value.lng, spot.value.lat)
      setZoom(15)
      spotMarker = addMarker(
        { lng: spot.value.lng, lat: spot.value.lat },
        spot.value.name
      )
    }
  } catch (e) {
    console.warn('高德地图加载失败')
  }
}

watch(() => route.params.spotId, () => {
  nextTick(() => initSpotMap())
})

onMounted(() => {
  initSpotMap()
})

onUnmounted(() => {
  destroy()
})
</script>

<style scoped>
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 20px 0;
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
}
.back-link:hover { color: var(--primary-dark); }

.spot-hero {
  position: relative;
  color: #fff;
  overflow: hidden;
  margin-bottom: 30px;
}

.hero-img { height: 420px; }
.hero-img :deep(.imgbox-img) {
  filter: brightness(0.48) saturate(1.15);
  transform: scale(1.05);
}

.hero-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  z-index: 2;
}

.hero-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}

.hero-tag {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 3px 14px;
  border-radius: 14px;
  font-size: 12px;
}

.hero-title {
  font-size: 38px;
  font-weight: 800;
  margin-bottom: 10px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  margin-bottom: 16px;
  opacity: 0.95;
}

.rating { color: #ffd56a; font-weight: 700; }
.dot { opacity: 0.6; }

.hero-actions { margin-bottom: 30px; }

.fav-btn {
  border-radius: 24px !important;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.fav-btn.active {
  background: linear-gradient(135deg, #f093fb, #f5576c) !important;
  border: none !important;
  color: #fff !important;
}

.main-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 28px;
  padding-bottom: 40px;
}

.layout-main { display: flex; flex-direction: column; gap: 24px; }

.intro-card {
  background: #fff;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 16px rgba(20, 60, 60, 0.06);
}

.intro-text {
  font-size: 16px;
  color: var(--text);
  line-height: 1.8;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #fff;
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 4px 16px rgba(20, 60, 60, 0.06);
  border: 1px solid rgba(20, 60, 60, 0.04);
}

.info-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary-light), var(--primary));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.info-label {
  font-size: 12px;
  color: var(--text-light);
  margin-bottom: 4px;
}

.info-val {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  line-height: 1.5;
}

.tips-card {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: linear-gradient(135deg, #fff8ec, #fff3da);
  border-left: 4px solid var(--accent);
  padding: 18px 22px;
  border-radius: 0 14px 14px 0;
}

.tips-icon { color: var(--accent); font-size: 22px; margin-top: 2px; }

.tips-title { color: #8a5a18; display: block; margin-bottom: 6px; font-size: 15px; }

.tips-text { color: #6b4a18; font-size: 14px; line-height: 1.6; margin: 0; }

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 700;
  color: var(--primary-dark);
  margin-bottom: 18px;
}

.title-bar {
  width: 4px;
  height: 24px;
  background: linear-gradient(180deg, var(--primary-light), var(--accent));
  border-radius: 2px;
}

.map-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(20, 60, 60, 0.08);
}

.map-container {
  width: 100%;
  height: 320px;
  background-color: #e8f0ef;
}

.map-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border-top: 1px solid var(--bg-soft);
}

.map-coords {
  display: flex;
  gap: 14px;
  font-size: 13px;
  color: var(--text-light);
}

.map-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
}
.map-link:hover { text-decoration: underline; }

.nearby-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.nearby-card {
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(20, 60, 60, 0.06);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;
}

.nearby-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(20, 60, 60, 0.12);
}

.nearby-body { padding: 12px 14px; }

.nearby-body h4 {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 6px;
  color: var(--text);
}

.nearby-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: var(--text-light);
}

.rating-sm { color: var(--accent); font-weight: 600; }

.layout-sidebar { display: flex; flex-direction: column; gap: 20px; }

.sidebar-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(20, 60, 60, 0.08);
}

.city-info { padding: 16px; text-align: center; }
.city-info h3 { font-size: 18px; margin-bottom: 4px; color: var(--primary-dark); }
.city-info p { font-size: 13px; color: var(--text-light); margin-bottom: 12px; }

.sidebar-link {
  display: block;
  text-align: center;
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  padding: 10px;
  background: var(--bg-soft);
  border-radius: 10px;
  transition: all 0.2s;
}
.sidebar-link:hover { background: var(--primary); color: #fff; }

.quick-info { padding: 20px; }
.quick-info h4 {
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-dark);
  margin-bottom: 14px;
}
.quick-info ul { list-style: none; padding: 0; margin: 0; }
.quick-info li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid var(--bg-soft);
  font-size: 13px;
  color: var(--text-light);
}
.quick-info .val { color: var(--text); font-weight: 600; }
.quick-info li:last-child { border-bottom: none; }

@media (max-width: 968px) {
  .main-layout { grid-template-columns: 1fr; }
  .nearby-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .hero-title { font-size: 28px; }
  .info-grid { grid-template-columns: 1fr; }
  .nearby-grid { grid-template-columns: 1fr; }
}
</style>
