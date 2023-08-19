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
  {
    path: '/shuju',
    name: 'shuju',
    component: () => import(/* webpackChunkName: "about" */ '../components/shuju.vue')
  },
  {
    path: '/spark',
    name: 'spark',
    component: () => import(/* webpackChunkName: "about" */ '../components/spark.vue')
  },
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
