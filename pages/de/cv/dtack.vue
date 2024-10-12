<template>
  <main>
    <div id="projectLinkStart">
      <nuxt-link to="/de/resume" class="custom-link">CV</nuxt-link>
    </div>

    <div class="project-details">
      <div class="project-section"></div>
      <div class="project-header"></div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['         [D-TACK]          ']" />
            <div class="textStyle">
              beschreibung zu meiner ausbildung bei d-tack Zeugnis als Download
              anbieten
            </div>
          </div>
          <div class="imageSplit textStyle">
            <SplitFlapText
              :texts="[
                'TEAMWORK    UX    UI    ',
                'WHOLESALE  USABILITY  ',
                '     FREE SPEAKING    ',
                ' BUSINESS MANAGEMENT   ',
                '  FULLSTACK DEVELOPMENT ',
              ]"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image small">
            <img src="public\img\cv\dtack.jpg" alt="plantmonit" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['      [ABOUT] [D-TACK]       ']" />
            <div class="textStyle">
              kleinen text über d-tack
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style src="assets/cv.css" scoped></style>
