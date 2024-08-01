<template>
  <HeaderSwitch />

  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/de/about" class="custom-link">ÜBER MICH</nuxt-link>
      </div>
      <div class="timeline">
        <ul>
          <li>
            <NuxtLink to="/de/cv/hfg" class="content">
              <h2>HfG - Hochschule <br />für Gestaltung</h2>
              <p>Bachelor of Arts</p>
              <p class="location">Schwäbisch Günd, Germany</p>
            </NuxtLink>
            <div class="date">
              <h3>2026</h3>
            </div>
          </li>
          <li>
            <NuxtLink to="/de/cv/internship" class="content">
              <h2>Eventuell Ihre Firma!</h2>
              <p>Internship</p>
              <p class="location">gerne Weltweit</p>
            </NuxtLink>
            <div class="date">
              <h3>2025</h3>
            </div>
          </li>
          <li>
            <NuxtLink to="/de/cv/bosch" class="content">
              <h2>Bosch AS</h2>
              <p>Werkstudent</p>
              <p class="location">Schwäbisch Günd, Germany</p>
            </NuxtLink>
            <div class="date">
              <h3>2024</h3>
            </div>
          </li>
          <li>
            <NuxtLink to="/de/cv/kbsz" class="content">
              <h2>KBSZ</h2>
              <p>Diploma of Vocational Education (Business)</p>
              <p class="location">Ellwangen, Germany</p>
            </NuxtLink>
            <div class="date">
              <h3>2020</h3>
            </div>
          </li>
          <li>
            <NuxtLink to="/de/cv/dtack" class="content">
              <h2>D-TACK</h2>
              <p>Business Administration in Wholesale & Foreign Trade</p>
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

<style scoped>
html {
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
}

#title {
  color: black;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  position: relative;
  bottom: 0;
  padding-bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
#projectLinkStart {
  position: absolute;
  top: 0;
  padding-top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

.content-left {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 50px;
}

.custom-link {
  color: black;
  text-decoration: none;
}
.custom-link:hover {
  color: black;
  text-decoration: underline;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Geologica", sans-serif;
  color: #171717;
  text-decoration: none;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
}

h3 {
  font-size: 1.5rem;
  font-weight: 100;
  letter-spacing: 7px;
}

p {
  font-size: 1.75rem;
  font-weight: 100;
  letter-spacing: 7px;
}

.location {
  margin-top: 5px;
  font-size: 1rem;
  font-weight: 100;
}

.timeline:before {
  content: "";
  position: absolute;
  height: 100%;
  left: 50%;
  width: 4px;
  top: -20px;
  border: solid 1px #171717;
}

.timeline {
  position: relative;
  margin: 50px auto;
  margin-top: 200px;
  width: 1500px;
  padding: 50px 0;
}

.timeline ul {
  margin: 0;
  padding: 0;
}

.timeline ul li {
  list-style: none;
  box-sizing: border-box;
  line-height: normal;
  position: relative;
  width: 50%;
  padding: 40px 100px;
}

.timeline ul li .content h2 {
  color: #171717;
  padding: 0px 2px 18px 0px;
}

.timeline ul li:nth-child(odd) {
  float: left;
  text-align: right;
  clear: both;
}

.timeline ul li:nth-child(even) {
  float: right;
  text-align: left;
  clear: both;
}

.date {
  padding-bottom: 20px;
}

.timeline ul li:nth-child(odd):before {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  border: 1px solid #171717;
  box-shadow: 0 0 0 3px rgba(13, 13, 13, 0.2);
  border-radius: 50%;
  right: -16px;
  background-color: #fbfbfb;

  top: 24px;
}

.timeline ul li:nth-child(even):before {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #171717;
  box-shadow: 0 0 0 3px rgba(13, 13, 13, 0.2);
  left: -11px;
  background-color: #fbfbfb;
  top: 24px;
}

.timeline ul li:nth-child(odd) .date {
  position: absolute;
  top: 12px;
  right: -150px;
  margin: 0;
  padding: 15px 3px;
}

.timeline ul li:nth-child(even) .date {
  position: absolute;
  top: 12px;
  left: -150px;
  margin: 0;
  padding: 15px 3px;
}

@media (max-width: 1000px) {
  .timeline {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .timeline {
    width: 100%;
  }
  .timeline:before {
    left: 20px;
  }
  .timeline ul li:nth-child(odd),
  .timeline ul li:nth-child(even) {
    width: 100%;
    text-align: left;
    padding-left: 50px;
  }

  .timeline ul li:nth-child(odd):before {
    top: -18px;
    left: 10px;
  }
  .timeline ul li:nth-child(even):before {
    top: -18px;
    left: 10px;
  }

  .timeline ul li:nth-child(odd) .date,
  .timeline ul li:nth-child(even) .date {
    top: -30px;
    left: 50px;
    right: inherit;
  }
}
</style>
