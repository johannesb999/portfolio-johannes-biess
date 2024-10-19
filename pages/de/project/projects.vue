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
          '       [PLANTMONIT]        ',
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
            <SplitFlapText :texts="['          [PROBLEM]          ']" />
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
          <div class="image medium">
            <img src="public\img\pm\process.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['           [PROCESS]           ']" />
            <div class="paragraph">
              At the start of the project, we did a bit of research to see what
              other solutions were already out there on the market. We wanted to
              see which functions were already up to scratch and where there was
              room for improvement. This analysis helped us see where we could
              make improvements and focus our solution on those areas.Next, we
              put together a detailed persona to clearly define what our target
              group needed. From this work, we realized that our goal was to
              create a solution that would make it possible to care for plants
              in a minimal amount of time—and appeal to both hobby gardeners and
              experienced plant lovers alike.At the same time, we also designed
              a user journey that covers the whole process of using the app,
              from installation to everyday use. By creating detailed user
              paths, we made sure that the user experience was smooth and
              intuitive. Along with user testing, this resulted in a thoughtful
              and user-friendly setup process that helped us identify potential
              issues early on and make user-friendliness more targeted.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image small">
            <img src="public\img\pm\software.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <div class="paragraph">
                <h3>Software Process</h3>
              We started with the software process by creating low-fi, mid-fi,
              and high-fi wireframes to plan the structure and user experience
              of the application. This process was very iterative, with a big
              focus on the user experience. Each version was optimized through
              user feedback. We used the high-fi Figma click dummy to test the
              user experience and make sure everything was seamless and
              intuitive. Once we got good feedback on the Figma dummy and were
              happy with the design, we started implementing the web app with
              Svelte. Our focus was on implementing the functions from the Figma
              dummy in detail and making sure the user experience was smooth and
              high-performance.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
            <img src="public\img\pm\hardware.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <div class="paragraph">
              <h3>Hardware Process</h3>
              We started with an analysis of what hardware we needed. We figured
              out what our smart tool needed to do and then picked the right
              parts, like an ESP32 as a microcontroller and different sensors
              for tracking environmental data. We put the components together in
              a way that met the system requirements. Next, we built a
              prototype. We used the principle of rapid prototyping to quickly
              get a clear picture of our design. We used Fusion360 to print a
              housing for the selected components. This let us integrate them
              quickly and identify problems early on. Once the housing was
              printed, we connected all the hardware components and installed
              them in it. This let us ensure that the hardware was not only
              functional but also practical for final use.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['         [SOULUITON]         ']" />
            <div class="paragraph">
              Through this structured, methodical approach, we developed a
              product that meets our target audience's needs and significantly
              simplifies plant care. PlantMonit combines cutting-edge technology
              with a user-friendly design to ensure optimal plant maintenance.
              <br />
              Key Features of PlantMonit: Automatic Plant Monitoring: Sensors
              for soil moisture, humidity, temperature, and light continuously
              monitor the vital data of plants. Advanced Image Analysis: The use
              of the OpenAI Vision API allows for detailed analysis of plant
              images, contributing to early problem detection. Intuitive User
              Interface: A user-friendly app that presents all collected data
              clearly and provides personalized care tips. Seamless Integration:
              Efficient communication between hardware components via Websockets
              ensures reliable data transmission and easy setup. Scalable
              Database: A robust backend structure with MongoDB and Mongoose
              ensures efficient data storage and management. By combining these
              elements, we created an innovative solution that revolutionizes
              plant care and helps both beginners and experienced gardeaners
              keep their plants healthy.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\pm\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText :texts="['          [PROJECT] [VIDEO]          ']" />
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
            <SplitFlapText :texts="['             [PROCESS]             ']" />
            <div class="paragraph">
              At the start of the project, we did a bit of research to see what
              other solutions were already out there on the market. We wanted to
              see which functions were already up to scratch and where there was
              room for improvement. This analysis helped us see where we could
              make improvements and focus our solution on those areas.Next, we
              put together a detailed persona to clearly define what our target
              group needed. From this work, we realized that our goal was to
              create a solution that would make it possible to care for plants
              in a minimal amount of time—and appeal to both hobby gardeners and
              experienced plant lovers alike.At the same time, we also designed
              a user journey that covers the whole process of using the app,
              from installation to everyday use. By creating detailed user
              paths, we made sure that the user experience was smooth and
              intuitive. Along with user testing, this resulted in a thoughtful
              and user-friendly setup process that helped us identify potential
              issues early on and make user-friendliness more targeted.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\pm\process.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Software Process</h3>

              We started with the software process by creating low-fi, mid-fi,
              and high-fi wireframes to plan the structure and user experience
              of the application. This process was very iterative, with a big
              focus on the user experience. Each version was optimized through
              user feedback. We used the high-fi Figma click dummy to test the
              user experience and make sure everything was seamless and
              intuitive. Once we got good feedback on the Figma dummy and were
              happy with the design, we started implementing the web app with
              Svelte. Our focus was on implementing the functions from the Figma
              dummy in detail and making sure the user experience was smooth and
              high-performance.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\pm\software.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Hardware Process</h3>
              We started with an analysis of what hardware we needed. We figured
              out what our smart tool needed to do and then picked the right
              parts, like an ESP32 as a microcontroller and different sensors
              for tracking environmental data. We put the components together in
              a way that met the system requirements. Next, we built a
              prototype. We used the principle of rapid prototyping to quickly
              get a clear picture of our design. We used Fusion360 to print a
              housing for the selected components. This let us integrate them
              quickly and identify problems early on. Once the housing was
              printed, we connected all the hardware components and installed
              them in it. This let us ensure that the hardware was not only
              functional but also practical for final use.
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
            <SplitFlapText :texts="['             [SOLUTION]            ']" />
            <div class="paragraph">
              Through this structured, methodical approach, we developed a
              product that meets our target audience's needs and significantly
              simplifies plant care. PlantMonit combines cutting-edge technology
              with a user-friendly design to ensure optimal plant maintenance.
              <br />
              Key Features of PlantMonit: Automatic Plant Monitoring: Sensors
              for soil moisture, humidity, temperature, and light continuously
              monitor the vital data of plants. Advanced Image Analysis: The use
              of the OpenAI Vision API allows for detailed analysis of plant
              images, contributing to early problem detection. Intuitive User
              Interface: A user-friendly app that presents all collected data
              clearly and provides personalized care tips. Seamless Integration:
              Efficient communication between hardware components via Websockets
              ensures reliable data transmission and easy setup. Scalable
              Database: A robust backend structure with MongoDB and Mongoose
              ensures efficient data storage and management. By combining these
              elements, we created an innovative solution that revolutionizes
              plant care and helps both beginners and experienced gardeaners
              keep their plants healthy.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\pm\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText :texts="['          [PROJECT] [VIDEO]          ']" />
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
            <SplitFlapText :texts="['      [PROCESS]       ']" />
            <div class="paragraph">
              At the start of the project, we did a bit of research to see what
              other solutions were already out there on the market. We wanted to
              see which functions were already up to scratch and where there was
              room for improvement. This analysis helped us see where we could
              make improvements and focus our solution on those areas.Next, we
              put together a detailed persona to clearly define what our target
              group needed. From this work, we realized that our goal was to
              create a solution that would make it possible to care for plants
              in a minimal amount of time—and appeal to both hobby gardeners and
              experienced plant lovers alike.At the same time, we also designed
              a user journey that covers the whole process of using the app,
              from installation to everyday use. By creating detailed user
              paths, we made sure that the user experience was smooth and
              intuitive. Along with user testing, this resulted in a thoughtful
              and user-friendly setup process that helped us identify potential
              issues early on and make user-friendliness more targeted.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\pm\process.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Software Process</h3>

              We started with the software process by creating low-fi, mid-fi,
              and high-fi wireframes to plan the structure and user experience
              of the application. This process was very iterative, with a big
              focus on the user experience. Each version was optimized through
              user feedback. We used the high-fi Figma click dummy to test the
              user experience and make sure everything was seamless and
              intuitive. Once we got good feedback on the Figma dummy and were
              happy with the design, we started implementing the web app with
              Svelte. Our focus was on implementing the functions from the Figma
              dummy in detail and making sure the user experience was smooth and
              high-performance.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\pm\software.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Hardware Process</h3>
              We started with an analysis of what hardware we needed. We figured
              out what our smart tool needed to do and then picked the right
              parts, like an ESP32 as a microcontroller and different sensors
              for tracking environmental data. We put the components together in
              a way that met the system requirements. Next, we built a
              prototype. We used the principle of rapid prototyping to quickly
              get a clear picture of our design. We used Fusion360 to print a
              housing for the selected components. This let us integrate them
              quickly and identify problems early on. Once the housing was
              printed, we connected all the hardware components and installed
              them in it. This let us ensure that the hardware was not only
              functional but also practical for final use.
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
            <SplitFlapText :texts="['      [SOLUTION]      ']" />
            <div class="paragraph">
              Through this structured, methodical approach, we developed a
              product that meets our target audience's needs and significantly
              simplifies plant care. PlantMonit combines cutting-edge technology
              with a user-friendly design to ensure optimal plant maintenance.
              <br />
              Key Features of PlantMonit: Automatic Plant Monitoring: Sensors
              for soil moisture, humidity, temperature, and light continuously
              monitor the vital data of plants. Advanced Image Analysis: The use
              of the OpenAI Vision API allows for detailed analysis of plant
              images, contributing to early problem detection. Intuitive User
              Interface: A user-friendly app that presents all collected data
              clearly and provides personalized care tips. Seamless Integration:
              Efficient communication between hardware components via Websockets
              ensures reliable data transmission and easy setup. Scalable
              Database: A robust backend structure with MongoDB and Mongoose
              ensures efficient data storage and management. By combining these
              elements, we created an innovative solution that revolutionizes
              plant care and helps both beginners and experienced gardeaners
              keep their plants healthy.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\pm\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText :texts="['     [PROJECT] [VIDEO]      ']" />
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
