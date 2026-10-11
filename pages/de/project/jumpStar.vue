<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="jumpStar" />
    <div class="project-hero">
      <div class="projectFlap">
        <SplitFlapText tag="h1" preset="detailsFlap" :align="'center'" :texts="[
          '        [JUMPSTAR]          ',
        ]" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          '  WEB DEPLOYMENT PIPELINE ',
          'THREEJS     SERVERHOSTING ',
          '      DOCKER   SVELTE     ',
          ' CLOUDFLARE      PORTAINER',
          'MONGOOSE    GITHUB ACTIONS',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/js/thumbnail.svg" alt="JumpStar Thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <p class="project-intro">
          JumpStar ist eine interaktive 3D-Reise durch Sternendaten. Die Webanwendung entstand in einem zweimonatigen Teamprojekt im dritten Semester; der Kurs verband die Datenvisualisierung mit einer eigenen Deployment-Pipeline.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="jumpstar" />
      </section>

      <AppLink class="tryOutLink" href="https://starsapp.johannes-biess.com/" label="LIVE AUSPROBIEREN" size="xxxxl" weight="bold" underline />

      <div class="project-section">
        <div class="project-film">
          <VideoEmbed id="5N_OzRcDetc" title="JumpStar — Projektvideo" poster="/img/js/video-poster.webp" />
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'TWO MONTHS',
          'THIRD SEMESTER',
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
    body: 'Ein simuliertes Raumschiff führt durch eine räumliche Sternenkarte. Beim Perspektivwechsel verändern sich die Linien zwischen den Sternen: Bekannte Sternbilder lösen sich auf. Die Anwendung macht sichtbar, wie stark ihre Form vom Blickpunkt abhängt.',
    images: [
      '/img/js/Implementaion.svg',
    ],
    imageAlts: [
      'JumpStar-Webanwendung mit räumlicher Sternenkarte und zurückhaltenden Bedienelementen',
    ],
    imageCaptions: [
      'Die räumliche Reise macht den Perspektivwechsel selbst zum Inhalt.',
    ],
  },
  {
    title: 'Visuelles Erleben vor Datenfülle',
    body: 'Ausgangspunkt war eine CSV-Datei mit etwa 340.000 Sternendatensätzen und die offene Aufgabe, etwas mit Sternen zu entwickeln. Nach Feedbackgesprächen rückte die ausführliche Datenanzeige in den Hintergrund. Die Reise, die Sternbildlinien und eine unauffällige Navigation konzentrieren den Blick auf das räumliche Erleben.',
    images: [
      '/img/js/Process.svg',
      '/img/js/js.png',
    ],
    imageAlts: [
      'JumpStar-Designentwürfe mit Sternenkarten und unterschiedlichen Ansichten',
      'JumpStar-Projektansicht zur visuellen Sternenreise',
    ],
    imageCaptions: [
      'Entwürfe vergleichen die Darstellung von Daten und räumlicher Bewegung.',
      'Die Sternenreise steht im Mittelpunkt der Gestaltung.',
    ],
  },
  {
    title: 'Vom Browser bis zum eigenen Server',
    body: 'Svelte bildet die Oberfläche, Three.js die 3D-Umgebung. Die Sternendaten liegen in MongoDB; Backend und Datenbank laufen auf einem eigenen Server. Docker und Portainer verwalten die Infrastruktur, GitHub Actions übernimmt die weitgehend automatisierte Bereitstellung.',
    points: [
      '3D-Darstellung im Browser.',
      'Datenhaltung und Backend auf eigener Infrastruktur.',
      'Ein durchgängiger Weg von Codeänderungen zur veröffentlichten Anwendung.',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
