<template>
  <main class="project--kai">
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="kai" />

    <div class="project-hero">
      <div class="projectFlap">
        <SplitFlapText tag="h1" preset="detailsFlap" :align="'center'" :texts="[
          '[KAI]',
        ]" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          'SERVICE IM GESPRÄCH',
          'BESTELLUNG PER SPRACHE',
          'SITUATIVE HINWEISE',
          'TISCHSTATUS UND WEGE',
          'ERPROBTER FUNKTIONSPROTOTYP',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/kai/core-idea.webp" alt="KAI-Aufgabenübersicht im Restaurant mit UX Design Awards Nominierung 2026" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <div class="project-film">
          <VideoEmbed id="8NNzapVb-Tk" title="KAI — Projektvideo" poster="/img/kai/navigation.webp" />
        </div>

        <ProjectAccordion :items="accordionItems" id-prefix="kai">
          <template #research><KaiResearch language="de" /></template>
          <template #prototype><KaiPrototype language="de" /></template>
        </ProjectAccordion>
      </section>

      <AppLink class="tryOutLink" href="/docs/kai/kai-dokumentation-de.pdf" label="DOKU ANSEHEN" size="xxxxl" weight="bold" underline />

      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'SIXTH SEMESTER',
          'GRADE: 1.3',
          'TEAMWORK',
        ]" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const accordionItems = [
  {
    title: 'KAI im Service',
    alwaysOpen: true,
    paragraphs: [
      'KAI ist eine mobile Assistenz für neue Servicekräfte. Beim Gast macht die App gesprochene Bestellungen als einzelne Positionen sichtbar. Während der Schicht zeigt sie Tischstatus, offene Aufgaben und den Weg zum nächsten Tisch. Bei Fragen zu Gerichten und Abläufen stehen passende Hinweise direkt in der Anwendung bereit.',
      'Johannes Biess, Jannik Flaig und Paula Romanessi entwickelten das Teamprojekt im sechsten Semester gemeinsam. Es verbindet ausgearbeitete Oberflächen für den Serviceablauf mit einem Funktionsprototyp für die Bestellaufnahme. Mein Schwerpunkt lag auf UI und UX sowie auf der inhaltlichen Herleitung und Struktur der Dokumentation.',
    ],
    images: [
      '/img/kai/onboarding.webp',
    ],
    imageAlts: [
      'KAI-Einstiegshilfen und Bestellübersicht für Tisch 07 auf zwei Smartphone-Mockups',
    ],
    imageCaptions: [
      'Einstiegshilfe und Bestellansicht zeigen, wie KAI neue Servicekräfte im Ablauf begleitet.',
    ],
  },
  {
    title: 'Einarbeitung im Restaurant',
    slot: 'research',
  },
  {
    title: 'Hinweise bei der Bestellaufnahme',
    body: 'Die laufende Mitschrift macht gesprochene Bestellungen als einzelne Positionen sichtbar. Die Servicekraft prüft Gerichte und Sonderwünsche, korrigiert einzelne Einträge und sendet die Bestellung erst danach an die Küche. So bleibt sie auch bei einer Fehlinterpretation der Spracheingabe im Ablauf handlungsfähig.',
    paragraphs: [
      'Hinweise greifen an konkreten Entscheidungspunkten ein: KAI schlägt etwa eine Milchalternative vor oder warnt bei einer problematischen Auswahl. Anfängerhilfen lassen sich mit wachsender Erfahrung reduzieren; eine Wissensabfrage begleitet diesen Schritt. Der Entwurf hält die Informationen damit verfügbar, ohne sie ständig in den Vordergrund zu stellen.',
      'Für einen Einsatz im Restaurant müssten Gäste transparent über Sprachaufnahmen informiert und Angaben zu Allergenen verlässlich gepflegt werden.',
    ],
    images: [
      '/img/kai/suggestions.webp',
    ],
    imageAlts: [
      'Drei KAI-Oberflächen mit Milchalternativen, Warnhinweis und Wissensabfrage vor dem Abschalten von Hilfen',
    ],
    imageCaptions: [
      'Eine passende Milchalternative, ein Warnhinweis und die Wissensabfrage vor dem Abschalten der Einstiegshilfen.',
    ],
  },
  {
    title: 'Tischübersicht und Navigation',
    body: 'Neue Servicekräfte müssen Tischnummern und Abläufe erst kennenlernen. Die Tischübersicht verbindet jeden Tisch mit seinem Status, Zeitangaben und offenen Aufgaben: Speisen und Getränke stehen bereit, ein Tisch möchte bezahlen oder es gibt gerade nichts zu tun. So lässt sich vor dem nächsten Weg erkennen, wo Service gebraucht wird.',
    paragraphs: [
      'Eine Karte und eine Richtungsanzeige helfen, den ausgewählten Tisch im Restaurant zu finden. Die Servicekraft wählt zunächst eine Aufgabe aus der Übersicht und erhält anschließend die räumliche Orientierung für den Weg dorthin. Mit zunehmender Erfahrung kann sie auf die Navigationshilfe verzichten und weiter mit der Aufgabenliste arbeiten.',
    ],
    images: [
      '/img/kai/navigation.webp',
      '/img/kai/thumbnail.webp',
    ],
    imageAlts: [
      'Zwei KAI-Oberflächen mit Karte und Richtungsanzeige zur Navigation zu Tisch 07',
      'KAI-Aufgabenübersicht nach Tischen auf einem Smartphone im Restaurant',
    ],
    imageCaptions: [
      'Karte und Richtungsanzeige verorten Tisch 07 im Restaurant.',
      'Die Übersicht zeigt Status, Zeitangaben und nächste Aufgaben pro Tisch.',
    ],
  },
  {
    title: 'Funktionsprototyp',
    slot: 'prototype',
  },
  {
    title: 'Erprobung im Serviceablauf',
    body: 'Eine Service-Anfängerin erprobte den mobilen UI-Prototyp in zwei Szenarien: einen Gast zu Tisch 7 führen und eine Bestellung aufnehmen. Beobachtet wurde, ob sie Tischstatus, nächste Handlung und die Unterstützung durch KAI ohne zusätzliche Erklärung verstand.',
    paragraphs: [
      'Der Test zeigte, wo die Führung noch nicht ausreichte. Das Öffnen eines Tisches und die Abfrage der Gästezahl waren nicht selbsterklärend; die Bestellaufnahme verlief zu schnell, und das Quiz wurde übersprungen. Für die nächste Iteration leiteten wir daraus eine deutlichere Schrittführung, einen geführten Einstieg und klareres Systemfeedback ab.',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
