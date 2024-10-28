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
              Ich hoffe, dass mir ein Praktikum bei Meta die Möglichkeit bietet,
              mein vorhandenes Wissen anzuwenden und gleichzeitig neue
              Fähigkeiten zu erlernen. Ich freue mich darauf, mich in Projekte
              einzubringen, eigenständig Herausforderungen zu lösen und
              wertvolle praktische Erfahrungen zu sammeln. Besonders wichtig ist
              es mir, meine Fähigkeiten in Design und Programmierung weiter zu
              vertiefen und mich sowohl persönlich als auch beruflich
              weiterzuentwickeln. Mein Ziel ist es, auf meinen bestehenden
              Stärken aufzubauen, indem ich aktiv an Projekten mitarbeite und
              neue Herausforderungen annehme.
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['          [PRAKTIKUM]        ']" />
            <div class="paragraph">
              Ich hoffe, dass Meta eine offene und innovative Unternehmenskultur
              pflegt, die Kreativität und Eigeninitiative fördert. Eine
              Philosophie, die auf Zusammenarbeit, gegenseitigem Respekt und
              dynamischen Arbeitsweisen basiert, ist mir besonders wichtig. In
              einem entschlossenen und agilen Umfeld möchte ich aktiv zum Erfolg
              beitragen, indem ich meine Fähigkeiten weiterentwickle und dabei
              effizient sowie lösungsorientiert arbeite. Mein Ziel ist es, Teil
              eines Teams zu sein, das gemeinsam an spannenden und
              zukunftsweisenden Projekten arbeitet.
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
