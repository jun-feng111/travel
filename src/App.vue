<template>
  <div class="app-root">
    <nav class="navbar">
      <div class="container nav-inner">
        <router-link to="/" class="logo">
          <span class="logo-icon">✈</span>
          <span class="logo-text">旅行志</span>
        </router-link>
        <div class="nav-links" :class="{ open: menuOpen }">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="nav-link"
            :class="{ [link.highlight + '-link']: link.highlight }"
            @click="menuOpen = false"
          >
            <el-icon><component :is="link.icon" /></el-icon>
            <span>{{ link.label }}</span>
            <span v-if="link.badge && link.badge()" class="fav-badge">{{ link.badge() }}</span>
          </router-link>
          <div class="nav-search">
            <el-input
              v-model="kw"
              placeholder="搜索城市 / 景点 / 美食"
              size="small"
              @keyup.enter="doSearch"
              clearable
            >
              <template #prefix><el-icon><Search /></el-icon></template>
              <template #append>
                <el-button @click="doSearch" class="search-go">搜索</el-button>
              </template>
            </el-input>
          </div>
        </div>
        <el-icon class="menu-toggle" @click="menuOpen = !menuOpen"><Menu /></el-icon>
      </div>
    </nav>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h4 class="footer-title">旅行志</h4>
            <p class="footer-desc">发现每个城市的美景、美食与故事，规划属于你的完美旅程。</p>
          </div>
          <div class="footer-col">
            <h4 class="footer-title">快捷导航</h4>
            <div class="footer-links">
              <router-link to="/">首页</router-link>
              <router-link to="/explore">探索</router-link>
              <router-link to="/cities">城市</router-link>
              <router-link to="/planner">行程规划</router-link>
              <router-link to="/favorites">我的收藏</router-link>
            </div>
          </div>
          <div class="footer-col">
            <h4 class="footer-title">数据来源</h4>
            <p class="footer-desc">高德地图 · 和风天气</p>
            <p class="footer-desc">内容仅供参考，出行前请核实最新信息</p>
          </div>
          <div class="footer-col">
            <h4 class="footer-title">关于</h4>
            <router-link to="/about" class="footer-link-single">关于旅行志 →</router-link>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2024 旅行志 · 纯静态个人站点</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { House, Search, Location, MagicStick, Star, InfoFilled, Menu } from '@element-plus/icons-vue'
import { useFavorites } from './composables/useFavorites'

const router = useRouter()
const kw = ref('')
const menuOpen = ref(false)
const { state } = useFavorites()

const favCount = computed(() => {
  const s = state.value
  return (s.cities?.length || 0) + (s.spots?.length || 0) +
    (s.foods?.length || 0) + (s.guides?.length || 0)
})

const navLinks = computed(() => [
  { path: '/', label: '首页', icon: House },
  { path: '/explore', label: '探索', icon: Search, highlight: 'explore' },
  { path: '/cities', label: '城市', icon: Location },
  { path: '/planner', label: '行程规划', icon: MagicStick },
  { path: '/favorites', label: '我的收藏', icon: Star, highlight: 'fav', badge: () => favCount.value },
  { path: '/about', label: '关于', icon: InfoFilled }
])

function doSearch() {
  const q = kw.value.trim()
  if (!q) return
  menuOpen.value = false
  router.push({ name: 'search', query: { q } })
}
</script>

<style scoped>
.app-root { min-height: 100vh; display: flex; flex-direction: column; }

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 20px; color: var(--primary-dark); text-decoration: none; }
.logo-icon { color: var(--accent); font-size: 22px; }
.nav-links { display: flex; align-items: center; gap: 4px; }
.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text);
  font-weight: 500;
  font-size: 14px;
  transition: color 0.2s;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 10px;
  position: relative;
}
.nav-link:hover, .nav-link.router-link-active {
  color: var(--primary);
  background: rgba(31, 158, 143, 0.06);
}
.explore-link {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600 !important;
}
.explore-link:hover, .explore-link.router-link-active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: rgba(102, 126, 234, 0.08);
}
.fav-link { position: relative; }
.fav-badge {
  display: inline-block; min-width: 18px; height: 18px; line-height: 18px;
  background: var(--accent); color: #fff; border-radius: 9px; font-size: 11px;
  text-align: center; padding: 0 5px; margin-left: 2px; vertical-align: middle;
  font-weight: 700;
}
.nav-search { width: 240px; margin-left: 12px; }
.search-go {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark)) !important;
  color: #fff !important;
  border: none !important;
}
.menu-toggle { display: none; font-size: 24px; cursor: pointer; color: var(--primary-dark); }

.main-content { flex: 1; }

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.page-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.footer {
  margin-top: 48px;
  background: linear-gradient(135deg, #1a365d 0%, #2c5364 100%);
  color: #cdd6e0;
  padding: 40px 20px 24px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 28px;
}
.footer-col { display: flex; flex-direction: column; gap: 10px; }
.footer-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px;
}
.footer-desc {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin: 0;
}
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--accent); }
.footer-link-single {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
}
.footer-link-single:hover { text-decoration: underline; }
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
}
.footer-bottom p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

@media (max-width: 768px) {
  .menu-toggle { display: block; }
  .nav-links {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    gap: 0;
    padding: 8px 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    box-shadow: 0 8px 16px rgba(0,0,0,0.08);
  }
  .nav-links.open { max-height: 600px; }
  .nav-link { width: 100%; padding: 14px 20px; border-radius: 0; border-bottom: 1px solid #f0f0f0; }
  .nav-search { width: 100%; padding: 12px 20px; margin: 0; }
  .footer-grid { grid-template-columns: 1fr; gap: 24px; }
}
</style>