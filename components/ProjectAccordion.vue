<template>
  <div class="acc">
    <div v-for="(item, i) in items" :key="item.title" class="acc__item" :class="{ 'acc__item--featured': item.alwaysOpen }">
      <h2 v-if="item.alwaysOpen" :id="headingId(i)" class="acc__top acc__top--static">
        <span class="acc__index">{{ indexLabel(i) }}</span>
        <span class="acc__title">{{ item.title }}</span>
      </h2>
      <h2 v-else class="acc__heading">
      <AppLink
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
      </h2>

      <div :id="bodyId(i)" class="acc__body" :class="{ 'is-open': isOpen(i) }" role="region" :aria-labelledby="headingId(i)" :aria-hidden="!isOpen(i)" :inert="!isOpen(i)">
        <div class="acc__body-inner">
          <div v-if="item.slot && $slots[item.slot]" class="acc__custom">
            <slot :name="item.slot" />
          </div>
          <div v-else class="acc__content" :class="{ 'acc__content--media': hasMedia(item) }">
            <div class="acc__answer">
              <p v-if="item.body" class="acc__text">{{ item.body }}</p>
              <p v-for="paragraph in item.paragraphs" :key="paragraph" class="acc__text">{{ paragraph }}</p>
              <ul v-if="hasPoints(item)" class="acc__points">
                <li v-for="(point, pointIdx) in item.points" :key="pointIdx">{{ point }}</li>
              </ul>
            </div>
            <div v-if="hasMedia(item)" class="acc__media">
              <figure
                v-for="(src, imgIdx) in item.images"
                :key="src"
                class="acc__figure"
              >
              <ZoomableImage
                :src="src"
                :alt="item.imageAlts?.[imgIdx] || `${item.title} — ${figureLabel} ${imgIdx + 1}`"
                loading="lazy"
              />
              <figcaption v-if="item.imageCaptions?.[imgIdx]">{{ item.imageCaptions[imgIdx] }}</figcaption>
              </figure>
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
  paragraphs?: string[];
  points?: string[];
  images?: string[];
  imageAlts?: string[];
  imageCaptions?: string[];
  slot?: string;
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

.acc__heading {
  margin: 0;
}

.acc__custom {
  padding-top: var(--spacing--xs);
  padding-bottom: var(--project__media--gap);
}

.acc__custom,
.acc__content {
  padding-inline-start: calc(var(--accordion__index--width) + var(--spacing--lg));
}

.acc__figure {
  margin: 0;

  figcaption {
    margin-top: var(--spacing--sm);
    @include type.text(lg, normal, alt, big);
  }
}

.acc__item {
  border-top: var(--border__size) solid var(--color--gray-light);

  &:last-child {
    border-bottom: var(--border__size) solid var(--color--gray-light);
  }
}

.acc__top {
  display: grid;
  grid-template-areas: 'index title icon';
  grid-template-columns: var(--accordion__index--width) minmax(0, 1fr) auto;
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
    outline: var(--border__size) solid var(--accordion__color--interactive);
    outline-offset: var(--spacing--xxs);
  }

  &:not(.acc__top--static):hover .acc__title {
    color: var(--accordion__color--interactive);
  }

  &[aria-expanded="true"] .acc__icon {
    transform: rotate(180deg);
  }
}

.acc__top--static {
  cursor: default;
}

.acc__index {
  grid-area: index;
  color: var(--color--accent);
  @include type.text(lg);
}

.acc__title {
  grid-area: title;
  transition: color 0.3s ease;
  @include type.text(xxxl, normal);
  font-size: max(var(--font__size--section-minimum), var(--font__size--xxxl));
}

.acc__icon {
  grid-area: icon;
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
.acc__media .zoom-image {
  width: 100%;
  --image__ratio: var(--accordion__image--ratio);
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

@include bp.reduced-motion {
  .acc__body,
  .acc__title,
  .acc__icon {
    transition: none;
  }
}
</style>
