<template>
  <div
    :class="`
      Menu
      flex absolute inset-0
    `"
  >
    <nav
      v-for="group in sectionGroups"
      :key="group.name"
      :class="`
        MenuNav
        MenuNav${group.name}
        flex
      `"
    >
      <Button
        v-for="section in group.sections"
        :key="section.name"
        :class="`
          MenuBtn
        `"
        fast
        :icon="section.icon"
        v-sound:hold="`choosing`"
        v-sound:press="`pressed`"
        @press.native="setOpenSection(section)"
      />
    </nav>
    <keep-alive>
      <component
        :is="openSection ? openSection.component : null"
        :class="`
          MenuSection
        `"
      />
    </keep-alive>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Menu',
  computed: {
    ...mapState('menu', ['sectionGroups', 'openSection'])
  },
  methods: {
    ...mapMutations('menu', ['setOpenSection'])
  }
}
</script>
