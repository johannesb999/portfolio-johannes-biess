<template>
  <main>
    <div class="background"></div>

    <div id="projectLinkBefore">
      <nuxt-link to="/en/resume" class="custom-link">RESUME</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          'MATHEMATICS    ECONOMICS  ',
          '     COMPUTER SCIENCE     ',
          '             HISTORY      ',
          '    ENGLISH      GERMAN   ',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img
          src="public\img\cv\kbsz.svg"
          alt="Picture of KBSZ Building in Ellwangen"
        />
      </div>
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [LEARNINGS]          ']" />
            <div class="paragraph">
              During my time at the KBSZ, I obtained the Baden-Würtenberg Abitur
              with a focus on economics and English. The decision not to go into
              business after graduating from high school but to study computer
              science was particularly formative for me.
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['        [ABOUT] [DIPLOMA]      ']" />
            <div class="paragraph">
              The "Fachgebundene Fachhochschulreife" is a school qualification
              in Germany that enables students to study all courses at
              universities of applied sciences and to study at universities in
              the respective subject area. In contrast to the general Abitur,
              there is no second foreign language and the focus is more on
              practical and vocational content. In comparison to the American
              education system, the subject-specific Fachhochschulreife lies
              between a high school diploma and an associate's degree. It offers
              access to specific, vocational courses of study, similar to the
              Abitur.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useDeviceType } from "~/assets/composables/useDeviceType.js";

const { isMobile, isTablet, isDesktop } = useDeviceType();
</script>

<style lang="scss" src="assets/cv.scss" scoped></style>
