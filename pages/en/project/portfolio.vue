<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/en/project/drawingLight" class="custom-link"
        >DRAWINGLIGHT</nuxt-link
      >
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/en/project/simpleChat" class="custom-link"
        >SIMPLECHAT</nuxt-link
      >
    </div>

    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          '        [PORTFOLIO]        ',
          '      THIS WEBSITE       ',
          '   NUXT3    WIREFRAMES   ',
          '    GITHUB  USER TESTING ',
          ' FIGMA        UI  UX     ',
          'DOCKER       DEPLOYMENT  ',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img
          style="border: 1px solid black; border-radius: 10px"
          src="public\img\po\thumbnail.svg"
          alt="plantmonit"
        />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [PROBLEM]            ']" />
            <div class="paragraph">
              How do i represent myself in a way that is both professional and
              engaging? How do i showcase my skills and experience in a visually
              appealing manner that is simple and established but in some way
              new and modern. How do i make sure that my portfolio is not only a
              reflection of my work but also a reflection of my personality and
              my values? These are the questions that i asked myself when i
              started working on my portfolio. I wanted to create a website that
              would not only present my work but also show who i am and what i
              stand for. I wanted to create a platform that would be both
              informative and engaging, a place where people could inform
              themeselves about my skills and experience but also get to know my
              personality and my design philosophy.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\po\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image small">
            <img src="public\img\po\process.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['           [PROCESS]           ']" />
            <div class="paragraph">
              I started with a concept phase, where I thought through different
              layout options and design approaches for my portfolio website.
              <br /><br />The biggest challenge was to create a website that
              would serve as an application, reflect my personality, follow the
              conventions of web design, and still look modern, unique, and
              individual. I wanted a design that would look clean and show off
              my projects in a way that also reflected my personal values.<br /> After
              testing out different designs and making lots of changes, I
              finally found a solution that works well and I'm happy with. It
              looks great and it's also functional.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image small">
            <img src="public\img\po\softwarepro.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <div class="paragraph">
              <h3>Software Process</h3>
              Once I had a solid concept in Figma, it was time to turn it into a
              functional website.<br />
              I'd already worked with React, Next.js, and Svelte on other
              projects, but I decided to use Nuxt 3 to learn more and get to
              know another framework.<br />
              This choice let me explore the Vue ecosystem more deeply while
              using the latest features of Nuxt to build a fast website.<br />
              I concentrated on making the code modular so that the website
              would be easy to maintain and future updates would be simple. I
              automated the deployment process using GitHub Actions to make sure
              that I could keep developing the website without any breaks.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [IMPLEMENTATION]       ']" />
            <div class="paragraph">
              Well I guess you are already seeing it and i hope you like it ; )
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\po\implementation.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
    </div>
    <div class="projectDetailsFlap">
      <SplitFlapText
        :texts="[
          '         [KEYDATA]          ',
          '        ONE MONTH         ',
          '     SEMESTER BREAK       ',
          '    GRADE: YOU DECIDE     ',
        ]"
      />
    </div>
  </main>
</template>

<script setup></script>

<style src="assets/project.css" scoped></style>
