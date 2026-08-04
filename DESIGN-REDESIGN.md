# 旅行志 重设计方案

## 一、问题诊断

### 1.1 当前问题
- **封面图错误**：城市/景点/美食封面使用高德静态地图，不是真实风景图
- **图片加载失败**：原 URL 域名错误（webst.amap.com 无法解析），导致界面卡在加载状态
- **定位偏差**：用户需要的是旅行网站（看风景+美食），不是地图工具
- **地图使用错位**：地图作为辅助工具应放在城市详情页，不应作为主视觉
- **UI 精致度不足**：缺乏高级感、协调性

### 1.2 数据现状
- 70 个城市，每个城市有 `cover`（图片标识符）、`lng/lat`、`name`、`slogan` 字段
- 约 200 个景点，每个有 `cover`、`name`、`tags`、`rating`
- 约 100 道美食，每个有 `cover`、`name`、`type`、`rating`
- 已有 Leaflet 互动地图（CityMap.vue），使用 OpenStreetMap

---

## 二、设计参考

### 2.1 主流旅行网站参考
| 平台 | 核心设计点 | 借鉴方向 |
|------|----------|---------|
| **马蜂窝** | 大图目的地推荐、瀑布流攻略、UGC 内容 | 城市卡片大图+ slogan |
| **携程攻略** | 目的地模块留白聚焦、口袋攻略书式封面 | 卡片层次与留白 |
| **Airbnb** | 全屏大图 Hero、卡片圆角+柔和阴影、微动效 | Hero 与卡片样式 |
| **Booking** | 评分徽章、价格高亮、地理位置标签 | 评分与信息密度 |
| **穷游网** | 攻略精品化排版、内容质感 | 攻略卡片设计 |

### 2.2 2026 设计趋势应用
1. **液态玻璃美学**：导航栏 backdrop-filter、卡片玻璃质感
2. **动态渐变**：Hero 背景流动光斑（保留现有 shape 动画）
3. **大字号标题**：64px Hero 标题、36px 区块标题
4. **Bento Grids 布局**：首页采用不规则网格，避免千篇一律的 4 列
5. **微交互**：卡片悬停 transform、按钮 transform、淡入动画
6. **滚动叙事**：页面分段、alt-bg 交替背景
7. **材质混搭**：玻璃 + 渐变 + 柔和阴影

---

## 三、图片方案设计（核心）

### 3.1 图片源策略
放弃高德静态地图，改用 **LoremFlickr**（按关键词返回真实风景图，免费无需 key）：

```
https://loremflickr.com/800/500/{keywords}?lock={seed}
```

- `keywords`：URL 编码的搜索关键词（如 `beijing,forbidden-city`）
- `lock`：固定 seed，保证同一城市每次加载图片一致
- 自动 fallback：若加载失败，ImgBox 显示渐变占位

### 3.2 图片关键词映射
为每个城市/景点/美食精心设计英文关键词，确保返回的图片与目的地匹配：

**城市示例：**
| 城市 | 关键词 |
|------|--------|
| 北京 | `beijing,forbidden-city` |
| 上海 | `shanghai,bund,skyline` |
| 西安 | `xian,terracotta-warriors` |
| 成都 | `chengdu,panda` |
| 桂林 | `guilin,karst,river` |
| 三亚 | `sanya,beach,tropical` |
| 拉萨 | `lhasa,potala-palace` |

**景点示例：**
- 故宫博物院 → `forbidden-city,beijing,architecture`
- 西湖 → `west-lake,hangzhou,landscape`
- 兵马俑 → `terracotta-warriors,xian`

**美食示例：**
- 北京烤鸭 → `peking-duck,chinese-food`
- 火锅 → `hotpot,sichuan-food`
- 小笼包 → `xiaolongbao,dumpling`

