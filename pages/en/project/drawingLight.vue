<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>
    <div id="projectLinkNext">
      <nuxt-link to="/en/project/TrickyTowers" class="custom-link"
        >TRICKYTOWERS</nuxt-link
      >
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/en/project/portfolio" class="custom-link"
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
              DrawingLight was born out of a desire to reinterpret traditional
              art through the creative use of modern technology. Instead of
              developing a simple machine that moves a pen across paper, the
              goal was to create a tool that opens up a new dimension of
              artistic possibilities and rethinks classic drawing machines in an
              innovative way.<br />
              In photography, the combination of light, movement, and time
              creates impressive works of art that capture fleeting movements
              and traces of light, preserving them beyond the moment.
              DrawingLight builds on this concept, taking it into an interactive
              dimension. It allows users not only to observe light painting but
              to actively experience and create it. This opens up a unique
              opportunity to merge art and technology dynamically. DrawingLight
              not only provides artistic freedom to create individual works of
              light art, but also holds great potential for interactive
              installations and events where light becomes a living means of
              expression. By combining innovative technologies and creative
              approaches, it demonstrates how technical solutions can expand the
              boundaries of art and unleash creative potential that goes far
              beyond their original purpose.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\dl\idea.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image large">
            <img src="public\img\dl\process.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['           [PROCESS]           ']" />
            <div class="paragraph">
              The process began by interpreting the generic task of developing a
              mechanical drawing device to create lines and shapes in a way that
              goes beyond the obvious. My aim is always to turn each task into
              something special, thinking outside the box rather than in a
              straight line.<br />
              This is how the idea of light painting emerged, inspired by an
              interest in photography. The next step was selecting the
              appropriate technology. <br /><br />A light source was needed that
              was flexible enough to create interesting and dynamic light
              patterns, yet not too bright to ensure a pleasant visual
              experience. The focus was also on how best to implement the
              system's control. The input method needed to be intuitive, easily
              accessible, and novel for any user, regardless of previous
              experience. Various options were explored—such as using a stylus
              on a tablet, controlling it with a mouse, or recognizing hand
              gestures using modern tracking technologies like Google MediaPipe.
              This exploratory phase allowed for the evaluation of different
              possibilities and an assessment of the potential of each option
              for the concept. During prototyping, components were continuously
              tested and improved to ensure they met the requirements and
              supported the vision of a creative, interactive installation.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [IMPLEMENTATION]       ']" />
            <div class="paragraph">
              The implementation presented challenges in the finer details.<br />
              Due to the dispersion of the light source, a relatively large
              machine was built to achieve a detailed image. After comparing
              various mechanical options for creating movement within a
              coordinate system, the decision was made to use a system with two
              stepper motors. These motors were mounted on tripods and moved a
              string by winding and unwinding it. <br />To optimize the rollers
              attached to the motors, custom 3D parts were modeled in Fusion
              360. This solution allowed for the creation of images in almost
              any size with relatively few resources, unlike a conventional rail
              system. For the input, innovative control was achieved through
              hand gesture recognition using Google MediaPipe. This was
              implemented via a Node.js script using the laptop's webcam,
              enabling intuitive control of the light source. Additionally, a
              NeoPixel was used, allowing users to control the light color
              through a joystick. This combination provided a dynamic and
              interactive control, where users could directly influence the
              final result. The light painting process was structured as
              follows: Users had 10 seconds to paint a figure in the air, with
              hand movements recorded via the laptop's webcam, tracking the
              palm's coordinates. The machine then used these coordinates to
              recreate the movement within 30 seconds, while the camera captured
              a long exposure of the resulting artwork.
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
          <SplitFlapText
            :texts="[
              '                        [PROJECT] [VIDEO]                       ',
            ]"
          />
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
            '        ONE WEEK          ',
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
              :texts="['                   [IDEA]                    ']"
            />
            <div class="paragraph">
              DrawingLight was born out of a desire to reinterpret traditional
              art through the creative use of modern technology. Instead of
              developing a simple machine that moves a pen across paper, the
              goal was to create a tool that opens up a new dimension of
              artistic possibilities and rethinks classic drawing machines in an
              innovative way. <br /><br />In photography, the combination of
              light, movement, and time creates impressive works of art that
              capture fleeting movements and traces of light, preserving them
              beyond the moment. DrawingLight builds on this concept, taking it
              into an interactive dimension. It allows users not only to observe
              light painting but to actively experience and create it.<br />
              This opens up a unique opportunity to merge art and technology
              dynamically. <br />DrawingLight not only provides artistic freedom
              to create individual works of light art, but also holds great
              potential for interactive installations and events where light
              becomes a living means of expression. By combining innovative
              technologies and creative approaches, it demonstrates how
              technical solutions can expand the boundaries of art and unleash
              creative potential that goes far beyond their original purpose.
            </div>
          </div>
          <div class="image medium">
            <img
              src="public\img\dl\idea.svg"
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
              The process began by interpreting the generic task of developing a
              mechanical drawing device to create lines and shapes in a way that
              goes beyond the obvious.<br /><br />
              My aim is always to turn each task into something special,
              thinking outside the box<br />
              rather than in a straight line. This is how the idea of light
              painting emerged, inspired by <br />an interest in photography.
              The next step was selecting the appropriate technology. <br />A
              light source was needed that was flexible enough to create
              interesting and dynamic<br />
              light patterns, yet not too bright to ensure a pleasant visual
              experience. <br />The focus was also on how best to implement the
              system's control.<br /><br />
              The input method needed to be intuitive, easily accessible, and
              novel for any user, regardless<br />
              of previous experience. Various options were explored—such as
              using a stylus on a tablet, controlling it with a mouse, or
              recognizing hand gestures using modern tracking technologies like
              Google MediaPipe. This exploratory phase allowed for the
              evaluation of different possibilities and an assessment of the
              potential of each option for the concept. <br />During
              prototyping, components were continuously tested and improved to
              ensure they met the requirements and supported the vision of a
              creative, interactive installation.
            </div>
          </div>
          <div class="image medium">
            <img
              src="public\img\dl\process.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['              [IMPLEMENTATION]               ']"
            />
            <div class="paragraph">
              The implementation presented challenges in the finer details. Due
              to the dispersion of the light source, a relatively large machine
              was built to achieve a detailed image.<br />
              After comparing various mechanical options for creating movement
              within a coordinate system, the decision was made to use a system
              with two stepper motors. These motors were mounted on tripods and
              moved a string by winding and unwinding it. To optimize the
              rollers attached to the motors, custom 3D parts were modeled in
              Fusion 360. <br />This solution allowed for the creation of images
              in almost any size with relatively few resources, unlike a
              conventional rail system. For the input, innovative control was
              achieved through hand gesture recognition using Google MediaPipe.
              This was implemented via a Node.js script using the laptop's
              webcam, enabling intuitive control of the light source.<br />
              Additionally, a NeoPixel was used, allowing users to control the
              light color through a joystick. This combination provided a
              dynamic and interactive control, where users could directly
              influence the final result. <br /><br />The light painting process
              was structured as follows:<br />
              Users had 10 seconds to paint a figure in the air, with hand
              movements recorded via the laptop's webcam, tracking the palm's
              coordinates. The machine then used these coordinates to recreate
              the movement within 30 seconds, while the camera captured a long
              exposure of the <br />resulting artwork.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\dl\implementation.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <SplitFlapText
          :texts="['              [PROJECT] [VIDEO]               ']"
        />
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
            '        ONE WEEK          ',
            '    SECOND SEMESTER     ',
            '      GRADE: 1.0        ',
            '       TEAMWORK         ',
          ]"
        />
      </div>
      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image mela">
            <img src="public\img\dl\dl5.svg" alt="plantmonit" />
          </div>
          <div class="image mela">
            <img src="public\img\dl\dl6.svg" alt="plantmonit" />
          </div>
          <div class="image mela">
            <img src="public\img\dl\dl7.svg" alt="plantmonit" />
          </div>
          <div class="image mela">
            <img src="public\img\dl\dl12.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
    </div>

    <!-- responsive for mobile -->
    <div v-else-if="isMobile" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['            [IDEA]            ']" />
            <div class="paragraph">
              DrawingLight was born out of a desire to reinterpret traditional
              art through the creative use of modern technology. <br />Instead
              of developing a simple machine that moves a pen across paper, the
              goal was to create a tool that opens up a new dimension of
              artistic possibilities and rethinks classic drawing machines in an
              innovative way. In photography, the combination of light,
              movement, and time creates impressive works of art that capture
              fleeting movements and traces of light, preserving them beyond the
              moment.<br /><br />
              DrawingLight builds on this concept, taking it into an interactive
              dimension. It allows users not only to observe light painting but
              to actively experience and create it. This opens up a unique
              opportunity to merge art and technology dynamically. DrawingLight
              not only provides artistic freedom to create individual works of
              light art, but also holds great potential for interactive
              installations and events where light becomes a living means of
              expression. By combining innovative technologies and creative
              approaches, it demonstrates how technical solutions can expand the
              boundaries of art and unleash creative potential that goes far
              beyond their original purpose.
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
            <SplitFlapText :texts="['          [PROCESS]           ']" />
            <div class="paragraph">
              The process began by interpreting the generic task of developing a
              mechanical drawing device to create lines and shapes in a way that
              goes beyond the obvious.<br />
              My aim is always to turn each task into something special,
              thinking outside the box rather than in a straight line.
              <br /><br />This is how the idea of light painting emerged,
              inspired by an interest in photography. The next step was
              selecting the appropriate technology. A light source was needed
              that was flexible enough to create interesting and dynamic light
              patterns, yet not too bright to ensure a pleasant visual
              experience. <br />The focus was also on how best to implement the
              <br />system's control. <br />The input method needed to be
              intuitive, easily accessible, and novel for any user, regardless
              of previous experience. Various options were explored—such as
              using a stylus on a tablet, controlling it with a mouse, or
              recognizing hand gestures using modern tracking technologies like
              Google MediaPipe.<br />
              This exploratory phase allowed for the evaluation of different
              possibilities and an assessment of the potential of each option
              for the concept. During prototyping, components were continuously
              tested and improved to ensure they met the requirements and
              supported the vision of a creative, interactive installation.
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
            <SplitFlapText :texts="['       [IMPLEMENTATION]       ']" />
            <div class="paragraph">
              The implementation presented challenges in the finer details. Due
              to the dispersion of the light source, a relatively large machine
              was built to achieve a detailed image. After comparing various
              mechanical options for creating movement within a coordinate
              system, the decision was made to use a system with two stepper
              motors. These motors were mounted on tripods and moved a string by
              winding and unwinding it. To optimize the rollers attached to the
              motors, custom 3D parts were modeled in Fusion 360. This solution
              allowed for the creation of images in almost any size with
              relatively few resources, unlike a conventional rail system. For
              the input, innovative control was achieved through hand gesture
              recognition using Google MediaPipe. This was implemented via a
              Node.js script using the laptop's webcam, enabling intuitive
              control of the light source. Additionally, a NeoPixel was used,
              allowing users to control the light color through a joystick. This
              combination provided a dynamic and interactive control, where
              users could directly influence the final result. The light
              painting process was structured as follows: Users had 10 seconds
              to paint a figure in the air, with hand movements recorded via the
              laptop's webcam, tracking the palm's coordinates. The machine then
              used these coordinates to recreate the movement within 30 seconds,
              while the camera captured a long exposure of the resulting
              artwork.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\dl\implementation.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <SplitFlapText :texts="['       [PROJECT] [VIDEO]        ']" />
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
            '         [KEYDATA]         ',
            '        ONE WEEK        ',
            '     SECOND SEMESTER    ',
            '       GRADE: 1.0       ',
            '        TEAMWORK        ',
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
