/**
 * Settings store module
 */

const state = {
  locale: null,
  name: 'Anonymous',
  fullscreen: true,
  volume: {
    music: .8,
    blip: .6,
    sfx: 1,
    ui: .5
  }
};

export default {
  namespaced: true,
  state,
};
