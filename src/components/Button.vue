<template>
  <button
    :class="`
      p-2
      cursor-pointer focus:outline-none
    `"
  >
    <component
      v-if="icon"
      :is="icon"
      :class="`
        fill-current
      `"
    />
    <slot />
  </button>
</template>

<script>
import Control from  '@/mixins/Control';

export default {
  name: 'Button',
  mixins: [Control],
  props: {
    icon: Object
  }
}
</script>
