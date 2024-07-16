<template>
  <div class="card-wrapper">
    <h3 v-if="props.title" class="card-title">{{ props.title }}</h3>
    <div class="card-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: ''
})
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid var(--primary) 1px;
  border-radius: 0.5rem;
  background-color: var(--color-background-soft)
}

.card-title {
  margin-bottom: 1rem;
}

.card-content {
  text-align: center;
}
</style>