<template>
  <main>
    <EdgeLink position="right" to="/de" label="START" />
    <EdgeLink class="about__resume-link" position="bottom" to="resume" label="LEBENSLAUF" />
    <div class="about__content">
      <div class="aboutMeText">
        <SplitFlapText tag="h1" preset="heroFlap" :align="'center'" :texts="['[ÜBER] [MICH]']" />
        <SplitFlapText preset="heroFlap" :align="'random'" :texts="[
          'FLEXIBEL  AGIL  NEUGIERIG',
          'ANPASSUNGSFÄHIG      GENAU',
          'PÜNKTLICH      FAIR',
          ' KREATIV   ENTSCHEIDUNGSSTARK',
        ]" />
      </div>
      <div class="wrapper">
        <ZoomableImage src="/profilepicture.svg" alt="Portrait von Johannes Biess" />
        <div id="quote">“Es gibt nicht<br />- zu viel Käse.”</div>
      </div>
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
