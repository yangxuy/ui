<template>
    <ss-space>
        <ss-button plain @click="onOpen('success')"> Success </ss-button>
        <ss-button plain @click="onOpen('waring')"> Warning </ss-button>
        <ss-button plain @click="onOpen('info')"> Info </ss-button>
        <ss-button plain @click="onOpen('error')"> Error </ss-button>
    </ss-space>
</template>

<script setup lang="ts">
import { SSNotification } from '@yx-ui/components'
import { h } from 'vue';

const onOpen = (type: any) => {
    SSNotification({
        type: type,
        title: 'Title',
        message: "This is a reminder",
    })
}
</script>

<style scoped></style>