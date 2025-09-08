<template>
  <main>
    <div class="background"></div>

    <div id="projectLinkNext">
      <nuxt-link to="/de/resume" class="custom-link">RESUME</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        '   GROßHANDEL  WIRTSCHAFT ',
        '      MARKTFORSCHUNG      ',
        ' FINANZEN     BUCHHALTUNG ',
        ' VERTRAGSRECHT    VERKAUF ',
        'MARKETING      DISPOSITION',
      ]" />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="public\img\cv\dtack.svg" alt="Picture of D-TACK Building" />
      </div>
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [LEARNINGS]         ']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              Während meiner Ausbildung zum Kaufmann im Groß- und Außenhandel
              bei D-TACK und der IHK Deutschland durchlief ich innerhalb von
              drei Jahren sowohl im Unterricht als auch im Betrieb alle
              relevanten Abteilungen eines Großhandelsunternehmens. Dabei erwarb
              ich grundlegende Kenntnisse in den Bereichen Einkauf, Verkauf,
              Marketing und Logistik. Besonders meine Softskills wie
              Teamfähigkeit, Kommunikation und Organisation wurden erstmalig in
              einem professionellen Umfeld geschult und gefördert. Ein weiteren
              Einblick in meine Leistungen und Tätigkeiten während der
              Ausbildung findet sich in meinem
              <a href="/docs/dtack/arbeitszeugnis-dtack-de.pdf" target="_blank" rel="noopener" class="custom-link"
                style="text-decoration: underline">Arbeitszeugnis</a>
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['         [ABOUT] [D-TACK]       ']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              D-TACK ist ein Unternehmen, das sich auf die Entwicklung und den
              Vertrieb von Klebebändern für verschiedene Industrieanwendungen
              spezialisiert hat. In der Ausbildung bei D-TACK durchlaufen die
              Auszubildenden verschiedene Abteilungen wie Einkauf, Verkauf,
              Marketing und Logistik. Dabei erhalten sie einen praxisnahen
              Einblick in die Prozesse des Großhandels und erlernen die
              wesentlichen kaufmännischen Abläufe. Die Ausbildung legt
              besonderen Wert auf den Aufbau von Softskills wie Kommunikation,
              Teamarbeit und Organisation. Weitere Informationen zu den
              Ausbildungsinhalten auf ihrer
              <nuxt-link
                to="https://www.d-tack.de/ausbildung?srsltid=AfmBOor2XUpCV5NFF_DtUYp2PfYXWaT6FYBF1oI200zuMLlf_o3gj6WG"
                class="custom-link" style="text-decoration: underline" target="_blank">Website.</nuxt-link>
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
