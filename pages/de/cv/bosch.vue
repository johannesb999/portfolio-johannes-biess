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
          'BOSCH      KOMPETENZEN      ',
          'FIGMA   UX        UI    ',
          'PROTOTYPING  USABILITY  ',
          '     DESIGNMETHODEN         ',
          ' USER CENTERED  LEANDESIGN    ',
          'FULLSTACK DEVELOPMENT   ',
        ]"
      />
    </div>
  </main>
</template>

<script setup>
import SplitFlapText from "@/components/splitFlapText.vue";
</script>

<style scoped>

</style>
