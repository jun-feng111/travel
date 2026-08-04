<template>
  <div class="container planner">
    <h2 class="section-title"><el-icon><MagicStick /></el-icon> 行程规划器</h2>
    <p class="desc">选择城市、天数、预算和旅行风格，自动生成一份逐日行程（基于本站景点与美食数据）。</p>

    <div class="form-card card">
      <el-form :model="form" label-width="80px">
        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item label="目的地">
              <el-select v-model="form.cityId" placeholder="选择城市" style="width:100%">
                <el-option v-for="c in cities" :key="c.id" :label="c.name" :value="c.id" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="天数">
              <el-input-number v-model="form.days" :min="1" :max="7" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="风格">
              <el-select v-model="form.style" style="width:100%">
                <el-option label="休闲" value="休闲" />
                <el-option label="深度" value="深度" />
                <el-option label="亲子" value="亲子" />
                <el-option label="美食" value="美食" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="每日预算">
          <el-slider v-model="form.budget" :min="100" :max="1000" :step="50" show-input />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="generate" :disabled="!form.cityId">生成行程</el-button>
          <el-button v-if="plan.length" @click="goMap" :disabled="!form.cityId">在地图上查看</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div v-if="plan.length" class="result">
      <div v-for="d in plan" :key="d.day" class="day-card card">
        <div class="day-head">
          <span class="day-no">Day {{ d.day }}</span>
          <span class="day-cost">约 {{ d.dayCost }} 元</span>
        </div>
        <div v-for="(it, i) in d.items" :key="i" class="item">
          <router-link v-if="it.kind === 'spot'" :to="`/spot/${it.id}`" class="item-thumb">
            <ImgBox :src="it.cover" :alt="it.name" height="64px" radius="10px" />
          </router-link>
          <div v-else class="item-thumb">
            <ImgBox :src="it.cover" :alt="it.name" height="64px" radius="10px" />
          </div>
          <span class="badge" :class="it.kind">{{ it.kind === 'spot' ? '景点' : '美食' }}</span>
          <div class="item-main">
            <router-link v-if="it.kind === 'spot'" :to="`/spot/${it.id}`" class="item-name">{{ it.name }}</router-link>
            <span v-else class="item-name">{{ it.name }}</span>
            <div class="item-meta">
              <span v-if="it.rating" class="rating">★ {{ it.rating }}</span>
              <span class="cost">{{ it.cost }} 元</span>
            </div>
          </div>
          <el-button text :icon="it.faved ? StarFilled : Star" @click="fav(it)">
            {{ it.faved ? '已收藏' : '收藏' }}
          </el-button>
        </div>
      </div>

      <div class="total card">
        总预算预估：<strong>{{ totalCost }} 元</strong>（{{ form.days }} 天 · {{ form.style }} · 每日 {{ form.budget }} 元）
      </div>
    </div>

    <el-empty v-else-if="generated" description="该城市数据不足，暂无法生成行程" />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Star, StarFilled, MagicStick } from '@element-plus/icons-vue'
import ImgBox from '../components/ImgBox.vue'
import { cities } from '../data/cities'
import { planTrip } from '../data/planner'
import { toggleFav, isFav } from '../data/favorites'
import { refreshFav } from '../data/favStore'

const router = useRouter()
const route = useRoute()
const form = reactive({
  cityId: route.query.city || '',
  days: Number(route.query.days) || 3,
  budget: 300,
  style: '休闲'
})
const plan = ref([])
const generated = ref(false)

const totalCost = computed(() => plan.value.reduce((s, d) => s + d.dayCost, 0))

function decorate(items, cityId) {
  return items.map(it => ({
    ...it,
    faved: isFav(it.kind, it.id)
  }))
}

function generate() {
  const raw = planTrip({ ...form })
  plan.value = raw.map(d => ({ ...d, items: decorate(d.items, form.cityId) }))
  generated.value = true
}

function fav(it) {
  const ok = toggleFav({ type: it.kind, id: it.id, name: it.name, sub: form.cityId })
  it.faved = ok
  refreshFav()
}

function goMap() {
  router.push(`/map/${form.cityId}`)
}
</script>

<style scoped>
.desc { color: var(--text-light); margin-bottom: 16px; }
.form-card { padding: 20px; margin-bottom: 24px; }
.day-card { padding: 16px 18px; margin-bottom: 16px; }
.day-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.day-no { font-weight: 700; font-size: 17px; color: var(--primary-dark); }
.day-cost { color: var(--accent); font-weight: 600; }
.item { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-top: 1px dashed #eee; }
.item:first-child { border-top: none; }
.item-thumb { width: 72px; height: 64px; flex-shrink: 0; border-radius: 10px; overflow: hidden; }
.badge { font-size: 12px; padding: 2px 8px; border-radius: 8px; color: #fff; white-space: nowrap; }
.badge.spot { background: var(--primary); }
.badge.food { background: var(--accent); }
.item-main { flex: 1; }
.item-name { font-weight: 600; }
.item-meta { display: flex; gap: 12px; font-size: 13px; color: var(--text-light); margin-top: 2px; }
.rating { color: var(--accent); }
.total { padding: 16px 18px; text-align: center; font-size: 16px; color: var(--text); }
</style>
