<template>
  <html>
    <main>
      <div id="topLink">
        <nuxt-link to="/" class="custom-link">START</nuxt-link>
      </div>
      <div id="projectLinkNext">
        <nuxt-link to="/en/project/jumpStar" class="custom-link"
          >JUMPSTAR</nuxt-link
        >
      </div>
      <div id="projectLinkBefore">
        <nuxt-link to="/en/project/goEase" class="custom-link"
          >GOEASE</nuxt-link
        >
      </div>

      <div class="projectFlap">
        <SplitFlapText
          :texts="[
            '  SVELTE      FIGMA      ',
            '   ESP32   WIREFRAMES    ',
            '   FUSION360  UI  UX     ',
            ' MQTT     USERCENTERED   ',
            'OPENAI        MONGODB    ',
          ]"
        />
      </div>

      <div class="projectText">
        <div id="line1">PLANTMONIT</div>
      </div>
      <div class="picture">
        <img
          style="border: 1px solid black; border-radius: 10px"
          src="public\img\pm\pm4.svg"
          alt="plantmonit"
        />
      </div>
      <NuxtLink to="/en/project/details/PlantMonit" class="detailsLink"
        >DETAILS</NuxtLink
      >
    </main>
  </html>
</template>

<script setup></script>

<style src="assets/project.css" scoped></style>
