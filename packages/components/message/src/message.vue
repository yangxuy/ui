<template>
    <Transition :name="ns.b('fade')" @before-leave="onClose">
        <div :class="cls" v-show="visible" :style="customStyle">
            <slot>
                <span v-html="message"></span>
            </slot>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import '../style/css'
import { useNameSpace, useZIndex } from '@yx-ui/hooks';
import { MessageProps } from './message';
import { computed, CSSProperties, onMounted, ref } from 'vue';

defineOptions({
    name: "ss-message"
})

const ns = useNameSpace("message")

const props = withDefaults(defineProps<MessageProps>(), {
    duration: 2000,
    type: 'info'
})


const cls = computed(() => [
    ns.b(),
    ns.m(props.type)
])

const visible = ref(false)

onMounted(() => {
    visible.value = true
})

setTimeout(() => {
    props.unmount?.();
    visible.value = false
}, props.duration)

const onClose = () => {
    props.onClose?.()
}

const { currentZIndex } = useZIndex()

const customStyle = computed<CSSProperties>(() => ({
    zIndex: currentZIndex.value,
}))

</script>

<style scoped></style>