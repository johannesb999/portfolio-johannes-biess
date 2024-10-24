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
        <img src="public\img\po\thumbnail.svg" alt="picture of my portfolio" />
      </div>
    </div>

    <DetailsScroll />

    <div v-if="isDesktop" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [PROBLEM]            ']" />
            <div class="paragraph">
              How can I present myself in a way that is both professional and
              engaging? How do I showcase my skills and experience in a way
              that’s simple, yet modern and innovative? <br /><br />These were
              the questions I asked myself when I started working on my
              portfolio. My goal was to create a website that not only showcases
              my work but also gives an authentic representation of my
              personality and values. I wanted it to be a place where visitors
              could not only learn about my skills and experience but also get a
              sense of my design philosophy and creative approach.
            </div>
          </div>
          <div class="image medium">
            <img
              src="public\img\po\problem.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
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
              my projects in a way that also reflected my personal values.<br />
              After testing out different designs and making lots of changes, I
              finally found a solution that works well and I'm happy with. It
              looks great and it's also functional.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
            <img
              src="public\img\po\softwarepro.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
          <div class="text">
            <div class="paragraph">
              <h3>Software Process</h3>
              Once I had a solid concept in Figma, it was time to turn it into a
              functional website. I'd already worked with React, Next.js, and
              Svelte on other projects, but I decided to use Nuxt 3 to learn
              more and get to know another framework.<br /><br />
              This choice let me explore the Vue ecosystem more deeply while
              using the latest features of Nuxt to build a fast website.<br />
              I concentrated on making the code modular so that the website
              would be easy to maintain and future updates would be simple.
              <br />I automated the deployment process using GitHub Actions to
              make sure that I could keep developing the website without any
              breaks.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [IMPLEMENTATION]       ']" />
            <div class="paragraph">
              I am currently happy with my portfolio. Of course there are still
              little things here and there that can be improved with more time
              and I will do that over time, but for now I hope you like it too.
            </div>
          </div>
          <div class="image medium">
            <img
              src="public\img\po\implementation.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
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
    </div>

    <div v-else-if="isTablet" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['                  [PROBLEM]                  ']"
            />
            <div class="paragraph">
              How can I present myself in a way that is both professional and
              engaging? <br />How do I showcase my skills and experience in a
              way that’s simple, yet modern and innovative? These were the
              questions I asked myself when I started working on my portfolio.
              <br /><br />My goal was to create a website that not only
              showcases my work but also gives an authentic representation of my
              personality and values. I wanted it to be a place where visitors
              could not only learn about my skills and experience but also get a
              sense of my design philosophy and creative approach.
            </div>
          </div>
          <div class="image medium">
            <img
              src="public\img\po\problem.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['                  [PROCESS]                  ']"
            />
            <div class="paragraph">
              I started with a concept phase, where I thought through different
              layout options and design approaches for my portfolio website.
              <br /><br />The biggest challenge was to create a website that
              would serve as an application, reflect my personality, follow the
              conventions of web design, and still look modern, unique, and
              individual. I wanted a design that would look clean and show off
              my projects in a way that also reflected my personal values. After
              testing out different designs and making lots of changes, I
              finally found a solution that works well and I'm happy with. It
              looks great and it's also functional.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\po\process.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Software Process</h3>
              Once I had a solid concept in Figma, it was time to turn it into a
              functional website.<br />
              I'd already worked with React, Next.js, and Svelte on other
              projects, but I decided to use <br />Nuxt 3 to learn more and get
              to know another framework. This choice let me explore the Vue
              ecosystem more deeply while using the latest features of Nuxt to
              build a fast website.<br />
              I concentrated on making the code modular so that the website
              would be easy to maintain and future updates would be simple. I
              automated the deployment process using GitHub Actions to make sure
              that I could keep developing the website without any breaks.
            </div>
          </div>
          <div class="image medium">
            <img
              src="public\img\po\softwarepro.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['               [IMPLEMENTATION]             ']"
            />
            <div class="paragraph">
              I am currently happy with my portfolio. Of course there are still
              little things here and there that can be improved with more time
              and I will do that over time, but for now I hope you like it too.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\po\implementation.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '          [KEYDATA]          ',
            '         ONE MONTH         ',
            '      SEMESTER BREAK       ',
            '     GRADE: YOU DECIDE     ',
          ]"
        />
      </div>
    </div>

    <div v-else-if="isMobile" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['         [PROBLEM]         ']" />
            <div class="paragraph">
              How can I present myself in a way that is both professional and
              engaging? <br />How do I showcase my skills and experience in a
              way that’s simple, yet modern and innovative? <br />These were the
              questions I asked myself when I started working on my portfolio.
              <br /><br />My goal was to create a website that not only
              showcases my work but also gives an authentic representation of my
              personality and values.<br />
              I wanted it to be a place where visitors could not only learn
              about my skills and experience but also get a sense of my design
              philosophy and creative approach.
            </div>
          </div>
          <div class="image smedi">
            <img
              src="public\img\po\problem.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['         [PROCESS]         ']" />
            <div class="paragraph">
              I started with a concept phase, where I thought through different
              layout options and design approaches for my portfolio website.
              <br /><br />The biggest challenge was to create a website that
              would serve as an application, reflect my personality, follow the
              conventions of web design, and still look modern, unique, and
              individual. I wanted a design that would look clean and show off
              my projects in a way that also reflected my personal values.<br />
              After testing out different designs and making lots of changes, I
              finally found a solution that works well and I'm happy with. It
              looks great and it's also functional.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\po\process.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Software Process</h3>
              Once I had a solid concept in Figma, it was time to turn it into a
              functional website.<br />
              I'd already worked with React, Next.js, and <br />Svelte on other
              projects, but I decided to use Nuxt 3 to learn more and get to
              know another framework.<br />
              This choice let me explore the Vue ecosystem more deeply while
              using the latest features of Nuxt to build a fast website. I
              concentrated on making the code modular so that the website would
              be easy to maintain and future updates would be simple. I
              automated the deployment process using GitHub Actions to make sure
              that I could keep developing the website without any breaks.
            </div>
          </div>
          <div class="image smedi">
            <img
              src="public\img\po\softwarepro.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['      [IMPLEMENTATION]     ']" />
            <div class="paragraph">
              I am currently happy with my portfolio. Of course there are still
              little things here and there that can be improved with more time
              and I will do that over time, but for now I hope you like it too.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\po\implementation.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '          [KEYDATA]        ',
            '        ONE MONTH        ',
            '      SEMESTER BREAK     ',
            '     GRADE: YOU DECIDE    ',
          ]"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { useDeviceType } from "~/assets/composables/useDeviceType.js";

const { isMobile, isTablet, isDesktop } = useDeviceType();
</script>

<style src="assets/project.css" scoped></style>
