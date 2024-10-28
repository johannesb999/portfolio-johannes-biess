<template>
  <main>
    <div class="background"></div>

    <div id="projectLinkBefore">
      <nuxt-link to="/en/resume" class="custom-link">RESUME</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          '        PRDUCT DESIGN    ',
          '  PROTOTYPING            ',
          '      WEBDEVELOPMENT     ',
          ' CONCEPT DEVELPMENT      ',
          '    FULLSTACK DEVELOPMENT ',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img
          src="public\img\cv\intern.svg"
          alt="Picture of me in front of goldengate bridge"
        />
      </div>
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['    [WHAT] [I] [HOPE] [TO] [LEARN]    ']"
            />
            <div class="paragraph">
              I hope that an internship at Meta will allow me to apply my
              existing knowledge while also learning new skills. I'm eager to
              get involved in projects, solve challenges independently, and gain
              valuable hands-on experience. It's especially important for me to
              enhance my abilities in both design and programming, while growing
              personally and professionally. My objective is to build on my
              current strengths by actively contributing to projects and
              embracing new challenges.
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['         [INTERNSHIP]         ']" />
            <div class="paragraph">
              I think that Meta has an open and innovative corporate culture
              that fosters creativity and initiative. A philosophy centered on
              collaboration, mutual respect, and dynamic working methods is
              particularly important to me. In a driven and agile environment, I
              aim to actively contribute to success by developing my skills
              while working efficiently and in a solution-oriented way. My goal
              is to be part of a team that collaborates on exciting and
              forward-thinking projects.
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

<style src="assets/cv.css" scoped></style>
