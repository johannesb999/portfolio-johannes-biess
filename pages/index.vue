<template>
  <div>
    <div id="start">START</div>
    <div id="aboutLink">
      <nuxt-link to="about" class="custom-link">ABOUT</nuxt-link>
    </div>
    <div id="contactLink">
      <nuxt-link to="contact" class="custom-link">CONTACT</nuxt-link>
    </div>
    <div id="projectLink">
      <nuxt-link to="projects" class="custom-link">PROJECTS</nuxt-link>
    </div>
    <div class="mainText">
      <div id="line1">HI MY NAME IS</div>
      <div id="line2">JOHANNES BIESS</div>
      <div id="line3">AND I AM</div>
      <div id="line4">DEVELOPER</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#start {
  color: black;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  margin-top: 50px;
  font-style: normal;
  line-height: normal;
}

#projectLink {
  color: black;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  margin-top: 800px;
  font-style: normal;
  line-height: normal;
}

#aboutLink,
#contactLink {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  font-weight: 700;
}

#aboutLink {
  left: 0;
  padding-left: 20px;
}

#contactLink {
  right: 0;
  padding-right: 20px;
}

.custom-link {
  color: black;
  text-decoration: none;
}

.custom-link:hover {
  color: black;
  text-decoration: underline;
}

.mainText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 200;
  text-align: left;
}
</style>
