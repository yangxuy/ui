<template>
    <Transition name="collapse" @before-enter="beforeEnter" @enter="onEnter" @after-enter="onAfterEnter"
        @after-leave="afterLeave" @leave="onLeave" @before-leave="onBeforeLeave">
        <slot></slot>
    </Transition>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ss-collapse'
})

const beforeEnter = (el: HTMLElement) => {
    el.style.overflow = 'hidden'
}

const onEnter = (el: HTMLElement) => {
    el.style.height = '0px'
    el.style.overflow = 'auto'

    el.style.transition = 'all 1s'
    requestAnimationFrame(() => {
        const scrollHeight = el.scrollHeight
        el.style.height = scrollHeight + 'px'
    })
}

const onAfterEnter = (el) => {
    el.style.height = 'auto'
    el.style.overflow = 'auto'
    el.style.transition = 'none'
}

const onBeforeLeave = (el) => {
    const scrollHeight = el.scrollHeight
    el.style.height = scrollHeight + 'px'
}

const onLeave = (el) => {
    el.style.transition = 'all 1s'
    requestAnimationFrame(() => {
        el.style.height = '0px'
    })
}

const afterLeave = (el) => {
    el.style.height = 'auto'
    el.style.overflow = 'auto'
    el.style.transition = 'none'
}
</script>

<style scoped>
.collapse {}
</style>