<template>
  <div>
    <!-- Hero Section with Search -->
    <div class="hero-section">
      <div class="hero-bg">
        <div class="hero-grad"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">发现世界的美好</h1>
        <p class="hero-sub">搜索全国 {{ cityCount }}+ 个城市的景点、美食，规划你的梦想之旅</p>
        <div class="hero-search">
          <el-input
            v-model="searchKw"
            size="large"
            placeholder="试试搜索：北京、成都火锅、西湖、故宫..."
            clearable
            @keyup.enter="goExplore"
          >
            <template #prefix><el-icon><Search /></el-icon></template>
            <template #append>
              <el-button @click="goExplore">
                <el-icon><Search /></el-icon>
              </el-button>
            </template>
          </el-input>
          <div class="hero-hot">
            <span>热门：</span>
            <el-tag
              v-for="tag in hotTags"
              :key="tag"
              class="hot-tag"
              effect="plain"
              round
              @click="searchKw = tag; goExplore()"
            >{{ tag }}</el-tag>
          </div>
        </div>
        <div class="hero-actions">
          <router-link to="/explore" class="hero-btn primary">🔍 开始探索</router-link>
          <router-link to="/planner" class="hero-btn">📋 行程规划</router-link>
        </div>
      </div>
    </div>

    <!-- 首屏轮播 -->
    <el-carousel height="460px" indicator-position="outside" :interval="5000" arrow="hover">
      <el-carousel-item v-for="b in banners" :key="b.cityId">
        <div class="banner">
          <ImgBox :src="b.cover" :alt="b.cityName" height="460px" class="banner-bg" overlay />
          <div class="banner-inner container">
            <span class="banner-chip">{{ b.region }}</span>
            <h1>{{ b.title }}</h1>
            <p>{{ b.sub }}</p>
            <router-link :to="`/city/${b.cityId}`" class="banner-btn">探索 {{ b.cityName }} →</router-link>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="container">
      <!-- 热门城市 -->
      <div class="section-head">
        <h2 class="section-title"><el-icon><Location /></el-icon> 热门城市</h2>
        <router-link to="/cities" class="more">查看全部 →</router-link>
      </div>
      <div class="grid grid-cols-4">
        <router-link v-for="c in cities" :key="c.id" :to="`/city/${c.id}`" class="card city-card">
          <ImgBox :src="c.cover" :alt="c.name" height="160px" />
          <div class="city-body">
            <div class="name-row">
              <h3>{{ c.name }}</h3>
              <span class="prov">{{ c.province }}</span>
            </div>
            <p class="slogan">{{ c.slogan }}</p>
          </div>
        </router-link>
      </div>

      <!-- 编辑精选攻略 -->
      <div class="section-head">
        <h2 class="section-title"><el-icon><Notebook /></el-icon> 编辑精选攻略</h2>
      </div>
      <div class="grid grid-cols-3">
        <router-link v-for="g in featuredGuides" :key="g.id" :to="`/guide/${g.id}`" class="card guide-card">
          <ImgBox :src="g.cover" :alt="g.title" height="170px" />
          <div class="guide-body">
            <span class="tag">{{ g.cityName }}</span>
            <h3>{{ g.title }}</h3>
            <p>{{ g.summary }}</p>
            <span class="guide-date"><el-icon><Calendar /></el-icon> {{ g.date }}</span>
          </div>
        </router-link>
      </div>

      <!-- 本周热门景点 -->
      <div class="section-head">
        <h2 class="section-title"><el-icon><Star /></el-icon> 本周热门景点</h2>
      </div>
      <div class="grid grid-cols-4">
        <router-link v-for="s in topSpots" :key="s.id" :to="`/spot/${s.id}`" class="card spot-card">
          <ImgBox :src="s.cover" :alt="s.name" height="150px" />
          <div class="spot-body">
            <div class="spot-info">
              <h4>{{ s.name }}</h4>
              <span class="city-name">{{ cityName(s.cityId) }}</span>
            </div>
            <span class="rating">★ {{ s.rating }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { cities, getCity } from '../data/cities'
import { guides } from '../data/guides'
import { spots } from '../data/spots'

const router = useRouter()
const searchKw = ref('')

const hotTags = ['北京', '成都', '火锅', '西湖', '故宫', '三亚', '丽江']
const cityCount = computed(() => cities.length)

function goExplore() {
  const q = searchKw.value.trim()
  router.push({ name: 'explore', query: { kw: q } })
}

const banners = [
  { cityId: 'chengdu', cityName: '成都', region: '西南 · 四川', title: '去看大熊猫打滚', sub: '火锅、茶馆与慢生活的天堂', cover: 'img/chengdu-cover.png' },
  { cityId: 'hangzhou', cityName: '杭州', region: '华东 · 浙江', title: '西湖边的诗意', sub: '断桥残雪，苏堤春晓', cover: 'img/hangzhou-cover.png' },
  { cityId: 'lijiang', cityName: '丽江', region: '西南 · 云南', title: '雪山下的柔软时光', sub: '古城、民谣与茶马古道', cover: 'img/lijiang-g2.png' },
  { cityId: 'xian', cityName: '西安', region: '西北 · 陕西', title: '一眼千年', sub: '兵马俑与古城墙的对话', cover: 'img/xian-g1.png' },
  { cityId: 'xiamen', cityName: '厦门', region: '东南 · 福建', title: '面朝大海', sub: '鼓浪屿的琴声与海风', cover: 'img/xiamen-g1.png' }
]

const featuredGuides = computed(() => guides.slice(0, 3))
const topSpots = computed(() => [...spots].sort((a, b) => b.rating - a.rating).slice(0, 4))

function cityName(id) {
  const c = getCity(id)
  return c ? c.name : ''
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}

.hero-grad {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%),
    radial-gradient(circle at 60% 80%, rgba(255,255,255,0.15) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 60px 20px;
  max-width: 800px;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  margin: 0 0 16px;
  text-shadow: 0 2px 16px rgba(0,0,0,0.3);
  letter-spacing: 2px;
}

.hero-sub {
  font-size: 20px;
  margin: 0 0 32px;
  opacity: 0.95;
  text-shadow: 0 1px 8px rgba(0,0,0,0.2);
}

.hero-search {
  max-width: 600px;
  margin: 0 auto 16px;
}

.hero-search :deep(.el-input__wrapper) {
  background: rgba(255,255,255,0.95);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
}

.hero-search :deep(.el-input-group__append) {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  color: white;
}

.hero-search :deep(.el-input-group__append .el-button) {
  color: white;
}

.hero-hot {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
  color: rgba(255,255,255,0.9);
}

.hot-tag {
  cursor: pointer;
  background: rgba(255,255,255,0.2) !important;
  border-color: rgba(255,255,255,0.4) !important;
  color: white !important;
  transition: all 0.2s;
}

.hot-tag:hover {
  background: rgba(255,255,255,0.3) !important;
  transform: scale(1.05);
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
}

.hero-btn {
  display: inline-block;
  padding: 14px 32px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
  text-decoration: none;
  color: white;
  background: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.5);
  backdrop-filter: blur(4px);
}

