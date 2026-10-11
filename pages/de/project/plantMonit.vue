<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="plantMonit" />

    <div class="project-hero">
      <div class="projectFlap">
        <SplitFlapText tag="h1" preset="detailsFlap" :align="'center'" :texts="[
          '[PLANTMONIT]',
        ]" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          'PLANTS SMART TOOL',
          'SVELTE FIGMA',
          'ESP32   WIREFRAMES',
          'FUSION360  UI  UX',
          'OPENAI   MQTT    MONGODB ',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/pm/thumbnail.svg" alt="PlantMonit Thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <p class="project-intro">
          PlantMonit macht den Pflegebedarf von Zimmerpflanzen sichtbar: Sensordaten, Kamerabilder und verständliche Hinweise in einer Anwendung. Das Team entwickelte den Software- und Hardwareprototyp im zweiten Semester über drei Monate.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="plantmonit" />
      </section>

      <div class="project-section">
        <SplitFlapText tag="h2" preset="bannerFlap" :align="'center'" :texts="[
          '                         [PROJEKT] [VIDEO]                          ',
        ]" />
        <div class="project-film">
          <VideoEmbed id="bKC-N5-m5u0" title="PlantMonit — Projektvideo" poster="/img/pm/video-poster.webp" />
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '        [KEYDATA]         ',
          '      THREE MONTHS      ',
          '    SECOND SEMESTER     ',
          '      GRADE: 1.0        ',
          '       TEAMWORK         ',
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
    body: 'Ein Gerät an der Pflanze erfasst ihre Umgebung; die App bündelt Messwerte und Pflegehinweise. So müssen Menschen mit wenig Zeit oder Pflegewissen den Zustand ihrer Zimmerpflanzen nicht allein nach Gefühl beurteilen. Sensorik und visuelle Analyse ergänzen sich im System.',
    images: [
      '/img/pm/solution.svg',
    ],
    imageAlts: [
      'Zimmerpflanze mit PlantMonit-Kamera und Sensoreinheit im Blumentopf',
    ],
    imageCaptions: [
      'Das Gerät begleitet die Pflanze direkt im Alltag.',
    ],
  },
  {
    title: 'Zielgruppe und Pflegebedarf',
    body: 'Die Gestaltung richtet sich an Menschen, die ihre Zimmerpflanzen pflegen möchten, aber im Alltag wenig Zeit oder Erfahrung dafür haben. Entscheidend ist die Verbindung zwischen einem auffälligen Zustand und der nächsten Pflegemaßnahme. Einzelne Zahlen allein beantworten diese Frage nicht.',
    images: [
      '/img/pm/problem.svg',
    ],
    imageAlts: [
      'Zimmerpflanze als Ausgangspunkt für die Frage nach ihrem Pflegebedarf',
    ],
    imageCaptions: [
      'Der Pflanzenzustand bildet den Ausgangspunkt für verständliche Pflegehinweise.',
    ],
  },
  {
    title: 'Recherche und Prototyping',
    body: 'Eine Wettbewerbsanalyse und die Definition der Nutzergruppe führten zur Gestaltung des Ablaufs von der Einrichtung bis zur täglichen Nutzung. Entwürfe in mehreren Detailstufen wurden zu einem anklickbaren Prototyp. Nutzertests lieferten Rückmeldungen zur Benutzerführung; parallel entstanden erste Hardwareaufbauten.',
  },
  {
    title: 'Software',
    body: 'Die App verbindet die Übersicht über mehrere Pflanzen mit einer Detailansicht für jede einzelne. Verläufe, Kamerabilder und Pflegehinweise stehen dadurch im selben Kontext. Die Software nutzt Svelte und MongoDB; MQTT überträgt die Daten der Hardware.',
    images: [
      '/img/pm/software.svg',
    ],
    imageAlts: [
      'PlantMonit-Oberflächen mit Pflanzenübersicht, Messwertverläufen und Kamerabild',
    ],
    imageCaptions: [
      'Von der Pflanzenübersicht zu den Messwerten und Hinweisen einer einzelnen Pflanze.',
    ],
  },
  {
    title: 'Hardware',
    body: 'Die Hardware kombiniert einen ESP32 mit Sensoren für Bodenfeuchtigkeit, Luftfeuchtigkeit, Temperatur und Licht. Bauteilauswahl und Anforderungsanalyse führten zu mehreren Prototypen. Das Gehäuse wurde schrittweise entwickelt und mit 3D-Druck umgesetzt.',
    images: [
      '/img/pm/hardware.svg',
      '/img/pm/process.svg',
    ],
    imageAlts: [
      'PlantMonit-Hardwareprototyp mit Mikrocontroller, Sensoren und Verkabelung',
      'Gehäuseentwurf für PlantMonit mit Kamera und Erdspieß',
    ],
    imageCaptions: [
      'Der offene Aufbau zeigt die technischen Komponenten.',
      'Der Gehäuseentwurf bündelt Kamera und Sensorik an der Pflanze.',
    ],
  },
  {
    title: 'Sensorik und Bildanalyse',
    body: 'Messwerte beschreiben die Umgebung der Pflanze; Kamerabilder ergänzen den sichtbaren Zustand. Die KI-basierte Auswertung erweitert diese Informationen um Pflegehinweise. Damit verbindet PlantMonit Umgebungsdaten und visuelle Auffälligkeiten, statt eine einzelne Messgröße isoliert zu betrachten.',
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
