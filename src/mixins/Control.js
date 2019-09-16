const hold = new Event('hold');
const press = new Event('press');
const controls = new Map();
let firstHeld, lastHeld;

function closestControl(el) {
  if (!el) return null;
  let vm = controls.get(el);
  if (!vm) {
    for (const [_el, _vm] of controls.entries()) {
      if (_el.contains(el)) {
        [el, vm] = [_el, _vm];
        break;
      }
    }
  }
  return vm ? { el, vm } : null;
}

function handleHeld(_el, begin) {
  let switched;
  const held = closestControl(_el);
  if (begin) firstHeld = held;
  else if (_el === false) {
    if (lastHeld) lastHeld.el.dispatchEvent(press);
    firstHeld = null;
  }
  if (held) {
    const { el, vm } = held;
    if (lastHeld && el == lastHeld.el) return;
    if (firstHeld && el == firstHeld.el || vm.fast) {
      if (lastHeld) lastHeld.vm.held = false;
      vm.held = true;
      el.focus();
      el.dispatchEvent(hold);
      lastHeld = held;
    }
  } else if (lastHeld) {
    lastHeld.vm.held = false;
    lastHeld = null;
  }
}

document.addEventListener('touchstart', ({ target: el }) => handleHeld(el, true));
document.addEventListener('touchmove', ({ changedTouches }) => {
  const t = changedTouches[changedTouches.length - 1];
  const el = document.elementFromPoint(t.clientX, t.clientY);
  handleHeld(el);
});
document.addEventListener('touchend', e => handleHeld(false));

document.addEventListener('mousedown', ({ target: el }) => handleHeld(el, true));
document.addEventListener('mousemove', e => {
  const el = document.elementFromPoint(e.clientX, e.clientY);
  handleHeld(el);
});
document.addEventListener('mouseup', e => handleHeld(false));

export default {
  props: {
    fast: Boolean
  },
  data() {
    return {
      held: false
    };
  },
  mounted() {
    controls.set(this.$el, this);
  }
};
