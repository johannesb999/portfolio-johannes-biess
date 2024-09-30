<template>
  <html>
    <main>
      <div class="background">
      <div id="projectLinkStart">
        <nuxt-link to="/" class="custom-link">START</nuxt-link>
      </div>
    </div>
      <div id="projectLinkNext">
        <nuxt-link to="/en/project/drawingLight" class="custom-link"
          >DRAWINGLIGHT</nuxt-link
        >
      </div>
      <div id="projectLinkBefore">
        <nuxt-link to="/en/project/simpleChat" class="custom-link"
          >SIMPLECHAT</nuxt-link
        >
      </div>

      <div class="projectFlap">
        <SplitFlapText
          :texts="[
            '        [PORTFOLIO]        ',
            '   GITHUB   WIREFRAMES   ',
            '   FUSION360  UI  UX     ',
            '      VUE   USERRESEARCH ',
            'DOCKER       DEPLOYMENT  ',
          ]"
        />
      </div>

      <div class="wrapper">
        <div class="picture">
          <img
            style="border: 1px solid black; border-radius: 10px"
            src="public\img\ws\wb2.png"
            alt="plantmonit"
          />
        </div>
        <!-- <div class="projectDescription">
          <p>
            The aim of the project was to revolutionize the care of plants.
            Thanks to new technological possibilities and corresponding sensors
            PlantMonit continuously captures images of the plant and important
            Parameters such as soil moisture, humidity, temperature and Lighting
            conditions. These are created by artificial intelligence "Buddy"
            analyzed and classified. Buddy enables a simple efficient and
            optimal care of the Green Friends....<br />
          </p>
        </div> -->
      </div>

      <!-- <NuxtLink to="/en/project/details/Portfolio" class="detailsLink"
        >DETAILS</NuxtLink
      > -->

      <div class="project-details"><div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
            :texts="[
              '          [PROBLEM]          ',
            ]"
          />  
              <p>
              How do i represent myself in a way that is both professional and
              engaging? How do i showcase my skills and experience in a
              visually appealing manner that is simple and established
               but in some way new and modern. How do i make sure that my
              portfolio is not only a reflection of my work but also a
              reflection of my personality and my values? These are the
              questions that i asked myself when i started working on my
              portfolio. I wanted to create a website that would not only
              present my work but also show who i am and what i
              stand for. I wanted to create a platform that would be both
              informative and engaging, a place where people could inform themeselves about
              my skills and experience but also get to know my personality and my design philosophy.
            </p>
          </div>
          <div class="image small">
            <img src="public\profilepicture.jpg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
            <img src="public\img\po\portfoliovariations.png" alt="plantmonit" />
          </div>
          <div class="text">
            <SplitFlapText
            :texts="[
              '          [PROCESS]          ',
            ]"
          />              <p>
              Our approach to developing PlantMonit followed a structured and
              iterative process, ensuring that we addressed both technical and
              user-friendly aspects of our product. <br /><br />
              <h3>Conceptional Process</h3>
              Persona Development We began by creating a detailed persona to
              identify and analyze the needs of our target audience. This
              helped us understand the specific requirements and challenges
              our users face, allowing us to tailor our solution accordingly.
              The persona served as a solid foundation for all subsequent
              design and development decisions. <br /><br />User Journey
              During the app development, we prioritized designing the user
              journey. This included creating detailed user paths to ensure a
              seamless and intuitive experience from app installation to daily
              use. The user journey helped us identify potential obstacles and
              continuously enhance the app's usability. <br /><br />           
            </p>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
            <img src="public\img\pm\mobile3.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <p>
              <h3>Software Process</h3>
           
              Prototyping and Feedback Our development process
              involved several prototyping phases: LoFi Prototypes: We created
              initial rough sketches to visualize the basic user experience
              and test fundamental functions. This phase focused on the
              structure and key interactions of the app. MidFi Prototypes: We
              developed more detailed designs, emphasizing component
              selection, text sizes, and layout decisions. This phase helped
              us refine the user interface and improve usability. HighFi
              Prototypes: We finalized the visual and functional aspects to
              ensure a realistic and user-friendly design. In this phase, we
              placed great emphasis on a consistent and appealing UI design.
              In each phase, we continuously gathered feedback from potential
              users and experts to make iterative improvements and optimize
              the product.

            </p>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image large">
            <img src="public\img\pm\process.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <p>
              <h3>Hardware Process</h3>
              
              The technical
              implementation involved several steps, incorporating both
              innovative hardware solutions and modern software development
              practices. <br /><br />

              Hardware Design and Integration: We utilized ESP32
              Feather and ESP32 Cam for data collection and transmission.<br />
              These devices provided the flexibility and performance necessary
              for precise monitoring. <br /><br />

              The use of the OpenAI Vision API enabled
              advanced analysis of plant images, which was a novel solution at
              the time of development, making our app particularly innovative.<br /><br />

              Seamless communication between the ESP32 devices via Websockets
              ensured that all components worked efficiently together,
              providing reliable data transmission. <br /><br />
              Backend Development: By using MongoDB and Mongoose, we built a robust and scalable
              database structure that facilitated efficient storage and
              management of collected data. 
              <br />Our API development focused on
              fast and reliable data transfers to ensure a smooth user
              experience. 
              <br />Security measures like .env and user logins
              protected sensitive data. <br /><br />

              Frontend Development: We developed a
              user-friendly interface with Svelte, characterized by intuitive
              operation and appealing design. This ensured that users of all
              experience levels could easily use the app. Close alignment with
              prototypes and regular user feedback helped us achieve a
              consistent and attractive design that met our target audience's
              high standards.
            </p>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText
            :texts="[
              '        [IMPLEMENTATION]         ',
            ]"
          />           
             <p>
              Through this structured, methodical approach, we developed a
              product that meets our target audience's needs and significantly
              simplifies plant care. PlantMonit combines cutting-edge
              technology with a user-friendly design to ensure optimal plant
              maintenance. <br />
              Key Features of PlantMonit: Automatic Plant Monitoring: Sensors
              for soil moisture, humidity, temperature, and light continuously
              monitor the vital data of plants. Advanced Image Analysis: The
              use of the OpenAI Vision API allows for detailed analysis of
              plant images, contributing to early problem detection. Intuitive
              User Interface: A user-friendly app that presents all collected
              data clearly and provides personalized care tips. Seamless
              Integration: Efficient communication between hardware components
              via Websockets ensures reliable data transmission and easy
              setup. Scalable Database: A robust backend structure with
              MongoDB and Mongoose ensures efficient data storage and
              management. By combining these elements, we created an
              innovative solution that revolutionizes plant care and helps
              both beginners and experienced gardeaners keep their plants
              healthy.
            </p>
          </div>
          <div class="image medium">
            <img src="public\img\pm\PlantInRoom.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText
        :texts="[
          '          [PROJECT] [VIDEO]          ',
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
      </div>
    </main>
  </html>
</template>

<script setup></script>

<style src="assets/project.css" scoped></style>
