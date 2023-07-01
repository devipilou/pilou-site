<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import IconWrapper from './IconWrapper.vue'
</script>

<template>
    <WelcomeItem>
        <template #icon>
            <IconWrapper icon-name="about" />
        </template>
        <template #heading>About</template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error doloribus, autem cum esse natus odio?
        Soluta nihil harum necessitatibus aliquid assumenda explicabo neque aliquam quaerat iste, atque accusamus delectus.
    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <IconWrapper icon-name="projects" />
        </template>
        <template #heading>Projects</template>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis totam sit aliquam quis asperiores aspernatur
        assumenda culpa? Animi odit reiciendis, cumque, enim ducimus aut reprehenderit saepe, quasi autem inventore rerum.
    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <IconWrapper icon-name="resume" />
        </template>
        <template #heading>Résumé</template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iusto dolore a culpa provident, nisi iure fuga neque
        repellendus sint vitae molestiae tempore! Nihil eligendi expedita assumenda! Quis, voluptatibus odit.
    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <IconWrapper icon-name="contact" />
        </template>
        <template #heading>Contact</template>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum architecto, et nihil voluptas adipisci numquam
        nulla exercitationem quidem temporibus tempora magnam quia molestias iste deleniti nisi culpa enim officiis.
    </WelcomeItem>
</template>
