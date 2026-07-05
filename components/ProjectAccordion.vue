<template>
  <div class="acc">
    <div class="acc__list">
      <div v-for="(item, i) in items" :key="item.title" class="acc__item">
        <button
          type="button"
          class="acc__top"
          :aria-expanded="openIndex === i"
          :aria-controls="bodyId(i)"
          @click="toggle(i)"
        >
          <span class="acc__index">{{ indexLabel(i) }}</span>
          <span class="acc__title">{{ item.title }}</span>
          <svg
            class="acc__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <div class="acc__body" :class="{ 'is-open': openIndex === i }">
          <div class="acc__body-inner">
            <div class="acc__content" :class="{ 'acc__content--media': hasMedia(item) }">
              <p :id="bodyId(i)" class="acc__answer">{{ item.body }}</p>
              <div v-if="hasMedia(item)" class="acc__media">
                <div v-for="img in item.images" :key="img" class="ratio">
                  <img :src="img" :alt="item.title" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  // [{ title: string, body: string, images?: string[] }]
  items: {
    type: Array,
    required: true,
  },
  // Prefix für die aria-controls-IDs (pro Seite eindeutig genug,
  // da nur ein Akkordeon pro Seite verwendet wird)
  idPrefix: {
    type: String,
    default: 'acc',
  },
});

const openIndex = ref(null);

const toggle = (i) => {
  openIndex.value = openIndex.value === i ? null : i;
};

const indexLabel = (i) => String(i + 1).padStart(2, '0');
const bodyId = (i) => `${props.idPrefix}-body-${indexLabel(i)}`;
const hasMedia = (item) => Array.isArray(item.images) && item.images.length > 0;
</script>

<style scoped lang="scss">
@use "@/assets/styles/type" as type;
@use "@/assets/styles/breakpoints" as bp;

.acc {
  width: 100%;
}

.acc__item {
  border-top: var(--border-size) solid var(--color-gray-light);

  &:last-child {
    border-bottom: var(--border-size) solid var(--color-gray-light);
  }
}

.acc__top {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  width: 100%;
  padding: var(--spacing-lg) 0;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  color: var(--color-primary);

  &:focus-visible {
    outline: var(--border-size) solid var(--color-accent);
    outline-offset: 2px;
  }

  &:hover .acc__title {
    color: var(--color-accent);
  }
}

.acc__index {
  @include type.L-Body-Style();
  color: var(--color-accent);
  min-width: 2.5ch;
}

.acc__title {
  flex: 1;
  @include type.L-Button-Style('-light');
  transition: color 0.3s ease;
}

.acc__icon {
  flex-shrink: 0;
  color: var(--color-accent);
  transition: transform 0.3s ease;
}

.acc__top[aria-expanded="true"] .acc__icon {
  transform: rotate(180deg);
}

/* Auf-/Zuklappen über grid-template-rows (animierbar ohne feste Höhen) */
.acc__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease;
}

.acc__body.is-open {
  grid-template-rows: 1fr;
}

.acc__body-inner {
  overflow: hidden;
  min-height: 0;
}

.acc__content {
  display: grid;
  gap: var(--spacing-xl);
  padding: 0 0 var(--spacing-xl);
}

.acc__answer {
  margin: 0;
  @include type.L-Button-Style('-light');
  @include type.L-Family-Alt();
  font-optical-sizing: auto;
  line-height: var(--line-height-big);
  max-width: 75ch;
}

.acc__media {
  display: grid;
  gap: var(--spacing-lg);
}

.ratio {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--border-radius);
}

.ratio img {
  width: 100%;
  height: 100%;
  /* contain, damit Diagramme/Illustrationen nicht beschnitten werden —
     für Fotomaterial später auf cover umstellen */
  object-fit: contain;
}

@include bp.side-by-side {
  .acc__content--media {
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
    align-items: start;
  }
}
</style>
