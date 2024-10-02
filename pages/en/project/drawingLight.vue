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
        <img
          style="border: 1px solid black; border-radius: 10px"
          src="public\img\dl\drawingLight (4).jpg"
          alt="plantmonit"
        />
      </div>
    </div>
    <DetailsScroll />

    <div class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['            [IDEA]             ']" />
            <div class="paragraph">
              DrawingLight was born out of a desire to reinterpret traditional
              art through the creative use of modern technology. Instead of
              simply developing a machine that moves a pen across paper, we
              wanted to create a tool that opens up a whole new dimension of
              artistic possibilities and rethinks classic <br />drawing machines
              in an innovative way. <br /><br />In photography, the combination
              of light, movement and time creates impressive works of art that
              capture fleeting movements and traces of light and outlast the
              moment. This is exactly where DrawingLight comes in, taking this
              concept to an interactive dimension. <br />It allows users not
              only to view light painting, but also to actively experience and
              create it. This offers a unique opportunity to merge art and
              technology in a dynamic way. DrawingLight not only opens up
              artistic freedom to create individual works of light art, but also
              offers great potential for interactive installations and events in
              which light is used as a living means of expression. <br />By
              combining innovative technologies and creative approaches, we show
              how technical solutions can expand the boundaries of art and
              unleash creative potential that goes far beyond its original use.
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
              The process began by interpreting the generic task - developing a
              mechanical drawing device to create lines and shapes - in a way
              that goes beyond the obvious. My aim is always to turn every task
              into something special, to think outside the box and not in a
              straight line. <br />This is how the idea of light painting came
              about, inspired by my interest in photography. Next step was to
              select the appropriate technology. <br />We needed a light source
              that was flexible enough to create interesting and dynamic light
              patterns, but not too bright to ensure a pleasant visual
              experience. We also looked at how the control of the system could
              best be implemented. <br />The requirements for the input method
              were that it should be intuitive, easily accessible and novel for
              every user, regardless of their previous experience.<br />
              We considered various options - such as using a stylus on a
              tablet, controlling it with a mouse or recognizing hand gestures
              with modern tracking technologies such as Google MediaPipe. This
              exploratory phase helped us to evaluate the different
              possibilities and assess the potential of each option for our
              concept. During prototyping, we continuously tested and improved
              the components to ensure they met our requirements and could
              support the vision of a <br />creative, interactive installation.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [IMPLEMENTATION]       ']" />
            <div class="paragraph">
              The implementation proved to be a challenge in the details.<br />
              Due to the dispersion of the light source, we decided to build a
              relatively large machine in order to obtain a detailed image.
              After comparing various mechanical options for realizing a
              movement in the coordinate system, the choice fell on a system
              with two stepper motors. <br />These motors were attached to
              tripods and moved a string by winding and unwinding it. In order
              to optimally adjust the rollers that were attached to the motors,
              we modeled our own 3D parts in Fusion 360. <br />This solution
              enabled us to draw an image of almost any size with comparatively
              few resources - unlike a conventional rail system. For the input,
              we opted for innovative control via hand gesture recognition using
              Google MediaPipe.<br />
              This was implemented with a Node.js script via the laptop webcam,
              enabling intuitive control of the light source. In addition, a
              NeoPixel was used whose light color could be controlled via a
              joystick. This combination created a dynamic and interactive
              control where users could directly influence the result. <br />The
              light painting process was structured as follows: Users initially
              had 10 seconds to paint a figure in the air. The hand movements
              were recorded via the laptop webcam and the coordinates of the
              palm were tracked. The machine then took these coordinates to
              recreate the movement within 30 seconds, while the camera took a
              long exposure of the resulting artwork.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\dl\drawingLight (11).jpg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
            <img src="public\img\dl\drawingLight (4).jpg" alt="plantmonit" />
          </div>
          <div class="image medium">
            <img src="public\img\dl\drawingLight (3).jpg" alt="plantmonit" />
          </div>
          <div class="image medium">
            <img src="public\img\dl\drawingLight (7).jpg" alt="plantmonit" />
          </div>
          <div class="image medium">
            <img src="public\img\dl\drawingLight (12).jpg" alt="plantmonit" />
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
  </main>
</template>

<script setup></script>

<style src="assets/project.css" scoped></style>
