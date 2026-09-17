<template>
  <main>
    <EdgeLink position="left" to="/" label="START" />

    <div class="contactMeText">
      <SplitFlapText preset="heroFlap" :align="'center'" :texts="[
        '[CONTACT]',
      ]" />
      <SplitFlapText preset="heroFlap" :align="'random'" :texts="[
        '$GITHUB$',
        '@EMAIL@',
        '|LINKEDIN|',
      ]" />
    </div>

    <AppLink class="contact__legal" to="legal" label="LEGAL INFORMATION" />
  </main>
</template>

<script setup></script>

<style lang="scss" src="assets/styles/contact.scss" scoped></style>
