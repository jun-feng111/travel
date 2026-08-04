# 旅行志 2.0 开发规划

## 一、项目定位

一个纯前端的旅行发现与规划平台，集成高德地图和和风天气API，为用户提供：
- 全国城市/景点/美食的搜索与浏览
- 智能行程规划（基于天气、评分、时长）
- 收藏管理与攻略参考
- 实时地图、天气、POI搜索

## 二、技术方案

### 2.1 技术栈（保持不变）
- Vue 3 + Vite + Vue Router
- Element Plus UI
- 高德地图 JS API 2.0
- 和风天气 API
- localStorage 持久化收藏/行程
- Netlify 静态托管

### 2.2 API 配置

| API | Key | 用途 |
|-----|-----|------|
| 高德地图 Web端 JS API | `91aa55be616abb60c334f6b734eb1279` | 地图渲染、POI搜索、路径规划 |
| 和风天气 凭据ID | `CCB5XGBUJU` | 城市ID映射 |
| 和风天气 API | `7eb24ad7c36b457f9965e40ed0d29bd0` | 实时天气、7日预报 |

### 2.3 高德地图 API 清单
- 地图展示：`AMap.Map`
- POI 搜索：`AMap.PlaceSearch`（搜索城市、景点、美食、酒店）
- 输入联想：`AMap.AutoComplete`（搜索框自动补全）
- 地理编码：`AMap.Geocoder`（坐标↔地址转换）
- 路径规划：`AMap.Driving` / `AMap.Walking` / `AMap.Transfer`
- 天气查询：`AMap.Weather`
- 行政区查询：`AMap.DistrictSearch`

### 2.4 和风天气 API 清单
- 城市搜索：`/geoapi/v2/city/lookup`
- 实时天气：`/weather-api/v1/now`
- 7日预报：`/weather-api/v1/7d`
- 城市ID映射：高德 adcode ↔ 和风天气 city_id

## 三、核心功能模块

### 3.1 全国城市搜索与浏览
- **搜索页面（Search.vue 改造）**
  - 搜索框输入城市名，高德 AutoComplete 实时联想
  - 搜索结果支持按类型筛选：城市/景点/美食/酒店
  - 点击结果直接跳转到详情页
- **城市数据扩展**
  - 内置数据+高德 API 动态补充，支持全国 300+ 地级市
  - 每个城市展示：基本信息、天气、热门景点、美食推荐

### 3.2 智能地图探索
- **CityMap.vue 改造**
  - 高德地图全屏展示
  - 景点/美食/酒店标记点，点击弹窗显示详情
  - 支持按类型筛选标记
  - 点击标记跳转对应详情页
- **POI 附近搜索**
  - 在城市详情页"周边探索"功能
  - 半径搜索美食、咖啡馆、交通等

### 3.3 智能行程规划升级
- **Planner.vue 改造**
  - 输入目的地城市、出行天数、偏好类型
  - 结合天气API推荐适合的日期
  - 智能排序：评分>热门>距离>天气匹配
  - 自动生成按天分组的行程
  - 行程地图可视化（路线+时间轴）
  - 一键保存到收藏

### 3.4 天气集成
- **CityDetail.vue 改造**
  - 实时天气卡片（温度、湿度、风力）
  - 7日天气预报
  - 穿衣/出行建议
  - 最佳游览时间推荐

### 3.5 收藏与攻略
- **Favorites.vue 升级**
  - 分类收藏：城市/景点/美食/攻略
  - 收藏卡片带缩略图、评分、标签
  - 一键加入行程
- **攻略生成**
  - 根据收藏自动生成行程攻略
  - 支持 Markdown 格式导出

### 3.6 首页升级
- **Home.vue 改造**
  - 搜索大入口（高德联想）
  - 实时天气轮播（热门城市天气）
  - 基于天气的目的地推荐（根据当前季节）
  - 热门城市动态数据

## 四、数据模型

### 4.1 城市数据（扩展现有）
```js
{
  id: 'chengdu',
  name: '成都',
  province: '四川',
  region: '西南',
  adcode: '510100',        // 高德行政区编码
  qweatherId: '101270101', // 和风天气城市ID
  lng: 104.0668,
  lat: 30.5728,
  // ...其他字段
}
```

### 4.2 新增景点扩展字段
```js
{
  // 现有字段
  amapPoiId: 'B0FFFABC',    // 高德POI ID
  tel: '028-xxx',           // 电话
  website: '...',            // 官网
  photos: ['url1', 'url2'], // 图片
  // 新增
}
```

## 五、页面流程

