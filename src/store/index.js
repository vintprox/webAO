/**
 * Application's Vuex store
 */

import detectNearestLocale from 'detect-nearest-locale';
import Vue from 'vue';
import Vuex from 'vuex';

import { version } from '~/package.json';

import HelpTab from '@/components/HelpTab';
import SettingsTab from '@/components/SettingsTab';
import MultiplayerTab from '@/components/MultiplayerTab';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import settings from './modules/settings';

Vue.use(Vuex);

let availableLocales = require.context('@/locales/', false, /^\.\/[^\.]+$/).keys().map(filename => filename.substring(2));
let browserLocale = detectNearestLocale(availableLocales, navigator.languages);

const state = {
  version,
  availableLocales,
  browserLocale,
  tabs: [
    {
      name: 'Help',
      component: HelpTab,
      isService: true
    },
    {
      name: 'Settings',
      component: SettingsTab,
      isService: true
    },
    {
      name: 'Multiplayer',
      component: MultiplayerTab
    }
  ],
  openTabName: null
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions,
  modules: {
    settings,
  }
});
