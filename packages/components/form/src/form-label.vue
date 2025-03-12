<template>
    <div ref="el" class="ss-form-item--label" :style="style">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { formContextKey, formItemContextKey } from './form';
import { useResizeObserver } from '@vueuse/core'
import { computed, inject, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

defineOptions({
    name: 'form-label'
})

const props = defineProps<{
    isAutoWidth: boolean,
}>()

const el = ref<HTMLDivElement>()
const computedWidth = ref(0)
const formContext = inject(formContextKey)
const formItemContext = inject(formItemContextKey)

const getLabelWidth = () => {
    if (el.value) {
        const width = window.getComputedStyle(el.value).width
        return Math.ceil(Number.parseFloat(width))
    } else {
        return 0
    }
}

const updateLabelWidth = (action: 'update' | 'remove' = 'update') => {
    nextTick(() => {
        if (props.isAutoWidth) {
            if (action === 'update') {
                computedWidth.value = getLabelWidth()
            } else if (action === 'remove') {
                formContext?.deregisterLabelWidth(computedWidth.value)
            }
        }
    })
}

const style = computed(() => {
    if (formContext?.labelPosition?.value == 'top') {
        return {}
    }

    const autoLabelWidth = formContext?.autoLabelWidth.value!

    const marginWidth = Math.max(
        0,
        Number.parseInt(autoLabelWidth, 10) - computedWidth.value
    )

    const labelPosition =
        formItemContext?.labelPosition?.value || formContext?.labelPosition?.value

    const marginPosition =
        labelPosition === 'left' ? 'marginRight' : 'marginLeft'

    return {
        [marginPosition]: marginWidth + 'px',
        paddingRight: '12px'
    }
})

watch(computedWidth, (val, oldVal) => {
    if (props.isAutoWidth) {
        formContext?.registerLabelWidth(val, oldVal)
    }
})

onMounted(() => {
    updateLabelWidth('update')
})

onBeforeUnmount(() => {
    updateLabelWidth('remove')
})

useResizeObserver(
    computed(
        () => el.value
    ),
    () => updateLabelWidth('update')
)

</script>

<style scoped></style>