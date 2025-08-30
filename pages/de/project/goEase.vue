<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>
    <div id="projectLinkNext">
      <nuxt-link to="/de/project/projects" class="custom-link"
        >PLANTMONIT</nuxt-link
      >
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/de/project/trickyTowers" class="custom-link"
        >TRICKYTOWERS</nuxt-link
      >
    </div>
    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          '          [GOEASE]          ',
          '       SMART SYSTEM       ',
          '  REACT NATIVE      GPS   ',
          '     ESP32   ANDROIDSDK   ',
          ' BLE     OPENMAPBOX       ',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="public\img\ge\thumbnail.svg" alt="plantmonit" />
      </div>
    </div>

    <DetailsScroll />

    <div v-if="isDesktop" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [PROBLEM]          ']" />
            <div class="paragraph">
              Der öffentliche Nahverkehr in Deutschland steht vor großen
              Herausforderungen. Es gibt viele verschiedene Busunternehmen und
              Verbände, die jeweils ihre eigenen Tarifsysteme haben. Oft gibt es
              keine gute App-Lösung oder gar keine.<br />
              Fahrgäste, insbesondere diejenigen, die nur gelegentlich
              öffentliche Verkehrsmittel nutzen, stehen vor einem verwirrenden
              System. <br />Sie wissen oft nicht, welches Unternehmen auf ihrer
              Strecke fährt, geschweige denn, wie sie ein Ticket kaufen oder den
              richtigen Tarif wählen sollen. <br /><br />Dazu kommt, dass die
              Fahrkartenautomaten oft kompliziert, unhygienisch und defekt sind,
              was den Prozess noch schwieriger macht. <br />Es wäre großartig,
              eine einfache Lösung für den Busverkehr zu haben, besonders an
              Tagen, an denen das Auto nicht verfügbar ist, wie an einem
              regnerischen Tag oder bei unerwarteten Ereignissen. Stattdessen
              machen die unterschiedlichen Tarife und das Fehlen einer zentralen
              Lösung es vielen Fahrgästen schwer.<br />
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image large">
            <img src="public\img\ge\process.svg" alt="plantmonit " />
          </div>
          <div class="text">
            <SplitFlapText :texts="['            [PROZESS]          ']" />
            <div class="paragraph">
              Der allgemeine Prozess begann mit einer intensiven
              Brainstorming-Phase, in der verschiedene Ideen diskutiert und
              erste Konzepte entwickelt wurden. Die anfängliche Vision war sehr
              ambitioniert: Eine Box sollte geschaffen werden, die zahlreiche
              Funktionen integriert. Sie sollte mithilfe von GPS den Standort
              erfassen, mit BLE erkennen, welche Handys gerade einsteigen, und
              mittels einer Lichtschranke die Anzahl der eingestiegenen Personen
              überprüfen. Zudem sollten drei unterschiedliche Schnittstellen und
              Nutzeroberflächen entwickelt werden – eine für die Endnutzer und
              zwei für die ÖPNV-Unternehmen, die Schwarzfahrerzahlen übermitteln
              und die Einrichtung des Systems ermöglichen. Das System sollte
              nicht nur auf Busse beschränkt sein, sondern eine universelle
              Lösung für den gesamten öffentlichen Verkehr darstellen,
              einschließlich Zügen, Bussen, Flugzeugen und Schiffen. Dieses
              erste grobe Konzept beinhaltete eine Vielzahl an Features und
              sollte eine umfassende Lösung für den gesamten Transportsektor
              bieten.<br /><br />
              Im Laufe des Projekts wurde jedoch klar, dass die Umsetzung all
              dieser Funktionen nicht nur den zeitlichen Rahmen sprengen würde,
              sondern auch vom eigentlichen Kern der Idee ablenkte. Die vielen
              geplanten Features führten dazu, dass das Projekt eher wie eine
              unzusammenhängende Sammlung von Funktionen wirkte, anstatt sich
              fokussiert dem Grundgedanken zu widmen. Deshalb wurde beschlossen,
              das Konzept zu überarbeiten und sich auf das Wesentliche zu
              konzentrieren. Die Features wurden auf ein Minimum reduziert,
              sodass ausschließlich auf die Kernidee – das Busfahren einfacher
              und komfortabler zu machen – fokussiert werden konnte.<br />
              Das überarbeitete Konzept bestand aus einer Box, die zusammen mit
              nur einer App arbeitet und sich zunächst ausschließlich auf Busse
              beschränkt. Diese Reduzierung ermöglichte es, die Komplexität zu
              senken und sich beispielsweise nur auf eine API zu konzentrieren,
              ohne weitere Schnittstellen berücksichtigen zu müssen. Durch diese
              Fokussierung konnte die Kernidee effizient und umsetzbar gestaltet
              und ein solides MVP (Minimum Viable Product) geschaffen werden,
              auf dem später weiter aufgebaut werden kann.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image large">
            <img src="public\img\ge\softwareProcess.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <div class="paragraph">
              <h3>Software Prozess</h3>
              Im nächsten Schritt begann die Entwicklung der Benutzeroberfläche
              und der App-Funktionalitäten. Zunächst wurden Wireframes und
              Design-Dummies in Figma erstellt, um die Nutzerführung zu
              visualisieren und sicherzustellen, dass die App eine intuitive und
              leicht verständliche Bedienung bietet. Die Erstellung der
              Wireframes war entscheidend, um die Benutzererfahrung im Vorfeld
              genau zu planen und potenzielle Schwachstellen im Design
              frühzeitig zu identifizieren. In dieser Phase lag der Fokus
              darauf, die Nutzerführung so einfach wie möglich zu gestalten und
              unnötige Komplexität zu vermeiden. Basierend auf diesen Wireframes
              wurde die mobile App mit React Native umgesetzt, um eine
              plattformübergreifende Nutzung zu ermöglichen. <br /><br />Die
              Wahl von React Native erfolgte bewusst, da es ermöglichte, die App
              über BLE tatsächlich mit den Beacons kommunizieren zu lassen. Der
              Schwerpunkt lag darauf, die Kernfunktionen – wie die automatische
              Erkennung des Beacons, das Erfassen der Fahrtdaten und die
              Hintergrundprozesse – stabil und performant zu implementieren.<br />
              Der Softwareentwicklungsprozess war stark iterativ geprägt:
              Nachdem die ersten funktionalen Prototypen entwickelt waren,
              wurden mehrere Runden von Nutzertests durchgeführt, um Feedback zu
              sammeln und die App sowie die darin enthaltenen Features basierend
              auf den Erfahrungen der Tester kontinuierlich zu verbessern.
              Besonders wichtig war es, direktes Feedback zur Nutzerführung und
              zum Komfort der App zu erhalten, um sicherzustellen, dass die
              Interaktionen so verständlich und unkompliziert wie möglich sind.
              Ein zentraler Aspekt bei der Konzeption der App war, dass der
              Einrichtungsprozess für den Nutzer einfach und schnell ablaufen
              sollte. Nach der einmaligen Einrichtung ist die Nutzung der App
              vollständig automatisiert, sodass sie im Alltag nicht mehr aktiv
              geöffnet werden muss. Die App läuft im Hintergrund und erledigt
              alle notwendigen Schritte, um die Busfahrten zu erfassen und die
              Abrechnung zu organisieren.<br />
              Dennoch bietet die App die Möglichkeit, während der Fahrt
              jederzeit zu überwachen, wo man sich gerade befindet und welche
              Kosten bereits abgebucht wurden. So bleibt der Nutzer, wenn
              gewünscht, immer informiert und behält die volle Kontrolle.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image smedi">
            <img
              src="public\img\ge\hardwareProcess.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
          <div class="text">
            <div class="paragraph">
              <h3>Hardware Prozess</h3>
              Der Hardwareprozess umfasste die Auswahl der technischen
              Komponenten, die für die Umsetzung der Beacon-Technologie
              erforderlich waren. Es war wichtig, dass die Beacons kostengünstig
              und leicht in Bussen nachrüstbar sind, um eine breite
              Implementierung zu ermöglichen. <br />Nachdem überlegt wurde,
              welche Funktionen die Hardware erfüllen muss, fiel die Wahl auf
              einen ESP32 LilyGO, der sowohl BLE- als auch GPS-Fähigkeiten
              bietet und somit alle funktionalen Anforderungen abdeckt.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [ERGEBNIS]          ']" />
            <div class="paragraph">
              GoEase ist ein innovatives System, das das Busfahren
              revolutionieren soll. Durch die Kombination aus einem leicht
              nachrüstbaren Beacon-System und einer benutzerfreundlichen Handy
              App bietet GoEase eine vollständig automatisierte und komfortable
              Möglichkeit, öffentliche Verkehrsmittel zu nutzen. Die App muss
              nur einmal eingerichtet werden und fungiert danach im Hintergrund
              – so wird das Busfahren so einfach und unbeschwert wie möglich
              gestaltet. Das Beacon, basierend auf einem ESP32 LilyGO, ist
              speziell für die Integration in bestehende Busse konzipiert und
              verwendet BLE, um mit der App zu kommunizieren. Diese Hardware ist
              kostengünstig, leicht nachrüstbar und kann flexibel im Bus
              montiert werden, um eine flächendeckende Nutzung
              sicherzustellen.<br /><br />
              Mit GoEase wird der gesamte Prozess der Ticketbeschaffung
              automatisiert: Die App erkennt automatisch den Einstieg in den
              Bus, erfasst die gefahrene Strecke und kalkuliert den
              entsprechenden Fahrpreis – ohne dass der Nutzer aktiv eingreifen
              muss. Während der Fahrt kann der Nutzer auf Wunsch überwachen, wo
              er sich gerade befindet und welche Kosten anfallen. <br />Für die
              Fahrgäste bedeutet das ein Höchstmaß an Komfort und Transparenz.
              Das Herzstück von GoEase ist die Einfachheit. Alle unnötigen
              Schritte, die den öffentlichen Nahverkehr oft kompliziert und
              unattraktiv machen, werden eliminiert. Keine komplexen
              Tarifsysteme, keine unzuverlässigen Ticketautomaten – stattdessen
              eine klare, intuitive Lösung, die den Nahverkehr zugänglicher
              macht und die Eintrittsbarrieren senkt.<br /><br />
              GoEase bietet insbesondere für Gelegenheitsnutzer eine stressfreie
              Möglichkeit, den öffentlichen Nahverkehr zu nutzen, und stellt
              eine zukunftsfähige Alternative zu bestehenden Systemen dar. Mit
              GoEase wird die Interaktion zwischen Menschen und öffentlichen
              Verkehrsmitteln durch den Einsatz moderner Technologie verbessert
              und erleichtert. Das Ergebnis ist ein System, das die
              Anforderungen der Nutzer in den Mittelpunkt stellt und so den
              Nahverkehr für alle zugänglicher macht.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText
          :texts="[
            '                       [PROJEKT] [VIDEO]                        ',
          ]"
        />
        <div class="project-video">
          <iframe
            src="https://www.youtube.com/embed/_YpyL8_qQfw?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
            allowfullscreen
          ></iframe>
        </div>
        <div class="projectDetailsFlap">
          <SplitFlapText
            :texts="[
              '        [KEYDATA]         ',
              '        TWO MONTHS      ',
              '      THIRD SEMESTER    ',
              '       GRADE: 1.3       ',
              '        TEAMWORK        ',
            ]"
          />
        </div>
      </div>
    </div>

    <div v-if="isTablet" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['                 [PROBLEM]                 ']"
            />
            <div class="paragraph">
              Der öffentliche Nahverkehr in Deutschland steht vor großen
              Herausforderungen.<br />
              Es gibt viele verschiedene Busunternehmen und Verbände, die
              jeweils ihre eigenen Tarifsysteme haben.<br />
              Oft gibt es keine gute App-Lösung oder gar keine. Fahrgäste,
              insbesondere diejenigen, die nur gelegentlich öffentliche
              Verkehrsmittel nutzen, stehen vor einem verwirrenden System. Sie
              wissen oft nicht, welches Unternehmen auf ihrer Strecke fährt,
              geschweige denn, wie sie ein Ticket kaufen oder den richtigen
              Tarif wählen sollen. <br />Dazu kommt, dass die
              Fahrkartenautomaten oft kompliziert, unhygienisch und defekt sind,
              was den Prozess noch schwieriger macht. Es wäre großartig, eine
              einfache Lösung für den Busverkehr zu haben, besonders an Tagen,
              an denen das Auto nicht verfügbar ist, wie an einem regnerischen
              Tag oder bei unerwarteten Ereignissen. Stattdessen machen die
              unterschiedlichen Tarife und das Fehlen einer zentralen Lösung es
              vielen Fahrgästen schwer.<br />
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['                  [PROZESS]                  ']"
            />
            <div class="paragraph">
              Der allgemeine Prozess begann mit einer intensiven
              Brainstorming-Phase, in der verschiedene Ideen diskutiert und
              erste Konzepte entwickelt wurden. Die anfängliche Vision war sehr
              ambitioniert: Eine Box sollte geschaffen werden, die zahlreiche
              Funktionen integriert. Sie sollte mithilfe von GPS den Standort
              erfassen, mit BLE erkennen, welche Handys gerade einsteigen, und
              mittels einer Lichtschranke die Anzahl der eingestiegenen Personen
              überprüfen. Zudem sollten drei unterschiedliche Schnittstellen und
              Nutzeroberflächen entwickelt werden – eine für die Endnutzer und
              zwei für die ÖPNV-Unternehmen, die Schwarzfahrerzahlen übermitteln
              und die Einrichtung des Systems ermöglichen. Das System sollte
              nicht nur auf Busse beschränkt sein, sondern eine universelle
              Lösung für den gesamten öffentlichen Verkehr darstellen,
              einschließlich Zügen, Bussen, Flugzeugen und Schiffen. Dieses
              erste grobe Konzept beinhaltete eine Vielzahl an Features und
              sollte eine umfassende Lösung für den gesamten Transportsektor
              bieten. Im Laufe des Projekts wurde jedoch klar, dass die
              Umsetzung all dieser Funktionen nicht nur den zeitlichen Rahmen
              sprengen würde, sondern auch vom eigentlichen Kern der Idee
              ablenkte. <br /><br />Die vielen geplanten Features führten dazu,
              dass das Projekt eher wie eine unzusammenhängende Sammlung von
              Funktionen wirkte, anstatt sich fokussiert dem Grundgedanken zu
              widmen. Deshalb wurde beschlossen, das Konzept zu überarbeiten und
              sich auf das Wesentliche zu konzentrieren. Die Features wurden auf
              ein Minimum reduziert, sodass ausschließlich auf die Kernidee –
              das Busfahren einfacher und komfortabler zu machen – fokussiert
              werden konnte. Das überarbeitete Konzept bestand aus einer Box,
              die zusammen mit nur einer App arbeitet und sich zunächst
              ausschließlich auf Busse beschränkt. Diese Reduzierung ermöglichte
              es, die Komplexität zu senken und sich beispielsweise nur auf eine
              API zu konzentrieren, ohne weitere Schnittstellen berücksichtigen
              zu müssen. Durch diese Fokussierung konnte die Kernidee effizient
              und umsetzbar gestaltet und ein solides MVP (Minimum Viable
              Product) geschaffen werden, auf dem später weiter aufgebaut werden
              kann.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\process.svg" alt="plantmonit " />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Software Prozess</h3>
              Im nächsten Schritt begann die Entwicklung der Benutzeroberfläche
              und der App-Funktionalitäten. Zunächst wurden Wireframes und
              Design-Dummies in Figma erstellt, um die Nutzerführung zu
              visualisieren und sicherzustellen, dass die App eine intuitive und
              leicht verständliche Bedienung bietet. Die Erstellung der
              Wireframes war entscheidend, um die Benutzererfahrung im Vorfeld
              genau zu planen und potenzielle Schwachstellen im Design
              frühzeitig zu identifizieren. In dieser Phase lag der Fokus
              darauf, die Nutzerführung so einfach wie möglich zu gestalten und
              unnötige Komplexität zu vermeiden. Basierend auf diesen Wireframes
              wurde die mobile App mit React Native umgesetzt, um eine
              plattformübergreifende Nutzung zu ermöglichen. Die Wahl von React
              Native erfolgte bewusst, da es ermöglichte, die App über BLE
              tatsächlich mit den Beacons kommunizieren zu lassen. Der
              Schwerpunkt lag darauf, die Kernfunktionen – wie die automatische
              Erkennung des Beacons, das Erfassen der Fahrtdaten und die
              Hintergrundprozesse – stabil und performant zu implementieren.<br /><br />
              Der Softwareentwicklungsprozess war stark iterativ geprägt:
              Nachdem die ersten funktionalen Prototypen entwickelt waren,
              wurden mehrere Runden von Nutzertests durchgeführt, um Feedback zu
              sammeln und die App sowie die darin enthaltenen Features basierend
              auf den Erfahrungen der Tester kontinuierlich zu verbessern.
              Besonders wichtig war es, direktes Feedback zur Nutzerführung und
              zum Komfort der App zu erhalten, um sicherzustellen, dass die
              Interaktionen so verständlich und unkompliziert wie möglich sind.
              Ein zentraler Aspekt bei der Konzeption der App war, dass der
              Einrichtungsprozess für den Nutzer einfach und schnell ablaufen
              sollte. Nach der einmaligen Einrichtung ist die Nutzung der App
              vollständig automatisiert, sodass sie im Alltag nicht mehr aktiv
              geöffnet werden muss. <br />Die App läuft im Hintergrund und
              erledigt alle notwendigen Schritte, um die Busfahrten zu erfassen
              und die Abrechnung zu organisieren.<br />
              Dennoch bietet die App die Möglichkeit, während der Fahrt
              jederzeit zu überwachen, wo man sich gerade befindet und welche
              Kosten bereits abgebucht wurden. So bleibt der Nutzer, wenn
              gewünscht, immer informiert und behält die volle Kontrolle.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\softwareProcess.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Hardware Process</h3>
              Um sicherzustellen, dass der Beacon insgesamt kostengünstig und
              einfach nachrüstbar ist, wurde ein Gehäuse aus Kunststoff
              konzipiert und mittels 3D-Druck gefertigt.<br />
              Zur einfachen Befestigung im Bus wurde ein Band mit einer Schnalle
              am Gehäuse angebracht, sodass es flexibel an verschiedenen Stangen
              montiert werden kann. <br />Dieser Prozessschritt war zwar im
              Vergleich zur Softwareentwicklung kleiner, jedoch entscheidend, um
              die technische Basis für das gesamte System zu schaffen und eine
              reibungslose Funktionalität im Alltag zu gewährleisten.
            </div>
          </div>
          <div class="image smedi">
            <img src="public\img\ge\hardwareProcess.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['                  [ERGEBNIS]                 ']"
            />
            <div class="paragraph">
              GoEase ist ein innovatives System, das das Busfahren
              revolutionieren soll. Durch die Kombination aus einem leicht
              nachrüstbaren Beacon-System und einer benutzerfreundlichen Handy
              App bietet GoEase eine vollständig automatisierte und komfortable
              Möglichkeit, öffentliche Verkehrsmittel zu nutzen.<br /><br />
              Die App muss nur einmal eingerichtet werden und fungiert danach im
              Hintergrund – so wird das Busfahren so einfach und unbeschwert wie
              möglich gestaltet. Das Beacon, basierend auf einem ESP32 LilyGO,
              ist speziell für die Integration in bestehende Busse konzipiert
              und verwendet BLE, um mit der App zu kommunizieren. Diese Hardware
              ist kostengünstig, leicht nachrüstbar und kann flexibel im Bus
              montiert werden, um eine flächendeckende Nutzung sicherzustellen.
              Mit GoEase wird der gesamte Prozess der Ticketbeschaffung
              automatisiert: Die App erkennt automatisch den Einstieg in den
              Bus, erfasst die gefahrene Strecke und kalkuliert den
              entsprechenden Fahrpreis – ohne dass der Nutzer aktiv eingreifen
              muss. Während der Fahrt kann der Nutzer auf Wunsch überwachen, wo
              er sich gerade befindet und welche Kosten anfallen. Für die
              Fahrgäste bedeutet das ein Höchstmaß an Komfort und Transparenz.
              <br /><br />
              Das Herzstück von GoEase ist die Einfachheit. Alle unnötigen
              Schritte, die den öffentlichen Nahverkehr oft kompliziert und
              unattraktiv machen, werden eliminiert. Keine komplexen
              Tarifsysteme, keine unzuverlässigen Ticketautomaten – stattdessen
              eine klare, intuitive Lösung, die den Nahverkehr zugänglicher
              macht und die Eintrittsbarrieren senkt. GoEase bietet insbesondere
              für Gelegenheitsnutzer eine stressfreie Möglichkeit, den
              öffentlichen Nahverkehr zu nutzen, und stellt eine zukunftsfähige
              Alternative zu bestehenden Systemen dar. Mit GoEase wird die
              Interaktion zwischen Menschen und öffentlichen Verkehrsmitteln
              durch den Einsatz moderner Technologie verbessert und erleichtert.
              Das Ergebnis ist ein System, das die Anforderungen der Nutzer in
              den Mittelpunkt stellt und so den Nahverkehr für alle zugänglicher
              macht.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\ge\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText
          :texts="['              [PROJEKT] [VIDEO]              ']"
        />
        <div class="project-video">
          <iframe
            src="https://www.youtube.com/embed/_YpyL8_qQfw?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
            allowfullscreen
          ></iframe>
        </div>
        <div class="projectDetailsFlap">
          <SplitFlapText
            :texts="[
              '        [KEYDATA]        ',
              '        TWO MONTHS     ',
              '    THIRD SEMESTER     ',
              '      GRADE: 1.3       ',
              '        TEAMWORK       ',
            ]"
          />
        </div>
      </div>
    </div>

    <div v-else-if="isMobile" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [PROBLEM]         ']" />
            <div class="paragraph">
              Der öffentliche Nahverkehr in Deutschland steht vor großen
              Herausforderungen.<br />
              Es gibt viele verschiedene Busunternehmen und Verbände, die
              jeweils ihre eigenen Tarifsysteme haben. Oft gibt es keine gute
              App-Lösung oder gar keine.<br />
              Fahrgäste, insbesondere diejenigen, die nur gelegentlich
              öffentliche Verkehrsmittel nutzen, stehen vor einem verwirrenden
              System. Sie wissen oft nicht, welches Unternehmen auf ihrer
              Strecke fährt, geschweige denn, wie sie ein Ticket kaufen oder den
              richtigen Tarif wählen sollen. <br />Dazu kommt, dass die
              Fahrkartenautomaten oft kompliziert, unhygienisch und defekt sind,
              was den Prozess noch schwieriger macht. Es wäre großartig, eine
              einfache Lösung für den Busverkehr zu haben, besonders an Tagen,
              an denen das Auto nicht verfügbar ist, wie an einem regnerischen
              Tag oder bei unerwarteten Ereignissen. Stattdessen machen die
              unterschiedlichen Tarife und das Fehlen einer zentralen Lösung es
              vielen Fahrgästen schwer.<br />
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [PROZESS]         ']" />
            <div class="paragraph">
              Der allgemeine Prozess begann mit einer intensiven
              Brainstorming-Phase, in der verschiedene Ideen diskutiert und
              erste Konzepte entwickelt wurden. Die anfängliche Vision war sehr
              ambitioniert: Eine Box sollte geschaffen werden, die zahlreiche
              Funktionen integriert. Sie sollte mithilfe von GPS den Standort
              erfassen, mit BLE erkennen, welche Handys gerade einsteigen, und
              mittels einer Lichtschranke die Anzahl der eingestiegenen Personen
              überprüfen. Zudem sollten drei unterschiedliche Schnittstellen und
              Nutzeroberflächen entwickelt werden – eine für die Endnutzer und
              zwei für die ÖPNV-Unternehmen, die Schwarzfahrerzahlen übermitteln
              und die Einrichtung des Systems ermöglichen. Das System sollte
              nicht nur auf Busse beschränkt sein, sondern eine universelle
              Lösung für den gesamten öffentlichen Verkehr darstellen,
              einschließlich Zügen, Bussen, Flugzeugen und Schiffen.<br /><br />
              Dieses erste grobe Konzept beinhaltete eine Vielzahl an Features
              und sollte eine umfassende Lösung für den gesamten Transportsektor
              bieten. Im Laufe des Projekts wurde jedoch klar, dass die
              Umsetzung all dieser Funktionen nicht nur den zeitlichen Rahmen
              sprengen würde, sondern auch vom eigentlichen Kern der Idee
              ablenkte. Die vielen geplanten Features führten dazu, dass das
              Projekt eher wie eine unzusammenhängende Sammlung von Funktionen
              wirkte, anstatt sich fokussiert dem Grundgedanken zu widmen.
              Deshalb wurde beschlossen, das Konzept zu überarbeiten und sich
              auf das Wesentliche zu konzentrieren. <br /><br />Die Features
              wurden auf ein Minimum reduziert, sodass ausschließlich auf die
              Kernidee – das Busfahren einfacher und komfortabler zu machen –
              fokussiert werden konnte. Das überarbeitete Konzept bestand aus
              einer Box, die zusammen mit nur einer App arbeitet und sich
              zunächst ausschließlich auf Busse beschränkt. Diese Reduzierung
              ermöglichte es, die Komplexität zu senken und sich beispielsweise
              nur auf eine API zu konzentrieren, ohne weitere Schnittstellen
              berücksichtigen zu müssen. Durch diese Fokussierung konnte die
              Kernidee effizient und umsetzbar gestaltet und ein solides MVP
              (Minimum Viable Product) geschaffen werden, auf dem später weiter
              aufgebaut werden kann.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\process.svg" alt="plantmonit " />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Software Prozess</h3>
              Im nächsten Schritt begann die Entwicklung der Benutzeroberfläche
              und der App-Funktionalitäten. <br />Zunächst wurden Wireframes und
              Design-Dummies in Figma erstellt, um die Nutzerführung zu
              visualisieren und sicherzustellen, dass die App eine intuitive und
              leicht verständliche Bedienung bietet. <br />Die Erstellung der
              Wireframes war entscheidend, um die Benutzererfahrung im Vorfeld
              genau zu planen und potenzielle Schwachstellen im Design
              frühzeitig zu identifizieren. In dieser Phase lag der Fokus
              darauf, die Nutzerführung so einfach wie möglich zu gestalten und
              unnötige Komplexität zu vermeiden. Basierend auf diesen Wireframes
              wurde die mobile App mit React Native umgesetzt, um eine
              plattformübergreifende Nutzung zu ermöglichen. Die Wahl von React
              Native erfolgte bewusst, da es ermöglichte, die App über BLE
              tatsächlich mit den Beacons kommunizieren zu lassen. Der
              Schwerpunkt lag darauf, die Kernfunktionen – wie die automatische
              Erkennung des Beacons, das Erfassen der Fahrtdaten und die
              Hintergrundprozesse – stabil und performant zu implementieren.<br /><br />
              Der Softwareentwicklungsprozess war stark iterativ geprägt:
              Nachdem die ersten funktionalen Prototypen entwickelt waren,
              wurden mehrere Runden von Nutzertests durchgeführt, um Feedback zu
              sammeln und die App sowie die darin enthaltenen Features basierend
              auf den Erfahrungen der Tester kontinuierlich zu verbessern.
              Besonders wichtig war es, direktes Feedback zur Nutzerführung und
              zum Komfort der App zu erhalten, um sicherzustellen, dass die
              Interaktionen so verständlich und unkompliziert wie möglich sind.
              Ein zentraler Aspekt bei der Konzeption der App war, dass der
              Einrichtungsprozess für den Nutzer einfach und schnell ablaufen
              sollte. Nach der einmaligen Einrichtung ist die Nutzung der App
              vollständig automatisiert, sodass sie im Alltag nicht mehr aktiv
              geöffnet werden muss. Die App läuft im Hintergrund und erledigt
              alle notwendigen Schritte, um die Busfahrten zu erfassen und die
              Abrechnung zu organisieren. Dennoch bietet die App die
              Möglichkeit, während der Fahrt jederzeit zu überwachen, wo man
              sich gerade befindet und welche Kosten bereits abgebucht wurden.
              So bleibt der Nutzer, wenn gewünscht, immer informiert und behält
              die volle Kontrolle.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\softwareProcess.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Hardware Prozess</h3>
              Um sicherzustellen, dass der Beacon insgesamt kostengünstig und
              einfach nachrüstbar ist, wurde ein Gehäuse aus Kunststoff
              konzipiert und mittels 3D-Druck gefertigt. Zur einfachen
              Befestigung im Bus wurde ein Band mit einer Schnalle am Gehäuse
              angebracht, sodass es flexibel an verschiedenen Stangen montiert
              werden kann. Dieser Prozessschritt war zwar im Vergleich zur
              Softwareentwicklung kleiner, jedoch entscheidend, um die
              technische Basis für das gesamte System zu schaffen und eine
              reibungslose Funktionalität im Alltag zu gewährleisten.
            </div>
          </div>
          <div class="image small">
            <img
              src="public\img\ge\hardwareProcess.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [ERGEBNIS]        ']" />
            <div class="paragraph">
              GoEase ist ein innovatives System, das das Busfahren
              revolutionieren soll. Durch die Kombination aus einem leicht
              nachrüstbaren Beacon-System und einer benutzerfreundlichen Handy
              App bietet GoEase eine vollständig automatisierte und komfortable
              Möglichkeit, öffentliche Verkehrsmittel zu nutzen. Die App muss
              nur einmal eingerichtet werden und fungiert danach im Hintergrund
              – so wird das Busfahren so einfach und unbeschwert wie möglich
              gestaltet. Das Beacon, basierend auf einem ESP32 LilyGO, ist
              speziell für die Integration in bestehende Busse konzipiert und
              verwendet BLE, um mit der App zu kommunizieren. Diese Hardware ist
              kostengünstig, leicht nachrüstbar und kann flexibel im Bus
              montiert werden, um eine flächendeckende Nutzung sicherzustellen.
              Mit GoEase wird der gesamte Prozess der Ticketbeschaffung
              automatisiert: Die App erkennt automatisch den Einstieg in den
              Bus, erfasst die gefahrene Strecke und kalkuliert den
              entsprechenden Fahrpreis – ohne dass der Nutzer aktiv eingreifen
              muss. Während der Fahrt kann der Nutzer auf Wunsch überwachen, wo
              er sich gerade befindet und welche Kosten anfallen. Für die
              Fahrgäste bedeutet das ein Höchstmaß an Komfort und
              Transparenz.<br /><br />
              Das Herzstück von GoEase ist die Einfachheit. Alle unnötigen
              Schritte, die den öffentlichen Nahverkehr oft kompliziert und
              unattraktiv machen, werden eliminiert. Keine komplexen
              Tarifsysteme, keine unzuverlässigen Ticketautomaten – stattdessen
              eine klare, intuitive Lösung, die den Nahverkehr zugänglicher
              macht und die Eintrittsbarrieren senkt. GoEase bietet insbesondere
              für Gelegenheitsnutzer eine stressfreie Möglichkeit, den
              öffentlichen Nahverkehr zu nutzen, und stellt eine zukunftsfähige
              Alternative zu bestehenden Systemen dar. Mit GoEase wird die
              Interaktion zwischen Menschen und öffentlichen Verkehrsmitteln
              durch den Einsatz moderner Technologie verbessert und erleichtert.
              Das Ergebnis ist ein System, das die Anforderungen der Nutzer in
              den Mittelpunkt stellt und so den Nahverkehr für alle zugänglicher
              macht.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\ge\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText :texts="['     [PROJEKT] [VIDEO]      ']" />
        <div class="project-video">
          <iframe
            src="https://www.youtube.com/embed/_YpyL8_qQfw?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
            allowfullscreen
          ></iframe>
        </div>
        <div class="projectDetailsFlap">
          <SplitFlapText
            :texts="[
              '        [KEYDATA]         ',
              '       TWO MONTHS       ',
              '     THIRD SEMESTER     ',
              '       GRADE: 1.3       ',
              '        TEAMWORK        ',
            ]"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useDeviceType } from "~/assets/composables/useDeviceType.js";

const { isMobile, isTablet, isDesktop } = useDeviceType();
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
