<template>
    <ss-select v-model="model">
        <ss-select-option label="js" value="js" disabled></ss-select-option>
        <ss-select-option label="jave" value="jave"></ss-select-option>
        <ss-select-option label="go" value="go"></ss-select-option>
    </ss-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const model = ref("")
</script>

<style scoped></style>