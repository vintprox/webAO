/**
 * Application's entry script
 */

import Vue from 'vue';

import store from '@/store';
import router from '@/router';
import i18n from '@/i18n';
import App from '@/App';

import defaultSoundsPack from '=/sounds/pack';

const init = {
  component: require.context('@/components', false, /^\.[^\.]+$/),
  directive: require.context('@/directives', false, /^\.[^\.]+$/)
};
init.component.keys().forEach(path => {
  Vue.component(path.substring(2), init.component(path).default);
});
init.directive.keys().forEach(path => {
  Vue.directive(path.substring(2), init.directive(path).default);
});

const vm = new Vue({
  el: '#App',
  store,
  router,
  i18n,
  render: h => h(App),
  created() {
    this.$store.dispatch('changeLocale', this.$store.state.settings.locale);
    this.$store.dispatch('sounds/addSoundsPack', {
      data: defaultSoundsPack,
      uri: async path => {
        const { default: src } = await import(
          `=/sounds/${path}`
          /* webpackMode: 'eager' */
        );
        return src;
      }
    });
  }
});
