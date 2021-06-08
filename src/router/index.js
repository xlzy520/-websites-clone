import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'

import CloudDisk from '@/packages/CloudDisk/index.vue'
import CloudDiskHome from '@/packages/CloudDisk/pages/Home.vue'
import CloudDiskRoutes from '@/packages/CloudDisk/router.js'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/', name: 'Home', component: Home, meta: { title: 'Home' },
  },
  {
    path: '/CloudDisk',
    name: 'CloudDisk',
    component: CloudDisk,
    redirect: '/CloudDisk/home',
    children: CloudDiskRoutes,
  },
  // example of route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import('./views/About.vue')
  {
    path: '/about', name: 'About', component: About, meta: { title: 'About' },
  },
  {
    path: "/:path(.*)",
    name: "NotFound",
    component: NotFound,
  },
]
