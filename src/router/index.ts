import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import MainPage from '../pages/MainPage.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login },
  { path: '/mainpage', name: 'MainPage', component: MainPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
