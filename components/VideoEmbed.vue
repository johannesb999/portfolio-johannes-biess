<template>
  <section class="project-video">
    <SplitFlapText class="project-video__heading" tag="h2" preset="bannerFlap" align="center" :texts="videoHeading" />
    <div class="video" :style="{ aspectRatio: ratio }">
      <AppLink
        v-if="poster && !isPlaying"
        class="video__poster"
        :scale="false"
        :aria-label="resolvedPlayLabel"
        @click="play"
      >
        <img class="video__image" :src="poster" alt="" />
        <span class="video__shade" aria-hidden="true" />
        <span class="video__play-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </AppLink>
      <iframe
        v-else
        ref="frame"
        class="video__frame"
        :src="src"
        :title="title"
        :loading="poster ? 'eager' : 'lazy'"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue';

const props = withDefaults(defineProps<{
  /** YouTube video ID, e.g. 8NNzapVb-Tk from https://youtu.be/8NNzapVb-Tk */
  id: string;
  title?: string;
  /** Absolute path to a local image in public/. Omitting it loads the player immediately. */
  poster?: string;
  /** Optional override for the localized play button label. */
  playLabel?: string;
  ratio?: string;
}>(), {
  title: 'Projektvideo',
  ratio: '16 / 9',
});

const route = useRoute();
const videoHeading = computed(() => [route.path.startsWith('/de/') ? '[PROJEKT] [VIDEO]' : '[PROJECT] [VIDEO]']);
const isPlaying = ref(false);
const frame = ref<HTMLIFrameElement | null>(null);

const resolvedPlayLabel = computed(() => props.playLabel
  ?? (route.path.startsWith('/de/') ? `Video abspielen: ${props.title}` : `Play video: ${props.title}`));

// The nocookie iframe is created only after an explicit click when a poster exists.
const src = computed(() =>
  `https://www.youtube-nocookie.com/embed/${encodeURIComponent(props.id)}?rel=0${props.poster ? '&autoplay=1' : ''}`
);

watch(() => [props.id, props.poster], () => {
  isPlaying.value = false;
});

async function play() {
  isPlaying.value = true;
  await nextTick();
  frame.value?.focus();
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/breakpoints' as bp;

.project-video {
  display: grid;
  grid-template-areas: 'heading' 'player';
  grid-template-columns: minmax(0, 1fr);
  gap: var(--project__media--gap);
  width: 100%;
}

.project-video__heading {
  grid-area: heading;
  display: grid;
  justify-items: center;
  margin: 0;
}

.video {
  grid-area: player;
  position: relative;
  width: 100%;
}

.video__poster,
.video__frame {
  display: block;
  width: 100%;
  height: 100%;
}

.video__poster {
  position: absolute;
  inset: 0;
  margin: var(--spacing--none);
  padding: var(--spacing--none);
  overflow: hidden;
  border: none;
  border-radius: var(--border__radius);
  transition: none;
}

.video__poster:hover {
  transform: none;
}

.video__poster:focus-visible {
  outline: var(--border__size) solid var(--color--primary);
  outline-offset: var(--spacing--xxs);
}

.video__image {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: var(--color--gray-light);
}

.video__play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: max(var(--control__size--minimum), var(--spacing--big));
  aspect-ratio: 1;
  place-items: center;
  border-radius: 50%;
  background-color: var(--color--primary-translucent);
  color: var(--color--background);
  transform: translate(-50%, -50%);
  transition: transform var(--video__motion--duration) ease;
  pointer-events: none;
}

.video__shade {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--video__overlay--color);
  opacity: 0;
  transition: opacity var(--video__motion--duration) ease;
  pointer-events: none;
}

.video__poster:is(:hover, :focus-visible) {
  .video__shade { opacity: 1; }
  .video__play-icon { transform: translate(-50%, -50%) scale(var(--video__play--scale)); }
}

.video__play-icon svg {
  width: var(--spacing--lg);
  fill: currentColor;
}

.video__frame {
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  border: var(--border__size) solid var(--border__color);
  border-radius: var(--border__radius);
  background-color: var(--color--gray-light);
}

@include bp.reduced-motion {
  .video__shade,
  .video__play-icon { transition: none; }
  .video__poster:is(:hover, :focus-visible) .video__play-icon { transform: translate(-50%, -50%); }
}
</style>
