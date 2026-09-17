<template>
  <main>
    <div class="background"></div>

    <EdgeLink position="right" fixed to="/de/resume" label="RESUME" />

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        '´SCRUM       CONFLUENCE  ',
        '´JIRA      AGILE',
        'SOFTWARE ENTWICKLUNG ',
        '  PROCESS OPTIMIERUNG',
      ]" />
    </div>

    <div class="wrapper">
      <img src="/img/cv/bosch.svg" alt="Picture of Bosch Building" />
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText preset="sectionFlap" :align="'center'" :texts="['[LEARNINGS]']" />
            <div class="paragraph">
              Als Werkstudent bei Bosch Automotive Steering GmbH konnte ich ein
              Jahr lang meine Kenntnisse in der Softwareentwicklung und im
              agilen Projektmanagement vertiefen. Während meiner Zeit bei Bosch
              habe ich tiefgehende Kenntnisse in als JIRA Administrator erlangt
              und konnte so helfen Prozesse in Teams und arbeitsbereichen in
              methodische bahnen zu lenken oder bestehende Arbeitsabläufe zu
              optimieren. Ein weiteren
              Einblick in meine Leistungen und Tätigkeiten während der
              Ausbildung findet sich in meinem
              <AppLink href="/docs/bosch/arbeitszeugnis-bosch-de.pdf" label="Arbeitszeugnis" underline :scale="false" />
            </div>
          </div>

          <div class="text">
            <SplitFlapText preset="sectionFlap" :align="'center'" :texts="['[ABOUT] [BOSCH]']" />
            <div class="paragraph">
              Der Standort Schwäbisch Gmünd ist das Leitwerk des
              Unternehmensbereichs Vehicle Motion Vehicle Motion und umfasst das
              Kompetenzzentrum für Entwicklung Zentrum für Entwicklung,
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


<style lang="scss" src="assets/styles/cv.scss" scoped></style>
