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
            <SplitFlapText :texts="['         [INTERNSHIP]         ']" />
            <div class="paragraph">
              I am confident that an internship at Google will offer the
              opportunity to work within an open and innovative corporate
              culture that fosters creativity and initiative. Google's
              philosophy of collaboration, mutual respect, and dynamic working
              methods aligns closely with my values. In a determined and agile
              environment like this, I aim to actively contribute to the team’s
              success by honing my skills while working efficiently and in a
              solution-oriented manner. My goal is to be part of a team that
              collaborates on exciting and forward-thinking projects.
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