.hero-btn:hover {
  transform: translateY(-3px);
  background: rgba(255,255,255,0.3);
}

.hero-btn.primary {
  background: white;
  color: #667eea;
  border-color: white;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}

.hero-btn.primary:hover {
  background: #f8f9fb;
  box-shadow: 0 12px 28px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
  .hero-title { font-size: 32px; }
  .hero-sub { font-size: 16px; }
  .hero-actions { flex-direction: column; align-items: center; }
}

.banner { position: relative; height: 100%; overflow: hidden; }
.banner-bg { position: absolute; inset: 0; }
.banner-bg :deep(.imgbox-img) { filter: brightness(0.5); transform: scale(1.05); }
.banner-inner { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: center; color: #fff; }
.banner-chip {
  display: inline-block; width: fit-content; background: rgba(255,255,255,0.2); backdrop-filter: blur(8px);
  padding: 5px 16px; border-radius: 20px; font-size: 13px; font-weight: 500; margin-bottom: 14px;
  border: 1px solid rgba(255,255,255,0.25);
}
.banner-inner h1 { font-size: 44px; font-weight: 800; text-shadow: 0 2px 12px rgba(0,0,0,0.4); letter-spacing: 1px; }
.banner-inner p { font-size: 19px; margin: 12px 0 24px; opacity: 0.95; text-shadow: 0 1px 6px rgba(0,0,0,0.3); }
.banner-btn {
  display: inline-block; width: fit-content; background: #fff; color: var(--primary-dark);
  padding: 12px 28px; border-radius: 26px; font-weight: 600; font-size: 15px;
  transition: all 0.25s ease; box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
.banner-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,0,0,0.3); }

.section-head { display: flex; align-items: baseline; justify-content: space-between; margin: 48px 0 22px; }
.section-head .section-title { margin: 0; }
.section-head .more { color: var(--primary); font-size: 14px; font-weight: 600; }

.city-body { padding: 14px 16px; }
.name-row { display: flex; align-items: baseline; justify-content: space-between; }
.name-row h3 { font-size: 18px; }
.prov { color: var(--text-light); font-size: 12px; }
.slogan { color: var(--text-light); font-size: 13px; margin-top: 4px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.guide-body { padding: 14px 16px; }
.guide-body h3 { font-size: 16px; margin: 8px 0; }
.guide-body p { color: var(--text-light); font-size: 13px;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.tag { background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: #fff; font-size: 12px; padding: 3px 12px; border-radius: 10px; }
.guide-date { color: var(--text-faint); font-size: 12px; display: flex; align-items: center; gap: 4px; margin-top: 6px; }

.spot-body { padding: 12px 14px; display: flex; justify-content: space-between; align-items: center; }
.spot-info h4 { font-size: 15px; margin-bottom: 2px; }
.city-name { color: var(--text-faint); font-size: 12px; }
.rating { color: var(--accent); font-weight: 600; font-size: 14px; }

@media (max-width: 768px) {
  .banner-inner h1 { font-size: 28px; }
  .banner-inner p { font-size: 15px; }
}
</style>
