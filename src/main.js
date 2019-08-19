/**
 * Application's entry script
 */

import Vue from 'vue';

import store from '@/store';
import router from '@/router';
import i18n from '@/i18n';
import App from '@/App';

const vm = new Vue({
  el: '#App',
  store,
  router,
  i18n,
  render: h => h(App),
  created() {
    this.$store.dispatch('changeLocale', this.$store.state.settings.locale);
  }
});
