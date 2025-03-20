<template>
    <slot />
    <table>
        <thead>
            <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                <th v-for="header in headerGroup.headers" :key="header.id">
                    <TableColumnHead :render="header.column.columnDef.header" :column="header.column" />
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in table.getRowModel().rows" :key="row.id">
                <td v-for="cell in row.getVisibleCells()" :key="cell.id">
                    <TableColumnCell :cell="cell" :render="cell.column.columnDef.cell"
                        :row="cell.getContext().row.original" :column="cell.getContext().column" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import TableColumnCell from './table-column-cell.vue'
import TableColumnHead from './table-column-head.vue'

import { ITableProps } from './table'
import { useTable } from './useTable'

defineOptions({
    name: 'ss-table',
})

const props = withDefaults(defineProps<ITableProps>(), {})

const table = useTable(props)
</script>

<style scoped></style>