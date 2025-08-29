<template>
  <div>
    <!-- Language Switch -->
    <header class="language-switch">
      <button class="custom-link" id="en" @click="switchLanguage('en')" :disabled="currentLocale === 'en'">
        EN
      </button>
      <div id="line" class="custom-link">|</div>
      <button class="custom-link" id="de" @click="switchLanguage('de')" :disabled="currentLocale === 'de'">
        DE
      </button>
    </header>

    <!-- Home Link -->
    <nuxt-link :to="currentLocale === 'de' ? '/de' : '/'" class="returnHome custom-link">JB</nuxt-link>
  </div>
  
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const currentLocale = ref(route.path.startsWith('/de') ? 'de' : 'en')

const switchLanguage = (lang: 'de' | 'en') => {
  const currentPath = route.path
  let newPath = ''

  if (currentPath === '/' && lang === 'de') {
    newPath = '/de'
  } else if (currentPath === '/de' && lang === 'en') {
    newPath = '/'
  } else {
    const pathWithoutLocale = currentPath.replace(/^\/(de|en)\//, '/')
    newPath = lang === 'de' ? `/de${pathWithoutLocale}` : `/en${pathWithoutLocale}`
  }

  if (newPath) {
    router.push(newPath)
  }
}

watch(route, (newRoute) => {
  currentLocale.value = newRoute.path.startsWith('/de') ? 'de' : 'en'
})
</script>

<style lang="scss">
/* Header styles moved from app.vue */
.returnHome {
  font-weight: var(--font-weight-thin);
  font-size: var(--font-size-bigger);
  color: var(--color-primary);
  text-decoration: none;
  position: fixed;
  top: var(--top-spacing);
  left: var(--side-percentage);
  z-index: var(--z-index-high);
}

.language-switch {
  position: fixed;
  top: var(--top-spacing);
  right: var(--side-percentage);
  display: flex;
  align-items: center;
  z-index: var(--z-index-high);
}

#en,
#de,
#line {
  font-weight: var(--font-weight-extra-light);
  font-size: var(--font-size-xxxxl);
  font-family: var(--font-family-mono);
  align-content: baseline;
}

#en:hover,
#de:hover {
  cursor: pointer;
}

#line {
  margin: var(--spacing-none);
}

.language-switch button {
  color: var(--color-secondary);
  border: none;
  background-color: transparent;
}

.language-switch button:disabled {
  color: var(--color-primary);
}

.language-switch button:not(:disabled):hover {
  color: var(--color-primary);
}
</style>
