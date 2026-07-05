<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/de/project/jumpStar" class="custom-link">JUMPSTAR</nuxt-link>
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/de/project/goEase" class="custom-link">GOEASE</nuxt-link>
    </div>
    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
        '[PLANTMONIT]',
      ]" />
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        'PLANTS SMART TOOL',
        'SVELTE FIGMA',
        'ESP32   WIREFRAMES',
        'FUSION360  UI  UX',
        'OPENAI   MQTT    MONGODB ',
      ]" />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="/img/pm/thumbnail.svg" alt="PlantMonit Thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section" class="section">
        <div class="section__inner section__inner--max">
          <p class="project-intro">
            PlantMonit ist ein System aus Sensorik und Software zur Überwachung von Zimmerpflanzen.
            Die Zielgruppe umfasst Menschen mit wenig Zeit oder fehlendem Vorwissen. Das Gerät
            erfasst Feuchtigkeit, Temperatur und Licht. Eine Kamera analysiert den Pflanzenzustand
            visuell mittels künstlicher Intelligenz. Alle Daten werden in einer digitalen Anwendung
            gebündelt. Die Nutzer erhalten dort verständliche Handlungsempfehlungen zur Vermeidung
            von Pflegefehlern.
          </p>
          <ProjectAccordion :items="accordionItems" id-prefix="plantmonit" />
        </div>
      </section>

      <div class="project-section">
        <SplitFlapText preset="bannerFlap" :align="'center'" :texts="[
          '                         [PROJEKT] [VIDEO]                          ',
        ]" />
        <div class="project-video">
          <iframe src="https://www.youtube.com/embed/bKC-N5-m5u0?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player" frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '        [KEYDATA]         ',
          '      THREE MONTHS      ',
          '    SECOND SEMESTER     ',
          '      GRADE: 1.0        ',
          '       TEAMWORK         ',
        ]" />
      </div>
    </div>
  </main>
</template>

