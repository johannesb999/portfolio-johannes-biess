<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div class="construction-page">
      <ConstructionAnimation label="Animation einer Baustelle" />

      <div class="construction-page__text">
        <SplitFlapText preset="heroFlap" :align="'center'" :texts="[
          '[UNDER] [CONSTRUCTION]',
        ]" />
        <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
          'BITTE SPÄTER WIEDERKOMMEN',
        ]" />
      </div>
    </div>
  </main>
</template>

<script setup>
// Die Projektseiten sind vorübergehend ausgeblendet (Weiterleitungen in
// nuxt.config.ts). Hier steht so lange nur der Baustellen-Hinweis.
</script>

<style lang="scss" src="assets/styles/construction.scss" scoped></style>
