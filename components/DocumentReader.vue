<template>
  <div class="reader" :class="`reader--${mode}`" :style="{ '--reader__ratio': String(ratio) }" tabindex="0"
    role="group" :aria-label="label" @keydown.left.prevent="turn(-1)" @keydown.right.prevent="turn(1)">
    <!-- Steuerung in der Typografie der Seite — bewusst keine Button-Optik -->
    <div class="reader__bar">
      <p class="reader__modes">
        <AppLink :label="t.single" :underline="mode === 'scroll'" :scale="false" @click="setMode('scroll')" />
        <span class="reader__sep" aria-hidden="true">/</span>
        <AppLink :label="t.spread" :underline="mode === 'book'" :scale="false" @click="setMode('book')" />
      </p>

      <p class="reader__counter" aria-live="polite">{{ current }} / {{ pages }}</p>

      <AppLink v-if="download" class="reader__download" :href="download" :label="t.download" underline
        :scale="false" />
    </div>

    <!-- Fester Rahmen wie ein PDF-Fenster: gescrollt wird darin, nicht die Seite -->
    <div ref="stageEl" class="reader__stage" @scroll.passive="syncCounter">
      <div v-show="mode === 'scroll'" class="reader__scroll">
        <img v-for="n in pages" :key="n" :ref="registerPage" class="reader__sheet" :src="pageSrc(n)" :data-page="n"
          :alt="`${label} — ${t.page} ${n}`" :loading="n <= 2 ? 'eager' : 'lazy'" decoding="async" />
      </div>
      <!-- page-flip baut sich einen eigenen Knoten darin; Vue laesst den Inhalt in Ruhe -->
      <div v-show="mode === 'book'" ref="bookHost" class="reader__book" />
    </div>

    <p class="reader__turn">
      <AppLink :label="t.prev" :scale="false" @click="turn(-1)" />
      <span class="reader__sep" aria-hidden="true">·</span>
      <AppLink :label="t.next" :scale="false" @click="turn(1)" />
    </p>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import AppLink from "./AppLink.vue";

// Liest ein Dokument, das vorab als Einzelbilder exportiert wurde
// (public/docs/<projekt>/pages/<locale>/NNN.webp). Der Besucher laedt nur, was
// er ansieht, statt der kompletten Datei.
//
// Zwei Modi, beide in einem Rahmen fester Hoehe:
//   scroll — eine Seite breit, im Rahmen nach unten durchscrollen
//   book   — Doppelseite mit Umblaetter-Animation (page-flip)
//
// Grundregel fuer beide: die Seiten werden nie verzerrt. Im Buch-Modus wird die
// Seitengroesse so gerechnet, dass die Doppelseite in Breite UND Hoehe in den
// Rahmen passt — sonst zieht page-flip sie auf den verfuegbaren Platz.
const props = defineProps({
  /** Ordner mit den Seitenbildern, ohne Schraegstrich am Ende */
  base: { type: String, required: true },
  pages: { type: Number, required: true },
  /** Seitenverhaeltnis einer Seite (Breite / Hoehe) */
  ratio: { type: Number, default: 1.4142 },
  /** Optionaler Link auf die vollstaendige Datei */
  download: { type: String, default: null },
  label: { type: String, default: "Dokumentation" },
  /** Startmodus */
  mode: { type: String, default: "scroll", validator: (v) => ["scroll", "book"].includes(v) },
});

const FLIPPING_TIME = 700;

const route = useRoute();
const isGerman = computed(() => route.path.startsWith("/de"));

const t = computed(() =>
  isGerman.value
    ? { single: "einseitig", spread: "doppelseitig", prev: "zurück", next: "weiter",
        download: "PDF herunterladen", page: "Seite" }
    : { single: "single page", spread: "double page", prev: "back", next: "next",
        download: "download PDF", page: "Page" }
);

const mode = ref(props.mode);
const current = ref(1);
const stageEl = ref(null);
const bookHost = ref(null);
let bookEl = null;

