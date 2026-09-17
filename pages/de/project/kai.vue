<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="kai" />

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
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
      <img src="/img/kai/thumbnail.webp" alt="KAI im Einsatz auf dem Smartphone einer Servicekraft" />
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <!-- Erstes im Detailbereich: das Projektvideo in voller Breite -->
        <div class="project-film">
          <VideoEmbed id="8NNzapVb-Tk" title="KAI — Projektvideo" />
        </div>

        <p class="project-intro">
          KAI ist eine KI-gestützte Bestelloberfläche, die unerfahrenen Servicekräften hilft, den
          täglichen Betrieb sicher zu bewältigen. Als digitaler Buddy hört sie gesprochene
          Bestellungen mit, erzeugt daraus automatisch Bestellpositionen samt Änderungswünschen und
          übersetzt komplexe Kassenabläufe in klare, geführte Schritte. So bleibt den Mitarbeitenden
          der Kopf frei für die Gäste.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="kai" />
      </section>

      <section class="project-doc">
        <SplitFlapText preset="bannerFlap" :align="'center'" :texts="[
          '                       [PROJEKT] [DOKUMENTATION]                        ',
        ]" />
        <DocumentReader
          base="/docs/kai/pages/de"
          :pages="135"
          :ratio="1.4151"
          download="/docs/kai/kai-dokumentation-de.pdf"
          label="KAI Dokumentation"
        />
      </section>

      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'SIXTH SEMESTER',
          'TEAMWORK',
        ]" />
      </div>
    </div>
  </main>
</template>

