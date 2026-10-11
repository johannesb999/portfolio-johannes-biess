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
          'SERVICE WITHOUT DISTRACTION',
          'SPEECH TO ORDER ITEMS',
          'CONTEXTUAL GUIDANCE',
          'TABLE TASKS AND ROUTES',
          'TESTED FUNCTIONAL PROTOTYPE',
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
    title: 'KAI in service',
    alwaysOpen: true,
    paragraphs: [
      'KAI is a mobile assistant for new restaurant staff. With guests, it turns spoken orders into visible items. During a shift, it shows table status, open tasks and the route to the next table. Guidance makes knowledge available when a decision calls for it.',
      'Johannes Biess, Jannik Flaig and Paula Romanessi developed this sixth-semester team project together. It combines detailed interfaces for the service workflow with a functional prototype for taking orders. My focus was UI and UX, alongside the reasoning and structure of the documentation.',
    ],
    images: [
      '/img/kai/onboarding.webp',
    ],
    imageAlts: [
      'KAI onboarding guidance and the order overview for table 07 on two smartphone mockups',
    ],
    imageCaptions: [
      'Beginner guidance and an order view show how KAI supports new staff within the workflow.',
    ],
  },
  {
    title: 'Learning the restaurant workflow',
    slot: 'research',
  },
  {
    title: 'Guidance while taking orders',
    body: 'A live transcript turns spoken orders into visible items. Staff review dishes and modifications, correct individual entries and only then send the order to the kitchen. This keeps them in control when speech input is misinterpreted.',
    paragraphs: [
      'Guidance appears at specific decision points: KAI might suggest a milk alternative or warn about a problematic selection. Beginner assistance can be reduced as experience grows, with a knowledge check accompanying that step. The design keeps information available without crowding the screen throughout the task.',
      'Use in a restaurant would also require transparent information for guests about speech recording and reliable allergen data.',
    ],
    images: [
      '/img/kai/suggestions.webp',
    ],
    imageAlts: [
      'Three KAI screens showing milk alternatives, a warning and a knowledge check before disabling guidance',
    ],
    imageCaptions: [
      'Milk alternative, warning and knowledge check: each cue appears in its decision context.',
    ],
  },
  {
    title: 'Table overview and navigation',
    body: 'A list of table numbers alone would be too abstract for new staff. The overview therefore connects each table to its status, timing and open tasks: food and drinks are ready, guests want to pay, or there is nothing to do yet. Before moving, staff can see where service is needed.',
    paragraphs: [
      'Navigation answers a different question: where is that table in the room? A map shows its location in the restaurant, while a direction indicator guides staff towards it. The overview and navigation remain separate so staff can choose a task first, then find their way to it.',
    ],
    images: [
      '/img/kai/navigation.webp',
      '/img/kai/thumbnail.webp',
    ],
    imageAlts: [
      'Two KAI screens with a map and direction indicator for navigating to table 07',
      'KAI tasks grouped by table on a smartphone in a restaurant',
    ],
    imageCaptions: [
      'The map and direction indicator locate table 07 in the restaurant.',
      'The overview shows status, timing and next tasks for each table.',
    ],
  },
  {
    title: 'Functional prototype',
    slot: 'prototype',
  },
  {
    title: 'Testing the service flow',
    body: 'A newcomer to restaurant service tried the mobile UI prototype in two scenarios: guiding a guest to table 7 and taking an order. The test examined whether she understood table status, the next action and KAI’s assistance without further explanation.',
    paragraphs: [
      'The test exposed gaps in the guidance. Opening a table and entering the number of guests were not self-explanatory; order entry moved too quickly, and the quiz was skipped. For the next iteration, we proposed clearer step-by-step guidance, a guided introduction and more explicit system feedback.',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
