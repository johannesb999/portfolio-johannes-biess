<template>
  <main>
    <div id="rightLink">
      <Nuxt-link to="/" class="custom-link">START</Nuxt-link>
    </div>
    <div id="bottomLink">
      <Nuxt-link to="resume" class="custom-link">PERSONAL RESUME</Nuxt-link>
    </div>

    <div class="aboutMeText">
      <SplitFlapText :texts="[
        '         [ABOUT] [ME]          ',
        '  DECISIVE   AGILE  CURIOUS',
        '    ADAPTABILITY   ACCURACY',
        'PUNCTUALITY   FAIRNESS     ',
        '     CREATIVITY     TRUST  ',
      ]" />
    </div>
    <div class="wrapper">
      <img src="public\profilepicture.svg" alt="profilepicture" />
      <div id="quote">“There is never<br />- too much cheese.”</div>
    </div>
  </main>
</template>

<script setup>
import SplitFlapText from "@/components/splitFlapText.vue";
</script>

<style lang="scss" src="assets/about.scss" scoped></style>
