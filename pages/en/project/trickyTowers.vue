<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="trickyTowers" />

    <div class="project-hero">
      <div class="projectFlap">
        <SplitFlapText tag="h1" preset="detailsFlap" :align="'center'" :texts="['      [TRICKYTOWERS]       ']" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          '   INTERACTIVE WINDOW    ',
          'HTML   CSS  JAVASCRIPT   ',
          '  FIGMA        WEBCAM    ',
          ' GOOGLE MEDIA PIPE       ',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/tt/tt (1).svg" alt="TrickyTowers thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <p class="project-intro">
          TrickyTowers turns the university window into a tower-building game controlled through hand gestures. The interactive installation was developed as a one-week team project in the second semester.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="trickytowers" />
      </section>

      <AppLink class="tryOutLink" href="https://tricky.johannes-biess.com/" label="TRY IT OUT LIVE" size="xxxxl" weight="bold" underline />

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

<script setup lang="ts">
const accordionItems = [
  {
    title: 'The solution',
    alwaysOpen: true,
    body: 'A webcam recognises hand movements and starts the game. Players stack falling blocks into the tallest tower they can build. A physics engine makes balance and dexterity central to the interaction, turning the university window into a play space.',
    images: [
      '/img/tt/solution.svg',
    ],
    imageAlts: [
      'TrickyTowers concept for the interactive university window',
    ],
    imageCaptions: [
      'The game connects the university with a direct invitation to interact.',
    ],
  },
  {
    title: 'From walking past to joining in',
    body: 'The brief was to make the university more visible in public space. The concept invites participation rather than passive video viewing. A hand movement starts the experience and makes the combination of technology and design tangible.',
    images: [
      '/img/tt/idea.svg',
    ],
    imageAlts: [
      'University building with windows as the location for the interactive installation',
    ],
    imageCaptions: [
      'The window provides the point of contact with the public.',
    ],
  },
  {
    title: 'Design and technical implementation',
    body: 'Brainstorming and research led to a simple game idea and interaction without additional input devices. The web app combines HTML, CSS and JavaScript with Google MediaPipe. A webcam, projection surface and rear projector form the physical installation.',
    images: [
      '/img/tt/process.svg',
    ],
    imageAlts: [
      'TrickyTowers game interface with falling blocks and a height indicator',
    ],
    imageCaptions: [
      'A clear objective: balance the blocks and build a taller tower.',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
