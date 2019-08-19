import Vue from 'vue';
import VueI18n from 'vue-i18n';

import defaultLocale from '@/locales/en-US';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en-US',
  messages: {
    'en-US': defaultLocale
  }
});
