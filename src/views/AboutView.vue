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
    <article>
      <h3>Web Developer - Vuejs Nuxt Nodejs</h3>
      <p>Blah blah blah - TODO</p>
    </article>
    <article>
      <h3>Formerly military musician</h3>
      <section>
        <h4>Experiences</h4>
        <p>Almost 11 years of service have given me a unique life and work experience.</p>
        <p>I have learned to manage stressful situations, as well as to optimize efficiency during both calm and urgent
          periods.</p>
        <p>These experiences have also taught me to be resilient over time, to remain steadfastly focused on my goals, and
          to adapt to all possible situations</p>
      </section>
      <section>
        <h4>Interpersonal Skills</h4>
        <p>You will find in me someone who is both autonomous and enjoys teamwork.</p>
        <p>I have no problem finding my place in a work environment and within a team. I have a natural ability to bring
          cohesion to a team, as it is a very strong element of my personality.</p>
        <p>Respect is deeply ingrained in me, towards everyone, regardless of their social rank or position within the
          company.</p>
        <p>Do not hesitate to ask me for more information on this subject.</p>
      </section>
    </article>
    <article>
      <h3>The "3C": Creative/Constructive/Curious</h3>
      <section>
        <h4>Creative</h4>
        <p>Creativity is, and always has been, a central element of my character, to the point of sometimes being an
          almost pathological need.</p>
        <p>To learn more, visit my image gallery, for example, or contact me through the link below.</p>
      </section>
      <section>
        <h4>Constructive</h4>
        <p>I have a habit, almost a motto, of always being constructive. I can sometimes be direct, though always polite.
          But even when what I say is not easy to hear, it is always well-intentioned and above all positive.</p>
        <p>It is this constructive spirit that has allowed me to progress in my career, and it is this same spirit that I
          will bring to your company.</p>
      </section>
      <section>
        <h4>Curious</h4>
        <p>I am naturally curious and fascinated by everything. I love discovering and learning new things.</p>
        <p>It is this curiosity that has led me to become a web developer, and it is this same curiosity that drives me to
          always want to learn more.</p>
      </section>
    </article>
  </DSPage>
</template>

<style scoped>
.about-card {
  margin: 1rem 4rem;
  padding: 1rem;
}
</style>
