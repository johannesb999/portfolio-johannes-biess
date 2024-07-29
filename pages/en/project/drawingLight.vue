<template>
  <main>
    <div id="project">MORE</div>
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

    <div class="projectText">
      <div id="line1">DRAWINGLIGHT</div>
    </div>
    <div class="picture">
      <img
        style="padding: 50px"
        src="https://via.placeholder.com/550x300"
        alt="plantmonit"
      />
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
#project {
  color: black;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

#projectLinkStart {
  position: absolute;
  top: 0;
  padding-top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

#projectLinkNext {
  position: absolute;
  top: 50%;
  right: 0;
  padding-right: 20px;
  transform: translateY(-50%);
  font-size: 2rem;
  font-weight: 700;
}

#projectLinkBefore {
  position: absolute;
  top: 50%;
  left: 0;
  padding-left: 20px;
  transform: translateY(-50%);
  font-size: 2rem;
  font-weight: 700;
}

.custom-link {
  color: black;
  text-decoration: none;
}

.custom-link:hover {
  color: black;
  text-decoration: underline;
}

.projectText {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 200;
  text-align: left;

  #line1 {
    font-weight: 700;
  }
}

.picture {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 200;
  text-align: left;
}
</style>
