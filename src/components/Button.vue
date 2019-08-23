<template>
  <button
    :class="`
      focus:text-primary
      focus:bg-white
      border border-white rounded
      p-2
      cursor-pointer focus:outline-none
    `"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>
