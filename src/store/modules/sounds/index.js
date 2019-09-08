/**
 * Sounds store module
 */

import actions from './actions';

import buttonWave from '=/sounds/button-01.wav';
import returnWave from '=/sounds/return-01.wav';

const sounds = {
  button: { type: 'ui', src: [buttonWave] },
  return: { type: 'ui', src: [returnWave] },
};

const state = {
  sounds
};

export default {
  namespaced: true,
  state,
  actions
};
