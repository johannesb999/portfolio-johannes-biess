<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>
    <ProjectNav current="drawingLight" />

    <div class="project-hero">
      <div class="projectFlap">
        <SplitFlapText tag="h1" preset="detailsFlap" :align="'center'" :texts="[
          '      [DRAWINGLIGHT]      ',
        ]" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          '      MECHATRONIK      ',
          'TEAMWORK   PHOTOGRAPHIE ',
          '    ARDUINO   FUSION360 ',
          '      LICHTMALEREI      ',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/dl/thumbnail.svg" alt="DrawingLight Thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <p class="project-intro">
          DrawingLight übersetzt eine Handbewegung in eine mechanisch gezeichnete Lichtspur. Das gebaute Experiment verbindet Gestentracking, Schrittmotoren und Langzeitbelichtung und entstand als einwöchiges Teamprojekt im zweiten Semester.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="drawinglight" />
      </section>

      <div class="project-section">
        <div class="project-film">
          <VideoEmbed id="k3CHPyc4J4M" title="DrawingLight — Projektvideo" poster="/img/dl/video-poster.webp" />
        </div>
      </div>

      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          '1 WEEK',
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
    body: 'Eine Webcam zeichnet eine Figur auf, die mit der Hand in die Luft gemalt wird. Anschließend bewegt die Maschine eine farbige Lichtquelle entlang dieser Bahn. Eine Kamera hält die Bewegung als Langzeitbelichtung fest: Aus einer flüchtigen Geste wird eine sichtbare Zeichnung.',
    images: [
      '/img/dl/implementation.svg',
    ],
    imageAlts: [
      'DrawingLight-Aufbau mit gestikulierender Hand, Laptop und Lichtquelle zwischen zwei Stativen',
    ],
    imageCaptions: [
      'Der gebaute Aufbau verbindet die aufgezeichnete Geste mit der mechanischen Bewegung.',
    ],
  },
  {
    title: 'Die Hand als Zeichenwerkzeug',
    body: 'Die Aufgabe war ein mechanischer Zeichenapparat für Linien und Formen. Die Idee der Lichtmalerei entstand aus dem Interesse an Fotografie. Als Eingabe wurden Tablet, Maus und Handtracking verglichen. Die Entscheidung fiel auf Gestenerkennung mit Google MediaPipe über die Laptop-Webcam.',
    images: [
      '/img/dl/process.svg',
    ],
    imageAlts: [
      'DrawingLight-Konzeptentwurf für die Eingabe von Linien und Formen',
    ],
    imageCaptions: [
      'Die Eingabe wurde als eigener Teil des Zeichenprozesses untersucht.',
    ],
  },
  {
    title: 'Mechanik mit zwei Schrittmotoren',
    body: 'Die Streuung der Lichtquelle erforderte einen größeren Aufbau für erkennbare Details. Zwei Schrittmotoren auf Stativen bewegen die Lichtquelle durch Auf- und Abwickeln einer Schnur. Angepasste Rollen wurden in Fusion 360 modelliert. Die Seilmechanik ersetzt ein aufwendiges Schienensystem.',
    points: [
      'Node.js verarbeitet die mit MediaPipe erfassten Handkoordinaten.',
      'Ein NeoPixel liefert das farbige Licht; ein Joystick steuert die Farbe.',
    ],
    images: [
      '/img/dl/idea.svg',
    ],
    imageAlts: [
      'Rechercheansicht zu mechanischen Zeichengeräten auf einem Laptop',
    ],
    imageCaptions: [
      'Mechanische Zeichengeräte bildeten einen Ausgangspunkt für die eigene Konstruktion.',
    ],
  },
  {
    title: 'Von zehn Sekunden Geste zum Lichtbild',
    body: 'Die Handbewegung wird zehn Sekunden lang aufgenommen. Die Maschine zeichnet sie anschließend innerhalb von 30 Sekunden nach, während die Kamera belichtet. Die entstandenen Lichtbilder zeigen den Zusammenhang zwischen Eingabebewegung, mechanischer Bahn und Farbwechsel.',
    images: [
      '/img/dl/dl5.svg',
      '/img/dl/dl6.svg',
      '/img/dl/dl7.svg',
      '/img/dl/dl12.svg',
    ],
    imageAlts: [
      'Mehrfarbige, frei verlaufende Lichtspuren vor schwarzem Hintergrund',
      'Sich kreuzende Lichtspuren in Rot, Grün und Blau',
      'Zwei eckige Lichtfiguren in Orange und Weißblau',
      'Weiße Lichtspur mit einer rechteckigen Form und anschließendem Zickzack',
    ],
    imageCaptions: [
      'Freie Bewegung mit Farbwechseln.',
      'Überlagerte Bahnen in unterschiedlichen Farben.',
      'Eckige Figuren als Lichtspur.',
      'Eine zusammenhängende Bahn aus Rechteck und Zickzack.',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
