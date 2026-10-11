<template>
  <main>
    <div class="background"></div>

    <ResumeNav current="hfgMaster" />

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        ' MASTER OF ARTS ',
        'STRATEGISCHE GESTALTUNG',
        ' 1. SEMESTER  2026 ',
      ]" />
    </div>

    <div class="wrapper">
      <!-- Vorläufig dasselbe Hochschulbild wie auf der Bachelorseite. -->
      <ZoomableImage src="/img/cv/hfgbuilding.svg" alt="Gebäude der HfG Schwäbisch Gmünd" />
    </div>

    <div class="project-details">
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['[LEARNINGS]']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              Im Masterstudium Strategische Gestaltung beschäftige ich mich mit
              Systemen und den Zusammenhängen, in denen Gestaltung wirkt.
              Designforschung und Management ergänzen die Arbeit an einzelnen
              digitalen Produkten aus meinem Bachelorstudium.
            </div>
          </div>

          <div class="text">
            <SplitFlapText :texts="['[ABOUT] [HFG]']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              Seit 2026 studiere ich an der HfG Schwäbisch Gmünd im ersten
              Semester des Masterstudiengangs Strategische Gestaltung.
              Der Studiengang verbindet Gestaltung, Forschung und Management.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" src="assets/styles/cv.scss" scoped></style>
