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
        <img src="public\img\ge\thumbnail.svg" alt="plantmonit" />
      </div>
    </div>

    <DetailsScroll />

    <div v-if="isDesktop" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['           [PROBLEM]          ']" />
            <div class="paragraph">
              Local public transportation in Germany is facing some significant
              challenges. There are many different bus companies and
              associations, each with their own fare systems. Often, there isn't
              a good app solution, or none at all. Passengers, especially
              occasional users of public transport, are confronted with a
              confusing mix of systems.<br /><br />
              They often don't know which company operates their route or how to
              buy a ticket, let alone choose the correct fare. On top of that,
              ticket machines are frequently complicated, unhygienic, or broken,
              making the process even more difficult. It would be ideal to have
              a simple solution for bus travel, especially on days when the car
              isn't available, like during bad weather or unexpected situations.
              However, the different fare systems <br />and lack of a central
              solution create obstacles for many passengers.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\problem.svg" alt="too many bus lines" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image large">
            <img
              src="public\img\ge\process.svg"
              style="object-position: center; object-fit: cover; height: 80vh"
              alt="concept change over project time "
            />
          </div>
          <div class="text">
            <SplitFlapText :texts="['          [PROCESS]          ']" />
            <div class="paragraph">
              The project began with an intensive brainstorming session, where
              various ideas were discussed, and some initial concepts were
              developed. <br />The original vision was quite ambitious, aiming
              to create a box that integrated multiple functions. The plan
              included using GPS to track locations, BLE to detect which cell
              phones were boarding, and a light barrier to count the number of
              passengers. Additionally, three different user interfaces were
              planned—one for the end user and two for the public transport
              companies to report fare evasion and help set up the system. The
              system was intended for use across all types of public
              transportation, including trains, buses, planes, and ships. This
              initial concept featured a wide range of functionalities and aimed
              to be a complete solution for the entire transportation industry.
              <br /><br />However, as the project progressed, it became clear
              that implementing all these features would take more time than
              anticipated and would detract from the core idea. The project
              began to feel more like a collection of unrelated functions rather
              than a focused concept. To address this, the decision was made to
              simplify and concentrate on the essentials.<br />
              The features were reduced to focus on the primary goal: making bus
              travel easier and more convenient. The new approach centered on a
              box that worked with just one app and was initially limited to
              buses. <br />This shift simplified the project, allowing focus on
              one API without the need to consider multiple interfaces. This
              streamlined focus helped bring the core idea to life, resulting in
              a solid MVP (Minimum Viable Product) that could be further
              developed in the future.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image large">
            <img
              style="object-fit: contain; height: 70vh"
              src="public\img\ge\softwareProcess.svg"
              alt="figma mobile screens in different fidelitys"
            />
          </div>
          <div class="text">
            <div class="paragraph">
              <h3>Software Process</h3>
              Next, work began on the user interface and app features.<br />
              Wireframes and design dummies were created in Figma to plan<br />
              the user experience and ensure the app would be simple to use.
              <br />These wireframes were essential for laying out the user
              experience in advance and identifying any potential design issues
              early on.<br />
              During this phase, the focus was on making the user experience as
              simple and straightforward as possible. The wireframes were then
              used to develop the mobile app with React Native, allowing it to
              be used across different platforms. React Native was chosen
              because it enables the app to communicate with the beacons via
              BLE. The priority was to get the core functions running smoothly
              and efficiently, including automatic beacon detection, trip data
              collection, and background processes. <br />The software
              development process was highly iterative.<br />
              Once the first functional prototypes were ready, several rounds of
              user testing were conducted to gather feedback and continuously
              improve the app and its features based on the testers' input. It
              was crucial to receive direct feedback on the ease of use and to
              identify areas for further improvement. A key focus was ensuring
              the setup process was quick and easy. Once the app is set up, it
              runs in the background, handling all the steps needed to record
              bus journeys and manage billing. <br />Users can also monitor
              their journey and view which costs have already been debited,
              keeping them informed and in control at all times.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
            <img
              style="object-fit: contain"
              src="public\img\ge\hardwareProcess.svg"
              alt="GoEase hardware with bus modell"
            />
          </div>
          <div class="text">
            <div class="paragraph">
              <h3>Hardware Process</h3>
              The hardware process focused on selecting the right technical
              components to make the beacon technology work effectively.
              <br />It was essential that the beacons were energy-efficient,
              cost-effective, and easy to retrofit in buses, ensuring a smooth
              rollout across the entire fleet. After quickly assessing the
              hardware needs, the decision was made to use an ESP32 LilyGO,
              which has both BLE and GPS capabilities, meeting all functional
              requirements. To keep costs down and simplify the retrofitting
              process, a plastic housing was designed and 3D printed.<br />
              A strap with a buckle was also added to the housing, allowing it
              to be mounted on various poles.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [SOLUTION]          ']" />
            <div class="paragraph">
              GoEase is an innovative system designed to transform bus
              travel.<br />
              It combines an easy-to-install beacon system with a user-friendly
              mobile app to create a fully automated and convenient way <br />to
              use public transport.<br /><br />
              Once the app is set up, it handles everything in the background,
              making bus travel as easy and carefree as possible. The beacon,
              built around an ESP32 LilyGO, is designed to be integrated into
              existing buses, using BLE to communicate with the app. This
              hardware is affordable, simple to install, and can be mounted in
              various ways on the bus for ease of use. With GoEase, tickets are
              purchased automatically, without the need to tap in. The app
              detects when a passenger boards, tracks the distance traveled, and
              calculates the fare—all without requiring any action.
            </div>
          </div>
          <div class="image mela">
            <img
              src="public\img\ge\solution.svg"
              alt="final app mockup"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText
          :texts="[
            '                         [PROJECT] [VIDEO]                        ',
          ]"
        />
        <div class="project-video">
          <iframe
            src="https://www.youtube.com/embed/_YpyL8_qQfw?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
            allowfullscreen
          ></iframe>
        </div>
        <div class="projectDetailsFlap">
          <SplitFlapText
            :texts="[
              '        [KEYDATA]         ',
              '        TWO MONTHS      ',
              '     THIRD SEMESTER     ',
              '       GRADE: 1.3       ',
              '        TEAMWORK        ',
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
              :texts="['                  [PROBLEM]                  ']"
            />
            <div class="paragraph">
              Local public transportation in Germany is facing some significant
              challenges. <br />There are many different bus companies and
              associations, each with their own fare systems. Often, there isn't
              a good app solution, or none at all. <br />Passengers, especially
              occasional users of public transport, are confronted with a
              confusing mix of systems. They often don't know which company
              operates their route or how to buy a ticket, let alone choose the
              correct fare. On top of that, ticket machines are frequently
              complicated, unhygienic, or broken, making the process even more
              difficult. It would be ideal to have a simple solution for bus
              travel, especially on days when the car isn't available, like
              during bad weather or unexpected situations. However, the
              different fare systems and lack of a central solution create
              obstacles for many passengers.
            </div>
          </div>
          <div class="image mela">
            <img src="public\img\ge\problem.svg" alt="plantmonit" />
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
              The project began with an intensive brainstorming session, where
              various ideas were discussed, and some initial concepts were
              developed. The original vision was quite ambitious, aiming to
              create a box that integrated multiple functions. The plan included
              using GPS to track locations, BLE to detect which cell phones were
              boarding, and a light barrier to count the number of passengers.
              Additionally, three different user interfaces were planned—one for
              the end user and two for the public transport companies to report
              fare evasion and help set up the system. <br />The system was
              intended for use across all types of public transportation,
              including trains, buses, planes, and ships. This initial concept
              featured a wide range of functionalities and aimed to be a
              complete solution for the entire transportation industry.
              <br /><br />However, as the project progressed, it became clear
              that implementing all these features would take more time than
              anticipated and would detract from the core idea. The project
              began to feel more like a collection of unrelated functions rather
              than a focused concept. To address this, the decision was made to
              simplify and concentrate on the essentials. The features were
              reduced to focus on the primary goal: making bus travel easier and
              more convenient. The new approach centered on a box that worked
              with just one app and was initially limited to buses. <br />This
              shift simplified the project, allowing focus on one API without
              the need to consider multiple interfaces. This streamlined focus
              helped bring the core idea to life, resulting in a solid MVP
              (Minimum Viable Product) that could be further developed in the
              future.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\process.svg" alt="plantmonit " />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Software Process</h3>
              Next, work began on the user interface and app features.
              Wireframes and design dummies were created in Figma to plan the
              user experience and ensure the app would be simple to use.
              <br />These wireframes were essential for laying out the user
              experience in advance and identifying any potential design issues
              early on. During this phase, the focus was on making the user
              experience as simple and straightforward as possible.<br /><br />
              The wireframes were then used to develop the mobile app with React
              Native, allowing it to be used across different platforms. React
              Native was chosen because it enables the app to communicate with
              the beacons via BLE. The priority was to get the core functions
              running smoothly and efficiently, including automatic beacon
              detection, trip data collection, and background processes. The
              software development process was highly iterative.
              <br /><br />Once the first functional prototypes were ready,
              several rounds of user testing were conducted to gather feedback
              and continuously improve the app and its features based on the
              testers' input. It was crucial to receive direct feedback on the
              ease of use and to identify areas for further improvement. A key
              focus was ensuring the setup process was quick and easy. <br />As
              the app is set up, it runs in the background, handling all the
              steps needed to record bus journeys and manage billing. Users can
              also monitor their journey and view which costs have already been
              debited, keeping them informed and in control at all times.
            </div>
          </div>
          <div class="image medium">
            <img
              src="public\img\ge\softwareProcess.svg"
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
              The hardware process focused on selecting the right technical
              components to make the beacon technology work effectively. It was
              essential that the beacons were energy-efficient, cost-effective,
              and easy to retrofit in buses, ensuring a smooth rollout across
              the entire fleet. <br />After quickly assessing the hardware
              needs, the decision was made to use an ESP32 LilyGO, which has
              both BLE and GPS capabilities, meeting all functional
              requirements. <br />To keep costs down and simplify the
              retrofitting process, a plastic housing was designed and 3D
              printed. A strap with a buckle was also added to the housing,
              allowing it to be mounted on various poles.
            </div>
          </div>
          <div class="image smedi">
            <img
              src="public\img\ge\hardwareProcess.svg"
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
              :texts="['                 [SOLUTION]                  ']"
            />
            <div class="paragraph">
              GoEase is an innovative system designed to transform bus travel.
              It combines an easy-to-install beacon system with a user-friendly
              mobile app to create a fully automated and convenient way to use
              public transport. Once the app is set up, it handles everything in
              the background, making bus travel as easy and carefree as
              possible. The beacon, built around an ESP32 LilyGO, is designed to
              be integrated into existing buses, using BLE to communicate with
              the app. <br />This hardware is affordable, simple to install, and
              can be mounted in various ways on the bus for ease of use. With
              GoEase, tickets are purchased automatically, without the need to
              tap in. <br />The app detects when a passenger boards, tracks the
              distance traveled, and calculates the fare, all without requiring
              any action.
            </div>
          </div>
          <div class="image mela">
            <img
              src="public\img\ge\solution.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText
          :texts="['               [PROJECT] [VIDEO]                ']"
        />
        <div class="project-video">
          <iframe
            src="https://www.youtube.com/embed/_YpyL8_qQfw?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
            allowfullscreen
          ></iframe>
        </div>
        <div class="projectDetailsFlap">
          <SplitFlapText
            :texts="[
              '        [KEYDATA]         ',
              '        TWO MONTHS      ',
              '     THIRD SEMESTER     ',
              '       GRADE: 1.3       ',
              '        TEAMWORK        ',
            ]"
          />
        </div>
      </div>
    </div>

    <div v-else-if="isMobile" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['           [PROBLEM]          ']" />
            <div class="paragraph">
              The idea for GoEase emerged from thinking about how to make local
              public transport more accessible and convenient.<br />
              GoEase is built around a beacon system that can be easily
              integrated into buses across Germany. Together with a<br />
              mobile app that only needs to be set up once and runs in <br />the
              background, the aim is to offer a fully automated and convenient
              way to travel by bus—without worrying about <br />fares or using
              complicated, unhygienic ticket machines.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [PROCESS]           ']" />
            <div class="paragraph">
              The project began with an intensive brainstorming session, where
              various ideas were discussed, and some initial concepts were
              developed. The original vision was quite ambitious, aiming to
              create a box that integrated multiple functions.<br />
              The plan included using GPS to track locations,<br />
              BLE to detect which cell phones were boarding, and a light barrier
              to count the number of passengers. Additionally, three different
              user interfaces were planned—one for the end user and two for the
              public transport companies to report fare evasion and help set up
              the system. The system was intended for use across all types of
              public transportation, including trains, buses, planes, and ships.
              This initial concept featured a wide range of functionalities and
              aimed to be a complete solution for the entire transportation
              industry.<br /><br />
              However, as the project progressed, it became clear that
              implementing all these features would take more time than
              anticipated and would detract from the core idea.<br />
              The project began to feel more like a collection of unrelated
              functions rather than a focused concept. To address this, the
              decision was made to simplify and concentrate on the essentials.
              The features were reduced to focus on the primary goal: making bus
              travel easier and more convenient.<br />
              The new approach centered on a box that worked with just one app
              and was initially limited to buses. This shift simplified the
              project, allowing focus on one API without the need to consider
              multiple interfaces. This streamlined focus helped bring the core
              idea to life, resulting in a solid MVP (Minimum Viable Product)
              that could be further developed in the future.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\process.svg" alt="plantmonit " />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Software Process</h3>
              Next, work began on the user interface and app features.
              Wireframes and design dummies were created in Figma to plan the
              user experience and ensure the app would be simple to use. These
              wireframes were essential for laying out the user experience in
              advance and identifying any potential design issues early on.
              During this phase, the focus was on making the user experience as
              simple and straightforward as possible. <br /><br />The wireframes
              were then used to develop the mobile app with React Native,
              allowing it to be used across different platforms. React Native
              was chosen because it enables the app to communicate with the
              beacons via BLE. The priority was to get the core functions
              running smoothly and efficiently, <br />including automatic beacon
              detection, trip data collection, and background processes. The
              software development process was highly iterative. Once the first
              functional prototypes were ready, several rounds of user testing
              were conducted to gather feedback and continuously improve the app
              and its features based on the testers' input. It was crucial to
              receive direct feedback on the ease of use and to identify areas
              for further improvement. A key focus was ensuring the setup
              process was quick and easy.<br /><br />
              Once the app is set up, it runs in the background, handling all
              the steps needed to record bus journeys and manage billing. Users
              can also monitor their journey and view which costs have already
              been debited, keeping them informed and in control at all times.
            </div>
          </div>
          <div class="image large">
            <img src="public\img\ge\softwareProcess.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <div class="paragraph">
              <h3>Hardware Process</h3>
              The hardware process focused on selecting the right technical
              components to make the beacon technology work effectively.
              <br />It was essential that the beacons were energy-efficient,
              cost-effective, and easy to retrofit in buses, ensuring a smooth
              rollout across the entire fleet. After quickly assessing the
              hardware needs, the decision was made to use an ESP32 LilyGO,
              which has both BLE and GPS capabilities, meeting all functional
              requirements. To keep costs down and simplify the retrofitting
              process, a plastic housing was designed and 3D printed. A strap
              with a buckle was also added to the housing, allowing it to be
              mounted on various poles.
            </div>
          </div>
          <div class="image smedi">
            <img
              src="public\img\ge\hardwareProcess.svg"
              alt="plantmonit"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [SOLUTION]          ']" />
            <div class="paragraph">
              During the journey, users can check their progress and see their
              costs, offering maximum convenience and transparency. GoEase is
              all about simplicity. It eliminates unnecessary steps that often
              make public transport complicated and less appealing. There are no
              complex fare systems or unreliable ticket machines—just a
              straightforward, intuitive solution that makes public transport
              more accessible and lowers the barriers to use. GoEase is
              especially helpful for occasional public transport users and
              offers a future-proof alternative to existing systems.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\ge\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>
      <div class="project-section">
        <SplitFlapText :texts="['       [PROJECT] [VIDEO]        ']" />
        <div class="project-video">
          <iframe
            src="https://www.youtube.com/embed/_YpyL8_qQfw?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
            allowfullscreen
          ></iframe>
        </div>
        <div class="projectDetailsFlap">
          <SplitFlapText
            :texts="[
              '        [KEYDATA]         ',
              '        TWO MONTHS      ',
              '     THIRD SEMESTER     ',
              '      GRADE: 1.3        ',
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

<style src="assets/project.css" scoped></style>
