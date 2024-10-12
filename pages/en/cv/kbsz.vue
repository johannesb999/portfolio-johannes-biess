<template>
  <main>
    <div id="projectLinkStartLeft">
      <nuxt-link to="/en/resume" class="custom-link">CV</nuxt-link>
    </div>

    <div class="project-details">
      <div class="project-section"></div>
      <div class="project-header"></div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['         [KBSZ]          ']" />
            <div class="textStyle">
              beschreibung zu meiner ausbildung bei KBSZ Zeugnis als Download
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
            <img src="public\img\cv\kbsz.png" alt="intern sign" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['  [WHAT] [I] [HOPE] [TO] [LEARN]   ']" />
            <div class="textStyle">
              kleinen text über KBSZ
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style src="assets/cv.css" scoped></style>
