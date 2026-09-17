<template>
  <div class="video">
    <iframe
      class="video__frame"
      :src="src"
      :title="title"
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** YouTube-Video-ID, z. B. "8NNzapVb-Tk" aus https://youtu.be/8NNzapVb-Tk */
  id: { type: String, required: true },
  title: { type: String, default: "Projektvideo" },
  /** Seitenverhaeltnis des Players */
  ratio: { type: String, default: "16 / 9" },
});

// nocookie-Domain: YouTube setzt erst beim Abspielen Cookies.
// rel=0 haelt die Vorschlaege am Ende beim eigenen Kanal.
const src = computed(() => `https://www.youtube-nocookie.com/embed/${props.id}?rel=0`);
</script>

<style scoped lang="scss">
.video {
  width: 100%;
}

.video__frame {
  display: block;
  width: 100%;
  aspect-ratio: v-bind(ratio);
  border: var(--border__size) solid var(--border__color);
  border-radius: var(--border__radius);
  background-color: var(--color--gray-light);
}
</style>
