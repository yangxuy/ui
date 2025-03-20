<template>
    <component :is="childrenNodes" />
</template>

<script setup lang="ts">
import "../style/css"
import { useNameSpace } from '@yx-ui/hooks';
import { computed, VNode, ref, CSSProperties, watchEffect, useSlots, h, createVNode, isVNode, VNodeArrayChildren, Fragment, Comment } from 'vue';

defineOptions({
    name: 'ss-space'
})

const props = withDefaults(defineProps<{
    direction: "horizontal" | "vertical",
    wrap: boolean,
    fill: boolean,
    spacer: string | number | VNode,
    size: number,
    alignment: string
}>(), {
    direction: "horizontal",
    size: 8,
    alignment: 'center'
})

const ns = useNameSpace('space')

const horizontalSize = ref(0)
const verticalSize = ref(0)


const cls = computed(() => [
    ns.b(),
    ns.m(props.direction)
])

const style = computed(() => {
    const wrapKls: CSSProperties = {}
    if (props.wrap || props.fill) {
        wrapKls['flex-wrap'] = "wrap"
    }
    wrapKls['align-items'] = props.alignment
    wrapKls['row-gap'] = verticalSize.value + 'px'
    wrapKls['column-gap'] = horizontalSize.value + 'px'

    return wrapKls
})

const itemStyle = computed(() => {
    const wrapKls: CSSProperties = {}
    if (props.fill) {
        wrapKls['flex-grow'] = 1
    }
    return wrapKls
})

watchEffect(() => {
    const { size, wrap, direction, fill } = props

    if ((wrap || fill) && direction == 'horizontal') {
        horizontalSize.value = verticalSize.value = size
    } else {
        if (direction == 'horizontal') {
            horizontalSize.value = size
            verticalSize.value = 0
        } else {
            verticalSize.value = size
            horizontalSize.value = 0
        }
    }
})

const slots = useSlots()

const extractChildren = (children: VNodeArrayChildren, retChildren: VNode[] = []) => {
    children.forEach((child) => {
        if (isVNode(child)) {
            if (Array.isArray(child.children)) {
                child.children.forEach(nested => {
                    if (isVNode(nested)) {
                        if (nested.type == Fragment && Array.isArray(nested.children)) {
                            extractChildren(nested.children, retChildren)
                        } else {
                            retChildren.push(createVNode('div', { class: [ns.e('item')], style: itemStyle.value }, { default: () => [nested] }))
                        }
                    }
                })
            } else {
                if (child.type != Fragment && child.type != Comment) {
                    retChildren.push(createVNode('div', { class: [ns.e('item')], style: itemStyle.value }, { default: () => [child] }))
                }
            }
        }
    })

    return retChildren
}

const childrenNodes = computed(() => {
    let children = slots.default!()

    children = extractChildren(children)

    if (props.spacer) {
        children = children.reduce<VNode[]>((pre, next, idx) => {
            const ret = [...pre, next]
            if (idx != children.length - 1) {
                ret.push(createVNode('span', {
                    style: [
                        props.direction === 'vertical' ? 'width: 100%' : null,
                    ],
                }, props.spacer))
            }
            return ret
        }, [])
    }

    return h("div", { class: cls.value, style: style.value }, children)
});
</script>

<style scoped></style>