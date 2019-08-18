export default {
  tabsNames: state => state.tabs.map(({ name }) => name),
  openTab: state => state.tabs.filter(obj => obj.name === state.openTabName)[0]
};
