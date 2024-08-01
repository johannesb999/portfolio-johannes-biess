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
      <nuxt-link to="/en/project/simpleChat" class="custom-link"
        >SIMPLECHAT</nuxt-link
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
        style=" border: 1px solid black; border-radius: 10px; " 
        src="https://via.placeholder.com/500x500"
        alt="DrawingLight"
      />
    </div>
    <NuxtLink to="/en/project/details/DrawingLight" class="detailsLink">DETAILS</NuxtLink>
  </main>
</html>
</template>

<script setup></script>

<style src="assets/project.css" scoped></style>
