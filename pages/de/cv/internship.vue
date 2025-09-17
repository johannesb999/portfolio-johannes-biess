<template>
  <main>
    <div class="background"></div>

    <div id="projectLinkBefore">
      <nuxt-link to="/de/resume" class="custom-link">RESUME</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        'UX DESIGN',
        'WIREFRAMING',
        'KUNDENKOTAKT',
        ' Konzept Entwicklung',
        'ITERATIVES ARBEITEN',
      ]" />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="/img/cv/musecase2.png" alt="Picture of me in front of goldengate bridge" />
      </div>
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['[WAS] [ICH] [GELERNT] [HABE]']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              In meinem Praktikum habe ich ein sehr viel tieferes Verständnis für Design-Tools wie Figma erlangt. Ich
              habe gelernt, Design-Systeme nicht nur zu verstehen, sondern auch selbst zu erstellen und effizient zu
              nutzen. Gleichzeitig habe ich ein klareres Verständnis für die Arbeitsweise von UX/UI-Designern entwickelt
              und gelernt, wie man durch das Analysieren von User Flows und Best Practices die Usability eines Produktes
              signifikant verbessert. Neben diesen fachlichen Kompetenzen war es besonders wichtig, den professionellen
              Umgang mit Kunden zu lernen—ihre Bedürfnisse zu erfassen, Erwartungen zu managen und konstruktives
              Feedback entgegenzunehmen. Hier mein detaillierter
              <NuxtLink to="/docs/internship/praxissemester-bericht-johannes-biess-d.pdf" target="_blank" rel="noopener"
                class="custom-link" style="text-decoration: underline">Bericht und meine Learnings</NuxtLink>.
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['[PRAKTIKUM] [BEI] [MUSECASE]']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              In einer Agentur zu arbeiten war für mich eine interessante und vor allem neue Erfahrung. Design-Methoden,
              denen im Studium sehr viel weniger Zeit gewidmet wird, sind plötzlich richtig sinnvoll und man muss auf
              Details achten, die im Studium keine Rolle spielten. Das Praktikum und vor allem die Mitarbeiter bei
              muse case haben mir gezeigt, wie in einem professionellen Umfeld Arbeit sinnvoll strukturiert und
              aufgeteilt wird. Dabei wurde mir klar, wie essenziell eine klare Kommunikation innerhalb des Teams für den
              Erfolg eines Projektes ist. Ich habe gelernt, mich aktiv in die Teamarbeit einzubringen, Verantwortung zu
              übernehmen und aus Fehlern zu lernen, um den Arbeitsfluss kontinuierlich zu optimieren. Was muse case über
              mich sagt findest du in meinem:
              <NuxtLink to="/docs/internship/praxissemester-zeugnis-johannes-biess-d.pdf" target="_blank" rel="noopener"
                class="custom-link" style="text-decoration: underline">Arbeitszeugnis</NuxtLink>.
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
