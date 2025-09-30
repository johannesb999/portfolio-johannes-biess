<template>
  <div class="detailsLink-container">
    <a href="#details-section" class="detailsLink custom-link" @click.prevent="handleClick"
      @touchend.prevent="onTouchEnd" :aria-label="linkLabel" role="button">
      {{ linkLabel }}
    </a>
  </div>

</template>


<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const isPastDetails = ref(false);

const route = useRoute();
const currentLocale = computed(() => (route.path.startsWith('/de') ? 'de' : 'en'));

const upLabel = computed(() => (currentLocale.value === 'de' ? 'HOCH' : 'UP'));
const linkLabel = computed(() => (isPastDetails.value ? upLabel.value : 'DETAILS'));

function parseSizeToPx(val: string | null | undefined, remInPx: number): number {
  if (!val) return 0;
  const v = String(val).trim();
  if (!v) return 0;
  const num = parseFloat(v);
  if (Number.isNaN(num)) return 0;
  if (v.endsWith('rem')) return num * remInPx;
  if (v.endsWith('px')) return num;
  return num;
}

function getHeaderOffsetPx(): number {
  const docEl = document.documentElement;
  const remInPx = parseFloat(getComputedStyle(docEl).fontSize) || 16;
  const headerEl = document.querySelector('.background') as HTMLElement | null;
  const headerH = headerEl ? headerEl.getBoundingClientRect().height : 0;
  const spacingRaw = getComputedStyle(docEl).getPropertyValue('--spacing-md');
  const spacingPx = parseSizeToPx(spacingRaw, remInPx);
  const px = Math.round(headerH + spacingPx);
  return px;
}

function supportsSmoothScroll(): boolean {
  try {
    const style = (document.documentElement as HTMLElement).style as any;
    // Native style support or CSS.supports
    return (
      'scrollBehavior' in style ||
      (window as any).CSS?.supports?.('scroll-behavior', 'smooth') === true
    );
  } catch {
    return false;
  }
}

function smoothScrollTo(top: number, el?: HTMLElement | null) {
  const before = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const canSmooth = supportsSmoothScroll();
  try {
    window.scrollTo({ top, behavior: canSmooth ? 'smooth' : 'auto' });
  } catch (e) {
    window.scrollTo(0, top);
  }

  // Fallbacks ONLY if no movement detected (prevents jank on desktop smooth)
  const scroller: any = document.scrollingElement || document.documentElement || document.body;
  setTimeout(() => {
    const after1 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const moved = Math.abs(after1 - before) > 1; // any change means scrolling started
    const atTarget = Math.abs(after1 - top) <= 2;
    if (canSmooth && moved) {
      // Smooth is working; don't interfere
      return;
    }
    if (!atTarget) {
      try {
        scroller.scrollTop = top;
      } catch { }
      // Secondary fallback: scrollIntoView and compensate header offset
      if (el && el.scrollIntoView) {
        try {
          el.scrollIntoView({ block: 'start', behavior: canSmooth ? 'smooth' : 'auto' });
          setTimeout(() => {
            const header = getHeaderOffsetPx();
            window.scrollBy({ top: -header, left: 0, behavior: 'auto' });
          }, 120);
        } catch { }
      }
    }
  }, 220);
  setTimeout(() => {
    const after2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const atTarget = Math.abs(after2 - top) <= 2;
    if (!atTarget && el) {
      try {
        const id = el.getAttribute('id');
        if (id) {
          history.replaceState(null, '', `#${id}`);
        }
      } catch { }
    }
  }, 700);
}

function scrollToDetails() {
  const element = document.getElementById('details-section');
  if (!element) return;

  const offset = getHeaderOffsetPx();
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;
  smoothScrollTo(offsetPosition, element);
}

function scrollToTop() {
  smoothScrollTo(0);
}

function handleClick() {
  if (isPastDetails.value) scrollToTop();
  else scrollToDetails();
}

function onTouchEnd(ev: TouchEvent) {
  handleClick();
}

function updateIsPastDetails() {
  const el = document.getElementById('details-section');
  if (!el) return;
  const offset = getHeaderOffsetPx();
  const detailsTop = el.getBoundingClientRect().top + window.pageYOffset - offset;
  const prev = isPastDetails.value;
  isPastDetails.value = window.pageYOffset >= detailsTop;
  if (prev !== isPastDetails.value) {
    // label toggled
  }
}

function onScroll() {
  updateIsPastDetails();
}

function onResize() {
  updateIsPastDetails();
}

onMounted(() => {
  const el = document.getElementById('details-section');
  updateIsPastDetails();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onResize);
});
</script>

<style scoped>
/* Ensure CTA is clickable and on top on mobile/tablet */
@media (max-width: 480px),
(min-width: 481px) and (max-width: 768px) {
  .detailsLink-container {
    position: absolute;
    bottom: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    padding-bottom: var(--spacing-lg);
    z-index: var(--z-index-alert);
    pointer-events: auto;
  }
}
</style>
