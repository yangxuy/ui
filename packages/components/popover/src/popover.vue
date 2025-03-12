<template>
    <SSTooltip v-bind="props" :overlay-style="overlayStyle">
        <template #default>
            <slot></slot>
        </template>
        <template #content>
            <slot name="content">{{ content }}</slot>
        </template>
    </SSTooltip>
</template>

<script setup lang="ts">
import { SSTooltip } from '@yx-ui/components'
import { PopoverProps } from './popover';
import { computed } from 'vue';

defineOptions({
    name: 'ss-popover'
})

const props = withDefaults(defineProps<PopoverProps>(), {
    placement: 'bottom-start',
    content: '',
    trigger: 'click'
})

const overlayStyle = computed(() => {
    if (props.width) {
        return {
            width: props.width + 'px'
        }
    }
    return undefined
})
</script>

<style scoped></style>