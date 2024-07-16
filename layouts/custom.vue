<template>
  <div class="page">
    <div class="page-wrap _container">
      <slot />
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
._container {
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
}
</style>
