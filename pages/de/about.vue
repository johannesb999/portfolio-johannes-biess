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
      <SplitFlapText
        :texts="[
          '         [ÜBER] [MICH]          ',
          '   FLEXIBEL  AGIL  NEUGIERIG',
          'ANPASSUNGSFÄHIG      GENAU  ',
          'PÜNKTLICHK      FAIR        ',
          ' KREATIV   ENTSCHDIUNGSSTARK',
        ]"
      />
    </div>
    <div class="wrapper">
      <img src="public\profilepicture.svg" alt="profilepicture" />
      <div id="quote">“Es gibt nicht<br />- zu viel Käse.”</div>
    </div>
  </main>
</template>

<script setup>
import SplitFlapText from "@/components/splitFlapText.vue";
</script>

<style lang="scss" src="assets/about.scss" scoped></style>
