/**
 * Application's Vuex store
 */

import detectNearestLocale from 'detect-nearest-locale';
import Vue from 'vue';
import Vuex from 'vuex';

import { version } from '~/package.json';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import sounds from './modules/sounds';
import menu from './modules/menu';
import settings from './modules/settings';

Vue.use(Vuex);

let availableLocales = require.context('@/locales/', false, /^\.\/[^\.]+$/).keys().map(filename => filename.substring(2));

let navigatorLocale = detectNearestLocale(availableLocales, navigator.languages);

const state = {
  version,
  availableLocales,
  navigatorLocale,
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions,
  modules: {
    sounds,
    menu,
    settings,
  }
});
