<template>
  <div class="detailsLink-container">
    <a href="#details-section" class="detailsLink custom-link" @click="scrollToDetails">{{ label }}</a>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

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

const route = useRoute();
const label = computed(() => (route.path.startsWith('/de') ? 'IM DETAIL' : 'IN DETAIL'));
</script>
