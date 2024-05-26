<script setup lang="ts">
import { computed } from 'vue';
import themeChanger from "../../utils/theme";

const changer = new themeChanger(false);


const switchMessage = computed(() => {
  return changer._isLightTheme() ? 'Dark theme' : 'Light theme';
});

function lightThemeSwitch() {
  changer._lightThemeSwitch();
};

</script>

<template>
  <button @click="lightThemeSwitch">{{ switchMessage }}</button>
</template>

<style scoped>
button {
  font-size: 12px;
}
</style>