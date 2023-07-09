import { computed, onMounted, onUnmounted, ref } from 'vue'

const windowWidth = ref(window.innerWidth)

const onWidthChange = () => (windowWidth.value = window.innerWidth)
onMounted(() => window.addEventListener('resize', onWidthChange))
onUnmounted(() => window.removeEventListener('resize', onWidthChange))

export const type = computed(() => {
  if (windowWidth.value < 550) return 'xs'
  if (windowWidth.value >= 550 && windowWidth.value < 1024) return 'md'
  else return 'lg' // Fires when windowWidth.value >= 1024
})

export const width = computed(() => windowWidth.value)
