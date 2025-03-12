<template>
    <div ref="floating" :style="style">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, unref } from 'vue';
import { tooltipKey, TooltipProps } from './tooltip';
import { useFloating, autoUpdate, offset, shift, flip } from '@floating-ui/vue';
import { useZIndex } from '@yx-ui/hooks';

const { reference, floating, onClose } = inject(tooltipKey)!

const props = defineProps<TooltipProps>()

const { floatingStyles } = useFloating(reference, floating, {
    placement: props.placement,
    middleware: [offset(props.offset), flip(), shift()],
    whileElementsMounted: autoUpdate
});

const clickEvent = (event: Event) => {
    const fEl = unref(floating)
    const rEl = unref(reference)
    const targetElemnt = event.target as HTMLElement
    if (!fEl?.contains(targetElemnt) && !rEl?.contains(targetElemnt)) {
        onClose()
    }
}

const zIndex = useZIndex()

const style = computed<any>(() => [
    floatingStyles.value,
    { zIndex: zIndex.currentZIndex.value },
    props.overlayStyle
])

onMounted(() => {
    window.addEventListener('click', clickEvent)
})

onBeforeUnmount(() => {
    window.removeEventListener('click', clickEvent)
})
</script>

<style scoped></style>