<template>
  <main class="project--beacon">
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="beacon" />

    <div class="project-hero">
      <div class="projectFlap">
        <SplitFlapText tag="h1" preset="detailsFlap" :align="'center'" :texts="[
          '[BEACON]',
        ]" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          'LOCAL SUPPORT NETWORK',
          'CONCEPT DEVELOPMENT',
          'USE UNDER STRESS',
          'ROLES AND RESPONSIBILITY',
          'TESTING AND ITERATION',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/beacon/thumbnail.webp" alt="Beacon in use on the way home at night" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <ProjectAccordion :items="accordionItems" id-prefix="beacon">
          <template #research><BeaconResearch /></template>
          <template #decisions><BeaconDecisions /></template>
        </ProjectAccordion>
      </section>

      <AppLink class="tryOutLink" href="/docs/beacon/beacon-dokumentation-de.pdf" label="VIEW DOCUMENTATION (DE)" hreflang="de" size="xxxxl" weight="bold" underline />

      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'BACHELOR THESIS',
          'SEVENTH SEMESTER',
          'GRADE: 1.7',
          'TEAMWORK',
        ]" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// Content follows the documentation; interface questions are editorial, not the original HMW set.
const accordionItems = [
  {
    "title": "Beacon on the way home",
    "alwaysOpen": true,
    "body": "Someone who feels unsafe on the way home at night can use Beacon to see whether people and safe places are available nearby. This orientation is available before they need to request help.",
    "paragraphs": [
      "When help is needed, they can send a discreet request. Individual helpers receive a specific task: offer a safe place or walk towards the person. The map and direction arrow show the person seeking help where they can go."
    ],
    "images": [
      "/img/beacon/overview.webp"
    ],
    "imageAlts": [
      "Beacon: map of available support, request for help and navigation to a safe place"
    ],
    "imageCaptions": [
      "Available help, a request for support and a route to a safe place in one sequence."
    ]
  },
  {
    "title": "When the way home feels unsafe",
    "slot": "research"
  },
  {
    "title": "A network of people and places",
    "body": "Two requirements mattered most when choosing the concept: help should be available early and work along a freely chosen route, including between fixed safe spaces. We compared four approaches: a support network, fixed safe spaces, stationed drones and forming groups. We assessed them against the seven requirements drawn from the research.",
    "paragraphs": [
      "The support network makes use of existing people and places, so it can offer help between individual safe spaces. Participants have distinct roles: one person seeks help, mobile helpers can walk towards them, and a safe place gives them a destination. Before a request, Beacon shows only how many helpers are available. Their exact locations stay hidden so their movements and absence cannot be inferred."
    ]
  },
  {
    "title": "Using Beacon under stress",
    "slot": "decisions"
  },
  {
    "title": "Trust and launching the network",
    "body": "People in the network usually do not know each other. Everyone therefore provides the same personal details, verifies their identity and acknowledges the rules of conduct. Helpers also learn to put their own safety before intervening.",
    "paragraphs": [
      "Before first use, a demo introduces the request for help and its haptic feedback. People who want to help learn their task and its limits. To launch the network, we considered starting with existing places open at night. Their staff need clear procedures and an introduction before private helpers can extend the service."
    ],
    "images": [
      "/img/beacon/campaign.webp"
    ],
    "imageAlts": [
      "Beacon campaign inviting people to join the support network"
    ],
    "imageCaptions": [
      "The campaign invites more people to join the network as helpers."
    ]
  },
  {
    "title": "Team and project status",
    "body": "Beacon was a bachelor’s thesis by Johannes Biess, Jannik Flaig and Aileen Kling. We developed the research, concept and design together. My focus was UI and UX, along with the reasoning and structure of the documentation.",
    "paragraphs": [
      "The work includes the interaction concept, detailed interfaces, branding and a campaign. A programmed prototype simulated the three roles and how they exchange information. Participants tested the interactions under time pressure. That did not establish whether Beacon would also be easy to use when someone is truly afraid."
    ],
    "images": [
      "/img/beacon/team.webp"
    ],
    "imageAlts": [
      "The Beacon project team"
    ],
    "imageCaptions": [
      "A joint bachelor’s thesis by Johannes Biess, Jannik Flaig and Aileen Kling."
    ]
  }
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
