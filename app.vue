<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap"
    rel="stylesheet"
  />
  <title>Johannes Biess</title>
  <link rel="icon" href="/favicon.ico" />
  
  <transition :name="transitionName">
    <div>
      <NuxtPage />
    </div>
  </transition>
</template>

<script setup></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap");

html {
  color: black;
  font-size: 14px;
  font-family: "Geologica", sans-serif;
  background-color: white;
}/* Basis-Animationseigenschaften */
.page-enter-active,
.page-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

/* Spezifische Animationen für das Einfliegen */
.page-enter-from {
  transform: translateX(100%); /* Einfliegen von rechts */
  opacity: 0;
}
.page-leave-to {
  transform: translateX(-100%); /* Ausfliegen nach links */
  opacity: 0;
}
</style>
