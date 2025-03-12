<template>
    <li :class="cls" @click.stop="onSelect">
        <slot>
            {{ label }}
        </slot>
    </li>
</template>

<script setup lang="ts">
import { useNameSpace } from '@yx-ui/hooks';
import { computed, inject, onMounted, onUnmounted } from 'vue';
import { OptionProps, selectContextKey } from './select';

defineOptions({
    name: 'ss-select-option'
})

const ns = useNameSpace('select-option')

const props = defineProps<OptionProps>()

const { handleOptionSelect, addOption, model, disabled } = inject(selectContextKey, {} as any)

const optionDisabled = computed(() => disabled.value || props.disabled)

const onSelect = () => {
    if (optionDisabled.value) return
    handleOptionSelect(props)
}

const cls = computed(() => {
    const selectedModel = Array.isArray(model.value) ? model.value : [model.value]
    return [
        ns.b(),
        ns.is('select', selectedModel.includes(props.value)),
        ns.is('disabled', optionDisabled.value)
    ]
})

onMounted(() => {
    addOption(props)
})

onUnmounted(() => {
    // delOption(props)
})
</script>

<style scoped></style>