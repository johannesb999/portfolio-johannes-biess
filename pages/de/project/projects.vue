<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/de/project/jumpStar" class="custom-link"
        >JUMPSTAR</nuxt-link
      >
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/de/project/goEase" class="custom-link">GOEASE</nuxt-link>
    </div>
    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          '        [PLANTMONIT]       ',
          '   PLANTS SMART TOOL     ',
          '       SVELTE FIGMA      ',
          '   ESP32   WIREFRAMES    ',
          '   FUSION360  UI  UX     ',
          'OPENAI   MQTT    MONGODB ',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="public\img\pm\thumbnail.svg" alt="plantmonit" />
      </div>
    </div>

    <DetailsScroll />

    <div v-if="isDesktop" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [PROBLEM]            ']" />
            <div class="paragraph">
              Im hektischen Alltag bleibt oft wenig Zeit für die Pflege von
              Zimmer- und Gartenpflanzen. Viele Menschen, insbesondere
              diejenigen mit stressigen Jobs oder zeitaufwändigen
              Verpflichtungen, vergessen oft, ihre Pflanzen zu gießen, zu düngen
              oder richtig zu platzieren. <br />
              <br />Dies führt oft dazu, dass Pflanzen verwelken, über- oder
              unterbewässert werden oder generell nicht die Pflege erhalten, die
              sie benötigen.<br />
              Laut den neuesten Statistiken verlieren 37% der Hobbygärtner jedes
              Jahr ein oder zwei Zimmerpflanzen. Besonders Millennials scheinen
              damit mehr Probleme zu haben, mit durchschnittlich etwa sieben
              sterbenden Zimmerpflanzen pro Jahr.
            </div>
          </div>
          <div class="image mela">
            <img src="public\img\pm\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image mela">
            <img
              src="public\img\pm\process.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
          <div class="text">
            <SplitFlapText :texts="['           [PROCESS]           ']" />
            <div class="paragraph">
              Zu Beginn des Projekts wurde eine Wettbewerbsanalyse
              durchgeführt,<br />
              um bestehende Lösungen auf dem Markt zu evaluieren. <br />Ziel war
              es, herauszufinden, welche Funktionen bereits gut umgesetzt sind
              und wo noch Verbesserungspotenzial besteht. Diese Analyse half
              dabei, ungenutzte Potenziale zu identifizieren und die eigene
              Lösung gezielt darauf auszurichten. Im Anschluss wurde eine
              detaillierte Persona entwickelt, um die Bedürfnisse der Zielgruppe
              klar zu definieren. <br />Dabei stellte sich heraus, dass das Ziel
              darin besteht, eine Lösung zu schaffen, die es ermöglicht,
              Pflanzen mit minimalem Zeitaufwand zu pflegen und sowohl
              Hobbygärtner als auch erfahrene Pflanzenliebhaber anzusprechen.
              Parallel zur Persona-Entwicklung wurde eine User Journey
              gestaltet, die den gesamten Nutzungsprozess der App abdeckt – von
              der Installation bis hin zur täglichen Nutzung. Durch die
              Erstellung detaillierter Nutzerpfade wurde sichergestellt, dass
              die Benutzerführung nahtlos und intuitiv ist. Kombiniert mit
              iterativen User-Testings entstand so ein durchdachter und
              benutzerfreundlicher Einrichtungsprozess, durch den mögliche
              Hürden frühzeitig erkannt und die Nutzerfreundlichkeit gezielt
              verbessert werden konnte.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image large">
            <img src="public\img\pm\software.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <div class="paragraph">
              <h3>Software Prozess</h3>
              Der Softwareprozess startete mit der ausführlichen Erstellung von
              Low-Fi, Mid-Fi und High-Fi Wireframes, um die Struktur und die
              Benutzerführung der Anwendung zu planen.<br /><br />
              Dieser Prozess war stark iterativ und legte den Fokus klar auf die
              User Experience, sodass jede Version durch Nutzerfeedback
              optimiert wurde. <br />Der High-Fi Figma-Klickdummy ermöglichte
              umfassende User Tests, um sicherzustellen, dass die
              Benutzerführung nahtlos und intuitiv ist. Nachdem der Figma-Dummy
              positives Feedback erhalten hatte und das Design zufriedenstellte,
              begann die Umsetzung der Web-App mit Svelte. Dabei lag der
              Schwerpunkt darauf, die im Figma-Dummy erarbeiteten Funktionen
              detailgetreu umzusetzen und eine reibungslose, performante
              Nutzererfahrung zu gewährleisten.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image large">
            <img src="public\img\pm\hardware.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <div class="paragraph">
              <h3>Hardware Prozess</h3>
              Der Hardwareprozess begann mit einer Anforderungsanalyse der
              benötigten Hardware. Es wurde ermittelt, welche Funktionen das
              Smart Tool erfüllen muss, und daraufhin geeignete Komponenten
              ausgewählt, wie etwa ein ESP32 als Mikrocontroller sowie
              verschiedene Sensoren zur Erfassung von Umgebungsdaten. Die
              Zusammenstellung der Komponenten erfolgte gezielt, um den
              Systemanforderungen gerecht zu werden. Im nächsten Schritt ging es
              an den Aufbau des Prototyps.<br />
              Dabei kam das Prinzip des Rapid Prototyping zum Einsatz, um
              schnell ein klares Bild des Designs zu erhalten. Rapid Prototyping
              ermöglichte es, mittels 3D-Druck ein Gehäuse herzustellen, in das
              die ausgewählten Komponenten integriert werden konnten. Durch
              diesen schnellen iterativen Prozess konnten frühzeitig Probleme
              erkannt und entsprechende Anpassungen vorgenommen werden.<br />
              Nach der Fertigung des Gehäuses erfolgte die Integration der
              Hardwarekomponenten. Alle Elemente wurden verbunden und im
              gedruckten Gehäuse eingebaut. Dadurch konnte sichergestellt
              werden, dass die Anordnung der Hardware nicht nur funktional,
              sondern auch praktikabel für den finalen Einsatz ist.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['           [ERGEBNIS]          ']" />
            <div class="paragraph">
              Das Ergebnis des Projekts ist PlantMonit – ein intelligentes Smart
              Tool, das die Pflanzenpflege vereinfacht und optimiert. <br />Ziel
              war es, eine Lösung zu entwickeln, die sowohl Hobbygärtner als
              auch erfahrene Pflanzenliebhaber unterstützt, indem sie die Pflege
              mit minimalem Aufwand ermöglicht.<br /><br />
              Das Kernfeature von PlantMonit ist die automatische
              Pflanzenüberwachung. Eine integrierte Kamera, kombiniert mit
              Sensoren für Bodenfeuchtigkeit, Luftfeuchtigkeit, Temperatur und
              Licht, sammelt kontinuierlich alle wichtigen Daten der
              Pflanzen.<br />
              Mithilfe der OpenAI Vision API ermöglicht PlantMonit eine
              detaillierte Analyse von Pflanzenbildern, was zur Früherkennung
              von Problemen wie Schädlingen, Fäule oder Verletzungen
              beiträgt.<br />
              Die Nutzer erhalten direkt personalisierte Pflegehinweise, ohne
              selbst Expertenwissen zu benötigen. Die Software wurde mit einem
              starken Fokus auf Benutzerfreundlichkeit entwickelt. Die intuitive
              Benutzeroberfläche präsentiert alle gesammelten Daten
              übersichtlich und erleichtert die Pflege. Dank effizienter
              Kommunikation zwischen den Hardware-Komponenten via Websockets
              sowie einer skalierbaren Datenbankstruktur mit MongoDB
              gewährleistet PlantMonit eine zuverlässige Datenerfassung und
              -übertragung. <br /><br />Durch diesen methodischen Ansatz
              entstand ein Produkt, das die Bedürfnisse der Zielgruppe erfüllt
              und die Pflanzenpflege erheblich vereinfacht. PlantMonit verbindet
              modernste Technologie mit benutzerfreundlichem Design und sorgt so
              für gesunde Pflanzen – sowohl für Einsteiger als auch für
              erfahrene Gärtner.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\pm\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText
          :texts="[
            '                         [PROJECT] [VIDEO]                          ',
          ]"
        />
        <div class="project-video">
          <iframe
            src="https://www.youtube.com/embed/bKC-N5-m5u0?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '      THREE MONTHS      ',
            '    SECOND SEMESTER     ',
            '      GRADE: 1.0        ',
            '       TEAMWORK         ',
          ]"
        />
      </div>
    </div>

    <div v-if="isTablet" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['                 [PROBLEM]                  ']"
            />
            <div class="paragraph">
              Im hektischen Alltag bleibt oft wenig Zeit für die Pflege von
              Zimmer- und Gartenpflanzen. Viele Menschen, insbesondere
              diejenigen mit stressigen Jobs oder zeitaufwändigen
              Verpflichtungen, vergessen oft, ihre Pflanzen zu gießen, zu düngen
              oder richtig zu platzieren. <br />
              <br />Dies führt oft dazu, dass Pflanzen verwelken, über- oder
              unterbewässert werden oder generell nicht die Pflege erhalten, die
              sie benötigen.<br />
              Laut den neuesten Statistiken verlieren 37% der Hobbygärtner jedes
              Jahr ein oder zwei Zimmerpflanzen. Besonders Millennials scheinen
              damit mehr Probleme zu haben, mit durchschnittlich etwa sieben
              sterbenden Zimmerpflanzen pro Jahr.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\pm\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['                  [PROCESS]                  ']"
            />
            <div class="paragraph">
              Zu Beginn des Projekts wurde eine Wettbewerbsanalyse durchgeführt,
              um bestehende Lösungen auf dem Markt zu evaluieren. Ziel war es,
              herauszufinden, welche Funktionen bereits gut umgesetzt sind und
              wo noch Verbesserungspotenzial besteht. Diese Analyse half dabei,
              ungenutzte Potenziale zu identifizieren und die eigene Lösung
              gezielt darauf auszurichten. <br /><br />Im Anschluss wurde eine
              detaillierte Persona entwickelt, um die Bedürfnisse der Zielgruppe
              klar zu definieren. Dabei stellte sich heraus, dass das Ziel darin
              besteht, eine Lösung zu schaffen, die es ermöglicht, Pflanzen mit
              minimalem Zeitaufwand zu pflegen und sowohl Hobbygärtner als auch
              erfahrene Pflanzenliebhaber anzusprechen. Parallel zur
              Persona-Entwicklung wurde eine User Journey gestaltet, die den
              gesamten Nutzungsprozess der App abdeckt – von der Installation
              bis hin zur täglichen Nutzung. Durch die Erstellung detaillierter
              Nutzerpfade wurde sichergestellt, dass die Benutzerführung nahtlos
              und intuitiv ist. Kombiniert mit iterativen User-Testings entstand
              so ein durchdachter und benutzerfreundlicher Einrichtungsprozess,
              durch den mögliche Hürden frühzeitig erkannt und die
              Nutzerfreundlichkeit gezielt verbessert werden konnte.
            </div>
          </div>
          <div class="image smedi">
            <img
              src="public\img\pm\process.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Software Prozess</h3>

              Der Softwareprozess startete mit der ausführlichen Erstellung von
              Low-Fi, Mid-Fi und<br />
              High-Fi Wireframes, um die Struktur und die Benutzerführung der
              Anwendung zu planen. <br />Dieser Prozess war stark iterativ und
              legte den Fokus klar auf die User Experience, sodass jede Version
              durch Nutzerfeedback optimiert wurde. Der High-Fi Figma-Klickdummy
              ermöglichte umfassende User Tests, um sicherzustellen, dass die
              Benutzerführung nahtlos und intuitiv ist. Nachdem der Figma-Dummy
              positives Feedback erhalten hatte und das Design zufriedenstellte,
              begann die Umsetzung der Web-App mit Svelte. Dabei lag der
              Schwerpunkt darauf, die im Figma-Dummy erarbeiteten Funktionen
              detailgetreu umzusetzen und eine reibungslose, performante
              Nutzererfahrung zu gewährleisten.
            </div>
          </div>
          <div class="image medium">
            <img
              src="public\img\pm\software.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Hardware Prozess</h3>
              Der Hardwareprozess begann mit einer Anforderungsanalyse der
              benötigten Hardware.<br />
              Es wurde ermittelt, welche Funktionen das Smart Tool erfüllen
              muss, und daraufhin geeignete Komponenten ausgewählt, wie etwa ein
              ESP32 als Mikrocontroller sowie verschiedene Sensoren zur
              Erfassung von Umgebungsdaten. Die Zusammenstellung der Komponenten
              erfolgte gezielt, um den Systemanforderungen gerecht zu werden. Im
              nächsten Schritt ging es an den Aufbau des Prototyps. Dabei kam
              das Prinzip des Rapid Prototyping zum Einsatz, um schnell ein
              klares Bild des Designs zu erhalten. Rapid Prototyping ermöglichte
              es, mittels 3D-Druck ein Gehäuse herzustellen, in das die
              ausgewählten Komponenten integriert werden konnten.
              <br /><br />Durch diesen schnellen iterativen Prozess konnten
              frühzeitig Probleme erkannt und entsprechende Anpassungen
              vorgenommen werden. Nach der Fertigung des Gehäuses erfolgte die
              Integration der Hardwarekomponenten. Alle Elemente wurden
              verbunden und im gedruckten Gehäuse eingebaut. Dadurch konnte
              sichergestellt werden, dass die Anordnung der Hardware nicht nur
              funktional, sondern auch praktikabel für den finalen Einsatz ist.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\pm\hardware.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['                 [ERGEBNIS]                 ']"
            />
            <div class="paragraph">
              Das Ergebnis des Projekts ist PlantMonit – ein intelligentes Smart
              Tool, das die Pflanzenpflege vereinfacht und optimiert. Ziel war
              es, eine Lösung zu entwickeln, die sowohl Hobbygärtner als auch
              erfahrene Pflanzenliebhaber unterstützt, indem sie die Pflege mit
              minimalem Aufwand ermöglicht. Das Kernfeature von PlantMonit ist
              die automatische Pflanzenüberwachung. <br />Eine integrierte
              Kamera, kombiniert mit Sensoren für Bodenfeuchtigkeit,
              Luftfeuchtigkeit, Temperatur und Licht, sammelt kontinuierlich
              alle wichtigen Daten der Pflanzen. <br /><br />Mithilfe der OpenAI
              Vision API ermöglicht PlantMonit eine detaillierte Analyse von
              Pflanzenbildern, was zur Früherkennung von Problemen wie
              Schädlingen, Fäule oder Verletzungen beiträgt. Die Nutzer erhalten
              direkt personalisierte Pflegehinweise, ohne selbst Expertenwissen
              zu benötigen. Die Software wurde mit einem starken Fokus auf
              Benutzerfreundlichkeit entwickelt. Die intuitive
              Benutzeroberfläche präsentiert alle gesammelten Daten
              übersichtlich und erleichtert die Pflege. Dank effizienter
              Kommunikation zwischen den Hardware-Komponenten via Websockets
              sowie einer skalierbaren Datenbankstruktur mit MongoDB
              gewährleistet PlantMonit eine zuverlässige Datenerfassung und
              -übertragung.<br /><br />
              Durch diesen methodischen Ansatz entstand ein Produkt, das die
              Bedürfnisse der Zielgruppe erfüllt und die Pflanzenpflege
              erheblich vereinfacht. PlantMonit verbindet modernste Technologie
              mit benutzerfreundlichem Design und sorgt so für gesunde Pflanzen
              – sowohl für Einsteiger als auch für erfahrene Gärtner.
            </div>
          </div>
          <div class="image mela">
            <img src="public\img\pm\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText
          :texts="['               [PROJECT] [VIDEO]               ']"
        />
        <div class="project-video">
          <iframe
            src="https://www.youtube.com/embed/bKC-N5-m5u0?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '      THREE MONTHS      ',
            '    SECOND SEMESTER     ',
            '      GRADE: 1.0        ',
            '       TEAMWORK         ',
          ]"
        />
      </div>
    </div>

    <div v-else-if="isMobile" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['         [PROBLEM]         ']" />
            <div class="paragraph">
              Im hektischen Alltag bleibt oft wenig Zeit für die Pflege von
              Zimmer- und Gartenpflanzen. Viele Menschen, insbesondere
              diejenigen mit stressigen Jobs oder zeitaufwändigen
              Verpflichtungen, vergessen oft, ihre Pflanzen zu gießen, zu düngen
              oder richtig zu platzieren. <br />
              <br />Dies führt oft dazu, dass Pflanzen verwelken, über- oder
              unterbewässert werden oder generell nicht die Pflege erhalten, die
              sie benötigen.<br />
              Laut den neuesten Statistiken verlieren 37% der Hobbygärtner jedes
              Jahr ein oder zwei Zimmerpflanzen. Besonders Millennials scheinen
              damit mehr Probleme zu haben, mit durchschnittlich etwa sieben
              sterbenden Zimmerpflanzen pro Jahr.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\pm\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [PROCESS]         ']" />
            <div class="paragraph">
              Zu Beginn des Projekts wurde eine Wettbewerbsanalyse durchgeführt,
              um bestehende Lösungen auf dem Markt zu evaluieren. Ziel war es,
              herauszufinden, welche Funktionen bereits gut umgesetzt sind und
              wo noch Verbesserungspotenzial besteht. <br />Diese Analyse half
              dabei, ungenutzte Potenziale zu identifizieren und die eigene
              Lösung gezielt darauf auszurichten. Im Anschluss wurde eine
              detaillierte Persona entwickelt, um die Bedürfnisse der Zielgruppe
              klar zu definieren. Dabei stellte sich heraus, dass das Ziel darin
              besteht, eine Lösung zu schaffen, die es ermöglicht, Pflanzen mit
              minimalem Zeitaufwand zu pflegen und sowohl Hobbygärtner als auch
              erfahrene Pflanzenliebhaber anzusprechen. Parallel zur
              Persona-Entwicklung wurde eine User Journey gestaltet, die den
              gesamten Nutzungsprozess der App abdeckt – von der Installation
              bis hin zur täglichen Nutzung. Durch die Erstellung detaillierter
              Nutzerpfade wurde sichergestellt, dass die Benutzerführung nahtlos
              und intuitiv ist. <br />Kombiniert mit iterativen User-Testings
              entstand so ein durchdachter und benutzerfreundlicher
              Einrichtungsprozess, durch den mögliche Hürden frühzeitig erkannt
              und die Nutzerfreundlichkeit gezielt verbessert werden konnte.
            </div>
          </div>
          <div class="image smedi">
            <img
              src="public\img\pm\process.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Software Process</h3>

              Der Softwareprozess startete mit der ausführlichen Erstellung von
              Low-Fi, Mid-Fi und High-Fi Wireframes, um die Struktur und die
              Benutzerführung der Anwendung zu planen. <br />Dieser Prozess war
              stark iterativ und legte den Fokus klar auf die User Experience,
              sodass jede Version durch Nutzerfeedback optimiert wurde. Der
              High-Fi Figma-Klickdummy ermöglichte umfassende User Tests, um
              sicherzustellen, dass die Benutzerführung nahtlos und intuitiv
              ist. <br /><br />Nachdem der Figma-Dummy positives Feedback
              erhalten hatte und das Design zufriedenstellte, begann die
              Umsetzung der Web-App mit Svelte. Dabei lag der Schwerpunkt
              darauf, die im Figma-Dummy erarbeiteten Funktionen detailgetreu
              umzusetzen und eine reibungslose, performante Nutzererfahrung zu
              gewährleisten.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\pm\software.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Hardware Process</h3>
              Der Hardwareprozess begann mit einer Anforderungsanalyse der
              benötigten Hardware.<br />
              Es wurde ermittelt, welche Funktionen das Smart Tool erfüllen
              muss, und daraufhin geeignete Komponenten ausgewählt, wie etwa ein
              ESP32 als Mikrocontroller sowie verschiedene Sensoren zur
              Erfassung von Umgebungsdaten.<br />
              Die Zusammenstellung der Komponenten erfolgte gezielt, um den
              Systemanforderungen gerecht zu werden.<br /><br />
              Im nächsten Schritt ging es an den Aufbau des Prototyps. Dabei kam
              das Prinzip des Rapid Prototyping zum Einsatz, um schnell ein
              klares Bild des Designs zu erhalten. Rapid Prototyping ermöglichte
              es, mittels 3D-Druck ein Gehäuse herzustellen, in das die
              ausgewählten Komponenten integriert werden konnten.<br /><br />
              Durch diesen schnellen iterativen Prozess konnten frühzeitig
              Probleme erkannt und entsprechende Anpassungen vorgenommen werden.
              Nach der Fertigung des Gehäuses erfolgte die Integration der
              Hardwarekomponenten. Alle Elemente wurden verbunden und im
              gedruckten Gehäuse eingebaut. Dadurch konnte sichergestellt
              werden, dass die Anordnung der Hardware nicht nur funktional,
              sondern auch praktikabel für den finalen Einsatz ist.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\pm\hardware.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [SOLUTION]          ']" />
            <div class="paragraph">
              Das Ergebnis des Projekts ist PlantMonit – ein intelligentes Smart
              Tool, das die Pflanzenpflege vereinfacht und optimiert. Ziel war
              es, eine Lösung zu entwickeln, die sowohl Hobbygärtner als auch
              erfahrene Pflanzenliebhaber unterstützt, indem sie die Pflege mit
              minimalem Aufwand ermöglicht. <br />Das Kernfeature von PlantMonit
              ist die automatische Pflanzenüberwachung. Eine integrierte Kamera,
              kombiniert mit Sensoren für Bodenfeuchtigkeit, Luftfeuchtigkeit,
              Temperatur und Licht, sammelt kontinuierlich alle wichtigen Daten
              der Pflanzen. Mithilfe der OpenAI Vision API ermöglicht PlantMonit
              eine detaillierte Analyse von Pflanzenbildern, was zur
              Früherkennung von Problemen wie Schädlingen, Fäule oder
              Verletzungen beiträgt. Die Nutzer erhalten direkt personalisierte
              Pflegehinweise, ohne selbst Expertenwissen zu benötigen.<br />
              Die Software wurde mit einem starken Fokus auf
              Benutzerfreundlichkeit entwickelt.<br /><br />
              Die intuitive Benutzeroberfläche präsentiert alle gesammelten
              Daten übersichtlich und erleichtert die Pflege.<br />
              Dank effizienter Kommunikation zwischen den Hardware-Komponenten
              via Websockets sowie einer skalierbaren Datenbankstruktur mit
              MongoDB gewährleistet PlantMonit eine zuverlässige Datenerfassung
              und -übertragung. Durch diesen methodischen Ansatz entstand ein
              Produkt, das die Bedürfnisse der Zielgruppe erfüllt und die
              Pflanzenpflege erheblich vereinfacht. PlantMonit verbindet
              modernste Technologie mit benutzerfreundlichem Design und sorgt so
              für gesunde Pflanzen – sowohl für Einsteiger als auch für
              erfahrene Gärtner.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\pm\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText :texts="['       [PROJECT] [VIDEO]        ']" />
        <div class="project-video">
          <iframe
            src="https://www.youtube.com/embed/bKC-N5-m5u0?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '      THREE MONTHS      ',
            '    SECOND SEMESTER     ',
            '      GRADE: 1.0        ',
            '       TEAMWORK         ',
          ]"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { useDeviceType } from "~/assets/composables/useDeviceType.js";

const { isMobile, isTablet, isDesktop } = useDeviceType();
</script>

<style src="assets/project.css" scoped></style>
