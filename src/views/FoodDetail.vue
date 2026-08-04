<template>
  <div v-if="food" class="food-detail">
    <div class="container">
      <router-link :to="`/city/${city.id}`" class="back-link">
        <el-icon><ArrowLeft /></el-icon> 返回 {{ city.name }}
      </router-link>
    </div>

    <div class="food-hero">
      <ImgBox :src="foodImg" :alt="food.name" height="340px" :overlay="true" class="hero-img" />
      <div class="hero-content">
        <div class="container">
          <div class="hero-tags">
            <span class="hero-tag">{{ food.type }}</span>
            <span class="hero-tag city-tag">{{ city.name }}</span>
          </div>
          <h1 class="hero-title">{{ food.name }}</h1>
          <p class="hero-desc">{{ food.desc }}</p>
          <div class="hero-meta">
            <span class="rating">★ {{ food.rating }}</span>
            <span class="dot">·</span>
            <span>{{ food.priceRange }}</span>
          </div>
          <div class="hero-actions">
            <el-button
              :type="isFav ? 'danger' : 'default'"
              @click="toggleFav"
              class="fav-btn"
              :class="{ active: isFav }"
            >
              <el-icon><Star v-if="!isFav" /><StarFilled v-else /></el-icon>
              {{ isFav ? '已收藏' : '收藏美食' }}
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="container main-layout">
      <div class="layout-main">
        <section class="info-card">
          <h2 class="section-title">
            <span class="title-bar"></span>
            美食介绍
          </h2>
          <p class="info-text">{{ food.desc }}</p>
        </section>

        <section v-if="food.recommend?.length" class="recommend-section">
          <h2 class="section-title">
            <span class="title-bar"></span>
            推荐店铺
          </h2>
          <div class="recommend-grid">
            <div v-for="(r, i) in food.recommend" :key="i" class="recommend-card">
              <span class="rec-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="rec-name">{{ r }}</span>
            </div>
          </div>
        </section>

        <section v-if="nearbyFoods.length" class="nearby-section">
          <h2 class="section-title">
            <span class="title-bar"></span>
            附近美食
          </h2>
          <div class="nearby-grid">
            <div
              v-for="f in nearbyFoods"
              :key="f.id"
              class="nearby-card"
              @click="$router.push(`/food/${f.id}`)"
            >
              <div class="nearby-cover">
                <ImgBox :src="getNearbyImg(f)" :alt="f.name" height="140px" :overlay="true" />
                <span class="nearby-type">{{ f.type }}</span>
              </div>
              <div class="nearby-body">
                <h4>{{ f.name }}</h4>
                <div class="nearby-meta">
                  <span class="rating-sm">★ {{ f.rating }}</span>
                  <span class="nearby-price">{{ f.priceRange }}</span>
                </div>
              </div>
            </div>
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
              <span>🍽️ 类型</span>
              <span class="val">{{ food.type }}</span>
            </li>
            <li>
              <span>⭐ 评分</span>
              <span class="val">{{ food.rating }}</span>
            </li>
            <li>
              <span>💰 价格</span>
              <span class="val">{{ food.priceRange }}</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
  <el-empty v-else description="未找到该美食" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft, Star, StarFilled } from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { getCityCover } from '../composables/useImageLoader'
import { useFavorites } from '../composables/useFavorites'
import { foodHelpers, cityHelpers } from '../data/index'

const route = useRoute()
const { isFavorite, toggleFavorite } = useFavorites()

const food = computed(() => foodHelpers.findById(route.params.foodId))
const city = computed(() => food.value ? cityHelpers.findById(food.value.cityId) : null)

const foodImg = computed(() => {
  if (!food.value) return ''
  if (city.value) {
    const cover = getCityCover(city.value.lng, city.value.lat, food.value.name + ' food')
    return cover.primary
  }
  const keyword = encodeURIComponent(food.value.name + ' chinese food')
  return `https://source.unsplash.com/600x400/?${keyword}`
})

const cityImg = computed(() => {
  if (!city.value) return ''
  const cover = getCityCover(city.value.lng, city.value.lat, city.value.name)
  return cover.primary
})

const nearbyFoods = computed(() => {
  if (!food.value) return []
  return foodHelpers.filterByCity(food.value.cityId)
    .filter(f => f.id !== food.value.id)
    .slice(0, 6)
})

function getNearbyImg(f) {
  if (!city.value) return ''
  const cover = getCityCover(city.value.lng, city.value.lat, f.name + ' food')
  return cover.primary
}

const isFav = computed(() => {
  if (!food.value) return false
  return isFavorite('foods', food.value.id)
})

function toggleFav() {
  if (!food.value) return
  toggleFavorite('foods', food.value.id, {
    id: food.value.id,
    name: food.value.name,
    cityId: food.value.cityId,
    cityName: city.value?.name,
    cover: food.value.cover,
    desc: food.value.desc,
    type: food.value.type,
    priceRange: food.value.priceRange,
    rating: food.value.rating,
    recommend: food.value.recommend
  })
}
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

.food-hero {
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
  gap: 8px;
  margin-bottom: 14px;
}

.hero-tag {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 3px 14px;
  border-radius: 14px;
  font-size: 12px;
}
.city-tag { background: rgba(31, 158, 143, 0.7); border-color: rgba(31, 158, 143, 0.8); }

.hero-title {
  font-size: 38px;
  font-weight: 800;
  margin-bottom: 10px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}

.hero-desc {
  font-size: 16px;
  opacity: 0.95;
  margin-bottom: 10px;
  max-width: 720px;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
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

.info-card {
  background: #fff;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 16px rgba(20, 60, 60, 0.06);
}

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

.info-text {
  font-size: 16px;
  color: var(--text);
  line-height: 1.8;
  margin: 0;
}

.recommend-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.recommend-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #fff8ec, #fff3da);
  padding: 14px 18px;
  border-radius: 12px;
  border-left: 4px solid var(--accent);
}

.rec-num {
  font-size: 18px;
  font-weight: 800;
  color: var(--accent);
  font-family: monospace;
}

.rec-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
}

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
  cursor: pointer;
}

.nearby-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(20, 60, 60, 0.12);
}

.nearby-cover { position: relative; }
.nearby-type {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(31, 158, 143, 0.9);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 10px;
  z-index: 2;
}

.nearby-body { padding: 12px 14px; }
.nearby-body h4 { font-size: 14px; font-weight: 600; margin: 0 0 6px; }
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
.city-info h3 { font-size: 18px; margin: 0 0 4px; color: var(--primary-dark); }
.city-info p { font-size: 13px; color: var(--text-light); margin: 0 0 12px; }

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
  .recommend-grid { grid-template-columns: 1fr; }
  .nearby-grid { grid-template-columns: 1fr; }
}
</style>