<script setup>
// Semesterarbeit aus dem sechsten Semester. Aufbau wie pages/de/project/goEase.vue.
const accordionItems = [
  {
    title: 'Kernidee',
    body:
      'KAI ist eine Anwendung zur Unterstützung von Restaurantmitarbeitern, die auf künstlicher ' +
      'Intelligenz basiert. Sie hört aktiv beim Bestellvorgang zu und bietet situative Unterstützung. ' +
      'Dieser Ansatz zielt darauf ab, die kognitive Belastung zu reduzieren und die betriebliche ' +
      'Effizienz insgesamt zu verbessern.',
    images: [
      '/img/kai/thumbnail.webp',
    ],
  },
  {
    title: 'Nutzer & Herausforderung',
    body:
      'Die Hauptbenutzer sind Restaurantmitarbeiter, insbesondere Anfänger und Aushilfen. Der ' +
      'Gastronomiesektor hat mit einem kritischen Mangel an qualifizierten Arbeitskräften zu kämpfen, was ' +
      'zu hohen Arbeitslasten und stressigen Bedingungen führt. Eine große Herausforderung ist die ' +
      'unzureichende Einarbeitung in Kombination mit komplexen Kassensystemen, die an ' +
      'Benutzerfreundlichkeit mangeln. Diese verwirrenden Oberflächen erhöhen die kognitive Belastung, ' +
      'was zu einer hohen Fluktuation des Personals und häufigen Fehlern im täglichen Betrieb führt.',
  },
  {
    title: 'Kontext & User Journey',
    body:
      'Der Kontext umfasst den gesamten Serviceablauf, vom Platzieren der Gäste über das Aufnehmen von ' +
      'Bestellungen bis hin zur Zahlungsabwicklung. Das System verbessert diese Reise, indem es ' +
      'Spracherkennung nutzt, um die Bestelleingabe zu automatisieren und manuelles Tippen zu ersetzen. ' +
      'Es priorisiert aktiv dringende Aufgaben, anstatt statische Listen anzuzeigen. Darüber hinaus ' +
      'bietet die Anwendung eine klare Innennavigation, die sicherstellt, dass die Mitarbeiter in einer ' +
      'geschäftigen Umgebung bestimmte Tische leicht finden können.',
    images: [
      '/img/kai/navigation.webp',
    ],
  },
  {
    title: 'Nutzerzentrierte Recherche & Prozess',
    body:
      'Der Entwicklungsprozess begann mit einem Design-Sprint, um erste Annahmen schnell zu validieren. ' +
      'Es folgten Desk Research und Interviews mit erfahrenen Servicekräften, um spezifische betriebliche ' +
      'Probleme zu identifizieren. Das Team strukturierte die Ergebnisse mithilfe von ' +
      'Wertversprechenkarten und Szenario-Workshops. Schließlich wurde ein funktionaler Prototyp mit ' +
      'Echtzeit-Spracherkennung entwickelt und anschließend durch formative Benutzertests evaluiert.',
  },
  {
    title: 'Erkenntnisse für die Lösung',
    body:
      'Die Forschung ergab, dass manuelle Dateneingabe langsam ist und komplexe Menüs schwer zu merken ' +
      'sind. Dies beeinflusste direkt die Entscheidung, künstliche Intelligenz zur Sprachtranskription zu ' +
      'implementieren. Darüber hinaus ergaben Interviews, dass abstrakte Tischnummern Verwirrung stiften, ' +
      'was zur Entwicklung einer visuellen räumlichen Karte führte. Beobachtungen von Mitarbeitern, die ' +
      'kritische Allergieinformationen raten mussten, führten zur Integration von verpflichtenden ' +
      'automatisierten Warnhinweisen.',
  },
  {
    title: 'Zweck, Lösungsansatz & Nutzen',
    body:
      'Die Anwendung dient als digitaler Mentor, der ungeschultes Servicepersonal ermächtigt. Sie ' +
      'adressiert die Herausforderung der hohen kognitiven Belastung, indem sie ihre Benutzeroberfläche ' +
      'dynamisch an das spezifische Erfahrungsniveau des Benutzers anpasst. Anfänger erhalten ' +
      'detaillierte Anleitungen, während erfahrene Mitarbeiter minimale Unterbrechungen erleben. Dieser ' +
      'Ansatz minimiert betriebliche Fehler und ermöglicht es den Mitarbeitern, den Fokus auf persönliche ' +
      'und soziale Interaktionen mit den Gästen zu behalten.',
    images: [
      '/img/kai/onboarding.webp',
    ],
  },
  {
    title: 'Innovation',
    body:
      'Die Anwendung integriert Echtzeit-Sprachtranskription mit kontextsensitiven Cross-Selling- ' +
      'Vorschlägen. Eine Schlüsselinnovation ist die dynamische Anpassung der Benutzeroberfläche ' +
      'basierend auf einer Wissensvalidierungsbewertung. Dies ermöglicht dem System, nahtlos von ' +
      'maximaler Anleitung zu minimalem Eingreifen überzugehen. Diese Technologien schaffen Wert, indem ' +
      'sie passive Kassentools in proaktive Assistenten verwandeln, die die Bedürfnisse des Personals ' +
      'antizipieren.',
    images: [
      '/img/kai/suggestions.webp',
    ],
  },
  {
    title: 'KI-Implementierung',
    body:
      'Der funktionale Prototyp nutzt das Modell GPT-4o in Kombination mit einer Echtzeit- ' +
      'Programmierschnittstelle für latenzarme Sprachverarbeitung. Die künstliche Intelligenz ' +
      'transkribiert mitgehörte Gespräche und wandelt sie in strukturierte Bestelldaten um. ' +
      'Systemaufforderungen beschränken das Modell darauf, nur Gerichte zu identifizieren, die ' +
      'tatsächlich auf der Restaurantkarte verfügbar sind. Das sichert eine genaue Datenerfassung und ' +
      'verhindert unbeabsichtigte Ausgaben.',
  },
  {
    title: 'Ergebnis & Business Value',
    body:
      'Der primäre Zielmarkt besteht aus traditionellen Restaurants und Cafés, die Tischservice anbieten. ' +
      'Die Lösung soll erfolgreich sein, indem sie die Einarbeitungszeit für neue Mitarbeiter erheblich ' +
      'reduziert und damit die hohe Fluktuation in der Branche angeht. Indem ungeschulte Mitarbeiter ' +
      'effizient arbeiten können, senken Betriebe ihre Betriebskosten. Darüber hinaus sollen ' +
      'automatisierte Upselling-Vorschläge den Gesamtumsatz steigern.',
  },
  {
    title: 'Wettbewerb & USP',
    body:
      'Wettbewerber konzentrieren sich auf manuelle Eingaben und administrative Funktionen. Das ' +
      'Alleinstellungsmerkmal ist die proaktive KI-Assistenzfunktion. Die Benutzeroberfläche passt sich ' +
      'dynamisch an das Fähigkeitsniveau des Benutzers an und ersetzt komplexes manuelles Tippen.',
  },
  {
    title: 'Zugänglichkeit, Verantwortung & Vertrauen',
    body:
      'Die Benutzeroberfläche nutzt hohe Kontraste und klare Typografie, um visuelle Zugänglichkeit zu ' +
      'gewährleisten. Um Vertrauen zu wahren und Datenschutzbedenken hinsichtlich der Sprachaufzeichnung ' +
      'zu adressieren, müssen Betriebe transparente Kommunikationsstrategien implementieren, um die Gäste ' +
      'über die Technologie zu informieren.',
  },
  {
    title: 'Soziale & planetarische Werte',
    body:
      'Die Anwendung fördert die soziale Nachhaltigkeit, indem sie emotionalen Stress und das Risiko von ' +
      'Burnout unter dem Personal reduziert. Die Verbesserung der täglichen Arbeitsbedingungen trägt dazu ' +
      'bei, den Gastronomieberuf attraktiver zu machen und das langfristige Wohlbefinden der Mitarbeiter ' +
      'zu unterstützen.',
  },
  {
    title: 'Weitere Informationen',
    body:
      'Das Projekt betont, dass menschliche Interaktion einen zentralen Wert in der europäischen ' +
      'Gastronomie darstellt. Technologie wird strikt zur Unterstützung der persönlichen Gastfreundschaft ' +
      'implementiert, anstatt sie durch totale Automatisierung zu ersetzen, um sicherzustellen, dass der ' +
      'soziale Aspekt des Besuchs erhalten bleibt.',
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
