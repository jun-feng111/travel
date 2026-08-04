<template>
  <div v-if="city">
    <!-- 头部：使用城市封面图作为背景 -->
    <div class="city-hero">
      <ImgBox :src="city.cover" :alt="city.name" height="360px" overlay class="hero-bg" />
      <div class="container hero-inner">
        <span class="region-chip">{{ city.region }} · {{ city.province }}</span>
        <h1>{{ city.name }}</h1>
        <p class="slogan">{{ city.slogan }}</p>
        <p class="intro">{{ city.intro }}</p>
        <div class="quick">
          <router-link :to="`/search?q=${city.name}`" class="quick-btn">查看相关搜索 →</router-link>
          <button class="quick-btn fav-btn" @click="toggleCityFav">
            <el-icon v-if="cityFaved"><StarFilled /></el-icon><el-icon v-else><Star /></el-icon>
            {{ cityFaved ? '已收藏' : '收藏' }}
          </button>
          <router-link :to="`/planner?city=${city.id}`" class="quick-btn">智能规划行程 →</router-link>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="season-bar" v-if="city.bestSeason">
        <span class="season-item"><el-icon><Sunny /></el-icon> 最佳季节：<strong>{{ city.bestSeason }}</strong></span>
        <span class="season-item weather"><el-icon><Cloudy /></el-icon> {{ city.weather }}</span>
        <router-link :to="`/map/${city.id}`" class="map-link"><el-icon><MapLocation /></el-icon> 查看地图</router-link>
      </div>

      <el-tabs v-model="tab" class="city-tabs">
        <!-- 热门景点 -->
        <el-tab-pane label="热门景点" name="spots">
          <div class="grid grid-cols-3">
            <router-link v-for="s in spots" :key="s.id" :to="`/spot/${s.id}`" class="card spot-card">
              <ImgBox :src="s.cover" :alt="s.name" height="170px" />
              <div class="spot-body">
                <div class="spot-main">
                  <h4>{{ s.name }}</h4>
                  <div class="tags">
                    <span v-for="t in s.tags" :key="t" class="mini-tag">{{ t }}</span>
                  </div>
                </div>
                <div class="spot-right">
                  <span class="rating">★ {{ s.rating }}</span>
                  <el-button text :icon="s.faved ? StarFilled : Star" @click.prevent="toggleSpotFav(s)" class="fav-btn-mini">
                    {{ s.faved ? '已藏' : '收藏' }}
                  </el-button>
                </div>
              </div>
            </router-link>
          </div>
        </el-tab-pane>

        <!-- 旅游攻略 -->
        <el-tab-pane label="旅游攻略" name="guides">
          <div class="grid grid-cols-2">
            <router-link v-for="g in guides" :key="g.id" :to="`/guide/${g.id}`" class="card guide-card">
              <ImgBox :src="g.cover" :alt="g.title" height="180px" />
              <div class="guide-body">
                <span class="tag">{{ g.cityName }}</span>
                <h3>{{ g.title }}</h3>
                <p>{{ g.summary }}</p>
                <span class="date"><el-icon><Calendar /></el-icon> {{ g.date }}</span>
              </div>
            </router-link>
          </div>
          <el-empty v-if="!guides.length" description="暂无攻略，敬请期待" />
        </el-tab-pane>

        <!-- 美景 -->
        <el-tab-pane label="美景" name="gallery">
          <div class="grid grid-cols-3">
            <div v-for="g in galleries" :key="g.id" class="card gallery-card">
              <ImgBox :src="g.image" :alt="g.title" height="210px" />
              <div class="gallery-body">
                <h4>{{ g.title }}</h4>
                <p>{{ g.desc }}</p>
              </div>
            </div>
          </div>
          <el-empty v-if="!galleries.length" description="暂无图集" />
        </el-tab-pane>

        <!-- 美食 -->
        <el-tab-pane label="美食" name="foods">
          <div class="grid grid-cols-3">
            <div v-for="f in foods" :key="f.id" class="card food-card">
              <ImgBox :src="f.cover" :alt="f.name" height="170px" />
              <div class="food-body">
                <h4>{{ f.name }}</h4>
                <p>{{ f.desc }}</p>
                <div class="rec"><el-icon><Shop /></el-icon> 推荐店铺：{{ f.recommend.join('、') }}</div>
                <el-button text :icon="f.faved ? StarFilled : Star" @click="toggleFoodFav(f)" class="food-fav">
                  {{ f.faved ? '已收藏' : '收藏' }}
                </el-button>
              </div>
            </div>
          </div>
          <el-empty v-if="!foods.length" description="暂无美食数据" />
        </el-tab-pane>

        <!-- 地图 -->
        <el-tab-pane label="地图" name="map">
          <p class="tab-desc">点击标记查看景点信息，坐标为示意位置。</p>
          <div id="cityMap" class="map-box"></div>
        </el-tab-pane>

        <!-- 季节 -->
        <el-tab-pane label="季节" name="season">
          <div class="season-grid">
            <div class="card season-best">
              <div class="season-icon"><el-icon><Sunny /></el-icon></div>
              <div class="season-label">最佳旅行季节</div>
              <div class="season-val">{{ city.bestSeason }}</div>
            </div>
            <div class="card season-weather">
              <div class="season-icon"><Cloudy /></div>
              <div class="season-label">气候特征</div>
              <div class="season-val-sm">{{ city.weather }}</div>
            </div>
          </div>

          <h3 class="sub-title">月度旅行指数</h3>
          <div class="month-grid">
            <div v-for="(m, i) in months" :key="i" class="month-cell" :class="m.level">
              <span class="month-no">{{ i + 1 }}月</span>
              <span class="month-tag">{{ m.label }}</span>
            </div>
          </div>

          <h3 class="sub-title">出行建议</h3>
          <div class="tips-list">
            <div v-for="t in seasonTips" :key="t" class="tip-item">
              <el-icon><CircleCheckFilled /></el-icon>
              <span>{{ t }}</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

  <el-empty v-else description="未找到该城市" />
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Star, StarFilled, Sunny, Cloudy, MapLocation, Calendar, Shop, CircleCheckFilled } from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { getCity } from '../data/cities'
import { spotsByCity } from '../data/spots'
import { guidesByCity } from '../data/guides'
import { galleriesByCity } from '../data/galleries'
import { foodsByCity } from '../data/foods'
import { isFav, toggleFav } from '../data/favorites'
import { favState } from '../data/favStore'

