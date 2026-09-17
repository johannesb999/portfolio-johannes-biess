<template>
  <component
    :is="tag"
    v-bind="linkAttrs"
    class="app-link custom-link"
    :class="{ 'app-link--underline': underline, 'app-link--pulse': pulse, 'app-link--scale': scale }"
    :style="typeVars"
  >
    <!-- Buchstabenweise, damit einzelne Zeichen umklappen koennen (Startseite) -->
    <template v-if="flip">
      <span v-for="(char, i) in labelChars" :key="i" ref="charEls" class="app-link__char">{{ char }}</span>
    </template>
    <template v-else-if="label">{{ label }}</template>
    <slot v-else />
  </component>
</template>

<script setup>
import { computed, ref, resolveComponent } from "vue";

const props = defineProps({
  // Interne Route -> <NuxtLink>. Hat Vorrang vor href.
  to: { type: String, default: null },
  // Externe URL oder Datei aus public/ -> <a>. Ohne to und href wird ein <button>.
  href: { type: String, default: null },
  // Beschriftung als Prop statt Slot — noetig fuer flip, sonst optional.
  label: { type: String, default: null },

  // Typografie als Token-Modifier (siehe :root in app.vue), z. B. size="big".
  // null heisst: Groesse/Gewicht vom Umfeld erben (fuer Links im Fliesstext).
  //
  // ACHTUNG: die Props landen als Inline-Style auf dem Element und schlagen
  // damit jede Stylesheet-Regel. Wer die Groesse je Breakpoint aendern muss,
  // laesst die Props weg und setzt stattdessen --app-link__size /
  // --app-link__weight im eigenen (scoped) CSS — siehe ThemeSwitch.vue.
  size: { type: String, default: null },
  weight: { type: String, default: null },
  underline: { type: Boolean, default: false },
  // Leichter Zoom beim Hovern. Fuer grosse Inhaltsblocke (Timeline-Eintraege)
  // auf false setzen — dort wirkt das Vergroessern unruhig.
  scale: { type: Boolean, default: true },

  // Einmaliger Aufmerksamkeits-Puls nach ein paar Sekunden (Startseite)
  pulse: { type: Boolean, default: false },
  // Beschriftung in einzelne Zeichen zerlegen, die per flipChars() umklappen
  flip: { type: Boolean, default: false },
});

const charEls = ref([]);

const tag = computed(() => {
  if (props.to) return resolveComponent("NuxtLink");
  if (props.href) return "a";
  return "button";
});

// Alles, was nicht auf der eigenen Seite liegt, oeffnet in einem neuen Tab.
const isExternal = computed(
  () => !!props.href && (/^[a-z]+:/i.test(props.href) || props.href.endsWith(".pdf"))
);

const linkAttrs = computed(() => {
  if (props.to) return { to: props.to };
  if (props.href) {
    return isExternal.value
      ? { href: props.href, target: "_blank", rel: "noopener noreferrer" }
      : { href: props.href };
  }
  return { type: "button" };
});

const typeVars = computed(() => ({
  ...(props.size ? { "--app-link__size": `var(--font__size--${props.size})` } : {}),
  ...(props.weight ? { "--app-link__weight": `var(--font__weight--${props.weight})` } : {}),
}));

const labelChars = computed(() => [...(props.label ?? "")]);

// Laesst die Zeichen nacheinander umklappen. Die Seite ruft das ueber einen
// Template-Ref auf, statt selbst im DOM nach Zeichen zu suchen.
function flipChars() {
  charEls.value.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("app-link__char--flip");
      setTimeout(() => el.classList.remove("app-link__char--flip"), 600);
    }, i * 100);
  });
}

defineExpose({ flipChars });
</script>

<style scoped lang="scss">
// :where() nimmt der Basisregel die Spezifitaet (0,0,0). Dadurch koennen
// aufrufende Seiten sie mit einer einfachen Klasse ueberschreiben, ohne
// Spezifitaets-Wettruesten.
:where(.app-link) {
  display: inline-block;
  margin: var(--spacing--xxs);
  border: none;
  background: transparent;
  color: var(--color--black);
  font-family: inherit;
  // Ohne size/weight erbt der Link die Typografie seines Umfelds
  font-size: var(--app-link__size, inherit);
  font-weight: var(--app-link__weight, inherit);
  letter-spacing: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.app-link--scale:hover {
  transform: scale(1.1);
}

.app-link--underline {
  text-decoration: underline;
}

// Einmaliger Puls, der die Randlinks der Startseite nach ein paar Sekunden
// kurz aufblenden laesst. Rein deklarativ — frueher per JS-Klasse nachgereicht.
.app-link--pulse {
  animation: app-link-pulse 2s cubic-bezier(0.25, 0.1, 0.25, 1) 4s forwards;
}

@keyframes app-link-pulse {

  0%,
  100% {
    font-size: var(--app-link__size, 1em);
    color: var(--color--primary);
  }

  50% {
    font-size: calc(var(--app-link__size, 1em) * 1.17);
    color: var(--color--secondary);
  }
}

.app-link__char {
  display: inline-block;
  perspective: 1000px;
}

.app-link__char--flip {
  animation: app-link-char-flip 0.6s ease-in-out forwards;
  transform-origin: center;
}

@keyframes app-link-char-flip {

  0%,
  100% {
    transform: rotateX(0deg);
  }

  50% {
    transform: rotateX(180deg);
  }
}

@media (prefers-reduced-motion: reduce) {

  .app-link,
  .app-link--pulse,
  .app-link__char--flip {
    animation: none;
    transition: none;
  }

  .app-link--scale:hover {
    transform: none;
  }
}
</style>
