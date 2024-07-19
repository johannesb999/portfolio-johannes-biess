@ -0,0 +1,78 @@
<template>
  <div class="language-switch">
    <button @click="switchLanguage('en')" :disabled="currentLocale === 'en'">
      EN
    </button>
    <div>|</div>
    <button @click="switchLanguage('de')" :disabled="currentLocale === 'de'">
      DE
    </button>
  </div>




  
  <header>
    <HeaderSwitch />
  </header>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watchEffect } from "vue";

const router = useRouter();
const route = useRoute();
const currentLocale = ref(route.path.startsWith("/de") ? "de" : "en");

watchEffect(() => {
  currentLocale.value = route.path.startsWith("/de") ? "de" : "en";
});

const switchLanguage = (lang) => {
  const currentPath = route.path;
  let newPath = "";

  if (currentPath === "/" && lang === "de") {
    newPath = "/de";
  } else if (currentPath === "/de" && lang === "en") {
    newPath = "/";
  } else {
    const pathWithoutLocale = currentPath.replace(/^\/(de|en)\//, "/");
    newPath = pathWithoutLocale.startsWith("/")
      ? `/${lang}${pathWithoutLocale}`
      : `/${lang}/${pathWithoutLocale}`;
  }

  if (newPath) {
    router.push(newPath);
    currentLocale.value = lang;
  }
};
</script>

<style scoped>
.language-switch {
  position: absolute;
  top: 30px;
  right: 70px;
  display: flex;
  align-items: center;
  font-family: "Geologica", sans-serif;
}

.language-switch button {
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  background-color: transparent;
  color: #9e9e9e;
  border: none;
  font-weight: 100;
  font-size: 1.5rem;
  line-height: 1rem;
}

.language-switch button:disabled {
  color: #171717;
  cursor: default;
}

.language-switch button:not(:disabled):hover {
  color: #171717;
}
</style>