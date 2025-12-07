<template>
  <div class="detailsLink-container">
    <a href="#details-section" class="detailsLink custom-link" @click="scrollToDetails">DETAILS</a>
  </div>
</template>

  
  <script setup>
  import { onMounted } from 'vue';
  
  function scrollToDetails(event) {
    const element = document.getElementById('details-section');
    if (!element) return;

    event?.preventDefault();
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  
  onMounted(() => {
  });
  </script>
  
  <style scoped>
  
  </style>
  
