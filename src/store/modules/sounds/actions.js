import { Howl } from 'howler';

export default {
  playSound({ state, rootState: { settings } }, name) {
    const soundDef = state.sounds[name];
    if (!soundDef) return;
    const volume = settings.volume[soundDef.type];
    if (!volume) return;
    return new Howl(Object.assign({ autoplay: true, volume }, soundDef));
  },
};
