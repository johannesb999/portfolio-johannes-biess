<template>
  <main>
    <div class="background"></div>

    <div id="projectLinkNext">
      <nuxt-link to="/en/resume" class="custom-link">RESUME</nuxt-link>
    </div>

    <!--
      Placeholder: content follows. Structure mirrors pages/en/cv/hfg.vue
      (projectFlap + wrapper/picture as hero, .project-details below).
    -->
    <div class="cv-placeholder">
      <SplitFlapText preset="heroFlap" :align="'center'" :texts="[
        '[MASTER] [OF] [ARTS]',
      ]" />
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
        'HFG SCHWÄBISCH GMÜND',
      ]" />
      <SplitFlapText preset="sectionFlap" :align="'center'" :texts="[
        'CONTENT FOLLOWS SOON',
      ]" />
    </div>
  </main>
</template>

<style lang="scss" src="assets/styles/cv.scss" scoped></style>
