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
          'PLANTS  SMART TOOL',
          'SVELTE FIGMA',
          'ESP32   WIREFRAMES',
          'FUSION360  UI  UX',
          'OPENAI   MQTT    MONGODB ',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/pm/thumbnail.svg" alt="PlantMonit thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <p class="project-intro">
          PlantMonit makes houseplant care needs visible through sensor data, camera images and clear advice in one application. The team developed the software and hardware prototype during the second semester over three months.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="plantmonit" />
      </section>

      <div class="project-section">
        <SplitFlapText tag="h2" preset="bannerFlap" :align="'center'" :texts="[
          '                         [PROJECT] [VIDEO]                          ',
        ]" />
        <div class="project-film">
          <VideoEmbed id="bKC-N5-m5u0" title="PlantMonit — project video" poster="/img/pm/video-poster.webp" />
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'THREE MONTHS',
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
    title: 'The solution',
    alwaysOpen: true,
    body: 'A device next to the plant records its environment; the app brings measurements and care advice together. People with little time or plant care experience no longer have to judge their houseplants by intuition alone. Sensors and visual analysis complement each other within the system.',
    images: [
      '/img/pm/solution.svg',
    ],
    imageAlts: [
      'Houseplant with a PlantMonit camera and sensor unit in its pot',
    ],
    imageCaptions: [
      'The device stays with the plant in everyday use.',
    ],
  },
  {
    title: 'Users and care needs',
    body: 'The design focuses on people who want to look after their houseplants but have little time or experience. The important connection is between a noticeable condition and the next care action. Measurements on their own do not answer that question.',
    images: [
      '/img/pm/problem.svg',
    ],
    imageAlts: [
      'Houseplant illustrating the starting question about its care needs',
    ],
    imageCaptions: [
      'The condition of the plant is the starting point for clear care advice.',
    ],
  },
  {
    title: 'Research and prototyping',
    body: 'Competitor analysis and a defined user group informed the journey from setup to daily use. Designs at several levels of detail became a clickable prototype. User tests provided feedback on the interface flow, while early hardware prototypes were developed in parallel.',
  },
  {
    title: 'Software',
    body: 'The app connects an overview of several plants with a detailed view of each one. Trends, camera images and care advice share the same context. The software uses Svelte and MongoDB; MQTT carries data from the hardware.',
    images: [
      '/img/pm/software.svg',
    ],
    imageAlts: [
      'PlantMonit interfaces showing a plant overview, measurement trends and a camera image',
    ],
    imageCaptions: [
      'From the plant overview to the measurements and advice for an individual plant.',
    ],
  },
  {
    title: 'Hardware',
    body: 'The hardware combines an ESP32 with sensors for soil moisture, humidity, temperature and light. Component selection and requirements analysis led to several prototypes. The housing was developed iteratively and produced using 3D printing.',
    images: [
      '/img/pm/hardware.svg',
      '/img/pm/process.svg',
    ],
    imageAlts: [
      'PlantMonit hardware prototype with microcontroller, sensors and wiring',
      'PlantMonit housing design with a camera and soil spike',
    ],
    imageCaptions: [
      'The open prototype shows the technical components.',
      'The housing design brings the camera and sensors together at the plant.',
    ],
  },
  {
    title: 'Sensors and image analysis',
    body: 'Measurements describe the environment around the plant; camera images add its visible condition. AI-based analysis expands that information into care advice. PlantMonit connects environmental data with visible changes rather than relying on one measurement in isolation.',
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
