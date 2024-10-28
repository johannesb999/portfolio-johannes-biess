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
              Ich bin überzeugt, dass ein Praktikum bei Microsoft die
              Möglichkeit bietet, in einer offenen und innovativen
              Unternehmenskultur zu arbeiten, die Kreativität und
              Eigeninitiative fördert. Microsofts Philosophie der
              Zusammenarbeit, des gegenseitigen Respekts und dynamischer
              Arbeitsweisen passt gut zu meinen Werten. In einem solch
              entschlossenen und agilen Umfeld möchte ich aktiv zum Erfolg des
              Teams beitragen, indem ich meine Fähigkeiten weiterentwickle und
              dabei effizient sowie lösungsorientiert arbeite. Mein Ziel ist es,
              Teil eines Teams zu sein, das an spannenden und zukunftsweisenden
              Projekten zusammenarbeitet.
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
