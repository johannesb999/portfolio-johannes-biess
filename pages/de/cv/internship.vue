<template>
  <main>
    <div id="resumeLinkHfg">
      <nuxt-link to="/de/resume" class="custom-link"
        >Curriculum vitae</nuxt-link
      >
    </div>

    <div class="hfgText">
      <SplitFlapText
        :texts="[
          'INTERNSHIP      LEARNINGS      ',
          'FIGMA   UX        UI    ',
          'PROTOTYPING  USABILITY  ',
          '     DESIGNTHINKING         ',
          ' USER CENTERED  LEANDESIGN    ',
          'FULLSTACK DEVELOPMENT   ',
        ]"
      />
    </div>
    <div>what i hope to learn usw quasi bewerbungsschreiben</div>
  </main>
</template>

<script setup>
import SplitFlapText from "@/components/splitFlapText.vue";
</script>

<style scoped>

</style>
