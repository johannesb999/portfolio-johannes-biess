<template>
  <main>
    <div class="background"></div>

    <div id="projectLinkNext">
      <nuxt-link to="/de/resume" class="custom-link">RESUME</nuxt-link>
    </div>

    <!--
      Platzhalter: Inhalte folgen. Aufbau analog zu pages/de/cv/hfg.vue
      (projectFlap + wrapper/picture als Hero, darunter .project-details).
    -->
    <div class="cv-placeholder">
      <SplitFlapText preset="heroFlap" :align="'center'" :texts="[
        '[MASTER] [OF] [ARTS]',
      ]" />
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
        'HFG SCHWÄBISCH GMÜND',
      ]" />
      <SplitFlapText preset="sectionFlap" :align="'center'" :texts="[
        'INHALTE FOLGEN IN KÜRZE',
      ]" />
    </div>
  </main>
</template>

<style lang="scss" src="assets/styles/cv.scss" scoped></style>
