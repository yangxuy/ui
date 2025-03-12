<template>
    <ss-row>
        <ss-col :span="24">
            <div class="grid-content ep-bg-purple-dark" />
        </ss-col>
    </ss-row>
    <ss-row>
        <ss-col :span="12">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="12">
            <div class="grid-content ep-bg-purple-light" />
        </ss-col>
    </ss-row>
    <ss-row>
        <ss-col :span="8">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="8">
            <div class="grid-content ep-bg-purple-light" />
        </ss-col>
        <ss-col :span="8">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
    </ss-row>
    <ss-row>
        <ss-col :span="6">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="6">
            <div class="grid-content ep-bg-purple-light" />
        </ss-col>
        <ss-col :span="6">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="6">
            <div class="grid-content ep-bg-purple-light" />
        </ss-col>
    </ss-row>
    <ss-row>
        <ss-col :span="4">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="4">
            <div class="grid-content ep-bg-purple-light" />
        </ss-col>
        <ss-col :span="4">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="4">
            <div class="grid-content ep-bg-purple-light" />
        </ss-col>
        <ss-col :span="4">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="4">
            <div class="grid-content ep-bg-purple-light" />
        </ss-col>
    </ss-row>
</template>

<script setup lang="ts">

</script>

<style scoped>
.ss-row {
    margin-bottom: 20px;
}

.grid-content {
    border-radius: 4px;
    height: 36px;
    width: 100%;
}

.ep-bg-purple-dark {
    background-color: #d3dce6;
}

.ep-bg-purple-light {
    background-color: #e5e9f2;
}

.ep-bg-purple {
    background-color: #d3dce6;
}
</style>