<template>
  <div class="construction" role="img" :aria-label="label">
    <svg class="construction__svg" viewBox="0 0 320 214" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      focusable="false">
      <defs>
        <clipPath id="constructionBarrierClip">
          <rect x="10" y="190" width="300" height="16" rx="3" />
        </clipPath>
      </defs>

      <!-- Boden -->
      <line x1="10" y1="180" x2="310" y2="180" />

      <!-- Mauer im Bau -->
      <g class="construction__wall">
        <rect x="232" y="164" width="22" height="16" />
        <rect x="256" y="164" width="22" height="16" />
        <rect x="280" y="164" width="22" height="16" />
        <rect x="244" y="146" width="22" height="16" />
        <rect x="268" y="146" width="22" height="16" />
        <rect x="256" y="128" width="22" height="16" />
      </g>

      <!-- Kranturm -->
      <g class="construction__tower">
        <line x1="62" y1="180" x2="62" y2="52" />
        <line x1="78" y1="180" x2="78" y2="52" />
        <polyline points="62,180 78,164 62,148 78,132 62,116 78,100 62,84 78,68 62,52" />
        <line x1="62" y1="164" x2="78" y2="164" />
        <line x1="62" y1="132" x2="78" y2="132" />
        <line x1="62" y1="100" x2="78" y2="100" />
        <line x1="62" y1="68" x2="78" y2="68" />
      </g>

      <!-- Ausleger -->
      <g class="construction__jib">
        <line x1="20" y1="40" x2="276" y2="40" />
        <line x1="20" y1="52" x2="276" y2="52" />
        <line x1="20" y1="40" x2="20" y2="52" />
        <line x1="276" y1="40" x2="276" y2="52" />
        <polyline
          points="20,52 32,40 44,52 56,40 68,52 80,40 92,52 104,40 116,52 128,40 140,52 152,40 164,52 176,40 188,52 200,40 212,52 224,40 236,52 248,40 260,52 272,40" />
      </g>

      <!-- Spitze, Abspannung und Gegengewicht -->
      <g class="construction__top">
        <polyline points="62,40 70,16 78,40" />
        <line x1="70" y1="16" x2="264" y2="40" />
        <line x1="70" y1="16" x2="26" y2="40" />
        <rect class="construction__solid" x="20" y="54" width="24" height="16" />
        <rect x="80" y="54" width="18" height="14" />
        <circle class="construction__beacon" cx="70" cy="11" r="3" />
      </g>

      <!-- Laufkatze mit haengender Last -->
      <g class="construction__trolley">
        <rect x="192" y="42" width="16" height="8" />
        <g class="construction__load">
          <line x1="200" y1="50" x2="200" y2="104" />
          <rect x="186" y="104" width="28" height="22" />
          <line x1="186" y1="104" x2="214" y2="126" />
        </g>
      </g>

      <!-- Absperrung mit laufenden Streifen -->
      <g class="construction__barrier">
        <rect x="10" y="190" width="300" height="16" rx="3" />
        <g clip-path="url(#constructionBarrierClip)">
          <g class="construction__stripes">
            <line v-for="i in stripeCount" :key="i" :x1="stripeStart(i)" y1="208" :x2="stripeStart(i) + 16" y2="188" />
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup>
// Rein CSS-animierte Baustelle im Schwarz-Weiss-Stil der Seite.
defineProps({
  label: {
    type: String,
    default: 'Baustelle',
  },
});

// Streifen der Absperrung: Periode 18, eine Periode Ueberhang auf beiden Seiten,
// damit die Schleife (translateX(18)) nahtlos wirkt.
const stripePeriod = 18;
const stripeCount = 22;
const stripeStart = (i) => -30 + (i - 1) * stripePeriod;
</script>

<style scoped lang="scss">
@use "@/assets/styles/breakpoints" as bp;

.construction {
  display: flex;
  justify-content: center;
}

.construction__svg {
  display: block;
  width: min(26rem, 78vw);
  height: auto;
}

.construction__svg :where(line, polyline, rect, circle) {
  fill: none;
  stroke: var(--color--primary);
  stroke-width: 2;
}

.construction__svg :where(rect) {
  fill: var(--color--background);
}

.construction__solid,
.construction__beacon {
  fill: var(--color--primary);
}

.construction__trolley {
  animation: construction-trolley 9s ease-in-out infinite;
}

.construction__load {
  transform-box: view-box;
  transform-origin: 200px 50px;
  animation: construction-swing 2.6s ease-in-out infinite;
}

.construction__beacon {
  animation: construction-beacon 1.8s linear infinite;
}

.construction__stripes {
  animation: construction-stripes 2.4s linear infinite;
}

.construction__stripes line {
  stroke-width: 7;
}

@keyframes construction-trolley {

  0%,
  100% {
    transform: translateX(-52px);
  }

  50% {
    transform: translateX(52px);
  }
}

@keyframes construction-swing {

  0%,
  100% {
    transform: rotate(-7deg);
  }

  50% {
    transform: rotate(7deg);
  }
}

@keyframes construction-beacon {

  0%,
  49.9% {
    opacity: 1;
  }

  50%,
  100% {
    opacity: 0.1;
  }
}

@keyframes construction-stripes {
  to {
    transform: translateX(18px);
  }
}

@media (prefers-reduced-motion: reduce) {

  .construction__trolley,
  .construction__load,
  .construction__beacon,
  .construction__stripes {
    animation: none;
  }
}

@include bp.mobile {
  .construction__svg {
    width: 88vw;
  }
}
</style>
