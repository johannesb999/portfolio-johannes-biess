<template>
  <html>
    <main>
      <div id="projectLinkStartLeft">
        <nuxt-link to="/en/resume" class="custom-link">CV</nuxt-link>
      </div>

      <div class="project-details">
        <div class="project-section"></div>
        <div class="project-header">
          <h1 class="project-title">
            <span>UZHJHJUDAUD</span>INTERNSHIP<span
              >JGEUMJAUD</span
            >
          </h1>
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <h2>WHAT I HOPE TO LEARN<span>GBUFKUZTFGUTAVEEH</span></h2>
              <p>
                bewerbungsschreiben

                <br /><br />
              </p>
            </div>
            <div class="imageSplit">
              <SplitFlapText
                :texts="[
                  '        [HOPEFULLY]      ',
                  'FIGMA    UX        UI    ',
                  'PROTOTYPING  USABILITY   ',
                  '     DESIGNTHINKING      ',
                  ' USER CENTERED LEANDESIGN',
                  '  FULLSTACK DEVELOPMENT  ',
                ]"
              />
            </div>
          </div>
        </div>

        <div class="project-section-reverse">
          <div class="project-content">
            <div class="image small">
              <img src="public\img\cv\intern.jpg" alt="plantmonit" />
            </div>
            <div class="text">
              <h2>WHY YOU SHOULD CHOOSE ME<span>GBTRUZTU</span></h2>
              <p>
               
                The University of Design (HfG) has really shaped my skills in
                design and development. At this well-known university in
                Germany, I didn’t just learn theory, but also got hands-on
                experience that has prepared me for the working world. The
                practical, project-based teaching gave me early insights into
                real-world work processes. What stood out to me the most was the
                focus on teamwork, which helped me improve my skills in a
                collaborative setting. Thanks to the iterative approach in
                teaching, I was able to learn all the steps from the initial
                concept to the finished prototype.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </html>
</template>

<script setup></script>

<style src="assets/cv.css" scoped></style>
