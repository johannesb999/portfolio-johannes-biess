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
            <SplitFlapText :texts="['       [INTERNSHIP]         ']" />
            <div class="textStyle">
              In einem Praktikum erhoffe ich mir die Chance, meine bisherigen
              Kenntnisse praktisch anzuwenden und neue Fähigkeiten zu erlernen.
              Ich möchte mich aktiv in Projekte einbringen, eigenständig
              Probleme lösen und wertvolle praktische Erfahrungen sammeln.
              Besonders wichtig ist mir, meine Fähigkeiten in Design und
              Programmierung zu vertiefen und dabei sowohl fachlich als auch
              persönlich zu wachsen. Mein Ziel ist es, durch die aktive
              Mitarbeit an Projekten meine bisherigen Stärken weiter auszubauen
              und mich gleichzeitig neuen Herausforderungen zu stellen.
            </div>
          </div>
          <div class="imageSplit ">
            <SplitFlapText
              :texts="[
                '        PRDUCT DESIGN    ',
                '  PROTOTYPING            ',
                '      WEBDEVELOPMENT     ',
                ' CONCEPT DEVELPMENT      ',
                '    FULLSTACK DEVELOPMENT ',
              ]"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image small">
            <img src="public\img\cv\intern.svg" alt="intern sign" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['  [WHAT] [I] [HOPE] [TO] [LEARN]   ']" />
            <div class="textStyle">
              Von dem Unternehmen, in dem ich mein Praktikum absolviere, erhoffe
              ich mir eine offene und innovative Unternehmenskultur, die
              Kreativität und Eigeninitiative fördert. Besonders wichtig ist mir
              eine Philosophie, die auf Zusammenarbeit, gegenseitigem Respekt
              und einer dynamischen Arbeitsweise basiert. In einem zielstrebigen
              und agilen Umfeld möchte ich aktiv zum Erfolg beitragen, indem ich
              meine Fähigkeiten weiterentwickle und dabei effizient und
              lösungsorientiert arbeite. Mein Ziel ist es, Teil eines Teams zu
              sein, das gemeinsam an spannenden, zukunftsweisenden Projekten
              arbeitet.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style src="assets/cv.css" scoped></style>
