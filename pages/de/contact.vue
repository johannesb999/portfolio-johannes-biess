<template>
  <main>
    <div id="contact">CONTACT ME</div>
    <div id="startLinkContact">
      <nuxt-link to="/de" class="custom-link">START</nuxt-link>
    </div>
    <div id="resumeLink"></div>
    <div class="contactText">
      <div id="line1">I AM HAPPY TO HEAR FROM YOU</div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
main {
  height: 90vh;
  width: 100%;
}

#contact {
  color: black;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  margin-top: 50px;
  font-style: normal;
  line-height: normal;
}

#resumeLink {
  color: black;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  margin-top: 800px;
  font-style: normal;
  line-height: normal;
}

#startLinkContact {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  font-weight: 700;
  left: 0;
  padding-left: 20px;
}

#startLinkContact {
  left: 0;
  padding-left: 20px;
}

.custom-link {
  color: black;
  text-decoration: none;
}

.custom-link:hover {
  color: black;
  text-decoration: underline;
}

.contactText {
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
}
</style>
