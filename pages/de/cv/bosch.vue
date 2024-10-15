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
            <SplitFlapText :texts="['      [LEARNINGS]        ']" />
            <div class="textStyle">
              Als Werkstudent bei Bosch Automotive Steering GmbH konnte ich ein
              Jahr lang meine Kenntnisse in der Softwareentwicklung und im
              agilen Projektmanagement vertiefen. Während meiner Zeit bei Bosch
              habe ich tiefgehende Kenntnisse in als JIRA Administrator erlangt
              und konnte so helfen Prozesse in Teams und arbeitsbereichen in
              methodeische bahnen zu lenken oder bestehende Arbeitsabläufe zu
              optimieren.
            </div>
          </div>
          <div class="imageSplit ">
            <SplitFlapText
              :texts="[
                '  SCRUM       CONFLUENCE  ',
                '       JIRA      AGILE    ',
                '     SOFTWARE ENTWICKLUNG ',
                '  PROCESS OPTIMIERUNG     ',
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
            <SplitFlapText :texts="['         [BOSCH]         ']" />
            <div class="textStyle">
              Der Standort Schwäbisch Gmünd ist das Leitwerk des
              Unternehmensbereichs Vehicle Motion Vehicle Motion und umfasst das
              Kompetenzzentrum für Entwicklung zentrum für Entwicklung,
              Zentralfunktionen und Produktion. Produktion. Die Leidenschaft
              fürs Lenken vereint rund 4.000 Mitarbeiter Mitarbeiter aus
              verschiedenen Nationen in unterschiedlichen Tätigkeitsfeldern und
              verschiedenen Tätigkeitsfeldern und drei Teilbetrieben. Sichere,
              komfortable und innovative Lenksysteme werden für den weltweiten
              den weltweiten Pkw- und Nutzfahrzeugmarkt.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style src="assets/cv.css" scoped></style>
