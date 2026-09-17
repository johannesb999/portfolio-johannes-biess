<template>
  <div class="edge-link" :class="[`edge-link--${position}`, { 'edge-link--fixed': fixed }]">
    <AppLink ref="linkRef" v-bind="linkProps">
      <slot />
    </AppLink>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import AppLink from "./AppLink.vue";

const props = defineProps({
  // Kante des Viewports, an der der Link klebt.
  // left/right stehen hochkant und lesen von unten nach oben.
  position: {
    type: String,
    required: true,
    validator: (v) => ["top", "bottom", "left", "right"].includes(v),
  },
  // true: bleibt beim Scrollen stehen (Detailseiten).
  // false: scrollt mit der ersten Bildschirmhoehe weg (Start-, About-, Kontaktseite).
  fixed: { type: Boolean, default: false },

  // Wird unveraendert an AppLink weitergereicht
  to: { type: String, default: null },
  href: { type: String, default: null },
  label: { type: String, default: null },
  size: { type: String, default: "big" },
  weight: { type: String, default: "bold" },
  pulse: { type: Boolean, default: false },
  flip: { type: Boolean, default: false },
});

const linkRef = ref(null);

const linkProps = computed(() => ({
  to: props.to,
  href: props.href,
  label: props.label,
  size: props.size,
  weight: props.weight,
  pulse: props.pulse,
  flip: props.flip,
}));

defineExpose({
  flipChars: () => linkRef.value?.flipChars(),
});
</script>

<style scoped lang="scss">
.edge-link {
  position: absolute;
  z-index: var(--z--high);
}

.edge-link--fixed {
  position: fixed;
}

.edge-link--top {
  top: 0;
  left: 50dvw;
  padding-top: var(--layout__inset--side);
  transform: translateX(-50%);
  text-align: center;
}

.edge-link--bottom {
  bottom: var(--layout__inset--side);
  left: 50dvw;
  transform: translateX(-50%);
  color: var(--color--primary);
}

.edge-link--left,
.edge-link--right {
  top: 50dvh;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.edge-link--right {
  right: var(--layout__inset--side);
  transform: translateY(-50%);
}

.edge-link--left {
  left: var(--layout__inset--side);
  transform: translateY(-50%) rotate(180deg);
}

// Fixierte Seitenlinks richten sich an der Fensterhoehe aus, nicht an der
// dynamischen Viewporthoehe — sonst wandern sie beim Ein-/Ausblenden der
// mobilen Browserleiste mit.
.edge-link--fixed.edge-link--left,
.edge-link--fixed.edge-link--right {
  top: 50vh;
}
</style>