```
首页 ──[搜索]──→ 搜索结果页 ──[点击]──→ 城市/景点详情
  │                                    │
  ├──[热门城市]──→ 城市详情 ──[地图]──→ 地图探索
  │                                    │
  ├──[天气推荐]──→ 天气选城 ──[规划]──→ 行程规划
  │                                    │
  └──[收藏入口]──→ 收藏管理 ──[生成]──→ 攻略详情
```

## 六、文件结构变更

```
src/
├── api/                    # 新增：API封装
│   ├── amap.js            # 高德地图API封装
│   ├── qweather.js        # 和风天气API封装
│   └──apikey.js           # API Key配置
├── composables/            # 新增：组合式函数
│   ├── useAmap.js         # 高德地图加载与使用
│   ├── useWeather.js      # 天气数据获取
│   ├── useSearch.js       # 搜索逻辑
│   └── useRoute.js        # 路径规划
├── data/                   # 现有：数据
│   ├── cities.js          # 扩展城市数据
│   ├── spots.js           # 扩展景点数据
│   ├── foods.js           # 扩展美食数据
│   └── index.js           # 数据导出
├── views/                  # 现有：页面
│   ├── Home.vue           # 升级
│   ├── Search.vue         # 升级
│   ├── CityDetail.vue     # 升级（加天气、地图）
│   ├── CityMap.vue        # 升级（高德地图）
│   ├── Planner.vue        # 升级（智能规划）
│   ├── Favorites.vue      # 升级
│   └── ...
├── components/             # 现有：组件
│   ├── ImgBox.vue
│   ├── WeatherCard.vue    # 新增
│   ├── MapExplorer.vue    # 新增
│   └── ...
├── router/index.js         # 路由（不变）
├── App.vue
├── main.js
└── style.css
```

## 七、分阶段实施

### Phase 1：基础设施
1. 高德地图 JS API 集成（index.html 引入+异步加载）
2. API Key 配置与环境变量
3. Composables 封装（useAmap, useWeather）
4. 扩展城市/景点数据（加 adcode, qweatherId）

### Phase 2：核心功能
1. 搜索页面升级（高德联想+多类型筛选）
2. 城市详情页加天气卡片
3. 城市地图页改高德地图
4. 行程规划升级（天气+智能排序）

### Phase 3：体验优化
1. 首页升级（搜索入口+天气推荐）
2. 收藏管理升级
3. 攻略自动生成
4. UI 打磨

### Phase 4：部署
1. 构建测试
2. Netlify 部署
3. 域名配置

## 八、注意事项

- 高德地图 JS API 通过异步动态加载方式引入，无需在 index.html 直接引入
- 和风天气 API key 放在前端有泄露风险，纯前端项目只能这么做
- 高德 Web 端 JS API 需要配置允许访问的域名（在高德控制台）
- Netlify 部署需在安全设置中允许 API 请求
- 所有图片资源用 CDN 或 URL 替代本地文件

## 九、已实现功能清单

### ✅ Phase 1：基础设施（已完成）
1. **高德地图 API 集成** - `src/api/amap.js` 封装地图加载、POI搜索、自动补全、地理编码、行政区划查询
2. **和风天气 API 集成** - `src/api/qweather.js` 封装实时天气、7日预报、城市搜索
3. **API Key 配置** - `src/api/apikey.js` 集中管理
4. **Composables 封装**：
   - `useAMap` - 高德地图实例管理
   - `useWeather` - 天气数据管理（含缓存、旅行贴士）
   - `useGlobalSearch` - 全局搜索（本地+高德API）
   - `useFavorites` - 收藏/攻略 localStorage 持久化
5. **数据扩展** - 城市从5个扩展到20个，景点/美食对应扩展

### ✅ Phase 2：核心功能（已完成）
1. **探索页面** (`/explore`) - 全国城市/景点/美食搜索，支持高德POI实时搜索
2. **城市详情页** 集成天气卡片（实时天气+7日预报+出行贴士）
3. **行程规划器** 集成天气提示、智能日程生成、攻略保存
4. **高德地图页面** - 高德地图替换原Leaflet

### ✅ Phase 3：体验优化（已完成）
1. **首页升级** - Hero区域搜索框、热门标签快速搜索
2. **收藏管理** - 城市/景点/美食收藏 + 攻略管理
3. **攻略详情页** (`/plan-detail/:planId`) - 查看行程、天气、预算、贴士
4. **UI全面升级** - 渐变背景、emoji图标、现代化卡片设计

### ✅ Phase 4：部署（已完成）
1. 构建测试通过 (`npm run build` ✓)
2. Netlify 配置 (`netlify.toml`)
3. 静态托管，所有人可访问
