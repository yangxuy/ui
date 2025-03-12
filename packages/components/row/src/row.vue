<template>
    <component :class="cls" :is="tag" :style="style">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import "../style/index"
import { useNameSpace } from "@yx-ui/hooks";
import { RowProps } from './row';
import { computed, CSSProperties, provide } from "vue";
import { rowContextKey } from "../../constants";

defineOptions({
    name: "ss-row"
})

const props = withDefaults(defineProps<RowProps>(), {
    tag: "div",
    justify: "start"
})

const ns = useNameSpace("row")

const cls = computed(() => [
    ns.b(),
    ns.is(`justify-${props.justify}`, props.justify !== 'start'),
    ns.is(`align-${props.align}`, !!props.align),
])

const gutter = computed(() => props.gutter)

provide(rowContextKey, {
    gutter
})

const style = computed(() => {
    const styles: CSSProperties = {}

    if (props.gutter) {
        styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`
    }

    return styles
})
</script>

<style scoped></style>