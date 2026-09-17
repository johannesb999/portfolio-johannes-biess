<template>
  <div class="acc">
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

      <div :id="bodyId(i)" class="acc__body" :class="{ 'is-open': openIndex === i }" role="region">
        <div class="acc__body-inner">
          <div class="acc__content" :class="{ 'acc__content--media': hasMedia(item) }">
            <div class="acc__answer">
              <p v-if="item.body" class="acc__text">{{ item.body }}</p>
              <ul v-if="hasPoints(item)" class="acc__points">
                <li v-for="(point, pointIdx) in item.points" :key="pointIdx">{{ point }}</li>
              </ul>
            </div>
            <div v-if="hasMedia(item)" class="acc__media">
              <img
                v-for="(src, imgIdx) in item.images"
                :key="src"
                :src="src"
                :alt="`${item.title} — Abbildung ${imgIdx + 1}`"
                loading="lazy"
              />
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
  // [{ title: string, body?: string, points?: string[], images?: string[] }]
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
const hasPoints = (item) => Array.isArray(item.points) && item.points.length > 0;
</script>

<style scoped lang="scss">
@use "@/assets/styles/type" as type;
@use "@/assets/styles/breakpoints" as bp;

.acc {
  width: 100%;
}

.acc__item {
  border-top: var(--border__size) solid var(--color--gray-light);

  &:last-child {
    border-bottom: var(--border__size) solid var(--color--gray-light);
  }
}

.acc__top {
  display: flex;
  align-items: center;
  gap: var(--spacing--lg);
  width: 100%;
  padding: var(--spacing--xl) 0;
  border: none;
  background: transparent;
  color: var(--color--primary);
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: var(--border__size) solid var(--color--accent);
    outline-offset: 2px;
  }

  &:hover .acc__title {
    color: var(--color--accent);
  }

  &[aria-expanded="true"] .acc__icon {
    transform: rotate(180deg);
  }
}

.acc__index {
  min-width: 2.5ch;
  color: var(--color--accent);
  @include type.text(lg);
}

.acc__title {
  flex: 1;
  transition: color 0.3s ease;
  @include type.text(xxxl, light);
}

.acc__icon {
  flex-shrink: 0;
  color: var(--color--accent);
  transition: transform 0.3s ease;
}

/* Auf-/Zuklappen über grid-template-rows (animierbar ohne feste Höhen) */
.acc__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease;

  &.is-open {
    grid-template-rows: 1fr;
  }
}

.acc__body-inner {
  overflow: hidden;
  min-height: 0;
}

.acc__content {
  display: grid;
  grid-template-areas:
    "answer"
    "media";
  grid-template-columns: minmax(0, 1fr);
  gap: var(--spacing--xl);
  padding-bottom: var(--spacing--xl);
}

.acc__answer {
  grid-area: answer;
  display: grid;
  gap: var(--spacing--md);
  max-width: 75ch;
  @include type.text(xl, light, alt);
  line-height: var(--line-height--big);
}

.acc__text {
  margin: 0;
}

// Aufzaehlungen, etwa die Faktoren und Anforderungen einer Recherche
.acc__points {
  display: grid;
  gap: var(--spacing--xs);
  margin: 0;
  padding-left: var(--spacing--md-lg);

  li::marker {
    color: var(--color--accent);
  }
}

.acc__media {
  grid-area: media;
  display: grid;
  gap: var(--spacing--lg);
}

// Die Bilder tragen Rahmen und Radius bereits aus der globalen img-Regel —
// kein zusätzlicher Wrapper mit eigenem Rahmen (sonst Bild im Bild).
.acc__media img {
  aspect-ratio: 4 / 3;
  height: auto;
  /* contain, damit Diagramme/Illustrationen nicht beschnitten werden —
     für Fotomaterial später auf cover umstellen */
  object-fit: contain;
}

@include bp.side-by-side {
  .acc__content--media {
    grid-template-areas: "answer media";
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
    align-items: start;
  }
}
</style>
