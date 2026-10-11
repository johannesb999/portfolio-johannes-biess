<template>
  <div class="acc">
    <div v-for="(item, i) in items" :key="item.title" class="acc__item" :class="{ 'acc__item--featured': item.alwaysOpen }">
      <h2 v-if="item.alwaysOpen" :id="headingId(i)" class="acc__top acc__top--static">
        <span class="acc__index">{{ indexLabel(i) }}</span>
        <span class="acc__title">{{ item.title }}</span>
      </h2>
      <AppLink
        v-else
        :id="headingId(i)"
        class="acc__top"
        :scale="false"
        :aria-expanded="isOpen(i)"
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
      </AppLink>

      <div :id="bodyId(i)" class="acc__body" :class="{ 'is-open': isOpen(i) }" role="region" :aria-labelledby="headingId(i)" :aria-hidden="!isOpen(i)">
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
                :alt="`${item.title} — ${figureLabel} ${imgIdx + 1}`"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

type AccordionItem = {
  title: string;
  body?: string;
  points?: string[];
  images?: string[];
  alwaysOpen?: boolean;
};

const props = withDefaults(defineProps<{
  items: AccordionItem[];
  idPrefix?: string;
}>(), {
  idPrefix: 'acc',
});

const route = useRoute();
const figureLabel = computed(() => route.path.startsWith('/de/') ? 'Abbildung' : 'Figure');
const openIndex = ref<number | null>(null);
const isOpen = (i: number) => props.items[i].alwaysOpen || openIndex.value === i;

const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i;
};

const indexLabel = (i: number) => String(i + 1).padStart(2, '0');
const bodyId = (i: number) => `${props.idPrefix}-body-${indexLabel(i)}`;
const headingId = (i: number) => `${props.idPrefix}-heading-${indexLabel(i)}`;
const hasMedia = (item: AccordionItem) => Boolean(item.images?.length);
const hasPoints = (item: AccordionItem) => Boolean(item.points?.length);
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
  margin: 0;
  padding: var(--spacing--xl) 0;
  border: none;
  background: transparent;
  color: var(--color--primary);
  text-align: left;
  cursor: pointer;

  &:hover {
    transform: none;
  }

  &:focus-visible {
    outline: var(--border__size) solid var(--color--accent);
    outline-offset: var(--spacing--xxs);
  }

  &:not(.acc__top--static):hover .acc__title {
    color: var(--color--accent);
  }

  &[aria-expanded="true"] .acc__icon {
    transform: rotate(180deg);
  }
}

.acc__top--static {
  cursor: default;
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
  gap: var(--project__media--gap);
  padding-bottom: var(--project__media--gap);
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
  width: min(100%, var(--accordion__image--width));
  justify-self: center;
  align-content: start;
}

// Die Bilder tragen Rahmen und Radius bereits aus der globalen img-Regel —
// kein zusätzlicher Wrapper mit eigenem Rahmen (sonst Bild im Bild).
.acc__media img {
  box-sizing: border-box;
  width: 100%;
  aspect-ratio: var(--accordion__image--ratio);
  height: auto;
  object-fit: contain;
}

@include bp.side-by-side {
  .acc__content--media {
    grid-template-areas: "answer media";
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: start;
  }

  .acc__media {
    justify-self: end;
  }
}
</style>
