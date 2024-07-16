<script setup lang="ts">
import router from '@/router'
import HomeItem from './HomeItem.vue'
import IconWrapper from '../design-system/'

function onButtonClick() {
  router.push("/contact")
}
</script>

<template>
  <HomeItem>
    <template #icon>
      <IconWrapper icon-name="about" />
    </template>
    <template #heading>About</template>
    <template #content>
      <p>Web Developper - Vuejs Nuxt Nodejs JS/TS</p>
      <p>Former Military-band Horn player reconverted</p>
      <p>Creative / Constructive / Curious</p>
    </template>

  </HomeItem>

  <HomeItem>
    <template #icon>
      <IconWrapper icon-name="projects" />
    </template>
    <template #heading>Projects</template>
    <template #content>
      <p>This new personnal <a href="#">website</a>. Made with Vuejs Vue-router and Typescript.
        <a href="https://github.com/devipilou/pilou-site"><small>Github</small></a>
      </p>
      <p>My former <a href="https://devipilou.github.io/pilou_art/">art gallery</a>. Made in HTML SCSS and native JS
        <a href="https://github.com/devipilou/pilou_art"><small>Github</small></a>
      </p>
      <p>My former <a href="https://devipilou.github.io/portfolio/">website</a>. Made with HTLM CSS and Bootstrap
        theme, with two hidden js games.
        <a href="https://github.com/devipilou/portfolio"><small>Github</small></a>
      </p>
    </template>
  </HomeItem>

  <HomeItem>
    <template #icon>
      <IconWrapper icon-name="resume" />
    </template>
    <template #heading>Résumé</template>
    <template #content>
      <p>Front: VueJs Typescript Html5 Css/Sass/Scss Tailwind</p>
      <p>Back: Nodejs Laravel Php MySql</p>
      <p>Cross Skills: GHA Cypress Vitest GraphQl</p>
      <p>Soft Skills: Autonomy Initiatives-taking Organization Adaptability</p>
    </template>
  </HomeItem>

  <HomeItem>
    <template #icon>
      <IconWrapper icon-name="contact" />
    </template>
    <template #heading>Contact</template>
    <template #content>
      <div class="contact__wrapper">
        <div class="contact__text">
          <p>You like my projects? You're interested by my profile or my skills?</p>
          <p>Don't hesitate any longer:</p>
        </div>
        <button class="contact__button" @click="onButtonClick">Contact me</button>
      </div>
    </template>
  </HomeItem>
</template>

<style scoped>
.contact__wrapper {
  display: flex;
  align-items: center;
}

.contact__text {
  margin-right: 1rem;
}
</style>
