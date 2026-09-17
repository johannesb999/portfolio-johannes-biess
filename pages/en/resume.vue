<template>
  <main>
    <div class="background">
      <AppLink id="projectLinkStart" to="/en/about" label="ABOUT ME" size="big" weight="bold" />
    </div>
    <div class="timeline">
      <ul>
        <li class="current">
          <AppLink class="content" to="/en/cv/hfgMaster" :scale="false">
            <h2>HFG (HOCHSCHULE <br />FÜR GESTALTUNG)</h2>
            <p>MASTER OF ARTS</p>
            <p class="location">SCHWÄBISCH GMÜND, GERMANY</p>
          </AppLink>
          <div class="date">
            <h3>2026</h3>
          </div>
        </li>

        <li>
          <AppLink class="content" to="/en/cv/hfg" :scale="false">
            <h2>HFG (HOCHSCHULE <br />FÜR GESTALTUNG)</h2>
            <p>BACHELOR OF ARTS</p>
            <p class="location">SCHWÄBISCH GMÜND, GERMANY</p>
          </AppLink>
          <div class="date">
            <h3>2026</h3>
          </div>
        </li>
        <li>
          <AppLink class="content" to="/en/cv/internship" :scale="false">
            <h2>MUSE CASE GMBH</h2>
            <p>INTERNSHIP</p>
            <p class="location">STUTTGART, GERMANY</p>
          </AppLink>
          <div class="date">
            <h3>2025</h3>
          </div>
        </li>
        <li>
          <AppLink class="content" to="/en/cv/bosch" :scale="false">
            <h2>BOSCH GMBH</h2>
            <p>WORKING STUDENT</p>
            <p class="location">SCHWÄBISCH GMÜND, GERMANY</p>
          </AppLink>
          <div class="date">
            <h3>2024</h3>
          </div>
        </li>
        <li>
          <AppLink class="content" to="/en/cv/kbsz" :scale="false">
            <h2>VOCATIONAL SCHOOL</h2>
            <p>DIPLOMA OF VOCATIONAL EDUCATION (BUSINESS)</p>
            <p class="location">ELLWANGEN, GERMANY</p>
          </AppLink>
          <div class="date">
            <h3>2020</h3>
          </div>
        </li>
        <li>
          <AppLink class="content" to="/en/cv/dtack" :scale="false">
            <h2>D-TACK GMBH</h2>
            <p>BUSINESS ADMINISTRATION IN WHOLESALE & FOREIGN TRADE</p>
            <p class="location">HÜTTLINGEN, GERMANY</p>
          </AppLink>
          <div class="date">
            <h3>2019</h3>
          </div>
        </li>
      </ul>
    </div>

    <AppLink id="title" href="/docs/resume/johannes-biess-lebenslauf-en.pdf" label="open Resume" />
  </main>
</template>

<script setup></script>

<style lang="scss" src="assets/styles/resume.scss" scoped></style>
