<template>
    <component :is="tag" :class="colKls" :style="style">
        <slot />
    </component>
</template>

<script setup lang="ts">
import "../style/css"
import { computed, CSSProperties, inject } from 'vue';
import { ColProps } from './col';
import { rowContextKey } from '../../constants';
import { useNameSpace } from '@yx-ui/hooks';
import { isNumber } from '../../utils/utils';

defineOptions({
    name: "ss-col"
})

const props = withDefaults(defineProps<ColProps>(), {
    tag: "div",
    span: 24,
    offset: 0
})

const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) })

const style = computed(() => {
    const styles: CSSProperties = {}
    if (gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`
    }
    return styles
})

const ns = useNameSpace('col')

const colKls = computed(() => {
    const classes: string[] = []
    const pos = ['span', 'offset'] as const

    pos.forEach((prop) => {
        const size = props[prop]
        if (isNumber(size)) {
            if (prop === 'span') classes.push(ns.m(`${props[prop]}`))
            else if (size > 0) classes.push(ns.m(`${prop}-${props[prop]}`))
        }
    })

    if (gutter.value) {
        classes.push(ns.is('guttered'))
    }

    return [ns.b(), classes]
})
</script>

<style scoped></style>