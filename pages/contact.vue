<template>
  <main>
    <div id="contact">CONTACT ME</div>
    <div id="startLinkContact">
      <nuxt-link to="/" class="custom-link">START</nuxt-link>
    </div>
    <div class="contactText">
      <div id="asdf">CONTACT ME</div>
    </div>
  </main>
</template>

<script setup></script>
<style scoped>
#contact {
  color: black;
  font-weight: 300;
  font-size: 32px;
  text-align: center;
  margin-top: 50px;
  font-style: normal;
  line-height: normal;
  text-decoration: underline;
}

#startLinkContact {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 32px;
  font-weight: 700;
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
}
</style>
