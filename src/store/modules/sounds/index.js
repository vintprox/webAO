/**
 * Sounds store module
 */

import mutations from './mutations';
import actions from './actions';

const state = {
  packs: new Map()
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
