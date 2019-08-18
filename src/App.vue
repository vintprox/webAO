<template>
  <div
    id="App"
    :class="`
      font-display text-white
      bg-primary-dim
      select-none
    `"
  >
    <router-view
      :class="`
        AppView
        block overflow-hidden
        w-screen h-screen
      `"
    />
  </div>
</template>

<script>
import Vue from 'vue';

import AOButton from '@/components/ui/AOButton';

Vue.component('AOButton', AOButton);

export default {
  name: 'App'
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
