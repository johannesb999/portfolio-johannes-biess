<template>
  <main>
    <div class="background"></div>

    <ResumeNav current="hfgMaster" />

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        ' MASTER OF ARTS ',
        'STRATEGIC DESIGN',
        ' FIRST SEMESTER  2026 ',
      ]" />
    </div>

    <div class="wrapper">
      <!-- Provisional use of the university image from the bachelor’s page. -->
      <ZoomableImage src="/img/cv/hfgbuilding.svg" alt="HfG Schwäbisch Gmünd building" />
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['[LEARNINGS]']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              In my master’s studies in Strategic Design, I explore systems and
              the contexts in which design operates. Design research and
              management extend my work on individual digital products from
              my bachelor’s studies.
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['[ABOUT] [HFG]']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              In 2026, I started the first semester of the Strategic Design
              master’s programme at HfG Schwäbisch Gmünd. The programme combines
              design, research and management.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" src="assets/styles/cv.scss" scoped></style>
