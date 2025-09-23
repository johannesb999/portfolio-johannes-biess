<template>
  <main>
    <div id="rightLink">
      <Nuxt-link to="/" class="custom-link">START</Nuxt-link>
    </div>
    <div id="bottomLink">
      <Nuxt-link to="resume" class="custom-link">PERSONAL RESUME</Nuxt-link>
    </div>

    <div class="aboutMeText">
      <SplitFlapText preset="heroFlap" :align="'center'" :texts="[
        '         [ABOUT] [ME]          ',
      ]" />
      <SplitFlapText preset="heroFlap" :align="'random'" :texts="[
        '  DECISIVE   AGILE  CURIOUS',
        '    ADAPTABILITY   ACCURACY',
        'PUNCTUALITY   FAIRNESS     ',
        '     CREATIVITY     TRUST  ',
      ]" />
    </div>
    <div class="wrapper">
      <img src="/profilepicture.svg" alt="profilepicture" />
      <div id="quote">“There is never<br />- too much cheese.”</div>
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
