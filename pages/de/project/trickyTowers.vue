<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="trickyTowers" />

    <div class="project-hero">
      <div class="projectFlap">
        <SplitFlapText tag="h1" preset="detailsFlap" :align="'center'" :texts="[
          '      [TRICKYTOWERS]       ',
        ]" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          '   INTERACTIVE WINDOW    ',
          'HTML   CSS  JAVASCRIPT   ',
          '  FIGMA        WEBCAM    ',
          ' GOOGLE MEDIA PIPE       ',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/tt/tt (1).svg" alt="TrickyTowers Thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <p class="project-intro">
          TrickyTowers verwandelt das Schaufenster der Hochschule in ein gestengesteuertes Turmbauspiel. Die interaktive Installation entstand als einwöchiges Teamprojekt im zweiten Semester.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="trickytowers" />
      </section>

      <AppLink class="tryOutLink" href="https://tricky.johannes-biess.com/" label="LIVE AUSPROBIEREN" size="xxxxl" weight="bold" underline />

      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'ONE WEEK',
          'SECOND SEMESTER',
          'GRADE: 1.0',
          'TEAMWORK',
        ]" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const accordionItems = [
  {
    title: 'Die Lösung',
    alwaysOpen: true,
    body: 'Eine Webcam erkennt Handbewegungen und startet das Spiel. Die Spielenden stapeln fallende Bausteine zu einem möglichst hohen Turm. Eine Physik-Engine macht Balance und Geschick zum Kern der Interaktion; das Hochschulfenster wird zur Spielfläche.',
    images: [
      '/img/tt/solution.svg',
    ],
    imageAlts: [
      'TrickyTowers-Konzept für das interaktive Schaufenster der Hochschule',
    ],
    imageCaptions: [
      'Das Spiel verbindet die Hochschule mit einer direkten Einladung zur Interaktion.',
    ],
  },
  {
    title: 'Vom Vorbeigehen zum Mitspielen',
    body: 'Die Aufgabe war, die Hochschule im öffentlichen Raum sichtbarer zu machen. Das Konzept setzt auf Beteiligung statt auf das passive Ansehen eines Videos. Eine Handbewegung genügt zum Einstieg und macht die Verbindung von Technologie und Design unmittelbar erlebbar.',
    images: [
      '/img/tt/idea.svg',
    ],
    imageAlts: [
      'Hochschulgebäude mit Schaufenstern als Ort der interaktiven Installation',
    ],
    imageCaptions: [
      'Das Schaufenster ist die Schnittstelle zur Öffentlichkeit.',
    ],
  },
  {
    title: 'Gestaltung und technische Umsetzung',
    body: 'Brainstorming und Recherche führten zur Auswahl einer einfachen Spielidee und einer Bedienung ohne zusätzliche Eingabegeräte. Die Web-App verbindet HTML, CSS und JavaScript mit Google MediaPipe. Webcam, Projektionsfläche und Rückprojektor bilden den räumlichen Aufbau.',
    images: [
      '/img/tt/process.svg',
    ],
    imageAlts: [
      'TrickyTowers-Spieloberfläche mit fallenden Bausteinen und Höhenanzeige',
    ],
    imageCaptions: [
      'Ein verständliches Ziel: Bausteine balancieren und den Turm wachsen lassen.',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
