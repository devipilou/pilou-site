<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/header/MainHeader.vue'
import TopBar from './components/header/TopBar.vue';
</script>

<template>
    <TopBar />
    <MainHeader />

    <RouterView />
</template>

<style scoped></style>
