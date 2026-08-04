<template>
  <div class="favorites-page">
    <div class="fav-header">
      <div class="container">
        <h1 class="fav-title">
          <el-icon><Star /></el-icon> 我的收藏
        </h1>
        <p class="fav-sub">管理你收藏的城市、景点、美食和攻略</p>
        <div class="fav-stats">
          <div class="stat-item" @click="activeType = 'all'" :class="{ active: activeType === 'all' }">
            <span class="stat-num">{{ totalCount }}</span>
            <span class="stat-label">全部</span>
          </div>
          <div class="stat-item" @click="activeType = 'cities'" :class="{ active: activeType === 'cities' }">
            <span class="stat-num">{{ cityItems.length }}</span>
            <span class="stat-label">城市</span>
          </div>
          <div class="stat-item" @click="activeType = 'spots'" :class="{ active: activeType === 'spots' }">
            <span class="stat-num">{{ spotItems.length }}</span>
            <span class="stat-label">景点</span>
          </div>
          <div class="stat-item" @click="activeType = 'foods'" :class="{ active: activeType === 'foods' }">
            <span class="stat-num">{{ foodItems.length }}</span>
            <span class="stat-label">美食</span>
          </div>
          <div class="stat-item" @click="activeType = 'guides'" :class="{ active: activeType === 'guides' }">
            <span class="stat-num">{{ guideItems.length }}</span>
            <span class="stat-label">攻略</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container fav-content">
      <div v-if="totalCount === 0" class="empty-state">
        <div class="empty-icon">⭐</div>
        <h3>还没有收藏</h3>
        <p>去探索页发现喜欢的城市、景点和攻略吧</p>
        <div class="empty-actions">
          <el-button type="primary" size="large" @click="$router.push('/explore')">
            去探索
          </el-button>
          <el-button size="large" @click="$router.push('/cities')">浏览城市</el-button>
        </div>
      </div>

      <template v-else>
        <section v-if="(activeType === 'all' || activeType === 'cities') && cityItems.length" class="fav-section">
          <h2 class="section-title">
            <span class="title-bar"></span>
            收藏的城市 <span class="section-count">{{ cityItems.length }}</span>
          </h2>
          <div class="fav-grid grid-cols-4">
            <div v-for="item in cityItems" :key="item.id" class="fav-card city-card">
              <div class="fav-cover">
                <ImgBox :src="getCityImg(item)" :alt="item.name" height="160px" :overlay="true" />
                <button class="remove-btn" @click.stop="removeFav('cities', item.id)">
                  <el-icon><Close /></el-icon>
                </button>
              </div>
              <div class="fav-body">
                <h4>{{ item.name }}</h4>
                <p>{{ item.slogan }}</p>
                <div class="fav-footer">
                  <router-link :to="`/city/${item.id}`" class="view-btn">查看详情 →</router-link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section v-if="(activeType === 'all' || activeType === 'spots') && spotItems.length" class="fav-section">
          <h2 class="section-title">
            <span class="title-bar"></span>
            收藏的景点 <span class="section-count">{{ spotItems.length }}</span>
          </h2>
          <div class="fav-grid grid-cols-3">
            <div v-for="item in spotItems" :key="item.id" class="fav-card spot-card">
              <div class="fav-cover">
                <ImgBox :src="getSpotImg(item)" :alt="item.name" height="160px" :overlay="true" />
                <span class="fav-rating">★ {{ item.rating }}</span>
                <button class="remove-btn" @click.stop="removeFav('spots', item.id)">
                  <el-icon><Close /></el-icon>
                </button>
              </div>
              <div class="fav-body">
                <h4>{{ item.name }}</h4>
                <p>{{ item.intro }}</p>
                <div class="fav-tags" v-if="item.tags?.length">
                  <span v-for="t in item.tags.slice(0, 2)" :key="t" class="mini-tag">{{ t }}</span>
                </div>
                <div class="fav-footer">
                  <router-link :to="`/spot/${item.id}`" class="view-btn">查看详情 →</router-link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section v-if="(activeType === 'all' || activeType === 'foods') && foodItems.length" class="fav-section">
          <h2 class="section-title">
            <span class="title-bar"></span>
            收藏的美食 <span class="section-count">{{ foodItems.length }}</span>
          </h2>
          <div class="fav-grid grid-cols-3">
            <div v-for="item in foodItems" :key="item.id" class="fav-card food-card">
              <div class="fav-cover">
                <ImgBox :src="getFoodImg(item)" :alt="item.name" height="160px" :overlay="true" />
                <span class="fav-type">{{ item.type }}</span>
                <button class="remove-btn" @click.stop="removeFav('foods', item.id)">
                  <el-icon><Close /></el-icon>
                </button>
              </div>
              <div class="fav-body">
                <h4>{{ item.name }}</h4>
                <p>{{ item.desc }}</p>
                <div class="fav-meta">
                  <span>💰 {{ item.priceRange }}</span>
                  <span class="fav-rating-sm">★ {{ item.rating }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section v-if="(activeType === 'all' || activeType === 'guides') && guideItems.length" class="fav-section">
          <h2 class="section-title">
            <span class="title-bar"></span>
            收藏的攻略 <span class="section-count">{{ guideItems.length }}</span>
          </h2>
          <div class="fav-grid grid-cols-2">
            <div v-for="item in guideItems" :key="item.id" class="fav-card guide-card">
              <div class="fav-cover">
                <ImgBox :src="getGuideImg(item)" :alt="item.title" height="180px" :overlay="true" />
                <span class="fav-days">{{ item.days }}天</span>
                <button class="remove-btn" @click.stop="removeFav('guides', item.id)">
                  <el-icon><Close /></el-icon>
                </button>
              </div>
              <div class="fav-body">
                <h4>{{ item.title }}</h4>
                <p>{{ item.summary }}</p>
                <div class="fav-meta">
                  <span>💰 ¥{{ item.budget?.min }}-{{ item.budget?.max }}</span>
                  <span>{{ item.days }}天行程</span>
                </div>
                <div class="fav-footer">
                  <router-link :to="`/guide/${item.id}`" class="view-btn">查看攻略 →</router-link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Star, Close } from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { getCityCover } from '../composables/useImageLoader'
