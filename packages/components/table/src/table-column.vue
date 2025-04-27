<script setup lang="ts">
import { inject, onMounted, useSlots } from 'vue'
import { tableContextKey, type TableColumnProps } from './table'

defineOptions({
    name: 'ss-table-column',
})

const props = withDefaults(defineProps<TableColumnProps>(), {
    realWidth: 0,
    minWidth: 80,
})

const tableContext = inject(tableContextKey)

const slot = useSlots()

onMounted(() => {
    tableContext?.addColumn({
        ...props,
        default: slot.default,
    })
})
</script>
