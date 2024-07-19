<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap"
    rel="stylesheet"
  />
  <title>Johannes Biess</title>
  <link rel="icon" href="/favicon.ico" />

  <div>
    <header class="language-switch">
      <button @click="switchLanguage('en')" :disabled="currentLocale === 'en'">
        EN
      </button>
      <div>|</div>
      <button @click="switchLanguage('de')" :disabled="currentLocale === 'de'">
        DE
      </button>
    </header>
    <NuxtPage />
  </div>
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
    // Allgemeine Behandlung für den Wechsel von spezifischen Seiten
    const pathWithoutLocale = currentPath.replace(/^\/(de|en)\//, "/");
    if (lang === "de") {
      newPath = pathWithoutLocale.startsWith("/")
        ? `/de${pathWithoutLocale}`
        : `/de/${pathWithoutLocale}`;
    } else {
      newPath = pathWithoutLocale.startsWith("/")
        ? `/en${pathWithoutLocale}`
        : `/en/${pathWithoutLocale}`;
    }
  }

  if (newPath) {
    router.push(newPath);
    currentLocale.value = lang;
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap");

html {
  color: #171717;
  font-size: 14px;
  font-family: "Geologica", sans-serif;
  background-color: #fbfbfb;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

.language-switch {
  position: absolute;
  top: 30px;
  right: 70px;
  z-index: 1000;
  display: flex;
  align-items: center;
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

.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active,
.page-up-enter-active,
.page-down-enter-active,
.page-up-leave-active,
.page-down-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 700ms ease-out;
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
}

.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
}

.page-down-enter-from {
  transform: translateY(100%);
}

.page-down-leave-to {
  transform: translateY(-100%);
}

.page-up-enter-from {
  transform: translateY(-100%);
}

.page-up-leave-to {
  transform: translateY(100%);
}

.page-left-enter-to,
.page-right-enter-to,
.page-up-enter-to,
.page-down-enter-to {
  transform: translateX(0) translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
