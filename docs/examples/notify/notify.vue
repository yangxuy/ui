<template>

    <ss-space>
        <ss-button @click="onOpen">open</ss-button>
    </ss-space>
</template>

<script setup lang="ts">
import { SSNotification } from '@yx-ui/components'
import { h } from 'vue';

const onOpen = () => {
    SSNotification({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder'),
    })
}
</script>

<style scoped></style>