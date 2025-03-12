<template>
    <div class="demo">
        <ss-button disabled>disabled</ss-button>
        <ss-button disabled type="primary">disabled</ss-button>
        <ss-button disabled type="success">disabled</ss-button>
        <ss-button disabled type="error">disabled</ss-button>
        <ss-button disabled type="info">disabled</ss-button>
    </div>
    <div class="demo">
        <ss-button disabled plain>disabled</ss-button>
        <ss-button disabled type="primary" plain>disabled</ss-button>
        <ss-button disabled type="success" plain>disabled</ss-button>
        <ss-button disabled type="error" plain>disabled</ss-button>
        <ss-button disabled type="info" plain>disabled</ss-button>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.demo {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
}
</style>