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

<script>
export default {
  name: "HomePage",
};
</script>

<style>
@font-face {
  .geologica-<uniquifier > {
    font-family: "Geologica", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    font-variation-settings: "slnt" 0, "CRSV" 0, "SHRP" 0;
  }
}

body {
  color: black;
  font-size: 14px;
  font-family: "Geologica", sans-serif;
  background-color: white; 
}



</style>
