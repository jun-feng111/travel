<template>
  <div v-if="guide" class="guide-detail">
    <div class="container">
      <router-link :to="`/city/${city.id}`" class="back-link">
        <el-icon><ArrowLeft /></el-icon> 返回 {{ city.name }}
      </router-link>
    </div>

    <div class="guide-hero">
      <ImgBox :src="guideImg" :alt="guide.title" height="340px" :overlay="true" class="hero-img" />
      <div class="hero-content">
        <div class="container">
          <div class="hero-tags">
            <span class="hero-tag">{{ city.name }}</span>
            <span class="hero-tag">{{ guide.days }}天</span>
            <span class="hero-tag budget-tag">💰 ¥{{ guide.budget?.min }}-{{ guide.budget?.max }}</span>
          </div>
          <h1 class="hero-title">{{ guide.title }}</h1>
          <p class="hero-summary">{{ guide.summary }}</p>
          <div class="hero-actions">
            <el-button
              :type="isFav ? 'danger' : 'default'"
              @click="toggleFav"
              class="fav-btn"
              :class="{ active: isFav }"
            >
              <el-icon><Star v-if="!isFav" /><StarFilled v-else /></el-icon>
              {{ isFav ? '已收藏' : '收藏攻略' }}
            </el-button>
            <el-button type="primary" class="share-btn" @click="copyLink">
              <el-icon><Share /></el-icon> 分享
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="container main-layout">
      <div class="layout-main">
        <section class="info-cards">
          <div class="info-card budget-card">
            <div class="info-card-head">
              <el-icon class="card-icon"><Wallet /></el-icon>
              <span class="card-title">预算参考</span>
            </div>
            <div class="budget-amounts">
              <div class="budget-item">
                <span class="budget-label">预算范围</span>
                <span class="budget-value">¥{{ guide.budget?.min }} - ¥{{ guide.budget?.max }}</span>
              </div>
              <div class="budget-bar">
                <div class="budget-bar-fill" :style="{ width: budgetPercent + '%' }"></div>
              </div>
              <p class="budget-note">{{ guide.budget?.note }}</p>
            </div>
          </div>

          <div class="info-card transport-card">
            <div class="info-card-head">
              <el-icon class="card-icon"><Van /></el-icon>
              <span class="card-title">交通方式</span>
            </div>
            <p class="transport-text">{{ guide.transport }}</p>
          </div>

          <div class="info-card season-card">
            <div class="info-card-head">
              <el-icon class="card-icon"><Calendar /></el-icon>
              <span class="card-title">最佳季节</span>
            </div>
            <p class="season-text">{{ guide.bestSeason }}</p>
          </div>
        </section>

        <section v-if="weatherNow" class="weather-section">
          <div class="weather-card">
            <div class="weather-main">
              <div class="weather-icon">
                <span v-if="weatherNow.text?.includes('晴')">☀️</span>
                <span v-else-if="weatherNow.text?.includes('雨')">🌧️</span>
                <span v-else-if="weatherNow.text?.includes('雪')">❄️</span>
                <span v-else>⛅</span>
              </div>
              <div class="weather-info">
                <div class="weather-temp">{{ weatherNow.temp }}°C</div>
                <div class="weather-text">{{ weatherNow.text }}</div>
              </div>
              <div class="weather-meta">
                <div class="meta-item">💧 {{ weatherNow.humidity }}%</div>
                <div class="meta-item">🌬️ {{ weatherNow.windDir }} {{ weatherNow.windScale }}级</div>
              </div>
            </div>
            <div class="weather-tips" v-if="weatherTips.length">
              <span v-for="(tip, i) in weatherTips" :key="i" class="weather-tip">{{ tip }}</span>
            </div>
          </div>
        </section>

        <section class="itinerary-section">
          <h2 class="section-title">
            <span class="title-bar"></span>
            行程安排
            <span class="title-sub">{{ guide.days }}天{{ guide.itinerary?.length || 0 }}夜</span>
          </h2>

          <div class="timeline">
            <div
              v-for="(day, dayIdx) in guide.itinerary"
              :key="day.day"
              class="timeline-day"
            >
              <div class="day-header">
                <div class="day-badge">Day {{ day.day }}</div>
                <h3 class="day-title">{{ day.title }}</h3>
                <div class="day-cost">预算 ¥{{ day.cost || 0 }}</div>
              </div>

              <div class="day-schedule">
                <div
                  v-for="(item, idx) in day.schedule"
                  :key="idx"
                  class="schedule-item"
                >
                  <div class="schedule-time">{{ item.time }}</div>
                  <div class="schedule-dot"></div>
                  <div class="schedule-content">
                    <p class="schedule-text">{{ item.content }}</p>
                    <div class="schedule-meta">
                      <span v-if="item.cost" class="schedule-cost">💰 ¥{{ item.cost }}</span>
                      <router-link
                        v-if="item.spotId"
                        :to="`/spot/${item.spotId}`"
                        class="schedule-link"
                      >📍 查看景点</router-link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="day-footer">
                <div class="footer-item" v-if="day.hotel">
                  <el-icon><House /></el-icon>
                  <span>{{ day.hotel }}</span>
                </div>
                <div class="footer-item" v-if="day.transport">
                  <el-icon><Van /></el-icon>
                  <span>{{ day.transport }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section v-if="guide.highlights?.length" class="highlights-section">
          <h2 class="section-title">
            <span class="title-bar"></span>
            行程亮点
          </h2>
          <div class="highlights-grid">
            <div v-for="(h, i) in guide.highlights" :key="i" class="highlight-card">
              <span class="highlight-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="highlight-text">{{ h }}</span>
            </div>
          </div>
        </section>

        <section v-if="guide.tips?.length" class="tips-section">
          <h2 class="section-title">
            <span class="title-bar"></span>
            实用贴士
          </h2>
          <div class="tips-list">
            <div v-for="(tip, i) in guide.tips" :key="i" class="tip-item">
              <el-icon class="tip-icon"><InfoFilled /></el-icon>
              <span class="tip-text">{{ tip }}</span>
            </div>
          </div>
        </section>
      </div>

      <aside class="layout-sidebar">
        <div class="sidebar-card citi-card">
          <div class="sidebar-head">
            <ImgBox :src="cityImg" :alt="city.name" height="120px" :overlay="true" />
            <div class="city-overlay">
              <h3>{{ city.name }}</h3>
              <p>{{ city.slogan }}</p>
            </div>
          </div>
          <div class="sidebar-body">
            <router-link :to="`/city/${city.id}`" class="sidebar-link">查看城市详情 →</router-link>
          </div>
        </div>

        <div class="sidebar-card budget-summary">
          <h4>预算概览</h4>
          <div class="budget-circle">
            <div class="circle-inner">
              <span class="amount">¥{{ guide.budget?.min }}</span>
              <span class="per">起/人</span>
            </div>
          </div>
          <ul class="budget-list">
            <li>
              <span>住宿</span>
              <span class="list-value">约 ¥{{ Math.round((guide.budget?.min || 0) * 0.4) }}</span>
            </li>
            <li>
              <span>餐饮</span>
              <span class="list-value">约 ¥{{ Math.round((guide.budget?.min || 0) * 0.25) }}</span>
            </li>
            <li>
              <span>门票</span>
              <span class="list-value">约 ¥{{ Math.round((guide.budget?.min || 0) * 0.2) }}</span>
            </li>
            <li>
              <span>交通</span>
              <span class="list-value">约 ¥{{ Math.round((guide.budget?.min || 0) * 0.15) }}</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
  <el-empty v-else description="未找到该攻略" />
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  ArrowLeft,
  Star,
  StarFilled,
  Share,
  Wallet,
  Van,
  Calendar,
  House,
  InfoFilled
} from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { getGuideImage, getCityImage } from '../composables/useImageSource'
import { useFavorites } from '../composables/useFavorites'
import { useWeather } from '../composables/useWeather'
import { guideHelpers, cityHelpers } from '../data/index'

