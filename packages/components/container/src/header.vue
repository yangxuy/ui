<template>
    <header :class="ns.b()" :style="style">
        <slot />
    </header>
</template>

<script setup lang="ts">
import { useNameSpace } from '@yx-ui/hooks';
import { computed } from 'vue';

defineOptions({
    name: "ss-header"
})

const props = withDefaults(defineProps<{
    height: string
}>(), {
    height: "60px"
})

const ns = useNameSpace("header")

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