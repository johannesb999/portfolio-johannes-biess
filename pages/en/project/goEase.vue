<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>
    <ProjectNav current="goEase" />
    <div class="project-hero">
      <div class="projectFlap">
        <SplitFlapText tag="h1" preset="detailsFlap" :align="'center'" :texts="['          [GOEASE]          ']" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          '       SMART SYSTEM       ',
          '  REACT NATIVE      GPS   ',
          '     ESP32   ANDROIDSDK   ',
          ' BLE     OPENMAPBOX       ',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/ge/thumbnail.svg" alt="GoEase thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <p class="project-intro">
          GoEase simplifies bus ticketing through automatic journey tracking. The software and hardware prototype was developed as a third-semester team project over two months.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="goease" />
      </section>

      <div class="project-section">
        <div class="project-film">
          <VideoEmbed id="_YpyL8_qQfw" title="GoEase — project video" poster="/img/ge/video-poster.webp" />
        </div>
        <div class="projectDetailsFlap">
          <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
            '[KEYDATA]',
            'TWO MONTHS',
            'THIRD SEMESTER',
            'GRADE: 1.3',
            'TEAMWORK',
          ]" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const accordionItems = [
  {
    title: 'The solution',
    alwaysOpen: true,
    body: 'Small transmitters on the bus communicate with the smartphone. After setup, GoEase records the journey in the background and shows the route and cost in the app. Passengers no longer need to choose the right fare before each trip. Automatic billing is part of the system concept.',
    images: [
      '/img/ge/solution.svg',
    ],
    imageAlts: [
      'GoEase app showing a current bus journey on a map and a completed journey summary',
    ],
    imageCaptions: [
      'The interface connects the current journey with a clear cost overview.',
    ],
  },
  {
    title: 'Making the first journey easier',
    body: 'The focus is on occasional passengers who are unfamiliar with local fares and ticket machines. Buying a ticket becomes an extra task when taking a bus at short notice. GoEase moves that decision into journey tracking and keeps the information together in one app.',
    images: [
      '/img/ge/problem.svg',
    ],
    imageAlts: [
      'Illustration of the starting situation when buying a public transport ticket',
    ],
    imageCaptions: [
      'The starting point is choosing a fare before a spontaneous journey.',
    ],
  },
  {
    title: 'Narrowing the scope to buses',
    body: 'The initial concept covered a more versatile system. The key decision was to concentrate on automatic ticket recording on buses. This produced a clear core journey: set up once, board, follow the trip and review the cost.',
    images: [
      '/img/ge/process.svg',
    ],
    imageAlts: [
      'GoEase concept documents with sketched workflows and system components',
    ],
    imageCaptions: [
      'The concept phase led to a narrower, achievable project scope.',
    ],
  },
  {
    title: 'Simplifying the app through iteration',
    body: 'Digital designs led to a cross-platform application built with React Native. Repeated user tests informed a simpler setup process. The journey view shows the current route; the summary makes the start, destination and amount easy to review.',
    images: [
      '/img/ge/softwareProcess.svg',
    ],
    imageAlts: [
      'Three GoEase interfaces from an early design to a detailed map view',
    ],
    imageCaptions: [
      'The interface developed from initial screens into a focused journey view.',
    ],
  },
  {
    title: 'Hardware for existing buses',
    body: 'ESP32, Bluetooth Low Energy and GPS form the technical building blocks. The transmitters use custom 3D-printed housings. Mounting straps allow tool-free attachment to handrails in existing buses.',
    images: [
      '/img/ge/hardwareProcess.svg',
    ],
    imageAlts: [
      'GoEase transmitter housing with a mounting strap beside a bus model',
    ],
    imageCaptions: [
      'The transmitter housing is designed for retrofitting on a bus.',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
