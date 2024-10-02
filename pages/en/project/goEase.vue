<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>
    <div id="projectLinkNext">
      <nuxt-link to="/en/project/projects" class="custom-link"
        >PLANTMONIT</nuxt-link
      >
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/en/project/trickyTowers" class="custom-link"
        >TRICKYTOWERS</nuxt-link
      >
    </div>
    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          '          [GOEASE]          ',
          '       SMART SYSTEM       ',
          '  REACT NATIVE      GPS   ',
          '     ESP32   ANDROIDSDK   ',
          ' BLE     OPENMAPBOX       ',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img
          style="border: 1px solid black; border-radius: 10px"
          src="public\img\ge\ge.png"
          alt="plantmonit"
        />
      </div>
    </div>

    <DetailsScroll />

    <div class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [PROBLEM]          ']" />
            <div class="paragraph">
              Local public transportation in Germany is facing some big
              challenges. There are lots of different bus companies and
              associations, each with their own fare systems. Often, there isn't
              a good app solution or none at all. Passengers, especially those
              who only use public transport now and then, are faced with a
              confusing array of systems. They often don't know which company
              operates on their route, let alone how to buy a ticket or choose
              the right fare. On top of that, the ticket machines are often
              complicated, unhygienic, and broken, making the process even more
              difficult. It would be great to have a simple solution for bus
              travel, especially on days when the car isn't available, like on a
              rainy day or when unexpected events occur. Instead, the different
              fares and the lack of a central solution make it difficult for
              many passengers. The idea for GoEase came from thinking about how
              we could make local public transport more accessible and
              convenient. The idea behind GoEase is a beacon system that can be
              easily added to buses throughout Germany. Combined with a mobile
              app that only needs to be set up once and then runs in the
              background, the goal is to create a fully automated and convenient
              way to travel by bus—without having to think about fares or buy a
              ticket from complicated, unhygienic machines.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\Frame 39.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image large">
            <img src="public\img\ge\Frame 5.svg" alt="plantmonit " />
          </div>
          <div class="text">
            <SplitFlapText :texts="['          [PROCESS]          ']" />
            <div class="paragraph">
              We kicked things off with an intensive brainstorming session,
              where we chatted through all the ideas and came up with some
              initial concepts. Our initial vision was pretty ambitious. We
              wanted to create a box that integrated all kinds of functions. We
              wanted to use GPS to record the location, BLE to detect which cell
              phones were currently boarding, and a light barrier to check the
              number of people boarding. We also planned to create three
              different user interfaces—one for the end user and two for the
              public transport companies that send fare evasion figures and help
              set up the system. The system should be able to be used on all
              public transport, not just buses. That means trains, buses, planes
              and ships too. This first idea included lots of different features
              and was meant to be a complete solution for the whole
              transportation industry. As the project went on, though, we
              realized that trying to implement all these features would not
              only take longer than we thought, but it would also get in the way
              of the core idea. All these planned features made the project look
              more like a bunch of random functions than a focused idea. So we
              decided to go back to the drawing board and focus on the
              essentials. We trimmed the features down to just the essentials so
              we could zero in on the core idea: making bus travel easier and
              more convenient. The new plan was to have a box that works with
              just one app and is only for buses at first. This made things
              simpler and let us focus on one API, for example, without having
              to think about other interfaces. This focus helped us make the
              core idea work well and get it off the ground, and create a solid
              MVP (Minimum Viable Product) that we could build on later.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
            <img src="public\img\ge\softwareProcess.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <div class="paragraph">
              <h3>Software Process</h3>
              Next, we started working on the user interface and app features.
              First, we put together some wireframes and design dummies in Figma
              to get a feel for the user experience and make sure the app would
              be simple to use. The wireframes were really important for
              planning the user experience in advance and spotting any potential
              design issues early on. During this phase, we made sure the user
              experience was simple and straightforward. We used these
              wireframes to build the mobile app with React Native, which lets
              us use it on different platforms. We chose React Native because it
              lets the app talk to the beacons via BLE. We made sure to get the
              core functions up and running smoothly and efficiently, including
              things like automatic beacon detection, trip data collection, and
              background processes. The software development process was very
              iterative. Once we had the first functional prototypes up and
              running, we did a few rounds of user testing to get feedback and
              make sure we were constantly improving the app and the features it
              had based on what the testers had to say. It was really important
              for us to get direct feedback on how easy the app was to use and
              what we could do to make it even better. One of the most important
              things we wanted to get right with the app was the setup process.
              We wanted it to be quick and easy for the user. Once you've set up
              the app, it's basically ready to go. It runs in the background and
              takes care of all the steps needed to record bus journeys and
              organize billing. You can also monitor your journey and see which
              costs have already been debited. This way, you're always in the
              know and in control.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image large">
            <img src="public\img\ge\goease 4.png" alt="plantmonit" />
          </div>
          <div class="text">
            <div class="paragraph">
              <h3>Hardware Process</h3>
              The technical implementation involved several steps,
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
              ensured that all components worked efficiently together, providing
              reliable data transmission. <br /><br />
              Backend Development: By using MongoDB and Mongoose, we built a
              robust and scalable database structure that facilitated efficient
              storage and management of collected data.
              <br />Our API development focused on fast and reliable data
              transfers to ensure a smooth user experience. <br />Security
              measures like .env and user logins protected sensitive data.
              <br /><br />

              Frontend Development: We developed a user-friendly interface with
              Svelte, characterized by intuitive operation and appealing design.
              This ensured that users of all experience levels could easily use
              the app. Close alignment with prototypes and regular user feedback
              helped us achieve a consistent and attractive design that met our
              target audience's high standards.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [SOULUTION]          ']" />
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
            <img src="public\img\ge\goease 2.png" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText :texts="['          [PROJECT] [VIDEO]          ']" />
        <div class="project-video">
          <iframe
            src="https://www.youtube.com/embed/_YpyL8_qQfw?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="projectDetailsFlap">
          <SplitFlapText
            :texts="[
              '        [KEYDATA]         ',
              '        TWO MONTHS          ',
              '    THIRD SEMESTER     ',
              '      GRADE: 1.3        ',
            ]"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style src="assets/project.css" scoped></style>
