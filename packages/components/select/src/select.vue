<template>
    <SSTooltip trigger='click' placement="bottom-start" ref="tooltipRef" v-model:visible="expanded"
        :disabled="selectDisabled">
        <div ref="wrapper" :class="cls">
            <div :class="ns.m('tag')">
                <span :class="ns.m('tag-item')" v-for="item in selectedOption">{{ item.label }}</span>
            </div>
            <input v-model="inputValue" :class="ns.m('input')" :readonly="readonly" :placeholder="placeholder"
                :disabled="selectDisabled"></input>
            <template v-if="clearable && model.length">
                <component :class="ns.m('icon')" @click="onClear" :is="CircleClose"></component>
            </template>
            <template v-else>
                <component :class="iconCls" :is="ArrowDown"></component>
            </template>
        </div>
        <template #content>
            <ul :class="ns.m('content')" :style="style">
                <template v-if="!inputValue">
                    <slot />
                </template>
                <template v-else>
                    <SSSelectOption v-for="item in filterOptions" v-bind="item"></SSSelectOption>
                </template>
            </ul>
        </template>
    </SSTooltip>
</template>

<script setup lang="ts">
import "../style/css"
import { SSTooltip, SSSelectOption, formContextKey, formItemContextKey } from '@yx-ui/components'
import { useNameSpace } from '@yx-ui/hooks';
import { computed, inject, provide, ref, toRefs, watch } from 'vue';
import { ArrowDown, CircleClose } from '@element-plus/icons-vue'
import { OptionProps, selectContextKey, SelectProps } from "./select";

defineOptions({
    name: 'ss-select'
})

const props = withDefaults(defineProps<SelectProps>(), {
    placeholder: "请输入"
})

const ns = useNameSpace('select')

const expanded = ref<boolean>(false)

const wrapper = ref<HTMLDivElement>()

const model = defineModel<any>({
    default: ''
})

const selectOptions = ref<Array<OptionProps>>([])

const inputValue = ref("")

const tooltipRef = ref<{
    onClose: Function,
    onOpen: Function,
}>()

const cls = computed(() => [
    ns.b(),
    ns.is('disabled', selectDisabled.value)
])

const wrapperWidth = computed(() => {
    return wrapper.value?.getBoundingClientRect().width
})

const style = computed(() => {
    return {
        width: wrapperWidth.value + 'px',
    }
})

const readonly = computed(() => !props.filterable || selectDisabled.value)

const handleOptionSelect = (option: OptionProps) => {
    if (props.multiple) {
        const index = model.value.findIndex((v: any) => v == option.value)
        if (index > -1) {
            model.value.splice(index, 1)
        } else {
            model.value.push(option.value)
        }
    } else {
        if (model.value == option.value) {
            model.value = ""
        } else {
            model.value = option.value
        }
        expanded.value = !expanded.value
    }

}

const iconCls = computed(() => {
    return [
        ns.m('icon'),
        ns.is('reverse', expanded.value)
    ]
})

const addOption = (option: OptionProps) => {
    const index = selectOptions.value.findIndex(el => el.value == option.value)
    if (index == -1) {
        selectOptions.value.push(option)
    }
}

const delOption = (option: OptionProps) => {
    selectOptions.value.splice(selectOptions.value.findIndex(val => val == option.value), 1)
}

const selectedOption = computed(() => {
    if (props.multiple) {
        return selectOptions.value.filter(item => model.value.findIndex(((v: any) => v == item.value)) > -1)
    } else {
        return selectOptions.value.filter(item => item.value == model.value)
    }
})

const onClear = () => {
    if (props.multiple) {
        model.value = []
    } else {
        model.value = ""
    }
}

const filterOptions = computed(() => {
    if (inputValue.value) {
        return selectOptions.value.filter(el => el.label!.indexOf(inputValue.value) > -1)
    }
    return []
})

const placeholder = computed(() => model.value.length ? '' : props.placeholder)

const formContext = inject(formContextKey)
const formItemContext = inject(formItemContextKey)

const selectDisabled = computed(() => props.disabled || formContext?.disabled?.value)

watch(model, () => {
    formItemContext?.validate?.('change')
})


provide(selectContextKey, {
    handleOptionSelect,
    addOption,
    delOption,
    ...toRefs(props),
    model,
})

</script>

<style scoped></style>