### 3.3 实现方式
新建 `src/composables/useImageSource.js`：
```javascript
export function getCityImage(city) {
  const keywords = encodeURIComponent(city.imageKeywords || city.name)
  const seed = hashCode(city.id)
  return `https://loremflickr.com/800/500/${keywords}?lock=${seed}`
}
export function getSpotImage(spot, city) { ... }
export function getFoodImage(food, city) { ... }
```

### 3.4 关键词数据扩展
为 cities.js / spots.js / foods.js 中的每条数据添加 `imageKeywords` 字段（英文关键词），覆盖 70 个城市 + 200 个景点 + 100 个美食。考虑到工作量，**优先覆盖主要城市与热门景点**，其余使用城市名拼音兜底。

---

## 四、地图功能重新定位

### 4.1 现状
- 已有 `CityMap.vue`（Leaflet + OpenStreetMap），路由 `/city/:id/map`
- 城市详情页（CityDetail.vue）应作为主入口

### 4.2 调整方案
- **保留** CityMap 独立页面，作为"查看地图"功能
- **城市详情页**新增"地理位置"卡片：小地图 + "查看大地图"按钮
- **景点详情页**新增"位置"模块：显示坐标 + "在城市地图中查看"链接
- **不再**把地图作为任何卡片封面

---

## 五、UI 视觉升级方案

### 5.1 配色系统（保留并优化）
```css
--primary: #1f9e8f;       /* 青绿 - 旅行主色 */
--primary-dark: #14746a;
--accent: #f0a830;        /* 金黄 - 强调色 */
--ink: #1a365d;           /* 深蓝 - 标题色 */
--text: #1f2d3a;
--text-light: #6b7c8f;
```

### 5.2 字体层级
- Hero 标题：64px / 900
- 区块标题：28px / 800
- 卡片标题：18-20px / 700
- 正文：14px / 400
- 标签：11-12px / 600

### 5.3 卡片设计升级
- 圆角：城市卡 20px、景点卡 16px、美食卡 16px
- 阴影：默认 `0 4px 24px rgba(20,60,60,0.08)`，悬停 `0 20px 48px rgba(20,60,60,0.16)`
- 悬停动画：`translateY(-8px)` + 阴影加深 + 图片 `scale(1.05)`
- 信息布局：图片 + 浮层标签（区域/类型/评分）+ 标题 + 副信息

### 5.4 首页 Bento 布局优化
保留现有结构，重点优化：
1. **Hero**：保留流动渐变背景，但加入"图片墙"装饰（4-6 张小城市图轮播浮窗）
2. **城市卡**：封面图改用真实风景图，提升沉浸感
3. **景点卡**：横向小卡，图片 + 标题 + 评分 + 城市
4. **美食卡**：图片 + 类型徽章 + 名称 + 评分 + 价格
5. **CTA**：保留深色渐变背景

### 5.5 微交互清单
- 导航栏滚动时透明度变化（已有 backdrop-filter）
- 卡片悬停：transform + 阴影 + 图片缩放
- 按钮：translateY + 阴影
- 标签/徽章：hover 颜色过渡
- 页面切换：fade transition（已有）

---

## 六、实施步骤

### 阶段 1：图片系统重构（核心）
1. 新建 `src/composables/useImageSource.js`，实现 `getCityImage/getSpotImage/getFoodImage`
2. 为 cities.js 中 70 个城市补充 `imageKeywords` 字段
3. 为 spots.js / foods.js 中热门条目补充 `imageKeywords`（兜底用城市名+景点名拼音）
4. 修改 Home.vue / Cities.vue / CityDetail.vue / SpotDetail.vue / FoodDetail.vue / Explore.vue 中的图片 URL 获取逻辑
5. 删除/重写 useImageLoader.js 中的 `getCityCover`（不再使用地图）

### 阶段 2：地图功能迁移
1. 在 CityDetail.vue 新增"地理位置"小地图卡片
2. 景点详情页 SpotDetail.vue 新增"位置信息"模块 + "查看城市地图"链接
3. 验证 CityMap.vue 路由可访问

### 阶段 3：UI 精致化
1. 优化卡片阴影、圆角、悬停动画
2. 调整首页 Bento 网格密度
3. 统一色彩与字体层级
4. 检查响应式断点

### 阶段 4：验证
1. `npm run dev` 启动开发服务器
2. 浏览器访问首页、城市页、景点页、美食页
3. 确认图片正常加载、无 console 错误
4. 检查移动端响应式

---

## 七、注意事项

1. **LoremFlickr 限流**：免费版不限速但有广告概率，如失败 ImgBox 显示占位
2. **图片缓存**：浏览器自动缓存，同一 URL 不会重复请求
3. **关键词准确性**：英文关键词比中文更稳定，避免使用纯中文
4. **保持简洁**：不过度堆砌功能，聚焦"看风景+看美食"核心体验
5. **性能优先**：图片懒加载（ImgBox 已有 `loading="lazy"`）
