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
            <SplitFlapText :texts="['        [LEARNINGS]         ']" />
            <div class="textStyle">
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
                href="/path/to/Arbeitszeugnis.pdf"
                class="custom-link"
                style="text-decoration: underline"
                download
                >employment reference</a
              >.
            </div>
          </div>
          <div class="imageSplit ">
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
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image small">
            <img src="public\img\cv\dtack.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['      [ABOUT] [D-TACK]       ']" />
            <div class="textStyle">
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
                >website</nuxt-link
              >.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style src="assets/cv.css" scoped></style>
