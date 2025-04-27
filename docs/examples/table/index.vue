<template>
    <ss-table :data="data" ref="table" @change-select="onChangeSelect">
        <ss-table-column prop="visits" label="Visits"></ss-table-column>
        <ss-table-column prop="status" label="status"></ss-table-column>
        <ss-table-column prop="progress" label="progress"></ss-table-column>

    </ss-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { makeData } from './makeData'
const data = ref(makeData(10))

const table = ref()

const onToggleColumn = () => {
    table.value.toggleColumn('status')
}

// ✅ 自定义排序函数（按字符串长度排序）
const customSortByLength = (rowA: string, rowB: string) => {
    return rowA.length - rowB.length;
};

const onChangeSelect = (selection: any) => {
    console.log(selection)
}

const onInput = (e: any) => {
    table.value.filterColumn('lastName', e)
}

const formateData = (time: Date) => {
    return time.getTime()
}
</script>

<style lang="scss" scoped></style>