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
            '  I  WOULD  LOVE  TO   ',
            '  HEAR  FROM    YOU    ',
            '         |INSTAGRAM|     ',
            '|GITHUB|         |EMAIL|   ',
            '      |LINKEDIN|         ',
          ]"
        />
      </div>
    </main>
  </html>
</template>

<script setup></script>

<style src="assets/contact.css" scoped></style>
