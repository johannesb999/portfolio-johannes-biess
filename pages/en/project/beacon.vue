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
          'HELP NETWORK',
          'BACHELOR THESIS',
          'FIGMA   UI   UX',
          'RESEARCH   PROTOTYPING',
          'BRANDING   CAMPAIGN',
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
    "title": "The solution",
    "alwaysOpen": true,
    "body": "Beacon is a local support network for walking home at night. The app connects people who feel unsafe with helpers and safe places nearby. They can see where support is available before a situation becomes an emergency.",
    "paragraphs": [
      "A request for help can be prepared and sent discreetly. Beacon assigns helpers a concrete task and guides the person seeking help to a safe place. They know what to do next and do not have to face the situation alone."
    ],
    "images": [
      "/img/beacon/overview.webp"
    ],
    "imageAlts": [
      "Beacon: map of available support, request for help and navigation to a safe place"
    ],
    "imageCaptions": [
      "The app shows available support and guides the journey until people meet."
    ]
  },
  {
    "title": "Research: understanding uncertainty",
    "slot": "research"
  },
  {
    "title": "Why a support network?",
    "body": "The research showed that help needs to be available early and along a freely chosen route home. We developed four approaches: a support network, fixed safe spaces, stationed drones and forming groups. Using the Thinking Hats method, we compared their impact, potential and risks against the seven requirements.",
    "paragraphs": [
      "We chose to develop the support network because it involves existing people and places and offers support between individual safe spaces. This requires clear limits to the helpers’ roles: they offer a safe place or walk towards the person seeking help. Before a request, their locations must not reveal their movements or absence."
    ],
    "images": [
      "/img/beacon/campaign.webp"
    ],
    "imageAlts": [
      "Beacon campaign for the local support network"
    ],
    "imageCaptions": [
      "The campaign invites people to join the network as helpers."
    ]
  },
  {
    "title": "Using Beacon",
    "slot": "decisions"
  },
  {
    "title": "Trust and preparation",
    "body": "The network brings together people who usually do not know each other. They start with the same requirements: everyone provides the same personal details, verifies their identity and acknowledges the rules of conduct. These include putting their own safety before intervention.",
    "paragraphs": [
      "Before the first use, a demo guides people through a request for help. It introduces the interaction and haptic feedback so these do not have to be learned in an unsafe situation. The preparation also explains what kind of help is expected and where the helpers’ responsibilities end."
    ]
  },
  {
    "title": "Project scope",
    "body": "Beacon was our bachelor’s thesis as the Biess, Flaig and Kling team. We developed the research, concept and design together. My focus was UI and UX, along with the reasoning and structure of the documentation.",
    "paragraphs": [
      "The work includes the interaction concept, detailed interfaces, branding and a campaign. We also considered how to launch the network through existing places that are open at night. Their staff need clear procedures and an introduction to their role before private helpers expand the network."
    ],
    "images": [
      "/img/beacon/team.webp"
    ],
    "imageAlts": [
      "The Beacon project team"
    ],
    "imageCaptions": [
      "A joint bachelor’s thesis by Biess, Flaig and Kling."
    ]
  }
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
