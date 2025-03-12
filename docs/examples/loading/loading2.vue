<template>
    <ss-space gutter="8">
        <ss-button v-loading.fullscreen.lock="fullscreenLoading" @click="onOpen">As a directive</ss-button>
        <ss-button @click="open2">As a service</ss-button>
    </ss-space>
</template>

<script setup lang="ts">
import { SSLoading } from '@yx-ui/components'
import { ref } from 'vue';

const fullscreenLoading = ref(false)

const onOpen = () => {
    fullscreenLoading.value = true
    setTimeout(() => {
        fullscreenLoading.value = false
    }, 2000)
}

const open2 = () => {
    const instance = SSLoading.service({
        lock: true,
        text: 'Loading',
        fullscreen: true
    })

    setTimeout(() => {
        instance.closed()
    }, 2000)
}
</script>

<style scoped></style>