<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>
    <ProjectNav current="goEase" />
    <div class="project-hero">
      <div class="projectFlap">
        <SplitFlapText tag="h1" preset="detailsFlap" :align="'center'" :texts="[
          '          [GOEASE]          ',
        ]" />
        <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
          '       SMART SYSTEM       ',
          '  REACT NATIVE      GPS   ',
          '     ESP32   ANDROIDSDK   ',
          ' BLE     OPENMAPBOX       ',
        ]" />
      </div>

      <div class="wrapper">
        <ZoomableImage src="/img/ge/thumbnail.svg" alt="GoEase Thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <p class="project-intro">
          GoEase vereinfacht den Ticketkauf im Bus durch automatische Fahrterfassung. In zwei Monaten entstand im dritten Semester ein Software- und Hardwareprototyp als Teamprojekt.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="goease" />
      </section>

      <div class="project-section">
        <SplitFlapText tag="h2" preset="bannerFlap" :align="'center'" :texts="[
          '                       [PROJEKT] [VIDEO]                        ',
        ]" />
        <div class="project-film">
          <VideoEmbed id="_YpyL8_qQfw" title="GoEase — Projektvideo" poster="/img/ge/video-poster.webp" />
        </div>
        <div class="projectDetailsFlap">
          <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
            '[KEYDATA]',
            'TWO MONTHS',
            'THIRD SEMESTER',
            'GRADE: 1.3',
            'TEAMWORK',
          ]" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const accordionItems = [
  {
    title: 'Die Lösung',
    alwaysOpen: true,
    body: 'Kleine Sender im Bus kommunizieren mit dem Smartphone. Nach der Einrichtung erfasst GoEase die Fahrt im Hintergrund und zeigt Strecke und Kosten in der App. Fahrgäste müssen damit nicht vor jeder Fahrt den passenden Tarif auswählen. Automatische Abrechnung ist Teil des Systemkonzepts.',
    images: [
      '/img/ge/solution.svg',
    ],
    imageAlts: [
      'GoEase-App mit laufender Busfahrt auf einer Karte und Zusammenfassung einer abgeschlossenen Fahrt',
    ],
    imageCaptions: [
      'Die Oberfläche verbindet die laufende Fahrt mit einer nachvollziehbaren Kostenübersicht.',
    ],
  },
  {
    title: 'Der Einstieg muss einfach sein',
    body: 'Im Mittelpunkt stehen Gelegenheitsfahrgäste, die lokale Tarife und Ticketautomaten kaum kennen. Gerade bei einer spontanen Busfahrt wird der Ticketkauf damit zu einer zusätzlichen Aufgabe. GoEase verlagert diese Entscheidung in die Fahrterfassung und hält die Informationen in einer App zusammen.',
    images: [
      '/img/ge/problem.svg',
    ],
    imageAlts: [
      'Darstellung der Ausgangssituation beim Ticketkauf im öffentlichen Nahverkehr',
    ],
    imageCaptions: [
      'Ausgangspunkt ist die Tarifwahl vor einer spontanen Fahrt.',
    ],
  },
  {
    title: 'Den Umfang auf Busfahrten begrenzen',
    body: 'Die erste Konzeptphase umfasste ein vielseitigeres System. Die entscheidende Eingrenzung war, sich auf die automatische Ticketerfassung in Bussen zu konzentrieren. Daraus entstand ein klarer Kernablauf: einmal einrichten, einsteigen, Fahrt verfolgen und Kosten einsehen.',
    images: [
      '/img/ge/process.svg',
    ],
    imageAlts: [
      'GoEase-Konzeptunterlagen mit skizzierten Abläufen und Systembausteinen',
    ],
    imageCaptions: [
      'Die Konzeptphase führte zu einem engeren, umsetzbaren Projektumfang.',
    ],
  },
  {
    title: 'Die App schrittweise vereinfachen',
    body: 'Digitale Entwürfe führten zu einer plattformübergreifenden Anwendung mit React Native. Wiederholte Nutzertests flossen in die Vereinfachung der Einrichtung ein. Die Fahrtenansicht zeigt den aktuellen Verlauf; die Zusammenfassung macht Start, Ziel und Betrag nachvollziehbar.',
    images: [
      '/img/ge/softwareProcess.svg',
    ],
    imageAlts: [
      'Drei GoEase-Oberflächen vom frühen Entwurf bis zur ausgearbeiteten Kartenansicht',
    ],
    imageCaptions: [
      'Die Oberfläche entwickelte sich von ersten Screens zu einer fokussierten Fahrtenansicht.',
    ],
  },
  {
    title: 'Hardware zum Nachrüsten',
    body: 'ESP32, Bluetooth Low Energy und GPS bilden die technischen Bausteine des Systems. Die Sender sitzen in eigens entwickelten, 3D-gedruckten Gehäusen. Befestigungsbänder erlauben eine werkzeuglose Montage an den Haltestangen bestehender Busse.',
    images: [
      '/img/ge/hardwareProcess.svg',
    ],
    imageAlts: [
      'GoEase-Sendergehäuse mit Befestigungsband neben einem Busmodell',
    ],
    imageCaptions: [
      'Das Sendergehäuse ist für die nachträgliche Montage im Bus gestaltet.',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
