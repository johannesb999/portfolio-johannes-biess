<template>
  <main>
    <div id="leftLink">
      <nuxt-link to="/" class="custom-link">START</nuxt-link>
    </div>
    <div id="resumeLink"></div>

    <div class="contactMeText">
      <SplitFlapText
        :texts="[
          '        [CONTACT]       ',
          '            $GITHUB$    ',
          '  @EMAIL@               ',
          '         |LINKEDIN|     ',
        ]"
      />
    </div>

    <div id="impressum">
      <nuxt-link to="legal" class="custom-link">LEGAL INFORMATION</nuxt-link>
    </div>
  </main>
</template>

<script setup></script>

<style src="assets/contact.css" scoped></style>
