<template>
  <main>
    <div id="projectLinkStart">
      <nuxt-link to="/en/resume" class="custom-link">CV</nuxt-link>
    </div>

    <div class="project-details">
      <div class="project-section"></div>
      <div class="project-header"></div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['       [LEARNINGS]        ']" />
            <div class="textStyle">
              Während meiner Zeit an der HfG arbeitete ich an
              <nuxt-link
                to="/de/project/projects"
                class="custom-link"
                style="text-decoration: underline"
                >Projekten</nuxt-link
              >
              die von Anfang an sehr praxisorientiert waren.<br />
              Ich wurde gelehrt, tief in grundlegende Fragen einzutauchen wie:
              Was lohnt sich zu entwickeln? Wie kann ich sicherstellen, dass es
              den Bedürfnissen der Nutzer entspricht? Welche Technologien sind
              notwendig und wie setze ich sie effektiv ein? Die HfG schuf eine
              inspirierende Lernumgebung, in der ich nicht nur meine Design- und
              Technikfähigkeiten aufbauen konnte, sondern auch lernte, wie ich
              sie in realen Projekten anwenden kann.
            </div>
          </div>
          <div class="imageSplit ">
            <SplitFlapText
              :texts="[
                'FIGMA   UX LEANDESIGN    ',
                'PROTOTYPING  USABILITY   ',
                '     DESIGNTHINKING      ',
                ' USER CENTERED    UI     ',
                '  FULLSTACK DEVELOPMENT  ',
              ]"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image small">
            <img src="public\img\cv\hfgbuilding.svg" alt="buildung of hfg" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['      [ABOUT] [HFG]        ']" />
            <div class="textStyle">
              Die Hochschule für Gestaltung Schwäbisch Gmünd (HfG) ist bekannt
              für ihren praxisorientierten, projektbasierten Ansatz in der
              Ausbildung von Studierenden. Sie legt großen Wert auf eine enge
              Verbindung zwischen Theorie und Praxis, was den Studierenden
              frühzeitig Einblicke in reale Arbeitsprozesse ermöglicht.
              Besonders im Fokus stehen Teamarbeit und interdisziplinäre
              Zusammenarbeit, die die Studierenden auf ein kollaboratives
              Arbeitsumfeld vorbereiten. Durch iterative Lernmethoden und einen
              starken Bezug zur Praxis lernen die Studierenden alle Schritte von
              der Konzeptentwicklung bis hin zum fertigen Prototypen kennen.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style src="assets/cv.css" scoped></style>
