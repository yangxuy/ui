<template>
    <ss-space gutter="12">
        <ss-popover trigger="hover" placement="bottom-start">
            <ss-button>hover active</ss-button>
            <template #content>
                <div>
                    this is content, <span style="color: aqua;">this is content</span>, this is content
                </div>
            </template>
        </ss-popover>

    </ss-space>
</template>

<script setup lang="ts">

</script>

<style scoped></style>