// 全局收藏响应式状态，供导航栏计数与跨组件同步
import { reactive } from 'vue'
import { getFavorites } from './favorites'

export const favState = reactive({
  list: getFavorites()
})

export function refreshFav() {
  favState.list = getFavorites()
}

export function countFav() {
  return favState.list.length
}
