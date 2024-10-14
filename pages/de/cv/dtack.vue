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
            <SplitFlapText :texts="['       [LEARNINGS]         ']" />
            <div class="textStyle">
              Während meiner Ausbildung zum Kaufmann im Groß- und Außenhandel
              bei D-TACK und der IHK Deutschland durchlief ich innerhalb von
              drei Jahren sowohl im Unterricht als auch im Betrieb alle
              relevanten Abteilungen eines Großhandelsunternehmens.<br> Dabei erwarb
              ich grundlegende Kenntnisse in den Bereichen Einkauf, Verkauf,
              Marketing und Logistik. Besonders meine<br> Softskills wie
              Teamfähigkeit, Kommunikation und Organisation wurden erstmalig in
              einem professionellen Umfeld geschult und gefördert. Ein weiteren
              Einblick in meine Leistungen und Tätigkeiten während der
              Ausbildung findet sich in meinem
              <a
                href="/path/to/Arbeitszeugnis.pdf"
                class="custom-link"
                style="text-decoration: underline"
                download
                >Arbeitszeugnis</a
              >.
            </div>
          </div>
          <div class="imageSplit ">
            <SplitFlapText
              :texts="[
                '   WHOLESALE     ECONOMICS ',
                '      MARCET RESEARCH      ',
                ' FINANCE        ACCOUNTING ',
                ' CONTRACT LAW        SALES ',
                'MARKETING      DISPOSITION',
              ]"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image small">
            <img src="public\img\cv\dtack.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['      [ÜBER] [D-TACK]       ']" />
            <div class="textStyle">
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
                class="custom-link"
                style="text-decoration: underline"
                target="_blank"
                >Website</nuxt-link
              >.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style src="assets/cv.css" scoped></style>
