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
      <nuxt-link to="/en/project/drawingLight" class="custom-link">DRAWINGLIGHT</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="['      [TRICKYTOWERS]       ']" />
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        '   INTERACTIVE WINDOW    ',
        'HTML   CSS  JAVASCRIPT   ',
        '  FIGMA        WEBCAM    ',
        ' GOOGLE MEDIA PIPE       ',
      ]" />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="/img/tt/tt (1).svg" alt="TrickyTowers thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section" class="section">
        <div class="section__inner section__inner--max">
          <ProjectAccordion :items="accordionItems" id-prefix="trickytowers" />
        </div>
      </section>

      <a href="https://tricky.johannes-biess.com/" target="_blank" rel="noopener noreferrer"
        class="tryOutLink custom-link">TRY IT OUT LIVE</a>

      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'ONE WEEK',
          'SECOND SEMESTER',
          'GRADE: 1.0',
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
      "The project focused on answering the question: What's the best way to draw attention to a " +
      'shop window or building? The goal was to determine the most effective way to advertise the ' +
      'university and increase its visibility in order to attract more potential students. The ' +
      "aim was to create an interactive installation that would bring the university's shop " +
      'window to life.',
    images: ['/img/tt/idea.svg'],
  },
  {
    title: 'Process',
    body:
      'The project began with an extensive brainstorming and research phase. The aim was to ' +
      'identify the best way to reach young people interested in both technology and design to ' +
      'inform them about the degree program. It became clear that simply having a shop window ' +
      'with animations or videos would not be sufficient, as few passers-by would take the time ' +
      'to watch any videos. An interactive solution was quickly decided upon. It was essential to ' +
      "develop a design that captures people's attention and piques their curiosity about what " +
      'was being offered. The installation needed to be designed for easy interaction, helping to ' +
      'maintain interest and ensuring simplicity of use.',
    images: ['/img/tt/process.svg'],
  },
  {
    title: 'Solution',
    body:
      'TrickyTowers is an interactive shop window that attracts passers-by in a playful manner ' +
      'and offers an extraordinary experience. The installation consists of a screen, a backlight ' +
      'projector, and a web app which, in combination with a webcam and Google MediaPipe, ' +
      "recognizes user hand movements. Once a user's hand is recognized, a game starts. The game " +
      'principle of TrickyTowers can best be described as a type of Tetris with a physics engine. ' +
      'However, the objective is not to build rows, but to construct a tower as high as possible. ' +
      'The physical elements make building a challenge that requires skill and strategic ' +
      'thinking. This interactive experience not only captures attention but also actively ' +
      'invites users to engage with the installation and experience the connection to the ' +
      'university in a playful and positive way.',
    images: ['/img/tt/solution.svg'],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
