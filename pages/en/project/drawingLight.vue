<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>
    <ProjectNav current="drawingLight" />

    <div class="project-hero">
      <div class="projectFlap">
        <SplitFlapText tag="h1" preset="detailsFlap" :align="'center'" :texts="['      [DRAWINGLIGHT]      ']" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          '      MECHATRONICS      ',
          'TEAMWORK   PHOTOGRAPHY  ',
          '    ARDUINO   FUSION360 ',
          '      LIGHTDRAWING      ',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/dl/thumbnail.svg" alt="DrawingLight thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <p class="project-intro">
          DrawingLight translates a hand movement into a mechanically drawn light trail. Built as a one-week team project in the second semester, the experiment combines gesture tracking, stepper motors and long-exposure photography.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="drawinglight" />
      </section>

      <div class="project-section">
        <div class="project-film">
          <VideoEmbed id="k3CHPyc4J4M" title="DrawingLight — project video" poster="/img/dl/video-poster.webp" />
        </div>
      </div>

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
    body: 'A webcam records a shape drawn in the air by hand. The machine then moves a coloured light source along that path. A camera captures the movement in a long exposure, turning a fleeting gesture into a visible drawing.',
    images: [
      '/img/dl/implementation.svg',
    ],
    imageAlts: [
      'DrawingLight setup with a gesturing hand, laptop and light source between two tripods',
    ],
    imageCaptions: [
      'The built setup connects the recorded gesture with mechanical movement.',
    ],
  },
  {
    title: 'Using the hand as a drawing tool',
    body: 'The brief was to build a mechanical drawing device for lines and shapes. An interest in photography led to the idea of light painting. Tablet, mouse and hand tracking were compared as input methods. The team chose gesture recognition with Google MediaPipe through the laptop webcam.',
    images: [
      '/img/dl/process.svg',
    ],
    imageAlts: [
      'DrawingLight concept design for entering lines and shapes',
    ],
    imageCaptions: [
      'The input was explored as a distinct part of the drawing process.',
    ],
  },
  {
    title: 'Mechanics with two stepper motors',
    body: 'The spread of the light source called for a larger setup to produce recognisable detail. Two stepper motors on tripods move the light source by winding and unwinding a cord. Custom rollers were modelled in Fusion 360. The cord mechanism replaces a more elaborate rail system.',
    points: [
      'Node.js processes the hand coordinates captured with MediaPipe.',
      'A NeoPixel provides coloured light; a joystick controls its colour.',
    ],
    images: [
      '/img/dl/idea.svg',
    ],
    imageAlts: [
      'Research on mechanical drawing devices displayed on a laptop',
    ],
    imageCaptions: [
      'Mechanical drawing devices provided a starting point for the construction.',
    ],
  },
  {
    title: 'From a ten-second gesture to a light image',
    body: 'The hand movement is recorded for ten seconds. The machine then traces it over 30 seconds while the camera exposes the photograph. The resulting images connect the input movement, mechanical path and colour changes.',
    images: [
      '/img/dl/dl5.svg',
      '/img/dl/dl6.svg',
      '/img/dl/dl7.svg',
      '/img/dl/dl12.svg',
    ],
    imageAlts: [
      'Multicoloured free-form light trails against a black background',
      'Crossing light trails in red, green and blue',
      'Two angular light figures in orange and blue-white',
      'A white light trail forming a rectangle followed by a zigzag',
    ],
    imageCaptions: [
      'Free movement with colour changes.',
      'Overlapping paths in different colours.',
      'Angular shapes drawn as light trails.',
      'A continuous path combining a rectangle and a zigzag.',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
