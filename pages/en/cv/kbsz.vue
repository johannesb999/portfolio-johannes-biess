<template>
  <main>
    <div class="background"></div>

    <ResumeNav current="kbsz" />

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        'MATHEMATICS    ECONOMICS  ',
        '     COMPUTER SCIENCE     ',
        '             HISTORY      ',
        '    ENGLISH      GERMAN   ',
      ]" />
    </div>

    <div class="wrapper">
      <ZoomableImage src="/img/cv/kbsz.svg" alt="Picture of KBSZ Building in Ellwangen" />
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [LEARNINGS]          ']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              During my time at the KBSZ, I obtained the Fachgebundene Fachhochschulreife
              with a focus on economics and English. The decision not to go into
              business after graduating from high school but to study computer
              science was particularly formative for me.
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['        [ABOUT] [DIPLOMA]      ']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              The "Fachgebundene Fachhochschulreife" is a school qualification
              in Germany with a business focus. Its curriculum includes
              business administration, economics, accounting and business law,
              alongside German, mathematics and English. The practical and
              vocational content provided a foundation for my further studies.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style lang="scss" src="assets/styles/cv.scss" scoped></style>
