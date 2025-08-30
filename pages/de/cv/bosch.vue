<template>
  <main>
    <div class="background"></div>

    <div id="projectLinkNext">
      <nuxt-link to="/de/resume" class="custom-link">RESUME</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          '  SCRUM       CONFLUENCE  ',
          '       JIRA      AGILE    ',
          '     SOFTWARE ENTWICKLUNG ',
          '  PROCESS OPTIMIERUNG     ',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="public\img\cv\bosch.svg" alt="Picture of Bosch Building" />
      </div>
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [LEARNINGS]        ']" />
            <div class="paragraph">
              Als Werkstudent bei Bosch Automotive Steering GmbH konnte ich ein
              Jahr lang meine Kenntnisse in der Softwareentwicklung und im
              agilen Projektmanagement vertiefen. Während meiner Zeit bei Bosch
              habe ich tiefgehende Kenntnisse in als JIRA Administrator erlangt
              und konnte so helfen Prozesse in Teams und arbeitsbereichen in
              methodeische bahnen zu lenken oder bestehende Arbeitsabläufe zu
              optimieren. Ein weiteren
              Einblick in meine Leistungen und Tätigkeiten während der
              Ausbildung findet sich in meinem
              <a
                href="/docs/ArbeitszeugnisBosch.pdf"
                download="Arbeitszeugnis.pdf"
                class="custom-link"
                style="text-decoration: underline"
                >Arbeitszeugnis.pdf</a
              >
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['         [ABOUT] [BOSCH]       ']" />
            <div class="paragraph">
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

<script setup>
import { useDeviceType } from "~/assets/composables/useDeviceType.js";

const { isMobile, isTablet, isDesktop } = useDeviceType();
</script>

<style lang="scss" src="assets/styles/cv.scss" scoped></style>
