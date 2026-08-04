<template>
  <div class="container">
    <h2 class="section-title"><el-icon><Tools /></el-icon> 旅行工具箱</h2>

    <div class="grid grid-cols-2 tools-grid">
      <!-- 预算计算器 -->
      <div class="card tool-card">
        <h3><el-icon><Money /></el-icon> 预算计算器</h3>
        <el-form label-width="90px">
          <el-form-item label="天数"><el-input-number v-model="days" :min="1" :max="30" /></el-form-item>
          <el-form-item label="人数"><el-input-number v-model="people" :min="1" :max="20" /></el-form-item>
          <el-form-item label="住宿/晚"><el-input-number v-model="b.room" :min="0" :step="50" /></el-form-item>
          <el-form-item label="餐饮/人天"><el-input-number v-model="b.food" :min="0" :step="20" /></el-form-item>
          <el-form-item label="交通/人天"><el-input-number v-model="b.transit" :min="0" :step="20" /></el-form-item>
          <el-form-item label="门票/人天"><el-input-number v-model="b.ticket" :min="0" :step="20" /></el-form-item>
          <el-form-item label="购物/总"><el-input-number v-model="b.shop" :min="0" :step="100" /></el-form-item>
        </el-form>
        <div class="calc-result">
          <div>总预算：<strong>¥{{ total }}</strong></div>
          <div>人均：<strong>¥{{ perPerson }}</strong></div>
        </div>
      </div>

      <!-- 打包清单 -->
      <div class="card tool-card">
        <h3><el-icon><List /></el-icon> 打包清单生成器</h3>
        <el-form label-width="90px">
          <el-form-item label="目的地类型">
            <el-select v-model="pack.type" style="width:100%">
              <el-option label="城市观光" value="city" />
              <el-option label="海岛海滨" value="island" />
              <el-option label="山区高原" value="mountain" />
              <el-option label="亲子出行" value="family" />
            </el-select>
          </el-form-item>
          <el-form-item label="天数"><el-input-number v-model="pack.days" :min="1" :max="30" /></el-form-item>
          <el-form-item label="季节">
            <el-select v-model="pack.season" style="width:100%">
              <el-option label="春" value="spring" />
              <el-option label="夏" value="summer" />
              <el-option label="秋" value="autumn" />
              <el-option label="冬" value="winter" />
            </el-select>
          </el-form-item>
        </el-form>
        <el-button text type="primary" @click="genPack" style="margin-bottom:10px">生成清单</el-button>
        <div v-if="packList.length" class="pack-list">
          <el-checkbox-group v-model="checked">
            <div v-for="(item, i) in packList" :key="i" class="pack-item">
              <el-checkbox :label="item" :value="item" />
            </div>
          </el-checkbox-group>
          <p class="pack-progress">已完成 {{ checked.length }} / {{ packList.length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { Tools, Money, List } from '@element-plus/icons-vue'

// 预算
const days = ref(3)
const people = ref(2)
const b = reactive({ room: 300, food: 120, transit: 80, ticket: 60, shop: 500 })
const total = computed(() =>
  b.room * days.value + (b.food + b.transit + b.ticket) * days.value * people.value + b.shop
)
const perPerson = computed(() => Math.round(total.value / people.value))

// 打包
const pack = reactive({ type: 'city', days: 3, season: 'autumn' })
const packList = ref([])
const checked = ref([])

const BASE = ['身份证/护照', '手机+充电器', '充电宝', '现金/银行卡', '常用药品', '换洗衣物', '洗漱用品', '雨具']
const TYPE_MAP = {
  city: ['舒适步行鞋', '相机', '地铁卡/交通App', '轻便背包'],
  island: ['防晒霜', '泳衣', '遮阳帽', '拖鞋', '防水袋', '墨镜'],
  mountain: ['防风外套', '登山鞋', '保温水壶', '高能零食', '创可贴', '氧气/红景天(高原)'],
  family: ['儿童常用药', '零食玩具', '婴儿车', '湿巾', '备用衣物']
}
const SEASON_MAP = {
  spring: ['薄外套', '过敏药'],
  summer: ['防暑药', '清凉油', '透气衣物'],
  autumn: ['长袖外套', '润唇膏'],
  winter: ['厚羽绒', '手套围巾', '保暖内衣', '护手霜']
}

function genPack() {
  const list = [...BASE]
  list.push(...(TYPE_MAP[pack.type] || []))
  list.push(...(SEASON_MAP[pack.season] || []))
  if (pack.days >= 7) list.push('足量洗衣用品')
  packList.value = [...new Set(list)]
  checked.value = []
}
</script>

<style scoped>
.tools-grid { align-items: start; }
.tool-card { padding: 20px; }
.tool-card h3 { display: flex; align-items: center; gap: 6px; margin-bottom: 14px; color: var(--primary-dark); }
.calc-result { background: #eef5f5; border-radius: 8px; padding: 12px 16px; display: flex; justify-content: space-around; font-size: 15px; }
.calc-result strong { color: var(--accent); }
.pack-item { padding: 4px 0; }
.pack-progress { margin-top: 8px; color: var(--primary); font-size: 13px; }
</style>
