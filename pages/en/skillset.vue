<template>
  <html>
    <main>
      <div id="rightLink">
        <nuxt-link to="about" class="custom-link">ABOUT</nuxt-link>
      </div>
      <!-- <div id="resumeLink">
        <nuxt-link to="resume" class="custom-link">PERSONAL RESUME</nuxt-link>
      </div> -->
      <div class="aboutMeText">
        <SplitFlapText
          :texts="[
            '[ABOUT] [ME]     VALUES       ',
            '  TEAMWORK  ORGANISATION  ',
            '     ADAPTILITY   ACCURACY',
            'PUNCTUALITY  FAIRNESS     ',
            '    CREATIVITY     TRUST  ',
          ]"
        />
      </div>
    </main>
  </html>
</template>

<script setup>
import SplitFlapText from "@/components/splitFlapText.vue";
</script>

<style src="assets/skillset.css" scoped></style>
