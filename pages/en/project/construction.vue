<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div class="construction-page">
      <ConstructionAnimation label="Animation of a construction site" />

      <div class="construction-page__text">
        <SplitFlapText preset="heroFlap" :align="'center'" :texts="[
          '[UNDER] [CONSTRUCTION]',
        ]" />
        <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
          'PLEASE COME BACK LATER',
        ]" />
      </div>

      <ProjectLinks />
    </div>
  </main>
</template>

<script setup>
// Eigenstaendige Baustellen-Seite: bewusst ohne Karussell-Links, sie fuehrt
// nirgendwo weiter. Solange die Projektseiten online ausgeblendet sind, zeigen
// der PROJEKTE-Link der Startseite und alle Weiterleitungen hierher.
// Lokal blendet <ProjectLinks /> zusaetzlich die Projektliste ein.
</script>

<style lang="scss" src="assets/styles/construction.scss" scoped></style>
