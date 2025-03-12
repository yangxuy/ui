<template>
    <Transition :name="ns.b('fade')">
        <div :class="cls" :style="style" v-show="visible">
            <header :class="ns.m('header')">
                <slot name="header">
                    <span :class="[ns.m('header-title'), ns.m(props.type)]">{{ title }}</span>
                    <CloseIcon @click="onClose" />
                </slot>
            </header>
            <div :class="ns.m('message')">
                <slot>
                    <span v-html="message"></span>
                </slot>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import '../style/css'
import { useNameSpace, useZIndex } from '@yx-ui/hooks';
import { computed, onMounted, ref } from 'vue';
import { NotificationProps } from './notification';
import CloseIcon from '../../icon/close.vue'

const { currentZIndex } = useZIndex()

const props = withDefaults(defineProps<NotificationProps>(), {
    offset: 16,
    appendTo: 'body',
    position: 'top-right',
    duration: 2000
})

console.log("ppp", props)
const ns = useNameSpace('notification')

const horizontalClass = computed(() => props.position.endsWith('right') ? 'right' : 'left')
const verticalClass = computed(() => props.position.startsWith('top') ? 'top' : 'bottom')

const cls = computed(() => [
    ns.b(),
    horizontalClass.value,
])

const style = computed(() => {
    return {
        [horizontalClass.value]: props.offset + 'px',
        [verticalClass.value]: props.offset + 'px',
        zIndex: currentZIndex.value
    }
})

const visible = ref(false)

onMounted(() => {
    visible.value = true
})

const onClose = () => {
    props.unmount?.();
    visible.value = false
}

setTimeout(() => {
    onClose()
}, props.duration)


</script>

<style scoped></style>