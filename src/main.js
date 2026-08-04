import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

// Element Plus 组件与 API 通过 unplugin 按需自动引入（见 vite.config.js）
// 此处仅手动全局注册图标组件，供模板直接使用
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.mount('#app')
