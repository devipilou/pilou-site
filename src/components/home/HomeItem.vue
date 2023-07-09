<script setup lang="ts">
import { width } from '../../utils/useBreakpoints'
</script>

<template>
    <div class="item">
        <slot v-if="width > 1024" name="icon"></slot>
        <div class="details">
            <h3>
                <slot v-if="width <= 1024" name="icon" class="home-icon"></slot>
                <slot name="heading"></slot>
            </h3>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    align-items: center;
}

.details {
    flex: 1;
    margin-left: 0.5rem;
}

h3 {
    display: flex;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
}

@media (min-width: 1024px) {
    .item {
        gap: 2rem;
    }
}
</style>
