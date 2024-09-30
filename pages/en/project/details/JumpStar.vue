<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/en/project/jumpStar" class="custom-link"
          >PROJECTS</nuxt-link
        >
      </div>
      
      
      <div class="project-details">
        <div class="project-section">
          
        </div>
        <div class="project-header">
          <!-- <h1 class="project-title"><span>UZHJHASGBVSAIJUDAUD</span>JUMPSTAR<span>HGBBVSAIHJTJGEUMJAUD</span></h1> -->

          <SplitFlapText
          :texts="[
            '       [JUMPSTAR]        ',
            '     THIRD  SEMSTER    ',
            '      TWHO MONTHS      ',
            '          1.0          ',
          ]"
        />
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <SplitFlapText
              :texts="[
                '           [IDEA]            ',
              ]"
            />                <p>
                In our hectic daily lives, there is often little time left for
                the care of indoor and garden plants. Many people, especially
                those with stressful jobs or other time-consuming commitments,
                regularly forget to water, fertilize, or properly place their
                plants. This often leads to plants wilting, being over- or
                under-watered, or otherwise not receiving the necessary care.
                Statistics show that 37% of hobby gardeners let one or two
                houseplants die each year. Millennials, in particular, seem to
                have more problems, with about seven houseplants dying on
                average. Most people do not have a green thumb and lack the
                necessary knowledge to properly care for plants. How should one
                react to discolored leaves? What should be done about aphids? Or
                is my plant even sick? Improper care and lack of knowledge about
                the specific needs of plants often lead to frustration, sadness,
                and disappointment.
              </p>
            </div>
            <div class="image medium">
              <img src="public\img\js\js.png" alt="plantmonit" />
            </div>
          </div>
        </div>

        <div class="project-section-reverse">
          <div class="project-content">
            <div class="image large">
              <img src="public\img\dl\drawingLight (9).jpg" alt="plantmonit" />
            </div>
            <div class="text">
              <SplitFlapText
              :texts="[
                '          [PROCESS]          ',
              ]"
            />                <p>
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

        

      

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <SplitFlapText
              :texts="[
                '      [IMPLEMENTATION]       ',
              ]"
            />                <p>
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
            <div class="image large">
              <img src="public\img\dl\drawingLight (11).jpg" alt="plantmonit" />
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
              src="https://www.youtube.com/embed/5N_OzRcDetc?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
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

<style src="assets/details.css" scoped></style>