import i18n from '@/i18n';

export default {
  setLocale(state, code) {
    i18n.locale = code;
    document.documentElement.setAttribute('lang', code);
  },
  setOpenTabName(state, name) {
    state.openTabName = name;
  }
};
