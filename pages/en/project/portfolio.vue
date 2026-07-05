<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/en/project/drawingLight" class="custom-link">DRAWINGLIGHT</nuxt-link>
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/en/project/simpleChat" class="custom-link">SIMPLECHAT</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="['        [PORTFOLIO]        ']" />
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        '      THIS WEBSITE       ',
        '   NUXT3    WIREFRAMES   ',
        '    GITHUB  USER TESTING ',
        ' FIGMA        UI  UX     ',
        'DOCKER       DEPLOYMENT  ',
      ]" />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="/img/po/thumbnail.svg" alt="Portfolio thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section" class="section">
        <div class="section__inner section__inner--max">
          <ProjectAccordion :items="accordionItems" id-prefix="portfolio" />
        </div>
      </section>

      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'ONE MONTH',
          'SEMESTER BREAK',
          'GRADE: YOU DECIDE',
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
      'How can I present myself in a way that is both professional and engaging? How do I ' +
      'showcase my skills and experience in a way that’s simple, yet modern and innovative? ' +
      'These were the questions I asked myself when I started working on my portfolio. My goal ' +
      'was to create a website that not only showcases my work but also gives an authentic ' +
      'representation of my personality and values. I wanted it to be a place where visitors ' +
      'could not only learn about my skills and experience but also get a sense of my design ' +
      'philosophy and creative approach.',
    images: ['/img/po/problem.svg'],
  },
  {
    title: 'Process',
    body:
      'I started with a concept phase, where I thought through different layout options and ' +
      'design approaches for my portfolio website. The biggest challenge was to create a website ' +
      'that would serve as an application, reflect my personality, follow the conventions of web ' +
      'design, and still look modern, unique, and individual. I wanted a design that would look ' +
      'clean and show off my projects in a way that also reflected my personal values. After ' +
      "testing out different designs and making lots of changes, I finally found a solution that " +
      "works well and I'm happy with. It looks great and it's also functional.",
    images: ['/img/po/process.svg'],
  },
  {
    title: 'Software Process',
    body:
      "Once I had a solid concept in Figma, it was time to turn it into a functional website. " +
      "I'd already worked with React, Next.js, and Svelte on other projects, but I decided to " +
      'use Nuxt 3 to learn more and get to know another framework. This choice let me explore ' +
      'the Vue ecosystem more deeply while using the latest features of Nuxt to build a fast ' +
      'website. I concentrated on making the code modular so that the website would be easy to ' +
      'maintain and future updates would be simple. I automated the deployment process using ' +
      'GitHub Actions to make sure that I could keep developing the website without any breaks.',
    images: ['/img/po/softwarepro.svg'],
  },
  {
    title: 'Implementation',
    body:
      'I am currently happy with my portfolio. Of course there are still little things here and ' +
      'there that can be improved with more time and I will do that over time, but for now I ' +
      'hope you like it too.',
    images: ['/img/po/implementation.svg'],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
