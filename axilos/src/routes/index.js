import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue';
import Szolgáltatók from '@/pages/entrepren.vue';

const routes = [
  { name: 'index', path: '/', component: Index },
  { name: 'entrepren', path: '/entrepen', component: Szolgáltatók, props: true },
  //{ name: 'entreprenshop', path: '/entrepen/:id', component: entreprenshop, props: true },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