import { useFavorites } from '../composables/useFavorites'
import {
  cityHelpers,
  spotHelpers,
  foodHelpers,
  guideHelpers,
  cities
} from '../data/index'

const { state, removeFavorite } = useFavorites()
const activeType = ref('all')

const cityItems = computed(() => {
  const ids = state.value.cities || []
  const dataMap = state.value.cities_data || {}
  return ids.map(id => dataMap[id] || cityHelpers.findById(id)).filter(Boolean)
})

const spotItems = computed(() => {
  const ids = state.value.spots || []
  const dataMap = state.value.spots_data || {}
  return ids.map(id => dataMap[id] || spotHelpers.findById(id)).filter(Boolean)
})

const foodItems = computed(() => {
  const ids = state.value.foods || []
  const dataMap = state.value.foods_data || {}
  return ids.map(id => dataMap[id] || foodHelpers.findById(id)).filter(Boolean)
})

const guideItems = computed(() => {
  const ids = state.value.guides || []
  const dataMap = state.value.guides_data || {}
  return ids.map(id => dataMap[id] || guideHelpers.findById(id)).filter(Boolean)
})

const totalCount = computed(() => {
  return cityItems.value.length + spotItems.value.length +
    foodItems.value.length + guideItems.value.length
})

function removeFav(type, id) {
  removeFavorite(type, id)
}

function getCityImg(item) {
  if (!item) return ''
  const lng = item.lng || 116.4
  const lat = item.lat || 39.9
  const result = getCityCover(lng, lat, item.cover, item.cover)
  return result.primary
}

