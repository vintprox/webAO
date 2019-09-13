import store from '@/store';

export default {
  bind(el, { arg, value }) {
    el.addEventListener(arg, e => {
      store.dispatch('sounds/playSound', value);
    });
  }
};
