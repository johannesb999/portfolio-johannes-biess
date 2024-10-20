<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <div id="projectLinkNext">
      <nuxt-link to="/en/project/portfolio" class="custom-link"
        >THIS WEBSITE
      </nuxt-link>
    </div>
    <div id="projectLinkBefore">
      <nuxt-link to="/en/project/jumpStar" class="custom-link"
        >JUMPSTAR
      </nuxt-link>
    </div>

    <div class="projectFlap">
      <SplitFlapText
        :texts="[
          '        [SIMPLECHAT]        ',
          '       CHAT PLATFORM      ',
          'WIREFRAMES   USERCENTERED ',
          '   DESIGN THINKING        ',
          '         USER INTERVIEWS  ',
          '  FIGMA PROTOTYPE         ',
        ]"
      />
    </div>

    <div class="wrapper">
      <div class="picture">
        <img src="public\img\sc\thumbnail.svg" alt="SimpleChat" />
      </div>
    </div>
    <DetailsScroll />

    <div v-if="isDesktop" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [PROBLEM]          ']" />
            <div class="paragraph">
              The university's current communication platform, Slack, is being
              replaced by a new dedicated platform that will make it easier for
              the university, students, and alumni to communicate with each
              other. The new platform needs to be simple to use and have lots of
              different features. The goal was to create a solution that would
              be used by all students and alumni to keep the connection to the
              university strong.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\sc\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="image medium">
            <img src="public\img\sc\process.svg" alt="plantmonit" />
          </div>
          <div class="text">
            <SplitFlapText :texts="['          [PROCESS]          ']" />
            <div class="paragraph">
              To get a feel for what users need, the process began by exploring
              other platforms. User research methods like user interviews and
              analyzing customer needs were used to gain a deep understanding of
              the target group. These insights were used to create a rough
              prototype, which was then gradually improved. As development
              continued, changes were made based on tests with potential users
              to enhance user-friendliness. The low- and mid-fidelity prototypes
              created in Figma served as a foundation for regular user tests. An
              iterative approach, incorporating user feedback, led to the
              development of a platform that is both functional and intuitive,
              simplifying the complexity of its many features.
            </div>
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['          [SOULUTION]          ']" />
            <div class="paragraph">
              The result is SimpleChat, an all-in-one platform that lets users
              chat and offers other features to connect the university and
              students in new ways. One of the key features of the platform is
              the ability for users to maintain their own profiles. These
              profiles include key info like a public timeline where
              internships, studying abroad, and other big moments are
              documented. There's also a tag system where you can store
              interests and relevant facts about the person. These features let
              other users search for people with specific experiences or
              interests. For example, they can search for someone who has stayed
              abroad in Costa Rica. The platform also includes the university
              itself and companies. The university can use the platform to
              manage a bulletin board, post grades and notifications directly on
              accounts, and combine several platforms. Courses and team channels
              are also part of SimpleChat, so that teaching materials can be
              shared easily. Companies get restricted accounts and can use the
              platform to advertise job vacancies or search for people with
              specific skills that interest them. SimpleChat thus offers a way
              to communicate more effectively while becoming an integral part of
              university life and students' career planning.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\sc\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <a class="tryOutLink custom-link" style="text-decoration: none"
        >TRY IT OUT LIVE</a
      >
      <div class="project-section">
        <div class="project-video">
          <iframe
            style="border: 1px solid #171717"
            width="800"
            height="450"
            src="https://embed.figma.com/proto/lAaQo23W7BEgJGwKB9lQD8/Designmethoden-USerresearch?page-id=0%3A1&node-id=213-2808&node-type=frame&viewport=-2921%2C-796%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=213%3A2808&embed-host=share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '       TWO WEEKS       ',
            '    THIRD SEMESTER     ',
            '      GRADE: 1.7        ',
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
              The university's current communication platform, Slack, is being
              replaced by a new dedicated platform that will make it easier for
              the university, students, and alumni to communicate with each
              other. The new platform needs to be simple to use and have lots of
              different features. The goal was to create a solution that would
              be used by all students and alumni to keep the connection to the
              university strong.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\sc\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['              [PROCESS]            ']" />
            <div class="paragraph">
              To get a feel for what users need, the process began by exploring
              other platforms. User research methods like user interviews and
              analyzing customer needs were used to gain a deep understanding of
              the target group. These insights were used to create a rough
              prototype, which was then gradually improved. As development
              continued, changes were made based on tests with potential users
              to enhance user-friendliness. The low- and mid-fidelity prototypes
              created in Figma served as a foundation for regular user tests. An
              iterative approach, incorporating user feedback, led to the
              development of a platform that is both functional and intuitive,
              simplifying the complexity of its many features.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\sc\process.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['             [SOULUTION]           ']" />
            <div class="paragraph">
              The result is SimpleChat, an all-in-one platform that lets users
              chat and offers other features to connect the university and
              students in new ways. One of the key features of the platform is
              the ability for users to maintain their own profiles. These
              profiles include key info like a public timeline where
              internships, studying abroad, and other big moments are
              documented. There's also a tag system where you can store
              interests and relevant facts about the person. These features let
              other users search for people with specific experiences or
              interests. For example, they can search for someone who has stayed
              abroad in Costa Rica. The platform also includes the university
              itself and companies. The university can use the platform to
              manage a bulletin board, post grades and notifications directly on
              accounts, and combine several platforms. Courses and team channels
              are also part of SimpleChat, so that teaching materials can be
              shared easily. Companies get restricted accounts and can use the
              platform to advertise job vacancies or search for people with
              specific skills that interest them. SimpleChat thus offers a way
              to communicate more effectively while becoming an integral part of
              university life and students' career planning.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\sc\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <a class="tryOutLink custom-link" style="text-decoration: none"
        >TRY IT OUT LIVE</a
      >
      <div class="project-section">
        <div class="project-video">
          <iframe
            style="border: 1px solid #171717"
            width="800"
            height="450"
            src="https://embed.figma.com/proto/lAaQo23W7BEgJGwKB9lQD8/Designmethoden-USerresearch?page-id=0%3A1&node-id=213-2808&node-type=frame&viewport=-2921%2C-796%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=213%3A2808&embed-host=share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '       TWO WEEKS       ',
            '    THIRD SEMESTER     ',
            '      GRADE: 1.7        ',
          ]"
        />
      </div>
    </div>

    <div v-if="isMobile" class="project-details">
      <div class="project-section" id="details-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['         [PROBLEM]         ']" />
            <div class="paragraph">
              The university's current communication platform, Slack, is being
              replaced by a new dedicated platform that will make it easier for
              the university, students, and alumni to communicate with each
              other. The new platform needs to be simple to use and have lots of
              different features. The goal was to create a solution that would
              be used by all students and alumni to keep the connection to the
              university strong.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\sc\problem.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section-reverse">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['         [PROCESS]         ']" />
            <div class="paragraph">
              To get a feel for what users need, the process began by exploring
              other platforms. User research methods like user interviews and
              analyzing customer needs were used to gain a deep understanding of
              the target group. These insights were used to create a rough
              prototype, which was then gradually improved. As development
              continued, changes were made based on tests with potential users
              to enhance user-friendliness. The low- and mid-fidelity prototypes
              created in Figma served as a foundation for regular user tests. An
              iterative approach, incorporating user feedback, led to the
              development of a platform that is both functional and intuitive,
              simplifying the complexity of its many features.
            </div>
          </div>
          <div class="image small">
            <img src="public\img\sc\process.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <div class="project-section">
        <div class="project-content">
          <div class="text">
            <SplitFlapText :texts="['        [SOULUTION]        ']" />
            <div class="paragraph">
              The result is SimpleChat, an all-in-one platform that lets users
              chat and offers other features to connect the university and
              students in new ways. One of the key features of the platform is
              the ability for users to maintain their own profiles. These
              profiles include key info like a public timeline where
              internships, studying abroad, and other big moments are
              documented. There's also a tag system where you can store
              interests and relevant facts about the person. These features let
              other users search for people with specific experiences or
              interests. For example, they can search for someone who has stayed
              abroad in Costa Rica. The platform also includes the university
              itself and companies. The university can use the platform to
              manage a bulletin board, post grades and notifications directly on
              accounts, and combine several platforms. Courses and team channels
              are also part of SimpleChat, so that teaching materials can be
              shared easily. Companies get restricted accounts and can use the
              platform to advertise job vacancies or search for people with
              specific skills that interest them. SimpleChat thus offers a way
              to communicate more effectively while becoming an integral part of
              university life and students' career planning.
            </div>
          </div>
          <div class="image medium">
            <img src="public\img\sc\solution.svg" alt="plantmonit" />
          </div>
        </div>
      </div>

      <a class="tryOutLink custom-link" style="text-decoration: none"
        >TRY IT OUT LIVE</a
      >
      <div class="project-section">
        <div class="project-video">
          <iframe
            style="border: 1px solid #171717"
            width="800"
            height="450"
            src="https://embed.figma.com/proto/lAaQo23W7BEgJGwKB9lQD8/Designmethoden-USerresearch?page-id=0%3A1&node-id=213-2808&node-type=frame&viewport=-2921%2C-796%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=213%3A2808&embed-host=share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="projectDetailsFlap">
        <SplitFlapText
          :texts="[
            '        [KEYDATA]         ',
            '       TWO WEEKS       ',
            '    THIRD SEMESTER     ',
            '      GRADE: 1.7        ',
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
