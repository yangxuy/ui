<template>
    <ss-space gutter="12">
        <ss-popover trigger="hover" placement="bottom">
            <ss-button>bottom</ss-button>
            <template #content>
                this is content, this is content, this is content
            </template>
        </ss-popover>

        <ss-popover trigger="hover" placement="right">
            <ss-button>right</ss-button>
            <template #content>
                this is content, this is content, this is content
            </template>
        </ss-popover>

        <ss-popover trigger="hover" placement="left">
            <ss-button>left</ss-button>
            <template #content>
                this is content, this is content, this is content
            </template>
        </ss-popover>

        <ss-popover trigger="hover" placement="top">
            <ss-button>top</ss-button>
            <template #content>
                this is content, this is content, this is content
            </template>
        </ss-popover>
    </ss-space>
</template>

<script setup lang="ts">

</script>

<style scoped></style>