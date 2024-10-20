<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>
    <div id="projectLinkNext">
      <nuxt-link to="/de/project/TrickyTowers" class="custom-link"
        >TRICKYTOWERS</nuxt-link
      >
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/de/project/portfolio" class="custom-link"
        >THIS WEBSITE</nuxt-link
      >
    </div>

    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          '      [DRAWINGLIGHT]      ',
          '      MECHATRONICS      ',
          'TEAMWORK   PHOTOGRAPHY  ',
          '    ARDUINO   FUSION360 ',
          '      LIGHTDRAWING      ',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="public\img\dl\thumbnail.svg" alt="plantmonit" />
      </div>
    </div>
    <DetailsScroll />

    <div v-if="isDesktop" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['            [IDEA]             ']" />
            <div class="paragraph">
              DrawingLight entstand aus dem Wunsch, traditionelle Kunst durch
              den kreativen Einsatz moderner Technologie neu zu interpretieren.
              Anstatt einfach eine Maschine zu entwickeln, die einen Stift über
              Papier bewegt, sollte ein Werkzeug geschaffen werden, das eine
              ganz neue Dimension künstlerischer Möglichkeiten eröffnet und
              klassische Zeichenmaschinen auf innovative Weise neu denkt. In der
              Fotografie entstehen durch die Kombination von Licht, Bewegung und
              Zeit beeindruckende Kunstwerke, die flüchtige Bewegungen und
              Lichtspuren einfangen und den Moment überdauern. Genau hier setzt
              DrawingLight an und bringt dieses Konzept in eine interaktive
              Dimension. Es ermöglicht nicht nur, Lichtmalerei zu betrachten,
              sondern sie auch aktiv zu erleben und zu gestalten. Dies bietet
              eine einzigartige Gelegenheit, Kunst und Technologie auf
              dynamische Weise zu verbinden. DrawingLight eröffnet nicht nur
              künstlerische Freiheit zur Schaffung individueller
              Lichtkunstwerke, sondern bietet auch großes Potenzial für
              interaktive Installationen und Veranstaltungen, bei denen Licht
              als lebendiges Ausdrucksmittel eingesetzt wird. Durch die
              Kombination innovativer Technologien und kreativer Ansätze wird
              gezeigt, wie technische Lösungen die Grenzen der Kunst erweitern
              und kreatives Potenzial freisetzen können, das weit über den
              ursprünglichen Einsatz hinausgeht.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\dl\idea.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
            <img src="public\img\dl\process.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['           [PROCESS]           ']" />
            <div class="paragraph">
              Der Prozess begann damit, die allgemeine Aufgabe – die Entwicklung
              eines mechanischen Zeichenapparats zur Erstellung von Linien und
              Formen – auf eine Weise zu interpretieren, die über das
              Offensichtliche hinausgeht. Mein Ziel ist es immer, jede Aufgabe
              in etwas Besonderes zu verwandeln, kreativ zu denken und nicht
              einfach nur dem geraden Weg zu folgen. So entstand die Idee der
              Lichtmalerei, inspiriert durch das Interesse an Fotografie. Der
              nächste Schritt bestand in der Auswahl der passenden Technologie.
              Es wurde eine Lichtquelle benötigt, die flexibel genug ist, um
              interessante und dynamische Lichtmuster zu erzeugen, aber nicht zu
              hell, um ein angenehmes visuelles Erlebnis zu gewährleisten. Zudem
              wurde untersucht, wie die Steuerung des Systems am besten
              umgesetzt werden kann. Die Anforderungen an die Eingabemethode
              waren, dass sie intuitiv, leicht zugänglich und für jeden Nutzer
              neuartig sein sollte, unabhängig von dessen bisherigen
              Erfahrungen. Verschiedene Optionen wurden in Betracht gezogen –
              zum Beispiel die Verwendung eines Stifts auf einem Tablet, die
              Steuerung mit einer Maus oder die Erkennung von Handbewegungen
              mittels moderner Tracking-Technologien wie Google MediaPipe. Diese
              explorative Phase half, die verschiedenen Möglichkeiten zu
              bewerten und das Potenzial jeder Option für das Konzept
              einzuschätzen. Während des Prototypings wurden die Komponenten
              kontinuierlich getestet und verbessert, um sicherzustellen, dass
              sie den Anforderungen entsprachen und die Vision einer kreativen,
              interaktiven Installation unterstützen konnten.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [IMPLEMENTATION]       ']" />
            <div class="paragraph">
              Die Umsetzung stellte sich in den Details als Herausforderung
              heraus. Aufgrund der Streuung der Lichtquelle wurde entschieden,
              eine relativ große Maschine zu bauen, um ein detailliertes Bild zu
              erhalten. Nach dem Vergleich verschiedener mechanischer Optionen
              zur Realisierung einer Bewegung im Koordinatensystem fiel die Wahl
              auf ein System mit zwei Schrittmotoren. Diese Motoren wurden auf
              Stativen montiert und bewegten eine Schnur durch Auf- und
              Abwickeln. Um die an den Motoren befestigten Rollen optimal
              anzupassen, wurden eigene 3D-Teile in Fusion 360 modelliert. Diese
              Lösung ermöglichte es, ein Bild nahezu beliebiger Größe mit
              vergleichsweise wenigen Ressourcen zu zeichnen – im Gegensatz zu
              einem herkömmlichen Schienensystem. Für die Steuerung wurde eine
              innovative Lösung mittels Gestenerkennung mit Google MediaPipe
              gewählt. Dies wurde mithilfe eines Node.js-Skripts über die
              Laptop-Webcam implementiert, was eine intuitive Steuerung der
              Lichtquelle ermöglichte. Zusätzlich wurde ein NeoPixel verwendet,
              dessen Lichtfarbe über einen Joystick gesteuert werden konnte.
              Diese Kombination schuf eine dynamische und interaktive Steuerung,
              bei der die Nutzer das Ergebnis direkt beeinflussen konnten. Der
              Lichtmalprozess war wie folgt strukturiert: Die Nutzer hatten
              zunächst 10 Sekunden Zeit, eine Figur in die Luft zu malen. Die
              Handbewegungen wurden über die Laptop-Webcam aufgezeichnet, und
              die Koordinaten der Handfläche wurden verfolgt. Die Maschine
              verwendete dann diese Koordinaten, um die Bewegung innerhalb von
              30 Sekunden nachzubilden, während die Kamera eine
              Langzeitbelichtung des entstehenden Kunstwerks aufnahm.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\dl\implementation.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
            <img src="public\img\dl\dl5.svg" alt="plantmonit" />
          </div>
          <div class="image medium">
            <img src="public\img\dl\dl6.svg" alt="plantmonit" />
          </div>
          <div class="image medium">
            <img src="public\img\dl\dl7.svg" alt="plantmonit" />
          </div>
          <div class="image medium">
            <img src="public\img\dl\dl12.svg" alt="plantmonit" />
          </div>
        </div>

        <div class="project-section">
          <SplitFlapText :texts="['          [PROJECT] [VIDEO]          ']" />
        </div>
        <div class="project-section">
          <div class="project-video">
            <iframe
              src="https://www.youtube.com/embed/k3CHPyc4J4M?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '        1 WEEK          ',
            '    SECOND SEMESTER     ',
            '      GRADE: 1.0        ',
          ]"
        />
      </div>
    </div>

    <div v-if="isTablet" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['               [IDEA]              ']" />
            <div class="paragraph">
              DrawingLight entstand aus dem Wunsch, traditionelle Kunst durch
              den kreativen Einsatz moderner Technologie neu zu interpretieren.
              Anstatt einfach eine Maschine zu entwickeln, die einen Stift über
              Papier bewegt, sollte ein Werkzeug geschaffen werden, das eine
              ganz neue Dimension künstlerischer Möglichkeiten eröffnet und
              klassische Zeichenmaschinen auf innovative Weise neu denkt. In der
              Fotografie entstehen durch die Kombination von Licht, Bewegung und
              Zeit beeindruckende Kunstwerke, die flüchtige Bewegungen und
              Lichtspuren einfangen und den Moment überdauern. Genau hier setzt
              DrawingLight an und bringt dieses Konzept in eine interaktive
              Dimension. Es ermöglicht nicht nur, Lichtmalerei zu betrachten,
              sondern sie auch aktiv zu erleben und zu gestalten. Dies bietet
              eine einzigartige Gelegenheit, Kunst und Technologie auf
              dynamische Weise zu verbinden. DrawingLight eröffnet nicht nur
              künstlerische Freiheit zur Schaffung individueller
              Lichtkunstwerke, sondern bietet auch großes Potenzial für
              interaktive Installationen und Veranstaltungen, bei denen Licht
              als lebendiges Ausdrucksmittel eingesetzt wird. Durch die
              Kombination innovativer Technologien und kreativer Ansätze wird
              gezeigt, wie technische Lösungen die Grenzen der Kunst erweitern
              und kreatives Potenzial freisetzen können, das weit über den
              ursprünglichen Einsatz hinausgeht.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\dl\idea.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['             [PROCESS]             ']" />
            <div class="paragraph">
              Der Prozess begann damit, die allgemeine Aufgabe – die Entwicklung
              eines mechanischen Zeichenapparats zur Erstellung von Linien und
              Formen – auf eine Weise zu interpretieren, die über das
              Offensichtliche hinausgeht. Mein Ziel ist es immer, jede Aufgabe
              in etwas Besonderes zu verwandeln, kreativ zu denken und nicht
              einfach nur dem geraden Weg zu folgen. So entstand die Idee der
              Lichtmalerei, inspiriert durch das Interesse an Fotografie. Der
              nächste Schritt bestand in der Auswahl der passenden Technologie.
              Es wurde eine Lichtquelle benötigt, die flexibel genug ist, um
              interessante und dynamische Lichtmuster zu erzeugen, aber nicht zu
              hell, um ein angenehmes visuelles Erlebnis zu gewährleisten. Zudem
              wurde untersucht, wie die Steuerung des Systems am besten
              umgesetzt werden kann. Die Anforderungen an die Eingabemethode
              waren, dass sie intuitiv, leicht zugänglich und für jeden Nutzer
              neuartig sein sollte, unabhängig von dessen bisherigen
              Erfahrungen. Verschiedene Optionen wurden in Betracht gezogen –
              zum Beispiel die Verwendung eines Stifts auf einem Tablet, die
              Steuerung mit einer Maus oder die Erkennung von Handbewegungen
              mittels moderner Tracking-Technologien wie Google MediaPipe. Diese
              explorative Phase half, die verschiedenen Möglichkeiten zu
              bewerten und das Potenzial jeder Option für das Konzept
              einzuschätzen. Während des Prototypings wurden die Komponenten
              kontinuierlich getestet und verbessert, um sicherzustellen, dass
              sie den Anforderungen entsprachen und die Vision einer kreativen,
              interaktiven Installation unterstützen konnten.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\dl\process.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['           [IMPLEMENTATION]        ']" />
            <div class="paragraph">
              Die Umsetzung stellte sich in den Details als Herausforderung
              heraus. Aufgrund der Streuung der Lichtquelle wurde entschieden,
              eine relativ große Maschine zu bauen, um ein detailliertes Bild zu
              erhalten. Nach dem Vergleich verschiedener mechanischer Optionen
              zur Realisierung einer Bewegung im Koordinatensystem fiel die Wahl
              auf ein System mit zwei Schrittmotoren. Diese Motoren wurden auf
              Stativen montiert und bewegten eine Schnur durch Auf- und
              Abwickeln. Um die an den Motoren befestigten Rollen optimal
              anzupassen, wurden eigene 3D-Teile in Fusion 360 modelliert. Diese
              Lösung ermöglichte es, ein Bild nahezu beliebiger Größe mit
              vergleichsweise wenigen Ressourcen zu zeichnen – im Gegensatz zu
              einem herkömmlichen Schienensystem. Für die Steuerung wurde eine
              innovative Lösung mittels Gestenerkennung mit Google MediaPipe
              gewählt. Dies wurde mithilfe eines Node.js-Skripts über die
              Laptop-Webcam implementiert, was eine intuitive Steuerung der
              Lichtquelle ermöglichte. Zusätzlich wurde ein NeoPixel verwendet,
              dessen Lichtfarbe über einen Joystick gesteuert werden konnte.
              Diese Kombination schuf eine dynamische und interaktive Steuerung,
              bei der die Nutzer das Ergebnis direkt beeinflussen konnten. Der
              Lichtmalprozess war wie folgt strukturiert: Die Nutzer hatten
              zunächst 10 Sekunden Zeit, eine Figur in die Luft zu malen. Die
              Handbewegungen wurden über die Laptop-Webcam aufgezeichnet, und
              die Koordinaten der Handfläche wurden verfolgt. Die Maschine
              verwendete dann diese Koordinaten, um die Bewegung innerhalb von
              30 Sekunden nachzubilden, während die Kamera eine
              Langzeitbelichtung des entstehenden Kunstwerks aufnahm.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\dl\implementation.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-section">
          <SplitFlapText :texts="['          [PROJECT] [VIDEO]          ']" />
        </div>
        <div class="project-section">
          <div class="project-video">
            <iframe
              src="https://www.youtube.com/embed/k3CHPyc4J4M?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '        1 WEEK          ',
            '    SECOND SEMESTER     ',
            '      GRADE: 1.0        ',
          ]"
        />
      </div>
      <div class="project-content">
        <div class="image medium">
          <img src="public\img\dl\dl5.svg" alt="plantmonit" />
        </div>
        <div class="image medium">
          <img src="public\img\dl\dl6.svg" alt="plantmonit" />
        </div>
        <div class="image medium">
          <img src="public\img\dl\dl7.svg" alt="plantmonit" />
        </div>
        <div class="image medium">
          <img src="public\img\dl\dl12.svg" alt="plantmonit" />
        </div>
      </div>
    </div>

    <div v-else-if="isMobile" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [IDEA]           ']" />
            <div class="paragraph">
              DrawingLight entstand aus dem Wunsch, traditionelle Kunst durch
              den kreativen Einsatz moderner Technologie neu zu interpretieren.
              Anstatt einfach eine Maschine zu entwickeln, die einen Stift über
              Papier bewegt, sollte ein Werkzeug geschaffen werden, das eine
              ganz neue Dimension künstlerischer Möglichkeiten eröffnet und
              klassische Zeichenmaschinen auf innovative Weise neu denkt. In der
              Fotografie entstehen durch die Kombination von Licht, Bewegung und
              Zeit beeindruckende Kunstwerke, die flüchtige Bewegungen und
              Lichtspuren einfangen und den Moment überdauern. Genau hier setzt
              DrawingLight an und bringt dieses Konzept in eine interaktive
              Dimension. Es ermöglicht nicht nur, Lichtmalerei zu betrachten,
              sondern sie auch aktiv zu erleben und zu gestalten. Dies bietet
              eine einzigartige Gelegenheit, Kunst und Technologie auf
              dynamische Weise zu verbinden. DrawingLight eröffnet nicht nur
              künstlerische Freiheit zur Schaffung individueller
              Lichtkunstwerke, sondern bietet auch großes Potenzial für
              interaktive Installationen und Veranstaltungen, bei denen Licht
              als lebendiges Ausdrucksmittel eingesetzt wird. Durch die
              Kombination innovativer Technologien und kreativer Ansätze wird
              gezeigt, wie technische Lösungen die Grenzen der Kunst erweitern
              und kreatives Potenzial freisetzen können, das weit über den
              ursprünglichen Einsatz hinausgeht.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\dl\idea.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['         [PROCESS]         ']" />
            <div class="paragraph">
              Der Prozess begann damit, die allgemeine Aufgabe – die Entwicklung
              eines mechanischen Zeichenapparats zur Erstellung von Linien und
              Formen – auf eine Weise zu interpretieren, die über das
              Offensichtliche hinausgeht. Mein Ziel ist es immer, jede Aufgabe
              in etwas Besonderes zu verwandeln, kreativ zu denken und nicht
              einfach nur dem geraden Weg zu folgen. So entstand die Idee der
              Lichtmalerei, inspiriert durch das Interesse an Fotografie. Der
              nächste Schritt bestand in der Auswahl der passenden Technologie.
              Es wurde eine Lichtquelle benötigt, die flexibel genug ist, um
              interessante und dynamische Lichtmuster zu erzeugen, aber nicht zu
              hell, um ein angenehmes visuelles Erlebnis zu gewährleisten. Zudem
              wurde untersucht, wie die Steuerung des Systems am besten
              umgesetzt werden kann. Die Anforderungen an die Eingabemethode
              waren, dass sie intuitiv, leicht zugänglich und für jeden Nutzer
              neuartig sein sollte, unabhängig von dessen bisherigen
              Erfahrungen. Verschiedene Optionen wurden in Betracht gezogen –
              zum Beispiel die Verwendung eines Stifts auf einem Tablet, die
              Steuerung mit einer Maus oder die Erkennung von Handbewegungen
              mittels moderner Tracking-Technologien wie Google MediaPipe. Diese
              explorative Phase half, die verschiedenen Möglichkeiten zu
              bewerten und das Potenzial jeder Option für das Konzept
              einzuschätzen. Während des Prototypings wurden die Komponenten
              kontinuierlich getestet und verbessert, um sicherzustellen, dass
              sie den Anforderungen entsprachen und die Vision einer kreativen,
              interaktiven Installation unterstützen konnten.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\dl\process.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['     [IMPLEMENTATION]      ']" />
            <div class="paragraph">
              Die Umsetzung stellte sich in den Details als Herausforderung
              heraus. Aufgrund der Streuung der Lichtquelle wurde entschieden,
              eine relativ große Maschine zu bauen, um ein detailliertes Bild zu
              erhalten. Nach dem Vergleich verschiedener mechanischer Optionen
              zur Realisierung einer Bewegung im Koordinatensystem fiel die Wahl
              auf ein System mit zwei Schrittmotoren. Diese Motoren wurden auf
              Stativen montiert und bewegten eine Schnur durch Auf- und
              Abwickeln. Um die an den Motoren befestigten Rollen optimal
              anzupassen, wurden eigene 3D-Teile in Fusion 360 modelliert. Diese
              Lösung ermöglichte es, ein Bild nahezu beliebiger Größe mit
              vergleichsweise wenigen Ressourcen zu zeichnen – im Gegensatz zu
              einem herkömmlichen Schienensystem. Für die Steuerung wurde eine
              innovative Lösung mittels Gestenerkennung mit Google MediaPipe
              gewählt. Dies wurde mithilfe eines Node.js-Skripts über die
              Laptop-Webcam implementiert, was eine intuitive Steuerung der
              Lichtquelle ermöglichte. Zusätzlich wurde ein NeoPixel verwendet,
              dessen Lichtfarbe über einen Joystick gesteuert werden konnte.
              Diese Kombination schuf eine dynamische und interaktive Steuerung,
              bei der die Nutzer das Ergebnis direkt beeinflussen konnten. Der
              Lichtmalprozess war wie folgt strukturiert: Die Nutzer hatten
              zunächst 10 Sekunden Zeit, eine Figur in die Luft zu malen. Die
              Handbewegungen wurden über die Laptop-Webcam aufgezeichnet, und
              die Koordinaten der Handfläche wurden verfolgt. Die Maschine
              verwendete dann diese Koordinaten, um die Bewegung innerhalb von
              30 Sekunden nachzubilden, während die Kamera eine
              Langzeitbelichtung des entstehenden Kunstwerks aufnahm.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\dl\implementation.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <SplitFlapText :texts="['     [PROJECT] [VIDEO]      ']" />
      </div>
      <div class="project-section">
        <div class="project-video">
          <iframe
            src="https://www.youtube.com/embed/k3CHPyc4J4M?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
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
            '        1 WEEK          ',
            '    SECOND SEMESTER     ',
            '      GRADE: 1.0        ',
          ]"
        />
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
            <img src="public\img\dl\dl5.svg" alt="plantmonit" />
          </div>
          <div class="image medium">
            <img src="public\img\dl\dl6.svg" alt="plantmonit" />
          </div>
          <div class="image medium">
            <img src="public\img\dl\dl7.svg" alt="plantmonit" />
          </div>
          <div class="image medium">
            <img src="public\img\dl\dl12.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useDeviceType } from "~/assets/composables/useDeviceType.js";

const { isMobile, isTablet, isDesktop } = useDeviceType();
</script>

<style src="assets/project.css" scoped></style>
