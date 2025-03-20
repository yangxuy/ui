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

    setup(props) {
        const tableContext = inject(tableContextKey)
        return () => {
            let headRender = props.render
            const children = []
            if (typeof headRender === 'function') {
                children.push(headRender())
            } else {
                children.push(headRender)
            }

            if (props.column.columnDef.enableSorting) {
                children.push(h(sortIcon, {
                    desc: computed(() => {
                        return tableContext?.table.getState().sorting.find((s) => s.id === props.column.id)?.desc
                    }),
                    onClick: () => {
                        tableContext?.table.setSorting((old) => {
                            const existingSort = old.find((s) => s.id === props.column.id);
                            if (!existingSort) {
                                return [{ id: props.column.id, desc: false }]; // 升序
                            } else if (!existingSort.desc) {
                                return [{ id: props.column.id, desc: true }]; // 降序
                            } else {
                                return []; // 取消排序
                            }
                        });
                    }
                }))
            }

            return h('div', children);
        }
    },
});
</script>

<style lang="scss">
.ss-table-sort-icon {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    height: 14px;
    width: 24px;
    vertical-align: middle;
    cursor: pointer;
    position: relative;
    overflow: initial;

    .sort-icon {
        width: 0px;
        height: 0px;
        position: absolute;
        left: 7px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent;
        border-image: initial;
    }

    .asc {
        top: -5px;
        border-bottom-color: #ccc;
    }


    .asc-active {
        border-bottom-color: red;
    }

    .des {
        bottom: -3px;
        border-top-color: #ccc
    }

    .des-active {
        border-top-color: red
    }

    .icon-active {
        border-top-color: red;
    }

}
</style>