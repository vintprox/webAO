import screenfull from 'screenfull';

export default {
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
