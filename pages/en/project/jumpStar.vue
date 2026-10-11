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
        <SplitFlapText tag="h1" preset="detailsFlap" :align="'center'" :texts="['         [JUMPSTAR]         ']" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          '  WEB DEPLOYMENT PIPELINE ',
          'THREEJS     SERVERHOSTING ',
          '      DOCKER   SVELTE     ',
          ' CLOUDFLARE      PORTAINER',
          'MONGOOSE    GITHUB ACTIONS',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/js/thumbnail.svg" alt="JumpStar thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <p class="project-intro">
          JumpStar is an interactive 3D journey through star data. The web application was developed in a two-month team project during the third semester, combining data visualisation with a deployment pipeline.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="jumpstar" />
      </section>

      <AppLink class="tryOutLink" href="https://starsapp.johannes-biess.com/" label="TRY IT OUT LIVE" size="xxxxl" weight="bold" underline />

      <div class="project-section">
        <SplitFlapText tag="h2" preset="bannerFlap" :align="'center'" :texts="[
          '                       [PROJECT] [VIDEO]                       ',
        ]" />
        <div class="project-film">
          <VideoEmbed id="5N_OzRcDetc" title="JumpStar — project video" poster="/img/js/video-poster.webp" />
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
    title: 'The solution',
    alwaysOpen: true,
    body: 'A simulated spaceship travels through a spatial star map. As the viewpoint changes, the lines between stars shift and familiar constellations lose their shape. The application makes their dependence on perspective visible.',
    images: [
      '/img/js/Implementaion.svg',
    ],
    imageAlts: [
      'JumpStar web application with a spatial star map and unobtrusive controls',
    ],
    imageCaptions: [
      'The spatial journey makes the change in perspective the subject of the experience.',
    ],
  },
  {
    title: 'Visual experience before data density',
    body: 'The starting point was a CSV file with around 340,000 star records and an open brief to create something with stars. Following feedback discussions, detailed data displays became secondary. The journey, constellation lines and unobtrusive navigation focus attention on the spatial experience.',
    images: [
      '/img/js/Process.svg',
      '/img/js/js.png',
    ],
    imageAlts: [
      'JumpStar design drafts showing star maps and different views',
      'JumpStar project view of the visual journey through stars',
    ],
    imageCaptions: [
      'The designs explore data displays and spatial movement.',
      'The journey through the stars is the focus of the design.',
    ],
  },
  {
    title: 'From the browser to a personal server',
    body: 'Svelte provides the interface and Three.js the 3D environment. Star data is stored in MongoDB, with the backend and database hosted on a personal server. Docker and Portainer manage the infrastructure; GitHub Actions handles the largely automated deployment.',
    points: [
      '3D rendering in the browser.',
      'Data storage and backend on dedicated infrastructure.',
      'A continuous path from code changes to the published application.',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
