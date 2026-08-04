<template>
  <div class="container">
    <h2 class="section-title"><el-icon><Location /></el-icon> 选择城市</h2>

    <div class="filter-bar">
      <el-radio-group v-model="region" size="small">
        <el-radio-button label="全部">全部</el-radio-button>
        <el-radio-button v-for="r in regions" :key="r" :label="r">{{ r }}</el-radio-button>
      </el-radio-group>
      <el-input v-model="kw" placeholder="搜索城市名 / 省份" size="small" class="search" clearable>
        <template #prefix><el-icon><Search /></el-icon></template>
      </el-input>
    </div>

    <div class="grid grid-cols-4">
      <router-link v-for="c in filtered" :key="c.id" :to="`/city/${c.id}`" class="card city-card">
        <div class="city-img-wrap">
          <ImgBox :src="c.cover" :alt="c.name" height="180px" />
          <span class="region-badge">{{ c.region }}</span>
        </div>
        <div class="city-body">
          <div class="name-row">
            <h3>{{ c.name }}</h3>
            <span class="prov">{{ c.province }}</span>
          </div>
          <p class="slogan">{{ c.slogan }}</p>
          <p class="intro">{{ c.intro }}</p>
        </div>
      </router-link>
    </div>

    <el-empty v-if="!filtered.length" description="没有找到匹配的城市" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ImgBox from '../components/ImgBox.vue'
import { cities } from '../data/cities'

const regions = ['华东', '西南', '西北', '东南']
const region = ref('全部')
const kw = ref('')

const filtered = computed(() => {
  const q = kw.value.trim().toLowerCase()
  return cities.filter(c => {
    const okRegion = region.value === '全部' || c.region === region.value
    const okKw = !q || c.name.toLowerCase().includes(q) || c.province.toLowerCase().includes(q)
    return okRegion && okKw
  })
})
</script>

<style scoped>
.filter-bar { display: flex; gap: 16px; align-items: center; margin-bottom: 24px; flex-wrap: wrap; }
.search { width: 260px; }

.city-img-wrap { position: relative; }
.region-badge {
  position: absolute; top: 12px; left: 12px;
  background: rgba(255,255,255,0.9); backdrop-filter: blur(8px);
  color: var(--primary-dark); font-size: 12px; font-weight: 600;
  padding: 4px 12px; border-radius: 12px; z-index: 2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.city-body { padding: 14px 16px; }
.name-row { display: flex; align-items: baseline; justify-content: space-between; }
.name-row h3 { font-size: 18px; }
.prov { color: var(--text-light); font-size: 13px; }
.slogan { color: var(--primary-dark); font-size: 13px; margin: 4px 0 6px; font-weight: 500; }
.intro { color: var(--text-light); font-size: 13px;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
</style>
