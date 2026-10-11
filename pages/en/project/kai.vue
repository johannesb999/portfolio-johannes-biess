<template>
  <main class="project--kai">
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="kai" />

    <div class="project-hero">
      <div class="projectFlap">
        <SplitFlapText tag="h1" preset="detailsFlap" :align="'center'" :texts="[
          '[KAI]',
        ]" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          'SERVICE ASSISTANT',
          'GPT4O   REALTIME API',
          'SPEECH   FIGMA   UI UX',
          'DESIGN SPRINT   TESTING',
          'INDOOR NAVIGATION',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/kai/core-idea.webp" alt="KAI table tasks in a restaurant with the UX Design Awards nomination 2026" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <div class="project-film">
          <VideoEmbed id="8NNzapVb-Tk" title="KAI — project video" poster="/img/kai/navigation.webp" />
        </div>

        <ProjectAccordion :items="accordionItems" id-prefix="kai">
          <template #research><KaiResearch language="en" /></template>
          <template #prototype><KaiPrototype language="en" /></template>
        </ProjectAccordion>
      </section>

      <AppLink class="tryOutLink" href="/docs/kai/kai-documentation-en.pdf" label="VIEW DOCUMENTATION" size="xxxxl" weight="bold" underline />

      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'SIXTH SEMESTER',
          'GRADE: 1.3',
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
    paragraphs: [
      'KAI simplifies restaurant service: new staff take orders in conversation, see the next tasks for each table and receive relevant guidance within their workflow. The interface provides detailed assistance for beginners and reduces it as their experience grows.',
      'This sixth-semester team project combines a detailed UI design with a functional speech prototype. We developed the design together; my focus was UI and UX, alongside the reasoning and structure of the documentation.',
    ],
    images: [
      '/img/kai/onboarding.webp',
    ],
    imageAlts: [
      'KAI onboarding guidance and the order overview for table 07 on two smartphone mockups',
    ],
    imageCaptions: [
      'Onboarding and order overview: guidance within the service workflow.',
    ],
  },
  {
    title: 'Research',
    slot: 'research',
  },
  {
    title: 'Taking orders',
    body: 'Speech input translates the conversation into order items and modifications. Staff review the visible list and edit individual items before sending the order to the kitchen. Suggestions and warnings appear where a decision is needed.',
    images: [
      '/img/kai/suggestions.webp',
    ],
    imageAlts: [
      'Three KAI screens showing milk alternatives, a warning and a knowledge check before disabling guidance',
    ],
    imageCaptions: [
      'Order items remain editable; guidance supports the choice.',
    ],
  },
  {
    title: 'Table overview and navigation',
    body: 'The table overview connects open tasks to their location in the restaurant. Prioritised prompts show where meals are ready or guests want to pay. A spatial map complements the list and makes it easier to find the right table.',
    images: [
      '/img/kai/navigation.webp',
      '/img/kai/thumbnail.webp',
    ],
    imageAlts: [
      'Two KAI screens with a map and direction indicator for navigating to table 07',
      'KAI tasks grouped by table on a smartphone in a restaurant',
    ],
    imageCaptions: [
      'The map and direction indicator guide staff to the selected table.',
      'Open tasks are assigned to their respective tables.',
    ],
  },
  {
    title: 'Speech prototype',
    slot: 'prototype',
  },
  {
    title: 'Design and privacy',
    body: 'KAI supports personal hospitality. Clear typography and contrast structure the interface; a knowledge check accompanies the decision to disable beginner guidance. Using it in a restaurant requires transparent handling of speech recordings and reliable allergen information.',
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
