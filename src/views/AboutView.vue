<script setup lang="ts">
import DSPage from '../components/design-system/page/DSPage.vue'
import DSCard from '../components/design-system/card/DSCard.vue'
</script>

<template>
  <DSPage>
    <h2>About me</h2>
    <DSCard title="Who am I?" class="about-card">
      <template #content>
        <p>I am a 38-year-old Junior Web Developer, in a civil union, father of 2 children, originally from and living in
          the Lyon region.</p>
        <p>With a background as a military musician, I can offer you unparalleled experiences and a highly appreciated
          demeanor by my colleagues.</p>
        <p>Among my character traits, the most prominent are these '3Cs' that are particularly important to me: being
          creative, always staying constructive, and never stopping being curious.</p>
      </template>
    </DSCard>

  </DSPage>
</template>

<style scoped>
.about-card {
  margin: 1rem 4rem;
  padding: 1rem;
}
</style>
