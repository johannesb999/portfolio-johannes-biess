<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="kai" />

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
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
      <img src="/img/kai/thumbnail.webp" alt="KAI in use on a service employee's smartphone" />
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <!-- Erstes im Detailbereich: das Projektvideo in voller Breite -->
        <div class="project-film">
          <VideoEmbed id="8NNzapVb-Tk" title="KAI — project video" />
        </div>

        <p class="project-intro">
          KAI is an AI-assisted ordering interface that helps novice service staff navigate daily
          operations with confidence. Acting as a digital buddy, it listens to spoken orders,
          automatically generates order items including modifications, and translates complex POS
          workflows into clear, guided steps. That leaves staff free to focus on the guest.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="kai" />
      </section>

      <section class="project-doc">
        <SplitFlapText preset="bannerFlap" :align="'center'" :texts="[
          '                       [PROJECT] [DOCUMENTATION]                        ',
        ]" />
        <DocumentReader
          base="/docs/kai/pages/en"
          :pages="135"
          :ratio="1.4151"
          download="/docs/kai/kai-documentation-en.pdf"
          label="KAI documentation"
        />
      </section>

      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'SIXTH SEMESTER',
          'TEAMWORK',
        ]" />
      </div>
    </div>
  </main>
</template>

<script setup>
// Sixth-semester project. Aufbau wie pages/en/project/goEase.vue.
const accordionItems = [
  {
    title: 'Core Idea',
    body:
      'KAI is an artificial intelligence assistance application designed for restaurant service staff. It ' +
      'actively listens during order taking and provides situational guidance. This approach aims to ' +
      'reduce cognitive load and improve overall operational efficiency.',
    images: [
      '/img/kai/thumbnail.webp',
    ],
  },
  {
    title: 'Users & Challenge',
    body:
      'The primary users are restaurant service staff, especially beginners and temporary workers. The ' +
      'hospitality sector faces a critical shortage of skilled labor, resulting in high workloads and ' +
      'stressful conditions. A major challenge is inadequate onboarding combined with complex point of ' +
      'sale systems that lack usability. These confusing interfaces increase cognitive load, leading to ' +
      'high staff turnover and frequent errors during daily operations.',
  },
  {
    title: 'Context & User Journey',
    body:
      'The context involves the complete service workflow, from seating guests to taking orders and ' +
      'processing payments. The system improves this journey by utilizing voice recognition to automate ' +
      'order entry, replacing manual typing. It actively prioritizes urgent tasks rather than displaying ' +
      'static lists. Additionally, the application provides clear indoor navigation, ensuring that staff ' +
      'can easily locate specific tables in a busy environment.',
    images: [
      '/img/kai/navigation.webp',
    ],
  },
  {
    title: 'User-Centered Research & Process',
    body:
      'The development process began with a design sprint to quickly validate initial assumptions. Desk ' +
      'research and interviews with experienced waitstaff identified specific operational problems. The ' +
      'team structured the findings using value proposition maps and scenario workshops. Finally, a ' +
      'functional prototype featuring real time speech recognition was developed and subsequently ' +
      'evaluated through formative user testing sessions.',
  },
  {
    title: 'Insights Shaping the Solution',
    body:
      'Research indicated that manual data entry is slow and complex menus are difficult to memorize. ' +
      'This directly influenced the decision to implement artificial intelligence voice transcription. ' +
      'Furthermore, interviews revealed that abstract table numbers cause confusion, leading to the ' +
      'development of a visual spatial map. Observations of staff guessing critical allergen information ' +
      'resulted in the integration of mandatory automated warning prompts.',
  },
  {
    title: 'Purpose, Approach & Benefits',
    body:
      'The application serves as a digital mentor designed to empower untrained service personnel. It ' +
      'addresses the challenge of high cognitive load by dynamically adapting its interface to the ' +
      'specific experience level of the user. Beginners receive detailed guidance, while experienced ' +
      'staff experience minimal interruptions. This approach minimizes operational errors and allows ' +
      'employees to maintain focus on personal and social interactions with the guests.',
    images: [
      '/img/kai/onboarding.webp',
    ],
  },
  {
    title: 'Innovation',
    body:
      'The application integrates real time voice transcription with context sensitive cross selling ' +
      'suggestions. A key innovation is the dynamic interface adaptation based on a knowledge validation ' +
      'assessment. This allows the system to seamlessly transition from providing maximal guidance to ' +
      'minimal intervention. These technologies create value by transforming passive point of sale tools ' +
      'into proactive assistants that anticipate the needs of the staff.',
    images: [
      '/img/kai/suggestions.webp',
    ],
  },
  {
    title: 'AI Implementation',
    body:
      'The functional prototype utilizes the GPT-4o model in combination with a real time application ' +
      'programming interface for low latency speech processing. The artificial intelligence transcribes ' +
      'overheard conversations and converts them into structured order data. System prompts restrict the ' +
      'model to only identify dishes that are actually available on the restaurant menu, ensuring ' +
      'accurate data extraction and preventing unintended outputs.',
  },
  {
    title: 'Outcome & Business Value',
    body:
      'The primary target market consists of traditional restaurants and cafes that offer table service. ' +
      'The solution is expected to succeed by significantly reducing the training time required for new ' +
      'employees, thereby addressing the high turnover rates in the industry. By enabling unskilled ' +
      'workers to operate efficiently, establishments can lower their operational costs. Furthermore, ' +
      'automated upselling suggestions are anticipated to increase overall revenue.',
  },
  {
    title: 'Competition & USP',
    body:
      'Competitors focus on manual entry and administrative functions. The unique selling proposition is ' +
      'the proactive AI assistant feature. The interface dynamically adapts to the skill level of the ' +
      'user, replacing complex manual typing.',
  },
  {
    title: 'Accessibility, Responsibility & Trust',
    body:
      'The interface utilizes high contrasts and clear typography to ensure visual accessibility. To ' +
      'maintain trust and address privacy concerns regarding voice recording, establishments must ' +
      'implement transparent communication strategies to inform guests about the technology.',
  },
  {
    title: 'Social & Planetary Values',
    body:
      'The application promotes social sustainability by reducing emotional stress and the risk of ' +
      'burnout among personnel. Improving daily working conditions helps make the hospitality profession ' +
      'more attractive and supports long term employee well being.',
  },
  {
    title: 'Additional Information',
    body:
      'The project emphasizes that human interaction remains a core value in European dining. Technology ' +
      'is implemented strictly to support personal hospitality rather than replacing it with total ' +
      'automation, ensuring the social aspect of the visit is preserved.',
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
