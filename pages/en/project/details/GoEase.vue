<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/en/project/goEase" class="custom-link"
          >PROJECTS</nuxt-link
        >
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
  overflow-y: auto;
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

.custom-link {
  color: black;
  text-decoration: none;
}

.custom-link:hover {
  color: black;
  text-decoration: underline;
}
</style>
