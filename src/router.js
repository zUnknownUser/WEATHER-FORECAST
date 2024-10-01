import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from './components/UserLogin.vue';
import WeatherForecast from './components/WeatherForecast.vue';

const routes = [
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/weather',
    name: 'WeatherForecast',
    component: WeatherForecast
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;