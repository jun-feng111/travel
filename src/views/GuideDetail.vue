<template>
  <div v-if="guide">
    <router-link :to="`/city/${city.id}`" class="back container">← 返回 {{ city.name }}</router-link>

    <!-- Hero: 封面图 + 暗角 + 标题叠加 -->
    <div class="guide-hero">
      <ImgBox :src="guide.cover" :alt="guide.title" height="340px" overlay class="hero-bg" />
      <div class="container hero-inner">
        <span class="tag">{{ guide.cityName }}</span>
        <h1>{{ guide.title }}</h1>
        <p class="sub">{{ guide.summary }}</p>
        <p class="date"><el-icon><Calendar /></el-icon> {{ guide.author }} · {{ guide.date }}</p>
      </div>
    </div>

    <div class="container">
      <article class="markdown-body guide-content" v-html="rendered"></article>

      <div class="more">
        <h3 class="more-title">该城市其他攻略</h3>
        <div class="grid grid-cols-3">
          <router-link v-for="g in others" :key="g.id" :to="`/guide/${g.id}`" class="card guide-card">
            <ImgBox :src="g.cover" :alt="g.title" height="140px" />
            <div class="guide-body"><h4>{{ g.title }}</h4></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <el-empty v-else description="未找到该攻略" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Calendar } from '@element-plus/icons-vue'
import { marked } from 'marked'
import ImgBox from '../components/ImgBox.vue'
import { getGuide, guidesByCity } from '../data/guides'
import { getCity } from '../data/cities'

const route = useRoute()
const guide = getGuide(route.params.guideId)
const city = computed(() => guide ? getCity(guide.cityId) : null)
const rendered = computed(() => (guide ? marked.parse(guide.content) : ''))
const others = computed(() =>
  guide ? guidesByCity(guide.cityId).filter(g => g.id !== guide.id) : []
)
</script>

<style scoped>
.back { display: inline-block; margin: 20px 0; color: var(--primary); font-weight: 500; }

.guide-hero { position: relative; color: #fff; overflow: hidden; margin-bottom: 24px; }
.hero-bg { position: absolute; inset: 0; }
.hero-bg :deep(.imgbox-img) { filter: brightness(0.5); }
.hero-inner { position: relative; z-index: 2; padding: 56px 24px 36px; }
.tag { display: inline-block; background: rgba(255,255,255,0.2); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.25); color: #fff; font-size: 13px; padding: 4px 14px; border-radius: 12px; margin-bottom: 14px; }
.hero-inner h1 { font-size: 34px; font-weight: 800; text-shadow: 0 2px 12px rgba(0,0,0,0.4); }
.sub { font-size: 17px; margin-top: 10px; opacity: 0.95; text-shadow: 0 1px 6px rgba(0,0,0,0.3); }
.date { font-size: 13px; opacity: 0.8; margin-top: 8px; display: flex; align-items: center; gap: 4px; }

.guide-content { background: #fff; padding: 32px; border-radius: 16px; box-shadow: var(--shadow); margin-bottom: 36px; }
.more-title { font-size: 20px; font-weight: 700; color: var(--primary-dark); margin: 28px 0 16px; display: flex; align-items: center; gap: 8px; }
.more-title::before { content: ''; width: 4px; height: 20px; background: var(--primary); border-radius: 2px; }
.guide-body { padding: 12px 14px; }
.guide-body h4 { font-size: 14px; }

@media (max-width: 768px) {
  .hero-inner h1 { font-size: 24px; }
  .guide-content { padding: 20px; }
}
</style>
