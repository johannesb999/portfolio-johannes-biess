<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/en/project/jumpStar" class="custom-link"
        >JUMPSTAR</nuxt-link
      >
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/en/project/goEase" class="custom-link">GOEASE</nuxt-link>
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
            <SplitFlapText :texts="['           [PROBLEM]           ']" />
            <div class="paragraph">
              In the rush of everyday life, there's often not much time left for
              caring for indoor and garden plants. Many people, especially those
              with stressful jobs or time-consuming commitments, often forget to
              water, fertilize, or position their plants correctly. <br />
              <br />This often results in plants withering, being over- or
              under-watered, or generally not receiving the care they need.<br />
              According to the latest stats, 37% of amateur gardeners lose one
              or two houseplants every year. Millennials in particular seem to
              have more problems with this, with an average of around
              <br />seven houseplants dying each year.
            </div>
          </div>
          <div class="image large">
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
              At the start of the project, research was conducted to explore
              existing solutions on the market. The aim was to assess which
              functions were already well-implemented and where there was room
              for improvement. This analysis provided insights into areas that
              could be enhanced, allowing the solution to focus on those
              specific aspects. <br />A detailed persona was then created to
              clearly define the needs of the target group. From this, it became
              evident that the goal was to develop a solution enabling minimal
              time commitment for plant care, appealing to both hobby gardeners
              and experienced plant enthusiasts. Simultaneously, a user journey
              was designed to cover the entire app experience, from installation
              to daily use. By mapping out detailed user paths, a smooth and
              intuitive user experience was ensured. Combined with user testing,
              this resulted in a well-thought-out and user-friendly setup
              process that helped identify potential issues early and enhanced
              overall usability.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image mela">
            <img src="public\img\pm\software.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <div class="paragraph">
              <h3>Software Process</h3>

              The software process started with creating low-fi,<br />
              mid-fi, and high-fi wireframes to plan the structure and user<br />
              experience of the application. <br />It was an iterative process,
              with a strong focus on refining the user experience at every
              stage. Each version was improved based on user feedback.
              <br /><br />The high-fi Figma click dummy was used to test the
              user flow and ensure everything felt smooth and intuitive. After
              receiving positive feedback and being satisfied with the design,
              the web app was implemented using Svelte. The focus was on
              carefully translating the Figma prototype’s features and ensuring
              that the user experience remained smooth and fast.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image mela">
            <img src="public\img\pm\hardware.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <div class="paragraph">
              <h3>Hardware Process</h3>
              The process started with an analysis of the necessary hardware.<br />
              The functions of the smart tool were identified, leading to the
              selection of components such as an ESP32 microcontroller and
              various sensors for tracking environmental data.<br />
              The components were chosen and assembled to meet the system's
              requirements. A prototype was then built using rapid prototyping
              to quickly visualize the design. Fusion360 was used to 3D print a
              housing for the selected components, allowing for quick
              integration and early problem identification. After the housing
              was printed, all hardware components were connected and installed,
              ensuring that the hardware was both functional and practical for
              final use.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [SOLUTION]           ']" />
            <div class="paragraph">
              Through a structured, methodical approach, a product was developed
              that effectively addresses the needs of the target audience and
              simplifies <br />plant care significantly.<br />
              PlantMonit merges advanced technology with a design focused on
              user-friendliness to guarantee optimal plant maintenance.<br />
              The product features automatic plant monitoring, where sensors
              continuously track crucial data such as soil moisture, humidity,
              temperature, and light. With advanced image analysis, powered by
              the OpenAI Vision API, plant images are thoroughly examined,
              allowing for early detection of potential problems. The
              user-friendly app organizes all collected data clearly and offers
              personalized care tips. <br />Seamless integration ensures smooth
              communication between hardware components through Websockets,
              ensuring reliable data transmission and an easy setup process. The
              backend is supported by a scalable database built with MongoDB and
              Mongoose, enabling efficient data storage and management.
              Together, these components create an innovative solution that
              transforms plant care and supports both novice and seasoned
              gardeners in maintaining healthy plants.
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
            '                       [PROJECT] [VIDEO]                       ',
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
            '        TEAMWORK        ',
          ]"
        />
      </div>
    </div>

    <div v-else-if="isTablet" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
              :texts="['                  [PROBLEM]                  ']"
            />
            <div class="paragraph">
              In the rush of everyday life, there's often not much time left for
              caring for indoor and garden plants. Many people, especially those
              with stressful jobs or time-consuming commitments, often forget to
              water, fertilize, or position their plants correctly. <br />
              <br />This often results in plants withering, being over- or
              under-watered, or generally not receiving the care they need.
              According to the latest stats, 37% of amateur gardeners lose one
              or two houseplants every year. Millennials in particular seem to
              have more problems with this, with an average of around seven
              houseplants dying each year.
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
              At the start of the project, research was conducted to explore
              existing solutions on the market. The aim was to assess which
              functions were already well-implemented and where there was room
              for improvement.<br />
              This analysis provided insights into areas that could be enhanced,
              allowing the solution to focus on those specific aspects. A
              detailed persona was then created to clearly define the needs of
              the target group. From this, it became evident that the goal was
              to develop a solution enabling minimal time commitment for plant
              care, appealing to both hobby gardeners and experienced plant
              enthusiasts. <br />Simultaneously, a user journey was designed to
              cover the entire app experience, from installation to daily use.
              By mapping out detailed user paths, a smooth and intuitive user
              experience was ensured. Combined with user testing, this resulted
              in a well-thought-out and user-friendly setup process that helped
              identify potential issues <br />early and enhanced overall
              usability.
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
              The software process started with creating low-fi,<br />
              mid-fi, and high-fi wireframes to plan the structure and user
              experience of the application. <br />It was an iterative process,
              with a strong focus on refining the user experience at every
              stage. Each version was improved based on user feedback.
              <br /><br />The high-fi Figma click dummy was used to test the
              user flow and ensure everything felt smooth and intuitive. After
              receiving positive feedback and being satisfied with the design,
              the web app was implemented using Svelte. The focus was on
              carefully translating the Figma prototype’s features and ensuring
              that the user experience remained smooth and fast.
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
              <h3>Hardware Process</h3>
              The process started with an analysis of the necessary hardware.<br />
              The functions of the smart tool were identified, leading to the
              selection of components such as an ESP32 microcontroller and
              various sensors for tracking environmental data. <br /><br />The
              components were chosen and assembled to meet the system's
              requirements.<br />
              A prototype was then built using rapid prototyping to quickly
              visualize the design. <br />Fusion360 was used to 3D print a
              housing for the selected components, allowing for quick
              integration and early problem identification. After the housing
              was printed, all hardware components were connected and installed,
              ensuring that the hardware was both <br />functional and practical
              for final use.
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
              :texts="['                  [SOLUTION]                 ']"
            />
            <div class="paragraph">
              Through a structured, methodical approach, a product was developed
              that effectively addresses the needs of the target audience and
              simplifies plant care significantly.<br />
              PlantMonit merges advanced technology with a design focused on
              user-friendliness to guarantee optimal plant maintenance. The
              product features automatic plant monitoring, where sensors
              continuously track crucial data such as soil moisture, humidity,
              temperature, and light. With advanced image analysis, powered by
              the OpenAI Vision API, plant images are thoroughly examined,
              allowing for early detection of potential problems. The
              user-friendly app organizes all collected data clearly and offers
              personalized care tips. Seamless integration ensures smooth
              communication between hardware components through Websockets,
              ensuring reliable data transmission and an easy setup process.<br />
              The backend is supported by a scalable database built with MongoDB
              and Mongoose, enabling efficient data storage and management.
              Together, these components create an innovative solution that
              transforms plant care and supports both novice and seasoned
              gardeners in maintaining healthy plants.
            </div>
          </div>
          <div class="image large">
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
              In the rush of everyday life, there's often not much time left for
              caring for indoor and garden plants. <br />Many people, especially
              those with stressful jobs or time-consuming commitments, often
              forget to water, fertilize, or position their plants correctly.
              <br />
              <br />This often results in plants withering, being over- or
              under-watered, or generally not receiving the<br />
              care they need. According to the latest stats, 37% of amateur
              gardeners lose one or two houseplants <br />every year.
              Millennials in particular seem to have more problems with this,
              with an average of around seven houseplants dying each year.
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
            <SplitFlapText :texts="['         [PROCESS]         ']" />
            <div class="paragraph">
              At the start of the project, research was conducted to explore
              existing solutions on the market. <br />The aim was to assess
              which functions were <br />already well-implemented and where
              there was <br />room for improvement.<br />
              This analysis provided insights into areas that could be enhanced,
              allowing the solution to focus on those specific aspects.<br /><br />
              A detailed persona was then created to clearly define the needs of
              the target group. From this, it became evident that the goal was
              to develop a solution enabling minimal time commitment for plant
              care, appealing to both hobby gardeners and experienced plant
              enthusiasts. Simultaneously, a user journey was designed to cover
              the entire app experience, from installation to daily use. By
              mapping out detailed user paths, a smooth and intuitive user
              experience was ensured. Combined with user testing, this resulted
              in a well-thought-out and user-friendly setup process that helped
              identify potential issues early and enhanced overall usability.
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

              The software process started with creating low-fi,<br />
              mid-fi, and high-fi wireframes to plan the structure and user
              experience of the application. <br />It was an iterative process,
              with a strong focus on refining the user experience at every
              stage.<br />
              Each version was improved based on user feedback. The high-fi
              Figma click dummy was used to test the user flow and ensure
              everything felt smooth and intuitive. <br /><br />After receiving
              positive feedback and being satisfied with the design, the web app
              was implemented using Svelte. The focus was on carefully
              translating the<br />
              Figma prototype’s features and ensuring that the user experience
              remained smooth and fast.
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
              <h3>Hardware Process</h3>
              The process started with an analysis of the <br />necessary
              hardware. <br />The functions of the smart tool were identified,
              leading to the selection of components such as an ESP32
              microcontroller and various sensors for tracking environmental
              data. The components were chosen and assembled to meet the
              system's requirements.<br />
              A prototype was then built using rapid prototyping to quickly
              visualize the design.<br /><br />
              Fusion360 was used to 3D print a housing for the selected
              components, allowing for quick integration and early problem
              identification. After the housing was printed, all hardware
              components were connected and installed, ensuring that the
              hardware was both functional and practical for final use.
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
            <SplitFlapText :texts="['         [SOLUTION]        ']" />
            <div class="paragraph">
              Through a structured, methodical approach, a product was developed
              that effectively addresses the needs <br />of the target audience
              and simplifies plant care significantly. PlantMonit merges
              advanced technology with a design focused on user-friendliness to
              guarantee optimal plant maintenance.<br /><br />
              The product features automatic plant monitoring, where sensors
              continuously track crucial data such as soil moisture, humidity,
              temperature, and light. <br />With advanced image analysis,
              powered by the OpenAI Vision API, plant images are thoroughly
              examined, allowing for early detection of potential problems.<br />
              The user-friendly app organizes all collected data clearly and
              offers personalized care tips. Seamless integration ensures smooth
              communication between hardware components through Websockets,
              ensuring reliable data transmission and an easy setup process.
              <br /><br />The backend is supported by a scalable database built
              with MongoDB and Mongoose, enabling efficient data storage and
              management. Together, these components create an innovative
              solution that transforms plant care and supports both novice and
              seasoned gardeners in maintaining healthy plants.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\pm\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText :texts="['      [PROJECT] [VIDEO]       ']" />
        <div class="project-video">
          <iframe
            src="https://www.youtube.com/embed/bKC-N5-m5u0?rel=0&modestbranding=1&showinfo=0"
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
            '      THREE MONTHS     ',
            '    SECOND SEMESTER    ',
            '      GRADE: 1.0       ',
            '       TEAMWORK        ',
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

<style lang="scss" src="assets/project.scss" scoped></style>
