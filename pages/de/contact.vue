<template>

  <main>
    <!-- <div id="contact">CONTACT ME</div> -->
    <EdgeLink position="left" to="/de" label="START" />

    <div class="contactMeText">
      <SplitFlapText preset="heroFlap" :align="'center'" :texts="[
        '[KONTAKT]',
      ]" />
      <SplitFlapText preset="heroFlap" :align="'random'" :texts="[
        '$GITHUB$',
        '@EMAIL@',
        '|LINKEDIN|',
      ]" />
    </div>

    <!-- <div id="quote">
      “I would love to<br />
      -hear from you.”
    </div> -->
    <!-- 'I  WOULD  LOVE  TO     ',
    'HEAR  FROM YOU VIA     ', -->

    <AppLink class="contact__legal" to="legal" label="IMPRESSUM" />
  </main>
</template>

<script setup></script>

<style lang="scss" src="assets/styles/contact.scss" scoped></style>
