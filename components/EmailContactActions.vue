<template>
  <span class="email-contact" :data-n-ids="$attrs['data-n-ids']">
    <AppLink
      ref="trigger"
      v-bind="triggerAttrs"
      class="email-contact__trigger"
      :scale="false"
      :aria-expanded="open"
      :aria-controls="open ? popupId : undefined"
      aria-haspopup="dialog"
      @click.stop="toggle"
      @keydown.down.prevent="show"
    ><slot>EMAIL</slot></AppLink>

    <Teleport to="body">
      <div
        v-if="open"
        :id="popupId"
        ref="popup"
        role="dialog"
        :aria-labelledby="`${popupId}-title`"
        class="email-contact__popup"
        :style="position"
        @click.stop
        @keydown="onPopupKeydown"
      >
        <h2 :id="`${popupId}-title`" class="email-contact__title">{{ copy.title }}</h2>
        <AppLink class="email-contact__close" :scale="false" :aria-label="copy.close" @click="close(true)">×</AppLink>
        <AppLink
          class="email-contact__action email-contact__mail"
          underline
          :scale="false"
          :href="`mailto:${EMAIL}`"
          target="_self"
          @click="close(false)"
        >{{ copy.mail }}</AppLink>
        <AppLink class="email-contact__action email-contact__copy" underline :scale="false" :disabled="copying" @click="copyEmail">{{ copy.clipboard }}</AppLink>
        <p class="email-contact__status" role="status" aria-live="polite" aria-atomic="true">{{ status }}</p>
      </div>
    </Teleport>
  </span>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useAttrs } from 'vue';
import AppLink from '@/components/AppLink.vue';

defineOptions({ inheritAttrs: false });
const props = withDefaults(defineProps<{ locale?: 'de' | 'en' }>(), { locale: 'en' });
const EMAIL = 'biessjohannes@gmail.com';
const attrs = useAttrs();
const triggerAttrs = computed(() => Object.fromEntries(Object.entries(attrs).filter(([key]) => key !== 'data-n-ids')));
const popupId = `email-actions-${useId('email-contact')}`;
const trigger = ref<{ $el: HTMLElement } | null>(null);
const popup = ref<HTMLElement | null>(null);
const open = ref(false);
const copying = ref(false);
const status = ref('');
const position = ref<Record<string, string>>({ visibility: 'hidden' });
const messages = {
  de: {
    title: 'Kontakt per E-Mail', close: 'E-Mail-Auswahl schließen', mail: 'Mail-App öffnen',
    clipboard: 'In Zwischenablage kopieren', success: 'E-Mail-Adresse kopiert.',
    error: 'Kopieren nicht möglich. Bitte die Mail-App öffnen.',
  },
  en: {
    title: 'Contact by email', close: 'Close email options', mail: 'Open mail app',
    clipboard: 'Copy to clipboard', success: 'Email address copied.',
    error: 'Unable to copy. Please use the mail app.',
  },
};
const copy = computed(() => messages[props.locale]);

function updatePosition() {
  if (!open.value || !popup.value || !trigger.value?.$el) return;
  const anchor = trigger.value.$el.getBoundingClientRect();
  const bounds = popup.value.getBoundingClientRect();
  const gutter = parseFloat(getComputedStyle(popup.value).paddingLeft);
  const left = Math.max(gutter, Math.min(anchor.left + anchor.width / 2 - bounds.width / 2, window.innerWidth - bounds.width - gutter));
  const below = anchor.bottom + gutter;
  const above = anchor.top - bounds.height - gutter;
  const top = below + bounds.height <= window.innerHeight - gutter ? below : Math.max(gutter, above);
  position.value = { left: `${left}px`, top: `${top}px` };
}

async function show() {
  if (open.value) return;
  status.value = '';
  position.value = { visibility: 'hidden' };
  open.value = true;
  await nextTick();
  updatePosition();
  await nextTick();
  popup.value?.querySelector<HTMLElement>('.email-contact__mail')?.focus();
}

function close(restoreFocus = false) {
  open.value = false;
  if (restoreFocus) trigger.value?.$el.focus();
}
function toggle() { if (open.value) close(true); else show(); }

async function copyEmail() {
  if (copying.value) return;
  copying.value = true;
  status.value = '';
  try {
    await navigator.clipboard.writeText(EMAIL);
    status.value = copy.value.success;
  } catch {
    // Failure is reported; opening another application requires its own action.
    status.value = copy.value.error;
  } finally {
    copying.value = false;
    await nextTick();
    updatePosition();
  }
}

