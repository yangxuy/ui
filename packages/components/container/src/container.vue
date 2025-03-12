<template>
    <section :class="cls">
        <slot />
    </section>
</template>

<script setup lang="ts">
import "../style/css"
import { useNameSpace } from '@yx-ui/hooks';
import { computed } from 'vue';

defineOptions({
    name: "ss-container"
})

const props = withDefaults(defineProps<{
    direction: string
}>(), {
    direction: 'vertical'
})

const ns = useNameSpace('container')

const cls = computed(() => [
    ns.b(),
    ns.is('vertical', props.direction === 'vertical')
])
</script>

<style scoped></style>