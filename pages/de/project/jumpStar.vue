<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/de/project/simpleChat" class="custom-link">SIMPLECHAT</nuxt-link>
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/de/project/projects" class="custom-link">PLANTMONIT</nuxt-link>
    </div>
    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
        '        [JUMPSTAR]          ',
      ]" />
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        '  WEB DEPLOYMENT PIPELINE ',
        'THREEJS     SERVERHOSTING ',
        '      DOCKER   SVELTE     ',
        ' CLOUDFLARE      PORTAINER',
        'MONGOOSE    GITHUB ACTIONS',
      ]" />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="public/img/js/thumbnail.svg" alt="plantmonit" />
      </div>
    </div>
    <DetailsScroll />

    <div v-if="isDesktop" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['[IDEE]']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              Der Kurs gab nur eine Vorgabe: Etwas mit Sternen machen. Dazu
              wurde ein Link zu einer CSV-Datei mit etwa 340.000 Sternendaten
              bereitgestellt. Der Schwerpunkt des Kurses lag auf dem Erlernen
              der Deployment Pipeline und weniger auf dem Nutzen der Inhalte.
              Trotzdem sollte eine Website entwickelt werden, die in dieser Form
              nicht schon existiert.<br /><br />
              Viele Menschen glauben, dass die Konstellation der Sterne zum
              Zeitpunkt ihrer Geburt eine besondere Bedeutung für ihr Leben
              hat.<br />
              Dieser Glaube beeinflusst Entscheidungen und Einstellungen im
              Alltag, sei es durch Horoskope oder astrologische Vorhersagen.<br />
              Mit der Website sollte auf spielerische Weise gezeigt werden, dass
              Sternbilder letztlich nichts anderes als eine zufällige Anordnung
              von Himmelskörpern sind, die nur durch unsere Perspektive als
              zusammenhängend erscheinen. Ziel war es, den Menschen eine neue
              Sichtweise auf das Universum zu eröffnen und die vermeintliche
              Bedeutung der Sternbilder als Fiktion darzustellen.
            </div>
          </div>
          <div class="image large">
            <img src="public/img/js/js.png" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image large">
            <img src="public/img/js/Process.svg" alt="concept work in figma" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['[PROZESS]']" preset="sectionFlap" :align="'center'" />
            <div class="paragraph">
              Zu Beginn des Projekts wurde überlegt, wie die Sterne dargestellt
              werden sollten. Schnell fiel die Entscheidung, eine spielerische
              Komponente einzubringen, indem ein Raumschiff simuliert wird, das,
              durch das Weltall fliegt. Diese Herangehensweise ermöglicht es,
              Sterne und Konstellationen aus verschiedenen Perspektiven zu
              betrachten und so die Zufälligkeit der Anordnungen zu
              verdeutlichen. Die Idee, wissenschaftliche Daten aktiv anzuzeigen,
              wurde nach einigen Feedbackgesprächen in den Hintergrund gerückt,
              um den Fokus stärker auf das visuelle Erleben zu legen.
              <br />Dezente Linien, die die Sterne so verbinden, dass
              Sternkonstellationen erkennbar werden, verzerren sich im Laufe der
              Reise zunehmend. <br />Dadurch wird den Nutzern klar, dass schon
              eine kleine Veränderung der Perspektive ausreicht, um die
              vermeintlichen Sternbilder aufzulösen. <br />Um die Immersion zu
              verstärken, wurde ein schlankes, unauffälliges Design für die
              Navigationstools gewählt, das sich dezent in den Hintergrund
              einfügt und den visuellen Fokus auf die Sterne nicht stört.
            </div>
          </div>
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <SplitFlapText :texts="['[IMPLEMENTATION]']" preset="sectionFlap" :align="'center'" />
              <div class="paragraph">
                Das Resultat ist eine interaktive Website, die den Nutzern eine
                spielerische Reise durch das Weltall ermöglicht. Mithilfe eines
                simulierten Raumschiffs können Sterne und Konstellationen aus
                verschiedenen Blickwinkeln betrachtet werden. Ziel ist es,
                aufzuzeigen, dass Sternbilder reine Fiktion und eine Frage der
                Perspektive sind. Subtile Animationen verdeutlichen, dass selbst
                kleinste Veränderungen im Blickwinkel die scheinbare Ordnung der
                Sternbilder auflösen. Die Nutzer erleben so, wie zufällig die
                Anordnung der Himmelskörper wirklich ist – nicht durch
                Belehrung, sondern durch eigenes Entdecken und Erleben. Die
                Website basiert auf dem Framework Svelte, während THREE.js die
                3D-Umgebung realisiert.<br />
                Die Sternendaten werden in einer MongoDB-Datenbank gespeichert,
                die zusammen mit dem Backend auf einem eigenen Server gehostet
                wird. Mithilfe von Docker und Portainer wird die Infrastruktur
                verwaltet, und GitHub Actions sorgt für eine nahezu
                automatisierte Deployment Pipeline. So wird eine effiziente und
                zuverlässige Bereitstellung der Anwendung gewährleistet.
              </div>
            </div>
            <div class="image large">
              <img src="public/img/js/Implementaion.svg" alt="a monitor displaying jumpstar" />
            </div>
          </div>
        </div>

        <a href="https://starsapp.johannes-biess.com/" target="_blank" rel="noopener noreferrer"
          class="tryOutLink custom-link">TRY IT OUT LIVE</a>

        <div class="project-section" style="padding-top: 2rem">
          <SplitFlapText preset="bannerFlap" :align="'center'" :texts="[
            '                       [PROJEKT] [VIDEO]                       ',
          ]" />
          <div class="project-video">
            <iframe src="https://www.youtube.com/embed/5N_OzRcDetc?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
              title="YouTube video player" frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
        <div class="projectDetailsFlap">
          <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
            '[KEYDATA]',
            'TWO MONTHS',
            'THIRD SEMESTER',
            'GRADE: 1.0',
            'TEAMWORK',
          ]" />
        </div>
      </div>
    </div>

    <div v-if="isTablet" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['[IDEE]']" preset="sectionFlapTablet" :align="'center'" />
            <div class="paragraph">
              Der Kurs gab nur eine Vorgabe: Etwas mit Sternen machen. Dazu
              wurde ein Link zu einer CSV-Datei mit etwa 340.000 Sternendaten
              bereitgestellt. Der Schwerpunkt des Kurses lag auf dem Erlernen
              der Deployment Pipeline und weniger auf dem Nutzen der Inhalte.
              Trotzdem sollte eine Website entwickelt werden, die in dieser Form
              nicht schon existiert. Viele Menschen glauben, dass die
              Konstellation der Sterne zum Zeitpunkt ihrer Geburt eine besondere
              Bedeutung für ihr Leben hat.<br />
              Dieser Glaube beeinflusst Entscheidungen und Einstellungen im
              Alltag, sei es durch Horoskope oder astrologische Vorhersagen. Mit
              der Website sollte auf spielerische Weise gezeigt werden, dass
              Sternbilder letztlich nichts anderes als eine zufällige Anordnung
              von Himmelskörpern sind, die nur durch unsere Perspektive als
              zusammenhängend erscheinen. Ziel war es, den Menschen eine neue
              Sichtweise auf das Universum zu eröffnen und die vermeintliche
              Bedeutung der Sternbilder als Fiktion darzustellen.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\js\js.png" alt="plantmonit" style="object-fit: contain" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['[PROZESS]']" preset="sectionFlapTablet" :align="'center'" />
            <div class="paragraph">
              Zu Beginn des Projekts wurde überlegt, wie die Sterne dargestellt
              werden sollten. Schnell fiel die Entscheidung, eine spielerische
              Komponente einzubringen, indem ein Raumschiff simuliert wird, das,
              durch das Weltall fliegt. Diese Herangehensweise ermöglicht es,
              Sterne und Konstellationen aus verschiedenen Perspektiven zu
              betrachten und so die Zufälligkeit der Anordnungen zu
              verdeutlichen.<br /><br />
              Die Idee, wissenschaftliche Daten aktiv anzuzeigen, wurde nach
              einigen Feedbackgesprächen in den Hintergrund gerückt, um den
              Fokus stärker auf das visuelle Erleben zu legen.<br />
              Dezente Linien, die die Sterne so verbinden, dass
              Sternkonstellationen erkennbar werden, verzerren sich<br />
              im Laufe der Reise zunehmend. Dadurch wird den Nutzern klar, dass
              schon eine kleine Veränderung der Perspektive ausreicht, um die
              vermeintlichen Sternbilder aufzulösen. Um die Immersion zu
              verstärken, wurde ein schlankes, unauffälliges Design für die
              Navigationstools gewählt, das sich dezent in den Hintergrund
              einfügt und den visuellen Fokus auf die Sterne nicht stört.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\js\Process.svg" alt="concept work in figma" style="object-fit: contain" />
          </div>
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <SplitFlapText :texts="['[IMPLEMENTATION]']" preset="sectionFlapTablet" :align="'center'" />
              <div class="paragraph">
                Das Resultat ist eine interaktive Website, die den Nutzern eine
                spielerische Reise durch das Weltall ermöglicht. Mithilfe eines
                simulierten Raumschiffs können Sterne und Konstellationen aus
                verschiedenen Blickwinkeln betrachtet werden. Ziel ist es,
                aufzuzeigen, dass Sternbilder reine Fiktion und eine Frage der
                Perspektive sind. Subtile Animationen verdeutlichen, dass selbst
                kleinste Veränderungen im Blickwinkel die scheinbare Ordnung der
                Sternbilder auflösen. Die Nutzer erleben so, wie zufällig die
                Anordnung der Himmelskörper wirklich ist – nicht durch
                Belehrung, sondern durch eigenes Entdecken und Erleben.<br /><br />
                Die Website basiert auf dem Framework Svelte, während THREE.js
                die 3D-Umgebung realisiert. Die Sternendaten werden in einer
                MongoDB-Datenbank gespeichert, die zusammen mit dem Backend auf
                einem eigenen Server gehostet wird. Mithilfe von Docker und
                Portainer Portainer wird die Infrastruktur verwaltet, und GitHub
                Actions sorgt für eine nahezu automatisierte Deployment
                Pipeline. So wird eine effiziente und zuverlässige
                Bereitstellung der Anwendung gewährleistet.
              </div>
            </div>
            <div class="image medium">
              <img src="public\img\js\Implementaion.svg" alt="a moitor displaying jumpstar"
                style="object-fit: contain" />
            </div>
          </div>
        </div>

        <a href="https://starsapp.johannes-biess.com/" target="_blank" rel="noopener noreferrer"
          class="tryOutLink custom-link">TRY IT OUT LIVE</a>

        <div class="project-section" style="padding-top: 2rem">
          <SplitFlapText preset="bannerFlapTablet" :align="'center'" :texts="[
            '                          [PROJEKT] [VIDEO]                        ',
          ]" />
          <div class="project-video">
            <iframe src="https://www.youtube.com/embed/5N_OzRcDetc?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
              title="YouTube video player" frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
        <div class="projectDetailsFlap">
          <SplitFlapText :texts="[
            '        [KEYDATA]         ',
            '        TWO MONTHS      ',
            '     THIRD SEMESTER     ',
            '       GRADE: 1.0       ',
            '        TEAMWORK        ',
          ]" />
        </div>
      </div>
    </div>

    <div v-else-if="isMobile" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['[IDEE]']" preset="sectionFlapMobile" :align="'center'" />
            <div class="paragraph">
              Der Kurs gab nur eine Vorgabe: Etwas mit Sternen machen. Dazu
              wurde ein Link zu einer CSV-Datei mit etwa 340.000 Sternendaten
              bereitgestellt. Der Schwerpunkt des Kurses lag auf dem Erlernen
              der Deployment Pipeline und weniger auf dem Nutzen der Inhalte.
              Trotzdem sollte eine Website entwickelt werden, die in dieser Form
              nicht schon existiert.<br />
              Viele Menschen glauben, dass die Konstellation der Sterne zum
              Zeitpunkt ihrer Geburt eine besondere Bedeutung für ihr Leben hat.
              Dieser Glaube beeinflusst Entscheidungen und Einstellungen im
              Alltag, sei es durch Horoskope oder astrologische Vorhersagen. Mit
              der Website sollte auf spielerische Weise gezeigt werden, dass
              Sternbilder letztlich nichts anderes als eine zufällige Anordnung
              von Himmelskörpern sind, die nur durch unsere Perspektive als
              zusammenhängend erscheinen. Ziel war es, den Menschen eine neue
              Sichtweise auf das Universum zu eröffnen und die vermeintliche
              Bedeutung der Sternbilder als Fiktion darzustellen.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\js\js.png" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['[PROZESS]']" preset="sectionFlapMobile" :align="'center'" />
            <div class="paragraph">
              Zu Beginn des Projekts wurde überlegt, wie die Sterne dargestellt
              werden sollten. Schnell fiel die Entscheidung, eine spielerische
              Komponente einzubringen, indem ein Raumschiff simuliert wird, das
              durch das Weltall fliegt. Diese Herangehensweise ermöglicht es,
              Sterne und Konstellationen aus verschiedenen Perspektiven zu
              betrachten und so die Zufälligkeit der Anordnungen zu
              verdeutlichen. Die Idee, wissenschaftliche Daten aktiv anzuzeigen,
              wurde nach einigen Feedbackgesprächen in den Hintergrund gerückt,
              um den Fokus stärker auf das visuelle Erleben zu legen, Dezente
              Linien, die die Sterne so verbinden, dass Sternkonstellationen
              erkennbar werden, verzerren sich im Laufe der Reise zunehmend.
              Linien, die die Sterne so verbinden, dass Sternkonstellationen
              erkennbar werden, verzerren sich im Laufe der Reise zunehmend.
              Dadurch wird den Nutzern klar, dass schon eine kleine Veränderung
              der Perspektive ausreicht, um die vermeintlichen Sternbilder
              aufzulösen. Um die Immersion zu verstärken, wurde ein schlankes,
              unauffälliges Design für die Navigationstools gewählt, das sich
              dezent in den Hintergrund einfügt und den visuellen Fokus auf die
              Sterne nicht stört.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\js\Process.svg" alt="concept work in figma" />
          </div>
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <SplitFlapText :texts="['[IMPLEMENTATION]']" preset="sectionFlapMobile" :align="'center'" />
              <div class="paragraph">
                Das Resultat ist eine interaktive Website, die den Nutzern eine
                spielerische Reise durch das Weltall ermöglicht. Mithilfe eines
                simulierten Raumschiffs können Sterne und Konstellationen aus
                verschiedenen Blickwinkeln betrachtet werden. Ziel ist es,
                aufzuzeigen, dass Sternbilder reine Fiktion und eine Frage der
                Perspektive sind. Subtile Animationen verdeutlichen, dass selbst
                kleinste Veränderungen im Blickwinkel die scheinbare Ordnung der
                Sternbilder auflösen. Die Nutzer erleben so, wie zufällig die
                Anordnung der Himmelskörper wirklich ist – nicht durch
                Belehrung, sondern durch eigenes Entdecken und Erleben. Die
                Website basiert auf dem Framework Svelte, während THREE.js die
                3D-Umgebung realisiert. Die Sternendaten werden in einer
                MongoDB-Datenbank gespeichert, die zusammen mit dem Backend auf
                einem eigenen Server gehostet wird. Mithilfe von Docker und
                Portainer wird die Infrastruktur verwaltet, und GitHub Actions
                sorgt für eine nahezu automatisierte Deployment Pipeline. So
                wird eine effiziente und zuverlässige Bereitstellung der
                Anwendung gewährleistet.
              </div>
            </div>
            <div class="image medium">
              <img src="public\img\js\Implementaion.svg" alt="a moitor displaying jumpstar" />
            </div>
          </div>
        </div>

        <a href="https://starsapp.johannes-biess.com/" target="_blank" rel="noopener noreferrer"
          class="tryOutLink custom-link">TRY IT OUT LIVE</a>

        <div class="project-section" style="padding-top: 2rem">
          <SplitFlapText preset="bannerFlapMobile" :align="'center'" :texts="[
            '                          [PROJEKT] [VIDEO]                        ',
          ]" />

          <div class="project-video">
            <iframe src="https://www.youtube.com/embed/5N_OzRcDetc?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
              title="YouTube video player" frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
        <div class="projectDetailsFlap">
          <SplitFlapText preset="keydataFlapMobile" :align="'center'" :texts="[
            '[KEYDATA]',
            'TWO MONTHS',
            'THIRD SEMESTER',
            'GRADE: 1.0',
            'TEAMWORK',
          ]" />
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
