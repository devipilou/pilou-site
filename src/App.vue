<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/header/MainHeader.vue'
</script>

<template>
  <MainHeader />

  <RouterView class="app-page" />
</template>

<style scoped></style>
