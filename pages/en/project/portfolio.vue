<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/" class="custom-link">START</nuxt-link>
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
            '  NUXT3      FIGMA      ',
            '   GITHUB   WIREFRAMES   ',
            '   FUSION360  UI  UX     ',
            '      VUE                ',
            'OPENAI        AAAA       ',
          ]"
        />
      </div>

      <div class="projectText">
        <div id="line1">THIS WEBSITE</div>
      </div>
      <div class="picture">
        <img
          style="border: 1px solid black; border-radius: 10px"
          src="public\img\po\test2.png"
          alt="plantmonit"
        />
      </div>
      <NuxtLink to="/en/project/details/Portfolio" class="detailsLink"
        >DETAILS</NuxtLink
      >
    </main>
  </html>
</template>

<script setup></script>

<style src="assets/project.css" scoped></style>
