<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/de/project/drawingLight" class="custom-link">DRAWINGLIGHT</nuxt-link>
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/de/project/simpleChat" class="custom-link">SIMPLECHAT</nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="['        [PORTFOLIO]        ']" />
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        '      DIESE WEBSITE      ',
        '   NUXT3    WIREFRAMES   ',
        ' GITHUB   NUTZER TESTING ',
        '   FIGMA   UI     UX     ',
        'DOCKER       DEPLOYMENT  ',
      ]" />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="/img/po/thumbnail.svg" alt="Portfolio Thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section" class="section">
        <div class="section__inner section__inner--max">
          <ProjectAccordion :items="accordionItems" id-prefix="portfolio" />
        </div>
      </section>

      <div class="projectDetailsFlap">
        <SplitFlapText :texts="[
          '[KEYDATA]',
          'ONE MONTH',
          'SEMESTER BREAK',
          '  Note: DU ENTSCHEIDEST  ',
        ]" preset="keydataFlap" :align="'center'" />
      </div>
    </div>
  </main>
</template>

<script setup>
const accordionItems = [
  {
    title: 'Problem',
    body:
      'Wie präsentiere ich mich auf eine Weise, die sowohl professionell als auch ansprechend ' +
      'ist? Wie stelle ich meine Fähigkeiten und Erfahrungen auf eine visuell ansprechende Weise ' +
      'dar, die einfach und etabliert, aber irgendwie neu und modern ist? Wie stelle ich sicher, ' +
      'dass mein Portfolio nicht nur eine Reflexion meiner Arbeit, sondern auch meiner ' +
      'Persönlichkeit und meiner Werte ist? Diese Fragen habe ich mir gestellt, als ich anfing, ' +
      'an meinem Portfolio zu arbeiten. Ich wollte eine Website erstellen, die nicht nur meine ' +
      'Arbeit präsentiert, sondern auch zeigt, wer ich bin und wofür ich stehe. Ich wollte eine ' +
      'Plattform schaffen, die sowohl informativ als auch ansprechend ist, einen Ort, an dem ' +
      'sich Menschen über meine Fähigkeiten und Erfahrungen informieren, aber auch meine ' +
      'Persönlichkeit und meine Designphilosophie kennenlernen können.',
    images: ['/img/po/problem.svg'],
  },
  {
    title: 'Prozess',
    body:
      'Der Entwicklungsprozess meiner Portfolio-Website begann mit einer Konzeptionsphase, in ' +
      'der ich verschiedene Layout-Varianten und Designansätze durchdachte. Die größte ' +
      'Herausforderung bestand darin, zu beantworten, wie eine Website aussehen sollte, die ' +
      'sowohl als Bewerbung dient, meine Persönlichkeit widerspiegelt, den Konventionen des ' +
      'Webdesigns folgt und dennoch modern, einzigartig und individuell bleibt. Ich suchte nach ' +
      'einem Design, das meine Projekte clean präsentiert und gleichzeitig Raum bietet, meine ' +
      'persönlichen Werte zum Ausdruck zu bringen. Durch iteratives Testen und fortlaufendes ' +
      'Überarbeiten der Designvarianten konnte ich schließlich eine stimmige Lösung finden, die ' +
      'sowohl funktional als auch ästhetisch überzeugt und meine Designphilosophie auf ' +
      'authentische Weise vermittelt.',
    images: ['/img/po/process.svg'],
  },
  {
    title: 'Software Process',
    body:
      'Nachdem ich mit Figma ein ausgearbeitetes Konzept erstellt hatte, ging es daran, dieses ' +
      'in eine funktionale Website umzusetzen. In vorherigen Projekten hatte ich bereits mit ' +
      'React, Next.js und Svelte gearbeitet, entschied mich jedoch bewusst dafür, Nuxt 3 zu ' +
      'nutzen, um meine Kenntnisse zu erweitern und ein weiteres Framework kennenzulernen. Diese ' +
      'Entscheidung ermöglichte es mir, mich intensiver mit dem Vue-Ökosystem ' +
      'auseinanderzusetzen und gleichzeitig die modernen Features von Nuxt zu nutzen, um eine ' +
      'performante Webseite zu schaffen. Ein besonderer Fokus lag dabei auf der Modularität des ' +
      'Codes, um die Wartbarkeit der Website zu erleichtern und zukünftige Erweiterungen ' +
      'problemlos umsetzen zu können. Der Deploymentprozess wurde durch GitHub Actions ' +
      'automatisiert, um einen kontinuierlichen Entwicklungs-Workflow sicherzustellen.',
    images: ['/img/po/softwarepro.svg'],
  },
  {
    title: 'Implementation',
    body:
      'Ich bin derzeit mit meinem Portfolio zufrieden. Natürlich gibt es hier und da noch ' +
      'Kleinigkeiten, die man mit mehr Zeit verbessern kann und das werde ich mit der Zeit auch ' +
      'tun, aber für den Moment hoffe ich, dass es dir auch gefällt.',
    images: ['/img/po/implementation.svg'],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
