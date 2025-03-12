<template>
    <ss-row :gutter="20">
        <ss-col :span="6">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="6" :offset="6">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
    </ss-row>
    <ss-row :gutter="20">
        <ss-col :span="6" :offset="6">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
        <ss-col :span="6" :offset="6">
            <div class="grid-content ep-bg-purple" />
        </ss-col>
    </ss-row>
    <ss-row :gutter="20">
        <ss-col :span="12" :offset="6">
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