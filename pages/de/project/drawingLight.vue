<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/de" class="custom-link">Start</nuxt-link>
      </div>
      <div id="projectLinkNext">
        <nuxt-link to="/de/project/TrickyTowers" class="custom-link"
          >TrickyTowers</nuxt-link
        >
      </div>
      <div id="projectLinkBefore">
        <nuxt-link to="/de/project/simpleChat" class="custom-link"
          >SimpleChat</nuxt-link
        >
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

      <div class="projectText">
        <div id="line1">DrawingLight</div>
      </div>
      <div class="picture">
        <img
          style="border: 1px solid black; border-radius: 10px"
          src="https://via.placeholder.com/500x500"
          alt="DrawingLight"
        />
      </div>
      <NuxtLink to="/de/project/details/DrawingLight" class="detailsLink"
        >DETAILS
      </NuxtLink>
    </main>
  </html>
</template>

<script setup></script>

<style src="assets/project.css" scoped></style>