import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/cities', name: 'cities', component: () => import('../views/Cities.vue') },
  { path: '/city/:cityId', name: 'city', component: () => import('../views/CityDetail.vue') },
  { path: '/spot/:spotId', name: 'spot', component: () => import('../views/SpotDetail.vue') },
  { path: '/guide/:guideId', name: 'guide', component: () => import('../views/GuideDetail.vue') },
  { path: '/planner', name: 'planner', component: () => import('../views/Planner.vue') },
  { path: '/map/:cityId', name: 'map', component: () => import('../views/CityMap.vue') },
  { path: '/favorites', name: 'favorites', component: () => import('../views/Favorites.vue') },
  { path: '/tools', name: 'tools', component: () => import('../views/Tools.vue') },
  { path: '/search', name: 'search', component: () => import('../views/Search.vue') },
  { path: '/about', name: 'about', component: () => import('../views/About.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
