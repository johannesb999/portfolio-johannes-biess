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
              I'm hoping an internship will let me put my previous knowledge to
              use and learn new skills. I'd like to get hands-on with projects,
              tackle problems on my own, and gain valuable experience. It's
              especially important to me to deepen my skills in design and
              programming and to grow both professionally and personally in the
              process. My goal is to build on my existing strengths by actively
              working on projects and taking on new challenges.
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['          [INTERNSHIP]         ']" />
            <div class="paragraph">
              I'm hoping the company I'm doing my internship with has an open
              and innovative corporate culture that encourages creativity and
              initiative. A philosophy based on collaboration, mutual respect,
              and a dynamic way of working is particularly important to me. In a
              determined and agile environment, I want to actively contribute to
              success by developing my skills while working efficiently and
              solution-oriented. My goal is to be part of a team that works
              together on exciting, forward-looking projects.
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
