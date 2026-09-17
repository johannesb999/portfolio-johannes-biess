<template>
  <nav class="lang" aria-label="Sprache">
    <button
      v-for="locale in locales"
      :key="locale"
      class="lang__option"
      type="button"
      :disabled="locale === current"
      :aria-current="locale === current ? 'true' : undefined"
      @click="switchTo(locale)"
    >
      {{ locale.toUpperCase() }}
    </button>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const locales = ["en", "de"];

const router = useRouter();
const route = useRoute();

const current = computed(() => (route.path.startsWith("/de") ? "de" : "en"));

// Die Startseite liegt unter "/" (en) bzw. "/de"; alle anderen Seiten unter
// "/<locale>/<rest>".
function switchTo(locale) {
  if (locale === current.value) return;

  const path = route.path;
  if (path === "/" || path === "/en" || path === "/de") {
    router.push(locale === "de" ? "/de" : "/");
    return;
  }

  router.push(`/${locale}${path.replace(/^\/(de|en)/, "")}`);
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/type" as type;
@use "@/assets/styles/breakpoints" as bp;

.lang {
  position: fixed;
  top: var(--layout__inset--top);
  right: var(--layout__inset--side);
  display: flex;
  align-items: center;
  gap: var(--spacing--xxs);
  z-index: var(--z--high);
}

.lang__option {
  margin: var(--spacing--xxs) 0;
  border: none;
  background: transparent;
  color: var(--color--secondary);
  cursor: pointer;
  @include type.text(xxxxl, extra-light);

  // Trennstrich zwischen den Sprachen — frueher ein eigenes <div id="line">|</div>
  & + &::before {
    content: "|";
    margin-right: var(--spacing--xxs);
    color: var(--color--black);
  }

  &:disabled {
    color: var(--color--primary);
    cursor: default;
  }

  &:not(:disabled):hover {
    color: var(--color--primary);
  }
}

@include bp.below-desktop {
  .lang {
    top: var(--layout__inset--side);
  }

  .lang__option {
    @include type.text(big, thin);
  }
}
</style>
