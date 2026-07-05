<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/de/project/goEase" class="custom-link">GOEASE</nuxt-link>
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/de/project/drawingLight" class="custom-link">DRAWINGLIGHT</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
        '      [TRICKYTOWERS]       ',
      ]" />
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        '   INTERACTIVE WINDOW    ',
        'HTML   CSS  JAVASCRIPT   ',
        '  FIGMA        WEBCAM    ',
        ' GOOGLE MEDIA PIPE       ',
      ]" />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="/img/tt/tt (1).svg" alt="TrickyTowers Thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section" class="section">
        <div class="section__inner section__inner--max">
          <ProjectAccordion :items="accordionItems" id-prefix="trickytowers" />
        </div>
      </section>

      <a href="https://tricky.johannes-biess.com/" target="_blank" rel="noopener noreferrer"
        class="tryOutLink custom-link">TRY IT OUT LIVE</a>

      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'ONE WEEK',
          'SECOND SEMESTER',
          'GRADE: 1.0',
          'TEAMWORK',
        ]" />
      </div>
    </div>
  </main>
</template>

<script setup>
const accordionItems = [
  {
    title: 'Problem',
    body:
      'Das Projekt befasste sich mit der Frage: Wie zieht man Aufmerksamkeit auf ein Schaufenster ' +
      'oder Gebäude? In diesem Fall sollte herausgefunden werden, wie das Marketing der Hochschule ' +
      'verbessert und sie für die Öffentlichkeit präsenter gemacht werden kann, um mehr potenzielle ' +
      'Studierende anzusprechen. Ziel war es, eine interaktive Installation zu entwickeln, die das ' +
      'Schaufenster der Hochschule in ein lebendiges, dynamisches Medium verwandelt.',
    images: ['/img/tt/idea.svg'],
  },
  {
    title: 'Prozess',
    body:
      'Das Projekt begann mit einer intensiven Phase von Brainstorming und Recherche. Es sollte ' +
      'herausgefunden werden, wie am besten junge Menschen, die sich sowohl für Technologie als ' +
      'auch für Design interessieren, erreicht werden können, um sie auf das Studienangebot ' +
      'aufmerksam zu machen. Schnell wurde klar, dass ein Schaufenster, das nur Animationen oder ' +
      'Videos abspielt, nicht ausreichen würde. Nur wenige Passanten nehmen sich die Zeit, ' +
      'stehenzubleiben und ein Video anzusehen. Die Entscheidung, eine interaktive Lösung zu ' +
      'entwickeln, schien die beste Lösung. Es war entscheidend, ein Konzept zu entwerfen, das ' +
      'Aufmerksamkeit erregt und gleichzeitig die Neugier der Passanten weckt. Die Installation ' +
      'musste so gestaltet sein, dass die Interaktion intuitiv ist, um das anfängliche Interesse ' +
      'aufrechtzuerhalten und die Hemmschwelle zur Nutzung möglichst gering zu halten. Neben der ' +
      'Gestaltung der Benutzerinteraktion musste auch berücksichtigt werden, welche Technologie ' +
      'sich am besten für die Umsetzung eignet. Das Ziel war, eine effektive Balance zwischen ' +
      'einem auffälligen visuellen Design und einer benutzerfreundlichen, zugänglichen Interaktion ' +
      'zu finden.',
    images: ['/img/tt/process.svg'],
  },
  {
    title: 'Ergebnis',
    body:
      'TrickyTowers ist ein interaktives Schaufenster, das Passanten auf spielerische Weise ' +
      'anzieht und ein außergewöhnliches Erlebnis bietet. Die Installation besteht aus einem ' +
      'Bildschirm, einem Rückprojektor und einer Web-App, die in Kombination mit einer Webcam und ' +
      'Google MediaPipe die Handbewegungen der Nutzer erkennt. Sobald die Hand des Nutzers erkannt ' +
      'wird, startet ein Spiel. Das Spielprinzip von TrickyTowers lässt sich am besten als eine ' +
      'Art Tetris mit einer Physik-Engine beschreiben. Ziel ist es jedoch nicht, Reihen zu bilden, ' +
      'sondern einen möglichst hohen Turm zu bauen. Die physikalischen Elemente machen das Bauen ' +
      'zu einer Herausforderung, die Geschick und strategisches Denken erfordert. Dieses ' +
      'interaktive Erlebnis zieht nicht nur Aufmerksamkeit auf sich, sondern lädt die Nutzer auch ' +
      'aktiv dazu ein, mit der Installation zu interagieren und die Verbindung zur Hochschule auf ' +
      'spielerische und positive Weise zu erleben.',
    images: ['/img/tt/solution.svg'],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
