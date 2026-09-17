<template>
  <main>
    <div class="background"></div>

    <EdgeLink position="right" fixed to="/en/resume" label="RESUME" />

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        '   WHOLESALE     ECONOMICS ',
        '      MARCET RESEARCH      ',
        ' FINANCE        ACCOUNTING ',
        ' CONTRACT LAW        SALES ',
        'MARKETING      DISPOSITION',
      ]" />
    </div>

    <div class="wrapper">
      <img src="/img/cv/dtack.svg" alt="Picture of D-TACK Building" />
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['         [LEARNINGS]          ']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              While I was training as a wholesale and foreign trade merchant at
              D-TACK and the German Chamber of Industry and Commerce (IHK), I
              got to experience all the different departments of a wholesale
              company over the course of three years. I learned about
              purchasing, sales, marketing, and logistics in class and on the
              job. I also got to develop my soft skills, like teamwork,
              communication and organisation, in a professional setting for the
              first time. You can find out more about what I learned and did
              during my apprenticeship in my
              <AppLink href="/docs/dtack/employment-reference-dtack-en.pdf" label="Employment Reference" underline :scale="false" />
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['         [ABOUT] [D-TACK]       ']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              D-TACK is a company that develops and sells adhesive tapes for all
              kinds of industrial uses. During their training at D-TACK,
              trainees get to try out different departments like purchasing,
              sales, marketing and logistics. This gives them a practical
              insight into wholesale processes and teaches them the essential
              commercial procedures. The training places particular emphasis on
              developing soft skills such as communication, teamwork and
              organisation. You can find out more about the training content on
              their
              <AppLink href="https://www.d-tack.de/ausbildung?srsltid=AfmBOor2XUpCV5NFF_DtUYp2PfYXWaT6FYBF1oI200zuMLlf_o3gj6WG" label="website." underline :scale="false" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style lang="scss" src="assets/styles/cv.scss" scoped></style>