const route = useRoute()
const { isFavorite, toggleFavorite } = useFavorites()
const { now: weatherNow, fetchWeather, weatherTips } = useWeather()

const guide = computed(() => guideHelpers.findById(route.params.guideId))
const city = computed(() => guide.value ? cityHelpers.findById(guide.value.cityId) : null)

const guideImg = computed(() => {
  if (!guide.value) return ''
  return getGuideImage(guide.value, city.value)
})

const cityImg = computed(() => {
  if (!city.value) return ''
  return getCityImage(city.value)
})

const isFav = computed(() => {
  if (!guide.value) return false
  return isFavorite('guides', guide.value.id)
})

const budgetPercent = computed(() => {
  const min = guide.value?.budget?.min || 0
  const max = guide.value?.budget?.max || 0
  if (!max) return 0
  return Math.min(100, Math.round((min / max) * 100))
})

function toggleFav() {
  if (!guide.value) return
  toggleFavorite('guides', guide.value.id, {
    id: guide.value.id,
    title: guide.value.title,
    cityId: guide.value.cityId,
    cityName: city.value?.name,
    cover: guide.value.cover,
    summary: guide.value.summary,
    days: guide.value.days,
    budget: guide.value.budget
  })
}

function copyLink() {
  const url = window.location.href
  navigator.clipboard?.writeText(url)
  alert('链接已复制到剪贴板！')
}

