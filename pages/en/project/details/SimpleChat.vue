<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/en/project/simpleChat" class="custom-link"
          >PROJECTS</nuxt-link
        >
      </div>

      <div class="project-details">
        <div class="project-section"></div>
        <div class="project-header">
          <!-- <h1 class="project-title"><span>UZHJHASGBVSAIJUDAUD</span>SIMPLECHAT<span>HGBBVSAIHJTJGEUMJAUD</span></h1> -->

          <SplitFlapText
            :texts="[
              '       [SIMPLECHAT]      ',
              '     THIRD  SEMSTER    ',
              '       TWO MONTHS      ',
              '          1.0          ',
            ]"
          />
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <h2>
                <span>GBUDAHAJKSBVFGZU</span>PROBLEM<span
                  >GBUDAHAJKSBVFGKH</span
                >
              </h2>
              <p>
                The university's current communication platform, Slack, is to be
                changed. Therefore, the task is to create an own platform that
                enables or even improves the communication between the
                university, students and alumni. The platform should be easy to use and offer a wide range of functions. The aim is to create a platform that is used by all students and alumni of the university  
              </p>
            </div>
            <div class="image small">
              <img src="public\img\sc\sc (1).svg" alt="plantmonit" />
            </div>
          </div>
        </div>

        <div class="project-section-reverse">
          <div class="project-content">
            <div class="image medium">
              <img src="public\img\pm\process.svg" alt="plantmonit" />
            </div>
            <div class="text">
              <h2>
                <span>GBUDAHAJKSBVFGZU</span>PROCESS<span
                  >GBUDAHAJKSBVFGKH</span
                >
              </h2>
              <p>
                First to get an Idea of what the users want, we conducted a
                survey of diffrent already existing platforms. After that we
                used diffrent methods of user research and design thinking like
                ..., ... and ... to create a low fidelity prototype. These
                methods brought several learnings which we used to create a low
                fidelity protoype and to do first test with some potential
                users. This feedback helped us to improve and overthink some of
                our ideas. For example we had to change our structure of
                navigation. The most dificult thing for us was it to create an
                interface which is able to combine all of the needed features
                and to keep it simple and user friendly at the same time.
              </p>
            </div>
          </div>
        </div>

        <div class="project-section-reverse">
          <div class="project-content">
            <div class="image medium">
              <img src="public\img\sc\simplechat3.png" alt="plantmonit" />
            </div>
            <div class="text">
              <h3>Design Thinking</h3>
              <p><br /><br />Methoden darauf eingehen</p>
            </div>
          </div>
        </div>

        <div class="project-section-reverse">
          <div class="project-content">
            <div class="image large">
              <img src="public\img\sc\simplechat1.png" alt="plantmonit" />
            </div>
            <div class="text">
              <h3>Interface Process</h3>
              <p>
                <br /><br />The technical implementation involved several steps,
                incorporating both innovative hardware solutions and modern
                software development practices. <br /><br />

                Hardware Design and Integration: We utilized ESP32 Feather and
                ESP32 Cam for data collection and transmission.<br />
                These devices provided the flexibility and performance necessary
                for precise monitoring. <br /><br />

                The use of the OpenAI Vision API enabled advanced analysis of
                plant images, which was a novel solution at the time of
                development, making our app particularly innovative.<br /><br />

                Seamless communication between the ESP32 devices via Websockets
                ensured that all components worked efficiently together,
                providing reliable data transmission. <br /><br />
                Backend Development: By using MongoDB and Mongoose, we built a
                robust and scalable database structure that facilitated
                efficient storage and management of collected data.
                <br />Our API development focused on fast and reliable data
                transfers to ensure a smooth user experience. <br />Security
                measures like .env and user logins protected sensitive data.
                <br /><br />

                Frontend Development: We developed a user-friendly interface
                with Svelte, characterized by intuitive operation and appealing
                design. This ensured that users of all experience levels could
                easily use the app. Close alignment with prototypes and regular
                user feedback helped us achieve a consistent and attractive
                design that met our target audience's high standards.
              </p>
            </div>
          </div>
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <h2>SOLUTION<span>GBUDAHAJKSBVFGKHAPOIVBAKSJHKAK</span></h2>
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
              <img src="public\img\sc\simplechat2.png" alt="plantmonit" />
            </div>
          </div>
        </div>
        <div class="project-section">
          <h1 class="project-title">
            <span>UZHJHASGBVSAIJUDAUD</span>WATCH<span
              >HGBBVSAIHJTJGEUMJAUD</span
            ><br /><br />
          </h1>

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

<style src="assets/details.css" scoped></style>
