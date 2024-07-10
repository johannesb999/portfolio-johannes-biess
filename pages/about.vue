<template>
  <main>
    <div id="aboutMe">ABOUT ME</div>
    <div id="startLinkAbout">
      <nuxt-link to="/" class="custom-link">START</nuxt-link>
    </div>
    <div id="resumeLink">
      <nuxt-link to="resume" class="custom-link">PERSONAL RESUME</nuxt-link>
    </div>
    <div class="aboutMeText">
      <div id="line1">ABOUT ME</div>
      <div id="line2">TEAMWORK TRUST</div>
      <div id="line3">ORGANIZATION CLARITY</div>
      <div id="line4">ADAPTABILITY</div>
      <div id="line4">PUNCTUALITY FAIRNESS</div>
      <div id="line4">CREATIVE ACCURACY</div>
    </div>
  </main>
</template>

<script setup>

</script>

<style scoped>
#aboutMe {
  color: black;
  font-weight: 300;
  font-size: 32px;
  text-align: center;
  margin-top: 50px;
  font-style: normal;
  line-height: normal;
  text-decoration: underline;
}

#resumeLink {
  color: black;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  margin-top: 800px;
  font-style: normal;
  line-height: normal;
}

#aboutLink,
#startLinkAbout {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 32px;
  font-weight: 700;
}

#aboutLink {
  left: 0;
  padding-left: 20px;
}

#startLinkAbout {
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

.aboutMeText {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 200;
  text-align: left;

  #line1 {
    font-weight: 700;
  }
  #line2 {
    font-weight: 300;
  }
  #line3 {
    font-weight: 300;
  }
  #line4 {
    font-weight: 300;
  }
  #line5 {
    font-weight: 300;
  }
  #line6 {
    font-weight: 300;
  }
}
</style>
