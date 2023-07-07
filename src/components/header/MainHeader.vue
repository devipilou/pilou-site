<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HeaderContent from './HeaderContent.vue'
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
    <header>
        <ThemeToggle class="theme_toggle" />
        <RouterLink to="/" class="logo-wrapper">
            <img alt="Pilou Dev logo" class="logo" src="@/assets/LogoPilouDev.png" width="200" height="200" />
        </RouterLink>
        <div class="wrapper">
            <HeaderContent />

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/projects">Projects</RouterLink>
                <RouterLink to="/resume">Résumé</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    line-height: 1.5;
    max-height: 100vh;
    min-width: 30rem;
}

.logo-wrapper {
    border-radius: 0.5rem;
}

.logo {
    display: block;
    margin: 0 auto 1rem;
    cursor: pointer;
}

.theme_toggle {
    align-self: start;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 0.75rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        margin: 1.5rem;
    }

    .theme_toggle {
        align-self: center;
    }


    header .wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    nav {
        width: auto;
        text-align: left;
        /* margin-left: -1rem; */
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
