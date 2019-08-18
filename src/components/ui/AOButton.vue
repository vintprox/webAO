<template>
  <button
    :class="`
      AOButton
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