<script setup>
const accordionItems = [
  {
    title: 'Kernidee',
    body:
      'Die Kernidee des Projekts ist ein intelligentes Werkzeug zur Überwachung von Pflanzen. Die Lösung ' +
      'sammelt automatisiert Daten und gibt Pflegehinweise. Das ist wichtig, da viele Menschen im ' +
      'hektischen Alltag die Pflanzenpflege vergessen oder nicht über das nötige Wissen verfügen. ' +
      'Falsche Pflege führt oft zum Absterben der Pflanzen.',
  },
  {
    title: 'Nutzer & Herausforderung',
    body:
      'Die Zielgruppe umfasst Personen mit anspruchsvollen Berufen, vielfältigen Verpflichtungen sowie ' +
      'die Generation der Millennials. Diese Menschen haben oft wenig Zeit und Erfahrung in der ' +
      'Pflanzenpflege. Sie erkennen Krankheiten oder einen falschen Wasserbedarf meist zu spät. ' +
      'Dies führt zu Frustration und dem Verlust von Zimmerpflanzen.',
  },
  {
    title: 'Kontext & User Journey',
    body:
      'Der Anwendungsfall deckt die alltägliche Pflanzenpflege ab. Ein definierter Nutzerpfad beschreibt ' +
      'den Weg von der Installation der Anwendung bis zur täglichen Nutzung. Dieser Pfad wurde durch ' +
      'Tests mit Nutzern optimiert, um einen nahtlosen Ablauf zu gewährleisten und Hürden bei der ' +
      'Einrichtung frühzeitig zu beheben.',
  },
  {
    title: 'Nutzerzentrierte Recherche & Prozess',
    body:
      'Der Prozess begann mit einer Analyse der Mitbewerber zur Identifikation von ' +
      'Verbesserungspotenzialen. Darauf folgten die Definition einer typischen Nutzergruppe und die ' +
      'detaillierte Gestaltung des Nutzungsprozesses. Die Softwareentwicklung startete mit Entwürfen in ' +
      'verschiedenen Detailstufen und mündete in einem anklickbaren Prototyp für Nutzertests. Die ' +
      'Hardwareentwicklung umfasste eine Anforderungsanalyse, die Auswahl der Bauteile und den schnellen ' +
      'Bau von Prototypen mittels dreidimensionalem Druck.',
  },
  {
    title: 'Erkenntnisse für die Lösung',
    body:
      'Die Erkenntnisse aus der Marktanalyse flossen direkt in die Ausrichtung der Funktionen ein. Die ' +
      'Tests mit dem anklickbaren Prototyp deckten Verbesserungspotenziale in der Benutzerführung auf. ' +
      'Diese Rückmeldungen wurden genutzt, um die Bedienbarkeit der Anwendung zu optimieren.',
  },
  {
    title: 'Zweck, Lösungsansatz & Nutzen',
    body:
      'Das System verfolgt den Zweck, die Pflege von Pflanzen mit minimalem Zeitaufwand zu ermöglichen. ' +
      'Es adressiert Hobbygärtner und erfahrene Pflanzenliebhaber. Eine integrierte Kamera und ' +
      'verschiedene Sensoren erfassen kontinuierlich Umgebungsdaten. Die Nutzer erhalten dadurch ' +
      'verständliche und personalisierte Handlungsempfehlungen.',
  },
  {
    title: 'Innovation',
    body:
      'Die Lösung nutzt eine künstliche Intelligenz zur visuellen Analyse von Pflanzenbildern. Diese ' +
      'Technologie ermöglicht die Früherkennung von Schädlingen oder Fäulnis. Die Kombination aus ' +
      'Datenerfassung über Sensoren und der Bildanalyse stellt eine Neuerung dar. Die Datenübertragung ' +
      'erfolgt sehr effizient über eine spezielle Netzwerkschnittstelle.',
  },
  {
    title: 'Ergebnis & Business Value',
    body:
      'Die Anwendung soll durch eine hohe Benutzerfreundlichkeit und verlässliche Technik erfolgreich ' +
      'sein. Die Zielgruppe besteht aus Hobbygärtnern und Pflanzenliebhabern.',
  },
  {
    title: 'Wettbewerb & USP',
    body:
      'Die Mitbewerber bieten Lösungen an, die jedoch noch ungenutzte Potenziale aufweisen. Das ' +
      'Alleinstellungsmerkmal dieser Entwicklung ist die Kombination aus automatischer sensorbasierter ' +
      'Überwachung und bildbasierter Diagnose. Die Nutzer benötigen dadurch kein eigenes Expertenwissen.',
  },
  {
    title: 'Zugänglichkeit, Verantwortung & Vertrauen',
    body:
      'Die Anwendung besitzt eine sehr intuitive Benutzeroberfläche. Komplexe Daten werden übersichtlich ' +
      'aufbereitet. Dies senkt die Hürde für Personen ohne Vorwissen in der Pflanzenpflege.',
  },
  {
    title: 'Soziale & ökologische Werte',
    body:
      'Das Produkt hilft dabei, Pflanzen am Leben zu erhalten. Dies reduziert den Bedarf an ' +
      'Neuanschaffungen und Frustration.',
  },
  {
    title: 'Weitere Informationen',
    body:
      'Die technische Umsetzung der Software erfolgte mit einem modernen Rahmenwerk und einer ' +
      'skalierbaren Datenbankstruktur. Die Hardware besteht aus einem Mikrocontroller sowie Sensoren für ' +
      'Bodenfeuchtigkeit, Luftfeuchtigkeit, Temperatur und Licht. Das Gehäuse für diese Komponenten ' +
      'wurde schrittweise entwickelt und gedruckt.',
    // Bestehende Projektbilder — vorerst hier zwischengeparkt
    images: [
      '/img/pm/problem.svg',
      '/img/pm/process.svg',
      '/img/pm/software.svg',
      '/img/pm/hardware.svg',
      '/img/pm/solution.svg',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
