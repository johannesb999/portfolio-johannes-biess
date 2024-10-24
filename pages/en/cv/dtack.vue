<template>
  <main>
    <div class="background"></div>

    <div id="projectLinkNext">
      <nuxt-link to="/en/resume" class="custom-link">RESUME</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          '   WHOLESALE     ECONOMICS ',
          '      MARCET RESEARCH      ',
          ' FINANCE        ACCOUNTING ',
          ' CONTRACT LAW        SALES ',
          'MARKETING      DISPOSITION',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="public\img\cv\dtack.svg" alt="Picture of D-TACK Building" />
      </div>
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['         [LEARNINGS]          ']" />
            <div class="paragraph">
              While I was training as a wholesale and foreign trade merchant at
              D-TACK and the German Chamber of Industry and Commerce (IHK), I
              got to experience all the different departments of a wholesale
              company over the course of three years. I learned about
              purchasing, sales, marketing, and logistics in class and on the
              job. I also got to develop my soft skills, like teamwork,
              communication and organisation, in a professional setting for the
              first time. You can find out more about what I learned and did
              during my apprenticeship in my
              <a
                href="/docs/EmploymentReferenceDtack.pdf"
                download="EmploymentReferenceDtack.pdf"
                class="custom-link"
                style="text-decoration: underline"
                >Employment Reference.pdf</a
              >
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['         [ABOUT] [D-TACK]       ']" />
            <div class="paragraph">
              D-TACK is a company that develops and sells adhesive tapes for all
              kinds of industrial uses. During their training at D-TACK,
              trainees get to try out different departments like purchasing,
              sales, marketing and logistics. This gives them a practical
              insight into wholesale processes and teaches them the essential
              commercial procedures. The training places particular emphasis on
              developing soft skills such as communication, teamwork and
              organisation. You can find out more about the training content on
              their
              <nuxt-link
                to="https://www.d-tack.de/ausbildung?srsltid=AfmBOor2XUpCV5NFF_DtUYp2PfYXWaT6FYBF1oI200zuMLlf_o3gj6WG"
                class="custom-link"
                style="text-decoration: underline"
                target="_blank"
                >website.</nuxt-link
              >
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
