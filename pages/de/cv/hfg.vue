<template>
  <main>
    <div id="projectLinkStart">
      <nuxt-link to="/de/resume" class="custom-link">CV</nuxt-link>
    </div>

    <div class="project-details">
      <div class="project-section"></div>
      <div class="project-header"></div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [HFG]            ']" />
            <div class="textStyle">
              During my time at HfG, I worked on
              <nuxt-link
                to="/en/project/projects"
                class="custom-link"
                style="text-decoration: underline"
                >projects</nuxt-link
              >
              that were practical from the start.<br />
              I was encouraged to dive deep into fundamental questions like:
              What’s worth developing? How can I make sure it meets user needs?
              What technologies are necessary, and how do I use them
              effectively? HfG created an inspiring learning environment where I
              could not only build up my design and tech skills, but also learn
              how to apply them in real-world projects.

             
            </div>
          </div>
          <div class="imageSplit textStyle">
            <SplitFlapText
              :texts="[
                'FIGMA    UX        UI    ',
                'PROTOTYPING  USABILITY   ',
                '     DESIGNTHINKING      ',
                ' USER CENTERED LEANDESIGN',
                '  FULLSTACK DEVELOPMENT  ',
              ]"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image small">
            <img src="public\img\cv\hfgbuilding.jpg" alt="buildung of hfg" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['       [ABOUT] [HFG]         ']" />
            <div class="textStyle">
              Die Hochschule für Gestaltung (HfG) hat meine Fähigkeiten in
              Design und Entwicklung wirklich geprägt. An dieser renommierten
              Universität in Deutschland habe ich nicht nur Theorie gelernt,
              sondern auch praktische Erfahrungen gesammelt, die mich auf die
              Arbeitswelt vorbereitet haben. Der praxisorientierte,
              projektbasierte Unterricht gab mir frühzeitig Einblicke in reale
              Arbeitsprozesse. Besonders beeindruckt hat mich der Fokus auf
              Teamarbeit, der mir geholfen hat, meine Fähigkeiten in einem
              kollaborativen Umfeld zu verbessern. Dank des iterativen Ansatzes
              im Unterricht konnte ich alle Schritte vom ersten Konzept bis zum
              fertigen Prototypen erlernen.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style src="assets/cv.css" scoped></style>
