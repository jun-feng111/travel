<template>
  <div class="explore-page">
    <div class="page-header">
      <h1>🔍 探索发现</h1>
      <p class="subtitle">搜索全国城市景点、美食，发现你的下一个旅行目的地</p>
    </div>

    <div class="search-box">
      <el-input
        v-model="keyword"
        size="large"
        placeholder="搜索城市、景点、美食、攻略…"
        clearable
        @keyup.enter="handleSearch"
      >
        <template #prefix>
          <el-icon><Search /></el-icon>
        </template>
        <template #append>
          <el-button @click="handleSearch">搜索</el-button>
        </template>
      </el-input>
    </div>

    <div class="quick-tags">
      <span class="tag-label">热门搜索：</span>
      <el-tag
        v-for="tag in hotTags"
        :key="tag"
        class="hot-tag"
        effect="plain"
        round
        @click="quickSearch(tag)"
      >{{ tag }}</el-tag>
    </div>

    <div v-if="loading" class="loading-wrap">
      <el-icon class="is-loading" :size="40"><Loading /></el-icon>
      <p>搜索中...</p>
    </div>

    <div v-else-if="hasSearched" class="search-results">
      <div class="results-summary">
        <span class="summary-text">搜索 "<strong>{{ keyword }}</strong>" 共找到</span>
        <span class="summary-count">{{ totalResults }} 条结果</span>
      </div>

      <el-tabs v-model="activeTab" class="result-tabs">
        <el-tab-pane name="all">
          <div class="tab-count">全部 ({{ totalResults }})</div>
        </el-tab-pane>
        <el-tab-pane name="cities">
          <div class="tab-count">城市 ({{ results.cities.length }})</div>
        </el-tab-pane>
        <el-tab-pane name="spots">
          <div class="tab-count">景点 ({{ results.spots.length }})</div>
        </el-tab-pane>
        <el-tab-pane name="foods">
          <div class="tab-count">美食 ({{ results.foods.length }})</div>
        </el-tab-pane>
        <el-tab-pane name="guides">
          <div class="tab-count">攻略 ({{ results.guides.length }})</div>
        </el-tab-pane>
      </el-tabs>

      <template v-if="activeTab === 'all' || activeTab === 'cities'">
        <section v-if="results.cities.length" class="result-section">
          <h3 class="section-heading">
            <span class="heading-dot"></span>
            城市
          </h3>
          <div class="city-grid">
            <div
              v-for="city in results.cities"
              :key="city.id"
              class="city-card"
              @click="goCity(city)"
            >
              <div class="city-cover">
                <ImgBox :src="getCityImg(city)" :alt="city.name" height="180px" :overlay="true" />
                <div class="city-region">{{ city.region }}</div>
              </div>
              <div class="city-info">
                <h3>{{ city.name }}</h3>
                <p>{{ city.province }} · {{ city.region }}</p>
                <p class="slogan">{{ city.slogan }}</p>
              </div>
              <el-button type="primary" size="small" @click.stop="goCity(city)">前往</el-button>
            </div>
          </div>
        </section>
      </template>

      <template v-if="activeTab === 'all' || activeTab === 'spots'">
        <section v-if="results.spots.length" class="result-section">
          <h3 class="section-heading">
            <span class="heading-dot"></span>
            景点
          </h3>
          <div class="spot-grid">
            <div
              v-for="spot in results.spots"
              :key="spot.id"
              class="spot-card"
            >
              <div class="spot-cover">
                <ImgBox :src="getSpotImg(spot)" :alt="spot.name" height="180px" :overlay="true" />
                <el-tag v-if="spot.rating" class="rating">{{ spot.rating }}分</el-tag>
              </div>
              <div class="spot-info">
                <h3>{{ spot.name }}</h3>
                <p class="spot-intro">{{ spot.intro || spot.desc || '暂无介绍' }}</p>
                <div class="spot-tags">
                  <el-tag v-for="t in (spot.tags || []).slice(0,3)" :key="t" size="small" effect="plain">{{ t }}</el-tag>
                </div>
              </div>
              <div class="spot-actions">
                <el-button type="primary" size="small" @click="goSpot(spot)">详情</el-button>
                <el-button
                  :type="isFav('spots', spot.id) ? 'warning' : 'default'"
                  size="small"
                  @click="toggleFav('spots', spot.id, spot)"
                >
                  {{ isFav('spots', spot.id) ? '已收藏' : '收藏' }}
                </el-button>
              </div>
            </div>
          </div>
        </section>
      </template>

      <template v-if="activeTab === 'all' || activeTab === 'foods'">
        <section v-if="results.foods.length" class="result-section">
          <h3 class="section-heading">
            <span class="heading-dot"></span>
            美食
          </h3>
          <div class="food-grid">
            <div
              v-for="food in results.foods"
              :key="food.id"
              class="food-card"
              @click="goFood(food)"
            >
              <div class="food-cover">
                <ImgBox :src="getFoodImg(food)" :alt="food.name" height="180px" :overlay="true" />
                <div class="food-type">{{ food.type }}</div>
              </div>
              <div class="food-info">
                <h3>{{ food.name }}</h3>
                <p class="food-desc">{{ food.desc || '暂无介绍' }}</p>
                <div class="food-recommend" v-if="food.recommend?.length">
                  <span class="label">推荐：</span>
                  <span>{{ food.recommend.join('、') }}</span>
                </div>
                <div class="food-meta">
                  <span class="food-price">{{ food.priceRange }}</span>
                  <span class="rating-sm">★ {{ food.rating }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>

      <template v-if="activeTab === 'all' || activeTab === 'guides'">
        <section v-if="results.guides.length" class="result-section">
          <h3 class="section-heading">
            <span class="heading-dot"></span>
            攻略
          </h3>
          <div class="guide-grid">
            <router-link
              v-for="g in results.guides"
              :key="g.id"
              :to="`/guide/${g.id}`"
              class="guide-card"
            >
              <div class="guide-cover">
                <ImgBox :src="getGuideImg(g)" :alt="g.title" height="180px" :overlay="true" />
                <div class="guide-days">{{ g.days }}天</div>
              </div>
              <div class="guide-body">
                <h3>{{ g.title }}</h3>
                <p>{{ g.summary }}</p>
                <div class="guide-meta">
                  <span>💰 ¥{{ g.budget?.min }}-{{ g.budget?.max }}</span>
                  <span class="dot-sep">·</span>
                  <span>{{ g.days }}天行程</span>
                </div>
              </div>
            </router-link>
          </div>
        </section>
      </template>

      <el-empty v-if="totalResults === 0" description="没有找到相关内容，换个关键词试试" />
    </div>

    <div v-else class="recommend-section">
      <h2>🔥 热门城市推荐</h2>
      <div class="recommend-grid">
        <div
          v-for="city in hotCities"
          :key="city.id"
          class="recommend-card"
          @click="$router.push(`/city/${city.id}`)"
        >
          <div class="recommend-cover">
            <ImgBox :src="getCityImg(city)" :alt="city.name" height="180px" :overlay="true" />
            <div class="recommend-overlay">
              <h3>{{ city.name }}</h3>
              <p>{{ city.province }}</p>
            </div>
          </div>
        </div>
      </div>

      <h2 style="margin-top: 40px;">📖 热门攻略</h2>
      <div class="recommend-grid">
        <router-link
          v-for="g in hotGuides"
          :key="g.id"
          :to="`/guide/${g.id}`"
          class="recommend-card"
        >
          <div class="recommend-cover">
            <ImgBox :src="getGuideImg(g)" :alt="g.title" height="180px" :overlay="true" />
            <div class="recommend-overlay">
              <h3>{{ g.title }}</h3>
              <p>{{ g.days }}天行程 · ¥{{ g.budget?.min }}起</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search, Loading } from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { getCityImage, getSpotImage, getFoodImage, getGuideImage } from '../composables/useImageSource'
