<template>
  <dialog ref="dialog" class="viewer" :class="{ 'viewer--closing': closing }" :aria-label="copy.title" @cancel.prevent="close" @click="outsideClick" @keydown="onKeydown">
    <div class="viewer__toolbar">
      <div class="viewer__zoom" :aria-label="copy.zoom">
        <AppLink :scale="false" :disabled="scale <= 1" :aria-label="copy.out" @click="zoomBy(1 / 1.5)">−</AppLink>
        <AppLink :scale="false" underline :aria-label="copy.fit" @click="reset">{{ Math.round(scale * 100) }} %</AppLink>
        <AppLink :scale="false" :disabled="scale >= maxScale" :aria-label="copy.in" @click="zoomBy(1.5)">+</AppLink>
      </div>
      <AppLink class="viewer__close" :scale="false" underline @click="close">{{ copy.close }}</AppLink>
    </div>
    <div ref="stage" class="viewer__stage" :class="{ 'viewer__stage--zoomed': scale > 1, 'viewer__stage--dragging': dragging }"
      @wheel.prevent="onWheel" @pointerdown="onPointerDown" @pointermove="onPointerMove" @pointerup="onPointerUp" @pointercancel="onPointerUp">
      <img v-if="image" ref="picture" class="viewer__image" :src="image.src" :alt="image.alt" draggable="false" :style="imageStyle" @dblclick.prevent="toggleZoom" />
    </div>
    <div class="viewer__footer">
      <p class="viewer__caption">{{ image?.alt }}</p>
      <p class="viewer__hint">{{ copy.hint }}</p>
    </div>
  </dialog>
</template>

<script setup lang="ts">
const { image, origin, restoreFocus } = useImageViewer();
const route = useRoute();
const dialog = ref<HTMLDialogElement | null>(null);
const stage = ref<HTMLElement | null>(null);
const picture = ref<HTMLImageElement | null>(null);
const scale = ref(1);
const pan = reactive({ x: 0, y: 0 });
const size = reactive({ width: 0, height: 0 });
const closing = ref(false);
const dragging = ref(false);
const maxScale = 6;
const pointers = new Map<number, { x: number; y: number }>();
let suppressClick = false;
let oldOverflow: string | null = null;
let resizeObserver: ResizeObserver | undefined;
let openingAnimation: Animation | undefined;

const copy = computed(() => route.path.startsWith('/de') ? {
  title: 'Vergrößerte Bildansicht', zoom: 'Bildzoom', in: 'Vergrößern', out: 'Verkleinern',
  fit: 'Bild vollständig einpassen', close: 'Schließen', hint: 'Scrollen oder mit zwei Fingern zoomen · Zum Verschieben ziehen',
} : {
  title: 'Enlarged image', zoom: 'Image zoom', in: 'Zoom in', out: 'Zoom out',
  fit: 'Fit the entire image', close: 'Close', hint: 'Scroll or pinch to zoom · Drag to move',
});

