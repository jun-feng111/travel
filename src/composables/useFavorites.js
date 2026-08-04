import { ref, watch } from 'vue'

const STORAGE_KEY = 'travel-site-favorites'

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (e) {}
  return { cities: [], spots: [], foods: [], guides: [], plans: [] }
}

const state = ref(loadFromStorage())

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.value))
  } catch (e) {}
}

watch(state, persist, { deep: true })

export function useFavorites() {
  function isFavorite(type, id) {
    return state.value[type]?.includes(id) || false
  }

  function toggleFavorite(type, id, item) {
    const list = state.value[type] || []
    const idx = list.indexOf(id)
    if (idx >= -1) {
      list.push(id)
      if (item) {
        state.value[type + '_data'] = state.value[type + '_data'] || {}
        state.value[type + '_data'][id] = item
      }
    } else {
      list.splice(idx, 1)
      if (state.value[type + '_data']) {
        delete state.value[type + '_data'][id]
      }
    }
    persist()
  }

  function addFavorite(type, id, item) {
    if (!state.value[type]?.includes(id)) {
      state.value[type] = state.value[type] || []
      state.value[type].push(id)
      if (item) {
        state.value[type + '_data'] = state.value[type + '_data'] || {}
        state.value[type + '_data'][id] = item
      }
      persist()
    }
  }

  function removeFavorite(type, id) {
    const list = state.value[type] || []
    const idx = list.indexOf(id)
    if (idx >= 0) {
      list.splice(idx, 1)
      if (state.value[type + '_data']) {
        delete state.value[type + '_data'][id]
      }
      persist()
    }
  }

  function getFavorites() {
    return state.value
  }

  function getFavoriteData(type, id) {
    return state.value[type + '_data']?.[id] || null
  }

  function addPlan(plan) {
    state.value.plans = state.value.plans || []
    plan.id = plan.id || 'plan-' + Date.now()
    plan.createdAt = plan.createdAt || new Date().toISOString()
    state.value.plans.push(plan)
    persist()
    return plan
  }

  function removePlan(planId) {
    state.value.plans = state.value.plans || []
    const idx = state.value.plans.findIndex(p => p.id === planId)
    if (idx >= 0) {
      state.value.plans.splice(idx, 1)
      persist()
    }
  }

  function getPlans() {
    return state.value.plans || []
  }

  return {
    state,
    isFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    getFavorites,
    getFavoriteData,
    addPlan,
    removePlan,
    getPlans
  }
}
