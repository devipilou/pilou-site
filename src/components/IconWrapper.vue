<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

interface Props {
    iconName: '' | 'about' | 'projects' | 'resume' | 'contact'
    isClickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    iconName: '',
    isClickable: false,
})

const componentName = computed(() => {
    let component: any;
    switch (props.iconName) {
        case 'about':
            component = DocumentationIcon
            break
        case 'projects':
            component = ToolingIcon
            break
        case 'resume':
            component = CommunityIcon
            break
        case 'contact':
            component = SupportIcon
            break
    };

    return component;
})
</script>
<template>
    <RouterLink :to="`/${iconName}`">
        <component :is="componentName"></component>
    </RouterLink>
</template>