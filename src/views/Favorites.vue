<template>
  <div class="container">
    <h2 class="section-title"><el-icon><Star /></el-icon> 我的收藏（{{ list.length }}）</h2>
    <p class="desc">收藏保存在本浏览器本地，不会上传服务器。</p>

    <el-empty v-if="!list.length" description="还没有收藏，去城市页点 ♡ 收藏吧" />

    <div v-else class="groups">
      <div v-for="g in groups" :key="g.type" class="group">
        <h3 class="group-title">{{ g.label }}（{{ g.items.length }}）</h3>
        <div class="grid grid-cols-3">
          <div v-for="f in g.items" :key="f.id" class="card fav-card">
            <ImgBox :src="coverOf(f)" :alt="f.name" height="140px" />
            <div class="fav-body">
              <h4>{{ f.name }}</h4>
              <p v-if="f.sub" class="sub">{{ subLabel(f) }}</p>
              <div class="fav-actions">
                <router-link v-if="f.type === 'city'" :to="`/city/${f.id}`" class="view-link">查看 →</router-link>
                <router-link v-else-if="f.type === 'spot'" :to="`/spot/${f.id}`" class="view-link">查看 →</router-link>
                <el-button text type="danger" size="small" @click="remove(f)">取消收藏</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Star } from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { getFavorites, removeFav } from '../data/favorites'
import { refreshFav } from '../data/favStore'
import { getCity } from '../data/cities'
import { getSpot } from '../data/spots'
import { foodsByCity } from '../data/foods'

const list = ref(getFavorites())

const groups = computed(() => {
  const defs = [
    { type: 'city', label: '城市' },
    { type: 'spot', label: '景点' },
    { type: 'food', label: '美食' }
  ]
  return defs.map(d => ({ ...d, items: list.value.filter(f => f.type === d.type) }))
    .filter(g => g.items.length)
})

function coverOf(f) {
  if (f.type === 'city') { const c = getCity(f.id); return c ? c.cover : '' }
  if (f.type === 'spot') { const s = getSpot(f.id); return s ? s.cover : '' }
  if (f.type === 'food') {
    const food = foodsByCity(f.sub).find(x => x.id === f.id)
    return food ? food.cover : ''
  }
  return ''
}

function subLabel(f) {
  if (f.type === 'city') return '目的地'
  if (f.type === 'spot') { const c = getCity(f.sub); return c ? c.name : '' }
  if (f.type === 'food') { const c = getCity(f.sub); return c ? c.name + ' · 美食' : '美食' }
  return ''
}

function remove(f) {
  removeFav(f.type, f.id)
  list.value = getFavorites()
  refreshFav()
}
</script>

<style scoped>
.desc { color: var(--text-light); margin-bottom: 16px; }
.group { margin-bottom: 28px; }
.group-title { font-size: 18px; color: var(--primary-dark); margin-bottom: 14px; display: flex; align-items: center; gap: 8px; }
.group-title::before { content: ''; width: 4px; height: 18px; background: var(--primary); border-radius: 2px; }
.fav-body { padding: 12px 14px; }
.fav-body h4 { font-size: 16px; margin-bottom: 4px; }
.sub { color: var(--text-light); font-size: 13px; margin-bottom: 8px; }
.fav-actions { display: flex; justify-content: space-between; align-items: center; }
.view-link { color: var(--primary); font-size: 13px; font-weight: 600; }
</style>
