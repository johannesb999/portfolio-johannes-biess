<template>
  <html>
    <main>
      <div id="aboutMe">ABOUT ME</div>
      <div id="startLinkAbout">
        <nuxt-link to="/" class="custom-link">START</nuxt-link>
      </div>
      <div id="resumeLink">
        <nuxt-link to="resume" class="custom-link">PERSONAL RESUME</nuxt-link>
      </div>
      <div class="aboutMeText">
        <SplitFlapText
          :texts="[
            '[ABOUT] [ME]     VALUES       ',
            '  TEAMWORK  ORGANISATION  ',
            '     ADAPTILITY   ACCURACY ',
            'PUNCTUALITY  FAIRNESS     ',
            '    CREATIVITY     TRUST  ',
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
import "assets/about.css";

</script>

<style scoped></style>
