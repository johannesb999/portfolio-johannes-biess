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
      <button @click="switchLanguage('en')" :disabled="currentLocale === 'en'">English</button>
      <button @click="switchLanguage('de')" :disabled="currentLocale === 'de'">Deutsch</button>
    </header>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watchEffect } from "vue";

const router = useRouter();
const route = useRoute();
const currentLocale = ref(route.path.startsWith('/de') ? 'de' : 'en');

watchEffect(() => {
  currentLocale.value = route.path.startsWith('/de') ? 'de' : 'en';
});

const switchLanguage = (lang) => {
  const currentPath = route.path;
  const pathSegments = currentPath.split("/").filter((segment) => segment);

  if (lang === "de") {
    // Von Englisch zu Deutsch
    if (pathSegments[0] === "en") {
      pathSegments[0] = "de";
    } else {
      pathSegments.unshift("de");
    }
  } else if (lang === "en") {
    // Von Deutsch zu Englisch
    if (pathSegments[0] === "de") {
      pathSegments.shift(); // Entferne 'de' aus der URL
    }
  }

  const newPath = `/${pathSegments.join("/")}`;
  currentLocale.value = lang;
  router.push({ path: newPath });
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
  top: 20px;
  right: 20px;
  z-index: 1000; /* Sicherstellen, dass die Buttons immer im Vordergrund sind */
}

.language-switch button {
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  background-color: #171717;
  color: white;
  border: none;
  border-radius: 5px;
}

.language-switch button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.language-switch button:hover:enabled {
  background-color: #333;
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
</style>
