<template>
  <main class="project--beacon">
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="beacon" />

    <div class="project-hero">
      <div class="projectFlap">
        <SplitFlapText tag="h1" preset="detailsFlap" :align="'center'" :texts="[
          '[BEACON]',
        ]" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          'LOKALES HILFENETZWERK',
          'KONZEPTENTWICKLUNG',
          'BEDIENUNG UNTER STRESS',
          'ROLLEN UND VERANTWORTUNG',
          'TESTS UND ITERATION',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/beacon/thumbnail.webp" alt="Beacon im Einsatz auf dem nächtlichen Heimweg" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <ProjectAccordion :items="accordionItems" id-prefix="beacon">
          <template #research><BeaconResearch /></template>
          <template #network><BeaconNetwork /></template>
          <template #decisions><BeaconDecisions /></template>
        </ProjectAccordion>
      </section>

      <AppLink class="tryOutLink" href="/docs/beacon/beacon-dokumentation-de.pdf" label="DOKU ANSEHEN" size="xxxxl" weight="bold" underline />

      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'BACHELOR THESIS',
          'SEVENTH SEMESTER',
          'GRADE: 1.7',
          'TEAMWORK',
        ]" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// Content follows the documentation; interface questions are editorial, not the original HMW set.
const accordionItems = [
  {
    "title": "Beacon auf dem Heimweg",
    "alwaysOpen": true,
    "body": "Beacon ist ein digitales, lokales Hilfsnetzwerk für Orientierung, Handlungssicherheit und Zivilcourage im öffentlichen Raum. Wer sich nachts auf dem Heimweg unsicher fühlt, sieht, ob Menschen und sichere Orte in der Nähe erreichbar sind – schon bevor ein Hilferuf nötig wird.",
    "paragraphs": [
      "Wird Hilfe gebraucht, lässt sich der Hilferuf diskret auslösen. Einzelne Helfende erhalten eine konkrete Aufgabe: einen sicheren Ort anbieten oder der Person entgegengehen. Karte und Richtungspfeil zeigen der hilfesuchenden Person, wohin sie gehen kann."
    ],
    "images": [
      "/img/beacon/overview.webp"
    ],
    "imageAlts": [
      "Beacon: Karte mit verfügbarer Hilfe, Hilferuf und Navigation zum sicheren Ort"
    ],
    "imageCaptions": [
      "Verfügbare Hilfe, Hilferuf und Weg zum sicheren Ort in einem Ablauf."
    ]
  },
  {
    "title": "Wenn der Heimweg unsicher wird",
    "slot": "research"
  },
  {
    "title": "Ein Netzwerk aus Menschen und Orten",
    "slot": "network"
  },
  {
    "title": "Bedienung unter Stress",
    "slot": "decisions"
  },
  {
    "title": "Vertrauen und Start des Netzwerks",
    "body": "Im Hilfenetzwerk begegnen sich Menschen, die sich meist nicht kennen. Alle hinterlegen deshalb dieselben Angaben zur Person, verifizieren ihre Identität und bestätigen Verhaltensregeln. Helfende erfahren dabei auch, dass ihr eigener Schutz vor einem Eingreifen steht.",
    "paragraphs": [
      "Eine Demo führt vor der ersten Nutzung durch den Hilferuf und das haptische Feedback. Wer helfen möchte, lernt die eigene Aufgabe und ihre Grenzen kennen. Für den Start des Netzwerks betrachteten wir zunächst bestehende, nachts geöffnete Orte. Ihre Mitarbeitenden brauchen klare Abläufe und eine Einführung, bevor private Helfende das Angebot erweitern können."
    ],
    "images": [
      "/img/beacon/recognition.webp"
    ],
    "imageAlts": [
      "Beacon beim Zusammentreffen: Hinweise für Helfende und die Ansicht You are Safe mit persönlichen Kontakten"
    ],
    "imageCaptions": [
      "Nach dem Zusammentreffen bleiben konkrete Hilfen und persönliche Kontakte erreichbar."
    ]
  },
  {
    "title": "Team und Projektstand",
    "body": "Beacon entstand als Bachelorarbeit von Johannes Biess, Jannik Flaig und Aileen Kling. Wir entwickelten Recherche, Konzept und Gestaltung gemeinsam. Mein Schwerpunkt lag auf UI und UX sowie auf der inhaltlichen Herleitung und Struktur der Dokumentation.",
    "paragraphs": [
      "Die Arbeit umfasst das Interaktionskonzept, ausgearbeitete Oberflächen, Branding und Kampagne. Ein programmierter Prototyp bildete die drei Rollen und ihren Austausch ab. Im Test übten Teilnehmende die Abläufe unter Zeitdruck. Ob Beacon auch bei echter Angst verständlich zu bedienen ist, wurde damit nicht geprüft."
    ],
    "images": [
      "/img/beacon/team.webp"
    ],
    "imageAlts": [
      "Das Beacon-Projektteam"
    ],
    "imageCaptions": [
      "Gemeinsame Bachelorarbeit von Johannes Biess, Jannik Flaig und Aileen Kling."
    ]
  }
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
