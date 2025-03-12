<template>
    <ss-space gutter="8">
        <ss-button @click="open('success')">success</ss-button>
        <ss-button @click="open('warning')">Warning</ss-button>
        <ss-button @click="open('info')">info</ss-button>
        <ss-button @click="open('error')">Error</ss-button>
    </ss-space>
</template>

<script setup lang="ts">
import { SSRow, SSCol, SSMessage } from '@yx-ui/components'

const open = (type) => {
    SSMessage[type]({
        message: type
    })
}
</script>

<style scoped></style>