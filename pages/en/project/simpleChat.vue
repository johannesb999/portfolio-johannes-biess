<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="simpleChat" />

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="['        [SIMPLECHAT]        ']" />
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        '       CHAT PLATFORM      ',
        'WIREFRAMES   USERCENTERED ',
        '   DESIGN THINKING        ',
        '         USER INTERVIEWS  ',
        '  FIGMA PROTOTYPE         ',
      ]" />
    </div>

    <div class="wrapper">
      <img src="/img/sc/thumbnail.svg" alt="SimpleChat thumbnail" />
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <ProjectAccordion :items="accordionItems" id-prefix="simplechat" />
      </section>
      <div class="project-section">
        <div class="project-film">
          <iframe class="project-film__frame" src="https://embed.figma.com/proto/lAaQo23W7BEgJGwKB9lQD8/Designmethoden-USerresearch?page-id=0%3A1&node-id=213-2808&node-type=frame&viewport=-2921%2C-796%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=213%3A2808&embed-host=share"
            title="SimpleChat — Figma prototype" loading="lazy" allowfullscreen></iframe>
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'TWO WEEKS',
          'THIRD SEMESTER',
          'GRADE: 1.7',
          'TEAMWORK',
        ]" />
      </div>
    </div>
  </main>
</template>

<script setup>
const accordionItems = [
  {
    title: 'Problem',
    body:
      "The university's current communication platform, Slack, is to be replaced by a dedicated " +
      'platform that enables or even improves communication between the university, students and ' +
      'alumni. This new platform should be easy to use and offer a variety of functions. The aim ' +
      'was to create a solution that would be used by all students and alumni to keep the ' +
      'connection to the university alive.',
    images: ['/img/sc/problem.svg'],
  },
  {
    title: 'Process',
    body:
      'To get a feel for what users need, the process began by exploring other platforms. User ' +
      'research methods like user interviews and analyzing customer needs were used to gain a ' +
      'deep understanding of the target group. These insights were used to create a rough ' +
      'prototype, which was then gradually improved. As development continued, changes were made ' +
      'based on tests with potential users to enhance user-friendliness. The low- and ' +
      'mid-fidelity prototypes created in Figma served as a foundation for regular user tests. ' +
      'An iterative approach, incorporating user feedback, led to the development of a platform ' +
      'that is both functional and intuitive, simplifying the complexity of its many features.',
    images: ['/img/sc/process.svg'],
  },
  {
    title: 'Solution',
    body:
      'The result is SimpleChat, an all-in-one platform that lets users chat and offers other ' +
      'features to connect the university and students in new ways. One of the key features of ' +
      'the platform is the ability for users to maintain their own profiles. These profiles ' +
      'include key info like a public timeline where internships, studying abroad, and other big ' +
      "moments are documented. There's also a tag system where you can store interests and " +
      'relevant facts about the person. These features let other users search for people with ' +
      'specific experiences or interests. For example, they can search for someone who has ' +
      'stayed abroad in Costa Rica. The platform also includes the university itself and ' +
      'companies. The university can use the platform to manage a bulletin board, post grades ' +
      'and notifications directly on accounts, and combine several platforms. Courses and team ' +
      'channels are also part of SimpleChat, so that teaching materials can be shared easily. ' +
      'Companies get restricted accounts and can use the platform to advertise job vacancies or ' +
      'search for people with specific skills that interest them. SimpleChat thus offers a way ' +
      'to communicate more effectively while becoming an integral part of university life and ' +
      "students' career planning.",
    images: ['/img/sc/solution.svg'],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
