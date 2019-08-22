<template>
  <div id="MainMenu">
    <div
      :class="`
        MainMenuBackdrop
        absolute inset-0
      `"
      v-html="require('~/assets/images/silhouette.svg')"
    />
    <nav
      :class="`
        MainMenuTabButtons
        flex
      `"
    >
      <AOButton
        v-for="tab in tabs"
        :key="tab.name"
        :class="[
          `
            MainMenuTabButton
            m-2
          `,
          tab.isService && `order-last`
        ]"
        :title="$t(`${tab.component.name}.description`)"
        @click.native="setOpenTabName(tab.name)"
      >
        <component
          :is="tab.icon"
          :class="`
            MainMenuTabIcon
            fill-current
          `"
        />
        <span
          class="MainMenuTabLabel"
          v-t="`${tab.component.name}.label`"
        />
      </AOButton>
      <span class="flex-grow" />
    </nav>
    <keep-alive>
      <component
        :is="openTab ? openTab.component : null"
        :class="`
          MainMenuTab
          p-8
        `"
      />
    </keep-alive>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'MainMenu',
  computed: {
    ...mapState(['tabs']),
    ...mapGetters(['openTab'])
  },
  methods: {
    ...mapMutations(['setOpenTabName'])
  }
}
</script>
