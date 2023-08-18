import Main from '@/components/pages/Main';
import Leaderboard from '@/components/pages/Leaderboard';
import Game from '@/components/pages/Game';
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/leaderboard',
    component: Leaderboard
  },
  {
    path: '/:rows/:cols/:bombs',
    name: 'game',
    component: Game,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