const pageSrc = (page) => `${props.base}/${String(page).padStart(3, "0")}.webp`;
const allPages = computed(() => Array.from({ length: props.pages }, (_, i) => pageSrc(i + 1)));

/* ---------- Einseitig ---------- */

// Nach Seitennummer indexiert — ein anhaengendes Array wuerde beim
// Moduswechsel doppelte Eintraege sammeln
const sheets = [];
const registerPage = (el) => {
  if (el) sheets[Number(el.dataset.page) - 1] = el;
};

// Alle Seiten sind gleich hoch, deshalb reicht eine Rechnung statt vieler Messungen
function syncCounter() {
  if (mode.value !== "scroll") return;
  const stage = stageEl.value;
  if (!stage || !stage.scrollHeight) return;
  const step = stage.scrollHeight / props.pages;
  const middle = stage.scrollTop + stage.clientHeight / 2;
  current.value = Math.min(props.pages, Math.max(1, Math.floor(middle / step) + 1));
}

function scrollToPage(page) {
  const stage = stageEl.value;
  if (!stage) return;
  const step = stage.scrollHeight / props.pages;
  stage.scrollTop = (page - 1) * step;
}

/* ---------- Doppelseitig: page-flip ---------- */

let flip = null;

// Groesste Seite, die als Doppelseite vollstaendig in den Rahmen passt
function fitPage() {
  const stage = stageEl.value;
  const width = stage?.clientWidth || 800;
  const height = stage?.clientHeight || 600;
  const pageWidth = Math.min(width / 2, height * props.ratio);
  return { width: Math.floor(pageWidth), height: Math.floor(pageWidth / props.ratio) };
}

async function mountBook() {
  if (!bookHost.value || flip) return;
  // Nur im Browser laden — die Library greift direkt aufs DOM zu
  const { PageFlip } = await import("page-flip/dist/js/page-flip.module.js");
  const { width, height } = fitPage();

  // Eigener Knoten fuer page-flip. Die Library ersetzt und verschiebt Elemente
  // in ihrem Container; laege der in Vues Vnode-Baum, stuerzt der Renderer beim
  // naechsten Moduswechsel ab ("Cannot read properties of null").
  bookEl = document.createElement("div");
  bookHost.value.appendChild(bookEl);

  flip = new PageFlip(bookEl, {
    width,
    height,
    size: "stretch",
    // maxWidth/maxHeight auf die berechnete Passform: page-flip skaliert beim
    // Verkleinern mit, zieht die Seiten aber nie ueber die Passform hinaus.
    minWidth: 200,
    maxWidth: width,
    minHeight: Math.floor(200 / props.ratio),
    maxHeight: height,
    // Auf schmalen Rahmen blaettert die Library einseitig
    usePortrait: true,
    showCover: false,
    mobileScrollSupport: false,
    drawShadow: true,
    maxShadowOpacity: 0.3,
    flippingTime: FLIPPING_TIME,
    startPage: current.value - 1,
  });

  flip.loadFromImages(allPages.value);
  flip.on("flip", (e) => {
    current.value = Number(e.data) + 1;
  });
}

function destroyBook() {
  try {
    flip?.destroy();
  } catch {
    // page-flip wirft beim Abbauen gelegentlich, wenn der Container schon weg ist
  }
  flip = null;
  bookEl?.remove();
  bookEl = null;
}

/* ---------- Navigation ---------- */

function turn(step) {
  if (mode.value === "book" && flip) {
    // flipNext/flipPrev statt flip(n): die Library weiss selbst, dass im
    // Doppelseiten-Modus zwei Seiten weitergeblaettert werden.
    if (step > 0) flip.flipNext();
    else flip.flipPrev();
    // Das flip-Event ist die eigentliche Quelle; das hier zieht den Zaehler
    // nach, falls die Animation nicht durchlaeuft.
    setTimeout(() => {
      if (flip) current.value = flip.getCurrentPageIndex() + 1;
    }, FLIPPING_TIME + 100);
    return;
  }

  current.value = Math.min(props.pages, Math.max(1, current.value + step));
  scrollToPage(current.value);
}

