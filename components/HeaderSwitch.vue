<template>
  <div class="header-container">
    <nuxt-link to="/" class="returnHome">JB</nuxt-link>
    <header class="language-switch">
      <button
        id="en"
        @click="switchLanguage('en')"
        :disabled="currentLocale === 'en'"
      >
        EN
      </button>
      <div>|</div>
      <button
        id="de"
        @click="switchLanguage('de')"
        :disabled="currentLocale === 'de'"
      >
        DE
      </button>
    </header>
  </div>
</template>

<script setup>

</script>

<style scoped>
.header-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.returnHome {
  font-size: 1.5rem;
  font-weight: 100;
  font-size: 2rem;
  line-height: 1rem;
  color: #171717;
  text-decoration: none;
  position: absolute;
  top: 50px;
  left: 100px;
  z-index: 100;
}

.language-switch {
  position: absolute;
  top: 50px;
  right: 100px;
  display: flex;
  align-items: center;
}

#en,
#de {
  font-weight: 100;
  font-size: 1.75rem;
}

.language-switch button {
  margin: 0 5px;
  cursor: pointer;
  background-color: transparent;
  color: #dadada;
  border: none;
  line-height: 1rem;
  z-index: 100;

}

.language-switch button:disabled {
  color: #171717;
  cursor: default;
}

.language-switch button:not(:disabled):hover {
  color: #171717;
}
</style>
