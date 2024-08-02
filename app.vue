<template>
  <div>
    <NuxtPage />
    <header class="language-switch">
      <button
        id="en"
        @click="switchLanguage('en')"
        :disabled="currentLocale === 'en'"
      >
        EN
      </button>
      <div id="line">|</div>
      <button
        id="de"
        @click="switchLanguage('de')"
        :disabled="currentLocale === 'de'"
      >
        DE
      </button>
    </header>
    <nuxt-link to="/" class="returnHome">JB</nuxt-link>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const currentLocale = ref(route.path.startsWith("/de") ? "de" : "en");

const switchLanguage = (lang) => {
  const currentPath = route.path;
  let newPath = "";

  console.log("Current Path:", currentPath);

  if (currentPath === "/" && lang === "de") {
    newPath = "/de";
  } else if (currentPath === "/de" && lang === "en") {
    newPath = "/";
  } else {
    const pathWithoutLocale = currentPath.replace(/^\/(de|en)\//, "/");
    newPath =
      lang === "de" ? `/de${pathWithoutLocale}` : `/en${pathWithoutLocale}`;
  }

  console.log("New Path:", newPath);

  if (newPath) {
    router.push(newPath);
  }
};

// Überwacht Änderungen der Route und aktualisiert den currentLocale-Wert
watch(route, (newRoute) => {
  currentLocale.value = newRoute.path.startsWith("/de") ? "de" : "en";
});
</script>

<style>
html {
  color: #171717;
  font-size: 14px;
  font-family: "Geologica", sans-serif;
  background-color: #fbfbfb;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  letter-spacing: 3px;
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 1px;
  background-color: #fbfbfb;
}

::-webkit-scrollbar-thumb {
  background-color: #fbfbfb;
  border: 0px solid #fbfbfb;
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
  left: 2%;
  z-index: 100;
  background-color: #fbfbfb;
}

.language-switch {
  position: absolute;
  top: 50px;
  right: 3%;
  display: flex;
  align-items: center;
  z-index: 100;
  background-color: #fbfbfb;
}

#en {
  font-weight: 100;
  font-size: 1.75rem;
  background-color: #fbfbfb;
}

#de {
  font-weight: 100;
  font-size: 1.75rem;
  background-color: #fbfbfb;
}

#line {
  padding-bottom: 5px;
  font-weight: 100;
  font-size: 1.75rem;
  background-color: #fbfbfb;
}

.language-switch button {
  margin: 0 5px;
  cursor: pointer;
  background-color: #fbfbfb;
  color: #dadada;
  border: none;
  line-height: 1rem;
}

.language-switch button:disabled {
  color: #171717;
  cursor: default;
}

.language-switch button:not(:disabled):hover {
  color: #171717;
}

.page-left-enter-active,
.page-left-leave-active,
.page-right-enter-active,
.page-right-leave-active,
.page-up-enter-active,
.page-up-leave-active,
.page-down-enter-active,
.page-down-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 700ms cubic-bezier(0.77, 0, 0.175, 1),
    box-shadow 500ms cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 100;
  width: 100%;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0);
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
}

.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
  box-shadow: 10px 0 30px rgba(0, 0, 0, 0.2);
}

.page-right-enter-from,
.page-left-leave-to {
  transform: translateX(-100%);
  box-shadow: 10px 0 30px rgba(0, 0, 0, 0.2);
}

.page-right-leave-to,
.page-left-enter-from {
  transform: translateX(100%);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
}

.page-down-enter-from {
  transform: translateY(-100%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.page-down-leave-to {
  transform: translateY(100%);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
}

.page-up-enter-from {
  transform: translateY(100%);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
}

.page-up-leave-to {
  transform: translateY(-100%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.page-left-enter-to,
.page-right-enter-to,
.page-up-enter-to,
.page-down-enter-to {
  transform: translateX(0) translateY(0);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.25);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
