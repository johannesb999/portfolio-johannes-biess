<template>
  <main class="error-page">
    <div id="topLink">
      <NuxtLink :to="homePath" class="custom-link">{{ homeLabel }}</NuxtLink>
    </div>
    <div id="leftLink">
      <a href="#" class="custom-link" @click.prevent="goBack">{{ backLabel }}</a>
    </div>
    <div id="bottomLink">
      <a href="#" class="custom-link" @click.prevent="reload">{{ reloadLabel }}</a>
    </div>

    <div class="center">
      <SplitFlapText preset="heroFlap" :align="'center'" :texts="[heroLine1]" />
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[heroLine2]" />
      <SplitFlapText v-for="(line, idx) in detailLines" :key="'dl-'+idx" preset="sectionFlap" :align="'center'" :texts="[line]" />
    </div>
  </main>
  </template>

<script setup lang="ts">
import { computed } from 'vue';
import { useError, useRoute, navigateTo } from '#imports';

const error = useError();
const route = useRoute();
const isDE = computed(() => route.path.startsWith('/de'));

const isOffline = computed(() => process.client ? !navigator.onLine : false);
const is404 = computed(() => (error?.value?.statusCode || 0) === 404);

const heroLine1 = computed(() => {
  if (isOffline.value) return isDE.value ? '[OFFLINE]' : '[OFFLINE]';
  if (is404.value) return '[404]';
  return isDE.value ? '[FEHLER]' : '[ERROR]';
});

const heroLine2 = computed(() => {
  if (isOffline.value)
    return isDE.value ? '[KEINE] [VERBINDUNG]' : '[NO] [CONNECTION]';
  if (is404.value)
    return isDE.value ? '[SEITE] [NICHT] [GEFUNDEN]' : '[PAGE] [NOT] [FOUND]';
  return isDE.value ? '[ETWAS] [GING] [SCHIEF]' : '[SOMETHING] [WENT] [WRONG]';
});

function toFlapTokens(s: string) {
  const clean = (s || '').replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim().toUpperCase();
  if (!clean) return [] as string[];
  return clean.split(' ').map(w => `[${w}]`);
}

const detailLines = computed(() => {
  if (isOffline.value) return [] as string[];
  const code = error?.value?.statusCode;
  const msg = error?.value?.statusMessage || (isDE.value ? 'Fehler' : 'Error');
  const lines: string[] = [];
  const codeLine = code ? `[STATUS] [${String(code)}]` : `[STATUS]`;
  lines.push(codeLine);
  const tokens = toFlapTokens(msg);
  if (tokens.length) {
    const half = Math.ceil(tokens.length / 2);
    lines.push(tokens.slice(0, half).join(' '));
    if (half < tokens.length) lines.push(tokens.slice(half).join(' '));
  }
  return lines;
});

const title = computed(() => {
  if (isOffline.value) return isDE.value ? 'Offline' : 'Offline';
  if (is404.value) return isDE.value ? 'Seite nicht gefunden' : 'Page not found';
  return isDE.value ? 'Etwas ist schiefgelaufen' : 'Something went wrong';
});

const message = computed(() => {
  if (isOffline.value)
    return isDE.value
      ? 'Du scheinst offline zu sein. Prüfe deine Internetverbindung und versuche es erneut.'
      : 'You appear to be offline. Check your connection and try again.';
  if (is404.value)
    return isDE.value
      ? 'Die angeforderte Seite konnte nicht gefunden werden.'
      : 'The requested page could not be found.';
  return isDE.value
    ? 'Ein unerwarteter Fehler ist aufgetreten.'
    : 'An unexpected error occurred.';
});

const homePath = computed(() => (isDE.value ? '/de' : '/en'));
const homeLabel = computed(() => (isDE.value ? 'Zur Startseite' : 'Go Home'));
const reloadLabel = computed(() => (isDE.value ? 'Neu laden' : 'Reload'));
const backLabel = computed(() => (isDE.value ? 'Zurück' : 'Back'));

function reload() {
  if (process.client) window.location.reload();
}

function goBack() {
  if (process.client && window.history.length > 1) {
    window.history.back();
  } else {
    navigateTo(homePath.value);
  }
}
</script>

<style lang="scss" src="assets/styles/error.scss" scoped></style>
