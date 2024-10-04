<template>
  <div>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </head>
    <NuxtPage />

    <header class="language-switch">
      <button
        class="custom-link"
        id="en"
        @click="switchLanguage('en')"
        :disabled="currentLocale === 'en'"
      >
        EN
      </button>
      <div id="line" class="custom-link">|</div>
      <button
        class="custom-link"
        id="de"
        @click="switchLanguage('de')"
        :disabled="currentLocale === 'de'"
      >
        DE
      </button>
    </header>
    <nuxt-link to="/" class="returnHome custom-link">JB</nuxt-link>
    <!-- <CustomCursor /> -->
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

//für customCursor:
// in html curser: none !important; , in custom-link und custom-link:hover curser:none;
//
</script>

<style>
html {
  color: #171717;
  font-size: 16px;
  font-family: "Roboto Mono", monospace;
  background-color: #fbfbfb;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  letter-spacing: 1px;
  scroll-behavior: smooth;
  font-optical-sizing: auto;
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
  position: fixed;
  top: 50px;
  left: 2.3%;
  z-index: 100;
  background-color: #fbfbfb;
}

.language-switch {
  position: fixed;
  top: 50px;
  right: 2.3%;
  display: flex;
  align-items: center;
  z-index: 100;
  background-color: #fbfbfb;
}

#en,
#de,
#line {
  font-weight: 100;
  font-size: 1.75rem;
  background-color: #fbfbfb;
}

.language-switch button {
  margin: 0 5px;
  background-color: #fbfbfb;
  color: #dadada;
  border: none;
  line-height: 1rem;
}

.language-switch button:disabled {
  color: #171717;
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

#bottomLink {
  color: #171717;
  font-weight: 700;
  font-size: 2rem;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-style: normal;
  line-height: normal;
}

#topLink {
  position: absolute;
  top: 0;
  padding-top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

#rightLink {
  top: 50%;
  right: 2.3%;
  transform: translateY(-50%);
  position: absolute;
  font-size: 2rem;
  font-weight: 700;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

#leftLink {
  top: 50%;
  left: 2.3%;
  transform: translateY(-50%) rotate(180deg);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  position: absolute;
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

/* Responsive Design */

@media (max-width: 992px) {
  .returnHome {
    font-size: 1.75rem;
    top: 30px;
    left: 5%;
  }

  .language-switch {
    top: 30px;
    right: 5%;
  }

  #en,
  #de,
  #line {
    font-size: 1.5rem;
  }

  #bottomLink,
  #topLink,
  #rightLink,
  #leftLink {
    font-size: 1.75rem;
  }
}

@media (max-width: 768px) {
  .returnHome {
    font-size: 1.5rem;
    top: 20px;
    left: 5%;
  }

  .language-switch {
    top: 20px;
    right: 5%;
  }

  #en,
  #de,
  #line {
    font-size: 1.25rem;
  }

  #bottomLink,
  #topLink,
  #rightLink,
  #leftLink {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .returnHome {
    font-size: 1.25rem;
    top: 15px;
    left: 10%;
  }

  .language-switch {
    top: 15px;
    right: 10%;
  }

  #en,
  #de,
  #line {
    font-size: 1rem;
  }

  #bottomLink,
  #topLink,
  #rightLink,
  #leftLink {
    font-size: 1.25rem;
  }
}
</style>
