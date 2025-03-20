<script setup lang="ts">
import { inject, onMounted, useSlots, toRefs } from 'vue'
import { tableContextKey, type TableColumnProps } from './table'

defineOptions({
    name: 'ss-table-column',
})

const props = withDefaults(defineProps<TableColumnProps>(), {})

const tableContext = inject(tableContextKey)

const slot = useSlots()

onMounted(() => {
    tableContext?.addColumn({
        ...toRefs(props),
        default: slot.default,
    })
})
</script>
