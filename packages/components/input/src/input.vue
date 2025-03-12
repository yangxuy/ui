<template>
    <div :class="cls" tab-index="-1">
        <slot name="prefix" v-if="$slots.prefix"></slot>
        <input :disabled="inputDisabled" ref="input" :class="ns.m('inner')" :placeholder="placeholder"
            @input="handleInput" @change="handleChange" @keydown="handleKeydown" :type="inputType" />

        <slot name="append" v-if="showAppend">
            <component :class="ns.m('icon')" v-if="defaultAppendIcon" :is="defaultAppendIcon"
                @click="onClickDefaultAppend"></component>
        </slot>
    </div>
</template>

<script setup lang="ts">
import "../style/css"
import { computed, inject, nextTick, ref, useSlots, watch } from 'vue';
import { formContextKey, formItemContextKey } from '@yx-ui/components'
import { useEventListener } from '@vueuse/core'
import { useNameSpace } from '@yx-ui/hooks';
import { InputProps } from './input';
import {
    CircleClose,
    Hide as IconHide,
    View as IconView,
} from '@element-plus/icons-vue'

defineOptions({
    name: 'ss-input'
})

const model = defineModel()

const emit = defineEmits(['input', 'change', 'clear'])

const ns = useNameSpace('input')

const inputDisabled = computed(() => props.disabled || formContext?.disabled?.value)

const cls = computed(() => [
    ns.b(),
    ns.is('disabled', inputDisabled.value)
])

const props = withDefaults(defineProps<InputProps>(), {
    placeholder: "请输入"
})

const input = ref<HTMLInputElement>()
const passwordVisible = ref(false)

const formContext = inject(formContextKey)
const formItemContext = inject(formItemContextKey)

watch(model, () => {
    setInputValue()
    formItemContext?.validate?.('change')
})

useEventListener(input, 'focus', () => { })

useEventListener(input, 'blur', () => {
    formItemContext?.validate?.('blur')
})

const setInputValue = () => {
    const _input = input.value!

    if (!model.value) {
        _input.value = ''
        return
    }

    const formatterValue = props.formatter ? props.formatter(model.value) : model.value

    if (model.value != formatterValue) {
        _input.value = formatterValue
    }
}

const handleInput = (event: Event) => {
    let { value } = event.target as HTMLInputElement

    if (props.formatter) {
        value = props.parser ? props.parser(value) : value
    }

    model.value = value

    emit('input', value)

    nextTick(setInputValue)
}

const handleChange = () => { }
const handleKeydown = () => { }

const slots = useSlots()
const showAppend = computed(() => {
    if (slots.append) {
        return true
    }

    if (props.clearable && model.value) {
        return true
    }

    if (props.showPassword) {
        return true
    }
    return false
})

const inputType = computed(() => {
    if (props.showPassword && passwordVisible.value) {
        return 'password'
    }

    return props.type ?? 'text'
})

const defaultAppendIcon = computed(() => {
    if (props.clearable && model.value) {
        return CircleClose
    }

    if (props.showPassword) {
        return passwordVisible.value ? IconHide : IconView
    }

    return undefined
})

const onClickDefaultAppend = () => {
    if (props.clearable) {
        model.value = ''
        emit('change', '')
        emit('clear')
        emit('input', '')
        nextTick(setInputValue)
        return
    } else if (props.showPassword) {
        passwordVisible.value = !passwordVisible.value
    }
}
</script>

<style scoped></style>