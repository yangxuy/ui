<template>
    <ss-row :gutter="20">
        <ss-col :span="16">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="8">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
    </ss-row>
    <ss-row :gutter="20">
        <ss-col :span="8">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="8">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="4">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="4">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
    </ss-row>
    <ss-row :gutter="20">
        <ss-col :span="4">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="16">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="4">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
    </ss-row>
</template>

<style>
.ss-row {
    margin-bottom: 20px;
}

.ss-row:last-child {
    margin-bottom: 0;
}

.ss-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>