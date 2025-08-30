<template>
  
  <main>
    <!-- <div id="contact">CONTACT ME</div> -->
    <div id="leftLink">
      <nuxt-link to="/de" class="custom-link">START</nuxt-link>
    </div>
    <div id="resumeLink"></div>

    <div class="contactMeText">
      <SplitFlapText
        :texts="[
          '        [KONTAKT]       ',
          '            $GITHUB$    ',
          '  @EMAIL@               ',
          '         |LINKEDIN|     ',
        ]"
      />
    </div>

    <!-- <div id="quote">
      “I would love to<br />
      -hear from you.”
    </div> -->
    <!-- 'I  WOULD  LOVE  TO     ',
    'HEAR  FROM YOU VIA     ', -->

    <div id="impressum">
      <nuxt-link to="legal" class="custom-link">IMPRESSUM</nuxt-link>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" src="assets/contact.scss" scoped></style>
