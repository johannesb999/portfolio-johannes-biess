<template>
  <main>
    <div class="background">
      <AppLink id="projectLinkStart" to="/de/about" label="ÜBER MICH" size="big" weight="bold" />
    </div>
    <div class="timeline">
      <ul>
        <li class="current">
          <AppLink class="content" to="/de/cv/hfgMaster" :scale="false">
            <h2>HFG (HOCHSCHULE <br />FÜR GESTALTUNG)</h2>
            <p>MASTER OF ARTS</p>
            <p class="location">SCHWÄBISCH GMÜND, DEUTSCHLAND</p>
          </AppLink>
          <div class="date">
            <h3>2026</h3>
          </div>
        </li>

        <li>
          <AppLink class="content" to="/de/cv/hfg" :scale="false">
            <h2>HFG (HOCHSCHULE <br />FÜR GESTALTUNG)</h2>
            <p>BACHELOR OF ARTS</p>
            <p class="location">SCHWÄBISCH GMÜND, DEUTSCHLAND</p>
          </AppLink>
          <div class="date">
            <h3>2026</h3>
          </div>
        </li>

        <!-- <li class="current">
            <AppLink class="content" to="/de/cv/internship" :scale="false">
              <h2>HOFFENTLICH IHRE FIRMA!</h2>
              <p>PRAKTIKUM</p>
              <p class="location">GERNE WELTWEIT</p>
            </AppLink>
            <div class="date">
              <h3>2025</h3>
            </div>
          </li> -->
        <li>
          <AppLink class="content" to="/de/cv/internship" :scale="false">
            <h2>MUSE CASE GMBH</h2>
            <p>PRAKTIKUM</p>
            <p class="location">STUTTGART, DEUTSCHLAND</p>
          </AppLink>
          <div class="date">
            <h3>2025</h3>
          </div>
        </li>
        <li>
          <AppLink class="content" to="/de/cv/bosch" :scale="false">
            <h2>BOSCH GMBH</h2>
            <p>WERKSTUDENT</p>
            <p class="location">SCHWÄBISCH GMÜND, DEUTSCHLAND</p>
          </AppLink>
          <div class="date">
            <h3>2024</h3>
          </div>
        </li>
        <li>
          <AppLink class="content" to="/de/cv/kbsz" :scale="false">
            <h2>BERUFSSCHULE</h2>
            <p>FACHGEBUNDENE FACHHOCHSCHULREIFE <br />(WIRTSCHAFT)</p>
            <p class="location">ELLWANGEN, DEUTSCHLAND</p>
          </AppLink>
          <div class="date">
            <h3>2020</h3>
          </div>
        </li>
        <li>
          <AppLink class="content" to="/de/cv/dtack" :scale="false">
            <h2>D-TACK GMBH</h2>
            <p>KAUFMANN IM GROß- UND AUßENHANDEL</p>
            <p class="location">HÜTTLINGEN, DEUTSCHLAND</p>
          </AppLink>
          <div class="date">
            <h3>2019</h3>
          </div>
        </li>
      </ul>
    </div>
    <AppLink id="title" href="/docs/resume/johannes-biess-lebenslauf-de.pdf" label="Resume anschauen" />
  </main>
</template>

<script setup></script>

<style lang="scss" src="assets/styles/resume.scss" scoped></style>
