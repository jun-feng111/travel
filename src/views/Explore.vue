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
        placeholder="搜索城市、景点、美食…"
        clearable
        @keyup.enter="handleSearch"
        @input="handleSuggest"
      >
        <template #prefix>
          <el-icon><Search /></el-icon>
        </template>
        <template #append>
          <el-button @click="handleSearch">搜索</el-button>
        </template>
      </el-input>

      <div v-if="suggestions.length" class="suggestions">
        <div
          v-for="(s, i) in suggestions.slice(0, 8)"
          :key="i"
          class="suggest-item"
          @click="selectSuggest(s)"
        >
          <el-icon v-if="s.type === 'city'"><LocationFilled /></el-icon>
          <el-icon v-else><Place /></el-icon>
          <div class="suggest-text">
            <span class="suggest-name">{{ s.name }}</span>
            <span class="suggest-district">{{ s.district }}</span>
          </div>
          <el-tag :type="s.type === 'city' ? 'success' : ''" size="small">
            {{ s.type === 'city' ? '城市' : '地点' }}
          </el-tag>
        </div>
      </div>
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
      <el-tabs v-model="activeTab" class="result-tabs">
        <el-tab-pane label="城市" name="cities">
          <div v-if="results.cities.length" class="city-grid">
            <div
              v-for="city in results.cities"
              :key="city.id"
              class="city-card"
              @click="goCity(city)"
            >
              <div class="city-cover" :style="{ background: getCityGradient(city.name) }">
                <span class="city-emoji">{{ getCityEmoji(city.name) }}</span>
              </div>
              <div class="city-info">
                <h3>{{ city.name }}</h3>
                <p>{{ city.province }} · {{ city.region }}</p>
                <p class="slogan">{{ city.slogan }}</p>
              </div>
              <el-button type="primary" size="small" @click.stop="goCity(city)">前往</el-button>
            </div>
          </div>
          <el-empty v-else description="未找到相关城市" />
        </el-tab-pane>

        <el-tab-pane label="景点" name="spots">
          <div v-if="results.spots.length" class="spot-grid">
            <div
              v-for="spot in results.spots"
              :key="spot.id"
              class="spot-card"
            >
              <div class="spot-cover" :style="{ background: getSpotGradient(spot.name) }">
                <span class="spot-emoji">{{ getSpotEmoji(spot.name) }}</span>
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
          <el-empty v-else description="未找到相关景点" />
        </el-tab-pane>

        <el-tab-pane label="美食" name="foods">
          <div v-if="results.foods.length" class="food-grid">
            <div
              v-for="food in results.foods"
              :key="food.id"
              class="food-card"
            >
              <div class="food-cover" :style="{ background: getFoodGradient(food.name) }">
                <span class="food-emoji">{{ getFoodEmoji(food.name) }}</span>
              </div>
              <div class="food-info">
                <h3>{{ food.name }}</h3>
                <p class="food-desc">{{ food.desc || '暂无介绍' }}</p>
                <div class="food-recommend" v-if="food.recommend?.length">
                  <span class="label">推荐：</span>
                  <span>{{ food.recommend.join('、') }}</span>
                </div>
              </div>
              <el-button
                :type="isFav('foods', food.id) ? 'warning' : 'default'"
                size="small"
                @click="toggleFav('foods', food.id, food)"
              >
                {{ isFav('foods', food.id) ? '已收藏' : '收藏' }}
              </el-button>
            </div>
          </div>
          <el-empty v-else description="未找到相关美食" />
        </el-tab-pane>
      </el-tabs>
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
          <div class="recommend-cover" :style="{ background: getCityGradient(city.name) }">
            <span class="recommend-emoji">{{ getCityEmoji(city.name) }}</span>
            <div class="recommend-overlay">
              <h3>{{ city.name }}</h3>
              <p>{{ city.province }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search, LocationFilled, Place, Loading } from '@element-plus/icons-vue'
import { useGlobalSearch } from '../composables/useGlobalSearch'
import { useFavorites } from '../composables/useFavorites'
import { cities } from '../data/cities'

const router = useRouter()
const { suggestions, results, loading, getSuggestions, doSearch } = useGlobalSearch()
const { isFavorite, toggleFavorite } = useFavorites()

const keyword = ref('')
const activeTab = ref('cities')
const hasSearched = ref(false)

const hotTags = ['北京', '成都火锅', '西湖', '故宫', '三亚', '重庆', '上海外滩', '丽江古城']

const hotCities = computed(() => cities.slice(0, 8))

function handleSuggest() {
  getSuggestions(keyword.value)
}

function handleSearch() {
  hasSearched.value = true
  doSearch(keyword.value)
}

function selectSuggest(s) {
  keyword.value = s.name
  hasSearched.value = true
  if (s.type === 'city' && s.location) {
    const city = cities.find(c => c.name === s.name)
    if (city) {
      router.push(`/city/${city.id}`)
    } else {
      doSearch(keyword.value)
    }
  } else {
    doSearch(keyword.value)
  }
  suggestions.value = []
}

function quickSearch(tag) {
  keyword.value = tag
  handleSearch()
}