onMounted(() => {
  if (city.value) {
    fetchWeather(city.value.name)
  }
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
  transition: color 0.2s;
}
.back-link:hover { color: var(--primary-dark); }

.guide-hero {
  position: relative;
  color: #fff;
  overflow: hidden;
  margin-bottom: 30px;
}

.hero-img { height: 340px; }

.hero-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  z-index: 2;
}

.hero-tags {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.hero-tag {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 4px 14px;
  border-radius: 16px;
  font-size: 13px;
}

.budget-tag {
  background: rgba(240, 168, 48, 0.85);
  border-color: rgba(240, 168, 48, 0.9);
}

.hero-title {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 10px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}

.hero-summary {
  font-size: 16px;
  opacity: 0.95;
  margin-bottom: 20px;
  max-width: 720px;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
}

.fav-btn, .share-btn {
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
  grid-template-columns: 1fr 320px;
  gap: 28px;
  padding-bottom: 40px;
}

.layout-main { display: flex; flex-direction: column; gap: 28px; }

.info-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.info-card {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 16px rgba(20, 60, 60, 0.06);
  border: 1px solid rgba(20, 60, 60, 0.04);
}

.info-card-head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.card-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--primary-light), var(--primary));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
}

.budget-amounts { display: flex; flex-direction: column; gap: 8px; }

.budget-item {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.budget-label { color: var(--text-light); }
.budget-value { color: var(--primary-dark); font-weight: 600; }

.budget-bar {
  height: 8px;
  background: var(--bg-soft);
  border-radius: 4px;
  overflow: hidden;
}

.budget-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-light), var(--accent));
  border-radius: 4px;
  transition: width 0.5s ease;
}

.budget-note {
  font-size: 12px;
  color: var(--text-light);
  line-height: 1.5;
}

.transport-text, .season-text {
  font-size: 13px;
  color: var(--text);
  line-height: 1.6;
}

.weather-section { margin-bottom: 0; }

.weather-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 20px;
  color: #fff;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.25);
}

.weather-main {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
}

.weather-icon { font-size: 40px; }
.weather-temp { font-size: 32px; font-weight: 700; }
.weather-text { font-size: 14px; opacity: 0.9; }
.weather-meta { margin-left: auto; display: flex; gap: 12px; font-size: 13px; opacity: 0.9; }
.meta-item { background: rgba(255,255,255,0.2); padding: 4px 10px; border-radius: 12px; }

.weather-tips { display: flex; flex-wrap: wrap; gap: 8px; }
.weather-tip {
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(4px);
  padding: 6px 12px;
  border-radius: 14px;
  font-size: 12px;
}

.section-title {
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
  background: linear-gradient(180deg, var(--primary-light), var(--accent));
  border-radius: 2px;
}

.title-sub {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-light);
  background: var(--bg-soft);
  padding: 3px 10px;
  border-radius: 12px;
}

.timeline { display: flex; flex-direction: column; gap: 24px; }

