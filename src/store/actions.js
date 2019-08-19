import screenfull from 'screenfull';

import i18n from '@/i18n';

export default {
  changeLocale({ commit, state }, code) {
    code = code || state.browserLocale;
    if (i18n.locale == code) return Promise.resolve(true);
    if (i18n.messages[code]) return Promise.resolve(commit('setLocale', code));
    return import(/* webpackChunkName: "locale-[request]" */ `@/locales/${code}`).then(messages => {
      i18n.setLocaleMessage(code, messages.default);
      return commit('setLocale', code);
    });
  },
  switchTab({ commit, getters }, name) {
    if (getters.tabsNames.includes(name)) {
      commit('setOpenTabName', name);
    } else {
      console.error(`Tab ${name} is not defined`);
    }
  },
  /** Go to fullscreen whenever needed, if possible. */
  fullscreen({ state }) {
    if (
      state.settings.fullscreen &&
      screenfull.enabled &&
      !screenfull.isFullscreen
    ) {
      screenfull.request();
    }
  }
};
