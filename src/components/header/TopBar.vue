<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue';
</script>
<template>
  <div class="top-bar">
    <ThemeToggle class="theme_toggle" />
  </div>
</template>
<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
}

button {
  font-size: 10px;
  padding: 0.5rem;
}
</style>