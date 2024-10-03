<template>
  <a href="#details-section" class="detailsLink" @click.prevent="scrollToDetails">DETAILS</a>
</template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  function scrollToDetails() {
    const element = document.getElementById('details-section');
    if (element) {
      const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const offsetInRem = 6; // Beispiel: 3rem Offset
      const offset = -offsetInRem * remInPx;
  
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
  
  onMounted(() => {
  });
  </script>
  
  <style scoped>
  
  </style>
  