function getSpotImg(item) {
  if (!item) return ''
  const lng = item.lng || 116.4
  const lat = item.lat || 39.9
  const result = getCityCover(lng, lat, item.cover, item.cover)
  return result.primary
}

function getFoodImg(item) {
  if (!item) return ''
  let lng = 116.4
  let lat = 39.9
  if (item.cityId) {
    const city = cityHelpers.findById(item.cityId)
    if (city) {
      lng = city.lng
      lat = city.lat
    }
  }
  const result = getCityCover(lng, lat, item.cover, item.cover)
  return result.primary
}

function getGuideImg(item) {
  if (!item) return ''
  let lng = 116.4
  let lat = 39.9
  if (item.cityId) {
    const city = cityHelpers.findById(item.cityId)
    if (city) {
      lng = city.lng
      lat = city.lat
    }
  }
  const result = getCityCover(lng, lat, item.cover, item.cover)
  return result.primary
}
</script>

<style scoped>
.favorites-page { padding-bottom: 60px; }

.fav-header {
  background: linear-gradient(135deg, #1f9e8f 0%, #14746a 100%);
  padding: 40px 0 30px;
  color: #fff;
}

.fav-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.fav-title .el-icon { font-size: 28px; }

.fav-sub {
  font-size: 15px;
  opacity: 0.9;
  margin-bottom: 24px;
}

.fav-stats {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.25s ease;
  min-width: 80px;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.stat-item.active {
  background: #fff;
  color: var(--primary-dark);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.stat-num { font-size: 22px; font-weight: 800; }
.stat-label { font-size: 12px; opacity: 0.9; }
.stat-item.active .stat-label { opacity: 0.7; }

.fav-content { padding: 30px 24px; }

.empty-state {
  text-align: center;
  padding: 80px 20px;
}

.empty-icon {
  font-size: 80px;
  margin-bottom: 16px;
  opacity: 0.6;
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

.empty-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.fav-section { margin-bottom: 40px; }

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-dark);
  margin-bottom: 18px;
}

.title-bar {
  width: 4px;
  height: 22px;
  background: linear-gradient(180deg, var(--primary-light), var(--accent));
  border-radius: 2px;
}

.section-count {
  background: var(--accent-soft);
  color: #8a5a18;
  font-size: 13px;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 12px;
}

.fav-grid {
  display: grid;
  gap: 18px;
}

.fav-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(20, 60, 60, 0.08);
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  border: 1px solid rgba(20, 60, 60, 0.04);
}

.fav-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(20, 60, 60, 0.14);
}

.fav-cover {
  position: relative;
  overflow: hidden;
}

.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  opacity: 0;
  transition: all 0.25s ease;
  z-index: 3;
}

.fav-card:hover .remove-btn { opacity: 1; }

.remove-btn:hover {
  background: #f5576c;
  color: #fff;
  transform: scale(1.1);
}

.fav-rating {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(240, 168, 48, 0.9);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  z-index: 2;
}

.fav-type {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(31, 158, 143, 0.9);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
  z-index: 2;
}

.fav-days {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary-dark);
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
  z-index: 2;
}

.fav-body { padding: 14px 16px; }

.fav-body h4 {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 4px;
}

.fav-body p {
  font-size: 13px;
  color: var(--text-light);
  margin: 0 0 8px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fav-tags {
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
}

.fav-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: var(--text-light);
  margin-bottom: 8px;
}

.fav-rating-sm { color: var(--accent); font-weight: 600; }

.fav-footer {
  display: flex;
  justify-content: flex-end;
}

.view-btn {
  display: inline-block;
  color: var(--primary);
  font-weight: 600;
  font-size: 13px;
  text-decoration: none;
  transition: color 0.2s;
}

.view-btn:hover { color: var(--primary-dark); }

@media (max-width: 768px) {
  .fav-title { font-size: 24px; }
  .fav-stats { gap: 8px; }
  .stat-item { padding: 10px 16px; min-width: 65px; }
  .stat-num { font-size: 18px; }
  .fav-content { padding: 20px 16px; }
}
</style>
