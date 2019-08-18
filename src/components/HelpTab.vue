<template>
  <div id="HelpTab">
    <div class="About">
      <h1 class="AboutHeading">webAO {{ version }}</h1>
      <div class="AboutDescription">Lorem ipsum dolor sit amet...</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HelpTab',
  computed: {
    ...mapState(['version'])
  }
}
</script>
