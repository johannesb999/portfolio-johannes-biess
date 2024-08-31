<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/" class="custom-link">START</nuxt-link>
      </div>
      <div id="projectLinkNext">
        <nuxt-link to="/en/project/TrickyTowers" class="custom-link"
          >TRICKYTOWERS</nuxt-link
        >
      </div>
      <div id="projectLinkBefore">
        <nuxt-link to="/en/project/portfolio" class="custom-link"
          >THIS WEBSITE</nuxt-link
        >
      </div>

      <div class="projectFlap">
        <SplitFlapText
          :texts="[
            '      [DRAWINGLIGHT]          ',
            'MECHATRONICS      VALUES      ',
            'TEAMWORK   PHOTOGRAPHY  CLARITY ',
            '     ARDUINO         ',
            'CREATIVITY  LIGHTDRAWING      ',
          ]"
        />
      </div>

      <div class="wrapper">
        <div class="picture">
          <img
            style="border: 1px solid black; border-radius: 10px"
            src="public\img\dl\drawingLight (4).jpg"
            alt="plantmonit"
          />
        </div>
        <div class="projectDescription">
          <p>
            The aim of the project was to revolutionize the care of plants.
            Thanks to new technological possibilities and corresponding sensors
            PlantMonit continuously captures images of the plant and important
            Parameters such as soil moisture, humidity, temperature and Lighting
            conditions. These are created by artificial intelligence "Buddy"
            analyzed and classified. Buddy enables a simple efficient and
            optimal care of the Green Friends....<br />
          </p>
        </div>
      </div>
      <NuxtLink to="/en/project/details/DrawingLight" class="detailsLink"
        >DETAILS</NuxtLink
      >
    </main>
  </html>
</template>

<script setup></script>

<style src="assets/project.css" scoped></style>
