<template>
    <i class="ss-icon" :style="style">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path fill="currentColor"
                d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z">
            </path>
        </svg>
    </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { addUnit } from '../utils/utils';

const props = withDefaults(defineProps<{
    size?: number | string
}>(), {
    size: '1em'
})

const style = computed(() => {
    const s = addUnit(props.size)
    return {
        width: s,
        height: s
    }
})
</script>

<style scoped>
.ss-icon {
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    fill: currentColor;
    cursor: pointer;
}
</style>