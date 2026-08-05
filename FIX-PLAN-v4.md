# 旅行志 v4.0 修复与优化开发说明

## 一、问题诊断

### 1.1 图片不匹配问题（核心）

**现状**：`useImageSource.js` 使用 Picsum Photos 的 hash seed 生成图片 URL，导致：
- 图片内容与城市/景点/美食完全无关（Picsum 返回随机摄影作品）
- 多个城市可能 hash 碰撞，共享同一张图片
- 数据文件中的 `cover` 和 `imageKeywords` 字段存在但**从未被使用**

**数据覆盖情况**：
- 本地图片仅覆盖 5 个城市（成都/杭州/西安/丽江/厦门），共 44 张 PNG
- 其余 65 个城市完全依赖 Picsum 随机图片
- 景点（~200个）和美食（~100个）全部使用 Picsum 随机图片

### 1.2 地图功能问题

**现状**：
- `SpotDetail.vue` 的"位置导航"区域使用 Leaflet (OpenStreetMap) 渲染小地图
- 用户期望直接看到**高德地图**内嵌显示，而非 OpenStreetMap
- 当前仅有一个"在高德地图中打开"的外链，没有内嵌高德地图
- `CityDetail.vue` 的地图 Tab 也使用 Leaflet，同样需要替换为高德地图

**已有高德地图基础设施**：
- `src/api/amap.js`：高德 JS API 2.0 异步加载器 + POI/地理编码封装
- `src/composables/useAMap.js`：高德地图实例管理 composable
- API Key：`91aa55be616abb60c334f6b734eb1279`

### 1.3 UI 精致度不足

**现状**：
- 整体风格偏功能性，缺乏旅行网站的沉浸感和高级感
- 卡片设计较平淡，缺少旅行网站标志性的大图+浮层信息设计
- 缺少微交互和视觉层次感

---

## 二、设计参考

### 2.1 世界顶级旅行网站设计特征

| 网站 | 核心设计特征 | 可借鉴点 |
|------|------------|---------|
| **Airbnb** | 全屏大图 Hero、圆角卡片+柔和阴影、微动效、沉浸式体验 | Hero 区域、卡片悬停效果 |
| **Booking.com** | 评分徽章突出、价格高亮、地理位置标签、信息密度高 | 评分展示、位置标签 |
| **马蜂窝** | 大图目的地推荐、瀑布流攻略、UGC 内容质感 | 城市卡片大图 + slogan |
| **携程攻略** | 目的地模块留白聚焦、口袋攻略书式封面 | 卡片层次与留白 |
| **穷游网** | 攻略精品化排版、内容质感、行程时间轴 | 攻略卡片设计 |
| **Lonely Planet** | 大幅风景图、探索感、文化深度 | 图片沉浸式展示 |

### 2.2 设计趋势应用

1. **沉浸式大图**：城市/景点页面使用全宽大图 Hero，图片与内容强关联
2. **玻璃态卡片**：backdrop-filter + 半透明背景 + 柔和阴影
3. **微交互**：卡片悬停 transform + 图片 scale + 阴影加深
4. **信息浮层**：图片上叠加评分/标签/价格等关键信息
5. **色彩层次**：渐变遮罩 + 文字阴影确保可读性

---

## 三、图片系统重构方案

### 3.1 核心策略：Unsplash 精选图片 + 关键词兜底

**方案**：为每个城市/景点/美食添加 `coverImage` 字段，存储精选的 Unsplash 图片 URL。

**图片来源**：
- **主方案**：Unsplash 直接图片 URL（`https://images.unsplash.com/photo-XXX?w=800&h=500&fit=crop&q=80`）
  - 优势：图片质量高、内容匹配、无 API 限制、加载快
  - 实现：为 70 个城市精选匹配的 Unsplash 照片 ID
- **兜底方案**：Picsum Photos（保留现有逻辑作为 fallback）

### 3.2 数据结构变更

在 `cities.js` / `spots.js` / `foods.js` 中为每条数据新增 `coverImage` 字段：

```javascript
// cities.js 示例
{
  id: 'beijing',
  name: '北京',
  coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad0037f?w=800&h=500&fit=crop&q=80',
  // ... 其他字段不变
}
```

### 3.3 useImageSource.js 修改逻辑

```javascript
export function getCityImage(city) {
  if (!city) return ''
  // 优先使用精选图片
  if (city.coverImage) return city.coverImage
  // 兜底：本地图片
  if (city.cover && city.cover.startsWith('img/')) return city.cover
  // 最终兜底：Picsum
  return getImageUrl(null, hashSeed(city.id || city.name))
}

export function getSpotImage(spot, city) {
  if (!spot) return ''
  if (spot.coverImage) return spot.coverImage
  if (spot.cover && spot.cover.startsWith('img/')) return spot.cover
  return getImageUrl(null, hashSeed(spot.id || spot.name))
}

export function getFoodImage(food, city) {
  if (!food) return ''
  if (food.coverImage) return food.coverImage
  if (food.cover && food.cover.startsWith('img/')) return food.cover
  return getImageUrl(null, hashSeed(food.id || food.name))
}
```

