<template>
  <AppLink class="zoom-image" :scale="false" :aria-label="label" aria-haspopup="dialog" @click="enlarge">
    <img ref="picture" :src="src" :alt="alt" :loading="loading" :decoding="'async'" />
  </AppLink>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
}>(), { loading: 'eager' });
const route = useRoute();
const viewer = useImageViewer();
const picture = ref<HTMLImageElement | null>(null);
const label = computed(() => `${route.path.startsWith('/de') ? 'Bild vergrößern' : 'Enlarge image'}: ${props.alt}`);

function enlarge(event: MouseEvent) {
  if (picture.value) viewer.open(picture.value, event.currentTarget as HTMLElement);
}
</script>

<style scoped lang="scss">
.zoom-image {
  display: block;
  width: 100%;
  min-width: 0;
  min-height: 0;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  line-height: 0;
  cursor: zoom-in;
  transform: none;

  &:hover { transform: none; }
  &:focus-visible {
    outline: var(--border__size) solid var(--color--primary);
    outline-offset: var(--spacing--xs);
  }

  img {
    display: block;
    width: 100%;
    height: var(--image__height, auto);
    max-height: var(--image__max-height, none);
    aspect-ratio: var(--image__ratio, auto);
    object-fit: var(--image__fit, contain);
    background: var(--image__background, transparent);
  }
}
</style>
