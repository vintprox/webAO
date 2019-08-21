/**
 * Application's Vuex store
 */

import detectNearestLocale from 'detect-nearest-locale';
import Vue from 'vue';
import Vuex from 'vuex';

import { version } from '~/package.json';

import HelpTab from '@/components/HelpTab';
import HelpTabIcon from 'i/HelpRhombus';
import SettingsTab from '@/components/SettingsTab';
import SettingsTabIcon from 'i/Cogs';
import ServersTab from '@/components/ServersTab';
import ServersTabIcon from 'i/Server';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import settings from './modules/settings';

Vue.use(Vuex);

let availableLocales = require.context('@/locales/', false, /^\.\/[^\.]+$/).keys().map(filename => filename.substring(2));

let navigatorLocale = detectNearestLocale(availableLocales, navigator.languages);

const state = {
  version,
  availableLocales,
  navigatorLocale,
  tabs: [
    {
      name: 'Help',
      component: HelpTab,
      icon: HelpTabIcon,
      isService: true
    },
    {
      name: 'Settings',
      component: SettingsTab,
      icon: SettingsTabIcon,
      isService: true
    },
    {
      name: 'Servers',
      component: ServersTab,
      icon: ServersTabIcon
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
