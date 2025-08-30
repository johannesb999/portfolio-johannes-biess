<template>
  <main>
    <div class="background"></div>

    <div id="projectLinkNext">
      <nuxt-link to="/de/resume" class="custom-link">RESUME</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          'FIGMA    DESIGNTHINKING  ',
          'PROTOTYPING     ITERATIV ',
          '  BENUTZERFREUNDLICHKEIT ',
          ' NUTZERZENTRIERT  UI  UX ',
          '  FULLSTACK ENTWICKLUNG  ',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img
          src="public\img\cv\hfgbuilding.svg"
          alt="Picture of HFG Building"
        />
      </div>
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [LEARNINGS]         ']" />
            <div class="paragraph">
              Während meiner Zeit an der HfG arbeitete ich an
              <NuxtLink
                to="/de/project/projects"
                class="custom-link"
                style="text-decoration: underline"
                >Projekten</NuxtLink
              >
              die von Anfang an sehr praxisorientiert waren. Ich wurde gelehrt,
              tief in grundlegende Fragen einzutauchen wie: Was lohnt sich zu
              entwickeln? Wie kann ich sicherstellen, dass es den Bedürfnissen
              der Nutzer entspricht? Welche Technologien sind notwendig und wie
              setze ich sie effektiv ein? Die HfG schuf eine inspirierende
              Lernumgebung, in der ich nicht nur meine Design- und
              Technikfähigkeiten aufbauen konnte, sondern auch lernte, wie ich
              sie in realen Projekten anwenden kann. Wie ich mich dabei
              geschlagen habe in meiner
              <a
                href="/docs/Leistungsbescheinigung.pdf"
                download="Leistungsbescheinigung.pdf"
                class="custom-link"
                style="text-decoration: underline"
                >Leistungsbescheinigung.pdf</a
              >.
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['          [ABOUT] [HFG]        ']" />
            <div class="paragraph">
              Die
              <nuxt-link
                to="https://www.hfg-gmuend.de/studium/digital-product-design-and-development"
                class="custom-link"
                style="text-decoration: underline"
                target="_blank"
                >Hochschule für Gestaltung Schwäbisch Gmünd.</nuxt-link
              >
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
              <a
                href="/docs/moduleManual.pdf"
                download="Modulhandbuch.pdf"
                class="custom-link"
                style="text-decoration: underline"
                >Modulhandbuch.pdf</a
              >.
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
