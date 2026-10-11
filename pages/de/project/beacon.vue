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
          'HILFENETZWERK',
          'BACHELORARBEIT',
          'FIGMA   UI   UX',
          'RESEARCH   PROTOTYPING',
          'BRANDING   KAMPAGNE',
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
    "title": "Die Lösung",
    "alwaysOpen": true,
    "body": "Beacon ist ein lokales Hilfenetzwerk für den nächtlichen Heimweg. Die Anwendung verbindet Menschen, die sich unsicher fühlen, mit Helfenden und sicheren Orten in ihrer Umgebung. Bereits vor einem Notfall sehen sie, wo Unterstützung erreichbar ist.",
    "paragraphs": [
      "Ein Hilferuf lässt sich diskret vorbereiten und auslösen. Beacon weist Helfenden eine konkrete Aufgabe zu und führt die hilfesuchende Person zu einem sicheren Ort. So bleibt sie mit der Situation nicht allein und weiß, was sie als Nächstes tun kann."
    ],
    "images": [
      "/img/beacon/overview.webp"
    ],
    "imageAlts": [
      "Beacon: Karte mit verfügbarer Hilfe, Hilferuf und Navigation zum sicheren Ort"
    ],
    "imageCaptions": [
      "Die Anwendung zeigt verfügbare Hilfe und begleitet den Weg bis zum Zusammentreffen."
    ]
  },
  {
    "title": "Recherche: Unsicherheit verstehen",
    "slot": "research"
  },
  {
    "title": "Warum ein Hilfenetzwerk?",
    "body": "Aus der Recherche ging hervor, dass Hilfe früh erreichbar sein und entlang eines frei gewählten Heimwegs funktionieren muss. Wir entwickelten vier Ansätze: ein Hilfenetzwerk, feste Schutzräume, stationierte Drohnen und die Bildung von Gruppen. Mit der Thinking-Hats-Methode verglichen wir ihre Wirkung, ihr Potenzial und ihre Risiken anhand der sieben Anforderungen.",
    "paragraphs": [
      "Wir verfolgten das Hilfenetzwerk weiter, weil es vorhandene Personen und Orte einbezieht und Unterstützung auch zwischen einzelnen Schutzräumen ermöglicht. Dafür müssen die Rollen klar begrenzt sein: Helfende bieten einen sicheren Ort an oder kommen der Person entgegen. Ihre Standorte dürfen vor einem Hilferuf keine Rückschlüsse auf Bewegungen oder Abwesenheiten zulassen."
    ],
    "images": [
      "/img/beacon/campaign.webp"
    ],
    "imageAlts": [
      "Beacon-Kampagne für das lokale Hilfenetzwerk"
    ],
    "imageCaptions": [
      "Die Kampagne spricht Menschen an, die sich als Helfende am Netzwerk beteiligen."
    ]
  },
  {
    "title": "Die Bedienung",
    "slot": "decisions"
  },
  {
    "title": "Vertrauen und Vorbereitung",
    "body": "Das Hilfenetzwerk bringt Menschen zusammen, die sich in der Regel nicht kennen. Deshalb beginnt die Nutzung mit einer gemeinsamen Grundlage: Alle hinterlegen dieselben Angaben zur Person, verifizieren ihre Identität und bestätigen die Verhaltensregeln. Dazu gehört, den eigenen Schutz vor ein Eingreifen zu stellen.",
    "paragraphs": [
      "Eine Demo führt vor der ersten Nutzung durch den Hilferuf. Sie macht den Ablauf und das haptische Feedback vertraut, damit diese Bedienung nicht erst in einer unsicheren Situation erlernt werden muss. Die Vorbereitung klärt außerdem, welche Hilfe erwartet wird und wo die Verantwortung der Helfenden endet."
    ]
  },
  {
    "title": "Projektumfang",
    "body": "Beacon entstand als Bachelorarbeit im Team Biess, Flaig und Kling. Wir entwickelten Recherche, Konzept und Gestaltung gemeinsam. Mein Schwerpunkt lag auf UI und UX sowie auf der inhaltlichen Herleitung und Struktur der Dokumentation.",
    "paragraphs": [
      "Die Arbeit umfasst das Interaktionskonzept, die ausgearbeiteten Oberflächen, das Branding und eine Kampagne. Für den Betrieb des Netzwerks haben wir außerdem den Einstieg über bestehende, nachts geöffnete Orte betrachtet. Deren Mitarbeitende brauchen klare Abläufe und eine Einführung in ihre Rolle, bevor private Helfende das Netzwerk erweitern."
    ],
    "images": [
      "/img/beacon/team.webp"
    ],
    "imageAlts": [
      "Das Beacon-Projektteam"
    ],
    "imageCaptions": [
      "Gemeinsame Bachelorarbeit von Biess, Flaig und Kling."
    ]
  }
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
