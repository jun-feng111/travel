<template>
  <div class="container">
    <h2 class="section-title"><el-icon><Search /></el-icon> 搜索结果</h2>
    <p class="kw">关键词：<strong>{{ q }}</strong></p>

    <template v-if="hasResult">
      <section v-if="result.cities.length">
        <h3 class="group">城市</h3>
        <div class="grid grid-cols-4">
          <router-link v-for="c in result.cities" :key="c.id" :to="`/city/${c.id}`" class="card city-card">
            <ImgBox :src="c.cover" :alt="c.name" height="140px" />
            <div class="body"><h4>{{ c.name }}</h4><p>{{ c.slogan }}</p></div>
          </router-link>
        </div>
      </section>

      <section v-if="result.spots.length">
        <h3 class="group">景点</h3>
        <div class="grid grid-cols-3">
          <router-link v-for="s in result.spots" :key="s.id" :to="`/spot/${s.id}`" class="card spot-card">
            <ImgBox :src="s.cover" :alt="s.name" height="150px" />
            <div class="body"><h4>{{ s.name }}</h4><span class="rating">★ {{ s.rating }}</span></div>
          </router-link>
        </div>
      </section>

      <section v-if="result.foods.length">
        <h3 class="group">美食</h3>
        <div class="grid grid-cols-3">
          <div v-for="f in result.foods" :key="f.id" class="card food-card">
            <ImgBox :src="f.cover" :alt="f.name" height="150px" />
            <div class="body"><h4>{{ f.name }}</h4><p>{{ f.desc }}</p></div>
          </div>
        </div>
      </section>

      <section v-if="result.guides.length">
        <h3 class="group">攻略</h3>
        <div class="grid grid-cols-2">
          <router-link v-for="g in result.guides" :key="g.id" :to="`/guide/${g.id}`" class="card guide-card">
            <ImgBox :src="g.cover" :alt="g.title" height="150px" />
            <div class="body"><h4>{{ g.title }}</h4><p>{{ g.summary }}</p></div>
          </router-link>
        </div>
      </section>
    </template>

    <el-empty v-else description="没有找到相关内容，换个词试试" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ImgBox from '../components/ImgBox.vue'
import { searchAll } from '../data'

const route = useRoute()
const q = computed(() => route.query.q || '')
const result = computed(() => searchAll(q.value))
const hasResult = computed(() => {
  const r = result.value
  return r.cities.length || r.spots.length || r.foods.length || r.guides.length
})
</script>

<style scoped>
.kw { color: var(--text-light); margin-bottom: 16px; }
.group { font-size: 18px; margin: 22px 0 12px; color: var(--primary-dark); }
.body { padding: 12px 14px; }
.body h4 { font-size: 15px; margin-bottom: 4px; }
.body p { color: var(--text-light); font-size: 13px;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.rating { color: var(--accent); font-weight: 600; font-size: 13px; }
</style>
