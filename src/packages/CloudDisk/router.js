import gravity1 from './pages/gravity1.vue'
import gravity2 from './pages/gravity2.vue'
import gravity3 from './pages/gravity3.vue'

const prefix = 'gravity'

const DNARoutes = [
  { path: '\u0020', name: 'gravity1', component: gravity1 },
  { path: '\u0009', name: 'gravity2', component: gravity2 },
  { path: '\u000A', name: 'gravity3', component: gravity3 }
]

export default DNARoutes