const imageStyle = computed(() => ({
  width: `${size.width}px`, height: `${size.height}px`,
  transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale.value})`,
}));

function duration() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 0;
  return parseFloat(getComputedStyle(dialog.value!).getPropertyValue('--viewer__motion--duration')) || 280;
}

function measure() {
  if (!stage.value || !image.value) return;
  const fit = Math.min(stage.value.clientWidth / image.value.width, stage.value.clientHeight / image.value.height);
  size.width = image.value.width * fit;
  size.height = image.value.height * fit;
  clampPan();
}

function clampPan() {
  if (!stage.value) return;
  const maxX = Math.max(0, (size.width * scale.value - stage.value.clientWidth) / 2);
  const maxY = Math.max(0, (size.height * scale.value - stage.value.clientHeight) / 2);
  pan.x = Math.max(-maxX, Math.min(maxX, pan.x));
  pan.y = Math.max(-maxY, Math.min(maxY, pan.y));
}

function setScale(value: number, clientX?: number, clientY?: number) {
  if (closing.value || !stage.value) return;
  openingAnimation?.cancel();
  const bounds = stage.value.getBoundingClientRect();
  const anchorX = clientX === undefined ? 0 : clientX - bounds.left - bounds.width / 2;
  const anchorY = clientY === undefined ? 0 : clientY - bounds.top - bounds.height / 2;
  const next = Math.min(maxScale, Math.max(1, value));
  const ratio = next / scale.value;
  pan.x = anchorX - (anchorX - pan.x) * ratio;
  pan.y = anchorY - (anchorY - pan.y) * ratio;
  scale.value = next;
  clampPan();
}

function zoomBy(factor: number) { setScale(scale.value * factor); }
function reset() { setScale(1); }
function toggleZoom(event: MouseEvent) { setScale(scale.value > 1 ? 1 : 2, event.clientX, event.clientY); }
function onWheel(event: WheelEvent) {
  const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? stage.value!.clientHeight : 1);
  setScale(scale.value * Math.exp(-delta * 0.002), event.clientX, event.clientY);
}

function onPointerDown(event: PointerEvent) {
  if (event.button !== 0 || closing.value || (event.target !== picture.value && scale.value === 1)) return;
  openingAnimation?.cancel();
  suppressClick = false;
  pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  (event.target === picture.value ? picture.value : stage.value)?.setPointerCapture(event.pointerId);
  dragging.value = true;
}

function onPointerMove(event: PointerEvent) {
  const previous = pointers.get(event.pointerId);
  if (!previous) return;
  const before = [...pointers.values()];
  pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  const after = [...pointers.values()];
  if (Math.abs(event.clientX - previous.x) + Math.abs(event.clientY - previous.y) > 2) suppressClick = true;
  if (after.length === 2) {
    const beforeDistance = Math.hypot(before[1].x - before[0].x, before[1].y - before[0].y);
    const afterDistance = Math.hypot(after[1].x - after[0].x, after[1].y - after[0].y);
    if (beforeDistance > 0) setScale(scale.value * afterDistance / beforeDistance, (after[0].x + after[1].x) / 2, (after[0].y + after[1].y) / 2);
    suppressClick = true;
  } else if (scale.value > 1) {
    pan.x += event.clientX - previous.x;
    pan.y += event.clientY - previous.y;
    clampPan();
  }
}

function onPointerUp(event: PointerEvent) {
  pointers.delete(event.pointerId);
  if (picture.value?.hasPointerCapture(event.pointerId)) picture.value.releasePointerCapture(event.pointerId);
  if (stage.value?.hasPointerCapture(event.pointerId)) stage.value.releasePointerCapture(event.pointerId);
  dragging.value = pointers.size > 0;
}

function onKeydown(event: KeyboardEvent) {
  if (['+', '=', '-', '0', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) event.preventDefault();
  if (event.key === '+' || event.key === '=') zoomBy(1.5);
  if (event.key === '-') zoomBy(1 / 1.5);
  if (event.key === '0') reset();
  if (scale.value > 1) {
    if (event.key === 'ArrowLeft') pan.x += 48;
    if (event.key === 'ArrowRight') pan.x -= 48;
    if (event.key === 'ArrowUp') pan.y += 48;
    if (event.key === 'ArrowDown') pan.y -= 48;
    clampPan();
  }
}

function sourceTransform() {
  const rect = origin();
  const bounds = stage.value?.getBoundingClientRect();
  if (!rect || !bounds || !size.width) return 'scale(0.85)';
  const x = rect.left + rect.width / 2 - bounds.left - bounds.width / 2;
  const y = rect.top + rect.height / 2 - bounds.top - bounds.height / 2;
  const ratio = Math.min(rect.width / size.width, rect.height / size.height);
  return `translate(${x}px, ${y}px) scale(${ratio})`;
}

function outsideClick(event: MouseEvent) {
  if (suppressClick) { suppressClick = false; return; }
  if (event.target === stage.value || event.target === dialog.value) close();
}

async function close() {
  if (!dialog.value?.open || closing.value) return;
  closing.value = true;
  openingAnimation?.cancel();
  const animation = picture.value?.animate([
    { transform: imageStyle.value.transform, opacity: 1 },
    { transform: sourceTransform(), opacity: 0 },
  ], { duration: duration(), easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' });
  await animation?.finished.catch(() => {});
  finishClose();
}

function finishClose() {
  dialog.value?.close();
  if (oldOverflow !== null) document.documentElement.style.overflow = oldOverflow;
  oldOverflow = null;
  resizeObserver?.disconnect();
  pointers.clear();
  dragging.value = false;
  closing.value = false;
  image.value = null;
  restoreFocus();
}

watch(image, async (value) => {
  if (!value) return;
  scale.value = 1;
  pan.x = pan.y = 0;
  suppressClick = false;
  await nextTick();
  if (!dialog.value || !image.value) return;
  oldOverflow = document.documentElement.style.overflow;
  document.documentElement.style.overflow = 'hidden';
  dialog.value.showModal();
  measure();
  await nextTick();
  openingAnimation = picture.value?.animate([
    { transform: sourceTransform(), opacity: 0 },
    { transform: imageStyle.value.transform, opacity: 1 },
  ], { duration: duration(), easing: 'cubic-bezier(.2,.8,.2,1)' });
  resizeObserver = new ResizeObserver(measure);
  if (stage.value) resizeObserver.observe(stage.value);
});

watch(() => route.fullPath, () => { if (dialog.value?.open) finishClose(); });
onBeforeUnmount(() => { if (import.meta.client) finishClose(); });
</script>

<style scoped lang="scss">
@use '@/assets/styles/type' as type;
@use '@/assets/styles/breakpoints' as bp;

.viewer {
  position: fixed;
  inset: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: var(--viewer__inset);
  border: 0;
  background: transparent;
  color: var(--color--primary);
  overflow: hidden;
  @include type.text(lg, normal, main, big);

  &[open] {
    display: grid;
    grid-template-areas: 'toolbar' 'image' 'caption';
    grid-template-rows: auto minmax(0, 1fr) auto;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--spacing--md);
  }

  &::backdrop {
    background: var(--viewer__backdrop);
    animation: viewer-backdrop var(--viewer__motion--duration) ease both;
  }
  &--closing::backdrop { animation-name: viewer-backdrop-out; }
}
.viewer__toolbar {
  grid-area: toolbar;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing--md);
  z-index: 1;
}
.viewer__zoom { display: flex; align-items: center; gap: var(--spacing--sm); }
.viewer__toolbar .app-link {
  min-width: var(--control__size--minimum);
  min-height: var(--control__size--minimum);
  padding: 0;
  margin: 0;
  color: var(--color--primary);
  &:disabled { color: var(--color--accent); cursor: default; }
  &:not(:disabled):hover { color: var(--color--accent); }
  &:focus-visible { outline: var(--border__size) solid currentColor; outline-offset: var(--spacing--xxs); }
}
.viewer__stage {
  grid-area: image;
  display: grid;
  place-items: center;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  border-radius: var(--border__radius);
  touch-action: none;
}
.viewer__image {
  display: block;
  max-width: none;
  border: 0;
  border-radius: var(--border__radius);
  object-fit: contain;
  cursor: zoom-in;
  user-select: none;
  -webkit-user-select: none;
}
.viewer__stage--zoomed .viewer__image { cursor: grab; }
.viewer__stage--dragging .viewer__image { cursor: grabbing; }
.viewer__footer { grid-area: caption; pointer-events: none; text-align: center; }
.viewer__caption { margin: 0; @include type.text(lg, normal, alt, big); }
.viewer__hint { margin: var(--spacing--xs) 0 0; color: var(--color--primary-translucent); @include type.text(lg, light, alt, big); }
@keyframes viewer-backdrop { from { opacity: 0; } to { opacity: 1; } }
@keyframes viewer-backdrop-out { from { opacity: 1; } to { opacity: 0; } }
@include bp.mobile {
  .viewer { --viewer__inset: var(--spacing--md); }
  .viewer__hint { display: none; }
}
@include bp.reduced-motion {
  .viewer::backdrop { animation: none; }
}
</style>
