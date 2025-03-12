<template>
    <ss-space size="20">
        <ss-button type="primary" style="margin-left: 16px" @click="open('rtl')">
            rtl
        </ss-button>
    </ss-space>

    <ss-drawer v-model="drawer" :direction="direction">
        <span>Hi, there!</span>
    </ss-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawer = ref(false)
const direction = ref('rtl')

const open = (d) => {
    direction.value = d
    drawer.value = true
}
</script>