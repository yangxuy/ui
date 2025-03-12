<template>
    <div :style="styles" :class="cls">
        <slot />
    </div>
</template>

<script setup lang="ts">
import "../style/css"
import { useNameSpace } from '@yx-ui/hooks';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    mask: boolean,
    overlayClass: string,
    zIndex: number,
    closeOnClickModal: boolean
}>(), {
    mask: true
})

defineOptions({
    name: "ss-overlay"
})

const styles = computed(() => {
    return {
        zIndex: props.zIndex,
        backgroundColor: props.mask ? 'rgba(0, 0, 0, 0.5)' : 'transparent'
    }
})

const ns = useNameSpace('overlay')

const cls = computed(() => [
    ns.b(),
    props.overlayClass
])
</script>

<style scoped></style>