import { Howl } from 'howler';

export default {
  async addSoundsPack({ commit }, { data, uri }) {
    const pack = Object.assign({}, data);
    if (!pack.sounds) return;
    for (const [name, sound] of Object.entries(pack.sounds)) {
      if (!sound.ext || !sound.ext.length) return;
      sound.src = [];
      const path = `${sound.type}/${sound.path || name}`;
      for (const ext of sound.ext) {
        const filePath = `${path}.${ext}`;
        let src;
        if (uri instanceof Function) src = await uri(filePath);
        else if (typeof uri == 'string') src = `${uri}/${filePath}`;
        else return;
        sound.src.push(src);
      }
    }
    return commit('setupSoundsPack', pack);
  },
  playSound({ state, rootState: { settings } }, obj) {
    let sound, { name, pack: packName } = obj;
    if (typeof obj == 'string') name = obj;
    
    if (!name) return;
    if (packName) {
      const pack = state.packs.get(packName);
      if (!pack) return;
      sound = pack.sounds[name];
    } else {
      for (const [, pack] of Array.from(state.packs).reverse()) {
        sound = pack.sounds[name];
        if (sound) break;
      }
    }
    if (!sound) return;
    const volume = settings.volume[sound.type];
    if (!volume) return;
    return new Howl(Object.assign({
      autoplay: true,
      volume: volume * (typeof sound.volume == 'number' ? sound.volume : 1)
    }, sound));
  },
};
