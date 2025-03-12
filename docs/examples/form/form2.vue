<template>
    <ss-space style="margin-bottom: 18px;">
        <ss-button @click="onChangePosition('left')">Left</ss-button>
        <ss-button @click="onChangePosition('right')">Right</ss-button>
        <ss-button @click="onChangePosition('top')">Top</ss-button>
    </ss-space>
    <ss-form :label-position="labelPosition">
        <ss-form-item label="姓名">
            <ss-input />
        </ss-form-item>
        <ss-form-item label="年龄">
            <ss-input />
        </ss-form-item>
        <ss-form-item label="兴趣爱好">
            <ss-input />
        </ss-form-item>
    </ss-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const labelPosition = ref('')

const onChangePosition = (position) => {
    labelPosition.value = position
}
</script>

<style scoped></style>