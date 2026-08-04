<template>
  <div v-if="spot">
    <router-link :to="`/city/${city.id}`" class="back container">← 返回 {{ city.name }}</router-link>

    <!-- Hero: 封面图 + 暗角 + 标题叠加 -->
    <div class="spot-hero">
      <ImgBox :src="spot.cover" :alt="spot.name" height="380px" overlay class="hero-bg" />
      <div class="container hero-inner">
        <div class="tags">
          <span v-for="t in spot.tags" :key="t" class="mini-tag">{{ t }}</span>
        </div>
        <h1>{{ spot.name }}</h1>
        <div class="hero-meta">
          <span class="rating">★ {{ spot.rating }}</span>
          <span class="dot">·</span>
          <span>{{ spot.duration }}</span>
          <span class="dot">·</span>
          <span>{{ spot.ticket }}</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="spot-info">
        <p class="intro">{{ spot.intro }}</p>

        <div class="info-grid">
          <div class="info-item">
            <div class="info-icon"><el-icon><Clock /></el-icon></div>
            <div>
              <div class="info-label">开放时间</div>
              <div class="info-val">{{ spot.openTime }}</div>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><el-icon><Ticket /></el-icon></div>
            <div>
              <div class="info-label">门票</div>
              <div class="info-val">{{ spot.ticket }}</div>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><el-icon><Position /></el-icon></div>
            <div>
              <div class="info-label">交通</div>
              <div class="info-val">{{ spot.traffic }}</div>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><el-icon><Timer /></el-icon></div>
            <div>
              <div class="info-label">建议游玩</div>
              <div class="info-val">{{ spot.duration }}</div>
            </div>
          </div>
        </div>

        <div class="tips">
          <el-icon><Warning /></el-icon>
          <div>
            <strong>实用贴士</strong>
            <p>{{ spot.tips }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-empty v-else description="未找到该景点" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Clock, Ticket, Position, Timer, Warning } from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { getSpot } from '../data/spots'
import { getCity } from '../data/cities'

const route = useRoute()
const spot = getSpot(route.params.spotId)
const city = computed(() => spot ? getCity(spot.cityId) : null)
</script>

<style scoped>
.back { display: inline-block; margin: 20px 0; color: var(--primary); font-weight: 500; }

.spot-hero { position: relative; color: #fff; overflow: hidden; margin-bottom: 24px; }
.hero-bg { position: absolute; inset: 0; }
.hero-bg :deep(.imgbox-img) { filter: brightness(0.5); }
.hero-inner { position: relative; z-index: 2; padding: 60px 24px 36px; }
.tags { display: flex; gap: 6px; margin-bottom: 12px; }
.mini-tag { background: rgba(255,255,255,0.2); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.25); color: #fff; font-size: 12px; padding: 3px 12px; border-radius: 10px; }
.hero-inner h1 { font-size: 36px; font-weight: 800; text-shadow: 0 2px 12px rgba(0,0,0,0.4); }
.hero-meta { display: flex; align-items: center; gap: 10px; margin-top: 10px; font-size: 15px; opacity: 0.95; }
.rating { color: #ffd56a; font-weight: 700; }
.dot { opacity: 0.6; }

.spot-info { background: #fff; border-radius: 16px; padding: 28px; box-shadow: var(--shadow); }
.intro { color: var(--text); font-size: 16px; line-height: 1.8; margin-bottom: 24px; }

.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
.info-item { display: flex; align-items: flex-start; gap: 12px; padding: 16px; background: var(--bg-soft); border-radius: 12px; }
.info-icon { width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, var(--primary-light), var(--primary)); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
.info-label { font-size: 12px; color: var(--text-light); margin-bottom: 2px; }
.info-val { font-size: 14px; font-weight: 600; color: var(--text); }

.tips { display: flex; gap: 12px; align-items: flex-start; background: linear-gradient(135deg, #fff8ec, #fff3da); border-left: 4px solid var(--accent); padding: 16px 20px; border-radius: 0 12px 12px 0; }
.tips .el-icon { color: var(--accent); font-size: 20px; margin-top: 2px; }
.tips strong { color: #8a5a18; display: block; margin-bottom: 4px; }
.tips p { color: #6b4a18; font-size: 14px; line-height: 1.6; }

@media (max-width: 768px) {
  .info-grid { grid-template-columns: 1fr; }
  .hero-inner h1 { font-size: 26px; }
}
</style>
