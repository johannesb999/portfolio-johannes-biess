<template>
  <HeaderSwitch />
  <html>
    <main>
      <div id="contact">KONTAKT</div>
      <div id="startLinkContact">
        <nuxt-link to="/de" class="custom-link">START</nuxt-link>
      </div>
      <div id="resumeLink"></div>
      <div class="contactText">
        <div id="line1">Ich freue mich darauf von Ihnen zu hören</div>
      </div>
    </main>
  </html>
</template>

<script setup></script>

<style scoped>
html {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
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
