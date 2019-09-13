export default {
  setupSoundsPack(state, pack) {
    state.packs.set(pack.name, pack);
    return true;
  }
}
