<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/de" class="custom-link">Start</nuxt-link>
      </div>
      <div id="projectLinkNext">
        <nuxt-link to="/de/project/simpleChat" class="custom-link"
          >SIMPLECHAT</nuxt-link
        >
      </div>
      <div id="projectLinkBefore">
        <nuxt-link to="/de/project/projects" class="custom-link"
          >PlantMonit</nuxt-link
        >
      </div>

      <div class="porjectDescription">
        <div class="projectText">
          <div id="line1">JumpStar</div>
        </div>
        <div class="projectFlap">
          <SplitFlapText
            :texts="[
              'ABOUT ME      VALUES      ',
              'TEAMWORK   TRUST  CLARITY ',
              'ANOTHER  ORGANISATION     ',
              '     ADAPTABILITY         ',
              ' PUNCTUALITY  FAIRNESS    ',
              'CREATIVITY  ACCURACY      ',
            ]"
          />
        </div>
      </div>

      <div class="picture">
        <img
          style="border: 1px solid black; border-radius: 10px"
          src="https://via.placeholder.com/500x500"
          alt="JumpStar"
        />
      </div>
      <NuxtLink to="/de/project/details/JumpStar" class="detailsLink"
        >DETAILS
      </NuxtLink>
    </main>
  </html>
</template>

<script setup></script>

<style src="assets/project.css" scoped></style>
