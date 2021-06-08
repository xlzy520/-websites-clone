import Home from './pages/Home.vue'

const Routes = [
  {
    path: 'home', name: 'home', component: Home,
  }
]

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: "*",
//       redirect: "/404"
//     },
//     {
//       path: '/',
//       name: 'home',
//       redirect:'/CloudDisk',
//       component: Home
//     },
//     {
//       path: '/CloudDisk',
//       name: 'CloudDisk',
//       component: Home
//     },
//     {
//       path: '/CloudMusic',
//       name: 'CloudMusic',
//       component: Home
//     },
//     {
//       path: '/404',
//       name:"找不到的作品",
//       component: () => import('./views/404.vue'),
//       meta: {
//         title: "404"
//       }
//     },
//   ]
// })

export default Routes
