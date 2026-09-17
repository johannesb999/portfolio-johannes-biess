<template>
  <main>
    <div class="background"></div>

    <EdgeLink position="right" fixed to="/en/resume" label="RESUME" />

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        '   FIGMA   UX LEANDESIGN ',
        'PROTOTYPING  USABILITY   ',
        '     DESIGNTHINKING      ',
        ' USER CENTERED    UI     ',
        '  FULLSTACK DEVELOPMENT  ',
      ]" />
    </div>

    <div class="wrapper">
      <img src="/img/cv/hfgbuilding.svg" alt="Picture of HFG Building" />
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [LEARNINGS]         ']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              When I was at the HfG, I worked on
              <AppLink :to="projectsPath" label="projects" underline :scale="false" />
              that were very focused on getting hands-on experience right from
              the start. I learned to think deeply about fundamental questions
              like: What should I develop? How can I make sure it meets users'
              needs? What technologies are needed and how can I use them
              effectively? The HfG created an inspiring learning environment
              where I could not only build my design and technical skills, but
              also learn how to apply them in real projects. Take a look at my
              <AppLink href="/docs/hfg/transcript-of-records-en.pdf" label="Transcript of Records" underline :scale="false" />for more details.
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['         [ABOUT] [HFG]        ']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              The
              <AppLink href="https://www.hfg-gmuend.de/en/studium/digital-product-design-and-development" label="Hochschule für Gestaltung Schwäbisch Gmünd." underline :scale="false" />
              (HfG) is known for its real-world, project-based approach to
              training students. The school places a lot of emphasis on
              combining theory and practice, which gives students a good
              understanding of how work actually gets done. There's a strong
              focus on teamwork and working across disciplines, which prepares
              students for a collaborative work environment. Through a
              combination of hands-on learning and a strong link to practice,
              students learn all the steps from concept development to the
              finished prototype. Take a look at the
              <AppLink href="/docs/hfg/module-manual-en.pdf" label="Module Manual" underline :scale="false" />for more details.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// Ziel richtet sich danach, ob die Projektseiten freigeschaltet sind
const projectsPath = useProjectsEntry();
</script>


<style lang="scss" src="assets/styles/cv.scss" scoped></style>
