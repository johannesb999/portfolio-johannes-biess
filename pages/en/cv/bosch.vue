<template>
  <main>
    <div class="background"></div>

    <div id="projectLinkNext">
      <nuxt-link to="/en/resume" class="custom-link">RESUME</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        '  SCRUM       CONFLUENCE  ',
        '       JIRA      AGILE    ',
        '     SOFTWARE DEVELOPMENT ',
        '  PROCESS OPTIMIZATION    ',
      ]" />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="public\img\cv\bosch.svg" alt="Picture of Bosch Building" />
      </div>
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [LEARNINGS]        ']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              I spent a year at Bosch Automotive Steering GmbH, where I got to
              deepen my knowledge of software development and agile project
              management. I was a JIRA administrator, so I learned a lot about
              guiding teams and work areas towards more methodical processes and
              making existing workflows more efficient. You can find out more about what I learned and did
              during my apprenticeship in my
              <a href="/docs/bosch/EmploymentReferenceBosch.pdf" download="EmploymentReferenceBosch.pdf" class="custom-link"
                style="text-decoration: underline">Employment Reference.pdf</a>
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['         [ABOUT] [BOSCH]       ']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              The Schwäbisch Gmünd site is the lead plant of the Vehicle Motion
              Vehicle Motion Vehicle Motion division and comprises the
              Competence Center for Development Center for Development, central
              functions and production. production. The passion for passion for
              driving unites around 4,000 employees from different different
              nations in various fields of activity and different fields of
              activity and three sub-companies. Safe, comfortable and innovative
              steering systems are developed for the global the global passenger
              car and commercial vehicle market.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>import { useDeviceType } from "~/assets/composables/useDeviceType.js";

const { isMobile, isTablet, isDesktop } = useDeviceType();</script>

<style lang="scss" src="assets/styles/cv.scss" scoped></style>
