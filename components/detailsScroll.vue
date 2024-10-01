<template>
    <!-- Link, der die Scroll-Funktion auslöst -->
    <a href="#details-section" class="detailsLink" @click.prevent="scrollToDetails">DETAILS</a>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  function scrollToDetails() {
    // Stelle sicher, dass das Element existiert
    const element = document.getElementById('details-section');
    if (element) {
      // Berechne den rem-Wert in Pixeln
      const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const offsetInRem = 6; // Beispiel: 3rem Offset
      const offset = -offsetInRem * remInPx;
  
      // Berechne die Zielposition des Elements
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;
  
      // Scroll zur berechneten Position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
  
  // Optional: Stellen sicher, dass die Scroll-Verknüpfung nach dem Mounten korrekt funktioniert
  onMounted(() => {
    // console.log('ScrollLink-Komponente erfolgreich geladen.');
  });
  </script>
  
  <style scoped>
 
  </style>
  