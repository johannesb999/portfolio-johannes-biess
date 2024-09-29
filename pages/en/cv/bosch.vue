<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/en/resume" class="custom-link">CV</nuxt-link>
      </div>

      <div class="project-details">
        <div class="project-section"></div>
        <div class="project-header">
          <!-- <h1 class="project-title">
            <span>UZHJHASGBVSAIJUDAUD</span>BOSCH<span
              >HGBBVSAIHJTJGEUMJAUD</span
            >
          </h1> -->
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <h2><span>GBUFKUZTFGHJ</span>WORKINGSTUDENT<span>GBUFKUZTFGHJ</span></h2>
              <p>
                Als Werkstudent bei Bosch Automotive Steering GmbH konnte ich
                ein Jahr lang meine Kenntnisse in der Softwareentwicklung und im
                agilen Projektmanagement vertiefen. Während meiner Zeit bei
                Bosch habe ich tiefgehende Kenntnisse in als JIRA Administrator
                erlangen können und konnte so helfen Prozesse im Team zu
                optimieren.

                <br /><br />
              </p>
            </div>
            <div class="imageSplit">
              <SplitFlapText
                :texts="[
                  '        [BOSCH]       ',
                  '    JIRA    DOCUPEDIA  ',
                  '      SCRUM      AGILE ',
                  '     PROCESS DESIGN  ',
                  ' CONFLUENCE    KANBAN  ',
                  '   TICKETING SYSTEMS    ',
                ]"
              />
            </div>
          </div>
        </div>

        <div class="project-section-reverse">
          <div class="project-content">
            <div class="image small">
              <img src="public\img\cv\bosch.jpg" alt="plantmonit" />
            </div>
            <div class="text">
              <h2>ABOUT BOSCH VM GMBH<span>GBTRRHKAK</span></h2>
              <p>
                The Schwäbisch Gmünd site is the lead plant of the Vehicle
                Motion Vehicle Motion division and comprises the competence
                competence center for development, central functions and
                production. production. A passion for steering unites around
                4,000 employees employees from different nations in various
                fields of activity and different fields of activity and three
                sub-plants. Safe, comfortable and innovative steering systems
                are manufactured for the global passenger car and commercial
                vehicle market.
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
