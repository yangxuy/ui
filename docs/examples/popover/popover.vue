<template>
    <ss-space gutter="12">
        <ss-popover trigger="hover" placement="bottom-start">
            <ss-button>hover active</ss-button>
            <template #content>
                this is content, this is content, this is content
            </template>
        </ss-popover>

        <ss-popover trigger="click" placement="bottom" width="100">
            <ss-button>click active</ss-button>
            <template #content>
                this is content, this is content, this is content
            </template>
        </ss-popover>

        <ss-popover trigger="focus" width="100">
            <ss-button>focus active</ss-button>
            <template #content>
                this is content, this is content, this is content
            </template>
        </ss-popover>
    </ss-space>
</template>

<script setup lang="ts">

</script>

<style scoped></style>