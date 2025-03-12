<template>
    <ss-space>
        <ss-button plain @click="onOpen('top-right')"> Top Right </ss-button>
        <ss-button plain @click="onOpen('bottom-right')"> Bottom Right </ss-button>
        <ss-button plain @click="onOpen('bottom-left')"> Bottom Left </ss-button>
        <ss-button plain @click="onOpen('top-left')"> Top Left </ss-button>
    </ss-space>
</template>

<script setup lang="ts">
import { SSNotification } from '@yx-ui/components'
import { h } from 'vue';

const onOpen = (type: any) => {
    SSNotification({
        position: type,
        title: 'Title',
        message: "This is a reminder",
    })
}
</script>

<style scoped></style>