### 3.4 70 个城市精选 Unsplash 图片映射

为每个城市精选一张代表性 Unsplash 照片，确保：
- 图片内容与城市特色匹配（地标/风景/文化）
- 每个城市使用不同的照片，避免重复
- 图片尺寸适配 800x500 封面比例

---

## 四、地图功能优化方案

### 4.1 景点详情页（SpotDetail.vue）

**需求**：在"位置导航"区域直接内嵌高德地图，替代当前的 Leaflet 地图。

**实现方案**：
1. 使用已有的 `useAMap.js` composable 初始化高德地图
2. 在 `#spotMiniMap` 容器中渲染高德地图
3. 以景点经纬度为中心，zoom=15
4. 添加景点标记点（红色 Marker）
5. 保留"在高德地图中打开"外链作为辅助入口
6. 地图高度 300px，圆角卡片包裹

**关键代码**：
```javascript
import { useAMap } from '../composables/useAMap'

const spotMapRef = ref(null)
const { initMap, addMarker, destroy } = useAMap(spotMapRef, {
  zoom: 15,
  center: [spot.value.lng, spot.value.lat]
})

onMounted(async () => {
  const mapInstance = await initMap()
  if (mapInstance && spot.value) {
    addMarker(
      { lng: spot.value.lng, lat: spot.value.lat },
      spot.value.name
    )
  }
})
```

### 4.2 城市详情页（CityDetail.vue）

**需求**：地图 Tab 从 Leaflet 替换为高德地图。

**实现方案**：
1. 使用 `useAMap.js` composable
2. 以城市中心为初始视角，zoom=12
3. 批量添加该城市所有景点标记
4. 点击标记弹出信息窗口（景点名+评分+详情链接）
5. 侧边景点列表点击可聚焦到对应标记

### 4.3 模板变更

SpotDetail.vue 的地图区域：
```html
<section class="map-section">
  <h2 class="section-title">
    <span class="title-bar"></span>
    位置导航
  </h2>
  <div class="map-card">
    <div ref="spotMapRef" class="map-container"></div>
    <div class="map-info">
      <div class="map-coords">
        <span>经度: {{ spot.lng }}</span>
        <span>纬度: {{ spot.lat }}</span>
      </div>
      <a :href="amapUri" target="_blank" class="map-link">
        <el-icon><Guide /></el-icon> 在高德地图中打开
      </a>
    </div>
  </div>
</section>
```

---

## 五、UI 精致化方案

### 5.1 景点详情页 UI 优化

1. **Hero 区域**：图片高度从 380px 提升至 420px，加深渐变遮罩
2. **信息卡片**：增加图标背景渐变色，提升视觉层次
3. **地图卡片**：圆角 16px + 柔和阴影 + 高德地图品牌色
4. **附近景点**：卡片悬停增加图片 scale(1.08) 效果
5. **侧边栏**：城市卡片增加渐变遮罩文字

### 5.2 城市详情页 UI 优化

1. **Hero 区域**：全宽大图 + 深色渐变遮罩 + 大字标题
2. **Quick Info Bar**：毛玻璃效果背景
3. **景点卡片**：图片浮层评分徽章 + 悬停动画
4. **美食卡片**：类型标签 + 价格高亮
5. **地图 Tab**：高德地图 + 侧边景点列表

### 5.3 全局样式增强

```css
/* 地图容器样式 */
.map-container {
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
}

/* 高德地图信息窗口自定义 */
.amap-info-content {
  padding: 12px;
  font-family: inherit;
}
```

---

## 六、实施步骤

### Step 1：图片系统重构
1. 修改 `useImageSource.js`，优先使用 `coverImage` 字段
2. 为 `cities.js` 中 70 个城市添加 `coverImage`（Unsplash 精选 URL）
3. 为 `spots.js` 中热门景点添加 `coverImage`
4. 为 `foods.js` 中特色美食添加 `coverImage`
5. 验证图片加载正常

### Step 2：地图功能优化
1. 修改 `SpotDetail.vue`，替换 Leaflet 为高德地图
2. 修改 `CityDetail.vue`，替换 Leaflet 为高德地图
3. 优化地图容器样式
4. 验证地图加载和交互正常

### Step 3：UI 精致化
1. 优化 SpotDetail.vue 样式
2. 优化 CityDetail.vue 样式
3. 优化全局样式
4. 响应式适配检查

### Step 4：验证
1. `npm run dev` 启动开发服务器
2. 逐一检查城市/景点/美食页面图片匹配度
3. 检查高德地图在景点详情页和城市详情页的显示
4. 检查移动端响应式
5. `npm run build` 确认构建成功

---

## 七、注意事项

1. **Unsplash 图片 URL 格式**：使用 `images.unsplash.com` 直接链接，带 `w/h/fit/crop/q` 参数
2. **高德地图安全密钥**：当前使用的是 JS API 2.0 免费版，每日配额足够
3. **图片懒加载**：ImgBox 组件已有 `loading="lazy"`，无需额外处理
4. **地图销毁**：组件卸载时必须调用 `destroy()` 防止内存泄漏
5. **构建验证**：所有修改后必须运行 `npm run build` 确认无错误