<template>
    <div ref="reference" :tabindex="isFocus ? -1 : undefined">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, watch } from 'vue';
import { tooltipKey, TooltipProps } from './tooltip';
const { reference, toggle, onClose, onOpen } = inject(tooltipKey)!
const props = defineProps<TooltipProps>()

const composeEventHandler = (handler?: Function, checkForDefaultPrevented = true) => {
    return () => {
        if (checkForDefaultPrevented) {
            handler?.()
        }
    }
}

const events = {
    blur: composeEventHandler(onClose, props.trigger == 'focus'),
    click: composeEventHandler(toggle, props.trigger == 'click'),
    focusin: composeEventHandler(onOpen, props.trigger == 'focus'),
    mousedown: composeEventHandler(onOpen, props.trigger !== "click" && props.trigger === "hover"),
    mouseleave: composeEventHandler(onClose, props.trigger == 'hover'),
    mouseenter: composeEventHandler(onOpen, props.trigger == 'hover'),
}

const setEvents = (
    el: HTMLElement | null | undefined,
    events: Record<string, any>,
    type: 'addEventListener' | 'removeEventListener'
) => {
    if (el) {
        Object.entries(events).forEach(([name, handler]) => {
            el[type](name, handler)
        })
    }
}

const isFocus = computed(() => props.trigger == 'focus')

watch(reference, (el, pr) => {
    setEvents(el, events, 'addEventListener')
    setEvents(pr, events, 'removeEventListener')
})

onBeforeUnmount(() => {
    setEvents(reference.value, events, 'removeEventListener')
})
</script>

<style scoped></style>