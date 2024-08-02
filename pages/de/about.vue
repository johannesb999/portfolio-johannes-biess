<template>
  <html>
    <main>
      <div id="aboutMe">ÜBER MICH</div>
      <div id="startLinkAbout">
        <nuxt-link to="/de" class="custom-link">START</nuxt-link>
      </div>
      <div id="resumeLink">
        <nuxt-link to="resume" class="custom-link">LEBENSLAUF</nuxt-link>
      </div>
      <div class="aboutMeText">
        <SplitFlapText
          :texts="[
            '[ÜBER] [MICH]      WERTE      ',
            'TEAMWORK  VERTRAUEN       ',
            '  ANPASSUNGSFÄHIGKEIT     ',
            ' PÜNKTLICHKEIT FAIRNESS   ',
            'KREATIVITÄT  GENAUIGKEIT  ',
          ]"
        />
      </div>

      <div class="picture">
        <img
          style="border-radius: 10px"
          src="https://via.placeholder.com/220x380"
          alt="profilpicture"
        />
      </div>
    </main>
  </html>
</template>

<script setup>
import SplitFlapText from "@/components/splitFlapText.vue";
import 'assets/about.css'; 

</script>

<style scoped></style>
