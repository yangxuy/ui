<template>
    <TooltipTrigger v-bind="props">
        <slot />
    </TooltipTrigger>
    <Transition name="fade">
        <template v-if="destroyOnClose">
            <TooltipContent v-if="visible" v-bind="props">
                <slot name="content">
                    {{ content }}
                </slot>
            </TooltipContent>
        </template>
        <template v-else>
            <TooltipContent v-show="visible" v-bind="props">
                <slot name="content">
                    {{ content }}
                </slot>
            </TooltipContent>
        </template>
    </Transition>
</template>

<script setup lang="ts">
import "../style/css"
import { provide, ref } from 'vue'
import TooltipTrigger from './trigger.vue'
import TooltipContent from './content.vue'
import { tooltipKey, TooltipProps } from './tooltip'
import { useNameSpace } from '@yx-ui/hooks';

defineOptions({
    name: 'ss-tooltip'
})

const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'bottom',
    trigger: 'hover',
    offset: 4,
    destroyOnClose: false
})

const visible = defineModel('visible')

const reference = ref(null);
const floating = ref(null);

const ns = useNameSpace("tooltip")

const onClose = () => {
    visible.value = false
}

const onOpen = () => {
    if (!props.disabled) {
        visible.value = true
    }
}

const toggle = () => {
    if (!props.disabled) {
        visible.value = !visible.value
    }
}

provide(tooltipKey, {
    ns,
    reference,
    floating,
    onClose,
    onOpen,
    toggle,
})

defineExpose({
    onClose,
    onOpen
})
</script>

<style lang="scss" scoped></style>