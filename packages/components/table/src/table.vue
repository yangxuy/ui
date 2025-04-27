<template>
    <div :class="cls" :style="style">
        <slot />
        <table :class="ns.m('box')" :style="{ width: bodyWidth + 'px' }">
            <colgroup>
                <template v-for="column in table.getAllColumns()">
                    <col v-if="column.getIsVisible()" :width="column.getSize()" />
                </template>
            </colgroup>
            <thead :class="ns.m('head')">
                <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                    <th v-for="header in headerGroup.headers" :key="header.id"
                        :style="(header.column.columnDef.meta as any)?.style" :class="ns.m('head-th')">
                        <TableColumnHead :render="header.column.columnDef.header" :column="header.column" />
                    </th>
                </tr>
            </thead>
            <tbody :class="ns.m('body')">
                <tr v-for="row in table.getRowModel().rows" :key="row.id">
                    <td v-for="cell in row.getVisibleCells()" :key="cell.id"
                        :style="(cell.column.columnDef.meta as any)?.style" :class="ns.m('body-td')">
                        <TableColumnCell :cell="cell" :render="cell.column.columnDef.cell" :row="cell.row"
                            :column="cell.column" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import TableColumnCell from './table-column-cell.vue'
import TableColumnHead from './table-column-head.vue'
import { useNameSpace } from '@yx-ui/hooks';
import { computed, defineEmits, defineExpose, defineProps, withDefaults } from 'vue'

import { ITableProps } from './table'
import { useTable } from './useTable'
import "../style/css"

defineOptions({
    name: 'ss-table',
})

const ns = useNameSpace('table')

const props = withDefaults(defineProps<ITableProps>(), {})

const emit = defineEmits(["change-select"]);

const { table, bodyWidth, style } = useTable(props, emit)

const cls = computed(() => [
    ns.b(),
])

defineExpose({
    table,
    // 是否可见
    toggleColumn(columnId: string) {
        table.getColumn(columnId)?.toggleVisibility();
    },
    // 过滤数据
    filterColumn(columnId: string, filter: string) {
        table.getColumn(columnId)?.setFilterValue(filter);
    },
    // 排序
    sortColumn(columnId: string) {
        table.getColumn(columnId)?.toggleSorting();
    },
})
</script>