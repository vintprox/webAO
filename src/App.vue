<template>
  <div
    :class="`
      App
      overflow-hidden relative
      font-display text-white
      bg-primary-dim
      w-screen h-screen
      select-none
    `"
  >
    <router-view
      :class="`
        absolute inset-0
      `"
    />
    <Menu />
  </div>
</template>

<script>
import Vue from 'vue';

import AOButton from '@/components/ui/AOButton';
import Menu from '@/components/Menu';

Vue.component('AOButton', AOButton);

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
:root {
  --font-display: Helvetica, Arial, sans-serif;
  --color-primary-lit: theme('colors.yellow.700');
  --color-primary-mid: theme('colors.yellow.800');
  --color-primary-dim: theme('colors.yellow.900');
}

@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