function isInside(target: EventTarget | null) {
  return target instanceof Node && (popup.value?.contains(target) || trigger.value?.$el.contains(target));
}
function onOutsidePointer(event: PointerEvent) { if (open.value && !isInside(event.target)) close(false); }
function onFocusChange(event: FocusEvent) { if (open.value && !isInside(event.target)) close(false); }
function onEscape(event: KeyboardEvent) {
  if (open.value && event.key === 'Escape') { event.preventDefault(); close(true); }
}
function onPopupKeydown(event: KeyboardEvent) {
  if (!['Tab', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
  const actions = Array.from(popup.value?.querySelectorAll<HTMLElement>('a[href], button:not(:disabled)') ?? []);
  if (!actions.length) return;
  const current = actions.indexOf(document.activeElement as HTMLElement);
  if (event.key === 'Tab') {
    if ((event.shiftKey && current === 0) || (!event.shiftKey && current === actions.length - 1)) {
      event.preventDefault();
      close(true);
    }
    return;
  }
  event.preventDefault();
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? actions.length - 1 : (current + (event.key === 'ArrowDown' ? 1 : -1) + actions.length) % actions.length;
  actions[next].focus();
}

onMounted(() => {
  document.addEventListener('pointerdown', onOutsidePointer);
  document.addEventListener('focusin', onFocusChange);
  document.addEventListener('keydown', onEscape);
  window.addEventListener('resize', updatePosition);
  window.addEventListener('scroll', updatePosition, true);
});
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onOutsidePointer);
  document.removeEventListener('focusin', onFocusChange);
  document.removeEventListener('keydown', onEscape);
  window.removeEventListener('resize', updatePosition);
  window.removeEventListener('scroll', updatePosition, true);
});
</script>

<style scoped lang="scss">
@use '@/assets/styles/type' as type;

.email-contact { display: inline-block; }
.email-contact__trigger {
  margin: var(--spacing--none);
  padding: var(--spacing--none);
  text-decoration: none;
  border-bottom: var(--border__size) solid var(--color--accent);
}
.email-contact__popup {
  @include type.text(lg, normal, main, big);
  position: fixed;
  z-index: var(--z--alert);
  display: grid;
  grid-template-areas: 'title close' 'mail mail' 'copy copy' 'status status';
  grid-template-columns: minmax(0, 1fr) auto;
  box-sizing: border-box;
  width: min(var(--email__popup--width), calc(100vw - var(--spacing--lg) * 2));
  max-height: calc(var(--layout__height--viewport) - var(--spacing--lg) * 2);
  overflow: auto;
  padding: var(--spacing--sm);
  gap: var(--spacing--xs);
  color: var(--color--primary);
  background: var(--color--background);
  border: var(--border__size) solid var(--color--primary);
  border-radius: var(--radius--xs);
  box-shadow: var(--shadow--light);
}
.email-contact__title {
  @include type.text(lg, bold, main, big);
  grid-area: title;
  margin: var(--spacing--none);
  align-self: center;
}
.email-contact__close {
  grid-area: close;
  text-align: center;
  font-size: var(--font__size--big);
}
.email-contact__action {
  display: flex;
  align-items: center;
  justify-self: start;
  padding: var(--spacing--xs) 0;
  border: none;
  text-decoration: underline;
  text-underline-offset: var(--spacing--xxs);
  text-align: left;
}
.email-contact__mail { grid-area: mail; }
.email-contact__copy { grid-area: copy; }
.email-contact__close,
.email-contact__action {
  min-width: var(--control__size--minimum);
  min-height: var(--control__size--minimum);
  margin: var(--spacing--none);
  box-sizing: border-box;
  color: var(--color--primary);
}
.email-contact__status {
  grid-area: status;
  margin: var(--spacing--none);
}
.email-contact__status:empty { display: none; }
.email-contact__action:hover { text-decoration-thickness: var(--border__size); }
.email-contact__copy:disabled { cursor: wait; }
.email-contact__trigger:focus-visible,
.email-contact__close:focus-visible,
.email-contact__action:focus-visible {
  outline: var(--border__size) solid var(--color--primary);
  outline-offset: var(--spacing--xxs);
}
</style>
