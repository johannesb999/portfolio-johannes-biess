<template>
  <main>
    <div class="background">
      <div id="projectLinkStart">
        <nuxt-link to="/en/about" class="custom-link">ABOUT ME</nuxt-link>
      </div>
    </div>
    <div class="timeline">
      <ul>
        <li>
          <NuxtLink to="/en/cv/hfg" class="content custom-link">
            <h2>HOCHSCHULE <br />FÜR GESTALTUNG</h2>
            <p>BACHELOR OF ARTS</p>
            <p class="location">SCHWÄBISCH GMÜND, GERMANY</p>
          </NuxtLink>
          <div class="date">
            <h3>2026</h3>
          </div>
        </li>
        <li class="current">
          <NuxtLink to="/en/cv/internship" class="content custom-link">
            <h2>HOPEFULLY YOUR COMPANY!</h2>
            <p>INTERNSHIP</p>
            <p class="location">ANYWHERE WORLDWIDE</p>
          </NuxtLink>
          <div class="date">
            <h3>2025</h3>
          </div>
        </li>
        <li>
          <NuxtLink to="/en/cv/bosch" class="content custom-link">
            <h2>BOSCH AS</h2>
            <p>WORKING STUDENT</p>
            <p class="location">SCHWÄBISCH GMÜND, GERMANY</p>
          </NuxtLink>
          <div class="date">
            <h3>2024</h3>
          </div>
        </li>
        <li>
          <NuxtLink to="/en/cv/kbsz" class="content custom-link">
            <h2>KBSZ</h2>
            <p>DIPLOMA OF VOCATIONAL EDUCATION (BUSINESS)</p>
            <p class="location">ELLWANGEN, GERMANY</p>
          </NuxtLink>
          <div class="date">
            <h3>2020</h3>
          </div>
        </li>
        <li>
          <NuxtLink to="/en/cv/dtack" class="content custom-link">
            <h2>D-TACK</h2>
            <p>BUSINESS ADMINISTRATION IN WHOLESALE & FOREIGN TRADE</p>
            <p class="location">HÜTTLINGEN, GERMANY</p>
          </NuxtLink>
          <div class="date">
            <h3>2019</h3>
          </div>
        </li>

        <div style="clear: both"></div>
      </ul>
    </div>

    <div id="title">
      <a
        href="/docs/ResumeEn.pdf"
        download="ResumeJohannesBiess.pdf"
        class="custom-link"
        >Download Full Resume.pdf</a
      >
    </div>
  </main>
</template>

<script setup></script>

<style src="assets/resume.css" scoped></style>
