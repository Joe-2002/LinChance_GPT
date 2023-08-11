import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../components/home.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "about" */ '../components/chat.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
