<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/en/project/goEase" class="custom-link">GOEASE</nuxt-link>
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/en/project/drawingLight" class="custom-link"
        >DRAWINGLIGHT</nuxt-link
      >
    </div>

    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          '      [TRICKYTOWERS]       ',
          '   INTERACTIVE WINDOW    ',
          'HTML   CSS  JAVASCRIPT   ',
          '  FIGMA        WEBCAM    ',
          ' GOOGLE MEDIA PIPE       ',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="public\img\tt\tt (1).svg" alt="plantmonit" />
      </div>
    </div>
    <DetailsScroll />

    <div v-if="isDesktop" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['           [PROBLEM]           ']" />
            <div class="paragraph">
              The project focused on answering the question: What's the best way
              to draw attention to a shop window or building? The goal was to
              determine how to better market the university and increase its
              visibility to attract more potential students. The aim was to
              create an interactive installation that would make the
              university's shop window come alive. The idea was to develop an
              installation that captures people's attention and sparks curiosity
              about the school. The objective was to transform the shop window
              into a space that not only grabs attention but also leaves a
              lasting impression, ultimately attracting more students to the
              university.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\tt\idea.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image small">
            <img src="public\img\tt\process.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['           [PROCESS]          ']" />
            <div class="paragraph">
              The project began with an extensive brainstorming and research
              phase. The aim was to identify the best way to reach young people
              interested in both technology and design to inform them about the
              degree program. It became clear that simply having a shop window
              with animations or videos would not be sufficient, as few
              passers-by would take the time to watch any videos. An interactive
              solution was quickly decided upon. It was essential to develop a
              design that captures people's attention and piques their curiosity
              about what was being offered. The installation needed to be
              designed for easy interaction, helping to maintain interest and
              ensuring simplicity of use.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [SOLUTION]           ']" />
            <div class="paragraph">
              TrickyTowers is an interactive shop window that attracts
              passers-by in a playful manner and offers an extraordinary
              experience. The installation consists of a screen, a backlight
              projector, and a web app which, in combination with a webcam and
              Google MediaPipe, recognizes user hand movements. Once a user's
              hand is recognized, a game starts. The game principle of
              TrickyTowers can best be described as a type of Tetris with a
              physics engine. However, the objective is not to build rows, but
              to construct a tower as high as possible. The physical elements
              make building a challenge that requires skill and strategic
              thinking. This interactive experience not only captures attention
              but also actively invites users to engage with the installation
              and experience the connection to the university in a playful and
              positive way.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\tt/solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <a
        href="https://trickyTowers.johannes-biess.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="tryOutLink custom-link"
        >TRY IT OUT LIVE</a
      >

      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '        ONE WEEK        ',
            '    SECOND SEMESTER     ',
            '      GRADE: 1.0        ',
          ]"
        />
      </div>
    </div>

    <div v-else-if="isTablet" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['              [PROBLEM]            ']" />
            <div class="paragraph">
              The project focused on answering this question: What's the best
              way to draw attention to a shop window or building? We wanted to
              find out how we could market our university better and make it
              more visible to the public to attract more potential students. We
              wanted to create an interactive installation that would make the
              university's shop window come alive.<br /><br />
              The idea was to create an installation that would get people's
              attention and make them curious about the school. We wanted to
              turn the shop window into a place that not only grabs your
              attention but also leaves a lasting impression. The goal was to
              attract more students to our university.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\tt\idea.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['              [PROCESS]            ']" />
            <div class="paragraph">
              The project began with an extensive brainstorming and research
              phase. The aim was to identify the best way to reach young people
              interested in both technology and design to inform them about the
              degree program. It became clear that simply having a shop window
              with animations or videos would not be sufficient, as few
              passers-by would take the time to watch any videos. An interactive
              solution was quickly decided upon. It was essential to develop a
              design that captures people's attention and piques their curiosity
              about what was being offered. The installation needed to be
              designed for easy interaction, helping to maintain interest and
              ensuring simplicity of use.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\tt\process.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['             [SOLUTION]            ']" />
            <div class="paragraph">
              TrickyTowers is an interactive shop window that attracts
              passers-by in a playful manner and offers an extraordinary
              experience. The installation consists of a screen, a backlight
              projector, and a web app which, in combination with a webcam and
              Google MediaPipe, recognizes user hand movements. Once a user's
              hand is recognized, a game starts. The game principle of
              TrickyTowers can best be described as a type of Tetris with a
              physics engine. However, the objective is not to build rows, but
              to construct a tower as high as possible. The physical elements
              make building a challenge that requires skill and strategic
              thinking. This interactive experience not only captures attention
              but also actively invites users to engage with the installation
              and experience the connection to the university in a playful and
              positive way.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\tt/solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <a
        href="https://trickyTowers.johannes-biess.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="tryOutLink custom-link"
        >TRY IT OUT LIVE</a
      >

      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '        ONE WEEK        ',
            '    SECOND SEMESTER      ',
            '      GRADE: 1.0        ',
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
              The project focused on answering this question: What's the best
              way to draw attention to a shop window or building? We wanted to
              find out how we could market our university better and make it
              more visible to the public to attract more potential students. We
              wanted to create an interactive installation that would make the
              university's shop window come alive.<br /><br />
              The idea was to create an installation that would get people's
              attention and make them curious about the school. We wanted to
              turn the shop window into a place that not only grabs your
              attention but also leaves a lasting impression. The goal was to
              attract more students to our university.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\tt\idea.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['         [PROCESS]         ']" />
            <div class="paragraph">
              The project began with an extensive brainstorming and research
              phase. The aim was to identify the best way to reach young people
              interested in both technology and design to inform them about the
              degree program. It became clear that simply having a shop window
              with animations or videos would not be sufficient, as few
              passers-by would take the time to watch any videos. An interactive
              solution was quickly decided upon. It was essential to develop a
              design that captures people's attention and piques their curiosity
              about what was being offered. The installation needed to be
              designed for easy interaction, helping to maintain interest and
              ensuring simplicity of use.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\tt\process.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [SOLUTION]         ']" />
            <div class="paragraph">
              TrickyTowers is an interactive shop window that attracts
              passers-by in a playful manner and offers an extraordinary
              experience. The installation consists of a screen, a backlight
              projector, and a web app which, in combination with a webcam and
              Google MediaPipe, recognizes user hand movements. Once a user's
              hand is recognized, a game starts. The game principle of
              TrickyTowers can best be described as a type of Tetris with a
              physics engine. However, the objective is not to build rows, but
              to construct a tower as high as possible. The physical elements
              make building a challenge that requires skill and strategic
              thinking. This interactive experience not only captures attention
              but also actively invites users to engage with the installation
              and experience the connection to the university in a playful and
              positive way.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\tt/solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <a
        href="https://trickyTowers.johannes-biess.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="tryOutLink custom-link"
        >TRY IT OUT LIVE</a
      >

      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '        ONE WEEK        ',
            '    SECOND SEMESTER     ',
            '       GRADE: 1.0       ',
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
