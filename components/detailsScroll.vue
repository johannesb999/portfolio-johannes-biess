<template>
  <div class="detailsLink-container">
    <a href="#details-section" class="detailsLink custom-link" @click.prevent="scrollToDetails">DETAILS</a>
  </div>
</template>

  
  <script setup>
  import { onMounted } from 'vue';
  
  function scrollToDetails() {
    const element = document.getElementById('details-section');
    if (element) {
      const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const offsetInRem = 6; 
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
  