<template>
  <div
    id="Game"
    @click="fullscreen"
  >
    Server address: {{ $route.params.host }}
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Game',
  methods: {
    ...mapActions(['fullscreen'])
  }
}
</script>
