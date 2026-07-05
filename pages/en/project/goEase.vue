<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>
    <div id="projectLinkNext">
      <nuxt-link to="/en/project/projects" class="custom-link">PLANTMONIT</nuxt-link>
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/en/project/trickyTowers" class="custom-link">TRICKYTOWERS</nuxt-link>
    </div>
    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="['          [GOEASE]          ']" />
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        '       SMART SYSTEM       ',
        '  REACT NATIVE      GPS   ',
        '     ESP32   ANDROIDSDK   ',
        ' BLE     OPENMAPBOX       ',
      ]" />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="/img/ge/thumbnail.svg" alt="GoEase thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section" class="section">
        <div class="section__inner section__inner--max">
          <p class="project-intro">
            GoEase is a system for automating ticket purchases in public bus transport. The
            solution connects small physical transmitters in the vehicles with a digital
            application on the mobile phone. After a one-time setup, the system records journeys
            in the background.
          </p>
          <ProjectAccordion :items="accordionItems" id-prefix="goease" />
        </div>
      </section>

      <div class="project-section">
        <SplitFlapText preset="bannerFlap" :align="'center'" :texts="[
          '                       [PROJECT] [VIDEO]                        ',
        ]" />
        <div class="project-video">
          <iframe src="https://www.youtube.com/embed/_YpyL8_qQfw?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player" frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
            allowfullscreen></iframe>
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

<script setup>
const accordionItems = [
  {
    title: 'Core Idea',
    body:
      'The core idea is the complete automation of ticket recording through locatable ' +
      'transmitters. This is essential because confusing fare structures and broken ticket ' +
      'machines often present insurmountable barriers to the spontaneous use of public transport.',
  },
  {
    title: 'Users & Challenge',
    body:
      'The primary users are occasional riders of public transport. They find themselves in ' +
      'situations where taking the car is not an option at short notice. Their biggest challenge ' +
      'is being unfamiliar with local fares and the complex operation of the various ticket machines.',
  },
  {
    title: 'Context & User Journey',
    body:
      'The context is the spontaneous use of buses in urban areas. A defined user journey exists ' +
      'and was shortened through automation. After a one-time account setup, journey tracking and ' +
      'payment happen entirely in the background without any further active input.',
  },
  {
    title: 'User-Centered Research & Process',
    body:
      'The process began with extensive ideation and the definition of a minimum viable product. ' +
      'Software development started with digital drafts and resulted in a cross-platform ' +
      'application. Repeated user tests supported continuous improvement.',
  },
  {
    title: 'Insights Shaping the Solution',
    body:
      'The findings from the initial concept phase showed that an overly versatile system ' +
      'distracts from the core problem. This led to narrowing the scope down to automatic ticket ' +
      'recording on buses. Feedback from user tests then flowed directly into simplifying the setup process.',
  },
  {
    title: 'Purpose, Approach & Benefits',
    body:
      'The purpose of the solution is to remove access barriers in public transport. The approach ' +
      'uses low-cost transmitters in buses to communicate with mobile phones. The benefit for ' +
      'users lies in automatic route tracking and the autonomous calculation of fares.',
  },
  {
    title: 'Innovation',
    body:
      'The technology combines microcontrollers with local radio technology and satellite-based ' +
      'positioning. The added value comes from eliminating manual input when buying tickets. The ' +
      'application automatically calculates the amounts due based on the distance actually traveled.',
  },
  {
    title: 'Outcome & Business Value',
    body:
      'The target group includes all potential passengers of public transport. The solution is ' +
      'expected to succeed through a very low entry barrier for users and the easy retrofitting ' +
      'of the transmitter modules in buses. A concrete business model is not further defined.',
  },
  {
    title: 'Competition & USP',
    body:
      'The main competitors are the existing digital offerings of individual transport ' +
      'associations as well as classic ticket machines. The unique selling point is the ' +
      'elimination of active user input when buying tickets, enabled by a cross-network technical ' +
      'solution installed in the buses.',
  },
  {
    title: 'Accessibility, Responsibility & Trust',
    body:
      'Automating the ticket purchase reduces cognitive barriers in choosing the right fare. The ' +
      'application allows users to view the running costs at any time during the journey. This ' +
      'creates transparency and gives full control over the amounts charged.',
  },
  {
    title: 'Social & Planetary Values',
    body:
      'Easy access to public transport can help reduce motorized individual traffic. In the long ' +
      'term, this conserves material resources and promotes environmentally friendly mobility. ' +
      'The entry barrier is lowered for all population groups.',
  },
  {
    title: 'Additional Information',
    body:
      'The required hardware components were specifically designed for easy installation. The ' +
      '3D-printed plastic housings feature special mounting straps. These allow quick, tool-free ' +
      'installation on the handrails of existing buses.',
    // Existing project images — parked here for now
    images: [
      '/img/ge/problem.svg',
      '/img/ge/process.svg',
      '/img/ge/softwareProcess.svg',
      '/img/ge/hardwareProcess.svg',
      '/img/ge/solution.svg',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