async function setMode(next) {
  if (mode.value === next) return;
  const keep = current.value;
  if (mode.value === "book") destroyBook();
  mode.value = next;
  await nextTick();
  current.value = keep;
  if (next === "book") await mountBook();
  else scrollToPage(keep);
}

// Bei Groessenaenderung die Passform neu rechnen
let resizeTimer;
function onResize() {
  if (mode.value !== "book") return;
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(async () => {
    destroyBook();
    await nextTick();
    await mountBook();
  }, 250);
}

onMounted(async () => {
  if (mode.value === "book") await mountBook();
  if (typeof window !== "undefined") window.addEventListener("resize", onResize, { passive: true });
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") window.removeEventListener("resize", onResize);
  clearTimeout(resizeTimer);
  destroyBook();
});

// Beim Sprachwechsel zeigen dieselben Seitennummern auf andere Dateien
watch(() => props.base, async () => {
  if (mode.value !== "book") return;
  destroyBook();
  await nextTick();
  await mountBook();
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/type" as type;
@use "@/assets/styles/breakpoints" as bp;

.reader {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--spacing--sm);
  width: 100%;
  min-width: 0;
  max-width: 100%;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--border__size) solid var(--color--accent);
    outline-offset: var(--spacing--xs);
  }
}

/* ---------- Rahmen ---------- */
.reader__stage {
  // Fester Rahmen wie ein PDF-Fenster. Gescrollt wird hier drin, damit die
  // Projektseite nicht auf die Laenge aller Dokumentseiten anwaechst.
  width: 100%;
  min-width: 0;
  // Bewusst reine Viewport-Einheit: eine rem-Obergrenze wuerde mit der
  // responsiven Basisschriftgroesse mitschrumpfen — also genau dort, wo der
  // Rahmen ohnehin schon klein ist.
  height: 72vh;
  overflow: hidden;
  border: var(--border__size) solid var(--border__color);
  border-radius: var(--border__radius);
  background-color: var(--color--gray-light);
}

.reader--scroll .reader__stage {
  overflow-y: auto;
  // bewusst ohne overscroll-behavior: contain — am Anfang und Ende des
  // Dokuments soll der Scroll wieder auf die Seite uebergehen, sonst sitzt
  // man im Reader fest
  scrollbar-gutter: stable;
}

.reader--book .reader__stage {
  display: grid;
  place-items: center;
}

/* ---------- Einseitig ---------- */
.reader__scroll {
  display: grid;
  gap: var(--spacing--sm);
  padding: var(--spacing--sm);
}

.reader__sheet {
  width: 100%;
  height: auto;
  // Platz vorab reservieren. Sonst sind die noch nicht geladenen Lazy-Bilder
  // 0px hoch, der Scroller kollabiert und der Seitenzaehler wird sinnlos.
  aspect-ratio: var(--reader__ratio);
  border: var(--border__size) solid var(--border__color);
  border-radius: var(--radius--xxs);
  background-color: var(--color--background);
}

/* ---------- Doppelseitig ---------- */
.reader__book {
  // Die Library erzeugt eigene Elemente — deshalb :deep()
  :deep(img) {
    border: none;
    border-radius: 0;
  }
}

/* ---------- Leiste und Blaettern ---------- */
.reader__bar {
  display: grid;
  grid-template-areas: "modes counter download";
  grid-template-columns: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
  align-items: baseline;
  gap: var(--spacing--md);
}

.reader__modes {
  grid-area: modes;
  margin: 0;
  @include type.text(md, light);
}

.reader__counter {
  grid-area: counter;
  margin: 0;
  text-align: center;
  @include type.text(md, light);
}

.reader__download {
  grid-area: download;
}

.reader__sep {
  color: var(--color--accent);
}

.reader__turn {
  margin: 0;
  text-align: center;
  @include type.text(lg, light);
}

@include bp.stacked {
  .reader__stage {
    height: 64vh;
  }

  .reader__bar {
    grid-template-areas:
      "modes download"
      "counter counter";
    grid-template-columns: auto auto;
    justify-content: space-between;
  }

  .reader__counter {
    text-align: left;
  }
}
</style>