const route = useRoute()
const cityId = route.params.cityId
const city = getCity(cityId)
const tab = ref('spots')

const spots = computed(() => spotsByCity(cityId).map(s => ({ ...s, faved: isFav('spot', s.id) })))
const guides = computed(() => guidesByCity(cityId))
const galleries = computed(() => galleriesByCity(cityId))
const foods = computed(() => foodsByCity(cityId).map(f => ({ ...f, faved: isFav('food', f.id) })))

const cityFaved = ref(isFav('city', cityId))
function toggleCityFav() {
  cityFaved.value = toggleFav({ type: 'city', id: cityId, name: city.name, sub: '' })
  favState.list = [...favState.list]
}
function toggleSpotFav(s) {
  s.faved = toggleFav({ type: 'spot', id: s.id, name: s.name, sub: cityId })
  favState.list = [...favState.list]
}
function toggleFoodFav(f) {
  f.faved = toggleFav({ type: 'food', id: f.id, name: f.name, sub: cityId })
  favState.list = [...favState.list]
}

// ===== 月度旅行指数：解析 bestSeason 生成 12 月数据 =====
function parseMonths(seasonStr) {
  const best = new Set()
  // 匹配 "3-6月、9-11月" 这种格式
  const re = /(\d+)\s*-\s*(\d+)\s*月/g
  let match
  while ((match = re.exec(seasonStr)) !== null) {
    const a = +match[1], b = +match[2]
    for (let i = a; i <= b; i++) best.add(i)
  }
  // 匹配单独的 "3月"
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
const months = computed(() => city ? parseMonths(city.bestSeason) : [])

// ===== 出行建议 =====
const seasonTips = computed(() => {
  if (!city) return []
  const tips = []
  const w = city.weather || ''
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

// ===== 内联地图 =====
let map = null
let mapInited = false
async function initMap() {
  if (!city || mapInited) return
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
  const spotsList = spotsByCity(cityId)
  const center = [city.lat, city.lng]
  map = window.L.map('cityMap').setView(center, 12)
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map)
  spotsList.forEach(s => {
    const marker = window.L.marker([s.lat, s.lng]).addTo(map)
    const html = `
      <div style="width:200px">
        <div style="height:80px;background:linear-gradient(135deg,#a8dadc,#4a9d9c);border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:600">${s.name}</div>
        <h4 style="margin:6px 0 2px">${s.name}</h4>
        <div style="color:#f5a623;font-size:13px">★ ${s.rating}</div>
        <p style="font-size:12px;color:#666;margin:4px 0">${s.intro}</p>
        <a href="#/spot/${s.id}" style="color:#1f9e8f;font-size:13px;font-weight:600">查看详情 →</a>
      </div>`
    marker.bindPopup(html)
  })
  setTimeout(() => map && map.invalidateSize(), 200)
}

watch(tab, (v) => {
  if (v === 'map') nextTick(() => initMap())
})
</script>

<style scoped>
.city-hero { position: relative; color: #fff; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; }
.hero-bg :deep(.imgbox-img) { filter: brightness(0.55); }
.hero-inner { position: relative; z-index: 2; padding: 56px 24px 40px; }
.region-chip {
  display: inline-block; background: rgba(255,255,255,0.2); backdrop-filter: blur(8px);
  padding: 4px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; margin-bottom: 12px;
  border: 1px solid rgba(255,255,255,0.25);
}
.hero-inner h1 { font-size: 42px; font-weight: 800; text-shadow: 0 2px 12px rgba(0,0,0,0.4); letter-spacing: 1px; }
.slogan { font-size: 19px; margin: 8px 0; opacity: 0.95; font-weight: 500; text-shadow: 0 1px 6px rgba(0,0,0,0.3); }
.intro { max-width: 720px; opacity: 0.9; line-height: 1.7; text-shadow: 0 1px 4px rgba(0,0,0,0.3); }
.quick { margin-top: 20px; display: flex; flex-wrap: wrap; gap: 10px; }
.quick-btn {
  display: inline-flex; align-items: center; gap: 4px;
  background: rgba(255,255,255,0.18); backdrop-filter: blur(10px);
  padding: 9px 20px; border-radius: 24px; font-weight: 600; color: #fff;
  border: 1px solid rgba(255,255,255,0.3); cursor: pointer; transition: all 0.25s ease;
}
.quick-btn:hover { background: rgba(255,255,255,0.32); transform: translateY(-2px); }

.season-bar { display: flex; align-items: center; gap: 24px; flex-wrap: wrap;
  background: #fff; border-radius: 14px; padding: 16px 20px; margin: -20px 24px 0; position: relative; z-index: 3;
  box-shadow: 0 8px 24px rgba(20,60,60,0.10); font-size: 14px; }
.season-item { display: flex; align-items: center; gap: 6px; }
.season-item strong { color: var(--primary-dark); }
.season-item.weather { color: var(--text-light); }
.map-link { margin-left: auto; color: var(--primary); font-weight: 600; display: flex; align-items: center; gap: 4px; }

.city-tabs { margin-top: 22px; }
:deep(.el-tabs__nav-wrap::after) { height: 1px; background: rgba(20,60,60,0.08); }
:deep(.el-tabs__item) { font-size: 15px; font-weight: 500; }
:deep(.el-tabs__active-bar) { background: linear-gradient(90deg, var(--primary-light), var(--primary)); height: 3px; border-radius: 2px; }

.spot-body { padding: 12px 14px; display: flex; justify-content: space-between; gap: 8px; }
.spot-main h4 { font-size: 15px; margin-bottom: 6px; }
.tags { display: flex; flex-wrap: wrap; gap: 4px; }
.mini-tag { background: #eef5f5; color: var(--primary-dark); font-size: 11px; padding: 2px 9px; border-radius: 8px; }
.rating { color: var(--accent); font-weight: 600; font-size: 13px; white-space: nowrap; }
.spot-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
.fav-btn-mini { padding: 2px 4px; font-size: 12px; }

.guide-body { padding: 14px 16px; }
.guide-body h3 { font-size: 16px; margin: 8px 0; }
.guide-body p { color: var(--text-light); font-size: 13px;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.tag { background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: #fff; font-size: 12px; padding: 3px 12px; border-radius: 10px; }
.date { color: var(--text-faint); font-size: 12px; display: flex; align-items: center; gap: 4px; }

.gallery-body { padding: 12px 14px; }
.gallery-body h4 { font-size: 15px; }
.gallery-body p { color: var(--text-light); font-size: 13px; margin-top: 4px; }

.food-body { padding: 12px 14px; }
.food-body h4 { font-size: 16px; }
.food-body p { color: var(--text-light); font-size: 13px; margin: 6px 0; }
.rec { color: var(--primary-dark); font-size: 12px; display: flex; align-items: center; gap: 4px; }
.food-fav { padding-left: 0; color: var(--primary); }

.tab-desc { color: var(--text-light); margin-bottom: 14px; font-size: 14px; }
.map-box { height: 480px; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow); }

/* 季节 Tab */
.season-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 24px; }
.season-best, .season-weather { padding: 24px; }
.season-icon { font-size: 32px; color: var(--accent); margin-bottom: 10px; }
.season-label { font-size: 13px; color: var(--text-light); margin-bottom: 6px; }
.season-val { font-size: 20px; font-weight: 700; color: var(--primary-dark); }
.season-val-sm { font-size: 14px; color: var(--text); line-height: 1.6; }

.sub-title { font-size: 18px; font-weight: 700; color: var(--primary-dark); margin: 24px 0 14px;
  display: flex; align-items: center; gap: 8px; }
.sub-title::before { content: ''; width: 4px; height: 18px; background: var(--primary); border-radius: 2px; }

.month-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }
.month-cell { text-align: center; padding: 14px 8px; border-radius: 12px; font-size: 13px; }
.month-cell .month-no { display: block; font-weight: 700; margin-bottom: 4px; }
.month-cell .month-tag { font-size: 11px; }
.month-cell.best { background: linear-gradient(135deg, #e8f7f1, #d1f0e3); color: var(--primary-dark); }
.month-cell.good { background: #fff8ec; color: #b8861a; }
.month-cell.normal { background: var(--bg-soft); color: var(--text-faint); }

.tips-list { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.tip-item { display: flex; align-items: flex-start; gap: 8px; padding: 12px 14px; background: #fff; border-radius: 10px; box-shadow: var(--shadow-sm); font-size: 14px; color: var(--text); }
.tip-item .el-icon { color: var(--primary); flex-shrink: 0; margin-top: 2px; }

@media (max-width: 768px) {
  .hero-inner h1 { font-size: 30px; }
  .slogan { font-size: 16px; }
  .season-grid { grid-template-columns: 1fr; }
  .month-grid { grid-template-columns: repeat(3, 1fr); }
  .tips-list { grid-template-columns: 1fr; }
}
</style>
