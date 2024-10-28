<template>
  <main>
    <div class="background"></div>

    <div id="projectLinkBefore">
      <nuxt-link to="/de/resume" class="custom-link">RESUME</nuxt-link>
    </div>

    <div class="projectFlap">
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

    <div class="wrapper">
      <div class="picture">
        <img
          src="public\img\cv\intern.svg"
          alt="Picture of me in front of goldengate bridge"
        />
      </div>
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['   [WAS] [ICH] [HOFFE] [ZU] [LERNEN]   ']"
            />
            <div class="paragraph">
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

          <div class="text">
            <SplitFlapText :texts="['          [PRAKTIKUM]        ']" />
            <div class="paragraph">
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

<script setup>
import { useDeviceType } from "~/assets/composables/useDeviceType.js";

const { isMobile, isTablet, isDesktop } = useDeviceType();
</script>

<style src="assets/cv.css" scoped></style>
