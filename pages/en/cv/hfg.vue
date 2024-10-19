<template>
  <main>
    <div class="background"></div>

    <div id="projectLinkNext">
      <nuxt-link to="/en/resume" class="custom-link">RESUME</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          '   FIGMA   UX LEANDESIGN ',
          'PROTOTYPING  USABILITY   ',
          '     DESIGNTHINKING      ',
          ' USER CENTERED    UI     ',
          '  FULLSTACK DEVELOPMENT  ',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img
          src="public\img\cv\hfgbuilding.svg"
          alt="Picture of HFG Building"
        />
      </div>
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [LEARNINGS]          ']" />
            <div class="paragraph">
              When I was at the HfG, I worked on
              <NuxtLink
                to="/de/project/projects"
                class="custom-link"
                style="text-decoration: underline"
                >projects</NuxtLink
              >
              that were very focused on getting hands-on experience right from
              the start. I learned to think deeply about fundamental questions
              like: What should I develop? How can I make sure it meets users'
              needs? What technologies are needed and how can I use them
              effectively? The HfG created an inspiring learning environment
              where I could not only build my design and technical skills, but
              also learn how to apply them in real projects.
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['          [ABOUT] [HFG]        ']" />
            <div class="paragraph">
              The Hochschule für Gestaltung Schwäbisch Gmünd (HfG) is known for
              its real-world, project-based approach to training students. The
              school places a lot of emphasis on combining theory and practice,
              which gives students a good understanding of how work actually
              gets done. There's a strong focus on teamwork and working across
              disciplines, which prepares students for a collaborative work
              environment. Through a combination of hands-on learning and a
              strong link to practice, students learn all the steps from concept
              development to the finished prototype.
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
