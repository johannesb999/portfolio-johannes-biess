<template>
  <main class="playground">
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="playground" />

    <div class="playground__content">
      <div class="playground__flap">
        <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
          '[PLAYGROUND]',
        ]" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          'KLEINERE ARBEITEN',
          'EXPERIMENTE  PROTOTYPEN',
          'STUDIENPROJEKTE',
        ]" />
      </div>

      <ProjectTiles />
    </div>
  </main>
</template>

<script setup>
// Sammelseite der kleineren Arbeiten. Bewusst ohne Hero/Detail-Aufteilung:
// Flap und Kacheln stehen direkt zusammen, es gibt nichts, wohin ein
// "IM DETAIL"-Link fuehren muesste. Die Kacheln kommen aus
// composables/projects.ts (playgroundProjects) — dort auch neue Projekte eintragen.
</script>

<style lang="scss" src="assets/styles/playground.scss" scoped></style>
