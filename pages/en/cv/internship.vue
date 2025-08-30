<template>
  <main>
    <div class="background"></div>

    <div id="projectLinkBefore">
      <nuxt-link to="/en/resume" class="custom-link">RESUME</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText :texts="[
        '        UX DESIGN        ',
        '  WIREFRAMING            ',
        '     CUSTOMER CONTACT    ',
        ' CONCEPT DEVELPMENT      ',
        '    ITERATIVE DESIGN     ',
      ]" />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="public\img\cv\musecase2.png" alt="musecase logo" />
      </div>
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['     [WHAT] [I] [HAVE] [LEARNED]     ']" />
            <div class="paragraph">
              In my internship, I gained a much deeper understanding of design tools like Figma. I learned not only
              to understand design systems, but also to create and use them efficiently. At the same time, I developed a
              clearer understanding of the work methods of UX/UI designers and learned how to significantly improve a
              product's usability by analyzing user flows and best practices. In addition to these technical skills, it
              was particularly important to learn how to deal with clients professionally—to understand their needs,
              manage expectations, and accept constructive feedback.
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['   [INTERNSHIP] [AT] [MUSECASE]    ']" />
            <div class="paragraph">
              Working in an agency was an interesting and, above all, a new experience for me. Design methods that are
              given much less time in my studies are suddenly very useful, and you have to pay attention to details that
              didn't play a role in university. The internship and, above all, the employees at musecase showed me how
              work is sensibly structured and divided in a professional environment. I realized how essential clear
              communication within the team is for the success of a project. I learned to actively contribute to
              teamwork, take responsibility, and learn from mistakes to continuously optimize the workflow.

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

<style lang="scss" src="assets/styles/cv.scss" scoped></style>
