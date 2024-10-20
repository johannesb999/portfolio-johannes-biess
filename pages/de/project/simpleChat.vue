<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/de/project/portfolio" class="custom-link"
        >THIS WEBSITE
      </nuxt-link>
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/de/project/jumpStar" class="custom-link"
        >JUMPSTAR
      </nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          '        [SIMPLECHAT]        ',
          '       CHAT PLATFORM      ',
          'WIREFRAMES   USERCENTERED ',
          '   DESIGN THINKING        ',
          '         USER INTERVIEWS  ',
          '  FIGMA PROTOTYPE         ',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="public\img\sc\thumbnail.svg" alt="SimpleChat" />
      </div>
    </div>
    <DetailsScroll />

    <div v-if="isDesktop" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [PROBLEM]          ']" />
            <div class="paragraph">
              Die derzeitige Kommunikationsplattform der Universität, Slack,
              wird durch eine neue dedizierte Plattform ersetzt, die es der
              Universität, den Studierenden und Alumni erleichtern wird,
              miteinander zu kommunizieren. Die neue Plattform muss einfach zu
              bedienen sein und viele verschiedene Funktionen bieten. Das Ziel
              war es, eine Lösung zu schaffen, die von allen Studierenden und
              Alumni genutzt wird, um die Verbindung zur Universität stark zu
              halten.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\sc\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image small">
            <img src="public\img\sc\process.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['          [PROCESS]          ']" />
            <div class="paragraph">
              Um die Bedürfnisse der Nutzer zu verstehen, wurde zu Beginn eine
              Umfrage zu bereits existierenden Plattformen durchgeführt. Durch
              Methoden des User Research wie Nutzerinterviews und die Analyse
              der "Voice of the Customer" wurde ein tiefes Verständnis für die
              Anforderungen der Zielgruppe entwickelt. Diese Erkenntnisse wurden
              genutzt, um einen Low-Fidelity-Prototyp zu erstellen, der iterativ
              weiterentwickelt wurde. In Testphasen mit potenziellen Nutzern
              wurden kontinuierlich Anpassungen vorgenommen, um die
              Benutzerfreundlichkeit weiter zu optimieren. Die in Figma
              entwickelten Low-, Mid- und High-Fidelity-Prototypen dienten als
              Grundlage für regelmäßige Nutzertests. Das iterative Vorgehen und
              die Berücksichtigung des Nutzerfeedbacks ermöglichten die
              Entwicklung einer Plattform, die sowohl funktional als auch
              intuitiv ist und die Komplexität der vielen Funktionen effektiv
              vereinfacht darstellt.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['           [SOULUTION]           ']" />
            <div class="paragraph">
              Das Ergebnis ist SimpleChat – eine umfassende Plattform, die nicht
              nur das Chatten ermöglicht, sondern auch eine Vielzahl
              zusätzlicher Funktionen bietet, um die Hochschule und die
              Studierenden besser zu vernetzen. Ein zentrales Element der
              Plattform sind die Profile, die die Nutzer selbst pflegen. In
              diesen Profilen sind wichtige Informationen wie eine öffentlich
              sichtbare Timeline zu finden, in der Praktika, Auslandsaufenthalte
              und andere wichtige Meilensteine dokumentiert sind. Zusätzlich
              ermöglicht ein Tag-System, Interessen und relevante Fakten zur
              Person zu hinterlegen. Diese Funktionen erlauben es anderen
              Nutzern, gezielt nach Personen mit spezifischen Erfahrungen oder
              Interessen zu suchen – zum Beispiel für Informationen zu einem
              Auslandsaufenthalt in Costa Rica. Neben den Studierenden sind auch
              die Hochschule selbst und Unternehmen auf der Plattform vertreten.
              Die Hochschule kann ein Schwarzes Brett führen, Noten und
              Bescheide direkt accountbezogen bereitstellen und somit
              verschiedene Plattformen miteinander verknüpfen. Kurse und
              Teamkanäle sind ebenfalls Teil von SimpleChat, sodass
              Unterrichtsmaterialien leicht geteilt werden können. Unternehmen
              erhalten eingeschränkte Accounts und haben die Möglichkeit,
              Stellenangebote zu veröffentlichen oder gezielt nach Personen mit
              bestimmten Fähigkeiten zu suchen, die für sie von Interesse sind.
              SimpleChat bietet somit nicht nur eine Lösung für eine bessere
              Kommunikation, sondern wird zu einem integralen Bestandteil des
              Hochschullebens und der Berufsplanung der Studierenden.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\sc\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <a class="tryOutLink custom-link" style="text-decoration: none"
        >TRY IT OUT LIVE</a
      >
      <div class="project-section">
        <div class="project-video">
          <iframe
            style="border: 1px solid #171717"
            width="800"
            height="450"
            src="https://embed.figma.com/proto/lAaQo23W7BEgJGwKB9lQD8/Designmethoden-USerresearch?page-id=0%3A1&node-id=213-2808&node-type=frame&viewport=-2921%2C-796%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=213%3A2808&embed-host=share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '       TWO WEEKS       ',
            '    THIRD SEMESTER     ',
            '      GRADE: 1.7        ',
          ]"
        />
      </div>
    </div>

    <div v-if="isTablet" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['              [PROBLEM]            ']" />
            <div class="paragraph">
              Die derzeitige Kommunikationsplattform der Universität, Slack,
              wird durch eine neue dedizierte Plattform ersetzt, die es der
              Universität, den Studierenden und Alumni erleichtern wird,
              miteinander zu kommunizieren. Die neue Plattform muss einfach zu
              bedienen sein und viele verschiedene Funktionen bieten. Das Ziel
              war es, eine Lösung zu schaffen, die von allen Studierenden und
              Alumni genutzt wird, um die Verbindung zur Universität stark zu
              halten.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\sc\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['             [PROCESS]             ']" />
            <div class="paragraph">
              Um die Bedürfnisse der Nutzer zu verstehen, wurde zu Beginn eine
              Umfrage zu bereits existierenden Plattformen durchgeführt. Durch
              Methoden des User Research wie Nutzerinterviews und die Analyse
              der "Voice of the Customer" wurde ein tiefes Verständnis für die
              Anforderungen der Zielgruppe entwickelt. Diese Erkenntnisse wurden
              genutzt, um einen Low-Fidelity-Prototyp zu erstellen, der iterativ
              weiterentwickelt wurde. In Testphasen mit potenziellen Nutzern
              wurden kontinuierlich Anpassungen vorgenommen, um die
              Benutzerfreundlichkeit weiter zu optimieren. Die in Figma
              entwickelten Low-, Mid- und High-Fidelity-Prototypen dienten als
              Grundlage für regelmäßige Nutzertests. Das iterative Vorgehen und
              die Berücksichtigung des Nutzerfeedbacks ermöglichten die
              Entwicklung einer Plattform, die sowohl funktional als auch
              intuitiv ist und die Komplexität der vielen Funktionen effektiv
              vereinfacht darstellt.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\sc\process.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['             [SOLUTION]            ']" />
            <div class="paragraph">
              Das Ergebnis ist SimpleChat – eine umfassende Plattform, die nicht
              nur das Chatten ermöglicht, sondern auch eine Vielzahl
              zusätzlicher Funktionen bietet, um die Hochschule und die
              Studierenden besser zu vernetzen. Ein zentrales Element der
              Plattform sind die Profile, die die Nutzer selbst pflegen. In
              diesen Profilen sind wichtige Informationen wie eine öffentlich
              sichtbare Timeline zu finden, in der Praktika, Auslandsaufenthalte
              und andere wichtige Meilensteine dokumentiert sind. Zusätzlich
              ermöglicht ein Tag-System, Interessen und relevante Fakten zur
              Person zu hinterlegen. Diese Funktionen erlauben es anderen
              Nutzern, gezielt nach Personen mit spezifischen Erfahrungen oder
              Interessen zu suchen – zum Beispiel für Informationen zu einem
              Auslandsaufenthalt in Costa Rica. Neben den Studierenden sind auch
              die Hochschule selbst und Unternehmen auf der Plattform vertreten.
              Die Hochschule kann ein Schwarzes Brett führen, Noten und
              Bescheide direkt accountbezogen bereitstellen und somit
              verschiedene Plattformen miteinander verknüpfen. Kurse und
              Teamkanäle sind ebenfalls Teil von SimpleChat, sodass
              Unterrichtsmaterialien leicht geteilt werden können. Unternehmen
              erhalten eingeschränkte Accounts und haben die Möglichkeit,
              Stellenangebote zu veröffentlichen oder gezielt nach Personen mit
              bestimmten Fähigkeiten zu suchen, die für sie von Interesse sind.
              SimpleChat bietet somit nicht nur eine Lösung für eine bessere
              Kommunikation, sondern wird zu einem integralen Bestandteil des
              Hochschullebens und der Berufsplanung der Studierenden.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\sc\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <a class="tryOutLink custom-link" style="text-decoration: none"
        >TRY IT OUT LIVE</a
      >
      <div class="project-section">
        <div class="project-video">
          <iframe
            style="border: 1px solid #171717"
            width="800"
            height="450"
            src="https://embed.figma.com/proto/lAaQo23W7BEgJGwKB9lQD8/Designmethoden-USerresearch?page-id=0%3A1&node-id=213-2808&node-type=frame&viewport=-2921%2C-796%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=213%3A2808&embed-host=share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '       TWO WEEKS       ',
            '    THIRD SEMESTER     ',
            '      GRADE: 1.7        ',
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
              Die derzeitige Kommunikationsplattform der Universität, Slack,
              wird durch eine neue dedizierte Plattform ersetzt, die es der
              Universität, den Studierenden und Alumni erleichtern wird,
              miteinander zu kommunizieren. Die neue Plattform muss einfach zu
              bedienen sein und viele verschiedene Funktionen bieten. Das Ziel
              war es, eine Lösung zu schaffen, die von allen Studierenden und
              Alumni genutzt wird, um die Verbindung zur Universität stark zu
              halten.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\sc\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [PROCESS]         ']" />
            <div class="paragraph">
              Um die Bedürfnisse der Nutzer zu verstehen, wurde zu Beginn eine
              Umfrage zu bereits existierenden Plattformen durchgeführt. Durch
              Methoden des User Research wie Nutzerinterviews und die Analyse
              der "Voice of the Customer" wurde ein tiefes Verständnis für die
              Anforderungen der Zielgruppe entwickelt. Diese Erkenntnisse wurden
              genutzt, um einen Low-Fidelity-Prototyp zu erstellen, der iterativ
              weiterentwickelt wurde. In Testphasen mit potenziellen Nutzern
              wurden kontinuierlich Anpassungen vorgenommen, um die
              Benutzerfreundlichkeit weiter zu optimieren. Die in Figma
              entwickelten Low-, Mid- und High-Fidelity-Prototypen dienten als
              Grundlage für regelmäßige Nutzertests. Das iterative Vorgehen und
              die Berücksichtigung des Nutzerfeedbacks ermöglichten die
              Entwicklung einer Plattform, die sowohl funktional als auch
              intuitiv ist und die Komplexität der vielen Funktionen effektiv
              vereinfacht darstellt.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\sc\process.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [SOLUTION]        ']" />
            <div class="paragraph">
              Das Ergebnis ist SimpleChat – eine umfassende Plattform, die nicht
              nur das Chatten ermöglicht, sondern auch eine Vielzahl
              zusätzlicher Funktionen bietet, um die Hochschule und die
              Studierenden besser zu vernetzen. Ein zentrales Element der
              Plattform sind die Profile, die die Nutzer selbst pflegen. In
              diesen Profilen sind wichtige Informationen wie eine öffentlich
              sichtbare Timeline zu finden, in der Praktika, Auslandsaufenthalte
              und andere wichtige Meilensteine dokumentiert sind. Zusätzlich
              ermöglicht ein Tag-System, Interessen und relevante Fakten zur
              Person zu hinterlegen. Diese Funktionen erlauben es anderen
              Nutzern, gezielt nach Personen mit spezifischen Erfahrungen oder
              Interessen zu suchen – zum Beispiel für Informationen zu einem
              Auslandsaufenthalt in Costa Rica. Neben den Studierenden sind auch
              die Hochschule selbst und Unternehmen auf der Plattform vertreten.
              Die Hochschule kann ein Schwarzes Brett führen, Noten und
              Bescheide direkt accountbezogen bereitstellen und somit
              verschiedene Plattformen miteinander verknüpfen. Kurse und
              Teamkanäle sind ebenfalls Teil von SimpleChat, sodass
              Unterrichtsmaterialien leicht geteilt werden können. Unternehmen
              erhalten eingeschränkte Accounts und haben die Möglichkeit,
              Stellenangebote zu veröffentlichen oder gezielt nach Personen mit
              bestimmten Fähigkeiten zu suchen, die für sie von Interesse sind.
              SimpleChat bietet somit nicht nur eine Lösung für eine bessere
              Kommunikation, sondern wird zu einem integralen Bestandteil des
              Hochschullebens und der Berufsplanung der Studierenden.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\sc\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <a class="tryOutLink custom-link" style="text-decoration: none"
        >TRY IT OUT LIVE</a
      >
      <div class="project-section">
        <div class="project-video">
          <iframe
            style="border: 1px solid #171717"
            width="800"
            height="450"
            src="https://embed.figma.com/proto/lAaQo23W7BEgJGwKB9lQD8/Designmethoden-USerresearch?page-id=0%3A1&node-id=213-2808&node-type=frame&viewport=-2921%2C-796%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=213%3A2808&embed-host=share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '       TWO WEEKS       ',
            '    THIRD SEMESTER     ',
            '      GRADE: 1.7        ',
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
