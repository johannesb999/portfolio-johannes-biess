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
    <NuxtPage />
  </div>
</template>

<script setup></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap");

html {
  color: #171717;
  font-size: 14px;
  font-family: "Geologica", sans-serif;
  background-color: #fbfbfb;
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
