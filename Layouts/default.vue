<template>
    <main>
      <slot></slot>
    </main>
  </template>
  
  <style>
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
  