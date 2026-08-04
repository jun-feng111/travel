<template>
  <div class="app-root">
    <nav class="navbar">
      <div class="container nav-inner">
        <router-link to="/" class="logo">
          <span class="logo-icon">✈</span>
          <span class="logo-text">旅行志</span>
        </router-link>
        <div class="nav-links" :class="{ open: menuOpen }">
          <router-link to="/" @click="menuOpen = false">首页</router-link>
          <router-link to="/explore" @click="menuOpen = false" class="explore-link">
            🔍 探索
          </router-link>
          <router-link to="/cities" @click="menuOpen = false">城市</router-link>
          <router-link to="/planner" @click="menuOpen = false">行程规划</router-link>
          <router-link to="/favorites" @click="menuOpen = false" class="fav-link">
            收藏<span v-if="favCount" class="fav-badge">{{ favCount }}</span>
          </router-link>
          <router-link to="/about" @click="menuOpen = false">关于</router-link>
          <div class="nav-search">
            <el-input
              v-model="kw"
              placeholder="搜索城市 / 景点 / 美食"
              size="small"
              @keyup.enter="doSearch"
            >
              <template #prefix><el-icon><Search /></el-icon></template>
            </el-input>
          </div>
        </div>
        <el-icon class="menu-toggle" @click="menuOpen = !menuOpen"><Menu /></el-icon>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <div class="container">
        <p>旅行志 · 发现每个城市的美景、美食与故事</p>
        <p class="footer-sub">纯静态个人站点 · 内容仅供参考，出行前请核实最新信息</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFavorites } from './composables/useFavorites'

const router = useRouter()
const kw = ref('')
const menuOpen = ref(false)
const { state } = useFavorites()

const favCount = computed(() => {
  const s = state.value
  return (s.cities?.length || 0) + (s.spots?.length || 0) + (s.foods?.length || 0)
})

function doSearch() {
  const q = kw.value.trim()
  if (!q) return
  menuOpen.value = false
  router.push({ name: 'explore', query: { kw: q } })
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
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}
.logo { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 20px; color: var(--primary-dark); }
.logo-icon { color: var(--accent); font-size: 22px; }
.nav-links { display: flex; align-items: center; gap: 24px; }
.nav-links a { color: var(--text); font-weight: 500; transition: color 0.2s; }
.nav-links a:hover, .nav-links a.router-link-active { color: var(--primary); }
.explore-link {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600 !important;
}
.fav-link { position: relative; }
.fav-badge {
  display: inline-block; min-width: 16px; height: 16px; line-height: 16px;
  background: var(--accent); color: #fff; border-radius: 8px; font-size: 11px;
  text-align: center; padding: 0 4px; margin-left: 4px; vertical-align: middle;
}
.nav-search { width: 240px; }
.menu-toggle { display: none; font-size: 24px; cursor: pointer; color: var(--primary-dark); }

.main-content { flex: 1; }

.footer {
  margin-top: 48px;
  background: #2c3e50;
  color: #cdd6e0;
  text-align: center;
  padding: 28px 20px;
}
.footer-sub { font-size: 13px; color: #8b99a8; margin-top: 6px; }

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
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    box-shadow: 0 8px 16px rgba(0,0,0,0.08);
  }
  .nav-links.open { max-height: 400px; }
  .nav-links a { width: 100%; padding: 14px 20px; border-bottom: 1px solid #eee; }
  .nav-search { width: 100%; padding: 12px 20px; }
}
</style>
