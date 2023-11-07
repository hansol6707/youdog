import { createRouter, createWebHistory } from 'vue-router'
import YDHome from '../views/YDHome.vue'
import YDCafe from '../views/YDCafe.vue'
import YDLocal from '../views/YDLocal.vue'
import YDEvent from '../views/YDEvent.vue'
import YDNotice from '../views/YDNotice.vue'
import YDAbout from '../views/YDAbout.vue'


const routes = [
  {
    path: '/',
    name: 'YDHome',
    component: YDHome
  },
  {
    path: '/cafe',
    name: 'YDCafe',
    component: YDCafe
  },
  {
    path: '/local',
    name: 'YDLocal',
    component: YDLocal
  },
  {
    path: '/event',
    name: 'YDEvent',
    component: YDEvent
  },
  {
    path: '/notice',
    name: 'YDNotice',
    component: YDNotice
  },
  {
    path: '/about',
    name: 'YDAbout',
    component: YDAbout
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
