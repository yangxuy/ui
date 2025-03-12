<template>
    <footer :class="ns.b()" :style="style">
        <slot />
    </footer>
</template>

<script setup lang="ts">
import { useNameSpace } from '@yx-ui/hooks';
import { computed } from 'vue';

defineOptions({
    name: 'ss-footer'
})
const ns = useNameSpace('footer')

const props = defineProps<{
    height: number
}>()

const style = computed(() => {
    if (props.height) {
        return ns.cssVarBlock({
            height: props.height
        })
    }
    return {}
})
</script>

<style scoped></style>