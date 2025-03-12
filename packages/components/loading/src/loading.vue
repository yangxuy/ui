<template>
    <Transition :name="ns.b('fade')">
        <div :class="cls" v-show="visible" :style="[customStyle, style]">
            <svg class="circular" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>
            </svg>
            <span>{{ text }}</span>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import "../style/css"
import { useNameSpace, useZIndex } from '@yx-ui/hooks';
import { LoadingProps } from './loading';
import { computed, CSSProperties, onMounted, ref } from 'vue';

defineOptions({
    name: 'ss-loading'
})

const visible = ref(false)

const props = withDefaults(defineProps<LoadingProps>(), {
})

const ns = useNameSpace('loading')

const cls = computed(() => [
    ns.b(),
    ns.m('mask'),
])

const style = computed(() => {
    if (props.fullscreen) {
        return {
            position: 'fixed'
        }
    }

    return {
        position: 'absolute'
    }
})
const { currentZIndex } = useZIndex()

const customStyle = computed<CSSProperties>(() => {
    return {
        zIndex: currentZIndex.value
    }
})

onMounted(() => {
    visible.value = true
})
</script>

<style scoped></style>