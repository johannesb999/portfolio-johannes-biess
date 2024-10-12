<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/de/about" class="custom-link">ÜBER MICH</nuxt-link>
      </div>
      <div class="timeline">
        <ul>
          <li>
            <NuxtLink to="/de/cv/hfg" class="content custom-link">
              <h2>HfG - Hochschule <br />für Gestaltung</h2>
              <p>Bachelor of Arts</p>
              <p class="location">Schwäbisch Günd, Germany</p>
            </NuxtLink>
            <div class="date">
              <h3>2026</h3>
            </div>
          </li>
          <li class="current">
            <NuxtLink to="/de/cv/internship" class="content custom-link">
              <h2>Hoffentlich Ihre Firma!</h2>
              <p>Internship</p>
              <p class="location">gerne Weltweit</p>
            </NuxtLink>
            <div class="date">
              <h3>2025</h3>
            </div>
          </li>
          <li>
            <NuxtLink to="/de/cv/bosch" class="content custom-link">
              <h2>Bosch AS</h2>
              <p>Werkstudent</p>
              <p class="location">Schwäbisch Günd, Germany</p>
            </NuxtLink>
            <div class="date">
              <h3>2024</h3>
            </div>
          </li>
          <li>
            <NuxtLink to="/de/cv/kbsz" class="content custom-link">
              <h2>KBSZ</h2>
              <p>Fachgebundene Fachhochschulreife(Wirtschaft)</p>
              <p class="location">Ellwangen, Germany</p>
            </NuxtLink>
            <div class="date">
              <h3>2020</h3>
            </div>
          </li>
          <li>
            <NuxtLink to="/de/cv/dtack" class="content custom-link">
              <h2>D-TACK</h2>
              <p>Kaufmann im Groß- und Außenhandel</p>
              <p class="location">Hüttlingen, Germany</p>
            </NuxtLink>
            <div class="date">
              <h3>2019</h3>
            </div>
          </li>

          <div style="clear: both"></div>
        </ul>
      </div>
      <div id="title">LEBENSLAUF</div>
    </main>
  </html>
</template>

<script setup></script>

<style src="assets/resume.css" scoped></style>
