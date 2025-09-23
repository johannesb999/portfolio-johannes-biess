<template>
  <Teleport to="body">
    <transition name="presentation-overlay-fade">
      <div v-if="isOpen" ref="overlayRef" class="presentation-overlay" tabindex="-1" role="dialog" aria-modal="true"
        aria-label="Selbstpräsentation">
        <iframe class="presentation-overlay__frame" :src="presentationSrc" title="Selbstpräsentation" allowfullscreen />
        <div class="presentation-overlay__mask" aria-hidden="true" />
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

type KeyCode = 'Enter' | 'NumpadEnter' | 'Space' | 'Spacebar' | 'Escape';

const props = defineProps<{
  src: string;
}>();

const presentationSrc = computed(() => {
  const embedFlags: Record<string, string> = {
    'hide-ui': '1',
    'hide-proto-ui': '1',
    'hide-proto-sidebar': '1',
    'show-proto-sidebar': '0',
    'hide-toolbar': '1',
    'show-toolbar': '0',
    'show-embed-controls': '0',
    'show_share_button': '0',
    'show_meta': '0',
    'mode': 'presentation',
  };

  const buildEmbedUrl = (raw: string) => {
    const original = new URL(raw);

    const isDeck = original.hostname.includes('figma.com') && original.pathname.startsWith('/deck/');

    if (!isDeck) {
      const direct = new URL(original.toString());
      Object.entries(embedFlags).forEach(([key, value]) => {
        direct.searchParams.set(key, value);
      });
      return direct.toString();
    }

    const presentUrl = new URL(`https://www.figma.com${original.pathname}/present`);
    original.searchParams.forEach((value, key) => {
      if (key === 'embed-host' || key === 'embed_host' || key === 'mode') {
        return;
      }
      presentUrl.searchParams.set(key, value);
    });

    presentUrl.searchParams.set('mode', 'presentation');

    const embedUrl = new URL('https://www.figma.com/embed');
    embedUrl.searchParams.set('embed_host', 'share');
    embedUrl.searchParams.set('url', presentUrl.toString());

    Object.entries(embedFlags).forEach(([key, value]) => {
      embedUrl.searchParams.set(key, value);
    });

    return embedUrl.toString();
  };

  try {
    return buildEmbedUrl(props.src);
  } catch (error) {
    const separator = props.src.includes('?') ? '&' : '?';
    const manualParams = Object.entries(embedFlags)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    return `${props.src}${separator}${manualParams}`;
  }
});

const isOpen = ref(false);
const overlayRef = ref<HTMLDivElement | null>(null);

const pressedKeys = new Set<KeyCode>();
let previousOverflow: string | null = null;

const enterCodes: KeyCode[] = ['Enter', 'NumpadEnter'];
const spaceCodes: KeyCode[] = ['Space', 'Spacebar'];

const isTypingTarget = (target: EventTarget | null): boolean => {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tag = target.tagName;
  return (
    target.isContentEditable ||
    tag === 'INPUT' ||
    tag === 'TEXTAREA' ||
    tag === 'SELECT'
  );
};

const clearPressedKeys = () => {
  pressedKeys.clear();
};

const lockScroll = () => {
  if (typeof document === 'undefined') {
    return;
  }
  if (previousOverflow === null) {
    previousOverflow = document.documentElement.style.overflow;
  }
  document.documentElement.style.overflow = 'hidden';
};

const restoreScroll = () => {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.style.overflow = previousOverflow ?? '';
  previousOverflow = null;
};

const openPresentation = () => {
  if (isOpen.value) {
    return;
  }
  isOpen.value = true;
  clearPressedKeys();
  lockScroll();
  void nextTick(() => {
    overlayRef.value?.focus();
  });
};

const closePresentation = () => {
  if (!isOpen.value) {
    return;
  }
  isOpen.value = false;
  clearPressedKeys();
  restoreScroll();
};

const hasAnyPressed = (codes: KeyCode[]) => codes.some(code => pressedKeys.has(code));

const handleKeyDown = (event: KeyboardEvent) => {
  const code = event.code as KeyCode;

  if (code === 'Escape' && isOpen.value) {
    return;
  }

  if (isTypingTarget(event.target) || isOpen.value) {
    return;
  }

  if (code === 'Enter' || code === 'NumpadEnter' || code === 'Space' || code === 'Spacebar') {
    pressedKeys.add(code);

    if (hasAnyPressed(enterCodes) && hasAnyPressed(spaceCodes)) {
      event.preventDefault();
      openPresentation();
    }
  }
};

const handleKeyUp = (event: KeyboardEvent) => {
  const code = event.code as KeyCode;
  if (code === 'Enter' || code === 'NumpadEnter' || code === 'Space' || code === 'Spacebar') {
    pressedKeys.delete(code);
  }
};

const handleWindowBlur = () => {
  clearPressedKeys();
};

onMounted(() => {
  if (typeof window === 'undefined') {
    return;
  }
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
  window.addEventListener('blur', handleWindowBlur);
});

onBeforeUnmount(() => {
  if (typeof window === 'undefined') {
    return;
  }
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('keyup', handleKeyUp);
  window.removeEventListener('blur', handleWindowBlur);
  restoreScroll();
});
</script>

<style scoped>
.presentation-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  background: rgba(0, 0, 0, 0.92);
  z-index: 2000;
  outline: none;
}

.presentation-overlay__frame {
  position: relative;
  z-index: 1;
  flex: 1;
  border: 0;
  width: 100%;
  height: 100%;
}

.presentation-overlay-fade-enter-active,
.presentation-overlay-fade-leave-active {
  transition: opacity 200ms ease;
}

.presentation-overlay-fade-enter-from,
.presentation-overlay-fade-leave-to {
  opacity: 0;
}
</style>
