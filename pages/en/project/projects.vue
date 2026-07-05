<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/en/project/jumpStar" class="custom-link">JUMPSTAR</nuxt-link>
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/en/project/goEase" class="custom-link">GOEASE</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
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
      <div class="picture">
        <img src="/img/pm/thumbnail.svg" alt="PlantMonit thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section" class="section">
        <div class="section__inner section__inner--max">
          <p class="project-intro">
            PlantMonit is a system of sensors and software for monitoring houseplants. The target
            group includes people with little time or prior knowledge. The device measures
            moisture, temperature, and light. A camera visually analyzes the plant's condition
            using artificial intelligence. All data is bundled in a digital application, where
            users receive clear recommendations to avoid care mistakes.
          </p>
          <ProjectAccordion :items="accordionItems" id-prefix="plantmonit" />
        </div>
      </section>

      <div class="project-section">
        <SplitFlapText preset="bannerFlap" :align="'center'" :texts="[
          '                         [PROJECT] [VIDEO]                          ',
        ]" />
        <div class="project-video">
          <iframe src="https://www.youtube.com/embed/bKC-N5-m5u0?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player" frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
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

<script setup>
const accordionItems = [
  {
    title: 'Core Idea',
    body:
      'The core idea of the project is an intelligent tool for monitoring plants. The solution ' +
      'automatically collects data and provides care advice. This matters because many people ' +
      'forget about plant care in their hectic everyday lives or lack the necessary knowledge. ' +
      'Incorrect care often leads to plants dying.',
  },
  {
    title: 'Users & Challenge',
    body:
      'The target group includes people with demanding jobs and numerous commitments, as well as ' +
      'the millennial generation. These people often have little time and experience in plant ' +
      'care. They usually notice diseases or incorrect watering too late. This leads to ' +
      'frustration and the loss of houseplants.',
  },
  {
    title: 'Context & User Journey',
    body:
      'The use case covers everyday plant care. A defined user journey describes the path from ' +
      'installing the application to daily use. This journey was optimized through user testing ' +
      'to ensure a seamless flow and to remove hurdles during setup early on.',
  },
  {
    title: 'User-Centered Research & Process',
    body:
      'The process began with a competitor analysis to identify potential for improvement. This ' +
      'was followed by defining a typical user group and designing the usage process in detail. ' +
      'Software development started with drafts at various levels of fidelity and resulted in a ' +
      'clickable prototype for user testing. Hardware development included a requirements ' +
      'analysis, the selection of components, and rapid prototyping using 3D printing.',
  },
  {
    title: 'Insights Shaping the Solution',
    body:
      'The findings from the market analysis flowed directly into the focus of the features. ' +
      'Testing with the clickable prototype revealed potential improvements in the user flow. ' +
      'This feedback was used to optimize the usability of the application.',
  },
  {
    title: 'Purpose, Approach & Benefits',
    body:
      'The purpose of the system is to make plant care possible with minimal time investment. It ' +
      'addresses hobby gardeners and experienced plant lovers alike. An integrated camera and ' +
      'various sensors continuously record environmental data. As a result, users receive clear ' +
      'and personalized recommendations.',
  },
  {
    title: 'Innovation',
    body:
      'The solution uses artificial intelligence for the visual analysis of plant images. This ' +
      'technology enables the early detection of pests or rot. The combination of sensor-based ' +
      'data collection and image analysis represents an innovation. Data transmission is highly ' +
      'efficient via a dedicated network interface.',
  },
  {
    title: 'Outcome & Business Value',
    body:
      'The application is expected to succeed through high usability and reliable technology. ' +
      'The target group consists of hobby gardeners and plant lovers.',
  },
  {
    title: 'Competition & USP',
    body:
      'Competitors offer solutions that still leave potential untapped. The unique selling point ' +
      'of this development is the combination of automatic sensor-based monitoring and ' +
      'image-based diagnosis. As a result, users do not need any expert knowledge of their own.',
  },
  {
    title: 'Accessibility, Responsibility & Trust',
    body:
      'The application has a highly intuitive user interface. Complex data is presented clearly. ' +
      'This lowers the barrier for people without prior knowledge of plant care.',
  },
  {
    title: 'Social & Ecological Values',
    body:
      'The product helps keep plants alive. This reduces the need for replacements and prevents ' +
      'frustration.',
  },
  {
    title: 'Additional Information',
    body:
      'The software was implemented with a modern framework and a scalable database structure. ' +
      'The hardware consists of a microcontroller and sensors for soil moisture, humidity, ' +
      'temperature, and light. The housing for these components was developed and printed ' +
      'iteratively.',
    // Existing project images — parked here for now
    images: [
      '/img/pm/problem.svg',
      '/img/pm/process.svg',
      '/img/pm/software.svg',
      '/img/pm/hardware.svg',
      '/img/pm/solution.svg',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
