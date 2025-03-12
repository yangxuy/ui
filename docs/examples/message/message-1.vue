<template>
    <ss-space gutter="8">
        <ss-button @click="open">showMessage</ss-button>
        <ss-button @click="openVNode">openVNode</ss-button>
    </ss-space>
</template>

<script setup lang="ts">
import { SSRow, SSCol, SSMessage } from '@yx-ui/components'
import { h } from 'vue';

const open = () => {
    SSMessage({
        message: "This is a message."
    })
}

const openVNode = () => {
    SSMessage({
        message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode'),
        ]),
    })
}
</script>

<style scoped></style>