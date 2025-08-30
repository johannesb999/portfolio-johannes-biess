<template />

<style lang="scss">
/* Global page transition styles */
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
  box-shadow: 0 0 40px var(--color-black, rgba(0, 0, 0, 0));
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
  box-shadow: -10px 0 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
  box-shadow: 10px 0 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-right-enter-from,
.page-left-leave-to {
  transform: translateX(-100%);
  box-shadow: 10px 0 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-right-leave-to,
.page-left-enter-from {
  transform: translateX(100%);
  box-shadow: -10px 0 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-down-enter-from {
  transform: translateY(-100%);
  box-shadow: 0 10px 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-down-leave-to {
  transform: translateY(100%);
  box-shadow: 0 -10px 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-up-enter-from {
  transform: translateY(100%);
  box-shadow: 0 -10px 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-up-leave-to {
  transform: translateY(-100%);
  box-shadow: 0 10px 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-left-enter-to,
.page-right-enter-to,
.page-up-enter-to,
.page-down-enter-to {
  transform: translateX(0) translateY(0);
  box-shadow: 0 0 40px var(--color-white-transition, rgba(0, 0, 0, 0.3));
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

