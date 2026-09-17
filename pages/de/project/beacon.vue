<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="beacon" />

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
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
      <img src="/img/beacon/thumbnail.webp" alt="Beacon im Einsatz auf dem nächtlichen Heimweg" />
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <p class="project-intro">
          Beacon ist ein digitales, lokales Hilfenetzwerk für Orientierung, Handlungssicherheit und
          Zivilcourage im öffentlichen Raum. Es macht die vorhandene, sonst verborgene Hilfe sichtbar
          und verbindet schutzsuchende Personen in Echtzeit mit verifizierten Helfern und sicheren
          Orten in der direkten Umgebung.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="beacon" />
      </section>

      <section class="project-doc">
        <SplitFlapText preset="bannerFlap" :align="'center'" :texts="[
          '                       [PROJEKT] [DOKUMENTATION]                        ',
        ]" />
        <DocumentReader
          base="/docs/beacon/pages/de"
          :pages="129"
          :ratio="0.7083"
          download="/docs/beacon/beacon-dokumentation-de.pdf"
          label="Beacon Dokumentation"
        />
      </section>

      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'BACHELOR THESIS',
          'SEVENTH SEMESTER',
          'TEAMWORK',
        ]" />
      </div>
    </div>
  </main>
</template>

<script setup>
// Bachelorarbeit, Team Biess / Flaig / Kling. Aufbau wie pages/de/project/goEase.vue.
// Die Doku liegt nur auf Deutsch vor, deshalb verweisen beide Sprachen auf dieselbe Datei.
const accordionItems = [
  {
    title: 'Das Problem',
    body:
      'Nachts im öffentlichen Raum entsteht oft ein diffuses Gefühl der Unsicherheit. Unter akutem Stress ' +
      'versagen Feinmotorik und klares Denken. Gleichzeitig greifen Umstehende selten ein. Es fehlt die ' +
      'direkte Ansprache und jeder vermutet die Verantwortung beim anderen. Personen in Gefahr sind ' +
      'umgeben von Menschen, bleiben im Ernstfall aber isoliert.',
    images: [
      '/img/beacon/campaign.webp',
    ],
  },
  {
    title: 'Das Konzept',
    body:
      'Beacon ist ein digitales, lokales Hilfenetzwerk für den öffentlichen Raum. Es macht die ' +
      'vorhandene, sonst verborgene Hilfe sichtbar und verbindet schutzsuchende Personen in Echtzeit mit ' +
      'verifizierten Helfern und sicheren Orten in der direkten Umgebung. Aus Passanten, die sonst ' +
      'abwarten, werden einzeln angesprochene Helfer mit einer klaren Aufgabe. Aus einem unsicheren Weg ' +
      'wird eine navigierbare Route zum nächsten sicheren Ort. So bleibt die Person in jeder Phase der ' +
      'Unsicherheit handlungsfähig, vom ersten mulmigen Gefühl bis zum Ernstfall.',
    images: [
      '/img/beacon/overview.webp',
    ],
  },
  {
    title: 'Recherche',
    body:
      'Unsicherheit nachts entsteht selten aus objektiver Gefahr, sondern aus einem Informationsmangel. ' +
      'Vier Faktoren machen eine Situation unlesbar, das innere Frühwarnsystem eskaliert in Stufen, und ' +
      'im kritischen Moment fehlen der Person gleichzeitig die Einschätzung der Lage, eine klare ' +
      'Handlungsoption und die Gewissheit, dass jemand hilft. Daraus leiten sich sieben Anforderungen ab, ' +
      'die eine wirksame Lösung erfüllen muss.',
  },
  {
    title: 'Vier Faktoren der Unsicherheit',
    body:
      'Der Informationsmangel, aus dem Unsicherheit entsteht, setzt sich aus vier Faktoren zusammen. Wie ' +
      'früh und wie stark sie wirken, bestimmt die intersubjektive Wahrnehmung, geprägt von eigenen ' +
      'Erfahrungen und gesellschaftlichen Erzählungen.',
    points: [
      'Perzeptive Einschränkung: Dunkelheit und schlechte Sicht machen es schwer, Menschen, Bewegungen ' +
      'und Distanzen einzuordnen.',
      'Nicht einordenbarer Reiz: ein Verhalten, das nicht mehr in ein vertrautes Muster passt, etwa ' +
      'Schritte im gleichbleibenden Abstand oder ein langsam mitfahrendes Auto.',
      'Soziale Isolation: keine wahrnehmbare Unterstützung, niemand, der ansprechbar wäre oder eingreifen ' +
      'würde.',
      'Keine mentalen Fluchtwege: kein klarer nächster Schritt, keine Antwort auf die Frage, was jetzt zu ' +
      'tun wäre.',
    ],
  },
  {
    title: 'Eskalationsstufen',
    body:
      'Das innere Frühwarnsystem durchläuft vier Stufen. Die meisten Verläufe entwickeln sich Stufe für ' +
      'Stufe und lassen Zeit zum Handeln. Ein zweiter, seltenerer Verlauf beginnt ohne Vorwarnung direkt ' +
      'bei der Bedrohung.',
    points: [
      'Wachsamkeit: kein konkreter Auslöser, aber die Bedingungen ändern sich; die Person beginnt, die ' +
      'Umgebung zu scannen.',
      'Verdacht: ein nicht einordenbarer Reiz tritt auf, die Aufmerksamkeit richtet sich, und das System ' +
      'behandelt die Lage bereits als bedrohlich.',
      'Bedrohung: die Situation kippt von „vielleicht“ zu „eindeutig“, aus Unsicherheit wird Angst.',
      'Notfall: es kommt zum Übergriff. Wer bis zuletzt eine Option behält, und sei es das Wissen, dass ' +
      'Hilfe unterwegs ist, bleibt handlungsfähig.',
    ],
  },
  {
    title: 'Sieben Anforderungen an eine Lösung',
    body:
      'Aus Faktoren und Eskalationsstufen ergeben sich sieben Anforderungen, die eine wirksame Lösung ' +
      'alle erfüllen muss.',
    points: [
      'Information und Handlungsoptionen: Reize einordnen helfen und mentale Fluchtwege aufzeigen.',
      'Soziale Durchdringung: Passanten gezielt und niederschwellig zur Hilfe auffordern und so den ' +
      'Bystander-Effekt umgehen.',
      'Fehlertoleranz und Diskretion: diskret auslösbar und ohne negative Folgen bei einem Fehlalarm.',
      'Infrastruktur-Unabhängigkeit: überall und jederzeit auf dem Heimweg einsetzbar, ohne feste Zonen ' +
      'oder Öffnungszeiten.',
      'Kognitive Zugänglichkeit: blind und ohne kognitiven Aufwand auslösbar, weil unter Stress Denken ' +
      'und Feinmotorik versagen.',
      'Universelle Inklusion: hilft dem gesamten Spektrum der Betroffenen, ohne finanzielle Hürden oder ' +
      'körperliche Überlegenheit vorauszusetzen.',
      'Frühe Wirksamkeit: setzt schon in den frühen Stufen an, nicht erst im Notfall.',
    ],
  },
  {
    title: 'Gestaltungsherausforderungen',
    body:
      'Damit eine Anwendung im entscheidenden Moment trägt, muss sie mehr leisten als Funktionen ' +
      'anzubieten. Aus dem Informationsmangel folgen sechs Herausforderungen, die aufeinander aufbauen.',
    points: [
      'Präsenz sichtbar machen, ohne zu verraten: Hilfe ist meist in der Nähe, aber unsichtbar. Sie ' +
      'spürbar zu machen darf keine Standorte oder Bewegungen preisgeben, die sich gegen Helfende oder ' +
      'Betroffene wenden könnten.',
      'Den ersten Schritt entlasten: Wer auf ein ungutes Gefühl reagieren möchte, zögert, weil ein ' +
      'Fehlalarm peinlich wäre und der Anruf bei der Polizei als zu großer Schritt erscheint. Der ' +
      'Einstieg muss klein, diskret und im Zweifel folgenlos sein.',
      'Bedienbar unter Stress: Unter akutem Stress versagen Feinmotorik und klares Denken, und niemand ' +
      'schaut in diesem Moment gezielt aufs Display. Die Auslösung muss ohne Blick und ohne Nachdenken ' +
      'funktionieren.',
      'Orientierung ersetzen: Im Stress bleibt keine innere Landkarte möglicher Auswege. Die fehlende ' +
      'Handlungsoption muss von außen kommen, als schnelle, eindeutige Richtung statt als Aufgabe zum ' +
      'Nachdenken.',
      'Aus der Menge Verantwortung machen: Auf Umstehende ist kein Verlass, solange niemand gezielt ' +
      'gemeint ist. Aus einer diffusen Menge müssen einzeln adressierte Helfer werden.',
      'Vertrauen vor der Begegnung: Fremde helfen einander nur, wenn Vertrauen besteht. Und dieses ' +
      'Vertrauen muss schon bestehen, bevor die Situation eintritt, nicht erst in ihr.',
    ],
  },
  {
    title: 'Die Lösung',
    body:
      'Beacon macht die vorhandene Hilfe auf der Karte sichtbar, lässt sie über einen gehaltenen Knopf ' +
      'lautlos und umkehrbar anfordern, führt die Person auf einer Route zum nächsten sicheren Ort und ' +
      'spricht Helfer in der Nähe einzeln mit einer klaren Aufgabe an. Jede Herausforderung bekommt so ' +
      'eine konkrete Antwort.',
  },
  {
    title: 'Hilfe wird sichtbar',
    body:
      'Die Karte zeigt, wie viele Beacons im Umkreis erreichbar sind, und beantwortet die Frage, ob ' +
      'überhaupt jemand in der Nähe ist. Schon diese Zahl löst die Isolation, die ein leerer, dunkler Weg ' +
      'sonst verstärkt. Die genauen Standorte bleiben verborgen, solange niemand Hilfe ruft. So wird ' +
      'Präsenz spürbar, ohne dass sich Bewegungen nachverfolgen lassen.',
    images: [
      '/img/beacon/visibility.webp',
    ],
  },
  {
    title: 'Niederschwellig Hilfe rufen',
    body:
      'Im Verdacht hält die Person zunächst nur den Hilfe-Knopf und kündigt den Beacons in der Nähe ' +
      'lautlos an, dass sie sich unsicher fühlt, ohne einen möglichen Täter zu provozieren. Lässt sie den ' +
      'Knopf los, ruft sie die Hilfe tatsächlich herbei. Ob zusätzlich die Polizei verständigt wird, ' +
      'entscheidet sie selbst. Weil der erste Schritt nur ein stilles Vorbereiten ist und sich der Alarm ' +
      'jederzeit beenden lässt, bleibt ein Fehlalarm folgenlos.',
    images: [
      '/img/beacon/call.webp',
    ],
  },
  {
    title: 'Ein Weg entsteht',
    body:
      'Unter Stress bleibt keine innere Landkarte. Beacon zeichnet die Route zum nächsten sicheren Ort, ' +
      'ergänzt zwei Alternativen und führt mit einem Pfeil in die richtige Richtung. An die Stelle des ' +
      'fehlenden Fluchtwegs tritt eine schnelle, eindeutige Reaktion, die kein langes Nachdenken ' +
      'verlangt. Damit die Karte auch in der Dunkelheit lesbar bleibt, passt sie sich an Tag und Nacht ' +
      'an.',
    images: [
      '/img/beacon/route.webp',
    ],
  },
  {
    title: 'Umstehende werden aktiv',
    body:
      'Beacon spricht die Menschen in der Nähe, die die App nutzen, einzeln an und gibt jedem eine klar ' +
      'umgrenzte Aufgabe. Sie machen sich als sicherer Ort sichtbar oder gehen der schutzsuchenden Person ' +
      'ein Stück entgegen. Weil jeder weiß, dass er gemeint ist, greift der Bystander-Effekt nicht mehr, ' +
      'und die vorhandene Hilfsbereitschaft wird abrufbar.',
    images: [
      '/img/beacon/helpers.webp',
    ],
  },
  {
    title: 'Hilfe erkennen',
    body:
      'Sind Helfende und schutzsuchende Person nah genug beieinander, müssen sie einander in der ' +
      'Dunkelheit finden. Dafür nutzt Beacon die Taschenlampe des Handys: Sie leuchtet bei beiden auf, ' +
      'und die Beteiligten erkennen sich daran.',
    images: [
      '/img/beacon/recognition.webp',
    ],
  },
  {
    title: 'Vertrauen und Verantwortung',
    body:
      'Beacon prüft einmalig die Identität jeder Person, sodass ein Netz aus überprüften Menschen ' +
      'entsteht, das sich nur für seinen Zweck nutzen lässt. Niemand sucht sich aus, wem er hilft oder ' +
      'wer kommt. Helfende erhalten klare Verhaltensregeln und greifen etwa nicht ein, wenn sie sich ' +
      'dabei selbst in Gefahr brächten. Die Karte taugt dabei nie als Lagebild.',
  },
  {
    title: 'Vorbereitung auf den Ernstfall',
    body:
      'Weil im Ernstfall keine Zeit bleibt, eine Bedienung erst zu lesen, muss der Ablauf vorher sitzen. ' +
      'Eine Demo spielt ihn einmal in Ruhe durch, sodass die Person ihn später halb blind auslöst. ' +
      'Während sie den Hilfe-Knopf hält, bestätigt ein haptisches Feedback, was gerade geschieht und was ' +
      'ein Loslassen auslöst. So bricht sie die Interaktion nicht versehentlich ab.',
  },
  {
    title: 'Ausblick',
    body:
      'Beacon macht sichtbar, was ohnehin da ist: Hilfe, die auf dem nächtlichen Heimweg fast immer in ' +
      'der Nähe ist und nur abrufbar werden muss. Ob die Anwendung in echter Angst trägt, zeigt sich erst ' +
      'im realen Betrieb. Bis dahin ist sie eine fundierte Antwort auf eine einfache Frage: Wie bleibt ' +
      'ein Mensch handlungsfähig, wenn er sich allein fühlt, obwohl Hilfe in der Nähe ist?',
    images: [
      '/img/beacon/team.webp',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
