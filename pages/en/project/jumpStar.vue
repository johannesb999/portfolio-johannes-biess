<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/en/project/simpleChat" class="custom-link">SIMPLECHAT</nuxt-link>
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/en/project/projects" class="custom-link">PLANTMONIT</nuxt-link>
    </div>
    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="['         [JUMPSTAR]         ']" />
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        '  WEB DEPLOYMENT PIPELINE ',
        'THREEJS     SERVERHOSTING ',
        '      DOCKER   SVELTE     ',
        ' CLOUDFLARE      PORTAINER',
        'MONGOOSE    GITHUB ACTIONS',
      ]" />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="/img/js/thumbnail.svg" alt="JumpStar thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section" class="section">
        <div class="section__inner section__inner--max">
          <ProjectAccordion :items="accordionItems" id-prefix="jumpstar" />
        </div>
      </section>

      <a href="https://starsapp.johannes-biess.com/" target="_blank" rel="noopener noreferrer"
        class="tryOutLink custom-link">TRY IT OUT LIVE</a>

      <div class="project-section" style="padding-top: 2rem">
        <SplitFlapText preset="bannerFlap" :align="'center'" :texts="[
          '                       [PROJECT] [VIDEO]                       ',
        ]" />
        <div class="project-video">
          <iframe src="https://www.youtube.com/embed/5N_OzRcDetc?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player" frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
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

<script setup>
const accordionItems = [
  {
    title: 'Idea',
    body:
      'The course asked to do something with stars. A link to a CSV file containing around ' +
      '340,000 stars and their data was provided. The focus of the course was more on learning ' +
      'the deployment pipeline than on developing unique content. Despite this, my intention was ' +
      "to create a website that doesn't already exist in this form. Many people believe that the " +
      'constellation of the stars at the time of their birth has special significance for their ' +
      'lives. This belief influences choices and attitudes in everyday life, from horoscopes to ' +
      'astrological predictions. The website was designed to demonstrate, in a fun way, that ' +
      'constellations are simply random groupings of celestial bodies that appear coherent due ' +
      'to perspective. The goal was to offer a new perspective on the universe and to highlight ' +
      'that the supposed meanings of the constellations are just fiction.',
    images: ['/img/js/js.png'],
  },
  {
    title: 'Process',
    body:
      'The project began with a discussion on how to portray the stars. A decision was quickly ' +
      'made to add a fun element by simulating a spaceship flying through space. This approach ' +
      'allows the stars and constellations to be seen from different angles, making it easier to ' +
      'understand the randomness of their arrangements. Following feedback discussions, the idea ' +
      'of displaying scientific data was set aside to focus more on the visual experience. As ' +
      'movement through space occurs, the lines connecting the stars begin to distort, making it ' +
      'harder to recognize constellations. This realization shows that even a slight shift in ' +
      'perspective is enough to disrupt these supposed constellations. To enhance immersion, a ' +
      'sleek, unobtrusive design was chosen for the navigation tools, blending them with the ' +
      'background without distracting from the visual focus on the stars.',
    images: ['/img/js/Process.svg'],
  },
  {
    title: 'Implementation',
    body:
      'The result is an interactive website that allows exploration of space in an engaging way. ' +
      'Stars and constellations can be viewed from different perspectives with the aid of a ' +
      'simulated spaceship. My intention is to demonstrate that constellations are merely a ' +
      'matter of perspective. Subtle animations illustrate how even small changes in viewing ' +
      'angles can make the constellations appear less ordered. Users can see firsthand how ' +
      'random the arrangement of celestial bodies really is through their own discovery and ' +
      'experience rather than direct instruction. The website is built using the Svelte ' +
      'framework, with THREE.js managing the 3D environment. Star data is stored in a MongoDB ' +
      'database, hosted on a personal server along with the backend. Docker and Portainer are ' +
      'used to manage the infrastructure, and GitHub Actions provides an almost automated ' +
      'deployment pipeline, facilitating easy application deployment.',
    images: ['/img/js/Implementaion.svg'],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
