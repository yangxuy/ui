<template>
    <ss-button plain @click="dialogTableVisible = true">
        Open a Table nested Dialog
    </ss-button>

    <ss-dialog v-model="dialogTableVisible" fullscreen title="Shipping address" width="800">
        <div>测试</div>
    </ss-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
</script>