.timeline-day {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 16px rgba(20, 60, 60, 0.06);
  border: 1px solid rgba(20, 60, 60, 0.04);
}

.day-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  padding-bottom: 14px;
  border-bottom: 2px dashed var(--bg-soft);
}

.day-badge {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 20px;
}

.day-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  flex: 1;
}

.day-cost {
  background: var(--accent-soft);
  color: #8a5a18;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 14px;
}

.day-schedule {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  padding-left: 80px;
}

.schedule-item {
  position: relative;
  display: flex;
  gap: 12px;
  padding: 12px 0;
}

.schedule-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 26px;
  top: 40px;
  bottom: -6px;
  width: 2px;
  background: var(--bg-soft);
}

.schedule-time {
  position: absolute;
  left: -72px;
  width: 60px;
  text-align: right;
  font-size: 13px;
  font-weight: 600;
  color: var(--primary);
}

.schedule-dot {
  position: absolute;
  left: -6px;
  top: 16px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid var(--primary);
  z-index: 1;
}

.schedule-content { flex: 1; }

.schedule-text {
  font-size: 14px;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 6px;
}

.schedule-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.schedule-cost {
  font-size: 12px;
  color: var(--accent);
  font-weight: 600;
}

.schedule-link {
  font-size: 12px;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
}
.schedule-link:hover { text-decoration: underline; }

.day-footer {
  display: flex;
  gap: 20px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--bg-soft);
}

.footer-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--text-light);
}
.footer-item .el-icon { color: var(--primary); }

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.highlight-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #f0faf8, #e6f5f2);
  padding: 14px 16px;
  border-radius: 12px;
  border-left: 4px solid var(--primary);
}

.highlight-num {
  font-size: 18px;
  font-weight: 800;
  color: var(--primary);
  font-family: monospace;
}

.highlight-text {
  font-size: 14px;
  color: var(--text);
  line-height: 1.5;
}

.tips-list { display: flex; flex-direction: column; gap: 10px; }

.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  background: linear-gradient(135deg, #fff8ec, #fff3da);
  border-left: 4px solid var(--accent);
  border-radius: 0 12px 12px 0;
}

.tip-icon { color: var(--accent); font-size: 18px; flex-shrink: 0; margin-top: 2px; }

.tip-text {
  font-size: 13px;
  color: #6b4a18;
  line-height: 1.6;
}

.layout-sidebar { display: flex; flex-direction: column; gap: 20px; }

.sidebar-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(20, 60, 60, 0.08);
  border: 1px solid rgba(20, 60, 60, 0.04);
}

.citi-card .sidebar-head { position: relative; }

.city-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 14px 16px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: #fff;
}

.city-overlay h3 { font-size: 18px; margin-bottom: 4px; }
.city-overlay p { font-size: 13px; opacity: 0.9; }

.sidebar-body { padding: 14px 16px; }

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

.budget-summary { padding: 20px; }
.budget-summary h4 {
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-dark);
  margin-bottom: 14px;
}

.budget-circle {
  width: 100px;
  height: 100px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-light), var(--primary));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(31, 158, 143, 0.3);
}

.circle-inner { text-align: center; color: #fff; }
.circle-inner .amount { font-size: 20px; font-weight: 800; }
.circle-inner .per { font-size: 12px; opacity: 0.9; }

.budget-list { list-style: none; padding: 0; margin: 0; }
.budget-list li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid var(--bg-soft);
  font-size: 13px;
  color: var(--text-light);
}
.budget-list .list-value { color: var(--text); font-weight: 600; }
.budget-list li:last-child { border-bottom: none; }

@media (max-width: 968px) {
  .main-layout { grid-template-columns: 1fr; }
  .info-cards { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .hero-title { font-size: 26px; }
  .hero-summary { font-size: 14px; }
  .day-schedule { padding-left: 60px; }
  .schedule-time { left: -60px; font-size: 12px; width: 50px; }
  .highlights-grid { grid-template-columns: 1fr; }
  .weather-meta { margin-left: 0; margin-top: 8px; width: 100%; }
  .weather-main { flex-wrap: wrap; }
}
</style>
