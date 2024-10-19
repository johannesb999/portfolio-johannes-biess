<template>
  
    <main>
      <div id="rightLink">
        <nuxt-link to="/" class="custom-link">START</nuxt-link>
      </div>
      <div id="bottomLink">
        <nuxt-link to="resume" class="custom-link">PERSONAL RESUME</nuxt-link>
      </div>
      
      <div class="aboutMeText">
        <SplitFlapText
          :texts="[
            '         [ABOUT] [ME]          ',
            '   DECISIVE   AGILE  CURIOS',
            '      ADAPTILITY   ACCURACY',
            'PUNCTUALITY   FAIRNESS     ',
            '     CREATIVITY     TRUST  ',
          ]"
        />
      </div>
      <div class="wrapper">
          <img
            src="public\profilepicture.svg"
            alt="profilepicture"
          />
          <div id="quote">“There is never<br />- too much cheese.”</div>
        </div>
    </main>
</template>

<script setup>
import SplitFlapText from "@/components/splitFlapText.vue";
</script>

<style src="assets/about.css" scoped></style>
