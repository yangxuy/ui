<template>
    <ss-button plain @click="dialogVisible = true">
        Click to open the Dialog
    </ss-button>

    <ss-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose" :onCancel="onCancel"
        :onConfirm="onConfirm">
        <span>This is a message</span>
    </ss-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
    return true
}

const onCancel = () => {

}

const onConfirm = () => { }
</script>