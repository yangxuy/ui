<template>
    <ss-space size="26" spacer="|">
        <div v-for="item in 3" class="card">card title</div>
    </ss-space>
</template>

<script setup lang="ts">
</script>

<style scoped>
.card {
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #f8f8f8;
    height: 100px;
    width: 100px;
    padding: 10px;
}
</style>