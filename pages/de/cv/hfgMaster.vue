<template>
  <main>
    <div class="background"></div>

    <EdgeLink position="right" fixed to="/de/resume" label="RESUME" />

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
