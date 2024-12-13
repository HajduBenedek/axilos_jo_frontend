import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue';
//import Lake from '@/pages/lake.vue';

const routes = [
  { name: 'index', path: '/', component: Index },
  //{ name: 'lake', path: '/lakes/:id', component: Lake, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
