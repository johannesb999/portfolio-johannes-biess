<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/" class="custom-link">START</nuxt-link>
      </div>
      <div id="projectLinkNext">
        <nuxt-link to="/en/project/simpleChat" class="custom-link"
          >SIMPLECHAT</nuxt-link
        >
      </div>
      <div id="projectLinkBefore">
        <nuxt-link to="/en/project/projects" class="custom-link"
          >PLANTMONIT</nuxt-link
        >
      </div>
      <div class="projectFlap">
        <SplitFlapText
          :texts="[
            '        [JUMPSTAR]        ',
            'THREEJS     SERVERHOSTING ',
            '  WEB DEPLOYMENT  PIPELINE',
            '  DOCKER       SVELTE     ',
            ' CLOUDFLARE      PORTAINER',
            'MONGOOSE    GITHUB ACTIONS',
          ]"
        />
      </div>

      <div class="wrapper">
        <div class="picture">
          <img
            style="border: 1px solid black; border-radius: 10px"
            src="public\img\js\js.svg"
            alt="plantmonit"
          />
        </div>
        <div class="projectDescription">
          <p>
            With our website we want to present the scientific view of
            horoscopes and astrology. We show that star signs are constructed
            concepts that have no scientific basis and therefore have no impact
            on people or our everyday lives...
          </p>
        </div>
      </div>
      <NuxtLink to="/en/project/details/JumpStar" class="detailsLink"
        >DETAILS</NuxtLink
      >
    </main>
  </html>
</template>

<script setup></script>

<style src="assets/project.css" scoped></style>
