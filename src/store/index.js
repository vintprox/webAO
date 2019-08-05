/**
 * Application's Vuex store
 */

import Vue from 'vue';
import Vuex from 'vuex';

import settings from './modules/settings';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    settings
  }
});
