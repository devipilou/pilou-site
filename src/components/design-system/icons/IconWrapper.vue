<script setup lang="ts">
import { computed } from 'vue'
import DocumentationIcon from './IconDocumentation.vue'
import ToolingIcon from './IconTooling.vue'
import CommunityIcon from './IconCommunity.vue'
import SupportIcon from './IconSupport.vue'
import router from '@/router'

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

function onIconClick() {
    router.push({ path: `/${props.iconName}` })
}
</script>
<template>
    <i class="icon" @click="onIconClick">
        <component :is="componentName"></component>
    </i>
</template>

<style scoped>
i {
    display: flex;
    place-items: center;
    place-content: center;
    width: 32px;
    height: 32px;

}

@media (min-width : 1024px) {
    .icon {
        border: 1px solid var(--color-border);
        background: transparent;
        border-radius: 0.5rem;
        width: 50px;
        height: 50px;
    }
}
</style>