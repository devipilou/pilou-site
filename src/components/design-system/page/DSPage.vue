<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@media (min-width: 1024px) {
  .page-content {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>