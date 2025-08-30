<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/en/project/simpleChat" class="custom-link"
        >SIMPLECHAT</nuxt-link
      >
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/en/project/projects" class="custom-link"
        >PLANTMONIT</nuxt-link
      >
    </div>
    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          '         [JUMPSTAR]         ',
          '  WEB DEPLOYMENT PIPELINE ',
          'THREEJS     SERVERHOSTING ',
          '      DOCKER   SVELTE     ',
          ' CLOUDFLARE      PORTAINER',
          'MONGOOSE    GITHUB ACTIONS',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="public\img\js\thumbnail.svg" alt="plantmonit" />
      </div>
    </div>
    <DetailsScroll />

    <div v-if="isDesktop" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['            [IDEA]             ']" />
            <div class="paragraph">
              The course asked to do something with stars. A link to a CSV file
              containing around 340,000 stars and their data was provided. The
              focus of the course was more on learning the deployment pipeline
              than on developing unique content.<br />
              Despite this, My intention was to create a website that doesn't
              already exist in this form. Many people believe that the
              constellation of the stars <br />at the time of their birth has
              special significance for their lives.<br />
              This belief influences choices and attitudes in everyday life,
              from horoscopes to astrological predictions. The website was
              designed to demonstrate, in a fun way, that constellations are
              simply random groupings of celestial bodies that appear coherent
              due to perspective. The goal was to offer a new perspective on the
              universe and to highlight that the supposed meanings of the
              constellations are just fiction.
            </div>
          </div>
          <div class="image mela">
            <img
              src="public\img\js\js.png"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image large">
            <img src="public\img\js\Process.svg" alt="concept work in figma" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['           [PROCESS]           ']" />
            <div class="paragraph">
              The project began with a discussion on how to portray the
              stars.<br />
              A decision was quickly made to add a fun element by simulating a
              spaceship flying through space. This approach allows the stars and
              constellations to be seen from different angles, making it easier
              to understand the randomness of their arrangements.<br /><br />
              Following feedback discussions, the idea of displaying scientific
              data was set aside to focus more on the visual experience.
              <br />As movement through space occurs, the lines connecting the
              stars begin to distort, making it harder to recognize
              constellations.<br />
              This realization shows that even a slight shift in perspective is
              enough to disrupt these supposed constellations. To enhance
              immersion, a sleek, unobtrusive design was chosen for the
              navigation tools, blending them with the background without
              distracting from the visual focus on the stars.
            </div>
          </div>
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <SplitFlapText :texts="['      [IMPLEMENTATION]       ']" />
              <div class="paragraph">
                The result is an interactive website that allows exploration of
                space in an engaging way. Stars and constellations can be viewed
                from different perspectives with the aid of a simulated
                spaceship. <br /><br />My intention is to demonstrate that
                constellations are merely a matter of perspective. Subtle
                animations illustrate how even small changes in viewing angles
                can make the constellations appear less ordered. <br />Users can
                see firsthand how random the arrangement of celestial bodies
                really is through their own discovery and experience rather than
                direct instruction. The website is built using the Svelte
                framework, with THREE.js managing the 3D environment. Star data
                is stored in a MongoDB database, hosted on a personal server
                along with the backend.<br />
                Docker and Portainer are used to manage the infrastructure, and
                GitHub Actions provides an almost automated deployment pipeline,
                facilitating easy application deployment.
              </div>
            </div>
            <div class="image large">
              <img
                src="public\img\js\Implementaion.svg"
                alt="a moitor displaying jumpstar"
              />
            </div>
          </div>
        </div>

        <a
          href="https://starsapp.johannes-biess.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="tryOutLink custom-link"
          >TRY IT OUT LIVE</a
        >

        <div class="project-section" style="padding-top: 2rem">
          <SplitFlapText
            :texts="[
              '                       [PROJECT] [VIDEO]                       ',
            ]"
          />
          <div class="project-video">
            <iframe
              src="https://www.youtube.com/embed/5N_OzRcDetc?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
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
              '        [KEYDATA]        ',
              '       TWO MONTHS      ',
              '     THIRD SEMESTER    ',
              '      GRADE: 1.0       ',
              '       TEAMWORK        ',
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
              :texts="['                   [IDEA]                    ']"
            />
            <div class="paragraph">
              The course asked to do something with stars.<br />
              A link to a CSV file containing around 340,000 stars and their
              data was provided. <br />The focus of the course was more on
              learning the deployment pipeline than on developing unique
              content. Despite this, My intention was to create a website that
              doesn't already exist <br />in this form. Many people believe that
              the constellation of the stars at the time of their birth has
              special significance for their lives. This belief influences
              choices and attitudes in everyday life, from horoscopes to
              astrological predictions.<br /><br />
              The website was designed to demonstrate, in a fun way, that
              constellations are simply random groupings of celestial bodies
              that appear coherent due to perspective. The goal was to offer a
              new perspective on the universe and to highlight that the supposed
              meanings of the constellations are just fiction.
            </div>
          </div>
          <div class="image medium">
            <img
              src="public\img\js\js.png"
              alt="plantmonit"
              style="object-fit: contain"
            />
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
              The project began with a discussion on how to portray the stars.
              <br />A decision was quickly made to add a fun element by
              simulating a spaceship flying through space. This approach allows
              the stars and constellations to be seen from different angles,
              making it easier to understand the randomness of their
              arrangements.<br />
              <br />
              Following feedback discussions, the idea of displaying scientific
              data was set aside to focus more on the visual experience. As
              movement through space occurs, the lines connecting the stars
              begin to distort, making it harder to recognize constellations.
              <br />This realization shows that even a slight shift in
              perspective is enough to disrupt these supposed constellations. To
              enhance immersion, a sleek, unobtrusive design was chosen for the
              navigation tools, blending them with the background without
              distracting from the visual focus on the stars.
            </div>
          </div>
          <div class="image mela">
            <img
              src="public\img\js\Process.svg"
              alt="concept work in figma"
              style="object-fit: contain"
            />
          </div>
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <SplitFlapText
                :texts="['              [IMPLEMENTATION]               ']"
              />
              <div class="paragraph">
                The result is an interactive website that allows exploration of
                space in an engaging way. <br />Stars and constellations can be
                viewed from different perspectives with the aid of a simulated
                spaceship. The intention is to demonstrate that constellations
                are merely a matter of perspective. <br /><br />Subtle
                animations illustrate how even small changes in viewing angles
                can make the constellations appear less ordered. Users can see
                firsthand how random the arrangement of celestial bodies really
                is—through their own discovery and experience rather than direct
                instruction. The website is built using the Svelte framework,
                with THREE.js managing the 3D environment. Star data is stored
                in a MongoDB database, hosted on a personal server along with
                the backend. Docker and Portainer are used to manage the
                infrastructure, and GitHub Actions provides an almost automated
                deployment pipeline, facilitating easy application deployment.
              </div>
            </div>
            <div class="image medium">
              <img
                style="object-fit: contain"
                src="public\img\js\Implementaion.svg "
                alt="a moitor displaying jumpstar"
              />
            </div>
          </div>
        </div>

        <a
          href="https://starsapp.johannes-biess.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="tryOutLink custom-link"
          >TRY IT OUT LIVE</a
        >

        <div class="project-section" style="padding-top: 2rem">
          <SplitFlapText
            :texts="['               [PROJECT] [VIDEO]               ']"
          />
          <div class="project-video">
            <iframe
              src="https://www.youtube.com/embed/5N_OzRcDetc?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
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
              '        [KEYDATA]        ',
              '       TWO MONTHS      ',
              '     THIRD SEMESTER    ',
              '      GRADE: 1.0       ',
              '       TEAMWORK        ',
            ]"
          />
        </div>
      </div>
    </div>

    <div v-else-if="isMobile" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [IDEA]          ']" />
            <div class="paragraph">
              The course asked to do something with stars. <br />A link to a CSV
              file containing around 340,000 stars and their data was provided.
              The focus of the course was more on learning the deployment
              pipeline than on developing unique content.<br /><br />
              Despite this, My intention was to create a website that doesn't
              already exist in this form. Many people believe that the
              constellation of the stars at the time of their birth has special
              significance for their lives. This belief influences choices and
              attitudes in everyday life, from horoscopes to astrological
              predictions. The website was designed to demonstrate, in a fun
              way, that constellations are simply random groupings of celestial
              bodies that appear coherent due to perspective. <br />The goal was
              to offer a new perspective on the universe and to highlight that
              the supposed meanings of the constellations are just fiction.
            </div>
          </div>
          <div class="image smedi">
            <img
              src="public\img\js\js.png"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [PROCESS]         ']" />
            <div class="paragraph">
              The project began with a discussion on how to portray the stars. A
              decision was quickly made to add a fun element by simulating a
              spaceship flying through space. <br />This approach allows the
              stars and constellations to be seen from different angles, making
              it easier to understand the randomness of their arrangements.
              <br /><br />
              Following feedback discussions, the idea of displaying scientific
              data was set aside to focus more on the visual experience.<br />
              As movement through space occurs, the lines connecting the stars
              begin to distort, making it harder to recognize constellations.
              This realization shows that even a slight shift in perspective is
              enough to disrupt these supposed constellations. To enhance
              immersion, a sleek, unobtrusive design was chosen for the
              navigation tools, blending them with the background without
              distracting from the visual focus on the stars.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\js\Process.svg" alt="concept work in figma" />
          </div>
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <SplitFlapText :texts="['     [IMPLEMENTATION]     ']" />
              <div class="paragraph">
                The result is an interactive website that allows exploration of
                space in an engaging way. Stars and constellations can be viewed
                from different perspectives with the aid of a simulated
                spaceship. My intention is to demonstrate that constellations
                are merely a matter of perspective.<br /><br />
                Subtle animations illustrate how even small changes in viewing
                angles can make the constellations appear less ordered.
                <br />Users can see firsthand how random the arrangement of
                celestial bodies really is—through their own discovery and
                experience rather than direct instruction. <br />The website is
                built using the Svelte framework, <br />with THREE.js managing
                the 3D environment. Star data is stored in a MongoDB database,
                hosted on a personal server along with the backend. Docker and
                Portainer are used to manage the infrastructure, and GitHub
                Actions provides an almost automated deployment pipeline,
                facilitating easy application deployment.
              </div>
            </div>
            <div class="image medium">
              <img
                src="public\img\js\Implementaion.svg"
                alt="a moitor displaying jumpstar"
              />
            </div>
          </div>
        </div>

        <a
          href="https://starsapp.johannes-biess.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="tryOutLink custom-link"
          >TRY IT OUT LIVE</a
        >

        <div class="project-section" style="padding-top: 2rem">
          <SplitFlapText :texts="['       [PROJECT] [VIDEO]       ']" />
          <div class="project-video">
            <iframe
              src="https://www.youtube.com/embed/5N_OzRcDetc?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
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
              '       TWO MONTHS       ',
              '     THIRD SEMESTER     ',
              '      GRADE: 1.0        ',
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
