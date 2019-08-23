<template>
  <div id="Start">
    <div
      :class="`
        StartSilhouette
        overflow-hidden
        text-yellow-500
        absolute inset-0
        fill-current
      `"
      v-html="require('~/assets/images/silhouette.svg')"
    />
  </div>
</template>

<script>
export default {
  name: 'Start'
}
</script>
