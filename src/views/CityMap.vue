<template>
  <div class="container" v-if="city">
    <router-link :to="`/city/${city.id}`" class="back">← 返回 {{ city.name }}</router-link>
    <h2 class="section-title"><el-icon><MapLocation /></el-icon> {{ city.name }} 互动地图</h2>
    <p class="desc">点击标记查看景点信息（坐标为示意位置）。</p>
    <div id="map" class="map-box"></div>
  </div>
  <el-empty v-else description="未找到该城市" />
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { MapLocation } from '@element-plus/icons-vue'
import { getCity } from '../data/cities'
import { spotsByCity } from '../data/spots'

const route = useRoute()
const cityId = route.params.cityId
const city = getCity(cityId)
const mapEl = ref(null)
let map = null

onMounted(async () => {
  if (!city) return
  // 动态加载 Leaflet（CDN，无需 Key）
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
  const spots = spotsByCity(cityId)
  const center = [city.lat, city.lng]
  map = window.L.map('map').setView(center, 12)
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map)

  spots.forEach(s => {
    const marker = window.L.marker([s.lat, s.lng]).addTo(map)
    const html = `
      <div style="width:200px">
        <div style="height:90px;background:linear-gradient(135deg,#a8dadc,#4a9d9c);border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff">${s.name}</div>
        <h4 style="margin:6px 0">${s.name}</h4>
        <div style="color:#f5a623;font-size:13px">★ ${s.rating}</div>
        <p style="font-size:12px;color:#666;margin:4px 0">${s.intro}</p>
        <a href="#/spot/${s.id}" style="color:#4a9d9c;font-size:13px;font-weight:600">查看详情 →</a>
      </div>`
    marker.bindPopup(html)
  })
})
</script>

<style scoped>
.back { display: inline-block; margin: 20px 0; color: var(--primary); font-weight: 500; }
.desc { color: var(--text-light); margin-bottom: 14px; }
.map-box { height: 520px; border-radius: 12px; overflow: hidden; box-shadow: var(--card-shadow); }
</style>
