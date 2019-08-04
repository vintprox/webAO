/**
 * Application's entry script
 */

import Vue from 'vue';

import router from './router';

import App from './App';

const vm = new Vue({
  router,
  el: '#App',
  render: h => h(App)
});
