<template>
    <div style="height: 400px;width: 400px;">
        <ss-list :data="sentences" resize :loadMore="loadMore">
            <template v-slot="{ row, index }">
                <div>{{ index }}</div>
                <div>{{ row }}</div>
            </template>
        </ss-list>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { generateSentences } from './makeData'

const sentences = ref<any>([])

sentences.value = generateSentences(10)

const loadMore = async () => {
    await new Promise((rs) => {
        setTimeout(() => {
            sentences.value.push(...generateSentences(10))
            rs(1)
        }, 2000)
    })
}
</script>

<style scoped></style>