import { ref, onMounted, onUnmounted, watch } from 'vue'

const AMAP_KEY = '91aa55be616abb60c334f6b734eb1279'
const IMAGE_CACHE = new Map()

/**
 * 加载并验证单个图片 URL 是否可访问
 * @param {string} url - 图片 URL
 * @returns {Promise<{url: string, ok: boolean, error?: string}>}
 */
function validateImage(url) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve({ url, ok: true })
    img.onerror = () => resolve({ url, ok: false, error: 'Failed to load image' })
    img.src = url
  })
}

/**
 * 使用 IntersectionObserver 实现图片懒加载
 * @param {HTMLElement} el - 目标 DOM 元素
 * @param {(entry: IntersectionObserverEntry) => void} callback - 进入视口时的回调
 * @returns {() => void} 取消观察的清理函数
 */
function observeIntersection(el, callback) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    callback({ isIntersecting: true })
    return () => {}
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry)
          observer.disconnect()
        }
      })
    },
    { rootMargin: '100px', threshold: 0.01 }
  )

  observer.observe(el)
  return () => observer.disconnect()
}

/**
 * 城市封面图片生成器
 * 根据经纬度和关键词生成高德地图静态图，并提供 Unsplash 作为备选方案
 *
 * @param {number} lng - 经度
 * @param {number} lat - 纬度
 * @param {string} [keywords=''] - 搜索关键词，用于 Unsplash 备选
 * @param {string} [fallbackUrl=''] - 最终兜底图片 URL
 * @returns {{
 *   primary: string,
 *   fallbacks: string[],
 *   source: 'amap' | 'unsplash' | 'fallback'
 * }}
 */
export function getCityCover(lng, lat, keywords = '', fallbackUrl = '') {
  const amapUrl = `https://webst.amap.com/maps/staticmap?location=${lng},${lat}&zoom=11&width=800&height=500&key=${AMAP_KEY}`

  const keyword = encodeURIComponent(keywords || 'city travel landscape')
  const unsplashUrl = `https://source.unsplash.com/800x500/?${keyword}`

  const fallbacks = []
  if (unsplashUrl) fallbacks.push(unsplashUrl)
  if (fallbackUrl) fallbacks.push(fallbackUrl)

  return {
    primary: amapUrl,
    fallbacks,
    source: 'amap'
  }
}

/**
 * 图片加载器 composable
 * 提供图片加载、验证、导航和懒加载功能
 *
 * @param {string[]} [initialUrls=[]] - 初始图片 URL 数组
 * @returns {{
 *   currentIndex: import('vue').Ref<number>,
 *   images: import('vue').Ref<{url: string, ok: boolean, loaded: boolean}[],
 *   isLoading: import('vue').Ref<boolean>,
 *   error: import('vue').Ref<string | null>,
 *   loadImages: (urls: string[]) => Promise<void>,
 *   next: () => void,
 *   prev: () => void,
 *   current: () => {url: string, ok: boolean, loaded: boolean} | null,
 *   preload: (index: number) => void,
 *   observe: (el: HTMLElement, index: number) => void
 * }}
 */
export function useImageLoader(initialUrls = []) {
  const currentIndex = ref(0)
  const images = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  let cleanupFns = []

  /**
   * 加载并验证图片 URL 数组
   * @param {string[]} urls - 图片 URL 数组
   */
  async function loadImages(urls) {
    if (!Array.isArray(urls) || urls.length === 0) {
      error.value = 'Invalid image URLs provided'
      images.value = []
      return
    }

    isLoading.value = true
    error.value = null
    currentIndex.value = 0

    try {
      const results = await Promise.all(
        urls.map(async (url) => {
          const cacheKey = url
          if (IMAGE_CACHE.has(cacheKey)) {
            return IMAGE_CACHE.get(cacheKey)
          }
          const result = await validateImage(url)
          const entry = { ...result, loaded: false }
          IMAGE_CACHE.set(cacheKey, entry)
          return entry
        })
      )

      images.value = results

      const firstValid = results.findIndex((img) => img.ok)
      if (firstValid === -1) {
        error.value = 'No valid images found'
      } else if (currentIndex.value >= results.length || !results[currentIndex.value]?.ok) {
        currentIndex.value = firstValid
      }
    } catch (e) {
      error.value = e.message || 'Failed to load images'
      images.value = []
    } finally {
      isLoading.value = false
    }
  }

  /**
   * 导航到下一张图片
   */
  function next() {
    if (images.value.length === 0) return
    let nextIdx = currentIndex.value
    for (let i = 0; i < images.value.length; i++) {
      nextIdx = (nextIdx + 1) % images.value.length
      if (images.value[nextIdx]?.ok) {
        currentIndex.value = nextIdx
        return
      }
    }
  }

  /**
   * 导航到上一张图片
   */
  function prev() {
    if (images.value.length === 0) return
    let prevIdx = currentIndex.value
    for (let i = 0; i < images.value.length; i++) {
      prevIdx = (prevIdx - 1 + images.value.length) % images.value.length
      if (images.value[prevIdx]?.ok) {
        currentIndex.value = prevIdx
        return
      }
    }
  }

  /**
   * 获取当前图片对象
   * @returns {{url: string, ok: boolean, loaded: boolean} | null}
   */
  function current() {
    if (images.value.length === 0) return null
    return images.value[currentIndex.value] || null
  }

  /**
   * 预加载指定索引的图片
   * @param {number} index - 图片索引
   */
  function preload(index) {
    if (index < 0 || index >= images.value.length) return
    const imgData = images.value[index]
    if (!imgData || !imgData.ok || imgData.loaded) return

    const img = new Image()
    img.onload = () => {
      imgData.loaded = true
      IMAGE_CACHE.set(imgData.url, imgData)
    }
    img.src = imgData.url
  }

  /**
   * 观察 DOM 元素进入视口时加载对应索引的图片（懒加载）
   * @param {HTMLElement} el - 目标 DOM 元素
   * @param {number} index - 图片索引
   */
  function observe(el, index) {
    if (!el) return

    const cleanup = observeIntersection(el, () => {
      preload(index)
    })
    cleanupFns.push(cleanup)
  }

  /**
   * 清理所有观察器
   */
  function cleanup() {
    cleanupFns.forEach((fn) => fn())
    cleanupFns = []
  }

  onMounted(() => {
    if (initialUrls.length > 0) {
      loadImages(initialUrls)
    }
  })

  onUnmounted(cleanup)

  watch(currentIndex, (newIdx) => {
    preload(newIdx)
    preload(newIdx + 1)
    preload(newIdx - 1)
  })

  return {
    currentIndex,
    images,
    isLoading,
    error,
    loadImages,
    next,
    prev,
    current,
    preload,
    observe
  }
}