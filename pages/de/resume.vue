<template>
  <html>
    <main>
      <div class="background">
        <div id="projectLinkStart">
          <nuxt-link to="/de/about" class="custom-link">ÜBER MICH</nuxt-link>
        </div>
      </div>
      <div class="timeline">
        <ul>
          <li>
            <NuxtLink to="/de/cv/hfg" class="content custom-link">
              <h2>HOCHSCHULE <br />FÜR GESTALTUNG</h2>
              <p>BACHELOR OF ARTS</p>
              <p class="location">SCHWÄBISCH GÜND, GERMANY</p>
            </NuxtLink>
            <div class="date">
              <h3>2026</h3>
            </div>
          </li>
          <li class="current">
            <NuxtLink to="/de/cv/internship" class="content custom-link">
              <h2>HOFFENTLICH IHRE FIRMA!</h2>
              <p>PRAKTIKUM</p>
              <p class="location">GERNE WELTWEIT</p>
            </NuxtLink>
            <div class="date">
              <h3>2025</h3>
            </div>
          </li>
          <li>
            <NuxtLink to="/de/cv/bosch" class="content custom-link">
              <h2>BOSCH AS</h2>
              <p>WERKSTUDENT</p>
              <p class="location">SCHWÄBISCH GÜND, GERMANY</p>
            </NuxtLink>
            <div class="date">
              <h3>2024</h3>
            </div>
          </li>
          <li>
            <NuxtLink to="/de/cv/kbsz" class="content custom-link">
              <h2>KBSZ</h2>
              <p>FACHGEBUNDENE FACHHOCHSCHULEREIFE <br />(WIRTSCHAFT)</p>
              <p class="location">ELLWANGEN, GERMANY</p>
            </NuxtLink>
            <div class="date">
              <h3>2020</h3>
            </div>
          </li>
          <li>
            <NuxtLink to="/de/cv/dtack" class="content custom-link">
              <h2>D-TACK</h2>
              <p>KAUFMANN IM GROß- UND AUßENHANDEL</p>
              <p class="location">HÜTTLINGEN, GERMANY</p>
            </NuxtLink>
            <div class="date">
              <h3>2019</h3>
            </div>
          </li>

          <div style="clear: both"></div>
        </ul>
      </div>
      <div id="title">LEBENSLAUF.pdf HERUNTERLADEN</div>
    </main>
  </html>
</template>

<script setup></script>

<style src="assets/resume.css" scoped></style>
