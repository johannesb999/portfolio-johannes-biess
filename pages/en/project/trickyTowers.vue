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
              The project focused on answering the question: <br /><br />
              What's the best way to draw attention to a shop window or
              building?
              <br />The goal was to determine the most effective way to
              advertise the university and increase its visibility in order to
              attract more potential students. The aim was to create an
              interactive installation that would<br />
              bring the university's shop window to life.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\tt\idea.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
            <img
              src="public\img\tt\process.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
          <div class="text">
            <SplitFlapText :texts="['           [PROCESS]           ']" />
            <div class="paragraph">
              The project began with an extensive brainstorming and research
              phase. The aim was to identify the best way to reach young people
              interested in both technology and design to inform them about the
              degree program. <br />It became clear that simply having a shop
              window with animations or videos would not be sufficient, as few
              passers-by would take the time to watch any videos. An interactive
              solution was quickly decided upon.<br />
              It was essential to develop a design that captures people's
              attention and piques their curiosity about what was being offered.
              <br />The installation needed to be designed for easy interaction,
              helping to maintain interest and ensuring simplicity of use.
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
              experience.<br />
              The installation consists of a screen, a backlight projector, and
              a web app which, in combination with a webcam and Google
              MediaPipe, recognizes user hand movements. Once a user's hand is
              recognized, a game starts. <br /><br />The game principle of
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
          <div class="image large">
            <img src="public\img\tt/solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <a
        href="https://tricky.johannes-biess.com/"
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
            '        TEAMWORK        ',
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
            <div class="paragraph"></div>
          </div>
          <div class="image medium">
            <img src="public\img\tt\idea.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['                   [PROCESS]                 ']"
            />
            <div class="paragraph">
              The project began with an extensive brainstorming and research
              phase. <br />The aim was to identify the best way to reach young
              people interested in both technology and design to inform them
              about the degree program. It became clear that simply having a
              shop window with animations or videos would not be sufficient, as
              few passers-by <br />would take the time to watch any videos.<br />
              An interactive solution was quickly decided upon. It was essential
              to develop a design that captures people's attention and piques
              their curiosity about what was being offered. <br />The
              installation needed to be designed for easy interaction, helping
              to maintain interest and ensuring simplicity of use.
            </div>
          </div>
          <div class="image smedi">
            <img
              src="public\img\tt\process.svg"
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
              :texts="['                   [SOLUTION]                ']"
            />
            <div class="paragraph">
              TrickyTowers is an interactive shop window that attracts
              passers-by in a playful manner and offers an extraordinary
              experience. <br />The installation consists of a screen, a
              backlight projector, and a web app which, in combination with a
              webcam and Google MediaPipe, recognizes user hand movements.<br />
              Once a user's hand is recognized, a game starts. <br /><br />The
              game principle of TrickyTowers can best be described as a type of
              Tetris with a physics engine. However, the objective is not to
              build rows, but to construct a tower as high as possible. The
              physical elements make building a challenge that requires skill
              and strategic thinking. <br />This interactive experience not only
              captures attention but also actively invites users to engage with
              the installation and experience the connection to the university
              in a playful and positive way.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\tt/solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <a
        href="https://tricky.johannes-biess.com/"
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
            '       TEAMWORK       ',
          ]"
        />
      </div>
    </div>

    <div v-else-if="isMobile" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [PROBLEM]         ']" />
            <div class="paragraph">
              The concept was to design an installation that <br />captures
              attention and sparks curiosity <br />about the university.<br /><br />
              The objective was to transform the shop window <br />into a space
              that not only draws attention but also leaves a lasting
              impression, ultimately encouraging<br />
              more students to consider the university.
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
            <SplitFlapText :texts="['        [PROCESS]         ']" />
            <div class="paragraph">
              The project began with an extensive brainstorming<br />
              and research phase.<br />
              The aim was to identify the best way to reach young people
              interested in both technology and design to inform them about the
              degree program.<br />
              It became clear that simply having a shop window with animations
              or videos would not be sufficient, as few passers-by would take
              the time to watch any videos.<br /><br />
              An interactive solution was quickly decided upon. <br />It was
              essential to develop a design that captures people's attention and
              piques their curiosity about <br />what was being offered. The
              installation needed to <br />be designed for easy interaction,
              helping to maintain interest and ensuring simplicity of use.
            </div>
          </div>
          <div class="image small">
            <img
              src="public\img\tt\process.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['       [SOLUTION]         ']" />
            <div class="paragraph">
              TrickyTowers is an interactive shop window that attracts
              passers-by in a playful manner and offers an extraordinary
              experience. The installation consists of a screen, a backlight
              projector, and a web app which, in combination with a webcam and
              Google MediaPipe, recognizes user hand movements. <br /><br />Once
              a user's hand is recognized, a game starts. The game principle of
              TrickyTowers can best be described as a type of Tetris with a
              physics engine. However, the objective is not to build rows, but
              to construct a tower as high as possible. <br />The physical
              elements make building a challenge that requires skill and
              strategic thinking. This interactive experience not only captures
              attention but also actively invites users to engage with the
              installation and experience the connection to the university in a
              playful and positive way.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\tt/solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <a
        href="https://tricky.johannes-biess.com/"
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
            '        TEAMWORK        ',
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
<style lang="scss" src="assets/styles/project.scss" scoped></style>