function goCity(city) {
  router.push(`/city/${city.id}`)
}

function goSpot(spot) {
  if (spot.cityId && !spot.fromAmap) {
    router.push(`/spot/${spot.id}`)
  } else {
    router.push(`/cities`)
  }
}

function isFav(type, id) {
  return isFavorite(type, id)
}

function toggleFav(type, id, item) {
  toggleFavorite(type, id, item)
}

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

function getCityGradient(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return gradients[Math.abs(hash) % gradients.length]
}

function getCityEmoji(name) {
  const map = {
    '北京': '🏯', '上海': '🌃', '广州': '🌴', '深圳': '🏙️', '成都': '🐼',
    '杭州': '🏞️', '西安': '🏛️', '重庆': '🌉', '苏州': '🏮', '南京': '⛩️',
    '厦门': '🏖️', '三亚': '🌊', '丽江': '🏔️', '大理': '⛰️', '昆明': '🌸',
    '青岛': '⚓', '哈尔滨': '❄️', '张家界': '🗻', '桂林': '⛰️', '九寨沟': '🌲'
  }
  return map[name] || '📍'
}

function getSpotGradient(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return gradients[Math.abs(hash) % gradients.length]
}

function getSpotEmoji(name) {
  if (/故宫|长城|颐和园|兵马俑|城墙/.test(name)) return '🏛️'
  if (/西湖|漓江|洱海|滇池|五彩池/.test(name)) return '💧'
  if (/熊猫|动物/.test(name)) return '🐼'
  if (/山|峰|岩|洞/.test(name)) return '⛰️'
  if (/滩|海|沙滩|亚龙湾/.test(name)) return '🏖️'
  if (/古城|镇|街|路/.test(name)) return '🏮'
  if (/教堂|寺|塔|庙/.test(name)) return '⛩️'
  if (/桥|港|湾/.test(name)) return '🌉'
  return '📍'
}

function getFoodGradient(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return gradients[Math.abs(hash) % gradients.length]
}

function getFoodEmoji(name) {
  if (/火锅|辣/.test(name)) return '🌶️'
  if (/鸭|鸡|肉/.test(name)) return '🍗'
  if (/鱼|虾|蟹|海鲜/.test(name)) return '🐟'
  if (/面|粉|饺|包/.test(name)) return '🍜'
  if (/糕|饼|糖/.test(name)) return '🍰'
  if (/茶|咖啡/.test(name)) return '🍵'
  if (/啤酒|酒/.test(name)) return '🍺'
  return '🍽️'
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

.subtitle {
  color: #666;
  margin: 0;
}

.search-box {
  max-width: 700px;
  margin: 0 auto 16px;
  position: relative;
}

.suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  z-index: 100;
  max-height: 400px;
  overflow-y: auto;
}

.suggest-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s;
}

.suggest-item:hover {
  background: #f5f7fa;
}

.suggest-item:last-child {
  border-bottom: none;
}

.suggest-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.suggest-name {
  font-weight: 600;
  font-size: 14px;
}

.suggest-district {
  font-size: 12px;
  color: #999;
}

.quick-tags {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;
}

.tag-label {
  font-size: 14px;
  color: #666;
}

.hot-tag {
  cursor: pointer;
  transition: all 0.2s;
}

.hot-tag:hover {
  transform: scale(1.05);
}

.loading-wrap {
  text-align: center;
  padding: 60px 0;
  color: #667eea;
}

.result-tabs {
  margin-top: 16px;
}

.city-grid, .spot-grid, .food-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 16px 0;
}

.city-card, .spot-card, .food-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.city-card:hover, .spot-card:hover, .food-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.city-cover, .spot-cover, .food-cover {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.city-emoji, .spot-emoji, .food-emoji {
  font-size: 56px;
}

.rating {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255,255,255,0.9);
  color: #f56c6c;
}

.city-info, .spot-info, .food-info {
  padding: 16px;
  flex: 1;
}

.city-info h3, .spot-info h3, .food-info h3 {
  margin: 0 0 8px;
  font-size: 18px;
}

.city-info p, .spot-info p, .food-info p {
  margin: 0;
  font-size: 13px;
  color: #666;
}

.slogan {
  margin-top: 4px !important;
  font-style: italic;
  color: #999 !important;
}

.spot-intro {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.spot-tags {
  display: flex;
  gap: 4px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.spot-actions {
  display: flex;
  gap: 8px;
  padding: 0 16px 16px;
}

.food-desc {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.food-recommend {
  margin-top: 8px;
  font-size: 12px;
  color: #666;
}

.food-recommend .label {
  color: #999;
}

.recommend-section {
  margin-top: 40px;
}

.recommend-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.recommend-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.recommend-card {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
}

.recommend-card:hover {
  transform: scale(1.03);
}

.recommend-cover {
  height: 160px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.recommend-emoji {
  font-size: 48px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.recommend-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
}

.recommend-overlay h3 {
  margin: 0 0 4px;
  font-size: 18px;
}

.recommend-overlay p {
  margin: 0;
  font-size: 12px;
  opacity: 0.8;
}
</style>
