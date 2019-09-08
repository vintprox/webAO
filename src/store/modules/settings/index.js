/**
 * Settings store module
 */

const state = {
  locale: null,
  name: 'Anonymous',
  fullscreen: true,
  volume: {
    ambient: 1,
    sfx: .9,
    ui: .8,
    voice: .7,
    music: .7,
  }
};

export default {
  namespaced: true,
  state,
};
