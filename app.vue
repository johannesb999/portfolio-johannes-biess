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

<style>@import url("https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap");

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
  transition: transform 700ms cubic-bezier(0.77, 0, 0.175, 1),
    box-shadow 700ms cubic-bezier(0.77, 0, 0.175, 1);
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
  transform: translateY(100%);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
}

.page-down-leave-to {
  transform: translateY(-100%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.page-up-enter-from {
  transform: translateY(-100%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.page-up-leave-to {
  transform: translateY(100%);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
}

.page-left-enter-to,
.page-right-enter-to,
.page-up-enter-to,
.page-down-enter-to {
  transform: translateX(0) translateY(0);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.25);
}

.page-content {
  opacity: 0;
  animation: fadeInContent 3s ease forwards;
  animation-delay: 0.7s;
}

@keyframes fadeInContent {
  to {
    opacity: 1;
  }
}


</style>
