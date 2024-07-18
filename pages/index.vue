<template>
  <div>
    <button @click="switchLanguage('en')">English</button>
    <button @click="switchLanguage('de')">Deutsch</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const switchLanguage = (lang) => {
  router.push({ path: `/${lang}` });
};
</script>
