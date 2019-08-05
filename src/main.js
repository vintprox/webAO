/**
 * Application's entry script
 */

import Vue from 'vue';

import store from './store';
import router from './router';

import App from './App';

const vm = new Vue({
  store,
  router,
  el: '#App',
  render: h => h(App)
});
