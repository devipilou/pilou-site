<template>
    <button @click="lightThemeSwitch">{{ switchMessage }}</button>
</template>
<script lang="ts">
import themeChanger from "../utils/theme";
export default {
    name: "ThemeToggle",
    data() {
        return {
            themeChanger: new themeChanger(false),
        };
    },
    computed: {
        switchMessage() {
            // @ts-ignore
            return this.themeChanger._isLightTheme() ? 'Dark theme' : 'Light theme';
        }
    },
    methods: {
        lightThemeSwitch() {
            // @ts-ignore
            this.themeChanger._lightThemeSwitch();
        },
    },
};
</script>
<style scoped>
button {
    font-size: 12px;
}
</style>