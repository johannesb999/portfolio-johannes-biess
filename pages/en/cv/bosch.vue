<template>
  <main>
    <div id="projectLinkStart">
      <nuxt-link to="/en/resume" class="custom-link">CV</nuxt-link>
    </div>

    <div class="project-details">
      <div class="project-section"></div>
      <div class="project-header"></div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['       [LEARNINGS]        ']" />
            <div class="textStyle">
              I spent a year at Bosch Automotive Steering GmbH, where I got to
              deepen my knowledge of software development and agile project
              management. I was a JIRA administrator, so I learned a lot about
              guiding teams and work areas towards more methodical processes and
              making existing workflows more efficient.
            </div>
          </div>
          <div class="imageSplit">
            <SplitFlapText
              :texts="[
                '  SCRUM       CONFLUENCE  ',
                '       JIRA      AGILE    ',
                '     SOFTWARE DEVELOPMENT ',
                '  PROCESS OPTIMIZATION    ',
              ]"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image small">
            <img src="public\img\cv\bosch.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['      [ABOUT] [BOSCH]       ']" />
            <div class="textStyle">
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

<script setup></script>

<style src="assets/cv.css" scoped></style>
