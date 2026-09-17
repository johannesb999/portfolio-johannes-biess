<template>
  <main>
    <div class="background"></div>

    <EdgeLink position="right" fixed to="/de/resume" label="RESUME" />

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
      <img src="/img/cv/dtack.svg" alt="Picture of D-TACK Building" />
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
              <AppLink href="/docs/dtack/arbeitszeugnis-dtack-de.pdf" label="Arbeitszeugnis" underline :scale="false" />
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
              <AppLink href="https://www.d-tack.de/ausbildung?srsltid=AfmBOor2XUpCV5NFF_DtUYp2PfYXWaT6FYBF1oI200zuMLlf_o3gj6WG" label="Website." underline :scale="false" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style lang="scss" src="assets/styles/cv.scss" scoped></style>