import { useFavorites } from '../composables/useFavorites'
import { searchAll, cityHelpers, guideHelpers, cities, guides } from '../data/index'

const route = useRoute()
const router = useRouter()
const { isFavorite, toggleFavorite } = useFavorites()

const keyword = ref(route.query.kw || '')
const activeTab = ref('all')
const hasSearched = ref(false)
const loading = ref(false)

const hotTags = ['北京', '成都火锅', '西湖', '故宫', '三亚', '重庆', '上海外滩', '丽江古城']

const results = ref({ cities: [], spots: [], foods: [], guides: [] })

const hotCities = computed(() => cities.slice(0, 8))
const hotGuides = computed(() => guides.slice(0, 6))

const totalResults = computed(() => {
  return results.value.cities.length + results.value.spots.length +
    results.value.foods.length + results.value.guides.length
})

function handleSearch() {
  const q = keyword.value.trim()
  if (!q) {
    hasSearched.value = false
    return
  }
  loading.value = true
  setTimeout(() => {
    results.value = searchAll(q)
    hasSearched.value = true
    loading.value = false
  }, 200)
}

function quickSearch(tag) {
  keyword.value = tag
  handleSearch()
}

function goCity(city) {
  router.push(`/city/${city.id}`)
}

function goSpot(spot) {
  if (spot.id) {
    router.push(`/spot/${spot.id}`)
  }
}

