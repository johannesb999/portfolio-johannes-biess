<template>
  <html>
    <main>
      <div id="rightLink">
        <nuxt-link to="/" class="custom-link">START</nuxt-link>
      </div>
      <div id="bottomLink">
        <nuxt-link to="resume" class="custom-link">PERSONAL RESUME</nuxt-link>
      </div>
      <!-- <div id="leftLink">
        <nuxt-link to="/en/skillset" class="custom-link">SKILLSET</nuxt-link>
      </div> -->
      <div class="aboutMeText">
        <SplitFlapText
          :texts="[
            '         [ABOUT] [ME]          ',
            '   TEAMWORK   AGILE  CURIOS',
            '      ADAPTILITY   ACCURACY',
            'PUNCTUALITY   FAIRNESS     ',
            '     CREATIVITY     TRUST  ',
          ]"
        />
      </div>
      <div class="wrapper">
        <div class="picture">
          <img
            style="border-radius: 10px"
            src="public\profilepicture.jpg"
            alt="profilepicture"
          />
        </div>
        <div id="quote">“There is never<br />- too much cheese.”</div>
      </div>
    </main>
  </html>
</template>

<script setup>
import SplitFlapText from "@/components/splitFlapText.vue";
</script>

<style src="assets/about.css" scoped></style>
