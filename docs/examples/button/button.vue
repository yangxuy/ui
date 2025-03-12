<template>
    <div class="demo">
        <ss-button>default</ss-button>
        <ss-button type="primary">primary</ss-button>
        <ss-button type="success">success</ss-button>
        <ss-button type="error">error</ss-button>
        <ss-button type="info">info</ss-button>
    </div>

    <div class="demo">
        <ss-button plain>plain</ss-button>
        <ss-button type="primary" plain>plain</ss-button>
        <ss-button type="success" plain>plain</ss-button>
        <ss-button type="error" plain>plain</ss-button>
        <ss-button type="info" plain>plain</ss-button>
    </div>

    <div class="demo">
        <ss-button round>round</ss-button>
        <ss-button type="primary" round>round</ss-button>
        <ss-button type="success" round>round</ss-button>
        <ss-button type="error" round>round</ss-button>
        <ss-button type="info" round>round</ss-button>
    </div>

</template>

<script setup>
</script>

<style scoped lang="scss">
.demo {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
}
</style>