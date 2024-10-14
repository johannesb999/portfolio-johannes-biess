<template>
  <main>
    <div id="projectLinkStartLeft">
      <nuxt-link to="/de/resume" class="custom-link">CV</nuxt-link>
    </div>

    <div class="project-details">
      <div class="project-section"></div>
      <div class="project-header"></div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['       [LEARNINGS]        ']" />
            <div class="textStyle">
              Während meiner Zeit in der KBSZ habe ich das <br />
              Baden-Würtenbergische Abitur mit schwerpunkt auf Wirtschaft und
              Englisch erworben.
              <br />Besonders Prägend für mich war der Entschluss nach dem
              Abitur nicht weiter in die Wirtschaft zu gehen sondern mich für
              ein Studium im Bereich der Informatik zu entscheiden.
            </div>
          </div>
          <div class="imageSplit">
            <SplitFlapText
              :texts="[
                'MATHEMATIK    WIRTSCHAFT  ',
                '        INFORMATIK        ',
                '   WIRTSCHAFT    DEUTSCH  ',
                '   ENGLISCH    GESCHICHTE ',
              ]"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image small">
            <img src="public\img\cv\kbsz.svg" alt="intern sign" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['          [KBSZ]          ']" />
            <div class="textStyle">
              Das Kaufmännische Berufs- und Schulzentrum (KBSZ) in Ellwangen
              bietet unter anderem das fachgebundene Fachabitur im Bereich
              Wirtschaft an. Dieser Bildungsgang bereitet die Schüler gezielt
              auf betriebswirtschaftliche und kaufmännische Berufe oder ein
              entsprechendes Studium vor. Schwerpunkte liegen in Fächern wie
              Betriebswirtschaftslehre, Volkswirtschaftslehre, Rechnungswesen
              sowie Wirtschaftsrecht. Zusätzlich wird die Allgemeinbildung durch
              Fächer wie Deutsch, Mathematik und Englisch gestärkt. Die
              praxisnahe Vermittlung von Inhalten ermöglicht einen fundierten
              Einstieg in wirtschaftliche Berufe oder ein weiterführendes
              Studium im Bereich Wirtschaft.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style src="assets/cv.css" scoped></style>
