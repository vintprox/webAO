<template>
  <div id="MainMenu">
    Hello, <strong>{{ name }}</strong>! Welcome to Attorney Online 3.
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('settings', ['name'])
  }
}
</script>
