<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>
    <div id="projectLinkNext">
      <nuxt-link to="/de/project/projects" class="custom-link">PLANTMONIT</nuxt-link>
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/de/project/trickyTowers" class="custom-link">TRICKYTOWERS</nuxt-link>
    </div>
    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
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
      <div class="picture">
        <img src="/img/ge/thumbnail.svg" alt="GoEase Thumbnail" />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section" class="section">
        <div class="section__inner section__inner--max">
          <p class="project-intro">
            GoEase ist ein System zur Automatisierung des Ticketkaufs im öffentlichen Busverkehr.
            Die Lösung verbindet kleine physische Sender in den Fahrzeugen mit einer digitalen
            Anwendung auf dem Mobiltelefon. Nach einer einmaligen Einrichtung erfasst das System
            Fahrten im Hintergrund.
          </p>
          <ProjectAccordion :items="accordionItems" id-prefix="goease" />
        </div>
      </section>

      <div class="project-section">
        <SplitFlapText preset="bannerFlap" :align="'center'" :texts="[
          '                       [PROJEKT] [VIDEO]                        ',
        ]" />
        <div class="project-video">
          <iframe src="https://www.youtube.com/embed/_YpyL8_qQfw?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player" frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
            allowfullscreen></iframe>
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

<script setup>
const accordionItems = [
  {
    title: 'Kernidee',
    body:
      'Die Kernidee besteht in der vollständigen Automatisierung der Fahrkartenerfassung durch ' +
      'lokalisierbare Sender. Dies ist essenziell, da unübersichtliche Tarifstrukturen und defekte ' +
      'Automaten oft unüberwindbare Barrieren für die spontane Nutzung öffentlicher Verkehrsmittel darstellen.',
  },
  {
    title: 'Nutzer & Herausforderung',
    body:
      'Die primären Nutzer sind Gelegenheitsfahrer des öffentlichen Nahverkehrs. Sie befinden sich in ' +
      'Situationen, in denen eine Autofahrt kurzfristig nicht möglich ist. Ihre größte Herausforderung ' +
      'ist die Unkenntnis über lokale Tarife und die komplexe Bedienung der unterschiedlichen Ticketautomaten.',
  },
  {
    title: 'Kontext & User Journey',
    body:
      'Der Kontext ist die spontane Nutzung von Bussen im städtischen Raum. Ein definierter Nutzerpfad ' +
      'existiert und wurde durch Automatisierung verkürzt. Nach einer einmaligen Kontoeinrichtung erfolgt ' +
      'die Erfassung der Fahrt sowie die Bezahlung vollständig im Hintergrund ohne weiteres aktives Zutun.',
  },
  {
    title: 'Nutzerzentrierte Recherche & Prozess',
    body:
      'Der Prozess begann mit einer umfassenden Ideenfindung und der Definition eines minimal ' +
      'funktionsfähigen Produkts. Die Softwareentwicklung startete mit digitalen Entwürfen und mündete ' +
      'in einer plattformübergreifenden Anwendung. Wiederholte Nutzertests halfen bei der kontinuierlichen Verbesserung.',
  },
  {
    title: 'Erkenntnisse für die Lösung',
    body:
      'Die Erkenntnisse der anfänglichen Konzeptphase zeigten, dass ein zu vielseitiges System vom ' +
      'Kernproblem ablenkt. Dies führte zur Reduzierung auf die automatische Ticketerfassung in Bussen. ' +
      'Feedback aus den Nutzertests floss anschließend direkt in die Vereinfachung des Einrichtungsprozesses ein.',
  },
  {
    title: 'Zweck, Lösungsansatz & Nutzen',
    body:
      'Zweck der Lösung ist die Beseitigung von Zugangsbarrieren im Nahverkehr. Der Ansatz nutzt ' +
      'kostengünstige Sender in Bussen zur Kommunikation mit Mobiltelefonen. Der Nutzen für Anwender ' +
      'liegt in der automatischen Streckenerfassung und der selbstständigen Berechnung der Fahrpreise.',
  },
  {
    title: 'Innovation',
    body:
      'Die Technologie kombiniert Mikrocontroller mit lokaler Funktechnik und satellitengestützter ' +
      'Positionsbestimmung. Der Mehrwert entsteht durch den Wegfall manueller Eingaben beim Ticketkauf. ' +
      'Die Anwendung berechnet die fälligen Beträge automatisch auf Basis der tatsächlich gefahrenen Strecke.',
  },
  {
    title: 'Ergebnis & Business Value',
    body:
      'Die Zielgruppe umfasst alle potenziellen Fahrgäste des öffentlichen Nahverkehrs. Die Lösung soll ' +
      'durch eine sehr niedrige Einstiegshürde für Nutzer und die einfache Nachrüstbarkeit der ' +
      'Senderbausteine in Bussen erfolgreich sein. Ein konkretes Geschäftsmodell ist nicht näher definiert.',
  },
  {
    title: 'Wettbewerb & USP',
    body:
      'Hauptkonkurrenten sind bestehende digitale Angebote einzelner Verkehrsverbünde sowie klassische ' +
      'Fahrkartenautomaten. Das Alleinstellungsmerkmal ist der Verzicht auf aktive Nutzereingaben beim ' +
      'Ticketkauf über eine verbundübergreifende technische Lösung in den Bussen.',
  },
  {
    title: 'Zugänglichkeit, Verantwortung & Vertrauen',
    body:
      'Die Automatisierung des Ticketkaufs reduziert kognitive Barrieren bei der Tarifwahl. Die Anwendung ' +
      'ermöglicht es den Nutzern, die laufenden Kosten während der Fahrt jederzeit einzusehen. Dies schafft ' +
      'Transparenz und gibt die volle Kontrolle über die abgebuchten Beträge.',
  },
  {
    title: 'Soziale & planetarische Werte',
    body:
      'Eine einfache Nutzung des Nahverkehrs kann dazu beitragen, den motorisierten Individualverkehr zu ' +
      'reduzieren. Dies schont langfristig materielle Ressourcen und fördert eine umweltfreundliche ' +
      'Mobilität. Die Einstiegshürde wird für alle Bevölkerungsgruppen gesenkt.',
  },
  {
    title: 'Weitere Informationen',
    body:
      'Die benötigten Hardwarekomponenten wurden gezielt für eine einfache Montage konzipiert. Die ' +
      'dreidimensional gedruckten Kunststoffgehäuse verfügen über spezielle Befestigungsbänder. Diese ' +
      'ermöglichen eine schnelle und werkzeuglose Installation an den Haltestangen in bestehenden Bussen.',
    // Bestehende Projektbilder — vorerst hier zwischengeparkt
    images: [
      '/img/ge/problem.svg',
      '/img/ge/process.svg',
      '/img/ge/softwareProcess.svg',
      '/img/ge/hardwareProcess.svg',
      '/img/ge/solution.svg',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
