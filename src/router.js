import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from './components/HelloWorld.vue';
import WeatherPage from './components/Weather.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/weather',
      name: 'Weather',
      component: WeatherPage
    }
  ]
});