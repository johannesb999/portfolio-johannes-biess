<template>
  <main>
    <div class="background"></div>

    <EdgeLink position="right" fixed to="/de/resume" label="RESUME" />

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        'FIGMA    DESIGNTHINKING  ',
        'PROTOTYPING     ITERATIV ',
        '  BENUTZERFREUNDLICHKEIT ',
        ' NUTZERZENTRIERT  UI  UX ',
        '  FULLSTACK ENTWICKLUNG  ',
      ]" />
    </div>

    <div class="wrapper">
      <img src="/img/cv/hfgbuilding.svg" alt="Picture of HFG Building" />
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [LEARNINGS]         ']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              Während meiner Zeit an der HfG arbeitete ich an
              <AppLink :to="projectsPath" label="Projekten" underline :scale="false" />
              die von Anfang an sehr praxisorientiert waren. Ich wurde gelehrt,
              tief in grundlegende Fragen einzutauchen wie: Was lohnt sich zu
              entwickeln? Wie kann ich sicherstellen, dass es den Bedürfnissen
              der Nutzer entspricht? Welche Technologien sind notwendig und wie
              setze ich sie effektiv ein? Die HfG schuf eine inspirierende
              Lernumgebung, in der ich nicht nur meine Design- und
              Technikfähigkeiten aufbauen konnte, sondern auch lernte, wie ich
              sie in realen Projekten anwenden kann. Wie ich mich dabei
              geschlagen habe hier in meiner
              <AppLink href="/docs/hfg/leistungsbescheinigung-de.pdf" label="Leistungsbescheinigung" underline :scale="false" />.
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['          [ABOUT] [HFG]        ']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              Die
              <AppLink href="https://www.hfg-gmuend.de/studium/digital-product-design-and-development" label="Hochschule für Gestaltung Schwäbisch Gmünd." underline :scale="false" />
              (HfG) ist bekannt für ihren praxisorientierten, projektbasierten
              Ansatz in der Ausbildung von Studierenden. Sie legt großen Wert
              auf eine enge Verbindung zwischen Theorie und Praxis, was den
              Studierenden frühzeitig Einblicke in reale Arbeitsprozesse
              ermöglicht. Besonders im Fokus stehen Teamarbeit und
              interdisziplinäre Zusammenarbeit, die die Studierenden auf ein
              kollaboratives Arbeitsumfeld vorbereiten. Durch iterative
              Lernmethoden und einen starken Bezug zur Praxis lernen die
              Studierenden alle Schritte von der Konzeptentwicklung bis hin zum
              fertigen Prototypen kennen. Für mehr Informationen
              <AppLink href="/docs/hfg/module-manual-en.pdf" label="Modulhandbuch" underline :scale="false" />.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// Ziel richtet sich danach, ob die Projektseiten freigeschaltet sind
const projectsPath = useProjectsEntry();
</script>


<style lang="scss" src="assets/styles/cv.scss" scoped></style>
