<template>
  <main>
    <div id="rightLink">
      <nuxt-link to="/de" class="custom-link">START</nuxt-link>
    </div>
    <div id="bottomLink">
      <nuxt-link to="resume" class="custom-link">LEBENSLAUF</nuxt-link>
    </div>
    <!-- <div id="leftLink">
      <nuxt-link to="/en/skillset" class="custom-link">SKILLSET</nuxt-link>
    </div> -->
    <div class="aboutMeText">
      <SplitFlapText preset="heroFlap" :align="'center'" :texts="['[ÜBER] [MICH]']" />
      <SplitFlapText preset="heroFlap" :align="'random'" :texts="[
        'FLEXIBEL  AGIL  NEUGIERIG',
        'ANPASSUNGSFÄHIG      GENAU',
        'PÜNKTLICHK      FAIR',
        ' KREATIV   ENTSCHDIUNGSSTARK',
      ]" />
    </div>
    <div class="wrapper">
      <img src="/profilepicture.svg" alt="profilepicture" />
      <div id="quote">“Es gibt nicht<br />- zu viel Käse.”</div>
    </div>
    <AboutPresentationOverlay
      src="https://embed.figma.com/deck/xuIJAFTGRel4W79VvbLgOq/Selbst-Pr%C3%A4sentation-Scitis.io%C2%A0?node-id=22-655&p=f&viewport=-215%2C-530%2C0.23&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share"
    />
  </main>
</template>

<script setup>
import AboutPresentationOverlay from '@/components/AboutPresentationOverlay.vue';
import SplitFlapText from '@/components/splitFlapText.vue';
</script>

<style lang="scss" src="assets/styles/about.scss" scoped></style>
