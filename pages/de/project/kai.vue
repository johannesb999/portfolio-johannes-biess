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
          'SERVICE ASSISTANT',
          'GPT4O   REALTIME API',
          'SPEECH   FIGMA   UI UX',
          'DESIGN SPRINT   TESTING',
          'INDOOR NAVIGATION',
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
    title: 'Die Lösung',
    alwaysOpen: true,
    paragraphs: [
      'KAI vereinfacht den Service im Restaurant: Neue Servicekräfte nehmen Bestellungen im Gespräch auf, sehen die nächsten Aufgaben am jeweiligen Tisch und erhalten passende Hinweise direkt im Ablauf. Die Oberfläche bietet ausführliche Einstiegshilfen und reduziert diese mit wachsender Erfahrung.',
      'Das Teamprojekt aus dem sechsten Semester verbindet einen ausgearbeiteten UI-Entwurf mit einem funktionalen Sprachprototyp. Wir entwickelten die Gestaltung gemeinsam; mein Schwerpunkt lag auf UI und UX sowie auf der inhaltlichen Herleitung und Struktur der Dokumentation.',
    ],
    images: [
      '/img/kai/onboarding.webp',
    ],
    imageAlts: [
      'KAI-Einstiegshilfen und Bestellübersicht für Tisch 07 auf zwei Smartphone-Mockups',
    ],
    imageCaptions: [
      'Einstieg und Bestellübersicht: Unterstützung direkt im Serviceablauf.',
    ],
  },
  {
    title: 'Recherche',
    slot: 'research',
  },
  {
    title: 'Bestellaufnahme',
    body: 'Die Spracheingabe übersetzt das Gespräch in Bestellpositionen und Änderungswünsche. Die Servicekraft prüft die sichtbare Liste und bearbeitet einzelne Positionen, bevor sie die Bestellung an die Küche sendet. Vorschläge und Warnungen erscheinen dort, wo die Entscheidung ansteht.',
    images: [
      '/img/kai/suggestions.webp',
    ],
    imageAlts: [
      'Drei KAI-Oberflächen mit Milchalternativen, Warnhinweis und Wissensabfrage vor dem Abschalten von Hilfen',
    ],
    imageCaptions: [
      'Bestellpositionen bleiben bearbeitbar; Hinweise unterstützen die Auswahl.',
    ],
  },
  {
    title: 'Tischübersicht und Navigation',
    body: 'Die Tischübersicht verbindet offene Aufgaben mit ihrem Ort im Restaurant. Priorisierte Hinweise zeigen, wo Speisen bereitstehen oder Gäste bezahlen möchten. Die räumliche Karte ergänzt diese Liste und erleichtert die Orientierung zwischen den Tischen.',
    images: [
      '/img/kai/navigation.webp',
      '/img/kai/thumbnail.webp',
    ],
    imageAlts: [
      'Zwei KAI-Oberflächen mit Karte und Richtungsanzeige zur Navigation zu Tisch 07',
      'KAI-Aufgabenübersicht nach Tischen auf einem Smartphone im Restaurant',
    ],
    imageCaptions: [
      'Karte und Richtungsanzeige führen zum ausgewählten Tisch.',
      'Offene Aufgaben sind dem jeweiligen Tisch zugeordnet.',
    ],
  },
  {
    title: 'Sprachprototyp',
    slot: 'prototype',
  },
  {
    title: 'Gestaltung und Datenschutz',
    body: 'KAI unterstützt die persönliche Betreuung der Gäste. Klare Typografie und Kontraste strukturieren die Oberfläche; eine Wissensabfrage begleitet das Abschalten von Einstiegshilfen. Für einen Einsatz im Restaurant gehören ein transparenter Umgang mit Sprachaufnahmen und verlässliche Allergieinformationen zum System.',
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