function goFood(food) {
  if (food.id) {
    router.push(`/food/${food.id}`)
  }
}

function isFav(type, id) {
  return isFavorite(type, id)
}

function toggleFav(type, id, item) {
  toggleFavorite(type, id, item)
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

if (route.query.kw) {
  handleSearch()
}
</script>

<style scoped>
.explore-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
}

.page-header {
  text-align: center;
  margin-bottom: 32px;
}

.page-header h1 {
  font-size: 32px;
  margin: 0 0 8px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle { color: #666; margin: 0; }

.search-box {
  max-width: 700px;
  margin: 0 auto 16px;
}

.quick-tags {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;
}

.tag-label { font-size: 14px; color: #666; }
.hot-tag { cursor: pointer; transition: all 0.2s; }
.hot-tag:hover { transform: scale(1.05); }

.loading-wrap {
  text-align: center;
  padding: 60px 0;
  color: #667eea;
}

.results-summary {
  text-align: center;
  margin-bottom: 16px;
  font-size: 15px;
  color: #555;
}
.summary-count {
  color: var(--primary);
  font-weight: 700;
  font-size: 18px;
  margin-left: 6px;
}

.result-tabs { margin-top: 16px; }
.tab-count { font-size: 14px; font-weight: 600; }

.result-section { margin-bottom: 32px; }

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

.city-grid, .spot-grid, .food-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.city-card, .spot-card, .food-card, .guide-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(20, 60, 60, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.city-card:hover, .spot-card:hover, .food-card:hover, .guide-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(20, 60, 60, 0.14);
}

.city-cover, .spot-cover, .food-cover, .guide-cover {
  position: relative;
}

.city-region {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
  color: var(--primary-dark);
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
  z-index: 2;
}

.rating {
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

.city-info, .spot-info, .food-info, .guide-body {
  padding: 16px;
  flex: 1;
}

.city-info h3, .spot-info h3, .food-info h3, .guide-body h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-dark);
}

.city-info p, .spot-info p, .food-desc {
  margin: 0;
  font-size: 13px;
  color: #666;
}

.slogan { margin-top: 4px !important; font-style: italic; color: #999 !important; }

.spot-intro {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.spot-tags { display: flex; gap: 4px; margin-top: 8px; flex-wrap: wrap; }

.spot-actions {
  display: flex;
  gap: 8px;
  padding: 0 16px 16px;
}

.food-type {
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

.food-desc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.food-recommend { margin-top: 8px; font-size: 12px; color: #666; }
.food-recommend .label { color: #999; }

.food-meta {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-top: 10px;
}
.food-price { color: var(--accent); font-weight: 600; }
.rating-sm { color: var(--accent); font-weight: 600; }

.guide-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.guide-days {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255,255,255,0.9);
  color: var(--primary-dark);
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 12px;
  z-index: 2;
}

.guide-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: var(--text-light);
  margin-top: 8px;
}
.dot-sep { opacity: 0.5; }

.recommend-section { margin-top: 40px; }

.recommend-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.recommend-card {
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
  text-decoration: none;
  color: inherit;
  display: block;
  box-shadow: 0 4px 16px rgba(20, 60, 60, 0.08);
}

.recommend-card:hover { transform: scale(1.03); }

.recommend-cover { position: relative; }

.recommend-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
}
.recommend-overlay h3 { margin: 0 0 4px; font-size: 18px; }
.recommend-overlay p { margin: 0; font-size: 12px; opacity: 0.8; }
</style>
