<template>
  <div class="imgbox" :style="boxStyle">
    <!-- 真实图片 -->
    <img
      v-if="resolved"
      :src="resolved"
      :alt="alt"
      class="imgbox-img"
      :class="{ loaded, 'img-fade': fade }"
      loading="lazy"
      @load="onLoad"
      @error="onError"
    />
    <!-- 占位（无图或加载失败） -->
    <div v-if="!loaded || !resolved" class="imgbox-ph" :style="phStyle">
      <el-icon v-if="!resolved" class="imgbox-ph-icon"><Picture /></el-icon>
      <span v-else class="imgbox-loading"></span>
    </div>
    <!-- 暗角遮罩（用于文字叠加场景） -->
    <div v-if="overlay" class="imgbox-overlay"></div>
    <slot />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Picture } from '@element-plus/icons-vue'

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  height: { type: String, default: '160px' },
  radius: { type: String, default: '0' },
  // 占位渐变（可传城市主题色）
  ph: { type: String, default: 'linear-gradient(135deg,#a8dadc 0%,#4a9d9c 100%)' },
  // 是否显示底部暗角（配合文字）
  overlay: { type: Boolean, default: false },
  fade: { type: Boolean, default: true }
})

const loaded = ref(false)
// 处理 base:'./' 后 public 资源路径
const resolved = computed(() => {
  if (!props.src) return ''
  if (props.src.startsWith('http') || props.src.startsWith('data:')) return props.src
  return props.src
})

const boxStyle = computed(() => ({
  height: props.height,
  borderRadius: props.radius,
  overflow: 'hidden',
  position: 'relative'
}))
const phStyle = computed(() => ({ background: props.ph }))

function onLoad() { loaded.value = true }
function onError() { loaded.value = false }
</script>

<style scoped>
.imgbox-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.imgbox-img.img-fade { opacity: 0; }
.imgbox-img.img-fade.loaded { opacity: 1; transition: opacity 0.6s ease; }
.imgbox-ph {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.85);
}
.imgbox-ph-icon { font-size: 28px; opacity: 0.7; }
.imgbox-loading {
  width: 26px; height: 26px; border-radius: 50%;
  border: 3px solid rgba(255,255,255,0.4);
  border-top-color: #fff;
  animation: imgbox-spin 0.8s linear infinite;
}
@keyframes imgbox-spin { to { transform: rotate(360deg); } }
.imgbox-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 55%);
  pointer-events: none;
}
</style>
