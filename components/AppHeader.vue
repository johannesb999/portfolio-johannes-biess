<template>
  <div>
    <AppLink class="app-header__home" :to="homePath" label="JB" />
    <LanguageSwitch />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppLink from './AppLink.vue'
import LanguageSwitch from './LanguageSwitch.vue'

const route = useRoute()
const homePath = computed(() => (route.path.startsWith('/de') ? '/de' : '/'))
</script>

<style scoped lang="scss">
@use "@/assets/styles/breakpoints" as bp;

.app-header__home {
  // Groesse bewusst ueber CSS statt ueber die Props — sie aendert sich je Breakpoint
  --app-link__size: var(--font__size--bigger);
  --app-link__weight: var(--font__weight--thin);

  position: fixed;
  top: var(--layout__inset--top);
  left: var(--layout__inset--side);
  color: var(--color--primary);
  z-index: var(--z--high);
}

@include bp.below-desktop {
  .app-header__home {
    --app-link__weight: var(--font__weight--light);

    top: var(--layout__inset--side);
    padding-left: var(--spacing--xs);
  }
}
</style>
