<template>
    <div class="demo">
        <ss-button loading>loading</ss-button>
        <ss-button loading type="primary">loading</ss-button>
        <ss-button loading type="success">loading</ss-button>
        <ss-button loading type="error">loading</ss-button>
        <ss-button loading type="info">loading</ss-button>
    </div>
    <div class="demo">
        <ss-button loading plain>loading</ss-button>
        <ss-button loading type="primary" plain>loading</ss-button>
        <ss-button loading type="success" plain>loading</ss-button>
        <ss-button loading type="error" plain>loading</ss-button>
        <ss-button loading type="info" plain>loading</ss-button>
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