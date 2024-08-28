<template>
  <html>
    <main>
      <div id="contact">CONTACT ME</div>
      <div id="startLinkContact">
        <nuxt-link to="/" class="custom-link">START</nuxt-link>
      </div>
      <div id="resumeLink"></div>

      <div class="contactMeText">
        <SplitFlapText
          :texts="[
            '      |GITHUB|     ',
            '            |LINKEDIN|    ',
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

<script setup></script>

<style src="assets/contact.css" scoped></style>
