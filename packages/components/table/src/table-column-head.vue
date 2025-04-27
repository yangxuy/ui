<script lang="ts">
import type { PropType, Ref } from 'vue'
import type { Column } from '@tanstack/vue-table'

import { defineComponent, h, inject, computed } from "vue";
import { tableContextKey } from "./table";

const sortIcon = defineComponent({
    props: {
        desc: { type: Object as PropType<Ref>, default: false },
    },
    setup(props) {
        return () => {
            return h('span', {
                class: 'ss-table-sort-icon',
            }, [
                h('i', { class: ['sort-icon', 'asc', props.desc.value === false ? 'asc-active' : ''] }),
                h('i', { class: ['sort-icon', 'des', props.desc.value === true ? 'des-active' : ''] }),
            ])
        }
    }
})

export default defineComponent({
    props: {
        render: { type: Object as any, default: () => { } },
        column: { type: Object as PropType<Column<any, any>>, default: () => { } },
    },

    setup({ render, column }) {
        const tableContext = inject(tableContextKey)


        return () => {
            let headRender = render
            const children = []
            if (typeof headRender === 'function') {
                children.push(headRender())
            } else {
                children.push(headRender)
            }

            if (column.columnDef.enableSorting) {
                children.push(h(sortIcon, {
                    desc: computed(() => {
                        return tableContext?.table.getState().sorting.find((s) => s.id === column.id)?.desc
                    }),
                    onClick: () => {
                        column.toggleSorting()
                    }
                }))
            }

            if (column.id === 'selection') {
                children.push(h('input', {
                    type: 'checkbox',
                    checked: tableContext?.table.getIsAllRowsSelected(),
                    indeterminate: tableContext?.table.getIsSomeRowsSelected(),
                    onChange: () => {
                        tableContext?.table.toggleAllRowsSelected()
                    }
                }))
            }

            return h('div', { class: 'ss-table--head-cell' }, children);
        }
    },
});
</script>

<style lang="scss">
input[type="checkbox"] {
    accent-color: #007bff;
}
</style>