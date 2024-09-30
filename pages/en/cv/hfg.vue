<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/en/resume" class="custom-link">CV</nuxt-link>
      </div>

      <div class="project-details">
        <!-- <div class="project-header">
           <h1 class="project-title">
            <span>UZHJHJUDAUD</span>HOCHSCHULE FÜR GESTALTUNG<span
              >JGEUMJAUD</span
            >
          </h1>
        </div> -->

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <SplitFlapText :texts="['         [LEARNINGS]          ']" />
              <p>
                During my time at HfG, I worked on
                <nuxt-link to="/en/project/projects" class="custom-link"
                  >projects</nuxt-link
                >
                that were practical from the start.<br />
                I was encouraged to dive deep into fundamental questions like:
                What’s worth developing? How can I make sure it meets user
                needs? What technologies are necessary, and how do I use them
                effectively? HfG created an inspiring learning environment where
                I could not only build up my design and tech skills, but also
                learn how to apply them in real-world projects.

                <br /><br />
              </p>
            </div>
            <div class="imageSplit">
              <SplitFlapText
                :texts="[
                  '          [HFG]           ',
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
              <img src="public\img\cv\hfgbuilding.jpeg" alt="plantmonit" />
            </div>
            <div class="text">
              
                <SplitFlapText :texts="['        [ABOUT] [HFG]        ']" />
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
