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
          '        [JUMPSTAR]          ',
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

    <div v-if="!isMobile" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['            [IDEA]             ']" />
            <div class="paragraph">
              The course just asked us to do something with stars. <br />We got
              a link to a CSV file that had around 340,000 stars and their data
              in it. <br /><br />The course was more about learning the
              deployment pipeline <br />than develop the content to something
              unique. <br />Even so, we wanted to create a website that doesn't
              already exist in this form. <br /><br />Many people believe that
              the constellation of the stars at the time of their birth has a
              special significance for their lives. This belief affects our
              choices and attitudes in everyday life, from horoscopes to
              astrological predictions.<br />
              With our website, we aimed to show, in a fun way, that
              constellations are simply a random grouping of celestial bodies
              that appear coherent because of our perspective. Our goal was to
              offer a new perspective on the universe and to highlight that the
              supposed meanings of the constellations are just fiction.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\js\js.png" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
            <img src="public\img\js\Process.svg" alt="concept work in figma" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['           [PROCESS]           ']" />
            <div class="paragraph">
              At the start of the project, we discussed how we wanted to portray
              the stars. <br />We quickly decided to add a fun element by
              simulating a spaceship flying <br />through space. This approach
              lets you see the stars and constellations from different angles,
              which makes it easier to understand how random the arrangements
              are.<br />
              After some feedback discussions, we decided to put the idea of
              displaying scientific data on the back burner to focus more on the
              visual experience. <br />As you move through space, the lines that
              connect the stars start to get distorted, making it harder to
              recognize constellations. <br />This makes users realise that even
              a slight shift in perspective is enough to destroy these supposed
              constellations. <br /><br />
              To make it more immersive, we chose a sleek, unobtrusive design
              for the navigation tools that blends in with the background
              without disturbing the visual focus on the stars.
            </div>
          </div>
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <SplitFlapText :texts="['      [IMPLEMENTATION]       ']" />
              <div class="paragraph">
                The result is an interactive website that lets users have some
                fun exploring space. <br />You can view stars and constellations
                from different perspectives with the help of a simulated
                spaceship. <br />The idea is to show that constellations are
                just a matter of perspective.<br />
                There are some subtle animations that show how even small
                changes in the viewing angle can make the constellations seem
                less ordered. <br />Users get to see first-hand how random the
                arrangement of the celestial bodies really is—without any direct
                instruction, but through their own discovery and experience.
                <br /><br />The website is built on the Svelte framework, and
                THREE.js handles the 3D environment. We store the star data in a
                MongoDB database, which is hosted on our own server along with
                the backend. We use Docker and Portainer to manage the
                infrastructure, and GitHub Actions provides us with a nearly
                automated deployment pipeline, which makes it easy to deploy the
                application.
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
              '        [KEYDATA]         ',
              '        TWO MONTHS      ',
              '    THIRD SEMESTER      ',
              '      GRADE: 1.0        ',
            ]"
          />
        </div>
      </div>
    </div>

    <div v-else class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [IDEA]           ']" />
            <div class="paragraph">
              The course just asked us to do something with stars. <br />We got
              a link to a CSV file that had around 340,000 stars and their data
              in it. <br /><br />The course was more about learning the
              deployment pipeline <br />than develop the content to something
              unique. <br />Even so, we wanted to create a website that doesn't
              already exist in this form. <br /><br />Many people believe that
              the constellation of the stars at the time of their birth has a
              special significance for their lives. This belief affects our
              choices and attitudes in everyday life, from horoscopes to
              astrological predictions.<br />
              With our website, we aimed to show, in a fun way, that
              constellations are simply a random grouping of celestial bodies
              that appear coherent because of our perspective. Our goal was to
              offer a new perspective on the universe and to highlight that the
              supposed meanings of the constellations are just fiction.
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
            <SplitFlapText :texts="['         [PROCESS]        ']" />
            <div class="paragraph">
              At the start of the project, we discussed how we wanted to portray
              the stars. <br />We quickly decided to add a fun element by
              simulating a spaceship flying <br />through space. This approach
              lets you see the stars and constellations from different angles,
              which makes it easier to understand how random the arrangements
              are.<br />
              After some feedback discussions, we decided to put the idea of
              displaying scientific data on the back burner to focus more on the
              visual experience. <br />As you move through space, the lines that
              connect the stars start to get distorted, making it harder to
              recognize constellations. <br />This makes users realise that even
              a slight shift in perspective is enough to destroy these supposed
              constellations. <br /><br />
              To make it more immersive, we chose a sleek, unobtrusive design
              for the navigation tools that blends in with the background
              without disturbing the visual focus on the stars.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\js\Process.svg" alt="concept work in figma" />
          </div>
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <SplitFlapText :texts="['     [IMPLEMENTATION]      ']" />
              <div class="paragraph">
                The result is an interactive website that lets users have some
                fun exploring space. <br />You can view stars and constellations
                from different perspectives with the help of a simulated
                spaceship. <br />The idea is to show that constellations are
                just a matter of perspective.<br />
                There are some subtle animations that show how even small
                changes in the viewing angle can make the constellations seem
                less ordered. <br />Users get to see first-hand how random the
                arrangement of the celestial bodies really is—without any direct
                instruction, but through their own discovery and experience.
                <br /><br />The website is built on the Svelte framework, and
                THREE.js handles the 3D environment. We store the star data in a
                MongoDB database, which is hosted on our own server along with
                the backend. We use Docker and Portainer to manage the
                infrastructure, and GitHub Actions provides us with a nearly
                automated deployment pipeline, which makes it easy to deploy the
                application.
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
          <SplitFlapText :texts="['      [PROJECT] [VIDEO]       ']" />
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
              '        TWO MONTHS      ',
              '    THIRD SEMESTER      ',
              '      GRADE: 1.0        ',
            ]"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useIsMobile } from "@/assets/composables/useIsMobile.js";

const { isMobile } = useIsMobile();
</script>

<style src="assets/project.css" scoped></style>
