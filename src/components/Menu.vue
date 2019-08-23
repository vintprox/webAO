<template>
  <div
    :class="`
      Menu
      flex absolute inset-0
    `"
  >
    <nav
      :class="`
        MenuNav
        flex
      `"
    >
      <AOButton
        v-for="section in sections"
        :key="section.name"
        :class="[
          `
            MenuTab
            m-2
          `,
          section.isService && `order-last`
        ]"
        :title="$t(`${section.component.name}.description`)"
        @click.native="setOpenSection(section)"
      >
        <component
          :is="section.icon"
          :class="`
            MenuTabIcon
            fill-current
          `"
        />
        <span
          class="MenuTabLabel"
          v-t="`${section.component.name}.label`"
        />
      </AOButton>
      <span class="flex-grow" />
    </nav>
    <keep-alive>
      <component
        :is="openSection ? openSection.component : null"
        :class="`
          MenuSection
          p-8
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
    ...mapState('menu', ['sections', 'openSection'])
  },
  methods: {
    ...mapMutations('menu', ['setOpenSection'])
  }
}
</script>
